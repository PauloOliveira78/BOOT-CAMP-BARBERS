// Importa tipos e funções necessárias para manipulação de classes CSS
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Função utilitária que combina classes utilizando clsx e as mescla com Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
