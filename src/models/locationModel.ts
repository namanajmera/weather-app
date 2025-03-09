
export interface LocationState {
    country: string | null;
    countryCode: string | null;
    region: string | null;
    regionName: string | null;
    city: string | null;
    zip: string | null;
    lat: number | null;
    lon: number | null;
    timezone: string | null;
    loading: boolean | null;
    error: string | null;
}
