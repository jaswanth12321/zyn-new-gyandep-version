import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with Zynlogic transformed our business. Their expertise in software development helped us streamline operations and improve customer experience.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
    avatar: "/src/images/sara.png",
    rating: 5
  },
  {
    id: 2,
    content: "The team at Zynlogic delivered our project on time and exceeded our expectations. Their communication and technical skills are outstanding.",
    author: "Michael Chen",
    position: "CTO, MobiConnect",
    avatar: "/src/images/Micheal.png",
    rating: 5
  },
  {
    id: 3,
    content: "We've been working with Zynlogic for over 3 years now, and they've consistently delivered high-quality solutions for our complex requirements.",
    author: "Emily Rodriguez",
    position: "Product Manager, CloudSys",
    avatar: "/src/images/Emily.png",
    rating: 5
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-purple-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
