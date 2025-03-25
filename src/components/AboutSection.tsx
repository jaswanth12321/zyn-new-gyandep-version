import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    "Industry-leading expertise",
    "Dedicated development teams",
    "Modern technology stack",
    "Agile development process",
    "Transparent communication",
    "Long-term partnership"
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="/images/aboutus.avif" 
            alt="Our Team" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
        
        <div className="space-y-6 order-1 md:order-2">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-2">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">We help businesses to develop software</h2>
          <p className="text-gray-600">
            We are a team of passionate developers, designers, and technology enthusiasts dedicated to creating exceptional software solutions that drive business growth and innovation.
          </p>
          
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* <Button className="btn-primary mt-4">
            Learn More About Us
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
