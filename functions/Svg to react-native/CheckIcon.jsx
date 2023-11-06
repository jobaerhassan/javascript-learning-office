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
        d="M11 16.04a5.04 5.04 0 100-10.08 5.04 5.04 0 000 10.08zm0 5.76c5.965 0 10.8-4.835 10.8-10.8C21.8 5.036 16.965.2 11 .2 5.035.2.2 5.036.2 11c0 5.965 4.835 10.8 10.8 10.8z"
        fill="#818688"
      />
    </Svg>
);
export default CheckIcon;