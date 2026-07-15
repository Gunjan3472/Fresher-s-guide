import Step1Basic from "./steps/Step1Basic";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";


export default function FormContainer({ step, formData, setFormData }: any) {
  return (
    <div className="relative w-[500px] h-[400px] overflow-hidden">

      {step === 1 && (
        <Step1Basic formData={formData} setFormData={setFormData} />
      )}

      {step === 2 && (
        <Step2 formData={formData} setFormData={setFormData} />
      )}

      {step === 3 && (
        <Step3 formData={formData} setFormData={setFormData} />
      )}

      {step === 4 && (
        <Step4 formData={formData} setFormData={setFormData} />
      )}

    </div>
  );
}