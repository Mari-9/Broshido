function Home() {
  return (
    <>
      {/* Hook */}
      <div classNameName="hook_wrapper">
        <div classNameName="hook_left">
          <h1>Do feel youve been missing a samurai in your life?</h1>
        </div>

        <div classNameName="hook_right">
          <img src="" alt="some cheesy photo" />
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            non cumque laboriosam incidunt nihil nobis, ipsa dolorem error
            beatae quisquam.
          </p>
        </div>
      </div>

      {/* samurai type */}
      <div classNameName="typesOfSamurai_wrapper">
        <div classNameName="type 1">
          <div>
            <img src="" alt="cute samrai" />
            <h1>TYPE OF SAMURAI</h1>
          </div>
        </div>

        <div classNameName="type 2">
          <div>
            <img src="" alt="cute samrai 2" />
            <h1>TYPE OF SAMURAI</h1>
          </div>
        </div>

        <div classNameName="type 3">
          <div>
            <img src="" alt="cute samrai 3" />
            <h1>TYPE OF SAMURAI</h1>
          </div>
        </div>

        <div classNameName="type 4">
          <div>
            <img src="" alt="cute samrai 4" />
            <h1>TYPE OF SAMURAI</h1>
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
