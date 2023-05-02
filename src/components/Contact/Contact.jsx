import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-contact">
          {/* left-side */}
          <div className="flexColStart c-left">
            <span className="orangeText">Our Contact</span>
            <span className="primaryText">Easy to Contact us</span>
            <span className="secondaryText">
              We always ready to help by providing the best service belive a
              good blace to live can make your life better
            </span>
            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexStart row">
                {/* first mode */}
                <div className="flexColStart  mode">
                  <div className="flexCenter">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>Call</span>
                      <span>021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
                {/* second mode */}
                <div className="flexColStart  mode">
                  <div className="flexCenter">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>Chat</span>
                      <span>021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Now</div>
                </div>
              </div>

              {/* second row */}
              <div className="flexStart row">
                {/* third mode */}
                <div className="flexColStart  mode">
                  <div className="flexCenter">
                    <div className="flexCenter icon">
                      <  BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>Video Call</span>
                      <span>021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>
                {/* fourth mode */}
                <div className="flexColStart  mode">
                  <div className="flexCenter">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>Message</span>
                      <span>021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button"><a href="messageto:8861938778">Message Now</a> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
