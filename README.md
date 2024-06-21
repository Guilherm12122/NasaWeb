# AstroWeb

## O que é o projeto AstroWeb ?
**O projeto AstroWeb é uma aplicação que consome os dados de APIs disponibilizados pela NASA (Agência Espacial Americana), e fornece esses dados de forma renderizada no navegador, através de uma aplicação angular**

## Propósito
**O propósito é de que o usuário possa visualizar os dados obtidos pelos equipamentos da Nasa, isso inclui robôs em Marte e fotos por satélites, para obtêr esses dados foram utilizados as seguintes APIs:**

**Link:** https://api.nasa.gov/
- API Mars Rover: disponibiliza dados coletados pelos robôs em Marte.
- API Apod: disponibiliza dados do universo como um todo.


## Desenho de Arquitetura
![alt text](https://github.com/Guilherm12122/nasa-web-api/blob/main/assets/arquitetura_nasa_web_local.jpg)
**Nasa Espaço:** API que disponibiliza os dados do universo como um todo.
**Nasa Marte:** API que disponibiliza dados de Marte coletados pelos robôs.
**Aplicação Python:** responsável por realizar as requisições na APIs e realizar o tratamento e limpeza dos dados, e armazenar em um banco de dados SQL.
**Banco de Dados:** armazena os dados de marte e dos espaço em duas tabelas separadas.
**Java Spring Boot API:** consome os dados do banco de dados, realiza um mapeamento objeto relacional e disponibliza através de endpoints.
**Aplicação Angular:** realiza requisições na API Java e constrói o front end do sistema.
