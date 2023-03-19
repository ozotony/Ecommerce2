import { useState, useContext, useRef } from "react";

import Router from "next/router";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/user";
import Link from "next/link";
import GetUserProduct from "./Component/getUserProduct";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function GetProduct2() {
  const ref = useRef(null);
  const modalRef = useRef();
  const router = useRouter();
  const [options, setValue] = useState([]);
  const [Message, setMessage] = useState("");
  const [ShowDialog, setDialog] = useState(false);
  const [userid, setuserid] = useState();
  const [products, setProducts] = useState([]);
  const [productdetail, setproductdetail] = useState([]);
  const [filters1, setFilters1] = useState(null);
  const [displayBasic, setdisplayBasic] = useState(false);
  const [showDailaog, setShowDialog] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [value, setvalue] = useState();
  const [loadings, setLoadings] = useState(false);

  const hided = () => {
    let myModal = document.getElementById("exampleModal");
    var modal = bootstrap.Modal.getInstance(myModal);
    alert(modal);
    //  const modalEle = modalRef.current;
    // const modal = new mdb.Modal(modalEle);
    // modal.hide();
    //   const bsModal = bootstrap.Modal.getInstance(modalEle);
    //  bsModal.hide();
  };

  useEffect(() => {
    // console.log("user")
    let k2 = typeof window !== "undefined" ? localStorage.getItem("user") : "";
    setvalue(user);
    const obj = JSON.parse(k2);

    if (k2) {
      console.log(obj.user.userid);
      setuserid(obj.user.userid);
    }

    const body2 = JSON.stringify({ userid: obj.user.userid });

    const fetchData = async () => {
      setLoadings(true);
      try {
        const res = await fetch("/api/product/getProduct", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
            Accept: "application/json",
          },
          body: body2,
        });

        const data = await res.json();

        console.log("returned  data");
        console.log(data);
        setProducts(data);
        //  initFilters1();
        setLoadings(false);

        if (data.message == "Not authenticated") {
          //   alert(data.message)
          router.push("/Logout");
          return;
        }
      } catch (e) {}
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="category-sidebar">
                <div className="widget category-list">
                  <h4 className="widget-header">All Category</h4>
                  <ul className="category-list">
                    <li>
                      <a href="category.html">
                        Laptops <span>93</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Iphone <span>233</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Microsoft <span>183</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Monitors <span>343</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="product-grid-list">
                <div className="row mt-30">
                  {products &&
                    products.map((page, i) => (
                      <>
                        <GetUserProduct page={page} />
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
