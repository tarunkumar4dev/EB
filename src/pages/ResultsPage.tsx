// src/pages/ResultsPage.tsx
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TOPPERS } from "@/data/results";

export default function ResultsPage() {
  const location = useLocation();

  const onApplyClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // If the user is already on /contact, just smooth-scroll to the section
    if (location.pathname === "/contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-primary">
            Results & Achievements
          </h1>
          <p className="text-muted-foreground mt-2">
            Our students keep raising the bar. Proud moments!
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPPERS.map((t, idx) => (
            <Card key={idx} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-xl">{t.name}</CardTitle>
                <div className="text-xs text-muted-foreground">
                  {t.cls} • {t.year}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Badge className="text-base px-3 py-1.5">{t.score}</Badge>
                  {t.subject && (
                    <span className="text-sm text-slate-600">
                      Top in {t.subject}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact#contact"
            onClick={onApplyClick}
            className="inline-block rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white font-bold px-6 py-3 shadow hover:shadow-lg"
          >
            Apply Now — Be the Next Topper
          </Link>
        </div>
      </div>
    </section>
  );
}
