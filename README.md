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

```
banco.sql
```

para criar o banco e a tabela de equipamentos.

A conexão com o banco está configurada no arquivo:

```
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

```
http://localhost:3000
```

---

# Endpoints da API

## Listar Equipamentos

**GET**

```
/equipamentos
```

Retorna todos os equipamentos cadastrados.

---

## Cadastrar Equipamento

**POST**

```
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

```
/equipamentos/:id
```

Exemplo:

```
/equipamentos/1
```

Atualiza as informações de um equipamento existente.

---

## Excluir Equipamento

**DELETE**

```
/equipamentos/:id
```

Exemplo:

```
/equipamentos/1
```

Remove um equipamento cadastrado.

---

# Regra de Negócio

O sistema possui uma validação para impedir o cadastro de equipamentos com o mesmo número de patrimônio.

Essa regra evita duplicidade de registros e garante maior organização e confiabilidade dos dados armazenados.

Exemplo:

Caso já exista um equipamento com patrimônio:

```
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
