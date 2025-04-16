import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function NavLine({ bottom = false }) {
  const svgRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    function updateWidth() {
      if (svgRef.current) {
        setTotalWidth(svgRef.current.clientWidth);
      }
    };

    // Use ResizeObserver to detect width changes, even when scrollbar appears
    const observer = new ResizeObserver(updateWidth);
    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    // Initial update
    updateWidth();

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [location]);

  let middleWidthPercentage = 0.25,
    heightPercentage = 0,
    endCurve = 35;
  if (totalWidth >= 620) {
    middleWidthPercentage = 0.25;
    heightPercentage = 17;
    endCurve = 35;
  }

  if (totalWidth >= 768) {
    middleWidthPercentage = 0.2;
    heightPercentage = 25;
    endCurve = 35;
  }

  if (totalWidth >= 1060) {
    middleWidthPercentage = 0.18;
    heightPercentage = 30;
    endCurve = 40;
  }

  if (totalWidth >= 1700) {
    middleWidthPercentage = 0.1;
    heightPercentage = 48;
    endCurve = 50;
  }

  const straightWidth = (totalWidth * (1 - middleWidthPercentage)) / 2;
  const middleWidth = totalWidth * middleWidthPercentage;
  const slantHeight = totalWidth / heightPercentage;

  const pathData = `M 1 ${slantHeight - 1}
      L ${endCurve} 1
      L ${straightWidth} 1
      L ${straightWidth + middleWidth / 4} ${slantHeight - 1}
      L ${straightWidth + middleWidth - middleWidth / 4} ${slantHeight - 1}
      L ${straightWidth + middleWidth} 1
      L ${totalWidth - endCurve} 1
      L ${totalWidth} ${slantHeight - 1}`;

  return (
    <div
      ref={svgRef}
      style={{
        width: "100%",
        WebkitTransform: bottom ? "rotateX(180deg)" : "",
        transform: bottom ? "rotateX(180deg)" : "",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `${totalWidth / heightPercentage}px`,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: `${totalWidth / heightPercentage}px`,
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            backgroundColor: "#00000085",
            clipPath: `polygon(0px 0px, ${straightWidth}px 0px, ${straightWidth + middleWidth / 4}px ${slantHeight - 1}px, ${straightWidth + middleWidth - middleWidth / 4}px ${slantHeight - 1}px, ${straightWidth + middleWidth}px 0px, ${totalWidth}px 0px)`,
          }}
        ></div>

        <svg width="100%" height={totalWidth / heightPercentage} xmlns="http://www.w3.org/2000/svg">
          <path d={pathData} fill="none" stroke="#ffd363" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export default NavLine;
