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
