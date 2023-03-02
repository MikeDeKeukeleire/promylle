import { Header } from "../header";
import { About } from "../about";
import { Services } from "../services";
import { Contact } from "../contact";
import { Testimonials } from "../testimonials";
import JsonData from "../../data/data.json";
import { useState, useEffect } from "react";

export const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </>
  );
};
