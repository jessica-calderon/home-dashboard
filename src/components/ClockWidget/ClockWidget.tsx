import React, { useEffect, useState } from 'react';
import { TbClock12 } from 'react-icons/tb'

const ClockWidget: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex flex-col rounded items-center justify-center bg-gray-800 text-white p-4">
            <div className="flex items-center text-5xl font-bold font-mono">
                <TbClock12 className='mr-1 p-2' />
                <span>{time.toLocaleTimeString()}</span>
            </div>
            <span className="text-xl">{time.toLocaleDateString()}</span>
        </div>
    );
};

export default ClockWidget;
