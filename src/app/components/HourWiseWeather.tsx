
import { LocationState } from "@/models/locationModel";
import { HourState } from "@/models/weekData";
import { get5DaysWeather } from "@/utils/apis";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
    location: LocationState;
};
const HourWiseWeather = ({ location }: Props) => {
    const [hourData, setHourData] = useState<HourState[]>();

    const getHourlyWeatherData = useCallback(() => {
        get5DaysWeather(location.city)
            .then((response) => {
                const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

                const hourlyData = response.data.list.filter(
                    (ele: any) => ele.dt_txt.startsWith(today) // ✅ Filter only today's data
                );

                const formattedData = hourlyData.map((e: any, index: number) => ({
                    id: index + 1,
                    time: new Date(e.dt_txt).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        hour12: true,
                    }), // 12 AM, 1 AM
                    temperature: `${Math.round(e.main.temp - 273.15)}°C`, // Convert Kelvin to Celsius
                    weather: e.weather[0].description, // Weather condition
                    imagePath: getImageURL(e.weather[0].description), // Weather icon path
                }));

                console.log("Hourly Weather:", formattedData);
                setHourData(formattedData);
            })
            .catch((error) => {
                console.error("Error fetching hourly weather data:", error);
            });
    }, [location.city, setHourData]);

    useEffect(() => {
        getHourlyWeatherData();
    }, [getHourlyWeatherData]);

    const getImageURL = (descripition: string) => {
        if (["clear sky"].includes(descripition)) {
            return "/weather/01_sunny_color.svg";
        } else {
            return "/weather/04_sun_cloudy_color.svg";
        }
    };

    return (
        <div className="flex justify-between items-center border border-white/15 rounded-xl px-[2.19rem] py-[2.38rem] w-[30.62rem] h-[12.94rem] backdrop-blur-[80px] shadow-lg shadow-black/20 bg-[linear-gradient(#1d2837,rgba(0,0,0,0.2))]">
            {hourData &&
                hourData.map((ele) => (
                    <div key={ele.id} className="flex flex-col items-center space-y-5">
                        <span className="font-medium text-base leading-[125%] text-center text-white">
                            {ele.time}
                        </span>
                        <Image
                            src={ele.imagePath}
                            alt={ele.weather}
                            width={36}
                            height={36}
                        />
                        <span className="font-semibold text-xl text-white">
                            {ele.temperature}
                        </span>
                    </div>
                ))}
        </div>
    );
};

export default HourWiseWeather;
