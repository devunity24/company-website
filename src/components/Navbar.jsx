import React, { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import BreakpointContext from "../context/breakPointContext";
import { Modal } from "./modal/modal.jsx";
import { DynamicForm } from "./forms/DynamicForm.jsx";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Why Devunity", href: "#why-devunity" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Industries", href: "#industries" },
  { name: "Partners", href: "#partners" },
];
const contactFormConfig = {
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      required: true,
      validation: {
        minLength: 2,
        message: 'Name must be at least 2 characters',
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message',
      required: true,
      validation: {
        minLength: 10,
        message: 'Message must be at least 10 characters',
      },
    },
  ],
  submitLabel: 'Send Message',
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = Boolean(useContext(BreakpointContext) === "sm");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactSubmit = (data) => {
    console.log("Contact Form Data:", data);
    setIsContactModalOpen(false);
  };

  const handleEmail = () => {
    const recipient = "devunity24@gmail.com"; // Replace with your email
    const subject = "Subject of the Email";
    const body = "Hello, this is the body of the email.";
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <nav className="fixed w-full bg-white backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between h-full">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              {/* <Code2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Devunity</span> */}
              <img
                src="/company-website/images/company-logo2.png"
                alt="comapny-logo"
                width={isSmallScreen ? 160 : 210}
                height={isSmallScreen ? 40 : 60}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors md:text-lg"
              >
                {item.name}
              </a>
            ))}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Us"
      >
        <DynamicForm
          config={contactFormConfig}
          onSubmit={handleContactSubmit}
        />
      </Modal>
    </nav>
  );
}
