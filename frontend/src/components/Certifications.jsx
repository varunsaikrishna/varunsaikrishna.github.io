import React from 'react';
import { Award, Shield } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-cyan-500" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              <span className="font-mono text-cyan-500">06.</span> Certifications
            </h2>
          </div>
          <div className="w-20 h-1 bg-cyan-500" />
          <p className="mt-4 text-slate-600 font-mono text-sm">// Professional credentials & achievements</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="p-6 border-slate-200 shadow-lg hover:shadow-xl transition-all hover:border-cyan-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-cyan-100 p-4 rounded-full mb-4 group-hover:bg-cyan-200 group-hover:scale-110 transition-all">
                  <Award className="text-cyan-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {cert.name}
                </h3>
                <Badge className="bg-slate-100 text-slate-700 font-mono border border-slate-300">
                  {cert.issuer}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
