import React from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
const Home = () => {
  return (
    <>
      <div className="div1 ">
        <h1 className="toptext">Build Amazing Things</h1>
        <p className=" Home_div">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          corporis ea nostrum aspernatur voluptatem! Maiores sit et id atque?
          Libero, voluptate eligendi! Architecto, officiis repellat. Cum,
          distinctio? Quia, ea autem.
        </p>
        <h2 className="text2">Take your JavaScript development up a notch</h2>
        <p>
          Get started today for free, or step up to npm Pro to enjoy a premium
          JavaScript development experience, with features like private
          packages.
        </p>
        <div className="div2">
          <button type="button" className="btn btn-outline-primary btn1">
            Sign Up for free
          </button>
          <button type="button" className="btn btn-outline-primary btn2">
            Learn About pro
          </button>
        </div>
      </div>
      <div className="div3">
        <AccountBalanceIcon className="icon2" />
        <h3>
          Bring the best of open source to you, your team, and your company
        </h3>
        <p>
          Relied upon by more than 11 million developers worldwide, npm is
          committed to making JavaScript development elegant, productive, and
          safe. The free npm Registry has become the center of JavaScript code
          sharing, and with more than one million packages, the largest software
          registry in the world. Our other tools and services take the Registry,
          and the work you do around it, to the next level.
        </p>
      </div>
      <div className="div4">
        <h1>We love open source</h1>
        <p>
          At npm, Inc., we're proud to dedicate teams of full-time employees to
          operating the npm Registry, enhancing the CLI, improving JavaScript
          security, and other projects that support and nurture a vibrant open
          source community.
        </p>
      </div>
      <div className="div5">
        <h2>
          Gratefully serving everyone from solo devs to the Fortune 500 Our
          Sponsors
        </h2>
      </div>
    </>
  );
};

export default Home;
