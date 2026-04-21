import React from 'react';
import Image from 'next/image';
import headerInfo from '/public/assets/data/header.json';
import { goToAnchor } from 'react-scrollable-anchor';
import Link from 'next/link';
import contactInfo from '/public/assets/data/contactInfo.json';
import { scroller } from 'react-scroll';

const HeaderPhone = ({ drawer, action, lang = true, firstpage = false }) => {
  const gotohash = (e, link) => {
    action(e);
    goToAnchor(link, false);
  };
  const scrollToSection = (section, offset) => {
    scroller.scrollTo(section, {
        smooth: true,
        spy: true,
        duration: 250,
        offset: offset,
    });
    action()

};
  return (
    <>
      {lang ? (
        <>
          <div
            onClick={(e) => action(e)}
            className={`off_canvars_overlay ${drawer ? '' : ''}`}
          ></div>
          <div className='offcanvas_menu'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <div
                    className={`offcanvas_menu_wrapper ${
                      drawer ? 'active' : ''
                    }`}
                  >
                    <div className='canvas_close'>
                      <a  onClick={(e) => action(e)}>
                        <Image
                          src='/icons/close.svg'
                          alt='close'
                          width='12'
                          height='12'
                        />
                      </a>
                    </div>
                    <div className='offcanvas-brand text-center fs-title-4 mb-3 text-color-primary '>
                      م.محمد الدروبي
                    </div>
                    <div id='menu' className='text-center '>
                      <ul className='offcanvas_main_menu'>
                        {headerInfo.linksAr.map((link) => (
                          <li>
                            {link.href ? (
                              <>
                                <Link href={`${link.to}`} onClick={() => scrollToSection(link.to, link.offset)}>
                                  {link.title}
                                  {link.tag === '' ? (
                                    ''
                                  ) : (
                                    <span className='badge rounded-pill bg__color--primary text-secondary mr-5'>
                                      {link.tag}
                                    </span>
                                  )}
                                </Link>
                              </>
                            ) : firstpage ? (
                              <>
                                <a
                                  className='fs-title-4'
                                  href={link.to}
                                  onClick={(e) => gotohash(e, link.to)}
                                >
                                  {link.title}
                                  {link.tag === '' ? (
                                    ''
                                  ) : (
                                    <span className='badge rounded-pill bg__color--primary text-secondary mr-5'>
                                      {link.tag}
                                    </span>
                                  )}
                                </a>
                              </>
                            ) : (
                              <>
                                <a className='fs-title-3' href={`/#${link.to}`} onClick={() => scrollToSection(link.to, link.offset)}>
                                  {link.title}
                                  {link.tag === '' ? (
                                    ''
                                  ) : (
                                    <span className='badge rounded-pill bg__color--primary text-secondary mr-5'>
                                      {link.tag}
                                    </span>
                                  )}
                                </a>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='offcanvas-social'>
                      <ul className='text-center p-0'>
                        <li>
                          <a href={contactInfo.instagram} className='icon'>
                            <Image
                              src={'/icons/instagram.svg'}
                              height={50}
                              width={50}
                              alt='instagram'
                            />
                          </a>
                        </li>
                        <li>
                          <a href={contactInfo.tiktok} className='icon'>
                            <Image
                              src={'/icons/tiktok.svg'}
                              height={50}
                              width={50}
                              alt='Tiktok'
                            />
                          </a>
                        </li>
                        <li>
                          <a href={contactInfo.linkedin} className='icon'>
                            <Image
                              src={'/icons/linkedin.svg'}
                              height={50}
                              width={50}
                              alt='linkedin'
                            />
                          </a>
                        </li>{' '}
                        <li>
                          <a href={contactInfo.facebook} className='icon'>
                            <Image
                              src={'/icons/facebook.svg'}
                              height={50}
                              width={50}
                              alt='facebook'
                            />
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
      ) : (
        <>
          <div
            onClick={(e) => action(e)}
            className={`off_canvars_overlay ${drawer ? '' : ''}`}
          ></div>
          <div className='offcanvas_menu'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <div
                    className={`offcanvas_menu_wrapper ${
                      drawer ? 'active' : ''
                    }`}
                  >
                    <div className='canvas_close'>
                      <a href='#' onClick={(e) => action(e)}>
                        <Image
                          src='/icons/close.svg'
                          alt='close'
                          width='12'
                          height='12'
                        />
                      </a>
                    </div>
                    <div className='offcanvas-brand text-center fs-title-4 mb-3 text-color-primary '>
                      م.محمد الدروبي
                    </div>
                    <div id='menu' className='text-center '>
                      <ul className='offcanvas_main_menu'>
                        {headerInfo.linksEn.map((link) => (
                          <li>
                            {link.href ? (
                              <>
                                <Link href={`/${link.to}`}>
                                  {link.title}
                                  {link.tag === '' ? (
                                    ''
                                  ) : (
                                    <span className='badge rounded-pill bg__color--primary text-secondary mr-5'>
                                      {link.tag}
                                    </span>
                                  )}
                                </Link>
                              </>
                            ) : (
                              <>
                                <a
                                  href={link.to}
                                  onClick={(e) => gotohash(e, link.to)}
                                >
                                  {link.title}
                                  {link.tag === '' ? (
                                    ''
                                  ) : (
                                    <span className='badge rounded-pill bg__color--primary text-secondary mr-5'>
                                      {link.tag}
                                    </span>
                                  )}
                                </a>
                              </>
                            )}{' '}
                          </li>
                        ))}
                        <li className='menu-item-has-children '>
                          <Link href='/contact-us'>
                            {headerInfo.buttonTextEn}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderPhone;
