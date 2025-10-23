import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    message: ""
  });

  // If we land here with /contact#contact, scroll to the section smoothly.
  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        // ensure layout is painted before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      }
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.class) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and class are required fields.",
        variant: "destructive",
      });
      return;
    }

    // WhatsApp integration - Updated phone number
    const whatsappMessage = `Hi! I'm interested in admission at Education Beast.
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Class: ${formData.class}
Message: ${formData.message}`;

    // Updated phone number to 9540690658
    const whatsappUrl = `https://wa.me/919540690658?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to WhatsApp to complete your inquiry.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      class: "",
      message: ""
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    // scroll-mt-28 prevents the sticky navbar from overlapping when scrolled to
    <section id="contact" className="scroll-mt-28 py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Contact & Admissions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your academic journey? Get in touch with us for admissions and course details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-primary">Get in Touch</CardTitle>
                <CardDescription>We're here to help with your academic goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-primary">Location</p>
                    <p className="text-sm text-muted-foreground">
                    Old Mehrauli Rd, Near Raj Dairy <br /> Raj nagar Part-2<br />Palam, New Delhi
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-primary">Phone</p>
                    <p className="text-sm text-muted-foreground">+91-9540690658</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-primary">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+91-9540690658</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-sm text-muted-foreground">educationbeast.0658@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-primary">Timings</p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sat: 8AM - 9 PM<br />
                      Sun : Weekly Tests
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="shadow-card gradient-card border-border/50">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-teal-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm text-teal-700">Interactive Map</p>
                    <p className="text-xs text-teal-600">Near Palam Metro Station</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-primary">Admission Inquiry</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="class" className="block text-sm font-medium text-primary mb-2">
                        Class/Course *
                      </label>
                      <select
                        id="class"
                        name="class"
                        required
                        value={formData.class}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select Class/Course</option>
                        <option value="class-9">Class 9 (Maths & Science)</option>
                        <option value="class-10">Class 10 (Maths & Science)</option>
                        <option value="class-11-commerce">Class 11 Commerce</option>
                        <option value="class-12-commerce">Class 12 Commerce</option>
                        <option value="class-11-science">Class 11 Science</option>
                        <option value="class-12-science">Class 12 Science</option>
                        <option value="class-11-arts">Class 11 Arts</option>
                        <option value="class-12-arts">Class 12 Arts</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      placeholder="Tell us about your requirements or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-button text-primary-foreground shadow-button hover:shadow-lg transition-smooth font-semibold py-3"
                  >
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;