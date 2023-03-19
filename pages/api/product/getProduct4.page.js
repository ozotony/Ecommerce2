import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { useRouter } from "next/router";

export default async (req, res) => {
  console.log("request query");
  console.log(req.query);
  let skips = parseInt(req.query.skips);
  let items = parseInt(req.query.itemperpage);
  console.log("items");
  console.log(req.query.itemperpage);

  //const skips == "" ? 0: parseInt(req.query.skips) ;

  const takes = items;

  const result = await prisma.transactiondata.findMany({
    skip: skips,
    take: takes,
    orderBy: {
      id: "asc",
    },
  });

  //console.log("result server")

  const TransactionCount = await prisma.transactiondata.count();

  if (skips == 1) {
    skips = 0;
  }

  let count = skips;
  console.log("skips");
  console.log(skips);
  for (let i = 0; i < takes; i++) {
    count = count + 1;

    try {
      result[i].id = count;
    } catch (e) {}
  }
  return res.json({
    result,
    TransactionCount,
  });
};
