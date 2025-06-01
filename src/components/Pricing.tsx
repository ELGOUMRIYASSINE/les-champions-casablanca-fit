
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Découverte',
      price: '250',
      period: 'mois',
      description: 'Parfait pour commencer votre transformation',
      features: [
        'Accès à tous les équipements',
        'Vestiaires et douches',
        'Séance d\'orientation gratuite',
        'Accès 6j/7'
      ],
      popular: false
    },
    {
      name: 'Champion',
      price: '400',
      period: 'mois',
      description: 'Notre offre la plus populaire',
      features: [
        'Tout du plan Découverte',
        'Cours collectifs illimités',
        'Suivi personnalisé mensuel',
        'Accès 7j/7',
        'Invité gratuit 1x/mois'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: '600',
      period: 'mois',
      description: 'Pour les plus exigeants',
      features: [
        'Tout du plan Champion',
        '4 séances coaching personnel',
        'Plan nutritionnel personnalisé',
        'Accès prioritaire aux créneaux',
        'Parking privé'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nos <span className="text-red-500">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez l'abonnement qui correspond à vos besoins et votre budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-700 rounded-lg p-8 ${
                plan.popular ? 'ring-2 ring-red-500 scale-105' : ''
              } transition-all duration-300 hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Plus Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-red-500">{plan.price}</span>
                  <span className="text-gray-400 ml-2">DH/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-gray-600 hover:bg-gray-500 text-white'
                }`}
              >
                Choisir ce plan
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center bg-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Offres Spéciales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-600 p-6 rounded-lg">
              <h4 className="font-bold text-red-500 mb-2">Étudiants</h4>
              <p className="text-gray-300 text-sm mb-2">-20% sur tous les plans</p>
              <p className="text-xs text-gray-400">Sur présentation de la carte d'étudiant</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg">
              <h4 className="font-bold text-red-500 mb-2">1ère Semaine Gratuite</h4>
              <p className="text-gray-300 text-sm mb-2">Essayez avant de vous engager</p>
              <p className="text-xs text-gray-400">Nouveaux membres uniquement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
