import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="flex min-h-[75vh] items-center pt-28">
        <div className="section-container w-full py-20 text-center">
          <div className="mx-auto text-6xl font-heading font-bold text-accent">404</div>
          <h1 className="mt-4 text-3xl font-heading font-bold text-foreground md:text-4xl">
            We couldn't find that page
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
            The page may have moved or the link may be out of date. Try the homepage or browse
            our product catalogue instead.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/">
              <Button variant="hero" size="lg">
                Return to Home <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
