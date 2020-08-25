import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";
import "antd/dist/antd.css";
import PropsTypes from "prop-types";

const { Option } = Select;

TimeZone.propsType = {
    handleChangeZone: PropsTypes.func,
};

TimeZone.defaultProps = {
    handleChangeZone: null,
};

function TimeZone(props) {
    const [timeZone, setTimeZone] = useState([]);
    const { handleChangeZone } = props;

    useEffect(() => {
        const axiosTimeZone = async () => {
            const response = await axios.get(
                "http://worldtimeapi.org/api/timezone"
            );
            setTimeZone(response.data);
        };

        axiosTimeZone();
    }, []);

    function handleChange(e) {
        console.log(`selected ${e}`);
        if (!handleChangeZone) return;
        handleChangeZone(e);
    }

    return (
        <div>
            <Select style={{ width: 120 }} onChange={handleChange}>
                {timeZone.length > 0 &&
                    timeZone.map((zone) => (
                        <Option value={zone} key={zone}>
                            {zone}
                        </Option>
                    ))}
            </Select>
        </div>
    );
}

export default TimeZone;
