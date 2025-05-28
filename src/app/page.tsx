"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Home() {
  const [goatModalOpen, setGoatModalOpen] = useState(false);
  const [goatImgLoaded, setGoatImgLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setGoatModalOpen(false);
      }
    }

    if (goatModalOpen) {
      setGoatImgLoaded(false); // Reset image fade when modal opens
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [goatModalOpen]);

  return (
    <main className={`page-wrapper${loaded ? " loaded" : ""}`}>
      <div className="position-absolute header-wrap">
        <div className="header-wrapper w-nav transition-opacity duration-400 ease-in" role="banner">
          <div className="container-default w-container">
            <div className="header-content-wrapper">
              <a href="/" className="header-logo-link w-nav-brand">
                <img src="/findthemountaingoat.svg" alt="findthemountaingoat logo" className="header-logo" />
              </a>
              <div className="header-middle">
                <div role="navigation" fs-scrolldisable-element="when-visible" className="header-nav-menu-wrapper w-nav-menu">
                  <div className="div-block-5">
                    <ul role="list" className="header-nav-menu-list mg-top-24px">
                      <li className="header-nav-list-item middle"></li>
                      <li className="header-nav-list-item middle">
                        <a
                          href="#about-me"
                          className="header-nav-link w-nav-link"
                          onClick={e => {
                            e.preventDefault();
                            const el = document.getElementById('about-me');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          About me
                        </a>
                      </li>
                      <li className="header-nav-list-item middle">
                        <a href="#what-i-have-achieved" className="header-nav-link w-nav-link" onClick={e => {
                          e.preventDefault();
                          const el = document.getElementById('what-i-have-achieved');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        >Skills</a>
                      </li>
                      <li className="header-nav-list-item middle">
                        <a href="https://jonathan-hammond.vercel.app/" target="_blank" className="header-nav-link w-nav-link">Portfolio</a>
                      </li>
                      <li className="header-nav-list-item middle">
                        <a href="https://mindmapmethod.netlify.app/" target="_blank" className="header-nav-link w-nav-link">Mind Maps</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-right-side">
                <a href="https://www.linkedin.com/in/jonamichahammo" target="_blank" className="btn-secondary small header-btn-hidden-on-mbl mg-left-24px w-button">Hire me</a>
                <div className="hamburger-menu-wrapper w-nav-button hidden" aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false"><div className="hamburger-menu-bar-wrapper"><div className="hamburger-menu-bar top"></div><div className="hamburger-menu-bar bottom"></div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section hero v16">
        <div className="container-default w-container">
          <div className="inner-container _600px---tablet center">
            <div className="inner-container _500px---mbl center">
              <div className="position-relative z-index-1">
                <div className="w-layout-grid grid-2-columns hero-v16-grid">
                  <div id="about-me" className="inner-container _809px _100---tablet">
                    <div className={`card career-content-top transform preserve-3d${loaded ? " loaded" : ""}`}>
                      <div className="career-details">
                        <div className="flex-horizontal align-center mg-right-40px">
                          <div className="inner-container career-details-icon">
                            <div className="image-wrapper">
                              <img alt="Address Icon" loading="eager" src="https://cdn.prod.website-files.com/6488e446c3b249c9566f2c4b/6488e446c3b249c9566f2d72_icon-1-details-careers-startech-x-template.svg" className="image cover" />
                            </div>
                          </div>
                          <div className="heading-h5-size color-neutral-700">Salem, MA</div>
                          <div className="flex-horizontal align-center mg-left-8px color-neutral-500">
                            <div className="heading-h5-size">(One Train Away)</div>
                          </div>
                        </div>
                        <div className="flex-horizontal align-center mg-right-40px">
                          <div className="inner-container career-details-icon">
                            <div className="image-wrapper">
                              <img alt="Time Icon" loading="eager" src="https://cdn.prod.website-files.com/6488e446c3b249c9566f2c4b/6488e446c3b249c9566f2d77_icon-2-details-careers-startech-x-template.svg" className="image cover" />
                            </div>
                          </div>
                          <div className="heading-h5-size color-neutral-700">Unemployed</div>
                        </div>
                      </div>
                      <h1 className="display-2 mg-bottom-12px">Hi! I'm Jonathan</h1>
                    </div>
                  </div>
                  <div id="call-to-action" className="inner-container hero-v16-sidebar-sticky">
                    <div className="card hero-v16-sidebar-content">
                      <div>
                        <h2 className="display-4 color-neutral-100 mg-bottom-8px">
                          I would love to join your amazing team
                        </h2>
                        <p className="color-neutral-200 mg-bottom-20px">
                          I engineer quality user experiences that empower businesses to thrive. I would love to help build the next-gen shopping experience!
                        </p>
                        <div>
                          <div className="buttons-row">
                            <a href="https://www.linkedin.com/in/jonamichahammo" target="_blank" className="btn-primary white small w-button">DM  me on LinkedIn</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="about-me-bio" className="inner-container _809px _100---tablet">
                    <div className="card career-content-bottom">
                      <div className="rich-text-v2 w-richtext">
                        <h3>👋 My Background</h3>
                        <p>I began freelancing as a web developer in 2019. My first contract role was in 2020, where I was able to retrofit webpages for a healthcare company during the pandemic, by fixing their CSS without touching any of their HTML content. I achieved making their website mobile responsive. After this, I was able to gain startup exposure by implementing Acronary's entire frontend stack. I built out their Figma design using React, Material UI, Node.js and custom components. I also integrated every Python API the backend team had available through Fast API and Express.</p>
                        <p>
                          Since 2024, I have focused on accessibility at Boston Children's Hospital. My stack there introduced me to PHP, as I assisted with a lot of the website theming across their WordPress and Drupal websites. I fixed buggy jQuery, made components more responsive, and helped standardize the microsites' look and feel across multiple content management systems, while also building custom accessibility components to enhance user experience for all. I was laid off in January of this year. Now, I'm here!
                        </p>
                        <h3>⚡️What I can provide</h3>
                        <p>
                          I am eager to step into a role that focuses on user experience. Previously, I have worked with designers to implement Figma designs, but in more recent roles, I have also needed to build components that aligned with internal component libraries, without having a design to recreate. Admittedly I am not a UI Designer by trade. However, I have an attention for detail, love scanning the internet for motivation, can communicate across teams to gain a better understanding of desired results, and will implement such designs into easy to use, testable, fast, accessible, and responsive websites.
                        </p>
                        <p>
                          I have used React off and on since 2020. In the pasts two years I have made several projects using Next.js. I am open to jumping into a TypeScript-based stack. It just so happens that previous roles only used vanilla JavaScript, React, or jQuery. On top of everything mentioned thus far, I also love the opportunity to learn backend, as my first programming language was Python, and I love visualizating data, so have exposure to SQL databases, API creation, and d3.js data viz as well.
                        </p>
                        <p>
                          I am hungry for a high-ownership role that allows me to learn untethered. I love collaboration and seeking feedback. I am passionate about frontend development and crafting jaw-dropping interfaces, so I believe this role is for me.
                        </p>
                        <h3 id="what-i-have-achieved">📓What I have achieved</h3>
                        <ul>
                          <li>
                            <p>Designed, developed, and maintained responsive and accessible frontend applications at Boston Children's Hospital</p>
                          </li>
                          <li>
                            <p>Participated in the UI/UX design process, ensured Acronary's dashboard web app was intuitive, accessible, and visually appealing</p>
                          </li>
                          <li>
                            <p>Have learned about performance, accessibility, and usability across different devices and browsers through my <a href="https://mindmapmethod.netlify.app" target="_blank" rel="noopener noreferrer">creation of Mind Maps</a></p>
                          </li>
                          <li>
                            <p>Participated in code reviews at BCH and Commonwealth Financial Network</p>
                          </li>
                          <li>
                            <p>Balanced speed and quality, with a focus on tangible results across a variety of company sizes ranging from 2 to 1000+ employees.</p>
                          </li>
                          <li>
                            <p>Communicated across teams to clarify desired business outcomes and educated at the appropriate levels of technical detail</p>
                          </li>
                          <li>
                            <p>Built historically in React, Next.js, Tailwind, PHP, Python, Node.js, as well as Figma</p>
                          </li>
                          <li>
                            <p>Thrived in both remote and hybrid settings ranging from home and cafes to Boston and Waltham</p>
                          </li>
                          <li
                            onClick={() => setGoatModalOpen(true)}
                            className="relative tag bg-neutral-100"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="dot-wrapper">
                              <div className="dot-back" style={{ width: "12px", height: "12px", opacity: 0.496 }}></div>
                              <div className="dot-front"></div>
                            </div>
                            <p>Have a sense of humor 🐐</p>
                            {goatModalOpen && typeof window !== "undefined" && createPortal(
                              <div className="fixed inset-0 z-[9999]">
                                <div className="absolute inset-0 w-full h-full" style={{ background: "rgba(34,34,34,0.95)", pointerEvents: 'auto' }} />
                                <div className="flex items-center justify-center w-full h-full absolute inset-0 pointer-events-none" style={{ pointerEvents: 'none' }}>
                                  <div
                                    ref={modalRef}
                                    className="bg-[#fbf7ed] border-4 border-[#ef7d60] rounded-2xl shadow-2xl flex flex-col items-center p-8 relative pointer-events-auto"
                                    style={{ pointerEvents: 'auto' }}
                                  >
                                    <button
                                      className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-[#ef7d60] text-3xl font-bold bg-white border-2 border-[#ef7d60] rounded-full shadow-md focus:outline-none transition hover:bg-[#ffe1d6] hover:scale-110 cursor-pointer"
                                      onClick={e => { e.stopPropagation(); setGoatModalOpen(false); }}
                                      aria-label="Close"
                                    >
                                      ×
                                    </button>
                                    <img
                                      src="/themountaingoat.jpg"
                                      alt="Funny Mountain Goat"
                                      className={`w-64 h-64 object-cover rounded-lg border-2 border-[#fff2eb] transition-opacity duration-700 ${goatImgLoaded ? 'opacity-100' : 'opacity-0'}`}
                                      onLoad={() => setGoatImgLoaded(true)}
                                      style={{ transition: 'opacity 0.7s' }}
                                    />
                                  </div>
                                </div>
                              </div>,
                              document.body
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute hero-v16-bg bg-primary-4"></div>
      </section>
    </main>
  );
}




