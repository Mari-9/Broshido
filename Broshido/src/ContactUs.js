import "./Styles/ContactUsStyles.css";
function ContactUs() {
  return (
    <>
      <div className="email_wrapper">
        <form className="email_form">
          <div>Contact Us</div>

          <div className="Name email_input_wrapper">
            <input id="Name" placeholder="name" type="text" name="name" />
            <label for="Name">Name</label>
          </div>
          <div className="Email email_input_wrapper">
            <input id="Email" type="text" name="email" placeholder="email" />
            <label for="Email">Email</label>
          </div>
          <div className="Subject email_input_wrapper">
            <input
              id="Subject"
              type="text"
              name="subject"
              placeholder="subject"
            />
            <label for="Subject">Subject</label>
          </div>
          <div className="Message email_input_wrapper">
            <textarea
              id="Message"
              type="text"
              name="message"
              placeholder="message"
            />
            <label for="Message">Message</label>
          </div>

          <div className="submit_containter">
            <div className="submit_wrapper">
              <div className="submit_background"></div>
              <button>Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
