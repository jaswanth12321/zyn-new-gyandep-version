import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


const apps = [
  {
    title: 'Mobile App Design Trends',
    description: 'Discover the latest design trends in mobile application development.',
    images: ['/images/p1.jpg'],
    color: 'bg-purple-100',
    category: 'mobile'
  },
  {
    title: 'Web App Design Trends',
    description: 'Explore modern web application design patterns and best practices.',
    images: ['/images/webapp.jpg'],
    color: 'bg-blue-100',
    category: 'web'
  },
  {
    title: 'UI/UX Design Trends',
    description: 'Learn about user interface and experience design techniques.',
    images: ['/images/uiuxl.png'],
    color: 'bg-pink-100',
    category: 'ui-ux'
  },
  {
    title: 'AI Development',
    description: 'AI development involves creating intelligent systems that can learn, reason, and make decisions autonomously.',
    images: ['/images/AI.png'],
    color: 'bg-green-100',
    category: 'web'
  },
  {
    title: 'API Integration',
    description: 'API integration connects software applications to seamlessly share data and functionality.',
    images: ['/images/API.png'],
    color: 'bg-gradient-to-r from-yellow-50 via-rose-100 to-pink-50',
    category: 'web'
  }
];

const AppShowcaseSection = () => {
  const handleLearnMore = (category: string) => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
      // Set the category in the URL without navigation
      const url = new URL(window.location.href);
      url.searchParams.set('category', category);
      window.history.pushState({}, '', url.toString());
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', e.currentTarget.src);
    // Set a fallback image or hide the image
    e.currentTarget.style.display = 'none';
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="space-y-16">
          {apps.map((app, index) => (
            <div key={index} className={`rounded-3xl ${app.color} p-8 grid md:grid-cols-2 gap-8 items-center`}>
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold">{app.title}</h3>
                <p className="text-gray-700">{app.description}</p>
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                  onClick={() => handleLearnMore(app.category)}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="flex gap-8 items-center">
                  {app.images.map((img, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={img} 
                      alt={app.title}
                      onError={handleImageError}
                      className={`rounded-lg shadow-xl max-w-full ${
                        app.title === 'AI Development'
                          ? 'max-h-[300px] object-contain p-4'
                          : app.title === 'API Integration'
                          ? 'w-full max-h-[400px] object-contain p-4'
                          : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
