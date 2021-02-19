import "./HomeStyles.css";
import "./FooterStyles.css";

function Home() {
  return (
    <>
      {/* Hook */}
      <div className="hook_wrapper">
        <div className="hook_left">
          <h2>Do feel you have been missing a samurai in your life?</h2>
        </div>

        <div className="hook_right">
          <img src="" alt="some cheesy photo" />
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
        <div className="samuariTypeRight">
          <div className="type">
            <img src="" alt="cute samrai" />
            <h1>YOKAI EXTERMINATION</h1>
          </div>

          <div className="type">
            <img src="" alt="cute samrai 2" />
            <h1>BODY GUARD</h1>
          </div>
        </div>

        <div className="samuariTypeLeft">
          <div classeName="type">
            <img src="" alt="cute samrai 3" />
            <h1>ENTERTAINMENT</h1>
          </div>

          <div className="type">
            <img src="" alt="cute samrai 4" />
            <h1>PRANK YOUR FRIENDS</h1>
          </div>
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

export default Home;
