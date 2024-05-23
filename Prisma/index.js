import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    //Create user
    let user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john@email.com'
        }
    })

    //Get all user
    let users = await prisma.user.findMany()
    users = await prisma.user.findMany({
        include: {
            articles: true
        }
    })
    
    //Create article and associate it with user
    let article = await prisma.article.create({
        data: {
            title: 'Johns First article',
            body: 'This is Johns first article',
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })

    // Get all articles
    let articles = await prisma.article.findMany()

    // Create user and article and associate them
    user = await prisma.user.create({
        data:{
            name: 'Jane Doe',
            email: 'jane@email.com',
            articles: {
                create: {
                    title: 'Janes First Article',
                    body: 'This is janes first artcles'
                }
            }
        }
    })

    // Create another articles
    article = await prisma.article.create({
        data: {
            title: 'Sample Article',
            body: 'This is a sample article',
            author: {
                connect: {
                    id: 2
                }
            }
        }
    })
    console.log(article)

    articles.forEach((article)=>{
        console.log(article)
    })

    // Update data
    user = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: 'John Doe  Jr.'
        }
    })
    
    // Remove Date 
    article = await prisma.article.delete({
        where: {
            id: 1
        }
    })
    console.log(article)
}

main()
.then(async () => await prisma.$disconnect())
.catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})