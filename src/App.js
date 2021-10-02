import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyJourney from './components/MyJourney';
import Contacts from './components/Contacts';
import Techs from './components/Techs';
import Accolades from './components/Accolades';

function App() {
  return (
    <>
    <Particles
      params={{
        particles:{
          number: {
            value: 25,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          line_linked:{
            shadow: {
              enable: true,
              color: "#916666",

            }
          },
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
              }
         }
      }}


      />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <MyJourney/>
    <Techs/>
    <Contacts/>

    </>
  );
}

export default App;
