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

    // const startWith = await prisma.user.findMany({
    //     where: {
    //         email: {
    //             equals: 'rubel@gmail.com'
    //         }
    //     }
    // })
    // console.log(startWith)

    const selectArray = ['fardin tazbeed', 'rubel']
    const usrNamesByArray = await prisma.user.findMany({
        where: {
            userName: {
                in: selectArray
            }
        }
    })

    console.log(usrNamesByArray)
}

notFitering()