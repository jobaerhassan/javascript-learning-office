import React from "react";
import Svg, { Path } from 'react-native-svg'

const BackIcon = ({width=24, height=24, fill='#818688'}) => (
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
        d="M9.52.972a1.228 1.228 0 00-1.76 0L.764 8.102C.531 8.342.4 8.664.4 9c0 .336.131.66.364.897l6.996 7.131a1.228 1.228 0 001.76 0 1.286 1.286 0 000-1.794l-4.87-4.965h13.705c.688 0 1.245-.568 1.245-1.269 0-.7-.557-1.269-1.245-1.269H4.65L9.52 2.766a1.286 1.286 0 000-1.794z"
        fill="#818688"
      />
    </Svg>
);
export default BackIcon;