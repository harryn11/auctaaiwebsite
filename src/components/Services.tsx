import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "AI Transformation Consulting",
      description: "Strategic assessment, roadmapping, and organisational readiness evaluation",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600",
      link: "/services/ai-consulting"
    },
    {
      title: "Implementation Services",
      description: "Custom AI solution development, system integration, and team training",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600",
      link: "/services/process-automation"
    },
    {
      title: "Ongoing Partnership",
      description: "Performance optimization, capability expansion, and strategic advisory services",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services/ongoing-partnership"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div id="services" className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive AI transformation services for modern businesses
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl"
              variants={item}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(20, 184, 166, 0.2)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 15
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40"></div>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-300">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="mt-4 inline-flex items-center text-accent hover:text-accent-light transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    Learn more <ChevronRight className="ml-2 w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}