import Image from "next/image";

import { Button } from "./button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle,  } from "./sheet";
import { quickSearchOptions } from "@/app/_constants/search";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

const SideBarSheet = () => {
    return (          

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">
                    Menu
                </SheetTitle>
            </SheetHeader> 
  
        <div className="flex items-center justify-between border-b border-solid">
            <h2 className="font-bold" > Olá, Faça seu login</h2>
            <Dialog>
               <DialogTrigger asChild>
                <Button size="icon">
                    <LogInIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%]">
                <DialogHeader>
                    <DialogTitle>Faça seu login</DialogTitle>
                <DialogDescription>
                    Conectece-se usando sua conta do Google
                </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="font-bold">
            <Image src="/Google.svg"
             alt="Fazer login com o Google"
             width={18} 
             height={18} />
            Google
            </Button>
            </DialogContent>
            </Dialog>
        {/*<Avatar className="w-10 h-10">
            <AvatarImage src="/Rosto.jpg" className="object-cover" />
        </Avatar>
        <div>
            <p className="font-bold">Paulo Oliveira</p>
            <p className="text-xs">paulo.oliveira78@outlook.com</p>
        </div> */}
        
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