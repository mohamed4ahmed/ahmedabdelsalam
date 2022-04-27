import React, { useEffect, useState } from "react";
import HomePageComponent from "../../components/homepage";
import nextId from "react-id-generator";
import "../information/styles.css";
import one from "../../assets/img/one.png";
import two from "../../assets/img/two.png";
import three from "../../assets/img/three.png";
import four from "../../assets/img/four.png";
import five from "../../assets/img/five.png";
import six from "../../assets/img/six.png";
import seven from "../../assets/img/seven.png";
import eight from "../../assets/img/eight.png";
import nine from "../../assets/img/nine.png";
// import quizAppImage from "../../assets/img/quizAppImage.jpg";
import ten from "../../assets/img/ten.png";
import eleven from "../../assets/img/eleven.png";
import twelve from "../../assets/img/twelve.png";
import Thirteen from "../../assets/img/Thirteen.png";
import Fourteen from "../../assets/img/Fourteen.png";
import fifteen from "../../assets/img/fifteen.png";
import Sixteen from "../../assets/img/Sixteen.png";
import Seventeen from "../../assets/img/Seventeen.png";
import eighteen from "../../assets/img/eighteen.png";
import Nineteen from "../../assets/img/Nineteen.png";
import twenty from "../../assets/img/twenty.png";
import twentyOne from "../../assets/img/twentyOne.png";
import twentyTwo from "../../assets/img/twentyTwo.png";
import twentyThree from "../../assets/img/twentyThree.png";
import twentyFour from "../../assets/img/twentyFour.png";
import twentyFive from "../../assets/img/twentyFive.png";
import twentySix from "../../assets/img/twentySix.png";
import twentySeven from "../../assets/img/twentySeven.png";
import twentyEight from "../../assets/img/twentyEight.png";
import twentyNine from "../../assets/img/twentyNine.png";
import Thirty from "../../assets/img/Thirty.png";
import ThirtyOne from "../../assets/img/ThirtyOne.png";
import ThirtyTwo from "../../assets/img/ThirtyTwo.png";
import ThirtyThree from "../../assets/img/ThirtyThree.png";
import ThirtyFour from "../../assets/img/ThirtyFour.png";
import ThirtyFive from "../../assets/img/ThirtyFive.png";
import Spinner from "../../components/Spinner";
import { FaArrowCircleUp } from "react-icons/fa";

// const getLanguagesIcons = () => {
//   var json = {
//     icons: [
//       {
//         id: 1,
//         alt: "HTML5",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
//       },
//       {
//         id: 2,
//         alt: "CSS3",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
//       },
//       {
//         id: 3,
//         alt: "JavaScript",
//         src: "https://img.icons8.com/dusk/64/000000/javascript-logo.png",
//       },
//       {
//         id: 4,
//         alt: "React",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
//       },
//       {
//         id: 5,
//         alt: "Redux",
//         src: "https://img.icons8.com/color/48/000000/redux.png",
//       },
//       {
//         id: 6,
//         alt: "NodeJS",
//         src: "https://img.icons8.com/color/48/000000/nodejs.png",
//       },
//       {
//         id: 7,
//         alt: "ExpressJS",
//         src: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png",
//       },
//       // {
//       // 	id: 8,
//       // 	alt: "Python",
//       // 	src: "https://img.icons8.com/color/48/000000/python.png",
//       // },
//       // {
//       // 	id: 9,
//       // 	alt: "SQL",
//       // 	src: "https://img.icons8.com/bubbles/50/000000/data-configuration.png",
//       // },
//       // {
//       // 	id: 10,
//       // 	alt: "MongoDB",
//       // 	src: "https://img.icons8.com/color/48/000000/mongodb.png",
//       // },
//       // {
//       // 	id: 11,
//       // 	alt: "PostgreSQL",
//       // 	src: "https://img.icons8.com/color/48/000000/postgreesql.png",
//       // },
//     ],
//   };
//   return json.icons;
// };

// const getToolsIcon = () => {
//   let json = {
//     icons: [
//       {
//         id: nextId(),
//         alt: "VScode",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
//       },
//       {
//         id: nextId(),
//         alt: "Git",
//         src: "https://img.icons8.com/color/48/000000/git.png",
//       },
//       {
//         id: nextId(),
//         alt: "Github",
//         src: "https://img.icons8.com/nolan/64/github.png",
//       },
//       {
//         id: nextId(),
//         alt: "Terminal",
//         src: "https://img.icons8.com/fluent/48/000000/console.png",
//       },
//       {
//         id: nextId(),
//         alt: "Katalon",
//         src: "https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2019/10/22154517/katalon_icon_color_normal.png",
//       },
//       {
//         id: nextId(),
//         alt: "Photoshop",
//         src: "https://img.icons8.com/fluent/50/000000/adobe-photoshop.png",
//       },
//       {
//         id: nextId(),
//         alt: "Premiere",
//         src: "https://img.icons8.com/color/48/000000/adobe-premiere-pro.png",
//       },
//       {
//         id: nextId(),
//         alt: "Trello",
//         src: "https://img.icons8.com/color/48/000000/trello.png",
//       },
//       {
//         id: nextId(),
//         alt: "Slack",
//         src: "https://img.icons8.com/color/48/000000/slack-new.png",
//       },
//     ],
//   };
//   return json.icons;
// };

const getSocialsIcon = () => {
  let json = {
    socials: [
      {
        id: nextId(),
        alt: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100040683285701",
        src: "https://img.icons8.com/dusk/64/000000/facebook-new--v2.png",
      },
      {
        id: nextId(),
        alt: "Instagram",
        link: "https://instagram.com/troy__coffee/?utm_medium=copy_link",
        src: "https://img.icons8.com/clouds/100/000000/instagram-new--v3.png",
      },

      {
        id: nextId(),
        alt: "WhatsApp",
        link: "whatsapp://send?text=welcome=+201019955700",
        src: "https://img.icons8.com/clouds/100/000000/whatsapp.png",
      },
    ],
  };
  return json.socials;
};

const getPosts = () => {
  let json = {
    posts: [
      {
        id: nextId(),
        // title: "طاولات",
        // description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

        imgSrc: one,
        imgAlt: "one-logo",
        // link: "https://www.instagram.com/p/CFovvpLAvYm/",
      },
      {
        id: nextId(),
        // title: "طاولات",
        // description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

        imgSrc: two,
        imgAlt: "two-logo",
        // link: "https://www.instagram.com/p/CFovvpLAvYm/",
      },
      {
        id: nextId(),
        // title: "وجهات المنيوم مع زجاج",
        // description: "تركيب وجهات المنيوم مع زجاج بجنوب الرياض",
        imgSrc: three,
        imgAlt: "three-logo",
        // link: "https://www.instagram.com/p/CFwngX2gFQ2/",
      },
      {
        id: nextId(),
        // title: "دربزينات",
        // description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",
        imgSrc: four,
        imgAlt: "four-logo",
        // link: "https://www.instagram.com/p/CKOz1M0g2ae/",
      },
      {
        id: nextId(),
        // title: "مستشفي اليابس بطريق مكه",
        // description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

        imgSrc: five,
        imgAlt: "five-logo",
        // link: "https://www.instagram.com/p/CJ6hNOjrpnh/",
      },
      {
        id: nextId(),
        // title: "وجهه حديد قص ليزر ارتفاع ٨ متر",
        // description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

        imgSrc: six,
        imgAlt: "six-logo",
        // link: "https://www.instagram.com/p/CQMdCirh-Fi/",
      },
      {
        id: nextId(),
        // title: "وجهات كلادنج بمعرض الصقور",
        // description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

        imgSrc: seven,
        imgAlt: "seven-logo",
        // link: "https://www.instagram.com/p/CJ6iNpvLmFc/",
      },
      {
        id: nextId(),
        // title: " استانلس ستيل",
        // description: "أعمال فبريكشن شغل استانلس ستيل",
        imgSrc: eight,
        imgAlt: "eight-logo",
        // link: "https://www.instagram.com/p/CMPYC87gMha/",
      },
      {
        id: nextId(),
        // title: "حديد قص ليزر",
        // description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

        imgSrc: nine,
        imgAlt: "nine-logo",
        // link: "https://www.instagram.com/p/CNO9cAHL4-D/",
      },
      {
        id: nextId(),
        // title: "أعمال فبريكشن",
        // description: "أفضل سعر لجوده عالميه لعشاق التميز 🌸",
        imgSrc: ten,
        imgAlt: "ten-logo",
        // link: "https://www.instagram.com/p/CMPslUUATKr/",
      },
      {
        id: nextId(),
        // title: "بارتشن او حمايات شبابيك",
        // description: "شكال مميزه تصلح لبارتشن او حمايات شبابيك 💝",
        imgSrc: eleven,
        imgAlt: "eleven-logo",
        // link: "https://www.instagram.com/p/CKOz9wCgBWD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twelve,
        imgAlt: "twelve-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: Thirteen,
        imgAlt: "Thirteen-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: Fourteen,
        imgAlt: "Fourteen-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: fifteen,
        imgAlt: "fifteen-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: Sixteen,
        imgAlt: "Sixteen-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: Seventeen,
        imgAlt: "Seventeen-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: eighteen,
        imgAlt: "eighteen-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: Nineteen,
        imgAlt: "Nineteen-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twenty,
        imgAlt: "twenty-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentyOne,
        imgAlt: "twentyOne-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentyTwo,
        imgAlt: "twentyTwo-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentyThree,
        imgAlt: "twentyThree-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentyFour,
        imgAlt: "twentyFour-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentyFive,
        imgAlt: "twentyFive-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentySix,
        imgAlt: "twentySix-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentySeven,
        imgAlt: "twentySeven-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentyEight,
        imgAlt: "twentyEight-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: twentyNine,
        imgAlt: "twentyNine-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: Thirty,
        imgAlt: "Thirty-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: ThirtyOne,
        imgAlt: "ThirtyOne-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: ThirtyTwo,
        imgAlt: "ThirtyTwo-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: ThirtyThree,
        imgAlt: "ThirtyThree-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: ThirtyFour,
        imgAlt: "ThirtyFour-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
      {
        id: nextId(),
        // title: "غرفه بالحديد والزجاج",
        // description: "غرفه بالحديد والزجاج بشمال الرياض",
        imgSrc: ThirtyFive,
        imgAlt: "ThirtyFive-logo",
        // link: "https://www.instagram.com/p/CNMpcx-HULD/",
      },
    ],
  };
  return json.posts;
};

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const socials = getSocialsIcon();
  // const languages = getLanguagesIcons();
  // const tools = getToolsIcon();
  const posts = getPosts();

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
    <div>
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

          <HomePageComponent
            socials={socials}
            // languages={languages}
            // tools={tools}
            posts={posts}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
