import { createFileRoute } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/lib/blog/data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    const title = post ? `${post.title} | Med4One Blog` : "Article | Med4One Blog";
    const description = post?.summary || "Explore insights and practical knowledge about healthcare technology and innovation at Med4One.";
    
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post?.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: post?.image },
      ],
    };
  },
});
