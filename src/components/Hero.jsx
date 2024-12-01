import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/company-website/images/collaboration.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            Crafting innovative solutions,
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
            together
          </h1>
          <p className="text-lg md:text-xl  text-gray-200 mb-8 text-justify">
            At <strong>Devunity</strong>, we believe in the power of
            collaboration. Our team of expert developers work with you to bring
            your vision to life. Whether you're a startup, an enterprise, or
            anything in between, we're here to help you build something amazing.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2">
              Start a Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services">
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white/20 transition-all">
                Our Solutions
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="fill-current text-white" viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </div>
  );
}
