import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import { Container, PrimaryButton, SecondaryButton, SectionHeading } from "../components/ui";
import { PROGRAMS } from "../data/programs";
import { FACILITIES } from "../data/facilities";
import { BUSINESS, whatsappLink } from "../data/business";
import ReviewsCarousel from "../components/ReviewsCarousel";
import Faq from "../components/Faq";
import MapEmbed from "../components/MapEmbed";
import { ActivityIcon, ArrowRightIcon, ClockIcon, FlameIcon, HeartPulseIcon, MapPinIcon, UserIcon } from "../components/icons";

const ICONS = { flame: FlameIcon, heart: HeartPulseIcon, activity: ActivityIcon, user: UserIcon };
const ACCENT_BG: Record<string, string> = {
  lavender: "bg-[#EAD4FA]",
  buttercream: "bg-[#FFF2A6]",
  mint: "bg-[#D9F2D0]",
  skyblue: "bg-[#CDEEF5]",
};

export default function Home() {
  return (
    <>
      <Seo
        title="Core Fitness Nagpur | Gym at Sakkardara Chowk — Strength, Cardio & Personal Training"
        description="Core Fitness is a premium gym near Shahu Samaj Building, Sakkardara Chowk, Nagpur, offering strength training, cardio, functional training and personal training."
      />
      <Hero />

      {/* Programs preview */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              eyebrow="Training Programs"
              title="Purposeful training for every goal."
              description="Four focused programs designed to build strength, endurance, mobility and consistency."
            />
            <SecondaryButton to="/programs" className="shrink-0">
              View All Programs <ArrowRightIcon className="h-4 w-4" />
            </SecondaryButton>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program, i) => {
              const Icon = ICONS[program.icon];
              return (
                <Reveal key={program.slug} delay={i * 90}>
                  <Link
                    to={`/programs#${program.slug}`}
                    className="group flex h-full flex-col rounded-[1.5rem] border border-[#171321]/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-30px_rgba(23,19,33,0.35)]"
                  >
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full ${ACCENT_BG[program.accent]}`}>
                      <Icon className="h-5.5 w-5.5 text-[#171321]" />
                    </span>
                    <span className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#55515E]">
                      {program.index}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-[#171321]">{program.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#55515E]">{program.short}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#171321]">
                      Learn more
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Facilities showcase */}
      <section className="bg-[#171321] py-24 text-white sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Facility"
            title="A space built for focused training."
            description="Clean, spacious and thoughtfully equipped — every corner of Core Fitness is designed to support your training."
            light
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map((facility, i) => (
              <Reveal key={facility.title} delay={i * 90}>
                <div className="group overflow-hidden rounded-[1.5rem] bg-white/5">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      width={600}
                      height={750}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-white">{facility.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{facility.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* About preview */}
      <section className="py-24 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={FACILITIES[0].image}
                alt="Strength training floor at Core Fitness"
                loading="lazy"
                width={400}
                height={520}
                className="h-full w-full rounded-[1.5rem] object-cover"
                style={{ aspectRatio: "4/5" }}
              />
              <img
                src={FACILITIES[2].image}
                alt="Functional training area at Core Fitness"
                loading="lazy"
                width={400}
                height={520}
                className="mt-10 h-full w-full rounded-[1.5rem] object-cover"
                style={{ aspectRatio: "4/5" }}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Core Fitness"
              title="A premium training environment in the heart of Nagpur."
              description="Core Fitness is built around one idea — training that fits your life. From strength and cardio to functional movement and personal coaching, our space and equipment support every stage of your fitness journey."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton to="/about">More About Us</PrimaryButton>
              <SecondaryButton to="/contact">Book a Gym Visit</SecondaryButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Membership CTA */}
      <section className="py-6 sm:py-10">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#EAD4FA] px-8 py-14 sm:px-16 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/40 blur-3xl" />
              <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-xl">
                  <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-tight tracking-tight text-[#171321]">
                    Ready to start training with purpose?
                  </h2>
                  <p className="mt-3 text-[#171321]/70">
                    Enquire about membership options at Core Fitness — our team will help you find the right fit.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <PrimaryButton to="/membership">Explore Membership</PrimaryButton>
                  <SecondaryButton href={whatsappLink("Hi Core Fitness, I'd like to know about membership options.")}>
                    Chat on WhatsApp
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Reviews */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Google Reviews"
            title="What our members are saying."
            align="center"
          />
          <div className="mt-14">
            <ReviewsCarousel />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#171321]/[0.02] py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions." align="center" />
          <div className="mt-14">
            <Faq />
          </div>
        </Container>
      </section>

      {/* Contact + map */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-[1.75rem] border border-[#171321]/10 bg-white p-8 sm:p-12">
              <SectionHeading
                eyebrow="Visit Us"
                title="Come train with us."
                description="Drop by, call ahead, or send us a message — we'd love to show you around Core Fitness."
              />
              <ul className="mt-8 space-y-4 text-[#55515E]">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#171321]" />
                  <span>
                    {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 shrink-0 text-[#171321]" />
                  <span>{BUSINESS.hours}</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton to="/contact">Contact Us</PrimaryButton>
                <SecondaryButton href={BUSINESS.phoneHref}>Call Now</SecondaryButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <MapEmbed className="h-full min-h-[360px] overflow-hidden rounded-[1.75rem] border border-[#171321]/10" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
