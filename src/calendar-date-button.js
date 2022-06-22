import React from "react";

export default function DateButton(props) {
    const selectedClass = props.selected ? 'selected' : '';
    const dimmed = props.dimmed;

    const classes = `day ${props.weather} ${selectedClass} ${dimmed !== props.weather && dimmed !== null ? 'dimmed' : ''}`.trim();

    return (
        <div className={classes} data-weather={props.weather}>
            <button
                onClick={props.onClick}
                value={`${props.day.month}-${props.day.day}`}
                onMouseEnter={() => {props.onHover(props.weather)}}
                onMouseLeave={() => {props.onHover('')}}
            />
        </div>
    )
}
