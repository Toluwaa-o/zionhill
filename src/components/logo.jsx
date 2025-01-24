import React, { memo, Fragment } from "react";

// react-router
import { Link } from "react-router-dom";

// img
import img1 from "/assets/images/ZTV.png";
import hostar from "/assets/images/logo-hotstar.webp";
import prime from "/assets/images/logo-prime.webp";
import hulu from "/assets/images/logo-hulu.webp";

const Logo = memo(() => {
  return (
    <Fragment>
      <div className="logo-default">
        <Link className="navbar-brand text-primary" to="/home">
          <img
            className="img-fluid logo"
            src={img1}
            loading="lazy"
            alt="zionhill tv"
          />
        </Link>
      </div>
      <div className="logo-hotstar">
        <Link className="navbar-brand text-primary" to="/home">
          <img
            className="img-fluid logo"
            src={hostar}
            loading="lazy"
            alt="zionhill tv"
          />
        </Link>
      </div>
      <div className="logo-prime">
        <Link className="navbar-brand text-primary" to="/home">
          <img
            className="img-fluid logo"
            src={prime}
            loading="lazy"
            alt="zionhill tv"
          />
        </Link>
      </div>
      <div className="logo-hulu">
        <Link className="navbar-brand text-primary" to="/home">
          <img
            className="img-fluid logo"
            src={hulu}
            loading="lazy"
            alt="zionhill tv"
          />
        </Link>
      </div>
    </Fragment>
  );
});

Logo.displayName = "Logo";
export default Logo;
