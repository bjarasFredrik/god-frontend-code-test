import React from "react";
import { IconButton, View, } from "vcc-ui";
import "swiper/css";
import "swiper/css/pagination";

interface Props {
    slideNext: () => void;
    slidePrev: () => void;
    disablePrev?: boolean;
    disableNext?: boolean;
}
const CarouselNavigation = (props: Props) => {
    const { slideNext, slidePrev, disablePrev, disableNext } = props;

    return (
        <View direction="row" spacing={2} justifyContent="flex-end" padding={1}>
            <IconButton
                aria-label="Previous slide"
                disabled={disablePrev}
                onClick={slidePrev}
                iconName="navigation-chevronback"
                variant='outline'
            />
            <IconButton
                aria-label="Next slide"
                disabled={disableNext}
                onClick={slideNext}
                iconName="navigation-chevronforward"
                variant='outline'
            />
        </View>

    );
};

export default CarouselNavigation;