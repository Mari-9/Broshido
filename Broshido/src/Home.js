import "./Styles/HomeStyles.css";
import logo from "./Images/HomepgSamurai.jpg";
import Testimonials from "./Testimonials.js";
import Reservation from "./Reservation.js";

function Home() {
  return (
    <>
      {/* Hook */}
      <div className="hook_wrapper">
        <div className="hook_left">
          <h2>Do feel you have been missing a samurai in your life?</h2>
        </div>

        <div className="hook_right foo">
          <img src={logo} alt="HomepgSamurai" />
        </div>
      </div>
      <div className="hook_information">
        <p>
          Here at Broshido we are determined to fulfill your needs. Samurai are
          not a thing of the past. We have the best samurai who will help you
          out in our modern world. Do you feel you have a yokai haunting you? Or
          you need a body guard to protect you? We have just the samurai for
          you. Our samurai can even entertain at parties or play pranks on your
          friends! Let our samurai help you today!
        </p>
      </div>

      {/* samurai type */}
      <div className="typesOfSamurai_wrapper">
        <div className="type">
          <img src="" alt="cute samrai" />
          <h1>YOKAI EXTERMINATION</h1>
        </div>
        <div className="type">
          <img src="" alt="cute samrai 2" />
          <h1>BODY GAURD</h1>
        </div>

        <div classeName="type">
          <img src="" alt="cute samrai 3" />
          <h1>ENTERTAINMENT</h1>
        </div>

        <div className="type">
          <img src="" alt="cute samrai 4" />
          <h1>PRANK YOUR FRIENDS</h1>
        </div>
      </div>

      <Testimonials />
      <Reservation />
    </>
  );
}

export default Home;
