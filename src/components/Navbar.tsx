import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { COURSES } from "@/config/courses";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  // close dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // navigate to Explore Courses with query
  const submitSearch = () => {
    const query = q.trim();
    nav(`/courses${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  };

  // keyboard search
  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submitSearch();
  };

  const class11 = useMemo(() => COURSES.filter((c) => c.cls === 11), []);
  const class12 = useMemo(() => COURSES.filter((c) => c.cls === 12), []);

  // close on click outside
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  // helper for contact smooth scroll when already on /contact
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-4 py-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white grid place-items-center font-extrabold">
            EB
          </div>
        </Link>
        <div className="leading-tight">
          <div className="text-xl font-extrabold text-teal-700">Education Beast</div>
          <div className="text-xs text-gray-500 -mt-0.5">Palam, New Delhi</div>
        </div>

        {/* Nav items */}
        <nav className="ml-auto flex items-center gap-6">
          {/* Courses (hover) */}
          <div
            className="relative"
            ref={wrapRef}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1 font-semibold text-slate-800 hover:text-teal-700"
              aria-haspopup="menu"
              aria-expanded={open}
              onFocus={() => setOpen(true)}
            >
              Courses <ChevronDown className="w-4 h-4" />
            </button>

            {open && (
              // wrapper: bridge (pt-2) + high z-index so nothing steals hover
              <div
                className="absolute left-0 top-full pt-2 z-[999]"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <div
                  role="menu"
                  className="w-[560px] rounded-xl border bg-white shadow-xl p-4 grid grid-cols-2 gap-4"
                >
                  {/* Class 11 */}
                  <div>
                    <div className="text-xs font-bold uppercase text-gray-500 mb-2">Class 11</div>
                    <ul className="space-y-1">
                      {class11.map((c) => (
                        <li key={c.id}>
                          <Link
                            to={`/courses?select=${c.id}`}
                            className="block rounded-md px-2 py-1.5 hover:bg-teal-50 hover:text-teal-700"
                          >
                            {c.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Class 12 */}
                  <div>
                    <div className="text-xs font-bold uppercase text-gray-500 mb-2">Class 12</div>
                    <ul className="space-y-1">
                      {class12.map((c) => (
                        <li key={c.id}>
                          <Link
                            to={`/courses?select=${c.id}`}
                            className="block rounded-md px-2 py-1.5 hover:bg-teal-50 hover:text-teal-700"
                          >
                            {c.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results & Blog */}
          <Link to="/results" className="font-semibold text-slate-800 hover:text-teal-700">
            Results
          </Link>
          <Link to="/blog" className="font-semibold text-slate-800 hover:text-teal-700">
            Blog
          </Link>

          {/* Contact → always scroll to #contact */}
          <Link
            to="/contact#contact"
            onClick={handleContactClick}
            className="font-semibold text-slate-800 hover:text-teal-700"
          >
            Contact
          </Link>

          {/* Search box */}
          <div className="hidden md:flex items-center rounded-xl border px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-teal-200">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={onKey}
              placeholder="Search by Course Name"
              className="outline-none placeholder:text-gray-400 w-56"
            />
          </div>

          {/* Apply button */}
          <Link
            to="/apply"
            className="rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white font-bold px-5 py-2.5 shadow"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
