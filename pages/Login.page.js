import Head from "next/head";
import Image from "next/image";
import SideNav from "./Component/sidenav2";
import { useState, useContext, useRef } from "react";

import Router from "next/router";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/user";
import { useRouter } from "next/router";

import jwt from "jsonwebtoken";
import { Toast } from "primereact/toast";
import { Messages } from "primereact/messages";
import { ProgressSpinner } from "primereact/progressspinner";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { fafacebook } from "@fortawesome/free-solid-svg-icons";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { faBluetooth } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [cookie, setCookie] = useCookies(["user"]);
  const router = useRouter();
  const toast = useRef(null);
  const messages = useRef(null);
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [value, setValue] = useState();

  const storeuser = {};
  const { nextpage } = router.query;

  console.log("store val");

  console.log(user);

  const mystyle = {
    width: "30px",
    marginRight: "40px",

    color: "#0D6EFD",
  };

  const mystyle2 = {
    display: "flex",
    justifyContent: "center",
  };

  const mystyle3 = {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
  };
  //  Router.push('/')

  const Login = async () => {
    // const data2 = "test"
    setShowSpinner(true);
    const body = JSON.stringify({
      email: ref.current.values.email,
      password: ref.current.values.password,
    });

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: body,
    });

    setShowSpinner(false);

    const data = await res.json();

    console.log("token");
    console.log(data.message);

    if (data.message != "Invalid Login Details") {
      setCookie("user", JSON.stringify(data.message), {
        path: "/",
        // maxAge: 3600, // Expires after 1hr
        maxAge: 43200, // Expires after 12hr
        sameSite: true,
      });

      const secret = "#ozo333666";

      var decoded = jwt.verify(data.message, secret);

      // const data = parseCookies(data)

      console.log("parse token =");
      console.log(decoded);

      storeuser.email = decoded.email;
      storeuser.firstname = decoded.firstname;
      storeuser.email = decoded.email;
      storeuser.surname = decoded.surname;
      storeuser.phone = decoded.phone;
      let kk = {
        email: decoded.email,
        firstname: `${decoded.firstname}`,
        surname: `${decoded.surname}`,
        phone: `${decoded.phone}`,
        userid: `${decoded.userid}`,
        usertype: `${decoded.usertype}`,
      };

      //dispatch(login(decoded.email ))

      dispatch(login(kk));

      console.log("store val2");

      console.log(kk);

      if (nextpage) {
        router.push(`/${nextpage}`);
      } else {
        router.push("/");
      }
    } else {
      toast.current.show({
        severity: "error",
        summary: "Invalid Username/Password",
        detail: "",
      });

      messages.current.show({
        sticky: true,
        severity: "error",
        summary: "Invalid username /Password",
        detail: "",
      });
    }
    //   alert(data.message)

    //  console.log('data')
    // console.log(data)

    // Invalid Login Details
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()

      // Format Validation
      .email("Invalid email address format")

      // Required Field Validation
      .required("Email is required"),
    password: Yup.string()

      //Minimum Character Validation

      .required("Password is required"),
  });
  return (
    <>
      <div>
        <div className="container" style={{ backgroundColor: "white" }}>
          <div className="row flex-nowrap">
            <Formik
              initialValues={{ name: "" }}
              innerRef={ref}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                // console.log('ref.current.values')
                // console.log(ref.current.values)
                //  alert(ref.current.values.name2)
                //  console.log(values)
                // alert(ref.current.values.email);
                Login();
                //  AddCategoryusers(ref.current.values.name2)
                // loginusers(ref.current.values.email,ref.current.values.password)
              }}
            >
              {(props) => (
                <div className="container" style={{ margin: 20 }}>
                  <section className="vh-100">
                    <section className="login py-5 border-top-1">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-5 col-md-8 align-item-center">
                            <div className="border">
                              <h3 className="bg-gray p-4">Login Now</h3>
                              <Form>
                                <fieldset className="p-4">
                                  <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter a valid email address"
                                    className="form-control form-control-lg"
                                    autoComplete="off"
                                  />

                                  <label className="form-label">
                                    Email address
                                  </label>

                                  <ErrorMessage name="email">
                                    {(msg) => (
                                      <div style={{ color: "red" }}>{msg}</div>
                                    )}
                                  </ErrorMessage>
                                  <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    className="form-control form-control-lg"
                                    autoComplete="off"
                                  />

                                  <label className="form-label">Password</label>

                                  <ErrorMessage name="password">
                                    {(msg) => (
                                      <div style={{ color: "red" }}>{msg}</div>
                                    )}
                                  </ErrorMessage>
                                  <div className="loggedin-forgot">
                                    <input
                                      type="checkbox"
                                      id="keep-me-logged-in"
                                    />
                                    <label
                                      htmlFor="keep-me-logged-in"
                                      className="pt-3 pb-2"
                                    >
                                      Keep me logged in
                                    </label>
                                  </div>
                                  <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold mt-3"
                                  >
                                    Log in
                                  </button>
                                  <a
                                    className="mt-3 d-block text-primary"
                                    href="#!"
                                  >
                                    Forget Password?
                                  </a>
                                  <Link href="/register">
                                    <a className="link-danger">Register</a>
                                  </Link>

                                  {ShowSpinner && <ProgressSpinner />}
                                </fieldset>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </section>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
