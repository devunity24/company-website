import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    socials: ["linkedin", "twitter"],
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    socials: ["linkedin", "github"],
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    socials: ["linkedin", "twitter"],
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    socials: ["linkedin", "github"],
  },
];

const SocialIcon = ({ type }) => {
  switch (type) {
    case "linkedin":
      return <Linkedin className="h-5 w-5" />;
    case "github":
      return <Github className="h-5 w-5" />;
    case "twitter":
      return <Twitter className="h-5 w-5" />;
    default:
      return null;
  }
};

export default function Visionaries() {
  return (
    <section id="visionaries" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Visionaries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals driving innovation and excellence at
            Devunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  {member.socials.map((social) => (
                    <button
                      key={social}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <SocialIcon type={social} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
