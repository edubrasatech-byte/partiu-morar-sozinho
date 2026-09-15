# 05 — SEO e automação editorial

## Papel do blog

O blog não existe para publicar volume vazio ou “alimentar o Google”. Ele deve capturar dúvidas reais, criar confiança, entregar utilidade e conduzir o visitante para uma próxima ação. Todo conteúdo precisa ter:

- intenção de busca;
- público e estágio de consciência;
- promessa específica;
- fontes e data quando necessário;
- conteúdo original e útil;
- pilar e relacionamentos internos;
- CTA intermediário e comercial coerente;
- autor, revisor e data de atualização;
- métrica de sucesso e próxima revisão.

## Pilares editoriais

| Pilar | Dores e intenções | Conversão principal |
| --- | --- | --- |
| Decisão e prontidão | hora de sair, medo, sinais, idade, adiamento | Quiz de prontidão |
| Dinheiro | quanto custa, salário, reserva, orçamento, móveis | Calculadora/planilha |
| Vida prática | cozinhar, limpar, rotina, contas, segurança | Checklist do primeiro lar |
| Família e emocional | culpa, conversa, solidão, limites, conflitos | Roteiro de conversa |
| Moradia | alugar, dividir, comprar, localização, contrato | Matriz de decisão |
| Primeiros 90 dias | adaptação, imprevistos, organização e economia | Plano de 90 dias |
| Compra segura | financiamento, construtora, golpes, documentos | Lista antifraude + e-book |

## Primeiros conteúdos a produzir ou reescrever

1. Como saber se está na hora de sair da casa dos pais: teste em quatro áreas.
2. Quanto custa morar sozinho: modelo de cálculo por cidade, não média genérica.
3. Qual salário é necessário para morar sozinho? Faça a conta pela sua realidade.
4. Reserva para morar sozinho: quanto guardar antes da mudança.
5. Alugar, dividir ou comprar: como decidir sem romantizar nenhuma opção.
6. Como conversar com os pais sobre sair de casa sem criar uma guerra.
7. Lista do primeiro apartamento: essencial, pode esperar e desperdício.
8. Sete erros que podem forçar uma volta para a casa dos pais.
9. Morar sozinho dá solidão? Como preparar rotina e rede de apoio.
10. Apartamento na planta: vantagens, riscos e perguntas obrigatórias.
11. Como verificar construtora, corretor e documentação antes de assinar.
12. Primeiros 90 dias morando sozinho: plano de adaptação.

Os títulos são briefs iniciais, não texto definitivo. Pesquisa de intenção e SERP deve ocorrer no momento da produção.

## Estratégia de clusters

Para cada pilar:

- uma página pilar durável;
- artigos satélite por dúvidas específicas;
- ferramenta relacionada;
- seção correspondente do método;
- CTA intermediário;
- CTA para oferta;
- regras de links obrigatórios em ambos os sentidos.

O sistema deve impedir artigo órfão antes da publicação, salvo justificativa editorial registrada.

## Regra de atualização

- Financeiro, jurídico ou imobiliário: fonte primária, autor/revisor, data e revisão agendada.
- Custos: calculadora e exemplos editáveis por cidade; não declarar um número nacional absoluto.
- Experiência: história própria, contexto e limitações explícitas.
- Artigo antigo: consolidar no URL mais forte, redirecionar duplicatas e evitar canibalização.
- Página sem valor ou intenção: não publicar apenas para cumprir calendário.
- Conteúdo sensível vencido: retirar CTA, exibir aviso ou despublicar até revisão.

## Fluxo editorial

1. **Selecionar oportunidade:** cruzar intenção, estágio do funil, lacuna, autoridade e potencial comercial.
2. **Gerar briefing:** pergunta, promessa, tópicos, fontes esperadas, CTA e links.
3. **Pesquisar:** usar fontes primárias e registrar a evidência que sustenta cada afirmação sensível.
4. **Produzir rascunho:** voz da marca, exemplos e ferramenta prática.
5. **Aplicar QA automático:** originalidade, utilidade, headings, links, claims, linguagem e SEO.
6. **Revisar:** humana obrigatória para risco sensível e amostragem para conteúdo comum.
7. **Aprovar e agendar:** versão imutável associada ao aprovador.
8. **Publicar:** atualizar sitemap, RSS, cache e distribuição.
9. **Monitorar:** indexação, leitura, clique, lead, venda assistida e queda.
10. **Aprender:** atualizar vencedores, consolidar duplicatas e registrar hipóteses.

## O que pode ser automatizado

- descoberta assistida de pautas;
- geração de briefing e estrutura;
- rascunho inicial;
- sugestão de links internos e conteúdos a atualizar;
- meta title, meta description, slug e resumo;
- JSON-LD a partir de dados reais;
- variações de e-mail e social a partir do artigo aprovado;
- agendamento, sitemap, RSS e avisos;
- monitoramento de indexação e conversão;
- detecção de conteúdo vencido, órfão ou canibalizado.

## O que exige decisão humana

- qualquer regra, taxa, imposto, financiamento, contrato, programa público ou orientação jurídica;
- relatos pessoais, credenciais, depoimentos e números de resultado;
- tom de textos sobre conflito familiar, vergonha, ansiedade ou solidão;
- interpretação de pesquisa e seleção final de promessa;
- decisão de publicar, consolidar, redirecionar ou remover;
- autorização de imagem, nome e prova social.

## Cadência

O sistema deve suportar uma pauta diária, mas não deve ativar sete publicações semanais no lançamento. Plano recomendado:

1. quatro a oito semanas de produção controlada;
2. publicar três a cinco conteúdos fortes por semana;
3. medir qualidade, indexação e conversão;
4. aumentar gradualmente somente se estoque, revisão e diversidade de intenção sustentarem a qualidade;
5. permitir sete publicações apenas quando o pipeline, as fontes e a revisão estiverem estáveis.

Se não houver conteúdo aprovado no dia, o job não publica. Frequência nunca supera segurança e utilidade.

## Política de autopublicação

Configuração inicial:

- `AUTO_PUBLISH_ENABLED=false`;
- `SENSITIVE_CONTENT_REQUIRES_HUMAN_REVIEW=true`;
- `MINIMUM_QUALITY_SCORE` configurável;
- apenas itens no estado `approved` podem ser agendados;
- aprovação tem autor, data, versão e escopo;
- qualquer alteração após aprovação invalida a aprovação;
- falha de fonte ou link impede publicação;
- artigos sensíveis nunca passam para `approved` somente por IA.

## Score de qualidade

O score serve como filtro, não como substituto da revisão. Avaliar:

- intenção respondida;
- clareza e originalidade;
- profundidade adequada;
- utilidade prática;
- fontes e atualidade;
- coerência de voz;
- headings e escaneabilidade;
- links internos;
- CTA adequado;
- ausência de claim proibido;
- acessibilidade de mídia;
- duplicidade/canibalização.

Guardar dimensões separadas, motivo e versão do avaliador. Não exibir um número sem explicação ao editor.

## SEO técnico

- renderização indexável e URLs limpas;
- canonical consistente;
- sitemap por tipo e atualizado após publicação;
- `robots.txt` por ambiente; staging bloqueado;
- RSS;
- breadcrumbs;
- metadata única;
- Open Graph e cards sociais;
- dados estruturados válidos para Organization, Person, Article, BreadcrumbList e Product quando houver dados reais;
- FAQ estruturada somente quando elegível e correspondente ao conteúdo visível;
- redirecionamentos permanentes para consolidações;
- 404 útil e monitoramento de links quebrados;
- paginação e filtros sem explosão de URLs;
- imagens otimizadas, dimensões definidas e texto alternativo;
- HTML semântico e headings sem saltos artificiais.

## Integração com vendas

| Tipo de conteúdo | CTA intermediário | CTA comercial |
| --- | --- | --- |
| Dor e decisão | Quiz de prontidão | Conheça o Plano de Saída |
| Custo e dinheiro | Calculadora/planilha | Receba o kit completo |
| Família e emocional | Roteiro de conversa | Siga o método completo |
| Moradia e riscos | Matriz/lista antifraude | Compre o e-book atualizado |
| Vida prática | Checklist | Acesse todos os bônus |

## Métricas

- impressões e CTR orgânico;
- posição e cobertura por cluster;
- leitura/engajamento sem usar tempo como único indicador;
- conteúdo para lead;
- lead para oferta;
- receita assistida por conteúdo;
- taxa de atualização e validade de fontes;
- artigos órfãos, duplicados e em queda;
- custo editorial por conteúdo útil.

Metas só devem ser definidas depois de uma linha de base. Não inserir benchmarks inventados.

