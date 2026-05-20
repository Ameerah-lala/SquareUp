<template>
  <div class="container-fluid px-0">
    <TheNavbar />

    <!-- Hero -->
    <section class="hero-section">
      <h1 class="hohs" data-aos="fade-up">A Digital Product Studio that will Work</h1>
      <p class="pohs" data-aos="fade-up" data-aos-delay="100">
        For <span class="p1ohs">Startups</span>,
        <span class="p1ohs">Enterprise leaders</span>,
        <span class="p1ohs">Media &amp; Publishers</span> and
        <span class="p1ohs">Social Good</span>
      </p>
      <div class="btns mt-4 d-flex justify-content-center gap-3" data-aos="fade-up" data-aos-delay="200">
        <button class="btn b1ohs">Our Works</button>
        <button class="btn b2ohs">Contact Us</button>
      </div>
    </section>

    <!-- Brand logos -->
    <section class="brands-section">
      <p class="brands-label" data-aos="fade-up">Trusted By 250+ Companies</p>
      <div class="brands-row">
        <div v-for="(brand, i) in brands" :key="brand.alt" class="brand-cell" data-aos="fade-up" :data-aos-delay="i * 80">
          <img :src="`/images/${brand.file}`" :alt="brand.alt" class="brand-img" />
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="s2ahs">
      <div class="text-center dv1os2ahs">
        <h2 class="h1os2" data-aos="fade-up">Our Services</h2>
        <p class="p1os2" data-aos="fade-up" data-aos-delay="100">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
      </div>
      <div class="row dv2os2ahs">
        <div v-for="(svc, i) in services" :key="svc.title" class="col-md-4 dvodv2s2 d-flex flex-column" data-aos="fade-up" :data-aos-delay="i * 100">
          <div class="svc-card-header">
            <img :src="`/images/${svc.icon}`" :alt="svc.title" class="imgos2" />
            <h3 class="h2os2">{{ svc.title }}</h3>
          </div>
          <p class="p2os2">{{ svc.desc }}</p>
          <button class="btnos2 mt-4">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Why Choose -->
    <section class="s3ahs">
      <div class="text-center dv1os3ahs">
        <h2 class="h1os3" data-aos="fade-up">Why Choose SquareUp?</h2>
        <p class="p1os3" data-aos="fade-up" data-aos-delay="100">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
      </div>
      <div class="row dv2os3ahs">
        <div v-for="(reason, i) in whyUs" :key="reason.title" class="col-md-6 dvodv2s3" data-aos="fade-up" :data-aos-delay="i * 100">
          <div class="d-flex align-items-center">
            <img :src="`/images/${reason.icon}`" :alt="reason.title" class="imgos3" />
            <h3 class="h2os3">{{ reason.title }}</h3>
          </div>
          <p class="p2os3">{{ reason.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="s4ahs">
      <div class="text-center dv1os4ahs">
        <h2 class="h1os4" data-aos="fade-up">What our Clients say About us</h2>
        <p class="p1os4" data-aos="fade-up" data-aos-delay="100">At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients.</p>
      </div>
      <div class="row dv2os4ahs">
        <div v-for="(t, i) in testimonials" :key="t.name" class="col-md-6 dv1odv2s4" data-aos="fade-up" :data-aos-delay="(i % 2) * 100">
          <h3 class="h2os4">{{ t.quote }}</h3>
          <p class="p2os4">{{ t.body }}</p>
          <div class="dv2odv2s4 justify-content-between d-flex mt-4">
            <div class="d-flex align-items-center">
              <img :src="`/images/${t.avatar}`" :alt="t.name" class="imgos4" />
              <div>
                <h6 class="h3os4">{{ t.name }}</h6>
                <p class="p3os4 mb-0">{{ t.role }}</p>
              </div>
            </div>
            <button class="btnos4 d-none d-md-block">Open Website</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <!-- Header with green-blend bg -->
      <div class="faq-header text-center">
        <h2 class="faq-h2" data-aos="fade-up">Frequently Asked Questions</h2>
        <p class="faq-sub" data-aos="fade-up" data-aos-delay="100">Still you have any questions? Contact our Team via hello@squareup.com</p>
      </div>

      <!-- FAQ accordion -->
      <div class="faq-grid">
        <div
          v-for="(item, i) in faqs"
          :key="item.q"
          class="faq-item"
          :class="{ active: openIndex === i }"
          @click="toggle(i)"
          data-aos="fade-up"
          :data-aos-delay="(i % 2) * 80"        >
          <div class="faq-row">
            <span class="faq-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="faq-q" :class="{ 'faq-q-active': openIndex === i }">{{ item.q }}</span>
            <span class="faq-icon">{{ openIndex === i ? '×' : '+' }}</span>
          </div>
          <div v-if="openIndex === i" class="faq-answer">{{ item.a }}</div>
        </div>
      </div>
    </section>

    <!-- CTA + Contact -->
    <section class="text-center s6ahs">
      <div class="dv1os6ahs">
        <img src="/images/section6logo.png" alt="" class="imgos6" data-aos="fade-up" />
        <h3 class="h1os6" data-aos="fade-up" data-aos-delay="100">Thank you for your Interest in SquareUp.</h3>
        <p class="p1os6" data-aos="fade-up" data-aos-delay="200">We would love to hear from you and discuss how we can help bring your digital ideas to life.</p>
        <button class="btn btnos6" data-aos="fade-up" data-aos-delay="300">Start Project</button>
      </div>
      <ContactForm />
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar   from '../components/TheNavbar.vue'
import TheFooter   from '../components/TheFooter.vue'
import ContactForm from '../components/ContactForm.vue'
import { ref } from 'vue'

const servicesBg = {}

// FAQ
const openIndex = ref(0)
function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  {
    q: 'What services does SquareUp provide?',
    a: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  },
  {
    q: 'How can SquareUp help my business?',
    a: 'We help businesses of all sizes build and improve their digital products. Whether you need a new website, a mobile app, or a complete digital transformation, our team has the expertise to deliver results.',
  },
  {
    q: 'What industries does SquareUp work with?',
    a: 'We work across a wide range of industries including e-commerce, healthcare, finance, education, real estate, logistics, and more. Our diverse experience allows us to bring fresh perspectives to every project.',
  },
  {
    q: 'How long does it take to complete a project with SquareUp?',
    a: 'Project timelines vary depending on scope and complexity. A simple website may take 4–6 weeks, while a complex custom software solution can take several months. We provide detailed timelines during our planning phase.',
  },
  {
    q: 'Do you offer ongoing support and maintenance after the project is completed?',
    a: 'Yes, we offer various post-launch support packages including bug fixes, feature enhancements, security updates, and technical support to ensure your product continues to perform optimally.',
  },
  {
    q: 'Can you work with existing design or development frameworks?',
    a: 'Absolutely. We are experienced with a wide range of frameworks and can integrate with your existing tech stack, whether it\'s React, Vue, Angular, Laravel, Django, or others.',
  },
  {
    q: 'How involved will I be in the project development process?',
    a: 'We believe in close collaboration. You\'ll be involved at every key milestone — from discovery and design reviews to development demos and final sign-off. We keep you informed and in control throughout.',
  },
  {
    q: 'Can you help with website or app maintenance and updates?',
    a: 'Yes. We provide ongoing maintenance services to keep your digital products up to date, secure, and performing well. We offer flexible retainer plans tailored to your needs.',
  },
]

const brands = [
  { file: 'Zapier.png',  alt: 'Zapier'  },
  { file: 'Spotify.png', alt: 'Spotify' },
  { file: 'Zoom.png',    alt: 'Zoom'    },
  { file: 'Slack.png',   alt: 'Slack'   },
  { file: 'Amazon.png',  alt: 'Amazon'  },
  { file: 'Adobe.png',   alt: 'Adobe'   },
]

const services = [
  {
    icon: 'Icon 1-HP.png',
    title: 'Design',
    desc: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.',
  },
  {
    icon: 'Icon 2-HP.png',
    title: 'Engineering',
    desc: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.',
  },
  {
    icon: 'Icon 3-HP.png',
    title: 'Project Management',
    desc: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools.',
  },
]

const whyUs = [
  {
    icon: 'Icon 21-hp.png',
    title: 'Expertise',
    desc: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.',
  },
  {
    icon: 'Icon 22-hp.png',
    title: 'Client-Centric Approach',
    desc: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.',
  },
  {
    icon: 'Icon 31-hp.png',
    title: 'Results-Driven Solutions',
    desc: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.',
  },
  {
    icon: 'Icon 32-hp.png',
    title: 'Collaborative Partnership',
    desc: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.',
  },
]

const testimonials = [
  {
    quote: 'SquareUp has been Instrumental in Transforming our Online Presence.',
    body: 'Their team\'s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn\'t be happier.',
    name: 'John Smith', role: 'CEO of Chic Boutique', avatar: 'Profile 11.png',
  },
  {
    quote: 'Working with SquareUp was a breeze.',
    body: 'They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.',
    name: 'Sarah Johnson', role: 'Founder of HungryBites.', avatar: 'Profile 12.png',
  },
  {
    quote: 'SquareUp developed a comprehensive booking and reservation system for our event management company.',
    body: 'Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients\' event experiences.',
    name: 'Mark Thompson', role: 'CEO of EventMasters', avatar: 'Profile 21.png',
  },
  {
    quote: 'ProTech Solutions turned to SquareUp to automate our workflow.',
    body: 'They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp\'s expertise and professionalism have made them a trusted technology partner.',
    name: 'Laura Adams', role: 'COO of ProTech Solutions.', avatar: 'Profile 22.png',
  },
  {
    quote: 'SquareUp designed and developed a captivating web portal for showcasing our real estate listings.',
    body: 'The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp\'s expertise in the real estate industry is unmatched.',
    name: 'Michael Anderson', role: 'Founder of Dream Homes Realty.', avatar: 'Profile 31.png',
  },
  {
    quote: 'FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.',
    body: 'SquareUp\'s team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.',
    name: 'Emily Turner', role: 'CEO of FitLife Tracker', avatar: 'Profile 32.png',
  },
]
</script>

<style scoped>
/* ── Hero ── */
.hero-section {
  background-color: #0a0f0a;
  min-height: 60vh;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  text-align: center;
  padding: clamp(60px, 10vw, 120px) clamp(16px, 6vw, 80px);
  width: 100%; overflow: hidden;
  position: relative;
}
.hero-section::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.hero-section > * { position: relative; z-index: 1; }
.hohs {
  font-size: clamp(28px, 5vw, 68px);
  font-weight: 600; line-height: 1.1; color: #fff;
  padding: 0 0 16px; max-width: 900px;
}
.p1ohs { background-color: #686868; border-radius: 5px; font-size: clamp(14px, 2vw, 22px); font-weight: 400; }
.pohs  { color: #fff; font-size: clamp(14px, 2vw, 20px); }
.b1ohs {
  color: #fff; border: 1px solid rgba(51,51,51,1);
  background-color: rgba(36,36,36,0.2); border-radius: 10px;
  font-size: clamp(14px, 1.5vw, 18px); font-weight: 500;
}
.b1ohs:hover { color: #fff; }
.b2ohs {
  background-color: rgba(158,255,0,1); border: 1px solid rgba(158,255,0,1);
  border-radius: 10px; font-size: clamp(14px, 1.5vw, 18px); font-weight: 500;
}

/* ── Brands ── */
.brands-section {
  background-color: rgba(38,38,38,1);
  border-top: 1px solid rgba(46,46,46,1);
  border-bottom: 1px solid rgba(46,46,46,1);
  padding: 24px clamp(16px, 5vw, 80px) 36px;
  text-align: center; overflow: hidden;
}
.brands-label {
  font-size: 13px; font-weight: 500;
  color: rgba(152,152,154,1); letter-spacing: 0.5px; margin-bottom: 28px;
}
.brands-row {
  display: flex; align-items: center;
  justify-content: space-between; flex-wrap: wrap; gap: 20px;
}
.brand-cell {
  display: flex; align-items: center; justify-content: center;
}
.brand-img {
  height: clamp(20px, 3vw, 32px); width: auto; object-fit: contain;
  filter: brightness(0) invert(1); opacity: 0.85; transition: opacity 0.2s;
}
.brand-img:hover { opacity: 1; }

/* ── Services ── */
.s2ahs { overflow: hidden; }
.dv1os2ahs {
  padding: clamp(50px, 8vw, 120px) clamp(16px, 10vw, 250px);
  position: relative; border: 1px solid rgba(46,46,46,1);
  overflow: hidden; background-color: #0a0f0a;
}
.dv1os2ahs::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.dv1os2ahs > * { position: relative; z-index: 1; }
.h1os2 { font-size: clamp(26px, 4vw, 48px); font-weight: 600; color: #fff; }
.p1os2 { font-size: clamp(15px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); }
.dv2os2ahs { background-color: rgba(38,38,38,1); margin: 0; align-items: stretch; }
.dvodv2s2  { padding: clamp(24px, 4vw, 50px); border: 1px solid rgba(46,46,46,1); display: flex; flex-direction: column; }
.imgos2 {
  padding: 20px; border: 1px solid rgba(46,46,46,1);
  border-radius: 10px; background: rgba(36,36,36,1);
}
.svc-card-header { display: flex; align-items: center; gap: 16px; }
.h2os2 { font-size: clamp(20px, 2.5vw, 30px); font-weight: 600; color: #fff; margin: 0; }
.p2os2 { font-size: clamp(14px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); flex: 1; }
.btnos2 {
  padding: 14px 16px; background-color: rgba(46,46,46,1);
  border: 1px solid rgba(46,46,46,1); font-size: clamp(14px, 1.5vw, 18px);
  font-weight: 500; color: #fff; width: 100%; cursor: pointer;
  margin-top: auto;
}

/* ── Why Choose ── */
.s3ahs { overflow: hidden; }
.dv1os3ahs {
  padding: clamp(50px, 8vw, 120px) clamp(16px, 8vw, 150px);
  position: relative; border: 1px solid rgba(46,46,46,1);
  overflow: hidden; background-color: #0a0f0a;
}
.dv1os3ahs::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.dv1os3ahs > * { position: relative; z-index: 1; }
.h1os3 { font-size: clamp(26px, 4vw, 48px); font-weight: 600; color: #fff; }
.p1os3 { font-size: clamp(15px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); }
.dv2os3ahs { background-color: rgba(38,38,38,1); margin: 0; }
.dvodv2s3  { padding: clamp(30px, 5vw, 80px); border: 1px solid rgba(46,46,46,1); }
.imgos3 {
  padding: 20px; border: 1px solid rgba(46,46,46,1);
  border-radius: 10px; background: rgba(36,36,36,1); flex-shrink: 0;
  align-self: flex-start;
}
.h2os3 { font-size: clamp(18px, 2vw, 26px); font-weight: 500; color: #fff; margin: 0; padding-left: 16px; }
.p2os3 { font-size: clamp(14px, 1.5vw, 20px); font-weight: 400; color: rgba(230,230,230,1); margin: 16px 0 0; }

/* ── Testimonials ── */
.s4ahs { overflow: hidden; }
.dv1os4ahs {
  padding: clamp(50px, 8vw, 120px) clamp(16px, 8vw, 150px);
  position: relative; border: 1px solid rgba(46,46,46,1);
  overflow: hidden; background-color: #0a0f0a;
}
.dv1os4ahs::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.dv1os4ahs > * { position: relative; z-index: 1; }
.h1os4 { font-size: clamp(26px, 4vw, 48px); font-weight: 600; color: #fff; }
.p1os4 { font-size: clamp(15px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); }
.dv2os4ahs { background-color: rgba(38,38,38,1); margin: 0; }
.dv1odv2s4 { padding: clamp(30px, 5vw, 80px); border: 1px solid rgba(46,46,46,1); display: flex; flex-direction: column; }
.imgos4 { height: 52px; width: 52px; border-radius: 8px; margin-right: 16px; flex-shrink: 0; }
.h2os4 { font-size: clamp(18px, 2vw, 28px); font-weight: 500; color: rgba(216,255,153,1); }
.p2os4 { font-size: clamp(14px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); padding-top: 16px; flex: 1; }
.dv2odv2s4 {
  padding: 16px; border: 1px solid rgba(46,46,46,1);
  background-color: rgba(36,36,36,0.2); flex-wrap: wrap; gap: 12px;
}
.h3os4 { font-size: 18px; font-weight: 500; color: #fff; margin: 0; }
.p3os4 { font-size: 15px; font-weight: 400; color: rgba(230,230,230,1); }
.btnos4 {
  height: auto; width: auto; padding: 12px 20px;
  background-color: rgba(46,46,46,1); border: 1px solid rgba(46,46,46,1);
  font-size: 16px; font-weight: 500; color: #fff; cursor: pointer;
  white-space: nowrap;
}

/* ── FAQ ── */
.faq-section { background-color: rgba(38,38,38,1); overflow: hidden; }
.faq-header {
  padding: clamp(50px, 8vw, 100px) clamp(16px, 10vw, 250px);
  position: relative; overflow: hidden;
  border: 1px solid rgba(46,46,46,1); background-color: #0a0f0a;
}
.faq-header::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.faq-header > * { position: relative; z-index: 1; }
.faq-h2  { font-size: clamp(26px, 4vw, 48px); font-weight: 700; color: #fff; margin-bottom: 12px; }
.faq-sub { font-size: clamp(13px, 1.5vw, 16px); font-weight: 400; color: rgba(200,200,200,1); margin: 0; }
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.faq-item {
  border: 1px solid rgba(46,46,46,1); padding: clamp(16px, 2.5vw, 28px) clamp(16px, 2.5vw, 32px);
  cursor: pointer; transition: background-color 0.2s;
}
.faq-item.active { background-color: rgba(30,30,30,1); }
.faq-row { display: flex; align-items: flex-start; gap: 16px; }
.faq-num {
  font-size: 16px; font-weight: 600; color: rgba(152,152,154,1);
  flex-shrink: 0; min-width: 26px;
}
.faq-item.active .faq-num { color: rgba(158,255,0,1); }
.faq-q { font-size: clamp(14px, 1.5vw, 17px); font-weight: 500; color: rgba(230,230,230,1); flex: 1; line-height: 1.4; min-width: 0; word-break: break-word; }
.faq-q-active { color: rgba(158,255,0,1) !important; }
.faq-icon { font-size: 22px; font-weight: 300; color: rgba(230,230,230,1); flex-shrink: 0; line-height: 1; }
.faq-item.active .faq-icon { color: rgba(158,255,0,1); }
.faq-answer {
  font-size: clamp(13px, 1.3vw, 15px); font-weight: 400;
  color: rgba(200,200,200,1); line-height: 1.7; margin-top: 14px; padding-left: 42px;
}

/* ── CTA ── */
.s6ahs { background-color: #0a0f0a; overflow: hidden; }
.dv1os6ahs {
  padding: clamp(50px, 8vw, 120px) clamp(16px, 10vw, 180px);
  position: relative; border: 1px solid rgba(46,46,46,1);
  overflow: hidden; background-color: #0a0f0a;
}
.dv1os6ahs::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.dv1os6ahs > * { position: relative; z-index: 1; }
.imgos6 { width: 70px; height: 70px; border-radius: 15px; }
.h1os6 { font-weight: 600; font-size: clamp(22px, 3vw, 38px); color: #fff; margin-top: 16px; }
.p1os6 { font-weight: 400; font-size: clamp(14px, 1.5vw, 18px); color: #fff; padding-bottom: 24px; }
.btnos6 {
  background-color: rgba(158,255,0,1); border: 1px solid rgba(158,255,0,1);
  border-radius: 8px; font-size: clamp(14px, 1.5vw, 18px); font-weight: 500;
  padding: 14px 28px; cursor: pointer;
}

@media (max-width: 768px) {
  .hero-section { min-height: auto; padding: clamp(40px,6vw,60px) 16px; }
  /* Remove grey pill from hero spans on mobile */
  .p1ohs {
    background-color: transparent;
    border-radius: 0;
    padding: 0;
  }
  /* Logos: 2-column grid on mobile */
  .brands-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    justify-items: stretch;
    align-items: stretch;
    border-left: 1px solid rgba(46,46,46,1);
    border-top: 1px solid rgba(46,46,46,1);
  }
  .brand-cell {
    border-right: 1px solid rgba(46,46,46,1);
    border-bottom: 1px solid rgba(46,46,46,1);
    padding: 28px 16px;
  }
  .brand-img { height: 28px; flex-shrink: 0; }
  .dv1os2ahs    { padding: 40px 16px; }
  .dv1os3ahs    { padding: 40px 16px; }
  .dv1os4ahs    { padding: 40px 16px; }
  .faq-header   { padding: 40px 16px; }
  .faq-grid     { grid-template-columns: 1fr; }
  .faq-item:nth-child(n+5) { display: none; }
  .faq-answer   { padding-left: 0; }
  .dv2odv2s4    { flex-direction: column; }
  .dv1os6ahs    { padding: 40px 16px; }
}

@media (max-width: 480px) {
  .hero-section   { padding: 40px 16px; }
  .brands-section { padding: 20px 0 0; }
  .brands-label   { padding: 0 16px 20px; }
  .brand-cell     { padding: 24px 16px; }
  .brand-img      { height: 24px; }
  .dvodv2s2       { padding: 20px 16px; }
  .dvodv2s3       { padding: 20px 16px; }
  .dvodv2s3 .p2os3 { margin-top: 20px; }
  .dv1odv2s4      { padding: 20px 16px; }
  .faq-item       { padding: 14px 16px; }
}
</style>
