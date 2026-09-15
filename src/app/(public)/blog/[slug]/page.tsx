import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, BLOG_POSTS } from '@/lib/blog';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Artigo Não Encontrado' };

  return {
    title: `${post.title} — #PartiuMorarSozinho`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Structured Data for Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author.name,
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container size="md">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-slate-400">
          <Link href="/" className="hover:text-emerald-400">Início</Link> {' > '}
          <Link href="/blog" className="hover:text-emerald-400">Blog</Link> {' > '}
          <span className="text-slate-200">{post.title}</span>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <Badge variant="success" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-slate-400 border-y border-slate-800 py-3">
            <span className="font-semibold text-slate-200">{post.author.name}</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6 text-base">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('# ')) {
              return null; // Skip main title as it is in header
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4 border-b border-slate-800 pb-2">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={idx} className="text-xl font-bold text-emerald-400 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('> ')) {
              return <blockquote key={idx} className="border-l-4 border-emerald-500 bg-slate-800/80 p-4 rounded-r-xl italic text-slate-200 my-4">{paragraph.replace('> ', '')}</blockquote>;
            }
            if (paragraph.includes('[**Fazer o Teste de Prontidão Grátis (/diagnostico)**]') || paragraph.includes('[**Diagnóstico de Prontidão (/diagnostico)**]')) {
              return (
                <div key={idx} className="my-8 p-6 bg-gradient-to-r from-emerald-950/80 to-slate-800 border border-emerald-500/40 rounded-2xl text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Quer saber se você está realmente pronto?</h4>
                  <p className="text-xs text-slate-300 mb-4">Faça nosso Teste de Prontidão gratuito em 2 minutos e receba a rota de moradia mais indicada.</p>
                  <Link href="/diagnostico">
                    <Button variant="primary" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
                      Fazer o Teste de Prontidão Grátis 🚀
                    </Button>
                  </Link>
                </div>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </article>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 bg-slate-800/90 rounded-3xl border border-slate-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Gostou deste conteúdo?</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto">
            O e-book <strong>#PartiuMorarSozinho</strong> traz todas as planilhas, checklists de vistoria e modelos de orçamento prontos para uso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diagnostico">
              <Button variant="primary" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3">
                Fazer Teste de Prontidão
              </Button>
            </Link>
            <Link href="/ebook">
              <Button variant="secondary" className="border-slate-600 text-slate-200 hover:bg-slate-700 px-6 py-3">
                Ver o E-book & Bônus
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
