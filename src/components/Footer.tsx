import {
  Smartphone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import logo from "../../public/kartak.png";

const Footer = () => {
  // const socialLinks = [
  //   { icon: Facebook, href: '#', label: 'Facebook' },
  //   { icon: Twitter, href: '#', label: 'Twitter' },
  //   { icon: Instagram, href: '#', label: 'Instagram' },
  //   { icon: Linkedin, href: '#', label: 'LinkedIn' }
  // ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                {/* <Smartphone className="w-6 h-6 text-kartak-dark" /> */}
                <img src={logo} alt="KARTAK Logo" className="w-12 h-12" />
              </div>
              <span className="text-3xl font-bold gradient-text">KARTAK</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Kartak is the future of digital networking. We provide
              high-quality smart NFC cards that help you share your information
              easily and elegantly.
            </p>

            {/* <div className="flex items-center space-x-4">
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
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-kartak-gold">
              Quick Links
            </h3>
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
            <h3 className="text-xl font-bold mb-6 text-kartak-gold">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+971507817504"
                className="flex items-center space-x-3 text-gray-300 hover:text-kartak-gold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+971 50 781 7504</span>
              </a>
              <a
                href="mailto:hamadamostafa970@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-kartak-gold transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>hamadamostafa970@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-kartak-gray">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Kartak. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-kartak-gold text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-kartak-gold text-sm transition-colors duration-300"
              >
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
