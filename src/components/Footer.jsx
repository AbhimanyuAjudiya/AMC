function Footer(){
    return(
        <div>
                  <section className="info_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_logo">
                <a className="navbar-brand" href="/">
                  <img src="images/info-logo.png" alt="" />
                  <span>AMC</span>
                </a>
                <p>
                  dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                  veniam, quisdotempor incididunt r
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_links">
                <h5>Useful Link</h5>
                <ul>
                  <li>
                    <a href="">dolor sit amet, consectetur</a>
                  </li>
                  <li>
                    <a href="">magna aliqua. Ut enim ad</a>
                  </li>
                  <li>
                    <a href="">minim veniam,</a>
                  </li>
                  <li>
                    <a href="">quisdotempor incididunt r</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Contact Us</h5>
                <p>
                  dolor sit amet,
                  <br />
                  consectetur
                  <br />
                  magna aliqua.
                  <br />
                  quisdotempor
                  <br />
                  incididunt ut e
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="info_form ">
                <h5>Newsletter</h5>
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
                <div className="social_box">
                  <a href="">
                    <img src="images/fb.png" alt="" />
                  </a>
                  <a href="">
                    <img src="images/twitter.png" alt="" />
                  </a>
                  <a href="">
                    <img src="images/linkedin.png" alt="" />
                  </a>
                  <a href="">
                    <img src="images/instagram.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end info_section -->

  <!-- footer section --> */}
      <footer className="container-fluid footer_section">
        <p>&copy; 2024 All Rights Reserved. Design by</p>
      </footer>
      {/* <!-- footer section --> */}
        </div>
    )
}

export default Footer