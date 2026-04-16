import React from 'react';
import { Code, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../data/mock';

const About = () => {
  const { about } = portfolioData;

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'ML Models Deployed', value: '10+' },
    { label: 'Lines of Code', value: '100K+' },
    { label: 'Coffee Consumed', value: '∞' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with code comment */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-cyan-500" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                <span className="font-mono text-cyan-500">01.</span> About Me
              </h2>
            </div>
            <div className="w-20 h-1 bg-cyan-500" />
          </div>

          {/* Content */}
          <Card className="p-8 border-slate-200 shadow-lg mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Lightbulb className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-slate-700 leading-relaxed">
                {about.summary}
              </p>
            </div>
          </Card>

          {/* Tech Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 border-slate-200 bg-slate-50 hover:bg-cyan-50 hover:border-cyan-300 transition-all">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600 font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
