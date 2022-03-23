import React, { useContext } from "react";
import emailjs from "emailjs-com";
import { AppContext } from "../App";

const TabletContactMe = () => {
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
    <div className="contact-me-container">
      <div className="contact-me-5 border-1px-dove-gray" id="contact-me1">
        <div className="oval-7"></div>
        <div className="contact-me-6 manrope-bold-purple-pizzazz-10px">
          Contact Me
        </div>
        <div className="overlap-group1-2">
          <div className="lets-work-together-2 manrope-bold-bright-gray-32px">
            Let’s Work Together
          </div>
          <p className="the-sky-was-cloudles-2 manrope-normal-bright-gray-16px">
            The sky was cloudless and of a deep dark blue the spectacle before
            us was indeed sublime.
          </p>
        </div>
        <form action="" onSubmit={sendEmail}>
          <div className="overlap-group1-3">
            <div className="rectangle-7"></div>
            <div className="rectangle-8"></div>
            <div className="oval-8"></div>
            <div className="name-2">
              <div className="label-2 manrope-bold-bright-gray-5px"></div>
              <div className="overlap-group-9 border-1px-alto">
                <div className="placeholder-2 manrope-normal-bright-gray-9px">
                  <input
                    name="from_name"
                    style={{ border: "none" }}
                    type="text"
                    size="15"
                    value={name}
                    placeholder="Name"
                    onChange={updateName}
                  />
                </div>
              </div>
            </div>
            <div className="email-2">
              <div className="label-3 manrope-bold-bright-gray-5px"></div>
              <div className="overlap-group1-4 border-1px-alto">
                <div className="placeholder-2 manrope-normal-bright-gray-9px">
                  <input
                    name="from_email"
                    style={{ border: "none" }}
                    type="text"
                    size="15"
                    value={email}
                    placeholder="Email"
                    onChange={updateEmail}
                  />
                </div>
              </div>
            </div>
            <div className="message-2">
              <div className="label-4 manrope-bold-bright-gray-5px"></div>
              <div className="overlap-group2-4 border-1px-alto">
                <div className="placeholder-2 manrope-normal-bright-gray-9px">
                  <textarea
                    name="message"
                    style={{ border: "none", resize: "none" }}
                    id=""
                    cols="40"
                    rows="4"
                    placeholder="message"
                    value={message}
                    onChange={updateMessage}
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              className="send-button-3 border-1px-dove-gray"
              type="submit"
            >
              <div className="place-9 poppins-light-white-18px">
                {sending ? "sending..." : sendButtonText}
              </div>
            </button>
          </div>
        </form>
        <div className="oval-9"></div>
        <div className="my-linkedin-2 manrope-bold-purple-pizzazz-9px">
          My linkedin
        </div>
        <div className="connect-with-me-2 manrope-bold-bright-gray-31px">
          Connect With Me
        </div>
        <a
          href="https://www.linkedin.com/in/abey-bruck-415a8480/"
          target="_blank"
        >
          <div className="linkedin-3 border-1px-true-v">
            <div className="button-2 manrope-bold-true-v-7px">#LINKEDIN</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TabletContactMe;
