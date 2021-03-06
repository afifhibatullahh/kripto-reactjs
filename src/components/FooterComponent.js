import React from "react";

const Footer = () => {
  return (
    <section id="footer">

    <div className="container" style={{ marginTop: 200, }}>
      <div className="row d-flex justify-content-center">
        <p className="text-center txt-border" style={{ fontSize: 36 }}>
          Kriptos
        </p>
        <p className="text-center" style={{ fontSize: 36 }}>
          Grafos
        </p>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <hr />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <p className="text-center">
            Intended for major assignments in cryptography courses Sumatra
            Institute of Technology, informatics engineering.
          </p>
        </div>
        <p className="text-center txt-border-white" style={{ fontSize: 24 }}>
          Members
        </p>
        <p className="text-center" style={{marginBottom:150}}>Alfarizi Afif Fajari Nagachi Rizqi </p>
        <img
          className="position-absolute end-0 d-none d-sm-block"
          style={{ width: 90,  marginRight: 30, marginTop:120 }}
          src="./assets/images/squid2.png"
        />
      </div>
    </div>
    </section>
  );
};

export default Footer;
