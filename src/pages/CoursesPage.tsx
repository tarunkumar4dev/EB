import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { COURSES, Course } from "@/config/courses";

const Pill = ({
  active, children, onClick,
}: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full border text-sm ${
      active ? "bg-teal-600 text-white border-teal-600"
             : "bg-white text-slate-700 hover:bg-teal-50 border-slate-200"
    }`}
  >
    {children}
  </button>
);

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function CoursesPage() {
  const q = useQuery();
  const nav = useNavigate();

  const query  = (q.get("q") || "").toLowerCase();
  const select = q.get("select"); // e.g., 11-accounts
  const cls    = (q.get("class") as "11" | "12" | null) || null;
  const stream = (q.get("stream") as Course["stream"] | null) || null;

  let filtered = COURSES.slice();

  if (select) filtered = filtered.filter(c => c.id === select);
  if (query)  filtered = filtered.filter(c => c.title.toLowerCase().includes(query));
  if (cls)    filtered = filtered.filter(c => String(c.cls) === cls);
  if (stream) filtered = filtered.filter(c => c.stream === stream);

  const setParam = (key: string, value?: string) => {
    const params = new URLSearchParams(window.location.search);
    if (!value) params.delete(key); else params.set(key, value);
    params.delete("select"); // reset direct selection when filtering
    nav(`/courses?${params.toString()}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Explore Courses</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <Pill active={!cls} onClick={() => setParam("class")}>All Classes</Pill>
        <Pill active={cls === "11"} onClick={() => setParam("class", "11")}>Class 11</Pill>
        <Pill active={cls === "12"} onClick={() => setParam("class", "12")}>Class 12</Pill>

        <span className="mx-2 text-gray-300">|</span>

        <Pill active={!stream} onClick={() => setParam("stream")}>All Streams</Pill>
        <Pill active={stream === "Commerce"} onClick={() => setParam("stream", "Commerce")}>Commerce</Pill>
        <Pill active={stream === "Maths"} onClick={() => setParam("stream", "Maths")}>Maths</Pill>
        <Pill active={stream === "Science"} onClick={() => setParam("stream", "Science")}>Science</Pill>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <p className="text-gray-600">No courses found. Try a different search.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <article key={c.id} className="rounded-2xl border shadow-sm p-5 hover:shadow-md transition bg-white">
              <div className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">
                Class {c.cls} • {c.stream}
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {c.short || "Expert faculty • Regular tests • Doubt support"}
              </p>
              <div className="flex gap-3">
                <a href={`/apply?course=${c.id}`} className="px-4 py-2 rounded-lg bg-teal-600 text-white font-semibold">Apply</a>
                <a href={`/contact?course=${c.id}`} className="px-4 py-2 rounded-lg border font-semibold">Know more</a>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
