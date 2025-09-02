import React, { useEffect } from 'react';
import { Cog, Zap, Users, BarChart as ChartBar, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProcessAutomationPage() {
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
      icon: <Cog className="w-8 h-8 text-accent" />,
      title: "Custom AI Solution Development",
      description: "Tailored AI solutions built specifically for your business processes and requirements, ensuring perfect fit with your workflows."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "System Integration & Deployment",
      description: "Seamless integration of AI solutions into your existing systems with minimal disruption to ongoing operations."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Team Training & Knowledge Transfer",
      description: "Comprehensive training programs to ensure your team can effectively use, maintain, and expand AI capabilities."
    },
    {
      icon: <ChartBar className="w-8 h-8 text-accent" />,
      title: "Performance Monitoring & Optimization",
      description: "Ongoing monitoring and optimization to ensure AI solutions continue delivering value and improving over time."
    }
  ];

  const implementationTypes = [
    {
      title: "Workflow Automation",
      description: "Streamline complex business processes by automating sequential tasks and approval workflows with AI-powered decision making.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Intelligent Document Processing",
      description: "Automate the extraction, processing, and organization of data from various document formats using advanced AI.",
      image: "https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Smart Data Integration",
      description: "Connect different systems and automate data transfer with intelligent validation and error handling.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
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
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl gradient-title-hero pb-2">
            Implementation Services
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Custom AI solution development with comprehensive team training and knowledge transfer
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

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Implementation Solutions</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {implementationTypes.map((type, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                  <p className="mt-2 text-gray-300">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-primary-light rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Our Implementation Approach</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Strategic Foundation</h3>
                <p className="text-gray-400">We only begin implementation after completing our education and strategy phases, ensuring clear objectives and team buy-in.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Agile Development</h3>
                <p className="text-gray-400">We develop solutions iteratively with regular feedback loops, ensuring the final product meets your exact needs and expectations.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Knowledge Transfer</h3>
                <p className="text-gray-400">Comprehensive training and documentation ensure your team can maintain, optimize, and expand AI capabilities independently.</p>
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
                  Ready to Transform Your Business With AI?
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