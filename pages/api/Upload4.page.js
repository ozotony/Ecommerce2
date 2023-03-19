const AWS = require("aws-sdk");

export default async (req, res) => {
  // const S3 = New Aws.S3();
  var s3 = new AWS.S3();

  const params = {
    Bucket: process.env.bucketname,
    Key: process.env.AWSSecretKey,
  };

  const fileName = req.query["file-name"];
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: process.env.bucketname,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${process.env.bucketname}.s3.amazonaws.com/${fileName}`,
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
  //res.status(200).json("post");
  res.status(200).json(post);

  // res.status(200).json(post);
};
