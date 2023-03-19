import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//import { promises as fs } from 'fs'

var vpath = "./public";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function getdata(dd) {
  const Subcategory = await prisma.subcategory.findFirst({
    where: {
      id: {
        equals: dd, // Default mode
      },
    },
  });
}

export default async (req, res) => {
  var ProdDetail2 = {};

  //console.log('prodstatusid')
  //console.log(prodstatusid)
  //return

  //let sub =  await    getdata(ProdDetail2.groupcategory)

  //console.log("category id ")
  //console.log(categoryId)

  let newPath = "";
  let newPath2 = "";
  let newPath3 = "";

  //console.log("ProdDetail2 values");
  //console.log(ProdDetail2);

  const deleteUser = await prisma.product.delete({
    where: {
      id: parseInt(ProdDetail2.prodid),
    },
  });

  console.log("got here 8");
  console.log("product deleted  successfully ");

  res.status(200).json({ deleteUser });

  await prisma.$disconnect();

  console.log("got here 17");
};
