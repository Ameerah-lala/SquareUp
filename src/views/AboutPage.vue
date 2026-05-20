<template>
  <div class="container-fluid px-0">
    <TheNavbar />

    <!-- Hero -->
    <section class="about-hero">
      <h1 class="about-h1" data-aos="fade-up">About Us</h1>
      <p class="about-p" data-aos="fade-up" data-aos-delay="100">Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.</p>
    </section>

    <!-- Intro -->
    <div class="row g-0 about-intro">
      <div class="col-md-6 intro-left" data-aos="fade-up">
        <h2 class="intro-h2">About SquareUp</h2>
        <p class="intro-p">SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
      </div>
      <div class="col-md-6 intro-right" data-aos="fade-up" data-aos-delay="100">
        <div class="intro-visual">
          <img :src="`${base}images/section6logo.png`" alt="SquareUp" class="intro-logo" />
        </div>
      </div>
    </div>

    <!-- Our Story -->
    <section class="story-section">
      <div class="story-header" data-aos="fade-up">
        <h3 class="story-h3">Our Story</h3>
      </div>
      <div class="row g-0">
        <div v-for="(chapter, i) in story" :key="chapter.title" class="col-md-6 story-card" data-aos="fade-up" :data-aos-delay="(i % 2) * 100">
          <div class="d-flex align-items-center mb-3 story-card-header">
            <img :src="`${base}images/${chapter.img}`" :alt="chapter.title" class="story-img" />
            <h3 class="story-title">{{ chapter.title }}</h3>
          </div>
          <p class="story-p">{{ chapter.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="about-cta">
      <!-- Top row: logo + heading + description -->
      <div class="cta-top" data-aos="fade-up">
        <img :src="`${base}images/section6logo.png`" alt="SquareUp" class="cta-logo" />
        <div class="cta-text">
          <h3 class="cta-h3">Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h3>
          <p class="cta-p">Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
        </div>
      </div>
      <!-- Bottom row: label | tagline span | button -->
      <div class="cta-bottom" data-aos="fade-up" data-aos-delay="100">
        <span class="cta-label">Welcome to SquareUp</span>
        <span class="cta-tagline">Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</span>
        <button class="cta-btn">Start Project</button>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'

const base = import.meta.env.BASE_URL

const story = [
  {
    img: '1oas.png', title: 'Design',
    desc: 'Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency\'s design department.',
  },
  {
    img: '2oas.png', title: 'Engineering',
    desc: 'Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality.',
  },
  {
    img: '3oas.png', title: 'Project Management',
    desc: 'In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution.',
  },
  {
    img: '4oas.png', title: 'Collaboration',
    desc: 'At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products.',
  },
  {
    img: '5oas.png', title: 'Client-Centric Approach',
    desc: 'SquareUp\'s success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did.',
  },
  {
    img: '6oas.png', title: 'Driving Success',
    desc: 'With each project, SquareUp\'s reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise.',
  },
]
</script>

<style scoped>
.about-hero {
  background-color: #0a0f0a;
  min-height: 30vh;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  text-align: center;
  padding: clamp(60px,8vw,120px) clamp(16px,6vw,80px);
  border: 1px solid rgba(46,46,46,1);
  position: relative; overflow: hidden;
}
.about-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.about-hero > * { position: relative; z-index: 1; }
.about-h1 { font-size: clamp(28px,4vw,48px); font-weight: 600; color: #fff; }
.about-p  { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(230,230,230,1); }

.about-intro { background-color: rgba(38,38,38,1); overflow: hidden; border: 1px solid rgba(46,46,46,1); }
.intro-left  {
  padding: clamp(40px,6vw,80px) clamp(30px,5vw,70px);
  display: flex; flex-direction: column; justify-content: center;
}
.intro-h2    { font-size: clamp(24px,3vw,38px); font-weight: 600; color: #fff; margin-bottom: 20px; }
.intro-p     { font-size: clamp(14px,1.5vw,16px); font-weight: 400; color: rgba(200,200,200,1); line-height: 1.7; opacity: 0.85; }

/* Right panel — dark with green glow + logo */
.intro-right {
  overflow: hidden;
  padding: clamp(24px,4vw,48px);
  background-color: rgba(38,38,38,1);
  display: flex; align-items: center; justify-content: center;
}
.intro-visual {
  width: 100%; height: 100%;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  background-color: #080c0a;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
}
.intro-visual::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 80% at 50% 50%, rgba(158,255,0,0.18) 0%, transparent 65%),
    radial-gradient(ellipse 60% 40% at 50% 50%, rgba(80,160,60,0.15) 0%, transparent 55%);
  pointer-events: none;
}
/* Cross lines */
.intro-visual::after {
  content: '';
  position: absolute; inset: 0;
  background:
    linear-gradient(to right, transparent calc(50% - 0.5px), rgba(158,255,0,0.35) calc(50% - 0.5px), rgba(158,255,0,0.35) calc(50% + 0.5px), transparent calc(50% + 0.5px)),
    linear-gradient(to bottom, transparent calc(50% - 0.5px), rgba(158,255,0,0.35) calc(50% - 0.5px), rgba(158,255,0,0.35) calc(50% + 0.5px), transparent calc(50% + 0.5px));
  pointer-events: none;
}
.intro-logo {
  width: 80px; height: 80px;
  border-radius: 16px;
  position: relative; z-index: 1;
  box-shadow: 0 0 40px rgba(158,255,0,0.4);
}

.story-section { background-color: rgba(38,38,38,1); overflow: hidden; }
.story-header  { border: 1px solid rgba(46,46,46,1); padding: clamp(24px,4vw,40px) clamp(16px,5vw,60px); }
.story-h3      { font-size: clamp(24px,3vw,38px); font-weight: 600; color: #fff; margin: 0; }

.story-card  { border: 1px solid rgba(46,46,46,1); padding: clamp(24px,4vw,50px); }
.story-card-header {
  margin-bottom: clamp(16px,2vw,24px);
  align-items: center;
}
.story-img   {
  width: 60px;
  height: 60px;
  object-fit: contain;
  padding: 10px;
  border-radius: 10px; background: transparent;
  margin-right: 20px; flex-shrink: 0;
}
.story-title {
  font-size: clamp(18px,2vw,26px); font-weight: 600; color: rgba(216,255,153,1);
  margin: 0; flex: 1;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(46,46,46,1);
}
.story-p     { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(230,230,230,1); }

/* ── CTA Banner ── */
.about-cta {
  background-color: rgba(38,38,38,1);
  border: 1px solid rgba(46,46,46,1);
  padding: clamp(24px,4vw,48px) clamp(20px,4vw,60px);
}

.cta-top {
  display: flex;
  align-items: center;
  gap: clamp(20px,3vw,40px);
  padding-bottom: clamp(12px,2vw,20px);
}

.cta-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 16px;
  flex-shrink: 0;
}

.cta-text { display: flex; flex-direction: column; gap: 10px; }
.cta-h3 {
  font-size: clamp(15px,1.6vw,20px);
  font-weight: 600;
  color: rgba(152,152,154,1);
  margin: 0;
  line-height: 1.4;
}
.cta-p {
  font-size: clamp(12px,1.2vw,14px);
  font-weight: 400;
  color: rgba(152,152,154,1);
  margin: 0;
  line-height: 1.6;
}

.cta-bottom {
  border: 1px solid rgba(46,46,46,1);
  margin-top: clamp(12px,2vw,20px);
  padding: clamp(14px,2vw,22px) clamp(20px,3vw,40px);
  display: flex;
  align-items: center;
  gap: clamp(12px,2vw,24px);
  flex-wrap: wrap;
}

.cta-label {
  font-size: clamp(12px,1.1vw,14px);
  font-weight: 400;
  color: rgba(152,152,154,1);
  white-space: nowrap;
  flex-shrink: 0;
}

.cta-tagline {
  font-size: clamp(12px,1.2vw,14px);
  font-weight: 500;
  color: #fff;
  background-color: rgba(46,46,46,1);
  border-radius: 8px;
  padding: 10px 14px;
  display: inline-block;
  line-height: 1.5;
  flex: 1;
}

.cta-btn {
  background-color: rgba(158,255,0,1);
  border: none;
  border-radius: 8px;
  font-size: clamp(13px,1.3vw,15px);
  font-weight: 600;
  padding: 12px 24px;
  cursor: pointer;
  color: #000;
  white-space: nowrap;
  flex-shrink: 0;
  transition: opacity 0.2s;
}
.cta-btn:hover { opacity: 0.85; }

@media (max-width: 768px) {
  .about-hero  { padding: clamp(40px,6vw,60px) 16px; }
  .intro-left  { padding: 24px 16px; }
  .intro-right { padding: 16px; }
  .intro-visual{ min-height: 220px; }
  .story-header{ padding: 24px 16px; }
  .story-card  { padding: 24px 16px; }
  .cta-top     { flex-direction: column; align-items: center; text-align: center; gap: 16px; padding-bottom: 24px; }
  .cta-bottom  { flex-direction: column; align-items: center; text-align: center; margin-top: 24px; gap: 12px; }
  .cta-tagline { width: 100%; text-align: center; font-size: 13px; white-space: normal; }
  .cta-btn     { width: 100%; text-align: center; }
}

@media (max-width: 480px) {
  .about-hero { min-height: auto; padding: 40px 16px; }
  .intro-img  { max-height: 260px; }
}
</style>
