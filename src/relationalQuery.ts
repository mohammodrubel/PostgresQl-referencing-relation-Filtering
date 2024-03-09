import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const relationalQuery = async () => {
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     },
    //     // include: {
    //     //     post: true
    //     // }
    // }).profile()
    // console.log(result)

    // filtering with relations 
    const publishPostFilter = await prisma.user.findMany({
        include: {
            post: {
                where: {
                    published: true
                }
            }
        }
    })
    console.dir(publishPostFilter, { depth: Infinity })
}


relationalQuery()