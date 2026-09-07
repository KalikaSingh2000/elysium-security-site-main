import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductBySlug, productCategories } from "@/data/products";
import { getSolutionBySlug } from "@/data/solutions";
import { getBlogBySlug } from "@/data/blogs";
import { siteConfig } from "@/lib/siteConfig";

const metadata: Record<string, { title: string; description: string }> = {
  "/": { title: `${siteConfig.companyName} | Integrated Security Systems India`, description: "Plan, deploy, and support biometric attendance, access control, parking automation, visitor management, and security screening systems across India." },
  "/about": { title: `About ${siteConfig.companyName} | Security Integration`, description: `Learn how ${siteConfig.companyName} approaches site planning, integrated delivery, installation, training, and lifecycle support.` },
  "/products": { title: `Security Products | ${siteConfig.companyName}`, description: "Explore biometric devices, entrance control, vehicle access, perimeter security, and checkpoint screening equipment." },
  "/solutions": { title: `Integrated Security Solutions | ${siteConfig.companyName}`, description: "Explore connected solutions for attendance, access, visitors, parking, crowd management, tolling, and security screening." },
  "/industries": { title: `Security Systems by Industry | ${siteConfig.companyName}`, description: "Security and automation planning for corporate, industrial, healthcare, education, government, transport, and logistics environments." },
  "/case-studies": { title: `Security Deployment Scenarios | ${siteConfig.companyName}`, description: "Review representative planning scenarios for workforce identity, access control, parking, visitors, and security screening." },
  "/downloads": { title: `Security Product Resources | ${siteConfig.companyName}`, description: `Browse product guidance and request project-specific technical information from ${siteConfig.companyName}.` },
  "/blog": { title: `Security Planning Guides | ${siteConfig.companyName}`, description: "Practical guides for biometric attendance, access control, parking automation, visitor management, and security screening." },
  "/contact": { title: `Contact ${siteConfig.companyName} | Request an Assessment`, description: `Discuss a security project, site assessment, product requirement, or multi-location rollout with ${siteConfig.companyName}.` },
  "/request-demo": { title: `Request a Quote | ${siteConfig.companyName}`, description: "Request a quote, a focused product demonstration, or a security solution consultation for your organization." },
  "/careers": { title: `Careers | ${siteConfig.companyName}`, description: `Learn about working across security solution planning, technical delivery, projects, and support at ${siteConfig.companyName}.` },
  "/privacy-policy": { title: `Privacy Policy | ${siteConfig.companyName}`, description: `Read how ${siteConfig.companyName} handles information submitted through this website.` },
  "/terms": { title: `Website Terms | ${siteConfig.companyName}`, description: `Read the terms governing use of the ${siteConfig.companyName} website.` },
  "/thank-you": { title: `Enquiry Received | ${siteConfig.companyName}`, description: `Your enquiry has been received by ${siteConfig.companyName}.` },
};

const setMeta = (selector: string, attribute: string, value: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.setAttribute(attribute, value);
};

const setJsonLd = (id: string, data: Record<string, unknown> | null) => {
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const script = existing ?? document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.id = id;
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
};

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const exact = metadata[pathname];
    const slug = pathname.split("/").filter(Boolean)[1] ?? "";
    const product = pathname.startsWith("/products/") ? getProductBySlug(slug) : undefined;
    const solution = pathname.startsWith("/solutions/") ? getSolutionBySlug(slug) : undefined;
    const article = pathname.startsWith("/blog/") ? getBlogBySlug(slug) : undefined;
    const fallback = product
      ? { title: `${product.name} | ${siteConfig.companyName}`, description: product.shortDescription }
      : solution
        ? { title: `${solution.name} | ${siteConfig.companyName}`, description: solution.shortDescription }
        : article
          ? { title: article.metaTitle, description: article.metaDescription }
          : metadata["/"];
    const page = exact ?? fallback;
    const canonical = `${window.location.origin}${pathname}`;
    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", page.title);
    setMeta('meta[name="twitter:description"]', "content", page.description);
    setMeta('meta[property="og:image"]', "content", `${window.location.origin}/og.png`);
    setMeta('meta[name="twitter:image"]', "content", `${window.location.origin}/og.png`);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonical);

    setJsonLd("ld-organization", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/uploads/branding/logo.png`,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      areaServed: { "@type": "Country", name: "India" },
    });

    const categoryName = product ? productCategories.find((category) => category.id === product.category)?.name : undefined;
    const breadcrumbTrail = product
      ? [
          { name: "Home", item: `${siteConfig.siteUrl}/` },
          { name: "Products", item: `${siteConfig.siteUrl}/products` },
          ...(categoryName ? [{ name: categoryName, item: `${siteConfig.siteUrl}/products?category=${product.category}` }] : []),
          { name: product.name, item: canonical },
        ]
      : solution
        ? [
            { name: "Home", item: `${siteConfig.siteUrl}/` },
            { name: "Solutions", item: `${siteConfig.siteUrl}/solutions` },
            { name: solution.name, item: canonical },
          ]
        : article
          ? [
              { name: "Home", item: `${siteConfig.siteUrl}/` },
              { name: "Insights", item: `${siteConfig.siteUrl}/blog` },
              { name: article.title, item: canonical },
            ]
          : pathname === "/products" || pathname === "/solutions" || pathname === "/industries" || pathname === "/case-studies" || pathname === "/blog"
            ? [
                { name: "Home", item: `${siteConfig.siteUrl}/` },
                { name: page.title.split(" | ")[0], item: canonical },
              ]
            : null;

    setJsonLd(
      "ld-breadcrumb",
      breadcrumbTrail && {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbTrail.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.item,
        })),
      },
    );

    setJsonLd(
      "ld-product",
      product
        ? {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            category: categoryName,
            image: `${siteConfig.siteUrl}${product.image}`,
            brand: { "@type": "Organization", name: siteConfig.companyName },
          }
        : null,
    );

    setJsonLd(
      "ld-faq",
      product?.faqs?.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }
        : null,
    );

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default RouteMetadata;
