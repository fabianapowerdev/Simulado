/* =========================================================
   Simulado AB-900 — 3 páginas (Home / Simulado / Prova)
   - index.html: links para os modos (com seletor de quantidade)
   - simulado.html: modo estudo (com explicação)
   - prova.html: modo prova (com tempo e nota final + popup)
========================================================= */

/* ============================
   CONFIGURAÇÃO DE PONTUAÇÃO (estilo Microsoft)
   - Escala fixa de 1000 pontos
   - Passa com >= 700
   - Pontos por questão = 1000 / quantidade selecionada
============================ */
const MAX_SCORE = 1000;
const PASSING_SCORE = 700; // >= 700 passa

/* ============================
   EMBARALHAR?
============================ */
const SHUFFLE_QUESTIONS = true;
const SHUFFLE_OPTIONS = false;

/* ============================
   LER QUANTIDADE DA URL
============================ */
function getSelectedQty() {
  const params = new URLSearchParams(window.location.search);
  const qty = parseInt(params.get("qty"));
  if (isNaN(qty) || qty <= 0) return QUESTIONS.length; // padrão: todas
  return Math.min(qty, QUESTIONS.length);
}

/* ============================
   BANCO DE QUESTÕES (222 questões)
============================ */
const QUESTIONS = [
 
{
    question: "Qual é o “objeto” mais básico para conceder acesso a serviços do Microsoft 365?",
    options: ["Site do SharePoint", "Usuário", "Biblioteca de documentos", "Canal do Teams"],
    answerIndex: 1,
    explanation: "No Microsoft 365, o acesso aos serviços é fundamentado na identidade. Por esse motivo, o objeto mais básico para conceder acesso é o usuário, pois é por meio da conta de usuário que ocorre a autenticação, a atribuição de licenças e a aplicação de permissões. Sites do SharePoint, bibliotecas de documentos e canais do Teams são recursos organizacionais e de colaboração, mas não representam identidades. Esses elementos dependem de usuários (ou grupos de usuários) para que o acesso seja realmente concedido. Sem um usuário autenticado, não há como acessar nenhum serviço do Microsoft 365."
  },
  {
    question: "Você precisa gerenciar configurações organizacionais, licenças e usuários em um único local. Qual portal você acessa primeiro?",
    options: ["Centro de administração do Exchange", "Centro de administração do Teams", "Centro de administração do Microsoft 365", "Centro de administração do SharePoint"],
    answerIndex: 2,
    explanation: "O ponto central para a administração do ambiente é o Centro de administração do Microsoft 365. Ele foi projetado exatamente para permitir o gerenciamento unificado de usuários, licenças, domínios e configurações organizacionais. Outros centros de administração, como Exchange, Teams ou SharePoint, são voltados para cargas de trabalho específicas e não substituem o papel central do Microsoft 365 admin center. Por isso, quando a necessidade envolve uma visão geral do tenant, esse é sempre o primeiro portal a ser acessado."
  },
  {
    question: "Qual serviço do Microsoft 365 é mais associado a email corporativo e calendário?",
    options: ["Microsoft Teams", "Exchange Online", "SharePoint Online", "OneDrive for Business"],
    answerIndex: 1,
    explanation: "O Exchange Online é o serviço responsável por oferecer email corporativo, calendários, contatos e funcionalidades de mensagens no Microsoft 365. Embora aplicativos como Teams e Outlook façam parte da experiência do usuário, eles consomem os serviços fornecidos pelo Exchange Online. SharePoint e OneDrive são voltados principalmente para armazenamento e colaboração em arquivos, não para mensagens e calendário."
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
    explanation: "A autenticação é o processo de validação da identidade, confirmando quem o usuário é. A autorização ocorre depois disso e define o que esse usuário pode acessar ou executar dentro do ambiente. Esses conceitos são distintos e complementares. Não é possível autorizar um usuário sem que ele tenha sido previamente autenticado, e confundir esses dois processos é um erro conceitual comum avaliado em exames de fundamentos."
  },
  {
    question: "(V/F) No modelo Zero Trust, usuários dentro da rede corporativa são confiáveis por padrão.",
    options: ["Verdadeiro", "Falso"],
    answerIndex: 1,
    explanation: "No modelo Zero Trust, não existe confiança implícita, nem mesmo para usuários que estão dentro da rede corporativa. A premissa central é “never trust, always verify”. Cada solicitação de acesso deve ser validada com base em identidade, dispositivo, localização e outros sinais de risco. Esse modelo substitui a abordagem tradicional baseada apenas em perímetro de rede."
  },
  {
    question: "Qual política do Microsoft Entra é usada para controlar acesso com base em sinais como localização, risco e dispositivo?",
    options: ["Grupos dinâmicos", "Conditional Access (Acesso Condicional)", "Sensitivity Labels", "Retention Policies"],
    answerIndex: 1,
    explanation: "O controle de acesso baseado em contexto no Microsoft Entra é realizado por meio do Conditional Access. Esse recurso permite criar políticas que avaliam múltiplos sinais — como localização, estado do dispositivo e nível de risco do login — para decidir se o acesso será permitido, bloqueado ou se exigirá controles adicionais, como MFA. Recursos como rótulos de confidencialidade ou políticas de retenção não atuam no momento do login e, portanto, não atendem a esse cenário."
  },
  {
    question: "Qual recurso melhora segurança exigindo dois ou mais fatores para login?",
    options: ["SSO", "MFA", "DLP", "eDiscovery"],
    answerIndex: 1,
    explanation: "A autenticação multifator (MFA) fortalece a segurança ao exigir mais de um fator de verificação durante o login, combinando algo que o usuário sabe, possui ou é. Esse mecanismo reduz significativamente o risco de acesso não autorizado em casos de comprometimento de credenciais. Outros recursos, como SSO, DLP ou eDiscovery, têm propósitos diferentes e não atuam diretamente no processo de autenticação."
  },
  {
    question: "Você quer reduzir o número de logins entre aplicativos do Microsoft 365. Qual conceito atende melhor?",
    options: ["SSO (Single Sign-On)", "DLP", "Auditoria", "Retenção"],
    answerIndex: 0,
    explanation: "O conceito de Single Sign On (SSO) permite que o usuário se autentique uma única vez e tenha acesso a múltiplos serviços e aplicativos integrados ao Microsoft 365 sem a necessidade de novos logins. Seu objetivo é melhorar a experiência do usuário e reduzir a complexidade de acesso, sem substituir controles de segurança como MFA."
  },
  {
    question: "Qual é a função principal do Microsoft Entra ID no contexto do Microsoft 365?",
    options: ["Hospedar sites do SharePoint", "Gerenciar identidade, autenticação e acesso", "Armazenar documentos do OneDrive", "Criar relatórios financeiros"],
    answerIndex: 1,
    explanation: "O Microsoft Entra ID atua como o serviço central de identidade, autenticação e controle de acesso do ecossistema Microsoft. Ele é responsável por validar usuários, aplicar políticas de segurança como Conditional Access e MFA, e permitir integração segura com aplicações. Não é utilizado para armazenar arquivos, hospedar sites ou gerar relatórios financeiros."
  },
  {
    question: "Qual é um exemplo de “objeto” do Microsoft Teams?",
    options: ["Caixa de correio", "Site collection", "Equipe (Team)", "Tenant"],
    answerIndex: 2,
    explanation: "Uma equipe (Team) é um dos principais objetos do Microsoft Teams, representando um espaço onde usuários colaboram por meio de conversas, reuniões e compartilhamento de arquivos. Outros elementos, como caixas de correio e coleções de sites, pertencem a serviços diferentes, como Exchange e SharePoint. O Teams funciona como uma camada de colaboração que se integra a esses serviços, mas mantém seus próprios objetos lógicos, como equipes e canais."
  },
  {
    question: "Você precisa delegar a um usuário apenas permissões específicas de administração (mínimo necessário). Qual princípio está aplicando?",
    options: ["Oversharing", "Least privilege (privilégio mínimo)", "Data residency", "Backup retention"],
    answerIndex: 1,
    explanation: "Ao conceder somente as permissões estritamente necessárias para que um usuário execute suas tarefas administrativas, está sendo aplicado o princípio do privilégio mínimo (Least Privilege). Esse princípio é fundamental para segurança e governança, pois reduz a superfície de ataque e limita o impacto de erros ou comprometimentos de conta. Conceder acesso excessivo vai contra boas práticas de segurança recomendadas pela Microsoft e pelos modelos modernos de identidade, como Zero Trust."
  },
  {
    question: "Qual ferramenta se destaca para segurança e correlação de incidentes no ecossistema Microsoft 365?",
    options: ["Microsoft Defender XDR", "Power BI", "OneNote", "Planner"],
    answerIndex: 0,
    explanation: "O Microsoft Defender XDR se destaca por fornecer uma visão unificada de segurança, correlacionando sinais e incidentes provenientes de múltiplas cargas de trabalho, como identidades, endpoints, email e aplicativos. Essa abordagem integrada facilita a detecção, investigação e resposta a ameaças, o que está alinhado com o foco do Microsoft 365 em proteção contínua e resposta centralizada a incidentes de segurança."
  },
  {
    question: "Um usuário precisa colaborar com uma equipe, mas não deve receber e-mails individuais. Qual opção é mais apropriada?",
    options: ["Caixa de correio compartilhada", "Grupo do Microsoft 365", "Biblioteca do SharePoint", "Site público"],
    answerIndex: 1,
    explanation: "O Grupo do Microsoft 365 é a opção mais adequada para esse cenário porque centraliza a colaboração entre usuários, integrando recursos como Teams, SharePoint e Planner, sem a obrigatoriedade de envio de e-mails individuais para cada membro. Grupos permitem colaboração estruturada e governada, sem sobrecarregar caixas de entrada pessoais com mensagens diretas."
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
    explanation: "O Exchange admin center e o Microsoft Purview portal são utilizados para gerenciar cargas de trabalho específicas dentro do Microsoft 365. O Exchange admin center é voltado para administração de email e recursos de mensagens, enquanto o Purview centraliza atividades relacionadas à conformidade, governança e proteção de dados. Ferramentas como Azure DevOps e GitHub são usadas para desenvolvimento de software e não fazem parte da administração direta das cargas de trabalho do Microsoft 365."
  },

  {
    question: "Qual é o principal repositório de arquivos pessoais do usuário no Microsoft 365?",
    options: ["SharePoint Online", "OneDrive for Business", "Teams", "Exchange Online"],
    answerIndex: 1,
    explanation: "O OneDrive for Business é o local destinado ao armazenamento pessoal de arquivos do usuário no Microsoft 365. Ele é privado por padrão e integrado ao SharePoint, permitindo compartilhamento controlado conforme a necessidade. Diferentemente do SharePoint, que é voltado para arquivos de equipes e sites, o OneDrive representa o espaço individual de trabalho do usuário."
  },
  {
    question: "Em SharePoint, qual item é mais associado a armazenamento organizado de arquivos dentro de um site?",
    options: ["Biblioteca de documentos", "Caixa de correio", "Tenant", "Endpoint"],
    answerIndex: 0,
    explanation: "Dentro de um site do SharePoint, o elemento responsável pelo armazenamento organizado de arquivos é a biblioteca de documentos. Ela permite controle de versões, aplicação de permissões e uso de metadados para organizar conteúdo, sendo a base do gerenciamento de documentos em sites do SharePoint conectados ou não ao Microsoft Teams."
  },
  {
    question: "Uma equipe deseja conversar e compartilhar arquivos em um único espaço. Qual combinação é mais comum?",
    options: ["Teams + SharePoint", "Excel + OneNote", "Outlook + Forms apenas", "Paint + WordPad"],
    answerIndex: 0,
    explanation: "A combinação Microsoft Teams + SharePoint é a forma mais comum de colaboração no Microsoft 365. O Teams fornece o espaço de conversas, reuniões e colaboração em tempo real, enquanto o SharePoint funciona como o repositório onde os arquivos dos canais são armazenados e gerenciados de forma estruturada e segura."
  },

  // Domínio 2 — Proteção de dados e governança (Microsoft Purview + Copilot)
  {
    question: "Qual solução do ecossistema Microsoft é mais ligada a conformidade, rotulagem e DLP?",
    options: ["Microsoft Purview", "Microsoft Defender for Cloud", "Microsoft Paint", "Visual Studio"],
    answerIndex: 0,
    explanation: "O Microsoft Purview é a solução central para conformidade, governança e proteção de dados no Microsoft 365. Ele reúne funcionalidades como rótulos de confidencialidade, DLP, auditoria e retenção, permitindo que organizações apliquem políticas consistentes para atender requisitos legais e regulatórios, inclusive em cenários envolvendo o Copilot."
  },
  {
    question: "Você quer classificar conteúdo como “Confidencial” e aplicar criptografia/restrições. Que recurso usa?",
    options: ["Sensitivity labels (rótulos de confidencialidade)", "Conditional Access", "Shared mailbox", "Viva Engage"],
    answerIndex: 0,
    explanation: "Os Sensitivity Labels (rótulos de confidencialidade) permitem classificar dados e aplicar automaticamente controles como criptografia, restrições de compartilhamento e marcações visuais. Esses rótulos fazem parte da estratégia de proteção da informação do Microsoft Purview e são essenciais para governança de dados em ambientes com Microsoft 365 Copilot."
  },
  {
    question: "Qual recurso ajuda a evitar que dados sensíveis sejam compartilhados indevidamente (ex.: cartão, CPF) via email/Teams?",
    options: ["eDiscovery", "DLP (Data Loss Prevention)", "SSO", "Guest access"],
    answerIndex: 1,
    explanation: "O Data Loss Prevention (DLP) ajuda a prevenir o compartilhamento inadequado de informações sensíveis, como dados pessoais ou financeiros, em serviços como Exchange, Teams, SharePoint e OneDrive. As políticas de DLP permitem detectar tipos específicos de informação e bloquear, alertar ou registrar ações conforme regras definidas pela organização."
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
    explanation: "O risco de oversharing em ambientes com Copilot está ligado ao fato de que o Copilot utiliza exatamente as mesmas permissões já existentes no Microsoft 365. Isso significa que ele não ignora controles de acesso, mas pode facilitar a descoberta e o resumo de conteúdos que o usuário já tem permissão para visualizar. Quando permissões excessivas existem no SharePoint ou OneDrive, o Copilot pode ampliar o impacto dessas permissões, tornando informações sensíveis mais fáceis de localizar e consumir."
  },
  {
    question: "(V/F) O Microsoft 365 Copilot acessa dados ignorando permissões do usuário para “melhorar a resposta”.",
    options: ["Verdadeiro", "Falso"],
    answerIndex: 1,
    explanation: "O Microsoft 365 Copilot respeita rigorosamente as permissões existentes do usuário. Ele não acessa conteúdos aos quais o usuário não tenha autorização prévia. O Copilot opera dentro dos limites de segurança, identidade e acesso do Microsoft 365, utilizando apenas dados que o usuário já pode visualizar por meio dos aplicativos e serviços da organização."
  },
  {
    question: "Qual recurso mantém conteúdo por um período definido para atender requisitos legais/regulatórios?",
    options: ["Retention (políticas de retenção)", "MFA", "SSO", "DNS"],
    answerIndex: 0,
    explanation: "As políticas de retenção (Retention policies) permitem que conteúdos sejam preservados ou excluídos automaticamente de acordo com regras definidas pela organização. Esse recurso é essencial para atender exigências legais, regulatórias ou de compliance, garantindo que informações sejam mantidas pelo tempo necessário, independentemente de ações do usuário final. As políticas de retenção fazem parte do conjunto de governança do Microsoft Purview."
  },
  {
    question: "Você precisa localizar e coletar conteúdo (e-mails/arquivos/chats) para uma investigação legal. Qual funcionalidade é apropriada?",
    options: ["eDiscovery", "SharePoint hub site", "Viva Insights", "Teams live events"],
    answerIndex: 0,
    explanation: "O eDiscovery é a funcionalidade adequada para localizar, preservar e exportar conteúdos como e-mails, documentos e mensagens para fins legais ou investigativos. Ele permite que organizações respondam a auditorias, processos judiciais e investigações internas, garantindo rastreabilidade e integridade das informações coletadas."
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
    explanation: "A auditoria no Microsoft 365 tem como principal objetivo registrar atividades realizadas por usuários e administradores. Esses registros fornecem visibilidade, rastreabilidade e suporte para investigações de segurança, compliance e governança. Audit logs não alteram o funcionamento dos serviços, mas permitem entender o que aconteceu, quando aconteceu e quem realizou determinada ação."
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
    explanation: "A redução de riscos relacionados ao Copilot passa pela revisão de permissões e compartilhamentos no SharePoint e OneDrive, evitando oversharing, e pela aplicação de rótulos de confidencialidade e políticas de DLP por meio do Microsoft Purview. Essas ações fortalecem a governança de dados e garantem que o Copilot seja utilizado de forma alinhada às políticas de segurança da organização."
  },

  {
    question: "Um administrador quer aplicar regras diferentes para dados “Público” vs “Confidencial”. Qual abordagem é mais adequada?",
    options: ["Criar dois tenants", "Usar Sensitivity labels + políticas (DLP/retention) por classificação", "Usar somente Teams", "Usar apenas VPN"],
    answerIndex: 1,
    explanation: "A abordagem mais adequada é o uso de Sensitivity Labels combinadas com políticas de DLP e retenção. Essa estratégia permite classificar dados e aplicar automaticamente controles específicos de acordo com o nível de sensibilidade. Dessa forma, conteúdos públicos e confidenciais podem ter tratamentos diferentes sem a necessidade de separar o ambiente em múltiplos tenants."
  },
  {
    question: "Qual opção é um exemplo de controle de governança focado em conformidade (não identidade)?",
    options: ["Conditional Access", "Sensitivity labels", "SSO", "MFA"],
    answerIndex: 1,
    explanation: "Os Sensitivity Labels são um exemplo claro de controle voltado à conformidade e governança de dados. Diferentemente de recursos como Conditional Access, MFA ou SSO — que atuam sobre identidade e acesso — os rótulos de confidencialidade atuam diretamente sobre o conteúdo, classificando e protegendo informações conforme políticas organizacionais."
  },
  {
    question: "Você precisa impedir compartilhamento externo de arquivos marcados como “Confidencial”. Qual combinação faz mais sentido?",
    options: ["DLP + Sensitivity labels", "SSO + MFA", "Viva Insights + Planner", "Teams + Whiteboard"],
    answerIndex: 0,
    explanation: "A combinação de Sensitivity Labels com políticas de DLP permite bloquear ou restringir o compartilhamento externo de documentos classificados como “Confidencial”. Enquanto os rótulos definem a sensibilidade do conteúdo, as políticas de DLP aplicam as regras que controlam o que pode ou não ser feito com esses dados, inclusive o compartilhamento fora da organização."
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
    explanation: "O risco mais provável é a exposição de informações sensíveis devido a permissões antigas ou excessivas em SharePoint e OneDrive. Como o Copilot facilita a descoberta e o resumo de conteúdos, ambientes com governança fraca podem acabar amplificando problemas já existentes de oversharing, impactando segurança e conformidade."
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
    explanation: "A governança e a proteção de dados no Microsoft 365 estão diretamente associadas ao uso do Microsoft Purview, dos logs de auditoria (Audit logs) e dos rótulos de confidencialidade (Sensitivity Labels). Essas áreas trabalham em conjunto para permitir classificação de dados, aplicação de políticas, monitoramento de atividades e rastreabilidade de ações realizadas no ambiente. Funcionalidades que não possuem relação com dados corporativos, identidade ou conformidade não fazem parte desse conjunto de governança."
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
    explanation: "No contexto do Microsoft 365 Copilot, Data Protection refere se ao conjunto de práticas e controles usados para reduzir o risco de exposição, vazamento ou uso indevido de dados acessados pelo Copilot. Isso inclui governança de permissões, uso de rótulos de confidencialidade, políticas de DLP, auditoria e retenção. Não se trata apenas de criptografia local ou desativação de aplicativos, mas sim de controles integrados que garantem uso responsável dos dados corporativos."
  },

  // Domínio 3 — Administração básica do Copilot e Agentes
  {
    question: "Qual é uma tarefa típica de administração do Microsoft 365 Copilot?",
    options: ["Criar VM no Azure", "Gerenciar licenças do Copilot", "Escrever código em C++", "Configurar roteadores físicos"],
    answerIndex: 1,
    explanation: "Uma tarefa típica de administração do Microsoft 365 Copilot envolve o gerenciamento de licenças, garantindo que usuários autorizados tenham acesso e que o uso esteja alinhado às políticas da organização. A administração do Copilot está relacionada a governança, segurança, monitoramento e adoção, e não a atividades de infraestrutura tradicional, como criação de máquinas virtuais ou configuração de hardware."
  },
  {
    question: "Onde você pode acompanhar sinais de adoção/uso do Copilot para entender engajamento?",
    options: ["Viva Insights / Copilot Analytics (quando disponível)", "Bloco de notas", "Paint", "Calculadora"],
    answerIndex: 0,
    explanation: "Os sinais de adoção e uso do Copilot podem ser acompanhados por meio de relatórios e analytics, como os disponíveis no Viva Insights / Copilot Analytics, quando habilitados. Essas ferramentas permitem entender padrões de uso, nível de adoção ao longo do tempo e identificar áreas que necessitam de treinamento ou ajustes de governança."
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
    explanation: "A ação mais coerente é monitorar o uso e definir controles e limites, alinhados às políticas organizacionais. A governança financeira do Copilot envolve acompanhar consumo, analisar relatórios e tomar decisões informadas sobre expansão ou restrição de uso. Ignorar consumo ou remover controles compromete o controle de custos e a gestão responsável da solução."
  },
  {
    question: "Qual definição descreve melhor um agente no contexto do Copilot?",
    options: ["Um antivírus", "Um recurso de automação/assistência orientado por IA para tarefas e fluxos específicos", "Um servidor físico", "Um tipo de licença do Exchange"],
    answerIndex: 1,
    explanation: "Um agente no contexto do Copilot é um recurso de automação e assistência orientado por IA, projetado para executar tarefas ou fluxos específicos, com base em regras, dados e contexto definidos. Agentes estendem as capacidades do Copilot, permitindo interações mais direcionadas e personalizadas, sem representar componentes de infraestrutura ou antivírus."
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
    explanation: "Ao habilitar agentes, é essencial considerar permissões de acesso a dados e o ciclo de vida com governança e aprovação. Essas preocupações garantem que os agentes operem apenas com os dados apropriados e que existam responsáveis claros por sua criação, uso e manutenção. Aspectos cosméticos ou de personalização do ambiente do usuário não impactam diretamente a segurança ou a governança dos agentes."
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
    explanation: "A causa mais provável está relacionada à falta de licenciamento, permissões ou ao escopo de disponibilização do agente. No Microsoft 365, recursos baseados em Copilot e agentes dependem de licenças adequadas e de políticas que determinam quais usuários podem visualizá los e utilizá los."
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
    explanation: "Uma boa prática de governança é definir processos formais de aprovação e responsáveis claros (owners) para os agentes. Essa abordagem garante controle, rastreabilidade e alinhamento às políticas de segurança e conformidade da organização, evitando uso descontrolado ou não autorizado de capacidades baseadas em IA."
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
    explanation: "O controle sobre quem pode criar agentes deve ser feito por meio de políticas, permissões administrativas e papéis (RBAC). Essa abordagem utiliza o modelo de controle de acesso baseado em funções do Microsoft Entra, permitindo delegação controlada e alinhada ao princípio do privilégio mínimo."
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
    explanation: "No ecossistema do Microsoft 365, cada serviço tem uma finalidade bem definida. O Microsoft Purview é voltado para governança e conformidade de dados, incluindo rotulagem, DLP, auditoria e retenção. O Microsoft Entra ID é o serviço responsável por identidade e controle de acesso, cuidando de autenticação, autorização e políticas como Conditional Access. O Exchange Online é o serviço dedicado a email e calendário corporativo, fornecendo mensagens, agendas e contatos para os usuários."
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
    explanation: "O monitoramento do uso do Copilot é importante para entender padrões de utilização, identificar riscos potenciais e avaliar a necessidade de treinamento adicional para os usuários. Essas informações ajudam administradores a melhorar a adoção responsável da ferramenta, ajustar políticas de governança e garantir que o uso do Copilot esteja alinhado às diretrizes organizacionais de segurança e compliance."
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
    explanation: "A redução desse risco envolve a aplicação de rótulos de confidencialidade e políticas de DLP, combinadas com a revisão de permissões e compartilhamentos existentes no ambiente. Essa abordagem garante que dados sensíveis estejam classificados e protegidos adequadamente, limitando o que pode ser acessado ou compartilhado via Copilot, sem depender apenas de controles de identidade."
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
    explanation: "As tarefas administrativas básicas do Copilot envolvem atribuição de licenças e monitoramento de uso e adoção, além da revisão contínua de controles de governança. Essas atividades garantem que o Copilot seja utilizado de forma controlada, segura e alinhada aos objetivos do negócio. Configurações de infraestrutura ou atividades manuais de hardware não fazem parte desse escopo."
  },

  {
    question: "Qual opção é um exemplo de “controle de identidade” que afeta diretamente acesso ao Copilot?",
    options: ["Conditional Access", "Biblioteca de documentos", "Retention policy", "eDiscovery case"],
    answerIndex: 0,
    explanation: "O Conditional Access é um controle de identidade que afeta diretamente o acesso ao Copilot, pois determina quando e como o usuário pode se autenticar em aplicativos do Microsoft 365, incluindo aqueles que utilizam Copilot. Ele permite aplicar requisitos como MFA, dispositivos compatíveis ou restrições por localização, reforçando a segurança no acesso."
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
    explanation: "A preparação adequada para o Copilot exige a revisão de permissões e compartilhamentos no SharePoint e OneDrive, a classificação e rotulagem de dados por meio do Microsoft Purview e a auditoria e visibilidade de atividades. Esses elementos reduzem riscos de oversharing e garantem que o Copilot opere sobre um ambiente governado e seguro."
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
    explanation: "Uma implantação responsável do Copilot começa pela revisão de permissões e governança de dados, garantindo que o ambiente esteja seguro. Em seguida, ocorre a atribuição de licenças e definição do modelo de cobrança, antes da liberação controlada para usuários alvo ou pilotos. Por fim, é essencial monitorar a adoção e ajustar políticas, promovendo melhoria contínua e uso responsável da solução."
  },

  {
    question: "Qual cenário descreve melhor quando usar Microsoft Purview em vez de Entra ID?",
    options: ["Para aplicar MFA", "Para classificar dados e aplicar DLP/retenção", "Para criar usuários", "Para configurar Conditional Access"],
    answerIndex: 1,
    explanation: "O Microsoft Purview deve ser utilizado quando o objetivo é classificar dados e aplicar políticas de DLP, retenção e conformidade. Já o Entra ID é focado em identidade, autenticação e controle de acesso. Essa distinção é fundamental no AB 900, pois separa claramente governança de dados de controles de identidade."
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
    explanation: "O Copilot pode utilizar conteúdo ao qual o usuário já tem acesso no Microsoft 365, incluindo emails, sempre respeitando as permissões existentes. Ele não acessa informações além do que o próprio usuário está autorizado a visualizar. Essa resposta reforça transparência e confiança no uso do Copilot."
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
    explanation: "A certificação AB 900 tem como objetivo validar conhecimentos fundamentais para administrar, proteger e governar um ambiente Microsoft 365 com Copilot e agentes, abordando identidade, segurança, governança de dados e tarefas administrativas básicas. Não envolve desenvolvimento avançado, criação de modelos de IA ou administração de infraestrutura física."
  },
  
  {
    question: "Sua organização quer habilitar Microsoft 365 Copilot Chat para um grupo piloto SEM comprar licenças Copilot para todos. O objetivo é pagar apenas pelo consumo e rastrear custos por área. Qual abordagem melhor atende ao requisito?",
    options: [
      "Atribuir licenças Microsoft 365 Copilot para todos os usuários do tenant e usar relatórios de uso",
      "Configurar pay-as-you-go vinculando uma política de cobrança a uma assinatura Azure e escopo de usuários",
      "Ativar o Microsoft Purview DLP para reduzir consumo e automaticamente cobrar por mensagem",
      "Criar um Conditional Access exigindo MFA e isso habilita cobrança por uso"
    ],
    answerIndex: 1,
    explanation: "Pay-as-you-go é a opção de cobrança por consumo para determinados recursos/experiências (especialmente cenários envolvendo Copilot Chat/agents), permitindo conectar o uso a uma assinatura Azure via política de cobrança e controlar escopo de usuários. Licenciar todo mundo contraria o objetivo de pagar apenas pelo consumo, e DLP/CA não são mecanismos de billing."
  },
  {
    question: "Você precisa configurar pay-as-you-go para Copilot e criar uma política de cobrança. Qual combinação de pré-requisitos é a mais correta para conseguir concluir a configuração?",
    options: [
      "Ser Teams admin + ter acesso ao SharePoint admin center",
      "Ter função Global admin ou Billing admin ou AI admin e permissão Owner/Contributor em assinatura e resource group do Azure",
      "Ter função Exchange admin e uma licença E5",
      "Ter função Security Reader e permissões de leitura em grupos do Entra ID"
    ],
    answerIndex: 1,
    explanation: "A configuração de pay-as-you-go envolve criar/associar uma política de billing a uma assinatura Azure e um resource group, exigindo permissões (Owner/Contributor) no Azure e um papel administrativo apropriado no Microsoft 365 (ex.: Global/Billing/AI admin). Funções de workload (Teams/Exchange) ou Security Reader não são suficientes."
  },
  {
    question: "Um administrador quer garantir que uma área não estoure gastos com Copilot pay-as-you-go. Qual controle de alto nível melhor se alinha a esse objetivo no contexto de billing policy?",
    options: [
      "Criar uma etiqueta de retenção no Purview para reduzir custo",
      "Aplicar um budget/limite na política de cobrança e monitorar uso por política",
      "Habilitar SSO e reduzir custo de autenticação",
      "Desabilitar auditoria para diminuir consumo"
    ],
    answerIndex: 1,
    explanation: "Para controlar custos em pay-as-you-go, a governança acontece via política de cobrança (billing policy), incluindo a possibilidade de usar budget/limites e acompanhar consumo associado. Recursos de retenção, SSO e auditoria não são mecanismos de controle de custo por consumo."
  },
  {
    question: "Qual cenário é MAIS compatível com pay-as-you-go (em vez de licenciamento por usuário), considerando como a cobrança por consumo é aplicada?",
    options: [
      "Copilot no Word para reescrever um parágrafo em um documento local",
      "Recap automático de reunião do Teams para todos os participantes",
      "Uso de um agente (custom/SharePoint) fundamentado em dados do trabalho (SharePoint/Graph Connector), com cobrança por consumo",
      "MFA para todos os usuários para permitir acesso ao Copilot"
    ],
    answerIndex: 2,
    explanation: "O modelo pay-as-you-go está fortemente associado a cenários de agentes/experiências cobradas por consumo (especialmente quando o agente acessa dados do tenant como SharePoint ou conectores), em vez de experiências clássicas por app (Word/Teams recap) normalmente ligadas a licenças por usuário."
  },
  {
    question: "Seu time relata: “Copilot está trazendo informações sensíveis do site SharePoint 'Finance' em respostas.” Você precisa reduzir o risco SEM desligar o Copilot do tenant inteiro. Qual ação é mais adequada (alto nível)?",
    options: [
      "Remover todas as licenças do Entra ID para interromper acesso de todos",
      "Ajustar permissões/compartilhamento do SharePoint e aplicar controles de proteção (ex.: labels/DLP) para impedir exposição do conteúdo",
      "Ativar apenas MFA para o grupo Finance",
      "Mover o site Finance para OneDrive pessoal do gerente"
    ],
    answerIndex: 1,
    explanation: "Copilot respeita permissões. Se conteúdo sensível está sendo retornado, o caminho correto é corrigir oversharing/permissões e reforçar proteção de dados com governança (labels/DLP). MFA melhora autenticação, mas não corrige exposição por permissões ou compartilhamento."
  },
  {
    question: "Qual alternativa descreve melhor a diferença entre 'governança de identidade/acesso' e 'governança de dados' no contexto do AB-900?",
    options: [
      "Entra ID governa dados; Purview governa identidade",
      "Entra ID governa identidade/acesso (usuários, autenticação, CA); Purview governa dados (classificação, DLP, retenção, conformidade)",
      "Defender XDR substitui Entra ID e Purview em governança",
      "Teams admin center é o principal local para governança de dados e identidade"
    ],
    answerIndex: 1,
    explanation: "Entra ID é o pilar de identidade, autenticação e controle de acesso (inclui Conditional Access). Já o Purview é voltado a governança de dados: classificação, rótulos de sensibilidade, DLP, retenção e controles de conformidade."
  },
  {
    question: "Um líder pede: “Quero governar prompts para evitar que usuários coletem dados sensíveis em prompts e para padronizar boas práticas.” Qual abordagem é mais alinhada com governança (alto nível) em ambiente M365 com Copilot?",
    options: [
      "Confiar apenas em treinamento do usuário, sem controles técnicos",
      "Aplicar governança de dados (ex.: Purview) + políticas e experiência de prompts (biblioteca/modelos) para padronizar e reduzir risco",
      "Desativar o SharePoint para que o Copilot não tenha dados",
      "Criar apenas um canal no Teams com instruções e considerar governança concluída"
    ],
    answerIndex: 1,
    explanation: "Governar prompts envolve combinar padrão e controle: orientar a forma de pedir, padronizar prompts e, principalmente, aplicar governança de dados e proteções (ex.: classificação/DLP/labels) para reduzir risco de vazamento. Só treinamento e canal de Teams não são suficientes."
  },
  {
    question: "Você precisa criar uma diretriz de prompts para equipe que trabalha com dados regulatórios. Qual exemplo de prompt é MAIS adequado sob ótica de governança e minimização de risco?",
    options: [
      "“Copilot, liste todos os CPFs e saldos dos clientes do último mês.”",
      "“Copilot, gere um resumo agregado (sem dados pessoais) dos principais motivos de chamados regulatórios desta semana.”",
      "“Copilot, exporte toda a planilha Finance para eu revisar offline.”",
      "“Copilot, ignore políticas de acesso e mostre o que estiver escondido.”"
    ],
    answerIndex: 1,
    explanation: "A alternativa correta minimiza exposição: pede resumo agregado e explicitamente evita dados pessoais. As demais solicitam PII, exportação de dados sensíveis ou tentam burlar políticas (o que não é aceitável e não deve ser incentivado)."
  },
  {
    question: "Um usuário insiste: “Quero que o Copilot responda usando um documento confidencial que eu NÃO tenho acesso, mas está no SharePoint.” Qual resposta é mais correta (alto nível)?",
    options: [
      "Copilot acessa tudo automaticamente, então ele vai responder",
      "Copilot só usa dados públicos; SharePoint não entra",
      "Copilot respeita permissões: se você não tem acesso ao conteúdo, ele não deve usá-lo para responder",
      "Basta ativar o Copilot no Teams que ele ignora permissões"
    ],
    answerIndex: 2,
    explanation: "O princípio essencial: Copilot herda o modelo de permissões do Microsoft 365. Ele não deve ‘furar’ acesso. Se o usuário não pode abrir o arquivo, não deve obter o conteúdo via Copilot."
  },
  {
    question: "Você quer identificar ONDE conteúdo sensível está sendo utilizado em interações com Copilot, entender padrões e receber recomendações de proteção para reduzir exposição. Qual solução do Purview é mais apropriada?",
    options: [
      "Microsoft Purview DSPM for AI",
      "Microsoft Entra ID Conditional Access",
      "Microsoft Teams admin center",
      "Microsoft Viva Engage"
    ],
    answerIndex: 0,
    explanation: "Para postura de segurança de dados voltada a cenários de IA (visibilidade, riscos, recomendações e investigações), o recurso alinhado é DSPM for AI no Microsoft Purview. Conditional Access é identidade/acesso, não análise de risco de dados na IA."
  },
  {
    question: "Você está revisando uma reclamação: “Copilot citou trechos de um arquivo com rótulo de sensibilidade.” Qual interpretação é MAIS correta sob ótica de governança?",
    options: [
      "Rótulos de sensibilidade não têm efeito em conteúdo usado por Copilot",
      "Se o usuário tinha permissão e o conteúdo é acessível, Copilot pode referenciar/usar respeitando permissões; a organização deve ajustar proteção/compartilhamento se houver risco",
      "Copilot sempre remove automaticamente qualquer trecho sensível, então é impossível aparecer",
      "Apenas o Teams controla o que Copilot pode ler"
    ],
    answerIndex: 1,
    explanation: "O ponto central é: permissões e governança de dados importam. Se o usuário tem acesso e há oversharing, Copilot pode usar o conteúdo. A ação correta é revisar permissões, compartilhamento e políticas (labels/DLP) para reduzir exposição."
  },
  {
    question: "Qual ação está MAIS relacionada a 'gerenciar Copilot' em vez de 'governar dados' (diferença de foco no AB-900)?",
    options: [
      "Criar política de DLP para impedir envio de dados sensíveis",
      "Configurar escopo de usuários para pay-as-you-go billing em Copilot",
      "Aplicar rótulos de sensibilidade com criptografia",
      "Definir retenção e eDiscovery para conformidade"
    ],
    answerIndex: 1,
    explanation: "Escopo de usuários e billing (pay-as-you-go) é uma tarefa administrativa diretamente ligada à administração do Copilot (gestão de acesso/custos). DLP, labels e retenção são governança/proteção de dados."
  },
  {
    question: "Você precisa escolher o melhor local (conceitualmente) para cada ação: (1) criar usuários/grupos e gerenciar acesso, (2) classificar dados e definir DLP/retenção, (3) configurar cobrança por consumo para Copilot. Qual mapeamento é mais correto?",
    options: [
      "(1) Purview, (2) Entra, (3) Teams admin center",
      "(1) Entra, (2) Purview, (3) Microsoft 365 admin center (Copilot Billing & usage) com vínculo ao Azure",
      "(1) Defender XDR, (2) Teams admin center, (3) SharePoint admin center",
      "(1) Exchange admin center, (2) OneDrive, (3) Viva Insights"
    ],
    answerIndex: 1,
    explanation: "Entra ID é identidade/acesso; Purview é governança de dados (classificação, DLP, retenção). Cobrança pay-as-you-go para Copilot é administrada no Microsoft 365 admin center (área de billing/usage do Copilot) com vínculo a uma assinatura Azure."
  },
  {
    question: "Um time quer padronizar prompts e reduzir risco de vazamento. Qual prática é MAIS madura para governança de prompts?",
    options: [
      "Manter prompts secretos e espalhados por chats individuais",
      "Centralizar prompts em uma biblioteca/guia com exemplos aprovados, orientando boas práticas e combinando com políticas de proteção de dados",
      "Permitir qualquer prompt, desde que o usuário prometa não usar dados sensíveis",
      "Bloquear todos os prompts longos, pois são mais perigosos"
    ],
    answerIndex: 1,
    explanation: "Governança madura combina padronização (biblioteca/guia) + orientação + controles de proteção de dados (classificação/DLP/labels). Proibir prompts longos não resolve o problema real; e depender de promessa do usuário não é governança."
  },
  {
    question: "Durante a implantação, você quer reduzir risco de 'oversharing' no SharePoint que pode impactar respostas do Copilot. Qual direção (alto nível) é mais adequada?",
    options: [
      "Aumentar o número de sites públicos para melhorar colaboração",
      "Revisar permissões e compartilhamento em sites/bibliotecas e aplicar governança (labels/DLP) antes de ampliar o acesso ao Copilot",
      "Mover todos os arquivos para e-mail para evitar SharePoint",
      "Desativar Entra ID para impedir login externo"
    ],
    answerIndex: 1,
    explanation: "Oversharing é um risco clássico que afeta o que usuários podem acessar — e, portanto, o que o Copilot pode usar. A abordagem correta é revisar permissões/compartilhamento e reforçar governança (labels/DLP) antes de expandir a adoção."
  },
  {
    question: "Qual afirmação é MAIS correta sobre pay-as-you-go do Microsoft 365 no contexto de administração e governança?",
    options: [
      "Pay-as-you-go remove a necessidade de permissões no SharePoint porque a cobrança controla o acesso",
      "Pay-as-you-go é apenas um método de cobrança; permissões e governança continuam sendo aplicadas normalmente",
      "Pay-as-you-go significa que o usuário sempre terá acesso a todos os recursos do Copilot",
      "Pay-as-you-go desativa automaticamente Purview para reduzir custo"
    ],
    answerIndex: 1,
    explanation: "Pay-as-you-go é modelo de billing (cobrança). Ele não substitui permissões (Entra/SharePoint) nem governança (Purview). A organização ainda precisa gerir acesso e proteger dados."
  },
    {
    question: "Sua empresa quer liberar Microsoft 365 Copilot Chat para um piloto de 200 pessoas sem comprar licença por usuário. O time financeiro exige rastrear custos por departamento e ter a opção de desligar o serviço se necessário. Qual é a abordagem MAIS adequada?",
    options: [
      "Comprar licenças Microsoft 365 Copilot para todos e filtrar relatórios por departamento",
      "Habilitar pay-as-you-go com billing policy vinculada a uma assinatura Azure e escopo por grupo/departamento",
      "Ativar DLP no Purview para reduzir custo e automaticamente aplicar cobrança por mensagem",
      "Configurar Conditional Access e isso habilita cobrança por consumo automaticamente"
    ],
    answerIndex: 1,
    explanation: "Pay-as-you-go foi desenhado para permitir acesso baseado em consumo sem licença completa por usuário, com governança de custos via billing policy conectada a uma assinatura Azure e escopo de usuários (ex.: grupos). DLP e Conditional Access são controles de segurança/compliance, não mecanismos de cobrança."
  },
  {
    question: "Ao configurar pay-as-you-go para Copilot, o admin recebe erro de permissão ao selecionar a assinatura no assistente de billing policy. Qual requisito costuma estar faltando nesse cenário?",
    options: [
      "O admin não tem role de Exchange Administrator",
      "O admin não tem permissão Owner/Contributor na assinatura/resource group do Azure",
      "O admin não possui licença E5 Compliance",
      "O admin não está usando VPN corporativa"
    ],
    answerIndex: 1,
    explanation: "A configuração de pay-as-you-go exige permissões adequadas no Azure (Owner/Contributor) na assinatura e no resource group associado. Roles de workload (Exchange) e VPN não são pré-requisitos do processo."
  },
  {
    question: "Você precisa habilitar pay-as-you-go apenas para um conjunto específico de usuários. Qual decisão de configuração atende melhor ao requisito sem expandir acesso indevidamente?",
    options: [
      "Escolher 'All users' no escopo da billing policy",
      "Escolher 'Specific group' no escopo da billing policy e associar o grupo correto",
      "Criar um canal no Teams e pedir para só esse público usar",
      "Colocar os usuários em um site SharePoint separado e isso limita automaticamente o Copilot"
    ],
    answerIndex: 1,
    explanation: "O controle de escopo em pay-as-you-go é feito pela billing policy, escolhendo o conjunto de usuários (idealmente por grupo). Comunicação no Teams não aplica controle técnico, e o SharePoint não é o mecanismo de escopo do billing."
  },
  {
    question: "Durante a criação de billing policy, você precisa escolher o 'Region' e o time de segurança pergunta o que isso afeta. Qual resposta (alto nível) é MAIS correta?",
    options: [
      "Define a região onde dados de uso/tenant ID e metadados de consumo são armazenados para o billing",
      "Define a região onde os emails do Exchange serão roteados",
      "Define a região onde os arquivos do OneDrive serão criptografados",
      "Define a região onde as políticas do Entra ID serão aplicadas"
    ],
    answerIndex: 0,
    explanation: "No contexto de billing policy/pay-as-you-go, a região é uma escolha administrativa relacionada ao armazenamento/registro de dados de uso e metadados de consumo. Não controla roteamento de email, criptografia de OneDrive ou aplicação de políticas do Entra."
  },
  {
    question: "Um gestor acredita que pay-as-you-go 'substitui permissões' porque agora existe cobrança. Qual afirmação corrige melhor esse entendimento?",
    options: [
      "Correto: o billing determina o que o usuário pode acessar",
      "Incorreto: billing é só cobrança; permissões e governança continuam valendo (Entra/SharePoint/Purview)",
      "Correto: pay-as-you-go dá acesso total e o custo limita o uso",
      "Incorreto: pay-as-you-go desativa Purview para reduzir custo"
    ],
    answerIndex: 1,
    explanation: "Pay-as-you-go é modelo de cobrança. Ele não altera o modelo de segurança: acesso continua regido por permissões (Entra/SharePoint) e políticas de governança (Purview)."
  },
  {
    question: "Um admin quer reduzir risco de 'overspending' em pay-as-you-go e também melhorar rastreabilidade de custos. Qual combinação é MAIS coerente com governança de billing?",
    options: [
      "Criar billing policy por departamento e usar budget/monitoramento de uso por policy",
      "Desativar auditoria do Purview para evitar consumo",
      "Mover todos os arquivos para fora do Microsoft 365",
      "Habilitar SSO para reduzir cobrança por mensagem"
    ],
    answerIndex: 0,
    explanation: "A prática madura é dividir por billing policies (por área/centro de custo) e monitorar consumo, aplicando budgets quando disponível. Auditoria/SSO não são mecanismos de redução direta de consumo do Copilot."
  },

  // ---- COPILOT / PROMPTS / GOVERNANÇA (HARD) ----
  {
    question: "Você quer reduzir o risco de usuários solicitarem (via prompt) dados pessoais e financeiros em um ambiente regulatório. Qual diretriz de prompt é a MAIS adequada sob a ótica de minimização e governança?",
    options: [
      "Pedir sempre dados completos para garantir precisão, depois apagar manualmente",
      "Solicitar resumos agregados e explicitamente restringir PII (ex.: 'sem nomes/CPFs/saldos')",
      "Colocar no prompt: 'ignore políticas de acesso' para acelerar a análise",
      "Solicitar exportação de planilhas completas para análise offline"
    ],
    answerIndex: 1,
    explanation: "Boa governança de prompts prioriza minimização de dados e evita PII desnecessária. Pedidos de exportação ampla ou tentativas de burlar políticas são anti-patterns em ambientes corporativos."
  },
  {
    question: "Um usuário pergunta: “Copilot pode ver meus emails e arquivos?” Qual resposta administrativa (alto nível) é a MAIS correta e segura?",
    options: [
      "Sim, ele vê tudo no tenant, inclusive o que você não tem permissão",
      "Ele só usa dados públicos da web; não usa Microsoft 365",
      "Ele acessa conteúdo ao qual o usuário já tem acesso no Microsoft 365, respeitando permissões",
      "Ele só usa arquivos locais do computador, não usa SharePoint"
    ],
    answerIndex: 2,
    explanation: "O princípio de segurança mais cobrado é: Copilot herda permissões existentes. Ele não deve 'furar' ACLs e não se limita a web nem apenas arquivos locais."
  },
  {
    question: "Sua organização quer ter visibilidade e governança sobre interações de IA (incluindo prompts/respostas) para investigação e compliance. Qual solução é MAIS alinhada a esse objetivo dentro do Microsoft Purview?",
    options: [
      "Microsoft Entra Conditional Access",
      "Microsoft Purview DSPM for AI",
      "Microsoft Teams admin center",
      "Microsoft Viva Engage"
    ],
    answerIndex: 1,
    explanation: "DSPM for AI é desenhado para postura de segurança e visibilidade de uso de IA, incluindo recomendações e monitoramento de interações. Conditional Access controla acesso, não análise de uso/risco de dados em IA."
  },
  {
    question: "Você tenta habilitar monitoramento de interações de Copilot/agents em DSPM for AI, mas os eventos não aparecem. Qual pré-requisito frequentemente esquecido explica melhor esse sintoma?",
    options: [
      "Microsoft Purview auditing não está habilitado no tenant",
      "O Teams está desabilitado para os usuários",
      "O Outlook está em idioma diferente",
      "O SharePoint está em modo somente leitura"
    ],
    answerIndex: 0,
    explanation: "Para monitorar interações com Copilot e agents via Purview, um pré-requisito central é ter auditing habilitado. Sem auditoria, o pipeline de eventos/visibilidade fica incompleto."
  },
  {
    question: "Você precisa 'governar prompts' de forma madura (não só treinamento). Qual ação representa melhor uma governança prática e escalável?",
    options: [
      "Criar uma biblioteca de prompts aprovados + diretrizes e conectar isso a políticas de proteção de dados",
      "Proibir qualquer prompt com mais de 10 palavras",
      "Permitir qualquer prompt e confiar em 'bom senso'",
      "Centralizar prompts apenas em conversas privadas do Teams"
    ],
    answerIndex: 0,
    explanation: "Governança madura combina padronização (prompt library), orientação e controles de proteção de dados (labels/DLP/auditoria). Regras arbitrárias (tamanho do prompt) e 'bom senso' não são escaláveis."
  },
  {
    question: "Um time reclama: “Copilot está trazendo conteúdo sensível do site SharePoint Finance”. Você NÃO quer desligar Copilot globalmente. Qual intervenção é MAIS eficaz e alinhada ao modelo de permissões?",
    options: [
      "Remover a licença do Teams dos usuários",
      "Revisar permissões/compartilhamento do site e aplicar governança (labels/DLP) para reduzir exposição",
      "Criar um novo grupo do Entra e mover o site para OneDrive",
      "Desativar SSO para forçar login manual"
    ],
    answerIndex: 1,
    explanation: "Se Copilot retorna conteúdo, em geral o usuário tem acesso ao conteúdo (oversharing). A mitigação correta é corrigir permissões/compartilhamento e reforçar governança de dados. Mudanças em Teams/SSO não resolvem exposição por ACL."
  },

  // ---- MICROSOFT 365 CORE OBJECTS (HARD) ----
  {
    question: "Um gerente quer um endereço único para a equipe (ex.: financeiro@) e também quer calendário compartilhado e colaboração em arquivos. Qual opção é MAIS apropriada?",
    options: [
      "Distribution list",
      "Microsoft 365 Group",
      "Shared mailbox sem permissões",
      "Mailbox pessoal do gerente com delegação"
    ],
    answerIndex: 1,
    explanation: "Microsoft 365 Group normalmente cobre email/conversas e também componentes colaborativos (calendário/arquivos) integrados ao ecossistema M365. Distribution list é mais simples (distribuição de email) e não oferece o mesmo pacote de colaboração."
  },
  {
    question: "Você precisa permitir que um time responda emails de suporte usando um endereço comum, sem consumir licença de usuário e com delegação adequada. Qual objeto é MAIS indicado?",
    options: [
      "Shared mailbox com permissões (Send As/Full Access) conforme necessário",
      "Distribution group",
      "Microsoft Teams channel",
      "OneDrive compartilhado"
    ],
    answerIndex: 0,
    explanation: "Shared mailbox é a escolha típica para caixa compartilhada com delegação e envio como. Grupo de distribuição não é mailbox (não armazena itens do mesmo jeito) e Teams/OneDrive não resolvem o requisito de email."
  },
  {
    question: "Um time quer organizar documentos por área com permissões diferentes e histórico/estrutura consistente. Qual nível de objeto do SharePoint é o melhor ponto de partida para governança?",
    options: [
      "Folder dentro de qualquer biblioteca existente",
      "Um site SharePoint dedicado para a área, com bibliotecas conforme necessário",
      "Apenas OneDrive de um usuário com compartilhamento",
      "Um chat do Teams com anexos"
    ],
    answerIndex: 1,
    explanation: "Para governança, um site dedicado permite escopo claro de permissões e organização. Pastas e anexos em chats tendem a virar oversharing e dificultar controle. OneDrive pessoal não é ideal para acervo corporativo."
  },
  {
    question: "Qual afirmação descreve melhor por que 'oversharing' em SharePoint impacta respostas do Copilot?",
    options: [
      "Porque Copilot ignora permissões e lê tudo",
      "Porque Copilot usa o conteúdo que o usuário consegue acessar; se há oversharing, mais conteúdo fica acessível",
      "Porque Copilot só responde usando web",
      "Porque Copilot depende exclusivamente de emails do Exchange"
    ],
    answerIndex: 1,
    explanation: "Copilot herda permissões. Oversharing amplia o conjunto de dados que usuários conseguem acessar, aumentando risco de o Copilot usar/retornar conteúdo sensível."
  },

  // ---- ENTRA ID / SEGURANÇA (HARD) ----
  {
    question: "Qual alternativa diferencia corretamente autenticação e autorização no Entra ID?",
    options: [
      "Autenticação define o que você pode fazer; autorização prova quem você é",
      "Autenticação prova quem você é; autorização define o que você pode fazer após autenticar",
      "Ambas significam a mesma coisa",
      "Autenticação só existe para dispositivos; autorização só para usuários"
    ],
    answerIndex: 1,
    explanation: "Conceito clássico: autenticação = provar identidade; autorização = permissões/escopo após autenticar. Essa distinção aparece muito no AB-900."
  },
  {
    question: "Você precisa reduzir risco de acesso a Copilot em logins de alto risco e impor MFA apenas quando necessário. Qual controle do Entra ID é MAIS apropriado?",
    options: [
      "Configurar apenas senha forte para todos",
      "Conditional Access com políticas baseadas em risco/sinais e exigência de MFA",
      "Criar um site SharePoint separado para Copilot",
      "Habilitar retenção no Purview"
    ],
    answerIndex: 1,
    explanation: "Conditional Access é o mecanismo para impor controles (como MFA) com base em condições (risco, localização, dispositivo, etc.), aplicando princípios de Zero Trust."
  },
  {
    question: "Um admin quer reduzir o número de pessoas com privilégios permanentes e dar elevação temporária com aprovação e auditoria. Qual recurso é o MAIS alinhado a isso?",
    options: [
      "Microsoft Purview DLP",
      "Privileged Identity Management (PIM)",
      "Microsoft Teams policies",
      "Exchange mail flow rules"
    ],
    answerIndex: 1,
    explanation: "PIM é desenhado para reduzir privilégio permanente e habilitar elevação just-in-time com governança. DLP/Teams/Exchange não resolvem privilégio administrativo."
  },
  {
    question: "Um analista quer revisar atividades administrativas e eventos de auditoria relacionados a alterações de configuração. Qual prática se alinha melhor ao objetivo (alto nível)?",
    options: [
      "Desabilitar logs para economizar armazenamento",
      "Revisar audit logs apropriados no portal/centro relevante e correlacionar com identidades/ações",
      "Mover usuários para grupos menores",
      "Criar mais sites no SharePoint"
    ],
    answerIndex: 1,
    explanation: "Troubleshooting e governança exigem auditoria/logs. Desabilitar logs reduz rastreabilidade. A prática madura é revisar logs/auditoria no contexto certo e correlacionar com identidades."
  },
  {
    question: "Qual cenário representa melhor 'identidade de workload' no Entra ID (conceito cobrado em fundamentals)?",
    options: [
      "Um usuário humano com MFA",
      "Um dispositivo corporativo registrado",
      "Uma aplicação/serviço que precisa autenticar para acessar recursos (service principal/managed identity)",
      "Um canal do Teams com convidados"
    ],
    answerIndex: 2,
    explanation: "Workload identities se referem a identidades usadas por aplicações/serviços (como service principals/managed identities) para autenticar e acessar recursos sem ser um usuário humano."
  },

  // ---- PURVIEW: GOVERNANÇA/COMPLIANCE (HARD) ----
  {
    question: "Você precisa impedir que informações sensíveis (ex.: número de cartão/PII) sejam inseridas/compartilhadas via canais e apps do Microsoft 365. Qual capacidade do Purview se alinha melhor a esse controle preventivo?",
    options: [
      "Information Protection apenas (labels sem política)",
      "Data Loss Prevention (DLP)",
      "Teams meeting policy",
      "Entra SSO"
    ],
    answerIndex: 1,
    explanation: "DLP é o controle voltado a detectar e prevenir compartilhamento/saída de dados sensíveis em canais suportados. Labels classificam/protegem, mas o bloqueio/prevenção de exfiltração é papel típico do DLP."
  },
  {
    question: "Qual caso de uso é MAIS adequado para Sensitivity Labels (Information Protection) em vez de DLP?",
    options: [
      "Bloquear envio de PII em chats",
      "Classificar conteúdo e aplicar proteção consistente (ex.: marcação/criptografia/controle) ao documento",
      "Detectar comportamento suspeito de insiders",
      "Forçar MFA por localização"
    ],
    answerIndex: 1,
    explanation: "Labels servem para classificação e proteção persistente do conteúdo. DLP é mais sobre prevenção/controle de fluxo. Insider risk é outro pilar e MFA é identidade."
  },
  {
    question: "Você precisa investigar e preservar conteúdo para um caso legal/regulatório, aplicando hold e busca. Qual solução do Purview se alinha melhor (alto nível)?",
    options: [
      "eDiscovery",
      "Communication Compliance",
      "Insider Risk Management",
      "Conditional Access"
    ],
    answerIndex: 0,
    explanation: "eDiscovery é voltado a investigação legal: busca, preservação e gestão de evidências. Communication Compliance foca comportamento/comunicação; Insider Risk foca risco interno; CA é acesso."
  },
  {
    question: "Você quer detectar linguagem inadequada/assédio em comunicações corporativas e criar fluxos de revisão. Qual solução é mais adequada?",
    options: [
      "Data Lifecycle Management",
      "Communication Compliance",
      "Sensitivity labels",
      "Microsoft Defender XDR"
    ],
    answerIndex: 1,
    explanation: "Communication Compliance é voltado a monitorar e revisar comunicações para políticas de conduta. DLM é retenção/ciclo de vida; labels são classificação; Defender XDR é detecção/resposta de ameaças."
  },
  {
    question: "Um gestor quer reduzir dados desnecessários expostos ao Copilot por retenção excessiva e conteúdo obsoleto. Qual abordagem do Purview é mais alinhada para governar ciclo de vida do conteúdo?",
    options: [
      "Data Lifecycle Management (retenção/eliminação conforme política)",
      "Conditional Access",
      "Teams app permission policy",
      "Entra PIM"
    ],
    answerIndex: 0,
    explanation: "Data Lifecycle Management se relaciona a retenção e descarte conforme regras, reduzindo dados obsoletos e melhorando postura de governança. Os outros controles não governam ciclo de vida do conteúdo."
  },

  // ---- DEFENDER XDR / PRINCÍPIOS (HARD) ----
  {
    question: "Qual descrição representa melhor o papel do Microsoft Defender XDR em uma estratégia de segurança no Microsoft 365?",
    options: [
      "É um serviço de billing para pay-as-you-go",
      "É um conjunto para detecção e resposta correlacionando sinais de ameaças (endpoints/identidade/email/etc.)",
      "É o local para criar usuários e grupos",
      "É a ferramenta primária para rotular documentos com confidencialidade"
    ],
    answerIndex: 1,
    explanation: "Defender XDR está associado a detecção e resposta (XDR), correlacionando sinais de diferentes superfícies. Não é billing, nem IAM, nem classificação de dados."
  },
  {
    question: "Você está explicando Zero Trust para um stakeholder. Qual princípio é o MAIS representativo?",
    options: [
      "Confiar implicitamente em redes internas",
      "Never trust, always verify; aplicar least privilege e assumir breach",
      "Aumentar permissões para reduzir tickets",
      "Desabilitar MFA para reduzir fricção"
    ],
    answerIndex: 1,
    explanation: "Zero Trust enfatiza verificação explícita, privilégio mínimo e assumir violação. Isso é base para Conditional Access e governança moderna."
  },

  // ---- ADMIN CENTERS / TROUBLESHOOT (HARD) ----
  {
    question: "Um usuário não consegue acessar o Copilot e o erro sugere bloqueio por política de acesso. Qual área é MAIS provável para iniciar troubleshooting de políticas baseadas em condições?",
    options: [
      "Microsoft Entra (Conditional Access / sign-in logs)",
      "SharePoint admin center (site templates)",
      "Exchange admin center (mail flow rules)",
      "Teams admin center (meeting templates)"
    ],
    answerIndex: 0,
    explanation: "Bloqueios condicionais e troubleshooting de acesso normalmente passam por Entra: Conditional Access e logs de sign-in ajudam a identificar o motivo (MFA, dispositivo, risco, etc.)."
  },
  {
    question: "Você precisa escolher onde gerenciar objetos e configurações de identidade e acesso. Qual portal/centro é o MAIS apropriado para esse tipo de tarefa?",
    options: [
      "Microsoft Purview portal",
      "Microsoft Entra admin center",
      "SharePoint admin center",
      "Teams admin center"
    ],
    answerIndex: 1,
    explanation: "Entra é o hub de identidade/acesso. Purview é governança/compliance de dados. SharePoint/Teams são centros de workload."
  },

  // ---- PAY-AS-YOU-GO: DETALHES MAIS 'PROVA' (HARD) ----
  {
    question: "Ao configurar pay-as-you-go no Microsoft 365 admin center, qual sequência de alto nível é a MAIS correta?",
    options: [
      "Conectar um serviço → criar billing policy → escolher assinatura Azure",
      "Criar billing policy → conectar billing policy a um serviço pay-as-you-go → monitorar/gerenciar custos",
      "Ativar DLP → ativar CA → comprar licenças por usuário",
      "Criar site SharePoint → criar Team → ativar Copilot no Outlook"
    ],
    answerIndex: 1,
    explanation: "O fluxo típico é: criar billing policy (com assinatura/resource group/region e escopo) e depois conectar a policy a um serviço pay-as-you-go (ex.: Copilot Chat/SharePoint agents), e então monitorar custos/uso."
  },
  {
    question: "Você quer descontinuar o uso de pay-as-you-go para um agente/serviço específico sem impactar o restante do tenant. Qual ação é MAIS adequada?",
    options: [
      "Excluir o tenant do Entra ID",
      "Desconectar o serviço/agent da billing policy (disconnect) no painel de Billing & usage",
      "Remover todos os arquivos do SharePoint",
      "Desativar o Exchange Online"
    ],
    answerIndex: 1,
    explanation: "A administração de pay-as-you-go permite desconectar o serviço/agent da policy, controlando consumo sem destruir o tenant ou workloads."
  },
  {
    question: "Seu time quer usar pay-as-you-go, mas o tenant não tem nenhuma licença de SharePoint. O que tende a acontecer em termos de pré-requisito (alto nível)?",
    options: [
      "Não importa: SharePoint nunca é requisito em Microsoft 365",
      "Pode haver requisito mínimo de licença que inclua SharePoint para habilitar o cenário no tenant",
      "Basta habilitar Teams que resolve",
      "A única exigência é ter licença do Outlook"
    ],
    answerIndex: 1,
    explanation: "Em alguns fluxos de configuração, existe requisito do tenant possuir ao menos uma licença que inclua SharePoint. Isso não é substituído por Teams/Outlook."
  },
  {
    question: "Você precisa monitorar gastos e uso de pay-as-you-go e o time pergunta onde isso pode ser acompanhado além do Microsoft 365 admin center. Qual alternativa é a MAIS coerente (alto nível)?",
    options: [
      "Microsoft Cost Management (Azure) para acompanhamento de custos vinculados à assinatura",
      "Exchange mail trace",
      "Teams call quality dashboard",
      "SharePoint site usage apenas"
    ],
    answerIndex: 0,
    explanation: "Como pay-as-you-go é vinculado a uma assinatura Azure, monitoramento de custos pode ser correlacionado com ferramentas de gestão de custos no Azure, além do painel no M365 admin center."
  },

  // ---- GOVERNANÇA DE PROMPTS / INTERAÇÕES (HARD) ----
  {
    question: "O time de compliance pede: “Quero capturar prompts e respostas do Copilot para eDiscovery e retenção”. Qual combinação de capacidades é a MAIS alinhada ao pedido?",
    options: [
      "Habilitar apenas Conditional Access",
      "Usar DSPM for AI com políticas de captura/monitoramento e integrar com recursos de compliance no Purview",
      "Criar uma pasta no OneDrive e pedir para usuários salvarem prompts",
      "Desabilitar auditoria para reduzir volume de dados"
    ],
    answerIndex: 1,
    explanation: "O pedido é de visibilidade e governança de interações de IA e uso para compliance. DSPM for AI + recursos do Purview é o caminho mais alinhado. Pastas manuais e desabilitar auditoria quebram rastreabilidade."
  },
  {
    question: "Você precisa criar uma política interna de prompts. Qual regra é MAIS eficaz para reduzir vazamento sem destruir produtividade?",
    options: [
      "Proibir Copilot para todo mundo permanentemente",
      "Exigir que prompts usem dados mínimos e orientem saída agregada, além de proibir PII explícita quando não necessária",
      "Permitir qualquer prompt desde que seja em inglês",
      "Solicitar sempre anexar planilhas completas para o Copilot analisar"
    ],
    answerIndex: 1,
    explanation: "Política eficaz reduz risco com minimização de dados e orientações claras, sem banimento total. Idioma não é controle de risco. Incentivar anexos completos aumenta exposição."
  },
  {
    question: "Você quer avaliar maturidade de governança de prompts em uma área. Qual indicador é MAIS útil (alto nível) para ação?",
    options: [
      "Quantidade de emojis nos prompts",
      "Padrões de uso: prompts pedindo PII, tentativas de burlar permissões, e temas sensíveis recorrentes",
      "Número de mensagens enviadas no Teams",
      "Tamanho médio de documentos no OneDrive"
    ],
    answerIndex: 1,
    explanation: "Maturidade de governança se mede por padrões de risco e necessidade de treinamento/controles (PII, oversharing, tentativas de bypass). Emojis e tamanho de arquivos não são sinais relevantes."
  },

  // ---- MAIS M365 / TEAMS / SHAREPOINT (HARD) ----
  {
    question: "Você precisa minimizar risco de Copilot usar conteúdo antigo e irrelevante que ainda está acessível. Qual estratégia de governança ataca a causa raiz?",
    options: [
      "Desativar o Word para todos",
      "Aplicar ciclo de vida/retenção e descarte para reduzir acervo obsoleto e revisar permissões",
      "Aumentar armazenamento para manter tudo indefinidamente",
      "Mover arquivos para chats do Teams para 'organizar melhor'"
    ],
    answerIndex: 1,
    explanation: "Conteúdo obsoleto e permissões largas elevam risco. Data Lifecycle + revisão de permissões reduzem exposição e aumentam qualidade do conteúdo acessível ao Copilot."
  },
  {
    question: "Um usuário quer 'compartilhar rapidamente' um arquivo sensível com toda a empresa. Qual controle do Purview ajuda a impor proteção persistente no arquivo, independentemente de onde ele circule?",
    options: [
      "Sensitivity label com proteção aplicada ao conteúdo",
      "Conditional Access no Entra",
      "Teams meeting policy",
      "Exchange transport rule apenas"
    ],
    answerIndex: 0,
    explanation: "Labels de sensibilidade podem aplicar proteção persistente ao conteúdo. Conditional Access controla acesso, mas não 'viaja' com o documento do mesmo modo."
  },
  {
    question: "Qual alternativa descreve melhor por que uma 'biblioteca de prompts aprovados' ajuda segurança e adoção ao mesmo tempo?",
    options: [
      "Porque impede qualquer variação criativa",
      "Porque orienta usuários a pedir do jeito certo (minimizando dados) e reduz retrabalho/risco, acelerando resultados",
      "Porque substitui a necessidade de políticas de dados",
      "Porque garante que Copilot ignore permissões"
    ],
    answerIndex: 1,
    explanation: "Prompts aprovados reduzem risco (minimização/boas práticas) e aumentam produtividade (menos tentativa e erro). Eles complementam — não substituem — governança e permissões."
  },

  // ---- MAIS ENTRA / GOVERNANÇA ADMIN (HARD) ----
  {
    question: "Você quer reduzir blast radius: se uma conta admin for comprometida, o impacto deve ser menor. Qual prática está MAIS alinhada com o princípio de least privilege?",
    options: [
      "Dar Global Admin para todos do time para acelerar",
      "Usar roles com menor privilégio possível e elevar temporariamente via PIM quando necessário",
      "Desativar MFA para reduzir atrito",
      "Criar múltiplas contas admin compartilhadas"
    ],
    answerIndex: 1,
    explanation: "Least privilege e elevação controlada (PIM) reduzem impacto de comprometimento. Global Admin amplo e contas compartilhadas são anti-patterns."
  },
  {
    question: "Um admin quer 'medir postura de segurança de identidade' e acompanhar melhoria ao longo do tempo. Qual recurso do Entra é mais alinhado?",
    options: [
      "Identity Secure Score",
      "Purview Compliance Score apenas",
      "SharePoint site health",
      "Teams call analytics"
    ],
    answerIndex: 0,
    explanation: "Identity Secure Score (no contexto do Entra) se relaciona à postura de segurança de identidade e recomendações/melhoria contínua."
  },

  // ---- AGENTES / ADMIN COPILOT (HARD) ----
  {
    question: "Seu time quer limitar quem pode criar/gerenciar agentes para evitar proliferação sem governança. Qual abordagem é MAIS adequada?",
    options: [
      "Controlar via papéis/permissões administrativas (RBAC) e processo de aprovação",
      "Criar um post no Viva Engage pedindo cautela",
      "Aumentar a capacidade de armazenamento do tenant",
      "Trocar o tema de cores do Microsoft 365 admin center"
    ],
    answerIndex: 0,
    explanation: "Controle de criação/gestão de agentes é governança administrativa: papéis, permissões e processo (quem pode criar/publicar/gerenciar). Comunicação ajuda, mas não substitui RBAC."
  },
  {
    question: "Um usuário pede para um agente retornar dados confidenciais de um site ao qual ele não tem acesso. Qual resultado é o comportamento esperado (alto nível) em um ambiente bem governado?",
    options: [
      "O agente retorna porque é 'IA' e tem acesso ampliado",
      "O agente retorna apenas se o arquivo for PDF",
      "O agente deve respeitar permissões; sem acesso, não deve usar/retornar o conteúdo",
      "O agente ignora permissões quando o prompt é muito específico"
    ],
    answerIndex: 2,
    explanation: "O comportamento esperado é herdar permissões: se o usuário não pode acessar o conteúdo, o agente/Copilot não deve expor o conteúdo via resposta."
  },
  {
    question: "Você quer reduzir risco de dados sensíveis aparecerem em respostas do Copilot quando usuários fazem perguntas amplas demais. Qual estratégia é MAIS eficaz e realista?",
    options: [
      "Garantir que todos os documentos estejam com permissão 'Everyone' para reduzir erros",
      "Melhorar governança de dados (permissões/labels/DLP) e orientar prompts com minimização e escopo",
      "Desativar o Entra ID e usar contas locais",
      "Mover todo conteúdo para fora do Microsoft 365"
    ],
    answerIndex: 1,
    explanation: "Risco vem de dados acessíveis + prompts amplos. A mitigação madura combina governança (permissões/labels/DLP) e orientação de prompt (minimização/escopo)."
  },

  // ---- PERGUNTAS MISTAS (HARD) PARA FECHAR 34 ----
  {
    question: "Um time confunde Microsoft Purview e Microsoft Entra ID ao desenhar controles para Copilot. Qual mapeamento está MAIS correto?",
    options: [
      "Purview = identidade e acesso; Entra = DLP e retenção",
      "Purview = governança/compliance de dados; Entra = identidade, autenticação e Conditional Access",
      "Ambos fazem a mesma coisa; escolha qualquer um",
      "Teams admin center substitui ambos em ambientes Copilot"
    ],
    answerIndex: 1,
    explanation: "Purview é governança/compliance de dados (DLP, labels, retenção, eDiscovery, etc.). Entra é identidade/acesso (usuários/grupos, autenticação, CA, PIM)."
  },
  {
    question: "Você quer impedir que dados sensíveis saiam por compartilhamento acidental ao gerar conteúdo com Copilot e colar em outros lugares. Qual combinação é MAIS alinhada a prevenção e governança?",
    options: [
      "DLP + labels/sensibilidade + monitoramento/visibilidade de interações em Purview (quando aplicável)",
      "Somente SSO",
      "Somente aumentar complexidade de senha",
      "Somente criar um manual de boas práticas sem controles técnicos"
    ],
    answerIndex: 0,
    explanation: "Prevenção exige controles de dados (DLP, labels) e visibilidade/monitoramento para detectar padrões de risco. SSO/senha ajudam autenticação, mas não governam fluxo de dados."
  },
  {
    question: "O time de TI quer manter Copilot habilitado, mas reduzir incidentes por 'prompt ruim' e pedidos perigosos. Qual resposta é MAIS madura?",
    options: [
      "Desativar Copilot permanentemente",
      "Criar governança de prompts (biblioteca + diretrizes) e reforçar governança de dados (permissões/labels/DLP) com treinamento direcionado",
      "Proibir usuários de fazer perguntas em linguagem natural",
      "Permitir qualquer prompt e investigar apenas depois do incidente"
    ],
    answerIndex: 1,
    explanation: "Resposta madura combina prevenção (dados + prompts) e educação direcionada. 'Investigar depois' é reativo e não reduz risco de forma consistente."
  },
  {
    question: "Você precisa explicar para liderança por que 'monitorar prompts' NÃO é 'espionar usuários', mas sim governança. Qual justificativa é a MAIS correta?",
    options: [
      "Porque é necessário para reduzir salários",
      "Porque ajuda a entender padrões de uso, riscos de dados e necessidade de treinamento/controles",
      "Porque permite acessar emails privados de qualquer pessoa",
      "Porque substitui a equipe de compliance"
    ],
    answerIndex: 1,
    explanation: "Monitoramento para governança busca visibilidade de riscos e melhoria contínua (padrões de uso, exposição de dados, necessidades de controles e treinamento), não invasão indiscriminada."
  },

  {
    question: "Qual objeto é a base para autenticação e atribuição de licenças no Microsoft 365?",
    options: [
      "Biblioteca do SharePoint",
      "Canal do Teams",
      "Usuário",
      "Caixa de correio compartilhada"
    ],
    answerIndex: 2,
    explanation: "O usuário é a identidade principal no Microsoft 365. É por meio dessa identidade que a autenticação acontece, as licenças são atribuídas e os acessos são avaliados. Biblioteca, canal e caixa compartilhada são recursos de workload, não o objeto-base de identidade."
  },
  {
    question: "Qual portal centraliza usuários, licenças, domínios e configurações organizacionais?",
    options: [
      "Exchange admin center",
      "Microsoft 365 admin center",
      "Teams admin center",
      "SharePoint admin center"
    ],
    answerIndex: 1,
    explanation: "O Microsoft 365 admin center é o ponto administrativo central do tenant para configurações amplas da organização. Os outros admin centers são especializados em workloads específicos e não substituem a visão central do ambiente."
  },
  {
    question: "Você quer gerenciar caixas de correio e fluxo de email. Em qual admin center deve começar?",
    options: [
      "SharePoint admin center",
      "Teams admin center",
      "Exchange admin center",
      "Entra admin center"
    ],
    answerIndex: 2,
    explanation: "O Exchange admin center é o local apropriado para administrar caixas de correio, fluxo de mensagens e configurações relacionadas a email e calendário. Os outros centros cuidam de serviços diferentes."
  },
  {
    question: "Qual combinação representa corretamente objetos comuns do Microsoft 365?",
    options: [
      "Usuários, grupos, equipes, sites e bibliotecas",
      "Workspaces, pipelines, subscriptions e vaults",
      "Containers, pods e clusters",
      "Databases, schemas e tables"
    ],
    answerIndex: 0,
    explanation: "Usuários, grupos, equipes, sites e bibliotecas são objetos típicos do ecossistema Microsoft 365. As demais opções pertencem a outros contextos técnicos e não representam o conjunto clássico de objetos do Microsoft 365."
  },
  {
    question: "Qual recurso do SharePoint é mais adequado para armazenar documentos de um site?",
    options: [
      "Chat",
      "Biblioteca de documentos",
      "Caixa postal",
      "Fila"
    ],
    answerIndex: 1,
    explanation: "A biblioteca de documentos é o repositório padrão de arquivos dentro de um site SharePoint. Chat, caixa postal e fila não são recursos primários de armazenamento documental em SharePoint."
  },
  {
    question: "No Microsoft Teams, um team normalmente é organizado em:",
    options: [
      "Assinaturas",
      "Canais",
      "Cofres",
      "Tabelas"
    ],
    answerIndex: 1,
    explanation: "Teams são organizados em canais para separar conversas, arquivos e atividades por tema ou trabalho. As outras alternativas não representam a estrutura nativa de uma equipe no Microsoft Teams."
  },
  {
    question: "O que melhor descreve licenciamento baseado em grupo?",
    options: [
      "Cada aplicativo exige um tenant separado",
      "A licença é atribuída ao dispositivo e não ao usuário",
      "Licenças podem ser atribuídas automaticamente aos membros de um grupo",
      "Licenciamento por grupo existe apenas no Exchange"
    ],
    answerIndex: 2,
    explanation: "No licenciamento baseado em grupo, a associação ao grupo pode automatizar a atribuição de licenças. Isso simplifica administração em escala. Não é licenciamento por dispositivo e não é exclusivo de um único workload."
  },
  {
    question: "Qual cenário é mais adequado para uma caixa de correio compartilhada?",
    options: [
      "Armazenar prompts do Copilot",
      "Receber emails de uma equipe como suporte@empresa.com",
      "Hospedar políticas de DLP",
      "Executar buscas de eDiscovery"
    ],
    answerIndex: 1,
    explanation: "Caixas de correio compartilhadas são adequadas para endereços funcionais usados por várias pessoas, como suporte ou comercial. Elas não existem para armazenar prompts nem para substituir ferramentas de conformidade ou investigação."
  },
  {
    question: "Em qual admin center você normalmente configura políticas e controles do Teams?",
    options: [
      "Teams admin center",
      "Exchange admin center",
      "Purview portal",
      "Viva Engage admin center"
    ],
    answerIndex: 0,
    explanation: "O Teams admin center é o local apropriado para políticas, apps, reuniões, telefonia e outras configurações do Microsoft Teams. Os demais centros não são a superfície principal para esse workload."
  },
  {
    question: "Qual afirmação sobre sites do SharePoint está correta?",
    options: [
      "Todo site é uma licença",
      "Sites servem como contêineres de conteúdo e colaboração",
      "Sites substituem usuários",
      "Sites são iguais a caixas postais"
    ],
    answerIndex: 1,
    explanation: "Sites do SharePoint são espaços de colaboração, armazenamento e organização de conteúdo. Eles não substituem identidades, não equivalem a caixas postais e não são, por si só, licenças."
  },
  {
    question: "Qual portal é mais apropriado para revisar configurações de tenant e organização?",
    options: [
      "Microsoft 365 admin center",
      "Defender portal",
      "Fabric portal",
      "Azure Storage Explorer"
    ],
    answerIndex: 0,
    explanation: "O Microsoft 365 admin center é o ponto mais apropriado para revisar configurações amplas do tenant. Portais como Defender ou Fabric têm finalidades específicas e não são o centro organizacional geral."
  },
  {
    question: "Qual dos itens abaixo é mais diretamente associado ao serviço de email corporativo do Microsoft 365?",
    options: [
      "OneDrive",
      "SharePoint",
      "Exchange Online",
      "Teams Phone"
    ],
    answerIndex: 2,
    explanation: "Exchange Online é o serviço do Microsoft 365 associado a email e calendário corporativos. OneDrive e SharePoint são ligados a arquivos e colaboração, enquanto Teams Phone trata de telefonia."
  },
  {
    question: "Qual objeto é mais apropriado para controlar acesso coletivo a recursos?",
    options: [
      "Grupo",
      "Biblioteca",
      "Canal",
      "Prompt"
    ],
    answerIndex: 0,
    explanation: "Grupos são amplamente usados para controlar permissões e organizar acesso a recursos. Biblioteca e canal são destinos de uso; prompt não é um objeto de controle de acesso."
  },
  {
    question: "Se o objetivo é administrar permissões, compartilhamento e governança de sites, qual admin center é o mais relevante?",
    options: [
      "Teams admin center",
      "SharePoint admin center",
      "Exchange admin center",
      "Cost Management"
    ],
    answerIndex: 1,
    explanation: "O SharePoint admin center é a superfície principal para gestão de sites, permissões, compartilhamento e governança de SharePoint e OneDrive. Cost Management não administra sites."
  },
  {
    question: "O que melhor descreve a relação entre licenciamento e acesso a funcionalidades?",
    options: [
      "Licenças não influenciam recursos disponíveis",
      "O tipo de licença atribuído afeta o acesso aos recursos do Microsoft 365",
      "Só grupos recebem licença",
      "Licença só importa para o Teams"
    ],
    answerIndex: 1,
    explanation: "O tipo de licença influencia diretamente os recursos disponíveis para o usuário. Nem todos os serviços e capacidades estão incluídos em qualquer SKU, e o acesso não é universal."
  },

  {
    question: "Qual opção descreve melhor o modelo pay-as-you-go do Microsoft 365 Copilot?",
    options: [
      "Cobrança fixa por usuário, independentemente de uso",
      "Cobrança por consumo de determinados serviços",
      "Cobrança apenas anual",
      "Cobrança exclusiva do Exchange"
    ],
    answerIndex: 1,
    explanation: "Pay-as-you-go é cobrança baseada em consumo. Ele difere do modelo fixo por licença por usuário. Não é anual por definição e não está restrito ao Exchange."
  },
  {
    question: "O modelo mensal por licença é mais adequado quando:",
    options: [
      "Você quer pagar apenas quando um recurso é consumido",
      "Precisa de entitlement previsível por usuário",
      "Não quer atribuir usuários",
      "O tenant não possui identidades"
    ],
    answerIndex: 1,
    explanation: "Licença por usuário é mais adequada quando a organização quer previsibilidade de acesso e custo por usuário. Pay-as-you-go atende melhor cenários de consumo variável."
  },
  {
    question: "Qual serviço é citado como exemplo de uso com pay-as-you-go no Copilot?",
    options: [
      "SharePoint agents",
      "Windows Update",
      "DHCP",
      "Hyper-V Replica"
    ],
    answerIndex: 0,
    explanation: "SharePoint agents é um exemplo de serviço associado ao modelo pay-as-you-go no contexto do Copilot. As demais opções não representam esse cenário de cobrança."
  },
  {
    question: "Para configurar pay-as-you-go, qual pré-requisito é necessário?",
    options: [
      "Um servidor Exchange local",
      "Assinatura do Azure e resource group no mesmo tenant",
      "Um SQL Server dedicado",
      "Uma chave SSH"
    ],
    answerIndex: 1,
    explanation: "O cenário de pay-as-you-go requer integração com uma assinatura do Azure e um resource group vinculados ao tenant. As demais opções não são pré-requisitos centrais para esse modelo."
  },
  {
    question: "Qual papel administrativo pode ser usado para configurar pay-as-you-go no Microsoft 365?",
    options: [
      "Billing Administrator",
      "Printer Administrator",
      "Teams User",
      "Leitor sem permissões administrativas"
    ],
    answerIndex: 0,
    explanation: "Billing Administrator é um dos papéis apropriados para configuração de cobrança. Usuário comum ou perfis sem privilégio administrativo não são adequados para esse tipo de tarefa."
  },
  {
    question: "Antes de usar um serviço pay-as-you-go, o administrador precisa primeiro:",
    options: [
      "Criar uma biblioteca no SharePoint",
      "Criar uma billing policy",
      "Criar um canal privado no Teams",
      "Criar um conector SMTP"
    ],
    answerIndex: 1,
    explanation: "A billing policy precisa ser criada antes de ser conectada ao serviço de consumo. Os outros itens não são passos centrais do fluxo administrativo de cobrança por consumo."
  },
  {
    question: "O que uma billing policy pode definir?",
    options: [
      "Somente fonte tipográfica do tenant",
      "Escopo de usuários como todos ou um grupo específico",
      "Somente tamanho de caixa postal",
      "Apenas idioma do portal"
    ],
    answerIndex: 1,
    explanation: "Uma billing policy pode definir o escopo de usuários cobertos pelo consumo, como todos ou um grupo específico. Ela não existe para configurar fontes, mailbox size ou idioma."
  },
  {
    question: "Após criar a billing policy, qual é o próximo passo lógico?",
    options: [
      "Habilitar DHCP",
      "Conectar a política a um serviço pay-as-you-go",
      "Criar uma sandbox do Teams",
      "Mover o tenant para outra região"
    ],
    answerIndex: 1,
    explanation: "Depois de criar a política, ela precisa ser conectada ao serviço pay-as-you-go que será faturado. Sem essa conexão, a política existe, mas não está em uso."
  },
  {
    question: "Onde o administrador pode acompanhar custos de pay-as-you-go do Copilot no Microsoft 365?",
    options: [
      "Billing > Cost Management",
      "OneDrive > Sync",
      "Teams > Calls",
      "Outlook > Rules"
    ],
    answerIndex: 0,
    explanation: "Billing > Cost Management é a superfície apropriada para acompanhar custos do consumo. As outras opções tratam de funcionalidades sem relação com monitoramento financeiro."
  },
  {
    question: "Qual afirmação é correta sobre atualização de custos em Microsoft Cost Management?",
    options: [
      "O custo aparece sempre em segundos",
      "Pode levar algum tempo para refletir o uso",
      "Nunca atualiza",
      "Só atualiza uma vez por ano"
    ],
    answerIndex: 1,
    explanation: "O monitoramento de custo não é instantâneo em todos os casos. Pode haver atraso até que o consumo seja consolidado. Isso não significa ausência de dados nem atualização anual."
  },
  {
    question: "Qual é a principal diferença entre licença mensal e pay-as-you-go?",
    options: [
      "Não existe diferença",
      "Licença mensal oferece entitlement previsível; pay-as-you-go cobra consumo",
      "Pay-as-you-go substitui identidade",
      "Licença mensal só serve para email"
    ],
    answerIndex: 1,
    explanation: "Licença mensal está ligada a um modelo previsível por usuário, enquanto pay-as-you-go depende do consumo do serviço. Billing não substitui identidade nem permissões."
  },
  {
    question: "No Copilot Chat, agentes que acessam dados compartilhados do tenant tendem a ser:",
    options: [
      "Sempre gratuitos",
      "Baseados em consumo medido",
      "Exclusivos de SharePoint Server local",
      "Independentes de cobrança"
    ],
    answerIndex: 1,
    explanation: "Quando agentes acessam dados compartilhados do tenant em cenários específicos, o modelo tende a ser de consumo medido. Isso não significa que todo agente seja gratuito ou sem billing."
  },
  {
    question: "Para usuários com licença Microsoft 365 Copilot, o uso de agentes em geral:",
    options: [
      "Exige sempre compra separada por agente",
      "Pode vir acompanhado do licenciamento principal, conforme o cenário suportado",
      "Só funciona com conta pessoal Microsoft",
      "Não depende de identidade"
    ],
    answerIndex: 1,
    explanation: "Em cenários suportados, o uso de agentes pode estar incluído no contexto do licenciamento do Microsoft 365 Copilot. Ainda assim, o acesso continua dependente de identidade, permissões e governança."
  },
  {
    question: "Em um cenário de grande imprevisibilidade de uso, a opção mais alinhada tende a ser:",
    options: [
      "Cobrança por consumo",
      "Licença fixa para um recurso quase nunca usado",
      "Sem política de billing",
      "Desabilitar identidades"
    ],
    answerIndex: 0,
    explanation: "Quando o uso é variável e imprevisível, cobrança por consumo pode ser mais aderente. Uma licença fixa pode não ser o modelo mais eficiente em custo nesse cenário."
  },
  {
    question: "Qual ação ajuda a controlar gastos em pay-as-you-go?",
    options: [
      "Ignorar billing policies",
      "Criar orçamento e monitorar uso/custo",
      "Desabilitar auditoria",
      "Remover grupos de segurança"
    ],
    answerIndex: 1,
    explanation: "Criar orçamento e acompanhar uso/custo é uma boa prática de governança financeira. Ignorar políticas ou remover recursos sem critério não resolve o problema de monitoramento."
  },

  {
    question: "Qual princípio está no centro da estratégia Zero Trust?",
    options: [
      "Confiar implicitamente na rede interna",
      "Verificar explicitamente",
      "Compartilhar tudo por padrão",
      "Desabilitar MFA"
    ],
    answerIndex: 1,
    explanation: "Zero Trust se baseia em verificar explicitamente, aplicar menor privilégio e assumir violação. Confiar automaticamente no ambiente interno vai contra esse modelo."
  },
  {
    question: "O que a autenticação responde?",
    options: [
      "O que o usuário pode fazer",
      "Quem é o usuário",
      "Quanto custa a licença",
      "Onde está o site"
    ],
    answerIndex: 1,
    explanation: "Autenticação trata de provar identidade: quem é o usuário. Já autorização responde o que essa identidade pode acessar ou fazer."
  },
  {
    question: "O que a autorização determina?",
    options: [
      "Quais ações e recursos uma identidade autenticada pode acessar",
      "Se o usuário possui endereço de email",
      "Se o tenant tem SharePoint",
      "Se o prompt foi bem escrito"
    ],
    answerIndex: 0,
    explanation: "Autorização trata de permissões e escopo de acesso depois que a identidade já foi validada. Não tem relação com qualidade do prompt nem com a existência do tenant."
  },
  {
    question: "O que melhor descreve o Single Sign-On (SSO)?",
    options: [
      "Um segundo fator de autenticação",
      "Um mecanismo para reduzir múltiplos prompts de login entre aplicativos",
      "Um tipo de DLP",
      "Um relatório de eDiscovery"
    ],
    answerIndex: 1,
    explanation: "SSO melhora a experiência do usuário ao permitir reutilização da autenticação entre apps. Não é o mesmo que MFA e não é uma solução de conformidade."
  },
  {
    question: "O Conditional Access é descrito como:",
    options: [
      "Um antivírus local",
      "O motor de políticas Zero Trust da Microsoft",
      "Um recurso exclusivo do Exchange",
      "Um tipo de licença de email"
    ],
    answerIndex: 1,
    explanation: "Conditional Access é o mecanismo de políticas que usa sinais contextuais para aplicar decisões de acesso. Não é antivírus, nem licença, nem algo limitado ao Exchange."
  },
  {
    question: "Qual combinação representa corretamente sinais usados pelo Conditional Access?",
    options: [
      "Usuário, dispositivo, localização e risco",
      "Somente nome do arquivo",
      "Apenas horário do Outlook",
      "Apenas impressora padrão"
    ],
    answerIndex: 0,
    explanation: "Conditional Access combina sinais como usuário, dispositivo, localização, aplicativo e risco para tomar decisões. As outras opções são excessivamente limitadas ou irrelevantes."
  },
  {
    question: "Em termos simples, políticas de Conditional Access funcionam como:",
    options: [
      "Fórmulas de Excel",
      "Regras do tipo 'se-então'",
      "Grupos de distribuição",
      "Backups locais"
    ],
    answerIndex: 1,
    explanation: "A lógica de Conditional Access é frequentemente explicada como 'se uma condição ocorrer, então aplique uma ação'. Isso traduz bem o comportamento de políticas contextuais."
  },
  {
    question: "Quando o Conditional Access é avaliado no fluxo de acesso?",
    options: [
      "Antes da identidade existir",
      "Depois da autenticação de primeiro fator",
      "Só após exportação de dados",
      "Apenas em sites públicos"
    ],
    answerIndex: 1,
    explanation: "Conditional Access é aplicado após a autenticação de primeiro fator. Isso permite usar sinais contextuais para decidir se bloqueia, permite ou exige controles adicionais."
  },
  {
    question: "O que o MFA adiciona ao processo de segurança?",
    options: [
      "Um nome mais longo ao usuário",
      "Mais de um fator de validação de identidade",
      "Apenas criptografia de email",
      "Compartilhamento externo automático"
    ],
    answerIndex: 1,
    explanation: "MFA exige múltiplos fatores de autenticação, reduzindo risco de comprometimento de conta. Não é mecanismo de criptografia de email nem de compartilhamento."
  },
  {
    question: "Qual exemplo é um método passwordless?",
    options: [
      "FIDO2 ou Windows Hello for Business",
      "SMTP relay",
      "Retention label",
      "eDiscovery case"
    ],
    answerIndex: 0,
    explanation: "FIDO2 e Windows Hello for Business são exemplos clássicos de autenticação passwordless. Os demais itens pertencem a outros domínios técnicos."
  },
  {
    question: "Qual recurso ajuda a aplicar privilégio administrativo just-in-time?",
    options: [
      "PIM",
      "Teams Live Event",
      "Delve",
      "Viva Glint"
    ],
    answerIndex: 0,
    explanation: "PIM ajuda a reduzir privilégio permanente, permitindo ativação sob demanda. Isso apoia o princípio de menor privilégio em ambientes modernos."
  },
  {
    question: "O que é um benefício de usar PIM sob a ótica Zero Trust?",
    options: [
      "Aumentar privilégio permanente",
      "Reduzir exposição de contas altamente privilegiadas",
      "Remover auditoria",
      "Desabilitar grupos"
    ],
    answerIndex: 1,
    explanation: "PIM reduz o tempo em que privilégios elevados ficam ativos, diminuindo superfície de risco. Isso é mais alinhado ao Zero Trust do que manter privilégios permanentes."
  },
  {
    question: "Em qual tipo de ferramenta você revisaria logs de atividade de usuário e administrador?",
    options: [
      "Ferramenta de auditoria/logs",
      "Biblioteca de fotos",
      "Planner",
      "Whiteboard"
    ],
    answerIndex: 0,
    explanation: "Logs de atividade são revisados em ferramentas de auditoria apropriadas. Planner, Whiteboard e biblioteca de fotos não são superfícies primárias para investigação administrativa."
  },
  {
    question: "Qual item ajuda a avaliar postura de segurança de identidade no Entra?",
    options: [
      "Identity Secure Score",
      "Site usage report",
      "Viva Pulse",
      "Outlook categories"
    ],
    answerIndex: 0,
    explanation: "Identity Secure Score ajuda a entender postura de segurança e oportunidades de melhoria no contexto de identidade. As demais opções não têm esse objetivo principal."
  },
  {
    question: "Security Defaults e Conditional Access normalmente:",
    options: [
      "Devem ser combinados livremente como se fossem a mesma abordagem",
      "Não são pensados para serem usados juntos da mesma forma que políticas customizadas",
      "São exatamente a mesma coisa",
      "Só existem para usuários convidados"
    ],
    answerIndex: 1,
    explanation: "Security Defaults e Conditional Access têm propósitos relacionados, mas não devem ser tratados como camadas equivalentes e combinadas sem planejamento. Conditional Access oferece granularidade maior."
  },

  {
    question: "O principal objetivo do Microsoft Defender XDR é:",
    options: [
      "Organizar bibliotecas do SharePoint",
      "Unificar proteção, investigação e resposta contra ameaças em vários domínios",
      "Criar labels de retenção",
      "Administrar domínio DNS"
    ],
    answerIndex: 1,
    explanation: "Defender XDR consolida sinais e resposta de segurança em uma experiência integrada. Ele não existe para governança de bibliotecas nem para administração de DNS."
  },
  {
    question: "Em um cenário com sinais suspeitos em identidade, endpoint e email, a abordagem mais alinhada com Defender XDR é:",
    options: [
      "Analisar tudo separadamente sem correlação",
      "Correlacionar os sinais em uma visão integrada",
      "Desativar logs",
      "Mover os emails para arquivo morto"
    ],
    answerIndex: 1,
    explanation: "A força de uma solução XDR está na correlação entre múltiplos sinais de segurança. Tratar tudo de forma isolada reduz contexto e capacidade de resposta."
  },
  {
    question: "Qual é uma vantagem de uma plataforma XDR?",
    options: [
      "Menor visibilidade",
      "Melhor priorização e investigação de incidentes",
      "Ausência de telemetria",
      "Eliminação de identidade"
    ],
    answerIndex: 1,
    explanation: "Uma plataforma XDR melhora visibilidade, correlação e priorização de incidentes. Menor visibilidade e ausência de telemetria seriam efeitos opostos ao objetivo da solução."
  },
  {
    question: "Defender XDR está mais associado a:",
    options: [
      "Threat protection e incident response",
      "Gestão de bibliotecas",
      "Criação de canais",
      "Cadastro de domínios"
    ],
    answerIndex: 0,
    explanation: "Defender XDR está ligado a proteção contra ameaças, detecção, investigação e resposta. As outras opções pertencem a áreas administrativas diferentes."
  },
  {
    question: "Se o exame trouxer um cenário sobre proteção moderna com múltiplos sinais, o serviço mais alinhado é:",
    options: [
      "Defender XDR",
      "Content Explorer",
      "Delve",
      "Bookings"
    ],
    answerIndex: 0,
    explanation: "Quando o foco é correlação de sinais de segurança e resposta integrada a incidentes, Defender XDR é a melhor opção. Content Explorer e Delve têm propósitos distintos."
  },

  {
    question: "Qual solução do Purview ajuda a classificar e proteger conteúdo sensível?",
    options: [
      "Information Protection",
      "Teams Phone",
      "Power BI Embedded",
      "DHCP"
    ],
    answerIndex: 0,
    explanation: "Microsoft Purview Information Protection é a solução relacionada à classificação, rotulagem e proteção de conteúdo sensível. As outras opções não têm essa finalidade."
  },
  {
    question: "Qual é um uso típico de sensitivity labels?",
    options: [
      "Definir senha do Wi-Fi",
      "Aplicar classificação, marcação e, em alguns cenários, proteção ao conteúdo",
      "Criar billing policy",
      "Substituir grupos"
    ],
    answerIndex: 1,
    explanation: "Sensitivity labels ajudam a classificar o conteúdo e, dependendo da política, também podem aplicar proteção. Elas não existem para rede sem fio, cobrança ou substituição de grupos."
  },
  {
    question: "Quando uma sensitivity label aplica criptografia, o efeito principal é:",
    options: [
      "Melhorar resolução da imagem",
      "Restringir acesso conforme política de proteção",
      "Apagar o arquivo",
      "Tornar o site público"
    ],
    answerIndex: 1,
    explanation: "Quando há criptografia associada à label, o objetivo é proteger o conteúdo e limitar acesso conforme regras definidas. Não há relação com qualidade de imagem nem com publicação do site."
  },
  {
    question: "Qual recurso do Purview ajuda a evitar vazamento ou oversharing de dados sensíveis?",
    options: [
      "DLP",
      "Viva Learning",
      "Bookings",
      "Sway"
    ],
    answerIndex: 0,
    explanation: "DLP monitora e ajuda a evitar compartilhamento indevido ou exfiltração de dados sensíveis. As outras opções não são soluções primárias de proteção contra perda de dados."
  },
  {
    question: "Um 'policy tip' em DLP serve para:",
    options: [
      "Configurar IP fixo",
      "Informar e orientar o usuário no momento da ação",
      "Criar licença",
      "Reindexar eDiscovery"
    ],
    answerIndex: 1,
    explanation: "Policy tips ajudam a educar o usuário em tempo real sobre uma ação potencialmente inadequada. Eles não são mecanismos de rede, licenciamento ou reindexação."
  },
  {
    question: "Em termos de governança, labels ajudam o Copilot porque:",
    options: [
      "Substituem a identidade do usuário",
      "Fornecem guardrails de acesso e proteção para dados sensíveis",
      "Desabilitam o SharePoint",
      "Eliminam permissões"
    ],
    answerIndex: 1,
    explanation: "Labels e políticas de proteção ajudam a impor limites e controles sobre conteúdo sensível, o que é importante em cenários com Copilot. Elas não substituem identidade nem permissões."
  },
  {
    question: "Qual solução do Purview se preocupa mais com impedir exfiltração acidental ou indevida de dados?",
    options: [
      "DLP",
      "Exchange transport rule apenas",
      "Whiteboard",
      "Teams avatar"
    ],
    answerIndex: 0,
    explanation: "DLP é a solução mais diretamente associada à prevenção de perda de dados e exfiltração. Regras de transporte podem ajudar em email, mas não substituem a abrangência do DLP."
  },
  {
    question: "Classificação de dados no Purview ajuda a organização porque:",
    options: [
      "Remove todos os riscos automaticamente",
      "Permite identificar e entender onde estão dados sensíveis",
      "Elimina a necessidade de permissões",
      "Substitui eDiscovery"
    ],
    answerIndex: 1,
    explanation: "Classificação ajuda a localizar, entender e proteger dados sensíveis. Ela não remove todos os riscos sozinha, nem substitui o modelo de permissões ou ferramentas de investigação."
  },
  {
    question: "O uso de labels visíveis, como marcações ou watermarks, contribui principalmente para:",
    options: [
      "Reduzir percepção de sensibilidade",
      "Aumentar conscientização sobre o tipo de conteúdo",
      "Criar grupos automaticamente",
      "Configurar billing"
    ],
    answerIndex: 1,
    explanation: "Marcas visíveis ajudam a conscientizar os usuários sobre a sensibilidade do conteúdo e reforçam a política de proteção. Não criam grupos nem atuam sobre cobrança."
  },
  {
    question: "Se a pergunta do exame tratar de 'proteger conteúdo com base em sensibilidade', o recurso mais direto é:",
    options: [
      "Sensitivity labels",
      "Cost Management",
      "Teams policy",
      "Forms"
    ],
    answerIndex: 0,
    explanation: "Sensitivity labels são o recurso mais diretamente associado à classificação e proteção com base em sensibilidade. Cost Management e Teams policy tratam de outros domínios."
  },
  {
    question: "DLP é mais adequado para qual cenário?",
    options: [
      "Bloquear ou alertar sobre compartilhamento indevido de dados sensíveis",
      "Criar salas de reunião",
      "Fazer onboarding",
      "Atualizar wallpaper"
    ],
    answerIndex: 0,
    explanation: "DLP é voltado para prevenir perda de dados, incluindo alertas, bloqueios e orientação ao usuário. Não foi feito para reunião, onboarding ou personalização visual."
  },
  {
    question: "Information Protection e DLP se complementam porque:",
    options: [
      "Um classifica/protege e o outro ajuda a prevenir compartilhamentos indevidos",
      "São exatamente a mesma funcionalidade",
      "Um substitui o outro completamente",
      "Nenhum deles atua sobre dados"
    ],
    answerIndex: 0,
    explanation: "Information Protection e DLP atuam em camadas complementares: um trata de classificação/proteção e o outro de prevenção de perda e uso indevido. Não são idênticos."
  },
  {
    question: "Qual afirmação é correta sobre labels e proteção?",
    options: [
      "Toda label obrigatoriamente criptografa",
      "Labels podem classificar e, dependendo da configuração, também proteger",
      "Labels só existem para sites",
      "Labels apagam logs"
    ],
    answerIndex: 1,
    explanation: "Nem toda label criptografa, mas labels podem classificar e também aplicar proteção conforme a política. Elas não se limitam a sites e não apagam logs."
  },
  {
    question: "Em um ambiente com Copilot, classificar o conteúdo ajuda principalmente a:",
    options: [
      "Reduzir a necessidade de tenant",
      "Melhorar governança e aplicar controles adequados aos dados",
      "Excluir bibliotecas antigas automaticamente",
      "Remover Conditional Access"
    ],
    answerIndex: 1,
    explanation: "Classificar conteúdo melhora a capacidade de aplicar controles coerentes com a sensibilidade dos dados. Isso fortalece a governança do ambiente usado pelo Copilot."
  },
  {
    question: "Se você precisa descobrir itens classificados e entender sua distribuição, isso se relaciona mais com:",
    options: [
      "Funcionalidades de classificação e exploração de dados no Purview",
      "Teams meeting recap",
      "Planner charts",
      "PowerPoint themes"
    ],
    answerIndex: 0,
    explanation: "Explorar e entender distribuição de dados classificados é um cenário típico do Purview. As demais opções pertencem a contextos sem foco em classificação de dados."
  },

  {
    question: "Qual solução do Purview identifica padrões de atividade que podem indicar risco interno?",
    options: [
      "Insider Risk Management",
      "SharePoint migration tool",
      "Bookings",
      "Planner"
    ],
    answerIndex: 0,
    explanation: "Insider Risk Management ajuda a identificar atividades potencialmente arriscadas praticadas por usuários internos. As outras opções não têm esse foco de risco comportamental."
  },
  {
    question: "Communication Compliance é mais adequada para:",
    options: [
      "Monitorar certos tipos de comunicações conforme políticas de conformidade",
      "Criar billing policies",
      "Proteger endpoint com antimalware",
      "Administrar DNS"
    ],
    answerIndex: 0,
    explanation: "Communication Compliance existe para supervisionar e analisar comunicações em cenários de conformidade e risco. Não é ferramenta de billing, antimalware ou DNS."
  },
  {
    question: "DSPM for AI tem foco principal em:",
    options: [
      "Gerenciar impressoras",
      "Entender e reduzir riscos relacionados a dados e exposição em cenários de IA",
      "Criar canais do Teams",
      "Configurar quotas de mailbox"
    ],
    answerIndex: 1,
    explanation: "DSPM for AI trata da postura de segurança de dados em cenários de IA, ajudando a entender exposição e risco. Não é recurso de impressão, Teams ou quota de caixa postal."
  },
  {
    question: "Qual conceito é central em Data Lifecycle Management?",
    options: [
      "Reter ou excluir conteúdo conforme políticas ao longo do tempo",
      "Criar usuários convidados",
      "Instalar agente no laptop",
      "Gerar prompt automaticamente"
    ],
    answerIndex: 0,
    explanation: "Data Lifecycle Management trata do ciclo de vida dos dados, incluindo retenção e exclusão conforme política. Não tem como objetivo criar usuários ou automatizar prompts."
  },
  {
    question: "O que melhor descreve retenção?",
    options: [
      "Tornar todo conteúdo público",
      "Manter conteúdo pelo período exigido e tratá-lo conforme política",
      "Ignorar legislação",
      "Bloquear MFA"
    ],
    answerIndex: 1,
    explanation: "Retenção define por quanto tempo o conteúdo deve ser preservado e como ele será tratado conforme políticas e requisitos. Não tem relação com tornar conteúdo público ou bloquear MFA."
  },
  {
    question: "Adaptive Protection integra sinais de Insider Risk com quais tipos de controle?",
    options: [
      "DLP, Data Lifecycle e Conditional Access",
      "Apenas regras do Exchange",
      "Apenas OneNote",
      "Apenas Planner"
    ],
    answerIndex: 0,
    explanation: "Adaptive Protection pode combinar sinais de risco com controles como DLP, Data Lifecycle Management e Conditional Access. Isso permite respostas mais proporcionais ao risco."
  },
  {
    question: "Em um cenário de usuário de alto risco interno, uma integração útil é:",
    options: [
      "Aplicar políticas mais restritivas dinamicamente",
      "Desligar toda a organização",
      "Remover todos os sites",
      "Desabilitar auditoria"
    ],
    answerIndex: 0,
    explanation: "A ideia é aplicar controles adequados ao nível de risco do usuário, não tomar medidas indiscriminadas ou reduzir visibilidade. Desabilitar auditoria pioraria a governança."
  },
  {
    question: "O Compliance Manager ajuda principalmente a:",
    options: [
      "Avaliar e gerenciar conformidade com controles, avaliações e ações de melhoria",
      "Criar canais privados",
      "Hospedar bibliotecas",
      "Fazer troubleshooting de impressora"
    ],
    answerIndex: 0,
    explanation: "Compliance Manager organiza avaliações, controles e improvement actions para apoiar conformidade. Ele não substitui plataformas de colaboração nem é ferramenta de suporte de impressora."
  },
  {
    question: "O 'compliance score' do Compliance Manager serve para:",
    options: [
      "Medir maturidade de jogo no Teams",
      "Priorizar ações de melhoria na postura de conformidade",
      "Substituir identidades",
      "Gerar licenças"
    ],
    answerIndex: 1,
    explanation: "Compliance score ajuda a entender a postura atual e a priorizar ações que reduzam risco de conformidade. Não substitui identidade nem gera licenças."
  },
  {
    question: "O que são 'improvement actions' no Compliance Manager?",
    options: [
      "Ações sugeridas ou gerenciadas para melhorar aderência a requisitos",
      "Mensagens do Outlook",
      "Grupos de segurança",
      "Pastas pessoais"
    ],
    answerIndex: 0,
    explanation: "Improvement actions são tarefas e orientações para melhorar a aderência a padrões, regulamentos ou políticas. Não são mensagens nem objetos de armazenamento."
  },
  {
    question: "Qual afirmação é correta sobre Compliance Manager?",
    options: [
      "Ele só serve para Microsoft 365 local",
      "Pode apoiar avaliação de conformidade inclusive em cenários multicloud",
      "Substitui todo o Purview",
      "Não usa avaliações"
    ],
    answerIndex: 1,
    explanation: "Compliance Manager pode apoiar gestão de conformidade além do ambiente mais restrito do Microsoft 365. Ele não substitui todo o Purview e depende de avaliações e controles."
  },
  {
    question: "Se a pergunta citar 'inventário de riscos de proteção de dados, controles, regulações e ações de melhoria', a resposta mais provável é:",
    options: [
      "Compliance Manager",
      "SharePoint site usage",
      "Teams calls",
      "Windows Backup"
    ],
    answerIndex: 0,
    explanation: "Esses elementos são típicos do Compliance Manager: avaliações, controles, improvement actions e visão de conformidade. Os demais itens não cobrem esse conjunto."
  },
  {
    question: "Data Lifecycle Management é relevante para Copilot porque:",
    options: [
      "Mantém dados inúteis para sempre",
      "Ajuda a garantir que o conteúdo siga políticas de retenção e descarte",
      "Elimina necessidade de labels",
      "Troca a licença do usuário"
    ],
    answerIndex: 1,
    explanation: "Governar o ciclo de vida dos dados ajuda a manter o ambiente mais coerente e alinhado a políticas. Não substitui labels nem altera licenças."
  },
  {
    question: "Communication Compliance é mais sobre:",
    options: [
      "Observabilidade de comunicações segundo políticas e riscos específicos",
      "Administração de impressoras",
      "Criação de usuários",
      "Backup físico"
    ],
    answerIndex: 0,
    explanation: "Communication Compliance monitora e analisa comunicações em cenários determinados por política. Não é ferramenta de criação de usuários ou infraestrutura física."
  },
  {
    question: "DSPM for AI e SharePoint/Purview se conectam no objetivo de:",
    options: [
      "Aumentar oversharing",
      "Entender exposição de dados e melhorar postura para uso de IA",
      "Remover SSO",
      "Desativar grupos"
    ],
    answerIndex: 1,
    explanation: "DSPM for AI apoia o entendimento de risco e exposição de dados em cenários de IA. Isso se conecta à governança e remediação de oversharing, não à remoção de SSO ou grupos."
  },

  {
    question: "O Activity Explorer mostra principalmente:",
    options: [
      "Custos do Azure",
      "Atividades realizadas sobre conteúdo rotulado ou classificado",
      "Apenas domínios DNS",
      "Somente canais do Teams"
    ],
    answerIndex: 1,
    explanation: "Activity Explorer ajuda a visualizar atividades relacionadas a conteúdo rotulado/classificado. Ele não é uma ferramenta de custo, DNS ou organização de canais."
  },
  {
    question: "De onde vem a base de dados usada pelo Activity Explorer?",
    options: [
      "Somente logs locais do notebook",
      "Unified audit logs do Microsoft 365",
      "DHCP server",
      "Impressora de rede"
    ],
    answerIndex: 1,
    explanation: "O Activity Explorer se apoia nos logs unificados de auditoria do Microsoft 365. As demais opções não representam a fonte correta desse tipo de observabilidade."
  },
  {
    question: "Qual ferramenta permite investigar 'o que aconteceu' com conteúdo protegido ou rotulado?",
    options: [
      "Activity Explorer",
      "Bookings",
      "Teams calendar",
      "Delve"
    ],
    answerIndex: 0,
    explanation: "Se a necessidade é entender atividades relacionadas ao conteúdo protegido, Activity Explorer é a melhor escolha. Bookings e calendário do Teams têm finalidades diferentes."
  },
  {
    question: "O Data Explorer é mais sensível em termos de acesso porque:",
    options: [
      "Permite visualizar conteúdo de itens analisados",
      "Só mostra tema visual",
      "Não possui dados",
      "Não exige permissões"
    ],
    answerIndex: 0,
    explanation: "Data Explorer pode permitir visualização de conteúdo, por isso o acesso é mais restrito. Não se trata apenas de tema visual, e definitivamente exige permissões apropriadas."
  },
  {
    question: "Qual afirmação sobre o Data Explorer está correta?",
    options: [
      "Qualquer usuário pode ver conteúdo sem função",
      "O acesso é altamente restrito devido à sensibilidade do conteúdo exibido",
      "Só funciona offline",
      "É igual ao Teams chat"
    ],
    answerIndex: 1,
    explanation: "Data Explorer exige controle rigoroso porque pode expor conteúdo sensível. Não é aberto a qualquer usuário e não tem relação com o modelo de uso do chat do Teams."
  },
  {
    question: "O Content Explorer ajuda mais diretamente a:",
    options: [
      "Ver o resumo e a lista de itens sensíveis encontrados",
      "Configurar impressoras",
      "Criar billing policy",
      "Agendar reunião"
    ],
    answerIndex: 0,
    explanation: "Content Explorer ajuda a localizar e visualizar a distribuição de itens sensíveis, conforme permissões. Não serve para billing, impressão ou agenda."
  },
  {
    question: "Qual dupla melhor diferencia Activity Explorer e Content/Data Explorer?",
    options: [
      "Activity = ações; Content/Data = itens e conteúdo",
      "Activity = licenças; Content = DNS",
      "Activity = reuniões; Data = calendário",
      "São idênticos"
    ],
    answerIndex: 0,
    explanation: "Activity Explorer mostra o que foi feito com o conteúdo; Content/Data Explorer mostra itens, locais e, em alguns casos, o conteúdo em si. Eles se complementam, mas não são iguais."
  },
  {
    question: "O eDiscovery no Purview serve para:",
    options: [
      "Identificar, revisar e gerenciar conteúdo eletrônico para investigações e casos legais",
      "Criar labels visuais",
      "Gerenciar MFA",
      "Publicar agentes"
    ],
    answerIndex: 0,
    explanation: "eDiscovery é a solução para descoberta eletrônica em investigações e casos legais. Labels, MFA e publicação de agentes pertencem a outros domínios."
  },
  {
    question: "Qual afirmação é correta sobre eDiscovery atual no Purview?",
    options: [
      "Content Search foi incorporado à experiência de busca do eDiscovery",
      "eDiscovery só busca SharePoint",
      "Não trabalha com mailboxes",
      "Não exporta resultados"
    ],
    answerIndex: 0,
    explanation: "A experiência moderna de eDiscovery incorpora os recursos de Content Search. eDiscovery não é limitado ao SharePoint e trabalha com múltiplas fontes, inclusive mailboxes."
  },
  {
    question: "Em um caso que precisa localizar emails e arquivos relacionados a uma investigação, a solução mais apropriada é:",
    options: [
      "eDiscovery",
      "Microsoft Forms",
      "Viva Connections",
      "OneNote"
    ],
    answerIndex: 0,
    explanation: "Quando o objetivo é localizar e revisar conteúdo eletrônico em múltiplos workloads, eDiscovery é a opção correta. Forms e OneNote não substituem esse processo investigativo."
  },

  {
    question: "O que 'oversharing' significa no contexto do Microsoft 365 Copilot?",
    options: [
      "Compartilhamento excessivo ou indevido de conteúdo e permissões além do necessário",
      "Uso de duas licenças no mesmo usuário",
      "Ter muitos canais do Teams",
      "Fazer backup em excesso"
    ],
    answerIndex: 0,
    explanation: "Oversharing é exposição excessiva de dados ou permissões, o que pode impactar o que o Copilot consegue acessar em cenários permission-trimmed. Não tem relação com quantidade de canais ou backups."
  },
  {
    question: "O SharePoint Advanced Management (SAM) ajuda principalmente em quais três frentes?",
    options: [
      "Conteúdo, ciclo de vida e permissões/acesso",
      "Impressão, scanner e fax",
      "DNS, DHCP e VPN",
      "Payroll, CRM e ERP"
    ],
    answerIndex: 0,
    explanation: "SAM apoia governança de conteúdo, lifecycle e gestão de acesso/permissões em SharePoint e OneDrive. As outras opções pertencem a domínios totalmente diferentes."
  },
  {
    question: "Qual é um objetivo do SAM ao preparar o ambiente para Copilot?",
    options: [
      "Aumentar conteúdo obsoleto",
      "Reduzir oversharing e melhorar governança",
      "Eliminar sites",
      "Remover todas as bibliotecas"
    ],
    answerIndex: 1,
    explanation: "SAM ajuda a reduzir exposição indevida e a melhorar a governança do conteúdo que pode ser acessado via Copilot. Não existe para eliminar o ambiente ou aumentar desorganização."
  },
  {
    question: "Um relatório de Data Access Governance no SharePoint ajuda a:",
    options: [
      "Identificar sites com conteúdo potencialmente overshared ou sensível",
      "Criar caixas postais",
      "Configurar MFA",
      "Gerar score de certificação"
    ],
    answerIndex: 0,
    explanation: "Relatórios de Data Access Governance ajudam a encontrar áreas com maior risco de exposição ou dados sensíveis. Não criam mailboxes nem substituem recursos de identidade."
  },
  {
    question: "Em um cenário de preparação para Copilot, uma boa prática é:",
    options: [
      "Manter links amplos por padrão sem revisão",
      "Rever sharing settings e preferir links mais restritivos quando adequado",
      "Tornar todos os sites públicos",
      "Remover owners de sites"
    ],
    answerIndex: 1,
    explanation: "Reduzir compartilhamento amplo e preferir configurações mais restritivas ajuda a minimizar oversharing. Tornar tudo público ou remover owners enfraquece a governança."
  },
  {
    question: "Garantir owners válidos em todos os sites ajuda porque:",
    options: [
      "Remove a necessidade de permissões",
      "Melhora accountability e governança do conteúdo",
      "Substitui labels",
      "Impede login"
    ],
    answerIndex: 1,
    explanation: "Ter owners válidos melhora responsabilidade sobre acesso, ciclo de vida e qualidade do conteúdo. Isso não elimina permissões nem substitui classificações."
  },
  {
    question: "Em relação ao Copilot, conteúdo desatualizado ou mal governado pode:",
    options: [
      "Melhorar sempre a qualidade da resposta",
      "Aumentar risco de respostas baseadas em dados inadequados",
      "Não ter nenhum impacto",
      "Desligar o tenant"
    ],
    answerIndex: 1,
    explanation: "Se os dados estiverem desatualizados, redundantes ou expostos indevidamente, isso pode afetar a utilidade e a segurança do uso do Copilot. O impacto não é inexistente."
  },

  {
    question: "O que são scheduled prompts no Microsoft 365 Copilot?",
    options: [
      "Emails recorrentes do Exchange",
      "Interações com Copilot agendadas para horários e frequências específicos",
      "Labels automáticas do Purview",
      "Regras de antivírus"
    ],
    answerIndex: 1,
    explanation: "Scheduled prompts automatizam interações do Copilot em horários definidos. Eles não são emails recorrentes, labels ou mecanismos de antivírus."
  },
  {
    question: "Qual condição administrativa pode desabilitar a disponibilidade de scheduled prompts para a organização?",
    options: [
      "Desabilitar optional connected experiences",
      "Apagar um canal do Teams",
      "Remover um grupo do Outlook",
      "Limitar tamanho de mailbox"
    ],
    answerIndex: 0,
    explanation: "Scheduled prompts dependem de optional connected experiences. Se esse recurso for desabilitado por política, a funcionalidade deixa de ficar disponível."
  },
  {
    question: "Quando usuários usam scheduled prompts pela primeira vez, o Power Platform:",
    options: [
      "Exige que o admin crie manualmente vários ambientes",
      "Cria automaticamente um ambiente Microsoft 365 por tenant para suportar a execução",
      "Cria um site clássico no SharePoint",
      "Desabilita DLP do tenant inteiro"
    ],
    answerIndex: 1,
    explanation: "O ambiente Microsoft 365 no Power Platform é criado automaticamente para suportar o runtime dos scheduled prompts. Isso não exige uma criação manual extensa e não desabilita DLP do tenant inteiro."
  },
  {
    question: "Qual ação faz parte do ciclo de vida de um agente no Microsoft 365 admin center?",
    options: [
      "Publicar, atribuir, implantar, remover ou bloquear",
      "Somente renomear usuário",
      "Apenas criar caixa postal",
      "Apenas instalar impressora"
    ],
    answerIndex: 0,
    explanation: "O ciclo de vida de agentes inclui ações administrativas como publicação, implantação, atribuição, remoção e bloqueio. As outras opções não representam lifecycle de agentes."
  },
  {
    question: "Onde fica o controle central para governança de agentes em muitos cenários do Microsoft 365 Copilot?",
    options: [
      "Copilot Control System no Microsoft 365 admin center",
      "Word desktop options",
      "Bloco de notas",
      "Windows Media Player"
    ],
    answerIndex: 0,
    explanation: "A governança administrativa de agentes converge para o Microsoft 365 admin center em cenários suportados. As outras opções não são superfícies de administração corporativa."
  },
  {
    question: "Qual opção descreve melhor um agente do Microsoft 365 Copilot?",
    options: [
      "Um wallpaper corporativo",
      "Uma extensão que combina instruções, conhecimento e habilidades para tarefas específicas",
      "Uma mailbox oculta",
      "Um site de comunicação"
    ],
    answerIndex: 1,
    explanation: "Agentes estendem a experiência do Copilot combinando instruções, grounding e capacidades voltadas a tarefas ou cenários específicos. Não são wallpapers, mailboxes ou sites."
  },
  {
    question: "Usuários podem instalar agentes da loja quando:",
    options: [
      "O admin permite e o agente está disponível para eles",
      "Qualquer agente sempre aparece para qualquer usuário",
      "Não existe governança",
      "O tenant não tem identidade"
    ],
    answerIndex: 0,
    explanation: "A disponibilidade de agentes depende de governança, políticas e distribuição. Nem todo agente fica automaticamente disponível para qualquer usuário."
  },
  {
    question: "Um objetivo de bloquear ou remover agentes não necessários é:",
    options: [
      "Aumentar oversharing",
      "Reduzir riscos e limitar exposição desnecessária",
      "Eliminar toda a colaboração",
      "Desabilitar o Entra"
    ],
    answerIndex: 1,
    explanation: "Bloquear ou remover agentes desnecessários ajuda a reduzir superfície de risco e a limitar exposição. Não serve para eliminar colaboração ou afetar o serviço de identidade."
  },
  {
    question: "Qual papel administrativo é citado na governança de scheduled prompts para inventário?",
    options: [
      "Power Platform Administrator",
      "SharePoint Visitor",
      "Exchange Viewer apenas",
      "Teams Guest"
    ],
    answerIndex: 0,
    explanation: "O inventário e determinadas operações administrativas de scheduled prompts usam permissões ligadas ao Power Platform Administrator. Perfis visitantes ou guest não são adequados."
  },
  {
    question: "No ambiente Microsoft 365 criado para scheduled prompts, por padrão os usuários:",
    options: [
      "Recebem automaticamente Environment Maker",
      "Não recebem Environment Maker por padrão",
      "Podem criar qualquer connector livremente",
      "Podem publicar bots arbitrariamente"
    ],
    answerIndex: 1,
    explanation: "Esse ambiente é criado com governança controlada. Usuários não recebem automaticamente permissões amplas como Environment Maker, e o uso é restrito ao runtime necessário."
  }
];


/* ============================
   ESTADO
============================ */
let mode = "study"; // "study" | "exam"
let currentIndex = 0;
let selectedIndex = null;
let selectedQuestionCount = 50;
let pointsPerQuestion = MAX_SCORE / 50;

// score = quantidade de acertos
let score = 0;

// timer
let examMinutes = 40;
let examSecondsTotal = examMinutes * 60;
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
   PREPARA QUESTÕES (embaralha, seleciona qtd e recalcula answerIndex se precisar)
============================ */
function buildWorkingQuestions() {
  let qList = [...QUESTIONS];

  if (SHUFFLE_QUESTIONS) qList = shuffleArray(qList);

  // Seleciona apenas a quantidade escolhida
  qList = qList.slice(0, selectedQuestionCount);

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
   CONFIGURAR DINÂMICO (qty, pontos, timer)
============================ */
function setupDynamic() {
  selectedQuestionCount = getSelectedQty();
  pointsPerQuestion = MAX_SCORE / selectedQuestionCount;
  examMinutes = Math.ceil(selectedQuestionCount * 40 / 50);
  examSecondsTotal = examMinutes * 60;
}

/* ============================
   START: Simulado (estudo)
============================ */
function startStudy() {
  mode = "study";
  setupDynamic();
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
  setupDynamic();
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

  if (isCorrect) score++;

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

  const total = workingQuestions.length;
  const correct = score;
  const scorePoints = Math.round(correct * pointsPerQuestion);
  const approved = scorePoints >= PASSING_SCORE;

  const neededCorrect = Math.ceil(PASSING_SCORE / pointsPerQuestion);
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
            <strong>Pontuação:</strong> ${scorePoints} / ${MAX_SCORE}<br>
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
        Você concluiu o modo <strong>Simulado</strong> com <strong>${total}</strong> questões.
        <br><br>
        <strong>Seu desempenho (referência):</strong><br>
        Acertos: <strong>${correct}</strong> de ${total}<br>
        Pontuação: <strong>${scorePoints}</strong> / ${MAX_SCORE}<br>
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
      <strong>Pontuação:</strong> ${scorePoints} / ${MAX_SCORE}<br>
      <strong>Corte:</strong> ${PASSING_SCORE} pontos (mínimo)<br>
      <strong>Percentual:</strong> ${percent}%
    </div>

    <div style="margin-top:12px; padding:12px; border-radius:14px; background:#f3f4f6; color:#111827;">
      <strong>Para passar:</strong> você precisa de pelo menos <strong>${neededCorrect}</strong> acertos de ${total}.
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
