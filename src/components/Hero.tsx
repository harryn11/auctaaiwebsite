import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-80 lg:pt-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl gradient-title-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100 
            }}
          >
            Your AI Transformation
            <br />
            Partner
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help businesses become AI-powered through our proven Educate → Strategise → Implement methodology. Strategic planning before technology, education before implementation.
          </motion.p>
          <motion.div 
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#consultation"
              className="bg-accent text-white px-8 py-3 rounded-md hover:bg-accent-dark transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Book AI Consultation
              <Sparkles size={20} />
            </motion.a>
            <motion.a
              href="#process"
              className="border border-primary-light text-gray-300 px-8 py-3 rounded-md hover:border-accent hover:text-accent transition-colors"
              whileHover={{ scale: 1.05, borderColor: "#14B8A6" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1E293B,#0B1120)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      {/* AI Solutions Showcase */}
      <div className="absolute bottom-0 left-0 right-0 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { name: "AI Agents", delay: 0 },
              { name: "CRM Automation", delay: 0.1 },
              { name: "Voice Agents", delay: 0.2 },
              { name: "Data Analytics", delay: 0.3 },
              { name: "Workflow Automation", delay: 0.4 },
              { name: "Predictive Analytics", delay: 0.5 }
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.4 + solution.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Link
                  to={`/solutions/${solution.name.toLowerCase().replace(' ', '-')}`}
                  className="relative overflow-hidden rounded-lg bg-primary-light/50 backdrop-blur-sm border border-accent/20 p-4 h-20 flex items-center justify-center group-hover:border-accent/40 transition-all duration-300 cursor-pointer block"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <motion.span
                    className="relative text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(20, 184, 166, 0)",
                        "0 0 10px rgba(20, 184, 166, 0.3)",
                        "0 0 0px rgba(20, 184, 166, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: solution.delay * 2
                    }}
                  >
                    {solution.name}
                  </motion.span>
                  
                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={false}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent/60 rounded-full"
                        animate={{
                          x: [0, Math.random() * 60 - 30, 0],
                          y: [0, Math.random() * 40 - 20, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`
                        }}
                      />
                    ))}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 text-accent text-sm font-medium"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              Powered by Advanced AI Technology
              <motion.div
                className="w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.75
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}