import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import { Testimonials } from "./components/testimonials";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Robots } from "./components/details/Robots";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Navigation />
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Testimonials data={landingPageData.Testimonials} />
            <Contact data={landingPageData.Contact} />
          </Route>
          <Route path="/robots">
            <Navigation />
            <Robots />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
