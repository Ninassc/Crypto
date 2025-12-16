# Crypto Tracker (React)

Um projeto em **React** que consome uma API de criptomoedas (CoinGecko) e exibe uma lista de moedas em **cards**, com:

- Nome, símbolo e rank.
- Preço atual formatado.
- Variação de preço em 24h (com indicador positivo/negativo).
- Market Cap e Volume (formatados em K/M/B/T).
- Loading com spinner enquanto busca os dados.

## Preview (O que aparece na tela)

- Loading “Loading Crypto Data...” enquanto faz a requisição.
- Lista com cards renderizados a partir do `cryptoList.map()`.

## Tecnologias

- React (Hooks: `useState`, `useEffect`)
- Fetch/Async Await para requisições
- CSS para layout e spinner
- API: CoinGecko
