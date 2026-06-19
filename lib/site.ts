/*
  ── Conteúdo do site Humaniq ───────────────────────────────────────────
  TODO (cliente): edite textos, nomes e contatos AQUI. É o único lugar.
  Dados conforme a "verdade de campo" fornecida pela Humaniq.
*/

export const site = {
  nome: "Humaniq",
  nomeCompleto: "Humaniq Consultoria de RH",
  local: "Manaus · Amazonas",
  dominio: "humaniq.net.br",
} as const;

export const contato = {
  endereco:
    "Rua Rio Içá, 191, Sala 304 — Nossa Senhora das Graças — Manaus/AM — CEP 69053-100",
  telefoneLabel: "+55 92 98606-5621",
  whatsapp: "https://wa.me/5592986065621",
  email: "atendimento@humaniq.net.br",
  instagram: "https://www.instagram.com/humaniqq/",
  instagramHandle: "@humaniqq",
  linkedinCeo: "https://www.linkedin.com/in/marcela-viana-970075ab/",
} as const;

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Liderança", href: "#lideranca" },
  { label: "Equipe", href: "#equipe" },
] as const;

export const sobre = {
  standfirst:
    "Uma consultoria de RH que trata gente como a causa do resultado — não como o custo dele.",
  paragrafos: [
    "A Humaniq nasceu de uma convicção simples: empresas não crescem apesar das pessoas — crescem por causa delas. Há mais de 18 anos, unimos método de RH a uma escuta genuína para alinhar estratégia de negócio e gestão de gente.",
    "Aqui, diagnóstico, liderança e cultura andam juntos. Não entregamos um relatório bonito e vamos embora: ficamos até a mudança virar rotina, com ética e impacto social no centro de cada decisão.",
    "Atendemos empresas de médio e grande porte em Manaus e no Amazonas que querem estruturar a área de pessoas com consistência — e fazer isso sem perder o lado humano no caminho.",
  ],
  nota: "Sediada em Manaus/AM, com atuação em todo o Amazonas.",
} as const;

export const numeros = [
  { v: "18+", k: "anos de experiência", sub: "em médio e grande porte" },
  { v: "06", k: "frentes de atuação", sub: "do diagnóstico à retenção" },
  { v: "ABRH-AM", k: "diretoria de impacto", sub: "liderança setorial" },
  { v: "100%", k: "feito sob medida", sub: "sem receita de prateleira" },
] as const;

export const pilares = [
  {
    titulo: "Escuta ativa",
    texto:
      "Antes de propor, ouvimos. Diagnóstico de verdade começa pela escuta de quem vive a operação.",
  },
  {
    titulo: "Inclusão e diversidade na raiz",
    texto:
      "Não como pauta de fachada — como critério estrutural de como times são formados e liderados.",
  },
  {
    titulo: "Decisões com impacto (ESG)",
    texto:
      "Ética e impacto social no centro. Gente bem cuidada é também responsabilidade da empresa.",
  },
] as const;

export const servicos = [
  {
    n: "01",
    nome: "Alinhamento Estratégico",
    desc: "Conectamos os objetivos do negócio à gestão de pessoas.",
    leva: "Estratégia de gente que fala a língua do resultado.",
  },
  {
    n: "02",
    nome: "Desenvolvimento Organizacional",
    desc: "Cultura corporativa e engajamento como sistema, não como evento.",
    leva: "Uma cultura que sustenta o crescimento.",
  },
  {
    n: "03",
    nome: "Gestão de Talentos",
    desc: "Atrair, desenvolver e reter os profissionais certos.",
    leva: "Menos rotatividade, mais protagonismo.",
  },
  {
    n: "04",
    nome: "Análise Diagnóstica",
    desc: "Avaliamos a estrutura organizacional para achar onde está a oportunidade.",
    leva: "Clareza sobre o que mudar primeiro.",
  },
  {
    n: "05",
    nome: "Desenvolvimento de Lideranças",
    desc: "Capacitação de gestores e fortalecimento dos times.",
    leva: "Líderes preparados para a escuta ativa.",
  },
  {
    n: "06",
    nome: "Engajamento e Retenção",
    desc: "Satisfação e permanência dos colaboradores ao longo do tempo.",
    leva: "Gente que escolhe ficar.",
  },
] as const;

export const metodo = [
  {
    n: "01",
    titulo: "Diagnóstico",
    texto: "Entendemos a estrutura, a cultura e os gargalos reais.",
  },
  {
    n: "02",
    titulo: "Desenho",
    texto: "Montamos um plano sob medida, sem receita de prateleira.",
  },
  {
    n: "03",
    titulo: "Implementação",
    texto: "Colocamos de pé junto com a sua liderança.",
  },
  {
    n: "04",
    titulo: "Acompanhamento",
    texto: "Medimos, ajustamos e sustentamos o resultado.",
  },
] as const;

export const ceo = {
  nome: "Marcela Viana",
  cargo: "CEO & Head de RH",
  // TODO: substituir por foto oficial da Marcela (proporção 4:5).
  foto: null as string | null,
  quote:
    "Gente bem cuidada não é gasto. É a decisão estratégica mais subestimada das empresas.",
  paragrafos: [
    "Mais de 18 anos liderando RH em empresas de médio e grande porte. Diretora de Impacto Social da ABRH-AM, Marcela construiu uma carreira defendendo um RH com inclusão e diversidade na raiz — e não como pauta de vitrine.",
    "À frente da Humaniq, transforma desafios de gestão de pessoas em resultado concreto: líderes preparados para a escuta ativa, times mais diversos e decisões tomadas com impacto social no centro. Técnica e humanidade, na mesma mesa.",
  ],
  credenciais: [
    { k: "Cargo", v: "CEO & Head de RH, Humaniq" },
    { k: "Associação", v: "Diretora de Impacto Social · ABRH-AM" },
    { k: "Formação", v: "Faculdade Martha Falcão (FMF)" },
    { k: "Experiência", v: "18+ anos em médio e grande porte" },
  ],
  bandeiras: [
    "ESG",
    "Inclusão e diversidade na raiz",
    "Protagonismo feminino",
    "Escuta ativa",
    "Valorização do público 50+",
  ],
} as const;

export type Pessoa = {
  nome: string;
  cargo: string;
  bio: string; // 1 linha neutra OU "[a confirmar]"
  foto?: string | null; // TODO: foto oficial quando houver
};

export const equipe: Pessoa[] = [
  {
    nome: "Marcela Viana",
    cargo: "CEO / Head de RH",
    bio: "Lidera a estratégia de gente e o impacto social da Humaniq.",
  },
  {
    nome: "Antonio San",
    cargo: "Gerente Financeiro",
    bio: "[bio a confirmar]",
  },
  {
    nome: "Alexandre Wenlund",
    cargo: "Consultor Externo",
    bio: "[bio a confirmar]",
  },
  { nome: "João Victor", cargo: "Trainee", bio: "[bio a confirmar]" },
  { nome: "Vittoria San", cargo: "Marketing", bio: "[bio a confirmar]" },
];
