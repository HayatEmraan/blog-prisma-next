import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req, res) {
  try {
    const body = await req.json();
    const posts = await prisma.categories.create({
      data: {
        category: body.category,
      },
      posts: {
        create: body.posts,
      },
    });
    return NextResponse.json({
      msg: "success",
      data: posts,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}
