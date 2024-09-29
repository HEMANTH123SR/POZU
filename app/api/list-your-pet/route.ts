import { PozuPet } from "@/db/model/pozu-pet.model";
import { connectDB } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json();
    const dbResponse = await PozuPet.create(data);
    console.log("data posted to db ", data);
    console.log("db response", dbResponse);

    return NextResponse.json(
      { success: true, data: dbResponse },
      {
        status: 201,
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, error: e }, { status: 500 });
  }
}
