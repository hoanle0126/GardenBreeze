/* eslint-disable react/prop-types */
const ProductItemIcon = ({size,primary}) => {
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
        <clipPath id="d601908066">
          <path
            d="M 1.800781 0 L 43 0 L 43 45 L 1.800781 45 Z M 1.800781 0 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#d601908066)">
        <path
          fill={primary}
          d="M 41.089844 11.796875 C 40.902344 17.269531 39.605469 24.949219 34.511719 30.449219 C 28.761719 36.65625 19.375 38.925781 6.601562 37.199219 C 8.796875 33.160156 11.246094 29.773438 14.09375 26.808594 C 18.410156 22.316406 23.664062 18.828125 30.15625 16.144531 C 30.410156 16.039062 30.53125 15.746094 30.425781 15.488281 C 30.320312 15.234375 30.03125 15.113281 29.773438 15.21875 C 23.15625 17.957031 17.789062 21.519531 13.375 26.117188 C 10.667969 28.933594 8.3125 32.125 6.199219 35.867188 C 6.132812 34.984375 6.097656 33.828125 6.179688 32.5 C 6.359375 29.683594 7.125 25.484375 9.757812 21.472656 C 13.582031 15.652344 20.226562 11.753906 29.503906 9.890625 C 36.019531 8.578125 39.183594 5.738281 40.683594 3.632812 C 40.945312 5.585938 41.207031 8.496094 41.089844 11.796875 Z M 41.964844 0.6875 C 41.875 0.289062 41.523438 0.00390625 41.117188 0 C 41.117188 0 41.113281 0 41.113281 0 C 40.707031 0 40.355469 0.28125 40.261719 0.675781 C 40.25 0.734375 38.867188 6.222656 29.160156 8.171875 C 19.398438 10.136719 12.371094 14.296875 8.285156 20.535156 C 5.4375 24.882812 4.621094 29.421875 4.4375 32.460938 C 4.269531 35.21875 4.570312 37.25 4.683594 37.898438 C 3.75 39.722656 2.84375 41.703125 1.988281 43.796875 C 1.804688 44.246094 2.019531 44.757812 2.464844 44.941406 C 2.574219 44.984375 2.683594 45.003906 2.796875 45.003906 C 3.140625 45.003906 3.464844 44.800781 3.601562 44.460938 C 4.40625 42.488281 5.257812 40.621094 6.132812 38.898438 C 9.0625 39.304688 11.824219 39.507812 14.417969 39.507812 C 23.769531 39.507812 30.941406 36.875 35.789062 31.640625 C 38.210938 29.027344 40.039062 25.765625 41.222656 21.941406 C 42.164062 18.90625 42.707031 15.511719 42.832031 11.855469 C 43.050781 5.652344 42.007812 0.886719 41.964844 0.6875 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default ProductItemIcon;