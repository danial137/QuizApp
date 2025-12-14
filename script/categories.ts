let categsPrisma;

async function addCategories() {
  const { prismaClient } = require("@prisma/client");
  categsPrisma = new prismaClient();

    console.log("Adding categories...");
    
    for (category of categories) {
        await categsPrisma.category.create({
            data:categsPrisma
        })
    }
}

addCategories()
  .catch((e) => {
    console.log("error", e);
  })
  .finally(async () => {
    await categsPrisma.$disconnect();
  });
