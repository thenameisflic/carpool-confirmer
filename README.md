# carpool-confirmer
Minha implementação do teste de recrutamento da Bynd.

O código fonte da API está disponível em https://github.com/thenameisflic/carpool-confirmer-api.

### Rodando o projeto

Para rodar o projeto na sua máquina, basta executar os seguintes comandos:

```
yarn
npx jetify
react-native run-android
```

É necessário executar `npx jetify` pois algumas das dependências do projeto ainda não foram atualizadas para o AndroidX (obrigatório no React Native 0.60).

### Estrutura
```
├── __tests__ -- Testes unitários e snapshots da aplicação
├── android -- Configurações de build do Android
├── api -- Funções para interagir com a API
├── components
|   ├── screens -- Telas da aplicação
|   ├── typography -- Componentes tipográficos
|   └── ui -- Componentes visuais
└── ios -- Configurações de build do iOS
```

### Observações

- Há um .APK está disponível na aba [Releases](https://github.com/thenameisflic/carpool-confirmer/releases) para facilidade de testes.
- A API está hospedada em um servidor para facilidade de testes.
- Por fins de simplicidade, as credenciais estão disponíveis junto ao código-fonte.
