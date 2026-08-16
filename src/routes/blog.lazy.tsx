import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { 
  Search, 
  ArrowRight, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Mail,
  Filter,
  Newspaper
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog/data";
import { BlogCategory } from "@/lib/blog/types";

export const Route = createLazyFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find(p => p.isFeatured) || BLOG_POSTS[0];
  }, []);

  const latestPosts = useMemo(() => {
    return filteredPosts.filter(p => p.id !== (activeCategory === "All" && !searchQuery ? featuredPost.id : null));
  }, [filteredPosts, featuredPost, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
          >
            Insights for the <span className="text-primary italic">Future</span> of Healthcare.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Explore ideas, insights and practical knowledge about pharmacy technology, healthcare innovation, AI, business growth and the future of connected healthcare.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto pt-8 relative"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search healthcare, pharmacy & technology insights..." 
                className="pl-12 h-14 rounded-full border-primary/20 bg-muted/30 focus-visible:ring-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as BlogCategory)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground border-primary shadow-md" 
                  : "bg-muted/50 text-muted-foreground border-transparent hover:border-primary/20 hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article - Only show when no active search/category filter that excludes it */}
      {activeCategory === "All" && !searchQuery && (
        <section className="container mx-auto px-4 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative rounded-3xl overflow-hidden bg-muted/20 border border-primary/10 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 items-stretch">
              <div className="aspect-[16/9] lg:aspect-auto relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <Badge variant="outline" className="w-fit text-primary border-primary/20 px-3 py-1">
                  Featured: {featuredPost.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {featuredPost.summary}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="font-semibold text-foreground">{featuredPost.author.name}</div>
                  <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <div>{featuredPost.publishedDate}</div>
                </div>
                <Button variant="link" className="w-fit px-0 text-primary text-lg font-semibold group-hover:translate-x-2 transition-transform" asChild>
                  <Link to="/blog/$slug" params={{ slug: featuredPost.slug }}>
                    Read Article <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="container mx-auto px-4 mb-24">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            {searchQuery || activeCategory !== "All" ? "Search Results" : "Latest Articles"}
          </h3>
          <div className="text-sm text-muted-foreground">
            Showing {filteredPosts.length} articles
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {latestPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col"
              >
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="block overflow-hidden rounded-2xl mb-5 aspect-[16/10] relative border border-primary/5">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 backdrop-blur-sm text-primary hover:bg-background border-primary/10">
                      {post.category}
                    </Badge>
                  </div>
                </Link>
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.publishedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readingTime}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                <Button variant="link" className="w-fit px-0 text-primary font-semibold mt-4 group-hover:translate-x-1 transition-transform" asChild>
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/10 rounded-3xl border border-dashed border-primary/20">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h4 className="text-xl font-medium text-muted-foreground">No articles found matching your criteria.</h4>
            <Button variant="link" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-2 text-primary">
              Clear all filters
            </Button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="relative rounded-[2.5rem] bg-[#0f172a] overflow-hidden p-10 md:p-20 text-center">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-teal-500/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Stay Ahead of Healthcare Technology.
            </h2>
            <p className="text-lg text-slate-400">
              Get the latest Med4One insights, pharmacy technology trends and healthcare innovation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="h-14 rounded-full bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-primary"
              />
              <Button className="h-14 rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-slate-500">
              We respect your privacy. Unsubscribe at any time. (Demo form)
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 text-center pb-12">
        <div className="max-w-xl mx-auto space-y-8">
          <h3 className="text-2xl font-bold">Have a question about Med4One?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 px-8" asChild>
              <Link to="/solutions">Explore Med4One</Link>
            </Button>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8" asChild>
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
