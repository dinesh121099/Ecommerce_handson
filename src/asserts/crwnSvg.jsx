import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={39} {...props}>
  <title>{"Group"}</title>
  <g fill="none" fillRule="evenodd">
    <path fill="#FFFFFF" d="m3 14 22 12.5L47 14l-6.145 25H9.085z" />
    <path fill="#D3D3D3" fillOpacity={1} d="m25 8 15 31H10z" />
    <circle cx={2} cy={9} r={2} fill="#FFFFFF" />
    <circle cx={25} cy={2} r={2} fill="#FFFFFF" />
    <circle cx={48} cy={9} r={2} fill="#FFFFFF" />
    <path
      fill="none"
      stroke="#00008B"
      strokeWidth="1"
      d="m3 14 22 12.5L47 14l-6.145 25H9.085z"
    />
  </g>
</svg>
)
export default SvgComponent;
