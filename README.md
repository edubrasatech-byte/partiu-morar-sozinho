# #PartiuMorarSozinho

> **Educação prática para independência consciente.**  
> O guia e plataforma definitivos para jovens adultos saírem da casa dos pais com planejamento financeiro, emocional e prático — sem impulsos e sem dívidas.

---

## 🚀 Tecnologias

- **Framework**: Next.js 15 (App Router, Server Components)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Banco de Dados**: PostgreSQL + Drizzle ORM
- **CI/CD**: GitHub Actions
- **Hospedagem**: Railway (Nixpacks)

---

## 📁 Estrutura de Arquivos

```text
src/
├── app/
│   ├── (public)/
│   │   ├── diagnostico/   # Quiz de Prontidão
│   │   └── ebook/         # Pré-lançamento do E-book
│   ├── admin/             # Painel de Administração
│   ├── api/
│   │   ├── health/        # Endpoint de Health Check
│   │   └── leads/         # Captura de Leads
│   ├── globals.css        # Design System e custom properties
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Home Page principal
├── components/
│   ├── quiz/              # Componentes interativos do Quiz
│   └── ui/                # Botões, Badges, Containers
├── db/
│   ├── index.ts           # Cliente Drizzle PostgreSQL
│   └── schema.ts          # Definição de tabelas (users, leads, purchases, etc.)
docs/                      # Documentação completa do produto
migrations/                # Arquivos SQL gerados pelo Drizzle Kit
```

---

## ⚙️ Variáveis de Ambiente (`.env`)

Crie um arquivo `.env.local` com base no `.env.example`:

```env
DATABASE_URL="postgres://postgres:postgres@localhost:5432/partiumorarsozinho"
NEXT_PUBLIC_SITE_MODE="prelaunch"
SITE_MODE="prelaunch"
```

---

## 🛠️ Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Gerar migrations do banco de dados
npx drizzle-kit generate

# 3. Rodar em desenvolvimento
npm run dev
```

---

## 🌐 Deploy no Railway

1. Conecte seu repositório GitHub ao **Railway**.
2. Crie um serviço de banco de dados **PostgreSQL** no projeto Railway.
3. Adicione a variável de ambiente `DATABASE_URL` vinculada ao PostgreSQL.
4. O Railway usará automaticamente o `railway.json` com health check na rota `/api/health`.
