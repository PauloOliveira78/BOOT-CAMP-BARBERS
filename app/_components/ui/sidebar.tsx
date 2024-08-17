import Image from "next/image";

import { Button } from "./button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle,  } from "./sheet";
import { quickSearchOptions } from "@/app/_constants/search";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

const SideBarSheet = () => {
    return (          

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">
                    Menu
                </SheetTitle>
            </SheetHeader> 
  
        <div className="py-5 border-b flex items-center border-solid gap-3">
        <Avatar className="w-10 h-10">
            <AvatarImage src="/Rosto.jpg" className="object-cover" />
        </Avatar>
        <div>
            <p className="font-bold">Paulo Oliveira</p>
            <p className="text-xs">paulo.oliveira78@outlook.com</p>
        </div>
        
        </div>

        <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
        <Button className="justify-start gap-2" variant="ghost" asChild>
        <Link href="/">
            <HomeIcon size={18} />
            Inicio
            </Link>
            </Button>
            </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18}/>
            Agendamento
            </Button>
        </div>

        <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map(opition =>           
            <Button key={opition.title} 
            className="justify-start gap-2" 
            variant="ghost">
            
            <Image 
            alt={opition.title}
            src={opition.imageUrl} 
            height={18}
            width={18} 
            />
            {opition.title}
            </Button>
        )}


        </div>
        <div className="flex flex-col gap-2 border-b border-solid py-5">
            <Button variant="ghost" className="justify-start gap-2">
            <LogOutIcon size={18} />
            Sair da conta
            </Button>          
            </div>
        </SheetContent>
 );
    }

    export default SideBarSheet;