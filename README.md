# My Wallet
A aplicação serve para gerenciar o back-end de um site que organiza as transações financeiras de um usuário através de requisições HTTP(s) seguindo a convenção REST.

## Deploy do Back-end
https://mywallet-api-vvcu.onrender.com

## Deploy do Front-end
https://mywallet-lahr-victor.vercel.app/

## Como a aplicação funciona?
Este projeto é uma API REST que possui três entidades: `session`, `transaction` e `user`.

A aplicação conta com as seguintes rotas:

### POST `/sign-up`
Cria um novo usuário.

- Entrada:
```json
{
	"name": "John Doe",
	"email": "john.doe@gmail.com",
	"password": "123456"
}
```

### POST `/sign-in`
Valida os dados de acesso do usuário e cria uma nova sessão.

- Entrada:
```json
{
	"email": "john.doe@gmail.com",
	"password": "123456"
}
```
- Saída:
```json
{
	"token": "bc453a5c-1d71-4f66-a856-314889bc72f3",
	"user": "John Doe"
}
```

### POST `/transactions`
Cria uma nova transação financeira do usuário.

- Entrada (headers):
```javascript
{
	Authorization: Bearer bc453a5c-1d71-4f66-a856-314889bc72f3
}
```
- Entrada (body):
```json
{
	"description": "salary",
	"value": 3500.60,
	"type": "inflow"
}
```

### GET `/transactions`
Lista todas as transações financeiras do usuário.
- Entrada (headers):
```javascript
{
	Authorization: Bearer bc453a5c-1d71-4f66-a856-314889bc72f3
}
```
- Saída:
```json
[
	{
		"_id": "657734026de578281f723452",
		"value": 100.5,
		"description": "cable TV",
		"type": "outflow",
		"date": "2023-12-11T16:08:34.145Z",
		"userId": "65772c8a6de578281f72344d"
  	},
  	{
		"_id": "657733a26de578281f723450",
		"value": 3500.6,
		"description": "salary",
		"type": "inflow",
		"date": "2023-12-11T16:06:58.615Z",
		"userId": "65772c8a6de578281f72344d"
  	}
]
```

## Tecnologias
O projeto utiliza as seguintes tecnologias: 

- Node (versão 20.9.0);
- Express;
- JavaScript;
- MongoDB (versão 6.0.3);
- Joi.

## Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

- Clonar o repositório;
- Instalar ou atualizar o MongoDB (https://www.mongodb.com/docs/manual/installation/); 
- Baixar as dependências necessárias com o comando: `npm install`;
- Criar o arquivo `.env` com base no `.env-example`;
- Este arquivo `.env` é composto pelas seguintes propriedades:
```
	# server
		PORT=5000

	# local development database
		DATABASE_URL=mongodb://localhost:27017/mywallet-db

```
- A propriedade `PORT` é usada para declarar a porta onde o servidor rodará;
- A propriedade `DATABASE_URL` é usada para realizar a conexão com o banco de dados;
- Para rodar o projeto em desenvolvimento, execute o comando `npm run dev`;
- Testes manuais podem ser feitos através do Thunder Client. Na raiz do projeto há uma coleção chamada `thunder-collection.json` que pode ser carregada na ferramenta.