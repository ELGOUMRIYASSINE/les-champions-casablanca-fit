
const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Les Champions <span className="text-red-500">Gym</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Le centre de fitness de référence à Casablanca. Transformez votre corps, 
              dépassez vos limites et rejoignez la famille des champions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">À Propos</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-red-500 transition-colors">Programmes</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-red-500 transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Boulevard Mohammed V</p>
              <p>Maarif, Casablanca</p>
              <p>+212 5 22 XX XX XX</p>
              <p>info@leschampionsgym.ma</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Les Champions Gym. Tous droits réservés. | Casablanca, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
