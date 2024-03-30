import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="content">
        <h1>
          D<span className="dogs">o</span>g<span className="dogs">s</span>
        </h1>
      </div>
      <div className="logoDog">
        <img
          className="dog-img"
          src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-3d-dog-emoji-tounge-out-png-image_9190375.png"
          alt=""
        />
      </div>

      <div className="find-content">
        <h2 className="dogs-find">Find Your Perfect Dogs Here!</h2>
      </div>
      <div>
        <img className="running" src="http://www.dogsindia.com/03.gif" alt="" />
      </div>
    </div>
  );
};

export default Header;
