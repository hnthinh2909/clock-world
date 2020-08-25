import React from "react";
import useClock from "../../hooks/useClock";
import "./Main.scss";

function Main() {
    const { timeString } = useClock("Asia/Ho_Chi_Minh");
    return (
        <div className="main-clock">
            <div className="main-clock--left">
                <h3>Ho Chi Minh</h3>
            </div>

            {timeString.map((item) => (
                <div className="main-clock--right">
                    <p className="main-clock__zone">Zone: {item.zone}</p>
                    <p className="main-clock__date">Date: {item.date}</p>
                    <p className="main-clock__time">Time: {item.time}</p>
                </div>
            ))}
        </div>
    );
}

export default Main;
