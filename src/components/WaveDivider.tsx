type WaveDividerProps = {
  className?: string;
  fill?: string;
  flip?: boolean;
};

// Organic, hand-tuned wave — recurring motif across the site.
export default function WaveDivider({
  className = "",
  fill = "#fbf8f3",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${className}`}
      style={flip ? { transform: "rotate(180deg)" } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-[60px] w-full sm:h-[90px] lg:h-[120px]"
      >
        <path
          fill={fill}
          d="M0,64 C180,112 360,16 540,40 C720,64 900,120 1080,104 C1260,88 1380,32 1440,24 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
