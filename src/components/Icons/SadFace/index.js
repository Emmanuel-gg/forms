import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      height={21}
      viewBox="0 0 21 21"
      width={21}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={props.color} fillRule="evenodd" transform="translate(2 2)">
        <path
          d="M8.5 16.5a8 8 0 100-16 8 8 0 000 16z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={6} cy={6} fill="white" r={1} />
        <circle cx={11} cy={6} fill="white" r={1} />
        <path
          d="M5.5 11.5c.603-1.333 1.603-2 3-2s2.397.667 3 2"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
