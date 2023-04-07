import { NextRequest, NextResponse } from 'next/server'
import postgres from "postgres";

export async function GET(request: Request) {
  const conn = postgres({
    ssl: require,
  });
  const result = await conn.unsafe("SELECT * FROM posts");
  console.log("backend result", result);
  return new NextResponse(JSON.stringify(result));
}