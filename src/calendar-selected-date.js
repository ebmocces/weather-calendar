import moment from "moment";
import React from "react";

export default function SelectedDateDisplay (props) {
    const {
        selectedDate,
        selectedWeather
    } = props

    if (!selectedDate) {
        return (
            <div className="selected-date-display" />
        )
    } else{
        return (
            <div className="selected-date-display">
                <span className="icon">{selectedWeather}</span>
                <span className="">{selectedDate.format('dddd Do MMMM, YYYY')}</span>
            </div>
        );
    }
}