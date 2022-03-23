import React, { useContext } from "react";
import MobileMenu from "./mobileMenu";
import MobileProjects from "./mobileProjects";
import MobileContactMe from "./mobileContactMe";
import { AppContext } from "../App";

const Mobile = () => {
  const { menuOpened, toggleMenu } = useContext(AppContext);

  return (
    <div className="container-center-horizontal">
      <div className="phone screen">
        <div className="overlap-group-container-3">
          <div className="overlap-group18-1">
            <div className="overlap-group1">
              <div className="overlap-group16-1">
                <div className="i-develop-webpages-1">I Develop Webpages</div>
                <p className="if-you-need-a-profes-1">
                  if you need a professional web site developed for your
                  business it is me you should contact. Not only I can design an
                  eye catching web page but also assist you in hosting it online
                  and attract customers to including online payment.
                </p>
                {menuOpened && <MobileMenu />}
              </div>
              <a href="#phone-hero-background">
                <div className="phone-logo">
                  <div className="overlap-group-4">
                    <div className="a-2">A</div>
                    <div className="b-2">B</div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="phone-menu-1"
              onClick={() => toggleMenu(menuOpened)}
            >
              <img className="path-2" src="img/path-1-1@1x.png" />
              <img className="path" src="img/path-1-1@1x.png" />
              <img className="path" src="img/path-1-1@1x.png" />
            </div>
          </div>
          <div className="overlap-group17-1">
            <a href="#contact-me-background">
              <div className="component-23-1 border-1px-dove-gray">
                <div className="contact-me-3">Contact me</div>
              </div>
            </a>
            <div className="phone-resume-button">
              <img className="resume-icon-1" src="img/resume-icon-2@1x.png" />
              <div className="resume-1">Resume</div>
            </div>
          </div>
        </div>
        <div className="overlap-group15-1 poppins-normal-black-11px">
          <p className="some-of-the-tools-i-use-1">some of the tools I use</p>
          <div className="front-end-1">front end</div>
          <div className="mobile-container">
            <a href="https://reactjs.org/" target="_blank">
              <div className="mobile-react-tool">
                <img className="react-icon-1" src="img/react-icon-2@1x.png" />
                <div className="react-1 poppins-normal-black-11px">React</div>
              </div>
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              className="align-self-flex-end"
            >
              <div className="mobile-javascript-tool">
                <img
                  className="javascript-icon-1"
                  src="img/javascript-icon-2@1x.png"
                />
                <div className="java-script-1 poppins-normal-black-11px">
                  JavaScript
                </div>
              </div>
            </a>
            <a href="https://www.adobe.com/products/xd.html" target="_blank">
              <div className="mobile-adobexd-tool">
                <img
                  className="adobexd-icon-1"
                  src="img/adobexd-icon-1@1x.png"
                />
                <div className="adobe-xd-1 poppins-normal-black-11px">
                  Adobe XD
                </div>
              </div>
            </a>
            <a href="https://html.com/" target="_blank">
              <div className="mobile-html5-tool">
                <img className="html5-icon-1" src="img/html5-icon-2@1x.png" />
                <div className="html5-1 poppins-normal-black-11px">HTML5</div>
              </div>
            </a>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank"
            >
              <div className="mobile-css3-tool">
                <img className="css3-icon-1" src="img/css3-icon-2@1x.png" />
                <div className="css3-1 poppins-normal-black-11px">CSS3</div>
              </div>
            </a>
          </div>
          <div className="back-end-1">back end</div>
          <div className="mobile-container-1">
            <a href="https://www.php.net/" target="_blank">
              <div className="mobile-php-tool">
                <img className="php-icon-1" src="img/php-icon-2@1x.png" />
                <div className="price-1 poppins-normal-black-11px">PHP</div>
              </div>
            </a>
            <a href="https://www.mysql.com/" target="_blank">
              <div className="mobile-mysql-tool">
                <img className="mysql-icon-1" src="img/mysql-icon-2@1x.png" />
                <div className="my-sql-1 poppins-normal-black-11px">MySQL</div>
              </div>
            </a>
          </div>
        </div>
        <MobileProjects />
        <div className="overlap-group13-1">
          <img
            className="work-plan-bg-1"
            id="work-plan-bg"
            src="img/work-plan-bg-2@1x.png"
          />
          <div className="overlap-group-container-4">
            <div className="uiux-container-1">
              <img className="uiux-image-1" src="img/uiux-image-2@1x.png" />
              <div className="uiux-text-1 border-1px-dove-gray">
                <div className="overlap-group-5">
                  <div className="uiux-title-1">uiux</div>
                  <p className="lorem-ipsum-dolor-si-7 segoeui-bold-purple-pizzazz-10px">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                  </p>
                </div>
              </div>
            </div>
            <div className="overlap-group2-2">
              <img className="path-6-1" src="img/path-6-2@1x.png" />
              <img className="line-1-1" src="img/line-1-2@1x.png" />
              <img className="line-2-1" src="img/line-2-2@1x.png" />
            </div>
            <div className="prototype-container-1">
              <img className="prototype-1" src="img/prototype-2@1x.png" />
              <div className="prototype-text-1 border-1px-dove-gray">
                <div className="prototype-title-1">prototype</div>
                <p className="lorem-ipsum-dolor-si-8 segoeui-bold-purple-pizzazz-10px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
              </div>
            </div>
            <div className="line-container">
              <img className="line-3-1" src="img/line-3-2@1x.png" />
              <img className="line-4-1" src="img/line-4-1@1x.png" />
            </div>
            <div className="overlap-group5-1">
              <img
                className="react-codding-1"
                src="img/react-codding-2@1x.png"
              />
              <div className="code-text-1 border-1px-dove-gray">
                <div className="code-title-1">code</div>
                <p className="lorem-ipsum-dolor-si-9 segoeui-bold-purple-pizzazz-10px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
              </div>
            </div>
            <div className="overlap-group6-1">
              <img className="path-10-1" src="img/path-10-2@1x.png" />
              <img className="line-5-1" src="img/line-5-2@1x.png" />
              <img className="line-6-1" src="img/line-6-2@1x.png" />
            </div>
            <div className="overlap-group7">
              <div className="overlap-group-6">
                <img
                  className="software-package-rectangle-1"
                  src="img/software-package-rectangle-2@1x.png"
                />
                <div className="cd-1 border-1px-dove-gray"></div>
                <img
                  className="package-path-1"
                  src="img/package-path-2@1x.png"
                />
                <img className="cd-path-1" src="img/cd-path-2@1x.png" />
                <div className="inner-cd-circle-1 border-1px-dove-gray"></div>
              </div>
              <div className="software-package-title-1">Software package</div>
              <div className="delivery-text-1 border-1px-dove-gray">
                <div className="delivery-title-1">Delivery</div>
                <p className="lorem-ipsum-dolor-si-10 segoeui-bold-purple-pizzazz-10px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
              </div>
            </div>
          </div>
          <div className="my-software-delivery-plan-1">
            My software delivery plan
          </div>
          <div
            className="contact-me-background border-1px-dove-gray"
            id="contact-me-background"
          ></div>
          <div className="contact-me-4 manrope-bold-purple-pizzazz-10px">
            Contact Me
          </div>
          <div className="lets-work-together-1 manrope-bold-bright-gray-32px">
            Let’s Work Together
          </div>
          <p className="the-sky-was-cloudles-1 manrope-normal-bright-gray-16px">
            The sky was cloudless and of a deep dark blue the spectacle before
            us was indeed sublime.
          </p>
          <MobileContactMe />
        </div>
        <div className="group-29">
          <a href="#phone-hero-background">
            <div className="desktop-logo-2">
              <div className="overlap-group1-1 tillana-normal-shampoo-37px">
                <div className="a-3">A</div>
                <div className="b-3">B</div>
              </div>
            </div>
          </a>
          <div className="group-container">
            <div className="group-26">
              <div className="menu-1 manrope-bold-purple-pizzazz-15px">
                Menu
              </div>
              <div className="overlap-group3-1">
                <a href="#phone-hero-background">
                  <div className="about-portfolio-blog-2 manrope-normal-white-10px">
                    Home
                  </div>
                </a>
                <a href="#desktop-portfolio-background2">
                  <div className="portfolio-3 segoeui-regular-normal-white-10px">
                    Portfolio
                  </div>
                </a>
                <a href="#work-plan-bg">
                  <div className="services-2 segoeui-regular-normal-white-10px">
                    Services
                  </div>
                </a>
                <a href="#contact-me-background">
                  <div className="place-5 segoeui-regular-normal-white-10px">
                    Contact
                  </div>
                </a>
              </div>
            </div>
            <div className="group-27">
              <div className="service-1 manrope-bold-purple-pizzazz-15px">
                Service
              </div>
              <div className="overlap-group2-3">
                <div className="about-portfolio-blog-3 manrope-normal-white-10px">
                  UI/UX
                </div>
                <div className="prototyping-1 segoeui-regular-normal-white-10px">
                  Prototyping
                </div>
                <div className="codding segoeui-regular-normal-white-10px">
                  Codding
                </div>
                <div className="hosting segoeui-regular-normal-white-10px">
                  Hosting
                </div>
              </div>
            </div>
            <div className="overlap-group-7">
              <div className="place-6 manrope-bold-purple-pizzazz-15px">
                Contact
              </div>
              <div className="x2690-thompson-drive-1 manrope-normal-white-10px">
                Arba Minch, Ethiopia
                <br />
                +251-939-793479
                <br />
                bruckabey@gmail.com
              </div>
            </div>
          </div>
          <div className="rectangle-5"></div>
          <p className="copyright-2020-laa-1">
            Copyright © 2020 Abey B. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
