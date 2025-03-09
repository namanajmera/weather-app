"use client"

import { fetchLocationByIP } from "@/store/slice/locationSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLocation = () => {
    const dispatch = useDispatch<AppDispatch>();

    const location = useSelector((state: RootState) => state.location);
    const { loading, error } = location;

    useEffect(() => {
        if (!location.city) {
            console.log("Fetching location...");
            dispatch(fetchLocationByIP());
        }
    }, [dispatch, location.city]);

    return { loading, error, location };
};

export default useLocation;
