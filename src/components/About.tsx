
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            À Propos de <span className="text-red-500">Les Champions Gym</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Le centre de fitness de référence à Casablanca depuis 2019
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Gym interior"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Notre Mission</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Chez Les Champions Gym, nous croyons que chaque personne mérite d'atteindre ses objectifs de fitness. 
              Situé au cœur de Casablanca, notre centre offre un environnement motivant et professionnel pour 
              transformer votre corps et votre esprit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-red-500 mb-2">Équipements Modernes</h4>
                <p className="text-gray-300 text-sm">
                  Machines dernière génération et équipements de qualité professionnelle
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-red-500 mb-2">Coachs Certifiés</h4>
                <p className="text-gray-300 text-sm">
                  Équipe de professionnels diplômés pour vous accompagner
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-red-500 mb-2">Horaires Flexibles</h4>
                <p className="text-gray-300 text-sm">
                  Ouvert 7j/7 avec des créneaux adaptés à votre emploi du temps
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-red-500 mb-2">Communauté</h4>
                <p className="text-gray-300 text-sm">
                  Rejoignez une famille de passionnés de fitness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
