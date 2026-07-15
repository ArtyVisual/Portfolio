import { useEffect, useState } from "react";
import "./Network.css";
import { links, nodes } from "./networkData";

export default function Network() {

    const getNode = (id) =>
        nodes.find((node) => node.id === id);

    const [active, setActive] = useState([]);

    const flow = [
        { x: 50, y: 0, active: 0 },      // Client
        { x: 50, y: 30, active: 1 },     // Website
        { x: 22, y: 50, active: 2 },     // Dashboard
        { x: 78, y: 50, active: 3 },     // Automation
        { x: 50, y: 68, active: 4 },     // Database
        { x: 50, y: 96, active: 5 },     // Growth
    ];

    const [packet1, setPacket1] = useState(flow[0]);
    const [packet2, setPacket2] = useState(null);

    useEffect(() => {

        let step = 0;

        const interval = setInterval(() => {

            switch (step) {

                case 0:
                    setPacket1(flow[1]);
                    setPacket2(flow[1]);
                    setActive([1]);
                    break;

                case 1:
                    setPacket1(flow[2]);
                    setPacket2(flow[3]);
                    setActive([2, 3]);
                    break;

                case 2:
                    setPacket1(flow[4]);
                    setPacket2(flow[4]);
                    setActive([4]);
                    break;

                case 3:
                    setPacket1(flow[5]);
                    setPacket2(null);
                    setActive([5]);
                    break;

                case 4:
                    setPacket1(flow[0]);
                    setPacket2(null);
                    setActive([0]);
                    break;

            }

            step = (step + 1) % 5;

        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="network">

            <svg
                className="network-svg"
                viewBox="0 0 500 620"
            >

                {/* CONNECTIONS */}

                {links.map(([from, to], index) => {

                    const start = getNode(from);
                    const end = getNode(to);

                    return (

                        <g key={index}>

                            <line
                                x1={start.x}
                                y1={start.y}
                                x2={end.x}
                                y2={end.y}
                                className="network-line"
                            />

                        </g>
                    );

                })}
            </svg>

            {nodes.map((node, index) => {

                const Icon = node.icon;

                return (

                    <div
                        key={node.id}
                        className={`network-node ${active.includes(index) ? "active" : ""}`}
                        style={{
                            left: node.x,
                            top: node.y,
                        }}
                    >

                        <div className={`node-circle`}>
                            <Icon size={22} strokeWidth={2} />
                        </div>

                        <span className="node-title">
                            {node.title}
                        </span>

                    </div>
                );
            })}

            {/* DATA PACKET */}


            <div
                className="packet"
                style={{
                    left: `${packet1.x}%`,
                    top: `${packet1.y}%`
                }}
            />

            {packet2 && (

                <div
                    className="packet"
                    style={{
                        left: `${packet2.x}%`,
                        top: `${packet2.y}%`
                    }}
                />

            )}

        </div>

    );
}