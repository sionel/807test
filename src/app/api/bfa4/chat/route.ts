import logger from "@/util/logger";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

let eng = 10;
let kor = 10;

export async function POST(request: NextRequest) {
  const { name, engScore, korScore } = await request.json();

  logger.info(`이름 : ${name}`);

  if (typeof korScore !== "number") {
    return NextResponse.json("서식이 잘못되었습니다", { status: 200 });
  }
  kor = korScore > 100 ? korScore % 100 : korScore;
  // eng = engScore >= 100 ? engScore % 100 : engScore;

  // if (engScore) {
  //   return NextResponse.json(`영어 점수 ${eng} post 성공`, {
  //     status: 200,
  //   });
  // } else
  if (korScore) {
    return NextResponse.json(`국어 점수 ${kor} post 성공`, {
      status: 200,
    });
  } else {
    return NextResponse.json("서식이 잘못되었습니다", { status: 200 });
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");

  if (type === "kor") {
    return NextResponse.json(`국어 점수 ${kor} get 성공`, {
      status: 200,
    });
  }
  // else if (type === "eng") {
  //   return NextResponse.json(`영어 점수 ${eng} get 성공`, {
  //     status: 200,
  //   });
  // }
  else {
    return NextResponse.json("타입이 틀렸습니다", { status: 200 });
  }
}
