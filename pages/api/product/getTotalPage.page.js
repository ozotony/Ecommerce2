import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { useRouter } from "next/router";

export default async (req, res) => {
  //let skips = parseInt(req.query.skips);
  //let items = parseInt(req.query.itemperpage);
  //console.log("items");
  //console.log(req.query.itemperpage);

  //const skips == "" ? 0: parseInt(req.query.skips) ;

  const userTransactionCount = await prisma.transactiondata.count();

  return res.json({
    userTransactionCount,
  });
};
