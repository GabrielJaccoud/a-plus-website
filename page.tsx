import Image from "next/image";
import Link from "next/link"; // Import Link for internal navigation

// TODO: Define fonts in layout or globals.css based on chosen fonts (Space Grotesk/Monument Extended, Inter/Neue Haas Grotesk)

export default function Home() {
  // Define color palette from pasted_content.txt
  const colors = {
    primary: "#F7F7F7", // Off-white
    secondary: "#2C2C2C", // Graphite gray
    accent1: "#3C5C57", // Petrol green
    accent2: "#C9A76D", // Matte gold
    backgroundDark: "#1a1a1a", // Dark background similar to reference
    backgroundDarker: "#111111", // Slightly different dark bg for sections
    textLight: "#F7F7F7",
    textDark: "#2C2C2C",
    textMuted: "#a0aec0", // Gray for less important text
  };

  return (
    // Use template literals for Tailwind JIT mode with dynamic colors
    <main className={`flex min-h-screen flex-col items-center bg-[${colors.backgroundDark}] text-[${colors.textLight}] font-inter`}> {/* Use font variable name */} 
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url(\"/images/placeholder-hero.jpg\")" }}> {/* Placeholder image, replace with video later */}
        <div className={`absolute inset-0 bg-black opacity-60`}></div> {/* Darker Overlay */}
        <div className="relative z-10 px-4 max-w-4xl">
          {/* Apply Space Grotesk font variable */} 
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-space-grotesk font-bold leading-tight mb-8 text-[${colors.textLight}]`}>
            Arquitetamos vidas,<br /> desenhamos futuros.<br /> A+ constrói mais que imóveis: constrói legados.
          </h1>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#projetos">
              <button className={`px-8 py-3 border border-[${colors.accent2}] text-[${colors.accent2}] uppercase text-xs tracking-widest font-sans hover:bg-[${colors.accent2}] hover:text-[${colors.backgroundDark}] transition duration-300`}>
                CONHEÇA NOSSOS PROJETOS
              </button>
            </Link>
            <Link href="#investidores">
              <button className={`px-8 py-3 border border-[${colors.accent2}] text-[${colors.accent2}] uppercase text-xs tracking-widest font-sans hover:bg-[${colors.accent2}] hover:text-[${colors.backgroundDark}] transition duration-300`}>
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
          
          {/* Founder Story Placeholder */}
          <div className="mb-12">
            <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>História do Fundador</h3>
            <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>
              [Texto inspirador contando a trajetória do fundador... Placeholder]
            </p>
          </div>

          {/* Timeline Placeholder */}
          <div className="mb-12">
             <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>Linha do Tempo</h3>
             <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>
               [Visual em scroll horizontal com os marcos dos empreendimentos... Placeholder]
             </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-2`}>Nossa Missão</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>Inovar com responsabilidade e propósito.</p>
            </div>
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-2`}>Nossa Visão</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>Ser um ecossistema de referência na transformação do espaço urbano e social.</p>
            </div>
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-2`}>Nossos Valores</h3>
              <ul className={`list-none text-base font-inter text-[${colors.textMuted}] leading-relaxed space-y-1`}>
                <li>Inovação com alma</li>
                <li>Sustentabilidade real</li>
                <li>Propósito em cada obra</li>
                <li>Design com significado</li>
              </ul>
            </div>
          </div>

          {/* Team Placeholder */}
          <div>
            <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>Equipe</h3>
            <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>
              [Fotos p&b com nomes e cargos... Placeholder]
            </p>
          </div>

        </div>
      </div>

      {/* Projetos Section */}
      <div id="projetos" className={`w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDarker}]`}>
         <div className="max-w-6xl mx-auto">
           <h2 className={`text-sm uppercase tracking-widest text-[${colors.accent1}] mb-8 font-sans`}>PROJETOS</h2>
           {/* TODO: Add Filters here */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

             {/* Project Card 1: Jardim Guanabara */}
             <div className={`bg-[${colors.backgroundDark}] group overflow-hidden rounded-lg shadow-lg`}>
               <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400 overflow-hidden rounded-t-lg">
                 <Image 
                   src="/images/jardim-guanabara-placeholder.jpg" 
                   alt="Jardim Guanabara" 
                   width={600} 
                   height={400} 
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               </div>
               <div className="p-6">
                 <h3 className={`text-xl font-space-grotesk text-[${colors.textLight}] mb-2 uppercase`}>JARDIM GUANABARA</h3>
                 <p className={`text-sm font-inter text-[${colors.textMuted}] mb-1`}>Macaé - RJ</p>
                 <p className={`text-sm font-inter text-gray-500`}>Oásis Urbano</p>
                 {/* TODO: Add link to project page */}
               </div>
             </div>

             {/* Project Card 2: Vila A+ */}
             <div className={`bg-[${colors.backgroundDark}] group overflow-hidden rounded-lg shadow-lg`}>
               <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400 overflow-hidden rounded-t-lg">
                 <Image 
                   src="/images/vila-a-placeholder.jpg" 
                   alt="Vila A+" 
                   width={600} 
                   height={400} 
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
               </div>
               <div className="p-6">
                 <h3 className={`text-xl font-space-grotesk text-[${colors.textLight}] mb-2 uppercase`}>VILA A+</h3>
                 <p className={`text-sm font-inter text-[${colors.textMuted}] mb-1`}>São Pedro da Aldeia - RJ</p>
                 <p className={`text-sm font-inter text-gray-500`}>A primeira comunidade tilt-up com Impacto social do brasil.</p>
                 {/* TODO: Add link to project page */}
               </div>
             </div>

             {/* TODO: Add more project cards dynamically later */}
           </div>
         </div>
      </div>

      {/* Investidores Section */}
      <div id="investidores" className={`w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDark}]`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-sm uppercase tracking-widest text-[${colors.accent1}] mb-8 font-sans`}>Investidores</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>Modelo de Negócio</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>
                [Apresentação do modelo de negócio: Originação, Tilt-up, ROI estimado... Placeholder]
              </p>
            </div>
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>Simulador de Investimento</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>
                [Simulador simples... Placeholder]
              </p>
            </div>
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>FAQ (Perguntas Frequentes)</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed`}>
                [Dúvidas comuns sobre investimento... Placeholder]
              </p>
            </div>
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>Entre em Contato</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed mb-4`}>
                Tem interesse em investir conosco? Fale com um especialista.
              </p>
              <Link href="#contato">
                 <button className={`px-8 py-3 border border-[${colors.accent2}] text-[${colors.accent2}] uppercase text-xs tracking-widest font-sans hover:bg-[${colors.accent2}] hover:text-[${colors.backgroundDark}] transition duration-300`}>
                   Falar com Especialista
                 </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className={`w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDarker}]`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-sm uppercase tracking-widest text-[${colors.accent1}] mb-8 font-sans`}>Blog / Conteúdos</h2>
          {/* TODO: Add Categories/Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder Article Card 1 */}
            <div className={`bg-[${colors.backgroundDark}] rounded-lg shadow-lg p-6`}>
              <h3 className={`text-lg font-space-grotesk text-[${colors.textLight}] mb-2`}>Inovação Imobiliária</h3>
              <p className={`text-sm font-inter text-[${colors.textMuted}] mb-4`}>Placeholder para resumo do artigo...</p>
              <Link href="#" className={`text-sm font-sans text-[${colors.accent2}] hover:underline`}>Leia mais</Link>
            </div>
            {/* Placeholder Article Card 2 */}
            <div className={`bg-[${colors.backgroundDark}] rounded-lg shadow-lg p-6`}>
              <h3 className={`text-lg font-space-grotesk text-[${colors.textLight}] mb-2`}>Construção Inteligente (Tilt-Up)</h3>
              <p className={`text-sm font-inter text-[${colors.textMuted}] mb-4`}>Placeholder para resumo do artigo...</p>
              <Link href="#" className={`text-sm font-sans text-[${colors.accent2}] hover:underline`}>Leia mais</Link>
            </div>
            {/* Placeholder Article Card 3 */}
            <div className={`bg-[${colors.backgroundDark}] rounded-lg shadow-lg p-6`}>
              <h3 className={`text-lg font-space-grotesk text-[${colors.textLight}] mb-2`}>ESG e Propósito</h3>
              <p className={`text-sm font-inter text-[${colors.textMuted}] mb-4`}>Placeholder para resumo do artigo...</p>
              <Link href="#" className={`text-sm font-sans text-[${colors.accent2}] hover:underline`}>Leia mais</Link>
            </div>
          </div>
          {/* TODO: Implement dynamic loading/pagination */}
        </div>
      </div>

      {/* Contato Section */}
      <div id="contato" className={`w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDark}]`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-sm uppercase tracking-widest text-[${colors.accent1}] mb-8 font-sans`}>Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info & Map Placeholder */}
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>Fale Conosco</h3>
              <p className={`text-base font-inter text-[${colors.textMuted}] leading-relaxed mb-4`}>
                Endereço: [Endereço Completo Placeholder]<br />
                Telefone: [Telefone Placeholder]<br />
                Email: [Email Placeholder]
              </p>
              {/* TODO: Add interactive map */}
              <div className={`w-full h-64 bg-[${colors.secondary}] rounded-lg flex items-center justify-center text-[${colors.textMuted}]`}>
                [Mapa Interativo Placeholder]
              </div>
              {/* TODO: Add WhatsApp integration */}
               <button className={`mt-6 px-6 py-3 bg-[${colors.accent1}] text-[${colors.textLight}] uppercase text-xs tracking-widest font-sans hover:bg-opacity-80 transition duration-300 flex items-center justify-center w-full md:w-auto`}>
                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.032 3.922a8.384 8.384 0 00-11.856 0 8.384 8.384 0 000 11.856L4.144 17.81l1.414 1.414 1.032-1.032a8.381 8.381 0 0010.824-10.824L16.382 6.336l-1.414-1.414 2.064-2.064zm-1.414 10.442a6.384 6.384 0 01-9.028 0 6.384 6.384 0 010-9.028l.707-.707 9.028 9.028-.707.707zM10 18a8 8 0 100-16 8 8 0 000 16z"/></svg> {/* Placeholder Icon */} 
                 Falar no WhatsApp
               </button>
            </div>

            {/* Contact Form Placeholder */}
            <div>
              <h3 className={`text-lg font-space-grotesk text-[${colors.accent2}] mb-3`}>Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Nome</label>
                  <input type="text" id="name" name="name" placeholder="Nome" className={`w-full p-3 bg-[${colors.secondary}] border border-gray-700 rounded-md text-[${colors.textLight}] placeholder-[${colors.textMuted}] focus:outline-none focus:border-[${colors.accent2}]`} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email" className={`w-full p-3 bg-[${colors.secondary}] border border-gray-700 rounded-md text-[${colors.textLight}] placeholder-[${colors.textMuted}] focus:outline-none focus:border-[${colors.accent2}]`} />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensagem</label>
                  <textarea id="message" name="message" rows={4} placeholder="Mensagem" className={`w-full p-3 bg-[${colors.secondary}] border border-gray-700 rounded-md text-[${colors.textLight}] placeholder-[${colors.textMuted}] focus:outline-none focus:border-[${colors.accent2}]`}></textarea>
                </div>
                <button type="submit" className={`px-8 py-3 border border-[${colors.accent2}] text-[${colors.accent2}] uppercase text-xs tracking-widest font-sans hover:bg-[${colors.accent2}] hover:text-[${colors.backgroundDark}] transition duration-300 w-full`}>
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

