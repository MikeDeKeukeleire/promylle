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
} from "react-icons/fa";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Sessies</h2>
          <p>
            Een humoristische ethische realistische en futuristische kijk op de
            toekomst
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className="fa">
              <FaRobot />
            </i>
            <div className="service-desc">
              <h3>Robots</h3>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa">
              <FaBlind />
            </i>
            <div className="service-desc">
              <h3>Technologie op grootmoeders wijze</h3>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa">
              <FaCalendarAlt />
            </i>
            <div className="service-desc">
              <h3>Het eeuwige leven binnen handbereik</h3>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa">
              <FaBrain />
            </i>
            <div className="service-desc">
              <h3>Kunstmatige intelligentie</h3>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa">
              <FaSmile />
            </i>
            <div className="service-desc">
              <h3>Me, myself and my avatar</h3>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa">
              <FaBitcoin />
            </i>
            <div className="service-desc">
              <h3>Cryptomunten en bitcoins</h3>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa">
              <FaRegObjectGroup />
            </i>
            <div className="service-desc">
              <h3>3D printing</h3>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa">
              <FaStreetView />
            </i>
            <div className="service-desc">
              <h3>Virtual en Augmented reality</h3>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa">
              <FaInternetExplorer />
            </i>
            <div className="service-desc">
              <h3>Web3 en de Metaverse</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
