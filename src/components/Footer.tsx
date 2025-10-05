import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">EB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Education Beast</h3>
                <p className="text-sm text-primary-foreground/80">Palam, New Delhi</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Premier coaching institute for Classes 9-12, specializing in Commerce, Maths & Science with proven results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Courses</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">About Us</a></li>
              <li><a href="#results" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Results</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Class 9-10 (Maths & Science)</li>
              <li className="text-primary-foreground/80">Class 11-12 Commerce</li>
              <li className="text-primary-foreground/80">Class 11-12 Science</li>
              <li className="text-primary-foreground/80">Class 11-12 Arts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">Near Palam Metro, New Delhi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+91-98XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">WhatsApp Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">hello@educationbeast.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-primary-foreground/80">
            © 2024 Education Beast. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Terms of Service</a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;