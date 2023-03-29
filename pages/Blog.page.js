export default function About() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h3>Blog Page</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="blog section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <article>
                <div className="image">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-1.jpg"
                    alt="article-01"
                  />
                </div>

                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li className="list-inline-item">Nov 22,2016</li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>

                <a href="single-blog.html" className="btn btn-transparent">
                  Read More
                </a>
              </article>

              <article>
                <div className="post-slider">
                  <div className="item">
                    <img src="/images/blog/post-2.jpg" alt="Slider-Img-01" />
                  </div>
                  <div className="item">
                    <img src="/images/blog/post-5.jpg" alt="Slider-Img-02" />
                  </div>
                  <div className="item">
                    <img src="i/mages/blog/post-3.jpg" alt="Slider-Img-03" />
                  </div>
                </div>
                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li className="list-inline-item">Nov 22,2016</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>
                <a href="single-blog.html" className="btn btn-transparent">
                  Read More
                </a>
              </article>

              <article>
                <div className="video overly">
                  <img src="/images/blog/post-3.jpg" alt="video-thumbnail" />
                  <div
                    className="video-button video-box"
                    data-video-url="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"
                  >
                    <span>
                      <img src="/images/blog/video-icon.png" alt="video-icon" />
                    </span>
                  </div>
                </div>
                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li className="list-inline-item">Nov 22,2016</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>
                <a href="single-blog.html" className="btn btn-transparent">
                  Read More
                </a>
              </article>

              <article>
                <div className="image">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-4.jpg"
                    alt="article-01"
                  />
                </div>

                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li className="list-inline-item">Nov 22,2016</li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>

                <a href="single-blog.html" className="btn btn-transparent">
                  Read More
                </a>
              </article>

              <article>
                <div className="image">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-5.jpg"
                    alt="article-01"
                  />
                </div>

                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li className="list-inline-item">Nov 22,2016</li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>

                <a href="single-blog.html" className="btn btn-transparent">
                  Read More
                </a>
              </article>

              <article>
                <h3>Donec id dolor in erat imperdiet.</h3>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    by <a href="user-profile.html">Admin</a>
                  </li>
                  <li className="list-inline-item">Nov 22,2016</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores iusto tempore voluptatum blanditiis impedit alias
                  magni ullam facilis perspiciatis magnam!
                </p>
                <a href="single-blog.html" className="btn btn-transparent">
                  Read More
                </a>
              </article>

              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget search p-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="expire"
                      placeholder="Type &amp; hit enter to search"
                    />
                    <span className="input-group-addon">
                      <i className="fa fa-search px-3"></i>
                    </span>
                  </div>
                </div>

                <div className="widget category">
                  <h5 className="widget-header">Categories</h5>
                  <ul className="category-list">
                    <li>
                      <a href="category.html">
                        Appearel <span className="float-right">(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Accesories <span className="float-right">(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Business<span className="float-right">(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Entertaiment<span className="float-right">(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        Education<span className="float-right">(9)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget archive">
                  <h5 className="widget-header">Archives</h5>
                  <ul className="archive-list">
                    <li>
                      <a href="ad-list-view.html">January 2017</a>
                    </li>
                    <li>
                      <a href="ad-list-view.html">February 2017</a>
                    </li>
                    <li>
                      <a href="ad-list-view.html">March 2017</a>
                    </li>
                    <li>
                      <a href="ad-list-view.html">April 2017</a>
                    </li>
                    <li>
                      <a href="ad-list-view.html">May 2017</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
