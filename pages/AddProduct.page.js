import { useCookies } from "react-cookie";
import { serialize } from "react-cookie";
import Product1 from "./Component/Product1";
import Product2 from "./Component/Product2";

import SideNav from "./Component/sidenav";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";

import { Steps } from "primereact/steps";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";

export default function AddProduct(props) {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  const [userid, setuserid] = useState();

  const urlpath = process.env.urlpath;

  // let userid=''

  //alert(userid)

  const [step, setStep] = useState(0);
  const [activeIndex, setactiveIndex] = useState(0);

  const [productname, setproductname] = useState();
  const [productdescription, setproductdescription] = useState();
  const [productstatus, setproductstatus] = useState();
  const [price, setprice] = useState();
  const [prodstate, setprodstate] = useState([]);
  const [prodstate2, setprodstate2] = useState();
  const [city, setcity] = useState([]);
  const [city2, setcity2] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const [selectedFile2, setSelectedFile2] = useState();
  const [isFilePicked2, setIsFilePicked2] = useState(false);

  const [selectedFile3, setSelectedFile3] = useState();
  const [isFilePicked3, setIsFilePicked3] = useState(false);

  const [groupcategory, setGroupcategory] = useState();

  const [extension1, setextension1] = useState();
  const [extension2, setextension2] = useState();
  const [extension3, setextension3] = useState();
  const [value, setValue] = useState();
  const [loadings, setLoadings] = useState(false);
  //let s3path = "https://s3.amazonaws.com/ozotony/";
  let s3path = "https://s3.amazonaws.com/ozotony2/";

  async function upload(file, ext, filename) {
    const data = await (await fetch(`/api/Upload?file=${filename}`)).json();

    const formData = new FormData();
    formData.append("Content-Type", file.type);
    Object.entries(data.fields).forEach(([k, v]) => {
      formData.append(k, v);
    });
    formData.append("file", file);

    let vurl = await fetch(data.url, {
      method: "POST",
      body: formData,
    });

    // return filename;
  }

  useEffect(() => {
    setValue(user);
    let k2 = typeof window !== "undefined" ? localStorage.getItem("user") : "";
    if (k2) {
      const obj = JSON.parse(k2);
      console.log(obj.user.userid);
      setuserid(obj.user.userid);

      //userid =obj.user.userid
    } else {
      Router.push({
        pathname: "/Login",
        query: { nextpage: "AddProduct" },
      });
    }

    // }
  }, []);

  const items = [{ label: "Step 1" }, { label: "Step 2" }];

  const handleSubmission = () => {
    if (!isFilePicked) {
      alert("select File 1");

      return;
    }

    if (!isFilePicked2) {
      alert("select File 2");

      return;
    }
    if (!isFilePicked3) {
      alert("select File 3");

      return;
    }
    let timestamp = new Date().getTime().toString();
    let filename = `${timestamp}_${selectedFile.name}.${extension1}`;
    setLoadings(true);
    upload(selectedFile, extension1, filename);

    // let filename = `${timestamp}_${selectedFile.name}.${extension1}`;
    timestamp = new Date().getTime().toString();
    let filename2 = `${timestamp}_${selectedFile2.name}.${extension2}`;
    upload(selectedFile2, extension2, filename2);

    timestamp = new Date().getTime().toString();
    let filename3 = `${timestamp}_${selectedFile3.name}.${extension3}`;

    upload(selectedFile3, extension3, filename3);

    //let file1url = upload(selectedFile);

    const formData = new FormData();
    console.log("selectedFile");
    console.log(selectedFile);

    console.log("selectedFile2");
    console.log(selectedFile2);
    formData.append("File", selectedFile);
    formData.append("File2", selectedFile2);
    formData.append("File3", selectedFile3);
    // ALSO ADD RANDOM VALUE IF YOU WANT LIKE STRING , OBJECT OR      ARRAY

    filename = `${s3path}${filename}`;
    filename2 = `${s3path}${filename2}`;
    filename3 = `${s3path}${filename3}`;

    const body = JSON.stringify({
      productname,
      productdescription,
      productstatus,
      price,
      userid,

      prodstate2,

      city2,
      groupcategory,
      filename,
      filename2,
      filename3,
    });

    // API CALL

    // fetch("/api/Upload2/", {
    fetch("/api/Upload2/", {
      method: "POST",
      body: body,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setLoadings(false);
        Swal.fire("Record saved succesfully");
        router.push("/GetProduct");
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error Occured ",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const prodstatechange = async (ee) => {
    const body = JSON.stringify({ Id: ee });

    const res2 = await fetch("/api/category/getarea", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: body,
    });

    const data2 = await res2.json();

    console.log("data2");
    console.log(data2);

    setcity(data2);

    setprodstate2(ee);

    //  alert(ee)
  };
  const setapp = async (status) => {
    if (status == "next") {
      setStep(1);
      setactiveIndex(1);
    } else {
      setStep(0);
      setactiveIndex(0);
    }
  };

  return (
    <>
      {loadings === true && (
        <div className="d-flex align-items-center">
          <strong>Please wait...</strong>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      )}
      <div>
        <div className="container" style={{ backgroundColor: "white" }}>
          <Steps model={items} activeIndex={activeIndex} readOnly={false} />
          <div
            style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
          >
            {step == 0 && (
              <Product1
                setapp={setapp}
                setproductname={setproductname}
                productname={productname}
                setproductstatus={setproductstatus}
                productstatus={productstatus}
                setprice={setprice}
                price={price}
                setGroupcategory={setGroupcategory}
                groupcategory={groupcategory}
                setprodstate={setprodstate}
                prodstate={prodstate}
                setprodstate2={setprodstate2}
                prodstate2={prodstate2}
                prodstatechange={prodstatechange}
                setcity={setcity}
                setcity2={setcity2}
                city={city}
                city2={city2}
                productdescription={productdescription}
                setproductdescription={setproductdescription}
              />
            )}

            {step == 1 && (
              <Product2
                setapp={setapp}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                isFilePicked={isFilePicked}
                setIsFilePicked={setIsFilePicked}
                selectedFile2={selectedFile2}
                setSelectedFile2={setSelectedFile2}
                isFilePicked2={isFilePicked2}
                setIsFilePicked2={setIsFilePicked2}
                selectedFile3={selectedFile3}
                setSelectedFile3={setSelectedFile3}
                isFilePicked3={isFilePicked3}
                setIsFilePicked3={setIsFilePicked3}
                extension1={extension1}
                setextension1={setextension1}
                extension2={extension2}
                setextension2={setextension2}
                extension3={extension3}
                setextension3={setextension3}
                handleSubmission={handleSubmission}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function getStaticProps() {
  return {
    props: {
      secret: process.env.s3path,
    },
  };
}
