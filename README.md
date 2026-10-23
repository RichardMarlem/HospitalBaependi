# PROJETO # 

Criar um formulário integrado para registrar os serviços prestados pela equipe de limpeza do hospital Baependi Conêgo.

Utilizei os conhecimentos adquiridos no curso de HTML, CSS e Javascript do Curso em Video do professor Gustavo Guanabara.

# SOLICITAÇÃO #

Fui solicitado a criar um projeto Web em que o usuário pudesse registrar os serviços executados em relação a limpeza dos setores do hospital em que trabalham, atualmente o processo é feito de forma manual, eles possuem uma 
ficha impressa e o colaborador preenche a mão e depois devolve ao responsável do DP que escaneia esse documento físico e cadastra no sistema GED da Arquivar.  

O solicitante queria automatizar o processo e paralisar o uso de papel e passar a criar um documento no tablet e depois alguém cadastrar esse documento no ArqGED, então pensamos em criar um formulário web em que o usuário
acesse o link no tablet disponibilizado pelo hospital e posso criar o registro de todos os serviços que ele executou naquela data e setor e esse registro ser cadastrado via API e assim diminuir os processos para a equipe.

No processo atual eles possuíam várias páginas para poder imprimir e identificar o setor e os serviços que devem ser prestados neles, assim geram muitos papéis e tem um processo mais demorado.

# ENTREGA #

Desenvolvi um formulário web onde o colaborador pode acessar com o tablet disponibilizado pelo hospital ou por seu próprio celular para criar o registro do seus serviços executados. Pensando na solicitação e na usabilidade
do colaborador, criei um formulário condicionado que auxilia e poupa tempo do colaborador para encontrar o formulário correto a ser preenchido, no sistema criado o colaborador só precisar entrar no departamento correto e
selecionar qual o setor ele irá executar o serviço, ao selecionar esse setor o formulário é gerado de forma dinâmica para ser preenchido, após o preenchimento dos campos obrigatórios o colaborador só precisa clicar em um
botão e o registro é criado de forma automatizada no ArqGED.

Após o colaborador criar o registro no ArqGED o responsável pelo DP/RH consegue acompanhar os registros criados para acompanhar o desempenho da sua equipe, criando possibilidades de novos processos de controle, ex: Dashboard
no PowerBI, planilha do execel e etc. 

Com esse novo sistema o preenchimento das tarefas fica bem mais rapido e pratico, trazendo mais ganho de tempo para a equipe.

# TECNOLOGIA UTILIZADA #

Utilizei HTML5, CSS3, JAVASCRIPT e para os testes de integração utilizei o Power Automate para gerar o webhook que faria a chamada para a API da Arquivar. 

No style do sistema segui o padrão da identidade visual do Hospital, trouxe as cores e fonte para que o layout seja bem parecido ao que já utilizam atualmente, trouxe um sistema responsivo que atende muito bem ao usuário tan-
to no Tablet que será utilizado mas também no Desktop e Celular

A parte do Javascript foi a parte mais importante, consegui colocar em prática muito do que aprendi nas aulas do Gustavo Guanabara, exemplos; recuperar o
valor doss campos e como usar de forma dinâmica o HTML com o Javascript, como criar funções e como essas funções são uteis no sistema, mas o mais importante foi a parte do envio dos dados utilizando Fetch(), um ponto muito complexo
e que consegui executar demonstrando que o meu entendimento sobre está avançando.



