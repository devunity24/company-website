import React, { useState, useCallback, useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageViewer from "react-simple-image-viewer";

const products = [
  {
    name: "Agent Manager",
    description:
      "allows agents to efficiently manage their network, track performance, and optimize investments. It helps in growing their business, boosting client engagement, and increasing revenue.",
    image: "/company-website/images/innovation/agent_management.png",
  },
  {
    name: "Agent Chain",
    description:
      "refers to a hierarchical network where agents recruit and manage sub-agents, expanding their reach and potential earnings. This model enables agents to grow their business by leveraging the efforts of their recruited agents, creating a chain of opportunities and commissions.",
    image: "/company-website/images/innovation/agent_chaining.png",
  },
  {
    name: "Commission Calculator",
    description:
      "accurately calculates agent commissions based on sales and performance metrics. It ensures transparency, efficiency, and timely payouts for agents and managers.",
    image: "/company-website/images/innovation/agent_commission.png",
  },
  {
    name: "Product Manager",
    description:
      "allows users to efficiently create, manage, and optimize investment products. It helps track product performance, make data-driven decisions, and improve offerings.",
    image: "/company-website/images/innovation/product_management.png",
  },
  {
    name: "Branch Manager",
    description:
      "enables efficient branch operations, including agent management, performance tracking, sales monitoring, and reporting, ensuring smooth and profitable branch functioning.",
    image: "/company-website/images/innovation/branch_management.png",
  },
  {
    name: "Customer Manager",
    description:
      "helps manage customer data, track investments, monitor portfolio performance, and provide personalized support, ensuring effective investment management and customer satisfaction.",
    image: "/company-website/images/innovation/customer_management.png",
  },
  {
    name: "Administration",
    description:
      "provides centralized control over user roles, permissions, system settings, and data management, ensuring smooth operations, security, and compliance across the platform.",
    image: "/company-website/images/innovation/administration.png",
  },
  {
    name: "Business",
    description:
      "allows management to track company performance, monitor key metrics, analyze sales, and assess growth, providing valuable insights for informed decision-making and strategic planning.",
    image: "/company-website/images/innovation/business.png",
  },
];

export default function Innovations({ onOpenImageView }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    onOpenImageView(true);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    onOpenImageView(false);
    setIsViewerOpen(false);
  };
  const getImages = useMemo(() => {
    return products.map((e) => e.image);
  });
  return (
    <section id="products" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products
          </h2>
          <p className="text-lg text-gray-600">
            <strong>Devunity NetSol</strong>&nbsp;provides innovative solutions
            for chain networking investment businesses, enabling agents to
            expand their potential. By streamlining investment processes and
            enhancing efficiency, agents can grow their network, attract more
            clients, and boost earnings, leading to sustainable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="relative h-48 overflow-hidden cursor-pointer">
                <LazyLoadImage
                  src={product.image}
                  alt={product.name}
                  effect="blur"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onClick={() => openImageViewer(index)}
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  The {product.name} module in <strong>Devunity NetSol</strong>{" "}
                  {product.description}
                </p>
                {/* <button className="text-blue-600 font-medium inline-flex items-center group/btn">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={getImages}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={false}
          onClose={closeImageViewer}
        />
      )}
    </section>
  );
}
