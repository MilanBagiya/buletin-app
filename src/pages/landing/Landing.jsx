import "./landing.scss";

function Landing() {
  return (
    <section>
      <div className="app-landing">
        <div>
          <span className="landing-details text-sm">WELCOME TO BULETIN</span>
          <div className="landing-details text-md">
            Craft narratives that ignite{" "}
            <span className="text-danger">inspiration</span>,<br />
            <span className="text-danger">knowledge</span>, and
            <span className="text-danger"> entertainment</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
