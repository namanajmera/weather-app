import Image from "next/image";

const DayWiseWeather = () => {
    const dayWiseData = [
        {
            id: 1,
            day: "Today",
            imagePath: "/weather/01_sunny_color.svg",
            weather: "sunny",
            tempratureC: "27°",
            tempratureF: "17°",
        },
        {
            id: 2,
            day: "Mon",
            imagePath: "/weather/07_lightning_color.svg",
            weather: "sunny",
            tempratureC: "27°",
            tempratureF: "17°",
        },
        {
            id: 3,
            day: "Tue",
            imagePath: "/weather/14_thunderstorm_color.svg",
            weather: "sunny",
            tempratureC: "27°",
            tempratureF: "17°",
        },
        {
            id: 4,
            day: "Wed",
            imagePath: "/weather/38_blowing_sand_color.svg",
            weather: "sunny",
            tempratureC: "27°",
            tempratureF: "17°",
        },
        {
            id: 5,
            day: "Tur",
            imagePath: "/weather/07_lightning_color.svg",
            weather: "sunny",
            tempratureC: "27°",
            tempratureF: "17°",
        },
        {
            id: 6,
            day: "Fri",
            imagePath: "/weather/04_sun_cloudy_color.svg",
            weather: "sunny",
            tempratureC: "27°",
            tempratureF: "17°",
        },
        {
            id: 7,
            day: "Sat",
            imagePath: "/weather/04_sun_cloudy_color.svg",
            weather: "sunny",
            tempratureC: "27°",
            tempratureF: "17°",
        },
    ];
    return (
        <div className="flex flex-col justify-center border border-white/15 rounded-xl p-[1.88rem] w-[18.75rem] h-[25.5rem] backdrop-blur-[80px] shadow-lg shadow-black/20 bg-[#121212] space-y-4">
            {dayWiseData &&
                dayWiseData.map((ele) => (
                    <div key={ele.id} className="flex justify-between items-center">
                        <span className="font-medium text-base leading-[125%] text-white">
                            {ele.day}
                        </span>
                        <Image
                            src={ele.imagePath}
                            alt={ele.weather}
                            width={36}
                            height={36}
                        />
                        <div className="flex justify-between space-x-2.5">
                            <span className="font-medium text-base leading-[125%] text-white">
                                {ele.tempratureC}
                            </span>
                            <span className="font-medium text-base leading-[125%] text-white/68">
                                {ele.tempratureF}
                            </span>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default DayWiseWeather;
