export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <p class="headertekst">
                  "U brengt een schitterende voordracht. Vlot gebracht, zeer
                  volledig en op een aantrekkelijke en begrijpende manier.
                  Proficiat, top. Sedert jaar en dag is dit mijn stokpaardje en
                  volg ik al talrijke voordracht over “the future” in al zijn
                  aspecten. Meestal wil men te diep en te technisch worden, maar
                  deze was de meest toegankelijke die ik al heb bijgewoond."
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
