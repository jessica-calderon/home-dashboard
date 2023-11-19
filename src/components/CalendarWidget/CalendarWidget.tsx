import React, { useState } from 'react';
import { format, startOfWeek, addMonths, subMonths, startOfMonth, endOfMonth, endOfWeek, eachDayOfInterval, isSameDay } from 'date-fns';

const CalendarWidget: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const today = new Date();

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "MMMM yyyy";
    const daysOfWeek = eachDayOfInterval({ start: startDate, end: endDate });

    return (
        <div className="bg-gray-300 p-4 rounded shadow text-black">
            <div className="flex items-center justify-between">
                <button onClick={prevMonth}>&lt;</button>
                <span className='font-bold'>{format(currentMonth, dateFormat)}</span>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-1 mt-4">
                {daysOfWeek.map((day, i) => (
                    <div key={i} className="py-1 text-center">
                        {i < 7 && <div className="font-bold">{format(day, 'EEE')}</div>}
                        <div className={`
                            ${format(day, 'MMM') === format(currentMonth, 'MMM') ? 'text-gray-700' : 'text-gray-400'}
                            ${isSameDay(day, today) ? 'bg-blue-600 text-white rounded-full' : ''}
                        `}>
                            {format(day, 'd')}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarWidget;
