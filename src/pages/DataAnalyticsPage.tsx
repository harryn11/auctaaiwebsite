import React, { useEffect } from 'react';
import { BarChart, PieChart, TrendingUp, Target, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function DataAnalyticsPage() {
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
      icon: <BarChart className="w-8 h-8 text-accent" />,
      title: "Real-time Dashboards",
      description: "Interactive dashboards that provide real-time insights into your business metrics, KPIs, and performance indicators."
    },
    {
      icon: <PieChart className="w-8 h-8 text-accent" />,
      title: "Predictive Analytics",
      description: "Advanced machine learning models that predict future trends, customer behavior, and business outcomes based on historical data."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Performance Optimization",
      description: "AI-driven analysis that identifies bottlenecks, inefficiencies, and opportunities for operational improvements."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Custom Reporting",
      description: "Automated report generation with AI-powered insights, recommendations, and actionable intelligence for decision-making."
    }
  ];

  const examples = [
    {
      title: "E-commerce Sales Analytics",
      description: "An online retailer implemented AI analytics to track customer behavior, predict purchasing patterns, and optimize inventory management across multiple channels.",
      metrics: ["25% increase in sales conversion", "40% reduction in inventory waste", "60% improvement in demand forecasting"]
    },
    {
      title: "Manufacturing Performance Monitoring",
      description: "A manufacturing company deployed AI analytics to monitor production efficiency, predict equipment maintenance needs, and optimize resource allocation.",
      metrics: ["30% reduction in downtime", "20% improvement in efficiency", "50% better maintenance planning"]
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
            Data Analytics
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Transform raw data into actionable insights with AI-powered analytics and predictive modeling
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
                  Ready to Unlock Your Data's Potential?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how AI analytics can drive your business decisions.
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