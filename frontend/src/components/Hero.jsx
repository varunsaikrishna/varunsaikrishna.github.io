import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail, Terminal, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const fullText = 'const developer = new AI_Engineer();';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-slate-900 text-white flex items-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating code snippets */}
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <Code2 size={100} className="text-cyan-400 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Terminal-style header */}
          <div className="mb-6 animate-fade-in">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm md:text-base">
              <Terminal size={18} />
              <span>~/portfolio $</span>
              <span className="ml-2">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Code comment style greeting */}
          <div className="mb-4 animate-fade-in-up">
            <span className="text-slate-500 font-mono text-sm md:text-base">// Software Engineer → AI Engineer</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="text-cyan-400 font-mono">&lt;</span>
            {personal.name}
            <span className="text-cyan-400 font-mono">/&gt;</span>
          </h1>

          {/* Title with code styling */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-400 mb-8 animate-fade-in-up font-mono" style={{ animationDelay: '0.1s' }}>
            {personal.title}
          </h2>

          {/* Code block style tagline */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-3">
              <div className="flex flex-col gap-2 text-slate-600 font-mono text-xs select-none">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-mono">
                  <span className="text-purple-400">export const</span>{' '}
                  <span className="text-yellow-300">expertise</span> = [
                  <br />
                  <span className="ml-4 text-green-300">"Machine Learning"</span>,{' '}
                  <span className="text-green-300">"Deep Learning"</span>,{' '}
                  <span className="text-green-300">"NLP"</span>
                  <br />
                  ];
                </p>
              </div>
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            {['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'AWS'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-800 border border-cyan-500/30 rounded text-cyan-300 text-sm font-mono hover:border-cyan-500 hover:bg-slate-700 transition-all">
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg group font-mono"
            >
              ./contact.sh
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-mono"
            >
              <Download className="mr-2" size={20} />
              download_resume()
            </Button>
          </div>

          {/* Social Links with terminal style */}
          <div className="flex gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
