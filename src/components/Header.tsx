import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  // Define color palette based on logo blues
  const colors = {
    backgroundDark: "#101C2C", // Dark Navy Blue
    textLight: "#F7F7F7",       // Off-white
    accent1: "#C9A76D",       // Matte gold
    textMuted: "#8899AA",       // Light Grayish Blue
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[${colors.backgroundDark}] bg-opacity-80 backdrop-blur-sm shadow-md`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/a-plus-logo.jpg"
                alt="A+ Group Logo"
                width={40}
                height={40}
                className="rounded-sm"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#quem-somos" className={`text-[${colors.textMuted}] hover:text-[${colors.accent1}] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>Quem Somos</Link>
              <Link href="#projetos" className={`text-[${colors.textMuted}] hover:text-[${colors.accent1}] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>Projetos</Link>
              <Link href="#investidores" className={`text-[${colors.textMuted}] hover:text-[${colors.accent1}] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>Investidores</Link>
              <Link href="#contato" className={`text-[${colors.textMuted}] hover:text-[${colors.accent1}] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>Contato</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
