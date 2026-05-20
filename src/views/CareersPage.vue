<template>
  <div class="container-fluid px-0">
    <TheNavbar />

    <!-- Hero -->
    <section class="careers-hero text-center">
      <h1 class="careers-h1" data-aos="fade-up">Join Our Team at SquareUp</h1>
      <p class="careers-p" data-aos="fade-up" data-aos-delay="100">Unlock your potential and join our team of innovators and problem solvers.</p>
    </section>

    <!-- Welcome / Why Work -->
    <section class="welcome-section">
      <div class="welcome-header" data-aos="fade-up">
        <h2 class="welcome-h2">Welcome to SquareUp, where talent meets opportunity!</h2>
        <p class="welcome-p">At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.</p>
      </div>
      <div class="why-label" data-aos="fade-up">
        <span>Why Work at SquareUp?</span>
      </div>
      <div class="row g-0">
        <div v-for="(benefit, i) in benefits" :key="benefit.title" class="col-md-6 benefit-card" data-aos="fade-up" :data-aos-delay="(i % 2) * 100">
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Current Openings -->
    <section class="jobs-section">
      <div class="jobs-header" data-aos="fade-up">
        <h2 class="jobs-h2">Current Openings</h2>
        <p class="jobs-p">We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.</p>
      </div>
      <div v-for="dept in jobDepts" :key="dept.title" class="job-dept">
        <div class="job-dept-header" data-aos="fade-up">
          <h3 class="job-dept-title">{{ dept.title }}</h3>
        </div>
        <div class="row g-0">
          <div v-for="(job, i) in dept.jobs" :key="job.title" class="col-md-4 job-card" :data-aos="i % 2 === 0 ? 'flip-right' : 'flip-left'" :data-aos-delay="i * 100">
            <img :src="`/images/${job.img}`" :alt="job.title" class="job-img" />
            <h4 class="job-title">{{ job.title }}</h4>
            <p class="job-desc">{{ job.desc }}</p>
            <button class="job-btn">Apply Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="career-cta-banner">
      <div class="cta-top" data-aos="fade-up">
        <img src="/images/section6logo.png" alt="SquareUp" class="cta-logo" />
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
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'

const benefits = [
  { title: 'Innovative and Impactful Projects', desc: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference." },
  { title: 'Supportive Environment',            desc: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference." },
  { title: 'Continuous Learning and Growth',    desc: "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies." },
  { title: 'Challenging and Rewarding Work',    desc: "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life." },
]

const jobDepts = [
  {
    title: 'Design Job Openings',
    jobs: [
      { img: '114osp.png', title: 'UI Designer',    desc: 'Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.' },
      { img: '124osp.png', title: 'UX Designer',    desc: 'Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.' },
      { img: '134osp.png', title: 'Design Head',    desc: 'Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.' },
    ],
  },
  {
    title: 'Development Job Openings',
    jobs: [
      { img: '414osp.png', title: 'Front-End Developer',  desc: 'Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.' },
      { img: '424osp.png', title: 'Back-End Developer',   desc: 'Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.' },
      { img: '434osp.png', title: 'Full Stack Developer', desc: 'Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive solutions.' },
    ],
  },
  {
    title: 'Management Job Openings',
    jobs: [
      { img: '714osp.png', title: 'BA Manager',      desc: 'Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.' },
      { img: '724osp.png', title: 'Project Manager', desc: 'Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.' },
      { img: '734osp.png', title: 'HR Manager',      desc: 'Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.' },
    ],
  },
  {
    title: 'QA Job Openings',
    jobs: [
      { img: '914osp.png', title: 'QA Tester',     desc: 'Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.' },
      { img: '924osp.png', title: 'SQL Tester',    desc: 'Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.' },
      { img: '934osp.png', title: 'Manual Tester', desc: 'Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.' },
    ],
  },
]

const perks = [
  { emoji: '🚀', title: 'Impactful Work',           desc: "Every project you work on ships to real users. You'll see the direct impact of your contributions on products used by thousands of people worldwide." },
  { emoji: '🧠', title: 'Continuous Learning',      desc: 'We invest in your growth with learning budgets, conference attendance, internal knowledge-sharing sessions, and access to the latest tools and technologies.' },
  { emoji: '🤝', title: 'Collaborative Culture',    desc: 'No silos here. Designers, engineers, and project managers work side by side from day one, sharing ideas and building together as a unified team.' },
  { emoji: '⚖️', title: 'Work-Life Balance',        desc: "Flexible hours, remote-friendly policies, and a culture that respects your time outside of work. We believe sustainable pace leads to better outcomes." },
  { emoji: '💰', title: 'Competitive Compensation', desc: 'We offer market-leading salaries, performance bonuses, equity options, and a comprehensive benefits package including health, dental, and vision.' },
  { emoji: '🌍', title: 'Remote Friendly',          desc: 'Work from anywhere in the world. We have team members across multiple time zones and have built our processes to support fully distributed collaboration.' },
]

const roles = [
  { dept: 'Design',             title: 'Senior UI/UX Designer',          type: 'Full-time', location: 'Remote'  },
  { dept: 'Engineering',        title: 'Frontend Engineer (Vue / React)', type: 'Full-time', location: 'Remote'  },
  { dept: 'Engineering',        title: 'Backend Engineer (Node.js)',      type: 'Full-time', location: 'Hybrid'  },
  { dept: 'Project Management', title: 'Technical Project Manager',       type: 'Full-time', location: 'Remote'  },
  { dept: 'Design',             title: 'Brand & Motion Designer',         type: 'Contract',  location: 'Remote'  },
  { dept: 'Engineering',        title: 'Mobile Developer (React Native)', type: 'Full-time', location: 'Remote'  },
  { dept: 'Growth',             title: 'Digital Marketing Specialist',    type: 'Full-time', location: 'On-site' },
  { dept: 'Engineering',        title: 'DevOps / Cloud Engineer',         type: 'Full-time', location: 'Remote'  },
]
</script>

<style scoped>
/* ── Hero ── */
.careers-hero {
  background-color: #080c0a;
  min-height: 35vh;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: clamp(60px,8vw,120px) clamp(16px,6vw,80px);
  border: 1px solid rgba(46,46,46,1);
  position: relative; overflow: hidden;
}
.careers-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 90% at 65% 50%, rgba(158,255,0,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(80,160,60,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.careers-hero > * { position: relative; z-index: 1; }
.careers-h1 { font-size: clamp(26px,4vw,48px); font-weight: 700; color: #fff; margin-bottom: 14px; }
.careers-p  { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(200,200,200,1); max-width: 560px; margin: 0 auto; }

/* ── Welcome ── */
.welcome-section { background-color: rgba(38,38,38,1); overflow: hidden; }
.welcome-header  { border: 1px solid rgba(46,46,46,1); border-bottom: none; padding: clamp(40px,6vw,80px) clamp(16px,6vw,80px) clamp(20px,3vw,32px); }
.welcome-h2 { font-size: clamp(22px,3vw,38px); font-weight: 700; color: #fff; margin-bottom: 20px; line-height: 1.2; }
.welcome-p  { font-size: clamp(14px,1.5vw,16px); font-weight: 400; color: rgba(200,200,200,1); opacity: 0.85; max-width: 700px; line-height: 1.7; margin: 0; }
.why-label  { border-left: 1px solid rgba(46,46,46,1); border-right: 1px solid rgba(46,46,46,1); border-bottom: 1px solid rgba(46,46,46,1); padding: 0 clamp(16px,6vw,80px) 16px; background-color: rgba(38,38,38,1); }
.why-label span { display: inline-block; font-size: clamp(13px,1.4vw,16px); font-weight: 500; color: rgba(200,200,200,1); background-color: rgba(46,46,46,1); padding: 8px 16px; border-radius: 4px; }
.benefit-card  { border: 1px solid rgba(46,46,46,1); padding: clamp(40px,5vw,70px) clamp(20px,5vw,60px); }
.benefit-title { font-size: clamp(18px,2vw,26px); font-weight: 600; color: rgba(216,255,153,1); margin-bottom: 24px; line-height: 1.2; }
.benefit-desc  { font-size: clamp(13px,1.4vw,16px); font-weight: 400; color: rgba(200,200,200,1); opacity: 0.8; line-height: 1.7; margin: 0; }

/* ── Job Openings ── */
.jobs-section { background-color: rgba(38,38,38,1); overflow: hidden; }
.jobs-header  { border: 1px solid rgba(46,46,46,1); padding: clamp(40px,6vw,70px) clamp(20px,5vw,60px); }
.jobs-h2 { font-size: clamp(22px,3vw,36px); font-weight: 500; color: #fff; margin-bottom: 16px; }
.jobs-p  { font-size: clamp(13px,1.4vw,15px); font-weight: 400; color: rgba(180,180,180,1); line-height: 1.7; max-width: 900px; margin: 0; }
.job-dept-header { padding: clamp(16px,2.5vw,28px) clamp(20px,5vw,60px); border: 1px solid rgba(46,46,46,1); background-color: rgba(38,38,38,1); }
.job-dept-title  { font-size: clamp(15px,1.6vw,20px); font-weight: 500; color: rgba(152,152,154,1); margin: 0; }
.job-card  { border: 1px solid rgba(46,46,46,1); padding: clamp(24px,4vw,50px); display: flex; flex-direction: column; background-color: rgba(36,36,36,0.6); }
.job-img   { width: 100px; height: 100px; object-fit: contain; padding: 20px; border: 1px solid rgba(46,46,46,1); border-radius: 10px; background: rgba(36,36,36,1); margin-bottom: 20px; }
.job-title { font-size: clamp(16px,1.8vw,22px); font-weight: 600; color: #fff; margin-bottom: 14px; }
.job-desc  { font-size: clamp(13px,1.3vw,15px); font-weight: 400; color: rgba(200,200,200,1); line-height: 1.7; flex: 1; margin-bottom: 24px; }
.job-btn   { padding: 14px 16px; background-color: rgba(46,46,46,1); border: 1px solid rgba(60,60,60,1); font-size: clamp(13px,1.3vw,15px); font-weight: 500; color: #fff; width: 100%; cursor: pointer; border-radius: 6px; transition: background-color 0.2s, color 0.2s, border-color 0.2s; margin-top: auto; }
.job-btn:hover { background-color: rgba(158,255,0,1); color: rgba(38,38,38,1); border-color: rgba(158,255,0,1); }

/* ── CTA Banner ── */
.career-cta-banner {
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
.cta-logo { width: 80px; height: 80px; object-fit: contain; border-radius: 16px; flex-shrink: 0; }
.cta-text  { display: flex; flex-direction: column; gap: 10px; }
.cta-h3    { font-size: clamp(15px,1.6vw,20px); font-weight: 600; color: rgba(152,152,154,1); margin: 0; line-height: 1.4; }
.cta-p     { font-size: clamp(12px,1.2vw,14px); font-weight: 400; color: rgba(152,152,154,1); margin: 0; line-height: 1.6; }
.cta-bottom {
  display: flex;
  align-items: center;
  gap: clamp(12px,2vw,24px);
  flex-wrap: wrap;
  border: 1px solid rgba(46,46,46,1);
  margin-top: clamp(12px,2vw,20px);
  padding: clamp(14px,2vw,22px) clamp(20px,3vw,40px);
}
.cta-label {
  font-size: clamp(12px,1.1vw,14px); font-weight: 400; color: rgba(152,152,154,1);
  white-space: nowrap; flex-shrink: 0;
}
.cta-tagline {
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

/* ── Why Join ── */
.why-section { background-color: rgba(38,38,38,1); }
.why-header  { border: 1px solid rgba(46,46,46,1); padding: clamp(40px,6vw,80px) clamp(16px,8vw,200px); }
.why-h2 { font-size: clamp(26px,4vw,48px); font-weight: 600; color: #fff; }
.why-p  { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(230,230,230,1); }
.perk-card  { border: 1px solid rgba(46,46,46,1); padding: clamp(24px,4vw,60px) clamp(20px,4vw,50px); }
.perk-icon  { font-size: clamp(24px,3vw,36px); margin-right: 16px; line-height: 1; }
.perk-title { font-size: clamp(18px,2vw,24px); font-weight: 600; color: #fff; margin: 0; }
.perk-desc  { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(230,230,230,1); }

/* ── Open Roles ── */
.roles-section { background-color: rgba(38,38,38,1); }
.roles-header  { border: 1px solid rgba(46,46,46,1); padding: clamp(40px,6vw,80px) clamp(16px,8vw,200px); }
.roles-h2 { font-size: clamp(26px,4vw,48px); font-weight: 600; color: #fff; }
.roles-p  { font-size: clamp(14px,1.5vw,18px); font-weight: 400; color: rgba(230,230,230,1); }
.roles-list { display: flex; flex-direction: column; }
.role-card  { display: flex; align-items: center; justify-content: space-between; padding: clamp(20px,3vw,36px) clamp(16px,4vw,60px); border: 1px solid rgba(46,46,46,1); transition: background-color 0.2s; gap: 16px; }
.role-card:hover { background-color: rgba(46,46,46,0.5); }
.role-dept  { font-size: 13px; font-weight: 600; color: rgba(158,255,0,1); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; display: block; }
.role-title { font-size: clamp(16px,2vw,22px); font-weight: 600; color: #fff; margin: 0 0 12px; }
.role-tags  { display: flex; gap: 10px; flex-wrap: wrap; }
.tag { font-size: 13px; font-weight: 500; color: rgba(230,230,230,1); background-color: rgba(46,46,46,1); border: 1px solid rgba(70,70,70,1); padding: 4px 12px; border-radius: 20px; }
.apply-btn  { background-color: transparent; border: 1px solid rgba(158,255,0,1); color: rgba(158,255,0,1); font-size: clamp(14px,1.5vw,16px); font-weight: 500; padding: 10px 28px; border-radius: 8px; cursor: pointer; white-space: nowrap; transition: background-color 0.2s, color 0.2s; flex-shrink: 0; }
.apply-btn:hover { background-color: rgba(158,255,0,1); color: rgba(38,38,38,1); }

/* ── Responsive ── */
@media (max-width: 768px) {
  .careers-hero   { padding: clamp(40px,6vw,60px) 16px; min-height: auto; }
  .welcome-header { padding: 30px 16px 20px; }
  .why-label      { padding: 0 16px 16px; }
  .benefit-card   { padding: 28px 16px; }
  .jobs-header    { padding: 30px 16px; }
  .job-dept-header{ padding: 14px 16px; }
  .job-card       { padding: 20px 16px; }
  .cta-top        { flex-direction: column; align-items: center; text-align: center; gap: 16px; padding-bottom: 24px; }
  .cta-bottom     { flex-direction: column; align-items: center; text-align: center; margin-top: 24px; gap: 12px; }
  .cta-tagline    { width: 100%; text-align: center; font-size: 13px; white-space: normal; }
  .cta-start-btn  { width: 100%; text-align: center; }
  .why-header     { padding: 40px 16px; }
  .perk-card      { padding: 28px 16px; }
  .roles-header   { padding: 40px 16px; }
  .role-card      { flex-direction: column; align-items: flex-start; gap: 16px; padding: 24px 16px; }
  .apply-btn      { width: 100%; text-align: center; }
}

@media (max-width: 480px) {
  .careers-hero { padding: 40px 16px; }
  .why-header   { padding: 30px 16px; }
  .roles-header { padding: 30px 16px; }
}
</style>
