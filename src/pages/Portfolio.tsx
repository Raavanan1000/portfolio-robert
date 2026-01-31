import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WorkShowcase } from '../components/WorkShowcase';
import { ColorPhilosophy } from '../components/ColorPhilosophy';
import { About } from '../components/About';
import { Tools } from '../components/Tools';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';
export function Portfolio() {
  return (
    <div className="min-h-screen bg-cinema-black text-white selection:bg-cosmic-purple selection:text-white">
      {/* Cosmic Background Layers */}
      <div className="starfield" />
      <div className="nebula-overlay" />
      <div className="film-grain" />

      <main className="relative z-10">
        <Hero />
        <Services />
        <WorkShowcase />
        <ColorPhilosophy />
        <About />
        <Tools />
        <Process />
        <Contact />
      </main>
    </div>);

}