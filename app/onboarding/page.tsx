"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/UI/input"; 
import { Textarea } from "@/components/UI/textarea"; 
import { Button } from "@/components/UI/button"; 
import { Checkbox } from "@/components/UI/checkbox"; 
import { useState } from "react";

// Define validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  location: z.string().min(2, "Location is required"),
  categories: z.array(z.string()).nonempty("Select at least one category"),
  languages: z.array(z.string()).nonempty("Select at least one language"),
  fee: z.string().min(1, "Fee is required"),
  image: z.any().optional(),
});

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["Hindi", "English", "Punjabi", "Bengali"];
const feeRanges = [
  "₹10,000–₹20,000",
  "₹20,000–₹30,000",
  "₹30,000–₹50,000",
  "₹50,000+",
];

export default function OnboardingPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      categories: [],
      languages: [],
      fee: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Submitted:", { ...data, imageFile });
    alert("Artist submitted! Check console.");
  };

  const handleCheckboxChange = (field: string, value: string) => {
    const current = watch(field) || [];
    if (current.includes(value)) {
      setValue(field, current.filter((v: string) => v !== value));
    } else {
      setValue(field, [...current, value]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Artist Onboarding</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="font-medium">Name</label>
          <Input {...register("name")} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Bio */}
        <div>
          <label className="font-medium">Bio</label>
          <Textarea {...register("bio")} />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="font-medium">Category</label>
          <div className="flex flex-wrap gap-3 mt-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={watch("categories")?.includes(cat)}
                  onCheckedChange={() => handleCheckboxChange("categories", cat)}
                />
                {cat}
              </label>
            ))}
          </div>
          {errors.categories && <p className="text-red-500 text-sm">{errors.categories.message}</p>}
        </div>

        {/* Languages */}
        <div>
          <label className="font-medium">Languages Spoken</label>
          <div className="flex flex-wrap gap-3 mt-2">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={watch("languages")?.includes(lang)}
                  onCheckedChange={() => handleCheckboxChange("languages", lang)}
                />
                {lang}
              </label>
            ))}
          </div>
          {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
        </div>

        {/* Fee */}
        <div>
          <label className="font-medium">Fee Range</label>
          <select {...register("fee")} className="w-full border rounded p-2">
            <option value="">Select</option>
            {feeRanges.map((fee) => (
              <option key={fee} value={fee}>
                {fee}
              </option>
            ))}
          </select>
          {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="font-medium">Location</label>
          <Input {...register("location")} />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        {/* Profile Image */}
        <div>
          <label className="font-medium">Profile Image (optional)</label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Artist
        </Button>
      </form>
    </div>
  );
}