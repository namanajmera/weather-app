import { LocationState } from "@/models/locationModel";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: LocationState = {
    country: null,
    countryCode: null,
    region: null,
    regionName: null,
    city: null,
    zip: null,
    lat: null,
    lon: null,
    timezone: null,
    loading: true,
    error: null,
};

export const fetchLocationByIP = createAsyncThunk(
    "fetchLocationByIP",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://ip-api.com/json");
            return response.data;
        } catch (error) {
            return rejectWithValue(`Failed to fetch location => ${error}`);
        }
    }
);

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocationByIP.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLocationByIP.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.city = action.payload.city;
                state.country = action.payload.country;
                state.countryCode = action.payload.countryCode;
                state.region = action.payload.region;
                state.regionName = action.payload.regionName;
                state.zip = action.payload.zip;
                state.lat = action.payload.lat;
                state.lon = action.payload.lon;
                state.timezone = action.payload.timezone;
            })
            .addCase(fetchLocationByIP.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default locationSlice;
