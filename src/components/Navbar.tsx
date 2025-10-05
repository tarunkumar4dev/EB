import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { COURSES } from "@/config/courses";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  /* ---------- Close dropdown on route change ---------- */
  useEffect(() => {
    setOpen(false);
    setMobileMenu(false);
  }, [location.pathname]);

  /* ---------- Search submit ---------- */
  const submitSearch = () => {
    const query = q.trim();
    nav(`/courses${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submitSearch();
  };

  const class11 = useMemo(() => COURSES.filter((c) => c.cls === 11), []);
  const class12 = useMemo(() => COURSES.filter((c) => c.cls === 12), []);

  /* ---------- Close on click outside ---------- */
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* ---------- Smooth scroll when already on /contact ---------- */
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* ---------- BRAND ---------- */}
        <Link
          to="/"
          className="flex items-center gap-3 sm:gap-4 group transition-all"
        >
          <img
            src="/EB_LOGO.png"
            alt="Education Beast Logo"
            className="w-16 h-16 object-contain -ml-1 transform group-hover:scale-105 transition-transform duration-200"
          />

          <div className="leading-tight">
            <div className="text-lg sm:text-xl font-extrabold text-teal-700">
              Education Beast
            </div>
            <div className="text-[11px] sm:text-xs text-gray-500 -mt-0.5">
              Palam, New Delhi
            </div>
          </div>
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Courses Dropdown */}
          <div
            className="relative"
            ref={wrapRef}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1 font-semibold text-slate-800 hover:text-teal-700 transition-colors"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Courses <ChevronDown className="w-4 h-4" />
            </button>

            {open && (
              <div
                className="absolute left-0 top-full pt-2 z-[999]"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <div
                  role="menu"
                  className="w-[560px] rounded-xl border bg-white shadow-xl p-4 grid grid-cols-2 gap-4"
                >
                  <div>
                    <div className="text-xs font-bold uppercase text-gray-500 mb-2">
                      Class 11
                    </div>
                    <ul className="space-y-1">
                      {class11.map((c) => (
                        <li key={c.id}>
                          <Link
                            to={`/courses?select=${c.id}`}
                            className="block rounded-md px-2 py-1.5 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                          >
                            {c.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-gray-500 mb-2">
                      Class 12
                    </div>
                    <ul className="space-y-1">
                      {class12.map((c) => (
                        <li key={c.id}>
                          <Link
                            to={`/courses?select=${c.id}`}
                            className="block rounded-md px-2 py-1.5 hover:bg-teal-50 hover:text-teal-700 transition-colors"
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

          {/* Other Links */}
          <Link
            to="/results"
            className="font-semibold text-slate-800 hover:text-teal-700"
          >
            Results
          </Link>
          <Link
            to="/blog"
            className="font-semibold text-slate-800 hover:text-teal-700"
          >
            Blog
          </Link>
          <Link
            to="/contact#contact"
            onClick={handleContactClick}
            className="font-semibold text-slate-800 hover:text-teal-700"
          >
            Contact
          </Link>

          {/* Search */}
          <div className="flex items-center rounded-xl border px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-teal-200 transition-all">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={onKey}
              placeholder="Search by Course Name"
              className="outline-none placeholder:text-gray-400 w-56"
            />
          </div>

          {/* Reach Us Button */}
          <Link
            to="/contact#contact"
            onClick={handleContactClick}
            className="rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold px-6 py-2.5 shadow-md hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            Reach Us !
          </Link>
        </nav>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          className="lg:hidden text-gray-700 hover:text-teal-700"
          onClick={() => setMobileMenu((p) => !p)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---------- MOBILE MENU PANEL ---------- */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md animate-slide-down">
          <nav className="flex flex-col gap-4 p-4 text-center text-gray-800 font-medium">
            <Link to="/courses" onClick={() => setMobileMenu(false)}>
              Courses
            </Link>
            <Link to="/results" onClick={() => setMobileMenu(false)}>
              Results
            </Link>
            <Link to="/blog" onClick={() => setMobileMenu(false)}>
              Blog
            </Link>
            <Link
              to="/contact#contact"
              onClick={(e) => {
                handleContactClick(e);
                setMobileMenu(false);
              }}
            >
              Contact
            </Link>
            <Link
              to="/contact#contact"
              onClick={(e) => {
                handleContactClick(e);
                setMobileMenu(false);
              }}
              className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold py-2 rounded-lg shadow-md"
            >
              Reach Us !
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
