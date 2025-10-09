import React, { useState, useEffect } from "react";

function NearflowLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-label="Nearflow logo">
      <defs>
        <linearGradient id="nfGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#nfGrad)"/>
      <path d="M14 34 V14 L34 34 V14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 30 L32 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M32 20 L30 22 M32 20 L30 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export default function SDRLandingPage() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    return () => document.body.removeChild(s);
  }, []);

  const openCalendly = () => {
    const url = "https://calendly.com/YOUR_HANDLE/intro-20min";
    // @ts-ignore
    window.Calendly?.initPopupWidget({ url });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, company, message });
    setSubmitted(true);
  };

  const features = [
    { title: "Cut SDR costs by ~60%", desc: "Nearshore teams in Latin America deliver U.S.-quality work at a fraction of the cost." },
    { title: "Same‑time‑zone collaboration", desc: "Real‑time standups, live call coaching, and tight feedback loops." },
    { title: "Bilingual, trained reps", desc: "English/Spanish SDRs trained on your ICP, messaging, and CRM." },
    { title: "Fully managed service", desc: "We recruit, train, QA, and report. You focus on closing deals." },
  ];

  const services = [
    { title: "Dedicated SDRs", points: ["Full‑time or part‑time reps","Cold calling, email, LinkedIn","Objection handling & follow‑ups"] },
    { title: "Appointment Setting", points: ["Qualified meetings to your calendar","Custom scripts & sequences","Weekly reporting & insights"] },
    { title: "Playbooks & CRM", points: ["ICP & messaging playbooks","HubSpot/Salesforce/Apollo setup","Dashboards & KPIs"] },
  ];

  const pricing = [
    { tier: "Starter", price: "$1,500/mo", detail: "1 part‑time SDR (80 hrs/mo)", items: ["Outbound email + LinkedIn","Up to 20 meetings/mo","Weekly KPI report"], cta: "Start Pilot", recommended: false },
    { tier: "Growth", price: "$2,500/mo", detail: "1 full‑time SDR", items: ["Cold calling + omnichannel","ICP/messaging playbook","QA + call coaching"], cta: "Book a Call", recommended: true },
    { tier: "Scale", price: "Custom", detail: "2–10 SDRs + Team Lead", items: ["Pod management","Sales manager oversight","Advanced reporting"], cta: "Request Quote", recommended: false },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <NearflowLogo size={32} />
            <span className="text-lg font-semibold tracking-tight">Nearflow</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#features" className="hover:text-gray-600">Why Us</a>
            <a href="#services" className="hover:text-gray-600">Services</a>
            <a href="#pricing" className="hover:text-gray-600">Pricing</a>
            <a href="#process" className="hover:text-gray-600">How It Works</a>
          </nav>
          <a href="#contact" className="rounded-2xl border border-gray-900 px-4 py-2 text-sm font-semibold hover:bg-gray-900 hover:text-white">
            Book a Free Consultation
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Supercharge Your Sales Pipeline with Nearshore SDRs</h1>
            <p className="mt-4 text-lg text-gray-600">
              Cut SDR costs by ~60% without sacrificing performance. <span className="font-semibold">Nearflow</span> recruits, trains, and manages nearshore SDRs so you can focus on closing deals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-90">Get Pricing & Availability</a>
              <button type="button" onClick={openCalendly} className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold hover:border-gray-900">Book on Calendly</button>
            </div>
            <p className="mt-3 text-sm text-gray-500">Trusted by founders, agencies, and SMBs across the U.S.</p>
          </div>
          <div className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <ul className="grid gap-3 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />Time‑zone aligned collaboration</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />Bilingual (EN/ES) reps trained in U.S. sales culture</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />Playbooks, QA, and weekly KPI reporting included</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />Integrates with HubSpot, Salesforce, Apollo, Outreach</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Why Nearshore SDRs</h2>
          <p className="mt-2 max-w-2xl text-gray-600">We build and manage SDR pods in LatAm so you get qualified meetings without the overhead of hiring, training, and managing internally.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
              <p className="mt-2 max-w-2xl text-gray-600">Transparent plans that scale with you. Start with a pilot and expand as pipeline grows.</p>
            </div>
            <a href="#contact" className="mt-6 inline-block rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white md:mt-0">Ask About This Month's Open Seats</a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricing.map((p) => (
              <div key={p.tier} className={"rounded-3xl border bg-white p-6 shadow-sm " + (p.recommended ? "ring-2 ring-gray-900" : "")}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{p.tier}</h3>
                  {p.recommended && (<span className="rounded-full border px-2 py-1 text-xs font-semibold">Most Popular</span>)}
                </div>
                <div className="mt-3 text-3xl font-bold">{p.price}</div>
                <div className="text-sm text-gray-600">{p.detail}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {p.items.map((i) => (<li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />{i}</li>))}
                </ul>
                <a href="#contact" className="mt-6 inline-block rounded-2xl border border-gray-900 px-4 py-2 text-sm font-semibold hover:bg-gray-900 hover:text-white">{p.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { n: 1, t: "Scope & ICP", d: "We define targets, messaging, KPIs, and tech stack." },
              { n: 2, t: "Recruit & Train", d: "We source bilingual reps and run our SDR Bootcamp." },
              { n: 3, t: "Launch", d: "Sequencing, scripts, QA, and go-live in ~2 weeks." },
              { n: 4, t: "Scale", d: "Add reps, refine messaging, and expand channels." },
            ].map((s) => (
              <li key={s.n} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold">{s.n}</div>
                <h3 className="mt-3 text-base font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y bg-gray-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <h3 className="text-xl font-semibold">Ready to book more meetings without breaking the bank?</h3>
          <div className="flex gap-3">
            <a href="#contact" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900">Get a Proposal</a>
            <button type="button" onClick={openCalendly} className="rounded-2xl border border-white px-5 py-3 text-sm font-semibold hover:bg-white hover:text-gray-900">Book on Calendly</button>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Get Pricing & Availability</h2>
            <p className="mt-2 max-w-lg text-gray-600">Tell us a bit about your company and ideal customer. We'll send a tailored plan with timelines, sample scripts, and expected KPI ranges.</p>
            <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <label className="text-sm font-medium">Work Email
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                  </label>
                  <label className="text-sm font-medium">Company
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme, Inc." className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                  </label>
                  <label className="text-sm font-medium">What do you need help with?
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="e.g., 1 SDR for cold calling + email, HubSpot setup, 15 meetings/mo" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                  </label>
                  <button type="submit" className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">Send & Request Proposal</button>
                  <p className="text-xs text-gray-500">By submitting, you agree to be contacted about services. No spam.</p>
                </form>
              ) : (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Thanks! We'll be in touch shortly.</h3>
                  <p className="text-sm text-gray-600">We received your request and will email a proposal to <span className="font-medium">{email}</span>.</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">What you get</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />KPI plan with targets (connect rate, meetings booked, SQLs)</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />Sample scripts + first‑week sequencing</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />Tooling recommendations (dialer/CRM/prospecting)</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />SLA & reporting cadence</li>
              </ul>
              <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-sm">Prefer email? Contact us: <a href="mailto:hello@nearflow.co" className="font-semibold underline">hello@nearflow.co</a></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <NearflowLogo size={28} />
              <span className="font-semibold text-gray-900">Nearflow</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#features" className="hover:text-gray-900">Why Us</a>
              <a href="#services" className="hover:text-gray-900">Services</a>
              <a href="#pricing" className="hover:text-gray-900">Pricing</a>
              <a href="#process" className="hover:text-gray-900">How It Works</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-400">© {2025} Nearflow. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}