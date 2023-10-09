import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req, res) {
  try {
    const posts = await prisma.posts.findMany({
      include: {
        user: true,
        category: true,
      },
    });
    return NextResponse.json({
      msg: "success",
      data: posts,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}
