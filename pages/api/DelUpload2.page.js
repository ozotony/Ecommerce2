const AWS = require("aws-sdk");
var path = require("path");

export default async (req, res) => {
  // const S3 = New Aws.S3();
  //var s3 = new AWS.S3();

  let AWSAccessKeyId = "AKIAVRHJVC724QAVJYQV";
  let AWSSecretKey = "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";
  let bucketname = "ozotony";

  const s3 = new AWS.S3({
    accessKeyId: AWSAccessKeyId,
    secretAccessKey: AWSSecretKey,
    Bucket: bucketname,
  });

  let filename = req.query.file;
  filename = path.parse(filename).base;
  console.log("backend filename =");
  console.log(filename);

  const params = {
    Bucket: process.env.bucketname,
    Key: filename,
  };

  // console.log(`\nDeleting object "${bucketParams.Key}"} from bucket`);

  s3.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack); // error
    else console.log("success delet"); // deleted
  });

  //res.status(200).json("post");
  res.status(200).json("success");

  // res.status(200).json(post);
};
