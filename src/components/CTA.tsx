import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <div className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <a
                  href="#consultation"
                  className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Send Message
                  <Rocket className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
}