import React, { useState } from "react";
import "../css/Contact.css";
import emailjs from "emailjs-com";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          window.alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          window.alert("Error sending...");
          console.log(error.text);
        }
      );

    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__form">
        <form className="container" onSubmit={handleSubmit}>
          <IconButton className="contact__icon">
            <EmailIcon
              className="email__icon"
              style={{ color: "white", fontSize: "6rem" }}
            />
          </IconButton>
          <div>
            <label htmlFor="contactName">
              Name <span className="required">*</span>
            </label>
            <input
              value={name}
              type="text"
              defaultValue=""
              size="35"
              id="contactName"
              name="contactName"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contactEmail">
              Email <span className="required">*</span>
            </label>
            <input
              value={email}
              type="text"
              defaultValue=""
              size="35"
              id="contactEmail"
              name="contactEmail"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contactSubject">Subject</label>
            <input
              value={subject}
              type="text"
              defaultValue=""
              size="35"
              id="contactSubject"
              name="contactSubject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contactMessage">
              Message <span className="required">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="50"
              rows="15"
              required
              id="contactMessage"
              name="contactMessage"
            ></textarea>
          </div>

          <div className="btn__container">
            <button type="submit" className="submit">
              Submit
            </button>
            <span id="image-loader">
              <img alt="" src="images/loader.gif" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
