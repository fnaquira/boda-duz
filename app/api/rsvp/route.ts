import { NextResponse } from "next/server";

// API Route dummy para RSVP
// En producción, aquí se guardaría en base de datos

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validación básica
    if (!body.nombre || !body.asistira) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Simular procesamiento
    console.log("📝 Nueva confirmación RSVP:", {
      nombre: body.nombre,
      acompanantes: body.acompanantes,
      asistira: body.asistira,
      mensaje: body.mensaje || "Sin mensaje",
      contacto: body.contacto || "No proporcionado",
      timestamp: new Date().toISOString(),
    });

    // Respuesta exitosa (dummy - no guarda realmente)
    return NextResponse.json(
      {
        success: true,
        message: "¡Gracias por confirmar tu asistencia!",
        data: {
          nombre: body.nombre,
          asistira: body.asistira,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en RSVP:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

// Método GET para verificar que la API está activa
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "API RSVP activa - Boda Duzcelly & Álvaro",
    timestamp: new Date().toISOString(),
  });
}
