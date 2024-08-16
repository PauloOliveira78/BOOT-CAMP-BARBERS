"use client";

import { SmartphoneIcon } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";

interface PhoneItemProps {
    phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
    const handleCopyPhoneClick = (phone: string) => {
        navigator.clipboard.writeText(phone);
        toast.success("Telefone copiado com sucesso!");

    };

    return (  
        <div className="flex justify-between" key={phone}>
            {/* Esquerda */}
            <div className="flex items-center">
                <SmartphoneIcon />
                <p className="flex items-center gap-2">{phone}</p>
            </div>
            {/* Direita */}
            <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleCopyPhoneClick(phone)}
            >
                Copiar
            </Button>
        </div>
    );
};

export default PhoneItem;
