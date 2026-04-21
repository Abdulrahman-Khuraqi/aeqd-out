import React, { useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DotLottiePlayer = ({
  srcUrl,
  autoplay = true,
  loop = true,
  speed = 1,
  className,
}) => {
  const playerRef = useRef(null);

  return (
    <div className={className}>
      <Player
        ref={playerRef}
        autoplay={autoplay}
        loop={loop}
        speed={speed}
        src={srcUrl}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default DotLottiePlayer;
