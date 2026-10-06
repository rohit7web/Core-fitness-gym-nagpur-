import { BUSINESS } from "../data/business";

export default function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title="Core Fitness location map — Sakkardara Chowk, Nagpur"
        src={BUSINESS.mapsEmbedSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 340 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full rounded-[1.5rem]"
      />
    </div>
  );
}
