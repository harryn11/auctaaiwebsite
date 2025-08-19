import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleSectionNavigation = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-primary/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span 
                className="text-2xl font-bold tracking-wider cursor-pointer"
                onClick={handleHomeClick}
              >
                <span className="text-accent">AUCTA</span>
                <span className="text-white"> AI</span>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-accent transition-colors"
                onClick={handleHomeClick}
              >
                Home
              </Link>
              <button 
                className="text-gray-300 hover:text-accent transition-colors"
                onClick={() => handleSectionNavigation('services')}
              >
                Services
              </button>
              <button 
                className="text-gray-300 hover:text-accent transition-colors"
                onClick={() => handleSectionNavigation('faq')}
              >
                FAQ
              </button>
              <button 
                className="text-gray-300 hover:text-accent transition-colors"
                onClick={() => handleSectionNavigation('consultation')}
              >
                Consultation
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-accent transition-colors py-2"
              onClick={handleHomeClick}
            >
              Home
            </Link>
            <button 
              className="block text-gray-300 hover:text-accent transition-colors py-2"
              onClick={() => handleSectionNavigation('services')}
            >
              Services
            </button>
            <button 
              className="block text-gray-300 hover:text-accent transition-colors py-2"
              onClick={() => handleSectionNavigation('faq')}
            >
              FAQ
            </button>
            <button 
              className="block text-gray-300 hover:text-accent transition-colors py-2"
              onClick={() => handleSectionNavigation('consultation')}
            >
              Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}