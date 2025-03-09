import Image from "next/image";

const CountryCurrentState = () => {
    const countryData = [
        {
            id: 1,
            countryName: "United States",
            countryTime: "09:30",
            weather: "Sunny",
            airQuality: "AQI 75",
            temprature: "15°-23°",
            image: "/weather/01_sunny_color.svg",
            backgroundClass: "from-[#1d2837] to-[#2f5af4]",
        },
        {
            id: 2,
            countryName: "Tokyo",
            countryTime: "09:30",
            weather: "Rainbow",
            airQuality: "AQI 75",
            temprature: "15°-23°",
            image: "/weather/40_rainbow_color.svg",
            backgroundClass: "from-[#1d2837] to-[#1d2837]",
        },
        {
            id: 3,
            countryName: "United States",
            countryTime: "09:30",
            weather: "Cold",
            airQuality: "AQI 75",
            temprature: "15°-23°",
            image: "/weather/22_snow_color.svg",
            backgroundClass: "from-[#121212] to-[#121212]",
        }
    ]
    return (
        <div className="flex flex-wrap space-x-5 space-y-5 justify-center lg:flex-nowrap lg:space-x-7">
            {countryData && countryData.map((ele) => (
                <div className={`border border-white/15 rounded-xl p-5 w-[12.38rem] h-[15.12rem] backdrop-blur-[80px] shadow-xl shadow-black/20 bg-gradient-to-b flex flex-col justify-between ${ele.backgroundClass}`} key={ele.id}>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-[0.88rem] leading-[143%] text-white">{ele.countryName}</span>
                        <span className="font-extralight text-[0.88rem] leading-[143%] text-white">{ele.countryTime}</span>
                    </div>
                    <div className="flex justify-between items-center flex-col">
                        <Image src={ele.image} alt={ele.weather} width={96} height={96} />
                        <span className="font-light text-[0.88rem] leading-[143%] text-white">{ele.weather}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-extralight text-[0.88rem] leading-[143%] text-white">{ele.airQuality}</span>
                        <span className="font-extralight text-[0.88rem] leading-[143%] text-white">{ele.temprature}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CountryCurrentState;