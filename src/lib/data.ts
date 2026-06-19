export interface RoomData {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string;
  longDescription?: string | null;
  pricePerNight: number;
  capacity: number;
  imageUrl: string;
  amenities: string[];
  featured: boolean;
}

export const rooms: RoomData[] = [
  {
    id: "room-ocean-view-deluxe",
    name: "Ocean View Deluxe",
    slug: "ocean-view-deluxe",
    type: "Deluxe",
    description:
      "Wake to panoramic views of Trincomalee Bay from your private balcony. Sun-kissed mornings and moonlit evenings become part of your daily ritual.",
    longDescription:
      "Perched above the turquoise waters of Trincomalee Bay, our Ocean View Deluxe rooms offer an uninterrupted dialogue between land and sea. Floor-to-ceiling windows frame the ever-changing canvas of the Indian Ocean, while natural teak furnishings and handwoven Sri Lankan textiles create an atmosphere of refined comfort. Each room features a generous private balcony — your personal stage for watching fishing boats drift across the horizon at dawn, or the sun melt into gold at dusk. The en-suite bathroom, finished in local Kandy marble, includes a rain shower and organic bath amenities sourced from the island's spice gardens.",
    pricePerNight: 120,
    capacity: 2,
    imageUrl: "https://picsum.photos/seed/trinco-room1/800/600",
    amenities: [
      "Ocean View",
      "King Bed",
      "Private Balcony",
      "Air Conditioning",
      "WiFi",
      "Rain Shower",
      "Mini Bar",
      "Room Service",
    ],
    featured: true,
  },
  {
    id: "room-koko-suite",
    name: "Koko Suite",
    slug: "koko-suite",
    type: "Suite",
    description:
      "Our signature suite — a sanctuary of space and serenity with a separate living area, outdoor soaking tub, and unmatched ocean panoramas.",
    longDescription:
      "The Koko Suite is the crown jewel of our retreat — a sprawling sanctuary that blurs the boundary between indoor luxury and outdoor paradise. Spanning 85 square metres, the suite features a separate living area adorned with curated Sri Lankan art, a bedroom with a hand-carved four-poster king bed draped in organic cotton, and a private terrace with an outdoor soaking tub overlooking the bay. Every detail has been considered: from the bespoke coconut shell lighting fixtures to the aromatherapy pillow menu, from the walk-in dressing room to the private butler service. This is not merely a room — it is an experience.",
    pricePerNight: 250,
    capacity: 3,
    imageUrl: "https://picsum.photos/seed/trinco-room2/800/600",
    amenities: [
      "Ocean Panorama",
      "King Bed",
      "Living Area",
      "Outdoor Tub",
      "Private Terrace",
      "Butler Service",
      "Air Conditioning",
      "WiFi",
      "Premium Mini Bar",
      "Nespresso Machine",
    ],
    featured: true,
  },
  {
    id: "room-garden-retreat",
    name: "Garden Retreat",
    slug: "garden-retreat",
    type: "Standard",
    description:
      "Nestled among tropical palms and frangipani, our Garden Retreat offers a tranquil escape where nature's symphony replaces your morning alarm.",
    longDescription:
      "Set within our lush tropical gardens, the Garden Retreat rooms are cocoons of calm where the gentle rustle of palm fronds and the fragrance of frangipani define your every moment. These ground-floor sanctuaries open onto private garden patios, perfect for morning yoga or evening reading. The interiors blend contemporary Sri Lankan design with natural materials — rattan headboards, terrazzo floors, and hand-loomed curtains in earthy tones. A spacious en-suite bathroom features both indoor and outdoor shower options, letting you bathe under the stars if the mood takes you.",
    pricePerNight: 75,
    capacity: 2,
    imageUrl: "https://picsum.photos/seed/trinco-room3/800/600",
    amenities: [
      "Garden View",
      "Queen Bed",
      "Private Patio",
      "Air Conditioning",
      "WiFi",
      "Outdoor Shower",
      "Ceiling Fan",
    ],
    featured: false,
  },
  {
    id: "room-beach-bungalow",
    name: "Beach Bungalow",
    slug: "beach-bungalow",
    type: "Deluxe",
    description:
      "Step directly from your door onto powder-soft sand. These standalone bungalows redefine beachfront living with rustic elegance.",
    longDescription:
      "Our Beach Bungalows are the ultimate expression of barefoot luxury — freestanding timber-and-thatch structures positioned mere steps from the water's edge. Each bungalow has been designed with an open-plan philosophy, where louvered walls can be folded back to merge interior and exterior into one seamless living space. The bedroom centres around a king-size bed with ocean-facing views, while a daybed on the covered veranda invites afternoon naps to the rhythm of lapping waves. Hand-polished cement floors, driftwood furniture, and curated local artwork complete a space that feels simultaneously primal and supremely comfortable.",
    pricePerNight: 180,
    capacity: 2,
    imageUrl: "https://picsum.photos/seed/trinco-room4/800/600",
    amenities: [
      "Beachfront",
      "King Bed",
      "Private Veranda",
      "Air Conditioning",
      "WiFi",
      "Day Bed",
      "Outdoor Shower",
      "Direct Beach Access",
    ],
    featured: true,
  },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "rooms" | "beach" | "dining" | "nature";
  caption: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  // Rooms
  { id: "rooms-1", src: "https://picsum.photos/seed/trinco-gallery-rooms1/800/600", alt: "Ocean View Suite interior", category: "rooms", caption: "Ocean View Deluxe — Morning light through teak shutters", width: 800, height: 600 },
  { id: "rooms-2", src: "https://picsum.photos/seed/trinco-gallery-rooms2/600/900", alt: "Koko Suite bedroom", category: "rooms", caption: "The Koko Suite — Four-poster king bed", width: 600, height: 900 },
  { id: "rooms-3", src: "https://picsum.photos/seed/trinco-gallery-rooms3/800/500", alt: "Garden Retreat patio", category: "rooms", caption: "Garden Retreat — Private patio amongst palms", width: 800, height: 500 },
  { id: "rooms-4", src: "https://picsum.photos/seed/trinco-gallery-rooms4/700/800", alt: "Beach Bungalow exterior", category: "rooms", caption: "Beach Bungalow — Where timber meets sand", width: 700, height: 800 },
  { id: "rooms-5", src: "https://picsum.photos/seed/trinco-gallery-rooms5/800/600", alt: "Suite bathroom", category: "rooms", caption: "Koko Suite — Marble rain shower sanctuary", width: 800, height: 600 },
  { id: "rooms-6", src: "https://picsum.photos/seed/trinco-gallery-rooms6/600/800", alt: "Room detail", category: "rooms", caption: "Handwoven textiles and coconut shell details", width: 600, height: 800 },
  // Beach & Pool
  { id: "beach-1", src: "https://picsum.photos/seed/trinco-gallery-beach1/900/600", alt: "Infinity pool overlooking bay", category: "beach", caption: "Infinity pool merging with Trincomalee Bay", width: 900, height: 600 },
  { id: "beach-2", src: "https://picsum.photos/seed/trinco-gallery-beach2/600/900", alt: "Beach sunbeds at sunset", category: "beach", caption: "Golden hour on our private stretch of sand", width: 600, height: 900 },
  { id: "beach-3", src: "https://picsum.photos/seed/trinco-gallery-beach3/800/600", alt: "Morning beach walk", category: "beach", caption: "Footprints at dawn — the beach is yours", width: 800, height: 600 },
  { id: "beach-4", src: "https://picsum.photos/seed/trinco-gallery-beach4/800/500", alt: "Pool deck", category: "beach", caption: "The pool deck — teak loungers and tropical shade", width: 800, height: 500 },
  { id: "beach-5", src: "https://picsum.photos/seed/trinco-gallery-beach5/700/700", alt: "Aerial beach view", category: "beach", caption: "Turquoise waters of the untouched coastline", width: 700, height: 700 },
  // Dining
  { id: "dining-1", src: "https://picsum.photos/seed/trinco-gallery-dining1/800/600", alt: "Beachside dinner setup", category: "dining", caption: "Private beachside dinner under the stars", width: 800, height: 600 },
  { id: "dining-2", src: "https://picsum.photos/seed/trinco-gallery-dining2/600/800", alt: "Fresh seafood platter", category: "dining", caption: "Ocean-to-table — the day's freshest catch", width: 600, height: 800 },
  { id: "dining-3", src: "https://picsum.photos/seed/trinco-gallery-dining3/800/600", alt: "Restaurant interior", category: "dining", caption: "The Koko Kitchen — open-air elegance", width: 800, height: 600 },
  { id: "dining-4", src: "https://picsum.photos/seed/trinco-gallery-dining4/900/600", alt: "Tropical cocktails", category: "dining", caption: "Handcrafted cocktails at the Bayview Bar", width: 900, height: 600 },
  // Nature
  { id: "nature-1", src: "https://picsum.photos/seed/trinco-gallery-nature1/800/600", alt: "Tropical garden pathway", category: "nature", caption: "Garden pathways lined with tropical blooms", width: 800, height: 600 },
  { id: "nature-2", src: "https://picsum.photos/seed/trinco-gallery-nature2/600/900", alt: "Palm tree canopy", category: "nature", caption: "The palm canopy — nature's cathedral", width: 600, height: 900 },
  { id: "nature-3", src: "https://picsum.photos/seed/trinco-gallery-nature3/800/500", alt: "Blue whale breach", category: "nature", caption: "Whale watching season — Trincomalee's gentle giants", width: 800, height: 500 },
  { id: "nature-4", src: "https://picsum.photos/seed/trinco-gallery-nature4/700/800", alt: "Coral reef underwater", category: "nature", caption: "Pigeon Island — a snorkeller's paradise", width: 700, height: 800 },
  { id: "nature-5", src: "https://picsum.photos/seed/trinco-gallery-nature5/800/600", alt: "Sunrise over Trincomalee Bay", category: "nature", caption: "First light over Trincomalee Bay", width: 800, height: 600 },
];

export const testimonials = [
  {
    quote:
      "Trinco Koko Klub is the kind of place you dream about long after you've left. The bay, the people, the unhurried pace — everything conspires to make you forget the world beyond.",
    name: "Charlotte Beaumont",
    country: "United Kingdom",
  },
  {
    quote:
      "We came for two nights and stayed for seven. The Koko Suite is genuinely one of the most beautiful hotel rooms I've ever seen, and I've seen a few.",
    name: "Marco Visconti",
    country: "Italy",
  },
  {
    quote:
      "The staff remember your name, your coffee order, and exactly when you like your sundowner. This is hospitality in its purest form.",
    name: "Ayumi Tanaka",
    country: "Japan",
  },
];

export const experiences = [
  {
    title: "Snorkelling & Diving",
    description:
      "Explore the vibrant coral gardens of Pigeon Island, just a short boat ride from our shore.",
    icon: "Waves" as const,
  },
  {
    title: "Whale Watching",
    description:
      "Witness blue whales and sperm whales in the deep waters off Trincomalee — one of the world's premier sighting locations.",
    icon: "Compass" as const,
  },
  {
    title: "Beach Dining",
    description:
      "Private dinners on the sand, lit by lanterns and stars, with a menu crafted from the ocean's daily offering.",
    icon: "UtensilsCrossed" as const,
  },
  {
    title: "Yoga & Wellness",
    description:
      "Begin your mornings with sunrise yoga on the beach, followed by Ayurvedic treatments in our garden spa.",
    icon: "Leaf" as const,
  },
];
