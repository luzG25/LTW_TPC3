# Gerenciador de Tarefas com `useReducer`

Este é um projeto simples de Gerenciador de Tarefas, desenvolvido em ReactJS, que utiliza o hook `useReducer` para gerenciar o estado das tarefas. Ele foi projetado como um exercício para entender e aplicar o conceito de reducer em React, promovendo uma separação clara entre lógica de estado e interface do usuário.

---

## **Objetivo do Projeto**

O objetivo principal deste projeto foi implementar e compreender o funcionamento do `useReducer`, substituindo o `useState` em um cenário com lógica de estado mais complexa. Além disso, foi incluída uma funcionalidade de filtro para tarefas pendentes, concluídas e todas.

---

## **Descrição Geral**

A aplicação permite ao usuário:

- Adicionar novas tarefas.
- Alternar o status de uma tarefa entre pendente e concluída.
- Remover tarefas.
- Filtrar as tarefas por estado (`Todos`, `Pendentes`, `Concluídas`).

O projeto apresenta uma interface simples e funcional, criada para reforçar o aprendizado do `useReducer`.

---

## **Ambiente de Desenvolvimento**

- **IDE**: Visual Studio Code (VS Code)
- **Gerenciador de Pacotes**: npm
- **Navegador para Testes**: Google Chrome

---

## **Etapas de Desenvolvimento**

1. **Download e Configuração Inicial**

   - Realizei o download do código para o Visual Studio Code.
   - Instalei as dependências do projeto executando o comando `npm install`.
   - Testei a aplicação no navegador para verificar a funcionalidade inicial.

2. **Pesquisa e Análise**

   - Assisti a um vídeo introdutório sobre o uso do `useReducer` ([Web Dev Simplified](https://www.youtube.com/watch?v=kK_Wqx3RnHk)).
   - Consultei um artigo explicativo sobre o hook `useReducer` para compreender como implementá-lo de forma eficiente ([Web Dev Simplified Blog](https://blog.webdevsimplified.com/2020-06/use-reducer/)).

3. **Refatoração para `useReducer`**

   - Substituí o `useState` inicial pelo `useReducer` para centralizar a lógica de manipulação do estado em uma função `reducer`.
   - Criei uma constante `ACTIONS` para armazenar as strings das ações possíveis (`ADD_TASK`, `TOGGLE_TASK`, `REMOVE_TASK`). Isso minimiza erros e facilita futuras modificações no código.
   - Movi as lógicas de adicionar, alternar o status e remover tarefas para a função `reducer`. Cada ação agora retorna o estado atualizado diretamente.
   - No componente principal, os botões foram ajustados para disparar o `dispatch`, enviando a ação e o `payload` correspondente.

4. **Filtros**

   - Analisei a lógica dos filtros e concluí que eles não alteram diretamente o estado das tarefas. Portanto, mantive os filtros usando o `useState`, sem necessidade de refatoração para o `useReducer`.

5. **Testes**
   - Testei a aplicação no navegador e verifiquei que todas as funcionalidades estavam funcionando como esperado.

---

## **Estrutura do Projeto**

- **`App.js`**:
  - Contém o componente principal da aplicação.
  - Gerencia o estado das tarefas utilizando o `useReducer`.
  - Implementa os botões para alternar, adicionar e remover tarefas, além dos filtros.
- **`reducer`**:
  - Função que centraliza a lógica de atualização do estado.
- **Constante `ACTIONS`**:
  - Define as ações possíveis para manipular o estado.

---

## **Como Executar o Projeto**

1. Baixar Código fonte

2. npm install

3. npm run dev

---

## **Considerações Finais**

Este projeto foi um ótimo exercício para aprender sobre o `useReducer`. Ele demonstrou como este hook pode ser útil em cenários onde o gerenciamento de estado é mais complexo e exige centralização da lógica.

---

## **Referências**

1. [Web Dev Simplified: Understanding useReducer](https://www.youtube.com/watch?v=kK_Wqx3RnHk)
2. [Web Dev Simplified Blog: How to useReducer](https://blog.webdevsimplified.com/2020-06/use-reducer/)
