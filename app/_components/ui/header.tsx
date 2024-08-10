import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between" >
        <Image alt="FSW Barber" src="/Logo.png" height={18} width={120} />
        <Button size="icon" variant="outline">
         <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header;
