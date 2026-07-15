"use client";

import { useState } from "react";
import StarsBackground from "./StarsBackground";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";
import FormContainer from "./FormContainer";

export default function JoinTeam() {
  const [step, setStep] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);

  // Initialized all 13 fields to match app.py exactly
  const [formData, setFormData] = useState({
    brand: "",
    type: "",
    ram: "",
    weight: "",
    touchscreen: "No",
    ips: "No",
    screensize: "",
    resolution: "",
    cpu: "",
    hdds: "0",
    ssd: "0",
    gpu: "",
    os: "",
  });

  const handleNext = () => {
    if (step < 4 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handleBack = () => {
    if (step > 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center px-4">
      <StarsBackground />

      <div className="max-w-6xl w-full text-center text-white z-10">
        <h2 className="text-4xl font-semibold mb-6">Laptop Price Predictor</h2>

        <ProgressBar step={step} />

        <div className="flex items-center justify-center gap-6 mt-8">
          <NavigationButtons
            type="back"
            onClick={handleBack}
            disabled={step === 1}
          />

          <FormContainer
            step={step}
            formData={formData}
            setFormData={setFormData}
          />

          <NavigationButtons
            type="next"
            onClick={handleNext}
            disabled={step === 4}
          />
        </div>
      </div>
    </section>
  );
}