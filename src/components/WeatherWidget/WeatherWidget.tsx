import React, { useEffect, useState } from 'react';
import { TbSun, TbCloud, TbCloudRain, TbCloudFog } from 'react-icons/tb';
interface WeatherData {
    location: string;
    temperature: number;
    condition: string;
}

const WeatherWidget: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeather = async () => {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const city = 'San Antonio'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        console.log("URL for API request:", url);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Weather data fetch failed');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchWeather().then(data => {
            
            if (data) {
                const celsius = data.main.temp;
                const fahrenheit = (celsius * 9/5) + 32;
            
                const formattedData = {
                    location: data.name,
                    temperature: parseFloat(fahrenheit.toFixed(1)), // Format to one decimal place
                    condition: data.weather[0].main 
                };
                setWeatherData(formattedData);
            }
        });
    }, []);
    

    // Choose an icon based on the weather condition
    const getWeatherIcon = (condition: string) => {
        switch (condition) {
            case 'Clear':
                return <TbSun />;
            case 'Clouds':
                return <TbCloud />;
            case 'Rain':
                return <TbCloudRain />;
            case 'Mist':
                return <TbCloudFog />;
            // Add more cases later
            default:
                return null;
        }
    };

    return (
        <div className="p-4 rounded bg-blue-500 text-white">
            {weatherData && (
                <div className='flex flex-col items-center justify-center'>
                    <div className="text-xl">{weatherData.location}</div>
                    <div className="text-5xl">{weatherData.temperature}°F</div>
                    <div className="text-xl flex gap-2 items-center">
                        {getWeatherIcon(weatherData.condition)}
                        {weatherData.condition}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherWidget;
