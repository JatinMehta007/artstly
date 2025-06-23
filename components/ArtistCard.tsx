// components/ArtistCard.tsx
import { Card,CardContent } from "@/components/UI/card";
import { Button } from "@/components/UI/button"; 
import { CardSpotlight } from "./UI/spotlight";

interface Artist {
  name: string;
  category: string;
  location: string;
  priceRange: string;
}

export const ArtistCard = ({ name, category, location, priceRange }: Artist) => {
  return (
    <Card className="hover:shadow-md transition border-none bg-black">
        <CardSpotlight >

      <CardContent className="p-4 space-y-2">
        <h3 className="text-xl font-bold relative z-20 mt-2 text-white">{name}</h3>
        <p className="text-sm  relative z-20 mt-2 text-white">{category}</p>
        <p className="text-sm  relative z-20 mt-2 text-white">{location}</p>
        <p className="text-sm font-medium relative z-20 mt-2 text-white">{priceRange}</p>
        <Button className="mt-2 font-bold relative z-20 text-white">Ask for Quote</Button>
      </CardContent>
        </CardSpotlight>
    </Card>
  );
};