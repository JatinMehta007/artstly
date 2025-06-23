import { Card , CardContent } from "./UI/card";

interface CategoryCardProps {
  name: string;
  image: string;
}

export const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
      <Card className="hover:shadow-lg transition">
      <CardContent className="p-0">
        
        <img src={image} alt={name} className="w-full h-52  object-cover rounded-2xl p-2 space-y-2" />
        <div className="p-4 text-center font-semibold text-xl ">{name}</div>
   
      </CardContent>
    </Card>
  );
};