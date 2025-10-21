import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const customers = await prisma.customer.findMany()
  console.log('Customers:', customers)
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect())
