# Calculadora De Tinta Frontend

## Descrição

Este desafio que tem como objetivo fornecer uma ferramenta para calcular a quantidade de tinta necessária para pintar um quarto. A aplicação considera as dimensões das paredes e a quantidades de portas/janelas de cada parede para fornecer uma estimativa precisa da quantidade de tinta necessária.

## Regras do desafio

Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L

1. Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados, mas podem possuir alturas e larguras diferentes
2. O total de área das portas e janelas deve ser no máximo 50% da área de parede
3. A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
4. Cada janela possui as medidas: 2,00 x 1,20 mtos
5. Cada porta possui as medidas: 0,80 x 1,90
6. Cada litro de tinta é capaz de pintar 5 metros quadrados
7. Não considerar teto nem piso.
8. As variações de tamanho das latas de tinta são:
   - 0,5 L
   - 2,5 L
   - 3,6 L
   - 18 L

## Requisitos para o projeto

1. [Node.js](https://nodejs.org/en/download/prebuilt-installer/current) instalado no computador;
2. [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) instalado no computador;
3. Necessário ter o projeto backend rodando no computador:

## Como testar o projeto

1. Instale todas as dependências do projeto

```sh
yarn
```

2. Iniciar o projeto

```sh
yarn dev
```

3. Acesse a url no navegador: http://localhost:5173

## Tecnologias

- Vite
- React
- Typescript
- React-Router
- Styled-components
- GraphQL
- Eslint
