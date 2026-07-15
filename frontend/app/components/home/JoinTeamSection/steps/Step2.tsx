"use client";

type FormData = {
  display: string;
  touchscreen: string;
  screensize: string;
  resolution: string;
};

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step1Basic({ formData, setFormData }: Props) {
  return (
    <div className="bg-black border-2 border-white/70 rounded-2xl p-6 md:p-7 lg:p-8 text-left h-full flex flex-col transition-all duration-300  hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:border-white">

      {/* Title */}
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-5 md:mb-6 text-white">
        Basic Information
      </h4>

      {/* Inputs */}
      <div className="flex-1 overflow-y-auto space-y-4">

          {/* Touch Screen */}
      <select
  value={formData.touchscreen}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      touchscreen: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">Touchscreen?</option>
  <option value="No">No</option>
  <option value="Yes">Yes</option>
</select>
      {/* Display Type */}
      <select
  value={formData.display}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      display: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">IPS Display?</option>
  <option value="No">No</option>
  <option value="Yes">Yes</option>
</select>
      
      {/* Screen Size */}
      <input
  type="number"
  step="0.1"
  placeholder="Screen Size (inches)"
  value={formData.screensize} // Keep this lowercase 's'
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      screensize: e.target.value, // CHANGE THIS to lowercase 's'
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-zinc-500"
/>
      {/* Resolution */}
      <select
  value={formData.resolution}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      resolution: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">Screen Resolution</option>
  <option value="1366x768">1366x768</option>
  <option value="1600x900">1600x900</option>
  <option value="1920x1080">1920x1080</option>
  <option value="2304x1440">2304x1440</option>
  <option value="2560x1440">2560x1440</option>
  <option value="2560x1600">2560x1600</option>
  <option value="2880x1800">2880x1800</option>
  <option value="3200x1800">3200x1800</option>
  <option value="3840x2160">3840x2160</option>
</select>

      </div>
    </div>
  );
}