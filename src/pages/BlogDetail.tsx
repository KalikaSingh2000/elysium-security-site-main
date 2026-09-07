import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import ContentImage from "@/components/ContentImage";
import { blogPosts, getBlogBySlug } from "@/data/blogs";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug || "");
  const headings = post
    ? post.content
        .split("\n\n")
        .filter((paragraph) => paragraph.startsWith("## "))
        .map((heading) => heading.replace("## ", ""))
    : [];

  if (!post) {
    return (
      <>
        <Header />
        <div className="section-container pb-16 pt-32 text-center">
          <h1 className="text-2xl font-heading font-bold">Blog Post Not Found</h1>
          <Link to="/blog" className="mt-4 inline-block text-accent">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="mesh-section overflow-hidden pb-20 pt-32">
          <div className="section-container">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="space-y-6">
                <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  {post.category}
                </span>
                <h1 className="text-4xl font-heading leading-[1.03] text-foreground md:text-6xl">
                  {post.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <ContentImage
                src={post.featuredImage}
                alt={post.title}
                label="Security planning guide"
                className="min-h-[360px]"
              />
            </div>
          </div>
        </section>

        <SectionWrapper className="pt-0">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(260px,0.28fr)]">
            <article className="editorial-panel p-6 md:p-10">
              <div className="mb-8 rounded-[1.2rem] border border-accent/20 bg-accent/5 p-5 text-sm leading-7 text-foreground/80">This guide is general educational information. Product performance, savings, compliance, and implementation outcomes depend on the selected equipment, configuration, site conditions, and operating process. Verify project-specific requirements before purchase.</div>
              <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-8 prose-strong:text-foreground">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="mt-10 text-2xl font-heading font-bold text-foreground">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }

                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="mt-8 text-xl font-heading font-semibold text-foreground">
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }

                  if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={index} className="my-6 space-y-3">
                        {paragraph.split("\n").map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{item.replace("- ", "")}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (/^\d\./.test(paragraph)) {
                    return (
                      <ol key={index} className="my-6 space-y-3 pl-5 text-muted-foreground">
                        {paragraph.split("\n").map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ol>
                    );
                  }

                  return (
                    <p key={index} className="mb-4 text-base leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </article>

            <aside className="space-y-6">
              <div className="editorial-panel p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  In this article
                </div>
                <div className="mt-4 space-y-3">
                  {headings.map((heading) => (
                    <p key={heading} className="text-sm leading-7 text-foreground/80">
                      {heading}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Planning a project?
                </div>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Product selection should follow site conditions, throughput, integration,
                  and support requirements. Discuss your application with our team.
                </p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">Request guidance <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </aside>
          </div>

          <div className="mt-14 border-t border-border/70 pt-10">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-heading text-foreground">Related Articles</h3>
              <Link to="/blog" className="text-sm font-semibold text-accent">
                View all
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts
                .filter((blog) => blog.id !== post.id)
                .slice(0, 2)
                .map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="group editorial-panel overflow-hidden"
                  >
                    <ContentImage
                      src={blog.featuredImage}
                      alt={blog.title}
                      label="Related security guide"
                      className="min-h-[220px] rounded-none border-0"
                    />
                    <div className="p-6">
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                        {blog.category}
                      </span>
                      <h4 className="mt-3 text-xl font-heading text-foreground transition-colors group-hover:text-accent">
                        {blog.title}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {blog.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                        Read article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogDetail;
