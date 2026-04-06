import React from 'react';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../data/mock';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-cyan-500" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              <span className="font-mono text-cyan-500">04.</span> Education
            </h2>
          </div>
          <div className="w-20 h-1 bg-cyan-500" />
          <p className="mt-4 text-slate-600 font-mono text-sm">// Academic journey & credentials</p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <Card key={edu.id} className="p-6 border-slate-200 shadow-lg hover:shadow-xl transition-all hover:border-cyan-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                  <GraduationCap className="text-cyan-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-mono">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-600 font-semibold mb-2">
                    {edu.field}
                  </p>
                  <p className="text-slate-700 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-mono">
                    {edu.period}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
