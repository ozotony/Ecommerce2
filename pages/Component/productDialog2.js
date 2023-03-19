import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
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
}) {
  //console.log("category");
  //console.log(category);

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [subcategories2, setSubcategories2] = useState([]);
  const [states, setStates] = useState([]);
  const selectRef = useRef(null);
  const fileRef = useRef(null);
  const fileRef2 = useRef(null);
  const fileRef3 = useRef(null);
  let NewCategory = [];

  useEffect(() => {
    //  alert(category.length);
    NewCategory = category.map((cat) => {
      return { value: cat.id, label: cat.catname };
    });

    console.log("NewCategory");
    console.log(NewCategory);
    // setCategories(category);
    // setStates(prodstate);
  }, []);

  function SelectField(props) {
    const [field, state, { setValue, setTouched, handleChange }] = useField(
      props.field.name
    );

    const onChange = async ({ value }) => {
      // setIsloading(true);
      //setCategories(value);
      //setValue(value);
      // handleChange(value);
      let data = handleCategoryChange(value);
      setValue(value);

      // actions.setSubcategories([]);
      // setFieldValue("subcategories", data);
      //data;
      // setValue(value);
    };

    return <Select {...props} onChange={onChange} onBlur={setTouched} />;
  }

  const FileUpload = ({ fileRef, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <input
          ref={fileRef}
          className="form-control  bg-white"
          multiple={false}
          type="file"
          {...field}
        />
        {meta.touched && meta.error ? (
          <div style={{ color: "red" }}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

  const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <textarea className="form-control  bg-white" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const handleCategoryChange = async (e) => {
    // let selectcat = selectRef.current.value;
    let selectcat = e;
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

    return data;

    setSubcategories(data);
    //data;
    setIsloading(false);
  };

  const handleCategoryChange2 = async (e) => {
    //setSubcategories2(e);
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
              <Form>
                <fieldset className="border border-gary px-3 px-md-4 py-4 mb-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3>Post Your ad</h3>
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold pt-4 pb-1">
                        Product Name:
                      </h6>
                      <input
                        name="prodname"
                        className="form-control w-100 bg-white"
                        placeholder="Product Name"
                        type="text"
                      />

                      <h6 className="font-weight-bold pt-4 pb-1">Price</h6>
                      <input
                        name="price"
                        className="form-control w-100 bg-white"
                        placeholder="Price"
                        type="number"
                      />

                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">Status:</h6>

                        <select
                          name="status"
                          as="select"
                          className="form-control w-70 bg-white"
                          placeholder="status"
                        >
                          <option value="">Select category</option>
                          {category.map((category, i) => (
                            <option value={category.id} key={i}>
                              {category.catname}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">State:</h6>

                        <select
                          name="state"
                          as="select"
                          className="form-control w-70 bg-white"
                          placeholder="status"
                        >
                          <option value="">Select category</option>
                          {category.map((category, i) => (
                            <option value={category.id} key={i}>
                              {category.catname}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">Area:</h6>

                        <select
                          name="area"
                          as="select"
                          className="form-control w-70 bg-white"
                          placeholder="status"
                        >
                          <option value="">Select category</option>
                          {category.map((category, i) => (
                            <option value={category.id} key={i}>
                              {category.catname}
                            </option>
                          ))}
                        </select>
                      </div>

                      <h6 className="font-weight-bold pt-4 pb-1">
                        Description:
                      </h6>

                      <textarea
                        name="description"
                        className="form-control bg-white"
                        rows="7"
                        placeholder="Write details about your product"
                      ></textarea>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">
                          Select Ad Category2:
                        </h6>

                        <Select
                          name="category2"
                          className="form-control w-70 bg-white"
                          options={category}
                        />

                        <select
                          name="category2"
                          as="select"
                          // value={values.category2}
                          className="form-control w-70 bg-white"
                          placeholder="category"
                          onChange={async (e) => {
                            const { value } = e.target;
                            // setIsloading(true);
                            // setCategories(value);
                            handleCategoryChange(value);

                            //  setFieldValue("category", value);
                          }}
                        >
                          <option value="">Select category</option>
                          {category.map((category, i) => (
                            <option value={category.id} key={i}>
                              {category.catname}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="row">
                        <h6 className="font-weight-bold pt-4 pb-1">
                          Select Sub Category:
                        </h6>

                        <select
                          name="subcategory"
                          as="select"
                          className="form-control w-70 bg-white"
                          placeholder="status"
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
                        className="form-control-file d-none"
                        id="file-upload"
                        name="file"
                      />

                      <h6 className="font-weight-bold pt-4 pb-1">
                        Upload File 2
                      </h6>

                      <input
                        type="file2"
                        className="form-control-file d-none"
                        id="file-upload"
                        name="file"
                      />

                      <h6 className="font-weight-bold pt-4 pb-1">
                        Upload File 3
                      </h6>
                      <input
                        type="file3"
                        className="form-control-file d-none"
                        id="file-upload"
                        name="file"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary d-block mt-2"
                  >
                    Post Your Ad
                  </button>
                </fieldset>
              </Form>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
