
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            <span className="text-black">Zyn</span><span className="text-gray-800">logic</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
          <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
          <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">Portfolio</a>
          {/* <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a> */}
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={scrollToContact}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 absolute top-16 left-0 right-0 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMenu}>About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMenu}>Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMenu}>Contact</a>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white w-full"
              onClick={scrollToContact}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
