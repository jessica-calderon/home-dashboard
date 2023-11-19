import React, { useEffect, useState } from 'react';

const TodayDateWidget: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentDate(new Date()), 60000); // Update every minute
        return () => {
            clearInterval(timer);
        };
    }, []);

    // Format date components
    const dayOfMonth = currentDate.getDate();
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });


    return (
        <div className="flex flex-col items-center justify-center bg-red-800 text-white p-4 rounded shadow text-center">
            <div className="text-6xl font-bold">{dayOfMonth}</div>
            <div className="text-3xl">{dayOfWeek}</div>
            <div className="text-xl mb-2">{monthYear}</div>
        </div>
    );
};

export default TodayDateWidget;
