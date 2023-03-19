import Head from "next/head";
import Image from "next/image";
import SideNav from "./Component/sidenav2";
import { useState, useContext, useRef } from "react";

import Mainnav from "./Component/mainnav";
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
import React, { useEffect } from "react";
import { useQuery } from "react-query";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { faBluetooth } from "@fortawesome/free-brands-svg-icons";
export default function Login() {
  const [product, setProduct] = useState([]);
  // const { isLoading, isFetching, error, data, status } = useQuery();

  const fetchData3 = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      // setLoadings(false);
      const data = await res.json();

      console.log("prod data 3");
      setProduct(data);
      console.log(data);
      //  setProducts(data);
    } catch (e) {}
  };
  const { data, error, isError, isLoading } = useQuery("users", fetchData3);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <ul>
        {product.map((d) => (
          <li key={d.id}>{d.description}</li>
        ))}
      </ul>
    </>
  );
}
