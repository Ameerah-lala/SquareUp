<template>
  <div class="container-fluid px-0">
    <TheNavbar />

    <!-- Hero -->
    <section class="hero-sctn">
      <h2 class="hohsctn" data-aos="fade-up">Our Services</h2>
      <p class="pohsctn" data-aos="fade-up" data-aos-delay="100">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
    </section>

    <!-- Service sections -->
    <section v-for="svc in serviceSections" :key="svc.title" class="s1ahs">
      <div class="dv1os" data-aos="fade-up">
        <h3 class="h1os">{{ svc.title }}</h3>
        <p class="p1os">{{ svc.desc }}</p>
        <span class="span1os">{{ svc.intro }}</span>
      </div>
      <div>
        <template v-for="group in svc.groups" :key="group.heading">
          <h4 class="h2os" data-aos="fade-up">{{ group.heading }}</h4>
          <div class="row g-0">
            <div v-for="(item, i) in group.items" :key="item.text" class="col-6 col-md-3 mdv" data-aos="fade-up" :data-aos-delay="i * 80">
              <img :src="`${base}images/${item.img}`" :alt="item.text" />
              <p class="p2os">{{ item.text }}</p>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- CTA -->
    <section class="s4ahs">
      <img :src="`${base}images/s4ospimg.png`" alt="" data-aos="fade-up" />
      <h3 class="hos4" data-aos="fade-up" data-aos-delay="100">Let us Bring your Ideas to Life in the Digital World.</h3>
      <p class="pos4" data-aos="fade-up" data-aos-delay="200">No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations.</p>
      <button class="btnos4" data-aos="fade-up" data-aos-delay="300">Start Project</button>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'

const base = import.meta.env.BASE_URL

const serviceSections = [
  {
    title: 'Design',
    desc: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.',
    intro: 'Our design services include:',
    groups: [
      {
        heading: 'User Experience (UX) Design',
        items: [
          { img: '114osp.png', text: 'User Research and Persona Development' },
          { img: '124osp.png', text: 'Information Architecture and Wireframing' },
          { img: '134osp.png', text: 'Interactive Prototyping and User Testing' },
          { img: '144osp.png', text: 'UI Design and Visual Branding' },
        ],
      },
      {
        heading: 'User Interface (UI) Design',
        items: [
          { img: '214osp.png', text: 'Intuitive and Visually Appealing Interface Design' },
          { img: '224osp.png', text: 'Custom Iconography and Illustration' },
          { img: '234osp.png', text: 'Typography and Color Palette Selection' },
          { img: '244osp.png', text: 'Responsive Design for Various Devices' },
        ],
      },
      {
        heading: 'Branding and Identity',
        items: [
          { img: '314osp.png', text: 'Logo Design and Visual Identity Development' },
          { img: '324osp.png', text: 'Brand Strategy and Positioning' },
          { img: '334osp.png', text: 'Brand Guidelines and Style Guides' },
          { img: '344osp.png', text: 'Marketing Collateral Design' },
        ],
      },
    ],
  },
  {
    title: 'Engineering',
    desc: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.',
    intro: 'Our engineering services include:',
    groups: [
      {
        heading: 'Web Development',
        items: [
          { img: '414osp.png', text: 'Front-End Development (HTML, CSS, JavaScript)' },
          { img: '424osp.png', text: 'Back-End Development (PHP, Python, Ruby)' },
          { img: '434osp.png', text: 'CMS Development (WordPress, Drupal)' },
          { img: '444osp.png', text: 'E-Commerce Platform Development (Magento, Shopify)' },
        ],
      },
      {
        heading: 'Mobile App Development',
        items: [
          { img: '514osp.png', text: 'Native iOS and Android App Development' },
          { img: '524osp.png', text: 'Cross-Platform App Development (React Native, Flutter)' },
          { img: '534osp.png', text: 'App Prototyping and UI/UX Design Integration' },
          { img: '544osp.png', text: 'App Testing, Deployment, and Maintenance' },
        ],
      },
      {
        heading: 'Custom Software Development',
        items: [
          { img: '614osp.png', text: 'Enterprise Software Development' },
          { img: '624osp.png', text: 'Custom Web Application Development' },
          { img: '634osp.png', text: 'Integration with Third-Party APIs and Systems' },
          { img: '644osp.png', text: 'Legacy System Modernization and Migration' },
        ],
      },
    ],
  },
  {
    title: 'Project Management',
    desc: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.',
    intro: 'Our project management services include:',
    groups: [
      {
        heading: 'Project Planning and Scoping',
        items: [
          { img: '714osp.png', text: 'Requirements Gathering and Analysis' },
          { img: '724osp.png', text: 'Project Roadmap and Timeline Development' },
          { img: '734osp.png', text: 'Resource Allocation and Task Assignment' },
          { img: '724osp.png', text: 'Risk Assessment and Mitigation Strategies' },
        ],
      },
      {
        heading: 'Agile Development',
        items: [
          { img: '814osp.png', text: 'Iterative Development and Sprints' },
          { img: '824osp.png', text: 'Scrum or Kanban Methodology Implementation' },
          { img: '834osp.png', text: 'Regular Progress Updates and Demos' },
          { img: '844osp.png', text: 'Continuous Improvement and Feedback Incorporation' },
        ],
      },
      {
        heading: 'Quality Assurance and Testing',
        items: [
          { img: '914osp.png', text: 'Test Planning and Execution' },
          { img: '924osp.png', text: 'Functional and Usability Testing' },
          { img: '934osp.png', text: 'Performance and Security Testing' },
          { img: '944osp.png', text: 'Bug Tracking and Issue Resolution' },
        ],
      },
    ],
  },
]
</script>

<style scoped>
.hero-sctn {
  background-color: #0a0f0a;
  min-height: 30vh;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  text-align: center;
  padding: clamp(60px, 8vw, 120px) clamp(16px, 5vw, 60px);
  position: relative; overflow: hidden;
}
.hero-sctn::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.hero-sctn > * { position: relative; z-index: 1; }
.hohsctn { font-size: clamp(28px, 4vw, 48px); font-weight: 600; color: #fff; }
.pohsctn  { font-size: clamp(15px, 1.8vw, 20px); font-weight: 500; color: rgba(230,230,230,1); margin: 0; }

.s1ahs {
  background-color: rgba(38,38,38,1);
  border: 1px solid rgba(36,36,36,0.2);
  padding: 0 clamp(16px, 4vw, 50px);
  overflow: hidden;
}
.dv1os {
  border: 1px solid rgba(46,46,46,1);
  padding: clamp(20px, 3vw, 40px) clamp(16px, 5vw, 80px) clamp(20px, 3vw, 30px) clamp(16px, 2vw, 20px);
}
.h1os  { font-size: clamp(26px, 4vw, 48px); font-weight: 600; color: #fff; margin: 0; line-height: 1.1; }
.p1os  { font-size: clamp(14px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); margin: 12px 0 16px; line-height: 1.6; }
.span1os {
  font-size: clamp(15px, 1.8vw, 22px); font-weight: 400; color: #fff;
  background-color: rgba(46,46,46,1); border: 1px solid rgba(46,46,46,1);
  padding: 10px 14px; display: inline-block; margin: 20px 0;
}
.h2os {
  font-size: clamp(16px, 2vw, 28px); font-weight: 500; color: rgba(152,152,154,1);
  padding: clamp(12px, 1.5vw, 20px) clamp(12px, 1.5vw, 20px);
  border: 1px solid rgba(46,46,46,1); margin: 0;
}
.mdv { border: 1px solid rgba(46,46,46,1); padding: clamp(14px, 2vw, 20px); }
.mdv img { width: 100%; max-width: 80px; height: auto; }
.p2os { font-size: clamp(13px, 1.4vw, 18px); font-weight: 500; color: rgba(230,230,230,1); margin-top: 8px; }

.s4ahs {
  background-color: #0a0f0a;
  text-align: center;
  padding: clamp(50px, 8vw, 120px) clamp(16px, 10vw, 200px);
  position: relative; overflow: hidden;
}
.s4ahs::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.s4ahs > * { position: relative; z-index: 1; }
.hos4 { font-size: clamp(22px, 3vw, 38px); font-weight: 600; color: #fff; }
.pos4 { font-size: clamp(14px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); }
.btnos4 {
  background-color: rgba(158,255,0,1); border: 1px solid rgba(158,255,0,1);
  border-radius: 8px; font-size: clamp(14px, 1.5vw, 18px); font-weight: 500;
  padding: 14px 28px; cursor: pointer; margin-top: 16px;
}

@media (max-width: 768px) {
  .hero-sctn { padding: clamp(40px,6vw,60px) 16px; min-height: auto; }
  .s1ahs     { padding: 0 16px; }
  .dv1os     { padding: 24px 16px; }
  .s4ahs     { padding: 40px 16px; }
  .h2os      { text-align: center; }
}

@media (max-width: 480px) {
  .hero-sctn { padding: 40px 16px; }
  .mdv       { padding: 12px; }
  .s4ahs     { padding: 32px 16px; }
}
</style>
