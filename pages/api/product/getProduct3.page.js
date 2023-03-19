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
  // console.log("req.body.category");
  // console.log(req.body.category);

  const limit = 10;
  const cursor = req.query.cursor ?? "";
  const cursorObj = cursor === "" ? undefined : { id: parseInt(cursor, 10) };

  //let search2 = req.body.search;
  let search2 = req.query.search || "";

  // let category2 = req.body.category;
  let category2 = req.query.category || "";
  let result = [];

  if (search2 == "" && category2 == "") {
    result = await prisma.product.findMany({
      skip: cursor !== "" ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      include: {
        category: true,
        subCategory: true,
        state: true,
        area: true,
        productstatus: true,
      },
    });
  }

  // return res.status(201).json(result);

  if (search2 != "" && category2 == "") {
    console.log("category id");
    console.log(category2);
    result = await prisma.product.findMany({
      skip: cursor !== "" ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      include: {
        category: true,
        subCategory: true,
        state: true,
        area: true,
        productstatus: true,
      },

      where: {
        name: {
          search: search2, // Default mode
        },
      },
    });
  }

  if (search2 == "" && category2 != "") {
    result = await prisma.product.findMany({
      skip: cursor !== "" ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      include: {
        category: true,
        subCategory: true,
        state: true,
        area: true,
        productstatus: true,
      },

      where: {
        subcategoryid: {
          equals: parseInt(category2), // Default mode
        },
      },
    });
  }

  if (search2 != "" && category2 != "") {
    result = await prisma.product.findMany({
      skip: cursor !== "" ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      include: {
        category: true,
        subCategory: true,
        state: true,
        area: true,
        productstatus: true,
      },

      where: {
        subcategoryid: category2,
        name: {
          search: search2, // Default mode
        },
      },
    });
  }
  // const state = await prisma.state.findMany()
  await prisma.$disconnect();

  return res.json({
    result,
    nextId: result.length === limit ? result[limit - 1].id : undefined,
  });

  // return res.status(201).json(result);
};
