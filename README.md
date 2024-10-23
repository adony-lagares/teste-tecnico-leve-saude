# <strong>🚀 API de Agendamento - Teste Técnico Backend</strong>
<br>
<strong> Objetivo:</strong>
Desenvolver uma API usando Node.js, TypeScript, Serverless Framework, AWS Lambda, e Swagger UI.
<br>
<br>
A API deve possuir dois endpoints principais:

- Buscar agendas e horários dos médicos (GET /agendas).
- Marcar agendamento do paciente (POST /agendamento).

  
Além disso, a documentação da API deve ser acessível via Swagger UI.
<br>
<br>
🛠️ Tecnologias Utilizadas
Node.js (v14+)
TypeScript
Serverless Framework com serverless-offline
AWS Lambda
Express (para servir o Swagger UI separadamente)
Swagger UI e Swagger JSDoc
Postman (para testes de API)
<br>
<br>
📦 Instalação e Configuração
Pré-requisitos
Node.js e npm instalados.
Serverless Framework instalado globalmente:
npm install -g serverless
<br>
<br>
<strong>Passo 1:</strong> Clonar o Repositório
Clone o repositório contendo o projeto:
git clone <https://github.com/adony-lagares/teste-tecnico-leve-saude>
cd <diretorio>
<br>
<br>
<strong>Passo 2:</strong> Instalar Dependências
Instale as dependências necessárias:
npm install
<br>
<br>
<strong>🚨 Endpoints da API</strong>
- 1. Buscar Agendas e Horários dos Médicos (GET /agendas)
Este endpoint retorna uma lista de médicos e seus respectivos horários disponíveis.

Rota:
<br>
GET /dev/agendas
<br>
<br>
Resposta de Exemplo:


{
  "medicos": [
    {
      "id": 1,
      "nome": "Dr. João Silva",
      "especialidade": "Cardiologista",
      "horarios_disponiveis": [
        "2024-10-05 09:00",
        "2024-10-05 10:00",
        "2024-10-05 11:00"
      ]
    },
    {
      "id": 2,
      "nome": "Dra. Maria Souza",
      "especialidade": "Dermatologista",
      "horarios_disponiveis": [
        "2024-10-06 14:00",
        "2024-10-06 15:00"
      ]
    }
  ]
}
<br>
<br>
<br>
<br>
- 2. Marcar Agendamento do Paciente (POST /agendamento)
Este endpoint permite que um paciente marque um horário de consulta com um médico.

Rota:

POST /dev/agendamento
Payload de Exemplo:

{
  "medico_id": 1,
  "paciente_nome": "Carlos Almeida",
  "data_horario": "2024-10-05 09:00"
}
<br>
<br>

Resposta de Exemplo:

{
  "mensagem": "Agendamento realizado com sucesso",
  "agendamento": {
    "medico": "Dr. João Silva",
    "paciente": "Carlos Almeida",
    "data_horario": "2024-10-05 09:00"
  }
}

<br>
<br>
<br>
<br>
📄 Documentação da API via Swagger
A documentação da API pode ser acessada via Swagger UI na rota /docs.

URL do Swagger UI:

http://localhost:3001/docs

Passo a Passo para Iniciar o Swagger:
Para rodar o Swagger UI, execute o comando:
npm run start:swagger
Acesse a interface do Swagger em http://localhost:3001/docs.

<br>
<br>

🚀 Como Rodar Localmente
1. Compilar o Projeto TypeScript
Para rodar o projeto, primeiro compile o código TypeScript:

npx tsc
<br>
<br>

2. Rodar o Serverless Offline
Para rodar os endpoints localmente usando o Serverless, use o seguinte comando:

npm run start

<br>
<br>
3. Rodar o Swagger UI Separadamente
Para rodar a documentação da API usando o Swagger, execute:

npm run start:swagger
🌐 URLs dos Endpoints
Swagger UI: http://localhost:3001/docs
API Endpoints:
GET: http://localhost:3000/dev/agendas
POST: http://localhost:3000/dev/agendamento
<br>
<br>
<br>
<br>
🔧 Configuração do Serverless


O arquivo serverless.yml define os endpoints e funções Lambda para o Serverless. Aqui está um exemplo:

service: agenda-service

provider:
  name: aws
  runtime: nodejs14.x
  region: us-east-1

plugins:
  - serverless-offline

functions:
  buscarAgendas:
    handler: dist/src/agenda/controller.handler
    events:
      - http:
          path: agendas
          method: get

  marcarAgendamento:
    handler: dist/src/agendamento/controller.handler
    events:
      - http:
          path: agendamento
          method: post

<br>
<br>
<br>
<br>
📝 Estrutura do Projeto

A estrutura do projeto foi organizada da seguinte maneira:

/src
  /agenda
    controller.ts        # Lógica do endpoint GET para buscar as agendas
  /agendamento
    controller.ts        # Lógica do endpoint POST para marcar agendamentos
  /swagger
    swagger.ts           # Configuração do Swagger JSDoc
  app.ts                 # Servir Swagger UI via Express
serverless.yml           # Configuração dos endpoints no Serverless
package.json             # Scripts e dependências
tsconfig.json            # Configuração do TypeScript


<br>
<br>

🧪 Testando com Postman
Você pode testar os endpoints usando Postman:

Para o endpoint GET /dev/agendas, faça uma requisição GET.

Para o endpoint POST /dev/agendamento, envie um JSON com os dados do agendamento:

{
  "medico_id": 1,
  "paciente_nome": "Carlos Almeida",
  "data_horario": "2024-10-05 09:00"
}

<br>
<br>
<br>
<br>
📚 Conclusão
Este projeto implementa uma API de agendamentos de consultas com dois endpoints principais, além de oferecer documentação interativa via Swagger UI. O uso de Serverless Framework e Express permite que a API e a documentação sejam servidas de forma eficiente e modular.

Se precisar de mais informações ou ajuda adicional, fique à vontade para entrar em contato.
