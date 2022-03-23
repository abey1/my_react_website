import React from "react";
import DesktopProjects from "./desktopProjects.js";
import ContactMe from "./desktopContactMe.js";

const Desktop = () => {
  return (
    <div className="container-center-horizontal">
      <div className="desktop screen">
        <div className="overlap-group14">
          <div className="flex-row">
            <a href="#desktop-hero-background">
              <div className="desktop-logo">
                <div className="overlap-group tillana-normal-shampoo-65px">
                  <div className="a">A</div>
                  <div className="b">B</div>
                </div>
              </div>
            </a>
            <div className="place poppins-normal-white-25px">Home</div>
            <a href="#desktop-portfolio-background">
              <div className="portfolio poppins-normal-white-25px">
                Portfolio
              </div>
            </a>
            <a href="#software-delivery-plan">
              <div className="services poppins-normal-white-25px">Services</div>
            </a>
          </div>
          <div className="overlap-group18">
            <div className="overlap-group17">
              <img
                className="desktop-hero-image"
                src="img/desktop-hero-image@1x.png"
              />
              <div className="i-develop-webpages">I Develop Webpages</div>
            </div>
            <div className="if-you-need-a-profes poppins-light-white-20px">
              if you need a professional web site developed for your business it
              is me you should contact. Not only I can design an eye catching
              web page but also assist you in hosting it online and attract
              customers to including online payment.
            </div>
            <a href="#contact-me">
              <div className="component-25-2 border-1px-dove-gray">
                <div className="contact-me poppins-light-white-21px">
                  Contact me
                </div>
              </div>
            </a>
            <a href="#desktop-hero-background">
              <div className="desktop-resume-button">
                <img className="resume-icon" src="img/resume-icon@1x.png" />
                <div className="resume poppins-normal-white-25px">Resume</div>
              </div>
            </a>
          </div>
        </div>
        <div className="overlap-group15 poppins-normal-black-25px">
          <div className="some-of-the-tools-i-use">some of the tools I use</div>
          <div className="front-end">front end</div>
          <div className="desktop-container">
            <a href="https://reactjs.org/" target="_blank">
              <div className="desktop-react-tool">
                <img className="react-icon" src="img/react-icon-1@1x.png" />
                <div className="react poppins-normal-black-25px">React</div>
              </div>
            </a>
            <a href="https://www.javascript.com/" target="_blank">
              <div className="desktop-javascript-tool">
                <img
                  className="javascript-icon"
                  src="img/javascript-icon-1@1x.png"
                />
                <div className="java-script poppins-normal-black-25px">
                  JavaScript
                </div>
              </div>
            </a>
            <a href="https://www.adobe.com/products/xd.html" target="_blank">
              <div className="desktop-adobexd-tool">
                <img className="adobexd-icon" src="img/adobexd-icon@1x.png" />
                <div className="adobe-xd poppins-normal-black-25px">
                  Adobe XD
                </div>
              </div>
            </a>
            <a href="https://html.com/" target="_blank">
              <div className="desktop-html5-tool">
                <img className="html5-icon" src="img/html5-icon@1x.png" />
                <div className="html5 poppins-normal-black-25px">HTML5</div>
              </div>
            </a>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank"
              className="align-self-flex-end"
            >
              <div className="desktop-css3-tool">
                <img className="css3-icon" src="img/css3-icon@1x.png" />
                <div className="css3 poppins-normal-black-25px">CSS3</div>
              </div>
            </a>
          </div>
          <div className="back-end">back end</div>
          <div className="desktop-container-1">
            <a href="https://www.php.net/" target="_blank">
              <div className="desktop-php-tool">
                <img className="php-icon" src="img/php-icon-1@1x.png" />
                <div className="price poppins-normal-black-25px">PHP</div>
              </div>
            </a>
            <a href="https://www.mysql.com/" target="_blank">
              <div className="desktop-mysql-tool">
                <img className="mysql-icon" src="img/mysql-icon-1@1x.png" />
                <div className="my-sql poppins-normal-black-25px">MySQL</div>
              </div>
            </a>
          </div>
        </div>
        <div className="overlap-group13 segoeui-regular-normal-black-20px">
          <img
            className="desktop-portfolio-background"
            id="desktop-portfolio-background"
            src="img/desktop-portfolio-background@1x.png"
          />
          <div className="component-6-1 border-1px-dove-gray">
            <div className="explore-more poppins-light-white-21px">
              Explore More
            </div>
          </div>
          <DesktopProjects />
          <div id="software-delivery-plan" className="overlap-group10">
            <div className="software-delivery-plan-background border-1px-dove-gray"></div>
            <img className="work-plan-bg" src="img/work-plan-bg@1x.png" />
            <div className="my-software-delivery-plan">
              My software delivery plan
            </div>
            <div className="my-work-flow">
              <div className="overlap-group-container">
                <div className="overlap-group-container-1">
                  <div className="uiux-container">
                    <img className="uiux-image" src="img/uiux-image@1x.png" />
                    <div className="uiux-text border-1px-dove-gray">
                      <h1 className="uiux-title segoeui-bold-purple-pizzazz-60px">
                        uiux
                      </h1>
                      <div className="lorem-ipsum-dolor-si-2 segoeui-bold-purple-pizzazz-20px">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </div>
                    </div>
                  </div>
                  <div className="prototype-container">
                    <img className="prototype" src="img/prototype@1x.png" />
                    <div className="prototype-text border-1px-dove-gray">
                      <div className="prototype-title segoeui-bold-purple-pizzazz-60px">
                        prototype
                      </div>
                      <div className="lorem-ipsum-dolor-si-3 segoeui-bold-purple-pizzazz-20px">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group4">
                    <img className="path-7" src="img/path-7@1x.png" />
                    <img className="line-3" src="img/line-3@1x.png" />
                    <img className="line-4" src="img/line-4@1x.png" />
                  </div>
                </div>
                <div className="overlap-group2">
                  <img className="path-6" src="img/path-6@1x.png" />
                  <img className="line-1" src="img/line-1@1x.png" />
                  <img className="line-2" src="img/line-2@1x.png" />
                </div>
              </div>
              <div className="overlap-group-container-2">
                <div className="overlap-group3">
                  <img
                    className="react-codding"
                    src="img/react-codding@1x.png"
                  />
                  <div className="code-text border-1px-dove-gray">
                    <div className="code-title segoeui-bold-purple-pizzazz-60px">
                      code
                    </div>
                    <div className="lorem-ipsum-dolor-si-4 segoeui-bold-purple-pizzazz-20px">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </div>
                  </div>
                </div>
                <div className="overlap-group5">
                  <div className="overlap-group-2">
                    <img
                      className="software-package-rectangle"
                      src="img/software-package-rectangle@1x.png"
                    />
                    <div className="cd border-1px-dove-gray"></div>
                    <img
                      className="package-path"
                      src="img/package-path@1x.png"
                    />
                    <img className="cd-path" src="img/cd-path@1x.png" />
                    <div className="inner-cd-circle border-1px-dove-gray"></div>
                  </div>
                  <div className="software-package-title">Software package</div>
                  <div className="delivery-text border-1px-dove-gray">
                    <div className="delivery-title segoeui-bold-purple-pizzazz-60px">
                      Delivery
                    </div>
                    <div className="lorem-ipsum-dolor-si-5 segoeui-bold-purple-pizzazz-20px">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </div>
                  </div>
                </div>
                <div className="overlap-group6">
                  <img className="path-10" src="img/path-10@1x.png" />
                  <img className="line-5" src="img/line-5@1x.png" />
                  <img className="line-6" src="img/line-6@1x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactMe />
        <div className="group-24">
          <div className="flex-row-1">
            <a href="#desktop-hero-background" className="align-self-flex-end">
              <div className="desktop-logo-1">
                <div className="overlap-group tillana-normal-shampoo-65px">
                  <div className="a-1">A</div>
                  <div className="b-1">B</div>
                </div>
              </div>
            </a>
            <div className="flex-col">
              <div className="menu manrope-bold-purple-pizzazz-17px">Menu</div>
              <a href="#desktop-hero-background">
                <div className="about-portfolio-blog manrope-normal-white-14px">
                  Home
                </div>
              </a>
              <a href="#desktop-portfolio-background">
                <div className="portfolio-1 segoeui-regular-normal-white-14px">
                  Portfolio
                </div>
              </a>
              <a href="#software-delivery-plan">
                <div className="link segoeui-regular-normal-white-14px">
                  Services
                </div>
              </a>
              <a href="#contact-me">
                <div className="link segoeui-regular-normal-white-14px">
                  Contact
                </div>
              </a>
            </div>
            <div className="flex-col-1">
              <div className="service manrope-bold-purple-pizzazz-17px">
                Service
              </div>
              <div className="about-portfolio-blog-1 manrope-normal-white-14px">
                UI/UX
              </div>
              <div className="prototyping segoeui-regular-normal-white-14px">
                Prototyping
              </div>
              <div className="flex-col-item segoeui-regular-normal-white-14px">
                Codding
              </div>
              <div className="flex-col-item segoeui-regular-normal-white-14px">
                Hosting
              </div>
            </div>
            <div className="flex-col-2">
              <div className="place-2 manrope-bold-purple-pizzazz-17px">
                Contact
              </div>
              <div className="x2690-thompson-drive manrope-normal-white-14px">
                Arba Minch, Ethiopia
                <br />
                +251-939-793479
                <br />
                bruckabey@gmail.com
              </div>
            </div>
          </div>
          <div className="rectangle-2"></div>
          <p className="copyright-2020-laa">
            Copyright © 2020 Abey B. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
