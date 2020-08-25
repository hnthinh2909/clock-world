import React from "react";
import useClock from "../../hooks/useClock";
import "./ClockPage.scss";

function ClockPage(props) {
    const { timeZone, onClick } = props;
    const { timeString } = useClock(timeZone);

    const handleClick = (item) => {
        if (!onClick) return;
        onClick(item);
    };

    return (
        <div className="clock-page">
            {timeString.map((item) => (
                <div
                    key={item}
                    className="time-box"
                    onClick={() => handleClick(item)}
                >
                    <b className="time-box__zone">{item.timeZone}</b>
                    <p className="time-box__time">{item.time}</p>
                    <p className="time-box__date">{item.date}</p>
                </div>
            ))}
        </div>
    );
}

export default ClockPage;
