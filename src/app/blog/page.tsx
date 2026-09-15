import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Blog & Acervo Prático — #PartiuMorarSozinho',
  description: 'Artigos práticos sobre planejamento financeiro, aluguel, vistoria, rotina doméstica e transição familiar.',
};

export default function BlogListingPage() {
  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="success" className="mb-3">Acervo do Método PMS</Badge>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Guia de Independência & Vida Adulta
          </h1>
          <p className="text-lg text-slate-300">
            Artigos fundamentados para te ensinar a calcular custos, escolher imóveis e planejar sua mudança sem sobressaltos.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 bg-slate-800/80 rounded-3xl border border-slate-700/80 overflow-hidden shadow-2xl grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3 hover:text-emerald-400 transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-700/60 pt-4 text-xs text-slate-400">
                <span>{featuredPost.publishedAt}</span>
                <span>{featuredPost.readingTime}</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/40 to-slate-800 p-8 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-slate-700/60">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Artigo em Destaque</h3>
              <p className="text-xs text-slate-400 mb-6 max-w-xs">Aprenda a fórmula oficial para não ser pego de surpresa pelos custos ocultos.</p>
              <Link href={`/blog/${featuredPost.slug}`} className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all">
                Ler Artigo Completo
              </Link>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-3">Todos os Artigos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2 hover:text-emerald-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-700/40">
                <span>{post.publishedAt}</span>
                <span>{post.readingTime}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
