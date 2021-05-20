import * as React from "react"

function HappyFace(props) {
  return (
    <svg
      height={21}
      viewBox="0 0 21 21"
      width={21}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={props.color} fillRule="evenodd" transform="translate(2 2)">
        <circle
          cx={8.5}
          cy={8.5}
          r={8}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={6} cy={6} fill="currentColor" r={1} />
        <circle cx={11} cy={6} fill="currentColor" r={1} />
        <path
          d="M5.5 9.5c.603 1.333 1.603 2 3 2s2.397-.667 3-2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default HappyFace
