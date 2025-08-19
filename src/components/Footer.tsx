import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-light">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-wider">
              <span className="text-accent">AUCTA</span>
              <span className="text-white"> AI</span>
            </span>
            <p className="mt-4 text-gray-400">
              Empowering businesses with intelligent automation solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase"></h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors"></a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors"></a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors"></a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors"></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">harry@auctaai.co.uk</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors"></a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors"></a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors"></a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-light">
          <p className="text-gray-400 text-sm text-center">
          </p>
        </div>
      </div>
    </footer>
  );
}