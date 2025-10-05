// src/components/About.tsx
import { CheckCircle, Target, Award, Users } from "lucide-react";

const About = () => {
  const usps = [
    "Small batches",
    "Concept-first teaching",
    "Weekly tests",
    "CBSE-aligned notes",
    "Daily doubt clinic",
    "Performance reports",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-teal-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ---------- LEFT CONTENT ---------- */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              About <span className="text-teal-600">Education Beast</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Education Beast is a premier coaching institute in Palam, New Delhi for Classes 9–12. 
              We’re known for <span className="font-semibold text-gray-900">Commerce</span> with dedicated 
              faculty for Accounts, Economics, and Business Studies — and we deliver strong results 
              in Maths & Science for 9–10, as well as Science & Humanities for 11–12.
            </p>

            {/* Unique Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {usps.map((usp, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-gray-700 bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span>{usp}</span>
                </div>
              ))}
            </div>

            {/* Mission / Method / Promise */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {[
                { icon: Target, title: "Mission", text: "Excellence in education" },
                { icon: Award, title: "Method", text: "Concept-first approach" },
                { icon: Users, title: "Promise", text: "Individual attention" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- RIGHT CARD ---------- */}
          <div className="relative flex justify-center lg:justify-end lg:-mt-10">
            {/* Soft glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-200/40 to-emerald-300/40 blur-3xl -z-10" />

            <div className="bg-white/80 backdrop-blur-md p-12 sm:p-14 rounded-[32px] shadow-2xl border border-gray-100 
                            transition-all hover:shadow-[0_10px_50px_rgba(0,0,0,0.08)] w-full max-w-lg lg:max-w-xl">
              <div className="text-center">
                {/* Real Logo Instead of EB */}
                <img
                  src="/EB_LOGO.png"
                  alt="Education Beast Logo"
                  className="w-32 h-32 mx-auto mb-8 object-contain drop-shadow-md"
                />

                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">Education Beast</h3>
                <p className="text-gray-500 mb-12 text-lg">Palam, New Delhi</p>

                <div className="grid grid-cols-3 gap-8 sm:gap-10">
                  {[
                    { value: "500+", label: "Happy Students" },
                    { value: "95%", label: "Success Rate" },
                    { value: "5+", label: "Years Experience" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl font-extrabold text-teal-600">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
