import React from "react";
import moment from "moment";
import DateButton from "./calendar-date-button";


export default function CalendarMonth(props) {
    const monthData = props.month;

    const currentMonthName = moment().month(monthData[0].month-1).format("MMMM");
    const temp = moment().month(monthData[0].month-1).startOf("month").startOf("week");
    const startOfMonth = moment().month(monthData[0].month-1).startOf("month");
    const daysBuffer = temp.diff(startOfMonth, 'days') * -1;

    console.log(daysBuffer);

    return (
        <div className="calendar-month">
            <h3>{currentMonthName}</h3>
            <div className="days-of-the-week">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
            </div>
            <div className="calendar-month-dates">
                <div className={`buffer-${daysBuffer}`} />
                {monthData.map((day) => (
                    <DateButton 
                        day={day}
                        weather={day.weather}
                    />
                ))}
            </div>
        </div>
    )
}
