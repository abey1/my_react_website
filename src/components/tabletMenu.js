import React, { useContext } from "react";
import { AppContext } from "../App";

const TabletMenu = () => {
  const { menuOpened, toggleMenu } = useContext(AppContext);

  return (
    <div className="tablet-menu border-1px-dove-gray">
      <a
        href="#tablet-hero-background"
        className="align-self-flex-start"
        onClick={() => toggleMenu(menuOpened)}
      >
        <div className="tablet-home-menu-item-1">
          <img className="icon-home-1" src="img/home-icon-1@1x.png" />
          <div className="place-7 poppins-normal-black-25px">Home</div>
        </div>
      </a>
      <a
        href="#desktop-portfolio-background1"
        onClick={() => toggleMenu(menuOpened)}
      >
        <div className="tablet-portfolio-menu-item-1">
          <img className="portfolio-icon-1" src="img/portfolio-icon-1@1x.png" />
          <div className="portfolio-4 poppins-normal-black-25px">Portfolio</div>
        </div>
      </a>
      <a href="#software-delivery-plan1" onClick={() => toggleMenu(menuOpened)}>
        <div className="tablet-service-menu-item-1">
          <img className="service-icon-1" src="img/service-icon-1@1x.png" />
          <div className="services-3 poppins-normal-black-25px">Services</div>
        </div>
      </a>
    </div>
  );
};

export default TabletMenu;
