import React from "react";
import Svg, { Path } from 'react-native-svg'

const GmailIcon = ({width=24, height=24, fill='#818688'}) => (
    <Svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props}
  >
    <G clipPath="url(#clip0_45_1271)">
      <Path
        d="M10.194 8.182v3.873h5.382a4.611 4.611 0 01-2.009 3.009l3.245 2.518c1.891-1.746 2.982-4.31 2.982-7.355 0-.709-.063-1.39-.181-2.045h-9.419z"
        fill={fill}
      />
      <Path
        d="M4.59 11.903l-.732.56-2.59 2.019C2.912 17.746 6.284 20 10.193 20c2.7 0 4.964-.89 6.618-2.418l-3.245-2.518c-.891.6-2.027.963-3.373.963-2.6 0-4.809-1.754-5.6-4.118l-.004-.006z"
        fill={fill}
      />
      <Path
        d="M1.267 5.518A9.877 9.877 0 00.194 10c0 1.618.391 3.136 1.073 4.482 0 .009 3.327-2.582 3.327-2.582-.2-.6-.318-1.236-.318-1.9 0-.664.118-1.3.318-1.9L1.267 5.518z"
        fill={fill}
      />
      <Path
        d="M10.194 3.982c1.473 0 2.782.509 3.828 1.49l2.863-2.863C15.15.991 12.895 0 10.195 0c-3.91 0-7.282 2.245-8.928 5.518L4.594 8.1c.791-2.364 3-4.118 5.6-4.118z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_45_1271">
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GmailIcon;