import React, { useContext } from "react";
import emailjs from "emailjs-com";
import { AppContext } from "../App";

const ContactMe = () => {
  const {
    name,
    email,
    message,
    updateName,
    updateEmail,
    updateMessage,
    makeVoid,
    sending,
    sendButtonText,
    toggleSend,
    updateSendButtonText,
  } = useContext(AppContext);

  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    toggleSend(true);
    // .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
    emailjs
      .sendForm(
        "service_jvqaz7k",
        "template_z1yo6ec",
        e.target,
        "xpoguSmSWPGnRMOBF"
      )
      .then(
        (result) => {
          //window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
          console.log(result);
          toggleSend(false);
          updateSendButtonText("Success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    makeVoid();
  };

  return (
    <div className="overlap-group16">
      <div className="oval"></div>
      <div className="contact-me-1 border-1px-dove-gray" id="contact-me">
        <div className="oval-1"></div>
        <div className="contact-me-2">Contact Me</div>
        <div className="overlap-group12">
          <div className="lets-work-together">Let’s Work Together</div>
          <p className="the-sky-was-cloudles manrope-normal-bright-gray-16px">
            The sky was cloudless and of a deep dark blue the spectacle before
            us was indeed sublime.
          </p>
        </div>
        <form action="" onSubmit={sendEmail}>
          <div className="overlap-group11">
            <div className="rectangle"></div>
            <div className="rectangle-1"></div>
            <div className="oval-2"></div>
            <div className="name">
              <div className="label manrope-bold-bright-gray-12px"></div>
              <div className="overlap-group-1 border-1px-alto">
                <div className="placeholder manrope-normal-bright-gray-16px-2">
                  <input
                    name="from_name"
                    style={{ border: "none" }}
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={updateName}
                  />
                </div>
              </div>
            </div>
            <div className="email">
              <div className="label manrope-bold-bright-gray-12px"></div>
              <div className="overlap-group-1 border-1px-alto">
                <div className="placeholder manrope-normal-bright-gray-16px-2">
                  <input
                    name="from_email"
                    style={{ border: "none" }}
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={updateEmail}
                  />
                </div>
              </div>
            </div>
            <div className="message">
              <div className="label manrope-bold-bright-gray-12px"></div>
              <div className="overlap-group2-1 border-1px-alto">
                <div className="placeholder manrope-normal-bright-gray-16px-2">
                  <textarea
                    name="message"
                    style={{ border: "none", resize: "none" }}
                    placeholder="message"
                    id=""
                    cols="70"
                    rows="7"
                    value={message}
                    onChange={updateMessage}
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="send-button border-1px-dove-gray" type="submit">
              <div className="place-1 poppins-light-white-21px">
                {sending ? "sending..." : sendButtonText}
              </div>
            </button>
          </div>
        </form>
        <div className="oval-3"></div>
        <div className="my-linkedin">My linkedin</div>
        <div className="connect-with-me">Connect With Me</div>
        <a
          href="https://www.linkedin.com/in/abey-bruck-415a8480/"
          target="_blank"
        >
          <div className="linkedin border-1px-true-v">
            <div className="button">#LINKEDIN</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
