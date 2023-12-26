import Blog from "../blog/Blog";
import Landing from "../landing/Landing";
import News from "../news/News";
import "./home.scss";

function Header() {
  return (
    <>
      <section>
        <Landing />
        <Blog />
        <News />
      </section>
    </>
  );
}

export default Header;
