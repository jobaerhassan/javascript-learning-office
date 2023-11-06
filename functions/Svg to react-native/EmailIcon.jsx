import React from "react";
import Svg, { Path } from 'react-native-svg'

const EmailIcon = ({width=24, height=24, fill='#818688'}) => (
    <Svg
    width={20}
    height={17}
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props}
  >
    <Path
      d="M15 0H5C2 0 0 1.5 0 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5V5c0-3.5-2-5-5-5zm.47 6.09l-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 01-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06z"
      fill="#818688"
    />
  </Svg>
);
export default EmailIcon;