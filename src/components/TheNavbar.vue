<template>
  <header class="nav-header">
    <nav class="navbar navbar-expand-lg">
      <div class="nav-inner">

        <!-- Brand -->
        <router-link class="brand" to="/">
          <img src="/images/Logo.png" alt="SquareUp" class="brand-logo" />
        </router-link>

        <!-- Custom hamburger toggler -->
        <button
          class="nav-toggler"
          type="button"
          @click="toggleMenu"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <!-- Collapsible links -->
        <div class="nav-menu" :class="{ open: menuOpen }">
          <ul class="nav-links">
            <li v-for="link in navLinks" :key="link.to">
              <router-link
                class="nav-link pohes"
                :to="link.to"
                @click="menuOpen = false"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
          <div class="nav-cta">
            <router-link to="/contact" class="contact-btn" @click="menuOpen = false">Contact Us</router-link>
          </div>
        </div>

      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

const navLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/services', label: 'Services' },
  { to: '/works',    label: 'Work'     },
  { to: '/process',  label: 'Process'  },
  { to: '/about',    label: 'About'    },
  { to: '/careers',  label: 'Careers'  },
]
</script>

<style scoped>
/* ── Header shell ── */
.nav-header {
  background-color: rgba(38, 38, 38, 1);
  padding: 16px 50px;
  position: relative;
  z-index: 100;
  width: 100%;
}

.navbar {
  padding: 0;
}

.nav-inner {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
}

/* ── Brand ── */
.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo {
  width: 178px;
  height: 60px;
  object-fit: contain;
}

/* ── Custom hamburger button ── */
.nav-toggler {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 46px;
  height: 46px;
  background-color: rgba(46, 46, 46, 1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
}

.bar {
  display: block;
  width: 22px;
  height: 2.5px;
  background-color: rgba(158, 255, 0, 1);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

/* Animate to X when open */
.nav-toggler[aria-expanded="true"] .bar:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.nav-toggler[aria-expanded="true"] .bar:nth-child(2) {
  opacity: 0;
}
.nav-toggler[aria-expanded="true"] .bar:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* ── Nav menu (desktop) ── */
.nav-menu {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 32px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 4px;
  justify-content: center;
}

.nav-cta {
  display: flex;
  justify-content: flex-end;
}

/* ── Link styles ── */
.nav-link.pohes {
  font-size: 18px;
  font-weight: 500;
  color: rgba(230, 230, 230, 1) !important;
  padding: 6px 14px;
  border-radius: 8px;
  text-decoration: none;
  background-color: rgba(38, 38, 38, 1);
  transition: color 0.2s;
}
.nav-link.pohes:hover {
  color: rgba(158, 255, 0, 1) !important;
  text-decoration: underline;
}
/* Only the active route gets the grey pill */
.nav-link.pohes.router-link-exact-active {
  font-weight: 600;
  color: rgba(230, 230, 230, 1) !important;
  background-color: #686868;
  border-radius: 10px;
  text-decoration: none;
}

/* ── Contact button ── */
.contact-btn {
  display: inline-block;
  color: rgba(38, 38, 38, 1);
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  background-color: rgba(158, 255, 0, 1);
  border: 1px solid rgba(158, 255, 0, 1);
  padding: 8px 20px;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: opacity 0.2s;
}
.contact-btn:hover {
  opacity: 0.85;
  color: rgba(38, 38, 38, 1);
}

/* ── Mobile ── */
@media (max-width: 991px) {
  .nav-header {
    padding: 14px 20px;
  }

  .nav-inner {
    grid-template-columns: auto 1fr;
    justify-items: end;
  }

  /* Show the hamburger */
  .nav-toggler {
    display: flex;
  }

  /* Slide-down menu */
  .nav-menu {
    display: none;
    grid-template-columns: 1fr;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: rgba(38, 38, 38, 1);
    border-top: 1px solid rgba(46, 46, 46, 1);
    border-bottom: 1px solid rgba(46, 46, 46, 1);
    padding: 16px 20px 20px;
    z-index: 999;
    gap: 0;
  }

  .nav-menu.open {
    display: grid;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    gap: 4px;
    margin-bottom: 16px;
    justify-content: flex-start;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-link.pohes {
    display: block;
    width: 100%;
    padding: 10px 14px;
  }

  .nav-cta {
    width: 100%;
    justify-content: stretch;
  }

  .contact-btn {
    width: 100%;
    text-align: center;
    padding: 12px;
  }
}
</style>
