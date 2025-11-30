const SimpleBubbles = () => {
  const colors = [
    "#06b6d4",
    "#8b5cf6",
    "#facc15",
    "#6366f1",
    "#ef4444",
    "#ec4899",
    "#14b8a6",
    "#3b82f6",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 8}px`,
            height: `${Math.random() * 10 + 8}px`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        ></div>
      ))}

      <style>
        {`
          .bubble {
            position: absolute;
            bottom: -20px;
            border-radius: 9999px;
            animation: rise 6s linear infinite;
            will-change: transform, opacity;
          }

          @keyframes rise {
            0% {
              transform: translateY(0) scale(0.7);
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100vh) scale(1);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SimpleBubbles;
