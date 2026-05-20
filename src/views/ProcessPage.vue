<template>
  <div class="container-fluid px-0">
    <TheNavbar />

    <!-- Hero -->
    <section class="process-hero text-center">
      <h1 class="process-h1" data-aos="fade-up">Process of Starting the Project</h1>
      <p class="process-p" data-aos="fade-up" data-aos-delay="100">At SquareUp, we value transparency, collaboration, and delivering exceptional results.</p>
    </section>

    <!-- Steps -->
    <section class="process-steps">
      <div class="steps-intro" data-aos="fade-up">
        <h2 class="steps-h2">At SquareUp</h2>
        <p class="steps-p">We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
        <span class="steps-span">Here's an overview of our typical process:</span>
      </div>

      <div class="row g-0">
        <div v-for="(step, i) in steps" :key="step.title" class="col-md-6 step-card" data-aos="fade-up" :data-aos-delay="(i % 2) * 100">
          <div class="d-flex align-items-center step-header">
            <img :src="`${base}images/${step.img}`" :alt="step.title" class="step-img" />
            <h3 class="step-h3">{{ step.title }}</h3>
          </div>
          <p class="step-p">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="process-cta text-center">
      <img :src="`${base}images/section6logo.png`" alt="SquareUp" class="cta-logo" data-aos="fade-up" />
      <h2 class="cta-h2" data-aos="fade-up" data-aos-delay="100">Thank you for your Interest in SquareUp.</h2>
      <p class="cta-p" data-aos="fade-up" data-aos-delay="200">We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
      <button class="cta-btn" data-aos="fade-up" data-aos-delay="300">Start Project</button>
    </section>

    <!-- Contact Form -->
    <ContactForm />

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar   from '../components/TheNavbar.vue'
import TheFooter   from '../components/TheFooter.vue'
import ContactForm from '../components/ContactForm.vue'

const base = import.meta.env.BASE_URL

const steps = [
  {
    img: '1ops.png', title: 'Discovery',
    desc: 'We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.',
  },
  {
    img: '2ops.png', title: 'Planning and Strategy',
    desc: 'Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.',
  },
  {
    img: '3ops.png', title: 'Design',
    desc: 'Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics.',
  },
  {
    img: '4ops.png', title: 'Development',
    desc: 'Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products.',
  },
  {
    img: '5ops.png', title: 'Testing and Quality Assurance',
    desc: 'We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks.',
  },
  {
    img: '6ops.png', title: 'Deployment and Launch',
    desc: 'When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment.',
  },
  {
    img: '7ops.png', title: 'Post-Launch Support',
    desc: 'Our commitment to your success doesn\'t end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally.',
  },
  {
    img: '8ops.png', title: 'Continuous Improvement',
    desc: 'We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth.',
  },
]
</script>

<style scoped>
.process-hero {
  background-color: #0a0f0a;
  min-height: 30vh;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: clamp(60px,8vw,120px) clamp(16px,6vw,80px);
  border: 1px solid rgba(46,46,46,1);
  position: relative; overflow: hidden;
}
.process-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.process-hero > * { position: relative; z-index: 1; }
.process-h1 { font-size: clamp(26px,4vw,48px); font-weight: 600; color: #fff; }
.process-p  { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(230,230,230,1); }

.process-steps { background-color: rgba(38,38,38,1); overflow: hidden; }
.steps-intro   { border: 1px solid rgba(46,46,46,1); padding: clamp(30px,5vw,60px) clamp(16px,5vw,60px); }
.steps-h2      { font-size: clamp(24px,3vw,38px); font-weight: 600; color: #fff; }
.steps-p       { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(230,230,230,1); }
.steps-span    {
  font-size: clamp(15px,1.8vw,20px); font-weight: 500; color: #fff;
  background-color: rgba(46,46,46,1); padding: 10px 14px;
  display: inline-block; margin-top: 16px;
}

.step-card {
  border: 1px solid rgba(46,46,46,1);
  padding: clamp(24px,4vw,60px) clamp(20px,4vw,50px);
}

.step-header {
  padding-bottom: 0;
  margin-bottom: 20px;
  align-items: flex-end;
}

.step-img  {
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: rgba(38, 38, 38, 1);
  margin-right: 20px;
  flex-shrink: 0;
}

/* Border only under the title text, not under the image */
.step-h3 {
  font-size: clamp(18px,2vw,26px);
  font-weight: 600;
  color: #fff;
  margin: 0;
  flex: 1;
  padding-bottom: 20px;
  padding-right: clamp(20px,4vw,50px);
  border-bottom: 1px solid rgba(46, 46, 46, 1);
  opacity: 0.75;
}
.step-p  { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(230,230,230,1); opacity: 0.6; }

/* ── CTA ── */
.process-cta {
  position: relative;
  overflow: hidden;
  background-color: #080c0a;
  padding: clamp(60px, 8vw, 120px) clamp(16px, 10vw, 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.process-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158, 255, 0, 0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80, 160, 60, 0.12) 0%, transparent 65%);
  pointer-events: none;
}
.process-cta > * { position: relative; z-index: 1; }
.cta-logo {
  width: 64px; height: 64px;
  border-radius: 14px; margin-bottom: 24px;
}
.cta-h2 {
  font-size: clamp(22px, 3vw, 38px);
  font-weight: 600; color: #fff;
  margin-bottom: 16px; max-width: 700px;
}
.cta-p {
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: 400; color: rgba(200, 200, 200, 1);
  margin-bottom: 32px; max-width: 600px; opacity: 0.85;
}
.cta-btn {
  background-color: rgba(158, 255, 0, 1);
  border: 1px solid rgba(158, 255, 0, 1);
  border-radius: 8px;
  font-size: clamp(14px, 1.5vw, 18px); font-weight: 500;
  padding: 14px 32px; cursor: pointer; transition: opacity 0.2s;
}
.cta-btn:hover { opacity: 0.85; }

@media (max-width: 768px) {
  .steps-intro  { padding: 24px 16px; }
  .step-card    { padding: 24px 16px; }
}

@media (max-width: 480px) {
  .process-hero { padding: 40px 16px; }
  .step-card    { padding: 20px 14px; }
  .step-img     { width: 48px; height: 48px; padding: 8px; }
  .step-header  { align-items: center; margin-bottom: 20px; }
  .step-h3      { font-size: clamp(15px,4vw,20px); padding-right: 14px; }
}
</style>
