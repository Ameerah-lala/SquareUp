<template>
  <div class="cf-wrap">
    <form class="cf-form" @submit.prevent="handleSubmit" data-aos="fade-up">

      <!-- Row 1: Full Name + Email -->
      <div class="cf-row cf-row--split">
        <div class="cf-field">
          <label class="cf-label">Full Name</label>
          <input v-model="form.name" type="text" class="cf-input" placeholder="Type here" />
        </div>
        <div class="cf-divider-v"></div>
        <div class="cf-field">
          <label class="cf-label">Email</label>
          <input v-model="form.email" type="email" class="cf-input" placeholder="Type here" />
        </div>
      </div>

      <!-- Row 2: Why contacting -->
      <div class="cf-row">
        <label class="cf-label">Why are you contacting us?</label>
        <div class="cf-checks">
          <label v-for="reason in reasons" :key="reason" class="cf-check-item">
            <span class="cf-checkbox" :class="{ checked: form.reasons.includes(reason) }" @click="toggleReason(reason)">
              <svg v-if="form.reasons.includes(reason)" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L11 1" stroke="#9EFF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="cf-check-label">{{ reason }}</span>
          </label>
        </div>
      </div>

      <!-- Row 3: Budget slider -->
      <div class="cf-row">
        <label class="cf-label">Your Budget</label>
        <p class="cf-sublabel">Slide to indicate your budget range</p>
        <div class="cf-slider-wrap">
          <div class="cf-slider-track" ref="trackEl">
            <div class="cf-slider-fill" :style="fillStyle"></div>
            <div
              class="cf-thumb"
              :style="{ left: minPct + '%' }"
              @mousedown="startDrag('min', $event)"
              @touchstart.prevent="startDrag('min', $event)"
            ></div>
            <div
              class="cf-thumb"
              :style="{ left: maxPct + '%' }"
              @mousedown="startDrag('max', $event)"
              @touchstart.prevent="startDrag('max', $event)"
            ></div>
          </div>
          <div class="cf-slider-labels">
            <span>${{ budgetMin.toLocaleString() }}</span>
            <span>${{ budgetMax.toLocaleString() }}</span>
          </div>
        </div>
      </div>

      <!-- Row 4: Message -->
      <div class="cf-row">
        <label class="cf-label">Your Message</label>
        <textarea v-model="form.message" class="cf-textarea" placeholder="Type here" rows="4"></textarea>
      </div>

      <!-- Submit -->
      <div class="cf-submit-row">
        <button class="cf-submit" type="submit">Submit</button>
      </div>

    </form>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onUnmounted } from 'vue'

const reasons = ['Web Design', 'Collaboration', 'Mobile App Design', 'Others']

const form = reactive({
  name: '',
  email: '',
  reasons: ['Web Design'],
  message: '',
})

const MIN = 1000
const MAX = 10000
const STEP = 100

const budgetMin = ref(1000)
const budgetMax = ref(5000)
const trackEl   = ref(null)

const minPct = computed(() => ((budgetMin.value - MIN) / (MAX - MIN)) * 100)
const maxPct = computed(() => ((budgetMax.value - MIN) / (MAX - MIN)) * 100)

const fillStyle = computed(() => ({
  left:  minPct.value + '%',
  width: (maxPct.value - minPct.value) + '%',
}))

let dragging = null

function startDrag(thumb, e) {
  dragging = thumb
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup',   stopDrag)
  window.addEventListener('touchmove', onDrag, { passive: false })
  window.addEventListener('touchend',  stopDrag)
}

function onDrag(e) {
  if (!dragging || !trackEl.value) return
  e.preventDefault()
  const rect     = trackEl.value.getBoundingClientRect()
  const clientX  = e.touches ? e.touches[0].clientX : e.clientX
  const ratio    = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
  const raw      = MIN + ratio * (MAX - MIN)
  const stepped  = Math.round(raw / STEP) * STEP

  if (dragging === 'min') {
    budgetMin.value = Math.min(stepped, budgetMax.value - STEP)
  } else {
    budgetMax.value = Math.max(stepped, budgetMin.value + STEP)
  }
}

function stopDrag() {
  dragging = null
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup',   stopDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend',  stopDrag)
}

onUnmounted(stopDrag)

function toggleReason(reason) {
  const idx = form.reasons.indexOf(reason)
  if (idx === -1) form.reasons.push(reason)
  else form.reasons.splice(idx, 1)
}

function handleSubmit() {
  alert(`Thanks, ${form.name || 'there'}! We'll be in touch.`)
}
</script>

<style scoped>
/* ── Wrapper ── */
.cf-wrap {
  background-color: rgba(38, 38, 38, 1);
  padding: clamp(32px, 6vw, 80px) clamp(16px, 8vw, 120px);
  border: 1px solid rgba(46, 46, 46, 1);
}

.cf-form {
  border: 1px solid rgba(46, 46, 46, 1);
  background-color: rgba(28, 28, 28, 1);
}

/* ── Rows ── */
.cf-row {
  padding: clamp(20px, 3vw, 36px) clamp(20px, 4vw, 48px);
  border-bottom: 1px solid rgba(46, 46, 46, 1);
}

.cf-row--split {
  display: flex;
  align-items: stretch;
  padding: 0;
}

.cf-row--split .cf-field {
  flex: 1;
  padding: clamp(20px, 3vw, 36px) clamp(20px, 4vw, 48px);
}

.cf-divider-v {
  width: 1px;
  background-color: rgba(46, 46, 46, 1);
  flex-shrink: 0;
}

/* ── Labels ── */
.cf-label {
  display: block;
  font-size: clamp(14px, 1.4vw, 17px);
  font-weight: 500;
  color: #fff;
  margin-bottom: 12px;
}

.cf-sublabel {
  font-size: clamp(12px, 1.2vw, 14px);
  color: rgba(152, 152, 154, 1);
  margin: 0 0 20px;
}

/* ── Inputs ── */
.cf-input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(152, 152, 154, 1);
  font-size: clamp(13px, 1.3vw, 15px);
  padding: 0;
}

.cf-input::placeholder { color: rgba(100, 100, 102, 1); }

/* ── Checkboxes ── */
.cf-checks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 40px;
  margin-top: 4px;
}

.cf-check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.cf-checkbox {
  width: 18px;
  height: 18px;
  border: 1px solid rgba(80, 80, 82, 1);
  border-radius: 3px;
  background: rgba(36, 36, 36, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.15s;
}

.cf-checkbox.checked {
  border-color: rgba(158, 255, 0, 1);
  background: rgba(36, 36, 36, 1);
}

.cf-checkbox svg {
  width: 12px;
  height: 10px;
}

.cf-check-label {
  font-size: clamp(13px, 1.3vw, 15px);
  color: rgba(200, 200, 200, 1);
}

/* ── Dual-range slider ── */
.cf-slider-wrap { width: 100%; }

.cf-slider-track {
  position: relative;
  height: 4px;
  background: rgba(60, 60, 62, 1);
  border-radius: 2px;
  margin-bottom: 12px;
  user-select: none;
}

.cf-slider-fill {
  position: absolute;
  top: 0;
  height: 100%;
  background: rgba(158, 255, 0, 1);
  border-radius: 2px;
  pointer-events: none;
}

.cf-thumb {
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(158, 255, 0, 1);
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 0 0 3px rgba(158, 255, 0, 0.25);
  z-index: 2;
  transition: box-shadow 0.15s;
}

.cf-thumb:active {
  cursor: grabbing;
  box-shadow: 0 0 0 5px rgba(158, 255, 0, 0.3);
}

.cf-slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: clamp(12px, 1.2vw, 14px);
  color: rgba(152, 152, 154, 1);
  margin-top: 8px;
}

/* ── Textarea ── */
.cf-textarea {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  color: rgba(152, 152, 154, 1);
  font-size: clamp(13px, 1.3vw, 15px);
  padding: 0;
  font-family: inherit;
}

.cf-textarea::placeholder { color: rgba(100, 100, 102, 1); }

/* ── Submit ── */
.cf-submit-row {
  display: flex;
  justify-content: center;
  padding: clamp(24px, 3vw, 40px);
}

.cf-submit {
  background-color: rgba(158, 255, 0, 1);
  border: none;
  border-radius: 6px;
  font-size: clamp(14px, 1.4vw, 16px);
  font-weight: 600;
  padding: 12px 48px;
  cursor: pointer;
  color: #000;
  transition: opacity 0.2s;
}

.cf-submit:hover { opacity: 0.85; }

/* ── Responsive ── */
@media (max-width: 640px) {
  .cf-wrap { padding: 24px 16px; }

  .cf-row--split {
    flex-direction: column;
  }

  .cf-divider-v {
    width: 100%;
    height: 1px;
  }

  .cf-checks {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
