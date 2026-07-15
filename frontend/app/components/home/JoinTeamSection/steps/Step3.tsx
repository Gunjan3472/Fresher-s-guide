"use client";

type FormData = {
  cpu: string;
  hdds: string;
  ssd: string;
  gpu: string;
  os: string;
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

       {/* CPU */}
      <select
  value={formData.cpu}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      cpu: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">CPU Brand</option>
  <option value="Intel Core i3">Intel Core i3</option>
  <option value="Intel Core i5">Intel Core i5</option>
  <option value="Intel Core i7">Intel Core i7</option>
  <option value="Other Intel Processor">Other Intel Processor</option>
  <option value="AMD Processor">AMD Processor</option>
</select>
      {/* HDD Capacity */}
      <select
  value={formData.hdds}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      hdds: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">HDD Storage</option>
  <option value="0">0 (No HDD)</option>
  <option value="128">128 GB</option>
  <option value="256">256 GB</option>
  <option value="512">512 GB</option>
  <option value="1024">1 TB</option>
  <option value="2048">2 TB</option>
</select>
      {/* SSD Capacity */}
      <select
  value={formData.ssd}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      ssd: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">SSD Storage</option>
  <option value="0">0 (No SSD)</option>
  <option value="8">8 GB</option>
  <option value="128">128 GB</option>
  <option value="256">256 GB</option>
  <option value="512">512 GB</option>
  <option value="1024">1 TB</option>
</select>
      {/* GPU */}
      <select
  value={formData.gpu}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      gpu: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">GPU Brand</option>
  <option value="Intel">Intel</option>
  <option value="AMD">AMD</option>
  <option value="Nvidia">Nvidia</option>
</select>

       {/* OS */}
      <select
  value={formData.os}
  onChange={(e) =>
    setFormData((prev: any) => ({
      ...prev,
      os: e.target.value,
    }))
  }
  className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm md:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <option value="">Operating System</option>
  <option value="Windows">Windows</option>
  <option value="Mac">Mac</option>
  <option value="Others/No OS/Linux">Others / No OS / Linux</option>
</select>

      </div>
    </div>
  );
}