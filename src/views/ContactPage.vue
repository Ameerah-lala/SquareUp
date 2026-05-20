<template>
  <div class="container-fluid px-0">
    <TheNavbar />

    <!-- Hero -->
    <section class="contact-hero text-center">
      <h1 class="contact-h1" data-aos="fade-up">Contact Us</h1>
      <p class="contact-sub" data-aos="fade-up" data-aos-delay="100">Get in touch with us today and let us help you with any questions or inquiries you may have.</p>
    </section>

    <!-- Contact Bar -->
    <section class="contact-bar">
      <div class="contact-bar-inner">
        <!-- Email -->
        <a href="mailto:hello@squareup.com" class="cbar-item" data-aos="fade-up" data-aos-delay="0">
          <span class="cbar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </span>
          <span class="cbar-text">hello@squareup.com</span>
        </a>

        <div class="cbar-divider"></div>

        <!-- Phone -->
        <a href="tel:+919181323230" class="cbar-item" data-aos="fade-up" data-aos-delay="80">
          <span class="cbar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
            </svg>
          </span>
          <span class="cbar-text">+91 91813 23 2309</span>
        </a>

        <div class="cbar-divider"></div>

        <!-- Location -->
        <a href="#" class="cbar-item" data-aos="fade-up" data-aos-delay="160">
          <span class="cbar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </span>
          <span class="cbar-text">Get Location</span>
        </a>
      </div>
    </section>

    <!-- Form -->
    <section class="contact-form-section">
      <ContactForm />
    </section>

    <!-- Info Bar -->
    <section class="info-bar">
      <div class="info-bar-inner">
        <!-- Operating Days -->
        <div class="ibar-group">
          <span class="ibar-label">Operating Days</span>
          <span class="ibar-value">Monday to Friday</span>
        </div>

        <div class="ibar-sep"></div>

        <!-- Stay Connected -->
        <div class="ibar-group">
          <span class="ibar-label">Stay Connected</span>
          <div class="ibar-socials">
            <a href="#" aria-label="Facebook" class="ibar-social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="X / Twitter" class="ibar-social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" class="ibar-social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <!-- FAQ Hero Header -->
      <div class="faq-hero">
        <h2 class="faq-h2" data-aos="fade-up">Frequently Asked Questions</h2>
        <p class="faq-p" data-aos="fade-up" data-aos-delay="100">Still you have any questions? Contact our Team via hello@squareup.com</p>
      </div>

      <!-- Dashed divider -->
      <div class="faq-divider"></div>

      <!-- Two-column grid -->
      <div class="faq-grid">
        <!-- Left column: items 1–4 -->
        <div class="faq-col">
          <div
            v-for="(item, i) in faqs.slice(0, 4)"
            :key="i"
            class="faq-item"
            :class="{ open: openFaq === i }"
            @click="openFaq = openFaq === i ? null : i"
          >
            <div class="faq-question">
              <span class="faq-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="faq-q-text" :class="{ 'faq-q-active': openFaq === i }">{{ item.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '✕' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="openFaq === i">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>

        <!-- Right column: items 5–8 -->
        <div class="faq-col">
          <div
            v-for="(item, i) in faqs.slice(4)"
            :key="i + 4"
            class="faq-item"
            :class="{ open: openFaq === i + 4 }"
            @click="openFaq = openFaq === i + 4 ? null : i + 4"
          >
            <div class="faq-question">
              <span class="faq-num">{{ String(i + 5).padStart(2, '0') }}</span>
              <span class="faq-q-text" :class="{ 'faq-q-active': openFaq === i + 4 }">{{ item.q }}</span>
              <span class="faq-toggle">{{ openFaq === i + 4 ? '✕' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="openFaq === i + 4">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="contact-cta-banner">
      <div class="cta-top" data-aos="fade-up">
        <img :src="`${base}images/section6logo.png`" alt="SquareUp" class="cta-logo" />
        <div class="cta-text">
          <h3 class="cta-h3">Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h3>
          <p class="cta-p">Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
        </div>
      </div>
      <div class="cta-bottom" data-aos="fade-up" data-aos-delay="100">
        <span class="cta-label">Welcome to SquareUp</span>
        <span class="cta-tagline">Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</span>
        <button class="cta-start-btn">Start Project</button>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheNavbar   from '../components/TheNavbar.vue'
import TheFooter   from '../components/TheFooter.vue'
import ContactForm from '../components/ContactForm.vue'

const base = import.meta.env.BASE_URL
const openFaq = ref(null)

const faqs = [
  {
    q: 'What services does SquareUp provide?',
    a: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    q: 'How can SquareUp help my business?',
    a: "We partner with businesses to build digital products that solve real problems. Whether you need a new website, a mobile app, or a full product overhaul, we bring strategy, design, and engineering together to deliver results.",
  },
  {
    q: 'What industries does SquareUp work with?',
    a: "We work across a wide range of industries including fintech, healthcare, e-commerce, SaaS, education, and more. Our process adapts to the unique needs and constraints of each sector.",
  },
  {
    q: 'How long does it take to complete a project with SquareUp?',
    a: "Timelines depend on the scope and complexity of the project. A typical engagement ranges from 6 to 16 weeks. We provide a detailed project plan with milestones during the discovery phase.",
  },
  {
    q: 'Do you offer ongoing support and maintenance after the project is completed?',
    a: "Yes. We offer post-launch support and maintenance packages to keep your product healthy, secure, and up to date. Our team is available for bug fixes, performance improvements, and feature additions.",
  },
  {
    q: 'Can you work with existing design or development frameworks?',
    a: "Absolutely. We can integrate into your existing tech stack and design system. Our team is experienced with a wide range of frameworks and tools and can adapt to what you already have in place.",
  },
  {
    q: 'How involved will I be in the project development process?',
    a: "Very involved, if you want to be. We run regular check-ins, share progress updates, and invite feedback at every stage. You have full visibility into the process from kickoff to launch.",
  },
  {
    q: 'Can you help with website or app maintenance and updates?',
    a: "Yes. Beyond the initial build, we offer ongoing maintenance plans that cover content updates, performance monitoring, security patches, and iterative feature development.",
  },
]
</script>

<style scoped>
/* ── Hero ── */
.contact-hero {
  background-color: #0a0f0b;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(60px, 8vw, 120px) clamp(16px, 6vw, 80px);
  border: 1px solid rgba(46, 46, 46, 1);
  position: relative;
  overflow: hidden;
}
.contact-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 120% 60% at 50% 110%, rgba(30, 80, 20, 0.95) 0%, transparent 60%),
    radial-gradient(ellipse 80% 50% at 30% 120%, rgba(20, 60, 15, 0.8) 0%, transparent 55%),
    radial-gradient(ellipse 80% 50% at 70% 115%, rgba(20, 60, 15, 0.8) 0%, transparent 55%),
    radial-gradient(ellipse 60% 40% at 50% 100%, rgba(10, 40, 10, 0.9) 0%, transparent 50%);
  pointer-events: none;
}
.contact-hero > * { position: relative; z-index: 1; }
.contact-h1  {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: #fff;
  margin: 0 0 14px;
  letter-spacing: -0.5px;
}
.contact-sub {
  font-size: clamp(13px, 1.4vw, 16px);
  font-weight: 400;
  color: rgba(200, 200, 200, 0.85);
  margin: 0;
  max-width: 520px;
}

/* ── Contact Bar ── */
.contact-bar {
  background-color: #0d1210;
  border: 1px solid rgba(46, 46, 46, 1);
  border-top: none;
  padding: clamp(20px, 3vw, 32px) clamp(16px, 6vw, 80px);
  display: flex;
  justify-content: center;
}

.contact-bar-inner {
  display: flex;
  align-items: center;
  gap: 0;
  flex-wrap: wrap;
  justify-content: center;
}

.cbar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  border: 1px solid rgba(55, 55, 55, 1);
  border-radius: 8px;
  background-color: rgba(22, 26, 22, 1);
  text-decoration: none;
  transition: background-color 0.2s, border-color 0.2s;
}
.cbar-item:hover {
  background-color: rgba(32, 38, 32, 1);
  border-color: rgba(80, 80, 80, 1);
}

.cbar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(158, 255, 0, 1);
  flex-shrink: 0;
}

.cbar-text {
  font-size: clamp(13px, 1.3vw, 15px);
  font-weight: 400;
  color: rgba(210, 210, 210, 1);
  white-space: nowrap;
}

.cbar-divider {
  width: clamp(24px, 4vw, 60px);
}

/* ── Form Section ── */
.contact-form-section {
  background-color: rgba(38, 38, 38, 1);
  border: 1px solid rgba(46, 46, 46, 1);
  border-top: none;
}

.contact-form-section :deep(.cf-wrap) {
  border: none;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .contact-bar { padding: 20px 16px; }
  .contact-bar-inner { gap: 12px; }
  .cbar-divider { display: none; }
  .cbar-item { padding: 10px 18px; }
}

@media (max-width: 480px) {
  .contact-bar-inner { flex-direction: column; width: 100%; }
  .cbar-item { width: 100%; justify-content: center; }
}

/* ── Info Bar ── */
.info-bar {
  background-color: #0a0f0b;
  border: 1px solid rgba(46, 46, 46, 1);
  border-top: none;
  padding: clamp(18px, 2.5vw, 28px) clamp(16px, 8vw, 160px);
}

.info-bar-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(32px, 6vw, 100px);
  flex-wrap: wrap;
}

.ibar-group {
  display: flex;
  align-items: center;
  gap: 16px;
}

.ibar-label {
  font-size: clamp(13px, 1.3vw, 15px);
  font-weight: 400;
  color: rgba(160, 160, 160, 1);
  white-space: nowrap;
}

.ibar-value {
  font-size: clamp(13px, 1.3vw, 15px);
  font-weight: 500;
  color: rgba(220, 220, 220, 1);
  background-color: rgba(30, 34, 30, 1);
  border: 1px solid rgba(55, 55, 55, 1);
  padding: 6px 16px;
  border-radius: 6px;
  white-space: nowrap;
}

.ibar-sep {
  width: 1px;
  height: 28px;
  background-color: rgba(55, 55, 55, 1);
}

.ibar-socials {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ibar-social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background-color: rgba(158, 255, 0, 1);
  color: #0a0f0b;
  text-decoration: none;
  transition: opacity 0.2s;
}
.ibar-social:hover { opacity: 0.85; }

/* ── FAQ ── */
.faq-section {
  background-color: #0a0f0b;
  overflow: hidden;
}

/* FAQ hero header — same wave bg as contact hero */
.faq-hero {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: clamp(40px, 6vw, 80px) clamp(16px, 6vw, 80px) clamp(30px, 4vw, 50px);
  background-color: #0a0f0b;
}
.faq-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 120% 60% at 50% 110%, rgba(30, 80, 20, 0.95) 0%, transparent 60%),
    radial-gradient(ellipse 80% 50% at 30% 120%, rgba(20, 60, 15, 0.8) 0%, transparent 55%),
    radial-gradient(ellipse 80% 50% at 70% 115%, rgba(20, 60, 15, 0.8) 0%, transparent 55%);
  pointer-events: none;
}
.faq-hero > * { position: relative; z-index: 1; }

.faq-h2 {
  font-size: clamp(24px, 3.5vw, 42px);
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px;
}
.faq-p {
  font-size: clamp(12px, 1.3vw, 15px);
  color: rgba(180, 180, 180, 1);
  margin: 0;
}

/* Dashed divider */
.faq-divider {
  border: none;
  border-top: 1px solid rgba(46, 46, 46, 1);
  margin: 0;
}

/* Two-column grid */
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #0d1210;
  padding: clamp(24px, 4vw, 50px) clamp(16px, 4vw, 50px);
  gap: 0 clamp(16px, 3vw, 40px);
}

.faq-col {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border-bottom: 1px solid rgba(46, 46, 46, 1);
  cursor: pointer;
  padding: clamp(16px, 2vw, 22px) 0;
  transition: background-color 0.2s;
}
.faq-item:last-child { border-bottom: none; }

.faq-question {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  user-select: none;
}

.faq-num {
  font-size: clamp(13px, 1.3vw, 15px);
  font-weight: 600;
  color: rgba(158, 255, 0, 1);
  background-color: rgba(30, 36, 30, 1);
  border: 1px solid rgba(55, 65, 55, 1);
  padding: 4px 10px;
  border-radius: 6px;
  flex-shrink: 0;
  line-height: 1.6;
  min-width: 38px;
  text-align: center;
}

.faq-q-text {
  font-size: clamp(13px, 1.3vw, 15px);
  font-weight: 400;
  color: rgba(210, 210, 210, 1);
  flex: 1;
  line-height: 1.5;
  padding-top: 4px;
  transition: color 0.2s;
}
.faq-q-active { color: rgba(158, 255, 0, 1); }

.faq-toggle {
  font-size: 18px;
  font-weight: 300;
  color: rgba(160, 160, 160, 1);
  flex-shrink: 0;
  line-height: 1.6;
  padding-top: 2px;
  transition: color 0.2s;
}
.faq-item.open .faq-toggle { color: rgba(158, 255, 0, 1); }

.faq-answer {
  padding: 12px 0 4px calc(38px + 14px);
}
.faq-answer p {
  font-size: clamp(12px, 1.2vw, 14px);
  color: rgba(170, 170, 170, 1);
  line-height: 1.7;
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .info-bar { padding: 18px 16px; }
  .ibar-sep { display: none; }
  .faq-section { margin: 0; }
  .faq-grid { grid-template-columns: 1fr; padding: 20px 16px; }
}

@media (max-width: 480px) {
  .info-bar-inner { flex-direction: column; gap: 16px; }
  .faq-section { margin: 0; }
}

/* ── CTA Banner ── */
.contact-cta-banner {
  background-color: rgba(38,38,38,1);
  border: 1px solid rgba(46,46,46,1);
  padding: clamp(24px,4vw,48px) clamp(20px,4vw,60px);
}
.contact-cta-banner .cta-top {
  display: flex;
  align-items: center;
  gap: clamp(20px,3vw,40px);
  padding-bottom: clamp(12px,2vw,20px);
}
.contact-cta-banner .cta-logo { width: 80px; height: 80px; object-fit: contain; border-radius: 16px; flex-shrink: 0; }
.contact-cta-banner .cta-text { display: flex; flex-direction: column; gap: 10px; }
.contact-cta-banner .cta-h3   { font-size: clamp(15px,1.6vw,20px); font-weight: 600; color: rgba(152,152,154,1); margin: 0; line-height: 1.4; }
.contact-cta-banner .cta-p    { font-size: clamp(12px,1.2vw,14px); font-weight: 400; color: rgba(152,152,154,1); margin: 0; line-height: 1.6; }
.contact-cta-banner .cta-bottom {
  display: flex; align-items: center;
  gap: clamp(12px,2vw,24px); flex-wrap: wrap;
  border: 1px solid rgba(46,46,46,1);
  margin-top: clamp(12px,2vw,20px);
  padding: clamp(14px,2vw,22px) clamp(20px,3vw,40px);
}
.contact-cta-banner .cta-label {
  font-size: clamp(12px,1.1vw,14px); font-weight: 400; color: rgba(152,152,154,1);
  white-space: nowrap; flex-shrink: 0;
}
.contact-cta-banner .cta-tagline {
  font-size: clamp(12px,1.2vw,14px); font-weight: 500; color: #fff;
  background-color: rgba(46,46,46,1); border-radius: 8px;
  padding: 10px 14px; display: inline-block; line-height: 1.5; flex: 1;
}
.cta-start-btn {
  background-color: rgba(158,255,0,1); border: none; border-radius: 8px;
  font-size: clamp(13px,1.3vw,15px); font-weight: 600;
  padding: 12px 24px;
  cursor: pointer; color: #000; white-space: nowrap; flex-shrink: 0;
  transition: opacity 0.2s;
}
.cta-start-btn:hover { opacity: 0.85; }

@media (max-width: 768px) {
  .contact-cta-banner .cta-top    { flex-direction: column; align-items: center; text-align: center; gap: 16px; padding-bottom: 24px; }
  .contact-cta-banner .cta-bottom { flex-direction: column; align-items: center; text-align: center; margin-top: 24px; gap: 12px; }
  .contact-cta-banner .cta-tagline{ width: 100%; text-align: center; font-size: 13px; white-space: normal; }
  .cta-start-btn { width: 100%; text-align: center; }
}
</style>
