import Image from "next/image";

const HourWiseWeather = () => {
    const hourData = [
        {
            id: 1,
            time: "Now",
            imagePath: "/weather/01_sunny_color.svg",
            weather: "sunny",
            temprature: "18°",
        },
        {
            id: 2,
            time: "10AM",
            imagePath: "/weather/07_lightning_color.svg",
            weather: "sunny",
            temprature: "18°",
        },
        {
            id: 3,
            time: "11AM",
            imagePath: "/weather/14_thunderstorm_color.svg",
            weather: "sunny",
            temprature: "18°",
        },
        {
            id: 4,
            time: "12AM",
            imagePath: "/weather/38_blowing_sand_color.svg",
            weather: "sunny",
            temprature: "18°",
        },
        {
            id: 5,
            time: "1PM",
            imagePath: "/weather/07_lightning_color.svg",
            weather: "sunny",
            temprature: "18°",
        },
        {
            id: 6,
            time: "2AM",
            imagePath: "/weather/04_sun_cloudy_color.svg",
            weather: "sunny",
            temprature: "18°",
        },
    ];
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
                            {ele.temprature}
                        </span>
                    </div>
                ))}
        </div>
    );
};

export default HourWiseWeather;
