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
  endereco:
    "Rua Rio Içá, 191, Sala 304 — Nossa Senhora das Graças, Manaus/AM — CEP 69053-100",
  // Portfólio: WhatsApp 92 98472-7761 · Tel 92 98606-5621
  telefoneLabel: "92 98472-7761",
  telefone2Label: "92 98606-5621",
  whatsapp: "https://wa.me/5592984727761",
  email: "marcela.viana@humaniq.net.br",
  instagram: "https://www.instagram.com/humaniqq/",
  instagramHandle: "@humaniqq",
  linkedinCeo: "https://www.linkedin.com/in/marcela-viana-970075ab/",
} as const;

// Link de WhatsApp já com mensagem pré-preenchida (conversão imediata).
export const whatsappCta = `${contato.whatsapp}?text=${encodeURIComponent(
  "Olá! Vim pelo site da Humaniq e gostaria de conversar sobre gestão de pessoas e saúde mental na minha empresa.",
)}`;

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
  { v: "7", k: "áreas de atuação", sub: "da seleção à saúde mental" },
  { v: "+31%", k: "de produtividade", sub: "em times com bem-estar (Univ. de Oxford)" },
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
    nome: "Implantação da NR-1 — Riscos Psicossociais",
    resumo:
      "Sua empresa já é obrigada a gerenciar riscos psicossociais. Fazemos o diagnóstico, o plano de ação e o acompanhamento exigidos pela NR-1 — com respaldo técnico de psicólogas.",
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
      "Apresentação de candidatos finalistas com parecer técnico",
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
      "Mentoria e autoconhecimento (DISC e Pontos Fortes)",
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
    nome: "Apoio Psicológico ao Colaborador",
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
    nota: "Atendimento pontual e focado — complementar a planos de saúde e terapias contínuas.",
  },
];

export const diferenciais = [
  {
    titulo: "Base científica em psicologia",
    texto:
      "Métodos com lastro em Psicologia Positiva e ciência do comportamento — não achismo.",
  },
  {
    titulo: "Atuação ética e humanizada",
    texto: "Pessoas no centro de cada decisão, do diagnóstico à entrega.",
  },
  {
    titulo: "Liderança reconhecida no setor",
    texto: "Direção de Impacto Social na ABRH-AM e atuação no Amazonas.",
  },
  {
    titulo: "Alinhamento com a legislação",
    texto: "Práticas em conformidade, incluindo a NR-1 e riscos psicossociais.",
  },
  {
    titulo: "Integração com o RH",
    texto: "Trabalhamos lado a lado com a sua equipe, não por cima dela.",
  },
  {
    titulo: "Sob medida, sempre",
    texto: "Nada de receita de prateleira — cada plano nasce da sua realidade.",
  },
] as const;

export const ceo = {
  nome: "Marcela Viana",
  cargo: "CEO da Humaniq · Psicóloga",
  foto: "/marcela.jpg", // foto aprovada pelo cliente
  paragrafos: [
    "Marcela Viana fundou a Humaniq para provar que cuidar de pessoas e entregar resultado são a mesma coisa. Psicóloga com mais de 18 anos em desenvolvimento humano, lidera projetos de cultura, liderança e saúde mental em empresas do Amazonas.",
    "Especialista em Psicologia Positiva, Cultura Organizacional, Feedback e Employee Experience, é Diretora de Impacto Social da ABRH-AM, certificada como Chief Happiness Officer e associada à ABVQ. Une técnica e humanidade para transformar a gestão de pessoas em resultado concreto.",
  ],
  stat: "Colaboradores com bem-estar são até 31% mais produtivos — e mais inovadores. (Univ. de Oxford)",
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
// TODO (cliente): confirmar a lista, os NOMES e a permissão de uso das marcas.
export const clientes = Array.from(
  { length: 13 },
  (_, i) => `/clientes/cliente-${String(i + 1).padStart(2, "0")}.png`,
);

// ⚠️ DEPOIMENTOS FICTÍCIOS — placeholders para o cliente substituir por reais.
export const depoimentos = [
  {
    texto:
      "Depois do trabalho da Humaniq, nosso clima organizacional mudou de patamar. A liderança passou a tratar saúde mental como prioridade — não como tabu.",
    nome: "Mariana Albuquerque",
    cargo: "Gerente de RH",
    empresa: "Indústria do Polo de Manaus",
  },
  {
    texto:
      "A implantação da NR-1 foi conduzida com técnica e cuidado. Saímos com um plano de ação de verdade e indicadores para acompanhar.",
    nome: "Rafael Lima",
    cargo: "Diretor de Operações",
    empresa: "Rede de varejo · AM",
  },
] as const;

export const fechamento =
  "Cuidar de pessoas é uma decisão estratégica. Vamos começar pela sua.";
