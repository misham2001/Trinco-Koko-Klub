import Image from "next/image";
import Link from "next/link";
import { Waves, Compass, UtensilsCrossed, Leaf, Quote, MapPin, Plane, Mountain } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BookingBar from "@/components/BookingBar";
import RoomCard from "@/components/RoomCard";
import { rooms, testimonials, experiences } from "@/lib/data";

const iconMap = {
  Waves,
  Compass,
  UtensilsCrossed,
  Leaf,
};

export default function HomePage() {
  const featuredRooms = rooms.filter((r) => r.featured);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://picsum.photos/seed/trinco-hero/1920/1080"
          alt="Trincomalee Bay at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <AnimatedSection delay={0.2}>
            <span className="eyebrow inline-block mb-6">
              Trincomalee · Sri Lanka
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h1 className="font-cormorant text-hero-xl text-white italic font-light text-balance">
              Where the Bay Meets Bliss
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <p className="font-inter text-white/70 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              An intimate retreat on the shores of one of Asia&apos;s last
              untouched coastlines.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/rooms" className="btn-gold">
                Explore Rooms
              </Link>
              <Link href="/gallery" className="btn-outline">
                View Gallery
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Booking Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 section-padding pb-8">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection delay={1.0}>
              <BookingBar />
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40 animate-pulse" />
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="section-spacing section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/trinco-about/800/1000"
                  alt="Trinco Koko Klub gardens and pool"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Decorative gold border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 -z-10" />
              </div>
            </AnimatedSection>

            {/* Text */}
            <div>
              <AnimatedSection delay={0.1}>
                <span className="eyebrow">Our Story</span>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="font-cormorant text-section-title text-ocean-deep italic mt-4">
                  A Klub Born from the Sea
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="gold-divider-left mt-6 mb-8" />
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="space-y-5 text-charcoal/60 leading-relaxed">
                  <p>
                    Trinco Koko Klub was born from a love affair with
                    Trincomalee Bay — a crescent of turquoise water that has
                    captivated travellers for centuries. What began as a quiet
                    beachside guesthouse has evolved into one of Sri Lanka&apos;s
                    most distinctive boutique retreats.
                  </p>
                  <p>
                    Every element of our resort honours the coastal landscape
                    that surrounds it. Local artisans carved the teak that lines
                    our rooms. Fishermen from the nearby village supply our
                    kitchen. Our gardens bloom with endemic species chosen by
                    botanists from the University of Peradeniya.
                  </p>
                  <p>
                    Sustainable luxury is not a marketing phrase here — it is
                    how we build, how we cook, how we welcome each guest into
                    our family. We believe the most extraordinary experiences
                    are those that leave both traveller and destination better
                    than they found each other.
                  </p>
                </div>
              </AnimatedSection>

              {/* Stats */}
              <AnimatedSection delay={0.5}>
                <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-charcoal/10">
                  <div>
                    <span className="font-cormorant text-3xl md:text-4xl text-ocean-deep font-semibold">
                      12
                    </span>
                    <p className="eyebrow mt-2 !text-charcoal/40">
                      Exclusive Rooms
                    </p>
                  </div>
                  <div>
                    <span className="font-cormorant text-3xl md:text-4xl text-ocean-deep font-semibold">
                      2019
                    </span>
                    <p className="eyebrow mt-2 !text-charcoal/40">
                      Established
                    </p>
                  </div>
                  <div>
                    <span className="font-cormorant text-3xl md:text-4xl text-ocean-deep font-semibold">
                      4.9★
                    </span>
                    <p className="eyebrow mt-2 !text-charcoal/40">
                      Guest Rating
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ROOMS PREVIEW ==================== */}
      <section className="section-spacing bg-sand/30">
        <div className="max-w-[1400px] mx-auto section-padding">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="eyebrow">Accommodation</span>
              <h2 className="font-cormorant text-section-title text-ocean-deep italic mt-4">
                Our Sanctuaries
              </h2>
              <div className="gold-divider mt-6" />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredRooms.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-12">
              <Link href="/rooms" className="btn-outline-gold">
                View All Rooms
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== EXPERIENCES ==================== */}
      <section className="section-spacing bg-ocean-deep">
        <div className="max-w-[1200px] mx-auto section-padding">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="eyebrow">Discover</span>
              <h2 className="font-cormorant text-section-title text-off-white italic mt-4">
                Curated Experiences
              </h2>
              <div className="gold-divider mt-6" />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => {
              const Icon = iconMap[exp.icon];
              return (
                <AnimatedSection key={exp.title} delay={i * 0.1}>
                  <div className="border border-white/10 p-8 md:p-10 group hover:border-gold/30 transition-all duration-500">
                    <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-all duration-300">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <h3 className="font-cormorant text-2xl text-off-white font-semibold italic">
                      {exp.title}
                    </h3>
                    <p className="text-off-white/50 text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY TEASER ==================== */}
      <section className="relative py-4 section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Large image */}
            <div className="col-span-2 row-span-2 relative aspect-square overflow-hidden group">
              <Image
                src="https://picsum.photos/seed/trinco-gallery1/900/900"
                alt="Resort pool view"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ocean-deep/30 group-hover:bg-ocean-deep/50 transition-all duration-500" />
            </div>
            {/* Smaller images */}
            {[2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={`https://picsum.photos/seed/trinco-gallery${n}/600/600`}
                  alt={`Resort gallery image ${n}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ocean-deep/20 group-hover:bg-ocean-deep/40 transition-all duration-500" />
              </div>
            ))}
          </div>
          {/* Overlay CTA */}
          <AnimatedSection>
            <div className="text-center mt-10">
              <Link href="/gallery" className="btn-outline-gold">
                See the Resort →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="section-spacing section-padding bg-sand/30">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="eyebrow">Guest Stories</span>
              <h2 className="font-cormorant text-section-title text-ocean-deep italic mt-4">
                Words from Our Guests
              </h2>
              <div className="gold-divider mt-6" />
            </AnimatedSection>
          </div>

          <div className="space-y-16">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="text-center">
                  <Quote
                    size={32}
                    className="text-gold/30 mx-auto mb-6"
                    strokeWidth={1}
                  />
                  <p className="font-cormorant text-xl md:text-2xl lg:text-3xl italic text-ocean-deep leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <p className="font-inter text-sm font-semibold text-charcoal">
                      {t.name}
                    </p>
                    <p className="font-inter text-xs text-charcoal/40 mt-1">
                      {t.country}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LOCATION ==================== */}
      <section className="section-spacing section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="eyebrow">Find Us</span>
              <h2 className="font-cormorant text-section-title text-ocean-deep italic mt-4">
                Your Journey Begins Here
              </h2>
              <div className="gold-divider mt-6" />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Map */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] overflow-hidden border border-charcoal/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63368.73!2d81.1535!3d8.5922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb4e9f7d123abc%3A0x1234567890abcdef!2sTrincomalee!5e0!3m2!1sen!2slk!4v1234567890"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Trinco Koko Klub location on Google Maps"
                />
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div>
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-cormorant text-xl text-ocean-deep font-semibold">
                        Address
                      </h4>
                      <p className="text-charcoal/60 text-sm mt-1">
                        Trinco Koko Klub, Uppuveli Beach Road,
                        <br />
                        Trincomalee 31000, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-charcoal/5" />

                <div>
                  <div className="flex items-start gap-4">
                    <Plane size={20} className="text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-cormorant text-xl text-ocean-deep font-semibold">
                        Getting Here
                      </h4>
                      <p className="text-charcoal/60 text-sm mt-1">
                        <strong>By Air:</strong> Fly to Bandaranaike
                        International Airport (CMB), then a scenic 35-minute
                        domestic flight to China Bay Airport (TRR), just 8km
                        from the resort.
                      </p>
                      <p className="text-charcoal/60 text-sm mt-2">
                        <strong>By Road:</strong> A 5.5-hour drive from Colombo
                        along the scenic eastern coastline. Private transfers
                        available.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-charcoal/5" />

                <div>
                  <div className="flex items-start gap-4">
                    <Mountain
                      size={20}
                      className="text-gold mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-cormorant text-xl text-ocean-deep font-semibold">
                        Nearby Attractions
                      </h4>
                      <ul className="text-charcoal/60 text-sm mt-1 space-y-1">
                        <li>• Pigeon Island National Park — 15 min by boat</li>
                        <li>• Fort Frederick — 10 min drive</li>
                        <li>• Koneswaram Temple — 12 min drive</li>
                        <li>• Marble Beach — 20 min drive</li>
                        <li>• Hot Springs of Kanniya — 25 min drive</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
