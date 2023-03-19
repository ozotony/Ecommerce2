import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState, useContext, useRef } from "react";
import { Fieldset } from "primereact/fieldset";
import { FileInput } from "./FileInput";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import Resizer from "react-image-file-resizer";
const AWS = require("aws-sdk");
const AWSAccessKeyId = process.env.AWSAccessKeyId;
const AWSSecretKey = process.env.AWSSecretKey;

AWS.config.update({
  accessKeyId: AWSAccessKeyId,
  secretAccessKey: AWSSecretKey,
});

var s3 = new AWS.S3();
export default function Product2({
  setapp,
  selectedFile,
  setSelectedFile,
  isFilePicked,
  setIsFilePicked,
  selectedFile2,
  setSelectedFile2,
  isFilePicked2,
  setIsFilePicked2,
  selectedFile3,
  setSelectedFile3,
  isFilePicked3,
  setIsFilePicked3,
  extension1,
  setextension1,
  extension2,
  setextension2,
  extension3,
  setextension3,
  handleSubmission,
}) {
  const ref = useRef(null);

  const [FieldValue, setFieldValue] = useState();
  const [filesize1, setfilesize1] = useState();
  const [filesize2, setfilesize2] = useState();
  const [filesize3, setfilesize3] = useState();
  // let { uploadToS3 } = useS3Upload();

  function checkexternsion(exention) {
    let kk = exention;

    if (kk === "png") {
      return true;
    }

    if (kk === "jpg") {
      return true;
    }

    return false;
  }

  const changeHandler = async (event) => {
    console.log("event.target");
    console.log(event.target);
    if (event.target.files[0]) {
      let file = event.target.files[0];
      let timestamp = new Date().getTime().toString();

      let filename = `${timestamp}_${event.target.files[0].name}`;

      let last_dot = filename.lastIndexOf(".");
      let ext = filename.slice(last_dot + 1);

      // const image = await resizeFile(event.target.files[0].size);

      setSelectedFile(file);
      setIsFilePicked(true);
      // setextension1(ext);
      setextension1("JPEG");
    } else {
      setIsFilePicked(false);
    }
  };

  const changeHandler2 = (event) => {
    if (event.target.files[0]) {
      let file = event.target.files[0];
      let filename = event.target.files[0].name;
      let last_dot = filename.lastIndexOf(".");
      let ext = filename.slice(last_dot + 1);

      setextension2(ext);
      setfilesize2(event.target.files[0].size);
      setfilesize3(event.target.files[0].size);
      setSelectedFile2(file);
      setIsFilePicked2(true);
    } else {
      setIsFilePicked2(false);
    }
  };

  const changeHandler3 = (event) => {
    if (event.target.files[0]) {
      let file = event.target.files[0];
      let filename = event.target.files[0].name;
      let last_dot = filename.lastIndexOf(".");
      let ext = filename.slice(last_dot + 1);

      setextension3(ext);
      setfilesize3(event.target.files[0].size);
      setSelectedFile3(file);
      setIsFilePicked3(true);
    } else {
      setIsFilePicked3(false);
    }
  };

  function HandleChange(event) {
    setFieldValue("file", event.currentTarget.files[0]);
  }

  const handleSubmission2 = async () => {
    // HANDLING FILE AS SENDING FILE INTO BACKEND

    if (!isFilePicked || !isFilePicked2 || !isFilePicked3) {
      Swal.fire({
        title: "Error!",
        text: "All Files Must be Uploaded ",
        icon: "error",
        confirmButtonText: "Close",
      });

      return;
    }

    const paths = ["png", "jpg"];

    // alert(paths.includes( extension1))

    if (
      !(
        checkexternsion(extension1) &&
        checkexternsion(extension2) &&
        checkexternsion(extension3)
      )
    ) {
      Swal.fire({
        title: "Error!",
        text: "Invalid File Extension You can only upload (PNG OR JPG) ",
        icon: "error",
        confirmButtonText: "Close",
      });

      return;
    }

    // if (!isFilePicked) return;
    //alert("inside");
    const formData = new FormData();

    formData.append("File", selectedFile);
    formData.append("File2", selectedFile2);
    formData.append("File3", selectedFile3);
    // ALSO ADD RANDOM VALUE IF YOU WANT LIKE STRING , OBJECT OR      ARRAY
    formData.append("carDetail", {
      car: "honda",
      engine: "1498 cc",
      fuel_Type: "Petrol & Diesel",
    });
    // API CALL
    fetch("/api/Upload2/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Fieldset legend="Upload Image  ">
        <form>
          <div className="form-outline mb-4">
            <input
              type="file"
              className="form-control"
              name="files1"
              onChange={changeHandler}
            />

            {!selectedFile && (
              <label className="form-label" htmlFor="form6Example3">
                Upload First Image
              </label>
            )}

            <div> {selectedFile && selectedFile.name} </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="file"
              className="form-control"
              name="files1"
              onChange={changeHandler2}
            />
            {!selectedFile2 && (
              <label className="form-label" htmlFor="form6Example3">
                Upload Second Image
              </label>
            )}

            <div> {selectedFile2 && selectedFile2.name} </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="file"
              className="form-control"
              name="files1"
              onChange={changeHandler3}
            />

            {!selectedFile3 && (
              <label className="form-label" htmlFor="form6Example3">
                Upload Third Image
              </label>
            )}

            <div> {selectedFile3 && selectedFile3.name} </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              type="button"
              onClick={() => setapp("prev")}
              className="btn btn-primary btn-block mb-4"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleSubmission}
              className="btn btn-primary btn-block mb-4"
            >
              Final Submit
            </button>
          </div>
        </form>
      </Fieldset>
    </>
  );
}
