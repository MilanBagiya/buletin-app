import React from "react";
import "./footer.scss";

function Footer() {
  const footerLink = [
    {
      title: "Buisness",
      sublinks: ["Startup", "Employee", "Success", "Videos", "Markets"],
    },
    {
      title: "Technology",
      sublinks: [
        "Innovate",
        "Gadget",
        "Innovative cities",
        "Upstairs",
        "Future Tech",
      ],
    },
    {
      title: "Travel",
      sublinks: ["Startup", "Employee", "Success", "Videos", "Markets"],
    },
    {
      title: "Sports",
      sublinks: ["Startup", "Employee", "Success", "Videos", "Markets"],
    },
    {
      title: "Entertainment",
      sublinks: ["Startup", "Employee", "Success", "Videos", "Markets"],
    },
    {
      title: "Features",
      sublinks: [
        "Innovate",
        "Gadget",
        "Innovative cities",
        "Upstairs",
        "Future Tech",
      ],
    },
    {
      title: "Weather",
      sublinks: ["Startup", "Employee", "Success", "Videos", "Markets"],
    },
    {
      title: "More",
      sublinks: ["Startup", "Employee", "Success", "Videos", "Markets"],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <section className="subscribe-section">
        <div className="app-footer-landing">
          <div className="row">
            <div className="col-4">
              <span className="landing-details text-sm">GET FIRST UPDATE</span>
              <div className="landing-details text-md">
                Get the news in front line by{" "}
                <span className="text-danger">Subscribe</span> our latest
                updates
              </div>
            </div>
            <div className="col-8 d-flex justify-content-end align-items-center">
              <input
                type="text"
                className="custom-input"
                placeholder="Your Email"
              />
              <button className="custom-button">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bulletin-section my-4">
        <div className="row">
          <div className="col-4 d-flex flex-column justify-content-between mt-4">
            <div>
              <div className="app-heading">
                <span>Buletin</span>
              </div>

              <div className="footer-text">
                Craft narratives that ignite inspiration, knowledge, and
                environment.
              </div>

              <div className="footer-text d-flex">
                <div className="circle">
                  <div className="icon">
                    <i className="bi bi-instagram"></i>
                  </div>
                </div>
                <div className="circle">
                  <div className="icon">
                    <i className="bi bi-facebook"></i>
                  </div>
                </div>
                <div className="circle">
                  <div className="icon">
                    <i className="bi bi-linkedin"></i>
                  </div>
                </div>
                <div className="circle">
                  <div className="icon">
                    <i className="bi bi-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="footer-text">
                <p>Copyright &copy; {currentYear} Buletin.</p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              {footerLink.map((item, index) => (
                <div key={index} className="col-3 py-2">
                  <div className="footer-link">{item.title}</div>
                  {item.sublinks.map((sublink, subIndex) => (
                    <div key={subIndex} className="footer-title">
                      {sublink}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
