
import { Smartphone, Share2, Users, Settings, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Smart NFC Cards',
      description: 'Modern cards with NFC technology for quick and efficient sharing',
      features: ['Elegant and distinctive design', 'High quality and waterproof', 'Multiple colors available']
    },
    {
      icon: Share2,
      title: 'Quick Information Sharing',
      description: 'Share all your personal and professional information with just one tap',
      features: ['Contact information', 'Social media accounts', 'Websites and portfolios']
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Advanced system for managing and organizing contacts efficiently',
      features: ['Automatic saving', 'Smart categorization', 'Instant synchronization']
    },
    {
      icon: Settings,
      title: 'Full Customization',
      description: 'Ability to customize content and design according to your personal needs',
      features: ['Custom interface', 'Multiple colors', 'Editable content']
    },
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Advanced technology ensures speed and efficiency in data transfer',
      features: ['Instant response', 'Fast transfer', 'Reliable performance']
    },
    {
      icon: Shield,
      title: 'Security & Protection',
      description: 'High-level protection to ensure the security of your personal information',
      features: ['Strong encryption', 'Data protection', 'Guaranteed privacy']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-kartak-dark to-kartak-gray">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of services to meet all your digital networking needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`bg-kartak-gray border-kartak-light-gray hover-glow transition-all duration-500 animate-scale-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-kartak-gold to-yellow-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-kartak-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-kartak-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-kartak-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
