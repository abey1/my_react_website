import React, { useContext } from "react";
import emailjs from "emailjs-com";
import { AppContext } from "../App";

const MobileContactMe = () => {
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
    <div>
      <form action="" onSubmit={sendEmail}>
        <div className="oval-4"></div>
        <div className="oval-5"></div>
        <div className="rectangle-3"></div>
        <div className="rectangle-4"></div>
        <div className="name-1">
          <div className="label-1 manrope-bold-bright-gray-5px"></div>
          <div className="overlap-group-3 border-1px-alto">
            <div className="placeholder-1 manrope-normal-bright-gray-9px">
              <input
                name="from_name"
                style={{ border: "none" }}
                type="text"
                size="25"
                value={name}
                placeholder="Name"
                onChange={updateName}
              />
            </div>
          </div>
        </div>
        <div className="email-1">
          <div className="label-1 manrope-bold-bright-gray-5px"></div>
          <div className="overlap-group-3 border-1px-alto">
            <div className="placeholder-1 manrope-normal-bright-gray-9px">
              <input
                name="from_email"
                style={{ border: "none" }}
                type="text"
                size="25"
                value={email}
                placeholder="Email"
                onChange={updateEmail}
              />
            </div>
          </div>
        </div>
        <div className="message-1">
          <div className="label-1 manrope-bold-bright-gray-5px"></div>
          <div className="overlap-group11-1 border-1px-alto">
            <div className="placeholder-1 manrope-normal-bright-gray-9px">
              <textarea
                name="message"
                style={{ border: "none", resize: "none" }}
                id=""
                cols="25"
                rows="8"
                placeholder="message"
                value={message}
                onChange={updateMessage}
              ></textarea>
            </div>
          </div>
        </div>
        <button className="send-button-1 border-1px-dove-gray" type="submit">
          <div className="place-4">
            {sending ? "sending..." : sendButtonText}
          </div>
        </button>
        <div className="oval-6"></div>
        <div className="my-linkedin-1 manrope-bold-purple-pizzazz-9px">
          My linkedin
        </div>
        <div className="connect-with-me-1 manrope-bold-bright-gray-31px">
          Connect With Me
        </div>
        <a
          href="https://www.linkedin.com/in/abey-bruck-415a8480/"
          target="_blank"
        >
          <div className="linkedin-1 border-1px-true-v">
            <div className="button-1 manrope-bold-true-v-7px">#LINKEDIN</div>
          </div>
        </a>
      </form>
    </div>
  );
};

export default MobileContactMe;
