// Importa componentes e utilitários necessários para a página
import { SearchIcon } from "lucide-react";
import Header from "./_components/ui/header";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/ui/barbershop-item";

// Função assíncrona que retorna a página inicial da aplicação
const Home = async () => {
  // Busca as barbearias no banco de dados utilizando Prisma
  const barbershops = await db.barbershop.findMany({});
  console.log({ barbershops });

  return (
    // Estrutura principal da página com o tema dark aplicado
    <div className="p-5 dark:bg-background dark:text-foreground">
      {/* Componente de cabeçalho */}
      <Header />

      <div className="mt-6">
        {/* Saudação do usuário */}
        <h2 className="text-xl font-bold">Olá, Paulinho</h2>
        <p className="text-sm">Segunda-feira, 05 de Agosto.</p>

        {/* Campo de busca */}
        <div className="mt-6 flex items-center gap-2 rounded bg-card p-2 shadow">
          <input
            className="flex-grow p-2 bg-transparent text-card-foreground focus:outline-none"
            placeholder="Faça sua busca..."
          />
          <button className="p-2 bg-primary rounded text-primary-foreground">
            <SearchIcon />
          </button>
        </div>

        {/* Banner da página */}
        <div className="relative mt-6 h-[150px] w-full overflow-hidden">
          <img
            className="aspect-square h-full w-full"
            src="/Banner01.png"
            alt="Agende nos Melhores com FSW Barber"
          />
        </div>

        {/* Seção de Agendamentos */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Informações do agendamento (esquerda) */}
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
            {/* Data e horário do agendamento (direita) */}
            <div className="flex flex-col items-center justify-center border-l-2 px-5 text-center">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl font-bold">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/* Seção de Barbearias Recomendadas */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&:: wbkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
        
        ))}
         </div>
      </div>
    </div>
  )
}

// Exporta a função Home como o componente padrão da página
export default Home;
