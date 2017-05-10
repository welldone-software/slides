import React from "react";
import {Deck, Slide, Text, Image} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/styles.css");

const images = {
  welldone: require("../assets/welldone.png"),
  powtoon: require("../assets/powtoon.png"),
  kaymera: require("../assets/keymera.png"),
  aditor: require("../assets/aditor.png"),
  data2life: require("../assets/data2life3.png"),
  outlookplugin: require("../assets/outlookplugin.png"),
  jivry: require("../assets/jivry.png"),
  keshetpro: require("../assets/keshetpro.jpg"),
  malam: require("../assets/malam.png"),
  seculert: require("../assets/seculert.png"),
  xmcyber: require("../assets/xmcyber.png"),
  xmpie: require("../assets/xmpie.png")
};

preloader(images);

const slides = [
  {
    company: "Powtoon",
    image: images.powtoon,
    title: "Animated Videos & Presentations Editor",
    text: "Welldone crate from scratch an architecture and developed the "
  },
  {
    company: "xmcyber",
    image: images.xmcyber,
    title: "xmcyber",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "Kaymera",
    image: images.kaymera,
    title: "Backend",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "Jivry",
    image: images.jivry,
    title: "jivry",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "Malam",
    image: images.malam,
    title: "malam",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "Seculert",
    image: images.seculert,
    title: "seculert",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "Keshset",
    image: images.keshetpro,
    title: "keshetpro",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "Aditor",
    image: images.aditor,
    title: "Backend",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "Data2Life",
    image: images.data2life,
    title: "Backend",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "harmon.ie",
    image: images.outlookplugin,
    title: "Outlook Add-In",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  },
  {
    company: "xmpie",
    image: images.xmpie,
    title: "xmpie",
    text: "The client was built using ReactJS, redux and ES2015. Backend developed using .NET WebApi and is cloud based with NoSQL and caching as service."
  }
];


const companyFontSize = 28
const productFontSize = 56
const textFontSize = 22

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#6DBBF2",
    quartenary: "#CECECE",
    fifth: "#ef114c",
    sixth: "#979fa9",
    grayBackground: "#f0f4f7"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
          <Slide transition={["zoom"]} bgColor="grayBackground">
            <div className="columns-layout intro">
              <div className="image-wrapper">
                <Image src={images.welldone} width="100%" height="100%"/>
              </div>
              <div className="info">
                <Text textSize={companyFontSize} lineHeight={1} caps textColor="fifth" textAlign="left">Welldone Software</Text>
                <Text textSize={productFontSize} lineHeight={1} textColor="secondary" textAlign="left">Latest work showcase</Text>
                <Text textSize={textFontSize} lineHeight={2} textColor="sixth" textAlign="left">React, ReactNative, Ng2, Node, .NET</Text>
              </div>
            </div>
          </Slide>
          {
            slides.map((slide, index) => (
              <Slide key={`slide-${index}`} transition={["zoom"]} bgColor="grayBackground">
                <div className="columns-layout">
                  <div className="image-wrapper with-shadow">
                    <Image src={slide.image} width="100%" height="100%"/>
                  </div>
                  <div className="info">
                    <Text textSize={companyFontSize} lineHeight={1} caps textColor="fifth" textAlign="left">{slide.company}</Text>
                    <Text textSize={productFontSize} lineHeight={1} textColor="secondary" textAlign="left">{slide.title}</Text>
                    <Text textSize={textFontSize} lineHeight={2} textColor="sixth" textAlign="left">{slide.text}</Text>
                  </div>
                </div>
              </Slide>
            ))
          }
        </Deck>
        <div className="static-header"></div>
      </div>
    );
  }
}
