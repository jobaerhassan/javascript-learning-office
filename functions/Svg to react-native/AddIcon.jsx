import React from "react";
import Svg, { Path } from 'react-native-svg'

const AddIcon = ({width=24, height=24, fill='#818688'}) => (
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
        d="M8.50005 0.299805C9.07756 0.299805 9.54573 0.767971 9.54573 1.34548V6.95413H15.1544C15.7319 6.95413 16.2 7.42229 16.2 7.99981C16.2 8.57732 15.7319 9.04548 15.1544 9.04548H9.54573V14.6541C9.54573 15.2316 9.07756 15.6998 8.50005 15.6998C7.92254 15.6998 7.45437 15.2316 7.45437 14.6541V9.04548H1.84573C1.26822 9.04548 0.800049 8.57732 0.800049 7.99981C0.800049 7.42229 1.26822 6.95413 1.84573 6.95413H7.45437V1.34548C7.45437 0.767971 7.92254 0.299805 8.50005 0.299805Z"
        fill="#818688"
      />
    </Svg>
);
export default AddIcon;