import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) return null;

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      {/* Center Dot */}
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

export default function SkillGauge() {
  return (
    <div className="max-w-44 w-full">
      <GaugeContainer
        width={180}
        height={180}
        startAngle={-110}
        endAngle={110}
        value={80} // Skill%
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
            fill: "#4ade80", // Green
            transition: "all 1s ease",
          }}
        />

        {/* Pointer Needle */}
        <GaugePointer />
      </GaugeContainer>

      {/* NEW LEVEL: LABEL BELOW CENTER */}
      <p className="text-center text-2xl -mt-10 font-bold text-white">HTML</p>
    </div>
  );
}
