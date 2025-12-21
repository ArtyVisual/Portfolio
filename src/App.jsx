import './App.css';
import { NavLink } from "react-router-dom";
import TypingText from './component/CursorName';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    document.getElementById("show-more-btn").addEventListener("click", function () {
      const btn = document.querySelector(".icon-button");
      const leftSecondDiv = document.querySelector(".left_second");
      const additionalText = "I offer comprehensive programming and design services tailored to your needs, including web development, UI/UX design, and more.";

      if (!leftSecondDiv.classList.contains("expanded")) {
        btn.style.display = "none";
        leftSecondDiv.innerHTML += additionalText;
        leftSecondDiv.classList.add("expanded");
      }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  })

  return (
    <div>
      <nav style={{ backgroundColor: "rgb(67, 71, 85)" }}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <div className="dropdown">
                <button id="dropbtn" type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu" aria-expanded="false">

                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </button>
                <div className="dropdown-content">
                  <a href="#About">About</a>
                  <a href="#Projects">Projects</a>
                  <a href="#Footer">Contact</a>
                </div>
              </div>

            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-14 logo"
                  src="/img/new1.png"
                  alt="Logo"
                />
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
                    Dashboard
                  </a>
                  <a href="#About" className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    About
                  </a>
                  <a href="#Projects" className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Projects
                  </a>
                  <a href="#Footer" className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Contact
                  </a>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </nav>

      <section>
        <div className="upper">
          <div className="righty">

            <div className="right first">I'm</div>
            <TypingText />

            <div className="right third mb-20">
              A web developer who provides great designs and development services for your websites and software.
              I specialize in creating a high-quality digital experiences tailored to your needs.
              I ensure that every project is delivered to the highest standards.
              Whether you need a new website, a redesign, or custom software, I have the expertise to bring your
              vision to life.
              Contact me to discuss how we can collaborate on your next project.
            </div>
          </div>

          <div className="picclass des-pic">
            <img
              className="pic"
              src="/img/bg4.png"
              alt=""
              style={{ margin: "6% 0%", width: "130vw" }}
            />
          </div>

          <div className='mb-5'>
            <div className="left_first">Services</div>

            <div className="left_second pb-0">
              let's build quality products in programming and design with my services.
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                id="show-more-btn"
                className="icon-button pb-0 hover:bg-gray-700 hover:text-yellow-600 block rounded-md px-3 py-2 text-base font-medium"
              >
                <span>Show More</span>
              </button>
            </div>
          </div>

          <div className="mob-pic">
            <img className="pic" src="/img/bg4.png" alt="" />
          </div>
        </div>

      </section>
      <section>

        <div className="center1">
          <div className="comp1">
            <ul className="comp2">
              <li className="comp3">
                <a
                  href="https://www.youtube.com/@ArtyVisual7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/img/youtube.png" width="65" alt="" />
                </a>
              </li>

              <li className="comp3">
                <a
                  href="https://github.com/ArtyVisual/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/img/git.png" width="75" alt="" />
                </a>
              </li>

              <li className="comp3">
                <a
                  href="https://coursera.org/verify/BBC6LLBEFT9L"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="sam" src="/img/coursera.png" width="65" alt="" />
                </a>
              </li>

              <li className="comp3">
                <a
                  href="https://avajwana1001.wixsite.com/abbas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="sam1" src="/img/wix.png" width="55" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </section>
      <h1 id="About" className="aboutme lobster-regular">About Me</h1>
      <section>
        <div id="center2">
          <div className="cert">
            <div className="heading">Certificates</div>

            <ul className="cert1">
              <li>
                <a
                  href="https://coursera.org/verify/BBC6LLBEFT9L"
                  target="_blank"
                  rel="noreferrer"
                >
                  Foundation Of (UX) Design
                </a>
              </li>

              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/KXQAQUU8RYBV"
                  target="_blank"
                  rel="noreferrer"
                >
                  UX design process stages : Empathize , Define , Ideate
                </a>
              </li>

              <li>
                <a
                  href="https://coursera.org/verify/U96UQGH8F9NT"
                  target="_blank"
                  rel="noreferrer"
                >
                  Developing Website using Wordpress
                </a>
              </li>

              <li>
                <a href="/Cert.html" target="_blank" rel="noreferrer">
                  eSkill Data entry operator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="heading_2">What Can I Do</div>

            <div className="blog">
              As a web developer, my mission is simple: to transform your digital aspirations into
              reality. Whether you seek a stunning website, seamless user experience, or robust
              functionality. Let's collaborate to bring your vision to life, one line of code at a time.
            </div>
          </div>

          <div className="img1">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/img/alvaro-reyes-zvmZiw3vdsQ-unsplash.jpg" alt="" />
              <div className="tag">Ui/Ux Design</div>
            </div>

            <div className="line"></div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/img/clement-helardot-95YRwf6CNw8-unsplash.jpg" alt="" />
              <div className="tag">Web Development</div>
            </div>

            <div className="line"></div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/img/4324809_18695.jpg" alt="" />
              <div className="tag">Graphic Design</div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className="secondlast">
          <div className="card">
            <div className="front">
              <img className="img" src="/img/web-programming.png" alt="" />
              <p>Ui/Ux Design</p>
            </div>
            <div className="back">
              <div>
                "Skilled in UI/UX design, creating intuitive interfaces for exceptional user experiences."
              </div>
            </div>
          </div>

          <div className="card">
            <div className="front">
              <img className="img" src="/img/web-coding.png" alt="" />
              <p>Web Development</p>
            </div>
            <div className="back">
              <div style={{ fontSize: "2.3vh" }}>
                Proficient in web development, creating dynamic and responsive websites that drive user
                engagement and satisfaction.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="front">
              <img className="img" src="/img/graphic-design.png" alt="" />
              <p>Graphic Design</p>
            </div>
            <div className="back">
              <div style={{ fontSize: "2.6vh" }}>
                "Skilled graphic designer creating eye-catching visuals that boost brand appeal and connect
                with audiences."
              </div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className="last">
          <div className="lang">
            <img src="/img/python.png" alt="" />
            <img src="/img/mysql.png" alt="" />
            <img src="/img/html.png" alt="" />
            <img src="/img/css-3.png" alt="" />
            <img src="/img/js-file.png" alt="" />
          </div>

          <div className="lang lang1">
            <img src="/img/letter-c (1).png" alt="" />
            <img src="/img/c- (1).png" alt="" />
            <img src="/img/c-sharp (1).png" alt="" />
            <img src="/img/www.png" alt="" />
            <img src="/img/java.png" alt="" />
          </div>

          <div className="lang">
            <img src="/img/atom.png" alt="" />
            <img src="/img/adobe-photoshop-logo (1).png" alt="" />
            <img src="/img/illustrator.png" alt="" />
            <img src="/img/github.png" alt="" />
            <img src="/img/oracle.png" alt="" />
          </div>
        </div>

      </section>
      <h1 id="Projects" style={{ paddingTop: "5%" }} className="aboutme lobster-regular">Major - Projects</h1>
      <section>
        <div className="projects pb-16">
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Arty</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">Finance</span>
            </div>

            <img className="finance-image" src="/img/budget.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description">
              Arty-Finance is a full-stack web application designed to manage personal finances with efficiency.
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/Arty-Finance/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Arty</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">Commerce</span>
            </div>

            <img className="finance-image" src="/img/online-store.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Arty-commerce is a full-stack, interactive e-commerce platform.
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/Arty-Commerce/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Arty</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">Home</span>
            </div>

            <img className="finance-image" src="/img/hotel.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Arty-Home is a user-friendly platform designed to connect tenants and lenders,
              offering an interactive interface with a robust backend and beautifully crafted frontend for seamless
              interactions.
              <br /><br />
              <NavLink className="view" to="https://arty-home.vercel.app/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Arty</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">Bookings</span>
            </div>

            <img className="finance-image" src="/img/trip.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Arty-Booking is a full-stack project with innovative animations, offering seamless booking services for
              hotels, flights, buses, and more.
              <br /><br />
              <NavLink className="view" to="https://arty-booking.vercel.app/#/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Arty</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">Café</span>
            </div>

            <img className="finance-image" src="/img/cafe.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Arty-Café is a full-stack website with captivating animations and an intuitive interface, leveraging
              modern frameworks for a seamless, responsive user experience.
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/Arty-Cafe/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Arty</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">Password</span>
            </div>

            <img className="finance-image" src="/img/padlock.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Arty-Password is a innovative, full-stack solution for efficient password management, offering a
              user-friendly interface and secure back-end for seamless organization.
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/Arty-Password/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Arty</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">Cakes</span>
            </div>

            <img className="finance-image" src="/img/online-order.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Arty-Cakes is a visually stunning online cake shop, crafted with Tailwind CSS for an attractive and
              intuitive user interface, ensuring a delightful user-experience
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/Arty-Cakes/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Clone</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">Netflix</span>
            </div>

            <img className="finance-image" src="/img/netflix.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Netflix clone built using HTML & CSS.
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/Netflix/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text playwrite-fr-moderne-font">Clone</span>
              <span className="finance-text playwrite-fr-moderne-font">-</span>
              <span className="finance-text ubuntu-medium">X</span>
              <span className="finance-text ubuntu-medium">(Twitter)</span>
            </div>

            <img className="finance-image" src="/img/netflix.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              X-clone is a replica of popular social media site X formerly known as twitter , this clone is created
              using HTML and Tailwind CSS which is responsive and user friendly.
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/X-clone/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text ubuntu-medium">Marksheet</span>
            </div>

            <img className="finance-image" src="./img/medical-result.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Marksheet is a web-based marksheet generator built with HTML, CSS, and JavaScript,
              featuring automatic calculation of total marks, percentage, grade, and result status.
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/Marksheet/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>
          <div className="Finance">
            <div>
              <span className="finance-text ubuntu-medium">Room-Booking</span>
            </div>

            <img className="finance-image" src="./img/hotel.png" style={{ height: 100, width: 100 }} alt="" />

            <div className="description1">
              Room-Booking is a booking management system developed using a C# framework,
              focused on room availability, booking flow, and backend-driven logic.
              <br /><br />
              <NavLink className="view" to="https://artyvisual.github.io/Hotel_Booking/" target="_blank">
                Go To Website →
              </NavLink>
            </div>
          </div>

          {/* repeat same pattern for rest */}
        </div>
      </section>
      <footer id="Footer" className="Footer">
        <h1
          id="Projects"
          className="aboutme contact lobster-regular"
          style={{ paddingBottom: "1%" }}
        >
          Contact Me
        </h1>

        <div className="msg">
          <form action="#" method="POST">
            <div className="form-content">
              <input
                type="hidden"
                name="access_key"
                value="5380afea-6095-4218-9864-96c3b22a135b"
              />

              <h1
                className="text-2xl md:text-3xl"
                style={{
                  color: "rgba(254, 218, 15, 0.699)",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Message Me
              </h1>

              <div className="name">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>

              <div className="email">
                <input type="text" name="email" placeholder="Your email" />
              </div>

              <div className="msg">
                <input type="text" name="message" placeholder="Your Message" />
              </div>

              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>

        <div className="icons">
          <a
            href="https://www.instagram.com/abbas._.vajwana/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/instagram.png" width="30" height="30" alt="" />
          </a>

          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/twitter.png" width="30" height="30" alt="" />
          </a>

          <a
            href="https://wa.me/9602652152"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/whatsapp (1).png" width="30" height="30" alt="" />
          </a>
        </div>

        <div
          style={{
            paddingBottom: "3%",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "larger",
          }}
        >
          copyright 2023 || all rights reserved
        </div>
      </footer>

    </div >
  );
};

export default App;
