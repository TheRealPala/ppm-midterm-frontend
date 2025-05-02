import React, { FC } from 'react';
import './footer.scss';
import {faFacebook, faInstagram, faTiktok, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
interface footerProps {}
const footerBottomItems = require('./footerBottom.json')['footerBottomItems'];
const Footer: FC<footerProps> = () => (
  <div className="border-top border-1 border-black w-100 d-flex flex-column align-items-center justify-content-center position-relative">
      <section className={"custom-width px-2 d-flex flex-md-row flex-column"}>
          <div className={"col-md-3 col-12 footer-divider d-flex flex-column align-items-md-end align-items-center pe-md-5 pt-4"}>
              <div className={"d-flex flex-column mb-3 w-100"}>
                  <img alt={"logo"} className={"mb-3"} src={"https://placehold.co/188x35"}/>
                  <text className={"w-100 text-md-start text-center lh-lg footer-text-sm border-bottom-light-gray pb-2"}>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum dolor</span> <br/>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum dolor</span> <br/>
                      <span className={"color-text-gray  blue-text-hover"}>Lorem ipsum dolor</span> <br/>
                  </text>
                  <div className={"py-3 border-bottom-light-gray d-flex w-full justify-content-center justify-content-md-start"}>
                      <button className={"btn footer-subscribe-button p-2"}>Lorem ipsum</button>
                  </div>
                  <div className={"d-flex flex-md-column flex-row px-2"}>
                  <div className={"py-3 footer-app-divider footer-text col-6 col-md-12"}>
                      <text className={"fw-semibold"}>APP</text>
                      <br/>
                      <div className={"d-flex justify-content-start lh-lg"}>
                          <span className={"color-text-gray text-decoration-underline blue-text-hover"}>Lorem</span>
                          <span className={"mx-2"}>|</span>
                          <span className={"color-text-gray text-decoration-underline blue-text-hover"}>Lorem</span>
                      </div>
                  </div>
                  <div className={"py-3 footer-text mb-md-5 col-md-12 col-6"}>
                      <text className={"fw-semibold"}>SOCIAL</text>
                      <br/>
                      <div className={"d-flex justify-content-start lh-lg gap-3 pt-2"}>
                          <FontAwesomeIcon className={"blue-text-hover"} size={"xl"} icon={faFacebook} />
                          <FontAwesomeIcon className={"blue-text-hover"} size={"xl"} icon={faXTwitter} />
                          <FontAwesomeIcon className={"blue-text-hover"} size={"xl"} icon={faInstagram} />
                          <FontAwesomeIcon className={"blue-text-hover"} size={"xl"} icon={faTiktok} />
                          <FontAwesomeIcon className={"blue-text-hover"} size={"xl"} icon={faYoutube} />
                      </div>
                  </div>
                  </div>
              </div>
          </div>
          <div className={"col-md-9 col-12 d-flex flex-column footer-text pt-4 ps-md-4"}>
              <text className={"fw-semibold px-2 px-md-0"}>LOREM IPSUM</text>
              <div className={"d-flex flex-row w-full gap-3 pb-4 border-bottom-light-gray pt-1 px-2 px-md-0"}>
                  <text className={"color-text-gray blue-text-hover"}>Lorem Ipsum</text>
                  <text className={"color-text-gray blue-text-hover"}>Lorem Ipsum</text>
                  <text className={"color-text-gray blue-text-hover"}>Lorem Ipsum</text>
                  <text className={"color-text-gray blue-text-hover"}>Lorem Ipsum</text>
              </div>
              <div className={"d-flex flex-column flex-col-wrap h-100 pt-2"}>
                  {[...Array(6)].map((_, index) => (
                      <div className={"d-flex flex-column px-2 px-md-0"}>
                          <span className={"fw-semibold mb-2"}>LOREM</span>
                          <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                          <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                          <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                          <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      </div>
                  ))}
                  <div className={"d-flex flex-column px-2 px-md-0"}>
                      <span className={"fw-semibold mb-2"}>LOREM</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                      <span className={"color-text-gray blue-text-hover"}>Lorem ipsum</span>
                  </div>

              </div>
          </div>
      </section>
      <div className={"w-100 p-2 footer-end z-3 d-flex justify-content-center"}>
          <div className={"custom-width d-flex gap-3 footer-text-sm align-items-center justify-content-center"}>
              {footerBottomItems.map((item:string) => (
                      <span className={"color-text-gray blue-text-hover"}>{item}</span>
              ))}
          </div>
      </div>
  </div>
);

export default Footer;
