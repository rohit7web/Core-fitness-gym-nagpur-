import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { Container, SectionHeading } from "../components/ui";
import { BUSINESS, whatsappLink } from "../data/business";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../components/icons";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Core Fitness Nagpur"
        description="Contact Core Fitness near Sakkardara Chowk, Nagpur. Call, WhatsApp or send an enquiry — view our location, hours and map."
      />

      <section className="pt-16 pb-8 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your training."
            description="Reach out with any questions about programs, membership or booking a gym visit — we're happy to help."
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-[#171321]/10 bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAD4FA]">
                    <MapPinIcon className="h-5 w-5 text-[#171321]" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-[#171321]">Address</h3>
                    <p className="mt-1 text-[#55515E]">
                      {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#171321]/10 bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF2A6]">
                    <ClockIcon className="h-5 w-5 text-[#171321]" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-[#171321]">Working Hours</h3>
                    <p className="mt-1 text-[#55515E]">{BUSINESS.hours}</p>
                    <p className="text-sm text-[#55515E]/70">{BUSINESS.hoursNote}</p>
                  </div>
                </div>
              </div>

              <a
                href={BUSINESS.phoneHref}
                className="block rounded-[1.5rem] border border-[#171321]/10 bg-white p-6 transition-colors hover:border-[#171321]/30"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9F2D0]">
                    <PhoneIcon className="h-5 w-5 text-[#171321]" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-[#171321]">Call Us</h3>
                    <p className="mt-1 text-[#55515E]">{BUSINESS.phoneDisplay}</p>
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="block rounded-[1.5rem] border border-[#171321]/10 bg-white p-6 transition-colors hover:border-[#171321]/30"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#CDEEF5]">
                    <MailIcon className="h-5 w-5 text-[#171321]" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-[#171321]">Email</h3>
                    <p className="mt-1 text-[#55515E]">{BUSINESS.email}</p>
                  </div>
                </div>
              </a>

              <a
                href={whatsappLink("Hi Core Fitness, I'd like to get in touch.")}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[1.5rem] bg-[#21152E] p-6 text-white transition-colors hover:bg-[#171321]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold">Chat on WhatsApp</h3>
                    <p className="mt-1 text-white/70">Fastest way to reach our team directly.</p>
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-28">
        <Container>
          <SectionHeading eyebrow="Find Us" title="Core Fitness on the map." align="center" />
          <div className="mt-10">
            <MapEmbed className="h-[420px] overflow-hidden rounded-[1.75rem] border border-[#171321]/10" />
          </div>
        </Container>
      </section>
    </>
  );
}
