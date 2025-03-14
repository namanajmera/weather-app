import axios from "axios"

export const getWeatherData = async (city: string | null) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
    return response;
}

export const get5DaysWeather = async (query: string | null) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
    return response;
}