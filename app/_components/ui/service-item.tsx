import { BarbershopService } from "@prisma/client";
import Image from "next/image"
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "./card";

interface ServiceItemPros {
    service: BarbershopService;
}

const ServiceItem = ({service}: ServiceItemPros) => {
    return (
        <Card>
            <CardContent className="flex item-center gap-3 p-3">
        { /* Image */}
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]" >
            <Image
                alt={service.name}
                src={service.imageUrl}
                fill
                className="rounded-lg object-cover"
            />

        </div>
        {/* Nome do Serviço */}
        <div className="space-y-2">
            <h3 className="font-semibold">{service.name}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
            {/* Preço do Serviço */}
            <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-primary">
                    {Intl.NumberFormat("pt-BR",{
                        style: "currency",
                        currency: "BRL",
                }).format(Number(service.price))}
                </p>

                <Button variant="secondary" size="sm">
                    Reservar
                </Button>

            </div>
        </div>
            </CardContent>
        </Card>
    )
}
export default ServiceItem ;