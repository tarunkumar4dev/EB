import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog";
import { Card, CardContent } from "@/components/ui/card";

function renderContent(md: string) {
  // minimal markdown-ish renderer (safe plain)
  return md.split("\n").map((line, i) => {
    if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
    if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-semibold mt-5 mb-2">{line.slice(4)}</h3>;
    if (line.startsWith("- ")) return <li key={i} className="ml-6 list-disc">{line.slice(2)}</li>;
    if (line.startsWith("1. ")) return <li key={i} className="ml-6 list-decimal">{line.slice(3)}</li>;
    if (line.startsWith("> ")) return <blockquote key={i} className="border-l-4 pl-3 italic text-slate-600 my-3">{line.slice(2)}</blockquote>;
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} className="my-2">{line}</p>;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = useMemo(() => BLOG_POSTS.find(p => p.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="mb-6">Post not found.</p>
          <Link to="/blog" className="text-teal-700 font-semibold">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/blog" className="text-teal-700 font-semibold">← Back to Blog</Link>
        <h1 className="text-4xl font-extrabold text-primary mt-4">{post.title}</h1>
        <div className="text-sm text-muted-foreground mt-2">
          {new Date(post.date).toLocaleDateString()} • {post.author}
        </div>

        <Card className="mt-8">
          <CardContent className="prose max-w-none py-6">
            {renderContent(post.content)}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
