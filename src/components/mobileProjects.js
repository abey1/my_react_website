import React, { useContext } from "react";
import App, { AppContext } from "../App";
const MobileProjects = () => {
  const { data, loading } = useContext(AppContext);
  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div id="desktop-portfolio-background2" className="overlap-group14-1">
      <div className="group-20 border-1px-dove-gray">
        <div className="portfolio-picture-2 border-1px-dove-gray">
          <img
            className="children"
            src={"data:image/png;base64," + data[0].pic}
            alt="website tumbnail"
          />
        </div>
        <div className="description-2 segoeui-regular-normal-black-20px">
          {data[0].name}
        </div>
        <div className="lorem-ipsum-dolor-si-6 segoeui-regular-normal-black-20px">
          {data[0].web_description}
        </div>
        <div className="desktop-open-website-button-2 border-1px-dove-gray">
          <div className="website-1 poppins-light-white-20px">website</div>
        </div>
        <div className="desktop-get-code-button-2">
          <div className="icon-feather-code-1">
            <img className="path-5-3" src="img/path-5-1@1x.png" />
            <img className="path-4-3" src="img/path-4-1@1x.png" />
          </div>
          <div className="code-1 poppins-light-black-20px">code</div>
        </div>
      </div>
      <div className="group-2 border-1px-dove-gray">
        <div className="portfolio-picture-2 border-1px-dove-gray">
          <img
            className="children"
            src={"data:image/png;base64," + data[1].pic}
            alt="website tumbnail"
          />
        </div>
        <div className="description-2 segoeui-regular-normal-black-20px">
          {data[1].name}
        </div>
        <div className="lorem-ipsum-dolor-si-6 segoeui-regular-normal-black-20px">
          {data[1].web_description}
        </div>
        <div className="desktop-open-website-button-2 border-1px-dove-gray">
          <div className="website-1 poppins-light-white-20px">website</div>
        </div>
        <div className="desktop-get-code-button-2">
          <div className="icon-feather-code-1">
            <img className="path-5-3" src="img/path-5-1@1x.png" />
            <img className="path-4-3" src="img/path-4-1@1x.png" />
          </div>
          <div className="code-1 poppins-light-black-20px">code</div>
        </div>
      </div>
      <div className="group-2 border-1px-dove-gray">
        <div className="portfolio-picture-2 border-1px-dove-gray">
          <img
            className="children"
            src={"data:image/png;base64," + data[2].pic}
            alt="website tumbnail"
          />
        </div>
        <div className="description-2 segoeui-regular-normal-black-20px">
          {data[2].name}
        </div>
        <div className="lorem-ipsum-dolor-si-6 segoeui-regular-normal-black-20px">
          {data[2].web_description}
        </div>
        <div className="desktop-open-website-button-2 border-1px-dove-gray">
          <div className="website-1 poppins-light-white-20px">website</div>
        </div>
        <div className="desktop-get-code-button-2">
          <div className="icon-feather-code-1">
            <img className="path-5-3" src="img/path-5-1@1x.png" />
            <img className="path-4-3" src="img/path-4-1@1x.png" />
          </div>
          <div className="code-1 poppins-light-black-20px">code</div>
        </div>
      </div>
      <div className="component-23-2 border-1px-dove-gray">
        <div className="explore-more-1">Explore More</div>
      </div>
    </div>
  );
};

export default MobileProjects;
