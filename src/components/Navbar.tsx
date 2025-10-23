import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown, Menu, X, Phone, Star } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-teal-100 shadow-sm">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">Best Coaching in Palam</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+91-9540690658</span>
            </div>
          </div>
          <div className="text-xs md:text-sm">
            🎓 <span className="font-semibold">Admissions Open</span> - Free Demo Classes
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* ---------- BRAND ---------- */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 group transition-all flex-shrink-0"
        >
          <img
            src="/EB_LOGO.png"
            alt="Education Beast Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="leading-tight">
            <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-teal-700 to-emerald-800 bg-clip-text text-transparent">
              Education Beast
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-600">
              Palam, New Delhi
            </div>
          </div>
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {/* Courses Dropdown */}
            <div
              className="relative"
              ref={wrapRef}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                className="inline-flex items-center gap-1 font-semibold text-gray-800 hover:text-teal-700 transition-all duration-200"
                aria-haspopup="menu"
                aria-expanded={open}
              >
                Courses <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {open && (
                <div
                  className="absolute left-0 top-full pt-2 z-[999] animate-in fade-in-0 zoom-in-95"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <div
                    role="menu"
                    className="w-[500px] rounded-xl border border-teal-100 bg-white/95 backdrop-blur-xl shadow-xl p-4 grid grid-cols-2 gap-4"
                  >
                    <div>
                      <div className="text-xs font-bold uppercase text-teal-600 mb-3 pb-1 border-b border-teal-100">
                        Class 11
                      </div>
                      <ul className="space-y-1">
                        {class11.map((c) => (
                          <li key={c.id}>
                            <Link
                              to={`/courses?select=${c.id}`}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all duration-200"
                            >
                              {c.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-teal-600 mb-3 pb-1 border-b border-teal-100">
                        Class 12
                      </div>
                      <ul className="space-y-1">
                        {class12.map((c) => (
                          <li key={c.id}>
                            <Link
                              to={`/courses?select=${c.id}`}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all duration-200"
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
              className="font-semibold text-gray-800 hover:text-teal-700 transition-colors duration-200"
            >
              Results
            </Link>
            <Link
              to="/blog"
              className="font-semibold text-gray-800 hover:text-teal-700 transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              to="/contact#contact"
              onClick={handleContactClick}
              className="font-semibold text-gray-800 hover:text-teal-700 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center rounded-xl border border-teal-100 bg-white px-3 py-2 shadow-sm focus-within:border-teal-300 focus-within:ring-2 focus-within:ring-teal-100 transition-all duration-200">
            <Search className="w-4 h-4 text-teal-600 mr-2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={onKey}
              placeholder="Search Courses..."
              className="outline-none placeholder:text-gray-400 w-48 text-sm bg-transparent"
            />
          </div>

          {/* Reach Us Button */}
          <Link
            to="/contact#contact"
            onClick={handleContactClick}
            className="rounded-xl bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-bold px-5 py-2.5 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Reach Us !
          </Link>
        </nav>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          className="lg:hidden p-2 rounded-xl bg-teal-50 text-teal-700 hover:bg-teal-100 shadow-sm transition-all duration-200"
          onClick={() => setMobileMenu((p) => !p)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ---------- MOBILE MENU PANEL ---------- */}
      {mobileMenu && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-teal-100 shadow-lg animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-1 p-4">
            {/* Search in Mobile */}
            <div className="flex items-center rounded-xl border border-teal-100 bg-white px-3 py-2 mb-3">
              <Search className="w-4 h-4 text-teal-600 mr-2" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onKey}
                placeholder="Search Courses..."
                className="outline-none placeholder:text-gray-400 w-full text-sm bg-transparent"
              />
            </div>

            <Link 
              to="/courses" 
              onClick={() => setMobileMenu(false)}
              className="font-semibold text-gray-800 hover:text-teal-700 py-3 px-3 rounded-lg hover:bg-teal-50 transition-all duration-200"
            >
              Courses
            </Link>
            <Link 
              to="/results" 
              onClick={() => setMobileMenu(false)}
              className="font-semibold text-gray-800 hover:text-teal-700 py-3 px-3 rounded-lg hover:bg-teal-50 transition-all duration-200"
            >
              Results
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setMobileMenu(false)}
              className="font-semibold text-gray-800 hover:text-teal-700 py-3 px-3 rounded-lg hover:bg-teal-50 transition-all duration-200"
            >
              Blog
            </Link>
            <Link
              to="/contact#contact"
              onClick={(e) => {
                handleContactClick(e);
                setMobileMenu(false);
              }}
              className="font-semibold text-gray-800 hover:text-teal-700 py-3 px-3 rounded-lg hover:bg-teal-50 transition-all duration-200"
            >
              Contact
            </Link>
            <Link
              to="/contact#contact"
              onClick={(e) => {
                handleContactClick(e);
                setMobileMenu(false);
              }}
              className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg mt-2 text-center hover:scale-105 transition-transform duration-200"
            >
              Reach Us !
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}