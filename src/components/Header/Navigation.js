import React from "react";
import Link from "next/link";

function Navigation({ lang = false, headerInfo, footer }) {
  return (
    <>
      {lang ? (
        <ul>
          {headerInfo.linksAr.map((link) => (
            <li>
              {link.href ? (
                <>
                  {" "}
                  <Link
                    spy
                    smooth
                    duration={250}
                    href={`${link.to}`}
                    offset={link.offset}
                    className="text-gray-300 hover:text-white"
                  >
                    {link.title}
                  </Link>
                  {link.tag === "" || footer ? (
                    ""
                  ) : (
                    <span className="badge rounded-pill bg__color--primary text-secondary mr-5">
                      {link.tag}
                    </span>
                  )}
                </>
              ) : (
                <>
                  {" "}
                  <a
                    spy
                    smooth
                    duration={250}
                    href={`#${link.to}`}
                    offset={link.offset}
                    className="text-gray-300 hover:text-white"
                  >
                    {link.title}
                  </a>
                  {link.tag === "" || footer ? (
                    ""
                  ) : (
                    <span className="badge rounded-pill bg__color--primary text-secondary mr-5">
                      {link.tag}
                    </span>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {headerInfo.linksEn.map((link) => (
            <li>
              <a
                spy
                smooth
                duration={250}
                href={`#${link.to}`}
                offset={link.offset}
                className="text-gray-300 hover:text-white"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Navigation;
