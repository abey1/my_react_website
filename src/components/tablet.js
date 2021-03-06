import React, { useContext } from "react";
import TabletProjects from "./tabletProjects";
import TabletMenu from "./tabletMenu";
import TabletContactMe from "./tabletContactMe";
import { AppContext } from "../App";
const Tablet = () => {
  const { menuOpened, toggleMenu } = useContext(AppContext);

  return (
    <div className="container-center-horizontal">
      <div className="tablet screen">
        <div className="overlap-group-container-5">
          <div className="overlap-group23">
            <div className="overlap-group1-5">
              <div className="overlap-group22">
                <div className="i-develop-webpages-2">I Develop Webpages</div>
                {menuOpened && <TabletMenu />}
              </div>
              <a href="#tablet-hero-background">
                <div className="tablet-logo">
                  <div className="overlap-group-10">
                    <div className="a-4">A</div>
                    <div className="b-4">B</div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="tablet-menu-1"
              onClick={() => toggleMenu(menuOpened)}
            >
              <img className="path-2-1" src="img/path-1-1@1x.png" />
              <img className="path-1" src="img/path-1-1@1x.png" />
              <img className="path-1" src="img/path-1-1@1x.png" />
            </div>
          </div>
          <div className="overlap-group21">
            <img
              className="tablet-hero-image"
              src="img/tablet-hero-image@1x.png"
            />
            <div className="if-you-need-a-profes-2 poppins-light-white-20px">
              if you need a professional web site developed for your business it
              is me you should contact. Not only I can design an eye catching
              web page but also assist you in hosting it online and attract
              customers to including online payment.
            </div>
            <a href="#contact-me1">
              <div className="tablet-contact-me-button border-1px-dove-gray">
                <div className="contact-me-7 poppins-light-white-18px">
                  Contact me
                </div>
              </div>
            </a>
            <div className="tablet-resume-button">
              <img className="resume-icon-2" src="img/resume-icon-1@1x.png" />
              <div className="resume-2">Resume</div>
            </div>
          </div>
        </div>
        <div className="overlap-group17-2 poppins-normal-black-25px">
          <div className="some-of-the-tools-i-use-2">
            some of the tools I use
          </div>
          <div className="front-end-2">front end</div>
          <div className="tablet-container">
            <a href="https://reactjs.org/" target="_blank">
              <div className="tablet-react-tool">
                <img className="react-icon-2" src="img/react-icon-1@1x.png" />
                <div className="group-13">
                  <div className="react-2 poppins-normal-black-25px">React</div>
                </div>
              </div>
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              className="align-self-flex-end"
            >
              <div className="tablet-javascript-tool">
                <img
                  className="javascript-icon-2"
                  src="img/javascript-icon-1@1x.png"
                />
                <div className="java-script-2 poppins-normal-black-25px">
                  JavaScript
                </div>
              </div>
            </a>
            <a href="https://www.adobe.com/products/xd.html" target="_blank">
              <div className="tablet-adobexd-tool">
                <img className="adoblexd-icon" src="img/adobexd-icon@1x.png" />
                <div className="adobe-xd-2 poppins-normal-black-25px">
                  Adobe XD
                </div>
              </div>
            </a>
            <a href="https://html.com/" target="_blank">
              <div className="tablet-html5-tool">
                <img className="html5-icon-2" src="img/html5-icon-1@1x.png" />
                <div className="html5-2 poppins-normal-black-25px">HTML5</div>
              </div>
            </a>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank"
            >
              <div className="tablet-css-tool">
                <img className="css3-icon-2" src="img/css3-icon-1@1x.png" />
                <div className="css3-2 poppins-normal-black-25px">CSS3</div>
              </div>
            </a>
          </div>
          <div className="back-end-2">back end</div>
          <div className="tablet-container-1">
            <a href="https://www.php.net/" target="_blank">
              <div className="tablet-php-tool">
                <img className="php-icon-2" src="img/php-icon-1@1x.png" />
                <div className="price-2 poppins-normal-black-25px">PHP</div>
              </div>
            </a>
            <a href="https://www.mysql.com/" target="_blank">
              <div className="tablet-mysql-tool">
                <img className="mysql-icon-2" src="img/mysql-icon-1@1x.png" />
                <div className="my-sql-2 poppins-normal-black-25px">MySQL</div>
              </div>
            </a>
          </div>
        </div>
        <TabletProjects />
        <div className="software-delivery-plan1" id="software-delivery-plan1">
          <div className="overlap-group10-1">
            <div className="software-delivery-plan-background-1 border-1px-dove-gray"></div>
            <img className="work-plan-bg-2" src="img/work-plan-bg-1@1x.png" />
            <div className="my-software-delivery-plan-2">
              My software delivery plan
            </div>
            <div className="my-work-flow-1">
              <div className="overlap-group-container-6">
                <div className="overlap-group-container-7">
                  <div className="uiux-container-2">
                    <img
                      className="uiux-image-2"
                      src="img/uiux-image-1@1x.png"
                    />
                    <div className="uiux-text-2 border-1px-dove-gray">
                      <div className="uiux-title-2 segoeui-bold-purple-pizzazz-34px">
                        uiux
                      </div>
                      <div className="lorem-ipsum-dolor-si-12 segoeui-bold-purple-pizzazz-20px">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </div>
                    </div>
                  </div>
                  <div className="prototype-container-2">
                    <img className="prototype-2" src="img/prototype-1@1x.png" />
                    <div className="prototype-text-2 border-1px-dove-gray">
                      <div className="prototype-title-2 segoeui-bold-purple-pizzazz-34px">
                        prototype
                      </div>
                      <div className="lorem-ipsum-dolor-si-13 segoeui-bold-purple-pizzazz-20px">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group4-1">
                    <img className="path-7-1" src="img/path-7-1@1x.png" />
                    <img className="line-3-2" src="img/line-3-1@1x.png" />
                    <img className="line-4-2" src="img/line-4-1@1x.png" />
                  </div>
                </div>
                <div className="overlap-group2-5">
                  <img className="path-6-2" src="img/path-6-1@1x.png" />
                  <img className="line-1-2" src="img/line-1-1@1x.png" />
                  <img className="line-2-2" src="img/line-2-1@1x.png" />
                </div>
              </div>
              <div className="overlap-group-container-8">
                <div className="overlap-group3-2">
                  <img
                    className="react-codding-2"
                    src="img/react-codding-1@1x.png"
                  />
                  <div className="code-text-2 border-1px-dove-gray">
                    <div className="code-title-2 segoeui-bold-purple-pizzazz-34px">
                      code
                    </div>
                    <div className="lorem-ipsum-dolor-si-12 segoeui-bold-purple-pizzazz-20px">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </div>
                  </div>
                </div>
                <div className="overlap-group5-2">
                  <div className="overlap-group-11">
                    <img
                      className="software-package-rectangle-2"
                      src="img/software-package-rectangle-1@1x.png"
                    />
                    <div className="cd-2 border-1px-dove-gray"></div>
                    <img
                      className="package-path-2"
                      src="img/package-path-1@1x.png"
                    />
                    <img className="cd-path-2" src="img/cd-path-1@1x.png" />
                    <div className="inner-cd-circle-2 border-1px-dove-gray"></div>
                  </div>
                  <div className="software-package-title-2">
                    Software package
                  </div>
                  <div className="delivery-text-2 border-1px-dove-gray">
                    <div className="delivery-title-2">Delivery</div>
                    <div className="lorem-ipsum-dolor-si-14 segoeui-bold-purple-pizzazz-20px">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </div>
                  </div>
                </div>
                <div className="overlap-group6-2">
                  <img className="path-10-2" src="img/path-10-1@1x.png" />
                  <img className="line-5-2" src="img/line-5-1@1x.png" />
                  <img className="line-6-2" src="img/line-6-1@1x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-container-2">
          <TabletContactMe />
          <div className="group-25">
            <div className="flex-row-2">
              <a href="#tablet-hero-background" className="align-self-flex-end">
                <div className="desktop-logo-3">
                  <div className="overlap-group-12 tillana-normal-shampoo-37px">
                    <div className="a-5">A</div>
                    <div className="b-5">B</div>
                  </div>
                </div>
              </a>
              <div className="flex-col-3">
                <div className="menu-2 manrope-bold-purple-pizzazz-10px">
                  Menu
                </div>
                <div className="overlap-group15-2">
                  <a href="#tablet-hero-background">
                    <div className="about-portfolio-blog-4 manrope-normal-white-10px">
                      Home
                    </div>
                  </a>
                  <a href="#desktop-portfolio-background1">
                    <div className="portfolio-5 segoeui-regular-normal-white-10px">
                      Portfolio
                    </div>
                  </a>
                  <a href="#software-delivery-plan1">
                    <div className="services-4 segoeui-regular-normal-white-10px">
                      Services
                    </div>
                  </a>
                  <a href="#contact-me1">
                    <div className="place-10 segoeui-regular-normal-white-10px">
                      Contact
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex-col-4">
                <div className="service-2 manrope-bold-purple-pizzazz-10px">
                  Service
                </div>
                <div className="overlap-group16-2">
                  <div className="about-portfolio-blog-5 manrope-normal-white-10px">
                    UI/UX
                  </div>
                  <div className="prototyping-2 segoeui-regular-normal-white-10px">
                    Prototyping
                  </div>
                  <div className="codding-1 segoeui-regular-normal-white-10px">
                    Codding
                  </div>
                  <div className="hosting-1 segoeui-regular-normal-white-10px">
                    Hosting
                  </div>
                </div>
              </div>
              <div className="flex-col-5">
                <div className="place-11 manrope-bold-purple-pizzazz-10px">
                  Contact
                </div>
                <div className="x2690-thompson-drive-2 manrope-normal-white-10px">
                  Arba Minch, Ethiopia
                  <br />
                  +251-939-793479
                  <br />
                  bruckabey@gmail.com
                </div>
              </div>
            </div>
            <div className="rectangle-9"></div>
            <p className="copyright-2020-laa-2">
              Copyright ?? 2020 Abey B. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablet;
