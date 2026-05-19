"use client";

import { useState } from "react";
import Image from "next/image";

type Category =
  | "All"
  | "Kitchen"
  | "Bathroom"
  | "Residential"
  | "Commercial"
  | "Restoration";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const galleryImages: GalleryImage[] = [
  // Kitchen
  { src: "/images/kitchen-island-with-banquette-seating.jpg", alt: "Custom kitchen with island banquette seating", category: "Kitchen" },
  { src: "/images/granite-backsplash-renovation.jpg", alt: "Granite kitchen backsplash detail", category: "Kitchen" },
  { src: "/images/kitchen-gray-cabinets-island-bar-stools-tampa.jpg", alt: "Modern Tampa kitchen with gray cabinets and bar stools", category: "Kitchen" },
  { src: "/images/kitchen-remodel-marble-countertops-gray-island-tampa.jpg", alt: "Kitchen remodel with marble countertops and gray island in Tampa", category: "Kitchen" },
  { src: "/images/kitchen-remodel-white-cabinets-range-hood-double-oven-tampa.jpg", alt: "Kitchen remodel with white cabinets, range hood, and double oven in Tampa", category: "Kitchen" },
  { src: "/images/kitchen-remodel-white-cabinets-stainless-appliances-pantry-tampa.jpg", alt: "Kitchen remodel with white cabinets and stainless steel appliances in Tampa", category: "Kitchen" },
  { src: "/images/kitchen-remodel-open-concept-island-columns-tampa.jpg", alt: "Open concept kitchen remodel with island and columns in Tampa", category: "Kitchen" },

  // Bathroom
  { src: "/images/correct/bathroom-blue-marble-freestanding-tub-glass-shower-tampa.jpg", alt: "Blue marble bathroom with freestanding tub", category: "Bathroom" },
  { src: "/images/correct/bathroom-stacked-stone-tub-surround-white-vanity-tampa.jpg", alt: "Bathroom with stacked tile tub surround", category: "Bathroom" },
  { src: "/images/bathroom-blue-marble-double-vanity-led-mirror.jpg", alt: "Blue marble bathroom with double vanity and LED mirror", category: "Bathroom" },
  { src: "/images/correct/bathroom-white-vanity-gold-mirror-glass-shower-tampa.jpg", alt: "Bathroom with white vanity and glass shower enclosure", category: "Bathroom" },

  // Residential
  { src: "/images/entryway-staircase-iron-chandelier.jpg", alt: "Wide foyer with custom staircase and iron chandelier", category: "Residential" },
  { src: "/images/game-room-remodel.jpg", alt: "Custom game room renovation with built-ins", category: "Residential" },
  { src: "/images/home-bar-remodel.jpg", alt: "Custom home bar with pendant lighting", category: "Residential" },
  { src: "/images/blue-daybed-reading-nook.jpg", alt: "Reading nook with blue daybed and built-in shelving", category: "Residential" },
  { src: "/images/master-bedroom-mirrored-furniture-tray-ceiling.jpg", alt: "Master bedroom with tray ceiling and mirrored furniture", category: "Residential" },
  { src: "/images/entryway-ceiling-detail-black-chandelier.jpg", alt: "Entryway ceiling detail with black chandelier", category: "Residential" },
  { src: "/images/new/built-in-entertainment-center-dark-wood-tampa.jpg", alt: "Custom built-in entertainment center with dark wood cabinetry in Tampa", category: "Residential" },
  { src: "/images/new/built-in-media-wall-dark-wood-brass-hardware-tampa.jpg", alt: "Built-in media wall with dark wood and brass hardware in Tampa", category: "Residential" },
  { src: "/images/new/coffered-ceiling-led-lighting-detail-tampa.jpg", alt: "Coffered ceiling with LED lighting detail in Tampa", category: "Residential" },
  { src: "/images/new/coffered-ceiling-slat-wall-painting-in-progress-tampa.jpg", alt: "Coffered ceiling and slat wall painting in progress in Tampa", category: "Residential" },

  // Commercial
  { src: "/images/doctors-office-renovation.jpg", alt: "Doctor's office commercial renovation", category: "Commercial" },
  { src: "/images/office-remodel.jpg", alt: "Commercial office remodel", category: "Commercial" },
  { src: "/images/new/commercial-office-renovation-curved-wall-carpet-tampa.jpg", alt: "Commercial office renovation with curved wall and new carpet in Tampa", category: "Commercial" },

  // Restoration
  { src: "/images/new/flood-restoration-crew-demolition-in-progress-tampa.jpg", alt: "Flood restoration crew performing demolition in Tampa", category: "Restoration" },
  { src: "/images/new/flood-restoration-framing-electrical-rough-in-tampa.jpg", alt: "Flood restoration framing and electrical rough-in in Tampa", category: "Restoration" },
  { src: "/images/new/flood-restoration-interior-framing-gutted-tampa.jpg", alt: "Flood restoration interior framing after gutting in Tampa", category: "Restoration" },
  { src: "/images/new/exterior-window-installation-water-barrier-tampa.jpg", alt: "Exterior window installation with water barrier wrap in Tampa", category: "Restoration" },
  { src: "/images/new/exterior-door-window-installation-weather-wrap-tampa.jpg", alt: "Exterior door and window installation with weather wrap in Tampa", category: "Restoration" },
  { src: "/images/new/commercial-storm-restoration-walkway-clearance-tampa.jpg", alt: "Commercial storm restoration walkway clearance in Tampa", category: "Restoration" },
  { src: "/images/new/commercial-storm-restoration-sand-removal-tampa.jpg", alt: "Commercial storm restoration sand removal in Tampa", category: "Restoration" },
  { src: "/images/new/commercial-storm-restoration-debris-cleanup-tampa.jpg", alt: "Commercial storm restoration debris cleanup in Tampa", category: "Restoration" },
  { src: "/images/new/carport-roof-damage-before-repair-tampa.jpg", alt: "Carport roof damage before repair in Tampa", category: "Restoration" },
  { src: "/images/new/carport-roof-fascia-damage-before-repair-tampa.jpg", alt: "Carport roof and fascia damage before repair in Tampa", category: "Restoration" },
  { src: "/images/new/carport-renovation-white-columns-completed-tampa.jpg", alt: "Completed carport renovation with white columns in Tampa", category: "Restoration" },
  { src: "/images/new/carport-renovation-wide-angle-completed-tampa.jpg", alt: "Completed carport renovation wide angle view in Tampa", category: "Restoration" },
  { src: "/images/new/carport-renovation-construction-in-progress-tampa.jpg", alt: "Carport renovation construction in progress in Tampa", category: "Restoration" },
];

const categories: Category[] = [
  "All",
  "Kitchen",
  "Bathroom",
  "Residential",
  "Commercial",
  "Restoration",
];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-sans font-medium text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-[2px] transition-colors ${
              active === cat
                ? "bg-navy text-white"
                : "bg-transparent border border-taupe/30 text-taupe hover:border-navy hover:text-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((img) => (
          <div key={img.src} className="relative aspect-[4/3]">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}
