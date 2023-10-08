import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req, res) {
  try {
    const categoriesInfo = await prisma.categories.findMany();
    return NextResponse.json({
      msg: "success",
      data: categoriesInfo,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}
