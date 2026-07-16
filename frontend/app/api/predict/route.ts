import { NextResponse } from "next/server";

export async function POST(request: { json: () => any; }) {
  try {
    const data = await request.json();

    const backendUrl = process.env.PYTHON_BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { error: "Missing PYTHON_BACKEND_URL environment variable." },
        { status: 500 }
      );
    }

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