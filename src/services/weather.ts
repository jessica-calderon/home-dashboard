export const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY; 
    const city = 'San Antonio';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
