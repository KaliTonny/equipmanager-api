# EquipManager API

## Objetivo do Projeto

O **EquipManager API** é uma API REST desenvolvida para gerenciamento de equipamentos de uma empresa. O sistema tem como objetivo facilitar o controle de equipamentos cadastrados, permitindo registrar informações como nome, categoria, patrimônio, localização e status.

A aplicação foi desenvolvida utilizando Node.js, Express e MySQL, seguindo uma organização baseada em Controllers e Routes.

---

## Descrição da Solução

O sistema permite que uma empresa tenha maior controle sobre seus equipamentos, substituindo controles manuais por uma solução digital.

Através da API, é possível realizar operações de cadastro, consulta, atualização e exclusão de equipamentos, garantindo uma melhor organização das informações.

---

## Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* MySQL2
* JavaScript
* CORS
* Postman
* GitHub

---

## Estrutura do Projeto

```text
equipmanager-api/

│
├── controllers/
│   └── equipamentoController.js
│
├── routes/
│   └── equipamentoRoutes.js
│
├── database/
│   └── db.js
│
├── banco.sql
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Instalação do Projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd equipmanager-api
```

Instale as dependências:

```bash
npm install
```

---

## Configuração do Banco de Dados

O projeto utiliza MySQL como banco de dados.

Execute o arquivo:

```text
banco.sql
```

para criar o banco e a tabela de equipamentos.

A conexão com o banco está configurada no arquivo:

```text
database/db.js
```

---

## Executando a Aplicação

Para iniciar a API:

```bash
node server.js
```

Ou utilizando Nodemon:

```bash
npm run dev
```

A aplicação será executada em:

```text
http://localhost:3000
```

---

# Endpoints da API

## Listar Equipamentos

**GET**

```text
/equipamentos
```

Retorna todos os equipamentos cadastrados.

---

## Cadastrar Equipamento

**POST**

```text
/equipamentos
```

Exemplo de envio:

```json
{
    "nome": "Notebook Dell",
    "categoria": "Informática",
    "patrimonio": "NT001",
    "localizacao": "Sala TI"
}
```

---

## Atualizar Equipamento

**PUT**

```text
/equipamentos/:id
```

Exemplo:

```text
/equipamentos/1
```

Atualiza as informações de um equipamento existente.

---

## Excluir Equipamento

**DELETE**

```text
/equipamentos/:id
```

Exemplo:

```text
/equipamentos/1
```

Remove um equipamento cadastrado.

---

# Testes da API

Os testes da API foram realizados utilizando o **Postman**, simulando situações de uso normal e situações de erro.

Foram verificadas as requisições, os dados enviados no Body, as respostas retornadas pela API e os códigos de status HTTP.

## Testes de Sucesso

### Cadastro

Foi realizado um teste utilizando o método `POST` para cadastrar um novo equipamento.

```text
POST /equipamentos
```

Os dados foram enviados no formato JSON e foi verificado se o equipamento foi cadastrado corretamente no banco de dados.

### Consulta

Foi utilizado o método `GET` para consultar os equipamentos cadastrados.

```text
GET /equipamentos
```

Foi verificado se os registros foram retornados corretamente pela API.

### Atualização

Foi utilizado o método `PUT` para alterar as informações de um equipamento existente.

```text
PUT /equipamentos/:id
```

Após a atualização, foi realizada uma nova consulta para confirmar a alteração.

### Exclusão

Foi utilizado o método `DELETE` para remover um equipamento.

```text
DELETE /equipamentos/:id
```

Após a exclusão, foi realizada uma consulta para verificar se o registro havia sido removido.

---

# Testes de Dados Inválidos

Também foram realizados testes para verificar como a API se comporta diante de dados incorretos ou situações de erro.

## Campos obrigatórios vazios

Foi realizado um cadastro enviando campos obrigatórios vazios.

Exemplo:

```json
{
    "nome": "",
    "categoria": "",
    "patrimonio": "",
    "localizacao": ""
}
```

O comportamento apresentado pela aplicação foi registrado nas evidências do Postman.

## Patrimônio duplicado

Foi realizado um cadastro utilizando um número de patrimônio que já estava registrado no banco.

Exemplo:

```json
{
    "nome": "Notebook Dell",
    "categoria": "Informática",
    "patrimonio": "NT001",
    "localizacao": "Sala TI"
}
```

A aplicação possui uma regra de negócio que impede o cadastro de equipamentos com patrimônio duplicado.

Essa validação evita registros repetidos e garante maior confiabilidade dos dados.

## ID inexistente

Foi realizado um teste utilizando um identificador que não existe no banco de dados.

Exemplo:

```text
PUT /equipamentos/9999
```

Também foi realizado teste de exclusão utilizando um ID inexistente:

```text
DELETE /equipamentos/9999
```

O comportamento e o código de status retornado pela API foram registrados nas evidências.

## Dados inválidos

Também foram realizados testes enviando tipos de dados incompatíveis com os campos esperados pela API, com o objetivo de verificar o tratamento de erros da aplicação.

Exemplo:

```json
{
    "nome": 123,
    "categoria": true,
    "patrimonio": [],
    "localizacao": 999
}
```

O comportamento apresentado pela aplicação foi registrado durante os testes.

---

# Resumo dos Resultados

Os testes foram realizados utilizando o Postman e tiveram como objetivo verificar o funcionamento das principais operações da API.

Foram testadas as operações de:

* Cadastro de equipamentos;
* Consulta de equipamentos;
* Atualização de equipamentos;
* Exclusão de equipamentos;
* Cadastro com campos inválidos;
* Cadastro com patrimônio duplicado;
* Operações utilizando ID inexistente;
* Envio de dados em formatos inválidos.

As requisições, respostas e códigos de status HTTP foram registrados nas evidências dos testes.

---

# Evidências dos Testes

As capturas de tela dos testes realizados devem apresentar:

* Método HTTP utilizado;
* URL da requisição;
* Body enviado, quando necessário;
* Resposta retornada pela API;
* Código de status HTTP.

As evidências estão organizadas no arquivo:

```text
postman/evidencias.pdf
```

A coleção utilizada para realizar os testes está disponível em:

```text
postman/collection.json
```

---

# Regra de Negócio

O sistema possui uma validação para impedir o cadastro de equipamentos com o mesmo número de patrimônio.

Essa regra evita duplicidade de registros e garante maior organização e confiabilidade dos dados armazenados.

Exemplo:

Caso já exista um equipamento com patrimônio:

```text
NT001
```

um novo cadastro utilizando o mesmo patrimônio será bloqueado.

---

# Modelo de Dados

Tabela: **equipamentos**

| Campo       | Descrição                     |
| ----------- | ----------------------------- |
| id          | Identificador único           |
| nome        | Nome do equipamento           |
| categoria   | Categoria do equipamento      |
| patrimonio  | Código de patrimônio          |
| localizacao | Local onde está instalado     |
| status      | Situação atual do equipamento |

---

# Integrantes da Equipe

* Etony Guedes
* Geovanna Almeida

---

# Instituição

**SENAI Candeias**

# Professor Orientador

**Adalberto Santana**
