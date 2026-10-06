import { Link } from "react-router-dom";
import { BUSINESS, whatsappLink } from "../data/business";
import { Container } from "./ui";
import { FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-[#171321]/[0.06] bg-[#171321] text-white/70">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <span className="flex gap-[3px]">
                <span className="h-4 w-[3px] rounded-full bg-[#FFF2A6]" />
                <span className="h-4 w-[3px] rounded-full bg-[#EAD4FA]" />
                <span className="h-4 w-[3px] rounded-full bg-[#CDEEF5]" />
              </span>
            </span>
            <span className="font-display text-[1.05rem] font-bold tracking-tight text-white">
              CORE FITNESS
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A premium strength, cardio and functional training gym in Nagpur, built to help you
            move better and live better.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Core Fitness on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={BUSINESS.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Core Fitness on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
            >
              <FacebookIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={whatsappLink("Hi Core Fitness, I'd like to know more.")}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Core Fitness on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
            <li><Link to="/programs" className="transition-colors hover:text-white">Programs</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
            <li><Link to="/membership" className="transition-colors hover:text-white">Membership</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Programs
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/programs#strength-training" className="transition-colors hover:text-white">Strength Training</Link></li>
            <li><Link to="/programs#cardio-fitness" className="transition-colors hover:text-white">Cardio Fitness</Link></li>
            <li><Link to="/programs#functional-training" className="transition-colors hover:text-white">Functional Training</Link></li>
            <li><Link to="/programs#personal-training" className="transition-colors hover:text-white">Personal Training</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Visit Us
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0" />
              <span>
                {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-4.5 w-4.5 shrink-0" />
              <a href={BUSINESS.phoneHref} className="transition-colors hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-4.5 w-4.5 shrink-0" />
              <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Core Fitness, Nagpur. All rights reserved.</p>
          <p>Sakkardara Chowk, Nagpur, Maharashtra</p>
        </Container>
      </div>
    </footer>
  );
}
