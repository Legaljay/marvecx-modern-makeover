/**
 * MARVECX wordmark shown in the Studio navbar.
 * Uses the mark served from /static/favicon.ico by the Studio build.
 */
export function StudioLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src="/static/favicon.ico"
        alt="MARVECX"
        width={22}
        height={22}
        style={{ display: "block" }}
      />
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        Marvecx CMS
      </span>
    </div>
  );
}

export default StudioLogo;
