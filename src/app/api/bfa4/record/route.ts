import logger from "@/util/logger";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import io from "socket.io-client";
const { ip } = require("../../../../util/mode");

const socket = io(`${ip}/bfa4`);
let eng = 10;
let kor = 10;

export async function POST(request: NextRequest) {
  const { userName, score, type } = await request.json();

  logger.info(`이름 : ${userName} - 점수 : ${score} - 타입 : ${type}`);

  if (typeof score !== "number") {
    return NextResponse.json("score 타입이 잘못되었습니다", { status: 200 });
  }
  if (type === "kor") {
    kor = score % 100;
    socket.emit("changeScore", {
      userName,
      score,
      type,
    });
    return NextResponse.json(`국어 점수 ${kor} post 성공`, {
      status: 200,
    });
  } else if (type !== "eng") {
    eng = score % 100;
    socket.emit("changeScore", {
      userName,
      score,
      type,
    });
    return NextResponse.json(`영어 점수 ${eng} post 성공`, {
      status: 200,
    });
  } else {
    return NextResponse.json("type 값이 잘못되었습니다", { status: 200 });
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");

  if (type === "kor") {
    return NextResponse.json(`국어점수는 ${kor}점 입니다`, {
      status: 200,
    });
  } else if (type === "eng") {
    return NextResponse.json(`영어점수는 ${eng}점 입니다`, {
      status: 200,
    });
  } else {
    return NextResponse.json("type 값이 잘못되었습니다", { status: 200 });
  }
}
