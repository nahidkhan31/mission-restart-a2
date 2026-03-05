import React from "react";
import { Twitter, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-400 py-12 px-8 md:px-12 lg:px-20 border-t border-gray-800 mt-auto">
      <div className="container mx-auto">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand and Description */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-white text-2xl font-bold">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              Our advanced support ticket system streamlines customer service
              operations, ensuring fast responses and efficient issue tracking
              for modern businesses aiming for excellence in client
              satisfaction.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors">
                <a href="#">About Us</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Our Mission</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Contact Sales</a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors">
                <a href="#">Products & Services</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Customer Stories</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>

          {/* Information/Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-2">Social Links</h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Twitter size={18} /> @CS — Ticket System
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Linkedin size={18} /> @CS — Ticket System
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Facebook size={18} /> @CS — Ticket System
              </a>
              <a
                href="mailto:support@cst.com"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail size={18} /> support@cst.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section (Copyright) */}
        <div className="border-t border-gray-800 pt-8 text-center text-xs tracking-wide">
          <p>© 2026 CS — Ticket System. All rights reserved.</p>
        </div>
        <div className="border-gray-800 pt-2 text-center text-xs tracking-wide">
          <p>
            Developed by{" "}
            <span className="text-green-600 font-bold"> Nahid Khan Niloy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
