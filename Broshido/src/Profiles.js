import "./Styles/FooterStyles.css";
import "./Styles/ProfilesStyles.css";
import React, { Component } from "react";
import { fetchSamuraiProfiles } from "./DataSource";
function Profileshold() {
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
    </>
  );
}

class Profiles extends Component {
  renderSamurai = () => {
    let children = [];
    children = fetchSamuraiProfiles().map(item => (
      <div className="Section1">
        <div>
          <h1>{item.title}</h1>
        </div>
        <div className="samurai_type">
          {item.children.map(samurai => (
            <div className="samurai">
              1<h2>{samurai.name}</h2>
            </div>
          ))}
        </div>
      </div>
    ));
    return children;
  };

  render() {
    const { className, title } = this.props;
    return (
      <div className="samurai_profiles_wrapper">{this.renderSamurai()}</div>
    );
  }
}

export default Profiles;
