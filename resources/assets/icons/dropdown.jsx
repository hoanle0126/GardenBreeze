/* eslint-disable react/prop-types */
const DropDownIcon = ({ size, primary }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      zoomAndPan="magnify"
      viewBox="0 0 45 44.999999"
      height={size}
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <clipPath id="49d87fa34b">
          <path
            d="M 0 10 L 45 10 L 45 35.398438 L 0 35.398438 Z M 0 10 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#49d87fa34b)">
        <path
          fill={primary}
          d="M 24.261719 34.398438 L 44.03125 14.386719 C 44.996094 13.410156 44.996094 11.828125 44.03125 10.851562 C 43.066406 9.898438 41.527344 9.898438 40.5625 10.851562 L 22.511719 29.117188 L 4.464844 10.851562 C 3.5 9.898438 1.933594 9.898438 0.96875 10.851562 C 0.00390625 11.828125 0.00390625 13.410156 0.96875 14.386719 L 20.765625 34.421875 C 21.730469 35.398438 23.296875 35.398438 24.261719 34.398438 Z M 24.261719 34.398438 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default DropDownIcon;
