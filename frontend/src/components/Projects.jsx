import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="text-cyan-500" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              <span className="font-mono text-cyan-500">04.</span> Projects
            </h2>
          </div>
          <div className="w-20 h-1 bg-cyan-500" />
          <p className="mt-4 text-slate-600 font-mono text-sm">// Things I've built</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-6 border-slate-200 shadow-lg hover:shadow-xl transition-all hover:border-cyan-300 group flex flex-col"
            >
              {/* Top row: icon + title + links */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors shrink-0">
                    <span className="text-cyan-600 font-bold font-mono text-lg">{project.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2 ml-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-500 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights — expandable */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-4">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-1 text-xs font-mono text-cyan-600 hover:text-cyan-800 transition-colors mb-2"
                  >
                    {expanded === project.id ? (
                      <><ChevronUp size={14} /> hide details</>
                    ) : (
                      <><ChevronDown size={14} /> show details</>
                    )}
                  </button>
                  {expanded === project.id && (
                    <ul className="space-y-1.5 pl-3 border-l-2 border-cyan-200">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="text-slate-600 text-sm leading-relaxed">
                          <span className="text-cyan-500 font-mono mr-1">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-100">
                {project.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-slate-100 text-slate-700 hover:bg-cyan-100 hover:text-cyan-700 transition-all px-2.5 py-1 text-xs font-mono border border-slate-200 hover:border-cyan-400"
                  >
                    {tag}
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

export default Projects;
