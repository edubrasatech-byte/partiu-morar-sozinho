export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Planejamento Financeiro' | 'Aluguel e Vistoria' | 'Rotina e Manutenção' | 'Família e Relações';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Quanto Custa Morar Sozinho em 2026? O Guia Real dos Custos Ocultos',
    slug: 'quanto-custa-morar-sozinho-2026',
    excerpt: 'Descubra a diferença entre o custo fixo mensal e o custo de instalação. Veja o cálculo real para não passar sufoco nem precisar voltar para a casa dos pais.',
    category: 'Planejamento Financeiro',
    author: {
      name: 'Equipe PMS',
      role: 'Especialistas em Independência Consciente',
      avatar: '/avatar-pms.png'
    },
    publishedAt: '2026-09-10',
    readingTime: '6 min de leitura',
    featured: true,
    content: `
# Quanto Custa Morar Sozinho em 2026? O Guia Real dos Custos Ocultos

Sair da casa dos pais é o sonho de grande parte dos jovens adultos. No entanto, o maior erro de quem toma essa decisão por impulso é olhar apenas para o valor do aluguel.

Aluguel é apenas uma fração da equação. Se você ganha R$ 3.000 e acha um apartamento de R$ 1.200, a conta parece fechar — até que surgem o condomínio, o IPTU, a conta de luz, a taxa de lixo, a feira da semana e o detergente da louça.

---

## 1. Custo de Instalação vs. Custo Fixo Mensal

Para planejar sua saída de forma segura, você precisa dividir seus gastos em duas categorias fundamentais:

### A. Custo de Instalação (Gasto Único)
Este é o dinheiro necessário **antes** de você girar a chave na fechadura:
- **Garantia Locatícia**: Caução (geralmente 3 meses de aluguel) ou taxa de seguro-fiança.
- **Mudança e Frete**: Transporte das suas coisas.
- **Mobília e Eletros Essenciais**: Geladeira, fogão/cooktop, colchão, máquina de lavar e chuveiro.
- **Pequenos Reparos**: Pintura inicial, fechaduras novas ou adaptação de tomadas.

> 💡 **Regra de Ouro PMS**: Nunca saia de casa sem ter salvo o Custo de Instalação **mais** uma reserva de emergência equivalente a 3 meses de custo de vida.

---

## 2. O Orçamento Mensal Realista

Abaixo está a média proporcional recomendada para não comprometer sua saúde financeira:

| Categoria | % Máxima da Renda Recomendada | Exemplos |
| :--- | :--- | :--- |
| **Moradia** | 30% a 35% | Aluguel, Condomínio, IPTU |
| **Utilitários** | 10% | Luz, Água, Gás, Internet, Celular |
| **Alimentação** | 20% | Supermercado, Feira, Marmitas |
| **Transporte & Saúde** | 15% | Passagem, Combustível, Farmácia |
| **Reserva & Lazer** | 20% | Investimento mensal e vida social |

---

## 3. O Teste de Prontidão

Antes de assinar qualquer contrato de 30 meses de aluguel, faça o **Diagnóstico PMS de Prontidão**. Ele avalia sua margem financeira, maturidade emocional e competências domésticas.

[**Fazer o Teste de Prontidão Grátis (/diagnostico)**]
`
  },
  {
    id: '2',
    title: 'Checklist de Vistoria de Aluguel: 10 Coisas para Testar Antes de Assinar',
    slug: 'checklist-vistoria-aluguel-antifraude',
    excerpt: 'Evite pagar por estragos de inquilinos anteriores. Saiba exatamente o que verificar nas tomadas, hidráulica, janelas e infiltrações.',
    category: 'Aluguel e Vistoria',
    author: {
      name: 'Equipe PMS',
      role: 'Especialistas em Independência Consciente',
      avatar: '/avatar-pms.png'
    },
    publishedAt: '2026-09-12',
    readingTime: '5 min de leitura',
    featured: false,
    content: `
# Checklist de Vistoria de Aluguel: 10 Coisas para Testar Antes de Assinar

Você achou o apartamento perfeito, a localização é ótima e o preço cabe no bolso. Mas você sabia que se não fizer uma vistoria inicial minuciosa, pode ser cobrado por estragos que já existiam quando você devolver o imóvel?

---

## As 10 Inspecões Obrigatórias

1. **Testador de Tomadas**: Leve um carregador de celular e teste todas as tomadas da casa.
2. **Pressão e Escoamento da Água**: Abra a torneira da pia e do chuveiro ao mesmo tempo. Observe a vazão e se a água escoa sem empoçar.
3. **Infiltrações e Umidade**: Olhe no teto do banheiro e atrás dos armários embutidos da cozinha. Marcas amareladas ou mofo indicam vazamento interno.
4. **Vedação das Janelas**: Abra e feche todas as janelas e persianas. Teste se as trincas funcionam.
5. **Estado dos Ralos**: Verifique se há cheiro de esgoto retornando dos ralos do banheiro e lavanderia.
6. **Quadros de Energia**: Abra o disjuntor e veja se os disjuntores estão identificados e limpos.
7. **Piso e Azulejos**: Bata suavemente nos pisos para checar se há peças ocas ou trincadas.
8. **Portas e Fechaduras**: Teste a chave por dentro e por fora em todas as portas de acesso.
9. **Gás Encanado ou Botijão**: Verifique a data de validade da mangueira de gás (máximo de 5 anos).
10. **Fotografe Tudo**: Tire fotos com data e hora de qualquer risco no piso, mancha na pintura ou trinco na louça.

---

## Registre Tudo no Laudo

Envie todas as fotos e observações por e-mail registrado para a imobiliária ou proprietário no prazo legal (geralmente até 5 dias após a entrega das chaves).

Faça nosso [**Diagnóstico de Prontidão (/diagnostico)**] para ter acesso a mais checklists como este!
`
  },
  {
    id: '3',
    title: 'Como Conversar com seus Pais sobre Morar Sozinho sem Gerar Conflitos',
    slug: 'como-conversar-com-pais-sobre-morar-sozinho',
    excerpt: 'Sair de casa não precisa significar um rompimento familiar. Aprenda a apresentar sua decisão como um projeto maduro e planejado.',
    category: 'Família e Relações',
    author: {
      name: 'Equipe PMS',
      role: 'Especialistas em Independência Consciente',
      avatar: '/avatar-pms.png'
    },
    publishedAt: '2026-09-14',
    readingTime: '4 min de leitura',
    featured: false,
    content: `
# Como Conversar com seus Pais sobre Morar Sozinho sem Gerar Conflitos

Muitos pais reagem com medo, tristeza ou defensiva quando o filho(a) anuncia que quer morar sozinho. Isso geralmente acontece por dois motivos: sentimento de rejeição ou preocupação genuína com a sua capacidade de se manter.

---

## 1. Não Dê a Notícia no Meio de uma Briga

Nunca diga *"Quero morar sozinho porque não aguento mais essa casa!"*. Isso transforma um marco de maturidade em uma birra impulsiva.

## 2. Apresente um Plano, Não uma Vontade

Em vez de pedir permissão ou fazer um anúncio vago, apresente um **plano estruturado**:
- Mostre que você já pesquisou os custos reais.
- Mostre que você possui uma reserva de emergência.
- Explique o cronograma realista (ex: "pretendo me mudar daqui a 4 meses").

## 3. Enfatize que o Vínculo Continua

Deixe claro que morar sozinho é um passo de desenvolvimento pessoal e profissional, e não um afastamento da família. Convide-os para visitar seu novo espaço quando estiver tudo pronto.
`
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}
