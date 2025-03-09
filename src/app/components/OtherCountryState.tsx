import Image from "next/image";

const OtherCountryState = () => {
    return (
        <div className="flex justify-evenly items-center border border-white/15 rounded-xl p-5 w-[18.06rem] h-40 backdrop-blur-[80px] shadow-lg shadow-black/20 bg-[#121212]">
            <div className="flex flex-col justify-between items-center space-y-4">
                <div>
                    <h1 className="font-medium text-[1.12rem] leading-[111%] text-white">Hongkong</h1>
                    <span className="font-normal text-[0.88rem] leading-[114%] text-white/68">09:30 ~ 03/08</span>
                </div>
                <h1 className="font-normal text-4xl text-white">24°</h1>
            </div>
            <Image src="/weather/11_heavy_rain_color.svg" alt="" width={96} height={96} />
        </div>
    )
}

export default OtherCountryState;