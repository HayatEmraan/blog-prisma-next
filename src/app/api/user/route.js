import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req, res) {
  try {
    const userInsert = await prisma.posts.create({
      data: req.json(), // getting data from body 
    });
    return NextResponse.json({
      msg: "success",
      data: userInsert,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}
