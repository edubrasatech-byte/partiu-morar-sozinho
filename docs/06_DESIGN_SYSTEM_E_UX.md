# 06 — Design system e experiência

## Direção

O visual deve transmitir confiança, clareza, progresso e vida adulta real. Evitar a aparência de curso milagroso, imobiliária disfarçada ou template genérico. A interface precisa funcionar primeiro no celular e conduzir uma ação principal por página.

## Paleta base

| Token | Cor | Uso |
| --- | --- | --- |
| `navy-900` | `#0B1F3A` | títulos, navegação, áreas de confiança |
| `navy-700` | `#163A5F` | subtítulos, superfícies e estados secundários |
| `green-500` | `#28C76F` | progresso e CTA com texto de contraste validado |
| `green-700` | `#16864A` | texto verde, bordas e estados fortes |
| `mint-100` | `#EAF9F0` | fundos de benefícios e callouts |
| `surface-100` | `#F3F6F8` | superfícies secundárias |
| `border-200` | `#D9E2E8` | divisórias e contornos |
| `text-900` | `#17212B` | texto principal |
| `text-600` | `#60707D` | texto secundário |
| `amber-500` | `#F3B61F` | alertas, decisão pendente e conquista |
| `danger-600` | `#B42318` | erro e ação destrutiva |

Contraste deve ser testado. Não assumir que branco sobre verde claro é acessível. Usar verde escuro para texto e amarelo apenas com combinação validada.

## Identidade a evitar

- não misturar preto/dourado como sistema concorrente;
- não usar vermelho como pressão de compra;
- não usar contadores, selos ou faixas de “última chance” fictícios;
- não criar estética luxuosa que afaste quem teme o custo;
- não usar somente fotos de apartamentos perfeitos e vazios.

## Tipografia

- fonte sem serifa legível, com boa cobertura de português;
- texto base confortável em telas pequenas;
- largura de linha controlada;
- escala consistente de headings;
- números financeiros com alinhamento e separadores locais;
- evitar caixa alta em blocos longos.

Escolher fontes estáveis e performáticas. Se forem externas, carregar de forma compatível com privacidade e desempenho.

## Fotografia e mídia

Priorizar:

- fotos reais e autorizadas do Maicon;
- jovens em momentos de decisão, planejamento, mudança e rotina;
- ferramentas preenchidas e páginas reais do produto;
- ambientes possíveis, não apenas imóveis de alto padrão;
- diversidade real sem tokenização artificial.

Todo ativo do acervo precisa ser revisado quanto a atualidade, direitos, qualidade e coerência. Imagens antigas com texto incorporado não devem ditar o novo sistema.

## Componentes essenciais

- cabeçalho público e navegação móvel;
- hero de campanha;
- bloco de identificação de dor;
- cards das seis etapas;
- comparação de caminhos de moradia;
- preview do produto;
- lista de entregáveis e bônus;
- card de autor/revisor;
- depoimento com comprovação;
- FAQ acessível;
- CTA fixo no mobile sem cobrir conteúdo;
- formulário e etapas do quiz;
- resultado do diagnóstico;
- article card e filtros;
- callout de fonte/atualização;
- tabelas e calculadoras responsivas;
- toast, modal, diálogo e confirmação acessíveis;
- estados vazios, skeleton, erro e offline/indisponível;
- tabelas e painéis administrativos.

## Experiência mobile

- alvo mínimo de toque de 44 × 44 px;
- CTA principal visível sem competir com múltiplas ações;
- formulário com teclado/input corretos;
- erros próximos ao campo e resumo acessível;
- progresso do quiz claro e recuperável;
- tabelas transformadas ou roláveis com contexto preservado;
- imagens sem layout shift;
- checkout externo aberto com contexto e retorno previsível;
- sem pop-up imediato cobrindo a primeira leitura.

## Acessibilidade

Meta: WCAG 2.2 AA.

- navegação completa por teclado;
- foco visível;
- `skip link`;
- landmarks e headings corretos;
- labels e instruções persistentes;
- mensagens anunciadas por tecnologia assistiva;
- não depender apenas de cor;
- gráficos com texto equivalente;
- diálogos com foco controlado;
- preferência de movimento reduzido;
- conteúdo ampliável sem perda;
- testes automatizados e verificação manual.

## Performance

Metas de experiência em produção, avaliadas no percentil 75 quando houver dados:

- LCP até 2,5 s;
- INP até 200 ms;
- CLS até 0,1.

Definir orçamento de JavaScript, imagens e fontes. Evitar bibliotecas pesadas para interações simples. Painel administrativo não deve prejudicar o bundle público.

## Regras de conversão na interface

- uma ação principal por página;
- menu reduzido na página de vendas;
- prova próxima à objeção/CTA correspondente;
- preço, entrega e garantia sem ambiguidade;
- botão descreve benefício/ação, não apenas “saiba mais”;
- formulário pede o mínimo necessário;
- checkout e integrações mostram progresso e erro recuperável;
- o visitante pode entender o produto sem assistir vídeo;
- seções opcionais desaparecem quando faltam dados reais, sem lacunas visuais.

## Critérios visuais de aceite

- sem overflow horizontal em larguras comuns;
- sem texto cortado ou sobreposto;
- sem mudança brusca de layout na carga;
- contraste aprovado;
- estados hover, focus, active, disabled e error definidos;
- telas críticas verificadas em celular pequeno, celular grande, tablet e desktop;
- impressão/compartilhamento de ferramentas úteis quando aplicável;
- staging claramente identificado para não ser confundido com produção.

