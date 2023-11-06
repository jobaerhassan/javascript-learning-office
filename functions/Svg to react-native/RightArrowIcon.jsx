import React from "react";
import Svg, { Path } from 'react-native-svg'




const RightArrowIcon = ({width=24, height=24, fill='#818688'}) => {
    // return <LeftArrowIcon style={{transform: [{rotate: '270deg'}]}} />
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
        d="M8.39984 0.309688C8.8049 -0.10323 9.46163 -0.10323 9.86668 0.309688L15.6962 6.25235C15.8907 6.45064 16 6.71958 16 7C16 7.28042 15.8907 7.54936 15.6962 7.74765L9.86668 13.6903C9.46163 14.1032 8.8049 14.1032 8.39984 13.6903C7.99479 13.2774 7.99479 12.6079 8.39984 12.195L12.4587 8.05734H1.03721C0.464376 8.05734 0 7.58395 0 7C0 6.41605 0.464376 5.94266 1.03721 5.94266H12.4587L8.39984 1.805C7.99479 1.39208 7.99479 0.722606 8.39984 0.309688Z"
        fill={fill}
      />
    </Svg>
};
export default RightArrowIcon;