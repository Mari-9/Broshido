import "./FooterStyles.css";
import "./ProfilesStyles.css";
function Profiles() {
  return (
    <>
      <div className="samurai_friends_wrapper">
        <div className="img_wrapper">img1</div>

        <div className="img_wrapper">img1</div>

        <div className="img_wrapper">img1</div>

        <div className="img_wrapper">img1</div>
      </div>

      <div className="samurai_profiles_wrapper">
        <div className="Section1">
          <div>
            <h1>YOKAI EXTERMINATION</h1>
          </div>
          <div className="samurai_type">
            <div className="samurai">
              3<h2>Lauren</h2>
            </div>

            <div className="samurai">
              2<h2>Suga</h2>
            </div>

            <div className="samurai">
              1<h2>Taro</h2>
            </div>
          </div>
        </div>

        <div className="Section1">
          <div>
            <h1>BODY GUARD</h1>
          </div>
          <div className="samurai_type">
            <div className="samurai">
              3<h2>Ken</h2>
            </div>

            <div className="samurai">
              2<h2>Keisuke</h2>
            </div>

            <div className="samurai">
              1<h2>Machan</h2>
            </div>
          </div>
        </div>

        <div className="Section1">
          <div>
            <h1>ENTERTAINMENT</h1>
          </div>
          <div className="samurai_type">
            <div className="samurai">
              3<h2>Satoshi</h2>
            </div>

            <div className="samurai">
              2<h2>Marissa</h2>
            </div>

            <div className="samurai">
              1<h2>Seiya</h2>
            </div>
          </div>
        </div>

        <div className="Section1">
          <div>
            <h1>PRANK YOUR FRIENDS</h1>
          </div>
          <div className="samurai_type">
            <div className="samurai">
              1<h2>Darren</h2>
            </div>

            <div className="samurai">
              2<h2>Echan</h2>
            </div>

            <div className="samurai">
              3<h2>Someone</h2>
            </div>
          </div>
        </div>
      </div>

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

export default Profiles;
