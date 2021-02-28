import "./Styles/FooterStyles.css";
import "./Styles/AboutStyles.css";
import logo from "./Images/HomepgSamurai.jpg";
import Testimonials from "./Testimonials.js";
import Reservation from "./Reservation.js";
function About() {
  return (
    <>
      <div className="about_container">
        <div className="about_wrapper">
          <div className="whoWeAre">
            <h1>We are Broshido</h1>
          </div>

          <div className="group_image">
            {" "}
            <img src={logo} alt="HomepgSamurai" />
          </div>

          <div className="about_story">
            <p>
              What is Broshido? Broshido is a play on the words bro and bushido.
              Bro being the slang for a male friend and also short for the word
              brother. Bushido is the samurai code of honor and morals. Together
              you get Broshido. Someone who will treat you as a close friend and
              someone who upholds a strong code of ethics. Our samurai will do
              everything they can to complete the task you have ask of them.
            </p>
          </div>
        </div>

        <Testimonials />
        <Reservation />
      </div>
    </>
  );
}

export default About;
