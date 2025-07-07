
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ahmed Mahmoud',
      position: 'Business Development Manager',
      company: 'Advanced Technologies Inc.',
      rating: 5,
      text: 'Amazing experience with Kartak! Excellent quality and fast service. Connecting with clients has become much easier.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sarah Johnson',
      position: 'Graphic Designer',
      company: 'Creative Studio',
      rating: 5,
      text: 'Stunning card with modern and elegant design. It helped me a lot in showcasing my work to clients professionally.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c886a3b6?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Brown',
      position: 'Entrepreneur',
      company: 'Innovation Company Founder',
      rating: 5,
      text: 'Excellent investment! Saved me a lot of time and effort. The technology is modern and very easy to use.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      position: 'App Developer',
      company: 'Tech Solutions',
      rating: 5,
      text: 'Great product with high quality. Professional team and excellent technical support. I recommend everyone to try it.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-kartak-gray to-kartak-dark">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            What our clients say about their experience with Kartak smart cards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-kartak-dark border-kartak-light-gray hover-glow group animate-scale-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-kartak-gold" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-kartak-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-kartak-gold mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold group-hover:text-kartak-gold transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-kartak-gold text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Cards Produced' },
            { number: '50+', label: 'Trusted Companies' },
            { number: '24/7', label: 'Technical Support' }
          ].map((stat, index) => (
            <div key={index} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
