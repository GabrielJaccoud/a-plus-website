const Footer = () => {
  // Define color palette based on logo blues
  const colors = {
    backgroundDarker: "#0B131F",// Midnight Blue (Footer Background)
    textMuted: "#8899AA",       // Light Grayish Blue
    accent1: "#C9A76D",       // Matte gold
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full py-8 px-6 md:px-10 lg:px-20 bg-[${colors.backgroundDarker}] text-[${colors.textMuted}]`}>
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>&copy; {currentYear} Grupo A+. Todos os direitos reservados.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className={`hover:text-[${colors.accent1}] transition-colors duration-200`}>Política de Privacidade</a>
          <a href="#" className={`hover:text-[${colors.accent1}] transition-colors duration-200`}>Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
