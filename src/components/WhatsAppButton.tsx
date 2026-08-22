import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsAppButton = () => (
  <Link
    to="/contact"
    className="fixed bottom-5 right-5 z-50 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1"
    aria-label="Open enquiry form"
  >
    <MessageCircle className="h-5 w-5 text-accent" /> Enquire
  </Link>
);

export default WhatsAppButton;
