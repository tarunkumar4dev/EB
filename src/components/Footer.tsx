// src/components/Footer.tsx
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-700 via-emerald-700 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ---------- BRAND ---------- */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/EB_LOGO.png"
                alt="Education Beast Logo"
                className="w-16 h-16 object-contain drop-shadow-md"
              />
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  Education Beast
                </h3>
                <p className="text-sm text-gray-200">Palam, New Delhi</p>
              </div>
            </div>
            <p className="text-gray-100/90 text-sm leading-relaxed max-w-sm">
              Premier coaching institute for Classes 9–12, specializing in{" "}
              <span className="font-semibold text-white">Commerce, Maths & Science</span> with experienced faculty and consistent results.
            </p>
          </div>

          {/* ---------- QUICK LINKS ---------- */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Courses", href: "#courses" },
                { label: "About Us", href: "#about" },
                { label: "Results", href: "#results" },
                { label: "Contact", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-all duration-200 hover:pl-1 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- COURSES ---------- */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white/90">Our Courses</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Class 9–10 (Maths & Science)</li>
              <li>Class 11–12 Commerce</li>
              <li>Class 11–12 Science</li>
              <li>Class 11–12 Arts</li>
            </ul>
          </div>

          {/* ---------- CONTACT INFO ---------- */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white/90">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-300" />
                <span>Near Palam Metro, New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>+91-98XXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-300" />
                <span>hello@educationbeast.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- BOTTOM BAR ---------- */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Education Beast</span>. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
