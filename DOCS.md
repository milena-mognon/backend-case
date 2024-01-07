# Case para Desenvolvedor Backend: API de Gerenciamento de Documentos Jurídicos

Nesse projeto o arquivo .env foi enviado ao github com senhas e chaves de autenticação para facilitar a analise do case. Em projetos reais esses dados não são enviados au GitHub.

## 🛠️ Ferramentas e Tecnologias Utilizadas

- JavaScript
- NodeJS
- Mongoose
- Docker
- Jest
- Github Actions
- JsonWebToken

## 🚀 Como executar

### Banco de Dados - MongoDB

O banco de dados foi criado utilizado Docker. Para executar e necessário ter Docker e Docker Compose instalado na máquina.

As senhas foram enviadas no arquivo .env presente na raiz do projeto.

Para rodar o banco de dados, execute o comando `docker compose up -d --build` na raiz do projeto.

### Testes

Os testes do sistema foram desenvolvidos utilizando Jest. Para executar os teste utilize o seguinte comando no terminal `yarn test` ou `npm run test`

Também é possível verificar se os testes passaram no GitHub. Em todo push para a branch main uma action é executada verificando se os testes estão passando.

### Autenticação

A autenticação é necessária para todos os endpoints da API, sendo realizada por meio de JWT (JSON Web Token) e utilizando a biblioteca jsonwebtoken. O método escolhido para autenticação emprega o algoritmo RS256, onde a chave privada é usada para criar o token e a chave pública é empregada para validar o login. Ambas as chaves foram incluídas no arquivo .env, codificadas em base64.

Apenas o endpoint de criação de usuário e login não exigem autenticação.
