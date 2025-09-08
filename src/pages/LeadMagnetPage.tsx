import React, { useState } from 'react';
import { Download, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  name: string;
  email: string;
  company: string;
};

export default function AIAgentsMastery() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        message: `AI Agents Mastery Download: ${data.company}`,
      };

      await emailjs.send(
        'service_njw2n4k', // Replace with your EmailJS service ID
        'template_ntjoivw', // Replace with your EmailJS template ID
        templateParams,
        'IBmb3rc70TPjd8BvH' // Replace with your EmailJS public key
      );

      toast.success('Download link sent to your email!');
      setIsDownloaded(true);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send download link. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Identify the most impactful AI opportunities for your business",
    "Understand realistic ROI expectations and timelines",
    "Learn from real-world implementation case studies",
    "Get a step-by-step roadmap for AI adoption",
    "Avoid the common pitfalls that cause 85% of AI projects to fail"
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1E293B,#0B1120)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                FREE AI Agents Course
              </div>
              
              <h1 className="text-4xl sm:text-5xl gradient-title-hero pb-2">
                The Complete Guide to Building & Selling AI Agents
              </h1>
              
              <p className="mt-6 text-xl text-gray-300">
                Discover how to successfully build AI Agents with our comprehensive guide. 
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-accent-light/50 rounded-2xl blur-xl opacity-75"></div>
              <div className="relative bg-primary-light rounded-2xl p-8 border border-accent/20">
                {!isDownloaded ? (
                  <>
                    <div className="text-center mb-6">
                      <Download className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h2 className="text-2xl font-bold text-white">Download Your Free Guide</h2>
                      <p className="text-gray-400 mt-2">Get instant access to our AI transformation strategy guide</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register("name", { required: true })}
                          className={`w-full rounded-md bg-primary border ${errors.name ? 'border-red-500' : 'border-accent/20'} focus:border-accent focus:ring focus:ring-accent/20 text-white px-4 py-3`}
                          placeholder="Enter your full name"
                          disabled={isSubmitting}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">Name is required</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                          className={`w-full rounded-md bg-primary border ${errors.email ? 'border-red-500' : 'border-accent/20'} focus:border-accent focus:ring focus:ring-accent/20 text-white px-4 py-3`}
                          placeholder="Enter your business email"
                          disabled={isSubmitting}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">Valid email is required</p>}
                      </div>

                      <button
                        type="submit"
                        className={`w-full bg-accent hover:bg-accent-dark text-white px-6 py-4 rounded-md transition-colors font-semibold flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Download Free Guide'}
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      We respect your privacy. No spam, ever. Unsubscribe at any time.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
                    <p className="text-gray-300 mb-6">
                      Your AI Agents Guide has been sent to your email. Check your inbox (and spam folder) for the download link.
                    </p>
                    <a
                      href="/"
                      className="inline-flex items-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md transition-colors"
                    >
                      Visit Our Website
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}