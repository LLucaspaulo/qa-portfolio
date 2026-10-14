# QA Portfolio — Lucas Paulo

Repositório de estudos e exemplos de **Quality Assurance**: testes de API, automação E2E e boas práticas documentadas. Projetos usam APIs públicas e ambientes de demonstração (sem dados sensíveis de empregadores).

## Conteúdo

| Pasta | Descrição |
|-------|-----------|
| [`postman/`](postman/) | Coleção Postman para testes de API (JSONPlaceholder) |
| [`cypress/`](cypress/) | Esboço de automação E2E com Cypress (DemoQA) |

## Como usar

### Postman

1. Importe `postman/jsonplaceholder-api.collection.json` no Postman.
2. Execute a pasta **Smoke** ou a collection completa.

### Cypress (local)

```bash
npm init -y
npm install cypress --save-dev
npx cypress open
```

Copie os specs de `cypress/e2e/` para `cypress/e2e/` do projeto Cypress inicializado, ou adapte conforme sua estrutura.

## Autor

**Lucas Paulo** — Analista de QA Pleno  
- [LinkedIn](https://www.linkedin.com/in/lucas-paulo-241709175/)  
- [GitHub](https://github.com/LLucaspaulo)
