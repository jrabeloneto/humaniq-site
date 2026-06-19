# Humaniq — Site institucional

Site one-page da **Humaniq Consultoria de RH** (Manaus/AM). Direção de arte
"Editorial Humanista": tipografia protagonista (Fraunces + Geist), paleta
ancorada no azul real da marca, motion sóbrio, zero estética de template.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (tokens em `app/globals.css` via `@theme`)
- **Motion** (animações) · **Lenis** (smooth scroll sutil, respeita reduced-motion)
- **next/font** (Fraunces + Geist) · **lucide-react** (ícones discretos)

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

Deploy-ready para a **Vercel** (importar o repositório; sem config extra).

## Onde editar (pontos do cliente)

| O quê | Onde |
|------|------|
| **Textos, nomes, serviços, contato** | `lib/site.ts` — ponto único |
| **Cores (tokens)** | `app/globals.css`, bloco `@theme` (`--color-navy`, `--color-blue`, etc.) |
| **Fontes** | `app/layout.tsx` |
| **Metadata / SEO / OG image** | `app/layout.tsx` (`metadata`) |
| **Logo / favicon** | `public/humaniq-logo.png` |

Todos os pontos que dependem de material do cliente estão marcados no código com
comentários `TODO:` — principalmente **fotos oficiais** (hero, CEO Marcela,
equipe) e o **hex exato do azul** da marca.

### Cores

A paleta foi **amostrada do logo** (`public/humaniq-logo.png`): o azul real é
`#00008E`. Tinta dos títulos/textos = `--color-navy #0B0B45`; acento (CTA/links)
= `--color-blue #00008E`. Se a Humaniq fornecer o hex oficial, ajuste esses dois
tokens em `app/globals.css`.

### Envio do formulário

O formulário (`components/site/Contato.tsx`) hoje faz POST para o stub
`app/api/contato/route.ts`, que apenas valida e loga. Para enviar de verdade:

1. **Route handler** — implemente o envio em `app/api/contato/route.ts`
   (Resend/Nodemailer/SendGrid). Coloque chaves em `.env.local`.
2. **Formspree** (sem backend) — veja o comentário em `Contato.tsx`: troque o
   `fetch` pela URL do seu form do Formspree.

## Estrutura

```
app/
  layout.tsx          fontes, metadata, smooth scroll
  page.tsx            monta as seções (one-page)
  globals.css         design system (tokens @theme)
  api/contato/route.ts  stub de envio do formulário
components/
  site/               Navbar, Hero, Manifesto, Servicos, ComoTrabalhamos,
                      Lideranca, Equipe, Contato, Footer, ui (helpers)
  motion/             Reveal (scroll reveal), SmoothScroll (Lenis)
lib/site.ts           todo o conteúdo editável
public/humaniq-logo.png
```

## Acessibilidade & performance

- HTML semântico, foco visível, contraste AA, `lang="pt-BR"`.
- `prefers-reduced-motion` desliga animações e o smooth scroll.
- Sem cursor customizado, sem gradientes/blob/glassmorphism (anti-"IA slop").
