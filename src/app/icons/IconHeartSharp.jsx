// icon:heart-sharp | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function IconHeartSharp({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      width={size || width || 16}
      height={size || height || 16}
      
      {...props}
    >
      <path d="M256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65.56 55.68-19.71 107-62 157-40.09 47.49-94.22 79.78-137 108.35z"
      
      fill={fill}
      />
    </svg>
  );
}

export default IconHeartSharp;
