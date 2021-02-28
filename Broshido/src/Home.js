import "./Styles/HomeStyles.css";
import logo from "./Images/Broshido.png";
import hook from "./Images/HomepgSamurai.jpg";
import Testimonials from "./Testimonials.js";
import Reservation from "./Reservation.js";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Special header */}
      <div className="skewed_home_black_wrapper">
        <div className="content">
            <Reservation />
         
        </div>
      </div>

      {/* Hook */}
      <div className="hook_wrapper">
        <div className="hook_left">
          <h2>Do feel you have been missing a samurai in your life?</h2>
        </div>

        <div className="hook_right foo">
          <img src={hook} alt="HomepgSamurai" />
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
          <h1>YOKAI EXTERMINATION</h1>
          <p>
            Yokai can be so annoying and even more annoying to get rid of. These
            Samurai can help!{" "}
          </p>
        </div>
        <div className="type">
          <h1>BODY GAURD</h1>
          <p>
            If you feel you are in need of a body guard, these are the samurai
            for you!{" "}
          </p>
        </div>

        <div classeName="type">
          <h1>ENTERTAINMENT</h1>
          <p>
            Are you worried your party will be just a regular party? Why not
            spice it up with a little sword play!{" "}
          </p>
        </div>

        <div className="type">
          <h1>PRANK YOUR FRIENDS</h1>
          <p>Who doesn’t love pranking friends. Our samurai do! </p>
        </div>
      </div>

      <Testimonials />
      {/* <Reservation /> */}
    </>
  );
}

export default Home;
