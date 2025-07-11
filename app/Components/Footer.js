"use client"

import { useState, useEffect } from "react"

export default function Footer() {
    const [timer, setTimer] = useState(new Date());

    useEffect(() => {

        const intervalID = setInterval(() => {
            setTimer(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);



    return (
        <div className="min-h-[2.6vh] bg-black text-white">
            <div className="flex relative text-xs justify-between top-1 items-center text-green-600 font-mono font-bold hover:text-green-300 transition-colors">
                <div className="pl-6">
                    wiz@portfolio:~$
                </div>
                <div className="pr-6">{timer.toLocaleString("en-IN", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                })}</div>
            </div>

        </div>
    )
}