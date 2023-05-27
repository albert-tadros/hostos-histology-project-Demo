import React from "react";
import KonvaTiffViewer from "./KonvaTiffViewer";
import useResizeObserver from "./useResizeObserver";
import "./HistologyImage.css";

const HistologyImage = ({ imageUrl, focusPoints }) => {
  const [containerRef, containerWidth] = useResizeObserver();
  const containerHeight = containerWidth * 1; // Set the aspect ratio, e.g., 3:4

  return (
    <div className="histology-image" ref={containerRef}>
      <KonvaTiffViewer
        imageUrl={imageUrl}
        focusPoints={focusPoints}
        width={containerWidth}
        height={containerHeight}
      />
    </div>
  );
};

export default HistologyImage;
