"use client";

import { useEffect, useState } from "react";

const BUSINESSES = ["Shop", "Studio", "Trade", "Other"];
const NEEDS = ["New website", "Redesign", "Online booking", "Online shop", "Ongoing care"];

// Illustrative availability: closed weekends, and a fixed pattern of booked days.
function nextDays(count) {
  const days = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  for (let i = 1; days.length < count; i++) {
    const day = new Date(d);
    day.setDate(d.getDate() + i);
    const closed = day.getDay() === 0 || day.getDay() === 6;
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

export default function CallForm() {
  const [days, setDays] = useState([]);
  const [form, setForm] = useState({ business: "", needs: [], day: "", name: "", contact: "", site: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => setDays(nextDays(12)), []);

  const set = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };
  const toggleNeed = (s) =>
    set("needs", form.needs.includes(s) ? form.needs.filter((x) => x !== s) : [...form.needs, s]);

  const chosenDay = days.find((d) => d.key === form.day);
  const summary = [form.business, form.needs.join(", "), chosenDay && `${chosenDay.weekday} ${chosenDay.date} ${chosenDay.month}`, form.name, form.contact]
    .filter(Boolean)
    .join(" · ");

  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.needs.length) next.needs = "Tick at least one thing you need.";
    if (!form.day) next.day = "Choose an open day for the call.";
    if (!form.name.trim()) next.name = "Add your name so we know who we're talking to.";
    if (!form.contact.trim()) next.contact = "Add an email or phone number so we can send the call invite.";
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
            Prackt <span>Discovery call</span>
          </p>
          <p className="sheet-no" aria-label="Form number">No. 0418</p>
        </header>

        <h1 id="hero-title" className="hero-title">Built for your business, not from a template.</h1>
        <p className="hero-lede">
          Custom websites for small businesses: fast, easy to edit, and shaped around how your customers find
          and buy from you. Book a 30-minute call below; afterwards you get a written brief.
        </p>

        <div className="grid">
          <fieldset className="cell cell-business">
            <legend className="label">Your business</legend>
            <div className="ticks">
              {BUSINESSES.map((p) => (
                <label key={p} className="tick">
                  <input type="radio" name="business" value={p} checked={form.business === p} onChange={() => set("business", p)} />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="cell cell-needs" aria-describedby={errors.needs ? "err-needs" : undefined}>
            <legend className="label">What you need</legend>
            <div className="ticks">
              {NEEDS.map((s, i) => (
                <label key={s} className="tick">
                  <input
                    type="checkbox"
                    data-field={i === 0 ? "needs" : undefined}
                    checked={form.needs.includes(s)}
                    onChange={() => toggleNeed(s)}
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
            {errors.needs && <p id="err-needs" className="error">{errors.needs}</p>}
          </fieldset>

          <fieldset className="cell cell-days" aria-describedby={errors.day ? "err-day" : "days-note"}>
            <legend className="label">Call day <span className="label-aside">next twelve days</span></legend>
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
              <p id="days-note" className="hint">Struck days are booked or weekends. Availability shown is illustrative.</p>
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
            <span className="label">Email or phone</span>
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
            <span className="label">Current website <span className="label-aside">optional</span></span>
            <input
              className="field"
              value={form.site}
              placeholder="e.g. yourshop.com"
              onChange={(e) => set("site", e.target.value)}
            />
          </label>
        </div>

        {summary && (
          <p className="carbon-strip" aria-hidden="true">
            <span className="carbon-strip-label">On your copy</span> <span className="carbon-ink">{summary}</span>
          </p>
        )}
        <footer className="sheet-foot">
          <p className="foot-note">We reply within one working day with a time and a call link.</p>
          <button type="submit" className="submit">Book a Discovery Call</button>
        </footer>
        <div className="perf perf-bottom" aria-hidden="true" />
      </form>

      <aside className="sheet sheet-copy" aria-label="Your copy of the booking" aria-live="polite">
        <header className="copy-head">
          <p className="copy-title">Customer copy</p>
          <p className="sheet-no">No. 0418</p>
        </header>
        <dl className="copy-rows">
          <div><dt>Business</dt><dd>{carbon(form.business)}</dd></div>
          <div><dt>Needs</dt><dd>{carbon(form.needs.join(", "))}</dd></div>
          <div><dt>Call day</dt><dd>{carbon(chosenDay?.long)}</dd></div>
          <div><dt>Name</dt><dd>{carbon(form.name)}</dd></div>
          <div><dt>Contact</dt><dd>{carbon(form.contact)}</dd></div>
          <div><dt>Website</dt><dd>{carbon(form.site)}</dd></div>
        </dl>
        <div className="copy-after">
          <p className="label">After the call, your written brief covers</p>
          <ul>
            <li>Goals</li>
            <li>Pages</li>
            <li>Timeline</li>
            <li>Price</li>
          </ul>
        </div>
        {sent && (
          <div className="stamp-wrap">
            <p className="stamp" role="status">Received</p>
            <p className="stamp-note">This is a demo site, so nothing was sent.</p>
            <button type="button" className="link-btn" onClick={() => setSent(false)}>Book another</button>
          </div>
        )}
      </aside>
    </div>
  );
}
