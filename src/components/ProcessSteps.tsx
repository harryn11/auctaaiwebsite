import React from 'react';
import { BookOpen, Target, Rocket, Users } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "1. Discovery & Education",
      description: "We assess your business with an AI Audit and educate you on AI's realistic potential"
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "2. Strategic Planning",
      description: "We develop a tailored AI strategy aligned with your objectives"
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: "3. Implementation",
      description: "We build and deploy solutions with clear success metrics"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "4. Knowledge Transfer",
      description: "We ensure your team can maintain and expand AI capabilities"
    }
  ];

  return (
    <div id="process" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">How We Work</h2>
          <p className="mt-4 text-xl text-gray-400">
            Our proven methodology for successful AI transformation
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            
            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-light ring-8 ring-primary">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-white text-center">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}