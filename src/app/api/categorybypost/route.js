import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req, res) {
  try {
    const params = new URL(req.url).searchParams;
    const category = params.get("category");
    const categoriesInfo = await prisma.categories.findMany({
      where: {
        category: category,
      },
      include: {
        posts: true,
        posts: {
          include: {
            user: true,
          },
        },
      },
    });
    return NextResponse.json({
      msg: "success",
      data: categoriesInfo,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}
