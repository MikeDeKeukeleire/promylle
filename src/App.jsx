import { Navigation } from "./components/navigation";
import { Home } from "./components/home/home";
import { Routes, Route } from "react-router-dom";
import { Robots } from "./components/details/Robots/Robots";
import { Ai } from "./components/details/Ai/Ai";
import { Crypto } from "./components/details/Crypto/Crypto";
import { DrieDee } from "./components/details/DrieDee/DrieDee";
import { Eeuwige } from "./components/details/Eeuwige/Eeuwige";
import { Grootmoeder } from "./components/details/Grootmoeder/Grootmoeder";
import { Me } from "./components/details/Me/Me";
import { Metaverse } from "./components/details/Metaverse/Metaverse";
import { Vr } from "./components/details/Vr/Vr";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robots" element={<Robots />} />
        <Route path="/kunstmatige-intelligentie" element={<Ai />} />
        <Route path="/3dprinting" element={<DrieDee />} />
        <Route path="/het-eeuwige-leven-binnen-handbereik" element={<Eeuwige />} />
        <Route
          path="/technologie-op-grootmoeders-wijze"
          element={<Grootmoeder />}
        />
        <Route path="/me-myself-and-my-avatar" element={<Me />} />
        <Route path="/metaverse" element={<Metaverse />} />
        <Route path="/virtualreality" element={<Vr />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </>
  );
};

export default App;
