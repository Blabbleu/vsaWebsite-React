import { useEffect, useMemo, useRef, useState } from "react";

export default function NowSection() {
  const slides = useMemo(
    () => [
      {
        q: "Where is the event?",
        a: "Tecumseh Auditorium, Sept 12, 6–9pm ($7).",
      },
      {
        q: "What can I expect?",
        a: "Travel through 3 regions with games & activities to earn stamps!",
      },
      {
        q: "How do I enter the raffle?",
        a: "Complete 3 region activities, collect stamps = raffle entry.",
      },
      {
        q: "Prizes?",
        a: "LEGO set, matcha kit, skincare bundle, disposable camera, snacks, coffee card.",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (prefersReduced) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 3000);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [prefersReduced]);

  return (
    <section className="now-section">
      <h2 id="now-title">Happening now</h2>
      <a
        href="https://eventbrite.com/your-happening-now-link"
        className="event-btn btn-now"
      >
        Get Tickets Now!
      </a>
      <img src="/event-poster.png" alt="event-poster" />

      <div
        className="info-bubble"
        onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
        onMouseLeave={() => {
          if (!prefersReduced) timerRef.current = setInterval(next, 3000);
        }}
      >
        <button
          className="bubble-prev"
          type="button"
          aria-label="Previous"
          onClick={prev}
        >
          &lt;
        </button>
        <div className="bubble-text">
          <span className="bubble-question">{slides[idx].q}</span>
          <br />
          {slides[idx].a}
        </div>
        <button
          className="bubble-next"
          type="button"
          aria-label="Next"
          onClick={next}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
