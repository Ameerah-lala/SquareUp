<template>
  <div class="container-fluid px-0">
    <TheNavbar />

    <!-- Hero -->
    <section class="works-hero text-center">
      <h1 class="works-h1" data-aos="fade-up">Our Works</h1>
      <p class="works-p" data-aos="fade-up" data-aos-delay="100">Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</p>
    </section>

    <!-- Intro -->
    <section class="works-intro">
      <div class="intro-text" data-aos="fade-up">
        <h2 class="intro-h2">At SquareUp</h2>
        <p class="intro-p">We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
        <span class="intro-span">Here are ten examples of our notable works:</span>
      </div>

      <div class="row g-0 works-grid">
        <div v-for="(work, i) in works" :key="work.title" class="col-md-6 work-card-wrap" data-aos="fade-up" :data-aos-delay="(i % 2) * 100">
          <h3 class="work-h3">{{ work.title }}</h3>
          <div class="work-card">
            <img :src="`${base}images/${work.img}`" :alt="work.title" class="work-img" />
            <div class="work-meta">
              <div class="work-meta-left">
                <h5 class="work-client">{{ work.client }}</h5>
                <div class="work-url-box">
                  <span class="work-url">{{ work.url }}</span>
                </div>
              </div>
              <a :href="work.url" target="_blank" rel="noopener" class="work-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
            <p class="work-desc">{{ work.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="works-cta text-center">
      <h2 class="cta-h2" data-aos="fade-up">Let us Bring your Ideas to Life in the Digital World.</h2>
      <p class="cta-p" data-aos="fade-up" data-aos-delay="100">No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
      <button class="cta-btn" data-aos="fade-up" data-aos-delay="200">Start Project</button>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'

const base = import.meta.env.BASE_URL

const works = [
  {
    title: 'E-Commerce Platform for Fashion Hub',
    img: 'img1ows.png', client: 'Chic Boutique', url: 'https://www.chicboutique.com',
    desc: 'We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.',
  },
  {
    title: 'Mobile App for Food Delivery Service',
    img: 'img2ows.png', client: 'HungryBites', url: 'https://www.hungrybites.com',
    desc: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
  },
  {
    title: 'Booking and Reservation System for Event Management',
    img: 'img3ows.png', client: 'EventMasters', url: 'https://www.eventmasters.com',
    desc: 'EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.',
  },
  {
    title: 'Custom Software for Workflow Automation',
    img: 'img4ows.png', client: 'ProTech Solutions', url: 'https://www.protechsolutions.com',
    desc: 'ProTech Solutions needed a custom software solution to automate their workflow. We delivered an exceptional system that significantly increased productivity and reduced manual errors, making SquareUp a trusted technology partner.',
  },
  {
    title: 'Web Portal for Real Estate Listings',
    img: 'img5ows.png', client: 'Dream Homes Realty', url: 'https://www.dreamhomesrealty.com',
    desc: 'Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.',
  },
  {
    title: 'Mobile App for Fitness Tracking',
    img: 'img6ows.png', client: 'FitLife Tracker', url: 'https://www.fitlifetracker.com',
    desc: 'FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.',
  },
  {
    title: 'Custom Software for Supply Chain Management',
    img: 'img7ows.png', client: 'Global Logistics Solutions', url: 'https://www.globallogisticssolutions.com',
    desc: 'Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.',
  },
  {
    title: 'Educational Platform for Online Learning',
    img: 'img8ows.png', client: 'EduConnect', url: 'https://www.educonnect.com',
    desc: 'EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.',
  },
  {
    title: 'Mobile App for Travel Planning',
    img: 'img9ows.png', client: 'WanderWise', url: 'https://www.wanderwise.com',
    desc: 'WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.',
  },
  {
    title: 'Web Application for Customer Relationship Management',
    img: 'img10ows.png', client: 'ConnectCRM', url: 'https://www.connectcrm.com',
    desc: 'ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.',
  },
]
</script>

<style scoped>
.works-hero {
  background-color: #0a0f0a;
  min-height: 30vh;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: clamp(60px, 8vw, 120px) clamp(16px, 5vw, 60px);
  position: relative; overflow: hidden;
}
.works-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.works-hero > * { position: relative; z-index: 1; }
.works-h1 { font-size: clamp(28px, 4vw, 48px); font-weight: 600; color: #fff; }
.works-p  { font-size: clamp(14px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); }

.works-intro { background-color: rgba(38,38,38,1); overflow: hidden; }
.intro-text  { border: 1px solid rgba(46,46,46,1); padding: clamp(24px, 4vw, 60px); }
.intro-h2    { font-size: clamp(24px, 3vw, 38px); font-weight: 600; color: #fff; }
.intro-p     { font-size: clamp(14px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); }
.intro-span  {
  font-size: clamp(15px, 1.8vw, 22px); font-weight: 400; color: #fff;
  background-color: rgba(46,46,46,1); border: 1px solid rgba(46,46,46,1);
  padding: 10px 14px; display: inline-block; margin: 20px 0;
}

.works-grid { align-items: stretch; overflow: hidden; }
.work-card-wrap { background-color: rgba(38,38,38,1); display: flex; flex-direction: column; border: 1px solid rgba(46,46,46,1); }
.work-h3 {
  font-size: clamp(14px, 1.5vw, 18px); font-weight: 500; color: rgba(152,152,154,1);
  margin: 0; padding: clamp(14px, 1.8vw, 22px) clamp(16px, 2vw, 24px);
  border-bottom: 1px solid rgba(46,46,46,1);
}
.work-card { background-color: rgba(38,38,38,1); overflow: hidden; flex: 1; display: flex; flex-direction: column; }
.work-img  { width: 100%; display: block; padding: clamp(12px, 1.5vw, 20px); }

.work-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: clamp(12px, 1.5vw, 18px) clamp(16px, 2vw, 24px);
  background-color: rgba(38,38,38,1);
}
.work-meta-left { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.work-client { font-size: clamp(15px, 1.6vw, 19px); font-weight: 600; color: #fff; margin: 0; }
.work-url-box {
  background-color: rgba(46,46,46,1);
  border: 1px solid rgba(60,60,60,1);
  padding: 5px 10px;
  display: inline-block;
  border-radius: 4px;
}
.work-url { font-size: 12px; color: rgba(152,152,154,1); word-break: break-all; }

.work-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  background-color: rgba(46,46,46,1);
  border: 1px solid rgba(60,60,60,1);
  border-radius: 6px;
  color: rgba(158, 255, 0, 1);
  text-decoration: none;
  transition: background-color 0.2s;
}
.work-arrow:hover { background-color: rgba(65,65,65,1); }

.work-desc { font-size: clamp(13px, 1.4vw, 16px); font-weight: 400; color: rgba(200,200,200,1); margin: 0; line-height: 1.6; padding: clamp(16px, 2vw, 24px); flex: 1; }

.works-cta {
  background-color: #0a0f0a;
  padding: clamp(50px, 8vw, 120px) clamp(16px, 10vw, 200px);
  border: 1px solid rgba(46,46,46,1);
  position: relative; overflow: hidden;
}
.works-cta::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.works-cta > * { position: relative; z-index: 1; }
.cta-h2 { font-size: clamp(22px, 3vw, 38px); font-weight: 600; color: #fff; }
.cta-p  { font-size: clamp(14px, 1.5vw, 18px); font-weight: 400; color: rgba(230,230,230,1); margin-bottom: 24px; }
.cta-btn {
  background-color: rgba(158,255,0,1); border: 1px solid rgba(158,255,0,1);
  border-radius: 8px; font-size: clamp(14px, 1.5vw, 18px); font-weight: 500;
  padding: 14px 28px; cursor: pointer;
}

@media (max-width: 768px) {
  .works-hero { padding: clamp(40px,6vw,60px) 16px; min-height: auto; }
  .intro-text { padding: 24px 16px; }
  .work-card-wrap { padding: 0; }
  .works-cta  { padding: 40px 16px; }
}

@media (max-width: 480px) {
  .works-hero { padding: 40px 16px; }
  .work-h3    { padding: 14px 16px; }
  .work-img   { padding: 10px; }
  .work-desc  { padding: 14px 16px; }
}
</style>
