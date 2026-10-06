export type Program = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  image: string;
  icon: "flame" | "heart" | "activity" | "user";
  accent: "lavender" | "buttercream" | "mint" | "skyblue";
};

export const PROGRAMS: Program[] = [
  {
    slug: "strength-training",
    index: "01",
    title: "Strength Training",
    short: "Build muscle, power and a stronger foundation.",
    description:
      "Progressive resistance training designed to build lean muscle, improve bone density and increase overall functional strength. Our strength floor is equipped with a full range of free weights, barbells and plate-loaded machines.",
    image:
      "https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    icon: "flame",
    accent: "lavender",
  },
  {
    slug: "cardio-fitness",
    index: "02",
    title: "Cardio Fitness",
    short: "Boost endurance and heart health.",
    description:
      "A dedicated cardio zone with treadmills, cycles and rowers to help you build stamina, burn calories and improve cardiovascular health at a pace that suits your fitness level.",
    image:
      "https://images.pexels.com/photos/20418606/pexels-photo-20418606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    icon: "heart",
    accent: "buttercream",
  },
  {
    slug: "functional-training",
    index: "03",
    title: "Functional Training",
    short: "Train movement patterns for real-life strength.",
    description:
      "Kettlebells, battle ropes, sleds and bodyweight circuits that improve mobility, balance and coordination — training your body to move better in everyday life and sport.",
    image:
      "https://images.pexels.com/photos/6455788/pexels-photo-6455788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    icon: "activity",
    accent: "mint",
  },
  {
    slug: "personal-training",
    index: "04",
    title: "Personal Training",
    short: "One-on-one coaching built around your goals.",
    description:
      "Focused, individualized coaching sessions to help you train safely, correct your form and progress consistently toward your specific fitness goals.",
    image:
      "https://images.pexels.com/photos/6551094/pexels-photo-6551094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000",
    icon: "user",
    accent: "skyblue",
  },
];
