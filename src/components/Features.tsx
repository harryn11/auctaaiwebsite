import React from 'react';
import { GraduationCap, Target, Wrench, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const problems = [
    "85% of AI projects fail to deliver on promises",
    "Most companies jump into AI tools without understanding how they fit their business",
    "The result? Expensive implementations that teams don't adopt"
  ];

  const methodology = [
    {
      icon: <GraduationCap className="w-12 h-12 text-accent" />,
      title: "EDUCATE",
      description: "We ensure your team understands AI's realistic potential for your specific business"
    },
    {
      icon: <Target className="w-12 h-12 text-accent" />,
      title: "STRATEGISE", 
      description: "Together, we map realistic AI strategies aligned with your objectives and workflows"
    },
    {
      icon: <Wrench className="w-12 h-12 text-accent" />,
      title: "IMPLEMENT",
      description: "Only then do we build solutions - with clear success metrics and team buy-in"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Strategic consulting expertise + hands-on implementation",
      description: "Best of both worlds - strategic thinking with practical execution"
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Mid-market specialisation",
      description: "We understand your constraints and work within realistic budgets"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Education-first approach ensures lasting adoption",
      description: "Teams that understand AI are teams that successfully adopt it"
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "Build your internal AI capabilities, not dependency",
      description: "We empower your team to continue the AI journey independently"
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
    <>
      {/* Problem Section */}
      <div className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">The Problem with Most AI Implementations</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="bg-red-900/20 border border-red-500/30 rounded-lg p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-lg text-red-200">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Methodology Section */}
      <div id="methodology" className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white">Our 3-Step Process</h2>
            <p className="mt-4 text-xl text-gray-400">
              Education before implementation, strategy before technology
            </p>
          </motion.div>

          <motion.div 
            className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={item}
              >
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-accent-light/50 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
                  animate={{
                    scale: [1, 1.02, 1],
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                <motion.div 
                  className="relative h-full p-8 bg-primary-light rounded-lg border border-accent/20 backdrop-blur-xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(20, 184, 166, 0.2)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    damping: 15
                  }}
                >
                  <motion.div 
                    className="flex items-center justify-center mb-6"
                    whileHover={{ 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-accent text-center mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-400">
              Your AI Transformation Partners
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="flex gap-4 p-6 bg-primary rounded-lg border border-accent/20"
                variants={item}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(20, 184, 166, 0.1)"
                }}
              >
                <div className="flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}