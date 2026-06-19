import { PrismaClient } from "@prisma/client";
import { rooms } from "../src/lib/data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  for (const room of rooms) {
    await prisma.room.upsert({
      where: { slug: room.slug },
      update: {
        name: room.name,
        type: room.type,
        description: room.description,
        longDescription: room.longDescription,
        pricePerNight: room.pricePerNight,
        capacity: room.capacity,
        imageUrl: room.imageUrl,
        amenities: room.amenities,
        featured: room.featured,
      },
      create: {
        id: room.id,
        name: room.name,
        slug: room.slug,
        type: room.type,
        description: room.description,
        longDescription: room.longDescription,
        pricePerNight: room.pricePerNight,
        capacity: room.capacity,
        imageUrl: room.imageUrl,
        amenities: room.amenities,
        featured: room.featured,
      },
    });
    console.log(`  ✅ ${room.name}`);
  }

  console.log("🌴 Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
