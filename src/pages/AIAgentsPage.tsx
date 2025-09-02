import React, { useEffect } from 'react';
import { Bot, MessageSquare, Calendar, ShoppingCart, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AIAgentsPage() {
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
      icon: <MessageSquare className="w-8 h-8 text-accent" />,
      title: "Customer Support Agents",
      description: "AI-powered chatbots that handle customer inquiries 24/7, escalating complex issues to human agents when needed."
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "Scheduling Assistants",
      description: "Intelligent agents that manage appointments, coordinate meetings, and optimize calendar scheduling across teams."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-accent" />,
      title: "Sales Qualification Agents",
      description: "AI agents that qualify leads, gather prospect information, and route qualified opportunities to sales teams."
    },
    {
      icon: <Bot className="w-8 h-8 text-accent" />,
      title: "Process Automation Agents",
      description: "Intelligent agents that monitor workflows, trigger actions based on conditions, and handle routine business processes."
    }
  ];

  const examples = [
    {
      title: "E-commerce Customer Service",
      description: "An online retailer implemented AI agents to handle order inquiries, returns, and product questions, reducing response time from hours to seconds while maintaining 95% customer satisfaction.",
      metrics: ["80% reduction in support tickets", "24/7 availability", "95% customer satisfaction"]
    },
    {
      title: "Healthcare Appointment Management",
      description: "A medical practice deployed scheduling agents to manage patient appointments, send reminders, and handle rescheduling requests automatically.",
      metrics: ["60% reduction in no-shows", "90% booking accuracy", "50% less admin time"]
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
            AI Agents
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent autonomous agents that handle tasks, make decisions, and interact with customers on your behalf
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
                  Ready to Deploy AI Agents?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how AI agents can transform your business operations.
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