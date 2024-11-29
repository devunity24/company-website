import React from 'react';
import { Code2, Laptop, Globe, Shield, Cpu, Users } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies to meet your specific needs.'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Responsive and scalable web applications that deliver exceptional user experiences.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security measures to protect your digital assets and maintain data integrity.'
  },
  {
    icon: Laptop,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services optimized for performance and reliability.'
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Smart AI solutions that automate processes and drive business intelligence.'
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Expert developers and specialists to strengthen your existing team.'
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to deliver exceptional solutions that drive your business forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-4">
                <service.icon className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}