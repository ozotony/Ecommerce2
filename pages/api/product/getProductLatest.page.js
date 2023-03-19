import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { useRouter } from "next/router";

export default async (req, res) => {
  // const router = useRouter()
  // console.log('router.query');
  //console.log("inside server ");
  //console.log(req.body.userid);

  // console.log('req.body');
  // console.log(req.body.description);
  //const taskCreate=await prisma.tasks.create({data:req.body})
  // const taskCreate=await prisma.tasks.create({data:req.body})
  //let userid = req.body.userid;

  const result =
    await prisma.$queryRaw`SELECT d. catname,a.subcategoryid, c.subname, count(c.subname) from product a   
 inner   join subcategory c ON    c.id =a.subcategoryid
inner   join category d on a."categoryId" = d.id
 
 group by  c.subname,d.catname ,a.subcategoryid`;

  // const state = await prisma.state.findMany()

  await prisma.$disconnect();
  return res.status(201).json(result);
};
