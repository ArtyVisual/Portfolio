import { Code2 } from "lucide-react";
import "./TechStack.css";
import { techSections } from "./techData";

export default function TechStack() {
  return (
    <section>

      <div className="heading-center">
        <h2 className="section-heading">
          Tech Stack
        </h2>

        <p>Building with modern technologies</p>
        <p>30+ technologies powering scalable applications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-8 gap-4">
        {techSections.map((section) => {
          const HeadingIcon = section.iconHeading;

          return (
            <div className="tech-card" key={section.title}>

              <div>
                <div className="flex items-center gap-3">
                  <div className="heading-icon">
                    <HeadingIcon size={22} />
                  </div>
                  <h3 className="tech-title">{section.title}</h3>
                </div>
                <p className="tech-subtitle">{section.subtitle}</p>
              </div>

              <div className="divider" />

              <div className="grid grid-cols-3 md:gap-4 gap-2 mt-5">
                {section.techs.map((tech) => {
                  
                  const Icon = tech.icon;

                  return (
                    <div className="tech-icon-card" key={tech.name}>
                      <Icon
                        className="tech-icon"
                        style={{ color: tech.color }}
                      />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="tech-footer cta-buttons">

        <div className="tech-footer-left flex gap-4 items-center">
          <div className="code-icon">
            <Code2 size={22} />
          </div>
          <p className="mb-0">
            I continuously explore modern tools
            to build scalable, high-performance
            web applications.
          </p>
        </div>

        <button className="primary">
          Let's Build Something Great
        </button>

      </div>

    </section>
  );
}