export interface WeekArray {
    WeekState: [],
}

export interface WeekState {
    id: number;
    day: string;
    date: string;
    imagePath: string;
    weather: string;
    temperature: string;
    airQuality: number;
}

export interface HourState {
    id: number;
    time: string;
    imagePath: string;
    weather: string;
    temperature: string;
}