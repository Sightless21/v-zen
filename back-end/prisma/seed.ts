import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Start seeding...')

  const customer = await prisma.customer.create({
    data: {
      lineUserId: 'U1234567890',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '0812345678',
      address: 'Bangkok, Thailand',
    },
  })

  const technician = await prisma.technician.create({
    data: {
      name: 'Technician A',
      email: 'techA@example.com',
      phone: '0899999999',
      specialization: 'Electronics',
    },
  })

  const product = await prisma.product.create({
    data: {
      productCode: 'PRD-001',
      name: 'Air Conditioner',
      model: 'AC-1000',
      description: 'Inverter 12000 BTU',
      customerId: customer.id,
    },
  })

  const repairRequest = await prisma.repairRequest.create({
    data: {
      requestNo: 'REQ-001',
      problemDescription: 'Air conditioner not cooling properly',
      customerId: customer.id,
      productId: product.id,
      status: 'PENDING',
    },
  })

  const repairJob = await prisma.repairJob.create({
    data: {
      jobNo: 'JOB-001',
      technicianId: technician.id,
      repairRequestId: repairRequest.id,
      totalCost: 1500.0,
      approvalStatus: 'WAITING',
      repairJobItems: {
        create: [
          {
            itemType: 'PART',
            description: 'Compressor',
            quantity: 1,
            unitPrice: 1200.0,
            totalPrice: 1200.0,
          },
          {
            itemType: 'LABOR',
            description: 'Installation labor',
            quantity: 1,
            unitPrice: 300.0,
            totalPrice: 300.0,
          },
        ],
      },
    },
  })

  await prisma.repairLog.create({
    data: {
      action: 'Created repair job',
      statusAfter: 'PENDING',
      notes: 'Initial job created',
      repairJobId: repairJob.id,
      technicianId: technician.id,
    },
  })

  console.log('✅ Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
