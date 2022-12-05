import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  Vul onderstaand formulier in om contact met me op te nemen!
                </p>
              </div>
              <form
                action="https://formsubmit.co/info@promylle.be"
                method="POST"
                validate
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Naam"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Bericht"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>

                <input
                  type="hidden"
                  name="_next"
                  value="http://promylle.be/#contact"
                />
                <input type="hidden" name="_subject" value="Nieuw bericht!" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table"></input>

                <button type="submit" className="btn btn-custom btn-lg">
                  Verstuur
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>
                <br></br>
              </h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                <a href="tel:+32485 04 80 88" id="contacthref">
                  {props.data ? props.data.phone : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a href="mailto:info@promylle.be" id="contacthref">
                  {props.data ? props.data.email : "loading"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            2022{" "}
            <a href="http://flacomedia.be" rel="nofollow" target="_blank">
              Flaco Media
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
