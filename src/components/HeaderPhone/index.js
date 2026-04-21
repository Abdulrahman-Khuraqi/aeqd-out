import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import contactInfo from "../../assets/data/contactInfo.json";
import headerInfo from "../../assets/data/header.json";

function HeaderPhone({ drawer, action, langUrl }) {
  return (
    <>
      <div
        onClick={(e) => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="canvas_close">
                  <a href="#" onClick={(e) => action(e)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="offcanvas-brand text-center">
                  <img
                    width="461"
                    height="476"
                    style={{ margin: "30px auto" }}
                    src={`/images/logo-v.webp`}
                    alt="logo"
                    className="w-[145px]"
                  />
                </div>
                <div id="menu" className="text-center">
                  <ul className="offcanvas_main_menu">
                    {langUrl !== "en"
                      ? headerInfo.linksAr.map((link) => (
                          <li key={link.to || link.url}>
                            {link.url ? (
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.title}
                                {link.badge && (
                                  <span className="badge badge bg-primary ms-1">
                                    {link.badge}
                                  </span>
                                )}
                              </a>
                            ) : (
                              <a
                                href={`#${link.to}`}
                                onClick={(e) => action(e)}
                                offset={link.offset}
                                spy
                                smooth
                                duration={250}
                              >
                                {link.title}
                                {link.badge && (
                                  <span className="badge badge bg-primary ms-1">
                                    {link.badge}
                                  </span>
                                )}
                              </a>
                            )}
                          </li>
                        ))
                      : headerInfo.linksEn.map((link) => (
                          <li key={link.to || link.url}>
                            {link.url ? (
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.title}
                                {link.badge && (
                                  <span className="badge badge bg-primary ms-1">
                                    {link.badge}
                                  </span>
                                )}
                              </a>
                            ) : (
                              <LinkScroll
                                to={link.to}
                                onClick={(e) => action(e)}
                                offset={link.offset}
                                spy
                                smooth
                                duration={250}
                              >
                                {link.title}
                                {link.badge && (
                                  <span className="badge badge bg-primary ms-1">
                                    {link.badge}
                                  </span>
                                )}
                              </LinkScroll>
                            )}
                          </li>
                        ))}
                    <li className="menu-item-has-children">
                      <a href={`/#Contact-Us`} onClick={(e) => action(e)}>
                        {langUrl !== "en"
                          ? headerInfo.buttonTextAr
                          : headerInfo.buttonTextEn}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPhone;
