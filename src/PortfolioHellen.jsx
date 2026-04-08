export default function PortfolioHellen() {
  const featureChips = [
    "Modelagem matemática",
    "Sistemas dinâmicos",
    "Otimização sob restrições",
    "Estimação de parâmetros",
    "Análise de dados",
    "Decisão aplicada",
  ];

  const valueCards = [
    {
      title: "Decisões mais estruturadas",
      text: "Transformação de problemas complexos em estruturas analíticas claras, integrando dados, comportamento e restrições para apoiar decisões com mais consistência.",
    },
    {
      title: "Leitura sistêmica de produto",
      text: "Análise integrada de aquisição, engajamento, churn e reativação, permitindo interpretar a evolução do sistema em vez de observar apenas métricas isoladas.",
    },
    {
      title: "Cenários comparáveis",
      text: "Comparação entre estratégias de crescimento para identificar quais movimentos geram impacto mais eficiente e sustentável na base ativa.",
    },
    {
      title: "Base analítica robusta",
      text: "Uso de fundamentos de modelagem de sistemas e otimização para construir análises mais estáveis, interpretáveis e aplicáveis.",
    },
    {
      title: "Aplicação adaptável",
      text: "A mesma lógica pode ser adaptada para produto digital, risco, processos, growth, operações e outros contextos de decisão.",
    },
  ];

  const scenarioCards = [
    {
      title: "Aquisição alta",
      metric: "~+7% na base total",
      text: "Expande a base, mas aumenta proporcionalmente as perdas, pressionando churn e reduzindo eficiência do crescimento ativo.",
    },
    {
      title: "Reativação alta",
      metric: "mais qualidade na base",
      text: "Melhora a participação relativa de usuários ativos e reforça recuperação, com menor impacto sobre o volume total.",
    },
    {
      title: "Churn reduzido",
      metric: "~+11% na base ativa",
      text: "Foi o cenário com melhor equilíbrio entre crescimento e retenção, reduzindo perdas e aumentando qualidade da base.",
    },
  ];

  const applicationCards = [
    {
      title: "Alocação de budget em mídia",
      problem: "Distribuir investimento entre canais com comportamento distinto, retorno não linear e restrições operacionais.",
      approach: "Estruturação do problema como sistema de decisão sob restrições, considerando saturação, eficiência e retorno marginal.",
      value: "Comparação de cenários de investimento com leitura mais previsível de performance.",
    },
    {
      title: "Risco comportamental",
      problem: "Comportamento coletivo influenciado pela propagação de informação.",
      approach: "Modelagem da dinâmica entre agentes e simulação de cenários.",
      value: "Análise de risco sob comportamento e instabilidade.",
    },
    {
      title: "Processos e controles internos",
      problem: "Dificuldade em monitorar processos e antecipar desvios.",
      approach: "Estruturação dos processos como sistema dinâmico analisável.",
      value: "Decisões menos reativas e maior eficiência operacional.",
    },
  ];

  const floatingMath = [
    { text: "argmin J(x)", className: "left-[7%] top-[14%] -rotate-12 text-[24px] md:text-[34px] text-fuchsia-200/15" },
    { text: "dx/dt = f(x,u)", className: "right-[8%] top-[18%] rotate-[9deg] text-[22px] md:text-[30px] text-cyan-200/15" },
    { text: "A x ≤ b", className: "left-[9%] top-[42%] rotate-[5deg] text-[22px] md:text-[28px] text-white/10" },
    { text: "Σ p(ω)", className: "right-[10%] top-[46%] -rotate-[10deg] text-[24px] md:text-[32px] text-fuchsia-200/10" },
    { text: "∇J(x)", className: "left-[17%] top-[71%] -rotate-[7deg] text-[20px] md:text-[28px] text-cyan-200/10" },
  ];

const imageCards = [
  {
    title: "Validação do modelo com dados reais",
    subtitle: "O modelo reproduz comportamento observado",
    src: "/images/01_ajuste_engajamento.png",
    alt: "Ajuste do engajamento",
    text: "O modelo desenvolvido consegue reproduzir com consistência o comportamento real dos usuários. Isso valida a estrutura analítica e permite utilizá-la como base confiável para simulação e tomada de decisão."
  },
  {
    title: "Entendimento do ciclo de vida do usuário",
    subtitle: "Como usuários evoluem dentro da plataforma",
    src: "/images/02_dinamica_ciclo_vida.png",
    alt: "Ciclo de vida",
    text: "A análise mostra como usuários transitam entre ativação, engajamento e inatividade. Isso permite identificar onde ocorrem perdas e quais pontos têm maior potencial de intervenção estratégica."
  },
  {
    title: "Impacto acumulado no crescimento da base",
    subtitle: "Efeito das decisões ao longo do tempo",
    src: "/images/03_base_total_usuarios.png",
    alt: "Base total",
    text: "O crescimento da base não depende de ações isoladas, mas do efeito acumulado das decisões ao longo do tempo. O modelo permite antecipar esse comportamento e orientar estratégias mais eficientes."
  },{
  title: "Relação entre conversão e churn",
  subtitle: "Equilíbrio entre crescimento e perda",
  src: "/images/04_conversao_churn.png",
  alt: "Conversão e churn",
  text: "A análise mostra como aquisição e perda de usuários evoluem simultaneamente. Isso permite identificar se o crescimento é sustentável ou apenas resultado de reposição constante da base."
},
{
  title: "Impacto da reativação na base ativa",
  subtitle: "Recuperação de usuários inativos",
  src: "/images/05_reativacao_participacao_ativa.png",
  alt: "Reativação",
  text: "A reativação de usuários pode ter impacto significativo na base ativa. O modelo permite avaliar quando essa estratégia é mais eficiente do que investir apenas em aquisição."
}
];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="relative isolate">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.22),_transparent_30%),radial-gradient(circle_at_center,_rgba(88,28,135,0.28),_transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:54px_54px]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {floatingMath.map((item) => (
            <div key={item.text} className={`absolute font-mono tracking-wide ${item.className}`}>
              {item.text}
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 lg:px-12">
          <header className="sticky top-0 z-30 mb-10 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-white/50">Portfólio analítico</p>
                <h1 className="mt-1 text-lg font-semibold md:text-xl">Hellen Borba Pinheiro</h1>
              </div>

              <nav className="flex flex-wrap gap-2 text-sm text-white/70">
                {[
                  ["#hero", "Início"],
                  ["#estrutura", "Estrutura"],
                  ["#projeto-central", "Projeto central"],
                  ["#evidencias", "Evidências"],
                  ["#cenarios", "Cenários"],
                  ["#aplicacoes", "Aplicações"],
                  ["#valor", "Valor"],
                  ["#contato", "Contato"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-full border border-white/10 px-4 py-2 transition hover:border-fuchsia-400/40 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          <section id="hero" className="grid min-h-[80vh] items-center gap-12 py-8 md:grid-cols-[1.1fr_0.9fr] md:py-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-fuchsia-400/20 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
                <span className="mr-2 h-2 w-2 rounded-full bg-fuchsia-400" />
                Portfólio analítico | modelagem, decisão e aplicação
              </div>

              <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Transformo comportamento de dados em estruturas analíticas de decisão
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                Desenvolvo frameworks para interpretar sistemas dinâmicos, comparar cenários e apoiar decisões em produto digital, risco, processos e operações.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                Base em modelagem matemática, sistemas dinâmicos, otimização sob restrições, estimação de parâmetros e análise de dados.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-fuchsia-100/70 md:text-base">
                Projeto central desenvolvido a partir do mestrado, com aplicação principal em engajamento e retenção de usuários em plataforma digital.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projeto-central"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Ver projeto central
                </a>
                <a
                  href="#cenarios"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-fuchsia-400/40"
                >
                  Ver cenários
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {featureChips.map((chip) => (
                  <span key={chip} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65">
                    {chip}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.28em] text-white/40">
                Produto digital • retenção • growth • processos • modelagem aplicada
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Representação do sistema",
                    "Ajuste com base em dados",
                    "Comparação de cenários",
                    "Interpretação para decisão",
                  ].map((item) => (
                    <div
                      key={item}
                      className="min-h-[96px] rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80 break-words leading-snug flex items-center justify-center text-center transition hover:border-fuchsia-400/40 hover:bg-white/[0.05]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-fuchsia-400/15 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/75">Ciclo central</p>
                  <p className="mt-3 text-lg md:text-xl leading-snug text-white/90 break-words">Observação → estrutura → simulação → decisão</p>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">Posicionamento</p>
                  <p className="mt-3 text-base leading-7 text-white/80">
                    Projeto central com foco em comportamento de usuários e desdobramentos aplicados para contextos específicos de decisão.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <section id="estrutura" className="mt-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Estrutura do portfólio</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Este portfólio é construído a partir de um núcleo analítico central
            </h3>
            <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
              Um projeto principal, desenvolvido a partir de pesquisa em modelagem e otimização, dá origem a aplicações estruturadas para diferentes contextos de decisão.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Projeto central",
                text: "Estrutura analítica voltada à dinâmica de usuários em produto digital, integrando comportamento, retenção e decisão.",
              },
              {
                title: "Projetos aplicados",
                text: "A partir dessa base, foram desenvolvidos projetos direcionados para diferentes contextos, adaptando a mesma lógica analítica.",
              },
              {
                title: "Estrutura de decisão",
                text: "O foco não está apenas em analisar métricas, mas em organizar problemas complexos e orientar decisões de forma consistente.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl transition hover:border-fuchsia-400/30 hover:bg-white/[0.05]"
              >
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projeto-central"
          className="mt-24 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur md:p-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Projeto central</p>
              <h3 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                Estrutura analítica para engajamento e retenção em plataformas digitais
              </h3>
            </div>
            <span className="inline-flex w-fit rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-100">
              Produto digital • comportamento • decisão
            </span>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
            Este projeto foi desenvolvido para representar o comportamento de usuários ao longo do tempo em uma plataforma digital, considerando entrada contínua, ativação, perda de engajamento e reativação.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6 text-base leading-8 text-white/75">
              <div>
                <h4 className="text-xl font-semibold text-white">Contexto</h4>
                <p className="mt-3">
                  Em produtos digitais, crescimento não depende apenas de atrair novos usuários. A evolução da base é influenciada por múltiplos fatores simultâneos, como ativação, retenção, churn e reativação, que interagem ao longo do tempo.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white">O problema</h4>
                <p className="mt-3">
                  A dificuldade não está apenas em medir métricas isoladas, mas em estruturar o sistema de forma que seja possível compreender como diferentes estratégias afetam a qualidade da base, o engajamento e o crescimento sustentável.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white">A solução</h4>
                <p className="mt-3">
                  Foi construída uma estrutura analítica capaz de representar o ciclo de vida dos usuários, ajustar o comportamento do sistema com base em dados observados e simular cenários estratégicos para apoiar decisões em produto digital.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-cyan-400/10 bg-cyan-400/[0.04] p-5 text-sm leading-7 text-cyan-50/80 md:text-base">
                Mais do que acompanhar métricas, o objetivo é entender a dinâmica do sistema e transformar comportamento em decisão.
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Como funciona</p>
                <div className="mt-5 space-y-4">
                  {[
                    [
                      "1. Representação do ciclo de vida",
                      "Organização da base em estados interligados, permitindo observar como os usuários evoluem dentro da plataforma.",
                    ],
                    [
                      "2. Ajuste com base em dados",
                      "Calibração da estrutura a partir de comportamento observado, preservando consistência e interpretabilidade.",
                    ],
                    [
                      "3. Simulação de cenários",
                      "Comparação entre diferentes estratégias para avaliar impacto em crescimento, retenção e qualidade da base.",
                    ],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm font-medium text-white">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-fuchsia-400/10 bg-fuchsia-400/[0.05] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-100/70">O que essa estrutura permite</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Engajamento",
                    "Retenção",
                    "Churn",
                    "Reativação",
                    "Simulação de cenários",
                    "Decisão baseada em dados",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/75">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-white/45">Resultado observado</p>
              <h4 className="mt-3 text-xl font-semibold text-white">Ajuste consistente ao comportamento dos usuários</h4>
              <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
                A estrutura desenvolvida reproduziu de forma consistente o comportamento observado de usuários engajados ao longo do tempo, mantendo estabilidade nas simulações e permitindo leitura clara da dinâmica do sistema.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-fuchsia-400/15 bg-fuchsia-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-100/75">Base analítica</p>
              <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
                A construção deste projeto foi inspirada em abordagens modernas utilizadas em modelagem de sistemas complexos e otimização, com foco em estabilidade, interpretabilidade e aplicação prática em contextos de decisão.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-7 text-white/60 md:text-base">
            Este é o projeto central do portfólio. As demais aplicações podem ser entendidas como desdobramentos dessa mesma forma de estruturar problemas complexos e transformá-los em decisão.
          </p>
        </section>

        <section id="evidencias" className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Evidências visuais</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Visualizações do comportamento do sistema
            </h3>
            <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
              Para preservar a estrutura técnica do projeto, a apresentação prioriza leitura visual, interpretação do comportamento e comparação de cenários, sem expor os detalhes internos da implementação.
            </p>
          </div>

          <div className="mt-14 grid gap-8">
            {imageCards.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl md:p-8 ${
                  index % 2 === 0 ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"
                }`}
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}>
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
                    <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                  </div>
                </div>

                <div className={`flex flex-col justify-center ${index % 2 === 0 ? "order-2" : "order-1 lg:order-2"}`}>
                  <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-100/70">Visual {index + 1}</p>
                  <h4 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">{item.title}</h4>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/45">{item.subtitle}</p>
                  <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="cenarios" className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Análise de cenários</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              O que realmente impacta o crescimento?
            </h3>
            <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
              A estrutura foi utilizada para comparar diferentes estratégias e entender como cada uma impacta a evolução da base, a qualidade do engajamento e o equilíbrio do sistema.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Leitura estratégica</p>
              <h4 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                Crescimento sustentável depende mais de retenção do que de volume isolado
              </h4>

              <div className="mt-8 space-y-5 text-sm leading-7 text-white/75 md:text-base">
                <div>
                  <span className="font-medium text-white">Aumento de aquisição:</span> amplia a base total, mas também eleva proporcionalmente as perdas, o que reduz eficiência no crescimento ativo.
                </div>
                <div>
                  <span className="font-medium text-white">Aumento de reativação:</span> melhora a qualidade da base e amplia a participação relativa de usuários ativos, com menor efeito sobre o volume total.
                </div>
                <div>
                  <span className="font-medium text-white">Redução de churn:</span> apresentou o impacto mais eficiente no crescimento sustentável da base ativa, reduzindo perdas e melhorando o equilíbrio do sistema.
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-cyan-400/10 bg-cyan-400/[0.04] p-5 text-sm leading-7 text-cyan-50/80 md:text-base">
                Insight central: estratégias focadas em retenção geram maior ganho estrutural do que aumento isolado de aquisição.
              </div>
            </div>

            <div className="space-y-6">
              {scenarioCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl transition hover:border-fuchsia-400/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold leading-tight">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-white/75 md:text-base">{item.text}</p>
                    </div>
                    <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-100">
                      {item.metric}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/8 via-white/[0.03] to-white/[0.02] p-8 shadow-2xl md:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Base total final",
                  value: "1.132",
                  detail: "cenário base",
                },
                {
                  title: "Participação final de ativos",
                  value: "20.2%",
                  detail: "equilíbrio do sistema",
                },
                {
                  title: "Melhor direção estratégica",
                  value: "Retenção",
                  detail: "impacto mais eficiente",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">{item.title}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/55">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="aplicacoes" className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Aplicações</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Aplicação da estrutura em diferentes contextos de decisão
            </h3>
            <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
              A mesma base analítica foi adaptada para problemas específicos, considerando o contexto de cada área e o tipo de decisão envolvido.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {applicationCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl transition hover:border-fuchsia-400/30 hover:bg-white/[0.05]"
              >
                <h4 className="text-xl font-semibold leading-tight">{item.title}</h4>
                <div className="mt-5 space-y-4 text-sm leading-7 text-white/75">
                  <p><span className="font-medium text-white">Problema:</span> {item.problem}</p>
                  <p><span className="font-medium text-white">Abordagem:</span> {item.approach}</p>
                  <p><span className="font-medium text-white">Valor:</span> {item.value}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-white/60 md:text-base">
            Todos os projetos apresentados são desdobramentos da mesma estrutura analítica, adaptada para diferentes problemas de decisão.
          </p>
        </section>

        <section id="valor" className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Valor para a empresa</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Como essa abordagem contribui na prática
            </h3>
            <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
              Mais do que análise de dados, o foco está na estruturação de problemas complexos e na construção de decisões consistentes, baseadas em modelagem, otimização e interpretação de comportamento.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {valueCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl"
              >
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-fuchsia-400/15 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Diferencial profissional</p>
              <h4 className="mt-4 text-2xl font-semibold">Base analítica forte com aplicação adaptável</h4>
              <p className="mt-5 text-base leading-8 text-white/75">
                Minha formação em matemática aplicada e modelagem computacional me permitiu desenvolver uma abordagem estruturada para resolução de problemas complexos.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-xl">
              <p className="text-base leading-8 text-white/75 md:text-lg">
                Atuo na construção de modelos e sistemas analíticos que integram dados observados, comportamento dinâmico, restrições do problema e critérios de decisão.
              </p>
              <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
                Tenho experiência no desenvolvimento de soluções utilizando métodos iterativos e análise numérica, com foco em estabilidade, convergência e desempenho computacional.
              </p>
              <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
                Além disso, possuo facilidade em traduzir conceitos técnicos em linguagem prática, contribuindo para a aplicação das análises no contexto real de decisão.
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5 text-sm leading-7 text-white/70 md:text-base">
                O objetivo não é apenas analisar dados, mas estruturar problemas e construir decisões mais eficientes, consistentes e aplicáveis.
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="mt-24 pb-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-fuchsia-500/[0.06] p-8 text-center shadow-2xl md:p-12">
            <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-200/70">Encerramento</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Vamos conversar sobre como estruturar decisões no seu contexto
            </h3>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
              Estou aberta a oportunidades em análise de dados, modelagem e estruturação de decisão, onde possa contribuir com uma abordagem analítica sólida e adaptável a diferentes problemas.
            </p>

            <div className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border border-white/10 bg-black/25 p-6 text-base leading-8 text-white/75 md:text-lg">
              Tenho formação sólida em matemática aplicada e experiência em modelagem, otimização e análise de dados, com foco na construção de soluções para problemas complexos. Busco oportunidades onde possa aplicar essa base analítica para apoiar decisões, estruturar problemas e contribuir com melhoria de resultados.
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 text-white/85">
              <a href="mailto:borba.pinheiro01@gmail.com" className="text-base hover:text-fuchsia-200">
                borba.pinheiro01@gmail.com
              </a>
              <a href="tel:+5573981896893" className="text-base hover:text-fuchsia-200">
                (73) 98189-6893
              </a>
              <a
                href="https://www.linkedin.com/in/hellen-borba-pinheiro-0034451aa"
                target="_blank"
                rel="noreferrer"
                className="text-base hover:text-fuchsia-200"
              >
                linkedin.com/in/hellen-borba-pinheiro-0034451aa
              </a>
            </div>

            <div className="mt-8">
              <a
                href="mailto:borba.pinheiro01@gmail.com"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Entrar em contato
              </a>
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.28em] text-white/40">
              Transformando análise em decisão
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
