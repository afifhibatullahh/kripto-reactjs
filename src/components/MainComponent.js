import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Helmet } from "react-helmet";
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kriptos Grafos</title>
        </Helmet>
        <Header />
        {/* <Routes>
          <Route path="/kripto-reactjs" element={<Home />} />
        </Routes> */}
        <Home />
        <Footer />
      </div>
    );
  }
}

export default Main;
