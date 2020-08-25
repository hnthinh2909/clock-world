import { useState, useEffect } from "react";

function formatDate(zone) {
    const time = new Date().toLocaleTimeString("en-GB", {
        timeZone: zone,
    });

    const date = new Date().toLocaleDateString("en-GB", {
        timeZone: zone,
    });

    const timeZone = zone.split("/").slice(-1)[0];
    return {
        zone: zone,
        timeZone: timeZone,
        time: time,
        date: date,
    };
}

function useClock(props) {
    const [timeString, setTimeString] = useState([]);
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const newTimeString = formatDate(props);

            setTimeString([...timeString, newTimeString]);
        }, 1000);

        return () => {
            console.log("Clock cleanup !");
            clearInterval(clockInterval);
        };
    }, []);

    return { timeString };
}

export default useClock;
