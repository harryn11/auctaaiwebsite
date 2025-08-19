import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How is your approach different from other AI consultants?",
      answer: "We start with education, not technology. Most consultants jump straight to implementation. We ensure your team understands AI's realistic potential before any development begins, leading to better adoption and long-term success."
    },
    {
      question: "What size businesses do you work with?",
      answer: "We specialise in SMBs and mid-market companies (50-500 employees). We understand the unique constraints and opportunities of growing businesses and tailor our approach accordingly."
    },
    {
      question: "Do you only do consulting or do you implement solutions too?",
      answer: "We offer both strategic consulting and hands-on implementation. Our unique approach combines strategic thinking with practical execution - but only after proper education and planning phases."
    },
    {
      question: "How long does the process typically take?",
      answer: "Our methodology typically takes 3-6 months from initial consultation to full implementation. The education phase takes 2-4 weeks, strategy development 2-3 weeks, and implementation varies based on complexity."
    },
    {
      question: "What if we've had failed AI implementations before?",
      answer: "That's exactly why we exist. 85% of AI projects fail because they skip the education and strategy phases. Our methodology specifically addresses the common causes of AI project failure through proper planning and team buy-in."
    },
    {
      question: "Will we become dependent on you for ongoing AI needs?",
      answer: "No - our goal is to build your internal AI capabilities, not create dependency. We provide comprehensive knowledge transfer and training so your team can maintain and expand AI capabilities independently."
    }
  ];

  return (
    <div id="faq" className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-400">
            Common questions about our AI transformation methodology
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg transition-all duration-200 ${
                  openIndex === index
                    ? 'bg-accent/10 ring-2 ring-accent'
                    : 'bg-primary hover:bg-primary-light'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-accent" />
                  )}
                </div>
                <div
                  className={`mt-4 text-gray-400 transition-all duration-200 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}