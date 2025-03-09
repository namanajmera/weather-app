"use client"

import { useEffect, useState } from "react";
import { LocationState } from "@/models/locationModel";
import { getWeatherData } from "@/utils/apis";
import Image from "next/image";

type Props = {
    location: LocationState;
};

const CurrentLocationWeather = ({ location }: Props) => {
    const [weather, setWeather] = useState<any>(null);

    useEffect(() => {
        if (location.city) {
            getWeatherData(location.city)
                .then((response) => {
                    setWeather(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching weather data:", error);
                });
        }
    }, [location.city]);

    return (
        <div className="border border-white/15 rounded-xl p-5 w-40 h-40 backdrop-blur-[80px] shadow-lg shadow-black/20 bg-[#121212] flex flex-col justify-between space-y-5">
            <div className="flex justify-between items-center">
                <h1 className="font-light text-4xl text-center text-white">
                    {weather ? `${Math.round(weather.main.temp - 273.15)}°` : "--"}
                </h1>
                <Image src="/weather/35_partly_cloudy_daytime_color.svg" alt="" width={48} height={48} priority />
            </div>
            <div>
                <h1 className="font-medium text-base leading-[125%] text-white">
                    {weather ? weather.name : "Loading..."}
                </h1>
                <span className="font-normal text-xs leading-[133%] text-white/68 capitalize">
                    {weather ? weather.weather[0].description : "Fetching data..."}
                </span>
            </div>
        </div>
    );
};

export default CurrentLocationWeather;
