/* eslint-disable react/prop-types */
const UploadIcon = ({ size, primary }) => {
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
        <clipPath id="60f2cd1ce2">
          <path
            d="M 1.085938 1.085938 L 43.835938 1.085938 L 43.835938 43.835938 L 1.085938 43.835938 Z M 1.085938 1.085938 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#60f2cd1ce2)">
        <path
          fill={primary}
          d="M 38.492188 30.476562 L 38.492188 38.492188 L 6.429688 38.492188 L 6.429688 30.476562 L 1.085938 30.476562 L 1.085938 38.492188 C 1.085938 41.433594 3.492188 43.835938 6.429688 43.835938 L 38.492188 43.835938 C 41.433594 43.835938 43.835938 41.433594 43.835938 38.492188 L 43.835938 30.476562 Z M 9.101562 14.445312 L 12.871094 18.214844 L 19.789062 11.320312 L 19.789062 33.148438 L 25.132812 33.148438 L 25.132812 11.320312 L 32.054688 18.214844 L 35.820312 14.445312 L 22.460938 1.085938 Z M 9.101562 14.445312 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default UploadIcon;
