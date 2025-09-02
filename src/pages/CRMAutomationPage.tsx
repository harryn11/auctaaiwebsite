import React, { useEffect } from 'react';
import { Database, Users, TrendingUp, Mail, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function CRMAutomationPage() {
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
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Lead Scoring & Qualification",
      description: "Automatically score and qualify leads based on behavior, demographics, and engagement patterns to prioritize sales efforts."
    },
    {
      icon: <Mail className="w-8 h-8 text-accent" />,
      title: "Automated Follow-ups",
      description: "Intelligent email sequences that adapt based on prospect responses and engagement levels, ensuring no lead falls through the cracks."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Customer Segmentation",
      description: "AI-powered customer segmentation that identifies patterns and creates targeted groups for personalized marketing campaigns."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Sales Forecasting",
      description: "Predictive analytics that forecast sales performance, identify trends, and provide insights for strategic decision-making."
    }
  ];

  const examples = [
    {
      title: "SaaS Company Lead Management",
      description: "A software company automated their lead qualification process, automatically scoring prospects and routing high-value leads to senior sales reps while nurturing others through automated sequences.",
      metrics: ["40% increase in qualified leads", "25% shorter sales cycle", "60% improvement in conversion rates"]
    },
    {
      title: "Real Estate CRM Optimization",
      description: "A real estate agency implemented AI-driven customer segmentation and automated follow-ups, resulting in better client relationships and increased property sales.",
      metrics: ["35% more repeat customers", "50% faster response times", "30% increase in referrals"]
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
            CRM Automation
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent customer relationship management that automates lead scoring, follow-ups, and sales processes
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
                  Ready to Automate Your CRM?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how CRM automation can transform your sales process.
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