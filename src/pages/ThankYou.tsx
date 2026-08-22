import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => (
  <><Header /><main className="flex min-h-[75vh] items-center pt-28"><div className="section-container w-full py-20 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10"><CheckCircle2 className="h-8 w-8 text-accent" /></div><h1 className="mt-7 text-4xl font-heading text-foreground md:text-5xl">Thank you. Your enquiry has been received.</h1><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">The Elysium Security team will review the information and follow up using the contact details you provided.</p><Link to="/" className="mt-8 inline-block"><Button variant="hero" size="lg">Return to Home <ArrowRight className="h-4 w-4" /></Button></Link></div></main><Footer /></>
);

export default ThankYou;
