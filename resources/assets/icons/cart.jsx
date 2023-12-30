// eslint-disable-next-line react/prop-types
const CartIcon = ({ primary, secondary, size }) => {
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
        <clipPath id="e6d6a5e403">
          <path
            d="M 0.125 2.25 L 45 2.25 L 45 42.75 L 0.125 42.75 Z M 0.125 2.25 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b8f62fe179">
          <path
            d="M 16 35 L 24 35 L 24 42.75 L 16 42.75 Z M 16 35 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8ff4629bd9">
          <path
            d="M 31 35 L 39 35 L 39 42.75 L 31 42.75 Z M 31 35 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="75e5cf0815">
          <path
            d="M 20 2.25 L 27 2.25 L 27 9 L 20 9 Z M 20 2.25 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="54d3970ac0">
          <path
            d="M 27 2.25 L 34 2.25 L 34 9 L 27 9 Z M 27 2.25 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <path
        fill={secondary}
        d="M 12.1875 32.230469 L 41.136719 32.230469 L 44.996094 9.882812 L 6.96875 10.03125 L 12.1875 32.230469 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <g clipPath="url(#e6d6a5e403)">
        <path
          strokeLinecap="butt"
          transform="matrix(0.0035634, 0, 0, -0.0035634, -14.986231, 60.251835)"
          fill="none"
          strokeLinejoin="miter"
          d="M 4249.441483 14367.479457 L 6009.959171 14456.27269 L 7770.47686 6966.94713 L 16300.108327 6966.94713 "
          stroke={primary}
          strokeWidth="344.89001"
          strokeOpacity="1"
          strokeMiterlimit="10"
        />
      </g>
      <g clipPath="url(#b8f62fe179)">
        <path
          fill={primary}
          d="M 23.886719 39.25 C 23.886719 41.183594 22.320312 42.75 20.386719 42.75 C 18.449219 42.75 16.882812 41.183594 16.882812 39.25 C 16.882812 37.3125 18.449219 35.746094 20.386719 35.746094 C 22.320312 35.746094 23.886719 37.3125 23.886719 39.25 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#8ff4629bd9)">
        <path
          fill={primary}
          d="M 38.324219 39.25 C 38.324219 41.183594 36.757812 42.75 34.824219 42.75 C 32.890625 42.75 31.320312 41.183594 31.320312 39.25 C 31.320312 37.3125 32.890625 35.746094 34.824219 35.746094 C 36.757812 35.746094 38.324219 37.3125 38.324219 39.25 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#75e5cf0815)">
        <path
          fill={primary}
          d="M 25.648438 3.527344 C 26.925781 4.808594 26.308594 8.589844 26.308594 8.589844 C 26.308594 8.589844 22.53125 9.203125 21.25 7.925781 C 19.972656 6.648438 20.355469 2.632812 20.355469 2.632812 C 20.355469 2.632812 24.371094 2.25 25.648438 3.527344 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#54d3970ac0)">
        <path
          fill={primary}
          d="M 27.992188 3.527344 C 26.714844 4.808594 27.332031 8.589844 27.332031 8.589844 C 27.332031 8.589844 31.109375 9.203125 32.390625 7.925781 C 33.667969 6.648438 33.285156 2.632812 33.285156 2.632812 C 33.285156 2.632812 29.269531 2.25 27.992188 3.527344 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default CartIcon;
