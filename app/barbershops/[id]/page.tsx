import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceItem from "@/app/_components/ui/service-item";
import PhoneItem from "@/app/_components/ui/phone-item"; // Certifique-se de importar o componente corretamente
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import SideBarSheet from "@/app/_components/ui/sidebar";

interface BarbershopPageProps {
  params: {
    id: string;
  };
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // Chamar o banco de dados
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      {/* Imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
          <Button 
              size="icon" 
              variant="outline"
              className="absolute right-4 top-4"
              >
              <MenuIcon />
          </Button>   
            </SheetTrigger>
            <SideBarSheet />
        </Sheet>
      </div>

      <div className="border-b border-solid p-5">
        {/* Nome e Endereço */}
        <h1 className="text-xl font-bold mb-3">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mb-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (499 Avaliações)</p>
        </div>
      </div>

      {/* Descrição */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-sm font-bold uppercase text-gray-400">Sobre Nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* Serviços */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-sm font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Contato */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopPage;
