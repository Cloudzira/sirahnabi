const list = document.getElementById("timelineList");
const modal = document.getElementById("eventModal");
const tabs = [...document.querySelectorAll(".period-tab")];
const searchInput = document.getElementById("eventSearch");
const countLabel = document.getElementById("eventCount");

// Tahun yang tidak ditulis dengan angka diberi posisi perkiraan agar urutan tetap masuk akal.
const approximateYear = { "yatim": 575, "perdagangan": 585, "hilful": 590, "arqam": 612, "isra": 620 };
const chronologicalEvents = [...SIRAH_EVENTS].sort((a,b) => {
  const ya = Number((a.year.match(/\d{3,4}/) || [])[0]) || approximateYear[a.id] || 9999;
  const yb = Number((b.year.match(/\d{3,4}/) || [])[0]) || approximateYear[b.id] || 9999;
  return ya - yb;
});
let activePeriod = "all";
let searchTerm = "";

function renderTimeline() {
  const normalized = searchTerm.trim().toLocaleLowerCase("id");
  const events = chronologicalEvents.filter(e => {
    const matchesPeriod = activePeriod === "all" || e.period === activePeriod;
    const haystack = [e.year,e.label,e.title,e.desc,e.summary].join(" ").toLocaleLowerCase("id");
    return matchesPeriod && (!normalized || haystack.includes(normalized));
  });
  countLabel.textContent = `${events.length} dari ${chronologicalEvents.length} peristiwa`;
  if (!events.length) {
    list.innerHTML = '<div class="empty-state">Tidak ada peristiwa yang cocok. Coba kata kunci lain.</div>';
    return;
  }
  list.innerHTML = events.map((e,i) => `
    <article class="timeline-card" style="--item-index:${i}">
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
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden"; document.getElementById("modalClose").focus();
}
function closeModal() {
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow = "";
}
tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(t => { t.classList.remove("selected"); t.setAttribute("aria-selected","false"); });
  tab.classList.add("selected"); tab.setAttribute("aria-selected","true");
  activePeriod = tab.dataset.period; renderTimeline();
}));
searchInput.addEventListener("input", e => { searchTerm = e.target.value; renderTimeline(); });
list.addEventListener("click", e => { const button = e.target.closest("[data-event]"); if (button) openEvent(button.dataset.event); });
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
const menuToggle = document.getElementById("menuToggle"); const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("eventTotal").textContent = chronologicalEvents.length;
renderTimeline();
