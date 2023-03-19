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
      setIsloading(true);
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

    //  setSubcategories(data);
    //data;
    // setIsloading(false);
  };

  const handleCategoryChange2 = async (e) => {
    //setSubcategories2(e);
  };

  return (
    <>
      <Formik
        initialValues={{
          prodname: "test",
          price: "",
          status: "",
          state: "",
          area: "",
          description: "",
          category2: "",
          subcategory: "",
        }}
        validationSchema={Yup.object({
          prodname: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
          status: Yup.string().required("Required"),
          area: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          category2: Yup.string().required("Required"),
          subcategory: Yup.string().required("Required"),
          files: Yup.mixed()
            .test("is-file-too-big", "File exceeds 1MB", () => {
              let valid = true;
              const files = fileRef?.current?.files;
              if (files) {
                const fileArr = Array.from(files);
                fileArr.forEach((file) => {
                  const size = file.size / 1024 / 1024;
                  if (size > 1) {
                    valid = false;
                  }
                });
              }
              return valid;
            })
            .test(
              "is-file-of-correct-type",
              "File is not of supported type",
              () => {
                let valid = true;
                const files = fileRef?.current?.files;
                if (files) {
                  const fileArr = Array.from(files);
                  fileArr.forEach((file) => {
                    const type = file.type.split("/")[1];
                    const validTypes = ["jpeg", "png", "jpg", "ogg", "gif"];
                    if (!validTypes.includes(type)) {
                      valid = false;
                    }
                  });
                }
                return valid;
              }
            ),
          files2: Yup.mixed()
            .test("is-file-too-big", "File exceeds 1MB", () => {
              let valid = true;
              const files = fileRef2?.current?.files;
              if (files) {
                const fileArr = Array.from(files);
                fileArr.forEach((file) => {
                  const size = file.size / 1024 / 1024;
                  if (size > 1) {
                    valid = false;
                  }
                });
              }
              return valid;
            })
            .test(
              "is-file-of-correct-type",
              "File is not of supported type",
              () => {
                let valid = true;
                const files = fileRef2?.current?.files;
                if (files) {
                  const fileArr = Array.from(files);
                  fileArr.forEach((file) => {
                    const type = file.type.split("/")[1];
                    const validTypes = ["jpeg", "png", "jpg", "ogg", "gif"];
                    if (!validTypes.includes(type)) {
                      valid = false;
                    }
                  });
                }
                return valid;
              }
            ),
          files3: Yup.mixed()
            .test("is-file-too-big", "File exceeds 1MB", () => {
              let valid = true;
              const files = fileRef3?.current?.files;
              if (files) {
                const fileArr = Array.from(files);
                fileArr.forEach((file) => {
                  const size = file.size / 1024 / 1024;
                  if (size > 1) {
                    valid = false;
                  }
                });
              }
              return valid;
            })
            .test(
              "is-file-of-correct-type",
              "File is not of supported type",
              () => {
                let valid = true;
                const files = fileRef3?.current?.files;
                if (files) {
                  const fileArr = Array.from(files);
                  fileArr.forEach((file) => {
                    const type = file.type.split("/")[1];
                    const validTypes = ["jpeg", "png", "jpg", "ogg", "gif"];
                    if (!validTypes.includes(type)) {
                      valid = false;
                    }
                  });
                }
                return valid;
              }
            ),
        })}
        onSubmit={(values) => {
          // console.log('ref.current.values')
          // console.log(ref.current.values)
          //  alert(ref.current.values.name2)
          //  console.log(values)
          // alert(ref.current.values.email);
          alert(JSON.stringify(values, null, 2));
          //  alert(values);
          //  AddCategoryusers(ref.current.values.name2)
          // loginusers(ref.current.values.email,ref.current.values.password)
        }}
        // onSubmit={(values) => {
        //   alert("inside");
        //   alert(JSON.stringify(values, null, 2));
        // }}
      >
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
                <div class="spinner-border text-success" role="status">
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
                        <Field
                          name="prodname"
                          className="form-control w-100 bg-white"
                          placeholder="Product Name"
                          type="text"
                        />
                        <ErrorMessage name="prodname" />

                        <h6 className="font-weight-bold pt-4 pb-1">Price</h6>
                        <Field
                          name="price"
                          className="form-control w-100 bg-white"
                          placeholder="Price"
                          type="number"
                        />
                        <ErrorMessage name="price" />
                        <div class="row">
                          <h6 className="font-weight-bold pt-4 pb-1">
                            Status:
                          </h6>

                          <Field
                            name="status"
                            as="select"
                            className="form-control w-70 bg-white"
                            placeholder="status"
                          >
                            <option value="">Select category</option>
                            {category.map((category) => (
                              <option value={category.id}>
                                {category.catname}
                              </option>
                            ))}
                          </Field>
                        </div>
                        <ErrorMessage name="status" />
                        <div class="row">
                          <h6 className="font-weight-bold pt-4 pb-1">State:</h6>

                          <Field
                            name="state"
                            as="select"
                            className="form-control w-70 bg-white"
                            placeholder="status"
                          >
                            <option value="">Select category</option>
                            {category.map((category) => (
                              <option value={category.id}>
                                {category.catname}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="state" />
                        </div>

                        <div class="row">
                          <h6 className="font-weight-bold pt-4 pb-1">Area:</h6>

                          <Field
                            name="area"
                            as="select"
                            className="form-control w-70 bg-white"
                            placeholder="status"
                          >
                            <option value="">Select category</option>
                            {category.map((category) => (
                              <option value={category.id}>
                                {category.catname}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="area" />
                        </div>

                        <h6 className="font-weight-bold pt-4 pb-1">
                          Description:
                        </h6>

                        <MyTextArea
                          name="description"
                          rows="6"
                          placeholder="Write details about your product"
                        />
                        <ErrorMessage name="description" />
                      </div>
                      <div className="col-lg-6">
                        <div class="row">
                          <h6 className="font-weight-bold pt-4 pb-1">
                            Select Ad Category:
                          </h6>

                          <Field
                            component={SelectField}
                            name="category2"
                            className="form-control w-70 bg-white"
                            options={category}
                          />

                          <Field
                            name="category2"
                            as="select"
                            // value={values.category2}
                            className="form-control w-70 bg-white"
                            placeholder="category"
                            onChange={async (e) => {
                              const { value } = e.target;
                              //  setIsloading(true);
                              // setCategories(value);
                              handleCategoryChange(value);

                              //  setFieldValue("category", value);
                            }}
                          >
                            <option value="">Select category</option>
                            {category.map((category) => (
                              <option value={category.id}>
                                {category.catname}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="category2" />
                        </div>

                        <div class="row">
                          <h6 className="font-weight-bold pt-4 pb-1">
                            Select Sub Category:
                          </h6>

                          <Field
                            name="subcategory"
                            as="select"
                            className="form-control w-70 bg-white"
                            placeholder="status"
                          >
                            <option value="">Select category</option>
                            {subcategories.map((category) => (
                              <option value={category.id}>
                                {category.subname}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="subcategory" />
                        </div>

                        <h6 className="font-weight-bold pt-4 pb-1">
                          Upload File 1
                        </h6>

                        <FileUpload name="files" fileRef={fileRef} />
                        <ErrorMessage name="files" />

                        <h6 className="font-weight-bold pt-4 pb-1">
                          Upload File 2
                        </h6>

                        <FileUpload name="files2" fileRef={fileRef2} />
                        <ErrorMessage name="files2" />

                        <h6 className="font-weight-bold pt-4 pb-1">
                          Upload File 3
                        </h6>
                        <FileUpload name="files3" fileRef={fileRef3} />
                        <ErrorMessage name="files3" />
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
      </Formik>
    </>
  );
}
