// Development placeholder note:
// Phone number and email below use a placeholder pattern pending confirmation
// from the verified Core Fitness Google Business Profile / owner records.
// Replace with the exact verified phone number and email before publishing.
export const BUSINESS = {
  name: "Core Fitness",
  tagline: "Move Better. Live Better.",
  addressLine1: "Near Shahu Samaj Building",
  addressLine2: "Sakkardara Chowk, Nagpur, Maharashtra",
  postalCode: "440009",
  phoneDisplay: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsappNumber: "919000000000",
  email: "info@corefitnessnagpur.in",
  hours: "Monday – Saturday, 6:00 AM – 11:00 PM",
  hoursNote: "Closed Sundays",
  rating: 4.8,
  reviewCount: 270,
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Sakkardara+Chowk,+Nagpur,+Maharashtra&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Sakkardara+Chowk+Nagpur+Maharashtra",
  instagramUrl: "https://www.instagram.com/",
  facebookUrl: "https://www.facebook.com/",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
