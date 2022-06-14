import React from 'react';
import Calendar from './calendar';

// import weather from './data.json';

export default function App() {
    
    return (
        <div>
            <h1>Weather Calendar</h1>
            <div>
                <Calendar year="2022" />
            </div>
        </div>
    );
}
