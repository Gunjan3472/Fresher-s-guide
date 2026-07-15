"use client";

type FormData = {
  brand: string;
  type: string;
  ram: string;
  weight: string;};

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

        {/* Full Name */}
       <select
  value={formData.brand}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      brand: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">Brand</option>
  <option value="Apple">Apple</option>
  <option value="HP">HP</option>
  <option value="Acer">Acer</option>
  <option value="Asus">Asus</option>
  <option value="Dell">Dell</option>
  <option value="Lenovo">Lenovo</option>
  <option value="Chuwi">Chuwi</option>
  <option value="MSI">MSI</option>
  <option value="Microsoft">Microsoft</option>
  <option value="Toshiba">Toshiba</option>
  <option value="Huawei">Huawei</option>
  <option value="Xiaomi">Xiaomi</option>
  <option value="Vero">Vero</option>
  <option value="Razer">Razer</option>
  <option value="Mediacom">Mediacom</option>
  <option value="Samsung">Samsung</option>
  <option value="Google">Google</option>
  <option value="Fujitsu">Fujitsu</option>
  <option value="LG">LG</option>
</select>
         {/* Type */}
<select
  value={formData.type}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      type: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">Type</option>
  <option value="Notebook">Notebook</option>
  <option value="Gaming">Gaming</option>
  <option value="Ultrabook">Ultrabook</option>
  <option value="2 in 1 Convertible">2 in 1 Convertible</option>
  <option value="Workstation">Workstation</option>
  <option value="Netbook">Netbook</option>
</select>


        {/* RAM */}
        <select
  value={formData.ram}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      ram: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">RAM Capacity</option>
  <option value="2">2 GB</option>
  <option value="4">4 GB</option>
  <option value="6">6 GB</option>
  <option value="8">8 GB</option>
  <option value="12">12 GB</option>
  <option value="16">16 GB</option>
  <option value="24">24 GB</option>
  <option value="32">32 GB</option>
  <option value="64">64 GB</option>
</select>

        {/* Weight */}
       <input
  type="number"
  step="0.01"
  placeholder="Weight (in kg)"
  value={formData.weight}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      weight: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-zinc-500"
/>
      </div>
    </div>
  );
}