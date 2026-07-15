import { NextResponse } from "next/server";

export async function POST(request: { json: () => any; }) {
  try {
    const data = await request.json();

    // 1. Point to the live URL if on Vercel, OR local port 5000 if on your computer
    const backendUrl = process.env.PYTHON_BACKEND_URL || "http://127.0.0.1:5000";

    // 2. Fetch from the dynamic URL
    const pythonResponse = await fetch(`${backendUrl}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const predictionData = await pythonResponse.json();

    return NextResponse.json(predictionData, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to connect to the Python prediction server." },
      { status: 500 }
    );
  }
}