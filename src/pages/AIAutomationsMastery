import React, { useState } from 'react';
import { Download, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  name: string;
  email: string;
};

export default function AIAutomationsMastery() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: `Lead Magnet Download Request`,
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
    "AI Automation Fundamentals",
    "Understanding Tools & APIs",
    "Practical Automation Tutorials",
    "Advanced Concepts & Best Practices",
    "Monetization & Business Strategy"
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1E293B,#0B1120)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-
