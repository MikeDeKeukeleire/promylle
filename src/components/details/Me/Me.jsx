export const Me = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/details/me.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Me, myself and my avatar</h2>
              <p>
                Heb je mijn avatar al ontmoet? Ik ben het, maar in een betere
                versie ?!
                <br />
                Dat zeg ik tenminste tegen mezelf. Mijn avatar kan alle dingen
                die ik niet kan, zoals vliegen of supersnel rennen. Het is net
                een digitale superheldenversie van mezelf. Maar laten we eerlijk
                zijn, het zijn gewoon een aantal pixels op een scherm. Mijn
                avatar kan misschien allerlei geweldige dingen doen, maar hij
                kan mijn was niet doen of een fatsoenlijke kop koffie zetten.
                Misschien zal mijn avatar dat op een dag zijn Ik kan al die
                dingen ook, maar voor nu is het gewoon een leuke manier om te
                doen alsof ik superkrachten heb."
                <br />
                Welkom aan alle avatars
              </p>
            </div>
            <a className="btn btn-custom btn-lg" href="/#contact">
              Boek nu!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
