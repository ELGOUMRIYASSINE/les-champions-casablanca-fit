
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contactez-<span className="text-red-500">nous</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prêt à commencer votre transformation ? Contactez-nous dès maintenant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Réservez votre séance d'essai</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Prénom"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Nom"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              
              <Input 
                type="email"
                placeholder="Email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              
              <Input 
                type="tel"
                placeholder="Téléphone"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              
              <Textarea 
                placeholder="Message (optionnel)"
                rows={4}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 font-semibold">
                Réserver ma séance gratuite
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-red-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-2">Adresse</h4>
                  <p className="text-gray-300">
                    123 Boulevard Mohammed V<br />
                    Maarif, Casablanca 20000<br />
                    Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-red-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-2">Téléphone</h4>
                  <p className="text-gray-300">+212 5 22 XX XX XX</p>
                  <p className="text-gray-300">WhatsApp: +212 6 XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-red-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-2">Horaires d'ouverture</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Lundi - Vendredi: 6h00 - 23h00</p>
                    <p>Samedi: 7h00 - 22h00</p>
                    <p>Dimanche: 8h00 - 20h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-8">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold">
                Contactez-nous sur WhatsApp
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400">Carte Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
