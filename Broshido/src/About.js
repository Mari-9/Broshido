import "./FooterStyles.css";
import "./AboutStyles.css";
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

      {/* testimonials */}
      <div className="testimonials_header">
        <h1>TESTIMONIALS</h1>
      </div>

      <div className="tesitmonials_wrapper">
        <div className="tesimonials">
          <div className="test_name">Name goes here</div>
          <div className="star_rating">*****</div>
          <div className="review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            perferendis!
          </div>
        </div>

        <div className="tesimonials">
          <div className="test_name">Name goes here</div>
          <div className="star_rating">*****</div>
          <div className="review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            perferendis!
          </div>
        </div>

        <div className="tesimonials">
          <div className="test_name">Name goes here</div>
          <div className="star_rating">*****</div>
          <div className="review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            perferendis!
          </div>
        </div>
      </div>
      {/* reserve */}
      <div className="reserve_wrapper">
        <div className="reserve_text">
          <h1>MAKE A RESERVATION TODAY!</h1>
        </div>
        <div className="button">
          <button>
            <a href="">this is link to profile pg</a>
          </button>
        </div>
      </div>

      {/* footer */}
      <div className="footer_wrapper">
        <div className="links-wrapper">
          <div className="nav-link">
            <a href="">Home</a>
          </div>

          <div className="nav-link">
            <a href="">About</a>
          </div>

          <div className="nav-link">
            <a href="">Profiles</a>
          </div>

          <div className="nav-link">
            <a href="">Contact Us</a>
          </div>
        </div>

        <div className="social_wrapper">
          <div className="Icon">
            <a href="">Facebook</a>
          </div>

          <div className="Icon">
            <a href="">twitter</a>
          </div>

          <div className="Icon">
            <a href="">youtube</a>
          </div>

          <div className="Icon">
            <a href="">instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
