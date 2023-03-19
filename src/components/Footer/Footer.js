import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="footer__itens_pt1">
        <div>
            <img
              alt="logo"
              className="logo__footer"
              src={require("../images/Footer-Logo.png")}
            />
            <p className="info">
              Est magna non ut consectetur veniam adipisicing culpa velit id elit.
              In ullamco <br /> nulla exercitation sint dolore laboris ut in adipisicing
              fugiat. Sit ullamco et ex velit <br /> duis. In velit sunt nulla proident
              incididunt consectetur elit et labore voluptate amet <br /> sint adipisicing.
              Proident esse anim qui mollit.
            </p>
        </div>

        <div className="info-2">
            <p>
              <i class="bi bi-geo-alt-fill"></i> MAIN ROAD, BUILDING NAME, COUNTRY
            </p>
            <p>
              <i class="bi bi-envelope-fill"></i> INFO@COMPANYNAME.COM
            </p>
        </div>
      </div>

      <div className="footer__itens_pt2">
        <div>
            <p>
              <i class="bi bi-c-circle"></i> COMPANY NAME 2023 - ALL RIGHTS
              RESERVED.
            </p>
        </div>
        <div className="find-us">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-whatsapp"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
