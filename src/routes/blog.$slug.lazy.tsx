import { createLazyFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/blog/data";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/blog/$slug")({
  component: ArticlePage,
});

function ArticlePage() {
  const params = Route.useParams();
  const slug = (params as any).slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">The article you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const relatedArticles = BLOG_POSTS
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const toc = [
    { id: "intro", text: "Introduction" },
    { id: "shift", text: "The Shift in Pharmacy Operations" },
    { id: "rise", text: "The Rise of Intelligent Platforms" },
    { id: "pillars", text: "Key Pillars of Modern Technology" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        <article className="max-w-7xl mx-auto">
          <header className="max-w-4xl mx-auto mb-12 space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                {post.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {post.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {post.readingTime}
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                {post.author.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>
          </header>

          <div className="rounded-3xl overflow-hidden aspect-[21/9] mb-16 shadow-2xl border border-primary/5">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-16">
            <div className="max-w-4xl">
              <div 
                className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              />

              <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="font-bold text-lg flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-primary" />
                  Share this article
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full border-primary/10 hover:bg-primary/5">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-primary/10 hover:bg-primary/5">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-primary/10 hover:bg-primary/5">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <aside className="hidden lg:block space-y-12">
              <div className="sticky top-32 space-y-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Table of Contents</h4>
                  <nav className="flex flex-col gap-3">
                    {toc.map((item) => (
                      <button
                        key={item.id}
                        className={`text-left text-sm transition-colors hover:text-primary ${
                          activeId === item.id ? "text-primary font-semibold" : "text-muted-foreground"
                        }`}
                      >
                        {item.text}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6 rounded-2xl bg-[#0f172a] text-white space-y-4">
                  <h5 className="font-bold">Med4One PharmacyOS</h5>
                  <p className="text-sm text-slate-400">Transform your pharmacy with the most advanced intelligent platform.</p>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white font-bold" asChild>
                    <Link to="/book-demo">Get Started</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <section className="max-w-7xl mx-auto mt-24">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <Link 
                  key={article.id} 
                  to="/blog/$slug" 
                  params={{ slug: article.slug }}
                  className="group block space-y-4"
                >
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-primary/5">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/10 group-hover:bg-primary/5 transition-colors">
                    {article.category}
                  </Badge>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    Read More <ChevronRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
