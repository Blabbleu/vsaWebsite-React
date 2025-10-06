import {
  translatePage,
  useGoogleTranslate,
} from "../hooks/useGoogleTranslate.js";

function LangButton({ lang, label }) {
  return (
    <button
      onClick={() => translatePage(lang)}
      className="lang-btn"
      type="button"
      aria-label={`Switch language to ${lang}`}
    >
      {label}
    </button>
  );
}

export default function Navbar() {
  useGoogleTranslate();
  return (
    <nav id="navbar" aria-label="Primary">
      <div id="google_translate_element" style={{ display: "none" }} />
      <div className="nav_img">
        <img id="vsa_logo" src="/tmvsa_logo2.png" alt="VSA logo" />
      </div>
      <ul>
        <li>
          <a href="#anchor1"> About Us </a>
        </li>
        <li>
          <a href="#anchor2"> Events</a>
        </li>
        <li>
          <a href="#anchor3"> Execs </a>
        </li>
        <li>
          <div
            className="lang-buttons"
            role="group"
            aria-label="Language selection"
          >
            <LangButton lang="en" label="🇨🇦" />
            <LangButton lang="vi" label="🇻🇳" />
          </div>
        </li>
      </ul>
    </nav>
  );
}
