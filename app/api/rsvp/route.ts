import { NextResponse } from "next/server";
import { z } from "zod";
import { appendRowToSheet, validateGoogleSheetsConfig } from "@/lib/google-sheets";

// Esquema de validación para los datos del formulario
const AdultSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  allergies: z.string().optional(),
});

const RSVPSchema = z.object({
  willAttend: z.enum(["yes", "no"], {
    required_error: "Debes indicar si asistirás",
  }),
  numberOfAdults: z.number().min(1).max(6),
  adults: z.array(AdultSchema).min(1),
  needsBus: z.enum(["yes", "no"]).optional(),
  songRequest: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // Validar configuración de Google Sheets
    try {
      validateGoogleSheetsConfig();
    } catch (configError: any) {
      console.error("❌ Error de configuración:", configError.message);
      return NextResponse.json(
        { 
          error: "Error de configuración del servidor",
          details: configError.message 
        },
        { status: 500 }
      );
    }

    // Parsear y validar el cuerpo de la solicitud
    const body = await request.json();
    
    let validatedData;
    try {
      validatedData = RSVPSchema.parse(body);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { 
            error: "Datos inválidos",
            details: validationError.errors 
          },
          { status: 400 }
        );
      }
      throw validationError;
    }

    // Preparar filas para Google Sheets
    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Argentina/Buenos_Aires',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const rows: any[][] = [];

    // Crear una fila por cada adulto
    validatedData.adults.forEach((adult) => {
      rows.push([
        timestamp,                                    // Fecha y Hora
        adult.name,                                   // Nombre Completo
        adult.allergies || "Ninguna",                 // Alergias/Intolerancias
        validatedData.willAttend === "yes" ? "Sí" : "No", // Asiste
        validatedData.needsBus === "yes" ? "Sí" : validatedData.needsBus === "no" ? "No" : "No especificado", // Necesita Autobús
        validatedData.songRequest || "Sin solicitud", // Canción Solicitada
        validatedData.numberOfAdults,                 // Total Adultos
      ]);
    });

    // Agregar filas a Google Sheets
    await appendRowToSheet(rows);

    console.log(`✅ Confirmación registrada exitosamente para ${validatedData.adults.length} adulto(s)`);

    // Respuesta exitosa
    return NextResponse.json(
      {
        success: true,
        message: validatedData.willAttend === "yes" 
          ? "¡Gracias por confirmar tu asistencia! Nos vemos en la boda 💒"
          : "Gracias por tu respuesta. ¡Te echaremos de menos! 💔",
        data: {
          willAttend: validatedData.willAttend,
          numberOfAdults: validatedData.numberOfAdults,
          timestamp,
        },
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("❌ Error en RSVP:", error);
    
    // Manejar errores específicos de Google Sheets
    let errorMessage = "Error al procesar la solicitud";
    let statusCode = 500;

    if (error.message?.includes("Hoja de cálculo no encontrada")) {
      errorMessage = "Error de configuración: Hoja de cálculo no encontrada";
    } else if (error.message?.includes("Permiso denegado")) {
      errorMessage = "Error de configuración: Permiso denegado a la hoja de cálculo";
    } else if (error.message?.includes("private_key")) {
      errorMessage = "Error de configuración: Credenciales inválidas";
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: statusCode }
    );
  }
}

// Método GET para verificar que la API está activa
export async function GET() {
  try {
    validateGoogleSheetsConfig();
    return NextResponse.json({
      status: "ok",
      message: "API RSVP activa - Boda Duzcelly & Álvaro",
      googleSheetsConfigured: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: "API RSVP activa pero Google Sheets no está configurado",
      googleSheetsConfigured: false,
      error: error.message,
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}
