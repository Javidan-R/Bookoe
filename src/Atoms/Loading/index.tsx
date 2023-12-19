import { RotatingLines } from "react-loader-spinner";
export const LoadingSusponse = ({
  color,
  stroke,
  width,
  delay,
  visible,
  ...props
}) => {
  return (
    <RotatingLines
      {...props}
      strokeColor={color || "gray"}
      strokeWidth={stroke || "2"}
      animationDuration={delay || "0.8"}
      width={width || "30px"}
      visible={visible || true}
    />
  );
};

