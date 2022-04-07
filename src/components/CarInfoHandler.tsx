import React, { useEffect, useState } from "react";
import { Message, Spinner, View } from "vcc-ui";
import { CarData } from "../types/CarTypes";
import BodyFilterSelect from "./BodyFilterSelect";
import CarInfoCarousel from "./CarInfoCarousel";

const CarInfoHandler = () => {
  const [data, setData] = useState<CarData[]>();
  const [filteredData, setFilteredData] = useState<CarData[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/cars.json");
      const jsonResponse = await response.json();
      setData(jsonResponse);
      setFilteredData(jsonResponse);
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
    <>
      <View padding={1} maxWidth={200}>
        <BodyFilterSelect
          data={data}
          setFilteredCallback={elem => setFilteredData(elem)}
          filterKey="bodyType"
          options={[
            { key: "suv", label: "SUV" },
            { key: "estate", label: "ESTATE" },
            { key: "sedan", label: "SEDAN" },
          ]}
        />
      </View>
      <CarInfoCarousel data={filteredData} />
    </>
  );
};


export default CarInfoHandler;