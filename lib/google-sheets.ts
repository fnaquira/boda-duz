import { google } from 'googleapis';

/**
 * Inicializa el cliente de Google Sheets con las credenciales de la Service Account
 */
export function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
  } catch (error) {
    console.error('Error al inicializar Google Sheets client:', error);
    throw new Error('No se pudo inicializar el cliente de Google Sheets');
  }
}

/**
 * Agrega una fila a la hoja de Google Sheets
 */
export async function appendRowToSheet(values: any[][]) {
  try {
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'Confirmaciones';

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID no está configurado en las variables de entorno');
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:G`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log(`✅ Fila(s) agregada(s) exitosamente. Actualización: ${response.data.updates?.updatedCells} celdas`);
    return response.data;
  } catch (error: any) {
    console.error('❌ Error al agregar fila a Google Sheets:', error);
    
    // Mensajes de error más descriptivos
    if (error.code === 404) {
      throw new Error('Hoja de cálculo no encontrada. Verifica el GOOGLE_SHEET_ID');
    } else if (error.code === 403) {
      throw new Error('Permiso denegado. Asegúrate de compartir la hoja con el email de la Service Account');
    } else if (error.message?.includes('private_key')) {
      throw new Error('Error en la clave privada. Verifica GOOGLE_PRIVATE_KEY en las variables de entorno');
    }
    
    throw error;
  }
}

/**
 * Valida que todas las variables de entorno necesarias estén configuradas
 */
export function validateGoogleSheetsConfig() {
  const requiredEnvVars = [
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_PRIVATE_KEY',
    'GOOGLE_SHEET_ID',
  ];

  const missing = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missing.length > 0) {
    throw new Error(
      `Faltan las siguientes variables de entorno: ${missing.join(', ')}. ` +
      'Consulta GOOGLE_SHEETS_SETUP.md para más información.'
    );
  }

  return true;
}
