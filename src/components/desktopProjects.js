import React, { useContext } from "react";
import { AppContext } from "../App.js";
const DesktopProjects = () => {
  const { data, loading } = useContext(AppContext);
  return loading ? (
    <div className="loading-rectangle">
      <h1 style={{ textCenter: true, color: "white" }}>Loading...</h1>
    </div>
  ) : (
    <div>
      <div className="rectangle-6 border-1px-dove-gray"></div>
      <div className="desktop-open-website-button-1 border-1px-dove-gray">
        <a href={data[0].web_url} target="_blank">
          <div className="website poppins-light-white-20px">website</div>
        </a>
      </div>
      <div
        className="portfolio-picture-1 border-1px-dove-gray"
        // backgroundImage={"../img/academa-1@1x.png"}
      >
        <img
          className="desktopchildren"
          src={"data:image/png;base64," + data[0].pic}
          alt="website tumbnail"
        />
      </div>
      <div className="description-1">{data[0].name}</div>
      <div className="lorem-ipsum-dolor-si-1">{data[0].web_description}</div>
      <div className="desktop-get-code-button-1">
        <div className="icon-feather-code">
          <img className="path-5" src="img/path-5-1@1x.png" />
          <img className="path-4" src="img/path-4-1@1x.png" />
        </div>
        <div className="code poppins-light-black-20px">code</div>
      </div>

      <div className="group-15 border-1px-dove-gray segoeui-regular-normal-black-20px">
        <div className="portfolio-picture border-1px-dove-gray">
          <img
            className="desktopchildren"
            src={"data:image/png;base64," + data[1].pic}
            alt="website tumbnail"
          />
        </div>
        <div className="description">{data[1].name}</div>
        <div className="lorem-ipsum-dolor-si">{data[1].web_description}</div>
        <div className="e-button-container">
          <div className="desktop-open-website-button border-1px-dove-gray">
            <a href={data[1].web_url} target="_blank">
              <div className="website poppins-light-white-20px">website</div>
            </a>
          </div>
          <div className="desktop-get-code-button">
            <div className="icon-feather-code">
              <img className="path-5-1" src="img/path-5-1@1x.png" />
              <img className="path-4-1" src="img/path-4-1@1x.png" />
            </div>
            <div className="code poppins-light-black-20px">code</div>
          </div>
        </div>
      </div>

      <div className="group-16 border-1px-dove-gray segoeui-regular-normal-black-20px">
        <div className="portfolio-picture border-1px-dove-gray">
          <img
            className="desktopchildren"
            src={"data:image/png;base64," + data[2].pic}
            alt="website tumbnail"
          />
        </div>
        <div className="description">{data[2].name}</div>
        <div className="lorem-ipsum-dolor-si">{data[2].web_description}</div>
        <div className="e-button-container">
          <div className="desktop-open-website-button border-1px-dove-gray">
            <a href={data[2].web_url} target="_blank">
              <div className="website poppins-light-white-20px">website</div>
            </a>
          </div>
          <div className="desktop-get-code-button">
            <div className="icon-feather-code">
              <img className="path-5-2" src="img/path-5-1@1x.png" />
              <img className="path-4-2" src="img/path-4-1@1x.png" />
            </div>
            <div className="code poppins-light-black-20px">code</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopProjects;
