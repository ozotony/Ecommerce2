import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { useRouter } from "next/router";

export default async (req, res) => {
  // const router = useRouter()
  // console.log('router.query');
  //console.log("inside server ");
  //console.log(req.body.userid);

  console.log("req.body");
  console.log(req.body.categories);
  //const taskCreate=await prisma.tasks.create({data:req.body})
  // const taskCreate=await prisma.tasks.create({data:req.body})
  let catid = req.body.categories;

  const result = await prisma.subcategory.findMany({
    where: {
      categoryId: {
        equals: parseInt(catid), // Default mode
      },
    },
  });

  // const state = await prisma.state.findMany()

  await prisma.$disconnect();
  return res.status(201).json(result);
};
