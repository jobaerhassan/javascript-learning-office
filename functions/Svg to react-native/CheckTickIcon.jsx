import React from "react";
import Svg, { Path } from 'react-native-svg'

const CheckIcon = ({width=24, height=24, fill='#818688'}) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9C18 13.95 13.95 18 9 18C4.05 18 0 13.95 0 9C0 4.05 4.05 0 9 0C13.95 0 18 4.05 18 9ZM13.8743 7.28958C14.2261 6.93842 14.2266 6.36857 13.8755 6.01679C13.5243 5.66501 12.9545 5.66451 12.6027 6.01567L8.00047 10.6098L6.02163 8.63091C5.67015 8.27944 5.10031 8.27944 4.74883 8.63091C4.39736 8.98238 4.39736 9.55223 4.74883 9.9037L7.36351 12.5184C7.71477 12.8696 8.28418 12.8699 8.63574 12.5189L13.8743 7.28958Z"
        fill="#818688"
      />
    </Svg>
);
export default CheckIcon;