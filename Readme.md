# Desafio Node/Nginx Full Cycle

O desafio pede para exibir a mensagem Full Cycle Rocks e logo em seguida uma lista dos nomes cadastros no sistema.\

É necessário que essa renderização aconteça a partir de uma aplicação node com express e que tenha um nginx sendo utilizado como proxy reverso.

## Iniciar a aplicação

```
docker compose up -d --build
```

É necessário rodar o build pois você não tem as imagens protas no seu ambiente local.

## Observações

No primeiro acesso é normal ter um delay para aplicação subir, pois o banco de dados esta rodando o init.db (Está criando a tabela pessoas) e gerando os arquivos da pasta mysql. Portanto aguarde alguns segundos para a aplicação de fato subir.
