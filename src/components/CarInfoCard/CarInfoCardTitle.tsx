import React from "react";
import { View, Text, useTheme } from "vcc-ui";

interface Props {
  header?: string;
  title?: string;
  subtitle?: string;
}
const CarInfoCardTitle = (props: Props) => {
  const { header, title, subtitle } = props;
  const { color } = useTheme();

  return (
    <>
      <Text variant="bates" subStyle="emphasis" extend={{ color: color.primitive.grey200 }}>
        {header}
      </Text>
      <View direction={["column", "column", "row"]} paddingBottom={2}>
        <Text extend={{ paddingRight: 4 }} subStyle="emphasis">
          {title}
        </Text>
        <Text extend={{ color: color.primitive.grey200 }}>
          {subtitle}
        </Text>
      </View>
    </>
  );
};

export default CarInfoCardTitle;