/*
  ── Conteúdo do site Humaniq ───────────────────────────────────────────
  Fonte: portfólio oficial da empresa (Humaniq-13.pdf). Edite tudo AQUI.
*/

export const site = {
  nome: "Humaniq",
  nomeCompleto: "Humaniq Consultoria",
  tagline: "Gestão de Pessoas, Saúde Mental e Desenvolvimento Humano",
  local: "Manaus · Amazonas",
  dominio: "humaniq.net.br",
} as const;

export const contato = {
  endereco: "Manaus · Amazonas", // TODO: confirmar endereço completo
  // Portfólio: WhatsApp 92 98472-7761 · Tel 92 98606-5621
  telefoneLabel: "92 98472-7761",
  telefone2Label: "92 98606-5621",
  whatsapp: "https://wa.me/5592984727761",
  email: "marcela.viana@humaniq.net.br",
  instagram: "https://www.instagram.com/humaniqq/",
  instagramHandle: "@humaniqq",
  linkedinCeo: "https://www.linkedin.com/in/marcela-viana-970075ab/",
} as const;

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Liderança", href: "#lideranca" },
  { label: "Contato", href: "#contato" },
] as const;

export const quemSomos =
  "A Humaniq é uma consultoria especializada em gestão de pessoas, saúde mental, bem-estar corporativo e desenvolvimento humano. Atuamos de forma estratégica, ética e humanizada, apoiando empresas na construção de ambientes de trabalho mais saudáveis, produtivos e sustentáveis.";

export const missao =
  "Conectar propósito, performance e bem-estar nas organizações, promovendo o desenvolvimento humano como diferencial competitivo.";

export const visao =
  "Ser referência em consultoria organizacional, com atendimento personalizado e soluções que gerem resultados mensuráveis — valorizando o potencial humano como base de todo crescimento.";

export const valores = [
  "Humanização",
  "Flexibilidade",
  "Resultados",
  "Excelência",
  "Ética",
] as const;

export const numeros = [
  { v: "18+", k: "anos de experiência", sub: "em desenvolvimento humano" },
  { v: "07", k: "frentes de atuação", sub: "da seleção à saúde mental" },
  { v: "+31%", k: "de produtividade", sub: "times felizes rendem mais" },
  { v: "ABRH-AM", k: "diretoria de impacto", sub: "liderança setorial" },
] as const;

export type Servico = {
  nome: string;
  resumo: string;
  itens: string[];
  nota?: string;
};

export const servicos: Servico[] = [
  {
    nome: "Recrutamento e Seleção Humanizado",
    resumo:
      "Um processo criterioso e humano, do desenho da vaga ao período de experiência.",
    itens: [
      "Reunião para análise da vaga",
      "Divulgação estratégica de vagas",
      "Triagem criteriosa de currículos",
      "Testes psicológicos e comportamentais",
      "Pré-entrevista estruturada",
      "Parecer técnico e apoio à decisão",
      "Envio dos melhores candidatos",
      "Acompanhamento do período de experiência",
    ],
  },
  {
    nome: "Desenvolvimento de Pessoas e Lideranças",
    resumo:
      "Treinamentos e mentoria para formar líderes conscientes e times saudáveis.",
    itens: [
      "Treinamentos corporativos personalizados",
      "Desenvolvimento de líderes e gestores",
      "Comunicação assertiva e gestão de conflitos",
      "Inteligência emocional aplicada ao trabalho",
      "Liderança humanizada e consciente",
      "Gestão do tempo, prioridades e saúde emocional",
      "Mentoria",
      "Autoconhecimento (DISC e Pontos Fortes)",
    ],
  },
  {
    nome: "Consultoria em RH e Processos Administrativos",
    resumo:
      "Estruturação do setor de RH e dos processos administrativos da empresa.",
    itens: [
      "Estruturação e organização do setor de RH",
      "Apoio à implantação de processos administrativos",
      "Facilities e manutenção predial",
      "Fluxos internos e rotinas administrativas",
      "Apoio estratégico à gestão de pessoas",
    ],
  },
  {
    nome: "Mediação de Conflitos e Clima Organizacional",
    resumo:
      "Escuta qualificada e diagnóstico de clima para relações de trabalho mais saudáveis.",
    itens: [
      "Mediação de conflitos interpessoais e de equipe",
      "Escuta qualificada e acolhimento organizacional",
      "Diagnóstico de clima organizacional",
      "Intervenções para melhoria das relações de trabalho",
    ],
  },
  {
    nome: "Palestras, Workshops e Ações In Company",
    resumo:
      "Conteúdos práticos sobre cultura, liderança e saúde mental, adaptados à sua realidade.",
    itens: [
      "Cultura organizacional e liderança: prevenção ao assédio",
      "Saúde mental e bem-estar",
      "Autocuidado para quem cuida de pessoas",
      "Burnout: prevenção e conscientização",
      "Felicidade corporativa",
      "Inteligência emocional",
    ],
  },
  {
    nome: "Atendimento Psicológico Clínico para Empresas",
    resumo:
      "Atendimento psicológico individual, pontual e personalizado, conforme a necessidade da empresa.",
    itens: [
      "Sofrimento psíquico relacionado ou não ao trabalho",
      "Crises emocionais pontuais",
      "Ansiedade, estresse e esgotamento emocional",
      "Dificuldades de adaptação, relacionamento ou desempenho",
      "Psicólogas habilitadas — presencial ou online",
      "Relatórios institucionais sem quebra de sigilo",
    ],
    nota: "Serviço complementar; não substitui planos de saúde ou terapias de longo prazo.",
  },
  {
    nome: "Implantação NR-1 — Plano de Ação",
    resumo:
      "Diagnóstico e plano de ação de riscos psicossociais conforme a NR-1.",
    itens: [
      "Levantamento dos riscos psicossociais",
      "Mapeamento de fatores de risco por setor",
      "Pesquisa de clima organizacional e escuta ativa",
      "Identificação de estresse, sobrecarga, assédio e conflitos",
      "Plano de ação conforme as exigências da NR-1",
      "Ações preventivas e corretivas + treinamento de líderes",
      "Indicadores de acompanhamento e relatórios técnicos ao RH",
    ],
  },
];

export const diferenciais = [
  {
    titulo: "Atuação ética e humanizada",
    texto: "Pessoas no centro de cada decisão, do diagnóstico à entrega.",
  },
  {
    titulo: "Serviços personalizados",
    texto: "Nada de receita de prateleira — tudo sob medida para a sua realidade.",
  },
  {
    titulo: "Integração com o RH",
    texto: "Trabalhamos lado a lado com a sua equipe, não por cima dela.",
  },
  {
    titulo: "Alinhamento com a legislação",
    texto: "Práticas em conformidade, incluindo a NR-1 e riscos psicossociais.",
  },
  {
    titulo: "Boas práticas de mercado",
    texto: "Métodos validados em cultura, clima e experiência do colaborador.",
  },
  {
    titulo: "Foco em pessoas e resultados",
    texto: "Bem-estar e performance como faces da mesma estratégia.",
  },
] as const;

export const ceo = {
  nome: "Marcela Viana",
  cargo: "CEO da Humaniq · Psicóloga",
  foto: "/marcela.jpg", // TODO: confirmar uso/licença da foto do portfólio
  paragrafos: [
    "Psicóloga e especialista em Psicologia Positiva, Marcela é Head de RH e Diretora de Impacto Social da ABRH-AM, com mais de 18 anos de experiência em desenvolvimento humano, gestão de pessoas, liderança e bem-estar corporativo.",
    "Especialista em Cultura Organizacional, Feedback e Employee Experience, é certificada como Chief Happiness Officer (Diretora de Felicidade Corporativa) e associada à ABVQ (Associação Brasileira de Qualidade de Vida). À frente da Humaniq, une técnica e humanidade para transformar a gestão de pessoas em resultado concreto.",
  ],
  stat: "Trabalhadores felizes rendem até 31% a mais — e são mais inovadores.",
  highlights: [
    "Especialista em Psicologia Positiva",
    "Diretora de Impacto Social · ABRH-AM",
    "Chief Happiness Officer (Felicidade Corporativa)",
    "Avaliadora PQA · Associada à ABVQ",
    "Coautora de 5 livros",
    "Host do podcast “Trilha de Sucesso”",
    "Criadora da palestra-show “Prontas para Decolar”",
  ],
} as const;

// Logos de clientes extraídos do portfólio (página CLIENTES).
// TODO (cliente): confirmar lista e permissão de uso das marcas.
export const clientes = Array.from(
  { length: 13 },
  (_, i) => `/clientes/cliente-${String(i + 1).padStart(2, "0")}.png`,
);

export const fechamento =
  "Estamos prontos para atender às necessidades da sua empresa — porque cuidar de pessoas é uma decisão estratégica.";
