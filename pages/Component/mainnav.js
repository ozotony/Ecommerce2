import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/Mainnav.module.css";

import { useDispatch, useSelector } from "react-redux";

import React, { useState, useEffect } from "react";

export default function Mainnav(prop) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#052962", color: "white" }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ color: "white" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <span className=" navbar-text me-auto mb-2 mb-lg-0">
                <a className="navbar-brand" href="#">
                  BUY AND SELL ANYTHING
                </a>
              </span>

              <span className="navbar-text">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <Link href="/">
                      <a
                        className={
                          router.pathname == "/"
                            ? `${styles.active}  w-100`
                            : `${styles.inactive}  w-100`
                        }
                      >
                        HOME
                      </a>
                    </Link>
                  </li>

                  {prop.value && (
                    <li className="nav-item space2">
                      <Link href="/AddProduct">
                        <a
                          className={
                            router.pathname == "/AddProduct"
                              ? `${styles.active}  w-100`
                              : `${styles.inactive}  w-100`
                          }
                        >
                          POST A PRODUCT
                        </a>
                      </Link>
                    </li>
                  )}

                  {prop.value && (
                    <li className="nav-item space2">
                      <Link href="/GetProduct">
                        <a
                          className={
                            router.pathname == "/GetProduct"
                              ? `${styles.active}  w-100`
                              : `${styles.inactive}  w-100`
                          }
                        >
                          VIEW PRODUCT
                        </a>
                      </Link>
                    </li>
                  )}

                  {!prop.value && (
                    <li className="nav-item space2">
                      <Link href="/Login">
                        <a
                          className={
                            router.pathname == "/Login"
                              ? `${styles.active}  w-100`
                              : `${styles.inactive}  w-100`
                          }
                        >
                          LOGIN
                        </a>
                      </Link>
                    </li>
                  )}

                  {prop.value && (
                    <li className="nav-item">
                      <Link href="/Logout">
                        <a
                          className={
                            router.pathname == "/Logout"
                              ? `${styles.active}  w-100`
                              : `${styles.inactive}  w-100`
                          }
                        >
                          LOGOUT
                        </a>
                      </Link>
                    </li>
                  )}
                </ul>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
