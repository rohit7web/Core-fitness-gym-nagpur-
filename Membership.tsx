import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { Container, PrimaryButton, SecondaryButton, SectionHeading } from "../components/ui";
import { BUSINESS, whatsappLink } from "../data/business";
import Faq from "../components/Faq";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "../components/icons";

const BENEFITS = [
  "Access to strength, cardio and functional training areas",
  "Guidance on safe and effective training form",
  "A clean, well-maintained training environment",
  "Flexible enquiry — talk to our team about what fits your goals",
];

export default function Membership() {
  return (
    <>
      <Seo
        title="Membership | Core Fitness Nagpur"
        description="Enquire about membership at Core Fitness, Sakkardara Chowk, Nagpur. Contact us for current membership details."
      />

      <section className="pt-16 pb-8 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Membership"
            title="Membership built around your goals."
            description="We keep membership simple — tell us what you're training for, and our team will help you find the right plan."
            align="center"
          />
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[2rem] bg-[#171321] px-8 py-14 text-center text-white sm:px-16 sm:py-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                Pricing
              </span>
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-tight">
                Contact Us for Membership Details
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/70">
                Membership plans and pricing are confirmed directly with our team so we can recommend the best
                option for your goals and schedule.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <PrimaryButton
                  href={whatsappLink("Hi Core Fitness, I'd like to know about membership pricing and plans.")}
                  className="bg-white text-[#171321] hover:bg-white/90"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" /> Enquire on WhatsApp
                </PrimaryButton>
                <SecondaryButton href={BUSINESS.phoneHref} className="border-white/30 bg-transparent text-white hover:border-white/60">
                  <PhoneIcon className="h-4.5 w-4.5" /> {BUSINESS.phoneDisplay}
                </SecondaryButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-[#171321]/[0.02] py-24 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="What's Included"
              title="What to expect as a Core Fitness member."
              description="While pricing is confirmed directly with our team, every membership is built around focused access to our training spaces."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-2xl border border-[#171321]/10 bg-white p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D9F2D0] text-[#171321]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[#55515E]">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Membership questions, answered." align="center" />
          <div className="mt-14">
            <Faq />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-24 sm:pb-28">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-[#EAD4FA] px-8 py-14 text-center sm:px-16">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight text-[#171321]">
                Still deciding? Book a free gym visit first.
              </h2>
              <p className="max-w-lg text-[#171321]/70">
                Walk through our facility, see the training floor and talk to our team before you commit.
              </p>
              <PrimaryButton to="/contact">Book a Gym Visit</PrimaryButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
