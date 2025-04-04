import React, { useState, useEffect } from "react";

const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    longestWord: "",
    frequentWord: { word: "", count: 0 },
    pronouns: 0,
  });

  // List of pronouns to check
  const pronouns = [
    "i",
    "you",
    "he",
    "she",
    "it",
    "we",
    "they",
    "me",
    "him",
    "her",
    "us",
    "them",
  ];

  useEffect(() => {
    if (text.trim() === "") {
      setStats({
        characters: 0,
        words: 0,
        sentences: 0,
        paragraphs: 0,
        longestWord: "",
        frequentWord: { word: "", count: 0 },
        pronouns: 0,
      });
      return;
    }

    // Calculate basic stats
    const characters = text.length;
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const sentences = text
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0).length;
    const paragraphs = text
      .split(/\n+/)
      .filter((p) => p.trim().length > 0).length;

    // Find longest word
    const wordArray = text
      .split(/\s+/)
      .map((w) => w.replace(/[^a-zA-Z]/g, ""))
      .filter((w) => w);
    const longestWord = wordArray.reduce(
      (a, b) => (a.length > b.length ? a : b),
      ""
    );

    // Find most frequent word
    const wordCount = {};
    wordArray.forEach((word) => {
      const lowerWord = word.toLowerCase();
      wordCount[lowerWord] = (wordCount[lowerWord] || 0) + 1;
    });
    const frequentWord = Object.entries(wordCount).reduce(
      (a, b) => (b[1] > a[1] ? b : a),
      ["", 0]
    );

    // Count pronouns
    const pronounCount = wordArray.filter((word) =>
      pronouns.includes(word.toLowerCase())
    ).length;

    setStats({
      characters,
      words,
      sentences,
      paragraphs,
      longestWord,
      frequentWord: { word: frequentWord[0], count: frequentWord[1] },
      pronouns: pronounCount,
    });
  }, [text]);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Text Analyzer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        style={{ width: "100%", minHeight: "200px", padding: "10px" }}
        autoFocus
      />

      <div
        style={{
          marginTop: "20px",
          background: "#f5f5f5",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        <h2>Statistics</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <strong>Characters:</strong> {stats.characters}
          </li>
          <li>
            <strong>Words:</strong> {stats.words}
          </li>
          <li>
            <strong>Sentences:</strong> {stats.sentences}
          </li>
          <li>
            <strong>Paragraphs:</strong> {stats.paragraphs}
          </li>
          <li>
            <strong>Longest Word:</strong> {stats.longestWord || "N/A"}
          </li>
          <li>
            <strong>Most Frequent Word:</strong>{" "}
            {stats.frequentWord.word || "N/A"}
            {stats.frequentWord.count > 0 &&
              ` (${stats.frequentWord.count} times)`}
          </li>
          <li>
            <strong>Pronouns:</strong> {stats.pronouns}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TextAnalyzer;
