function About() {
  return (
    <div className="sub_page">
      {/* <!-- about section --> */}

      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2><span>About</span> Factory</h2>
          </div>
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img_container">
                <div className="img-box">
                  <img src="images/about-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="detail-box">
                <h3>
                  Metal
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About