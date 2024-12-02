import React, { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import BreakpointContext from "../context/breakPointContext";
import { Modal } from "./modal/modal.jsx";
import { DynamicForm } from "./forms/DynamicForm.jsx";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { motion, useScroll, useSpring } from "framer-motion";

const SERVICE_ID = "service_xyc8gf3";
const TEMPLATE_ID = "template_vx66aid";
const PUBLIC_KEY = "rxUNISFEIkAsf8Beu";

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
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
      validation: {
        minLength: 2,
        message: "Name must be at least 2 characters",
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "company",
      label: "Company Name",
      type: "text",
      placeholder: "Enter your company name",
      required: false,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Enter your message",
      required: true,
      validation: {
        minLength: 10,
        message: "Message must be at least 10 characters",
      },
    },
  ],
  submitLabel: "Send Message",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = Boolean(useContext(BreakpointContext) === "sm");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [isSuccessSnack, setIsSuccessSnack] = useState(true);
  const [snackMsg, setSnackMsg] = useState("");
  // scroll progress work
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const handleContactSubmit = (data) => {
    console.log("Contact Form Data:", data);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
      (result) => {
        setSnackMsg("Message Sent Successfully.");
        setIsSuccessSnack(true);
        setOpenSnack(true);
      },
      (error) => {
        setSnackMsg("Something Went Wrong!");
        setIsSuccessSnack(false);
        setOpenSnack(true);
      }
    );
    setIsContactModalOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white backdrop-blur-sm z-50 shadow-sm ">
      <motion.div
        className="fixed w-full bg-blue-700 h-2"
        style={{ scaleX }}
        initial={{ transformOrigin: "0 0" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between h-full">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
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
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
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
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={handleCloseSnack}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={isSuccessSnack ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackMsg}
        </Alert>
      </Snackbar>
    </nav>
  );
}
