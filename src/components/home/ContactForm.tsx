import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { CheckCircle2, Send } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const benefits = [
  "A consultation focused on your operating requirements",
  "A solution outline covering hardware, software, and integration",
  "Clear next steps for survey, proposal, and deployment",
  "Coordination for single-site and multi-location requirements",
];

const ContactForm = () => (
  <SectionWrapper id="contact-form">
    <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <SectionHeading
          badge="Start a Conversation"
          title="Tell Us What You Need to Secure"
          description="Share your site type, entry points, workforce size, or current operational challenge. Our team will review the requirement and respond with practical next steps."
          centered={false}
        />
        <div className="space-y-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <form
        name="general-enquiry"
        method="POST"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-5 rounded-[1.75rem] border border-border bg-card p-6 shadow-card sm:p-8"
      >
        <input type="hidden" name="form-name" value="general-enquiry" />
        <p className="hidden">
          <Label htmlFor="home-bot-field">Do not fill this out</Label>
          <Input id="home-bot-field" name="bot-field" />
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="home-name">Full name</Label>
            <Input id="home-name" name="name" autoComplete="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="home-company">Company</Label>
            <Input id="home-company" name="company" autoComplete="organization" />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="home-phone">Phone number</Label>
            <Input id="home-phone" name="phone" type="tel" autoComplete="tel" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="home-email">Work email</Label>
            <Input id="home-email" name="email" type="email" autoComplete="email" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="home-requirement">Requirement</Label>
          <Textarea id="home-requirement" name="requirement" rows={5} placeholder="Site type, locations, products of interest, and the problem you want to solve" required />
        </div>
        <p className="text-xs leading-5 text-muted-foreground">
          By submitting, you agree that {siteConfig.companyName} may contact you about this enquiry. See our{" "}
          <Link to="/privacy-policy" className="font-medium text-accent hover:underline">Privacy Policy</Link>.
        </p>
        <Button type="submit" variant="hero" size="lg" className="w-full">
          Send Enquiry <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  </SectionWrapper>
);

export default ContactForm;
