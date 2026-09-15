import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, quizResult, housingRoute } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email é obrigatório' }, { status: 400 });
    }

    console.log('[Lead Received]', { name, email, quizResult, housingRoute, timestamp: new Date().toISOString() });

    // In production with DB connected, we save using drizzle db.insert(leads)...
    return NextResponse.json({
      success: true,
      message: 'Lead capturado com sucesso!',
      data: { email, name }
    });
  } catch (error) {
    console.error('Erro ao capturar lead:', error);
    return NextResponse.json({ error: 'Erro interno ao processar requisição' }, { status: 500 });
  }
}
