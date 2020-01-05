<p align='center'>
<img alt="Gympoint" src="/Gympoint/frontend/src/assets/logo.png" width="200px" />
</p>

# Gympoint

Aplicação desenvolvida com a Stack NodeJs, ReactJs e React Native, baseada no aprendizado imersivo do Bootcamp Gostack da Rocketseat. 

Foram utilizadas diversas bibliotecas para construção da aplicação, dentre elas estão: 

- Express
- Sucrase + Nodemon;
- ESLint + Prettier;
- Sequelize (PostgreSQL);
- Yup;
- Redux;
- DateFns;
- Flashmessage;
- MaterialIcons;

# Descrição

Aplicação para gestão de academia, com a módulos de gerenciamento de matriculas, cadastros de alunos, de planos e interação com o aluno através de App mobile.

## App do Aluno

O aluno interage através da aplicação mobile, podendo realizar checkins, bem como pedidos de auxilio sobre treinos, dietas, mensalidades e etc.

Na tela de login, para efeitos didaticos, pasta digitar o id da matricula do aluno, por exemplo: 1.

<Strong><u>Observação:</u></strong><i> o app foi desenvolvido na plataforma do IOS e não foi testado no Android.</i>

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/Check-in.gif" width="250px"/>&nbsp;&nbsp;
  <img alt="HelpOrders" src="/Gympoint/assets/HelpOrders.gif" width="250px" />
</p>

## Gestão da Acadêmia (Front-end)

Na aplicação Web, os usuários administradores poderão visualizar as matriculas, assim como cadastrar, alterar e excluir os dados dos alunos e suas matriculas, além da gerenciamento dos planos que a acadêmia oferece.

Na tela de login, como somente usuários administradores podem acessar o sistema, utilize o email "admin@gympoint.com.br" e senha "123456" para efeito de teste.

### 1 - Gerenciamento de Alunos

Nesse módulo o administrador visualiza os dados dos alunos cadastrados no sistema, além das funcionalidades de cadastrar, alterar e excluir alunos. Também possui um filtro para localização de alunos. A paginação exibe 10 alunos por tela.

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webStudentManagement.png" width="500px"/>&nbsp;&nbsp;
</p>

### 2 - Gerenciamento de Planos

Nesse módulo o administrador visualiza os planos para matriculas dos alunos no sistema, além das funcionalidades de cadastrar, alterar e excluir planos.

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webPlansManagement.png"" width="500px"/>&nbsp;&nbsp;
</p>

### 3 - Gerenciamento de Matriculas

Nesse módulo o administrador visualiza os alunos matrículados, além das funcionalidades de cadastrar, alterar e excluir matrículas. Quando uma matrícula esta ativa, o icone fica verde, informando que o plano escolhido ainda esta ativo para aquela matrícula.

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webEnrollmentsManagement.png"" width="500px"/>&nbsp;&nbsp;
</p>

### 4 - Pedido de Auxílio

Nesse módulo o administrador visualiza as solicitações de auxilio enviada pelos alunos (enviada através do App mobile). Serão exibidas todas as solicitações aguardando resposta.

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webHelpOrders.png"" width="500px"/>&nbsp;&nbsp;
</p>
                                                                                     
#### 4.1 - Respondendo Pedido de Auxílio

Para visualizar uma solicitação de auxilio, após clicar no botão de "Responder", a mensagem será exibida, bem como o campo para envio da resposta ao aluno, que visualizará no App. 

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webHelpOrderAnswer.png"" width="500px"/>&nbsp;&nbsp;
</p>


## API (Back-end)

Toda a interação com o aplicação Web quanto com o mobile, é realizada através de API que faz a autenticação com JWT e entrega os dados em formato JSON para renderização nas plataformas Web e Mobile.

### 1 - Arquivos para testes

Disponibilizado arquivos do aplicativo Insomnia e arquivo SQL do Postgres para realização de testes da API
Os arquivos estão dentro da pasta [assets](https://github.com/julianossantos/Bootcamp/tree/master/Gympoint/assets).
