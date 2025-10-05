// src/components/PopularCourses.tsx
import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

const StarRow = ({ count = 5 }: { count?: number }) => (
  <div className="flex justify-center gap-1 text-yellow-400 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400" />
    ))}
  </div>
);

const Card = ({
  title,
  copy,
  img,
  stats,
  rating = 5,
  quote,
  focus = "object-center",
}: {
  title: string;
  copy: string;
  img: string;
  stats: string[];
  rating?: number;
  quote: string;
  focus?: string; // Tailwind object-position utility (e.g., "object-[50%_55%]")
}) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
    <div className="overflow-hidden rounded-xl mb-5">
      <img
        src={img}
        alt={title}
        className={`w-full h-56 md:h-60 object-cover ${focus}`}
      />
    </div>
    <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-600 mt-2">{copy}</p>
    <StarRow count={rating} />
    <ul className="text-sm text-slate-700 space-y-2 my-4">
      {stats.map((s, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-teal-600 mt-[2px]" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
    <blockquote className="text-sm text-slate-500 italic border-t pt-4">
      “{quote}”
    </blockquote>
  </div>
);

const PopularCourses = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-3">Popular Courses</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our most-loved programs with real outcomes and student reviews.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1) EB2 — teacher slightly lower (center 55%) */}
          <Card
            title="Class 11–12 Commerce (Specialized)"
            copy="Accounts, Economics, Business Studies & Maths—our flagship stream with consistent top scores."
            img="/EB4.jpg"
            focus="object-[50%_55%]"
            stats={[
              "Concept-first teaching + weekly tests",
              "Improved board performance & clarity",
              "Doubt clinics and personalised feedback",
            ]}
            rating={5}
            quote="Teachers made Accounts and Eco feel easy. My confidence jumped in 4 weeks."
          />

          {/* 2) EB1 — keep natural center */}
          <Card
            title="Class 9–10 Science Foundation"
            copy="Strong fundamentals in Physics, Chemistry, Biology and Maths for board success."
            img="/EB1.jpg"
            focus="object-center"
            stats={[
              "Foundation building with NCERT focus",
              "Weekly quizzes + chapter-wise worksheets",
              "Regular parent updates & progress",
            ]}
            rating={4}
            quote="The weekly tests and notes boosted my basics—marks improved steadily."
          />

          {/* 3) EB2 — teacher slightly lower again */}
          <Card
            title="Class 11–12 Science (PCM / PCB)"
            copy="Structured prep with concept clarity and disciplined practice for boards + entrances."
            img="/EB3.jpg"
            focus="object-[50%_55%]"
            stats={[
              "Mentor support and doubt resolution",
              "Topic-wise assignments & review",
              "Consistent exam practice & analysis",
            ]}
            rating={5}
            quote="Timetable + doubt clinics kept me on track. Very systematic approach."
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
