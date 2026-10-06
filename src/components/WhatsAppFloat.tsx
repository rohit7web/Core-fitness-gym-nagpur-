import { whatsappLink } from "../data/business";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hi Core Fitness, I'd like to enquire about membership.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Core Fitness on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#21152E] text-white shadow-[0_15px_35px_-10px_rgba(23,19,33,0.5)] transition-transform hover:-translate-y-0.5 hover:bg-[#171321]"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
