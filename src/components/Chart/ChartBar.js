import "./ChartBar.css";

export default function ChartBar({ value, maxValue, label }) {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          style={{ height: barFillHeight }}
          className="chart-bar__fill"
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
