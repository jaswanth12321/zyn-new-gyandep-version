import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const profiles = [
  {
    image: "/images/profiles/david.png",
    alt: "David",
    role: "CEO",
    company: "TechCorp Solutions"
  },
  {
    image: "/images/profiles/sarah.png",
    alt: "Sarah",
    role: "CTO",
    company: "InnovateX"
  },
  {
    image: "/images/profiles/michael.png",
    alt: "Michael",
    role: "Director",
    company: "Digital Dynamics"
  },
  {
    image: "/images/profiles/emily.png",
    alt: "Emily",
    role: "VP Engineering",
    company: "CloudTech Systems"
  }
];

const HeroSection = () => {
  return <section id="home" className="py-14 md:py-20 bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-4xl">
            Transforming Ideas into <span className="text-purple-600">Powerful Software</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl font-bold">Our team of experts craft tailored software solutions that perfectly fit your business needs.</p>
          <div className="flex gap-4 pt-4">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 rounded-md text-base transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-5 rounded-md text-base transition-all duration-300"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-6">
            <div className="flex -space-x-2">
              <img 
                src="/images/h1.jpeg" 
                alt="David" 
                className="h-10 w-10 rounded-full border-2 border-white shadow-sm relative z-40 bg-white"
              />
              <img 
                src="/images/h2.jpeg" 
                alt="Sarah" 
                className="h-10 w-10 rounded-full border-2 border-white shadow-sm relative z-30 bg-white"
              />
              <img 
                src="/images/h3.jpeg" 
                alt="Michael" 
                className="h-10 w-10 rounded-full border-2 border-white shadow-sm relative z-20 bg-white"
              />
              <img 
                src="/images/h4.jpeg" 
                alt="Emily" 
                className="h-10 w-10 rounded-full border-2 border-white shadow-sm relative z-10 bg-white"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                Trusted by <span className="text-purple-600 font-semibold">500+</span> companies
              </span>
              <span className="text-xs text-gray-500">Across 30+ countries</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img alt="Software development workspace" className="rounded-lg shadow-xl mx-auto" src="/lovable-uploads/d4fae9d3-e3e5-405c-a427-edf636947cad.png" />
        </div>
      </div>
    </section>;
};

export default HeroSection;
