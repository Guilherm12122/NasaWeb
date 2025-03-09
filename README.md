# 🚀 NASA Data Explorer

**NASA Data Explorer** é um sistema que consome APIs públicas da NASA para fornecer imagens de Marte e de satélites em tempo real. O backend armazena os dados em um banco **MySQL**, e uma aplicação **Spring Boot** os disponibiliza para um frontend em **Angular**, permitindo que os usuários façam consultas de forma online.

---

## 🌍 English Summary

**NASA Data Explorer** is a system that fetches data from NASA's public APIs to provide real-time images of Mars and satellites. The backend stores data in a **MySQL** database, while a **Spring Boot** application serves it to an **Angular** frontend, allowing users to explore the images online.

---

## 📌 Tecnologias Utilizadas

### 🖥️ **Frontend**

- Angular ⚡
- TypeScript 📜
- Bootstrap 🎨 (para um design responsivo)
- HTTPClient 📡 (para consumir a API)

### 🔍 **Backend**

- Java ☕
- Spring Boot 🚀
- MySQL 🛢️ (para armazenamento dos dados)
- JPA/Hibernate 🔗 (para comunicação com o banco de dados)

### 🌌 **APIs da NASA Utilizadas**

- **Mars Rover Photos API** 📷 (Imagens capturadas pelos rovers de Marte)
- **NASA Earth API** 🛰️ (Imagens de satélites da Terra)

### 🏗️ **Infraestrutura**

- Docker 🐳 (para facilitar a implantação)
- Python 🐍 (para consumir as APIs e inserir dados no banco)

---

## 📜 Como Rodar o Projeto Localmente

### 🚀 **1. Clone o Repositório**

```bash
  git clone https://github.com/Guilherm12122/NasaWeb.git
  cd NasaWeb
```

### 🔧 **2. Configurar o Banco de Dados (MySQL)**

1. Crie um banco de dados chamado `nasa_db`
2. Atualize as credenciais no `application.properties` do backend
3. Execute as migrações do banco

### 🛰️ **3. Rodando o Coletor de Dados (Python)**

1. Crie um ambiente virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate  # No Windows use: venv\Scripts\activate
   ```
2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
3. Execute o script de coleta de dados:
   ```bash
   python fetch_nasa_data.py
   ```

### 🔥 **4. Rodando o Backend (Spring Boot)**

1. Acesse a pasta do backend:
   ```bash
   cd backend
   ```
2. Compile e execute o projeto:
   ```bash
   mvn spring-boot:run
   ```
   O backend estará disponível em `http://localhost:8080`

### 🎨 **5. Rodando o Frontend (Angular)**

1. Acesse a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   ng serve --open
   ```
   O frontend estará disponível em `http://localhost:4200`

---

## 📡 Endpoints da API

| Método | Endpoint   | Descrição                                    |
| ------ | ---------- | -------------------------------------------- |
| GET    | `/v1/mars` | Retorna imagens recentes dos rovers em Marte |
| GET    | `/v1/apod` | Retorna imagens de satélites da Terra        |
| GET    | `/docs`    | Documentação interativa com Swagger UI       |

---

## 🚀 Próximos Passos

- [ ] Melhorar a interface do usuário no Angular
- [ ] Adicionar filtros avançados para busca de imagens

---

## 🎯 Contribuição

Quer ajudar a melhorar o projeto? Fique à vontade para abrir um **Pull Request** ou uma **Issue**! 😊

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usá-lo e modificá-lo! 🎉

---

📌 **Desenvolvido por [Guilherme de Oliveira](https://github.com/Guilherm12122) ✨**
