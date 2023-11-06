import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PasswordShowIcon({width=24, height=24, fill='#818688'}) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M19.25 6.65C16.94 3.02 13.56.93 10 .93c-1.78 0-3.51.52-5.09 1.49-1.58.98-3 2.41-4.16 4.23-1 1.57-1 4.12 0 5.69 2.31 3.64 5.69 5.72 9.25 5.72 1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69zM10 13.54c-2.24 0-4.04-1.81-4.04-4.04S7.76 5.46 10 5.46s4.04 1.81 4.04 4.04-1.8 4.04-4.04 4.04z"
        fill="#818688"
      />
      <Path
        d="M9.998 6.64a2.855 2.855 0 000 5.71c1.57 0 2.86-1.28 2.86-2.85s-1.29-2.86-2.86-2.86z"
        fill="#818688"
      />
    </Svg>
  )
}

export default PasswordShowIcon
