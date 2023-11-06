import React from "react";
import Svg, { Path } from 'react-native-svg'

const FacebookIcon = ({width=24, height=24, fill='#818688'}) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
        d="M9.68008 11.3597L10.2201 7.99969H7.04008V5.65969C7.04008 4.69969 7.40008 3.97969 8.84008 3.97969H10.4001V0.919687C9.56008 0.799687 8.60008 0.679688 7.76008 0.679688C5.00008 0.679688 3.08008 2.35969 3.08008 5.35969V7.99969H0.0800781V11.3597H3.08008V19.8197C3.74008 19.9397 4.40008 19.9997 5.06008 19.9997C5.72008 19.9997 6.38008 19.9397 7.04008 19.8197V11.3597H9.68008Z"
        fill="#818688"
      />
    </Svg>
);
export default FacebookIcon;