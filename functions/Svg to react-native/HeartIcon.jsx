import React from "react";
import Svg, { Path } from 'react-native-svg'

const HeartIconBlank = ({width=24, height=24, fill='#818688'}) => (
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
        d="M13.9663 0.200196L13.9671 0.200195C17.2476 0.200196 19.9 2.83542 19.9 6.08156C19.9 9.48451 18.299 12.1642 16.4067 14.0775C14.5278 15.9773 12.3038 17.1844 10.8696 17.6685C10.5838 17.767 10.2683 17.8002 9.99998 17.8002C9.73166 17.8002 9.41615 17.767 9.13029 17.6684C7.69608 17.1844 5.4721 15.9773 3.59322 14.0775C1.70097 12.1642 0.0999756 9.48451 0.0999756 6.08156C0.0999756 2.83542 2.75233 0.200196 6.03283 0.200196C7.56236 0.200196 8.95242 0.774901 9.99967 1.71501C10.3929 1.36244 10.8338 1.06265 11.3112 0.82493C12.1347 0.414955 13.044 0.200997 13.9663 0.200196ZM6.03283 2.1048C3.82723 2.1048 2.02994 3.8784 2.02994 6.08156C2.02994 8.85095 3.32389 11.0783 4.97438 12.7472C6.6365 14.4278 8.60068 15.4775 9.75776 15.8673L9.76719 15.8705L9.76718 15.8705C9.76777 15.8707 9.77392 15.8727 9.78635 15.8756C9.79976 15.8786 9.81776 15.8821 9.84024 15.8852C9.886 15.8916 9.94099 15.8956 9.99998 15.8956C10.059 15.8956 10.114 15.8916 10.1597 15.8852C10.1822 15.8821 10.2002 15.8786 10.2136 15.8756C10.2273 15.8724 10.2333 15.8703 10.2328 15.8705L10.2422 15.8672L10.2422 15.8673C11.3993 15.4775 13.3634 14.4278 15.0256 12.7472C16.6761 11.0783 17.97 8.85095 17.97 6.08156C17.97 3.87853 16.173 2.10503 13.9675 2.1048C13.3468 2.10541 12.7348 2.24945 12.1805 2.52539C11.6262 2.80139 11.145 3.20169 10.7756 3.69421C10.5938 3.93662 10.3064 4.07971 10.0007 4.07996C9.69513 4.08019 9.40747 3.93756 9.22526 3.69543C8.4961 2.72648 7.33923 2.1048 6.03283 2.1048Z"
        fill="#818688"
      />
    </Svg>
);
export default HeartIconBlank;