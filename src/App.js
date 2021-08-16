import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Frontpage from "./Frontpage";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Pro from "./Pro";
import Documentation from "./Documentation";
import Sigin from "./Sigin";

const App = () => {
  return (
    <>
      <div className=" container-fluid header1">
        <div className="row text-center ">
          <p className="text">
            🥂 newly printed merchandise now available in the Github shop
          </p>
        </div>
      </div>
      <div className="clrmixture"></div>
      <Navbar />
      <Navbar2 />
      <Switch>
        <Route exact path="/pro" component={Pro} />
        <Route exact path="/" component={Frontpage} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/documentation" component={Documentation} />
        <Route exact path="/sigin" component={Sigin} />
        <Redirect to="/" />
      </Switch>
      <Footer />
      <div className="clrmixture"></div>
    </>
  );
};

export default App;
