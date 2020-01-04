<p align='center'>
<img alt="Gympoint" src="/Gympoint/frontend/src/assets/logo.png" width="200px" />
</p>

# Gympoint

Aplicação desenvolvida com a Stack NodeJs, ReactJs e React Native, baseada no aprendizado imersivo do Bootcamp Rocketseat. Foram utilizadas as seguintes ferramentas: 

- Express
- Sucrase + Nodemon;
- ESLint + Prettier;
- Sequelize (PostgreSQL);

# Descrição

Aplicação para gestão de academia, com a módulos de gerenciamento de matriculas, cadastros de alunos, de planos e interação com o aluno através de App mobile.

## App do Aluno

O aluno interage através da aplicação mobile, podendo realizar checkins, bem como pedidos de auxilio sobre treinos, dietas, mensalidades e etc.

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/Check-in.gif" width="250px"/>&nbsp;&nbsp;
  <img alt="HelpOrders" src="/Gympoint/assets/HelpOrders.gif" width="250px" />
</p>

## Gestão da Acadêmia

Na aplicação Web, os usuários administradores poderão visualizar as matriculas, assim como cadastrar, alterar e excluir os dados dos alunos e suas matriculas, além da gerenciamento dos planos que a acadêmia oferece.

### 1 - Gerenciamento de Alunos

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webStudentManagement.png" width="500px"/>&nbsp;&nbsp;
</p>

### 2 - Gerenciamento de Planos

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webPlansManagement.png"" width="500px"/>&nbsp;&nbsp;
</p>

### 3 - Gerenciamento de Matriculas

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webEnrollmentsManagement.png"" width="500px"/>&nbsp;&nbsp;
</p>

### 4 - Pedido de Auxílio

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webHelpOrders.png"" width="500px"/>&nbsp;&nbsp;
</p>
                                                                                     
### 5 - Respondendo Pedido de Auxílio

<p align='center'>
  <img alt="Check-in" src="/Gympoint/assets/webHelpOrderAnswer.png"" width="500px"/>&nbsp;&nbsp;
</p>


## API (Backend)

Toda a interação com o aplicação Web quanto com o mobile, é realizada através de API que faz a autenticação com JWT e entrega os dados em formato JSON para rendenrização nas plataformas que a solicitam.

### 1 - Arquivos para testes

Disponibilizado arquivos do aplicativo Insomnia e arquivo SQL do Postgres para realização de testes da API
Os arquivos estão dentro da pasta [assets](https://github.com/julianossantos/Bootcamp/tree/master/Gympoint/assets).
