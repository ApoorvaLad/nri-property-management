"use client";

import { useEffect } from "react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=RENTSUREANDCO+reviews";

const TICKER_ITEMS = [
  "Property Management",
  "Tenant Search",
  "Property Inspection",
  "Renovation & Restoration",
  "Property Sale",
  "RENTSUREANDCO · Pune",
];

const SERVICES = [
  {
    number: "01",
    title: "Property Management",
    tagline: "The day-to-day, handled completely.",
    description:
      "Rent collection, tenant coordination, maintenance, society liaison, monthly owner reports. You will always know what is happening.",
    includes: [
      "Rent collection and payment updates",
      "Tenant communication",
      "Maintenance coordination",
      "Monthly owner reports",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Tenant Search",
    tagline: "The right tenant changes everything.",
    description:
      "We list, screen, verify, and onboard. You get a shortlist of vetted candidates and make the final decision.",
    includes: [
      "Property listing",
      "Lead handling and screening",
      "Background verification",
      "Agreement and onboarding",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Property Inspection",
    tagline: "Know the condition without visiting.",
    description:
      "Scheduled inspections with photo-backed reports. We flag and resolve issues before they become expensive problems.",
    includes: [
      "Scheduled inspections",
      "Interior and utility checks",
      "Photo reports",
      "Action recommendations",
    ],
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Renovation & Restoration",
    tagline: "Better upkeep, better rent.",
    description:
      "From planning and vendor coordination to execution and quality checks, we manage renovations end-to-end.",
    includes: [
      "Renovation planning",
      "Vendor management",
      "Execution quality checks",
      "Final handover",
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Property Sale",
    tagline: "Best value, least friction.",
    description:
      "Valuation guidance, listing, buyer coordination, negotiation support, and documentation assistance.",
    includes: [
      "Property evaluation",
      "Listing and buyer marketing",
      "Buyer coordination",
      "Documentation support",
    ],
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="propr-home">
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="hero-eyebrow">Property Management · Pune</div>
          <div className="hero-center">
            <h1 className="hero-h1">
              For property owners
              <br />
              who have
              <br />
              <em>better things to do.</em>
            </h1>
            <p className="hero-sub">
              The only thing standing between you and your rental income is the headache.
              <br />
              <strong>We take the headache. You take the rent.</strong>
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn-primary">
                Book a Consultation
              </a>
              <a href="/services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">10+</div>
              <div className="hero-stat-label">
                Years managing
                <br />
                properties
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">5</div>
              <div className="hero-stat-label">
                Core services
                <br />
                end to end
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">0</div>
              <div className="hero-stat-label">
                Calls you need
                <br />
                to make yourself
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85&auto=format&fit=crop"
            alt="Property"
          />
          <div className="hero-right-overlay" />
          <div className="hero-right-tag">
            <span>Pune · Maharashtra</span>
          </div>
          <div className="hero-right-caption">
            <p>Professional property management — wherever you are</p>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span key={`${item}-${idx}`} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="problem section" id="problem">
        <div className="problem-inner">
          <div className="reveal">
            <div className="section-label">The Real Problem</div>
            <h2 className="section-h">
              Your property
              <br />
              is ready to earn.
              <br />
              <em>You have stopped letting it.</em>
            </h2>
            <div className="problem-body">
              <p>
                Pune has thousands of properties sitting vacant right now. Not because
                owners do not want income, but because everything around it is difficult.
              </p>
              <p>
                Tenant hunt, maintenance calls, delayed rent, broker follow-ups and constant
                coordination. Most owners eventually stop because it feels exhausting.
              </p>
              <p>
                At some point, owners decide it is <strong>not worth the trouble.</strong>
              </p>
            </div>
          </div>
          <div className="problem-right reveal d2">
            <div className="problem-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85&auto=format&fit=crop"
                alt="Vacant property"
              />
            </div>
            <div className="problem-pull">
              <p>
                Most investment properties miss their yield not from lack of value, but from
                excess friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution section" id="solution">
        <div className="solution-inner">
          <div className="section-label reveal">What We Do</div>
          <div className="solution-grid">
            <div className="reveal">
              <h2 className="section-h">
                We run your
                <br />
                property like
                <br />a <em>business.</em>
              </h2>
              <div className="solution-body">
                <p>
                  RENTSUREANDCO takes complete operational ownership of your
                  property — from finding the right tenant to collecting rent and handling
                  maintenance.
                </p>
                <p>
                  We come from <strong>operations, not brokerage.</strong> Your property gets
                  consistent systems and visibility, not one-time transaction support.
                </p>
              </div>
            </div>
            <div className="solution-stats reveal d2">
              <div className="stat-cell">
                <div className="stat-n">
                  10<span>+</span>
                </div>
                <div className="stat-l">Years managing properties hands-on</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">
                  100<span>%</span>
                </div>
                <div className="stat-l">Operational transparency</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">5</div>
                <div className="stat-l">Core services across full lifecycle</div>
              </div>
              <div className="stat-cell">
                <div className="stat-n">0</div>
                <div className="stat-l">Calls you need to make yourself</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="services-inner">
          <div className="services-hdr reveal">
            <div>
              <div className="section-label">What We Offer</div>
              <h2 className="section-h">
                Full lifecycle
                <br />
                coverage.
              </h2>
            </div>
            <p className="services-hdr-sub">
              Everything your property needs. Nothing you have to manage yourself.
            </p>
          </div>
          <div className="svc-list reveal">
            {SERVICES.map((service) => (
              <div className="svc-item" key={service.title}>
                <div className="svc-num">{service.number}</div>
                <div className="svc-main">
                  <h3>{service.title}</h3>
                  <p className="svc-tagline">{service.tagline}</p>
                  <p className="svc-desc">{service.description}</p>
                </div>
                <div className="svc-includes">
                  <ul>
                    {service.includes.map((include) => (
                      <li key={include}>{include}</li>
                    ))}
                  </ul>
                </div>
                <div className="svc-img">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-inner">
          <div className="reveal">
            <div className="section-label">About Us</div>
            <h2 className="section-h">
              Built on
              <br />
              <em>operations,</em>
              <br />
              not brokerage.
            </h2>
            <div className="about-body">
              <p>
                Property ownership gets harder when you are not physically present. We built
                this service to make ownership smooth, visible, and professional.
              </p>
              <p>
                <strong>Founded by Aniket Lad.</strong> We bring operations-first discipline,
                clear communication, and structured execution to property management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section" id="testimonials">
        <div className="testimonials-inner">
          <div className="section-label reveal">What Clients Say</div>
          <h2 className="section-h reveal">
            Owners who
            <br />
            stopped <em>worrying.</em>
          </h2>
          <div className="testi-grid reveal">
            <div className="testi-card">
              <span className="testi-open-quote">"</span>
              <p className="testi-text">
                The property was tenanted quickly and monthly updates are always clear. We
                finally have peace of mind.
              </p>
              <div className="testi-author">Property Owner · Dubai</div>
            </div>
            <div className="testi-card">
              <span className="testi-open-quote">"</span>
              <p className="testi-text">
                Tenant onboarding, paperwork and communication were handled end-to-end. The
                process felt professional.
              </p>
              <div className="testi-author">Property Owner · Singapore</div>
            </div>
            <div className="testi-card">
              <span className="testi-open-quote">"</span>
              <p className="testi-text">
                A major maintenance issue was resolved fast with photos and detailed updates.
                The follow-through is excellent.
              </p>
              <div className="testi-author">Property Owner · United Kingdom</div>
            </div>
          </div>
          <div className="google-bar reveal">
            <div className="google-bar-left">
              <h4>Rated by happy clients on Google</h4>
              <p>Check public reviews before you decide</p>
            </div>
            <a href={GOOGLE_REVIEWS_URL} className="btn-ghost" target="_blank" rel="noreferrer">
              View Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="how section" id="how">
        <div className="how-inner">
          <div className="how-header reveal">
            <div className="section-label">Process</div>
            <h2 className="section-h">
              Getting started
              <br />
              takes one
              <br />
              <em>conversation.</em>
            </h2>
          </div>
          <div className="steps reveal">
            <div className="step">
              <div className="step-n">01</div>
              <h3>Tell us about your property</h3>
              <p>Share details and goals. We will guide the most practical next steps.</p>
            </div>
            <div className="step">
              <div className="step-n">02</div>
              <h3>We assess and advise</h3>
              <p>We evaluate earning potential, readiness, and recommended action plan.</p>
            </div>
            <div className="step">
              <div className="step-n">03</div>
              <h3>We take over operations</h3>
              <p>Tenant, maintenance, and coordination work shifts to our team.</p>
            </div>
            <div className="step">
              <div className="step-n">04</div>
              <h3>You stay informed</h3>
              <p>You receive clear updates and income visibility without daily effort.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="reveal">
          <h2>
            Ready to put your
            <br />
            property to <em>work?</em>
          </h2>
          <p>Tell us about your property. We will tell you what it should be earning.</p>
        </div>
        <a href="/contact" className="btn-white reveal d2">
          Start the conversation →
        </a>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-inner">
          <div className="reveal">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-h">
              Let us talk
              <br />
              about your
              <br />
              <em>property.</em>
            </h2>
            <p className="contact-left-sub">
              Share your details and requirements. Our team will reach out shortly.
            </p>
            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-row-label">Email</span>
                <span className="contact-row-val">
                  <a href="mailto:enquire@rentsureandco.com" className="text-black underline-offset-2 hover:underline">
                    enquire@rentsureandco.com
                  </a>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-row-label">Phone</span>
                <span className="contact-row-val">
                  <a href="tel:+919730086390" className="text-black underline-offset-2 hover:underline">
                    +91 97300 86390
                  </a>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-row-label">Location</span>
                <span className="contact-row-val">Pune, Maharashtra</span>
              </div>
            </div>
          </div>
          <div className="contact-form-box reveal d2">
            <h3>Send an enquiry</h3>
            <a href="/contact" className="btn-primary">
              Open enquiry form
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">
              RENTSURE<span>ANDCO</span>
            </span>
            <p>
              Professional property management for owners who want visibility and peace of
              mind.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/services">Property Management</a>
              </li>
              <li>
                <a href="/services">Tenant Search</a>
              </li>
              <li>
                <a href="/services">Property Inspection</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/blogs">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .propr-home {
          --white: #f9f9f7;
          --paper: #f2f1ef;
          --border: #e0ded9;
          --mid: #999894;
          --dark: #4a4945;
          --ink: #111110;
          --red: #d03030;
          --red-dim: #a82424;
          background: var(--white);
          color: var(--ink);
        }
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 91vh;
          border-bottom: 1px solid var(--border);
        }
        .hero-left {
          padding: 72px 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid var(--border);
        }
        .hero-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--red);
        }
        .hero-center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px 0;
        }
        .hero-h1 {
          font-size: clamp(48px, 5.5vw, 78px);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -0.035em;
          margin-bottom: 28px;
        }
        .hero-h1 em {
          font-style: italic;
          font-weight: 300;
          color: var(--red);
        }
        .hero-sub {
          font-size: 16px;
          color: var(--dark);
          line-height: 1.75;
          max-width: 420px;
          margin-bottom: 44px;
        }
        .hero-sub strong {
          color: var(--ink);
          font-weight: 600;
        }
        .hero-actions {
          display: flex;
        }
        .btn-primary,
        .btn-secondary,
        .btn-white,
        .btn-ghost {
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary {
          background: var(--ink);
          color: var(--white);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 15px 32px;
          border: 2px solid var(--ink);
        }
        .btn-primary:hover {
          background: var(--red);
          border-color: var(--red);
        }
        .btn-secondary {
          background: transparent;
          color: var(--ink);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 15px 32px;
          border: 2px solid var(--border);
          border-left: none;
        }
        .hero-stats {
          display: flex;
          gap: 48px;
          padding-top: 40px;
          border-top: 1px solid var(--border);
        }
        .hero-stat-num {
          font-size: 32px;
          font-weight: 700;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 11px;
          color: var(--mid);
        }
        .hero-right {
          position: relative;
          overflow: hidden;
          background: var(--ink);
        }
        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.5);
        }
        .hero-right-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(17, 17, 16, 0.7) 100%);
        }
        .hero-right-tag {
          position: absolute;
          top: 32px;
          right: 32px;
          background: var(--red);
          padding: 8px 16px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
        }
        .hero-right-caption {
          position: absolute;
          bottom: 32px;
          left: 32px;
          right: 32px;
        }
        .hero-right-caption p {
          font-size: 11px;
          letter-spacing: 0.06em;
          color: rgba(249, 249, 247, 0.55);
          text-transform: uppercase;
        }
        .ticker {
          background: var(--red);
          padding: 12px 0;
          overflow: hidden;
        }
        .ticker-track {
          display: flex;
          white-space: nowrap;
          animation: ticker 24s linear infinite;
        }
        .ticker-item {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          padding: 0 40px;
          flex-shrink: 0;
        }
        .ticker-item::after {
          content: "—";
          margin-left: 40px;
          opacity: 0.4;
        }
        .section {
          padding: 112px 60px;
        }
        .section-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 20px;
        }
        .section-h {
          font-size: clamp(36px, 4vw, 58px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--ink);
        }
        .section-h em {
          font-style: italic;
          font-weight: 300;
        }
        .problem {
          background: var(--ink);
          border-top: 4px solid var(--red);
        }
        .problem-inner,
        .solution-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
        }
        .problem .section-h,
        .testimonials .section-h {
          color: #f0efed;
        }
        .problem-body,
        .solution-body {
          margin-top: 36px;
          font-size: 15px;
          line-height: 1.85;
        }
        .problem-body {
          color: #75756f;
        }
        .problem-img-wrap {
          aspect-ratio: 4 / 5;
          overflow: hidden;
        }
        .problem-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.5);
        }
        .problem-pull {
          background: var(--red);
          padding: 28px 32px;
        }
        .problem-pull p {
          color: rgba(255, 255, 255, 0.9);
          font-style: italic;
        }
        .solution {
          background: var(--paper);
        }
        .solution-inner,
        .services-inner,
        .testimonials-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .solution-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: var(--border);
        }
        .stat-cell {
          background: var(--white);
          padding: 36px 32px;
        }
        .stat-n {
          font-size: 52px;
          font-weight: 700;
          letter-spacing: -0.04em;
        }
        .stat-n span {
          color: var(--red);
        }
        .services {
          background: var(--white);
        }
        .services-hdr {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 72px;
        }
        .svc-item {
          display: grid;
          grid-template-columns: 56px 1fr 260px 220px;
          border-top: 1px solid var(--border);
          padding: 40px 0;
        }
        .svc-item:last-child {
          border-bottom: 1px solid var(--border);
        }
        .svc-num {
          font-size: 11px;
          color: var(--red);
          padding-top: 4px;
        }
        .svc-main h3 {
          font-size: 24px;
          margin-bottom: 6px;
        }
        .svc-tagline {
          font-size: 14px;
          font-style: italic;
          color: var(--mid);
          margin-bottom: 14px;
        }
        .svc-desc {
          font-size: 13px;
          color: var(--dark);
          line-height: 1.75;
        }
        .svc-includes ul {
          list-style: none;
        }
        .svc-includes li {
          font-size: 12px;
          color: var(--mid);
          padding: 7px 0;
          border-bottom: 1px solid var(--border);
        }
        .svc-includes li::before {
          content: "→";
          color: var(--red);
          margin-right: 8px;
        }
        .svc-img {
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .svc-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.8);
        }
        .testimonials {
          background: var(--ink);
          border-top: 4px solid var(--red);
        }
        .about {
          background: var(--paper);
        }
        .about-inner,
        .how-inner,
        .contact-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-inner {
          max-width: 720px;
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
        }
        .about-body {
          margin-top: 32px;
          line-height: 1.85;
          color: var(--dark);
        }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: #1e1e1c;
          margin-bottom: 2px;
        }
        .testi-card {
          background: var(--ink);
          padding: 44px 36px;
        }
        .testi-open-quote {
          font-size: 56px;
          color: var(--red);
          opacity: 0.6;
        }
        .testi-text {
          font-size: 15px;
          color: #77756f;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .testi-author {
          font-size: 11px;
          color: var(--red);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .google-bar {
          background: #0d0d0c;
          padding: 24px 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .btn-ghost {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--red);
          border: 1px solid #2a2a28;
          padding: 11px 24px;
        }
        .cta-band {
          background: var(--red);
          padding: 88px 60px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 60px;
          align-items: center;
        }
        .cta-band h2 {
          font-size: clamp(32px, 4vw, 56px);
          color: #fff;
          line-height: 1.1;
        }
        .cta-band h2 em {
          color: rgba(255, 255, 255, 0.65);
          font-style: italic;
          font-weight: 300;
        }
        .cta-band p {
          color: rgba(255, 255, 255, 0.75);
          margin-top: 14px;
        }
        .how {
          background: var(--white);
        }
        .how-header {
          max-width: 540px;
          margin-bottom: 80px;
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 2px solid var(--ink);
        }
        .step {
          padding: 40px 40px 40px 0;
          border-right: 1px solid var(--border);
        }
        .step:last-child {
          border-right: none;
        }
        .step-n {
          font-size: 64px;
          font-weight: 700;
          color: var(--border);
          margin-bottom: 20px;
        }
        .step h3 {
          margin-bottom: 8px;
        }
        .step p {
          font-size: 13px;
          color: var(--dark);
          line-height: 1.75;
        }
        .contact {
          background: var(--paper);
        }
        .contact-left-sub {
          margin-top: 20px;
          margin-bottom: 56px;
          color: var(--dark);
        }
        .contact-details {
          border-top: 2px solid var(--ink);
        }
        .contact-row {
          display: grid;
          grid-template-columns: 160px 1fr;
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
        }
        .contact-row-label {
          font-size: 10px;
          color: var(--mid);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .contact-row-val {
          font-size: 14px;
        }
        .contact-form-box {
          background: var(--white);
          padding: 52px;
          border-top: 4px solid var(--red);
          height: fit-content;
        }
        .contact-form-box h3 {
          font-size: 26px;
          margin-bottom: 28px;
        }
        .footer {
          background: var(--ink);
          padding: 72px 60px;
        }
        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 56px;
        }
        .footer-logo {
          font-size: 22px;
          font-weight: 700;
          color: #f0efed;
          margin-bottom: 14px;
          display: block;
        }
        .footer-logo span,
        .footer-col h4 {
          color: var(--red);
        }
        .footer-brand p,
        .footer-col a {
          color: #6c6b67;
        }
        .footer-col h4 {
          margin-bottom: 14px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }
        .footer-col ul {
          list-style: none;
        }
        .footer-col li {
          margin-bottom: 10px;
        }
        .footer-col a {
          text-decoration: none;
        }
        .btn-white {
          background: #fff;
          color: var(--red);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 16px 36px;
        }
        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .d2 {
          transition-delay: 0.2s;
        }
        @keyframes ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 960px) {
          .section,
          .cta-band {
            padding-left: 24px;
            padding-right: 24px;
          }
          .hero {
            grid-template-columns: 1fr;
          }
          .hero-left {
            padding: 56px 24px;
          }
          .hero-right {
            height: 380px;
          }
          .problem-inner,
          .solution-grid,
          .services-hdr,
          .about-inner,
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .svc-item {
            grid-template-columns: 48px 1fr;
          }
          .svc-includes,
          .svc-img {
            display: none;
          }
          .testi-grid {
            grid-template-columns: 1fr;
          }
          .steps {
            grid-template-columns: 1fr 1fr;
          }
          .cta-band {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .google-bar {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .footer {
            padding-left: 24px;
            padding-right: 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
