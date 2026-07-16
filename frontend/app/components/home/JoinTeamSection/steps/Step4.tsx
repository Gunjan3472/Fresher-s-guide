"use client";

import React, { useState } from "react";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step4({ formData, setFormData }: Props) {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (loading) return;
    
    setLoading(true);
    setError(null);
    setPrice(null);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the prediction server.");
      }

      const data = await response.json();
      // Assuming your Flask backend returns { "price": 12345.67 }
      setPrice(data.price);
      
    } catch (err) {
      console.error("Prediction Error:", err);
      setError("Could not get a prediction. Check if your backend is running.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-white">
        Final Details
      </h4>

      {/* Result Display */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {price && (
          <div className="text-center p-4 bg-white text-black rounded-lg mb-4 w-full">
            <p className="text-sm">Predicted Price</p>
            <h3 className="text-3xl font-bold">₹{price}</h3>
          </div>
        )}
        
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}
      </div>
{/* This is a single-line comment */}
      {/* Predict Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${
          !loading
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-white/30 text-black/50 cursor-not-allowed"
        }`}
      >
        {loading ? "Calculating..." : "Predict Price"}
      </button>
    </div>
  );
}