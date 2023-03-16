import {
  FaRobot,
  FaBlind,
  FaCalendarAlt,
  FaBrain,
  FaSmile,
  FaBitcoin,
  FaRegObjectGroup,
  FaStreetView,
  FaInternetExplorer,
  FaGlobe,
} from "react-icons/fa";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Sessies</h2>
          <p>
            Een realistische futuristische ethische en humoristische kijk op de
            toekomst
          </p>
        </div>
        <div className="row">
          <a href="/metaverse">
            <div className="col-md-4">
              <i className="fa">
                <FaGlobe />
              </i>
              <div className="service-desc">
                <h3>Metaverse</h3>
              </div>
            </div>
          </a>
          <a href="/technologie-op-grootmoeders-wijze">
            <div className="col-md-4">
              <i className="fa">
                <FaBlind />
              </i>
              <div className="service-desc">
                <h3>Technologie op grootmoeders wijze</h3>
              </div>
            </div>
          </a>
          <a href="/het-eeuwige-leven-binnen-handbereik">
            <div className="col-md-4">
              <i className="fa">
                <FaCalendarAlt />
              </i>
              <div className="service-desc">
                <h3>Het eeuwige leven binnen handbereik</h3>
              </div>
            </div>
          </a>
          <a href="/kunstmatige-intelligentie">
            <div className="col-md-4">
              <i className="fa">
                <FaBrain />
              </i>
              <div className="service-desc">
                <h3>Kunstmatige intelligentie</h3>
              </div>
            </div>
          </a>
          <a href="/me-myself-and-my-avatar">
            <div className="col-md-4">
              <i className="fa">
                <FaSmile />
              </i>
              <div className="service-desc">
                <h3>Me, myself and my avatar</h3>
              </div>
            </div>
          </a>
          <a href="/crypto">
            <div className="col-md-4">
              <i className="fa">
                <FaBitcoin />
              </i>
              <div className="service-desc">
                <h3>Cryptomunten en bitcoins</h3>
              </div>
            </div>
          </a>
          <a href="/3dprinting">
            <div className="col-md-4">
              <i className="fa">
                <FaRegObjectGroup />
              </i>
              <div className="service-desc">
                <h3>3D printing</h3>
              </div>
            </div>
          </a>
          <a href="/virtualreality">
            <div className="col-md-4">
              <i className="fa">
                <FaStreetView />
              </i>
              <div className="service-desc">
                <h3>Virtual en Augmented reality</h3>
              </div>
            </div>
          </a>
          <a href="/robots">
            <div className="col-md-4">
              <i className="fa">
                <FaRobot />
              </i>
              <div className="service-desc">
                <h3>Robots</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
