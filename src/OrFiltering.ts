import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const OrFiltering = async () => {
    const orFilteringData = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: 'hello'
                    },
                },
                {
                    published: true
                }
            ]
        }
    })
    console.log(orFilteringData)
}
OrFiltering()