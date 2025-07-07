import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Star,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+971 50 781 7504",
      link: "tel:+971507817504",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "hamadamostafa970@gmail.com",
      link: "mailto:hamadamostafa970@gmail.com",
    },
    {
      icon: () => <FontAwesomeIcon icon={faWhatsapp} size="2x" />,
      title: "WhatsApp Us",
      value: "+971 50 208 9718",
      link: "https://wa.me/971502089718",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted & Secure",
      description:
        "We follow high security standards to ensure customer privacy and data protection.",
    },
    {
      icon: Rocket,
      title: "Fast & Responsive",
      description:
        "We provide quick responses and technical support whenever you need us.",
    },
    {
      icon: Star,
      title: "Professional Service",
      description:
        "Our team is highly experienced and dedicated to delivering top-quality service.",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-kartak-dark">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you have a question, need support, or want to visit our
            office in Abu Dhabi, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-kartak-gray rounded-lg hover-glow transition-all duration-300 group"
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-kartak-gold to-yellow-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {typeof info.icon === "function" ? (
                      <div className="text-kartak-dark">{info.icon()}</div>
                    ) : (
                      <info.icon className="w-6 h-6 text-kartak-dark" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-kartak-gold transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location Info */}
            <Card className="bg-gradient-to-br from-kartak-gray to-kartak-light-gray border-kartak-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-kartak-gold" />
                  <h4 className="text-white font-bold">Our Location</h4>
                </div>
                <div className="text-gray-300 space-y-1 ps-10">
                  <p>Abu Dhabi, United Arab Emirates</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-white mb-8">
              Why Choose Us?
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-kartak-gray border border-kartak-gold/20 hover:shadow-lg transition duration-300"
                >
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-kartak-gold to-yellow-400 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-kartak-dark" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
