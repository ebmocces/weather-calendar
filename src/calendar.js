import React from "react";
import moment from "moment";

import weatherData from './data.json';

import CalendarMonth from "./calendar-month";

function buildMonths () {
    const weather = weatherData.data;
    const months = []
    let i = 0, tempData = [];

    while (i < 12) {
        tempData = weather;
        const daysToDate = moment(2022).month(i-1).endOf('month').diff(moment(2022).startOf('year'), 'days');
        const sliceStart = daysToDate === 0 ? 0 : daysToDate + 1 ;
        const sliceEnd = sliceStart + moment().month(i).daysInMonth();
        months[i] = tempData.slice(sliceStart, sliceEnd);
        i++;
    }

    return (months);
}

export default function Calendar(props) {
    const months = buildMonths(props.year);
    
    return (
        <div className="calendar">
            {months.map((item,index)=>{
                return (<CalendarMonth key={index} month={item} />);
            })}
        </div>
    );
}
