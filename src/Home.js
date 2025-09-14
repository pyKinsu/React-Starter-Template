import React from "react";
import { Github, Twitter } from "lucide-react";
import "../App.css";

function Home() {
  return (
    <div className="home">
      {/* Logo */}
      <div className="logo-container">
        <img src="/logo.svg" alt="React Starter Logo" className="logo" />
      </div>

      {/* Header */}
      <h1 className="title">React Starter</h1>

      {/* Description */}
      <p className="description">
        🚀 A minimal React starter template by{" "}
        <a
          href="https://github.com/pykinsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Kinsu</strong>
        </a>
        . Use it as a base to kickstart any React project quickly and
        efficiently.
      </p>

      {/* View Repo Button */}
      <div className="button-row">
        <a
          href="https://github.com/pyKinsu/React-starter-template"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📂 View Repository
        </a>
      </div>

      {/* GitHub Badges (Live Counters) */}
      <div className="button-row">
        <a
          href="https://github.com/pyKinsu/React-starter-template/stargazers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/github/stars/pyKinsu/React-starter-template?style=for-the-badge&logo=github"
            alt="GitHub Stars"
          />
        </a>
        <a
          href="https://github.com/pyKinsu/React-starter-template/fork"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/github/forks/pyKinsu/React-starter-template?style=for-the-badge&logo=github"
            alt="GitHub Forks"
          />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        Made by{" "}
        <a
          href="https://github.com/pykinsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinsu (@pykinsu)
        </a>
        <div className="follow-row">
          <a
            href="https://github.com/pykinsu"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-btn"
          >
            <Github className="icon" /> GitHub
          </a>
          <a
            href="https://twitter.com/pykinsu"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-btn"
          >
            <Twitter className="icon" /> Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
