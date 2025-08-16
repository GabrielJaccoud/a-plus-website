import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // Define color palette based on logo blues
  const colors = {
    primary: "#F7F7F7",       // Off-white (Text)
    secondary: "#2C2C2C",     // Graphite gray (Keep for potential borders/elements)
    accent1: "#C9A76D",       // Matte gold (Accent)
    accent2: "#C9A76D",       // Matte gold (Accent)
    backgroundDark: "#101C2C", // Dark Navy Blue (Main Background)
    backgroundDarker: "#0B131F",// Midnight Blue (Secondary Background)
    textLight: "#F7F7F7",       // Off-white (Main Text)
    textDark: "#2C2C2C",       // Graphite gray (Not used much on dark bg)
    textMuted: "#8899AA",       // Light Grayish Blue (Muted Text)
  };

  return (
    <main className={`flex min-h-screen flex-col items-center bg-[${colors.backgroundDark}] text-[${colors.textLight}] font-inter`}>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url(\"/images/placeholder-hero.jpg\")" }}>
        <div className={`absolute inset-0 bg-black opacity-60`}></div>
        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-space-grotesk font-bold leading-tight mb-8 text-[${colors.textLight}]`}>
            Arquitetamos vidas,<br /> desenhamos futuros.<br /> A+ constrói mais que imóveis: constrói legados.
          </h1>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#projetos">
              <button className={`px-8 py-3 border border-[${colors.accent1}] text-[${colors.accent1}] uppercase text-xs tracking-widest font-sans hover:bg-[${colors.accent1}] hover:text-[${colors.backgroundDark}] transition duration-300`}>
                CONHEÇA NOSSOS PROJETOS
              </button>
            </Link>
            <Link href="#investidores">
              <button className={`px-8 py-3 border border-[${colors.accent1}] text-[${colors.accent1}] uppercase text-xs tracking-widest font-sans hover:bg-[${colors.accent1}] hover:text-[${colors.backgroundDark}] transition duration-300`}>
                INVISTA COM A GENTE
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quem Somos Section */}
      <div id="quem-somos" className={`w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDark}]`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-sm uppercase tracking-widest text-[${colors.accent1}] mb-4 font-sans`}>QUEM SOMOS</h2>
          <p className={`text-2xl md:text-3xl font-space-grotesk text-[${colors.textLight}] leading-relaxed mb-6`}>
            A+ é um ecossistema de inovação que atua nas áreas de construção civil, arquitetura, engenharia, banco de investimentos, impacto social e inteligência estratégica.
          </p>
          <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed mb-12`}>
            Mais do que erguer estruturas, criamos experiências de vida com alma, propósito e retorno real.
          </p>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent1}] mb-2`}>Nossa Missão</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>Inovar com responsabilidade e propósito.</p>
            </div>
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent1}] mb-2`}>Nossa Visão</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>Ser um ecossistema de referência na transformação do espaço urbano e social.</p>
            </div>
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent1}] mb-2`}>Nossos Valores</h3>
              <ul className={`list-none text-base font-inter text-[${colors.textMuted}] leading-relaxed space-y-1`}>
                <li>Inovação com alma</li>
                <li>Sustentabilidade real</li>
                <li>Propósito em cada obra</li>
                <li>Design com significado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Projetos Section */}
      <div id="projetos" className={`w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDarker}]`}>
         <div className="max-w-6xl mx-auto">
           <h2 className={`text-sm uppercase tracking-widest text-[${colors.accent1}] mb-8 font-sans`}>PROJETOS</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

             {/* Project Card 1: Jardim Guanabara */}
             <Link href="/projetos/jardim-guanabara">
               <div className={`bg-[${colors.backgroundDark}] group overflow-hidden rounded-lg shadow-lg h-full flex flex-col`}>
                 <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400 overflow-hidden rounded-t-lg relative">
                   <Image
                     src="/images/jardim-guanabara-placeholder.jpg"
                     alt="Jardim Guanabara"
                     fill
                     style={{objectFit:"cover"}}
                     className="transition-transform duration-300 group-hover:scale-110"
                   />
                 </div>
                 <div className="p-6 flex-grow">
                   <h3 className={`text-xl font-space-grotesk text-[${colors.textLight}] mb-2 uppercase group-hover:text-[${colors.accent1}] transition-colors duration-300`}>JARDIM GUANABARA</h3>
                   <p className={`text-sm font-inter text-[${colors.textMuted}] mb-1`}>Macaé - RJ</p>
                   <p className={`text-sm font-inter text-[${colors.textMuted}]`}>Oásis Urbano</p>
                 </div>
               </div>
             </Link>

             {/* Project Card 2: Vila A+ */}
             <Link href="/projetos/vila-a">
               <div className={`bg-[${colors.backgroundDark}] group overflow-hidden rounded-lg shadow-lg h-full flex flex-col`}>
                 <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400 overflow-hidden rounded-t-lg relative">
                   <Image
                     src="/images/vila-a-placeholder.jpg"
                     alt="Vila A+"
                     fill
                     style={{objectFit:"cover"}}
                     className="transition-transform duration-300 group-hover:scale-110"
                   />
                 </div>
                 <div className="p-6 flex-grow">
                   <h3 className={`text-xl font-space-grotesk text-[${colors.textLight}] mb-2 uppercase group-hover:text-[${colors.accent1}] transition-colors duration-300`}>VILA A+</h3>
                   <p className={`text-sm font-inter text-[${colors.textMuted}] mb-1`}>São Pedro da Aldeia - RJ</p>
                   <p className={`text-sm font-inter text-[${colors.textMuted}]`}>A primeira comunidade tilt-up com Impacto social do brasil.</p>
                 </div>
               </div>
             </Link>

           </div>
         </div>
      </div>

      {/* Investidores Section */}
      <div id="investidores" className={`w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDark}]`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-sm uppercase tracking-widest text-[${colors.accent1}] mb-8 font-sans`}>Investidores</h2>
          <div className="space-y-10">
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent1}] mb-3`}>Modelo de Negócio</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>
                Nosso modelo de negócio combina inovação construtiva com retorno financeiro sólido e impacto social positivo.
              </p>
            </div>
            <div>
              <Link href="#contato">
                 <button className={`px-8 py-3 border border-[${colors.accent1}] text-[${colors.accent1}] uppercase text-xs tracking-widest font-sans hover:bg-[${colors.accent1}] hover:text-[${colors.backgroundDark}] transition duration-300`}>
                   Falar com Especialista
                 </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contato Section */}
      <div id="contato" className={`w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDarker}]`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-sm uppercase tracking-widest text-[${colors.accent1}] mb-8 font-sans`}>Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent1}] mb-3`}>Fale Conosco</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed mb-4`}>
                Estamos prontos para atender você e responder todas as suas dúvidas.
              </p>
              <button className={`mt-6 px-6 py-3 bg-[${colors.accent1}] text-[${colors.textLight}] uppercase text-xs tracking-widest font-sans hover:bg-opacity-80 transition duration-300 flex items-center justify-center w-full md:w-auto`}>
                Falar no WhatsApp
              </button>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent1}] mb-3`}>Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Nome</label>
                  <input type="text" id="name" name="name" placeholder="Nome" className={`w-full p-3 bg-[${colors.backgroundDark}] border border-gray-700 rounded-md text-[${colors.textLight}] placeholder-[${colors.textMuted}] focus:outline-none focus:border-[${colors.accent1}]`} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email" className={`w-full p-3 bg-[${colors.backgroundDark}] border border-gray-700 rounded-md text-[${colors.textLight}] placeholder-[${colors.textMuted}] focus:outline-none focus:border-[${colors.accent1}]`} />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensagem</label>
                  <textarea id="message" name="message" rows={4} placeholder="Mensagem" className={`w-full p-3 bg-[${colors.backgroundDark}] border border-gray-700 rounded-md text-[${colors.textLight}] placeholder-[${colors.textMuted}] focus:outline-none focus:border-[${colors.accent1}]`}></textarea>
                </div>
                <button type="submit" className={`px-8 py-3 border border-[${colors.accent1}] text-[${colors.accent1}] uppercase text-xs tracking-widest font-sans hover:bg-[${colors.accent1}] hover:text-[${colors.backgroundDark}] transition duration-300 w-full`}>
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
