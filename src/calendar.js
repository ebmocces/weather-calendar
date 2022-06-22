import moment from "moment";
import React, { useState } from "react";

import weatherData from './data.json';

import CalendarMonth from "./calendar-month";
import SelectedDateDisplay from "./calendar-selected-date";

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
    const [selectedDate, setSelectedDate] = useState(moment());
    const [selectedWeather, setSelectedWeather] = useState(null);
    const [dimmedWeather, setDimmedWeather] = useState(null);
    const months = buildMonths();

    function dateSelect(e) {
        const selectedDatesWeather = e.target.parentElement.getAttribute('data-weather');
        const selectedDateObject = moment(`2022-${e.target.value}`);

        e.preventDefault();
        
        setSelectedDate(selectedDateObject);
        setSelectedWeather(selectedDatesWeather);
    }

    function dateHover(weather) {
        weather !== ''
            ? setDimmedWeather(weather)
            : setDimmedWeather(null);
    }

    return (
        <div>
            <SelectedDateDisplay selectedDate={selectedDate} selectedWeather={selectedWeather} />
            <div className="calendar">
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
        </div>
    );
}
