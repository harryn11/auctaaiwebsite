import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import ProcessSteps from '../components/ProcessSteps';
import Services from '../components/Services';
import Future from '../components/Future';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FAQ />
      <ProcessSteps />
      <Services />
      <Future />
      <CTA />
    </>
  );
}