import React, { useState } from "react";
import "./App.scss";
import ClockPage from "./components/ClockPage";
import TimeZone from "./components/TimeZone";

function App() {
    const [zone, setZone] = useState([
        "Asia/Ho_Chi_Minh",
        "Asia/Tokyo",
        "Europe/Rome",
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
            {zone.length > 0 &&
                zone.map((item) => (
                    <ClockPage
                        key={item}
                        timeZone={item}
                        onClick={handleRemoveClock}
                    />
                ))}
            <TimeZone handleChangeZone={handleChangeZone} />
        </div>
    );
}

export default App;
