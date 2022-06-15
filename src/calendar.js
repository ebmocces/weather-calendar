import React, { useState } from "react";
import moment from "moment";

import weatherData from './data.json';

import CalendarMonth from "./calendar-month";

function buildMonths () {
    const weather = weatherData.data;
    const months = []
    let i = 0;

    while (i < 12) {
        const daysToDate = moment(2022).month(i-1).endOf('month').diff(moment(2022).startOf('year'), 'days');
        const sliceStart = daysToDate === 0 ? 0 : daysToDate + 1 ;
        const sliceEnd = sliceStart + moment().month(i).daysInMonth();
        months[i] = weather.slice(sliceStart, sliceEnd);
        i++;
    }

    return (months);
}

export default function Calendar(props) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [dimmedWeather, setDimmedWeather] = useState(null);
    const months = buildMonths();

    function dateSelect(e) {
        e.preventDefault();
        setSelectedDate(e.target.value);
    }

    function dateHover(weather) {
        setDimmedWeather(weather);
    }

    return (
        <div className="calendar">
            {/* <div className="selected-date-details">
                <span className="icon rainy"></span>
                <span className="selected-date">Wednesday 4th February</span>
                <span className="weather">Rainy</span>
            </div> */}
            {months.map((item,index)=>{
                return (<CalendarMonth
                            key={index}
                            month={item}
                            selectedDate={selectedDate}
                            weatherToDim={dimmedWeather}
                            onClick={dateSelect}
                            onHover={dateHover}
                        />);
            })}
        </div>
    );
}
