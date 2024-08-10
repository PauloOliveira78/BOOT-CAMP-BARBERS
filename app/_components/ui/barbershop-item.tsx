import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./card";
import Image from "next/image";

interface BarberShopItemProps {
  barbershop: Barbershop;
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card>
      <CardContent>
        {/* IMAGEM */}
        <div className="relative h-[159px]">
          <Image 
            fill 
            src={barbershop.imageUrl} 
            alt={barbershop.name}
            className="object-contain" 
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default BarberShopItem;
