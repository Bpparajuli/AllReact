import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./regform.css";
const RegForm = () => {
  const [thankYouMessage, setThankYouMessage] = useState("");

  const [formValue, setformValue] = useState({
    Fname: "",
    Lname: "",
    Gender: "",
    Age: "",
    Qualification: "",
    Profession: "",
    Location: "",
    Contact: "",
    Email: "",
    Message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformValue((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setThankYouMessage(
      `Hello ${formValue.Fname} Your Message has been Received Thanks ${formValue.Email}`
    );
    setformValue({
      Fname: "",
      Lname: "",
      Gender: "",
      Age: "",
      Qualification: "",
      Profession: "",
      Location: "",
      Contact: "",
      Email: "",
      Message: "",
    });
  };
  const Reset = () => {
    setformValue({
      Fname: "",
      Lname: "",
      Gender: "",
      Age: "",
      Qualification: "",
      Profession: "",
      Location: "",
      Contact: "",
      Email: "",
      Message: "",
      pax: "",
    });
    setThankYouMessage("");
  };
  const [pax, setPax] = useState("0");

  const Increase = () => {
    if (pax < 100) {
      setPax(parseInt(pax) + 1);
    }
  };

  const Decrease = () => {
    if (parseInt(pax) > 0) {
      setPax(parseInt(pax) - 1);
    }
  };

  return (
    <div className="booking-form mx-auto">
      <form onSubmit={handleSubmit}>
        <h3 className="reg">
          <span> Register Now </span> For New Updates.
        </h3>
        <div className="name-inputs">
          <label>
            First Name:
            <input
              type="text"
              placeholder="First Name"
              name="Fname"
              onChange={handleChange}
              value={formValue.Fname}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              placeholder="Last Name"
              name="Lname"
              onChange={handleChange}
              value={formValue.Lname}
              required
            />
          </label>
        </div>
        <div className="gender-age-inputs">
          <label>
            Gender:
            <input
              type="text"
              placeholder="Gender"
              name="Gender"
              onChange={handleChange}
              value={formValue.Gender}
            />
          </label>
          <label>
            Age:
            <div className="age-input-group">
              <Button className="btn-success" onClick={Increase}>
                +
              </Button>

              <input
                type="text"
                placeholder="Age"
                name="Age"
                onChange={handleChange}
                value={pax}
              />
              <Button
                variant="outlined"
                color="error"
                className="btn-danger"
                onChange={handleChange}
                onClick={Decrease}
              >
                -
              </Button>
            </div>
          </label>
        </div>
        <div className="qual-prof-inputs">
          <label>
            Qualification:
            <input
              type="text"
              placeholder="Qualification"
              name="Qualification"
              onChange={handleChange}
              value={formValue.Qualification}
            />
          </label>
          <label>
            Profession:
            <input
              type="text"
              placeholder="Profession"
              name="Profession"
              onChange={handleChange}
              value={formValue.Profession}
            />
          </label>
        </div>
        <div className="location-contact-inputs">
          <label>
            Location:
            <input
              type="text"
              placeholder="Location"
              name="Location"
              onChange={handleChange}
              value={formValue.Location}
            />
          </label>
          <label>
            Contact No:
            <input
              type="text"
              placeholder="Contact No"
              name="Contact"
              onChange={handleChange}
              value={formValue.Contact}
            />
          </label>
        </div>
        <div className="email-input">
          <label>
            Email Address:
            <input
              type="text"
              placeholder="Email"
              name="Email"
              onChange={handleChange}
              value={formValue.Email}
            />
          </label>
        </div>
        <div className="message-input">
          <div className="message">
            <label>
              Message:
              <textarea
                placeholder="Send us Your inquiry detail"
                name="Message"
                onChange={handleChange}
                value={formValue.Message}
              />
            </label>
          </div>
          <div className="buttons">
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" onClick={Reset} />
          </div>
        </div>
        <h6 className="terms">
          By clicking Submit You accpect our
          <span>
            <a href="/Terms"> Terms & Condtioins.</a>
          </span>
        </h6>
      </form>
      <h2 className="message-received"> {thankYouMessage}</h2>
    </div>
  );
};

export default RegForm;
