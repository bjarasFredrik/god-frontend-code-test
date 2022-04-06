import React from "react";
import { Block } from "vcc-ui";
import { CarData } from "../../types/CarTypes";
import Image from "next/image";
import CarInfoCardTitle from "./CarInfoCardTitle";
import CarInfoCardLinks from "./CarInfoCardLinks";

interface Props {
  data: CarData;
}

const CarInfoCard = (props: Props) => {
  const { data } = props;

  return (
    <Block extend={{ padding: 8 }}>
      <CarInfoCardTitle
        header={data.bodyType.toUpperCase()}
        title={data.modelName}
        subtitle={data.modelType}
      />
      <Block extend={{ position: "relative", width: "100%", padding: "0 0 75% 0" }}>
        <Image priority layout='fill' objectFit='cover' src={data.imageUrl} alt={data.modelName} />
      </Block>
      <CarInfoCardLinks id={data.id} />
    </Block>
  );
};

export default CarInfoCard;