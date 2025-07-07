
import { ArrowDown, Smartphone, Wifi, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-kartak-gold/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-kartak-gold/30 rotate-12 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-kartak-gold/10 rotate-45 animate-pulse delay-1000"></div>
      </div>

      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-kartak-gold to-yellow-400 rounded-2xl flex items-center justify-center animate-glow">
              <Smartphone className="w-12 h-12 text-kartak-dark" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">KARTAK</span>
            <br />
            <span className="text-white">Smart Cards</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            The future of digital networking in one card
            <br />
            <span className="text-kartak-gold">Share your information with just one tap</span>
          </p>

          {/* Features Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12 animate-slide-in-left">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-kartak-gray rounded-full flex items-center justify-center hover-glow">
                <Wifi className="w-8 h-8 text-kartak-gold" />
              </div>
              <span className="text-sm text-gray-400">NFC</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-kartak-gray rounded-full flex items-center justify-center hover-glow">
                <Share2 className="w-8 h-8 text-kartak-gold" />
              </div>
              <span className="text-sm text-gray-400">Quick Share</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-kartak-gray rounded-full flex items-center justify-center hover-glow">
                <Smartphone className="w-8 h-8 text-kartak-gold" />
              </div>
              <span className="text-sm text-gray-400">Modern Design</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-in-right">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-gradient-to-r from-kartak-gold to-yellow-400 hover:from-yellow-400 hover:to-kartak-gold text-kartak-dark font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Discover Our Services
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-kartak-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
