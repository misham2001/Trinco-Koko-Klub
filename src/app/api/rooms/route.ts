import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rooms as fallbackRooms } from "@/lib/data";

export async function GET() {
  try {
    const rooms = await prisma.room.findMany();
    if (rooms && rooms.length > 0) {
      return NextResponse.json(rooms);
    }
  } catch (error) {
    console.error("GET /api/rooms DB fetch failed, using fallback:", error);
  }
  return NextResponse.json(fallbackRooms);
}
