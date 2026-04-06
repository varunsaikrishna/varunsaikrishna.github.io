import React from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../data/mock';

const Contact = () => {
  const { personal } = portfolioData;

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      command: 'send_email()'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      command: 'make_call()'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/varunsaikrishna',
      href: personal.linkedin,
      command: 'connect_linkedin()'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: personal.github,
      command: 'view_code()'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Send className="text-cyan-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="font-mono text-cyan-400">06.</span> Get In Touch
            </h2>
          </div>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6" />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-mono">
            <span className="text-slate-500">// </span>Open to new opportunities and collaborations
          </p>
          <p className="text-cyan-400 font-mono mt-2">
            {'>'} Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.label === 'LinkedIn' || method.label === 'GitHub' ? '_blank' : undefined}
                rel={method.label === 'LinkedIn' || method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <Card className="p-6 bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-cyan-500 transition-all text-center group hover:scale-105">
                  <div className="flex flex-col items-center">
                    <div className="bg-cyan-500/10 p-4 rounded-full mb-4 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="text-cyan-400" size={28} />
                    </div>
                    <h3 className="text-white font-semibold mb-2 font-mono">
                      {method.label}
                    </h3>
                    <p className="text-slate-400 text-sm break-all mb-2">
                      {method.value}
                    </p>
                    <span className="text-xs text-cyan-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      {method.command}
                    </span>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
