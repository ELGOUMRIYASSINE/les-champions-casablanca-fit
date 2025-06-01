
const Programs = () => {
  const programs = [
    {
      title: 'Musculation',
      description: 'Développez votre force et sculptez votre physique avec nos équipements de pointe',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Machines guidées', 'Poids libres', 'Coaching personnalisé']
    },
    {
      title: 'Cardio Training',
      description: 'Améliorez votre endurance et brûlez les calories efficacement',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Tapis de course', 'Vélos elliptiques', 'Rameurs']
    },
    {
      title: 'CrossFit',
      description: 'Entraînement fonctionnel intensif pour une forme physique complète',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['WOD variés', 'Coaching spécialisé', 'Esprit d\'équipe']
    },
    {
      title: 'Boxe',
      description: 'Défoulez-vous tout en apprenant les techniques de boxe',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Technique', 'Cardio intense', 'Self-défense']
    },
    {
      title: 'Cours Collectifs',
      description: 'Zumba, Yoga, Pilates et autres cours en groupe motivants',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Ambiance conviviale', 'Instructeurs qualifiés', 'Planning varié']
    },
    {
      title: 'Coaching Personnel',
      description: 'Suivi individualisé avec un coach dédié à vos objectifs',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Programme sur mesure', 'Suivi nutritionnel', 'Résultats garantis']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nos <span className="text-red-500">Programmes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos différents programmes adaptés à tous les niveaux et objectifs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{program.description}</p>
                
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
