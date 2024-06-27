import Header from "components/Header";
import React, { useState } from "react";

import office from "../assets/stock office.jpg";
import Wave from "../assets/wave.png";
import one50 from "../assets/150x150.png";

import { HeadTitle } from "./HomeStyles.js";

import HTMLSvg from "../assets/html-5.svg";
import CSSSvg from "../assets/css-3.svg";
import JSSvg from "../assets/javascript.svg";
import CPlusPlusSvg from "../assets/c-plusplus.svg";
import PythonSvg from "../assets/python.svg";
import ReactSvg from "../assets/react.svg";
import JavaSvg from "../assets/java.svg";
import THREESvg from "../assets/threejs.svg";

import "./Home.css";

let altDesc = [
  {
    id: "HTML",
    title: "HTML, CSS, and JavaScript",
    text: "These three languages are the building blocks of the web. They are also the languages I use the most. HTML is used to create the structure of a webpage. CSS is used to style the webpage. JavaScript is used to make the webpage interactive.",
    years: 6,
  },
  {
    id: "PYTHON",
    title: "Python",
    text: "Python is a high-level programming language that is easy to learn and use. It is used for web development, data analysis, artificial intelligence, and more.",
    years: 4,
  },
  {
    id: "CPP",
    title: "Cpp",
    text: "C++ is a powerful programming language that is used to create high-performance applications. It is used in game development, system programming, and more.",
    years: 2,
  },
  {
    id: "JAVA",
    title: "Java",
    text: "Java is a popular programming language that is used to create desktop, web, and mobile applications. It is also used in game development and enterprise software.",
    years: 4,
  },
  {
    id: "REACT",
    title: "React",
    text: "React is a JavaScript library that is used to create user interfaces. It is used to build single-page applications, mobile apps, and more. This website was built using React aswell.",
    years: 2,
  },
  {
    id: "THREE",
    title: "Three.js",
    text: "Three.js is a JavaScript library that is used to create 3D graphics on the web. It is used to create interactive 3D animations, games, and more. I've made a few games and simulations using Three.js. Click on the Three.js icon to see some examples.",
    years: 1,
  },
];

const Home = () => {
  const [selectedAlt, setSelectedAlt] = useState("HTML");

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleSelect(e) {
    if (e.target.alt === undefined || e.target.alt === selectedAlt) return;
    else {
      let alts = document.querySelectorAll("img");
      alts.forEach((alt) => {
        alt.classList.remove("selected");
        alt.classList.remove("selected-three");
      });

      alts.forEach(async (alt) => {
        if (alt.alt === e.target.alt) {
          if (alt.alt === "HTML" || alt.alt === "CSS" || alt.alt === "JS") {
            // set all three alt to selected
            alts.forEach(async (alt) => {
              if (alt.alt === "HTML" || alt.alt === "CSS" || alt.alt === "JS") {
                alt.classList.add("selected");
                setSelectedAlt("HTML");
                document.querySelector(".alt").classList.remove("alt-slide-in");
                await wait(500);
                document.querySelector(".alt").classList.add("alt-slide-in");
              }
            });
          } else {
            if (alt.alt === "THREE") {
              alt.classList.add("selected", "selected-three");
            } else alt.classList.add("selected");
            setSelectedAlt(alt.alt);
            document.querySelector(".alt").classList.remove("alt-slide-in");
            await wait(500);
            document.querySelector(".alt").classList.add("alt-slide-in");
          }
          // startSorting();
        }
      });
    }
  }

  function showLang(selectedAlt) {
    let alt = altDesc.find((desc) => desc.id === selectedAlt);

    return (
      <div className="alt">
        <h2>
          {alt.title}: {alt.years} {alt.years > 1 ? "years" : "year"}
        </h2>
        <p>{alt.text}</p>
      </div>
    );
  }

  // let lorems = [
  //   {
  //     id: 2,
  //     text: "Esse pariatur do qui commodo qui cupidatat. Eiusmod in duis quis est qui deserunt est et consectetur aliqua irure ea ut. Fugiat labore veniam sint dolore magna eiusmod culpa nulla incididunt proident ex pariatur est cupidatat. Adipisicing quis qui cillum ut id elit enim. Magna ea ullamco eiusmod enim sunt incididunt reprehenderit velit excepteur eu.",
  //   },
  //   {
  //     id: 3,
  //     text: "Incididunt pariatur dolore laboris Lorem dolore fugiat. Nostrud nulla minim id laborum cillum eu ipsum aliqua magna aute enim sit. Nisi eiusmod enim pariatur commodo esse duis ex magna non exercitation laboris elit officia. Do minim ut incididunt eiusmod eu quis irure. Aliqua magna elit ad magna culpa enim ullamco consectetur culpa voluptate incididunt consectetur ea anim.",
  //   },
  //   {
  //     id: 4,
  //     text: "Sunt proident incididunt culpa anim commodo laboris minim magna tempor ullamco. Duis nostrud nulla minim magna deserunt sunt laborum officia ea reprehenderit quis et commodo. Do et velit sint pariatur ullamco consectetur velit anim minim esse incididunt est ullamco quis.",
  //   },
  //   {
  //     id: 5,
  //     text: "Ea sit consectetur cillum ipsum pariatur adipisicing sunt mollit voluptate sunt. Voluptate esse ullamco est et voluptate. Cillum consectetur ad quis esse est adipisicing id. Culpa magna cillum minim nulla qui nisi fugiat mollit consectetur sunt cillum laborum nisi consectetur.",
  //   },
  //   {
  //     id: 6,
  //     text: "Proident adipisicing est ex aliquip nostrud. Voluptate aliqua reprehenderit pariatur eu aliquip id ex quis enim incididunt. Sunt ex nostrud irure pariatur sunt enim officia mollit adipisicing proident eiusmod pariatur.",
  //   },
  //   {
  //     id: 7,
  //     text: "Ex enim in proident sunt proident cupidatat est est nisi nostrud commodo voluptate qui. Nostrud culpa exercitation sit elit consequat sit cillum elit. Et deserunt adipisicing est ex minim sit magna eiusmod consectetur deserunt.",
  //   },
  //   {
  //     id: 8,
  //     text: "Officia reprehenderit exercitation ex mollit sint laborum ea tempor. Nostrud amet nisi ut labore occaecat consequat pariatur magna veniam proident ullamco. Non sit veniam sunt dolor excepteur.",
  //   },
  //   {
  //     id: 9,
  //     text: "Ad nostrud deserunt nisi exercitation cillum in reprehenderit veniam officia cupidatat. Consectetur magna adipisicing est nulla incididunt aliquip fugiat aute consectetur. Velit consequat elit dolore commodo dolor cillum pariatur et. Lorem esse velit qui in sint. Aute dolor anim esse reprehenderit nulla in Lorem ullamco non.",
  //   },
  //   {
  //     id: 10,
  //     text: "Pariatur veniam aliqua incididunt nostrud dolore esse aliquip commodo magna minim velit eu. Consectetur eu dolor et cupidatat. Ad quis Lorem laboris cupidatat. Incididunt dolore labore ex nostrud consectetur dolor mollit proident veniam fugiat nostrud esse ipsum. Dolor enim eu nostrud dolor sunt ut culpa. Dolor anim veniam aliquip laboris laboris id. Excepteur adipisicing veniam adipisicing officia ea cillum minim.",
  //   },
  //   {
  //     id: 11,
  //     text: "Fugiat laboris laborum commodo qui ea. Lorem anim duis enim ullamco proident duis deserunt amet est magna ad duis. Consequat occaecat ullamco nisi consectetur aliqua esse eu dolor ea excepteur et ad enim. Do ut incididunt labore magna ad aute anim elit ut consequat. Occaecat sit laboris cillum aliquip exercitation fugiat mollit esse sunt enim cupidatat magna ad.",
  //   },
  // ];

  // function randomLorems(num) {
  //   let randomLorems = [];
  //   let randomNums = [];
  //   let i = 0;
  //   while (i < num) {
  //     let randomNum = Math.floor(Math.random() * lorems.length);
  //     if (!randomNums.includes(randomNum)) {
  //       randomLorems.push(lorems[randomNum]);
  //       randomNums.push(randomNum);
  //       i++;
  //     }
  //   }
  //   return randomLorems.map((lorem) => {
  //     return (
  //       <div key={lorem.id} id={lorem.id} className="lorem">
  //         <p>{lorem.text}</p>
  //       </div>
  //     );
  //   });
  // }

  // function handleInsert(alt) {
  //   let altDesc = [
  //     {
  //       id: "HTML",
  //       text: "These three languages are the building blocks of the web. They are also the languages I use the most. HTML is used to create the structure of a webpage. CSS is used to style the webpage. JavaScript is used to make the webpage interactive.",
  //     },
  //     {
  //       id: "PYTHON",
  //       text: "Python is a high-level programming language that is easy to learn and use. It is used for web development, data analysis, artificial intelligence, and more.",
  //     },
  //     {
  //       id: "CPP",
  //       text: "C++ is a powerful programming language that is used to create high-performance applications. It is used in game development, system programming, and more.",
  //     },
  //     {
  //       id: "JAVA",
  //       text: "Java is a popular programming language that is used to create desktop, web, and mobile applications. It is also used in game development and enterprise software.",
  //     },
  //     {
  //       id: "REACT",
  //       text: "React is a JavaScript library that is used to create user interfaces. It is used to build single-page applications, mobile apps, and more. This website was built using React aswell.",
  //     },
  //     {
  //       id: "THREE",
  //       text: "Three.js is a JavaScript library that is used to create 3D graphics on the web. It is used to create interactive 3D animations, games, and more. I've made a few games and simulations using Three.js. Click on the Three.js icon to see some examples.",
  //     },
  //   ];

  //   let randomLoremsArr = randomLorems(10);
  //   // random but greater than 4
  //   let randomIndex = Math.floor(Math.random() * 6) + 4;
  //   randomLoremsArr.splice(
  //     randomIndex,
  //     0,
  //     <div key={1} id={1} className="lorem">
  //       <p>{altDesc.find((desc) => desc.id === alt).text}</p>
  //     </div>
  //   );

  //   return randomLoremsArr;
  // }

  // async function startSorting() {
  //   let container = document.querySelector(".description");
  //   let lorem = document.getElementById("1");
  //   // index of lorem in the list
  //   let index = Array.from(container.childNodes).indexOf(lorem);
  //   // find where it is in the array and then over an interval of one move per 100ms, move it one by one to the beggining
  //   let interval = setInterval(async () => {
  //     if (index === 0) {
  //       clearInterval(interval);
  //       await wait(500);
  //       lorem.classList.add("grow");
  //       // remove all other lorems
  //       let lorems = document.querySelectorAll(".lorem");
  //       lorems.forEach((lorem) => {
  //         if (lorem.id !== "1") {
  //           lorem.remove();
  //         }
  //       });
  //     }
  //     container.insertBefore(lorem, container.childNodes[index]);
  //     index--;
  //   }, 500);
  // }

  return (
    <div>
      <Header />
      {/* <img alt="office" src={Image} style={{width: "100%"}} /> */}
      <div className="container-1">
        <div className="headTitle">
          <div>
            <img alt="150" src={one50} className="headshot" />
          </div>
          <div className="me">
            <h2
              style={{
                fontSize: "2rem",
                wordWrap: "break-word",
                maxWidth: "40vw",
              }}
            >
              Hello I'm Joseph Jazwinski
            </h2>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="container-2">
          <div className="icons">
            <div className="tooltip" onClick={handleSelect}>
              <img src={HTMLSvg} alt="HTML" />
              <span className="tooltiptext">HTML</span>
            </div>
            <div className="tooltip" onClick={handleSelect}>
              <img src={CSSSvg} alt="CSS" />
              <span className="tooltiptext">CSS</span>
            </div>
            <div className="tooltip" onClick={handleSelect}>
              <img src={JSSvg} alt="JS" />
              <span className="tooltiptext">JavaScript</span>
            </div>
            <div className="tooltip" onClick={handleSelect}>
              <img src={THREESvg} alt="THREE" className="three" />
              <span className="tooltiptext">Three.js</span>
            </div>
            <div className="tooltip" onClick={handleSelect}>
              <img src={CPlusPlusSvg} alt="CPP" />
              <span className="tooltiptext">C++</span>
            </div>
            <div className="tooltip" onClick={handleSelect}>
              <img src={PythonSvg} alt="PYTHON" />
              <span className="tooltiptext">Python</span>
            </div>
            <div className="tooltip" onClick={handleSelect}>
              <img src={ReactSvg} alt="REACT" />
              <span className="tooltiptext">React</span>
            </div>
            <div className="tooltip" onClick={handleSelect}>
              <img src={JavaSvg} alt="JAVA" />
              <span className="tooltiptext">Java</span>
            </div>
          </div>

          {/* <div className="services">
          <h2>Services</h2>
          <p>
            I can create and maintain websites for you or your business. I can
            also help you with any technical issues you may have. I am available
            for hire as a full-time employee, part-time employee, or as a
            contractor.
          </p>
        </div> */}
          {/* <div className="icons">import svg</div> */}
        </div>
        <div className="description">{showLang(selectedAlt)}</div>
      </div>
    </div>
  );
};

export default Home;
