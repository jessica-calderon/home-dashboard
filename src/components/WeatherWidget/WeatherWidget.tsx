import React from 'react';

const WeatherWidget: React.FC = () => {
    // Placeholder for weather data
    const weatherData = {
        location: 'Location Name',
        temperature: '80',
        condition: 'Sunny'
    };

    return (
        <div className="p-4 rounded bg-blue-500 text-white">
            <div className="text-xl">{weatherData.location}</div>
            <div className="text-5xl">{weatherData.temperature}°C</div>
            <div className="text-xl">{weatherData.condition}</div>
        </div>
    );
};

export default WeatherWidget;
