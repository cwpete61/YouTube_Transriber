import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
    console.log('Total users:', users.length);
    users.forEach(u => console.log(`- ${u.email} (ID: ${u.id}, Role: ${u.role})`));

    const records = await prisma.record.findMany();
    console.log('\nTotal records:', records.length);
    records.forEach(r => console.log(`- [${r.sourceType}] ${r.title} (ID: ${r.id}, Owner: ${r.ownerId})`));
  } catch (error) {
    console.error('Error checking database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
