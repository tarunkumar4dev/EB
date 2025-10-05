import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogList() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-primary">Blog</h1>
          <p className="text-muted-foreground mt-2">
            Tips, study plans, and updates from Education Beast.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((p) => (
            <Card key={p.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  <Link to={`/blog/${p.slug}`} className="hover:text-teal-600">
                    {p.title}
                  </Link>
                </CardTitle>
                <div className="text-xs text-muted-foreground">
                  {new Date(p.date).toLocaleDateString()} • {p.author}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">{p.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <Link
                  to={`/blog/${p.slug}`}
                  className="inline-block mt-4 text-teal-700 font-semibold"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
