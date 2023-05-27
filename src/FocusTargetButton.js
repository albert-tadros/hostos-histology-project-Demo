import React, { useContext } from "react";
import TiffViewerContext from "./TiffViewerContext";

const FocusTargetButton = ({ id, label, x, y, children }) => {
  const { toggleFocus } = useContext(TiffViewerContext);

  return (
    <button
      className="focus-btn"
      onClick={() => {
        toggleFocus(id, x, y);
      }}
    >
      {label || children}
    </button>
  );
};

export default FocusTargetButton;
