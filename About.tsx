import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { Container, PrimaryButton, SecondaryButton, SectionHeading } from "../components/ui";
import { FACILITIES } from "../data/facilities";
import { BUSINESS } from "../data/business";
import MapEmbed from "../components/MapEmbed";
import { ClockIcon, MapPinIcon } from "../components/icons";

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Core Fitness Nagpur"
        description="Learn about Core Fitness, a premium gym near Sakkardara Chowk, Nagpur — our training environment, facilities and location."
      />

      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="About Core Fitness"
              title="Training built around how you actually move and live."
              description="Core Fitness is a gym in Nagpur designed around one principle: purposeful training in a clean, well-equipped space. From strength and cardio to functional movement and personal coaching, every part of our facility is built to support consistent, effective training."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton to="/membership">Explore Membership</PrimaryButton>
              <SecondaryButton to="/contact">Book a Gym Visit</SecondaryButton>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={FACILITIES[1].image}
              alt="Core Fitness training floor in Nagpur"
              loading="eager"
              width={800}
              height={900}
              className="w-full rounded-[1.75rem] object-cover"
              style={{ aspectRatio: "4/4.5" }}
            />
          </Reveal>
        </Container>
      </section>

      {/* Facilities */}
      <section className="bg-[#171321]/[0.02] py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Facilities"
            title="Everything you need, in one focused space."
            description="A dedicated strength floor, cardio zone and functional training area — kept clean, spacious and ready for training."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {FACILITIES.map((facility, i) => (
              <Reveal key={facility.title} delay={i * 90}>
                <div className="group overflow-hidden rounded-[1.5rem] bg-white">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-[#171321]">{facility.title}</h3>
                    <p className="mt-1.5 text-[#55515E]">{facility.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Training environment */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Environment"
            title="A space designed for focus, not distraction."
            description="Natural light, clean layouts and clearly organised training zones — Core Fitness is built so you can walk in, focus and train without friction."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { title: "Well-Ventilated", copy: "Comfortable, airy training spaces year-round." },
              { title: "Clean Equipment", copy: "Well-maintained machines and free weights." },
              { title: "Clear Layout", copy: "Zones organised for strength, cardio and functional work." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="rounded-[1.5rem] border border-[#171321]/10 p-8 text-center">
                  <h3 className="font-display text-lg font-bold text-[#171321]">{item.title}</h3>
                  <p className="mt-2 text-[#55515E]">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="pb-24 sm:pb-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-[1.75rem] bg-[#171321] p-8 text-white sm:p-12">
              <SectionHeading
                eyebrow="Location"
                title="Find us near Sakkardara Chowk."
                light
                description="Core Fitness is located near Shahu Samaj Building, Sakkardara Chowk, Nagpur, Maharashtra — easy to reach from across the city."
              />
              <ul className="mt-8 space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>
                    {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 shrink-0" />
                  <span>{BUSINESS.hours}</span>
                </li>
              </ul>
              <div className="mt-8">
                <PrimaryButton to="/contact" className="bg-white text-[#171321] hover:bg-white/90">
                  Get Directions &amp; Contact
                </PrimaryButton>
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
