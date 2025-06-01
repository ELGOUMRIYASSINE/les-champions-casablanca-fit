
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amine Bensaid',
      role: 'Membre depuis 2 ans',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      text: 'Les Champions Gym a complètement transformé ma vie. L\'équipe est formidable et les équipements sont au top. Je recommande vivement!'
    },
    {
      name: 'Fatima Zahra',
      role: 'Membre depuis 1 an',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      text: 'Ambiance exceptionnelle, coachs professionnels et résultats au rendez-vous. C\'est devenu ma deuxième maison!'
    },
    {
      name: 'Omar Rachid',
      role: 'Membre depuis 3 ans',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      text: 'Le meilleur gym de Casablanca sans hésitation. Équipements modernes, hygiène impeccable et staff très motivant.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ce que disent nos <span className="text-red-500">Champions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les témoignages de nos membres satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-700 rounded-lg p-8 text-center hover:bg-gray-600 transition-colors duration-300"
            >
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div>
                <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                <p className="text-red-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
