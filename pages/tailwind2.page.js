export default function Home() {
  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse  flex-grow items-center"
            id="navbarSupportedContent1"
          >
            <a
              className="text-xl flex-1 text-white pr-2 font-semibold"
              href="#"
            >
              Navbar
            </a>

            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" container">
        <section style={{ backgroundColor: "#eee" }}>
          <div className="text-center container py-5">
            <h4 className="mt-4 mb-5">
              <strong>Bestsellers</strong>
            </h4>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">New</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">$61.99</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-success ms-2">Eco</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">$61.99</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-danger ms-2">-10%</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">
                      <s>$61.99</s>
                      <strong className="ms-2 text-danger">$50.99</strong>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-success ms-2">Eco</span>
                            <span className="badge bg-danger ms-2">-10%</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">
                      <s>$61.99</s>
                      <strong className="ms-2 text-danger">$50.99</strong>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100"></div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">$61.99</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">New</span>
                            <span className="badge bg-success ms-2">Eco</span>
                            <span className="badge bg-danger ms-2">-10%</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">
                      <s>$61.99</s>
                      <strong className="ms-2 text-danger">$50.99</strong>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
