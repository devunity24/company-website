import React from "react";
import { CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Devunity transformed our business with their innovative solutions. Their team's expertise and dedication are unmatched.",
    author: "John Smith",
    position: "CTO, TechCorp",
  },
  {
    quote:
      "Working with Devunity has been a game-changer. They truly understand our needs and deliver beyond expectations.",
    author: "Lisa Chen",
    position: "CEO, InnovateTech",
  },
];

export default function About() {
  return (
    <section id="why-devunity" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Devunity
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Devunity, we are committed to helping businesses thrive by
              providing cutting-edge technology solutions tailored to their
              specific needs. With a focus on quality, innovation, and client
              satisfaction, we ensure that every project is completed with
              precision and expertise.
            </p>

            <div className="space-y-4">
              {[
                "Industry-leading expertise",
                "Cutting-edge technology solutions",
                "Dedicated support and maintenance",
                "Scalable and future-proof systems",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
