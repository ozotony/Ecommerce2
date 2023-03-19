const AWS = require("aws-sdk");

export default async (req, res) => {
  // const S3 = New Aws.S3();
  var s3 = new AWS.S3();

  const params = {
    Bucket: process.env.bucketname,
    Key: process.env.AWSSecretKey,
  };

  const post = s3.createPresignedPost({
    Bucket: process.env.bucketname,
    Fields: {
      key: req.query.file, // totally random
    },
    Conditions: [
      ["content-length-range", 0, 1000000], // content length restrictions: 0-1MB
      ["starts-with", "$Content-Type", "image/"], // content type restriction
    ],
  });

  //res.status(200).json("post");
  res.status(200).json(post);

  // res.status(200).json(post);
};
