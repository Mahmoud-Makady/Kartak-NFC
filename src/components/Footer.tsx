
import { Smartphone, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-kartak-dark to-black text-white">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-kartak-gold to-yellow-400 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-kartak-dark" />
              </div>
              <span className="text-3xl font-bold gradient-text">KARTAK</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Kartak is the future of digital networking. We provide high-quality smart NFC cards 
              that help you share your information easily and elegantly.
            </p>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-kartak-gray rounded-full flex items-center justify-center hover:bg-kartak-gold hover:text-kartak-dark transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-kartak-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-kartak-gold transition-colors duration-300 text-left block w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-kartak-gold">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+966501234567"
                className="flex items-center space-x-3 text-gray-300 hover:text-kartak-gold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+966 50 123 4567</span>
              </a>
              <a
                href="mailto:info@kartak.sa"
                className="flex items-center space-x-3 text-gray-300 hover:text-kartak-gold transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>info@kartak.sa</span>
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-kartak-gray/50 rounded-lg">
              <h4 className="text-kartak-gold font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-3">
                Subscribe to get the latest news and offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-kartak-dark border border-kartak-light-gray rounded-l-lg text-white text-sm focus:outline-none focus:border-kartak-gold"
                />
                <button className="px-4 py-2 bg-kartak-gold text-kartak-dark rounded-r-lg hover:bg-yellow-400 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-kartak-gray">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 Kartak. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-kartak-gold text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-kartak-gold text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
