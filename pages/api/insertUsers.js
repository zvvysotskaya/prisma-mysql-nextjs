const { PrismaClient } = require('@prisma/client')

export default function handler(req, res) {
    
    const uname = req.body.name
  
    const prisma = new PrismaClient()
   
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  async function main() {
    await prisma.usernames.create({
      data: {
        name: uname,
        createdAt: new Date()       
      },
    })
}

    res.status(200).json({ message: 'The user name is created!' })
  }
  