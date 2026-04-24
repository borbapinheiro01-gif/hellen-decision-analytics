import React from "react";
import {
  ArrowRight,
  Menu,
  Sparkles,
  Orbit,
  Target,
  Activity,
  Scale,
  Workflow,
  BarChart3,
  ShieldCheck,
  BrainCircuit,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Processo", href: "#processo" },
  { label: "Sistema", href: "#sistema" },
  { label: "Casos", href: "#casos" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Contato", href: "#contato" },
];

const processSteps = [
  {
    title: "Estruturação",
    text: "Transformo dados dispersos em um sistema estruturado e analisável.",
  },
  {
    title: "Modelagem",
    text: "Construo uma representação matemática do comportamento do sistema.",
  },
  {
    title: "Simulação",
    text: "Exploro diferentes cenários para entender impactos e trajetórias.",
  },
  {
    title: "Decisão",
    text: "Identifico estratégias mais eficientes com base no comportamento do sistema.",
  },
];

const systemStages = [
  ["Problema", "Tudo começa com a definição correta do problema."],
  ["Estrutura", "O problema é organizado em uma estrutura analisável."],
  ["Modelo", "O sistema é representado matematicamente."],
  ["Simulação", "Diferentes cenários são explorados."],
  ["Decisão", "A melhor estratégia emerge do comportamento do sistema."],
];

const cases = [
  {
    title: "Modelagem de Sistemas Dinâmicos",
    tag: "estrutura",
    summary:
      "Construção de um sistema dinâmico para representar entrada, engajamento, churn e reativação, permitindo analisar o comportamento ao longo do tempo.",
    bullets: [
      "Estruturação do sistema em estados interdependentes",
      "Modelagem do ciclo de vida do usuário",
      "Simulação da evolução temporal",
    ],
  },
  {
    title: "Simulação de Estratégias e Decisão",
    tag: "decisão",
    summary:
      "Comparação entre aquisição, retenção e churn para identificar a alocação mais eficiente no crescimento sustentável da base.",
    bullets: [
      "Simulação de cenários estratégicos",
      "Comparação de impacto entre estratégias",
      "Identificação de retenção como principal alavanca",
    ],
  },
];

const applications = [
  {
    title: "Crescimento de base",
    text: "Entendimento de aquisição, retenção, churn e reativação como partes de um mesmo sistema evolutivo.",
    Icon: BarChart3,
  },
  {
    title: "Retenção e churn",
    text: "Leitura do comportamento da base para identificar perdas estruturais e alavancas mais eficientes de retenção.",
    Icon: ShieldCheck,
  },
  {
    title: "Otimização de investimento",
    text: "Análise de decisões sob restrições, saturação e retorno marginal em contextos de mídia e alocação de recursos.",
    Icon: Scale,
  },
];

const heroPillars = [
  {
    title: "Estruturação sistêmica",
    text: "Transformo dados dispersos em um sistema analisável.",
    Icon: Workflow,
  },
  {
    title: "Modelagem matemática",
    text: "Represento o comportamento do problema de forma estruturada.",
    Icon: Orbit,
  },
  {
    title: "Simulação de cenários",
    text: "Exploro trajetórias e impactos antes da decisão.",
    Icon: Activity,
  },
  {
    title: "Otimização da decisão",
    text: "Identifico estratégias mais eficientes com base no sistema.",
    Icon: Scale,
  },
];

const valueItems = [
  {
    title: "Pensamento estruturado",
    text: "O problema é organizado antes de qualquer análise, reduzindo ruído e melhorando consistência.",
    Icon: Workflow,
  },
  {
    title: "Modelagem como base",
    text: "A análise parte de representação matemática e comportamento do sistema, não apenas de leitura descritiva.",
    Icon: BrainCircuit,
  },
  {
    title: "Decisão orientada",
    text: "As decisões emergem da dinâmica do sistema e da comparação entre cenários, não de métricas isoladas.",
    Icon: Target,
  },
];

const dashboardMetrics = [
  {
    title: "Base ativa final",
    value: "0.621",
    detail: "solução simulada",
    trend: "+ consistente",
  },
  {
    title: "Share médio",
    value: "0.297",
    detail: "qualidade da base",
    trend: "+ equilíbrio",
  },
  {
    title: "Churn acumulado",
    value: "0.949",
    detail: "pressão estrutural",
    trend: "↓ controlado",
  },
  {
  title: "Direção ótima",
  value: "equilíbrio com viés em aquisição",
}
];

const dashboardTimeline = [
  { month: "Jan", base: 220, ativos: 58, churn: 22 },
  { month: "Fev", base: 260, ativos: 66, churn: 24 },
  { month: "Mar", base: 310, ativos: 78, churn: 23 },
  { month: "Abr", base: 360, ativos: 89, churn: 21 },
  { month: "Mai", base: 430, ativos: 104, churn: 20 },
  { month: "Jun", base: 510, ativos: 118, churn: 18 },
];

function GlowButton({ children, secondary = false, href = "#" }) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
        secondary
          ? "border border-white/15 bg-white/5 text-white hover:border-fuchsia-400/40 hover:bg-white/10"
          : "bg-gradient-to-r from-fuchsia-600 to-violet-500 text-white shadow-[0_0_40px_rgba(217,70,239,0.28)] hover:scale-[1.02]",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">{text}</p> : null}
    </div>
  );
}

function AlgorithmHeroVisual() {
  const modelSteps = [
    {
      title: "1. Problema",
      text: "O ponto de partida é transformar uma situação real em variáveis, estados e restrições analisáveis.",
    },
    {
      title: "2. Modelo",
      text: "A dinâmica do sistema é representada matematicamente para entender como as decisões afetam o comportamento ao longo do tempo.",
    },
    {
      title: "3. Simulação",
      text: "Diferentes cenários são testados para avaliar robustez, sensibilidade e estabilidade das estratégias.",
    },
    {
      title: "4. Decisão",
      text: "A melhor escolha é definida não por intuição, mas pela resposta do sistema sob cenários adversos.",
    },
  ];

  return (
    <section
      id="processo"
      className="rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,#0d0617_0%,#070312_100%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.55)] md:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-fuchsia-200/70">
            Modelo geral
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Uma estrutura para transformar problemas em decisões.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
            O diferencial do modelo não está em um único caso aplicado, mas na
            forma de estruturar problemas dinâmicos: primeiro entende-se o
            sistema, depois simulam-se cenários e só então a decisão é tomada.
          </p>

          <div className="mt-8 rounded-[28px] border border-fuchsia-400/15 bg-fuchsia-400/10 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-fuchsia-100/70">
              lógica central
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Problema → Modelo → Simulação → Decisão
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/72">
              Essa sequência permite comparar estratégias antes da execução,
              reduzir decisões baseadas apenas em intuição e enxergar trade-offs
              com maior precisão.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/35">
          <div className="relative h-[300px] md:h-[380px]">
            <img
              src="/images/hero-algorithm.png"
              alt="Infraestrutura visual do modelo de decisão"
              className="absolute inset-0 h-full w-full object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,3,18,0.1),rgba(7,3,18,0.82))]" />
          </div>

          <div className="grid gap-3 p-5 md:grid-cols-2">
            {modelSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5"
              >
                <h4 className="text-lg font-semibold text-white">
                  {step.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,#13011b_0%,#0d0113_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.42)] md:p-8">
        <SectionHeader
          eyebrow="Posicionamento"
          title="Mais que dados: estrutura e decisão"
          text="O diferencial não está apenas em ler métricas, mas em organizar o problema, representar o sistema e comparar cenários antes de decidir."
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {valueItems.map(({ title, text, Icon }) => (
          <article
            key={title}
            className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,#16011e_0%,#0d0113_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.42)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/10">
              <Icon className="h-5 w-5 text-fuchsia-200" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SystemCases() {
  return (
    <div id="sistema" className="space-y-8">
      <div className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,#180220_0%,#120118_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.42)] md:p-10">
        <SectionHeader
          eyebrow="Arquitetura da decisão"
          title="Como o problema se transforma em decisão"
          text="Em vez de analisar métricas isoladas, o problema é organizado em uma estrutura analisável, representado matematicamente, simulado e então convertido em decisão."
        />

        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/8 bg-black/20 px-4 py-8 md:px-8">
          <svg viewBox="0 0 1200 240" className="h-[220px] w-full">
            <defs>
              <linearGradient id="decisionFlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.45" />
                <stop offset="45%" stopColor="#d946ef" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            <path d="M30 155 C180 118, 250 165, 390 140 S630 102, 760 132 S980 166, 1160 92" fill="none" stroke="url(#decisionFlow)" strokeWidth="7" strokeLinecap="round" />
            <circle cx="110" cy="148" r="11" fill="#f5d0fe" />
            <circle cx="315" cy="146" r="10" fill="#f0abfc" />
            <circle cx="548" cy="135" r="10" fill="#f0abfc" />
            <circle cx="795" cy="130" r="10" fill="#f0abfc" />
            <circle cx="1110" cy="102" r="13" fill="#f5d0fe" />
          </svg>

          <div className="mt-4 grid gap-6 md:grid-cols-5">
            {systemStages.map(([title, text]) => (
              <div key={title}>
                <h4 className="text-2xl font-semibold text-white">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="casos" className="grid gap-6 lg:grid-cols-2">
        {cases.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,#17011f_0%,#0d0115_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.42)] md:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Caso {index + 1}</p>
              <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-100">
                {item.tag}
              </span>
            </div>
            <h4 className="mt-4 text-2xl font-semibold text-white md:text-3xl">{item.title}</h4>
            <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">{item.summary}</p>

            <div className="mt-6 space-y-3">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 text-sm text-white/70">
                  <ChevronRight className="mt-1 h-4 w-4 text-fuchsia-300" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function DashboardSection() {
  const strategyComparison = [
    { label: "Aquisição", value: 72, color: "from-violet-500 to-fuchsia-500" },
    { label: "Equilíbrio", value: 84, color: "from-fuchsia-500 to-pink-500" },
    { label: "Retenção", value: 100, color: "from-cyan-400 to-fuchsia-500" },
  ];

  return (
    <section className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,#14011c_0%,#0d0113_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.42)] md:p-10">
     <SectionHeader
  eyebrow="Case analítico"
  title="Otimização de Aquisição vs Retenção"
  text="A simulação de 10 cenários mostrou que estratégias extremas não maximizam crescimento. O melhor desempenho ocorre em um equilíbrio com leve priorização de aquisição (60% aquisição / 40% retenção), maximizando a base ativa com churn controlado."
/>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Base ativa final",
            value: "0.621",
            detail: "resultado otimizado",
            trend: "+ estabilidade",
          },
          {
            title: "Share médio",
            value: "0.297",
            detail: "qualidade da base",
            trend: "+ equilíbrio",
          },
          {
            title: "Churn acumulado",
            value: "0.949",
            detail: "pressão estrutural",
            trend: "↓ controlado",
          },
          {
            title: "Direção ótima",
            value: "retenção > aquisição",
            detail: "decisão recomendada",
            trend: "+ impacto",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-fuchsia-400/30 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">{item.title}</p>
            <div className="mt-4 flex flex-col gap-3">
              <div>
                <h4
                  className={`font-semibold text-white break-words ${
                    item.title === "Direção ótima"
                      ? "text-xl md:text-2xl leading-tight"
                      : "text-2xl md:text-3xl"
                  }`}
                >
                  {item.value}
                </h4>
                <p className="mt-2 text-sm text-white/55">{item.detail}</p>
              </div>
              <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-100">
                {item.trend}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/70">
                  Insight visual
                </p>
                <h4 className="mt-2 text-2xl font-semibold text-white">
                  Crescimento da base ativa por estratégia
                </h4>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                simulação comparável
              </span>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/8 bg-black/20 p-4">
              <img
                src="/grafico_case.png"
                alt="Gráfico comparando aquisição, equilíbrio e retenção"
                className="w-full rounded-[18px] object-cover"
              />
            </div>

            <div className="mt-6 rounded-[22px] border border-fuchsia-400/15 bg-fuchsia-400/10 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-fuchsia-100/70">
                leitura principal
              </p>
              <h5 className="mt-3 text-2xl font-semibold leading-tight text-white">
                Aquisição cresce rápido.
                <br />
                Retenção sustenta o crescimento.
              </h5>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Como o problema foi estruturado
            </p>

            <div className="mt-5 grid gap-3">
              {[
                "Definição do problema de crescimento e churn",
                "Modelagem do sistema como dinâmica de estados",
                "Teste de diferentes estruturas matemáticas",
                "Simulação de cenários estratégicos",
                "Leitura da melhor decisão ao longo do tempo",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-400/15 text-sm text-fuchsia-100">
                    {index + 1}
                  </span>
                  <span className="text-sm text-white/75">{step}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-6">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/70">
              Comparação estratégica
            </p>

            <div className="mt-5 space-y-4">
              {strategyComparison.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-white/75">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-fuchsia-400/15 bg-fuchsia-400/10 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-100/75">
              O diferencial do case
            </p>
            <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">
              O modelo foi escolhido a partir da aderência ao cenário, não por conveniência.
            </h4>
            <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
              O diferencial não está apenas na robustez da análise, mas na escolha da estrutura matemática mais adequada
              para representar o problema antes da otimização.
            </p>
          </article>

          <article className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/75">
              Decisão recomendada
            </p>
            <h4 className="mt-3 text-2xl font-semibold text-white">
              Priorizar retenção como principal alavanca de crescimento
            </h4>
            <p className="mt-4 text-sm leading-7 text-white/75">
              A simulação mostra que aquisição acelera o crescimento inicial, mas o aumento do churn reduz esse ganho ao longo do tempo. O melhor resultado ocorre em um regime intermediário, equilibrando entrada de usuários e retenção.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CaseAcquisitionRetention() {
  const metrics = [
    {
      title: "Alocação ótima",
      value: "≈60% → 40%",
      detail: "aquisição → retenção",
      trend: "equilíbrio otimizado",
    },
    { title: "Base ativa média", value: "1.398", detail: "resultado final simulado", trend: "+ sustentável" },
    { title: "Conversão acumulada", value: "2.511", detail: "fluxo para base ativa", trend: "+ recorrência" },
    { title: "Churn acumulado", value: "1.252", detail: "pressão estrutural", trend: "↓ controlado" },
  ];

  const comparisons = [
    { label: "Aquisição", value: "acelera entrada e crescimento inicial, mas pode aumentar churn quando aplicada de forma extrema" },
    { label: "Equilíbrio", value: "apresenta o melhor desempenho neste cenário, combinando crescimento com controle de churn" },
    { label: "Retenção", value: "reduz perda de usuários, mas pode limitar crescimento quando domina totalmente a estratégia" },
  ];

  const steps = [
    "Definição do trade-off entre aquisição, conversão, retenção e churn",
    "Modelagem do funil como sistema dinâmico de estados",
    "Calibração com parâmetros plausíveis para plataformas digitais",
    "Teste sob cenários de aquisição, retenção e churn",
    "Identificação do ponto de equilíbrio mais eficiente",
  ];

  return (
    <section
      id="casos"
      className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,#14011c_0%,#0d0113_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.42)] md:p-10"
    >
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/70">
          Modelo central — aplicação 01
        </p>

        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-300/70">
          Marketplace de delivery
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl leading-tight">
          Otimização de aquisição vs retenção em sistemas digitais
        </h2>

        <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">
          Este case aplica um modelo dinâmico de crescimento para analisar o trade-off entre
          aquisição, conversão, retenção e churn. O cenário utilizado representa uma plataforma
          de delivery, mas a estrutura pode ser reutilizada em outros negócios digitais.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <article
            key={item.title}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">{item.title}</p>

            <div className="mt-4 flex flex-col gap-3">
              <div>
                <h4
                  className={`font-semibold text-white break-words ${
                    item.title === "Alocação ótima"
                      ? "text-xl md:text-2xl leading-tight"
                      : "text-2xl md:text-3xl"
                  }`}
                >
                  {item.value}
                </h4>
                <p className="mt-2 text-sm text-white/55">{item.detail}</p>
              </div>

              <span className="w-fit rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-100">
                {item.trend}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="space-y-6">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/70">
                  Insight visual
                </p>

                <h4 className="mt-2 text-2xl font-semibold text-white">
                  Base ativa por estratégia
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  Simulação sob diferentes cenários de aquisição, retenção e churn
                </p>
              </div>

              <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                simulação comparativa
              </span>
            </div>

            <div className="mt-6 flex items-center justify-center rounded-[24px] border border-white/8 bg-black/40 p-2 md:p-3">
              <img
                src="/images/grafico_case.png"
                alt="Simulação de crescimento da base ativa em marketplace de delivery"
                className="max-h-[520px] w-full rounded-[18px] object-contain opacity-95 transition hover:opacity-100"
              />
            </div>

            <div className="mt-6 rounded-[22px] border border-fuchsia-400/15 bg-fuchsia-400/10 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-fuchsia-100/70">
                leitura principal
              </p>

              <h5 className="mt-3 text-2xl font-semibold leading-tight text-white">
                Aquisição acelera o crescimento.
                <br />
                Equilíbrio sustenta o resultado.
              </h5>

              <p className="mt-4 text-sm leading-7 text-white/75">
                A simulação mostra que estratégias extremas não maximizam o crescimento.
                O melhor desempenho ocorre em um ponto intermediário, combinando entrada
                de usuários com controle de churn.
              </p>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Como o problema foi estruturado
            </p>

            <div className="mt-5 space-y-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fuchsia-400/15 text-sm text-fuchsia-100">
                    {index + 1}
                  </span>
                  <span className="text-sm text-white/75">{step}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-6">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/70">
              O que a comparação mostrou
            </p>

            <div className="mt-5 space-y-4">
              {comparisons.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">{item.value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-fuchsia-400/15 bg-fuchsia-400/10 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-100/75">
              O diferencial do modelo
            </p>

            <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">
              O modelo vem antes da decisão.
            </h4>

            <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
              A análise não parte apenas de métricas isoladas. Primeiro, o problema é estruturado
              como um sistema dinâmico; depois, diferentes cenários são simulados para avaliar
              qual decisão permanece consistente sob incerteza.
            </p>
          </article>

          <article className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/75">
              Decisão recomendada
            </p>

            <h4 className="mt-3 text-2xl font-semibold text-white">
              Equilíbrio com leve viés em aquisição (≈60/40)
            </h4>

            <p className="mt-4 text-sm leading-7 text-white/75">
              A simulação indicou que, neste cenário modelado, o melhor desempenho ocorre
              com leve priorização de aquisição. Esse resultado não é universal: ele emerge
              da dinâmica específica entre conversão, retenção e churn definida no modelo.
              Em outras condições, o ponto ótimo pode variar.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function GrowthStrategyCharts() {
  const scenarios = [
    { id: "C1", name: "Muito aquisição", churn: 2.99, base: 1.754, conv: 4.59 },
    { id: "C2", name: "Aquisição forte", churn: 2.81, base: 1.773, conv: 4.43 },
    { id: "C3", name: "Aquisição moderada", churn: 2.61, base: 1.785, conv: 4.24 },
    { id: "C4", name: "Levemente aquisição", churn: 2.39, base: 1.788, conv: 4.03 },
    { id: "C5", name: "Balanceado", churn: 2.16, base: 1.780, conv: 3.79 },
    { id: "C6", name: "Levemente retenção", churn: 1.92, base: 1.760, conv: 3.53 },
    { id: "C7", name: "Retenção moderada", churn: 1.67, base: 1.724, conv: 3.25 },
    { id: "C8", name: "Retenção forte", churn: 1.42, base: 1.670, conv: 2.94 },
    { id: "C9", name: "Muito retenção", churn: 1.17, base: 1.594, conv: 2.62 },
    { id: "C10", name: "Retenção extrema", churn: 1.05, base: 1.546, conv: 2.44 },
  ];

  const colors = [
    "#00e5ff", "#28b8ff", "#5b8cff", "#7c5cff", "#a855f7",
    "#c653f5", "#ec4899", "#f472b6", "#fb4ca3", "#ff2d86"
  ];

  const x = (churn) => 70 + ((churn - 1.0) / (3.1 - 1.0)) * 430;
  const y = (base) => 270 - ((base - 1.5) / (1.82 - 1.5)) * 210;

  return (
    <section className="rounded-[28px] border border-white/10 bg-[#090012] p-8 text-white shadow-2xl">

      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Marketplace digital
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Estratégia de Crescimento em{" "}
            <span className="text-cyan-300">Marketplace Digital</span>
          </h2>

          <p className="mt-3 text-white/65">
            Simulação de 10 cenários mostrou que estratégias extremas não maximizam crescimento.
            O melhor resultado ocorre em um equilíbrio com leve viés para aquisição (60/40).
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
            <strong className="block text-xl">10</strong>
            cenários
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
            <strong className="block text-xl">60</strong>
            períodos
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
            <strong className="block text-xl">3</strong>
            métricas
          </div>
        </div>
      </div>

      {/* GRÁFICOS */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* GRÁFICO 1 */}
        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-xl font-semibold">
            Evolução da base ativa por estratégia
          </h3>

          <p className="mt-2 text-sm text-white/55">
            Crescimento ao longo do tempo considerando diferentes alocações entre aquisição e retenção.
          </p>

          <svg viewBox="0 0 560 320" className="mt-6 w-full">
            <line x1="55" y1="270" x2="520" y2="270" stroke="#ffffff33" />
            <line x1="55" y1="40" x2="55" y2="270" stroke="#ffffff33" />

            {scenarios.map((s, i) => {
              const endY = 270 - ((s.base - 1.5) / 0.32) * 120 - 70;
              const d = `M55 260 C150 230, 190 145, 285 105 C385 60, 450 ${endY + 25}, 520 ${endY}`;
              return (
                <path
                  key={s.id}
                  d={d}
                  fill="none"
                  stroke={colors[i]}
                  strokeWidth={s.id === "C4" ? 4 : 2.5}
                  opacity={s.id === "C4" ? 1 : 0.65}
                />
              );
            })}
          </svg>
        </div>

        {/* GRÁFICO 2 */}
        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Trade-off entre crescimento e perda de usuários
              </h3>

              <p className="mt-2 text-sm text-white/55">
                Cada ponto representa um cenário. Tamanho indica volume de conversão.
              </p>
            </div>

            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-300">
              Melhor estratégia (C4 - 60/40)
            </span>
          </div>

          <svg viewBox="0 0 560 320" className="mt-6 w-full">
            {scenarios.map((s, i) => {
              const isBest = s.id === "C4";
              return (
                <g key={s.id}>
                  <circle
                    cx={x(s.churn)}
                    cy={y(s.base)}
                    r={s.conv * 5.5}
                    fill={isBest ? "#00e5ff" : colors[i]}
                    opacity={isBest ? 1 : 0.7}
                  />
                  <text
                    x={x(s.churn)}
                    y={y(s.base) + 4}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    {s.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h4 className="font-semibold text-cyan-300">Extremos não funcionam</h4>
          <p className="mt-2 text-sm text-white/60">
            Estratégias 100% focadas em aquisição ou retenção não maximizam crescimento sustentável.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h4 className="font-semibold text-purple-300">Melhor estratégia encontrada</h4>
          <p className="mt-2 text-sm text-white/60">
            O cenário C4 (60% aquisição / 40% retenção) apresenta o melhor equilíbrio entre crescimento e churn.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h4 className="font-semibold text-pink-300">Decisão baseada em simulação</h4>
          <p className="mt-2 text-sm text-white/60">
            A modelagem permite comparar estratégias antes da execução e reduzir risco na tomada de decisão.
          </p>
        </div>

      </div>
    </section>
  );
}
function ApplicationsSection() {
  return (
    <section id="aplicacoes" className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,#120118_0%,#0b0111_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.42)] md:p-10">
      <SectionHeader
        eyebrow="Aplicações"
        title="Onde essa estrutura pode ser aplicada"
        text="A mesma lógica analítica pode ser desdobrada para diferentes contextos de decisão, preservando estrutura, leitura sistêmica e comparabilidade entre cenários."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {applications.map(({ title, text, Icon }) => (
          <article key={title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/10">
              <Icon className="h-5 w-5 text-fuchsia-200" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,#21022e_0%,#120118_100%)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Contato</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Tem um problema complexo para analisar?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
            Posso estruturar, modelar e simular cenários para orientar sua decisão com mais clareza, consistência e profundidade analítica.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Formatos de trabalho</p>
          <div className="mt-5 space-y-3 text-sm text-white/75">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">Diagnóstico analítico de problema</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">Modelagem e simulação de cenários</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">Projeto analítico sob medida</div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <GlowButton href="mailto:hellen@example.com">
          Falar sobre um projeto
          <ArrowRight className="h-4 w-4" />
        </GlowButton>
        <GlowButton secondary href="#hero">Voltar ao início</GlowButton>
      </div>
    </section>
  );
}


function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070312] px-6 py-8 text-white md:px-12">
      <img
        src="/images/hero-algorithm.png"
        alt="Infraestrutura visual do modelo"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,3,18,0.92)_0%,rgba(7,3,18,0.72)_38%,rgba(7,3,18,0.20)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,3,18,0.12)_0%,rgba(7,3,18,0.18)_55%,rgba(7,3,18,0.94)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl flex-col justify-between">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-wide">
            FutureWorks
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#processo">Processo</a>
            <a href="#casos">Casos</a>
            <a href="#aplicacoes">Aplicações</a>
          </div>

          <a
            href="#contato"
            className="rounded-full border border-fuchsia-300/30 bg-fuchsia-500/10 px-5 py-2 text-sm text-white shadow-[0_0_30px_rgba(217,70,239,0.25)]"
          >
            Falar sobre um projeto
          </a>
        </nav>

        <div className="max-w-3xl pt-24">
          <p className="inline-flex rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.22em] text-fuchsia-100/75 backdrop-blur">
            modelagem matemática • simulação • decisão aplicada
          </p>

          <h1 className="mt-8 text-5xl font-semibold leading-tight md:text-7xl">
            Modelando sistemas complexos para decisões{" "}
            <span className="text-fuchsia-300">melhores</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
            Uma abordagem estruturada para entender, simular e orientar decisões
            de forma consistente em problemas onde análises tradicionais não bastam.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#casos"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(217,70,239,0.35)]"
            >
              Ver casos aplicados
            </a>

            <a
              href="#processo"
              className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-semibold text-white/75 backdrop-blur"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div className="mb-8 grid gap-4 rounded-[32px] border border-white/10 bg-black/25 p-5 backdrop-blur-xl md:grid-cols-4">
          {[
            "Entender alavancas reais de crescimento",
            "Comparar estratégias antes de investir",
            "Reduzir decisões baseadas em intuição",
            "Enxergar trade-offs com precisão",
          ].map((item) => (
            <div key={item} className="border-white/10 p-4 md:border-r last:border-r-0">
              <p className="text-base font-medium leading-7 text-white/82">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FutureWorksSitePreview() {
  return (
    <div className="min-h-screen bg-[#06010c] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070312_0%,#100119_45%,#070312_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_8%,rgba(217,70,239,0.22),transparent_24%),radial-gradient(circle_at_22%_20%,rgba(34,211,238,0.08),transparent_28%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-6 md:px-10">
          <header className="sticky top-0 z-30 mb-8 rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-500 shadow-[0_0_30px_rgba(217,70,239,0.35)]">
                  <Orbit className="h-5 w-5 text-white" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    FutureWorks
                  </p>
                  <p className="text-sm text-white/70">
                    modelagem • simulação • decisão
                  </p>
                </div>
              </div>

              <nav className="hidden items-center gap-2 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-fuchsia-400/30 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <GlowButton href="#contato">Falar sobre um projeto</GlowButton>
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden">
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          <section
            id="hero"
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#070312] shadow-[0_35px_120px_rgba(0,0,0,0.65)]"
          >
            <img
              src="/images/hero-algorithm.png"
              alt="Infraestrutura visual do modelo de decisão"
              className="absolute inset-0 h-full w-full object-cover opacity-72"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,3,18,0.94)_0%,rgba(7,3,18,0.78)_34%,rgba(7,3,18,0.22)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,3,18,0.10)_0%,rgba(7,3,18,0.18)_56%,rgba(7,3,18,0.94)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,rgba(217,70,239,0.12),transparent_36%),radial-gradient(circle_at_48%_54%,rgba(34,211,238,0.10),transparent_30%)]" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-between p-8 md:p-12">
              <div className="max-w-3xl pt-8 md:pt-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-black/25 px-4 py-2 text-sm text-white/75 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-fuchsia-300" />
                  modelagem matemática • simulação • decisão aplicada
                </div>

                <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                  Modelando sistemas complexos para decisões{" "}
                  <span className="text-fuchsia-300">melhores</span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-2xl">
                  Uma abordagem estruturada para entender, simular e orientar decisões
                  de forma consistente em problemas onde análises tradicionais não bastam.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <GlowButton href="#casos">
                    Ver casos aplicados
                    <ArrowRight className="h-4 w-4" />
                  </GlowButton>

                  <GlowButton secondary href="#processo">
                    Como funciona
                  </GlowButton>
                </div>
              </div>

              <div
                id="processo"
                className="mt-16 grid gap-4 rounded-[32px] border border-white/10 bg-black/30 p-5 backdrop-blur-xl md:grid-cols-4 md:p-6"
              >
                {heroPillars.map(({ title, text, Icon }) => (
                  <article
                    key={title}
                    className="relative rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-fuchsia-300/25 hover:bg-fuchsia-400/[0.06]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/10">
                      <Icon className="h-5 w-5 text-fuchsia-200" />
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <main className="mt-8 space-y-8">
          
           <AlgorithmHeroVisual /> 
            <ValueSection />

            <CaseAcquisitionRetention />

            <ApplicationsSection />
            <GrowthStrategyCharts />

            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  );
}
