
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Transforme Ton Corps à{' '}
          <span className="text-red-500">Casablanca</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Rejoins la famille Les Champions Gym et découvre ton potentiel dans le meilleur centre de fitness de Casablanca
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Réserve ta séance d'essai
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            Découvrir nos programmes
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-red-500">500+</div>
            <div className="text-gray-300">Membres actifs</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-red-500">10+</div>
            <div className="text-gray-300">Coachs experts</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-red-500">5</div>
            <div className="text-gray-300">Années d'expérience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
