"use client";

import { useState } from "react";

export default function ColorBox({ children, blue, red }) {
    const [sideBar, setSideBar] = useState(null);
    const [bgColor, setBgColor] = useState("");
    const [textColor, setTextColor] = useState("")
    const blueSideBar = () => {
        setSideBar(true);
        setBgColor("blue");
        setTextColor("white");
    }
    const redSideBar = () => {
        setSideBar(false);
        setBgColor("red");
        setTextColor("white");
    }
    return (
        <>
            <section className="w-full h-screen" style={{ backgroundColor: bgColor, color: textColor }}>
                {children}
                <div className="flex items-center mb-2">
                    <h3>Choose: </h3>
                    <div>
                        <button onClick={blueSideBar} className="border-2 rounded-lg px-3 py-2 mx-2" type="button">Left</button>
                        <button onClick={redSideBar} className="border-2 rounded-lg px-3 py-2 mx-2" type="button">Right</button>
                    </div>
                </div>
                <hr />
                {sideBar === null ? null : sideBar ? blue : red}
            </section >
        </>
    );
}