import { useState } from "react";
import React, { useEffect, useRef } from "react";
import ProductDialog from "./productDialog";
import { data } from "autoprefixer";
export default function GetUserProduct({ page }) {
  const showd = () => {
    // setShowDialog(true);
    handleShow();
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category, setCategory] = useState([]);
  const [prodstate, setProdState] = useState([]);
  let prevfile1 = "";
  let prevfile2 = "";
  let prevfile3 = "";
  useEffect(() => {
    const fetchData2 = async () => {
      const res2 = await fetch("/api/category/getstate", {
        method: "GET",
        headers: {
          "content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data2 = await res2.json();

      console.log("state 2");

      console.log(data2);
      setProdState(data2);

      let NewState = [];

      NewState = data2.map((cat) => {
        return { value: cat.id, label: cat.statename };
      });

      // console.log("category data");
      // console.log(category);
      setProdState(NewState);

      // setprodstate(data2);
    };

    fetchData2();

    const fetchData = async () => {
      try {
        const res = await fetch("/api/category/getcategory2", {
          method: "GET",
          headers: {
            "content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const data = await res.json();
        console.log("category data");
        console.log(data);

        let NewCategory = [];

        NewCategory = data.map((cat) => {
          return { value: cat.id, label: cat.catname };
        });

        console.log("category data");
        console.log(category);
        setCategory(NewCategory);
        console.log("k3");
        console.log(k3);
      } catch (e) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <ProductDialog
        page={page}
        handleClose={handleClose}
        show={show}
        category={category}
        prodstate={prodstate}
        id={page.id}
        prevfile1={page.imageUrl}
        prevfile2={page.imageUrl2}
        prevfile3={page.imageUrl3}
      />
      <div className="col-lg-4 col-md-6">
        <div className="product-item bg-light">
          <div className="card">
            <div className="thumb-content">
              <a href="single.html">
                <img
                  className="card-img-top img-fluid"
                  src={page.imageUrl}
                  style={{ width: 150, height: 100 }}
                  alt="Card image cap"
                />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="single.html">{page.name}</a>
              </h4>
              <ul className="list-inline product-meta">
                <li className="list-inline-item">
                  <a href="single.html">
                    <i className="fa fa-folder-open-o"></i>
                    {page.category.catname}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="category.html">
                    <i className="fa fa-calendar"></i>
                    {page.price}
                  </a>
                </li>
              </ul>
              <p className="card-text">{page.description}</p>
              <div className="">
                <ul className="list-inline justify-content-center">
                  <li className="list-inline-item">
                    <a
                      data-toggle="tooltip"
                      onClick={showd}
                      data-placement="top"
                      title="View Details"
                      className="view "
                    >
                      View Details <i className="fa fa-eye"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit Details"
                      className="edit"
                      href="dashboard-my-ads.html"
                    >
                      Edit Details <i className="fa fa-pencil"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      className="delete"
                      href="dashboard-my-ads.html"
                    >
                      Delete <i className="fa fa-trash"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
