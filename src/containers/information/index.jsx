import React, { useState, useEffect } from "react";
import avatar from "../../assets/img/chan-dung-edit.png";
import avatarIcon from "../../assets/img/avatar.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import { FaArrowCircleUp } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const Information = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div className="app">
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>

          <div className="intro-wrapper1">
            <div className="nav-wrapper">
              <div className="nav-wrapper-left__dots-wrapper">
                <div className="browser-dot dot-1"></div>
                <div className="browser-dot dot-2"></div>
                <div className="browser-dot dot-3"></div>
              </div>
            </div>

            <div className="information">
              <img src={avatar} alt="avatar" />
              <h2>Ahmed Abdelsalam Zaki Elenany</h2>

              <div className="social">
                <Link to="/profile">
                  <div className="icon">
                    <img src={avatarIcon} alt="website" />
                  </div>
                  <p>My Profile</p>
                  <div className=""></div>
                </Link>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.troycoffe.cf"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/domain--v1.png"
                      alt="website"
                    />
                  </div>
                  <p>TROY Website</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="mailto:troycoffe14@gmail.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/gmail-new.png"
                      alt="email"
                    />
                  </div>
                  <p>Email</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+201019955700"
                >
                  <div className="icon">
                    {/* <img
                      src="https://img.icons8.com/color/48/000000/egypt-circular.png"
                      alt="phoneegy"
                    /> */}
                    <img
                      src="https://img.icons8.com/ios/50/000000/apple-phone.png"
                      alt="phone-vodafone"
                    />
                  </div>
                  <p>Phone Vodafone</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+201226598444"
                >
                  <div className="icon">
                    {/* <img
                      src="https://img.icons8.com/color/48/000000/saudi-arabia.png"
                      alt="phone"
                    /> */}
                    <img
                      src="https://img.icons8.com/clouds/100/000000/apple-phone.png"
                      alt="phone"
                    />
                  </div>
                  <p>Orange</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/profile.php?id=100040683285701"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/dusk/64/000000/facebook-new--v2.png"
                      alt="facebook"
                    />
                  </div>
                  <p>Facebook</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noreferrer"
                  target="__blank"
                  href="https://www.messenger.com/t/100040683285701/?messaging_source%3Apages%message_shortlink"
                  // href="https://www.facebook.com/messages/t/100040683285701"
                  aria-label="Messenger"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/50/000000/facebook-messenger--v2.png"
                      alt="messenger"
                    />
                  </div>
                  <p>Messenger</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  // href="https://www.instagram.com/troy__coffee/"
                  href="https://instagram.com/troy__coffee/?utm_medium=copy_link"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/instagram-new--v3.png"
                      alt="instagram"
                    />
                  </div>
                  <p>Instagram</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a href="whatsapp://send?text=welcome-let-your-messange&phone=+201019955700">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/whatsapp.png"
                      alt="whatsapp"
                    />
                  </div>
                  <p>WhatsApp</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a href="whatsapp://send?text=welcome&phone=+201226598444">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/whatsapp.png"
                      alt="whatsapp"
                    />
                  </div>
                  <p>WhatsApp 2</p>
                  <div className=""></div>
                </a>
              </div>

              <Greeting />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Information;
