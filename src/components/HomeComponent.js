import React from "react";

export default function Home() {
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
            <form>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Write your message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
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
                  >
                    <option value="1">Modification</option>
                  </select>
                </div>
                <div className="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Select Operation
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Enkrip</option>
                    <option value="1">Dekrip</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Key
                </label>
                <input type="text" class="form-control" />
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

      <section className="hasil" style={{ marginTop: 300 }}>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            porttitor lobortis et luctus risus tristique pellentesque. Netus
            quam volutpat mauris morbi consectetur pellentesque. Odio diam, elit
            a neque. Neque massa aliquet commodo malesuada dignissim. Et.
          </p>

          <button class="btn-primary encode-button">Copy</button>
          <img
          className="img-line2 position-absolute end-0"
          src="./assets/images/line1.png"
        />
        </div>
      </section>
    </div>
  );
}
