import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Cpu } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const categoryIcons = {
    'AI / Machine Learning': '🤖',
    'Programming & Development': '💻',
    'Frameworks & Tools': '🛠️',
    'Cloud & DevOps': '☁️',
    'Databases': '🗄️'
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-cyan-500" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              <span className="font-mono text-cyan-500">03.</span> Technical Skills
            </h2>
          </div>
          <div className="w-20 h-1 bg-cyan-500" />
          <p className="mt-4 text-slate-600 font-mono text-sm">// Tech stack & tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="p-6 border-slate-200 shadow-lg hover:shadow-xl transition-all hover:border-cyan-300 group">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                  <span className="text-cyan-600 font-bold font-mono">{'{}'}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-mono">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-slate-100 text-slate-700 hover:bg-cyan-100 hover:text-cyan-700 transition-all px-3 py-1.5 text-sm font-mono border border-slate-200 hover:border-cyan-400"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
