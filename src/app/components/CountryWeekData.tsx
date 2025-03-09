"use client";

import { WeekState } from "@/models/weekData";
import { get5DaysWeather } from "@/utils/apis";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const CountryWeekData = () => {
    const top3WeatherData = [
        {
            id: "mumbai",
            place: "Mumbai",
            countryCode: "IN",
        },
        {
            id: "newYork",
            place: "New York",
            countryCode: "US",
        },
        {
            id: "dubai",
            place: "Dubai",
            countryCode: "AE",
        },
    ];
    const [weekData, setWeekData] = useState<WeekState[]>();
    const [currentSelected, setCurrentSelected] = useState<string>("Mumbai");

    const get5DaysWeatherData = useCallback((place: string) => {
        setCurrentSelected(place);
        get5DaysWeather(place)
            .then((response) => {
                const forecast = response.data.list.filter((ele) =>
                    ele.dt_txt.includes("12:00:00")
                ).slice(0, 4); // Select only 4 items

                const data = forecast.map((e, index) => ({
                    id: index + 1,
                    day: new Date(e.dt_txt).toLocaleDateString("en-US", { weekday: "short" }),
                    date: new Date(e.dt_txt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
                    imagePath: getImageURL(e.weather[0].description),
                    weather: e.weather[0].description,
                    temperature: `${Math.round(e.main.temp_min - 273.15)}°C`,
                    airQuality: `AQI ${Math.floor(Math.random() * 50) + 10}`,
                }));
                setWeekData(data);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }, [setWeekData]);

    const getImageURL = (descripition: string) => {
        if (["clear sky"].includes(descripition)) {
            return "/weather/01_sunny_color.svg";
        } else {
            return "/weather/04_sun_cloudy_color.svg";
        }
    };

    useEffect(() => {
        get5DaysWeatherData("Mumbai");
    }, [get5DaysWeatherData]);

    const containerClasses =
        "font-extralight text-[0.75rem] leading-[133%] text-white/88 text-center";
    return (
        <div className="flex flex-col border border-white/15 rounded-xl p-4 pt-2 w-[25.81rem] h-[15.12rem] backdrop-blur-[80px] shadow-xl bg-[#1d2837] shadow-black/20">
            {/* Locations */}
            <ul className="flex space-x-3 p-2 pl-0">
                {top3WeatherData.map((data, index) => (
                    <li
                        key={index}
                        className={`text-[0.88rem] leading-[143%] text-white/88 text-center ${currentSelected === data.place ? "font-medium" : "font-light"
                            } hover:cursor-pointer`}
                        onClick={() => get5DaysWeatherData(data.place)}
                    >
                        {data.place}
                    </li>
                ))}
            </ul>

            <hr className="opacity-25" />

            {/* Weather Data */}
            <div className="flex space-x-9 justify-start items-center p-4">
                {weekData &&
                    weekData.map((ele: WeekState) => (
                        <div
                            key={ele.id}
                            className="flex flex-col justify-center items-center space-y-1.5"
                        >
                            <h4 className="font-medium text-[0.75rem] leading-[133%] text-white/88 text-center">
                                {ele.day}
                            </h4>
                            <span className={containerClasses}>{ele.date}</span>
                            <Image
                                src={ele.imagePath}
                                alt={ele.weather}
                                width={48}
                                height={48}
                            />
                            <h5 className="font-medium text-[0.75rem] leading-[133%] text-white/88 text-center capitalize">
                                {ele.weather}
                            </h5>
                            <span className={containerClasses}>{ele.temperature}</span>
                            {/* <span className={containerClasses}>{ele.airQuality}</span> */}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CountryWeekData;
