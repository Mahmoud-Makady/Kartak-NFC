
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+966 50 123 4567',
      link: 'tel:+966501234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@kartak.sa',
      link: 'mailto:info@kartak.sa'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Riyadh, Saudi Arabia',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-kartak-dark">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contact Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are here to serve you and answer all your questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-kartak-gray rounded-lg hover-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-kartak-gold to-yellow-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-kartak-dark" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-gray-300 group-hover:text-kartak-gold transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info Card */}
            <Card className="bg-gradient-to-br from-kartak-gray to-kartak-light-gray border-kartak-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-kartak-gold" />
                  <h4 className="text-white font-bold">Working Hours</h4>
                </div>
                <div className="text-gray-300 space-y-1">
                  <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p>Friday: Closed</p>
                  <p className="text-kartak-gold font-semibold mt-2">
                    24/7 Technical Support Available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-kartak-gray border-kartak-light-gray">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white font-medium mb-2 block">Name *</label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-kartak-dark border-kartak-light-gray text-white placeholder:text-gray-500 focus:border-kartak-gold"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-white font-medium mb-2 block">Phone *</label>
                      <Input
                        type="tel"
                        placeholder="+966 5X XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-kartak-dark border-kartak-light-gray text-white placeholder:text-gray-500 focus:border-kartak-gold"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-kartak-dark border-kartak-light-gray text-white placeholder:text-gray-500 focus:border-kartak-gold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-white font-medium mb-2 block">Message *</label>
                    <Textarea
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-kartak-dark border-kartak-light-gray text-white placeholder:text-gray-500 focus:border-kartak-gold resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-kartak-gold to-yellow-400 hover:from-yellow-400 hover:to-kartak-gold text-kartak-dark font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
