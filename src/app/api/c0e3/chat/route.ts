import logger from "@/util/logger";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

let score = 10;

export async function PUT(request: Request) {
  score += 1;
  console.log(score);

  return NextResponse.json("test!", {
    status: 200,
  });
}
