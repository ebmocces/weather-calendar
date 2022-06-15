import React, {useState} from "react";

export default function DateButton(props) {
    const selectedClass = props.selected ? 'selected' : '';
    const dimmed = props.dimmed;

    const classes = `day ${props.weather} ${selectedClass} ${dimmed !== props.weather ? 'dimmed' : ''}`;

    return (
        <div className={classes}>
            <button
                onClick={props.onClick}
                value={`${props.day.month}-${props.day.day}`}
                onMouseEnter={() => {props.onHover(props.weather)}}
            />
        </div>
    )
}
