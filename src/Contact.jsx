import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dg87b0h",
        "template_nigsn7o",
        e.target,
        "PHdLJUBRDtmcdOK5L"
      )
      .then(
        () => {
          alert("Sent Successfully");
        },
        () => {
          alert("Not Sent Successfully");
        }
      );
  };
  return (
    <>
      <div className="my-5 text-center">
        <h1>Contact US</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="exampleFromControlInput1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  name="fullname"
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFromControlInput1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFromControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhone"
                  name="phone"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFromControlInput1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
