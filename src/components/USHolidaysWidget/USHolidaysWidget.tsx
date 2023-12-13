import React, { useEffect, useState } from 'react';
import { isToday, isAfter } from 'date-fns';


interface Holiday {
    date: string;
    name: string;
}

const USHolidaysWidget: React.FC = () => {
    const [holiday, setHoliday] = useState<Holiday | null>(null);

    const fetchHolidays = async () => {
        const year = new Date().getFullYear();
        const url = `https://holidays.abstractapi.com/v1/?api_key=${import.meta.env.REACT_APP_ABSTRACT_API_KEY}&country=US&year=${year}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchHolidays().then(holidays => {
            if (holidays) {
                const today = new Date();
                const todaysHoliday = holidays.find((h: { date: string | number | Date; }) => isToday(new Date(h.date)));
                const nextHoliday = holidays.find((h: { date: string | number | Date; }) => isAfter(new Date(h.date), today));
    
                setHoliday(todaysHoliday || nextHoliday);
            }
        });
    }, []);

    return (
        <div className="bg-gray-800 text-white p-4 rounded shadow">
            <h2 className="text-xl mb-2">{holiday ? `US Holiday - ${holiday.date === new Date().toISOString().split('T')[0] ? 'Today' : 'Upcoming'}` : 'No Holidays Found'}</h2>
            {holiday && <div>{holiday.name}</div>}
        </div>
    );
};

export default USHolidaysWidget;
