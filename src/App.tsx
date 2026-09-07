import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import RouteMetadata from "./components/RouteMetadata";
import PageLoader from "./components/PageLoader";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Solutions = lazy(() => import("./pages/Solutions"));
const SolutionDetail = lazy(() => import("./pages/SolutionDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Downloads = lazy(() => import("./pages/Downloads"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const RequestDemo = lazy(() => import("./pages/RequestDemo"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteMetadata />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
