// SimpleBubbles.jsx

const SimpleBubbles = () => {
  const colors = [
    "#06b6d4", // cyan
    "#8b5cf6", // purple
    "#facc15", // yellow
    "#6366f1", // indigo
    "#ef4444", // red
    "#ec4899", // pink
    "#14b8a6", // teal
    "#3b82f6", // blue
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 12 + 6}px`,
            height: `${Math.random() * 12 + 6}px`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.5 + 0.3,
            animation: `rise${i} ${Math.random() * 4 + 3}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <style>
        {`
          ${[...Array(70)]
            .map(
              (_, i) => `
            @keyframes rise${i} {
              0% {
                transform: translateY(0) translateX(0) scale(0.6);
                opacity: 0.5;
              }
              50% {
                transform: translateY(-50vh) translateX(${
                  Math.random() * 40 - 20
                }px) scale(0.9);
                opacity: 0.35;
              }
              100% {
                transform: translateY(-100vh) translateX(${
                  Math.random() * 60 - 30
                }px) scale(1);
                opacity: 0;
              }
            }
          `
            )
            .join("")}
        `}
      </style>
    </div>
  );
};

export default SimpleBubbles;
