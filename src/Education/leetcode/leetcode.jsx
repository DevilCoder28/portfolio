function LeetCodeAndGFGCard() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        margin: "40px 0",
        padding: "20px",
      }}
    >
      {/* LeetCode Card */}
      <div style={{ textAlign: "center", maxWidth: "100%" }}>
        <h2 style={{ color: "#facc15", marginBottom: "16px" }}>
          LeetCode Stats
        </h2>
        <a
          href="https://leetcode.com/ayushkr282003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://leetcard.jacoblin.cool/ayushkr282003?theme=dark&font=baloo&ext=heatmap"
            alt="LeetCode Profile"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              boxShadow: "0 0 15px rgba(255,255,255,0.15)",
            }}
          />
        </a>
      </div>
      <div style={{ textAlign: "center", maxWidth: "100%" }}>
        <h2 style={{ color: "#facc15", marginBottom: "16px" }}>
          LeetCode Stats
        </h2>
        <a
          href="https://leetcode.com/Ayushkr926"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://leetcard.jacoblin.cool/Ayushkr926?theme=dark&font=baloo&ext=heatmap"
            alt="LeetCode Profile"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              boxShadow: "0 0 15px rgba(255,255,255,0.15)",
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default LeetCodeAndGFGCard;
