import {
  CountryCurrentState,
  CountryWeekData,
  CurrentLocationWeather,
  HourWiseWeather,
  OtherCountryState,
  DayWiseWeather,
} from "./components";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center items-center m-auto flex-col space-y-7 p-10">
          <div className="flex flex-col space-y-4 justify-center items-center lg:flex-row lg:space-x-6">
            <CountryWeekData />
            <CountryCurrentState />
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center lg:flex-row lg:justify-between lg:items-start lg:w-full">
            <div className="flex flex-col space-y-10 lg:items-start">
              <div className="flex flex-col space-y-4 justify-center items-center lg:flex-row lg:space-x-4 lg:space-y-0 lg:items-start">
                <OtherCountryState />
                <CurrentLocationWeather />
              </div>
              <HourWiseWeather />
            </div>
            <DayWiseWeather />
          </div>
        </div>
      </div>
    </>
  );
}
