import React, { useEffect, useState } from 'react';
interface Holiday {
    date: string;
    name: string;
}
const USHolidaysWidget: React.FC = () => {
    const [holidays, setHolidays] = useState<Holiday[]>([]);    const fetchHolidays = async (year: number) => {
        try {
            const response = await fetch(`https://api.openholidaysapi.org/en/holidays?year=${year}&country=US`);
            if (!response.ok) {
                throw new Error('Failed to fetch holidays');
            }
            const data = await response.json();
            return data.holidays; // Adjust according to the actual response structure
        } catch (error) {
            console.error(error);
            return [];
        }
    };
    
    useEffect(() => {
        const year = new Date().getFullYear();
        fetchHolidays(year).then(setHolidays);
    }, []);

    return (
        <div className="bg-gray-800 text-white p-4 rounded shadow">
            <h2 className="text-xl mb-2">US Holidays {new Date().getFullYear()}</h2>
            <ul>
                {holidays.map((holiday, index) => (
                    <li key={index} className="mb-1">
                        {holiday.date}: {holiday.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default USHolidaysWidget;
