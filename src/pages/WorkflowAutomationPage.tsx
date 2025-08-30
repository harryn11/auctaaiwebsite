import React, { useEffect } from 'react';
import { Workflow, Zap, CheckCircle, Settings, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function WorkflowAutomationPage() {
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

  const workflowFeatures = [
    {
      icon: <Workflow className="w-8 h-8 text-accent" />,
      title: "Process Automation",
      description: "Automate complex multi-step business processes with intelligent decision-making and error handling.",
      examples: ["Invoice processing", "Employee onboarding", "Order fulfillment", "Approval workflows"]
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Task Orchestration",
      description: "Coordinate tasks across different systems and teams with intelligent scheduling and priority management.",
      examples: ["Project task assignment", "Resource allocation", "Deadline management", "Team coordination"]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Quality Assurance",
      description: "Automated quality checks and validation to ensure processes meet your standards and compliance requirements.",
      examples: ["Data validation", "Compliance checking", "Error detection", "Quality scoring"]
    },
    {
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: "System Integration",
      description: "Connect disparate systems and automate data flow between applications for seamless operations.",
      examples: ["CRM to accounting sync", "Inventory management", "Customer data updates", "Report generation"]
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
            Workflow Automation
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline your business operations with intelligent workflow automation that handles complex processes end-to-end
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          {workflowFeatures.map((feature, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-8">Workflow Automation Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Speed & Efficiency</h3>
              <p className="text-gray-400">Complete processes in minutes instead of hours, with consistent quality and zero human error.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reliability</h3>
              <p className="text-gray-400">Automated workflows run consistently without breaks, ensuring reliable business operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scalability</h3>
              <p className="text-gray-400">Handle increasing workloads without proportional increases in staff or operational costs.</p>
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
                  Ready to Automate Your Workflows?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how workflow automation can streamline your operations.
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