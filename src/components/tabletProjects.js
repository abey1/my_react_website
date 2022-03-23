import React, { useContext } from "react";
import { AppContext } from "../App";

const TabletProjects = () => {
  const { data, loading } = useContext(AppContext);
  console.log("data = ", data, " and loading = ", loading);
  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div id="overlap-group18-2" className="overlap-group18-2">
      <div className="group-17 border-1px-dove-gray">
        <img
          className="portfolio-picture-3 border-1px-dove-gray"
          src={"data:image/png;base64," + data[0].pic}
          alt="website tumbnail"
        />
        <div className="description-3 segoeui-regular-normal-black-20px">
          {data[0].name}
        </div>
        <div className="overlap-group-8">
          <div className="desktop-open-website-button-3 border-1px-dove-gray">
            <a href={data[0].web_url} target="_blank">
              <div className="website-2 poppins-light-white-20px">website</div>
            </a>
          </div>
          <div className="lorem-ipsum-dolor-si-11 segoeui-regular-normal-black-20px">
            {data[0].web_description}
          </div>
        </div>
        <div className="desktop-get-code-button-3">
          <div className="icon-feather-code-2">
            <img className="path-5-4" src="img/path-5-1@1x.png" />
            <img className="path-4-4" src="img/path-4-1@1x.png" />
          </div>
          <div className="code-2 poppins-light-black-20px">code</div>
        </div>
      </div>
      <div className="group-container-1">
        <div className="group-18 border-1px-dove-gray">
          <img
            className="portfolio-picture-3 border-1px-dove-gray"
            src={"data:image/png;base64," + data[1].pic}
            alt="website tumbnail"
          />
          <div className="description-3 segoeui-regular-normal-black-20px">
            {data[1].name}
          </div>
          <div className="overlap-group-8">
            <div className="desktop-open-website-button-3 border-1px-dove-gray">
              <a href={data[1].web_url} target="_blank">
                <div className="website-2 poppins-light-white-20px">
                  website
                </div>
              </a>
            </div>
            <div className="lorem-ipsum-dolor-si-11 segoeui-regular-normal-black-20px">
              {data[1].web_description}
            </div>
          </div>
          <div className="desktop-get-code-button-3">
            <div className="icon-feather-code-2">
              <img className="path-5-4" src="img/path-5-1@1x.png" />
              <img className="path-4-4" src="img/path-4-1@1x.png" />
            </div>
            <div className="code-2 poppins-light-black-20px">code</div>
          </div>
        </div>
        <div className="overlap-group24 border-1px-dove-gray">
          <div className="explore-more-2 poppins-light-white-18px">
            Explore more
          </div>
        </div>
      </div>
      <div className="group-19 border-1px-dove-gray">
        <img
          className="portfolio-picture-3 border-1px-dove-gray"
          src={"data:image/png;base64," + data[2].pic}
          alt="website tumbnail"
        />
        <div className="description-3 segoeui-regular-normal-black-20px">
          {data[2].name}
        </div>
        <div className="overlap-group-8">
          <div className="desktop-open-website-button-3 border-1px-dove-gray">
            <a href={data[2].web_url} target="_blank">
              <div className="website-2 poppins-light-white-20px">website</div>
            </a>
          </div>
          <div className="lorem-ipsum-dolor-si-11 segoeui-regular-normal-black-20px">
            {data[2].web_description}
          </div>
        </div>
        <div className="desktop-get-code-button-3">
          <div className="icon-feather-code-2">
            <img className="path-5-4" src="img/path-5-1@1x.png" />
            <img className="path-4-4" src="img/path-4-1@1x.png" />
          </div>
          <div className="code-2 poppins-light-black-20px">code</div>
        </div>
      </div>
    </div>
  );
};

export default TabletProjects;
