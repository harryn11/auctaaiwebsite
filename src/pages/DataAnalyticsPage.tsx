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
    setTimeout(() => {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const analyticsFeatures = [
    {
      icon: <BarChart className="w-8 h-8 text-accent" />,
      title: "Predictive Analytics",
      description: "Forecast trends, customer behavior, and business outcomes using advanced machine learning algorithms.",
      examples: ["Sales forecasting", "Customer churn prediction", "Demand planning", "Risk assessment"]
    },
    {
      icon: <PieChart className="w-8 h-8 text-accent" />,
      title: "Real-time Dashboards",
      description: "Interactive dashboards that provide instant insights into your business performance and key metrics.",
      examples: ["Live sales metrics", "Customer behavior tracking", "Performance KPIs", "Operational insights"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically, saving time and ensuring consistent data analysis.",
      examples: ["Weekly performance reports", "Monthly trend analysis", "Customer insights", "ROI calculations"]
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights that drive strategic decision-making and growth.",
      examples: ["Market opportunity analysis", "Customer segmentation", "Product performance", "Competitive insights"]
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
            Data Analytics
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business data into actionable insights with AI-powered analytics and predictive intelligence
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          {analyticsFeatures.map((feature, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-8">Analytics Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-400">Make informed strategic decisions based on comprehensive data analysis and predictive insights.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Advantage</h3>
              <p className="text-gray-400">Stay ahead of market trends and customer needs with advanced predictive analytics.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Operational Efficiency</h3>
              <p className="text-gray-400">Identify bottlenecks, optimize processes, and improve overall business performance.</p>
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
                  Ready to Unlock Your Data's Potential?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how AI analytics can transform your business intelligence.
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