# Vladtube

Este repositório contém uma aplicação React que exibe listas de vídeos organizados em playlists e favoritos. A aplicação permite filtrar os vídeos com base em um termo de busca fornecido pelo usuário.

## Visão Geral

A aplicação consiste em vários componentes React, estilizados com `styled-components`, e utiliza um arquivo de configuração JSON para carregar dados do usuário e vídeos.

## Estrutura do Projeto

- **`HomePage`**: Componente principal da página inicial.
- **`Menu`**: Componente que contém o campo de busca e opções de navegação.
- **`Header`**: Componente que exibe informações do usuário e um banner.
- **`Timeline`**: Componente que exibe playlists de vídeos filtrados pelo termo de busca.
- **`Favorites`**: Componente que exibe uma lista de vídeos favoritos.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio

3. Instale as dependências:
    ```bash
    npm install

## Uso

1. Inicie a aplicação:
    ```bash
    npm star

2. Abra seu navegador e vagegue para:
    ```bash
    http://localhost:3000

## Configuração

A aplicação utiliza um arquivo config.json para carregar dados do usuário e vídeos. Exemplo de config.json:

  ```json
            {
          "playlists": {
            "Playlist1": [
              {
                "title": "Video1",
                "url": "http://example.com/video1",
                "thumb": "http://example.com/thumb1.jpg"
              }
            ]
          },
          "favorites": {
            "Favorite1": [
              {
                "title": "Favorite Video1",
                "url": "http://example.com/fav1",
                "thumb": "http://example.com/fav1.jpg"
              }
            ]
          },
          "name": "User Name",
          "job": "User Job",
          "github": "githubUsername",
          "StyledBanner": "http://example.com/banner.jpg"
        }
