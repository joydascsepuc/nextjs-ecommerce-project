import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth(); // Getting the current auth user
    const body = await req.json(); // Deconstructing the data

    // getting name from the request {same_name} = body (have to be same name)
    const { name } = body;

    if (!userId) {
      // if no auth user
      return new NextResponse("Unauthorized!", { status: 401 });
    }

    if (!name) {
      // if no name variable with request
      return new NextResponse("Name is required!", { status: 400 });
    }

    // Now create with prisma with store modal defined in Schema
    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Internal error!", { status: 500 });
  }
}
