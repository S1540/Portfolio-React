import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import HTML5 from "../../assets/HTML5.png";
import { useEffect, useRef, useState } from "react";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) return null;

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={6} fill="red" />

      {/* Needle Line */}
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

const SkillGauge = ({ skillValue, skillName, skillIcon, skillColor }) => {
  const sectionRef = useRef(null);
  const [animatedValue, setAnimatedValue] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entery = entries[0];
      if (entery.isIntersecting) {
        setAnimatedValue(null);
        let start = 0;
        const interval = setInterval(() => {
          start++;
          setAnimatedValue(start);
          if (start === skillValue) clearInterval(interval);
        });
      }
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [skillValue]);

  return (
    <div
      ref={sectionRef}
      className="max-w-44 w-full flex flex-col items-center"
    >
      <GaugeContainer
        width={150}
        height={150}
        startAngle={-110}
        endAngle={110}
        value={animatedValue}
      >
        {/* Level 1 (Outer Reference Arc) */}
        <GaugeReferenceArc
          style={{
            fill: "#2e2e2e",
          }}
        />

        {/* Main Progress Arc */}
        <GaugeValueArc
          style={{
            fill: skillColor,
            transition: "all 1s ease in",
          }}
        />
        <GaugePointer />
      </GaugeContainer>

      {/* NEW LEVEL: LABEL BELOW CENTER */}
      <div className="flex flex-row gap-2 justify-center items-center -ml-4 -mt-4">
        <img
          src={skillIcon}
          alt="Image"
          className="h-10 w-10 rounded-full object-cover"
        />
        <p className="text-center text-2xl font-bold text-white">{skillName}</p>
      </div>
    </div>
  );
};
export default SkillGauge;
