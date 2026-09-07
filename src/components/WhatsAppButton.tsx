import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";

const WhatsAppButton = () => (
  <a
    href={whatsappLink(`Hi ${siteConfig.companyName}, I'd like to enquire about your security and access control solutions.`)}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1"
    aria-label="Chat with us on WhatsApp"
  >
    <MessageCircle className="h-5 w-5" /> WhatsApp Us
  </a>
);

export default WhatsAppButton;
