import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import khaledImg from "../assets/khaled.png";
import alyaaImg from "../assets/alyaa.png";
import mahmoudImg from "../assets/mahmoud.jpg";
import ahmedImg from "../assets/ahmed.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed Mahmoud",
      position: "Business Development Manager",
      company: "Advanced Technologies Inc.",
      rating: 5,
      text: "Amazing experience with Kartak! Excellent quality and fast service. Connecting with clients has become much easier.",
      avatar: ahmedImg,
    },
    {
      name: "Khaled Al Nahyan",
      position: "Marketing Executive",
      company: "Emirates Media Hub",
      rating: 4,
      text: "A sleek and modern card design that truly impressed my clients. It made presenting my work much more professional and impactful.",
      avatar: khaledImg,
    },
    {
      name: "Mahmoud Makady",
      position: "Front-End Developer",
      company: "Astral-Code",
      rating: 5,
      text: "Excellent investment! Saved me a lot of time and effort. The technology is modern and very easy to use.",
      avatar: mahmoudImg,
    },
    {
      name: "Alya Al Mansoori",
      position: "HR Specialist",
      company: "Emirates Business Solutions",
      rating: 5,
      text: "Excellent service and a highly professional team. The process was smooth, and the support was prompt and effective. I highly recommend it.",
      avatar: alyaaImg,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-kartak-gray to-kartak-dark"
    >
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
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-kartak-gold" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-kartak-gold fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

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

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "80+", label: "Happy Clients" },
            { number: "100+", label: "Cards Produced" },
            { number: "20+", label: "Trusted Companies" },
            { number: "24/7", label: "Technical Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
