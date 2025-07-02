import React, { useEffect, useState } from "react";

function GfgProfileCard({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/gfg/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GFG data");
        return res.json();
      })
      .then((info) => setData(info))
      .catch((err) => setError(err.message));
  }, [username]);

  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;
  if (!data) return <p style={{ color: "#999" }}>Loading GFG Profile...</p>;

  const { score, rank, easy, medium, hard, heatmapSquares, categories } = data;

  return (
    <div style={styles.card}>
      {/* Header */}
      <div style={styles.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
          alt="GFG Logo"
          style={styles.logo}
        />
        <h2 style={styles.username}>@{username}</h2>
        <p style={styles.rank}>🏅 Rank: {rank || "N/A"}</p>
      </div>

      {/* Score Circle */}
      <div style={styles.scoreBox}>
        <span style={styles.scoreText}>{score}</span>
        <p style={styles.scoreLabel}>Coding Score</p>
      </div>

      {/* Difficulty Section */}
      <div style={styles.difficultyBox}>
        <div style={{ ...styles.diffItem, borderLeft: "4px solid #81c784" }}>
          Easy: <span style={styles.diffCount}>{easy}</span>
        </div>
        <div style={{ ...styles.diffItem, borderLeft: "4px solid #ffb74d" }}>
          Medium: <span style={styles.diffCount}>{medium}</span>
        </div>
        <div style={{ ...styles.diffItem, borderLeft: "4px solid #e57373" }}>
          Hard: <span style={styles.diffCount}>{hard}</span>
        </div>
      </div>

      {/* Heatmap */}
      <div style={styles.heatmap}>
        <p style={styles.heatmapLabel}>🔥 Weekly Activity Heatmap</p>
        <div style={styles.heatmapGrid}>
          {[...Array(heatmapSquares)].map((_, i) => (
            <div key={i} style={styles.heatBlock}></div>
          ))}
        </div>
      </div>

      {/* Category Grid */}
      <div>
        <h3 style={styles.catTitle}>🧩 Problem Categories</h3>
        <div style={styles.categoryGrid}>
          {Object.entries(categories).map(([cat, count]) => (
            <div key={cat} style={styles.categoryItem}>
              <span>{cat}</span>
              <span style={styles.catCount}>{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "24px",
    borderRadius: "16px",
    background: "rgba(29, 31, 33, 0.85)",
    color: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
    backdropFilter: "blur(8px)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "40px",
    marginBottom: "10px",
  },
  username: {
    fontSize: "20px",
    margin: "4px 0",
    color: "#90caf9",
  },
  rank: {
    fontSize: "14px",
    color: "#ccc",
  },
  scoreBox: {
    textAlign: "center",
    marginBottom: "24px",
  },
  scoreText: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#00e676",
  },
  scoreLabel: {
    marginTop: "-8px",
    fontSize: "13px",
    color: "#aaa",
  },
  difficultyBox: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "24px",
  },
  diffItem: {
    backgroundColor: "#2a2a2f",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
  },
  diffCount: {
    fontWeight: "bold",
    color: "#fff",
  },
  heatmap: {
    marginBottom: "24px",
  },
  heatmapLabel: {
    fontSize: "13px",
    color: "#ccc",
    marginBottom: "6px",
  },
  heatmapGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 6px)",
    gap: "2px",
    maxHeight: "60px",
    overflow: "hidden",
  },
  heatBlock: {
    width: "6px",
    height: "6px",
    backgroundColor: "#388e3c",
    borderRadius: "2px",
    animation: "pulse 1.5s infinite ease-in-out alternate",
  },
  catTitle: {
    fontSize: "16px",
    marginBottom: "8px",
    color: "#ccc",
  },
  categoryGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  categoryItem: {
    backgroundColor: "#212124",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "13px",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    color: "#fff",
    transition: "all 0.2s ease",
    cursor: "default",
  },
  catCount: {
    color: "#00e5ff",
    fontWeight: "bold",
  },
};

export default GfgProfileCard;
