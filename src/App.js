import React, { useState } from "react";
import "./App.scss";
import ClockPage from "./components/ClockPage";
import TimeZone from "./components/TimeZone";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const [zone, setZone] = useState([
        "Europe/London",
        "Asia/Tokyo",
        "Asia/Kuala_Lumpur",
        "America/Chicago",
    ]);

    const handleChangeZone = (item) => {
        const findZone = zone.findIndex((value) => value === item.zone);
        if (findZone > 0) return;

        setZone([...zone, item]);
        console.log(zone);
    };

    const handleRemoveClock = (item) => {
        console.log("item", item);
        const findZone = zone.findIndex((value) => value === item.zone);
        if (findZone < 0) return;

        const newZone = [...zone];
        newZone.splice(findZone, 1);
        setZone(newZone);
    };

    return (
        <div className="app">
            <Header />
            <Main />
            <div className="main-time">
                {zone.length > 0 &&
                    zone.map((item) => (
                        <ClockPage
                            key={item}
                            timeZone={item}
                            onClick={handleRemoveClock}
                        />
                    ))}
            </div>
            <TimeZone handleChangeZone={handleChangeZone} />
        </div>
    );
}

export default App;
