import React, { useEffect } from 'react';
import { Database, Users, TrendingUp, Zap, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function CRMAutomationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const automationFeatures = [
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Intelligent Data Entry",
      description: "Automatically capture and organize customer data from emails, calls, and interactions without manual input.",
      examples: ["Extract contact info from emails", "Update customer records automatically", "Sync data across platforms", "Clean and deduplicate records"]
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Lead Scoring & Qualification",
      description: "AI-powered lead scoring that identifies your best prospects and prioritizes follow-up activities.",
      examples: ["Score leads based on behavior", "Identify hot prospects", "Automate lead routing", "Predict conversion likelihood"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Sales Pipeline Management",
      description: "Automated pipeline updates, deal progression tracking, and intelligent forecasting for better sales management.",
      examples: ["Auto-update deal stages", "Forecast revenue accurately", "Track sales activities", "Generate pipeline reports"]
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Customer Journey Automation",
      description: "Personalized customer experiences through automated touchpoints and intelligent communication sequences.",
      examples: ["Personalized email sequences", "Automated follow-ups", "Customer onboarding flows", "Retention campaigns"]
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
            CRM Automation
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your customer relationship management with intelligent automation that captures, nurtures, and converts leads automatically
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          {automationFeatures.map((feature, index) => (
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
                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-accent mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {feature.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary-light rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">CRM Automation Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Accuracy</h3>
              <p className="text-gray-400">Eliminate manual data entry errors and ensure your CRM always has accurate, up-to-date information.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Increased Conversions</h3>
              <p className="text-gray-400">Never miss a follow-up opportunity with automated lead nurturing and intelligent timing.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Team Efficiency</h3>
              <p className="text-gray-400">Free your sales team from administrative tasks to focus on building relationships and closing deals.</p>
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
                  Ready to Automate Your CRM?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how CRM automation can transform your sales process.
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