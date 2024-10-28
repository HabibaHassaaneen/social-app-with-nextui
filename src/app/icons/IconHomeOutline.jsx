// icon:home-outline | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function IconHomeOutline({ stroke, size, height, width, label, ...props }) {
  return (
    <svg
     fill="none"
      viewBox="0 0 512 512"
      stroke={stroke}
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
       fill="none"
    stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
      />
      <path
     fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
      />
    </svg>
  );
}

export default IconHomeOutline;
