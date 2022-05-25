import React from "react";
import "../css/footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import SettingsIcon from '@mui/icons-material/Settings';


const Foot = () => {
  return (
      <>
    <Get_Information
      sectionTitle="Air Jordan"
      sectionTitle2="Yeezy"
      sectionTitle3="Recent Updates"
      sectionTitle4="Popular Releases"
      sectionTitle5="Comic Books"
      sectionTitle6="Supreme"
      link1="Air Jordan 1"
      link2="Jordan Golf Shoes"
      link3="Air Jordan 3"
      link4="Air Jordan 11"
      link5="Air Jordan 11 Low"
      link6="Jordan 1 Mid"
      link7="Yeezy Boost 350"
      link8="Yeezy Boost 350 V2"
      link9="Yeezy Boost 700"
      link10="Yeezy 500"
      link11="Yeezy Slide"
      link12="Yeezy Foam RNNR"
      link13="The Drop List"
      link14="Nike Air Force | Buyer's Guide"
      link15="Air Jordan 11 Buyer's Guide"
      link16="XBox Series X"
      link17="PS5"
      link18="The Chrome Hearts Buyer's Guide"
      link19="Jordan 4 White Oreo"
      link20="LeBron 8 South Beach"
      link21="Nike Dunk High Game Royal"
      link22="Jordan 6 Gold Hoops"
      link23="Jordan 3 Racer Blue"
      link24="Nike Dunk Low Laser Orange"
      link25="X-Men"
      link26="Batman"
      link27="Spiderman"
      link28="Hulk"
      link29="Avengers"
      link30="Star Wars"
      link31="T-Shirts"
      link32="Accessories"
      link33="Supreme The North Face"
      link34="Bottoms"
      link35="Hoodies"
      link36="Supreme Nike"
    />
    </>
  );
};

const Get_Information = ({ sectionTitle, sectionTitle2, sectionTitle3, sectionTitle4, sectionTitle5, sectionTitle6, link1, link2, link3, link4, link5, link6, link7, link8, link9, link10, link11, link12, link13, link14, link15, link16, link17, link18, link19, link20, link21, link22, link23, link24, link25, link26, link27, link28, link29, link30, link31, link32, link33, link34, link35, link36}) => {
  return (
    <footer className="footer">
      <section>
        <div className="column">
          <h3>{sectionTitle}</h3>
          <p>{link1}</p>
          <p>{link2}</p>
          <p>{link3}</p>
          <p>{link4}</p>
          <p>{link5}</p>
          <p>{link6}</p>
        </div>
        <div className="column">
          <h3>{sectionTitle2}</h3>
          <p>{link7}</p>
          <p>{link8}</p>
          <p>{link9}</p>
          <p>{link10}</p>
          <p>{link11}</p>
          <p>{link12}</p>
        </div>
        <div className="column">
          <h3>{sectionTitle3}</h3>
          <p>{link13}</p>
          <p>{link14}</p>
          <p>{link15}</p>
          <p>{link16}</p>
          <p>{link17}</p>
          <p>{link18}</p>
        </div>
        <div className="column">
          <h3>{sectionTitle4}</h3>
          <p>{link19}</p>
          <p>{link20}</p>
          <p>{link21}</p>
          <p>{link22}</p>
          <p>{link23}</p>
          <p>{link24}</p>
        </div>
        <div className="column">
          <h3>{sectionTitle5}</h3>
          <p>{link25}</p>
          <p>{link26}</p>
          <p>{link27}</p>
          <p>{link28}</p>
          <p>{link29}</p>
          <p>{link30}</p>
        </div>
        <div className="column">
          <h3>{sectionTitle6}</h3>
          <p>{link31}</p>
          <p>{link32}</p>
          <p>{link33}</p>
          <p>{link34}</p>
          <p>{link35}</p>
          <p>{link36}</p>
        </div>
      </section>
      <hr />
      <section className="bottom-section">
        <div className="row">
          <div className="options">
            <div>Guatemala | </div>
            <div>English | </div>
            <div>$ USD</div>
          </div>
          <div className="row-middle">
            <div className="social-icons">
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
            <div className="app-icons">
              <AppleIcon />
              <AndroidIcon />
            </div>
          </div>
          <div className="row-left">
            <SettingsIcon />
            Proudly Built in Detroit
          </div>
        </div>
        <div>
          <div className="bottom-row">
            <div>
              HELP | HOW IT WORKS | PRIVACY | TERMS | JOBS | CONTACT | PRODUCT
              SUGGESTION | PRESS | ACCESSIBILITY STATEMENT
              <div>
                EN &nbsp; IT &nbsp; DE &nbsp; FR &nbsp; ZH &nbsp; JA &nbsp;
                KOREAN
              </div>
            </div>
            <div>
              <small>©2021 StockX. All Rights Reserved.</small>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Foot;
