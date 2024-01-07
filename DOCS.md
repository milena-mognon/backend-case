# Case para Desenvolvedor Backend: API de Gerenciamento de Documentos Jurídicos

Nesse projeto o arquivo .env foi enviado ao github com senhas e chaves de autenticação para facilitar a analise do case. Em projetos reais esses dados não são enviados au GitHub.

## 📒 Observações sobre o desenvolvimento

### Organização do projeto

Para organizar o projeto foi seguido alguns conceitos de clean architecture, separando o projeto em 3 camadas principais: application, domain e infrastructure.

### Teste

Para algumas funcionalidades foram desenvolvidos testes de unidade, porém não foram tratados todos os cenários nos teste. Para melhorar o projeto podem ser incluídos novos e mais completos cenários de testes.

### Autenticação

A autenticação é necessária para todos os endpoints da API, sendo realizada por meio de JWT (JSON Web Token) e utilizando a biblioteca jsonwebtoken. O método escolhido para autenticação emprega o algoritmo RS256, onde a chave privada é usada para criar o token e a chave pública é empregada para validar o login. Ambas as chaves foram incluídas no arquivo .env, codificadas em base64.

Apenas o endpoint de criação de usuário e login não exigem autenticação.

### Upload de Arquivos

Para fazer o upload foi utilizado a biblioteca multer. É possível enviar qualquer tipo de arquivo (PDF, imagens, txt, doc, etc...). Inicialmente o multer armazena os arquivos na pasta "tmp" e depois, usando a solução de armazenamento em disco (DiskStorage), remove esse arquivo da pasta "tmp" e o salva na pasta "uploads".

Essa solução é pensada para ser facilmente modificada com o tempo.

Na api, a rota que envia os arquivos deve usar o formato multpart/formdata. O nome do campo para envio de arquivos é "files". Não foi incluído na configuração um limite de quantidade ou tamanho de arquivos.
Nesse projeto o arquivo .env foi enviado ao github com senhas e chaves de autenticação para facilitar a analise do case. Em projetos reais esses dados não são enviados au GitHub.

### Documentação API

Não foi possível desenvolver a documentação usando Swagger no período de realização do case. Porém, para testar a API foi criado uma documentação simples usando Insomnia. O arquivo da documentação está na raiz do projeto.

## 🛠️ Ferramentas e Tecnologias Utilizadas

- JavaScript
- NodeJS
- Mongoose
- Docker
- Jest
- Github Actions
- JsonWebToken

## 🚀 Como executar o projeto

Para executar o projeto foi criado um arquivo de configuração docker (docker-compose) que cria um container para o banco de dados (mongo) e para a api (nodejs). Para executar e necessário ter Docker e Docker Compose instalado na máquina.

As senhas foram enviadas no arquivo .env presente na raiz do projeto. Não é necessário modificar nada para executar o projeto.

Execute o comando `docker compose up -d --build` na raiz do projeto.

### Testes

Os testes do sistema foram desenvolvidos utilizando Jest. Para executar os teste utilize o seguinte comando no terminal `yarn test` ou `npm run test`. Para executar os testes é necessário ter o Node e um gerenciador de pacotes (yarn ou npm).

Também é possível verificar se os testes passaram no GitHub. Em todo push para a branch main uma action é executada verificando se os testes estão passando.
