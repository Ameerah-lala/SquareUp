<template>
  <footer class="site-footer">

    <!-- Top row: logo | nav links | stay connected -->
    <div class="footer-top">
      <!-- Logo -->
      <router-link to="/" class="footer-brand">
        <img src="/images/Logo.png" alt="SquareUp" class="footer-logo" />
      </router-link>

      <!-- Nav links -->
      <nav class="footer-nav">
        <router-link
          v-for="link in footerLinks"
          :key="link.to"
          :to="link.to"
          class="footer-link"
        >{{ link.label }}</router-link>
      </nav>

      <!-- Stay Connected + socials -->
      <div class="footer-social">
        <span class="social-label">Stay Connected</span>
        <div class="social-icons">
          <!-- Facebook -->
          <a href="#" aria-label="Facebook" class="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <!-- X / Twitter -->
          <a href="#" aria-label="X" class="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="#" aria-label="LinkedIn" class="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom row: contact info | copyright -->
    <div class="footer-bottom">
      <div class="footer-contact">
        <a href="mailto:hello@squareup.com" class="contact-item">
          <!-- Email icon -->
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" class="contact-icon-svg">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span>hello@squareup.com</span>
        </a>
        <a href="tel:+919181323230" class="contact-item">
          <!-- Phone icon -->
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" class="contact-icon-svg">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
          </svg>
          <span>+91 91813 23 2309</span>
        </a>
        <span class="contact-item">
          <!-- Location icon -->
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" class="contact-icon-svg">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Somewhere in the World</span>
        </span>
      </div>
      <p class="footer-copy">© 2023 SquareUp. All rights reserved.</p>
    </div>

  </footer>
</template>

<script setup>
const footerLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/services', label: 'Services' },
  { to: '/works',    label: 'Work'     },
  { to: '/process',  label: 'Process'  },
  { to: '/about',    label: 'About'    },
  { to: '/careers',  label: 'Careers'  },
  { to: '/contact',  label: 'Contact'  },
]
</script>

<style scoped>
.site-footer {
  background-color: rgba(38, 38, 38, 1);
  border: 1px solid rgba(46, 46, 46, 1);
}

/* ── Top row ── */
.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px clamp(16px, 4vw, 60px);
  border-bottom: 1px solid rgba(46, 46, 46, 1);
}

.footer-brand { flex-shrink: 0; text-decoration: none; display: flex; align-items: center; }
.footer-logo  { height: 40px; width: auto; object-fit: contain; }

/* Nav links */
.footer-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 6px;
  justify-content: center;
  flex: 1;
}
.footer-link {
  font-size: clamp(12px, 1.1vw, 14px);
  font-weight: 500;
  color: rgba(200, 200, 200, 1);
  text-decoration: none;
  padding: 4px 8px;
  transition: color 0.2s;
  white-space: nowrap;
}
.footer-link:hover,
.footer-link.router-link-exact-active { color: rgba(230, 230, 230, 1); }

/* Social */
.footer-social {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border: 1px solid rgba(46, 46, 46, 1);
  padding: 10px 16px;
  border-radius: 10px;
}
.social-label {
  font-size: clamp(12px, 1.1vw, 14px);
  font-weight: 500;
  color: rgba(200, 200, 200, 1);
  white-space: nowrap;
}
.social-icons { display: flex; align-items: center; gap: 8px; }

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background-color: rgba(46, 46, 46, 1);
  color: rgba(158, 255, 0, 1);
  text-decoration: none;
  transition: background-color 0.2s;
  flex-shrink: 0;
}
.social-btn:hover { background-color: rgba(65, 65, 65, 1); color: rgba(158, 255, 0, 1); }

/* ── Bottom row ── */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px clamp(16px, 4vw, 60px);
}

.footer-contact {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 28px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: clamp(11px, 1vw, 13px);
  color: rgba(180, 180, 180, 1);
  text-decoration: none;
  white-space: nowrap;
}
.contact-item:hover { color: rgba(230, 230, 230, 1); }
.contact-icon-svg {
  flex-shrink: 0;
  color: rgba(130, 130, 132, 1);
}

.footer-copy {
  font-size: clamp(11px, 1vw, 13px);
  color: rgba(130, 130, 132, 1);
  margin: 0;
  white-space: nowrap;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .site-footer {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Top block: bordered box, everything centered */
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
    padding: 28px 20px;
    border: 1px solid rgba(46, 46, 46, 1);
  }

  .footer-brand { justify-content: center; }

  .footer-nav {
    justify-content: center;
    flex: unset;
    gap: 6px 12px;
  }

  /* Social: remove the pill border on mobile, just center it */
  .footer-social {
    flex-direction: column;
    align-items: center;
    border: none;
    padding: 0;
    gap: 14px;
  }

  .social-icons { gap: 12px; }

  .social-btn {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    color: rgba(158, 255, 0, 1);
  }

  /* Bottom block: bordered box, everything centered */
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 0;
    border: 1px solid rgba(46, 46, 46, 1);
    margin-top: 0;
  }

  .footer-contact {
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 100%;
  }

  .contact-item {
    justify-content: center;
    width: 100%;
    padding: 18px 20px;
    border-bottom: 1px solid rgba(46, 46, 46, 1);
    font-size: 14px;
    color: rgba(200, 200, 200, 1);
  }

  .contact-icon-svg { color: rgba(158, 255, 0, 1); }

  .footer-copy {
    padding: 16px 20px;
    text-align: center;
    width: 100%;
    font-size: 12px;
  }
}
</style>
