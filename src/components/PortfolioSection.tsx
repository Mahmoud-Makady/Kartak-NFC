
import { ExternalLink, Users, Building, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: 'Golden Business Card',
      category: 'Business',
      description: 'Elegant and distinctive design for professionals and business people',
      icon: Building,
      image: '/lovable-uploads/e34b2aef-67b9-4382-bfbc-117d1c8ff76b.png',
      features: ['Company information', 'Contact details', 'Professional accounts']
    },
    {
      title: 'Personal Card for Creatives',
      category: 'Personal',
      description: 'Perfect for artists and creatives to showcase their work',
      icon: Heart,
      image: '/lovable-uploads/e34b2aef-67b9-4382-bfbc-117d1c8ff76b.png',
      features: ['Portfolio gallery', 'Creative accounts', 'Personal information']
    },
    {
      title: 'Events & Occasions Card',
      category: 'Events',
      description: 'Ideal solution for major events and conferences',
      icon: Users,
      image: '/lovable-uploads/e34b2aef-67b9-4382-bfbc-117d1c8ff76b.png',
      features: ['Event details', 'Schedules', 'Location maps']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-kartak-dark">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of our distinguished projects that we are proud to deliver to our clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className={`bg-kartak-gray border-kartak-light-gray hover-glow overflow-hidden group animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kartak-dark/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-kartak-gold rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-kartak-dark" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-kartak-gold font-medium bg-kartak-gold/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-kartak-gold transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-kartak-gold rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-kartak-gold text-kartak-gold hover:bg-kartak-gold hover:text-kartak-dark transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
