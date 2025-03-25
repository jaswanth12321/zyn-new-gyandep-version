
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone, Globe, Palette, Database, Shield } from 'lucide-react';

const ServiceCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="border border-gray-100 hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-purple-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software Development",
      description: "We build tailor-made software solutions designed specifically for your unique business needs."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description: "Responsive, high-performance websites and web applications that engage your audience."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging, and efficient user experiences."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Cloud Solutions",
      description: "Scalable, secure, and reliable cloud infrastructure and migration services."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security services and solutions."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            We provide end-to-end solutions for businesses looking to build innovative software products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
