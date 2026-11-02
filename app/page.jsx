import CallForm from "./CallForm";

/* ---------- Sample brief data (synthetic) ---------- */
const LOAD = [
  // page, seconds to load on a mid-range phone: before, after
  ["Home", 6.8, 1.2],
  ["Menu", 8.1, 1.1],
  ["Order", 9.4, 1.6],
  ["About", 5.2, 0.9],
  ["Contact", 4.7, 0.8],
];
const LOAD_MAX = 10;

function LoadChart() {
  return (
    <figure className="bars" aria-labelledby="bars-caption">
      <dl className="bars-list">
        {LOAD.map(([page, before, after]) => (
          <div key={page} className="bars-row">
            <dt>{page}</dt>
            <dd>
              <span className="bar bar-before" style={{ "--w": `${(before / LOAD_MAX) * 100}%` }}>
                <span className="bar-value">{before.toFixed(1)} s<span className="visually-hidden"> before</span></span>
              </span>
              <span className="bar bar-after" style={{ "--w": `${(after / LOAD_MAX) * 100}%` }}>
                <span className="bar-value">{after.toFixed(1)} s<span className="visually-hidden"> after</span></span>
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <div className="bars-key" aria-hidden="true">
        <span className="key key-before">Old site</span>
        <span className="key key-after">New site</span>
      </div>
      <figcaption id="bars-caption" className="chart-caption">
        Seconds to load each page on a mid-range phone, old site against new. A slow page loses visitors
        before they ever see what you sell.
      </figcaption>
    </figure>
  );
}

/* ---------- Content ---------- */
const SERVICES = [
  { name: "New website", when: "For businesses with no site yet, or one that's a single page on a builder.", time: "4–6 weeks", card: "Sitemap, page-by-page plan, launch checklist" },
  { name: "Redesign", when: "When the site is slow, looks dated, or falls apart on a phone.", time: "3–5 weeks", card: "What to keep, what to cut, and why" },
  { name: "Online booking", when: "Appointments, classes or tables, bookable without a phone call.", time: "1–2 weeks on top of a build", card: "The booking flow, step by step" },
  { name: "Online shop", when: "Selling a focused range of products directly to customers.", time: "3–6 weeks", card: "Product setup and payment plan" },
  { name: "Ongoing care", when: "Updates, fixes and small changes after launch, so the site never goes stale.", time: "Monthly", card: "A monthly note of everything changed" },
];

const PROCESS = [
  ["Day 1", "Discovery call", "Thirty minutes about your business, your customers, and what the site has to do."],
  ["Week 1", "Written brief", "Goals, pages, features, timeline and price, in writing before anything is designed."],
  ["Week 2", "Design", "The key pages designed with your real content, reviewed together on a call."],
  ["Weeks 3–5", "Build", "Built fast and accessible, tested on phones first, with a preview link throughout."],
  ["Week 6", "Launch and handover", "We launch, then walk you through editing it yourself. You keep a written guide."],
];

export default function Page() {
  return (
    <>
      <a className="skip" href="#book">Skip to the booking form</a>
      <nav className="masthead" aria-label="Main">
        <a className="mark" href="#top">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="mark-icon">
            <rect x="3" y="4" width="18" height="16" rx="1" />
            <path d="M3 9h18M7 13h6M7 16h4" />
          </svg>
          Prackt
        </a>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#brief">The brief</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="nav-cta" href="#book">Book a Discovery Call</a></li>
        </ul>
      </nav>

      <main id="top">
        <section className="hero" id="book" aria-label="Book a discovery call">
          <CallForm />
        </section>

        <section className="record" id="brief" aria-labelledby="record-title">
          <div className="record-sheet">
            <header className="record-head">
              <h2 id="record-title">What the brief tells you</h2>
              <p className="sample-flag">Sample brief · synthetic data</p>
            </header>
            <div className="record-meta">
              <p><span className="label">Business</span><span className="typed">Neighbourhood bakery</span></p>
              <p><span className="label">Old site</span><span className="typed">One page, built 2019</span></p>
              <p><span className="label">Pages planned</span><span className="typed">5, plus online orders</span></p>
              <p><span className="label">Launch</span><span className="typed">6 weeks from brief</span></p>
            </div>
            <LoadChart />
            <div className="record-notes">
              <p className="label">Notes for the owner</p>
              <p className="typed">
                The menu changes every season, so you edit it yourself from your phone. Orders open before the
                holiday rush; we check the order page again two weeks after launch.
              </p>
            </div>
            <div className="record-sign">
              <p><span className="label">Prepared by</span><span className="signature" aria-label="Signed">Prackt · J.M.</span></p>
              <p><span className="label">Next check-in</span><span className="typed">May 2027</span></p>
            </div>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <h2 id="services-title">What we build, from most asked for</h2>
          <ol className="service-list">
            {SERVICES.map((s, i) => (
              <li key={s.name} className={`service rank-${i + 1}`}>
                <h3>{s.name}</h3>
                <p className="service-when">{s.when}</p>
                <dl className="service-tag">
                  <div><dt>Typical time</dt><dd>{s.time}</dd></div>
                  <div><dt>In the brief</dt><dd>{s.card}</dd></div>
                </dl>
              </li>
            ))}
          </ol>
          <p className="price-note">Every project is priced in the written brief, before work begins.</p>
        </section>

        <section className="visit" id="process" aria-labelledby="process-title">
          <h2 id="process-title">How a project runs</h2>
          <p className="visit-lede">From first call to a site you can run yourself, in about six weeks:</p>
          <ol className="log">
            {PROCESS.map(([t, h, p]) => (
              <li key={t}>
                <span className="log-time">{t}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="close" id="contact">
        <div className="perf" aria-hidden="true"><span>Tear here</span></div>
        <div className="close-inner">
          <h2>Ready for a website that works for you?</h2>
          <a className="submit close-cta" href="#book">Book a Discovery Call</a>
          <dl className="contacts">
            <div><dt>Phone</dt><dd>(555) 010-0418</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:hello@prackt.example">hello@prackt.example</a></dd></div>
            <div><dt>Hours</dt><dd>Mon–Fri, 9:00–17:30</dd></div>
          </dl>
          <p className="fiction">The phone number, email address, hours, availability, timings and sample brief on this page are placeholder content.</p>
        </div>
      </footer>
    </>
  );
}
