import Svg, { Circle, Rect } from "react-native-svg";

type AppLogoProps = {
  cropToIcon?: boolean;
  size: number;
};

export function AppLogo({ cropToIcon = false, size }: AppLogoProps) {
  return (
    <Svg
      height={size}
      viewBox={cropToIcon ? "34 34 188 188" : "0 0 256 256"}
      width={size}
    >
      {cropToIcon ? null : <Circle cx="128" cy="128" fill="#ffffff" r="125" />}
      <Circle
        cx="128"
        cy="128"
        fill="none"
        r="84"
        stroke="#34383d"
        strokeWidth="10"
      />
      <Rect fill="#34383d" height="32" rx="6" width="32" x="72" y="92" />
      <Rect fill="#34383d" height="32" rx="6" width="32" x="112" y="92" />
      <Rect fill="#34383d" height="32" rx="6" width="32" x="152" y="92" />
      <Rect fill="#34383d" height="32" rx="6" width="32" x="72" y="132" />
      <Rect fill="#34383d" height="32" rx="6" width="32" x="112" y="132" />
      <Rect fill="#34383d" height="32" rx="6" width="32" x="152" y="132" />
    </Svg>
  );
}
