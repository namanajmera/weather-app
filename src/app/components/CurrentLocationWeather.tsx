import Image from "next/image";

const CurrentLocationWeather = () => {
    return (
        <div className="border border-white/15 rounded-xl p-5 w-40 h-40 backdrop-blur-[80px] shadow-lg shadow-black/20 bg-[#121212] flex flex-col justify-between space-y-5">
            <div className="flex justify-between items-center">
                <h1 className="font-light text-4xl text-center text-white">24&deg;</h1>
                <Image src="/weather/35_partly_cloudy_daytime_color.svg" alt="" width={48} height={48} />
            </div>
            <div>
                <h1 className="font-medium text-base leading-[125%] text-white">New York</h1>
                <span className="font-normal text-xs leading-[133%] text-white/68">Partly cloudy</span>
            </div>
        </div>
    )
}

export default CurrentLocationWeather;