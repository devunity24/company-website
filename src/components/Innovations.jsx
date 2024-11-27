import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'DevFlow',
    description: 'Streamline your development workflow with our AI-powered project management solution.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    name: 'CloudGuard',
    description: 'Enterprise-grade cloud security and monitoring platform for modern infrastructure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    name: 'DataSense',
    description: 'Advanced analytics and visualization platform for data-driven decision making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  }
];

export default function Innovations() {
  return (
    <section id="innovations" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Innovations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our cutting-edge products designed to revolutionize your digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="text-blue-600 font-medium inline-flex items-center group/btn">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}