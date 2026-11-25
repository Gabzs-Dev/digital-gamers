# Pipeline CI/CD – Digital Gamers

## 1. Objetivo

Automatizar o processo de compilação, testes e geração de artefatos da aplicação Digital Gamers, utilizando GitHub Actions.

## 2. Ferramentas utilizadas

- GitHub Actions;
- Node.js;
- npm;
- React;
- Vite;
- Vitest;
- React Testing Library.

## 3. Estrutura da pipeline

A pipeline está dividida em três etapas:

### Build

- Baixar o código do repositório.
- Configurar o Node.js.
- Instalar as dependências utilizando npm ci.
- Compilar a aplicação com npm run build.
- Armazenar os arquivos compilados.

### Test

- Executar os testes unitários.
- Executar os testes de integração.
- Verificar a cobertura mínima de 70%.
- Armazenar o relatório de cobertura.

### Artifact

- Recuperar os arquivos compilados.
- Gerar o artefato final.
- Identificar o artefato com a versão v1.0.0 e o número da execução.
- Disponibilizar o arquivo para download no GitHub.

## 4. Funcionamento

A pipeline é acionada automaticamente quando ocorre um Push nas branches configuradas ou um Pull Request direcionado à main.

As etapas seguem uma ordem de execução. Caso o Build ou os testes apresentem falhas, a geração do artefato final não será executada.

## 5. Benefícios

- Redução de tarefas manuais.
- Padronização do ambiente.
- Identificação antecipada de erros.
- Maior confiabilidade das alterações.
- Facilidade de compartilhamento da aplicação compilada.

## 6. Localização

O arquivo de configuração está localizado em:

.github/workflows/pipeline.yml

Os artefatos e relatórios podem ser encontrados na aba Actions do GitHub.