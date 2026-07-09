import { useEffect, useState } from "react";
import "./Process.css";
import { processData } from "./ProcessData";

export default function Process() {

    const [active, setActive] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % processData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="process-section">
            <div>

                <div className="heading-center">

                    <h2 className="section-heading">
                        How I Work
                    </h2>

                    <p>
                        A streamlined workflow that transforms ideas into reliable,
                        scalable digital products.
                    </p>

                </div>


                <div className="relative">

                    <div className="process-line"></div>

                    <div
                        className="process-progress"
                        style={
                            isMobile
                                ? {
                                    height: `${(active / processData.length) * 120}%`,
                                }
                                : {
                                    width: `${(active / processData.length) * 100}%`,
                                }
                        }
                    />


                    <div className="grid md:grid-cols-5 md:gap-6 gap-8">

                        {processData.map((step, index) => {

                            const Icon = step.icon;

                            return (

                                <div key={step.id} className={`process-item ${active === index ? "active" : ""}`}>

                                    <div className="timeline-circle">
                                        <span>{step.id}</span>
                                    </div>

                                    <div className="vertical-line"></div>

                                    <div className='process-card' >

                                        <div className="process-icon">
                                            <Icon size={38} />
                                        </div>

                                        <h3>{step.title}</h3>
                                        <p>{step.subtitle}</p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}