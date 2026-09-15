# 07 — Roadmap, testes e critérios de aceite

## Ordem de execução

### Fase 0 — Fundação GitHub e Railway

Entregas:

- repositório GitHub privado;
- `.gitignore`, lockfile, README técnico e convenções;
- GitHub Actions com lint, tipos, testes e build;
- projeto Railway conectado ao GitHub;
- ambientes de staging e produção separados;
- serviço web e PostgreSQL no staging;
- `/api/health` e smoke test;
- migrações iniciais e procedimento de rollback;
- `.env.example` completo, sem valores reais.

Critério de saída: um push aprovado pelo CI implanta o staging e retorna health check saudável.

### Fase 1 — Primeira fatia vertical

Fluxo:

`Home -> Quiz -> Lead consentido -> Resultado -> E-mail de teste -> Página do e-book -> Evento de conversão`

Entregas:

- design system base;
- home e página de venda responsivas;
- quiz versionado com quatro dimensões;
- captura e consentimento;
- resultado segmentado;
- provedor de e-mail em modo de teste;
- eventos e painel mínimo;
- testes e2e do fluxo.

Critério de saída: o fluxo funciona de ponta a ponta no staging sem dados inventados.

### Fase 2 — Produto, oferta e confiança

- configuração administrativa da oferta;
- entregáveis e bônus;
- preview real do produto;
- autor/credenciais com verificação;
- depoimentos com autorização e seção oculta quando vazia;
- políticas, contato e suporte;
- modo de pré-lançamento e feature flags.

Critério de saída: a página explica exatamente o que é vendido, por quanto, como é entregue e quais são os limites — ou mantém venda desativada enquanto faltarem dados.

### Fase 3 — Blog e CMS

- modelo editorial completo;
- editor, preview, fontes, risco, revisão e versões;
- hubs, artigos, categorias, autores e revisores;
- sitemap, RSS, canonical, redirects e dados estruturados;
- busca e links internos;
- migração/inventário do acervo sem publicação automática.

Critério de saída: um editor cria, revisa, agenda, publica, atualiza e reverte um artigo no staging.

### Fase 4 — Automação editorial

- web, worker e scheduler no Railway;
- fila idempotente;
- geração assistida por IA;
- score de qualidade e verificações;
- bloqueio de temas sensíveis;
- agendamento e monitoramento;
- alertas e reprocessamento seguro.

Critério de saída: um conteúdo comum aprovado percorre a fila e publica; um sensível sem revisão é bloqueado; falhas são observáveis e recuperáveis.

### Fase 5 — Checkout, entrega e pós-compra

- adaptador configurável de checkout;
- webhook verificado/idempotente;
- compra, direito de acesso e reembolso;
- área/entrega do comprador;
- e-mails de acesso e progresso;
- feedback e autorização de depoimento;
- testes com sandbox do provedor.

Critério de saída: pagamento sandbox cria acesso uma vez, reenvio do webhook não duplica e reembolso segue a regra configurada.

### Fase 6 — Otimização e preparação de lançamento

- analytics e funil;
- experimentos controlados;
- desempenho, acessibilidade e segurança;
- revisão de conteúdo e links;
- backups e restauração ensaiada;
- documentação operacional;
- checklist de produção.

Critério de saída: definição de pronto integralmente atendida e aprovação do proprietário.

## Roadmap comercial de referência

O briefing sugere um ciclo inicial de 30 dias, que deve ser tratado como sequência e não como promessa de prazo:

1. Dias 1–3: decisões de posicionamento, produto, título, promessa e identidade.
2. Dias 4–10: reestruturação do e-book, claims e ferramentas.
3. Dias 11–15: oferta, preço testável, garantia, prova, FAQ e checkout.
4. Dias 16–21: site, diagnóstico, método, políticas e analytics.
5. Dias 22–25: pilares de conteúdo, links internos e capturas.
6. Dias 26–28: QA de celular, velocidade, formulários, pagamento, e-mails e eventos.
7. Dias 29–30: lançamento controlado, tráfego pequeno, conversas e correções.

Se produto, revisão especializada ou credenciais não estiverem prontos, manter o staging e o modo de pré-lançamento. Qualidade e conformidade prevalecem sobre a data.

## Estratégia de testes

### Unitários

- score e segmentação do quiz;
- cálculos de orçamento/reserva;
- regras de transição editorial;
- validação de claims e risk flags;
- idempotência e assinatura de webhook;
- permissões e feature flags;
- construção de metadata/canonical;
- transformação de eventos.

### Integração

- banco e migrações;
- criação de lead e consentimento;
- envio de e-mail em sandbox;
- criação/revisão/publicação de conteúdo;
- processamento de jobs e retry;
- checkout sandbox, compra e reembolso;
- autorização administrativa;
- exportação/exclusão de dados.

### E2E

1. Visitante conclui quiz, consente, recebe resultado e abre oferta.
2. Visitante recusa marketing e ainda recebe a experiência essencial compatível com a base legal/configuração.
3. Editor cria conteúdo comum e revisor publica.
4. Conteúdo sensível sem fonte/revisor não pode publicar.
5. Administrador configura oferta sem editar código.
6. Checkout sandbox concede acesso e webhook duplicado não duplica compra.
7. Comprador acessa bônus e solicita suporte.
8. Usuário revoga consentimento e solicita exclusão.
9. Falha de e-mail/job aparece no painel e pode ser reprocessada.
10. Redirecionamento de artigo duplicado preserva rota e canonical.

### Não funcionais

- WCAG 2.2 AA automatizado e revisão manual;
- navegação por teclado;
- testes responsivos;
- orçamento de performance e Core Web Vitals;
- segurança de headers, autenticação, autorização e webhooks;
- rate limiting e abuso;
- restauração de backup;
- staging bloqueado para indexação;
- varredura de segredos e dependências;
- teste de build Docker/Railway.

## Matriz de navegadores e telas

- Chrome/Chromium atual;
- Safari/WebKit atual;
- Firefox atual;
- Android Chrome em tela pequena e grande;
- iPhone/Safari em tela compatível de teste;
- desktop 1366 px e maior;
- teclado e leitor de tela em fluxos críticos.

Não é obrigatório testar todo dispositivo existente, mas falhas críticas precisam ter cobertura representativa.

## Definição de pronto

### Produto

- promessa, público, mecanismo e título aprovados/configuráveis;
- e-book atual identificado com edição e data;
- claims sensíveis comprovados, removidos ou reescritos;
- bônus funcionais testados.

### Venda

- página funciona no celular e deixa oferta, preço, entrega e garantia claros;
- checkout, pagamento, e-mail e acesso testados ponta a ponta em sandbox;
- prova é real e autorizada;
- analytics registra visita, CTA, lead, checkout e compra sem duplicidade.

### Conteúdo e SEO

- pesquisa atual concluída para o primeiro calendário;
- duplicatas mapeadas e URLs planejadas;
- artigo possui fonte, CTA, links e data de revisão quando necessário;
- automação não publica tema sensível sem aprovação humana;
- sitemap, RSS, canonical e dados estruturados validados.

### Confiança

- autor, contato, políticas, privacidade e termos publicados;
- sem resultado garantido, escassez falsa ou número sem evidência;
- finalidade educacional e limites claros;
- consentimento, exportação e exclusão testados.

### Engenharia

- código no GitHub privado e sem segredos;
- branch principal protegida e CI verde;
- staging saudável no Railway;
- migrações e rollback documentados;
- logs/alertas sem PII;
- cobertura dos fluxos críticos;
- documentação para operação por outra pessoa.

## Checklist antes de produção

- [ ] decisões da oferta preenchidas no painel;
- [ ] e-book e bônus finais entregues no fluxo real;
- [ ] revisão financeira/jurídica concluída onde necessário;
- [ ] depoimentos/credenciais autorizados;
- [ ] políticas revisadas por responsável competente;
- [ ] domínio, e-mail e checkout reais configurados;
- [ ] segredos de produção separados de staging;
- [ ] backup/restauração verificados;
- [ ] testes e build aprovados;
- [ ] smoke tests após deploy;
- [ ] monitoramento e responsável por alertas definidos;
- [ ] auto-publicação continua desligada até aprovação específica;
- [ ] indexação liberada apenas no domínio canônico de produção.

