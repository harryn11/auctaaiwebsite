import React, { useEffect } from 'react';
import { TrendingUp, Users, Target, Zap, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AIAgentsPage() {
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
      title: "Performance Optimization & Monitoring",
      description: "Continuous monitoring and optimization of your AI solutions to ensure they deliver sustained value and improve over time."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Capability Expansion Planning",
      description: "Strategic planning for expanding your AI capabilities as your business grows and new opportunities emerge."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Strategic Advisory Services",
      description: "Ongoing strategic guidance to help you navigate the evolving AI landscape and maintain competitive advantage."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Team Development & Training",
      description: "Continuous education and skill development for your team to build internal AI expertise and capabilities."
    }
  ];

  const partnershipBenefits = [
    {
      title: "Long-term Success",
      points: [
        "Continuous optimization of AI solutions",
        "Regular performance reviews and improvements",
        "Adaptation to changing business needs",
        "Proactive identification of new opportunities"
      ]
    },
    {
      title: "Strategic Guidance",
      points: [
        "AI landscape updates and insights",
        "Technology roadmap planning",
        "Competitive advantage strategies",
        "Risk assessment and mitigation"
      ]
    },
    {
      title: "Capability Building",
      points: [
        "Internal team skill development",
        "Knowledge transfer programs",
        "Best practices implementation",
        "Independent operation enablement"
      ]
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
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-accent to-accent-light text-transparent bg-clip-text pb-2">
            Ongoing Partnership
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Long-term strategic partnership for sustained AI transformation and growth
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipBenefits.map((benefit, index) => (
            <div key={index} className="bg-primary-light rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">{benefit.title}</h3>
              <ul className="space-y-4">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center text-gray-300">
                    <Target className="w-5 h-5 text-accent mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary-light rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Partnership Approach</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Continuous Monitoring</h3>
                <p className="text-gray-400">We continuously monitor the performance of your AI solutions, identifying opportunities for optimization and improvement to ensure sustained value delivery.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Strategic Evolution</h3>
                <p className="text-gray-400">As your business grows and the AI landscape evolves, we help you adapt and expand your AI capabilities to maintain competitive advantage.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Independence Building</h3>
                <p className="text-gray-400">Our ultimate goal is to build your internal capabilities so you can eventually manage and expand your AI initiatives independently.</p>
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
                    to="/#consultation"
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