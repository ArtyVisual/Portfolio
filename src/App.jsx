import './App.css';
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from 'react';
import projects from "./data/ProjectsData";
import emailjs from "emailjs-com";
import { errorToast, successToast } from './utils/Toast';


const App = () => {

  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {


    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs.send(
      "service_l8h3u4j",
      "template_dvmyl2i",
      formData,
      "q8EYAMToN5e7RaN0H"
    )
      .then(() => {
        successToast("Message sent. I’ll get back to you.");
        setOpen(false)
      })
      .catch(() => {
        errorToast("Something went wrong!");
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section.querySelectorAll(".tech-card");

    const handleMove = (e) => {
      const { clientX, clientY } = e;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();

        const x = clientX - (rect.left + rect.width / 2);
        const y = clientY - (rect.top + rect.height / 2);

        const moveX = x * 0.08;
        const moveY = y * 0.08;

        card.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      });
    };

    const handleLeave = () => {
      cards.forEach(card => {
        card.style.transform = `translate(0px, 0px) scale(1)`;
      });
    };

    // 👇 ONLY bind to section
    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const steps = document.querySelectorAll(".work-step");
    let index = 0;

    const interval = setInterval(() => {
      steps.forEach(s => s.classList.remove("active"));
      steps[index].classList.add("active");

      index = (index + 1) % steps.length;
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <nav>
        <div className="mx-auto">
          <div className="relative flex sm:h-16 h-12 items-center justify-between">
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
              <h3 className='main-name borel-regular'>Abbas Wajvana</h3>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

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

      <section className="upper">

        <div className="right sm:gap-5 gap-2">
          <h1 className="first">
            I build <span className="highlight">websites</span> and <span className="highlight">systems</span> that simplify your business operations.
          </h1>
          <h3 className="subtext sm:pb-5 pb-3">
            From websites to custom dashboards and CMS, I create solutions tailored to your business needs with scalable and efficient systems.
          </h3>
          <div className='flex '>
            <button
              className='action-btn me-4'
              onClick={() => {
                const phone = "919602652152";
                const message = encodeURIComponent(
                  "Hi Abbas, I saw your portfolio and I want to discuss a project."
                );

                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
              }}
            >
              <div>
                <img src="/img/whatsapp (1).png" width="20" height="20" alt="" />
              </div>
              Chat On Whatsapp
            </button>
            <button
              className='action-btn'
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View My Work
            </button>
          </div>
        </div>

        <div className="picclass">
          <img src="/img/bg4.png" alt="image" />
        </div>

      </section>

      <section className='second-section'>
        {/* <h1 id="About" className="section-heading">About Me</h1> */}
        <div className='grid md:grid-cols-3 md:gap-24 gap-10 items-center'>

          <div className='column'>
            <div className="dummy-dashboard">

              <div className='grid grid-cols-2 gap-3'>
                <div className="bars">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="grid-box">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="header"></div>
              <div className='grid gap-2'>
                <div className="line short"></div>
                <div className="line"></div>
                <div className="line medium mb-0"></div>
              </div>
              <div className='chart'>

                <div className="line-chart">

                  <svg viewBox="0 0 220 100" preserveAspectRatio="none">
                    <path
                      id="chartPath"
                      d="
                        M0,30 

                        L20,80
                        
                        L40,50 
                      
                        L60,80 
                      
                        L80,70 
                       
                        L100,30
                        
                        L120,60
                        
                        L140,30
                        L160,80
                        L180,40
                        L200,20
                        L220,80
                      "
                      className="chart-line"
                    />

                    <circle r="3" className="moving-dot">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#chartPath" />
                      </animateMotion>
                    </circle>

                  </svg>
                </div>
              </div>
              <div className='box-chart pb-10 sm:pb-24'></div>

            </div>
          </div>

          <div className='column'>
            <div className="timeline">

              <div className="timeline-item" data-aos="fade-up" data-aos-delay="0">
                <h4>Understand your business & workflow</h4>
                <div className="line"></div>
              </div>

              <div className="timeline-item" data-aos="fade-up" data-aos-delay="150">
                <h4>Design simple and efficient solutions</h4>
                <div className="line"></div>
              </div>

              <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                <h4>Build custom systems tailored to you</h4>
                <div className="line"></div>
              </div>

              <div className="timeline-item" data-aos="fade-up" data-aos-delay="450">
                <h4>Automate tasks and reduce manual work</h4>
                <div className="line"></div>
              </div>

              <div className="timeline-item" data-aos="fade-up" data-aos-delay="600">
                <h4>Improve performance and handle growth smoothly</h4>
                <div className="line"></div>
              </div>

            </div>
          </div>

          <div className='column border-card'>
            <div className="space-y-4">

              <div className="group transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
                <h4>Who I Work With</h4>
                <h3>Small businesses & startups</h3>
              </div>

              <div className="group transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="250">
                <h4>What I Build</h4>
                <h3>Custom websites & management systems</h3>
              </div>

              <div className="group transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
                <h4>What You Get</h4>
                <h3>Clean, scalable systems that save time</h3>
              </div>

              <div className="group transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="550">
                <h4>My Approach</h4>
                <h3>Simple, practical, and solution focused</h3>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="third-section">
        <h2 className='section-heading'>Technologies I use to build scalable systems</h2>
        <div className="tech-grid">

          {[
            { src: "/img/html.png", name: "HTML" },
            { src: "/img/css-3.png", name: "CSS" },
            { src: "/img/js-file.png", name: "Javascript" },
            { src: "/img/atom.png", name: "React JS" },
            { src: "/img/node.png", name: "Node JS" },
            { src: "/img/mongodb.png", name: "MongoDB" },
            { src: "/img/mysql.png", name: "MySQL" },
            { src: "/img/python.png", name: "Python" },
            { src: "/img/github.png", name: "Github" },
            { src: "/img/oracle.png", name: "Oracle" },
          ].map((item, i) => (

            <div className="tech-card" key={i}>
              <img src={item.src} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className='fourth-section grid grid-cols-1 md:grid-cols-2 gap-9'>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-left">
              <span className={`tag small-text ${project.tag.toLowerCase().replace(" ", "-")}`}>
                {project.tag}
              </span>

              <h2>{project.name}</h2>
              <p>{project.desc}</p>

              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-item small-text">{t}</span>
                ))}
              </div>

              <NavLink to={project.link}>
                <button>Explore Project →</button>
              </NavLink>
            </div>

            <div className="preview-box">
              <div className="img-card card1">
                <img src={project.images[0]} alt="" />
              </div>
              <div className="img-card card2">
                <img src={project.images[1]} alt="" />
              </div>
            </div>

          </div>
        ))}

      </section>

      <section className="work-section">
        <h2 className='section-heading'>How I Work</h2>

        <div className="work-flow">
          <div className="progress-line"></div>

          {[
            "Understand your business",
            "Plan efficient solution",
            "Build tailored system",
            "Automate workflows",
            "Scale & optimize"
          ].map((step, i) => (
            <div className="work-step" key={i}>
              <div className="dot"></div>
              <div className='step-card'>
                <h4 className=''>{step}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box pt-10">
          <h2 className='section-heading '>Let’s build something that actually works</h2>
          <h3 className='mb-4 sm:mb-8'>
            If you need a system that saves time, reduces manual work, and scales with your business — let’s talk.
          </h3>

          <div className="cta-buttons">
            <button className="primary" onClick={() => setOpen(true)}>
              Contact Me
            </button>
            <NavLink target="_blank" to={"https://drive.google.com/file/d/13iPQrr9hqJwfYVcyWkbrpW4pmpztAZf3/view?usp=drivesdk"} className="secondary">View Resume</NavLink>
          </div>
        </div>
      </section>

      <footer className="footer grid md:grid-cols-3 ">

        <div className="footer-left">
          <h2 className='borel-regular'>Abbas Vajwana</h2>
          <h3 className='big-text'>Building systems that simplify business operations.</h3>
        </div>

        <div className="footer-links">
          <a href="#about" className='big-text'>About</a>
          <a href="#projects" className='big-text'>Projects</a>
          <a href="#contact" className='big-text'>Contact</a>
        </div>

        <div className="footer-contact text-center md:text-end">
          <h2 className='md:mb-3 mb-1'>Lets Connect</h2>
          <h3 className='big-text'>Got a project? I reply faster than most APIs.</h3>

          <div className="icons">

            <NavLink
              to="https://wa.me/9602652152"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/whatsapp (1).png" width="30" height="30" alt="" />
            </NavLink>

            <NavLink
              to="https://www.instagram.com/abbas._.vajwana/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/instagram.png" width="30" height="30" alt="" />
            </NavLink>

            <NavLink
              to="https://www.linkedin.com/in/abbas-wajvana/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/linkedin.png" width="30" height="30" alt="" />
            </NavLink>

          </div>
        </div>

        <p className="copyright">
          © 2026 Abbas Wajvana. Built with intention.
        </p>

      </footer>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-slate-800/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>

          {/* Modal */}
          <div className="contact-modal relative w-full max-w-md bg-[#0f0f0f] text-white rounded-2xl shadow-2xl p-6 animate-fadeIn">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3>Let’s Work Together</h3>
              <button
                onClick={() => setOpen(false)}
                className=" cursor-pointer text-white/60 hover:text-white text-xl"
              >
                X
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-white/10 focus:border-white/30 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-white/10 focus:border-white/30 outline-none"
              />

              <textarea
                name="message"
                placeholder="What do you need?"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-white/10 focus:border-white/30 outline-none"
              />

              <button
                type="submit"
                className="w-full primary rounded py-3"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      )}

    </div >
  );
};

export default App;
