import React, {useState} from "react";

export default function DateButton(props) {
    const [isSelected, setIsSelected] = useState(Boolean);

    const selectedClass = isSelected ? 'selected' : '';
    
    const classes = `day ${props.weather} ${selectedClass}`;

    function dateSelect(e) {
        e.preventDefault();
        setIsSelected(true);
    }

    function dateBlur(e) {
        e.preventDefault();
        setIsSelected(false);
    }

    return (
        <div className={classes}>
            <button
                onBlur={dateBlur}
                onClick={dateSelect}
                value={`${props.day.month}-${props.day.day}`}
            />
        </div>
    )
}
