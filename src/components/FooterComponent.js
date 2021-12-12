import React from "react";

const Footer = () => {
  return (
    <div className="container" style={{ marginTop: 200 }}>
      <div className="row d-flex justify-content-center">
        <p className="text-center" style={{fontSize:36}}>Kriptos</p>
        <p className="text-center" style={{fontSize:36}}>Grafos</p>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <hr />
          </div>
        </div>
        <div className="col-6">
          <p>
            Intended for major assignments in cryptography courses Sumatra
            Institute of Technology, informatics engineering.
          </p>
        </div>
        <p className="text-center" style={{fontSize:24}}>Members</p>
        <p className="text-center">Alfarizi Afif Fajari Nagachi Rizqi </p>
      </div>
    </div>
  );
};

export default Footer;
