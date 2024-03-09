import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    // const createUser = await prisma.user.create({
    //     data: {
    //         userName: "rubel",
    //         email: "rubel@gmail.com",
    //         role: User_Role.user
    //     }
    // })
    // console.log(createUser)

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: 'this is bio',
    //         userId: 1
    //     }
    // })

    // console.log(createProfile)

    // const createCategory = await prisma.category.createMany({
    //     data: [
    //         {
    //             name: 'Html'
    //         },
    //         {
    //             name: 'Css'
    //         },
    //         {
    //             name: 'Javascript'
    //         },
    //         {
    //             name: 'Redux'
    //         },
    //         {
    //             name: 'TypeScript'
    //         },
    //     ]
    // })
    // console.log(createCategory)

    const createPost = await prisma.post.create({
        data: {
            title: "this is title 4",
            content: "this is simple content 4",
            userId: 1,
            postCategory: {
                create: [
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 2
                    },
                    {
                        categoryId: 3
                    }
                ]
            }
        },
        include: {
            postCategory: true
        }
    })
    console.log(createPost)
}

main()