import React, { useContext } from "react";
import BreakpointContext from "../context/breakPointContext";
import { Code2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const isSmallScreen = Boolean(useContext(BreakpointContext) === "sm");
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Devunity</span> */}
              {/* <img
                src="/company-website/images/company-logo.png"
                alt="comapny-logo"
                width={isSmallScreen ? 150 : 210}
                height={isSmallScreen ? 30 : 40}
              /> */}
            </div>
            <p className="text-gray-400">
              Crafting innovative solutions for tomorrow's challenges.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Why Devunity",
                "Services",
                "Products",
                "Industries",
                "Partners",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>devunity24@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+91 9051182860</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>Silicon Valley, Newtown, Kolkata-700161</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Devunity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
