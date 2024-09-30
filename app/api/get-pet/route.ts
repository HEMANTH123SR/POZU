import { PozuPet } from "@/db/model/pozu-pet.model";
import { connectDB } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    
    const search = searchParams.get('search') || '';
    const species = searchParams.get('species') || '';
    const breed = searchParams.get('breed') || '';
    const age = searchParams.get('age') || '';
    const minPrice = Number(searchParams.get('minPrice')) || 0;
    const maxPrice = Number(searchParams.get('maxPrice')) || Infinity;

    const query: Record<string, unknown> = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }
    if (species) query.species = species;
    if (breed) query.breed = breed;
    if (age) query.age = age;
    query.price = { $gte: minPrice, $lte: maxPrice };

    const pets = await PozuPet.find(query);

    return NextResponse.json({ success: true, data: pets }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: e }, { status: 500 });
  }
}
