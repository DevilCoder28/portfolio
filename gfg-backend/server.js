const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("✅ GFG API is running");
});

// ✅ GFG Profile Scraper Route
app.get("/gfg/:username", async (req, res) => {
  const { username } = req.params;
  const url = `https://auth.geeksforgeeks.org/user/${username}/`;

  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    // 🏆 Coding Score and Problems Solved
    let score = "N/A";
    let problemsSolved = "N/A";

    $(".scoreCard_head__nxXR8 > div").each((_, el) => {
      const label = $(el).find(".scoreCard_head_left--text__KZ2S1").text().trim();
      const value = $(el).find(".scoreCard_head_left--score__oSi_x").text().trim();
      if (label === "Coding Score") score = value;
      else if (label === "Problem Solved") problemsSolved = value;
    });

    // 🎓 Rank
    const rank = $(".educationDetails_head_left_userRankContainer--text__wt81s b")
      .first()
      .text()
      .trim();

    // 📦 Categories (e.g., BASIC (20), EASY (50), etc.)
    const categories = {};
    $(".problemNavbar_head_nav--text__UaGCx").each((_, el) => {
      const text = $(el).text().trim(); // e.g., "EASY (50)"
      const match = text.match(/^(.+?)\s*\((\d+)\)$/);
      if (match) {
        const category = match[1].toUpperCase();
        const count = parseInt(match[2], 10);
        categories[category] = count;
      }
    });

    // ✅ Extract Easy / Medium / Hard from categories
    const easy = categories?.EASY?.toString() || "0";
    const medium = categories?.MEDIUM?.toString() || "0";
    const hard = categories?.HARD?.toString() || "0";

    // 🔥 Heatmap square count
    const heatmapSquares = $("rect").length;

    // 📤 Final JSON Response
    res.json({
      username,
      score,
      rank,
      problemsSolved,
      easy,
      medium,
      hard,
      heatmapSquares,
      categories,
    });
  } catch (error) {
    console.error("❌ Error scraping GFG:", error.message);
    res.status(500).json({ error: "Failed to scrape GFG profile" });
  }
});

// 🚀 Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ GFG Scraper Server is running on http://localhost:${PORT}`);
});
