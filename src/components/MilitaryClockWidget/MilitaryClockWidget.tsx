import React, { useEffect, useState } from 'react';
import { TbClock24 } from "react-icons/tb";

const MilitaryClockWidget: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000); // Update interval to 1 second
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-green-950 text-white p-4 rounded shadow">
            <div className="flex items-center text-4xl font-mono">
                <TbClock24 className="mr-1 p-1" />
                {currentTime.toLocaleTimeString('en-US', { hour12: false, minute: '2-digit', hour: '2-digit' })}
            </div>
        </div>
    );
};

export default MilitaryClockWidget;
