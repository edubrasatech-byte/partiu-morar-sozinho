# AGENTS.md — #PartiuMorarSozinho

Este arquivo contém as regras, convenções de código e diretrizes do projeto `#PartiuMorarSozinho`.

## Visão Geral
- **Objetivo**: Plataforma de educação prática para transição segura da casa dos pais para morar sozinho.
- **Modo Atual**: Pré-lançamento (Vendas desativadas, foco em captura de leads e diagnósticos).

## Arquitetura e Stack
- **Framework**: Next.js 15 (App Router, Server Components por padrão).
- **Linguagem**: TypeScript estrito.
- **Estilização**: Tailwind CSS v4 com custom properties (`globals.css`).
- **Banco de Dados**: PostgreSQL com Drizzle ORM (`src/db/schema.ts`).
- **Deploy**: Railway (Nixpacks, health check em `/api/health`).
- **CI**: GitHub Actions (`.github/workflows/ci.yml`).

## Convenções do Código
- **Componentes de UI**: Em `src/components/ui/` (Client Components devem explicitar `'use client'`).
- **Rotas Públicas**: `src/app/page.tsx`, `src/app/(public)/ebook`, `src/app/(public)/diagnostico`.
- **Rotas Admin**: `src/app/admin/`.
- **API Routes**: `src/app/api/`.

## Diretrizes Visuais
- Paleta: Navy-900 (`#0B1F3A`), Green-500 (`#28C76F`), Mint-100 (`#EAF9F0`), Surface-100 (`#F3F6F8`).
- Fontes: Inter (Google Fonts).
- Tipografia e cartões com gradientes sutis, sombras suaves e micro-animações CSS.
