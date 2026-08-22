import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import ContentImage from "@/components/ContentImage";
import { blogPosts } from "@/data/blogs";
import { ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1);

  return (
    <>
      <Header />
      <main>
        <section className="mesh-section overflow-hidden pb-20 pt-32">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Knowledge Hub
              </span>
              <h1 className="mt-6 text-4xl font-heading leading-[1.02] text-foreground md:text-6xl">
                Practical guidance for better security decisions
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Product explainers, deployment guides, and buyer education for security,
                attendance, access control, and automation teams.
              </p>
            </div>
          </div>
        </section>

        <SectionWrapper className="pt-0">
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group editorial-panel grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]"
          >
            <ContentImage
              src={featuredPost.featuredImage}
              alt={featuredPost.title}
              label="Featured security guide"
              className="h-full min-h-[320px] rounded-none border-0"
            />
            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Featured article
                </span>
                <h2 className="mt-4 text-3xl font-heading leading-tight text-foreground md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-border/70 pt-5">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>{featuredPost.category}</span>
                  <span>{featuredPost.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {secondaryPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group editorial-panel overflow-hidden"
              >
                <ContentImage
                  src={post.featuredImage}
                  alt={post.title}
                  label="Security knowledge guide"
                  className="min-h-[230px] rounded-none border-0"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    <span className="font-semibold text-accent">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-heading leading-tight text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-sm">
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-2 font-semibold text-accent transition-all group-hover:gap-3">
                      Open <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Blog;
