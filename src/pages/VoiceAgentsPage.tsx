import React, { useEffect } from 'react';
import { Phone, Mic, Clock, Users, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function VoiceAgentsPage() {
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

  const voiceFeatures = [
    {
      icon: <Phone className="w-8 h-8 text-accent" />,
      title: "Inbound Call Handling",
      description: "AI-powered voice agents that answer calls, understand customer needs, and provide appropriate responses or routing.",
      examples: ["Answer customer inquiries", "Schedule appointments", "Take orders", "Provide business information"]
    },
    {
      icon: <Mic className="w-8 h-8 text-accent" />,
      title: "Outbound Call Automation",
      description: "Intelligent outbound calling for lead qualification, appointment setting, and customer follow-ups.",
      examples: ["Qualify sales leads", "Confirm appointments", "Follow up on quotes", "Conduct surveys"]
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "24/7 Phone Support",
      description: "Round-the-clock phone support that handles routine inquiries and escalates complex issues to human agents.",
      examples: ["After-hours support", "Emergency response", "Basic troubleshooting", "Information requests"]
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Multi-language Support",
      description: "Voice agents that can communicate in multiple languages to serve diverse customer bases effectively.",
      examples: ["English conversations", "Spanish support", "French assistance", "Custom language training"]
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
            Voice Agents
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered voice agents that handle phone calls with natural conversation, providing 24/7 customer service and sales support
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          {voiceFeatures.map((feature, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-8">Voice Agent Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Natural Conversations</h3>
              <p className="text-gray-400">Advanced speech recognition and natural language processing for human-like phone interactions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Seamless Integration</h3>
              <p className="text-gray-400">Integrates with your existing phone systems and CRM for unified customer communication.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Response</h3>
              <p className="text-gray-400">No more missed calls or long hold times - customers get immediate, intelligent responses.</p>
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
                  Ready for AI Voice Agents?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how voice agents can enhance your customer communication.
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