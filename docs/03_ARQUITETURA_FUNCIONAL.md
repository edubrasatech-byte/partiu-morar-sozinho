# 03 — Arquitetura funcional

## Perfis de acesso

| Perfil | Permissões principais |
| --- | --- |
| Visitante | Ler páginas e artigos, usar ferramentas públicas, iniciar quiz e acessar a oferta |
| Lead | Receber resultado, materiais autorizados e e-mails; gerenciar consentimento |
| Comprador | Acessar produto e bônus, atualizar dados mínimos, pedir suporte e exercer direitos de dados |
| Autor/editor | Criar e editar conteúdos, anexar fontes, enviar para revisão |
| Revisor | Aprovar, rejeitar, comentar e agendar conteúdos dentro da sua competência |
| Administrador | Configurar site, oferta, integrações, usuários, publicação, experimentos e auditoria |

Um mesmo login administrativo pode acumular papéis. Autorização deve ser aplicada no servidor.

## Mapa do site público

| Rota sugerida | Função | CTA principal |
| --- | --- | --- |
| `/` | Apresentar dor, transformação, método e caminhos | Fazer o diagnóstico |
| `/ebook` | Página de vendas | Quero meu plano de saída |
| `/comece-aqui` | Orientar quem está perdido | Descobrir minha etapa |
| `/diagnostico` | Quiz e captura consentida | Receber meu resultado |
| `/diagnostico/resultado` | Resultado personalizado e primeira ação | Montar meu plano completo |
| `/metodo` | Explicar as seis etapas | Conhecer o e-book |
| `/blog` | Hub editorial | Fazer o diagnóstico |
| `/blog/[slug]` | Artigo com intenção e próxima ação | CTA contextual |
| `/ferramentas` | Hub de ferramentas | Usar/receber ferramenta |
| `/sobre` | História e autoridade verificável | Conhecer o método |
| `/depoimentos` | Prova autorizada; ocultar se vazia | Começar meu plano |
| `/contato` | Suporte e dúvidas | Enviar pergunta |
| `/obrigado` | Orientar acesso e próxima ação | Acessar material |
| `/acesso` | Entrada da área do comprador | Entrar com segurança |
| `/privacidade` | Política de privacidade | — |
| `/termos` | Termos de uso e compra | — |
| `/cookies` | Preferências de consentimento | — |
| `/politica-editorial` | Automação, fontes, revisões e correções | — |

Rotas podem mudar por convenção técnica, mas as funções não podem desaparecer.

## Estrutura da home

1. Hero com promessa e CTA para diagnóstico ou e-book.
2. Três situações de identificação: privacidade, medo financeiro e falta de plano.
3. Conceito de independência consciente.
4. Método PMS em seis etapas.
5. Rotas de moradia: alugar, dividir, comprar ou aguardar com meta.
6. Diagnóstico ou ferramenta gratuita.
7. Apresentação concreta do e-book e bônus.
8. Autor e credenciais verificadas.
9. Conteúdos recentes por etapa da jornada.
10. Provas reais quando existirem.
11. FAQ e CTA final.

## Diagnóstico de prontidão

### Dimensões

1. Dinheiro.
2. Rotina e vida prática.
3. Emocional e família.
4. Decisão e planejamento.

### Requisitos

- perguntas e pesos editáveis pelo administrador;
- progresso, retorno e salvamento local durante a sessão;
- linguagem educativa, sem diagnóstico clínico ou aconselhamento individual;
- captura de nome e e-mail somente no momento necessário, com consentimento separado para marketing;
- resultado imediato com pontuação por dimensão, forças, riscos e primeira ação;
- um segmento dominante entre `sufocado`, `inseguro`, `perdido` e `quase_pronto`;
- recomendação que pode ser sair, preparar-se ou permanecer com meta; nunca pressionar todos a sair;
- persistência da versão do quiz e das respostas;
- eventos de início, etapa, conclusão, abandono e CTA;
- envio do resultado por e-mail apenas quando autorizado/necessário;
- opção para revogar consentimento e excluir dados.

### Resultado mínimo

- resumo da situação;
- quatro barras ou níveis acessíveis, acompanhados de texto;
- uma prioridade para os próximos sete dias;
- uma ferramenta gratuita relacionada;
- convite coerente para o e-book;
- aviso de que o resultado é educacional e não substitui análise profissional.

## Blog e conteúdo

### Recursos públicos

- listagem por pilar, intenção e etapa da jornada;
- busca textual;
- paginação ou carregamento progressivo indexável;
- página de autor e revisor;
- data de publicação e atualização;
- fontes visíveis em temas sensíveis;
- sumário, headings corretos, leitura estimada e compartilhamento;
- artigos relacionados e links internos planejados;
- CTA intermediário e comercial contextual;
- breadcrumbs, canonical, Open Graph, RSS e sitemap;
- páginas de categoria úteis, não arquivos vazios.

### Estados editoriais

`ideia -> briefing -> pesquisa -> rascunho -> revisão -> aprovado -> agendado -> publicado -> atualização -> arquivado`

`rejeitado` e `bloqueado` são estados terminais temporários com motivo obrigatório.

## Painel administrativo

### Visão geral

- tráfego, leads, vendas e alertas operacionais;
- conteúdos em cada estado;
- jobs falhos ou atrasados;
- próximos agendamentos;
- itens que exigem revisão especializada;
- conversões do quiz e do funil;
- ausência de dados apresentada como ausência, nunca preenchida com números fictícios.

### Conteúdo

- editor com preview responsivo;
- briefing, palavra-chave/intenção, pilar, funil, CTA e links internos;
- fontes estruturadas com URL, título, órgão/autor, data, data de acesso e trecho sustentado;
- classificação de risco: comum, financeiro, jurídico, imobiliário ou emocional sensível;
- autor, revisor, datas e histórico de versões;
- comentários de revisão e motivo de rejeição;
- agendamento e publicação manual;
- consolidação de duplicatas e mapa de redirecionamento;
- geração assistida por IA com prompt e modelo registrados;
- botão de correção emergencial e rollback de conteúdo.

### Oferta e marca

- título, subtítulo, preço, moeda, disponibilidade e garantia;
- checkout e URL de destino;
- lista de entregáveis e bônus;
- dados do autor e credenciais verificadas;
- depoimentos com autorização, origem e status;
- cores, logos e imagens aprovadas;
- CTAs, FAQs e avisos legais;
- modo `pré-lançamento`, `staging` e `vendas abertas`.

### Leads e comunicação

- segmentos, origem, consentimentos e versão do formulário;
- automações e templates;
- exclusões, descadastros e supressão;
- eventos de entrega, abertura e clique quando permitidos;
- exportação e exclusão de dados;
- nunca exibir dados pessoais em logs técnicos.

### Operação

- usuários administrativos e papéis;
- configurações de integrações sem revelar segredos;
- feature flags e experimentos;
- auditoria de ações críticas;
- fila de jobs e opção de reprocessar com segurança;
- saúde de webhooks, e-mail e publicação.

## E-mails iniciais

1. Resultado e primeira ação.
2. A dor escondida: custo de continuar sem plano, sem atacar os pais.
3. A saída falsa: por que impulso e dívida não produzem independência.
4. O método: seis etapas e história verificável do autor.
5. Objeção principal de acordo com o quiz.
6. Oferta: produto, bônus, garantia real e CTA.
7. Decisão: resumo e FAQ sem urgência inventada.

Templates precisam de modo de visualização/teste, texto puro, descadastro e registro da versão enviada.

## Pós-compra

- webhook de pagamento verificado e idempotente;
- criação ou atualização segura do direito de acesso;
- e-mail imediato com acesso e primeira ação;
- lembrete de progresso no terceiro e sétimo dia;
- mensagem específica para quem não acessou;
- solicitação de feedback somente depois de uma entrega concreta;
- consentimento específico para uso de depoimento e escolha de nome/foto;
- reembolso revoga acesso de acordo com a regra real e mantém trilha de auditoria;
- suporte não depende de responder diretamente a um e-mail automatizado sem monitoramento.

## Ferramentas

### Primeira versão

- quiz de prontidão;
- calculadora/planilha de custo e reserva;
- checklist do primeiro lar;
- matriz de decisão de moradia;
- plano de 90 dias.

Entradas devem ser validadas, cálculos explicados e resultados salvos somente com consentimento. Valores locais devem ser inseridos pelo usuário ou por fontes identificadas; não usar uma média nacional como verdade individual.

## Eventos mínimos

- `page_view` com rota e origem;
- `sales_page_view` e profundidade;
- `cta_click` com posição, texto e destino;
- `quiz_start`, `quiz_step`, `quiz_complete`, `quiz_abandon`;
- `lead_created` e consentimento;
- `email_sent`, `email_delivered`, `email_clicked`, `email_unsubscribed`;
- `checkout_started`, `purchase_completed`, `purchase_refunded`;
- `buyer_asset_accessed` e primeira ação;
- `article_view`, CTA do artigo e conversão assistida;
- falhas de webhook/job sem dados pessoais.

Cada evento deve ter esquema versionado, idempotência quando aplicável e documentação.

