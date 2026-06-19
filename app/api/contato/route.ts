import { NextResponse } from "next/server";

/*
  Stub do envio do formulário de contato.
  Hoje apenas valida e loga no servidor. TODO (cliente): plugar o destino real:
    • E-mail transacional (Resend / Nodemailer / SendGrid), ou
    • Encaminhar para um serviço (Formspree, Basin), ou
    • Salvar em planilha / CRM.
  Variáveis sensíveis (API keys) devem ir em .env.local — nunca commitadas.
*/

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, mensagem } = body ?? {};

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { ok: false, error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    // TODO: enviar de fato (ver opções acima).
    console.log("[contato] nova mensagem:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requisição inválida." },
      { status: 400 }
    );
  }
}
