# Case para Desenvolvedor Backend: API de Gerenciamento de Documentos Jurídicos

## 🛠️ Ferramentas e Tecnologias Utilizadas

- JavaScript
- NodeJS
- Mongoose
- Docker
- Jest

## 🚀 Como executar

### Banco de Dados - MongoDB

O banco de dados foi criado utilizado Docker. Para executar e necessário ter Docker e Docker Compose instalado na máquina.

As senhas foram enviadas no arquivo .env presente na raiz do projeto.

Para rodar o banco de dados, execute o comando `docker compose up -d --build` na raiz do projeto.

### Testes

Os testes do sistema foram desenvolvidos utilizando Jest. Para executar os teste utilize o seguinte comando no terminal `yarn test` ou `npm run test`
