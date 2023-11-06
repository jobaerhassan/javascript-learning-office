import React from "react";
import Svg, { Path } from 'react-native-svg'

const VisibilityOffIcon = ({width=24, height=24, fill='#818688'}) => (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    >
      <Path
        d="M17.726 7.648c-.242-.383-.5-.741-.767-1.075a.834.834 0 00-1.242-.075l-2.5 2.5c.184.55.217 1.184.05 1.842a3.35 3.35 0 01-2.416 2.417 3.267 3.267 0 01-1.842-.05l-2.05 2.05c-.416.416-.283 1.15.275 1.366a7.683 7.683 0 002.767.517c1.483 0 2.925-.433 4.242-1.242 1.341-.833 2.55-2.058 3.524-3.616.792-1.259.75-3.375-.041-4.634zm-6.043.669l-3.366 3.366a2.418 2.418 0 01-.7-1.683A2.388 2.388 0 0110 7.617c.65 0 1.25.275 1.683.7z"
        fill={fill}
      />
      <Path
        d="M15.208 4.792l-2.825 2.825A3.322 3.322 0 0010 6.633 3.363 3.363 0 006.633 10c0 .933.375 1.775.984 2.383L4.8 15.208h-.008c-.925-.75-1.775-1.708-2.5-2.841-.834-1.309-.834-3.434 0-4.742.966-1.517 2.15-2.708 3.466-3.525C7.075 3.3 8.517 2.858 10 2.858c1.858 0 3.658.684 5.208 1.934zm-2.826 5.206a2.388 2.388 0 01-2.384 2.384c-.05 0-.091 0-.141-.017l2.508-2.508c.017.05.017.091.017.141z"
        fill={fill}
      />
      <Path
        d="M18.14 1.857a.644.644 0 00-.907 0L1.858 17.241a.644.644 0 00.207 1.046.63.63 0 00.693-.146L18.14 2.757a.62.62 0 000-.9z"
        fill={fill}
      />
    </Svg>
);
export default VisibilityOffIcon;