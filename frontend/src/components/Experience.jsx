import React from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            <span className="font-mono text-cyan-500">02.</span> Work Experience
          </h2>
          <div className="w-20 h-1 bg-cyan-500" />
          <p className="mt-4 text-slate-600 font-mono text-sm">// Building AI solutions, one model at a time</p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-200 hidden md:block" />
              )}

              <Card className="p-6 md:p-8 border-slate-200 shadow-lg hover:shadow-xl transition-all relative group hover:border-cyan-300">
                {/* Timeline dot */}
                <div className="absolute -left-1 top-8 w-3 h-3 bg-cyan-500 rounded-full border-4 border-white hidden md:block group-hover:scale-150 transition-transform" />

                <div className="md:ml-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="text-cyan-500" size={24} />
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-cyan-600 font-semibold mb-2">
                        <Briefcase size={18} />
                        <span className="font-mono">{job.company}</span>
                      </div>
                    </div>
                    {job.current && (
                      <Badge className="bg-cyan-500 text-white mb-2 md:mb-0 animate-pulse">
                        &lt;Current/&gt;
                      </Badge>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6 text-slate-600 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700">
                        <span className="text-cyan-500 mt-1.5 flex-shrink-0 font-mono">{'>'}</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
