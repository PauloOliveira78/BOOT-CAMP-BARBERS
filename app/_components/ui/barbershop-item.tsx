import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./card";
import Image from "next/image";
import { Button } from "./button";
import { Badge } from "./badge";
import { StarIcon } from "lucide-react";

interface BarberShopItemProps {
  barbershop: Barbershop;
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[159px] rounded 2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/* IMAGEM */}
        <div className="relative h-[159px] w-full rounded-2xl">
          <Image 
            alt={barbershop.name}
            fill 
            className="object-cover" 
            src={barbershop.imageUrl} 
          />

        <Badge className="absolute left-2 top-2" variant="secondary">
          <StarIcon size={12} className="fill-primary text-primary" />
        <p className="text-xs font-semibold">5.0</p>
       </Badge>

        </div>



      {/* TEXTO */}
        <div className="px-2 py-3">
        <h3 className="truncate font-semibold">{barbershop.name}</h3>
        <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
        <Button>Reservar</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default BarberShopItem;
