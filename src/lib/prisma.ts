import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findUnique({
        where: { email: 'test@example.com' },
    });
    console.log(user);
}

main().catch((e) => {
    console.error(e);
    prisma.$disconnect();
});

export default prisma;