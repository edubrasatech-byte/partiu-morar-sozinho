import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-lg text-[#0B1F3A]">
              #PartiuMorarSozinho
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <Link href="/contato" className="hover:text-gray-700 transition-colors">Contato</Link>
            <span className="hidden md:inline">&middot;</span>
            <Link href="/privacidade" className="hover:text-gray-700 transition-colors">Privacidade</Link>
            <span className="hidden md:inline">&middot;</span>
            <Link href="/termos" className="hover:text-gray-700 transition-colors">Termos</Link>
            <span className="hidden md:inline">&middot;</span>
            <Link href="/cookies" className="hover:text-gray-700 transition-colors">Cookies</Link>
            <span className="hidden md:inline">&middot;</span>
            <Link href="/editorial" className="hover:text-gray-700 transition-colors">Política editorial</Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-gray-500">
            <Link href="/blog" className="hover:text-gray-700 transition-colors">Conteúdos gratuitos</Link>
            <Link href="/acesso" className="hover:text-gray-700 transition-colors">Já comprei</Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            &copy; 2026 #PartiuMorarSozinho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
