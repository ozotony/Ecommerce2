//import formidable from "formidable";
const formidable = require("formidable");
//import { IncomingForm } from "formidable";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//import { promises as fs } from 'fs'

const AWS = require("aws-sdk");
let originalfilename = "";
let originalfilename2 = "";
let originalfilename3 = "";

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
  const AWSAccessKeyId = process.env.AWSAccessKeyId;
  const AWSSecretKey = process.env.AWSSecretKey;

  AWS.config.update({
    accessKeyId: AWSAccessKeyId,
    secretAccessKey: AWSSecretKey,
  });

  let prod = JSON.parse(req.body);

  let groupcategory = parseInt(prod.groupcategory);

  const Subcategory = await prisma.subcategory.findFirst({
    where: {
      id: {
        equals: groupcategory, // Default mode
      },
    },
  });

  const prodstatusid = await prisma.productstatus.findFirst({
    where: {
      prodname: {
        equals: req.body.productstatus, // Default mode
      },
    },
  });

  // console.log("req.body");
  //console.log(req.body);
  //console.log(" prodstatusid");

  //console.log("prod");
  //console.log(prod);
  let categoryId = Subcategory.categoryId;
  //console.log("categoryId");
  //console.log(categoryId);

  let prodstatusid3 = prodstatusid.id;

  let product = {
    name: prod.productname,
    imageUrl: prod.filename,
    imageUrl2: prod.filename2,
    imageUrl3: prod.filename3,
    description: prod.productdescription,

    productstatusId: prodstatusid3,
    categoryId: parseInt(categoryId),
    subcategoryid: prod.groupcategory,
    stateId: parseInt(prod.prodstate2),
    areaId: parseInt(prod.city2),
    userId: parseInt(prod.userid),
    price: parseInt(prod.price),
  };

  //console.log(" product");
  //console.log(product);

  const taskCreate = await prisma.product.update({
    where: {
      id: prod.id,
    },
    data: {
      name: prod.productname,
      imageUrl: prod.filename,
      imageUrl2: prod.filename2,
      imageUrl3: prod.filename3,
      description: prod.productdescription,

      productstatusId: prodstatusid3,
      categoryId: parseInt(prod.category),
      subcategoryid: parseInt(prod.groupcategory),
      stateId: parseInt(prod.prodstate2),
      areaId: parseInt(prod.city2),
      userId: parseInt(prod.userid),
      price: parseInt(prod.price),
    },
  });

  //console.log("taskCreate");
  //console.log(taskCreate);

  // console.log("done");
  // return;

  //console.log("category id ")
  //console.log(categoryId)

  var newPath = "";
  var newPath2 = "";
  var newPath3 = "";

  var oldPath = "";
  var oldPath2 = "";
  var oldPath3 = "";

  //  console.log("got here 8");
  //  console.log("product created successfully ");

  //  console.log(taskCreate);
  await prisma.$disconnect();
  res.status(200).json({ taskCreate });

  //console.log("got here 7");
};
