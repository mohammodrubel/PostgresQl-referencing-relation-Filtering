import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const notFitering = async () => {
    // const result = await prisma.post.findMany({
    //     where: {
    //         NOT: [
    //             {
    //                 title: {
    //                     contains: 'title'
    //                 }
    //             }
    //         ]
    //     }
    // })
    // console.log(result)

    const startWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: 'r'
            }
        }
    })
    console.log(startWith)
}

notFitering()