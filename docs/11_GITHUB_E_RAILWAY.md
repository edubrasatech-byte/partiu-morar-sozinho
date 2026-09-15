# 11 — Execução obrigatória no GitHub e Railway

Este documento transforma a decisão do proprietário em regra: **todo o código e a documentação vivem no GitHub; a aplicação começa e roda no Railway.** Não usar Vercel, Netlify ou outra plataforma como padrão do projeto.

## GitHub

### Passos iniciais

1. Inicializar Git na raiz deste pacote.
2. Confirmar `.gitignore` antes de adicionar arquivos.
3. Criar repositório privado, com nome sugerido `partiu-morar-sozinho`.
4. Definir o proprietário correto da conta/organização.
5. Fazer o primeiro commit apenas com especificação e configuração segura.
6. Criar branch de fundação e scaffold da aplicação.
7. Adicionar CI antes da primeira integração à `main`.
8. Proteger `main` com checks obrigatórios e impedir force push.
9. Registrar decisões e links de staging no README técnico.

### Política de commits

- `feat:` funcionalidade;
- `fix:` correção;
- `docs:` documentação;
- `test:` testes;
- `refactor:` alteração sem mudança de comportamento;
- `chore:` infraestrutura e manutenção;
- `security:` endurecimento ou correção de segurança.

Cada commit precisa deixar o repositório coerente. Não agrupar todo o projeto em um único commit final.

### CI mínimo

Pull requests e pushes para `main` precisam executar:

- instalação pelo lockfile;
- lint e formatação;
- TypeScript;
- testes unitários e integração;
- build de produção;
- varredura de segredos;
- smoke/e2e quando o ambiente estiver disponível.

O Antigravity deve corrigir a causa de falhas, não desabilitar checks para “ficar verde”.

## Railway

### Projeto

- nome sugerido: `partiu-morar-sozinho`;
- origem: repositório GitHub privado;
- ambiente inicial: `staging`;
- ambiente `production` criado com variáveis próprias e deploy protegido;
- aplicação Node executada por build determinístico;
- banco PostgreSQL dentro do Railway;
- serviços web, worker e scheduler derivados do mesmo commit.

### Fluxo de implantação

1. Antigravity envia uma fase estável ao GitHub.
2. GitHub Actions valida.
3. Railway recebe o commit aprovado e implanta staging.
4. Smoke tests verificam `/api/health` e o fluxo crítico.
5. Logs e migrações são conferidos.
6. A matriz de rastreabilidade recebe a URL/evidência.
7. Produção só é promovida depois do checklist e aprovação do proprietário.

### Serviços

| Serviço | Comando/objetivo | Observação |
| --- | --- | --- |
| `web` | servir site, APIs e admin | usa `PORT`; health check obrigatório |
| `postgres` | persistência | backups e restauração documentados |
| `worker` | processar fila | não receber tráfego público |
| `scheduler` | enfileirar tarefas | execução curta e idempotente |

Os comandos reais devem ser definidos depois do scaffold e documentados no Railway e no repositório. Não duplicar código por serviço.

### Variáveis

- configurar primeiro no staging;
- usar referências/variáveis compartilhadas quando apropriado;
- nunca copiar valores reais para `.env.example`;
- separar credenciais de staging e produção;
- rotacionar qualquer segredo exposto acidentalmente;
- registrar apenas o nome, finalidade e responsável da variável.

### Banco e migrações

- migrações versionadas no GitHub;
- um único executor por deploy;
- mudanças destrutivas em duas etapas quando possível;
- backup e rollback antes de alteração irreversível;
- dados iniciais de demonstração claramente marcados;
- nunca usar dados pessoais reais nos seeds.

### Arquivos e mídia

O disco de execução não é a fonte permanente de arquivos do usuário. Ativos públicos aprovados podem ser empacotados no build; uploads, produto e mídia dinâmica precisam de armazenamento persistente apropriado, configurado por adaptador. O acervo bruto do Drive permanece fora do deploy.

## Critério de fundação concluída

- [ ] repositório privado pertence à conta/organização correta;
- [ ] pacote e código estão no GitHub sem segredos;
- [ ] CI obrigatório aprovado;
- [ ] projeto Railway conectado ao mesmo repositório;
- [ ] staging possui web e PostgreSQL saudáveis;
- [ ] worker e scheduler possuem configuração reproduzível, mesmo que ainda desativados;
- [ ] `/api/health` responde corretamente;
- [ ] migração inicial executada;
- [ ] logs não expõem informação sensível;
- [ ] rollback e variáveis estão documentados;
- [ ] nenhum serviço alternativo foi adotado como hospedagem principal.

