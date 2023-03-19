import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/user";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const dispatch = useDispatch();
  const [productname, setproductname] = useState();
  const [groupcategory, setGroupcategory] = useState();
  const [category, setCategory] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [products, setProducts] = useState([]);
  const [Electronicproducts, setElectronicproducts] = useState([]);
  const [Restaurantsproducts, setRestaurantsproducts] = useState([]);
  const [RealEstateproducts, setRealEstateproducts] = useState([]);
  const [Shoppingsproducts, setShoppingsproducts] = useState([]);
  const [Jobsproducts, setJobsproducts] = useState([]);
  const [Vehiclesproducts, setVehiclesproducts] = useState([]);
  const [Servicesproducts, setServicesproducts] = useState([]);

  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [loadings, setLoadings] = useState(false);
  const { ref, inView } = useInView();
  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];
  const router = useRouter();

  //let  user=''

  // const count = useSelector((store) => store.user.user.user);
  console.log("user2");
  const [value, setValue] = useState();
  const { user } = useSelector((state) => state.user);

  let k2 = typeof window !== "undefined" ? localStorage.getItem("user") : "";

  const {
    isLoading,
    isError,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "posts",
    async ({ pageParam = "" }) => {
      await new Promise((res) => setTimeout(res, 1000));
      const res = await axios.get(
        "./api/product/getProduct3?cursor=" + pageParam
      );

      console.log("res data");
      console.log(res.data);

      // const res = await fetch("/api/post?cursor=" + pageParam);

      return res.data;
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextId ?? false,
    }
  );

  const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const activateDetails = (dd) => {
    // alert(dd);
    // alert("Button click");
    router.push({
      pathname: "/Detail/[pid]",
      query: { pid: dd },
    });
  };

  const formatCurrency = (value) => {
    console.log(" currency value");
    console.log(value);

    var myNumeral = numeral(value);

    return myNumeral.format("0,0.00");

    //return new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'NGR', minimumFractionDigits: 2}).format(value);

    //return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const renderListItem = (data) => {
    return (
      <div className="col-6">
        <div className={styles.productlistitem}>
          <img
            src={`${data.imageUrl}`}
            width="300"
            height="200"
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            alt={data.name}
          />
          <div className={styles.productlistdetail}>
            <div className={styles.productname}>{data.name.toUpperCase()}</div>
            <div className={styles.productdescription}>
              {data.description.toUpperCase()}
            </div>

            <i
              className={[styles.pi, styles.pitag, styles.productcategoryicon]}
            ></i>
            <span className={styles.productcategory}>
              {data.category.catname.toUpperCase()}
            </span>
          </div>
          <div className={styles.productlistaction}>
            <span
              className={styles.productprice}
              style={{ marginRight: "20px" }}
            >
              {formatCurrency(data.price)}
            </span>
            <Button
              onClick={activateDetails}
              icon="pi pi-shopping-cart"
              label="View Detail"
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const renderGridItem = (data) => {
    return (
      <div className="col-6 md:col-4">
        <div className={[styles.producgriditem, styles.card]}>
          <div className={styles.productgriditemtop}>
            <div>
              <i
                className={[
                  styles.pi,
                  styles.pitag,
                  styles.productcategoryicon,
                ]}
              ></i>
              <span className={styles.productcategory}>
                {data.category.catname.toUpperCase()}
              </span>
            </div>
          </div>
          <div className={styles.productgriditemcontent}>
            <img
              src={`${data.imageUrl}`}
              width="300"
              height="200"
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={data.name}
            />
            <div className={styles.productname}>{data.name.toUpperCase()}</div>
            <div className={styles.productdescription}>
              {data.description.toUpperCase()}
            </div>
          </div>
          <div className={styles.productgriditembottom}>
            <span
              className={styles.productprice}
              style={{ marginRight: "20px" }}
            >
              {formatCurrency(data.price)}
            </span>
            <Button
              onClick={() => activateDetails(data.id)}
              icon="pi pi-shopping-cart"
              label="View Detail"
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product, layout) => {
    if (!product) {
      return;
    }

    if (layout === "list") return renderListItem(product);
    else if (layout === "grid") return renderGridItem(product);
  };

  const validateprod = async () => {
    const body2 = JSON.stringify({
      category: groupcategory,
      search: productname,
    });
    try {
      const res = await fetch("/api/product/getProduct3", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Accept: "application/json",
        },
        body: body2,
      });

      const data = await res.json();

      console.log("prod data 3");
      setProducts(data);
      console.log(data);
      //  setProducts(data);
      initFilters1();

      if (data.message == "Not authenticated") {
        //   alert(data.message)
        router.push("/Logout");
        return;
      }
    } catch (e) {}
  };

  const renderHeader = () => {
    return (
      <div className="grid grid-nogutter">
        <div className="col-6" style={{ textAlign: "left" }}>
          <Dropdown
            options={sortOptions}
            value={sortKey}
            optionLabel="label"
            placeholder="Sort By Price"
            onChange={onSortChange}
          />
        </div>
        <div className="col-6" style={{ textAlign: "right" }}>
          <DataViewLayoutOptions
            layout={layout}
            onChange={(e) => setLayout(e.value)}
          />
        </div>
      </div>
    );
  };

  const header = renderHeader();

  useEffect(() => {
    setValue(user);
    //setLoadings(true);

    const fetchData3 = async () => {
      //  const body2 = JSON.stringify({
      //    category: groupcategory,
      //    search: productname,
      //  });
      try {
        // const res = await fetch("/api/product/getProduct3", {
        const res = await fetch("/api/product/getProductLatest", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
            Accept: "application/json",
          },
          // body: body2,
        });
        setLoadings(false);
        const data = await res.json();

        console.log("prod data 3");

        let elecprod = data.filter((prod) => {
          console.log(prod.catname);
          return prod.catname === "Electronics";
        });
        setElectronicproducts(elecprod);
        console.log(elecprod);
        //  setProducts(data);
        //  initFilters1();
      } catch (e) {}
    };

    // fetchData();
    fetchData3();
    // }
  }, []);

  //k2 = user['user']

  //alert(k2)

  console.log(k2);
  if (k2) {
    const obj = JSON.parse(k2);
    console.log("user2");
    console.log(obj.user.email);
  }
  const user2 = false;

  return (
    <>
      <section className="hero-area bg-1 text-center overly">
        {/* Container Start */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Header Contetnt */}
              <div className="content-block">
                <h1>Buy &amp; Sell Near You </h1>
                <p>
                  Join the millions who buy and sell from each other <br />{" "}
                  everyday in local communities around the world
                </p>
              </div>
              {/* Advance Search */}
              <div className="advance-search">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 align-content-center">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-xl-4 col-lg-3 col-md-6">
                            <input
                              type="text"
                              className="form-control my-2 my-lg-1"
                              id="inputtext4"
                              placeholder="What are you looking for"
                            />
                          </div>
                          <div className="form-group col-lg-3 col-md-6">
                            <select className="w-100 form-control mt-lg-1 mt-md-2">
                              <option>Category</option>
                              <option value={1}>Top rated</option>
                              <option value={2}>Lowest Price</option>
                              <option value={4}>Highest Price</option>
                            </select>
                          </div>

                          <div className="form-group col-xl-2 col-lg-3 col-md-6 align-self-center">
                            <button
                              type="submit"
                              className="btn btn-primary active w-100"
                            >
                              Search Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container End */}
      </section>

      {/*==========================================
=            All Category Section            =
===========================================*/}
      <section className=" section">
        {/* Container Start */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section title */}
              <div className="section-title">
                <h2>All Categories</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis, provident!
                </p>
              </div>
              <div className="row">
                {/* Category list */}
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                  <div className="category-block">
                    <div className="header">
                      <i className="fa fa-laptop icon-bg-1" />
                      <h4>Electronics</h4>
                    </div>
                    <ul className="category-list">
                      {Electronicproducts.map((page, i) => (
                        <li key={i}>
                          <Link
                            href={`/detail3/${page.subcategoryid} ?subcategory=${page.subname}`}
                            className="nav-link"
                          >
                            <a className="nav-link">
                              {" "}
                              {page.subname.toUpperCase()}{" "}
                              <span>{page.count}</span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* /Category List */}
                {/* Category list */}
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                  <div className="category-block">
                    <div className="header">
                      <i className="fa fa-apple icon-bg-2" />
                      <h4>Restaurants</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <a href="category.html">
                          Cafe <span>393</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Fast food <span>23</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Restaurants <span>13</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Food Track<span>43</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* /Category List */}
                {/* Category list */}
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                  <div className="category-block">
                    <div className="header">
                      <i className="fa fa-home icon-bg-3" />
                      <h4>Real Estate</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <a href="category.html">
                          Farms <span>93</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Gym <span>23</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Hospitals <span>83</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Parolurs <span>33</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* /Category List */}
                {/* Category list */}
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                  <div className="category-block">
                    <div className="header">
                      <i className="fa fa-shopping-basket icon-bg-4" />
                      <h4>Shoppings</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <a href="category.html">
                          Mens Wears <span>53</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Accessories <span>212</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Kids Wears <span>133</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          It &amp; Software <span>143</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* /Category List */}
                {/* Category list */}
                <br />
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                  <div className="category-block">
                    <div className="header">
                      <i className="fa fa-briefcase icon-bg-5" />
                      <h4>Jobs</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <a href="category.html">
                          It Jobs <span>93</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Cleaning &amp; Washing <span>233</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Management <span>183</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Voluntary Works <span>343</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* /Category List */}
                {/* Category list */}
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                  <div className="category-block">
                    <div className="header">
                      <i className="fa fa-car icon-bg-6" />
                      <h4>Vehicles</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <a href="category.html">
                          Bus <span>193</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Cars <span>23</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Motobike <span>33</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Rent a car <span>73</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* /Category List */}
                {/* Category list */}
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                  <div className="category-block">
                    <div className="header">
                      <i className="fa fa-paw icon-bg-7" />
                      <h4>Pets</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <a href="category.html">
                          Cats <span>65</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Dogs <span>23</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Birds <span>113</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Others <span>43</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* /Category List */}
                {/* Category list */}
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                  <div className="category-block">
                    <div className="header">
                      <i className="fa fa-laptop icon-bg-8" />
                      <h4>Services</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <a href="category.html">
                          Cleaning <span>93</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Car Washing <span>233</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Clothing <span>183</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Business <span>343</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* /Category List */}
              </div>
            </div>
          </div>
        </div>
        {/* Container End */}
      </section>
    </>
  );
}
