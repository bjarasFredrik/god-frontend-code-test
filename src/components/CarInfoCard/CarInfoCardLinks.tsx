import React from "react";
import { Link, View } from "vcc-ui";

interface Props {
  id: string;
}

const CarInfoCardLinks = (props: Props) => {
  const { id } = props;
  return (
    <View spacing={4} direction="row" justifyContent="center" >
      <Link href={`${id}/learn/`} arrow="right">
        {"Learn"}
      </Link>
      <Link href={`${id}/shop/`} arrow="right">
        {"Shop"}
      </Link>
    </View>
  );
};

export default CarInfoCardLinks;