import React from "react";
import "./header.scss";

const AppHeader = () => {
  const avtarUrl = `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww`;

  return (
    <header>
      <nav className="app-header d-flex">
        <div className="d-flex align-items-center">
          <div className="app-heading">
            <span>Buletin</span>
          </div>
          <div className="vertical-bar"></div>
          <div className="d-flex align-items-center">
            <span className="app-links">Stories</span>
            <span className="app-links">Creator</span>
            <span className="app-links">Community</span>
            <span className="app-links">Subscribe</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-pencil-square"></i>
          <span className="app-links">Write</span>
          <i className="bi bi-bell"></i>
          <div className="avatar">
            <img src={avtarUrl} alt="Avatar" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
