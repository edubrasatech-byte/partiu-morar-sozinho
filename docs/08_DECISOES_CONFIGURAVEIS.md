# 08 — Decisões configuráveis e premissas de trabalho

O agente não deve bloquear a construção por decisões que podem ser configuradas. Deve usar os padrões abaixo em staging e sinalizar claramente o que precisa ser preenchido antes de produção.

## Padrões para avançar

| Tema | Padrão de staging | Regra para produção |
| --- | --- | --- |
| Mercado | Brasil inteiro | Confirmar cobertura e restrições regionais |
| Produto | E-book + kit prático | Arquivos finais e edição aprovados |
| Papel da compra de imóvel | Uma rota/capítulo, não mecanismo único | Manter salvo decisão explícita |
| Nome | `#PartiuMorarSozinho — O Plano de Saída` | Editável; confirmar título final |
| Lema | `Privacidade é prioridade` | Editável; confirmar uso como lema/campanha |
| Identidade | Azul-marinho, branco e verde | Ativos finais aprovados |
| Preço | Não informado; venda desativada | Preço e moeda obrigatórios |
| Garantia | Não informada; bloco oculto | Política real e revisada |
| Checkout | Adaptador externo desativado/sandbox | Provedor e credenciais reais |
| Depoimentos | Seção oculta | Somente autorizados e verificáveis |
| Credenciais do autor | Campos vazios/ocultos | Publicar somente após verificação |
| Suporte | Formulário em modo de teste | E-mail/canal monitorado |
| Automação editorial | Geração e agendamento em teste | Publicação automática desligada inicialmente |
| Conteúdo sensível | Bloqueado para publicação | Revisor competente e fonte atual |
| Histórico de métricas | Linha de base vazia | Medir antes de definir metas |
| Repositório | GitHub privado | Proprietário e acessos confirmados |
| Deploy | Railway staging | Produção após checklist e aprovação |

## Perguntas que o proprietário deve responder antes do lançamento

1. O e-book será vendido para todo o Brasil ou terá restrição regional?
2. A compra de imóvel na planta permanecerá como capítulo, oferta futura ou terá outro peso?
3. Quais resultados, depoimentos, vendas e histórias podem ser comprovados e publicados?
4. Quais credenciais profissionais do Maicon estão atuais e podem ser verificadas?
5. Qual checkout/plataforma será usado e quem fornece acesso às credenciais?
6. Qual preço, parcelamento, garantia e política de reembolso serão aplicados?
7. Existe histórico de visitas, leads, vendas, abandono e reembolso para importar?
8. Maicon aparecerá em vídeo e produzirá conteúdo autoral recorrente?
9. Quem fará revisão financeira, imobiliária e jurídica dos conteúdos sensíveis?
10. Qual e-mail/canal de suporte será monitorado?
11. Qual domínio será usado e quem controla o DNS?
12. Quem será proprietário do GitHub e do projeto Railway?
13. Quais arquivos finais constituem o produto entregue ao comprador?
14. Quais imagens e vídeos têm autorização de uso comercial?
15. Qual ferramenta de e-mail será usada e qual base possui consentimento válido?

## Flags obrigatórias

- `SITE_MODE=prelaunch|live`
- `SALES_ENABLED=false|true`
- `AUTO_PUBLISH_ENABLED=false|true`
- `SENSITIVE_CONTENT_REQUIRES_HUMAN_REVIEW=true`
- `TESTIMONIALS_ENABLED=false|true`
- `AUTHOR_CREDENTIALS_ENABLED=false|true`
- `EMAIL_MARKETING_ENABLED=false|true`
- `CHECKOUT_PROVIDER=disabled|external|provider_name`
- `ANALYTICS_ENABLED=false|true`

Estados perigosos precisam de dupla confirmação no painel. Em produção, alterar `SALES_ENABLED` ou `AUTO_PUBLISH_ENABLED` deve gerar auditoria.

## Itens que nunca recebem padrão inventado

- preço e desconto;
- garantia e prazo de reembolso;
- número de clientes ou vendas;
- credenciais profissionais;
- depoimentos;
- taxas, juros, impostos e regras de financiamento;
- custo médio de morar sozinho;
- prazo para a pessoa conseguir sair;
- resultados esperados;
- endereço, CPF/CNPJ, razão social e contatos legais.

Quando faltar dado, a interface deve ocultar o bloco, usar texto neutro claramente marcado para staging ou manter a função desativada.

