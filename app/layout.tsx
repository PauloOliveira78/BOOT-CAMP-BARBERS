// Importa tipos para metadados e fontes do Google
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "./_components/ui/sonner";
import Footer from "./_components/ui/footer";


// Define a fonte Inter como padrão
const inter = Inter({ subsets: ["latin"] });

// Metadados da aplicação
export const metadata: Metadata = {
  title: "Projeto FSW Barbers",
  description: "BootCampWeek",
}

// Componente RootLayout que define a estrutura básica da aplicação
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Define o idioma da aplicação como inglês e aplica a classe "dark" ao HTML
    <html lang="en" className="dark">
      {/* Aplica a fonte Inter e insere o conteúdo da aplicação */}
      <body className={inter.className}>{children}
      <Toaster />
      <Footer />
      </body>
    </html>
  );
}
