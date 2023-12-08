import logger from "@/util/logger";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

let score = 10;

export async function POST(request: NextRequest) {
  const { name, score: clientScore } = await request.json();

  logger.info(`이름 : ${name} : 점수 : ${clientScore}`);

  if (typeof score !== "number") {
    return new Response("서식이 잘못되었습니다!", {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, application/json",
      },
    });
  }
  score = clientScore > 100 ? clientScore % 100 : clientScore;
  if (score) {
    return new Response(`점수 ${score} post 성공`, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, application/json",
      },
    });
  } else {
    return new Response(`서식이 잘못되었습니다`, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, application/json",
      },
    });
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");

  if (type === "score") {
    return new Response(`점수 ${score} get 성공`, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, application/json",
      },
    });
  } else {
    return new Response(`타입이 틀렸습니다`, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, application/json",
      },
    });
  }
}
