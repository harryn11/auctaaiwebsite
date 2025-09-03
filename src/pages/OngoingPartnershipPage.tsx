import React, { useEffect } from 'react';
import { Users, TrendingUp, Wrench, Target, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function OngoingPartnershipPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Performance Monitoring & Optimization",
      description: "Continuous monitoring of AI solution performance with regular optimization to ensure maximum ROI and efficiency."
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "Capability Expansion",
      description: "Strategic expansion of AI capabilities as your business grows, adding new features and integrations as needed."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Strategic Advisory Services",
      description: "Ongoing strategic guidance to help you navigate the evolving AI landscape and identify new opportunities."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Team Development & Training",
      description: "Continuous training and skill development for your team to keep pace with AI advancements and best practices."
    }
  ];

  return (
    <div className="pt-24">
      <button 
        onClick={handleBackClick}
        className="fixed top-24 left-4 bg-primary-light p-2 rounded-full hover:bg-accent/20 transition-colors z-10"
      >
        <ArrowLeft className="w-6 h-6 text-accent" />
      </button>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl gradient-title-hero pb-2">
            Ongoing Partnership
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Long-term strategic partnership to ensure your AI solutions continue delivering value and evolving with your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-accent-light/50 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative h-full p-8 bg-primary-light rounded-lg border border-accent/20">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-bold text-white ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary-light rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Partnership Benefits</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Continuous Value Delivery</h3>
                <p className="text-gray-400">Regular performance reviews and optimizations ensure your AI solutions continue delivering maximum value as your business evolves.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Strategic Growth Support</h3>
                <p className="text-gray-400">As your business grows, we help identify new AI opportunities and expand existing capabilities to support your scaling operations.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Future-Proofing</h3>
                <p className="text-gray-400">Stay ahead of AI advancements with regular updates, new feature integration, and strategic guidance on emerging technologies.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light mix-blend-multiply"></div>
            </div>
            
            <div className="relative py-16 px-8 sm:px-16 lg:py-20">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Partner With Us?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Start your AI transformation journey with our proven methodology.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        const element = document.getElementById('consultation');
                        if (element) {
                          const offset = 100; // Account for fixed navbar
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Book AI Consultation
                    <Rocket className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}