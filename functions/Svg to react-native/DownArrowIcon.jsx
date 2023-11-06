import React from "react";
import Svg, { Path } from 'react-native-svg'

const DownArrowIcon = ({width=24, height=24, fill='#818688'}) => (
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
        d="M0.363213 0.863213C0.714685 0.511741 1.28453 0.511741 1.63601 0.863213L5.99961 5.22682L10.3632 0.863213C10.7147 0.511741 11.2845 0.511741 11.636 0.863213C11.9875 1.21469 11.9875 1.78453 11.636 2.13601L6.63601 7.13601C6.28453 7.48748 5.71468 7.48748 5.36321 7.13601L0.363213 2.13601C0.0117414 1.78453 0.0117414 1.21469 0.363213 0.863213Z"
        fill="#818688"
      />
    </Svg>
);
export default DownArrowIcon;