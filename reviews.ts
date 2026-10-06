export type Review = {
  name: string;
  rating: number;
  text: string;
  source: "Google";
};

// Development placeholder note:
// The reviews below are structured examples pending direct verification/import
// from the live Core Fitness Google Business Profile. Replace with the exact
// verified review text, names and ratings before publishing.
export const REVIEWS: Review[] = [
  {
    name: "Verified Google Reviewer",
    rating: 5,
    text: "PLACEHOLDER — Replace with a verified review pulled directly from the Core Fitness Google Business Profile before publishing.",
    source: "Google",
  },
  {
    name: "Verified Google Reviewer",
    rating: 5,
    text: "PLACEHOLDER — Replace with a verified review pulled directly from the Core Fitness Google Business Profile before publishing.",
    source: "Google",
  },
  {
    name: "Verified Google Reviewer",
    rating: 4,
    text: "PLACEHOLDER — Replace with a verified review pulled directly from the Core Fitness Google Business Profile before publishing.",
    source: "Google",
  },
];
