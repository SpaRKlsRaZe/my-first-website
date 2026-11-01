"use client";

import { useEffect, useState } from "react";

const PIANOS = ["Upright", "Grand", "Not sure"];
const SERVICES = ["Tuning", "Pitch raise", "Regulation", "Repair", "Restoration"];

// Illustrative availability: closed Sundays, and a fixed pattern of booked days.
function nextDays(count) {
  const days = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  for (let i = 1; days.length < count; i++) {
    const day = new Date(d);
    day.setDate(d.getDate() + i);
    const closed = day.getDay() === 0;
    const booked = !closed && (day.getDate() % 5 === 0 || day.getDate() % 7 === 3);
    days.push({
      key: day.toISOString().slice(0, 10),
      weekday: day.toLocaleDateString("en-GB", { weekday: "short" }),
      date: day.getDate(),
      month: day.toLocaleDateString("en-GB", { month: "short" }),
      long: day.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
      status: closed ? "closed" : booked ? "booked" : "open",
    });
  }
  return days;
}

export default function VisitForm() {
  const [days, setDays] = useState([]);
  const [form, setForm] = useState({ piano: "", services: [], day: "", name: "", contact: "", note: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => setDays(nextDays(12)), []);

  const set = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };
  const toggleService = (s) =>
    set("services", form.services.includes(s) ? form.services.filter((x) => x !== s) : [...form.services, s]);

  const chosenDay = days.find((d) => d.key === form.day);
  const summary = [form.piano, form.services.join(", "), chosenDay && `${chosenDay.weekday} ${chosenDay.date} ${chosenDay.month}`, form.name, form.contact]
    .filter(Boolean)
    .join(" · ");

  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.services.length) next.services = "Tick at least one service.";
    if (!form.day) next.day = "Choose an open day.";
    if (!form.name.trim()) next.name = "Add your name so we know who to ask for.";
    if (!form.contact.trim()) next.contact = "Add a phone number or email so we can confirm.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = document.querySelector(`[data-field="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setSent(true);
  }

  const carbon = (value) => (value ? <span className="carbon-ink">{value}</span> : <span className="carbon-blank" aria-hidden="true" />);

  return (
    <div className={`sheet-set${sent ? " is-sent" : ""}`}>
      <form className="sheet sheet-top" onSubmit={submit} noValidate aria-labelledby="hero-title">
        <header className="sheet-head">
          <p className="sheet-firm">
            Hammerwell Piano Care <span>Request a visit</span>
          </p>
          <p className="sheet-no" aria-label="Form number">No. 0418</p>
        </header>

        <h1 id="hero-title" className="hero-title">Every visit ends in writing.</h1>
        <p className="hero-lede">
          Tuning, regulation and repair for acoustic pianos at home, school or venue. Fill in this sheet to
          request a visit. You keep the copy, and after the visit you get the full card.
        </p>

        <div className="grid">
          <fieldset className="cell cell-piano">
            <legend className="label">Piano</legend>
            <div className="ticks">
              {PIANOS.map((p) => (
                <label key={p} className="tick">
                  <input type="radio" name="piano" value={p} checked={form.piano === p} onChange={() => set("piano", p)} />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="cell cell-service" aria-describedby={errors.services ? "err-services" : undefined}>
            <legend className="label">Service needed</legend>
            <div className="ticks">
              {SERVICES.map((s, i) => (
                <label key={s} className="tick">
                  <input
                    type="checkbox"
                    data-field={i === 0 ? "services" : undefined}
                    checked={form.services.includes(s)}
                    onChange={() => toggleService(s)}
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
            {errors.services && <p id="err-services" className="error">{errors.services}</p>}
          </fieldset>

          <fieldset className="cell cell-days" aria-describedby={errors.day ? "err-day" : "days-note"}>
            <legend className="label">Visit day <span className="label-aside">next twelve days</span></legend>
            <div className="days">
              {days.length === 0 && <p className="days-loading">Loading the diary…</p>}
              {days.map((d, i) => (
                <label key={d.key} className={`day day-${d.status}`}>
                  <input
                    type="radio"
                    name="day"
                    value={d.key}
                    data-field={i === 0 ? "day" : undefined}
                    disabled={d.status !== "open"}
                    checked={form.day === d.key}
                    onChange={() => set("day", d.key)}
                    aria-label={`${d.long}${d.status !== "open" ? `, ${d.status}` : ""}`}
                  />
                  <span className="day-wk" aria-hidden="true">{d.weekday}</span>
                  <span className="day-num" aria-hidden="true">{d.date}</span>
                  <span className="day-mo" aria-hidden="true">{d.month}</span>
                </label>
              ))}
            </div>
            {errors.day ? (
              <p id="err-day" className="error">{errors.day}</p>
            ) : (
              <p id="days-note" className="hint">Struck days are booked or closed. Availability shown is illustrative.</p>
            )}
          </fieldset>

          <label className="cell cell-name">
            <span className="label">Your name</span>
            <input
              className="field"
              data-field="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name && <span id="err-name" className="error">{errors.name}</span>}
          </label>

          <label className="cell cell-contact">
            <span className="label">Phone or email</span>
            <input
              className="field"
              data-field="contact"
              autoComplete="email"
              value={form.contact}
              onChange={(e) => set("contact", e.target.value)}
              aria-invalid={!!errors.contact}
              aria-describedby={errors.contact ? "err-contact" : undefined}
            />
            {errors.contact && <span id="err-contact" className="error">{errors.contact}</span>}
          </label>

          <label className="cell cell-note">
            <span className="label">What's wrong with it? <span className="label-aside">optional</span></span>
            <input
              className="field"
              value={form.note}
              placeholder="e.g. middle C sticks"
              onChange={(e) => set("note", e.target.value)}
            />
          </label>
        </div>

        {summary && (
          <p className="carbon-strip" aria-hidden="true">
            <span className="carbon-strip-label">On your copy</span> <span className="carbon-ink">{summary}</span>
          </p>
        )}
        <footer className="sheet-foot">
          <p className="foot-note">We reply within one working day to confirm a time.</p>
          <button type="submit" className="submit">Request this visit</button>
        </footer>
        <div className="perf perf-bottom" aria-hidden="true" />
      </form>

      <aside className="sheet sheet-copy" aria-label="Your copy of the request" aria-live="polite">
        <header className="copy-head">
          <p className="copy-title">Customer copy</p>
          <p className="sheet-no">No. 0418</p>
        </header>
        <dl className="copy-rows">
          <div><dt>Piano</dt><dd>{carbon(form.piano)}</dd></div>
          <div><dt>Service</dt><dd>{carbon(form.services.join(", "))}</dd></div>
          <div><dt>Visit day</dt><dd>{carbon(chosenDay?.long)}</dd></div>
          <div><dt>Name</dt><dd>{carbon(form.name)}</dd></div>
          <div><dt>Contact</dt><dd>{carbon(form.contact)}</dd></div>
          <div><dt>Note</dt><dd>{carbon(form.note)}</dd></div>
        </dl>
        <div className="copy-after">
          <p className="label">After the visit this card records</p>
          <ul>
            <li>Pitch found</li>
            <li>Pitch left</li>
            <li>What to watch</li>
          </ul>
        </div>
        {sent && (
          <div className="stamp-wrap">
            <p className="stamp" role="status">Received</p>
            <p className="stamp-note">This is a demo site, so nothing was sent.</p>
            <button type="button" className="link-btn" onClick={() => setSent(false)}>Fill in another</button>
          </div>
        )}
      </aside>
    </div>
  );
}
