export default function TestProduct() {
  return (
    <>
      <section className="page-search">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="advance-search nice-select-white">
                <form>
                  <div className="form-row align-items-center">
                    <div className="form-group col-xl-4 col-lg-3 col-md-6">
                      <input
                        type="text"
                        className="form-control my-2 my-lg-0"
                        id="inputtext4"
                        placeholder="What are you looking for"
                      />
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                      <select className="w-100 form-control my-2 my-lg-0">
                        <option>Category</option>
                        <option value="1">Top rated</option>
                        <option value="2">Lowest Price</option>
                        <option value="4">Highest Price</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                      <input
                        type="text"
                        className="form-control my-2 my-lg-0"
                        id="inputLocation4"
                        placeholder="Location"
                      />
                    </div>
                    <div className="form-group col-xl-2 col-lg-3 col-md-6">
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
      </section>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-result bg-gray">
                <h2>Results For "Electronics"</h2>
                <p>123 Results on 12 December, 2017</p>
              </div>
            </div>
          </div>
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

                <div className="widget category-list">
                  <h4 className="widget-header">Nearby</h4>
                  <ul className="category-list">
                    <li>
                      <a href="category.html">
                        New York <span>93</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        New Jersy <span>233</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Florida <span>183</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        California <span>120</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Texas <span>40</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Alaska <span>81</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget filter">
                  <h4 className="widget-header">Show Produts</h4>
                  <select>
                    <option>Popularity</option>
                    <option value="1">Top rated</option>
                    <option value="2">Lowest Price</option>
                    <option value="4">Highest Price</option>
                  </select>
                </div>

                <div className="widget price-range w-100">
                  <h4 className="widget-header">Price Range</h4>
                  <div className="block">
                    <input
                      className="range-track w-100"
                      type="text"
                      data-slider-min="0"
                      data-slider-max="5000"
                      data-slider-step="5"
                      data-slider-value="[0,5000]"
                    />
                    <div className="d-flex justify-content-between mt-2">
                      <span className="value">$10 - $5000</span>
                    </div>
                  </div>
                </div>

                <div className="widget product-shorting">
                  <h4 className="widget-header">By Condition</h4>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      Brand New
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      Almost New
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      Gently New
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      Havely New
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="category-search-filter">
                <div className="row">
                  <div className="col-md-6 text-center text-md-left">
                    <strong>Short</strong>
                    <select>
                      <option>Most Recent</option>
                      <option value="1">Most Popular</option>
                      <option value="2">Lowest Price</option>
                      <option value="4">Highest Price</option>
                    </select>
                  </div>
                  <div className="col-md-6 text-center text-md-right mt-2 mt-md-0">
                    <div className="view">
                      <strong>Views</strong>
                      <ul className="list-inline view-switcher">
                        <li className="list-inline-item">
                          <a href="category.html">
                            <i className="fa fa-th-large"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="category.html" className="text-info">
                            <i className="fa fa-reorder"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ad-listing-list mt-20">
                <div className="row p-lg-3 p-sm-5 p-4">
                  <div className="col-lg-4 align-self-center">
                    <a href="single.html">
                      <img
                        src="/images/products/products-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 col-md-10">
                        <div className="ad-listing-content">
                          <div>
                            <a href="single.html" className="font-weight-bold">
                              11inch Macbook Air
                            </a>
                          </div>
                          <ul className="list-inline mt-2 mb-3">
                            <li className="list-inline-item">
                              <a href="category.html">
                                {" "}
                                <i className="fa fa-folder-open-o"></i>{" "}
                                Electronics
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="category.htm">
                                <i className="fa fa-calendar"></i>26th December
                              </a>
                            </li>
                          </ul>
                          <p className="pr-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Explicabo, aliquam!
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <div className="product-ratings float-lg-right pb-3">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ad-listing-list mt-20">
                <div className="row p-lg-3 p-sm-5 p-4">
                  <div className="col-lg-4 align-self-center">
                    <a href="single.html">
                      <img
                        src="/images/products/products-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 col-md-10">
                        <div className="ad-listing-content">
                          <div>
                            <a href="single.html" className="font-weight-bold">
                              Study Table Combo
                            </a>
                          </div>
                          <ul className="list-inline mt-2 mb-3">
                            <li className="list-inline-item">
                              <a href="category.html">
                                {" "}
                                <i className="fa fa-folder-open-o"></i>{" "}
                                Electronics
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="category.htm">
                                <i className="fa fa-calendar"></i>26th December
                              </a>
                            </li>
                          </ul>
                          <p className="pr-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Explicabo, aliquam!
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <div className="product-ratings float-lg-right pb-3">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ad-listing-list mt-20">
                <div className="row p-lg-3 p-sm-5 p-4">
                  <div className="col-lg-4 align-self-center">
                    <a href="single.html">
                      <img
                        src="/images/products/products-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 col-md-10">
                        <div className="ad-listing-content">
                          <div>
                            <a href="single.html" className="font-weight-bold">
                              11inch Macbook Air
                            </a>
                          </div>
                          <ul className="list-inline mt-2 mb-3">
                            <li className="list-inline-item">
                              <a href="category.html">
                                {" "}
                                <i className="fa fa-folder-open-o"></i>{" "}
                                Electronics
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="category.htm">
                                <i className="fa fa-calendar"></i>26th December
                              </a>
                            </li>
                          </ul>
                          <p className="pr-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Explicabo, aliquam!
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <div className="product-ratings float-lg-right pb-3">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ad-listing-list mt-20">
                <div className="row p-lg-3 p-sm-5 p-4">
                  <div className="col-lg-4 align-self-center">
                    <a href="single.html">
                      <img
                        src="/images/products/products-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 col-md-10">
                        <div className="ad-listing-content">
                          <div>
                            <a href="single.html" className="font-weight-bold">
                              Study Table Combo
                            </a>
                          </div>
                          <ul className="list-inline mt-2 mb-3">
                            <li className="list-inline-item">
                              <a href="category.html">
                                {" "}
                                <i className="fa fa-folder-open-o"></i>{" "}
                                Electronics
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="category.htm">
                                <i className="fa fa-calendar"></i>26th December
                              </a>
                            </li>
                          </ul>
                          <p className="pr-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Explicabo, aliquam!
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <div className="product-ratings float-lg-right pb-3">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ad-listing-list mt-20">
                <div className="row p-lg-3 p-sm-5 p-4">
                  <div className="col-lg-4 align-self-center">
                    <a href="single.html">
                      <img
                        src="/images/products/products-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 col-md-10">
                        <div className="ad-listing-content">
                          <div>
                            <a href="single.html" className="font-weight-bold">
                              11inch Macbook Air
                            </a>
                          </div>
                          <ul className="list-inline mt-2 mb-3">
                            <li className="list-inline-item">
                              <a href="category.html">
                                {" "}
                                <i className="fa fa-folder-open-o"></i>{" "}
                                Electronics
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="category.htm">
                                <i className="fa fa-calendar"></i>26th December
                              </a>
                            </li>
                          </ul>
                          <p className="pr-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Explicabo, aliquam!
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <div className="product-ratings float-lg-right pb-3">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination justify-content-center py-4">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="ad-list-view.html"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="ad-list-view.html">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="ad-list-view.html">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="ad-list-view.html">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="ad-list-view.html"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
