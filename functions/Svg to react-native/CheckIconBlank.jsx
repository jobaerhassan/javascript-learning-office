import React from "react";
import Svg, { Path } from 'react-native-svg'

const CheckIconBlank = ({width=24, height=24, fill='#818688'}) => (
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
        d="M.2 11C.2 5.058 5.058.2 11 .2 16.942.2 21.8 5.058 21.8 11c0 5.943-4.858 10.8-10.8 10.8C5.058 21.8.2 16.943.2 11zM11 2.306C6.22 2.306 2.305 6.22 2.305 11c0 4.78 3.915 8.695 8.695 8.695S19.695 15.78 19.695 11 15.78 2.306 11 2.306z"
        fill="#C0C2C4"
      />
    </Svg>
);
export default CheckIconBlank;