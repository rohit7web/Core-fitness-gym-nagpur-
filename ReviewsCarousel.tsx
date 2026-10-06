import { useCallback, useEffect, useRef, useState } from "react";
import { REVIEWS } from "../data/reviews";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "./icons";
import { BUSINESS } from "../data/business";
import { cn } from "../utils/cn";

const AUTOPLAY_MS = 5000;

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = REVIEWS.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;

    const handleVisibility = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        start();
      }
    };

    function start() {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % count);
      }, AUTOPLAY_MS);
    }

    start();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [paused, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative mx-auto max-w-3xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Google reviews from Core Fitness members"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="rounded-[1.75rem] border border-[#171321]/[0.06] bg-white p-6 shadow-[0_25px_60px_-35px_rgba(23,19,33,0.35)] sm:p-10">
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="w-full shrink-0 px-1 text-center"
                aria-hidden={i !== index}
                aria-roledescription="slide"
                aria-label={`Review ${i + 1} of ${count}`}
              >
                <div className="flex justify-center gap-1 text-[#171321]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon
                      key={s}
                      className={cn("h-5 w-5", s < review.rating ? "text-[#171321]" : "text-[#171321]/15")}
                    />
                  ))}
                </div>
                <p className="mx-auto mt-6 max-w-xl text-balance font-display text-lg font-medium leading-relaxed text-[#171321] sm:text-xl">
                  "{review.text}"
                </p>
                <div className="mt-6 flex flex-col items-center gap-0.5">
                  <span className="font-semibold text-[#171321]">{review.name}</span>
                  <span className="text-sm text-[#55515E]">{review.source} Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#171321]/10 text-[#171321] transition-colors hover:bg-[#171321]/[0.04]"
          >
            <ArrowLeftIcon className="h-4.5 w-4.5" />
          </button>

          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-6 bg-[#171321]" : "w-2 bg-[#171321]/20"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#171321]/10 text-[#171321] transition-colors hover:bg-[#171321]/[0.04]"
          >
            <ArrowRightIcon className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>

      <p className="mt-5 text-center text-sm text-[#55515E]">
        {BUSINESS.rating} ★ average from approximately {BUSINESS.reviewCount} Google reviews.
      </p>
    </div>
  );
}
