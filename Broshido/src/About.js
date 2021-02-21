import "./Styles/FooterStyles.css";
import "./Styles/AboutStyles.css";
import Testimonials from "./Testimonials.js";
import Reservation from "./Reservation.js";
function About() {
  return (
    <>
      {/* about */}
      <div className="about_wrapper">
        <div className="whoWeAre">
          <h1>We are Broshido</h1>
        </div>

        <div className="group_image">group image</div>

        <div className="about_story">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis rerum deleniti laudantium ex. Expedita, voluptates velit
            quis, vel perspiciatis dolor unde consectetur non laborum tempora id
            eos eveniet, quas nemo!
          </p>
        </div>
      </div>

      <Testimonials />
      <Reservation />
    </>
  );
}

export default About;
