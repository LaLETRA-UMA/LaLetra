// Orden: de la más reciente a la más antigua.
// Para añadir una revista nueva, copia una línea y ponla arriba.
// id: la parte del enlace de Drive entre /d/ y /view
// num: número de la revista
// anio: año

const revistas = [
  { id: "12wK14J3tfXWuquhAuSleK6O7d6F7Oxh7", titulo: "La Letra #36", subtitulo: "Abril–Junio 2026", anio: 2026, num: 36 },
  { id: "1Dls0hejiNDjPFCzZoRbydMzs6tvbM6Os", titulo: "La Letra #35", subtitulo: "Febrero–Marzo 2026", anio: 2026, num: 35 },
  { id: "1Qob-Lwyqp_qS22E4BpMZKkWdZwxOg_wk", titulo: "La Letra #34", subtitulo: "Diciembre–Enero", anio: 2025, num: 34 },
  { id: "1W_JRlB0GflTo538NHFnoRCuh2apdAfl6", titulo: "La Letra #33", subtitulo: "Noviembre 2025", anio: 2025, num: 33 },
  { id: "1LQiVvt2r2ZfQC3qD6BMpL69ESHGNJ0bl", titulo: "La Letra #32", subtitulo: "Octubre 2025", anio: 2025, num: 32 },
  { id: "1p_qS5S_Vgub-J4yUvmIWuSvxEdz_Xtfv", titulo: "La Letra #31", subtitulo: "Junio 2025", anio: 2025, num: 31 },
  { id: "1VWgkCdkY2dFZoio7OlGJY5T7O3dtKolF", titulo: "La Letra #30", subtitulo: "Abril 2025", anio: 2025, num: 30 },
  { id: "14FvfQW5NZY5b1HvzTC6KgHBDJHerSiZK", titulo: "La Letra #29", subtitulo: "Abril 2025", anio: 2025, num: 29 },
  { id: "16jgQ48SEmQMwgndnH8fX3rreIyugwxR2", titulo: "La Letra #28", subtitulo: "Marzo 2025", anio: 2025, num: 28 },
  { id: "1GuNKMRIUVfJdYc8PvngEXadstgscMVSV", titulo: "La Letra #27", subtitulo: "Febrero 2025", anio: 2025, num: 27 },
  { id: "1bn-tX0-ilS5q4zBhl5uC3tX3KnLrL-cr", titulo: "La Letra #26", subtitulo: "Enero 2025", anio: 2025, num: 26 },
  { id: "1QX2TuynfHjT2pQzpO-ZId1WKEqE71kPy", titulo: "La Letra #25", subtitulo: "Diciembre 2024", anio: 2024, num: 25 },
  { id: "1G1n7vzBQmc2sicrYw1gQtzIDi5FvHYeJ", titulo: "La Letra #24", subtitulo: "Noviembre 2024", anio: 2024, num: 24 },
  { id: "1upuxSME27BM0KIviYCrf_qSwqUXfSg6Y", titulo: "La Letra #23", subtitulo: "Octubre 2024", anio: 2024, num: 23 },
  { id: "1deZqj8lLfvVA4067s87e1m8CywKWgDJ2", titulo: "La Letra #22", subtitulo: "Junio 2024", anio: 2024, num: 22 },
  { id: "1-Ol1nttRRCu1HzZ10rOGrkEykTNhveyM", titulo: "La Letra #21", subtitulo: "Mayo 2024", anio: 2024, num: 21 },
  { id: "1djiR7lVMh6b7AdqAmQZr-RsD-mU1zIKF", titulo: "La Letra #20", subtitulo: "Abril 2024", anio: 2024, num: 20 },
  { id: "19k4ceR2SDer4Bmxuf6-qAqmoP_F8Dj2A", titulo: "La Letra #19", subtitulo: "Marzo 2024", anio: 2024, num: 19 },
  { id: "1507UF_zBK56XynEu9dCSVkOfPYA6EPPV", titulo: "La Letra #18", subtitulo: "Febrero 2024", anio: 2024, num: 18 },
  { id: "14IqiTr76EJwlsd1qrmrE8yusJ0xF4uHl", titulo: "La Letra #17", subtitulo: "Enero 2024", anio: 2024, num: 17 },
  { id: "12TVzAQMpdfmfoMAEGxDrh5G4NZ4ebFQ6", titulo: "La Letra #16", subtitulo: "Diciembre 2023", anio: 2023, num: 16 },
  { id: "1JEwCi6JnSMpRkW1AVO7Gl4yNvR7qnGXb", titulo: "La Letra #15 Extras", subtitulo: "Noviembre 2023", anio: 2023, num: 15.5 },
  { id: "1LQad5C7E58oGGNEwsG5R6lQdqoD4ITZr", titulo: "La Letra #15", subtitulo: "Noviembre 2023", anio: 2023, num: 15 },
  { id: "17oE7pTZ2d3uP0bL-rVSdmSWuM9dsVLAl", titulo: "La Letra #14", subtitulo: "Octubre 2023", anio: 2023, num: 14 },
  { id: "1woJwFMM8CSjjcfVc3OJj49DQs_DGX2Fi", titulo: "La Letra #13", subtitulo: "Junio 2023", anio: 2023, num: 13 },
  { id: "13gzxEtI2l1F-jgz6CQOGe87nA8U4Ta2R", titulo: "La Letra #12", subtitulo: "Marzo 2023", anio: 2023, num: 12 },
  { id: "1DEJcZdOeRPEPbRtlkmygMavxD4HdqiFc", titulo: "La Letra #10 y 11", subtitulo: "Febrero 2023", anio: 2023, num: 11 },
  { id: "1Oaop6Ylv6-IqUJ5pmIUQ6uMJfqL-gcJV", titulo: "La Letra #9", subtitulo: "Diciembre 2022", anio: 2022, num: 9 },
  { id: "1qn_Y84V3SpZVBh9kA6Qzw0srnUP40qn-", titulo: "La Letra #8", subtitulo: "Noviembre 2022", anio: 2022, num: 8 },
  { id: "1uwDRBewo9_FXVeIE-TaTiKYQsB3NLgB9", titulo: "La Letra #7", subtitulo: "Octubre 2022", anio: 2022, num: 7 },
  { id: "1vbUEfwhou5nLw-wqUCTSfxgETNgqVrtc", titulo: "La Letra #6", subtitulo: "Junio 2022", anio: 2022, num: 6 },
  { id: "1J1F0I3n7YRTeI6WF-C3YdZTDZ52nEVkn", titulo: "La Letra #5", subtitulo: "Mayo 2022", anio: 2022, num: 5 },
  { id: "1peSK2WttWolTAOH7iyKBEm9g_FHpRGTa", titulo: "La Letra #4", subtitulo: "Abril 2022", anio: 2022, num: 4 },
  { id: "13C4sglyzwA7Gv3NZq0nmv7fF0GYXn_Pc", titulo: "La Letra #3", subtitulo: "Marzo 2022", anio: 2022, num: 3 },
  { id: "19XDkFzqzfVOS2Jrut39CgtNHcqT8wbG1", titulo: "La Letra #2", subtitulo: "Febrero 2022", anio: 2022, num: 2 },
  { id: "1IU6CF_C9iuTrNU7Cneh6bDdEHlB9Br7G", titulo: "La Letra #1", subtitulo: "Enero 2022", anio: 2022, num: 1 },
];

const driveView = (id) => `https://drive.google.com/file/d/${id}/view`;
const driveThumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

/* ---------- AÑO DEL COPYRIGHT ---------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- ÚLTIMA EDICIÓN CENTRADA ---------- */
const ultimaWrap = document.getElementById("ultima");
const ultima = revistas[0];

if (ultima && ultimaWrap) {
  const a = document.createElement("a");
  a.className = "item ultima-item";
  a.href = driveView(ultima.id);
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", `Leer ${ultima.titulo}, ${ultima.subtitulo}`);

  const cover = document.createElement("div");
  cover.className = "cover";

  const num = document.createElement("span");
  num.className = "num";
  num.textContent = `#${ultima.num}`;
  cover.appendChild(num);

  const img = new Image();
  img.alt = `Portada de ${ultima.titulo}`;
  img.loading = "eager";
  img.decoding = "async";
  img.src = driveThumb(ultima.id);
  img.onerror = () => {
    img.remove();
    cover.classList.add("no-img");
    cover.insertAdjacentHTML("beforeend", `<span class="fallback">${ultima.titulo}</span>`);
  };
  cover.appendChild(img);

  const overlay = document.createElement("span");
  overlay.className = "overlay";
  overlay.textContent = "Leer →";
  cover.appendChild(overlay);

  const t = document.createElement("div");
  t.className = "title";
  t.textContent = ultima.titulo;

  const s = document.createElement("div");
  s.className = "sub";
  s.textContent = ultima.subtitulo || "";

  a.append(cover, t, s);
  ultimaWrap.appendChild(a);
}

/* ---------- MENÚ LATERAL (HAMBURGUESA) ---------- */
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");
const overlayBg = document.getElementById("overlay");
const closeBtn = document.getElementById("closeDrawer");
const menuList = document.getElementById("menuList");

for (const r of revistas) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = driveView(r.id);
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = r.titulo;
  li.appendChild(link);
  menuList.appendChild(li);
}

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  hamburger.setAttribute("aria-expanded", "true");
  hamburger.classList.add("active");
  document.body.classList.add("drawer-open");
  overlayBg.hidden = false;
  requestAnimationFrame(() => overlayBg.classList.add("show"));
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.classList.remove("active");
  document.body.classList.remove("drawer-open");
  overlayBg.classList.remove("show");
  document.body.style.overflow = "";
  setTimeout(() => { overlayBg.hidden = true; }, 250);
}

hamburger.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
overlayBg.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
});