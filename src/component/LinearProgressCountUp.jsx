import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useCountUp } from "use-count-up";

export default function LinearProgressCountUp({ sales, color }) {
  const { value } = useCountUp({
    isCounting: true,
    duration: 2,
    easing: "linear",
    start: 0,
    end: sales,
    onComplete: () => ({
      shouldRepeat: false,
      delay: 2,
    }),
  });
  return (
    <>
  
      <LinearProgress
        variant="determinate"
        value={value}
        color={color}
        sx={{borderRadius:'0.3rem '}}
      ></LinearProgress>
    </>
  );
}