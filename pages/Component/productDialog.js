import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";

import styles from "../../styles/productDialog.module.css";

import Select from "react-select";
import * as Yup from "yup";

import axios from "axios";
export default function ProductDialog({
  page,
  show,
  handleClose,
  Key,
  category,
  prodstate,
  id,
  prevfile1,
  prevfile2,
  prevfile3,
}) {
  console.log(page.name);
  console.log("current product");
  console.log(page);

  const Prodstatus = ["Brand New", "Fairly Used"];

  const [categories, setCategories] = useState();
  const [iscategories, setIsCategories] = useState(true);
  const [subcategories, setSubcategories] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [subcategories2, setSubcategories2] = useState();
  const [subcategories3, setSubcategories3] = useState(true);
  const [area2, setArea2] = useState([]);
  const [area, setArea] = useState();
  const [area3, setArea3] = useState(true);
  const [productname, setProductname] = useState();
  const [prodentered, setProdentered] = useState(true);
  const [priceentered, setPriceentered] = useState(true);
  const [productdescription, setproductdescription] = useState();

  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [isdescription, setIsDescription] = useState(true);

  const [status, setStatus] = useState();
  const [status2, setStatus2] = useState(true);
  const [states2, setStates2] = useState();
  const [states3, setStates3] = useState(true);
  const selectRef = useRef(null);
  const [selectedprevfile, setSelectedPrevFile] = useState();
  const [currentid, setCurrentid] = useState();
  const [selectedprevfile2, setSelectedPrevFile2] = useState();
  const [selectedprevfile3, setSelectedPrevFile3] = useState();
  const [userid, setuserid] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [groupcategory, setGroupcategory] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const [selectedFile2, setSelectedFile2] = useState();
  const [isFilePicked2, setIsFilePicked2] = useState(false);

  const [selectedFile3, setSelectedFile3] = useState();
  const [isFilePicked3, setIsFilePicked3] = useState(false);
  const [extension1, setextension1] = useState();
  const [extension2, setextension2] = useState();
  const [extension3, setextension3] = useState();
  let s3path = "https://s3.amazonaws.com/ozotony/";
  let NewCategory = [];
  let NewState = [];

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

  async function upload2(filename) {
    const data = await (await fetch(`/api/DelUpload2?file=${filename}`)).json();
  }

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

  const changeHandler11 = async (event) => {
    if (event.target.files[0]) {
      let file = event.target.files[0];
      let timestamp = new Date().getTime().toString();

      let filename = `${timestamp}_${event.target.files[0].name}`;

      let last_dot = filename.lastIndexOf(".");
      let ext = filename.slice(last_dot + 1);

      setSelectedFile(file);
      setIsFilePicked(true);
      setextension1(ext);
    } else {
      setIsFilePicked(false);
    }
  };

  const changeHandler12 = (event) => {
    if (event.target.files[0]) {
      let file = event.target.files[0];
      let filename = event.target.files[0].name;
      let last_dot = filename.lastIndexOf(".");
      let ext = filename.slice(last_dot + 1);

      setextension2(ext);
      // setfilesize2(event.target.files[0].size);
      //  setfilesize3(event.target.files[0].size);
      setSelectedFile2(file);
      setIsFilePicked2(true);
    } else {
      setIsFilePicked2(false);
    }
  };

  const changeHandler13 = (event) => {
    if (event.target.files[0]) {
      let file = event.target.files[0];
      let filename = event.target.files[0].name;
      let last_dot = filename.lastIndexOf(".");
      let ext = filename.slice(last_dot + 1);

      setextension3(ext);
      // setfilesize3(event.target.files[0].size);
      setSelectedFile3(file);
      setIsFilePicked3(true);
    } else {
      setIsFilePicked3(false);
    }
  };

  useEffect(() => {
    //  alert(category.length);

    let k2 = typeof window !== "undefined" ? localStorage.getItem("user") : "";
    if (k2) {
      const obj = JSON.parse(k2);
      console.log(obj.user.userid);
      setuserid(obj.user.userid);

      //userid =obj.user.userid
    }
    setProductname(page.name);
    setPrice(page.price);
    setStatus(page.productstatus.prodname);
    setStates2(page.stateId);
    handleCategoryChange22(page.stateId);
    setArea(page.areaId);
    setDescription(page.description);
    setCategories(page.categoryId);
    handleCategoryChange11(page.categoryId);
    setSubcategories2(page.subcategoryid);
    setSelectedPrevFile(page.imageUrl);

    setSelectedPrevFile2(page.imageUrl2);

    setSelectedPrevFile3(page.imageUrl3);

    setCurrentid(id);

    //alert(page.imageUrl.split("/").slice(-1)[0]);

    NewCategory = category.map(
      (cat) => {
        return { value: cat.id, label: cat.catname };
      },
      [id]
    );

    console.log("NewState");
    console.log(prodstate);

    //console.log("state");
    //console.log(prodstate);
    // setCategories(category);
    // setStates(prodstate);
  }, [currentid]);

  const handleCategoryChange = async (e) => {
    let selectcat = e.value;
    setCategories(e.value);
    // alert(selectcat);

    // setSubcategories([]);
    setIsloading(true);

    const body2 = JSON.stringify({ categories: selectcat });

    const res = await fetch("/api/category/getsubcategory2", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: body2,
    });

    const data = await res.json();

    setSubcategories(data);
    //data;
    setIsloading(false);
  };

  const handleCategoryChange11 = async (e) => {
    let selectcat = e;
    // setCategories(e.value);
    // alert(selectcat);

    // setSubcategories([]);
    // setIsloading(true);

    const body2 = JSON.stringify({ categories: selectcat });

    const res = await fetch("/api/category/getsubcategory2", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: body2,
    });

    const data = await res.json();

    setSubcategories(data);

    //data;
    // setIsloading(false);
  };

  const handleCategoryChange22 = async (e) => {
    let selectcat = e;

    const body2 = JSON.stringify({ id: selectcat });

    const res = await fetch("/api/category/getarea", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: body2,
    });

    const data = await res.json();

    setArea2(data);
  };

  const handleCategoryChange2 = async (e) => {
    let selectcat = e.value;
    setStates2(e.value);
    // alert(selectcat);

    // setSubcategories([]);
    setIsloading(true);

    const body2 = JSON.stringify({ id: selectcat });

    const res = await fetch("/api/category/getarea", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: body2,
    });

    const data = await res.json();

    console.log("area");
    console.log(data);

    setArea2(data);
    //data;
    setIsloading(false);
  };

  // style={{ borderColor: "red" }}
  const validate = () => {
    let errorcount = 0;

    if (productname) {
      setProdentered(true);
    } else {
      setProdentered(false);
      errorcount = errorcount + 1;
    }

    if (price) {
      setPriceentered(true);
    } else {
      setPriceentered(false);
      errorcount = errorcount + 1;
    }

    if (status) {
      setStatus2(true);
    } else {
      setStatus2(false);
      errorcount = errorcount + 1;
    }

    if (states2) {
      setStates3(true);
    } else {
      setStates3(false);
      errorcount = errorcount + 1;
    }

    if (area) {
      setArea3(true);
    } else {
      setArea3(false);
      errorcount = errorcount + 1;
    }

    if (description) {
      setIsDescription(true);
    } else {
      setIsDescription(false);
      errorcount = errorcount + 1;
    }

    if (categories) {
      setIsCategories(true);
    } else {
      setIsCategories(false);
      errorcount = errorcount + 1;
    }

    if (subcategories2) {
      setSubcategories3(true);
    } else {
      setSubcategories3(false);
      errorcount = errorcount + 1;
    }

    return errorcount;
  };

  const Save = async () => {
    // alert(selectedprevfile);
    const count = validate();

    if (count == 0) {
      handleSubmission();
    }
  };

  const handleSubmission = () => {
    let timestamp = new Date().getTime().toString();
    //let result = (marks >= 40) ? 'pass' : 'fail';
    let filename = selectedprevfile;

    // setLoadings(true);
    if (isFilePicked) {
      filename = isFilePicked
        ? `${timestamp}_${selectedFile.name}.${extension1}`
        : selectedprevfile;
      try {
        upload2(prevfile1);
      } catch (err) {}

      upload(selectedFile, extension1, filename);
    }

    // let filename = `${timestamp}_${selectedFile.name}.${extension1}`;
    timestamp = new Date().getTime().toString();

    let filename2 = selectedprevfile2;
    if (isFilePicked2) {
      filename2 = `${timestamp}_${selectedFile2.name}.${extension2}`;
      upload2(prevfile2);
      upload(selectedFile2, extension2, filename2);
    }

    timestamp = new Date().getTime().toString();
    let filename3 = selectedprevfile3;

    if (isFilePicked3) {
      filename3 = `${timestamp}_${selectedFile3.name}.${extension3}`;
      upload2(prevfile3);
      upload(selectedFile3, extension3, filename3);
    }

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
    if (isFilePicked) {
      filename = `${s3path}${filename}`;
    } else {
      filename = `${filename}`;
    }

    if (isFilePicked2) {
      filename2 = `${s3path}${filename2}`;
    } else {
      filename2 = `${filename2}`;
    }

    if (isFilePicked3) {
      filename3 = `${s3path}${filename3}`;
    } else {
      filename3 = `${filename3}`;
    }

    // filename2 = `${s3path}${filename2}`;

    // filename3 = `${s3path}${filename3}`;

    let id = currentid;

    const body = JSON.stringify({
      id,
      productname,
      productdescription: description,
      productstatus: status,
      price,
      userid,
      category: categories,

      prodstate2: states2,

      city2: area,
      groupcategory: subcategories2,
      filename,
      filename2,
      filename3,
    });

    // API CALL

    // fetch("/api/Upload2/", {
    fetch("/api/Upload2a/", {
      method: "POST",
      body: body,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        // setLoadings(false);
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

  return (
    <>
      <Modal
        id={page.id}
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{page.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="advt-post bg-gray py-5">
            {isloading && (
              <div className="spinner-border text-success" role="status">
                <span>Loading...</span>
              </div>
            )}

            <div className="container">
              <form>
                <fieldset className="border border-gary px-3 px-md-4 py-4 mb-5">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <h3>Post Your ad2</h3>
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold pt-4 pb-1 ">
                        Product Name:
                      </h6>

                      <input
                        name="prodname"
                        value={productname}
                        className={
                          !prodentered
                            ? `${styles.errors}  form-control w-100 bg-white`
                            : `form-control w-100 bg-white`
                        }
                        onChange={(e) => setProductname(e.target.value)}
                        placeholder="Product Name"
                        type="text"
                      />

                      <h6 className="font-weight-bold pt-4 pb-1">Price</h6>
                      <input
                        name="price"
                        value={price}
                        className={
                          !priceentered
                            ? `${styles.errors}  form-control w-100 bg-white`
                            : `form-control w-100 bg-white`
                        }
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Price"
                        type="number"
                      />

                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">Status:</h6>

                        <select
                          value={status}
                          className={
                            !status2
                              ? `${styles.errors}  form-control w-100 bg-white`
                              : `form-control w-100 bg-white`
                          }
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="">Select Status</option>
                          {Prodstatus.map((value, i) => (
                            <option value={value} key={i}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">State:</h6>

                        <Select
                          name="state2"
                          className={
                            !states3
                              ? `${styles.errors}  form-control w-100 bg-white`
                              : `form-control w-100 bg-white`
                          }
                          value={prodstate.filter(function (option) {
                            return option.value === states2;
                          })}
                          onChange={handleCategoryChange2}
                          options={prodstate}
                        />
                      </div>

                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">Area:</h6>

                        <select
                          name="area"
                          value={area}
                          as="select"
                          className={
                            !area3
                              ? `${styles.errors}  form-control w-100 bg-white`
                              : `form-control w-100 bg-white`
                          }
                          placeholder="status"
                          onChange={(e) => setArea(e.target.value)}
                        >
                          <option value="">Select Area</option>
                          {area2.map((category, i) => (
                            <option value={category.id} key={i}>
                              {category.cityname}
                            </option>
                          ))}
                        </select>
                      </div>

                      <h6 className="font-weight-bold pt-4 pb-1">
                        Description:
                      </h6>

                      <textarea
                        name="description"
                        value={description}
                        className={
                          !isdescription
                            ? `${styles.errors}  form-control w-100 bg-white`
                            : `form-control w-100 bg-white`
                        }
                        onChange={(e) => setDescription(e.target.value)}
                        rows="7"
                        placeholder="Write details about your product"
                      ></textarea>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">
                          Select Ad Category:
                        </h6>

                        <Select
                          name="category2"
                          className={
                            !iscategories
                              ? `${styles.errors}  form-control w-100 bg-white`
                              : `form-control w-100 bg-white`
                          }
                          onChange={handleCategoryChange}
                          value={category.filter(function (option) {
                            return option.value === categories;
                          })}
                          options={category}
                        />
                      </div>

                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">
                          Select Sub Category:
                        </h6>

                        <select
                          name="subcategory"
                          value={subcategories2}
                          onChange={(e) => setSubcategories2(e.target.value)}
                          as="select"
                          className={
                            !subcategories3
                              ? `${styles.errors}  form-control w-100 bg-white`
                              : `form-control w-100 bg-white`
                          }
                          placeholder="Sub Category"
                        >
                          <option value="">Select category</option>
                          {subcategories.map((category, i) => (
                            <option value={category.id} key={i}>
                              {category.subname}
                            </option>
                          ))}
                        </select>
                      </div>

                      <h6 className="font-weight-bold pt-4 pb-1">
                        Upload File 1
                      </h6>

                      <input
                        type="file"
                        className="form-control-file w-70 bg-white"
                        id="file-upload"
                        onChange={changeHandler11}
                        name="file"
                      />

                      <div>
                        <img
                          src={page.imageUrl}
                          alt="react logo"
                          style={{ width: "200px" }}
                        />
                      </div>

                      <h6 className="font-weight-bold pt-4 pb-1">
                        Upload File 2
                      </h6>

                      <input
                        type="file"
                        className="form-control-file w-70 bg-white"
                        id="file-upload2"
                        onChange={changeHandler12}
                        name="file2"
                      />

                      <div>
                        <img
                          src={page.imageUrl2}
                          alt="react logo"
                          style={{ width: "200px" }}
                        />
                      </div>

                      <h6 className="font-weight-bold pt-4 pb-1">
                        Upload File 3
                      </h6>
                      <input
                        type="file"
                        className="form-control-file w-70 bg-white"
                        onChange={changeHandler13}
                        id="file-upload3"
                        name="file3"
                      />

                      <div>
                        <img
                          src={page.imageUrl3}
                          alt="react logo"
                          style={{ width: "200px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={Save}
                    className="btn btn-primary d-block mt-2"
                  >
                    Post Your Ad
                  </button>
                </fieldset>
              </form>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
