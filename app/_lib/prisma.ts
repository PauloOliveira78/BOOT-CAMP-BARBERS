// Importa o PrismaClient do pacote @prisma/client
import { PrismaClient } from "@prisma/client";

// Declaração global para armazenar a instância do PrismaClient em cache
declare global {
    var cachedPrisma: PrismaClient
}

// Criação da instância do PrismaClient
let prisma: PrismaClient

// Verifica se o ambiente é de produção
if (process.env.NODE_ENV === 'production') {
    // Se for produção, cria uma nova instância do PrismaClient
    prisma = new PrismaClient()
} else {
    // Se não for produção, utiliza a instância em cache para evitar múltiplas conexões
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
}

// Exporta a instância do PrismaClient para ser utilizada em outros arquivos
export const db = prisma
