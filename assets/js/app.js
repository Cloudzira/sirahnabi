const list = document.getElementById("timelineList");
const modal = document.getElementById("eventModal");
const tabs = document.querySelectorAll(".period-tab");

function renderTimeline(period="all") {
  const events = SIRAH_EVENTS.filter(e => period === "all" || e.period === period);
  if (!events.length) {
    list.innerHTML = '<div class="empty-state">Belum ada peristiwa pada periode ini.</div>';
    return;
  }
  list.innerHTML = events.map(e => `
    <article class="timeline-card">
      <button type="button" data-event="${e.id}" aria-label="Baca ${e.title}">
        <span class="event-year">${e.year}<span class="event-period">${e.label}</span></span>
        <span><span class="event-title">${e.title}</span><span class="event-desc">${e.desc}</span></span>
        <span class="event-arrow">↗</span>
      </button>
    </article>`).join("");
}
function openEvent(id) {
  const e = SIRAH_EVENTS.find(item => item.id === id);
  if (!e) return;
  document.getElementById("modalMeta").textContent = `${e.year}  /  ${e.label}`;
  document.getElementById("modalTitle").textContent = e.title;
  document.getElementById("modalSummary").textContent = e.summary;
  document.getElementById("modalDetail").textContent = e.detail;
  document.getElementById("modalSource").textContent = e.source;
  document.getElementById("modalCaution").textContent = e.caution;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(t => t.classList.remove("selected"));
  tab.classList.add("selected");
  renderTimeline(tab.dataset.period);
}));
list.addEventListener("click", e => {
  const button = e.target.closest("[data-event]");
  if (button) openEvent(button.dataset.event);
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
renderTimeline();
