import React, { useEffect, useState } from "react";
import { Message, Spinner, View } from "vcc-ui";
import { CarData } from "../types/CarTypes";
import CarInfoCarousel from "./CarInfoCarousel";

const CarInfoHandler = () => {
  const [data, setData] = useState<CarData[]>();
  const [error, setError] = useState<string>("");

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch("api/cars.json");
      const jsonResponse = await response.json();
      setData(jsonResponse);
    };
    fetchData().catch(() => {
      setError("Could not load cars");
    });
  }, []);

  if (!data || error) {
    return (
      <View alignItems="center">
        {error ? <Message type="error">{error}</Message> : <Spinner />}
      </View>
    );
  }

  return (
    <CarInfoCarousel data={data} />
  );
};


export default CarInfoHandler;