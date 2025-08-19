import React, { useState } from 'react';
import { Calculator, Clock, CreditCard } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  basePrice: number;
  timeEstimate: string;
}

export default function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const services: Service[] = [
    { id: 'ai-automation', name: 'AI Process Automation', basePrice: 2500, timeEstimate: '2-3 weeks' },
    { id: 'ml-integration', name: 'Machine Learning Integration', basePrice: 3500, timeEstimate: '3-4 weeks' },
    { id: 'data-analytics', name: 'AI Data Analytics', basePrice: 1800, timeEstimate: '1-2 weeks' },
    { id: 'chatbot', name: 'Custom AI Chatbot', basePrice: 1500, timeEstimate: '1-2 weeks' },
  ];

  const totalPrice = selectedServices.reduce((sum, serviceId) => {
    const service = services.find(s => s.id === serviceId);
    return sum + (service?.basePrice || 0);
  }, 0);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Calculate Your AI Solution</h2>
          <p className="mt-4 text-xl text-gray-400">
            Select the services you need and get an instant price estimate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                  selectedServices.includes(service.id)
                    ? 'bg-accent/10 ring-2 ring-accent'
                    : 'bg-primary ring-1 ring-white/10 hover:ring-accent/50'
                }`}
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2" />
                      <span>{service.timeEstimate}</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-accent">
                    ${service.basePrice.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-primary rounded-lg p-6 ring-1 ring-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Your Estimate</h3>
                  <Calculator className="text-accent" size={24} />
                </div>

                <div className="space-y-4">
                  {selectedServices.map((serviceId) => {
                    const service = services.find(s => s.id === serviceId);
                    return (
                      <div key={serviceId} className="flex justify-between text-gray-300">
                        <span>{service?.name}</span>
                        <span>${service?.basePrice.toLocaleString()}</span>
                      </div>
                    );
                  })}

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${totalPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2">
                    <CreditCard size={20} />
                    Get Started Now
                  </button>

                  <p className="text-sm text-gray-400 text-center mt-4">
                    Prices are estimates. Contact us for a detailed quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}