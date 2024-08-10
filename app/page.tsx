// app/page.tsx
import { SearchIcon } from "lucide-react";
import Header from "./_components/ui/header";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/ui/barbershop-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  console.log({ barbershops });

  return (
    <div className="p-5 dark:bg-background dark:text-foreground">
      {/* header */}
      <Header />

      <div className="mt-6">
        <h2 className="text-xl font-bold">Olá, Paulinho</h2>
        <p className="text-sm">Segunda-feira, 05 de Agosto.</p>

        <div className="mt-6 flex items-center gap-2 rounded bg-card p-2 shadow">
          <input
            className="flex-grow p-2 bg-transparent text-card-foreground focus:outline-none"
            placeholder="Faça sua busca..."
          />
          <button className="p-2 bg-primary rounded text-primary-foreground">
            <SearchIcon />
          </button>
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full overflow-hidden">
          <img
            className="aspect-square h-full w-full"
            src="/Banner01.png"
            alt="Agende nos Melhores com FSW Barber"
          />
        </div>

        {/* AGENDAMENTO */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
  <CardContent className="flex justify-between p-0">
    {/* ESQUERDA */}
    <div className="flex flex-col gap-2 py-5 pl-5">
      <Badge className="w-fit">Confirmado</Badge>
      <h3 className="text-lg font-semibold">Corte de Cabelo</h3>
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
        </Avatar>
        <p className="text-sm">Barbearia FSW</p>
      </div>
    </div>
    {/* DIREITA */}
    <div className="flex flex-col items-center justify-center border-l-2 px-5 text-center">
      <p className="text-sm">Agosto</p>
      <p className="text-2xl font-bold">05</p>
      <p className="text-sm">20:00</p>
    </div>
  </CardContent>
</Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        {barbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  );
};

export default Home;
