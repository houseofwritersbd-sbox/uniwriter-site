"use client";
import { useState } from "react";

// NOTE: This single-file React component is a production-ready landing page
// inspired by UK assignment-help sites. It uses Tailwind classes for styling
// and keeps JS minimal (no external UI libs). You can drop this into a Next.js
// app as `app/page.tsx` (or src/app/page.tsx), or render it in any React app.
// Hook up the forms to your backend (e.g., API routes, webhook, or a CRM).

export default function AssignmentHelpLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top ribbon */}
      <div className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm text-white">
          24/7 Support · Free Plagiarism Report · Confidential & Secure
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600/10 ring-1 ring-indigo-600/30 flex items-center justify-center font-semibold text-indigo-700">UK</div>
            <span className="font-semibold tracking-tight">UniWriter — UK Assignment Help</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-indigo-700">Services</a>
            <a href="#subjects" className="hover:text-indigo-700">Subjects</a>
            <a href="#how" className="hover:text-indigo-700">How it works</a>
            <a href="#reviews" className="hover:text-indigo-700">Reviews</a>
            <a href="#pricing" className="hover:text-indigo-700">Pricing</a>
            <a href="#faq" className="hover:text-indigo-700">FAQ</a>
            <button onClick={() => setOrderOpen(true)} className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Order Now</button>
          </nav>
          <button aria-label="Open Menu" onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-4 py-3 grid gap-3 text-sm">
              {[["#services","Services"],["#subjects","Subjects"],["#how","How it works"],["#reviews","Reviews"],["#pricing","Pricing"],["#faq","FAQ"]].map(([href,label]) => (
                <a key={href} href={href} onClick={() => setMobileOpen(false)} className="py-2">{label}</a>
              ))}
              <button onClick={() => { setOrderOpen(true); setMobileOpen(false); }} className="rounded-xl bg-indigo-600 px-4 py-2 text-white">Order Now</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs ring-1 ring-emerald-200">New · September Intake Special · Up to 55% Off</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Expert UK Assignment Help — <span className="text-indigo-700">On Time, Every Time</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Essays, reports, case studies, dissertations, and more — crafted to your brief by subject specialists. Free plagiarism report. Unlimited revisions within scope.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-slate-700">
              {[
                "100% original work with a free plagiarism report",
                "Confidential & secure — GDPR-ready",
                "24/7 chat & WhatsApp support",
                "Fair pricing with student discounts",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2"><svg className="h-5 w-5 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd"/></svg>{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => setOrderOpen(true)} className="rounded-xl bg-indigo-600 px-5 py-3 text-white text-sm font-medium hover:bg-indigo-700">Get a Free Quote</button>
              <a href="#how" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium">How it works</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-600">
              <div>★ ★ ★ ★ ☆ <span className="font-medium">4.7/5</span> (1k+ student ratings)</div>
              <div className="hidden sm:block">Trusted by students at 150+ UK/UE universities</div>
            </div>
          </div>
          <div className="lg:justify-self-end w-full">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
              <h3 className="text-lg font-semibold">Quick Quote</h3>
              <p className="mt-1 text-sm text-slate-600">Share your brief — we’ll reply in minutes.</p>

              {/* QUICK QUOTE → Formspree: mgvlwqkz */}
              <form
                action="https://formspree.io/f/mgvlwqkz"
                method="POST"
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <input name="name" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Your name"/>
                <input name="email" required type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Email"/>
                <input name="whatsapp" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:col-span-2" placeholder="WhatsApp (optional)"/>

                <select name="service" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                  <option>Essay</option>
                  <option>Report</option>
                  <option>Case Study</option>
                  <option>Dissertation</option>
                  <option>Other</option>
                </select>
                <select name="level" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                  <option>Undergraduate</option>
                  <option>Masters</option>
                  <option>PhD</option>
                  <option>College</option>
                </select>
                <input name="wordcount" type="number" min={1} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Word count"/>
                <input name="deadline" type="date" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"/>
                <textarea name="brief" rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:col-span-2" placeholder="Describe your brief..."/>

                {/* Optional helpers */}
                <input type="hidden" name="_subject" value="New Quick Quote" />
                {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

                <button className="sm:col-span-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-white text-sm font-medium hover:bg-indigo-700">
                  Request Quote
                </button>
                <p className="sm:col-span-2 text-[11px] text-slate-500">By submitting, you agree to our <a className="underline" href="#">Terms</a> & <a className="underline" href="#">Privacy</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-xs text-slate-600">
          {["Plagiarism Report","Quality Check","On-Time Delivery","24/7 Support","Secure Payments","Confidential"].map((b)=>(
            <div key={b} className="rounded-lg bg-white p-3 ring-1 ring-slate-200">{b}</div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Assignment Help Services</h2>
          <p className="mt-2 text-slate-600">End-to-end academic writing and editing support from topic selection to final submission.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {t:"Essay & Report Writing",d:"Structured to your rubric with Harvard, APA, or MLA references.",i:"📝"},
            {t:"Dissertation & Thesis",d:"Proposal, literature review, methodology, analysis, and discussion.",i:"🎓"},
            {t:"Case Study & Presentations",d:"Critical analysis with frameworks, visuals, and speaker notes.",i:"📊"},
            {t:"Editing & Proofreading",d:"Line editing, formatting, turnitin-safe polishing.",i:"✍️"},
            {t:"Business & Nursing",d:"Management, marketing, finance, law, HR, nursing, and more.",i:"🏥"},
            {t:"CVs & Personal Statements",d:"Polished statements tailored for UCAS and postgraduate programs.",i:"📄"},
          ].map((c)=> (
            <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl" aria-hidden>{c.i}</div>
              <h3 className="mt-3 font-semibold">{c.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.d}</p>
              <button onClick={()=>setOrderOpen(true)} className="mt-4 text-sm font-medium text-indigo-700 hover:underline">Get a quote →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold">Covered Subjects</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
            {["Management","Marketing","Finance","Accounting","Law","IT","Data Science","Nursing","Psychology","Sociology","Education","Engineering"].map((s)=> (
              <div key={s} className="rounded-lg bg-white p-3 ring-1 ring-slate-200">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <p className="mt-2 text-slate-600">Simple four-step process designed around your deadlines.</p>
        </div>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {t:"1. Submit brief",d:"Upload your rubric, topic, and deadline."},
            {t:"2. Get quote",d:"We match you with a subject expert and price fairly."},
            {t:"3. Track progress",d:"Chat with your writer. Request updates and drafts."},
            {t:"4. Download",d:"Receive Turnitin-safe work. Free revisions within scope."},
          ].map((s)=> (
            <li key={s.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">{s.t}</h3><p className="mt-1 text-sm text-slate-600">{s.d}</p></li>
          ))}
        </ol>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Student Reviews</h2>
              <p className="mt-2 text-slate-600">Real feedback from verified orders.</p>
            </div>
            <a className="text-sm font-medium text-indigo-700 hover:underline" href="#">Read more reviews →</a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {n:"Aisha K.",c:"Marketing report delivered 2 days early. Clear analysis and proper Harvard refs."},
              {n:"Liam D.",c:"Great communication throughout. Revision handled within hours."},
              {n:"Priya S.",c:"Dissertation methodology was on point and aligned with my supervisor's guidance."},
            ].map((r)=> (
              <div key={r.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-amber-500">★ ★ ★ ★ ★</div>
                <p className="mt-2 text-sm text-slate-700">“{r.c}”</p>
                <div className="mt-3 text-sm font-medium">{r.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold">Fair Pricing</h2>
          <p className="mt-2 text-slate-600">Transparent rates that scale with level, urgency, and complexity.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {t:"Standard",p:"from £8.90 / page",f:["7–10 day delivery","Experienced writer","Free plagiarism report"]},
              {t:"Express",p:"from £14.90 / page",f:["48–72h delivery","Top 10% writer","Priority support"]},
              {t:"Premium",p:"from £19.90 / page",f:["24–48h delivery","Senior UK expert","Detailed quality review"]},
            ].map((plan)=> (
              <div key={plan.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{plan.t}</h3>
                  <div className="text-sm text-slate-600">{plan.p}</div>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                  {plan.f.map((x)=> <li key={x} className="flex items-start gap-2"><svg className="h-5 w-5 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd"/></svg>{x}</li>)}
                </ul>
                <button onClick={()=>setOrderOpen(true)} className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700">Get started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-8 text-white">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Need it this week? We can help.</h3>
              <p className="mt-2 text-sm text-indigo-50">Upload your brief and deadline — we’ll reply with a tailored quote and timeline.</p>
            </div>
            <div className="md:justify-self-end">
              <button onClick={()=>setOrderOpen(true)} className="rounded-xl bg-white/10 ring-1 ring-white/30 px-5 py-3 text-sm font-medium hover:bg-white/20">Order Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <div className="mt-6 grid gap-4">
            {[
              {q:"Is your service legit?", a:"We provide model answers and academic support (research, editing, formatting). Use them responsibly and follow your institution’s academic integrity policy."},
              {q:"Do you guarantee grades?", a:"No one can ethically guarantee grades. We assure quality aligned with your brief and offer revisions within scope."},
              {q:"Will my details remain private?", a:"Yes. We only collect data necessary to process your order and never share it with third parties without consent."},
              {q:"Can I talk to my writer?", a:"Yes, you can exchange messages and request drafts or updates."},
            ].map((f) => (
              <details key={f.q} className="rounded-xl bg-white p-4 ring-1 ring-slate-200 open:shadow-sm">
                <summary className="cursor-pointer select-none font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Contact us</h2>
            <p className="mt-2 text-slate-600">Prefer WhatsApp? Message +44 0000 000000.</p>
            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <div>📍 London, United Kingdom</div>
              <div>✉️ support@uniwriter.co.uk</div>
              <div>🕒 24/7 live chat</div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Send a message</h3>

            {/* SEND MESSAGE → Formspree: mrbazdqj */}
            <form
              action="https://formspree.io/f/mrbazdqj"
              method="POST"
              className="mt-4 grid gap-3"
            >
              <input name="name" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Full name"/>
              <input name="email" required type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Email address"/>
              <input name="subject" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Subject"/>
              <textarea name="message" rows={5} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="How can we help?"/>
              <input type="hidden" name="_subject" value="New Contact Message" />
              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-indigo-600/10 ring-1 ring-indigo-600/30 flex items-center justify-center font-semibold text-indigo-700">UK</div>
              <span className="font-semibold">UniWriter</span>
            </div>
            <p className="mt-3 text-slate-600">Model answers and academic support for UK students. Use responsibly.</p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Get started</div>
            <p className="mt-3 text-slate-600">Send your brief and deadline to receive a tailored quote.</p>
            <button onClick={()=>setOrderOpen(true)} className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700">Order Now</button>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Uniwriter Ltd. All rights reserved.</div>
      </footer>

      {/* Order modal */}
      {orderOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">Place an Order</h3>
              <button onClick={()=>setOrderOpen(false)} aria-label="Close" className="h-8 w-8 rounded-md border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 mx-auto my-2"><path d="M6 6l12 12M18 6l-12 12"/></svg>
              </button>
            </div>
            <p className="mt-1 text-sm text-slate-600">Fill in the details below and we’ll confirm your quote by email.</p>

            {/* ORDER NOW → Formspree: mwpnezoa */}
            <form
              action="https://formspree.io/f/mwpnezoa"
              method="POST"
              className="mt-4 grid gap-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="name" required className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Full name"/>
                <input name="email" required type="email" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Email"/>
              </div>
              <input name="whatsapp" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="WhatsApp (optional)"/>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select name="service" className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
                  <option>Essay</option>
                  <option>Report</option>
                  <option>Case Study</option>
                  <option>Dissertation</option>
                  <option>Other</option>
                </select>
                <select name="level" className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
                  <option>Undergraduate</option>
                  <option>Masters</option>
                  <option>PhD</option>
                  <option>College</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="wordcount" type="number" min={1} className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Word count"/>
                <input name="deadline" type="date" className="rounded-lg border border-slate-300 px-3 py-2 text-sm"/>
              </div>
              <textarea name="brief" rows={5} className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Describe your brief, marking rubric, and references needed..."/>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <input id="agree" name="agree" type="checkbox" className="h-4 w-4"/>
                <label htmlFor="agree">I agree to the Terms, Privacy Policy, and academic integrity guidelines.</label>
              </div>
              <input type="hidden" name="_subject" value="New Order Request" />
              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700">Submit Order</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
