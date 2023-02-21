import React from "react";

const Footer = () => {
  return (
    <section
      class=""
      style={{
        backgroundColor: "#C8E6C9",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <div class="lc-block mb-3">
              <a
                class="navbar-brand fw-bold"
                href="https://library.livecanvas.com/sections/"
              >
                Redux stroe
              </a>
            </div>
            <div class="lc-block">
              <div editable="rich">
                <p class="text-muted">© 2022 Acme, Inc</p>
              </div>
            </div>
          </div>
          <div class="col offset-md-2 mb-3">
            <div class="lc-block mb-4">
              <div editable="rich">
                <h4>Get Started</h4>
              </div>
            </div>

            <div class="lc-block small">
              {" "}
              <style></style>
              <div editable="rich" class="footer-links-list">
                <ul>
                  <li>
                    <a href="#">One Item</a>{" "}
                  </li>
                  <li>
                    <a href="#">Second Item</a>
                  </li>
                  <li>
                    <a href="#">Third Item</a>{" "}
                  </li>
                  <li>
                    <a href="#">Fourth Item</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="lc-block mb-4">
              <div editable="rich">
                <h4>About us</h4>
              </div>
            </div>

            <div class="lc-block small">
              <div editable="rich" class="footer-links-list">
                <ul>
                  <li>
                    <a href="#">Story</a>{" "}
                  </li>
                  <li>
                    <a href="#">Work with us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>{" "}
                  </li>
                  <li>
                    <a href="#">News</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="lc-block mb-4">
              <div editable="rich">
                <h4>Downloads</h4>
              </div>
            </div>

            <div class="lc-block small">
              <div editable="rich" class="footer-links-list">
                <ul>
                  <li>
                    <a href="#">First Element</a>{" "}
                  </li>
                  <li>
                    <a href="#">Second Element</a>{" "}
                  </li>
                  <li>
                    <a href="#">Third Element</a>{" "}
                  </li>
                  <li>
                    <a href="#">Fourth Element</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
