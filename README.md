Projeto: Lojinha do Morro

Este é o repositório de uma aplicação front-end para uma tela inicial de e-commerce, desenvolvida como atividade avaliativa. A aplicação consome dados de produtos da API pública Fake Store API e os exibe em uma interface limpa e responsiva.

Funcionalidades:

Listagem de Produtos: Exibe produtos obtidos de uma API externa em uma grade.

Layout Responsivo: A interface se adapta a diferentes tamanhos de tela (desktop, tablets e celulares) utilizando CSS Grid e Media Queries.

Busca em Tempo Real: Um campo de busca permite filtrar os produtos por nome dinamicamente.

Componentização: A arquitetura do projeto é baseada em componentes reutilizáveis (Lista de Produtos, Card de Produto).

Feedback ao Usuário: Exibe mensagens de "Carregando..." durante a busca de dados e mensagens de erro caso a API falhe.

Estilização: O estilo é encapsulado por componente, evitando conflitos de classes e mantendo o CSS organizado.

Tecnologias Utilizadas
Next.js - Framework React para produção.
React - Biblioteca para construir interfaces de usuário.
CSS Modules - Para estilização local e encapsulada.
Node.js - Ambiente de execução JavaScript.

Pré-requisitos:
Antes de começar, você vai precisar ter instalado em sua máquina:

Node.js (versão 18.x ou superior)
NPM (Gerenciador de pacotes)

Rodando a Aplicação:
Siga os passos abaixo para executar o projeto localmente:

Pelo GitBash:

<<<<<<< HEAD
cd ./seudiretorio/lojinha-do-morro
=======
cd lojinha-do-morro
>>>>>>> 842b6baf93f46b4005ab02b3a37055462dff5b7a

1. Instale as dependências

Usando NPM:
npm install

2. Execute a aplicação em modo de desenvolvimento

Usando NPM:
npm run dev

3. Abra no navegador

A aplicação estará disponível em http://localhost:3000.
