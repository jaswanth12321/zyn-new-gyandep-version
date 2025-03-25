import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories?: string[];
  tags: string[];
  link: string;
  buttonText?: string;
}

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'ui-ux', label: 'UI/UX Design' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'dashboard', label: 'Dashboards' }
];

const projects: Project[] = [
  // Web Development Projects
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern online shopping experience featuring Health & Beauty, Gadgets & Electronics, Pet Essentials, and Home Essentials.',
    image: '/src/images/lp/lp1.jpg',
    categories: ['Web Development', 'E-commerce'],
    tags: ['web', 'ecommerce'],
    link: '#',
    buttonText: 'View Details'
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'Modern and responsive corporate website with advanced features and smooth animations.',
    image: '/src/images/lp/lp2.jpg',
    categories: ['Web Development'],
    tags: ['web'],
    link: '#',
    buttonText: 'View Project'
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A full-featured blog platform with content management system and user authentication.',
    image: '/src/images/lp/lp3.jpg',
    categories: ['Web Development'],
    tags: ['web'],
    link: '#',
    buttonText: 'Explore'
  },
  // Mobile App Projects
  {
    id: 4,
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts and nutrition.',
    image: '/src/images/lp/lp4.jpg',
    categories: ['Mobile App Development', 'UI/UX Design'],
    tags: ['mobile', 'ui-ux'],
    link: '#',
    buttonText: 'Learn more'
  },
  {
    id: 5,
    title: 'Food Delivery App',
    description: 'User-friendly food delivery application with real-time tracking.',
    image: '/src/images/lp/lp5.jpg',
    categories: ['Mobile App Development'],
    tags: ['mobile'],
    link: '#',
    buttonText: 'View App'
  },
  {
    id: 6,
    title: 'Social Media App',
    description: 'Engaging social media platform for connecting people worldwide.',
    image: '/src/images/lp/lp6.jpg',
    categories: ['Mobile App Development'],
    tags: ['mobile'],
    link: '#',
    buttonText: 'Explore'
  },
  // UI/UX Design Projects
  {
    id: 7,
    title: 'Banking App UI',
    description: 'Modern and intuitive banking application interface design.',
    image: '/src/images/lp/lp7.jpg',
    categories: ['UI/UX Design'],
    tags: ['ui-ux'],
    link: '#',
    buttonText: 'View Design'
  },
  {
    id: 8,
    title: 'E-learning Platform UI',
    description: 'User-friendly interface design for online learning platform.',
    image: '/src/images/lp/lp8.jpg',
    categories: ['UI/UX Design'],
    tags: ['ui-ux'],
    link: '#',
    buttonText: 'See Design'
  },
  // E-commerce Projects
  {
    id: 9,
    title: 'Fashion Store',
    description: 'Complete e-commerce solution for fashion retail.',
    image: '/src/images/lp/lp24.jpg',
    categories: ['E-commerce'],
    tags: ['ecommerce'],
    link: '#',
    buttonText: 'Visit Store'
  },
  {
    id: 10,
    title: 'Tech Gadgets Shop',
    description: 'Online store for electronic gadgets and accessories.',
    image: '/src/images/lp/lp10.jpg',
    categories: ['E-commerce'],
    tags: ['ecommerce'],
    link: '#',
    buttonText: 'Shop Now'
  },
  // Dashboard Projects
  {
    id: 11,
    title: 'Financial Dashboard',
    description: 'Analytics platform for monitoring financial performance.',
    image: '/src/images/lp/lp11.jpg',
    categories: ['Dashboards'],
    tags: ['dashboard'],
    link: '#',
    buttonText: 'View Dashboard'
  },
  {
    id: 12,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard for business insights.',
    image: '/src/images/lp/lp12.jpg',
    categories: ['Dashboards'],
    tags: ['dashboard'],
    link: '#',
    buttonText: 'Explore'
  },
  // Additional Projects
  {
    id: 13,
    title: 'Project Management Tool',
    description: 'Web-based project management solution with team collaboration.',
    image: '/src/images/lp/lp13.jpg',
    categories: ['Web Development'],
    tags: ['web'],
    link: '#',
    buttonText: 'Learn More'
  },
  {
    id: 14,
    title: 'Travel App',
    description: 'Mobile application for travel planning and booking.',
    image: '/src/images/lp/lp14.jpg',
    categories: ['Mobile App Development'],
    tags: ['mobile'],
    link: '#',
    buttonText: 'Explore'
  },
  {
    id: 15,
    title: 'Restaurant UI Design',
    description: 'Modern UI design for restaurant booking application.',
    image: '/src/images/lp/lp15.jpg',
    categories: ['UI/UX Design'],
    tags: ['ui-ux'],
    link: '#',
    buttonText: 'View Design'
  },
  {
    id: 16,
    title: 'Sports Equipment Store',
    description: 'E-commerce platform for sports equipment and accessories.',
    image: '/src/images/lp/lp16.jpg',
    categories: ['E-commerce'],
    tags: ['ecommerce'],
    link: '#',
    buttonText: 'Shop Now'
  },
  {
    id: 17,
    title: 'HR Dashboard',
    description: 'Human resources management dashboard with employee analytics.',
    image: '/src/images/lp/lp17.jpg',
    categories: ['Dashboards'],
    tags: ['dashboard'],
    link: '#',
    buttonText: 'View Dashboard'
  },
  {
    id: 18,
    title: 'Real Estate Platform',
    description: 'Web platform for property listing and management.',
    image: '/src/images/lp/lp18.jpg',
    categories: ['Web Development'],
    tags: ['web'],
    link: '#',
    buttonText: 'Explore'
  },
  {
    id: 19,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts and fitness goals.',
    image: '/src/images/lp/lp19.jpg',
    categories: ['Mobile App Development'],
    tags: ['mobile'],
    link: '#',
    buttonText: 'Learn More'
  },
  {
    id: 20,
    title: 'Healthcare Dashboard',
    description: 'Healthcare analytics and patient management dashboard.',
    image: '/src/images/lp/lp20.jpg',
    categories: ['Dashboards'],
    tags: ['dashboard'],
    link: '#',
    buttonText: 'View Dashboard'
  },
  {
    id: 21,
    title: 'Gaming Store',
    description: 'E-commerce platform for gaming equipment and accessories.',
    image: '/src/images/lp/lp21.jpg',
    categories: ['E-commerce'],
    tags: ['ecommerce'],
    link: '#',
    buttonText: 'Shop Now'
  },
  {
    id: 22,
    title: 'Banking Dashboard',
    description: 'Financial services dashboard with transaction analytics.',
    image: '/src/images/lp/lp22.jpg',
    categories: ['Dashboards'],
    tags: ['dashboard'],
    link: '#',
    buttonText: 'View Dashboard'
  },
  {
    id: 23,
    title: 'Educational Platform',
    description: 'Web-based learning management system.',
    image: '/src/images/lp/lp23.jpg',
    categories: ['Web Development'],
    tags: ['web'],
    link: '#',
    buttonText: 'Explore'
  }
];

const PortfolioSection = () => {
  const [searchParams] = useSearchParams();
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);
  
  useEffect(() => {
    // Get category from URL parameter
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategories([categoryParam]);
      setShowAll(false);
    } else {
      setShowAll(true);
      setActiveCategories([]);
    }
  }, [searchParams]);

  const filteredProjects = showAll 
    ? projects 
    : projects.filter(project => project.tags.some(tag => activeCategories.includes(tag)));

  const displayedProjects = filteredProjects.slice(0, displayCount);
  const hasMoreProjects = displayCount < filteredProjects.length;

  const loadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  return (
    <section id="portfolio" className="py-6 md:py-12 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-3">Our Latest Projects</h2>
          <p className="text-gray-600 mb-6">
            Explore our recent work and see how we've helped businesses achieve their goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => {
                  if (category.id === 'all') {
                    setShowAll(true);
                    setActiveCategories([]);
                    setDisplayCount(6);
                  } else {
                    setShowAll(false);
                    setActiveCategories([category.id]);
                    setDisplayCount(6);
                  }
                }}
                variant={showAll || activeCategories.includes(category.id) ? "default" : "outline"}
                className={`rounded-full px-5 py-1.5 text-sm ${
                  showAll || activeCategories.includes(category.id) 
                    ? "bg-purple-600 hover:bg-purple-700 text-white" 
                    : "border-purple-600 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories?.map((cat, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-purple-100 text-purple-600 px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  {project.buttonText || 'Learn more'} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="text-center mt-8">
            <Button
              onClick={loadMore}
              variant="outline"
              className="rounded-full px-6 py-2 text-purple-600 border-purple-600 hover:bg-purple-50"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
