/* =========================================================
   Simulado AB-900 — 3 páginas (Home / Simulado / Prova)
   - index.html: links para os modos
   - simulado.html: modo estudo (com explicação)
   - prova.html: modo prova (com tempo e nota final + popup)
========================================================= */

/* ============================
   CONFIGURAÇÃO DE PONTUAÇÃO (estilo Microsoft)
   - 50 questões
   - 20 pontos por questão = 1000 pontos
   - passa com >= 700
============================ */
const TOTAL_QUESTIONS_EXPECTED = 50;
const POINTS_PER_QUESTION = 20;
const PASSING_SCORE = 700; // >= 700 passa

/* ============================
   TEMPO DA PROVA
============================ */
const EXAM_MINUTES = 40;

/* ============================
   EMBARALHAR?
============================ */
const SHUFFLE_QUESTIONS = true;
const SHUFFLE_OPTIONS = false;

/* ============================
   BANCO DE QUESTÕES
   Formato:
   {
     question: "texto",
     options: ["A", "B", "C", "D"],
     answerIndex: 0..3,
     explanation: "texto"
   }

   ✅ Coloque TODAS as 50 questões aqui dentro.
============================ */
const QUESTIONS = [
  // Domínio 1 — Microsoft 365: objetos, serviços e fundamentos de segurança
  {
    question: "Qual é o “objeto” mais básico para conceder acesso a serviços do Microsoft 365?",
    options: ["Site do SharePoint", "Usuário", "Biblioteca de documentos", "Canal do Teams"],
    answerIndex: 1,
    explanation: "A identidade do usuário é a base para autenticação, licenciamento e permissões nos serviços do Microsoft 365."
  },
  {
    question: "Você precisa gerenciar configurações organizacionais, licenças e usuários em um único local. Qual portal você acessa primeiro?",
    options: ["Centro de administração do Exchange", "Centro de administração do Teams", "Centro de administração do Microsoft 365", "Centro de administração do SharePoint"],
    answerIndex: 2,
    explanation: "O Centro de administração do Microsoft 365 é o ponto central para usuários, licenças e configurações gerais."
  },
  {
    question: "Qual serviço do Microsoft 365 é mais associado a email corporativo e calendário?",
    options: ["Microsoft Teams", "Exchange Online", "SharePoint Online", "OneDrive for Business"],
    answerIndex: 1,
    explanation: "Exchange Online provê email corporativo, calendário e recursos de mensagens."
  },
  {
    question: "Qual opção descreve melhor a diferença entre autenticação e autorização?",
    options: [
      "Autenticação define permissões; autorização valida identidade",
      "Autenticação valida identidade; autorização define permissões",
      "Ambas são a mesma coisa",
      "Autorização acontece antes da autenticação"
    ],
    answerIndex: 1,
    explanation: "Autenticação confirma “quem é você”; autorização define “o que você pode acessar”."
  },
  {
    question: "(V/F) No modelo Zero Trust, usuários dentro da rede corporativa são confiáveis por padrão.",
    options: ["Verdadeiro", "Falso"],
    answerIndex: 1,
    explanation: "Zero Trust segue o princípio “nunca confie, sempre verifique”; não há confiança implícita por localização."
  },
  {
    question: "Qual política do Microsoft Entra é usada para controlar acesso com base em sinais como localização, risco e dispositivo?",
    options: ["Grupos dinâmicos", "Conditional Access (Acesso Condicional)", "Sensitivity Labels", "Retention Policies"],
    answerIndex: 1,
    explanation: "Conditional Access aplica requisitos e condições para permitir ou bloquear acesso."
  },
  {
    question: "Qual recurso melhora segurança exigindo dois ou mais fatores para login?",
    options: ["SSO", "MFA", "DLP", "eDiscovery"],
    answerIndex: 1,
    explanation: "MFA adiciona camadas de verificação além da senha."
  },
  {
    question: "Você quer reduzir o número de logins entre aplicativos do Microsoft 365. Qual conceito atende melhor?",
    options: ["SSO (Single Sign-On)", "DLP", "Auditoria", "Retenção"],
    answerIndex: 0,
    explanation: "SSO permite autenticar uma vez e acessar múltiplos serviços."
  },
  {
    question: "Qual é a função principal do Microsoft Entra ID no contexto do Microsoft 365?",
    options: ["Hospedar sites do SharePoint", "Gerenciar identidade, autenticação e acesso", "Armazenar documentos do OneDrive", "Criar relatórios financeiros"],
    answerIndex: 1,
    explanation: "O Entra ID é o serviço de identidade e controle de acesso do ecossistema."
  },
  {
    question: "Qual é um exemplo de “objeto” do Microsoft Teams?",
    options: ["Caixa de correio", "Site collection", "Equipe (Team)", "Tenant"],
    answerIndex: 2,
    explanation: "No Teams, objetos incluem equipes, canais e configurações/políticas relacionadas."
  },
  {
    question: "Você precisa delegar a um usuário apenas permissões específicas de administração (mínimo necessário). Qual princípio está aplicando?",
    options: ["Oversharing", "Least privilege (privilégio mínimo)", "Data residency", "Backup retention"],
    answerIndex: 1,
    explanation: "Privilégio mínimo limita acessos ao necessário para executar a função."
  },
  {
    question: "Qual ferramenta se destaca para segurança e correlação de incidentes no ecossistema Microsoft 365?",
    options: ["Microsoft Defender XDR", "Power BI", "OneNote", "Planner"],
    answerIndex: 0,
    explanation: "Defender XDR apoia proteção, detecção e investigação unificada de incidentes."
  },
  {
    question: "Um usuário precisa colaborar com uma equipe, mas não deve receber e-mails individuais. Qual opção é mais apropriada?",
    options: ["Caixa de correio compartilhada", "Grupo do Microsoft 365", "Biblioteca do SharePoint", "Site público"],
    answerIndex: 1,
    explanation: "Grupos do Microsoft 365 integram colaboração (Outlook/Teams/SharePoint) com governança."
  },

  // (Adaptada) Q14: múltipla escolha (DUAS) -> resposta única equivalente
  {
    question: "(Adaptada) Quais admin centers podem ser usados para gerenciar cargas de trabalho do Microsoft 365?",
    options: [
      "Exchange admin center e Microsoft Purview portal",
      "Azure DevOps e GitHub",
      "Teams e Word",
      "Excel e Forms"
    ],
    answerIndex: 0,
    explanation: "Exchange e Purview são centros de administração relevantes no contexto de cargas do Microsoft 365 e governança."
  },

  {
    question: "Qual é o principal repositório de arquivos pessoais do usuário no Microsoft 365?",
    options: ["SharePoint Online", "OneDrive for Business", "Teams", "Exchange Online"],
    answerIndex: 1,
    explanation: "OneDrive é o armazenamento pessoal do usuário; SharePoint é mais voltado a sites/equipes."
  },
  {
    question: "Em SharePoint, qual item é mais associado a armazenamento organizado de arquivos dentro de um site?",
    options: ["Biblioteca de documentos", "Caixa de correio", "Tenant", "Endpoint"],
    answerIndex: 0,
    explanation: "Bibliotecas organizam documentos e podem usar permissões e metadados."
  },
  {
    question: "Uma equipe deseja conversar e compartilhar arquivos em um único espaço. Qual combinação é mais comum?",
    options: ["Teams + SharePoint", "Excel + OneNote", "Outlook + Forms apenas", "Paint + WordPad"],
    answerIndex: 0,
    explanation: "Arquivos do time no Teams normalmente usam SharePoint/OneDrive como base."
  },

  // Domínio 2 — Proteção de dados e governança (Microsoft Purview + Copilot)
  {
    question: "Qual solução do ecossistema Microsoft é mais ligada a conformidade, rotulagem e DLP?",
    options: ["Microsoft Purview", "Microsoft Defender for Cloud", "Microsoft Paint", "Visual Studio"],
    answerIndex: 0,
    explanation: "Purview centraliza governança e conformidade de dados."
  },
  {
    question: "Você quer classificar conteúdo como “Confidencial” e aplicar criptografia/restrições. Que recurso usa?",
    options: ["Sensitivity labels (rótulos de confidencialidade)", "Conditional Access", "Shared mailbox", "Viva Engage"],
    answerIndex: 0,
    explanation: "Rótulos classificam conteúdo e podem acionar proteção e restrições."
  },
  {
    question: "Qual recurso ajuda a evitar que dados sensíveis sejam compartilhados indevidamente (ex.: cartão, CPF) via email/Teams?",
    options: ["eDiscovery", "DLP (Data Loss Prevention)", "SSO", "Guest access"],
    answerIndex: 1,
    explanation: "DLP ajuda a detectar e bloquear/alertar sobre compartilhamento indevido de dados sensíveis."
  },
  {
    question: "Qual conceito descreve melhor o risco de oversharing em SharePoint relacionado ao Copilot?",
    options: [
      "Copilot apaga arquivos automaticamente",
      "Copilot cria usuários admin",
      "Copilot pode expor conteúdo que o usuário já tem permissão de ver, ampliando impacto de permissões excessivas",
      "Copilot ignora permissões do SharePoint"
    ],
    answerIndex: 2,
    explanation: "Copilot respeita permissões, mas permissões excessivas aumentam o conteúdo que pode ser encontrado e resumido."
  },
  {
    question: "(V/F) O Microsoft 365 Copilot acessa dados ignorando permissões do usuário para “melhorar a resposta”.",
    options: ["Verdadeiro", "Falso"],
    answerIndex: 1,
    explanation: "O Copilot opera dentro dos limites de acesso do usuário e respeita permissões existentes."
  },
  {
    question: "Qual recurso mantém conteúdo por um período definido para atender requisitos legais/regulatórios?",
    options: ["Retention (políticas de retenção)", "MFA", "SSO", "DNS"],
    answerIndex: 0,
    explanation: "Retenção define preservação/expiração de conteúdo conforme políticas e requisitos."
  },
  {
    question: "Você precisa localizar e coletar conteúdo (e-mails/arquivos/chats) para uma investigação legal. Qual funcionalidade é apropriada?",
    options: ["eDiscovery", "SharePoint hub site", "Viva Insights", "Teams live events"],
    answerIndex: 0,
    explanation: "eDiscovery suporta investigação e coleta de conteúdo para fins legais e de conformidade."
  },
  {
    question: "Qual é o objetivo principal da auditoria (audit logs) no Microsoft 365?",
    options: [
      "Aumentar velocidade do OneDrive",
      "Registrar atividades de usuários e administradores para rastreabilidade",
      "Criar sites automaticamente",
      "Substituir MFA"
    ],
    answerIndex: 1,
    explanation: "Auditoria fornece visibilidade e rastreabilidade para investigação e conformidade."
  },

  // (Adaptada) Q26: múltipla escolha (DUAS) -> resposta única equivalente (A e C)
  {
    question: "(Adaptada) Quais ações ajudam a reduzir riscos de dados com Copilot?",
    options: [
      "Revisar permissões/compartilhamentos no SharePoint e aplicar rótulos/DLP com Purview",
      "Desabilitar completamente logs de auditoria e remover MFA",
      "Usar apenas VPN e ignorar rotulagem/classificação",
      "Aumentar armazenamento e liberar compartilhamento externo total"
    ],
    answerIndex: 0,
    explanation: "Governança de permissões (evitar oversharing) e controles do Purview (classificação/DLP) fortalecem a proteção."
  },

  {
    question: "Um administrador quer aplicar regras diferentes para dados “Público” vs “Confidencial”. Qual abordagem é mais adequada?",
    options: ["Criar dois tenants", "Usar Sensitivity labels + políticas (DLP/retention) por classificação", "Usar somente Teams", "Usar apenas VPN"],
    answerIndex: 1,
    explanation: "Classificação e políticas por categoria são práticas de governança."
  },
  {
    question: "Qual opção é um exemplo de controle de governança focado em conformidade (não identidade)?",
    options: ["Conditional Access", "Sensitivity labels", "SSO", "MFA"],
    answerIndex: 1,
    explanation: "Rótulos e políticas de informação são do eixo de conformidade/governança."
  },
  {
    question: "Você precisa impedir compartilhamento externo de arquivos marcados como “Confidencial”. Qual combinação faz mais sentido?",
    options: ["DLP + Sensitivity labels", "SSO + MFA", "Viva Insights + Planner", "Teams + Whiteboard"],
    answerIndex: 0,
    explanation: "Rotulagem + políticas (como DLP) podem restringir ações com dados sensíveis, inclusive compartilhamento externo."
  },
  {
    question: "Qual risco é mais provável se uma organização habilitar Copilot sem revisar governança de dados?",
    options: [
      "Aumento de custo de energia elétrica",
      "Respostas sem contexto algum",
      "Exposição de informações devido a permissões e compartilhamentos antigos/abertos",
      "Falha total do Exchange"
    ],
    answerIndex: 2,
    explanation: "Copilot pode ampliar o impacto de permissões abertas/antigas, tornando oversharing um risco maior."
  },

  // (Adaptada) Q31: múltipla escolha (TRÊS) -> resposta única equivalente (A, B e C)
  {
    question: "(Adaptada) Quais ferramentas/áreas se relacionam diretamente a governança e proteção no Microsoft 365?",
    options: [
      "Microsoft Purview, Audit logs e Sensitivity labels",
      "Xbox Game Bar, Paint e Calculadora",
      "Somente Word, Excel e PowerPoint",
      "Apenas VPN e roteadores físicos"
    ],
    answerIndex: 0,
    explanation: "Purview + auditoria + rotulagem são pilares importantes de governança e proteção de dados."
  },

  {
    question: "Qual opção descreve melhor “Data Protection” no contexto do Copilot?",
    options: [
      "Apenas criptografia de disco local",
      "Práticas e controles para reduzir risco de vazamento/uso indevido de dados acessados pelo Copilot",
      "Desligar o Teams",
      "Usar somente senhas fracas"
    ],
    answerIndex: 1,
    explanation: "Data Protection envolve controles como permissões, DLP, rotulagem, auditoria, retenção e governança."
  },

  // Domínio 3 — Administração básica do Copilot e Agentes
  {
    question: "Qual é uma tarefa típica de administração do Microsoft 365 Copilot?",
    options: ["Criar VM no Azure", "Gerenciar licenças do Copilot", "Escrever código em C++", "Configurar roteadores físicos"],
    answerIndex: 1,
    explanation: "Administração inclui licenciamento, monitoramento e governança do Copilot."
  },
  {
    question: "Onde você pode acompanhar sinais de adoção/uso do Copilot para entender engajamento?",
    options: ["Viva Insights / Copilot Analytics (quando disponível)", "Bloco de notas", "Paint", "Calculadora"],
    answerIndex: 0,
    explanation: "Sinais de adoção/uso podem ser acompanhados por relatórios e analytics do ecossistema Microsoft 365."
  },
  {
    question: "Um administrador quer evitar gastos inesperados com Copilot em modelo de cobrança por consumo. Qual ação é mais coerente?",
    options: [
      "Ignorar consumo e liberar geral",
      "Monitorar uso e definir controles/limites conforme política organizacional",
      "Desativar auditoria",
      "Remover rótulos do Purview"
    ],
    answerIndex: 1,
    explanation: "Governança financeira inclui monitorar consumo e aplicar controles/limites quando necessário."
  },
  {
    question: "Qual definição descreve melhor um agente no contexto do Copilot?",
    options: ["Um antivírus", "Um recurso de automação/assistência orientado por IA para tarefas e fluxos específicos", "Um servidor físico", "Um tipo de licença do Exchange"],
    answerIndex: 1,
    explanation: "Agentes são extensões orientadas por IA para cenários e tarefas específicas."
  },

  // (Adaptada) Q37: múltipla escolha (DUAS) -> resposta única equivalente (A e B)
  {
    question: "(Adaptada) Quais preocupações são essenciais ao habilitar agentes para usuários?",
    options: [
      "Permissões de acesso a dados e ciclo de vida/governança/aprovação",
      "Cor do tema do Windows e papel de parede do usuário",
      "Som do Windows e velocidade do mouse",
      "Tamanho do monitor e áudio do computador"
    ],
    answerIndex: 0,
    explanation: "O ponto crítico é segurança/permissões e governança (aprovação, responsabilidade, ciclo de vida)."
  },

  {
    question: "Você criou um agente, mas ele não aparece para alguns usuários. Qual causa é MAIS provável?",
    options: [
      "O Teams está atualizado demais",
      "Falta de permissões/licenciamento ou escopo de disponibilização do agente",
      "O mouse está sem bateria",
      "O OneDrive está vazio"
    ],
    answerIndex: 1,
    explanation: "Normalmente está relacionado a licença, permissões, políticas ou escopo de publicação do agente."
  },
  {
    question: "Qual é uma boa prática de governança para implantação de agentes?",
    options: [
      "Permitir qualquer agente sem revisão",
      "Definir processo de aprovação e donos responsáveis (owner)",
      "Desligar logs",
      "Compartilhar senhas administrativas"
    ],
    answerIndex: 1,
    explanation: "Governança exige responsáveis, aprovação e rastreabilidade."
  },
  {
    question: "Você precisa controlar quem pode criar agentes. O que é mais adequado?",
    options: [
      "Ajustar políticas/permissões administrativas e papéis (RBAC)",
      "Criar um canal no Teams",
      "Mudar o idioma do Outlook",
      "Aumentar armazenamento do OneDrive"
    ],
    answerIndex: 0,
    explanation: "Controle de criação/gestão passa por papéis e permissões."
  },

  // (Adaptada) Q41: matching -> resposta única equivalente
  {
    question: "(Adaptada) Relacione o serviço ao propósito mais provável: Purview / Entra ID / Exchange Online.",
    options: [
      "Purview = Governança e conformidade | Entra ID = Identidade e acesso | Exchange = Email e calendário",
      "Purview = Email e calendário | Entra ID = Governança e conformidade | Exchange = Identidade e acesso",
      "Purview = Identidade e acesso | Entra ID = Email e calendário | Exchange = Governança e conformidade",
      "Purview = Armazenamento pessoal | Entra ID = Vídeos | Exchange = Planilhas"
    ],
    answerIndex: 0,
    explanation: "Purview se relaciona a governança/conformidade; Entra ID a identidade/acesso; Exchange a email/calendário."
  },

  {
    question: "Qual é um motivo válido para monitorar prompts e uso do Copilot (governança)?",
    options: [
      "Para reduzir a qualidade das respostas",
      "Para entender padrões de uso, riscos e necessidade de treinamento",
      "Para impedir qualquer uso de IA sempre",
      "Para substituir a equipe de TI"
    ],
    answerIndex: 1,
    explanation: "Monitoramento ajuda a apoiar adoção, reduzir riscos e promover melhoria contínua."
  },
  {
    question: "Um administrador quer reduzir risco de usuários solicitarem dados sensíveis ao Copilot. Qual medida combina melhor?",
    options: [
      "Remover MFA",
      "Aplicar rótulos/sensibilidade e políticas DLP; revisar permissões e compartilhamentos",
      "Liberar acesso externo total",
      "Desativar o Exchange"
    ],
    answerIndex: 1,
    explanation: "Proteção é fortalecida com Purview (rotulagem/DLP) e governança de permissões/compartilhamento."
  },

  // (Adaptada) Q44: múltipla escolha (DUAS) -> resposta única equivalente (A e B)
  {
    question: "(Adaptada) Qual conjunto representa “tarefas administrativas básicas” para Copilot?",
    options: [
      "Atribuir licenças/controle de cobrança e monitorar adoção/revisar governança",
      "Configurar rede BGP e soldar hardware",
      "Apenas criar sites no SharePoint e trocar papel de parede",
      "Desativar auditoria e remover MFA"
    ],
    answerIndex: 0,
    explanation: "Administração básica envolve licenças, uso/cobrança, monitoramento de adoção e governança."
  },

  {
    question: "Qual opção é um exemplo de “controle de identidade” que afeta diretamente acesso ao Copilot?",
    options: ["Conditional Access", "Biblioteca de documentos", "Retention policy", "eDiscovery case"],
    answerIndex: 0,
    explanation: "Acesso Condicional define condições/requisitos para acesso e pode impactar o uso de apps e serviços."
  },

  // (Adaptada) Q46: múltipla escolha (TRÊS) -> resposta única equivalente (A, B e C)
  {
    question: "(Adaptada) Ao preparar sua organização para Copilot, o que faz mais sentido revisar?",
    options: [
      "Permissões/compartilhamentos, rotulagem/classificação (Purview) e auditoria/visibilidade de atividade",
      "Som do Windows e papel de parede",
      "Apenas instalar atualizações do Office e ignorar permissões",
      "Somente criar mais canais no Teams"
    ],
    answerIndex: 0,
    explanation: "Revisar permissões, classificação/rotulagem e auditoria reduz risco de oversharing e melhora governança."
  },

  // (Adaptada) Q47: ordering -> resposta única equivalente
  {
    question: "(Adaptada) Qual é a sequência lógica de implantação responsável do Copilot?",
    options: [
      "Revisar permissões e governança de dados → Atribuir licenças/modelo de cobrança → Habilitar piloto → Monitorar adoção e ajustar políticas",
      "Habilitar piloto → Atribuir licenças → Revisar governança → Monitorar",
      "Monitorar → Habilitar piloto → Revisar governança → Licenciar",
      "Licenciar → Monitorar → Habilitar piloto → Revisar governança"
    ],
    answerIndex: 0,
    explanation: "Uma implantação responsável começa pela governança, passa por licenciamento/escopo, piloto controlado e monitoramento."
  },

  {
    question: "Qual cenário descreve melhor quando usar Microsoft Purview em vez de Entra ID?",
    options: ["Para aplicar MFA", "Para classificar dados e aplicar DLP/retenção", "Para criar usuários", "Para configurar Conditional Access"],
    answerIndex: 1,
    explanation: "Purview é voltado a dados/compliance (classificação, DLP, retenção); Entra ID é identidade/acesso."
  },
  {
    question: "Um usuário pergunta: “Copilot pode ver meus emails?” Qual resposta administrativa correta (alto nível) é mais adequada?",
    options: [
      "Sim, ele vê tudo, mesmo o que você não tem permissão",
      "Ele pode usar conteúdo ao qual você já tem acesso no Microsoft 365, respeitando permissões",
      "Não, Copilot nunca usa e-mail",
      "Ele só usa PDFs locais do computador"
    ],
    answerIndex: 1,
    explanation: "O Copilot utiliza dados do Microsoft 365 respeitando as permissões existentes do usuário."
  },
  {
    question: "Qual objetivo é mais alinhado com a certificação AB900?",
    options: [
      "Criar pipelines de CI/CD avançados",
      "Administrar, proteger e governar um ambiente Microsoft 365 com Copilot e agentes",
      "Treinar modelos de IA do zero",
      "Administrar redes físicas de datacenter"
    ],
    answerIndex: 1,
    explanation: "O AB900 valida fundamentos de administração, segurança e governança para Copilot e agentes no Microsoft 365."
  }
];


/* ============================
   ESTADO
============================ */
let mode = "study"; // "study" | "exam"
let currentIndex = 0;
let selectedIndex = null;

// score = quantidade de acertos
let score = 0;

// timer
let examSecondsTotal = EXAM_MINUTES * 60;
let remainingSeconds = examSecondsTotal;
let timerInterval = null;

// cópia (para embaralhar sem mexer no original)
let workingQuestions = [];

/* ============================
   HELPERS DOM
============================ */
function $(id) {
  return document.getElementById(id);
}
function show(el) {
  if (el) el.classList.remove("hidden");
}
function hide(el) {
  if (el) el.classList.add("hidden");
}

/* ============================
   UTIL: embaralhar array (Fisher-Yates)
============================ */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================
   PREPARA QUESTÕES (embaralha e recalcula answerIndex se precisar)
============================ */
function buildWorkingQuestions() {
  let qList = [...QUESTIONS];

  if (SHUFFLE_QUESTIONS) qList = shuffleArray(qList);

  if (SHUFFLE_OPTIONS) {
    qList = qList.map((q) => {
      const correctText = q.options[q.answerIndex];
      const shuffled = shuffleArray(q.options);
      return {
        ...q,
        options: shuffled,
        answerIndex: shuffled.indexOf(correctText)
      };
    });
  }

  return qList;
}

/* ============================
   START: Simulado (estudo)
============================ */
function startStudy() {
  mode = "study";
  resetState();
  workingQuestions = buildWorkingQuestions();
  renderQuestion();

  const timer = $("timer");
  if (timer) timer.textContent = "";
}

/* ============================
   START: Prova
============================ */
function startExam() {
  mode = "exam";
  resetState();
  workingQuestions = buildWorkingQuestions();
  remainingSeconds = examSecondsTotal;
  startTimer();
  renderQuestion();
}

/* ============================
   RESET
============================ */
function resetState() {
  currentIndex = 0;
  selectedIndex = null;
  score = 0;

  const result = $("result");
  if (result) {
    result.innerHTML = "";
    hide(result);
  }

  stopTimer();
  closeModal(); // se modal estiver aberto
}

/* ============================
   RENDER DA QUESTÃO
============================ */
function renderQuestion() {
  const container = $("questionContainer");
  const result = $("result");
  if (!container) return;

  if (currentIndex >= workingQuestions.length) {
    finish();
    return;
  }

  if (result) {
    result.innerHTML = "";
    hide(result);
  }

  selectedIndex = null;

  const q = workingQuestions[currentIndex];

  container.innerHTML = `
    <div class="card">
      <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;">
        <div style="font-weight:900;color:#111827;">
          Questão ${currentIndex + 1} de ${workingQuestions.length}
        </div>
        <div style="font-weight:800;color:#6b7280;">
          Modo: ${mode === "study" ? "Simulado" : "Prova"}
        </div>
      </div>

      <h2 style="margin:14px 0 10px 0; color:#111827; font-size:18px; line-height:1.35;">
        ${q.question}
      </h2>

      <div style="display:grid; gap:10px; margin-top:12px;">
        ${q.options
          .map(
            (opt, i) => `
              <button type="button" class="option-btn" onclick="selectAnswer(${i})">
                ${opt}
              </button>
            `
          )
          .join("")}
      </div>

      ${
        mode === "study"
          ? `<p style="margin-top:14px;color:#6b7280;">
               No modo simulado, selecione e clique em <strong>Ver resposta</strong> para ver a explicação.
             </p>`
          : `<p style="margin-top:14px;color:#6b7280;">
               No modo prova, selecione e avance. O resultado aparece apenas no final.
             </p>`
      }
    </div>
  `;
}

/* ============================
   SELEÇÃO DE RESPOSTA
============================ */
function selectAnswer(index) {
  selectedIndex = index;

  const container = $("questionContainer");
  if (!container) return;

  const buttons = container.querySelectorAll("button.option-btn");
  buttons.forEach((btn, i) => {
    const isSelected = i === index;
    btn.style.border = isSelected ? "2px solid #2563eb" : "1px solid #e5e7eb";
    btn.style.background = isSelected ? "#eff6ff" : "#ffffff";
  });
}

/* ============================
   VER RESPOSTA (somente estudo)
============================ */
function showExplanation() {
  if (mode !== "study") return;

  const result = $("result");
  if (!result) return;

  if (selectedIndex === null) {
    result.innerHTML = `<div style="font-weight:900;color:#b45309;">⚠️ Selecione uma alternativa antes de ver a resposta.</div>`;
    show(result);
    return;
  }

  const q = workingQuestions[currentIndex];
  const isCorrect = selectedIndex === q.answerIndex;

  result.innerHTML = `
    <div style="font-weight:900;font-size:16px;color:${isCorrect ? "#065f46" : "#991b1b"};">
      ${isCorrect ? "✅ Correto!" : "❌ Incorreto!"}
    </div>

    <div style="margin-top:10px;color:#111827;">
      <strong>Resposta certa:</strong> ${q.options[q.answerIndex]}
    </div>

    <div style="margin-top:10px;color:#374151;line-height:1.45;">
      <strong>Explicação:</strong> ${q.explanation}
    </div>
  `;
  show(result);
}

/* ============================
   PRÓXIMA (ambos modos)
============================ */
function nextQuestion() {
  const result = $("result");
  const q = workingQuestions[currentIndex];

  if (selectedIndex === null) {
    if (result) {
      result.innerHTML = `<div style="font-weight:900;color:#b45309;">⚠️ Selecione uma alternativa antes de avançar.</div>`;
      show(result);
    }
    return;
  }

  // prova: soma acerto aqui (sem feedback imediato)
  if (mode === "exam" && selectedIndex === q.answerIndex) {
    score++;
  }

  currentIndex++;
  renderQuestion();
}

/* ============================
   FINALIZAÇÃO (pontuação 0..1000 + corte 700)
============================ */
function finish() {
  stopTimer();

  const total = workingQuestions.length;               // deve ser 50
  const correct = score;                               // acertos
  const maxScore = total * POINTS_PER_QUESTION;        // deve ser 1000
  const scorePoints = correct * POINTS_PER_QUESTION;   // 0..1000
  const approved = scorePoints >= PASSING_SCORE;

  const neededCorrect = Math.ceil(PASSING_SCORE / POINTS_PER_QUESTION); // 35
  const percent = total ? Math.round((correct / total) * 100) : 0;

  // Limpa a área das questões para ficar elegante
  const container = $("questionContainer");
  if (container) {
    container.innerHTML = `
      <div class="card">
        <h2 style="margin:0;color:#111827;">✅ Concluído!</h2>
        <p style="margin-top:10px;color:#374151;line-height:1.5;">
          Seu resultado foi exibido em um pop-up. Você pode voltar para Home a qualquer momento.
        </p>
      </div>
    `;
  }

  const result = $("result");
  if (result) hide(result);

  // Se não tiver modal no HTML, mostra fallback na própria tela
  if (!$("resultModal") || !$("modalBody") || !$("modalTitle")) {
    if (container) {
      container.innerHTML = `
        <div class="card">
          <h2 style="margin:0;color:#111827;">Resultado</h2>
          <p style="margin-top:10px;color:#374151;line-height:1.6;">
            <strong>Acertos:</strong> ${correct} de ${total}<br>
            <strong>Pontuação:</strong> ${scorePoints} / ${maxScore}<br>
            <strong>Corte:</strong> ${PASSING_SCORE} (mínimo)<br>
            <strong>Status:</strong> ${approved ? "Aprovado" : "Reprovado"}<br>
            <strong>Percentual:</strong> ${percent}%
          </p>
          <div style="margin-top:12px;">
            <a href="index.html">⬅️ Voltar para Home</a>
          </div>
        </div>
      `;
    }
    return;
  }

  // SIMULADO (study)
  if (mode === "study") {
    const html = `
      <div style="font-weight:900; font-size:16px; margin-bottom:8px;">📚 Simulado finalizado!</div>

      <div style="margin-top:10px; color:#374151; line-height:1.6;">
        Você concluiu o modo <strong>Simulado</strong>.
        <br><br>
        <strong>Seu desempenho (referência):</strong><br>
        Acertos: <strong>${correct}</strong> de ${total}<br>
        Pontuação: <strong>${scorePoints}</strong> / ${maxScore}<br>
        Corte para aprovação: <strong>${PASSING_SCORE}</strong> (≈ ${neededCorrect} acertos)
      </div>

      <div style="margin-top:12px; padding:12px; border-radius:14px; background:#f3f4f6; color:#111827;">
        <strong>Dica:</strong> faça o modo <strong>Prova</strong> para treinar com tempo e resultado final.
      </div>
    `;
    openModal(html, "Simulado concluído", true);
    return;
  }

  // PROVA (exam)
  const statusColor = approved ? "#065f46" : "#991b1b";
  const statusText = approved ? "✅ Aprovado!" : "📝 Reprovado";

  const html = `
    <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
      <div style="font-weight:900; font-size:16px;">📝 Prova finalizada!</div>
      <div style="font-weight:900; color:${statusColor};">${statusText}</div>
    </div>

    <div style="margin-top:10px; color:#374151; line-height:1.6;">
      <strong>Acertos:</strong> ${correct} de ${total}<br>
      <strong>Pontuação:</strong> ${scorePoints} / ${maxScore}<br>
      <strong>Corte:</strong> ${PASSING_SCORE} pontos (mínimo)<br>
      <strong>Percentual:</strong> ${percent}%
    </div>

    <div style="margin-top:12px; padding:12px; border-radius:14px; background:#f3f4f6; color:#111827;">
      <strong>Para passar:</strong> você precisa de pelo menos <strong>${neededCorrect}</strong> acertos.
    </div>
  `;

  openModal(html, "Sua nota", true);
}

/* ============================
   TIMER (modo prova)
============================ */
function startTimer() {
  const timer = $("timer");
  if (!timer) return;

  renderTimer();

  timerInterval = setInterval(() => {
    remainingSeconds--;
    if (remainingSeconds < 0) remainingSeconds = 0;

    renderTimer();

    if (remainingSeconds === 0) {
      finish();
    }
  }, 1000);
}

function renderTimer() {
  const timer = $("timer");
  if (!timer) return;

  const min = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const sec = String(remainingSeconds % 60).padStart(2, "0");
  timer.textContent = `⏱️ Tempo restante: ${min}:${sec}`;
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

/* ============================
   MODAL (POP-UP) — abrir/fechar + retry
============================ */
function openModal(htmlBody, title = "Resultado", showRetry = true) {
  const modal = $("resultModal");
  const body = $("modalBody");
  const t = $("modalTitle");
  const retryBtn = $("modalRetryBtn");

  if (!modal || !body || !t) return;

  t.textContent = title;
  body.innerHTML = htmlBody;

  if (retryBtn) {
    retryBtn.style.display = showRetry ? "inline-flex" : "none";
  }

  modal.classList.remove("hidden");
  document.addEventListener("keydown", escToCloseModal);
}

function closeModal() {
  const modal = $("resultModal");
  if (!modal) return;

  modal.classList.add("hidden");
  document.removeEventListener("keydown", escToCloseModal);
}

function escToCloseModal(e) {
  if (e.key === "Escape") closeModal();
}

function retryFromModal() {
  closeModal();
  if (mode === "exam") startExam();
  else startStudy();
}
``