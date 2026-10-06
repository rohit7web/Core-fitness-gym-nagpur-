import { PrimaryButton, SecondaryButton } from "./ui";
import FitnessBars from "./FitnessBars";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 sm:pt-6">
      {/* Ambient pastel background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#EAD4FA] opacity-40 blur-[90px]" />
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-[#CDEEF5] opacity-40 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#FFF2A6] opacity-30 blur-[90px]" />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-5">
        <div className="relative rounded-[2rem] border border-[#171321]/[0.05] bg-white px-5 py-10 shadow-[0_30px_80px_-40px_rgba(23,19,33,0.25)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="relative lg:flex lg:min-h-[560px] lg:flex-col lg:justify-between xl:min-h-[620px]">
            {/* Athlete — desktop */}
            <img
              src="/images/athlete-runner.png"
              alt="Athlete sprinting mid-stride, representing the energy and performance training at Core Fitness"
              width={720}
              height={900}
              loading="eager"
              fetchPriority="high"
              className="animate-slide-in-right pointer-events-none absolute right-[-1.5rem] top-[-2.5rem] z-20 hidden h-[calc(100%+3rem)] w-auto max-w-[52%] object-contain object-bottom lg:block"
            />

            {/* Text */}
            <div className="relative z-30 max-w-xl">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-[#171321]/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#55515E]">
                Core Fitness · Nagpur
              </span>
              <h1
                className="animate-fade-up mt-5 font-display text-[clamp(2.25rem,6vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight text-[#171321]"
                style={{ animationDelay: "0.1s" }}
              >
                Move Better.
                <br />
                Live Better.
              </h1>
              <p
                className="animate-fade-up mt-6 max-w-md text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-[#55515E]"
                style={{ animationDelay: "0.2s" }}
              >
                Build strength, improve endurance and train with purpose at Core Fitness, Nagpur.
              </p>
              <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.3s" }}>
                <PrimaryButton to="/membership">Explore Membership</PrimaryButton>
                <SecondaryButton to="/contact">Book a Gym Visit</SecondaryButton>
              </div>
            </div>

            {/* Athlete — mobile / tablet */}
            <div className="relative mt-10 h-[320px] sm:h-[400px] lg:hidden">
              <img
                src="/images/athlete-runner.png"
                alt="Athlete sprinting mid-stride, representing the energy and performance training at Core Fitness"
                width={480}
                height={600}
                loading="eager"
                className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom"
              />
            </div>

            {/* Fitness bars */}
            <div className="relative z-10 mt-8 lg:mt-0">
              <FitnessBars />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
