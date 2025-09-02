import React, { useEffect } from 'react';
import { Brain, TrendingUp, Target, Zap, ArrowLeft, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function PredictiveAnalyticsPage() {
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
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: "Demand Forecasting",
      description: "Predict future demand patterns using historical data, market trends, and external factors to optimize inventory and resource planning."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Customer Behavior Prediction",
      description: "Anticipate customer actions, preferences, and lifetime value to personalize experiences and improve retention strategies."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Risk Assessment",
      description: "Identify potential risks, fraud patterns, and business threats before they impact your operations using advanced ML models."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Performance Optimization",
      description: "Predict system performance, maintenance needs, and operational bottlenecks to proactively optimize business processes."
    }
  ];

  const examples = [
    {
      title: "Retail Demand Forecasting",
      description: "A fashion retailer implemented predictive analytics to forecast seasonal demand, optimize inventory levels, and reduce overstock by analyzing weather patterns, trends, and historical sales data.",
      metrics: ["35% reduction in overstock", "90% forecast accuracy", "25% increase in profit margins"]
    },
    {
      title: "Financial Risk Prediction",
      description: "A financial services company deployed ML models to predict loan defaults, assess credit risk, and identify fraudulent transactions in real-time.",
      metrics: ["40% reduction in default rates", "99.8% fraud detection accuracy", "60% faster risk assessment"]
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
            Predictive Analytics
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of machine learning to predict future trends, behaviors, and outcomes for strategic advantage
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
                  Ready to Predict the Future?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Let's discuss how predictive analytics can give you competitive advantage.
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