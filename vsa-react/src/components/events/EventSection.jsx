import EventCard from "./EventCard.jsx";
import NowSection from "./NowSection.jsx";

export default function EventsSection() {
  return (
    <section className="events-section" aria-labelledby="anchor2">
      {/* TOP News ticker */}
      <div className="news-ticker" aria-label="Announcements">
        <div className="ticker-track">
          <span>
            🎟 Orientation Night: Sept 12, 6–9pm @ Tecumseh Auditorium | Complete
            your passport to enter the raffle!
          </span>
        </div>
        <div className="ticker-track">
          <span>Follow us on Instagram @torontometvsa</span>
        </div>
      </div>

      <h3 id="anchor2">our events</h3>

      <div className="events" aria-labelledby="anchor3">
        <section className="upcoming-section">
          <h2 id="upcoming-title">upcoming events</h2>

          <EventCard
            name="orientation"
            desc="Play games and collect stamps for your chance to win awesome prizes!"
            time="6pm – 9pm @ Tecumseh Auditorium"
            month="september"
            day="12"
            ctaHref="https://www.eventbrite.com/e/orientation-event-tickets-123456789"
          />

          <div className="blur">
            <EventCard
              name="mid-autumn gala"
              desc="Mooncakes, music, and performances!"
              time="6pm – 9pm"
              month="october"
              day="1"
              hideCta
            />
            <EventCard
              name="study jam"
              desc="Quiet space + coffee. Bring friends!"
              time="2pm – 4pm"
              month="october"
              day="15"
              hideCta
            />
          </div>
        </section>
      </div>

      <NowSection />

      {/* BOTTOM News ticker */}
      <div className="news-ticker-bottom" aria-label="Announcements">
        <div className="ticker-track">
          <span>
            🎟 Orientation Night: Sept 12, 6–9pm @ Tecumseh Auditorium — Raffle
            prizes galore!
          </span>
        </div>
        <div className="ticker-track">
          <span>Follow us on Instagram @torontometvsa</span>
        </div>
      </div>
    </section>
  );
}
