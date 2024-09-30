import { PozuPet } from "@/db/model/pozu-pet.model";
import { connectDB } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Pet ID is required' }, { status: 400 });
    }

    const pet = await PozuPet.findById(id);

    if (!pet) {
      return NextResponse.json({ success: false, error: 'Pet not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: pet }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}