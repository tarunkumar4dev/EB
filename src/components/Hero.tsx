// src/components/Hero.tsx
import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock } from "lucide-react";

const Hero = () => {
  const location = useLocation();

  const onDemoClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* background tint */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 to-white opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-12 lg:pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left">
          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            <Badge className="bg-teal-100 text-teal-700 border-teal-200 px-5 py-2 text-base font-semibold rounded-full shadow-sm">
              🎓 Admissions Open
            </Badge>
            <Badge className="bg-teal-100 text-teal-700 border-teal-200 px-5 py-2 text-base font-semibold rounded-full shadow-sm">
              ✨ Free Demo Classes
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-6">
            Best Coaching in{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-700 bg-clip-text text-transparent">
              Palam
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Premier coaching institute in Palam, New Delhi. Specialized in{" "}
            <span className="font-semibold text-black">Commerce</span>, Maths & Science
            with dedicated faculty and proven results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-16">
            <Link
              to="/courses"
              className="bg-gradient-to-r from-teal-400 to-teal-700 text-white shadow-lg hover:opacity-90 font-bold px-10 py-4 text-lg rounded-xl inline-flex items-center justify-center"
            >
              <BookOpen className="w-6 h-6 mr-2" />
              Explore Courses
            </Link>
            <Link
              to="/contact#contact"
              onClick={onDemoClick}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-bold px-10 py-4 text-lg rounded-xl inline-flex items-center justify-center"
            >
              Book a Free Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center shadow-sm">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-extrabold text-black">500+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center shadow-sm">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-extrabold text-black">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center shadow-sm">
                <BookOpen className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-extrabold text-black">10+</div>
              <div className="text-sm text-gray-600">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center shadow-sm">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-extrabold text-black">5</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right media – EB2 slightly higher */}
        <div className="relative w-full max-w-xl mx-auto lg:-mt-12">
          <div className="rounded-[22px] overflow-hidden shadow-2xl ring-1 ring-teal-100 bg-white">
            <img
              src="/EB2.jpg"
              alt="Education Beast Classroom"
              className="w-full h-[420px] md:h-[520px] object-cover object-[50%_40%]"
            />
          </div>
          <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-r from-teal-300 to-teal-700 rounded-[30px] translate-y-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
