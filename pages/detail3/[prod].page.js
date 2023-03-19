import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect } from "react";
import CustomButton from "../Component/customButton";
import ImageDialog from "../Component/imageDialog";
import CustomButton2 from "../Component/customButton2";
import Image from "next/image";

import { useState } from "react";

export default function DetailProduct() {
  const router = useRouter();
  const { prod } = router.query;
  const [prod2, setProd2] = useState();
  const [url1, setUrl1] = useState();
  const [url2, setUrl2] = useState();
  const [url3, setUrl3] = useState();

  const [isloading, setIsloading] = useState(false);
  const [prod3, setProd3] = useState([]);
  const [show, setShow] = useState(false);
  console.log("prod");
  // console.log(prod);
  let pquery = router.query;

  const showd = (url1, url2, url3) => {
    // setShowDialog(true);
    // setUrl1(url1);
    // setUrl2(url2);
    // setUrl3(url3);
    // handleShow();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //console.log(pquery.subcategory);

  useEffect(() => {
    // alert(new Intl.NumberFormat().format(100000));
    // console.log("user")
    setProd2[prod];

    // setvalue(user);

    const body2 = JSON.stringify({ subcategory: prod });

    const fetchData = async () => {
      try {
        setIsloading(true);
        const res = await fetch("/api/product/getProduct5", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
            Accept: "application/json",
          },
          body: body2,
        });

        const data = await res.json();

        console.log("prod  return data");
        console.log(data);
        setProd3(data);
        setIsloading(false);
        //  setProducts(data);
      } catch (e) {
        setIsloading(false);
      }
    };

    fetchData();
  }, [prod2]);
  return (
    <>
      <ImageDialog
        handleClose={handleClose}
        show={show}
        url1={url1}
        url2={url2}
        url3={url3}
      />
      {isloading && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-result bg-gray">
                <h2>Results For {pquery.subcategory}</h2>
                <p>123 Results on 12 December, 2017</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="category-sidebar">
                <div className="widget category-list">
                  <h4 className="widget-header"></h4>
                  <ul className="category-list">
                    <li>
                      <Link href="/">
                        <a href="category.html">
                          Home <span></span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-8">
              {prod3.map((page, i) => (
                <div className="ad-listing-list mt-20" key={i}>
                  <div className="row ">
                    <div className="col-lg-4 align-self-center">
                      <a href="single.html">
                        <img src={page.imageUrl} alt="" width={200} />
                      </a>
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-lg-6 col-md-10">
                          <div className="ad-listing-content">
                            <div>
                              <a
                                href="single.html"
                                className="font-weight-bold"
                              >
                                {page.name}
                              </a>
                            </div>
                            <ul className="list-inline mt-2 mb-3">
                              <li className="list-inline-item">
                                <a href="category.html">
                                  {" "}
                                  <i className="fa fa-folder-open-o"></i>{" "}
                                  {page.category.catname}
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="category.htm">
                                  <i className="fa fa-calendar"></i>
                                  {new Intl.NumberFormat().format(page.price)}
                                </a>
                              </li>

                              <li className="list-inline-item">
                                <a href="#">
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-around",
                                      width: 100,
                                    }}
                                  >
                                    <CustomButton
                                      description={"Show Seller  Phone Number"}
                                      description2={
                                        page.users.profile.phonenumber
                                      }
                                    />
                                  </div>
                                </a>
                              </li>
                              <br />
                              <br />
                              <li className="list-inline-item"></li>

                              <li className="list-inline-item">
                                <a
                                  data-toggle="tooltip"
                                  onClick={() => {
                                    setUrl1(page.imageUrl);
                                    setUrl2(page.imageUrl2);
                                    setUrl3(page.imageUrl3);
                                    handleShow();
                                  }}
                                  data-placement="top"
                                  title="View Details"
                                  className="view "
                                >
                                  View Image <i className="fa fa-eye"></i>
                                </a>
                              </li>
                            </ul>
                            <p className="pr-5">{page.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
