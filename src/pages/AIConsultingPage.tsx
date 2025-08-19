import React, { useEffect } from 'react';
import { GraduationCap, Target, Users, TrendingUp, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AIConsultingPage() {
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
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Strategic Assessment & Roadmapping",
      description: "Comprehensive evaluation of your business to identify the most impactful AI opportunities aligned with your objectives and constraints."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Organisational Readiness Evaluation",
      description: "Assessment of your team's current capabilities, infrastructure, and readiness for AI transformation with actionable recommendations."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Leadership Education & Buy-in",
      description: "Executive workshops and training sessions to ensure leadership understands AI's realistic potential and strategic value."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "ROI Planning & Success Metrics",
      description: "Development of clear success metrics and ROI frameworks to measure the impact of your AI initiatives."
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
            AI Transformation Consulting
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic guidance for businesses ready to become AI-powered through our proven methodology
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
          <h2 className="text-3xl font-bold text-white mb-8">Our Consulting Process</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Discovery & Assessment</h3>
                <p className="text-gray-400">We begin by thoroughly understanding your business, its challenges, and objectives. Our team analyzes your current technological infrastructure and identifies realistic AI opportunities that align with your strategic goals.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Education & Strategy Development</h3>
                <p className="text-gray-400">We educate your leadership team on AI's realistic potential and limitations. Based on our findings, we create a comprehensive AI strategy tailored to your needs, including technology recommendations, implementation timelines, and ROI projections.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Implementation Planning</h3>
                <p className="text-gray-400">We develop detailed implementation plans with clear milestones, success metrics, and team responsibilities. Our approach ensures your team is prepared and bought-in before any technology deployment begins.</p>
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