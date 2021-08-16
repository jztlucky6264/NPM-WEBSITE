import React from "react";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const Footer = () => {
  return (
    <>
      <div className="container footer_div">
        <div className="firstdiv row">
          <ContactPhoneIcon className="icon3 col" />
          <div id="div1" className="col">
            <ul className="ab1">
              support
              <li>Help</li>
              <li>Community</li>
              <li>Advisories</li>
              <li>Status</li>
              <li>Contact npm</li>
            </ul>
          </div>
          <div id="div2" className="col">
            <ul className="ab1">
              Terms & Policies
              <li>Policies</li>
              <li>Terms of Use</li>
              <li>Code of Conduct</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div id="div3" className="col">
            <ul className="ab1">
              Company
              <li>About</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="contact--us">
          <h1> Contact Us</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
