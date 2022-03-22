import React, { useContext } from "react";
import { AppContext } from "../App";

const MobileMenu = () => {
  const { menuOpened, toggleMenu } = useContext(AppContext);

  return (
    <div className="phone-menu border-1px-dove-gray">
      <a
        href="#phone-hero-background"
        className="align-self-flex-start"
        onClick={() => toggleMenu(menuOpened)}
      >
        <div className="tablet-home-menu-item">
          <img className="icon-home" src="img/home-icon-1@1x.png" />
          <div className="place-3 poppins-normal-black-25px">Home</div>
        </div>
      </a>
      <a
        href="#desktop-portfolio-background2"
        onClick={() => toggleMenu(menuOpened)}
      >
        <div className="tablet-portfolio-menu-item">
          <img className="portfolio-icon" src="img/portfolio-icon-1@1x.png" />
          <div className="portfolio-2 poppins-normal-black-25px">Portfolio</div>
        </div>
      </a>
      <a href="#work-plan-bg" onClick={() => toggleMenu(menuOpened)}>
        <div className="tablet-service-menu-item">
          <img className="service-icon" src="img/service-icon-1@1x.png" />
          <div className="services-1 poppins-normal-black-25px">Services</div>
        </div>
      </a>
    </div>
  );
};

export default MobileMenu;
