import React, { useState, useEffect } from "react";

export default function Home(props) {
  const API_URL = "https://kriptografi-api.herokuapp.com/api/cryptography";
  const [isLoading, setLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [result, setResult] = useState("");
  const [data, setData] = useState({
    option: "modifikasi",
    type: "encrypt",
    raw_text: "",
    key: "",
  });

  const submit = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        option: data.option,
        type: data.type,
        raw_text: data.raw_text,
        key: data.key,
      }),
    };
    e.preventDefault();
    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        console.log(data);
        window.location.href = "#hasil";
      });
  };

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8" style={{ marginTop: 200 }}>
          <p style={{ fontSize: 64 }} className="txt-border">
            Do Simple Magic
          </p>
          <p style={{ fontSize: 64 }}>With Cryptography</p>
          <p>
            do a simple magic using cryptography, you can use several spells
            like monoalphabetic, transposition, Steganography, and other spells
          </p>
          <a href="#kripting">
            <button className="btn-try" style={{ marginTop: 64 }}>
              <p style={{ color: "black" }}>Try It!</p>
            </button>
          </a>
        </div>
        <div className="col-4">
          <img
            className="position-absolute top-0 end-0"
            src="./assets/images/KRIPTOSCIRCLE.png"
          ></img>
        </div>
      </div>

      <section id="kripting" className="kripting">
        <div className="row">
          <div className="col-9">
            <img
              className="img-line1 position-absolute start-0"
              src="./assets/images/line1.png"
            />
            <p style={{ fontSize: 48 }}>
              Encrypt your messages easily to protect your privacy
            </p>
          </div>
          <div className="col-6">
            <form onSubmit={submit}>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Write your message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) => handle(e)}
                  id="raw_text"
                  value={data.raw_text}
                ></textarea>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Select Algorithm
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={data.option}
                    onChange={(e) => handle(e)}
                    id="option"
                  >
                    <option value="modifikasi">Modification</option>
                  </select>
                </div>
                <div className="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Select Operation
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={data.type}
                    onChange={(e) => handle(e)}
                    id="type"
                  >
                    <option value="encrypt">Encryption</option>
                    <option value="decrypt">Decryption</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Key
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={data.key}
                  onChange={(e) => handle(e)}
                  id="key"
                />
              </div>

              <div class="float-end">
                <button class="btn-primary encode-button">Encode</button>
              </div>
            </form>
          </div>
          <div className="col offset-1">
            <img src="./assets/images/orang.png" />
          </div>
        </div>
      </section>

      <section id="hasil" className="hasil" style={{ marginTop: 300 }}>
        <img
          className="position-absolute start-0"
          style={{ marginLeft: 30 }}
          src="./assets/images/squid1.png"
        />
        <div className="text-center">
          <p style={{ fontSize: 36 }} className="txt-border">
            Encriptor
          </p>

          <p style={{ fontSize: 36 }}>Result</p>
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <hr />
            </div>
          </div>
          <p>{result}</p>

          <button
            class="btn-primary encode-button"
            onClick={() => {
              navigator.clipboard.writeText(result);
              setCopySuccess('Copied')
              setTimeout(() => setCopySuccess(''), 1000);
            }}
          >
            Copy
          </button>
          <p className="position-absolute start-50" style={{fontSize:12}}>{copySuccess}</p>
          <img
            className="img-line2 position-absolute end-0"
            src="./assets/images/line1.png"
          />
        </div>
      </section>
    </div>
  );
}
