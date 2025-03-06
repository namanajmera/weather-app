import { CountryCurrentState, CountryWeekData } from "./components";

export default function Home() {

  return (
    <>
      <div className="flex justify-center items-center min-h-screen flex-col space-y-7 p-10">
        <CountryWeekData />
        <CountryCurrentState />
      </div>
    </>
  );
}
