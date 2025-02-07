"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const categories = [
  "Aparey Elektronik",
  "Rad Gason",
  "Rad Fanm",
  "Liv",
  "Jwet",
];

export default function CategorySelector() {
  const [selected, setSelected] = useState<string[]>([
    "Rad Fanm",
    "Liv",
    "Jwet",
  ]);

  const toggleSelection = (item: string): void => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="space-y-3 mb-8">
      <h3 className="text-lg font-semibold">Selecksyone Kategori paw lan</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            className={cn(
              "px-4 py-2 rounded-full border transition flex items-center gap-2",
              selected.includes(item)
                ? "bg-primary text-white border-primary"
                : "bg-transparent text-gray-700 border-gray-300"
            )}
            onClick={() => toggleSelection(item)}
          >
            <div>
              {selected.includes(item) && <Check className="w-4 h-4" />}
            </div>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
