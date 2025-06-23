// app/artists/page.tsx
"use client";

import { useEffect, useState } from "react";
import { ArtistCard } from "@/components/ArtistCard"; 
import artistsData from "@/data/artists.json";
import { cn } from "@/lib/utils";

export default function ArtistsPage() {
  const [artists, setArtists] = useState(artistsData);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredArtists = artists.filter((artist) => {
    return (
      (categoryFilter ? artist.category === categoryFilter : true) &&
      (locationFilter ? artist.location === locationFilter : true)
    );
  });

  const uniqueCategories = [...new Set(artistsData.map((a) => a.category))];
  const uniqueLocations = [...new Set(artistsData.map((a) => a.location))];

  return (
    <>
    <main className="p-6 bg-gradient-to-r min-h-screen relative   from-neutral-950 to-neutral-950 text-white">
     <div
          className={cn(
            "absolute inset-0",
            "[background-size:48px_50px]",
            "[background-image:linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)]",
            "[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        ></div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] "></div>
    {/* <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black"> */}
      <h1 className="text-5xl font-bold mb-6 relative text-center">Explore Artists</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-8 flex-wrap mt-10 relative justify-center items-center">
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border rounded"
          >
          <option value="">All Categories</option>
          {uniqueCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
        </select>

        <select
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-2 border rounded"
          >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
        </select>
      </div>

      {/* Artist Grid */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
            <ArtistCard key={artist.name} {...artist} />
        ))}
      </div>
    </main>
        </>
  );
}