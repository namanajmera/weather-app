import Image from "next/image";

const CountryWeekData = () => {
    const weekData = [
        {
            id: 1,
            day: "Today (Sun)",
            date: "Mar 6",
            imagePath: "/weather/01_sunny_color.svg",
            weather: "Sunny",
            temperature: "15-20°C",
            airQuality: "AQI 67",
        },
        {
            id: 2,
            day: "Mon",
            date: "Mar 7",
            imagePath: "/weather/04_sun_cloudy_color.svg",
            weather: "Cloudy",
            temperature: "16-22°C",
            airQuality: "AQI 71",
        },
        {
            id: 3,
            day: "Tue",
            date: "Mar 8",
            imagePath: "/weather/07_lightning_color.svg",
            weather: "Lightning",
            temperature: "17-20°C",
            airQuality: "AQI 65",
        },
        {
            id: 4,
            day: "Wed",
            date: "Mar 9",
            imagePath: "/weather/11_heavy_rain_color.svg",
            weather: "Heavy Rain",
            temperature: "16-22°C",
            airQuality: "AQI 32",
        },
    ];

    const containerClasses =
        "font-extralight text-[0.75rem] leading-[133%] text-white/88 text-center";
    return (
        <div className="flex flex-col border border-white/15 rounded-xl p-4 pt-2 w-[25.81rem] h-[15.12rem] backdrop-blur-[80px] shadow-xl bg-[#1d2837] shadow-black/20">

            {/* Locations */}
            <ul className="flex space-x-3 p-2 pl-0">
                {["New York", "Hongkong", "Tokyo"].map((city, index) => (
                    <li key={index} className={`text-[0.88rem] leading-[143%] text-white/88 text-center ${index === 0 ? "font-medium" : "font-light"}`}>
                        {city}
                    </li>
                ))}
            </ul>

            <hr className="opacity-25" />

            {/* Weather Data */}
            <div className="flex space-x-9 justify-start items-center p-4">
                {weekData.map((ele) => (
                    <div key={ele.id} className="flex flex-col justify-center items-center space-y-1.5">
                        <h4 className="font-medium text-[0.75rem] leading-[133%] text-white/88 text-center">
                            {ele.day}
                        </h4>
                        <span className={containerClasses}>{ele.date}</span>
                        <Image src={ele.imagePath} alt={ele.weather} width={48} height={48} />
                        <h5 className="font-medium text-[0.75rem] leading-[133%] text-white/88 text-center">
                            {ele.weather}
                        </h5>
                        <span className={containerClasses}>{ele.temperature}</span>
                        <span className={containerClasses}>{ele.airQuality}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountryWeekData;