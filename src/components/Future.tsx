import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Future() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
      };

      await emailjs.send(
        'service_njw2n4k', // Replace with your EmailJS service ID
        'template_ntjoivw', // Replace with your EmailJS template ID
        templateParams,
        'IBmb3rc70TPjd8BvH' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="consultation" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1E293B,#0B1120)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            The <span className="bg-gradient-to-r from-accent to-accent-light text-transparent bg-clip-text">Future</span> Awaits
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Have a compelling AI concept, a question, or simply want to discuss our work? We're all ears!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name *
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className={`mt-1 block w-full rounded-md bg-primary-light border ${errors.name ? 'border-red-500' : 'border-accent/20'} focus:border-accent focus:ring focus:ring-accent/20 text-white px-4 py-3`}
                disabled={isSubmitting}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">Name is required</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className={`mt-1 block w-full rounded-md bg-primary-light border ${errors.email ? 'border-red-500' : 'border-accent/20'} focus:border-accent focus:ring focus:ring-accent/20 text-white px-4 py-3`}
                disabled={isSubmitting}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">Valid email is required</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="mt-1 block w-full rounded-md bg-primary-light border border-accent/20 focus:border-accent focus:ring focus:ring-accent/20 text-white px-4 py-3"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                How can we help you? *
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: true })}
                className={`mt-1 block w-full rounded-md bg-primary-light border ${errors.message ? 'border-red-500' : 'border-accent/20'} focus:border-accent focus:ring focus:ring-accent/20 text-white px-4 py-3`}
                disabled={isSubmitting}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">Please tell us how we can help</p>}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className={`inline-flex items-center bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-md transition-colors group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Booking...' : 'Send Message'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <div className="mt-12 text-center text-gray-400">
            <p className="flex items-center justify-center gap-2">
        
        
            </p>
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