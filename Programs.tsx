import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { Container, PrimaryButton, SectionHeading } from "../components/ui";
import { PROGRAMS } from "../data/programs";
import { whatsappLink } from "../data/business";
import { ActivityIcon, FlameIcon, HeartPulseIcon, UserIcon } from "../components/icons";
import { cn } from "../utils/cn";

const ICONS = { flame: FlameIcon, heart: HeartPulseIcon, activity: ActivityIcon, user: UserIcon };
const ACCENT_BG: Record<string, string> = {
  lavender: "bg-[#EAD4FA]",
  buttercream: "bg-[#FFF2A6]",
  mint: "bg-[#D9F2D0]",
  skyblue: "bg-[#CDEEF5]",
};

export default function Programs() {
  return (
    <>
      <Seo
        title="Training Programs | Core Fitness Nagpur"
        description="Explore Strength Training, Cardio Fitness, Functional Training and Personal Training programs at Core Fitness, Sakkardara Chowk, Nagpur."
      />

      <section className="pt-16 pb-8 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Training programs built around real goals."
            description="Whether you're building strength, improving endurance, training movement or working one-on-one with a coach — Core Fitness has a program suited to you."
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-28">
        <Container className="space-y-8">
          {PROGRAMS.map((program, i) => {
            const Icon = ICONS[program.icon];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={program.slug}>
                <div
                  id={program.slug}
                  className="scroll-mt-24 grid items-center gap-8 rounded-[1.75rem] border border-[#171321]/[0.07] bg-white p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10"
                >
                  <div className={cn("order-2 lg:order-none", reversed && "lg:order-2")}>
                    <div className="flex items-center gap-4">
                      <span className={cn("flex h-12 w-12 items-center justify-center rounded-full", ACCENT_BG[program.accent])}>
                        <Icon className="h-5.5 w-5.5 text-[#171321]" />
                      </span>
                      <span className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[#55515E]">
                        {program.index}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-[#171321] sm:text-3xl">
                      {program.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-[#55515E]">{program.description}</p>
                    <div className="mt-8">
                      <PrimaryButton
                        href={whatsappLink(`Hi Core Fitness, I'd like to enquire about ${program.title}.`)}
                      >
                        Enquire About This Program
                      </PrimaryButton>
                    </div>
                  </div>

                  <div className={cn("order-1 lg:order-none", reversed && "lg:order-1")}>
                    <div className="overflow-hidden rounded-[1.25rem]" style={{ aspectRatio: "5/4" }}>
                      <img
                        src={program.image}
                        alt={`${program.title} at Core Fitness Nagpur`}
                        loading={i === 0 ? "eager" : "lazy"}
                        width={800}
                        height={640}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Container>
      </section>
    </>
  );
}
