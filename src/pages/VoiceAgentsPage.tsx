import React, { useEffect } from 'react';
import { Phone, Headphones, Clock, Users, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function VoiceAgentsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const features = [
    {
      icon: <Phone className="w-8 h-8 text-accent" />,
      title: "Inbound Call Handling",
      description: "AI voice agents that answer calls, route inquiries, and handle common customer service requests with natural conversation."
    },
    {
      icon: <Headphones className="w-8 h-8 text-accent" />,
      title: "Outbound Sales Calls",
      description: "Intelligent voice agents that make prospecting calls, qualify leads, and schedule appointments with potential customers."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Appointment Scheduling",
      description: "Voice-enabled scheduling agents that handle appointment bookings, confirmations, and rescheduling through natural phone conversations."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Customer Support",
      description: "24/7 voice support agents that can resolve common issues, access customer data, and escalate complex problems to human agents."
    }
  ];

  const examples = [
    {
      title: "Medical Practice Phone System",
      description: "A dental practice implemented voice agents to handle appointment scheduling, insurance verification, and basic patient inquiries, freeing up staff for patient care.",
      metrics: ["70% of calls handled automatically", "90% appointment booking accuracy", "50% reduction in wait times"]
    },
    {
      title: "Real Estate Lead Qualification",
      description: "A real estate agency deployed voice agents to call leads from online forms, qualify their interest, and schedule property viewings with available agents.",
      metrics: ["300% increase in lead contact rate", "45% improvement in qualification accuracy", "60% faster response times"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-primary">
      <button 
        onClick={handleBackClick}
        className="fixed top-24 left-4 bg-primary-light p-2 rounded-full hover:bg-accent/20 transition-colors z-10"
      >
        <ArrowLeft className="w-6 h-6 text-accent" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl gradient-title-hero pb-2">
            Voice Agents
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered voice agents that handle phone calls, appointments, and customer interactions with natural conversation
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-accent-light/50 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative h-full p-8 bg-primary-light rounded-lg border border-accent/20">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="py-24">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light mix-blend-multiply"></div>
            </div>
            
            <div className="relative py-16 px-8 sm:px-16 lg:py-20">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Deploy Voice Agents?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how voice agents can enhance your customer interactions.
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