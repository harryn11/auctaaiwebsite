import React, { useEffect } from 'react';
import { Workflow, Zap, FileText, CheckCircle, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function WorkflowAutomationPage() {
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
      icon: <Workflow className="w-8 h-8 text-accent" />,
      title: "Process Automation",
      description: "Automate complex business workflows with intelligent decision-making, conditional logic, and seamless system integrations."
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "Document Processing",
      description: "Automatically extract, process, and route documents through approval workflows with AI-powered content analysis."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Approval Workflows",
      description: "Intelligent approval routing that automatically determines the right approvers based on content, amount, and business rules."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "System Integration",
      description: "Connect disparate systems and automate data flow between applications with intelligent error handling and validation."
    }
  ];

  const examples = [
    {
      title: "Invoice Processing Automation",
      description: "A mid-size company automated their entire invoice processing workflow, from receipt to payment approval, reducing processing time from days to hours.",
      metrics: ["85% reduction in processing time", "99% accuracy in data extraction", "60% cost savings in manual labor"]
    },
    {
      title: "HR Onboarding Workflow",
      description: "An organization streamlined their employee onboarding process with automated document collection, system provisioning, and training scheduling.",
      metrics: ["70% faster onboarding", "95% completion rate", "50% reduction in HR workload"]
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
            Workflow Automation
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline business processes with intelligent automation that handles complex workflows and decision-making
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

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {examples.map((example, index) => (
              <div key={index} className="bg-primary-light rounded-lg p-8">
                <h3 className="text-xl font-bold text-white mb-4">{example.title}</h3>
                <p className="text-gray-400 mb-6">{example.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-accent">Key Results:</h4>
                  {example.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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