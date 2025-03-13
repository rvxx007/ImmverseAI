"use client";
import { createContext, useContext } from "react";
import u1 from "../../../public/u1.png"
import u2 from "../../../public/u2.png"
import u3 from "../../../public/u3.png"
import u4 from "../../../public/u4.png"
import hp1 from "../../../public/heroPoster.svg";
import hp2 from "../../../public/heroPoster1.svg";
import bimg from "../../../public/bannerIm.svg"
import cardImg1 from "../../../public/cardImg1.svg"
import cardImg2 from "../../../public/cardImg2.svg"
import cardImg3 from "../../../public/cardImg3.svg"
import cardImg4 from "../../../public/cardImg4.svg"
import climg1 from "../../../public/climg1.png"
import climg2 from "../../../public/climg2.png"
import climg3 from "../../../public/climg3.png"

const appData = {
    hero:{
      headTxt:"Let's Explore Three-Dimensional visual",
      subTxt:"With virtual technology you can see the digital world feel more real and you can play the game with a new style.",
      headTxt1:"New Experience In Playing Game",
      subTxt1:"You can try playing the game with a new style and of course a more real feel, like you are the main character in your game and adventure in this new digital world.",
      eTxt:"400k people online",
      ui:[u1,u2,u3,u4],
      hp:{hp1,hp2}
    },
    banner:{
      txt1:"Awesome experiences with",
      txt2:"virtual reality world",
      img:bimg
    },
    services:[
    {
      img:cardImg1,
      title:"HoloLens",
      desc:"HoloLens display information, blend with the real world , or even simulate a virtual world."
    },
    {
      img:cardImg2,
      title:"AIoT",
      desc:"AI and IoT are both emerging innovative technologies with a lot of potentials."
    },
    {
      img:cardImg3,
      title:"Metaverse",
      desc:"A Network of 3D virtual worlds focused on social connection."
    },
    {
      img:cardImg4,
      title:"TPCASTT",
      desc:"Method is great to start students reading and inferring with little assistance from the instructor"
    }
    
    ],
    testimonial:{
      headTxt:"What our clients say",
      subTxt:"See what our customer say about us. It really matter for us. How good or bad we will make ir for evaluation to make EhyalLive better.",
      tmUser:[
        {
          title:"starstar",
          ext:"star",
          subTxt:" know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!",
          name:"Denny Hilguston",
          username:"@denny.hill",
          img:climg1
        },
        {
          title:"starstar",
          ext:"star",
          subTxt:"VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
          name:"Vani Pandey",
          username:"@vani.pandey",
          img:climg2
        },
        {
          title:"starstar",
          ext:"star",
          subTxt:"I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
          name:"milly Singh",
          username:"@milly.singh",
          img:climg3
        },
        {
          title:"starstar",
          ext:"star",
          subTxt:"I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
          name:"milly Singh",
          username:"@milly.singh",
          img:climg3
        },
        {
          title:"starstar",
          ext:"star",
          subTxt:"I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
          name:"milly Singh",
          username:"@milly.singh",
          img:climg3
        },{
          title:"starstar",
          ext:"star",
          subTxt:"I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
          name:"milly Singh",
          username:"@milly.singh",
          img:climg3
        }
      ]
    }
    }

    const AppContext = createContext(appData);

    export const AppContextProvider = ({ children }) => {
        return (
            <AppContext.Provider value={appData}>
                {children}
            </AppContext.Provider>
        );
    };
    
    export const AppContextDataFun = () => useContext(AppContext);
    
    export default AppContext;
