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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#00bda5]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="text-center lg:text-left space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Badge className="bg-gradient-to-r from-[#00bda5]/20 to-[#007667]/20 text-[#007667] border border-[#00bda5]/30 px-5 py-2 rounded-full text-sm sm:text-base font-semibold shadow-sm">
              🎓 Admissions Open
            </Badge>
            <Badge className="bg-gradient-to-r from-[#00bda5]/20 to-[#007667]/20 text-[#007667] border border-[#00bda5]/30 px-5 py-2 rounded-full text-sm sm:text-base font-semibold shadow-sm">
              ✨ Free Demo Classes
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Best Coaching in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bda5] to-[#007667]">
              Palam
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Premier coaching institute in Palam, New Delhi. Specialized in{" "}
            <span className="font-semibold text-gray-900">Commerce</span>, Maths & Science
            with experienced faculty and proven results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
            <Link
              to="/courses"
              className="bg-gradient-to-r from-[#00bda5] to-[#007667] hover:opacity-95 text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-md flex items-center justify-center transition-transform hover:scale-[1.02]"
            >
              <BookOpen className="w-6 h-6 mr-2" />
              Explore Courses
            </Link>
            <Link
              to="/contact#contact"
              onClick={onDemoClick}
              className="border-2 border-[#00bda5] text-[#007667] hover:bg-[#00bda5] hover:text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-sm flex items-center justify-center transition-colors"
            >
              Book a Free Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10">
            {[
              { icon: Users, label: "Students", value: "500+" },
              { icon: Award, label: "Success Rate", value: "95%" },
              { icon: BookOpen, label: "Expert Faculty", value: "10+" },
              { icon: Clock, label: "Years Experience", value: "5" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#00bda5]/20 rounded-full shadow-sm">
                  <stat.icon className="w-7 h-7 text-[#007667]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <div className="relative w-full max-w-xl mx-auto mt-0 lg:-mt-8">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/EB2.jpg"
              alt="Education Beast Classroom"
              className="w-full h-[400px] sm:h-[480px] md:h-[540px] object-cover object-center"
            />
          </div>

          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-[#00bda5] to-[#007667] rounded-3xl translate-y-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;