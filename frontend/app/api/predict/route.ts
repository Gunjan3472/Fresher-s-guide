import { NextResponse } from "next/server";

export async function POST(request: { json: () => any; }) {
  try {
    // 1. Grab the laptop data sent from your Step 4 frontend
    const data = await request.json();

    // 2. Forward that exact data to your Python backend
    // (We will build the Python backend in Part 2, it runs on port 5000)
    const pythonResponse = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // 3. Get the predicted price back from Python
    const predictionData = await pythonResponse.json();

    // 4. Send the price back to your Next.js frontend to display!
    return NextResponse.json(predictionData, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to connect to the Python prediction server." },
      { status: 500 }
    );
  }
}