# 04 — Arquitetura técnica, GitHub e Railway

## Princípio

Construir uma aplicação de produção implantável no Railway a partir de um repositório GitHub privado. A arquitetura deve ser simples para um proprietário solo operar, mas separar responsabilidades suficientes para conteúdo, jobs e vendas funcionarem com segurança.

## Stack de referência

Use as versões estáveis atuais no momento da implementação e confirme as instruções nas documentações oficiais.

- Runtime: Node.js LTS.
- Aplicação: Next.js com App Router e TypeScript estrito.
- Interface: React, Tailwind CSS e componentes acessíveis; biblioteca de componentes pode ser adotada sem aprisionar o design.
- Banco: PostgreSQL no Railway.
- ORM/migrações: Drizzle ORM ou Prisma; escolher um e documentar.
- Autenticação administrativa: Auth.js ou solução equivalente com sessão segura e RBAC no servidor.
- Validação: Zod ou equivalente, compartilhando contratos quando seguro.
- E-mail: adaptador de provedor; configuração inicial preparada para Resend ou equivalente.
- Fila: preferir uma fila baseada em PostgreSQL, como pg-boss, para reduzir serviços; usar Redis apenas se houver justificativa.
- Testes: unitários, integração e Playwright para fluxos críticos.
- Observabilidade: logs estruturados, rastreamento de erros e métricas sem PII.

Se o Antigravity possuir uma base compatível melhor, pode adaptá-la, desde que preserve os contratos, os critérios de aceite, o Railway e a capacidade de operação por um desenvolvedor solo.

## Topologia Railway

Um único projeto Railway, com ambientes separados:

- `development`: uso local/conectado quando necessário;
- `staging`: implantação automática da branch principal após CI aprovado;
- `production`: promoção ou deploy protegido por aprovação e checklist.

Serviços previstos:

1. **web** — aplicação pública, APIs e painel administrativo.
2. **postgres** — banco gerenciado do projeto.
3. **worker** — jobs de conteúdo, e-mail, webhooks e manutenção.
4. **scheduler** — serviço/cron que apenas enfileira trabalhos; não faz produção pesada dentro da execução agendada.

O mesmo repositório pode fornecer web, worker e scheduler com comandos de início diferentes. Cada serviço deve expor logs claros e falhar de forma observável.

### Requisitos Railway

- aceitar a porta fornecida por `PORT`;
- health check em `/api/health`, sem expor segredos;
- build determinístico, preferencialmente com Dockerfile multi-stage ou método atual recomendado pelo Railway;
- migrações executadas de forma controlada antes da nova versão servir tráfego;
- variáveis compartilhadas por referência quando suportado, sem copiar segredos para arquivos;
- reinício seguro e jobs idempotentes;
- nenhuma dependência de disco efêmero para dados permanentes;
- backups e procedimento de restauração documentados;
- domínio customizado, HTTPS e redirecionamento canônico configuráveis;
- timezone de negócio `America/Sao_Paulo`; timestamps armazenados em UTC.

## GitHub como fonte oficial

### Repositório

- privado por padrão;
- `main` protegida;
- branches curtas por tarefa;
- pull requests com descrição, evidências e checklist, mesmo em operação solo quando possível;
- commits pequenos e claros; Conventional Commits é recomendado;
- sem force push em branches compartilhadas;
- tags/releases para versões de produção.

### GitHub Actions

Workflow obrigatório em pull request e push:

1. instalação reproduzível com lockfile;
2. lint;
3. formatação/verificação;
4. TypeScript;
5. testes unitários e de integração;
6. build de produção;
7. e2e essenciais em ambiente adequado;
8. varredura de segredos e dependências;
9. publicação de artefatos/relatórios úteis sem dados sensíveis.

Dependabot/Renovate e CodeQL podem ser configurados quando compatíveis com a conta. Atualizações automáticas não devem fazer merge sem testes.

### O que não entra no Git comum

- `.env*` com valores reais;
- banco ou dumps com dados pessoais;
- tokens, credenciais, cookies ou arquivos de sessão;
- acervo bruto inteiro do Google Drive;
- PDFs/vídeos grandes sem decisão de armazenamento;
- exports de leads, pagamentos ou analytics.

Adicionar `references/google-drive/` ao `.gitignore`. Versionar o manifesto, os textos aprovados e apenas os ativos otimizados usados pelo site. Git LFS exige decisão explícita.

## Estrutura de repositório sugerida

```text
/
  src/
    app/
      (public)/
      admin/
      api/
    components/
    content/
    db/
    emails/
    jobs/
    lib/
    server/
  migrations/
  public/
  scripts/
  tests/
  docs/
  AGENTS.md
  README.md
  .env.example
  Dockerfile
  railway.toml ou railway.json
```

A estrutura pode ser refinada, mas deve manter separação entre interface pública, administração, domínio, integrações e jobs.

## Modelo de dados mínimo

### Identidade e administração

- `admin_users`
- `roles`
- `admin_user_roles`
- `sessions/accounts` conforme o provedor de autenticação
- `audit_log`

### Conteúdo

- `content_items`
- `content_versions`
- `content_sources`
- `content_reviews`
- `content_links`
- `content_redirects`
- `content_jobs`
- `authors`
- `reviewers`
- `categories`
- `tags`

### Funil

- `leads`
- `consents`
- `quiz_versions`
- `quiz_questions`
- `quiz_submissions`
- `quiz_answers`
- `email_sequences`
- `email_templates`
- `email_deliveries`
- `conversion_events`

### Comercial

- `offers`
- `offer_assets`
- `checkout_providers`
- `purchases`
- `entitlements`
- `refunds`
- `testimonials`
- `support_requests`

### Configuração

- `site_settings`
- `feature_flags`
- `experiments`
- `experiment_variants`
- `integration_health`

Usar IDs não previsíveis onde expostos, `created_at/updated_at`, autoria, versionamento e índices. Dados de eventos podem exigir particionamento/retenção; não armazenar payloads externos completos sem necessidade.

## APIs e contratos

### Públicas

- obter configurações públicas aprovadas;
- enviar quiz e obter resultado;
- criar lead/consentimento;
- enviar contato com proteção contra abuso;
- listar/buscar conteúdo publicado;
- receber webhooks em endpoints específicos e verificados.

### Administrativas

- CRUD com versionamento para conteúdos e configurações;
- transições de estado validadas;
- revisão e publicação;
- gestão de jobs, usuários e auditoria;
- nunca confiar em papel enviado pelo cliente.

### Regras

- validação de esquema na borda;
- erros padronizados sem detalhes internos;
- rate limiting e antiabuso;
- idempotency keys para lead, compra, webhook e job;
- paginação e limites;
- trilha de auditoria nas mudanças comerciais/editoriais.

## Integrações por adaptadores

Implementar contratos e pelo menos um caminho funcional/configurável para cada categoria:

- `AIProvider`: geração e assistência editorial;
- `EmailProvider`: transacional e marketing consentido;
- `CheckoutProvider`: URL externa e webhooks de Hotmart/Kiwify/Mercado Pago ou provedor escolhido;
- `ObjectStorageProvider`: armazenamento aprovado de arquivos;
- `AnalyticsProvider`: GA4/GTM e eventos próprios;
- `CaptchaProvider`: proteção de formulários;
- `ErrorTrackingProvider`: alertas de aplicação.

Ausência de credencial deve produzir modo desativado/teste explícito, não falha silenciosa.

## Pipeline de jobs

1. scheduler cria trabalho com chave idempotente;
2. worker reserva trabalho com lock e timeout;
3. execução registra tentativas e resultado;
4. falhas transitórias usam backoff limitado;
5. falhas permanentes vão para revisão manual;
6. interface permite reprocessamento seguro;
7. alertas disparam após limiar;
8. jobs não podem publicar conteúdo sensível sem aprovação válida.

## Segurança

- cookies `HttpOnly`, `Secure` e `SameSite` apropriado;
- proteção CSRF onde aplicável;
- hash forte de senha se credencial local for usada;
- RBAC e checagem de ownership/escopo no servidor;
- webhooks com assinatura, replay protection e idempotência;
- rate limiting por IP/identificador com cuidado para proxies;
- sanitização/renderização segura de conteúdo;
- Content Security Policy e headers de segurança;
- uploads com tipo, tamanho, nome e conteúdo validados;
- logs sem segredos ou PII;
- política de retenção, exportação e exclusão;
- inventário de subprocessadores e integrações;
- varredura de dependências e segredo no CI.

## Observabilidade

- `/api/health`: processo e conexão essencial sem revelar detalhes;
- `/api/ready`: prontidão para receber tráfego quando útil;
- logs JSON com request/job ID;
- dashboard de falhas de jobs e integrações;
- alertas para build/deploy falho, taxa de erro, fila parada, webhook e e-mail;
- analytics comercial separado de logs técnicos.

## Implantação e rollback

1. CI aprovado.
2. Migração compatível com versão anterior sempre que possível.
3. Deploy no staging pelo GitHub.
4. Smoke tests automatizados.
5. Verificação de logs e health check.
6. Aprovação para produção.
7. Promoção/deploy e smoke tests.
8. Rollback de aplicação e plano separado para migrações destrutivas.

Nunca executar migração destrutiva no mesmo passo sem backup, revisão e plano de retorno.

