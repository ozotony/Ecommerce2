//import formidable from "formidable";
const formidable = require("formidable");
//import { IncomingForm } from "formidable";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//import { promises as fs } from 'fs'
var fs = require("fs");
var mv = require("mv");
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

  const form = new formidable.IncomingForm();

  const data = await new Promise((resolve, reject) => {
    // const form = new IncomingForm();
    const form = new formidable.IncomingForm();

    //form.parse(req, function (err, fields, files) {
    try {
      form.parse(req, (err, fields, files) => {
        ProdDetail2 = JSON.parse(fields.ProdDetail);

        if (err) return reject(err);

        oldPath = files.File.filepath;
        oldPath2 = files.File2.filepath;
        oldPath3 = files.File3.filepath;
        // var dir = `./public/uploads/FS_${ProdDetail2.userid}`;

        let timestamp = new Date().getTime().toString();
        originalfilename = `${files.File.originalFilename}.jpg`;
        originalfilename2 = `${files.File2.originalFilename}.jpg`;
        originalfilename3 = `${files.File3.originalFilename}.jpg`;

        console.log("got here 55");
        resolve("Promise is resolved successfully.");
      });
    } catch (e) {
      res.status(200).json({ e });
      reject(e);
      return;
    }
  });

  var s3 = new AWS.S3();
  const res2 = fs.readFileSync(oldPath);
  const res3 = fs.readFileSync(oldPath2);
  const res4 = fs.readFileSync(oldPath3);
  let timestamp = new Date().getTime().toString();

  var params = {
    Bucket: process.env.bucketname,
    Body: res2,
    Key: `${timestamp}_${originalfilename}`,
  };
  var params2 = {
    Bucket: process.env.bucketname,
    Body: res3,
    Key: `${timestamp}_${originalfilename2}`,
  };

  var params3 = {
    Bucket: process.env.bucketname,
    Body: res4,
    Key: `${timestamp}_${originalfilename3}`,
  };

  //return;
  //console.log("blog");
  //console.log(blob);
  //return;

  console.log("ProdDetail2 values");
  console.log(ProdDetail2);

  const Subcategory = await prisma.subcategory.findFirst({
    where: {
      id: {
        equals: ProdDetail2.groupcategory, // Default mode
      },
    },
  });

  const prodstatusid = await prisma.productstatus.findFirst({
    where: {
      prodname: {
        equals: ProdDetail2.productstatus, // Default mode
      },
    },
  });

  //console.log('prodstatusid')
  //console.log(prodstatusid)
  //return

  //let sub =  await    getdata(ProdDetail2.groupcategory)

  let categoryId = Subcategory.categoryId;

  let prodstatusid2 = prodstatusid.id;
  const taskCreate = await prisma.product.create({
    data: {
      name: ProdDetail2.productname,
      imageUrl: "test",
      imageUrl2: "test2",
      imageUrl3: "test3",
      description: ProdDetail2.productdescription,

      productstatusId: parseInt(prodstatusid2),
      categoryId: parseInt(categoryId),
      subcategoryId: ProdDetail2.groupcategory,
      stateId: parseInt(ProdDetail2.prodstate2),
      areaId: parseInt(ProdDetail2.city2),
      userId: parseInt(ProdDetail2.userid),
      price: parseInt(ProdDetail2.price),
    },
  });

  console.log("taskCreate");
  console.log(taskCreate);

  async function Update(id, location) {
    await prisma.product.update({
      where: {
        id: taskCreate.id,
      },
      data: {
        imageUrl: location,
      },
    });
  }

  async function Update2(id, location) {
    await prisma.product.update({
      where: {
        id: taskCreate.id,
      },
      data: {
        imageUrl2: location,
      },
    });
  }

  async function Update3(id, location) {
    await prisma.product.update({
      where: {
        id: taskCreate.id,
      },
      data: {
        imageUrl3: location,
      },
    });
  }

  s3.upload(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    }

    if (data) {
      console.log("Uploaded in 1:", data.Location);
      Update(taskCreate.id, data.Location);
    }
  });

  s3.upload(params2, function (err, data) {
    if (err) {
      console.log("Error", err);
    }

    if (data) {
      console.log("Uploaded in 2:", data.Location);
      Update2(taskCreate.id, data.Location);
    }
  });

  s3.upload(params3, function (err, data) {
    if (err) {
      console.log("Error", err);
    }

    if (data) {
      console.log("Uploaded in 3:", data.Location);
      Update3(taskCreate.id, data.Location);
    }
  });
  console.log("got here 8");
  console.log("product created successfully ");

  console.log(taskCreate);
  await prisma.$disconnect();
  res.status(200).json({ taskCreate });

  console.log("got here 7");
};
