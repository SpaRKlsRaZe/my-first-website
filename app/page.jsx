import VisitForm from "./VisitForm";

/* ---------- Sample record data (synthetic, deterministic) ---------- */
const KEYS = 88;
const noise = (i, s) => Math.sin(i * 12.9898 + s * 78.233) * 43758.5453 % 1;
const found = Array.from({ length: KEYS }, (_, i) =>
  -13 + 5 * Math.sin(i / 9) - (i > 62 ? (i - 62) * 0.38 : 0) + (i < 12 ? (12 - i) * 0.5 : 0) + noise(i, 1) * 3
);
const left = Array.from({ length: KEYS }, (_, i) =>
  (i < 20 ? -(20 - i) * 0.32 : 0) + (i > 64 ? (i - 64) * 0.42 : 0) + noise(i, 2) * 0.7
);

const yMin = -30, yMax = 15;

const isBlack = (i) => [1, 4, 6, 9, 11].includes(i % 12); // index 0 = A0

function KeyChart({ W, H, PAD_L, PAD_R = 8, TOP = 12, kbH, className, marks }) {
  const x = (i) => PAD_L + (i / (KEYS - 1)) * (W - PAD_L - PAD_R);
  const y = (c) => TOP + ((yMax - c) / (yMax - yMin)) * (H - TOP - 20);
  const path = (arr) => arr.map((c, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(c).toFixed(1)}`).join("");
  const whites = [];
  const blacks = [];
  for (let i = 0; i < KEYS; i++) (isBlack(i) ? blacks : whites).push(i);
  const kw = (W - PAD_L - PAD_R) / whites.length;
  const kbTop = H + 6;
  return (
    <svg className={`chart ${className}`} viewBox={`0 0 ${W} ${H + kbH + 32}`} role="img" aria-labelledby={`${className}-title ${className}-desc`}>
      <title id={`${className}-title`}>Pitch found and pitch left across all 88 keys</title>
      <desc id={`${className}-desc`}>
        Sample data. Before tuning, the piano sat about 13 cents flat in the middle and further flat in the top octave.
        After tuning, it sits on pitch through the middle, stretched slightly flat in the bass and sharp in the treble.
      </desc>
      {[10, 0, -10, -20, -30].map((c) => (
        <g key={c}>
          <line x1={PAD_L} x2={W - PAD_R} y1={y(c)} y2={y(c)} className={c === 0 ? "axis-zero" : "axis"} />
          <text x={PAD_L - 8} y={y(c) + 4} className="axis-label" textAnchor="end">
            {c > 0 ? `+${c}` : c}
          </text>
        </g>
      ))}
      <path d={path(found)} className="line-found" />
      <path d={path(left)} className="line-left" />
      <text x={x(26)} y={y(-25)} className="series-label found">pitch found</text>
      <text x={x(26)} y={y(6)} className="series-label left">pitch left</text>
      <g aria-hidden="true">
        {whites.map((i, n) => (
          <rect key={i} x={PAD_L + n * kw} y={kbTop} width={kw - 1} height={kbH} className="kw" />
        ))}
        {blacks.map((i) => {
          const wBefore = whites.filter((w) => w < i).length;
          return <rect key={i} x={PAD_L + wBefore * kw - kw * 0.3} y={kbTop} width={kw * 0.6} height={kbH * 0.6} className="kb" />;
        })}
        {marks.map(([l, i]) => (
          <text key={l} x={x(i)} y={kbTop + kbH + 22} className="axis-label" textAnchor={i === 0 ? "start" : i === 87 ? "end" : "middle"}>{l}</text>
        ))}
      </g>
    </svg>
  );
}

/* ---------- Content ---------- */
const SERVICES = [
  { name: "Tuning", when: "Every six to twelve months for most homes. Schools and venues often twice a year.", time: "About 1½ hours", card: "Pitch found, pitch left, what to watch" },
  { name: "Pitch raise", when: "For a piano that hasn't been tuned in years and sits well below pitch.", time: "An extra pass, about 45 minutes", card: "Both passes recorded, plus when to re-tune" },
  { name: "Regulation", when: "When keys feel uneven, heavy, or slow to repeat.", time: "Half a day to a full day", card: "Every adjustment made, key by key" },
  { name: "Repair", when: "Sticking keys, broken strings, buzzing, squeaking pedals.", time: "Depends on the fault", card: "Part replaced and why" },
  { name: "Restoration", when: "Bringing an old or inherited instrument back. Starts with a visit to assess it.", time: "Weeks, in the workshop", card: "A written assessment before any work" },
];

const LOG = [
  ["0:00", "Listen first", "We play it through and ask what's been bothering you."],
  ["0:10", "Measure", "Every key is measured before anything is touched. That's the pitch found."],
  ["0:20", "Tune", "Unisons, then octaves outwards, stretched the way your piano's strings want."],
  ["1:15", "Check and play", "Small fixes while we're there: a sticking key, a loose pedal."],
  ["1:30", "Write the card", "Pitch left, what we did, and what to watch before next time. You keep a copy."],
];

export default function Page() {
  return (
    <>
      <a className="skip" href="#request">Skip to the visit form</a>
      <nav className="masthead" aria-label="Main">
        <a className="mark" href="#top">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="mark-icon">
            <path d="M8 3v8a4 4 0 0 0 8 0V3M12 15v6M9 21h6" />
          </svg>
          Hammerwell
        </a>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#record">The card</a></li>
          <li><a href="#visit">A visit</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main id="top">
        <section className="hero" id="request" aria-label="Request a visit">
          <VisitForm />
        </section>

        <section className="record" id="record" aria-labelledby="record-title">
          <div className="record-sheet">
            <header className="record-head">
              <h2 id="record-title">What the card tells you</h2>
              <p className="sample-flag">Sample record · synthetic data</p>
            </header>
            <div className="record-meta">
              <p><span className="label">Piano</span><span className="typed">Upright, 1974</span></p>
              <p><span className="label">Last tuned</span><span className="typed">About 3 years ago</span></p>
              <p><span className="label">Pitch found at A4</span><span className="typed">434.6 Hz</span></p>
              <p><span className="label">Pitch left at A4</span><span className="typed">440.0 Hz</span></p>
            </div>
            <KeyChart className="chart-wide" W={880} H={240} PAD_L={44} kbH={40} marks={[["A0", 0], ["C4", 39], ["A4 · 440 Hz", 48], ["C8", 87]]} />
            <KeyChart className="chart-narrow" W={400} H={260} PAD_L={34} PAD_R={4} kbH={30} marks={[["A0", 0], ["A4 · 440 Hz", 48], ["C8", 87]]} />
            <p className="chart-caption">
              Cents away from true pitch on every key, before and after. A hundred cents make a semitone, so
              thirteen cents flat is enough to sound sour next to a recording or another instrument.
            </p>
            <div className="record-notes">
              <p className="label">What to watch</p>
              <p className="typed">
                Room is dry in winter. Keep it away from the radiator. Two hammers in the top octave are wearing
                and are fine for now; check them next visit.
              </p>
            </div>
            <div className="record-sign">
              <p><span className="label">Technician</span><span className="signature" aria-label="Signed">J. Hammerwell</span></p>
              <p><span className="label">Next visit due</span><span className="typed">May 2027</span></p>
            </div>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <h2 id="services-title">Services, from most often needed</h2>
          <ol className="service-list">
            {SERVICES.map((s, i) => (
              <li key={s.name} className={`service rank-${i + 1}`}>
                <h3>{s.name}</h3>
                <p className="service-when">{s.when}</p>
                <dl className="service-tag">
                  <div><dt>Takes</dt><dd>{s.time}</dd></div>
                  <div><dt>On the card</dt><dd>{s.card}</dd></div>
                </dl>
              </li>
            ))}
          </ol>
          <p className="price-note">Prices are not listed on this demo site.</p>
        </section>

        <section className="visit" id="visit" aria-labelledby="visit-title">
          <h2 id="visit-title">How a tuning visit runs</h2>
          <p className="visit-lede">At homes, schools, churches and small venues. A typical tuning, timed:</p>
          <ol className="log">
            {LOG.map(([t, h, p]) => (
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
          <h2>Piano sounding sour?</h2>
          <a className="submit close-cta" href="#request">Fill in the request sheet</a>
          <dl className="contacts">
            <div><dt>Phone</dt><dd>(555) 010-0418</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:hello@hammerwell.example">hello@hammerwell.example</a></dd></div>
            <div><dt>Hours</dt><dd>Mon–Sat, 8:00–18:00</dd></div>
          </dl>
          <p className="fiction">Hammerwell Piano Care is a fictional business. This site is a design demo, and every name, number and record on it is placeholder content.</p>
        </div>
      </footer>
    </>
  );
}
