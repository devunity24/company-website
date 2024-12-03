import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@mui/material";
// import tw from "twin.macro";

const features = [
  {
    title: "15+ Years of Expertise ",
    description:
      "With over 15 years of collective experience, we bring deep industry knowledge to every project.  ",
  },
  {
    title: "Innovation at Core",
    description:
      "We think beyond the conventional to craft innovative solutions tailored to your unique needs.",
  },
  {
    title: "End-to-End Expertise ",
    description:
      "From websites to AI-driven platforms, we offer a full spectrum of services for all industries.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We collaborate closely with you, ensuring our solutions align perfectly with your goals.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "Our team stays ahead with the latest tech trends to deliver modern, future-ready solutions.",
  },
  {
    title: "Quality & Efficiency",
    description:
      "Leveraging our experience, we deliver high-quality products that are cost-effective and on time.",
  },
  {
    title: "Diverse Industry Knowledge",
    description:
      "Extensive experience across education, healthcare, finance, retail, and more.",
  },
  {
    title: "Seamless Scalability",
    description:
      "Solutions that grow with your business, ensuring long-term success.",
  },
];

export default function About() {
  return (
    <section id="why-devunity" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="gap-16 items-center mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Devunity
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-justify">
              At <strong>Devunity</strong>, we are committed to helping
              businesses thrive by providing cutting-edge technology solutions
              tailored to their specific needs. With a focus on quality,
              innovation, and client satisfaction, we ensure that every project
              is completed with precision and expertise.
            </p>

            <div className="space-y-4 mb-6">
              {features.map((item, index) => (
                <div className="flex" key={index}>
                  <div className="flex  space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  </div>
                  <div className="block md:flex pl-3">
                    <div>
                      <span className="font-semibold">{item.title} :</span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-justify md:pl-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600">
              Partner with <strong>Devunity</strong>, where experience,
              innovation, and collaboration drive exceptional results.
            </p>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="flex justify-center pt-3 px-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Let's craft innovative solutions together
            </h1>
          </div>
          <div className="flex justify-center">
            <span className="text-lg  text-gray-600 text-center ">
              Our team is ready to help you build the software solution you need
              to achieve your business goals.
            </span>
          </div>
          <div className="flex justify-center mt-3 pb-3">
            <Button  variant="contained" sx={{textTransform:"capitalize"}}>
              Request a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
