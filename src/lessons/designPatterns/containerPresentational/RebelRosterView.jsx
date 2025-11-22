import RosterFilters from "./RosterFilters";
import RosterList from "./RosterList";

// Presentational principal: recibe todo por props y solo renderiza.
export default function RebelRosterView({
  title,
  description,
  roster,
  sideFilter,
  onSideChange,
  onlyActive,
  onToggleOnlyActive,
  stats,
}) {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <h2>{title}</h2>
      <p style={{ color: "#919191ff", maxWidth: "620px" }}>{description}</p>

      <RosterFilters
        sideFilter={sideFilter}
        onSideChange={onSideChange}
        onlyActive={onlyActive}
        onToggleOnlyActive={onToggleOnlyActive}
        stats={stats}
      />

      <RosterList roster={roster} />
    </div>
  );
}
