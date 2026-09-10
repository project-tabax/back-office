/* =====================================================================
   TABAX CONSTRUIRE — Back-Office — Application (SPA, sans backend)
   ===================================================================== */

/* ---------- Icônes (Feather-style, stroke currentColor) ---------- */
const IC = {
  dash:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>',
  users:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>',
  card:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
  bell:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  plus:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  dots:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
  eye:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg>',
  edit:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>',
  pause:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  play:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  trash:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  x:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  back:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  mail:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
  sms:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  menu:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  up:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
  qr:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><line x1="14" y1="14" x2="14" y2="21"/><line x1="21" y1="14" x2="21" y2="21"/><line x1="17" y1="17" x2="17" y2="17"/></svg>',
  file:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  coins:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>',
  clock:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  ban:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
};

/* ---------- Helpers rendu ---------- */
const $ = s => document.querySelector(s);
function h(strings, ...vals){ return strings.map((s,i)=> s + (vals[i]??"")).join(""); }
function badge(meta){ return `<span class="badge badge--${meta.cls}">${meta.label}</span>`; }
function payChip(key){ const p = PAY_METHODS[key]; return `<span class="pay"><span class="pay__logo" style="background:${p.color}">${p.short}</span>${p.name}</span>`; }

/* ---------- État de navigation ---------- */
const ROUTES = {
  dashboard:  { title: "Tableau de bord", crumb: "Accueil", render: renderDashboard },
  adherents:  { title: "Gestion des adhérents", crumb: "Administration / Adhérents", render: renderAdherents },
  cotisations:{ title: "Cotisations", crumb: "Administration / Cotisations", render: renderCotisations },
  cartes:     { title: "Cartes de membre", crumb: "Administration / Cartes", render: renderCartes },
  notifications:{ title: "Notifications", crumb: "Administration / Notifications", render: renderNotifications },
  rapports:   { title: "Rapports & Exports", crumb: "Administration / Rapports", render: renderRapports },
  parametres: { title: "Paramètres", crumb: "Administration / Paramètres", render: renderParametres },
};

const NAV = [
  { group: "Général", items: [
    { key:"dashboard", label:"Tableau de bord", icon:IC.dash },
  ]},
  { group: "Gestion", items: [
    { key:"adherents", label:"Adhérents", icon:IC.users, badge:()=>STATS.attente },
    { key:"cotisations", label:"Cotisations", icon:IC.wallet },
    { key:"cartes", label:"Cartes de membre", icon:IC.card },
    { key:"notifications", label:"Notifications", icon:IC.bell, badge:()=>NOTIFS.filter(n=>n.status==='attente').length },
    { key:"rapports", label:"Rapports & Exports", icon:IC.report },
  ]},
  { group: "Système", items: [
    { key:"parametres", label:"Paramètres", icon:IC.settings },
  ]},
];

let current = "dashboard";
let subview = null; // {type, id}

/* ---------- Sidebar & header ---------- */
function renderSidebar(){
  const nav = NAV.map(g => `
    <div class="sidebar__group-label">${g.group}</div>
    ${g.items.map(it => {
      const b = it.badge ? it.badge() : 0;
      return `<button class="nav-item ${current===it.key?'active':''}" data-route="${it.key}">
        ${it.icon}<span>${it.label}</span>${b?`<span class="nav-item__badge">${b}</span>`:''}
      </button>`;
    }).join("")}
  `).join("");
  $("#sidebar").innerHTML = `
    <div class="sidebar__brand">
      <div class="sidebar__logo">T</div>
      <div>
        <div class="sidebar__brand-name">Tabax Construire</div>
        <div class="sidebar__brand-sub">Back-Office</div>
      </div>
    </div>
    <nav class="sidebar__nav">${nav}</nav>
    <div class="sidebar__user">
      <img src="https://i.pravatar.cc/80?img=12" alt="">
      <div style="flex:1">
        <div class="sidebar__user-name">Souleymane K.</div>
        <div class="sidebar__user-role">Administrateur</div>
      </div>
      <button class="sidebar__logout" title="Déconnexion" onclick="toast('Déconnexion (démo)','info')">${IC.logout}</button>
    </div>`;
  $("#sidebar").querySelectorAll("[data-route]").forEach(b => b.onclick = () => go(b.dataset.route));
}

function renderHeader(){
  const r = ROUTES[current];
  $("#header").innerHTML = `
    <button class="header__burger" onclick="toggleNav()">${IC.menu}</button>
    <div class="header__titles">
      <div class="header__breadcrumb">${r.crumb}</div>
      <div class="header__title">${r.title}</div>
    </div>
    <div class="header__search">
      ${IC.search}
      <input id="globalSearch" placeholder="Recherche globale : adhérent, matricule, transaction…">
    </div>
    <button class="header__icon-btn" onclick="go('notifications')" title="Notifications">${IC.bell}<span class="dot"></span></button>
    <div class="header__profile" onclick="toast('Profil administrateur (démo)','info')">
      <img src="https://i.pravatar.cc/80?img=12" alt="">
      <div>
        <div class="header__profile-name">Souleymane K.</div>
        <div class="header__profile-role">Administrateur</div>
      </div>
    </div>`;
  const gs = $("#globalSearch");
  gs.oninput = () => { if(current!=='adherents'){ go('adherents'); } setTimeout(()=>{ const t=$("#adhSearch"); if(t){ t.value=gs.value; state.adh.q=gs.value; renderCurrent(); } },0); };
}

/* ---------- Routeur ---------- */
function go(route){ current = route; subview = null; scrollTo(0,0); renderAll(); closeNav(); }
function renderAll(){ renderSidebar(); renderHeader(); renderCurrent(); }
function renderCurrent(){ $("#content").innerHTML = subview ? subview.render() : ROUTES[current].render(); if(subview&&subview.after) subview.after(); }

/* ============================ DASHBOARD ============================ */
function renderDashboard(){
  const kpis = [
    { label:"Total des adhérents", value:STATS.total.toLocaleString('fr-FR'), icon:IC.users, accent:"var(--primary)", soft:"var(--primary-soft)", delta:"+12,5 %", up:true },
    { label:"Adhérents actifs", value:STATS.actifs.toLocaleString('fr-FR'), icon:IC.check, accent:"var(--success)", soft:"var(--success-soft)", delta:"+8,2 %", up:true },
    { label:"Adhésions en attente", value:STATS.attente.toLocaleString('fr-FR'), icon:IC.clock, accent:"var(--warning)", soft:"var(--warning-soft)", delta:"+3,1 %", up:true },
    { label:"Adhérents suspendus", value:STATS.suspendus.toLocaleString('fr-FR'), icon:IC.ban, accent:"var(--danger)", soft:"var(--danger-soft)", delta:"-1,4 %", up:false },
    { label:"Cotisations encaissées", value:`${(STATS.cotisations/1000000).toFixed(1)}M<small> FCFA</small>`, icon:IC.coins, accent:"var(--secondary)", soft:"#e7ecf3", delta:"+15,7 %", up:true },
  ];
  const maxAdh = Math.max(...ADHESIONS_MENSUELLES.map(d=>d.v));
  const regions = regionCounts().slice(0,6);
  const maxReg = Math.max(...regions.map(r=>r.count));
  const lastMembers = [...MEMBERS].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5);
  const lastTx = TX.slice(0,5);

  return h`
  <div class="page-intro">
    <h2>Bonjour Souleymane 👋</h2>
    <p>Voici l'activité de la plateforme d'adhésion Tabax Construire.</p>
  </div>

  <div class="kpi-grid">
    ${kpis.map(k=>`
      <div class="kpi" style="--kpi-accent:${k.accent};--kpi-soft:${k.soft}">
        <div class="kpi__top">
          <div class="kpi__icon">${k.icon}</div>
        </div>
        <div class="kpi__label">${k.label}</div>
        <div class="kpi__value">${k.value}</div>
        <div class="kpi__delta ${k.up?'up':'down'}"><span class="kpi__arrow">${k.up?'▲':'▼'}</span> ${k.delta} <span>vs mois préc.</span></div>
      </div>`).join("")}
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card__head"><h3>Évolution des adhésions</h3><span class="badge badge--neutral badge--plain card__action">2026</span></div>
      <div class="card__body">
        <div class="bars">
          ${ADHESIONS_MENSUELLES.map(d=>`
            <div class="bars__col">
              <div class="bars__bar" data-v="${d.v} adhésions" style="height:${Math.round(d.v/maxAdh*100)}%"></div>
              <div class="bars__x">${d.m}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__head"><h3>Répartition par région</h3></div>
      <div class="card__body">
        <div class="region-list">
          ${regions.map(r=>`
            <div class="region-row">
              <span class="rn">${r.region}</span>
              <div class="region-bar"><span style="width:${Math.round(r.count/maxReg*100)}%"></span></div>
              <span class="rv">${r.count}</span>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card__head"><h3>Dernières adhésions</h3>
        <button class="btn btn--ghost btn--sm card__action" onclick="go('adherents')">Voir tous les adhérents</button></div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Adhérent</th><th>Matricule</th><th>Région</th><th>Date</th><th>Statut</th></tr></thead>
          <tbody>
            ${lastMembers.map(m=>`
              <tr style="cursor:pointer" onclick="openMember(${m.id})">
                <td><div class="cell-member"><img src="${m.photo}"><div><div class="nm">${m.name}</div></div></div></td>
                <td class="mono">${m.matricule}</td><td>${m.region}</td><td>${frDate(m.date)}</td>
                <td>${badge(STATUS_META[m.status])}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card__head"><h3>Dernières transactions</h3>
        <button class="btn btn--ghost btn--sm card__action" onclick="go('cotisations')">Voir tout</button></div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Référence</th><th>Adhérent</th><th>Montant</th><th>Moyen</th><th>Statut</th></tr></thead>
          <tbody>
            ${lastTx.map(t=>`
              <tr style="cursor:pointer" onclick="openTx('${t.ref}')">
                <td class="mono">${t.ref}</td>
                <td>${t.member}</td>
                <td class="amount">${fcfa(t.amount)}</td>
                <td>${payChip(t.method)}</td>
                <td>${badge(TX_STATUS_META[t.status])}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

/* ============================ ADHÉRENTS ============================ */
const state = {
  adh: { q:"", region:"", status:"", page:1, per:8 },
  cot: { q:"", method:"", status:"", page:1, per:8 },
  notif: { channel:"all" },
};

function filteredMembers(){
  const s = state.adh;
  return MEMBERS.filter(m =>
    (!s.q || (m.name+m.matricule+m.phone).toLowerCase().includes(s.q.toLowerCase())) &&
    (!s.region || m.region===s.region) &&
    (!s.status || m.status===s.status)
  );
}

function renderAdherents(){
  const s = state.adh;
  const list = filteredMembers();
  const pages = Math.max(1, Math.ceil(list.length/s.per));
  if(s.page>pages) s.page=pages;
  const rows = list.slice((s.page-1)*s.per, s.page*s.per);
  const activeFilters = [];
  if(s.region) activeFilters.push(['Région', s.region, 'region']);
  if(s.status) activeFilters.push(['Statut', STATUS_META[s.status].label, 'status']);
  if(s.q) activeFilters.push(['Recherche', s.q, 'q']);

  return h`
  <div class="page-intro"><h2>Gestion des adhérents</h2><p>${list.length} adhérent(s) — recherche, filtres et actions.</p></div>

  <div class="toolbar">
    <div class="toolbar__search">${IC.search}
      <input id="adhSearch" placeholder="Rechercher un nom, téléphone ou matricule…" value="${s.q}">
    </div>
    <select class="select" id="adhRegion">
      <option value="">Toutes les régions</option>
      ${REGIONS.map(r=>`<option ${s.region===r?'selected':''}>${r}</option>`).join("")}
    </select>
    <select class="select" id="adhStatus">
      <option value="">Tous les statuts</option>
      <option value="actif" ${s.status==='actif'?'selected':''}>Actif</option>
      <option value="attente" ${s.status==='attente'?'selected':''}>En attente</option>
      <option value="suspendu" ${s.status==='suspendu'?'selected':''}>Suspendu</option>
    </select>
    <input type="date" class="select" id="adhDate" style="padding:0 10px" title="Filtrer par date">
    <div class="toolbar__spacer"></div>
    <button class="btn btn--secondary" onclick="exportModal('adhérents')">${IC.download} Exporter</button>
    <button class="btn btn--primary" onclick="memberFormModal()">${IC.plus} Ajouter un adhérent</button>
  </div>

  ${activeFilters.length ? `<div class="filters-active">
    <span>${activeFilters.length} filtre(s) actif(s) :</span>
    ${activeFilters.map(f=>`<span class="chip"><span>${f[0]} : <b>${f[1]}</b></span><button onclick="clearFilter('${f[2]}')">${IC.x}</button></span>`).join("")}
    <button class="btn btn--ghost btn--sm" onclick="resetAdhFilters()">Réinitialiser</button>
  </div>` : ''}

  <div class="card">
    <div class="table-wrap">
      <table class="data">
        <thead><tr>
          <th>Adhérent</th><th>Matricule</th><th>Téléphone</th><th>Région</th><th>Adhésion</th><th>Statut</th><th style="text-align:right">Actions</th>
        </tr></thead>
        <tbody>
          ${rows.length ? rows.map(m=>`
            <tr>
              <td><div class="cell-member"><img src="${m.photo}"><div><div class="nm">${m.name}</div><div class="sub">${m.sexe==='F'?'Femme':'Homme'}</div></div></div></td>
              <td class="mono">${m.matricule}</td>
              <td>${m.phone}</td>
              <td>${m.region}</td>
              <td>${frDate(m.date)}</td>
              <td>${badge(STATUS_META[m.status])}</td>
              <td style="text-align:right">
                <div class="row-actions" style="display:inline-block">
                  <button class="icon-btn" onclick="rowMenu(event,${m.id})">${IC.dots}</button>
                  <div class="menu-pop" id="menu-${m.id}">
                    <button onclick="openMember(${m.id})">${IC.eye} Voir le profil</button>
                    <button onclick="memberFormModal(${m.id})">${IC.edit} Modifier</button>
                    <button onclick="go('cartes');selectCard(${m.id})">${IC.card} Voir la carte</button>
                    <hr>
                    ${m.status==='suspendu'
                      ? `<button onclick="changeStatus(${m.id},'actif')">${IC.play} Réactiver</button>`
                      : `<button onclick="confirmStatus(${m.id},'suspendu')">${IC.pause} Suspendre</button>`}
                    <button class="danger" onclick="confirmDelete(${m.id})">${IC.trash} Supprimer</button>
                  </div>
                </div>
              </td>
            </tr>`).join("")
          : `<tr><td colspan="7">${emptyState('Aucun adhérent trouvé','Aucun adhérent ne correspond aux critères sélectionnés.','resetAdhFilters()')}</td></tr>`}
        </tbody>
      </table>
    </div>
    ${rows.length ? paginationBar(s, list.length, pages, 'adh') : ''}
  </div>`;
}

function bindAdherents(){
  const s = state.adh;
  const q = $("#adhSearch"); if(q){ q.oninput=()=>{ s.q=q.value; s.page=1; softRender('adh', q); }; }
  const rg = $("#adhRegion"); if(rg) rg.onchange=()=>{ s.region=rg.value; s.page=1; renderCurrent(); };
  const st = $("#adhStatus"); if(st) st.onchange=()=>{ s.status=st.value; s.page=1; renderCurrent(); };
}
function softRender(scope, input){ renderCurrent(); const el=$('#'+input.id); if(el){ el.focus(); el.setSelectionRange(el.value.length,el.value.length); } }

window.clearFilter = (k)=>{ state.adh[k]=""; state.adh.page=1; renderCurrent(); };
window.resetAdhFilters = ()=>{ state.adh={q:"",region:"",status:"",page:1,per:8}; renderCurrent(); };

/* ---- Menu ligne ---- */
window.rowMenu = (e,id)=>{ e.stopPropagation(); document.querySelectorAll('.menu-pop.open').forEach(m=>{ if(m.id!=='menu-'+id)m.classList.remove('open'); }); $('#menu-'+id).classList.toggle('open'); };
document.addEventListener('click', e=>{ if(!e.target.closest('.row-actions')) document.querySelectorAll('.menu-pop.open').forEach(m=>m.classList.remove('open')); });

/* ---- Actions statut ---- */
window.changeStatus = (id, st)=>{ const m=MEMBERS.find(x=>x.id===id); m.status=st; closeModal(); renderAll(); toast(`${m.name} — statut : ${STATUS_META[st].label}`, st==='suspendu'?'danger':'success'); };
window.confirmStatus = (id, st)=>{
  const m=MEMBERS.find(x=>x.id===id);
  modal(`<div class="modal__head"><div class="modal__icon warning">${IC.pause}</div><h3>Suspendre cet adhérent ?</h3><button class="modal__close" onclick="closeModal()">${IC.x}</button></div>
  <div class="modal__body"><p><b>${m.name}</b> (${m.matricule}) passera au statut <b>Suspendu</b>. Son accès et sa carte seront désactivés. Cette action est réversible.</p></div>
  <div class="modal__foot"><button class="btn btn--secondary" onclick="closeModal()">Annuler</button><button class="btn btn--danger" onclick="changeStatus(${id},'suspendu')">${IC.pause} Confirmer la suspension</button></div>`);
};
window.confirmDelete = (id)=>{
  const m=MEMBERS.find(x=>x.id===id);
  modal(`<div class="modal__head"><div class="modal__icon danger">${IC.trash}</div><h3>Supprimer définitivement ?</h3><button class="modal__close" onclick="closeModal()">${IC.x}</button></div>
  <div class="modal__body"><p>Vous êtes sur le point de supprimer <b>${m.name}</b> (${m.matricule}). Cette action est <b>irréversible</b> et effacera toutes ses données.</p>
  <div class="field" style="margin-top:14px"><label>Tapez le matricule pour confirmer</label><input id="delConfirm" placeholder="${m.matricule}"></div></div>
  <div class="modal__foot"><button class="btn btn--secondary" onclick="closeModal()">Annuler</button><button class="btn btn--danger" id="delBtn" disabled onclick="doDelete(${id})">${IC.trash} Supprimer</button></div>`);
  $("#delConfirm").oninput = e => { $("#delBtn").disabled = e.target.value.trim()!==m.matricule; };
};
window.doDelete = (id)=>{ const i=MEMBERS.findIndex(x=>x.id===id); const nm=MEMBERS[i].name; MEMBERS.splice(i,1); closeModal(); renderAll(); toast(`${nm} supprimé`, 'danger'); };

/* ---- Formulaire adhérent (ajout / modif) ---- */
window.memberFormModal = (id)=>{
  const m = id ? MEMBERS.find(x=>x.id===id) : null;
  const t = m ? 'Modifier l\'adhérent' : 'Ajouter un adhérent';
  modal(`<div class="modal__head"><div class="modal__icon" style="background:var(--primary-soft);color:var(--primary)">${IC.users}</div><h3>${t}</h3><button class="modal__close" onclick="closeModal()">${IC.x}</button></div>
  <div class="modal__body">
    <div class="form-row">
      <div class="field"><label>Prénom</label><input id="f_prenom" value="${m?m.prenom:''}"></div>
      <div class="field"><label>Nom</label><input id="f_nom" value="${m?m.nom:''}"></div>
    </div>
    <div class="form-row">
      <div class="field"><label>Téléphone</label><input id="f_phone" value="${m?m.phone:'+221 '}"></div>
      <div class="field"><label>Région</label><select id="f_region">${REGIONS.map(r=>`<option ${m&&m.region===r?'selected':''}>${r}</option>`).join("")}</select></div>
    </div>
    <div class="form-row">
      <div class="field"><label>Email</label><input id="f_email" value="${m?m.email:''}"></div>
      <div class="field"><label>Statut</label><select id="f_status">
        <option value="actif" ${m&&m.status==='actif'?'selected':''}>Actif</option>
        <option value="attente" ${!m||m.status==='attente'?'selected':''}>En attente</option>
        <option value="suspendu" ${m&&m.status==='suspendu'?'selected':''}>Suspendu</option>
      </select></div>
    </div>
    <div class="field"><label>Photo d'identité</label><input type="file" accept="image/*"></div>
  </div>
  <div class="modal__foot"><button class="btn btn--secondary" onclick="closeModal()">Annuler</button>
    <button class="btn btn--primary" onclick="saveMember(${id||0})">${IC.check} ${m?'Enregistrer':'Créer l’adhérent'}</button></div>`);
};
window.saveMember = (id)=>{
  const g = s => ($(s)?.value||'').trim();
  const prenom=g('#f_prenom'), nom=g('#f_nom');
  if(!prenom||!nom){ toast('Renseignez le nom et le prénom','danger'); return; }
  if(id){
    const m=MEMBERS.find(x=>x.id===id);
    Object.assign(m,{prenom,nom,name:prenom+' '+nom,phone:g('#f_phone'),region:g('#f_region'),email:g('#f_email'),status:g('#f_status')});
    toast('Adhérent modifié','success');
  } else {
    const nid = Math.max(...MEMBERS.map(m=>m.id))+1;
    MEMBERS.unshift({ id:nid, matricule:'TAB-'+String(1000+nid).padStart(6,'0'), prenom,nom,name:prenom+' '+nom,
      sexe:'H', phone:g('#f_phone'), email:g('#f_email'), region:g('#f_region'), adresse:g('#f_region'),
      date:'2026-09-10', status:g('#f_status'), photo:`https://i.pravatar.cc/150?img=${(nid%70)+1}`, cotisation:10000 });
    toast('Nouvel adhérent créé','success');
  }
  closeModal(); renderAll();
};

/* ---- Fiche adhérent ---- */
window.openMember = (id)=>{
  const m = MEMBERS.find(x=>x.id===id);
  const txs = TX.filter(t=>t.memberId===id);
  subview = { render: ()=> memberDetail(m, txs), after: ()=>{} };
  scrollTo(0,0); renderCurrent();
};
function memberDetail(m, txs){
  return h`
  <div class="back-link" onclick="go('adherents')">${IC.back} Retour aux adhérents</div>
  <div class="card" style="margin-bottom:18px"><div class="card__body">
    <div class="profile-head">
      <img src="${m.photo}">
      <div>
        <h2>${m.name}</h2>
        <div class="pid">${m.matricule}</div>
        <div style="margin-top:8px">${badge(STATUS_META[m.status])}</div>
      </div>
      <div class="profile-actions">
        <button class="btn btn--secondary" onclick="memberFormModal(${m.id})">${IC.edit} Modifier</button>
        <button class="btn btn--secondary" onclick="go('cartes');selectCard(${m.id})">${IC.card} Carte</button>
        ${m.status==='suspendu'
          ? `<button class="btn btn--success" onclick="changeStatus(${m.id},'actif')">${IC.play} Réactiver</button>`
          : `<button class="btn btn--danger-soft" onclick="confirmStatus(${m.id},'suspendu')">${IC.pause} Suspendre</button>`}
      </div>
    </div>
  </div></div>

  <div class="grid-2b">
    <div class="card"><div class="card__head"><h3>Informations personnelles</h3></div><div class="card__body">
      <div class="info-grid">
        <div class="info-item"><div class="il">Prénom</div><div class="iv">${m.prenom}</div></div>
        <div class="info-item"><div class="il">Nom</div><div class="iv">${m.nom}</div></div>
        <div class="info-item"><div class="il">Téléphone</div><div class="iv">${m.phone}</div></div>
        <div class="info-item"><div class="il">Email</div><div class="iv">${m.email}</div></div>
        <div class="info-item"><div class="il">Adresse</div><div class="iv">${m.adresse}</div></div>
        <div class="info-item"><div class="il">Région</div><div class="iv">${m.region}</div></div>
      </div>
    </div></div>
    <div class="card"><div class="card__head"><h3>Informations d'adhésion</h3></div><div class="card__body">
      <div class="info-grid">
        <div class="info-item"><div class="il">Matricule</div><div class="iv mono">${m.matricule}</div></div>
        <div class="info-item"><div class="il">Date d'adhésion</div><div class="iv">${frDateLong(m.date)}</div></div>
        <div class="info-item"><div class="il">Statut</div><div class="iv">${STATUS_META[m.status].label}</div></div>
        <div class="info-item"><div class="il">Cotisation type</div><div class="iv">${fcfa(m.cotisation)}</div></div>
      </div>
    </div></div>
  </div>

  <div class="card">
    <div class="card__head"><h3>Historique des cotisations</h3><span class="badge badge--neutral badge--plain card__action">${txs.length} paiement(s)</span></div>
    <div class="table-wrap">
      <table class="data">
        <thead><tr><th>Date</th><th>Référence</th><th>Montant</th><th>Moyen de paiement</th><th>Statut</th></tr></thead>
        <tbody>
          ${txs.length ? txs.map(t=>`<tr style="cursor:pointer" onclick="openTx('${t.ref}')">
            <td>${frDate(t.date)} ${t.time}</td><td class="mono">${t.ref}</td><td class="amount">${fcfa(t.amount)}</td>
            <td>${payChip(t.method)}</td><td>${badge(TX_STATUS_META[t.status])}</td></tr>`).join("")
          : `<tr><td colspan="5">${emptyState('Aucune cotisation','Cet adhérent n\'a pas encore de paiement enregistré.')}</td></tr>`}
        </tbody>
      </table>
    </div>
  </div>`;
}

/* ============================ COTISATIONS ============================ */
function filteredTx(){
  const s = state.cot;
  return TX.filter(t =>
    (!s.q || (t.ref+t.member).toLowerCase().includes(s.q.toLowerCase())) &&
    (!s.method || t.method===s.method) &&
    (!s.status || t.status===s.status)
  );
}
function renderCotisations(){
  const s = state.cot;
  const list = filteredTx();
  const pages = Math.max(1, Math.ceil(list.length/s.per));
  if(s.page>pages) s.page=pages;
  const rows = list.slice((s.page-1)*s.per, s.page*s.per);
  const total = list.filter(t=>t.status==='reussi').reduce((a,t)=>a+t.amount,0);

  return h`
  <div class="page-intro"><h2>Cotisations</h2><p>${list.length} transaction(s) — total encaissé : <b>${fcfa(total)}</b></p></div>
  <div class="toolbar">
    <div class="toolbar__search">${IC.search}<input id="cotSearch" placeholder="Rechercher une référence ou un adhérent…" value="${s.q}"></div>
    <select class="select" id="cotMethod">
      <option value="">Tous les moyens</option>
      ${Object.entries(PAY_METHODS).map(([k,p])=>`<option value="${k}" ${s.method===k?'selected':''}>${p.name}</option>`).join("")}
    </select>
    <select class="select" id="cotStatus">
      <option value="">Tous les statuts</option>
      <option value="reussi" ${s.status==='reussi'?'selected':''}>Réussi</option>
      <option value="attente" ${s.status==='attente'?'selected':''}>En attente</option>
      <option value="echoue" ${s.status==='echoue'?'selected':''}>Échoué</option>
    </select>
    <input type="date" class="select" style="padding:0 10px" title="Filtrer par date">
    <div class="toolbar__spacer"></div>
    <button class="btn btn--secondary" onclick="exportModal('transactions')">${IC.download} Exporter</button>
  </div>
  <div class="card">
    <div class="table-wrap">
      <table class="data">
        <thead><tr><th>Référence</th><th>Adhérent</th><th>Montant</th><th>Moyen de paiement</th><th>Date</th><th>Statut</th><th style="text-align:right">Actions</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(t=>`
            <tr>
              <td class="mono">${t.ref}</td>
              <td><div class="cell-member"><img src="${t.photo}"><div class="nm">${t.member}</div></div></td>
              <td class="amount">${fcfa(t.amount)}</td>
              <td>${payChip(t.method)}</td>
              <td>${frDate(t.date)} <span class="faint">${t.time}</span></td>
              <td>${badge(TX_STATUS_META[t.status])}</td>
              <td style="text-align:right"><button class="btn btn--ghost btn--sm" onclick="openTx('${t.ref}')">${IC.eye} Détail</button></td>
            </tr>`).join("")
          : `<tr><td colspan="7">${emptyState('Aucune transaction','Aucune transaction ne correspond à ces filtres.','resetCotFilters()')}</td></tr>`}
        </tbody>
      </table>
    </div>
    ${rows.length ? paginationBar(s, list.length, pages, 'cot') : ''}
  </div>`;
}
function bindCotisations(){
  const s=state.cot;
  const q=$("#cotSearch"); if(q) q.oninput=()=>{ s.q=q.value; s.page=1; softRender('cot',q); };
  const mt=$("#cotMethod"); if(mt) mt.onchange=()=>{ s.method=mt.value; s.page=1; renderCurrent(); };
  const st=$("#cotStatus"); if(st) st.onchange=()=>{ s.status=st.value; s.page=1; renderCurrent(); };
}
window.resetCotFilters = ()=>{ state.cot={q:"",method:"",status:"",page:1,per:8}; renderCurrent(); };
window.openTx = (ref)=>{
  const t = TX.find(x=>x.ref===ref); const p = PAY_METHODS[t.method];
  modal(`<div class="modal__head"><div class="modal__icon" style="background:var(--primary-soft);color:var(--primary)">${IC.wallet}</div>
    <div><h3>Transaction ${t.ref}</h3><div class="faint" style="font-size:12.5px">PayDunya</div></div>
    <button class="modal__close" onclick="closeModal()">${IC.x}</button></div>
  <div class="modal__body">
    <div style="text-align:center;margin-bottom:20px">
      <div class="amount" style="font-size:30px;font-family:var(--font-title)">${fcfa(t.amount)}</div>
      <div style="margin-top:8px">${badge(TX_STATUS_META[t.status])}</div>
    </div>
    <div class="info-grid">
      <div class="info-item"><div class="il">Adhérent</div><div class="iv">${t.member}</div></div>
      <div class="info-item"><div class="il">Moyen de paiement</div><div class="iv">${payChip(t.method)}</div></div>
      <div class="info-item"><div class="il">Référence PayDunya</div><div class="iv mono">${t.ref}</div></div>
      <div class="info-item"><div class="il">Date</div><div class="iv">${frDate(t.date)} — ${t.time}</div></div>
    </div>
  </div>
  <div class="modal__foot"><button class="btn btn--secondary" onclick="closeModal()">Fermer</button>
    <button class="btn btn--primary" onclick="toast('Reçu téléchargé (démo)','success')">${IC.download} Reçu PDF</button></div>`);
};

/* ============================ CARTES ============================ */
let cardMemberId = null;
window.selectCard = (id)=>{ cardMemberId = id; if(current==='cartes') renderCurrent(); };
function renderCartes(){
  const actifs = MEMBERS.filter(m=>m.status!=='attente');
  if(!cardMemberId || !MEMBERS.find(m=>m.id===cardMemberId)) cardMemberId = actifs[0].id;
  const m = MEMBERS.find(x=>x.id===cardMemberId);
  return h`
  <div class="page-intro"><h2>Cartes de membre</h2><p>Visualisez, générez et téléchargez la carte virtuelle d'un adhérent.</p></div>
  <div class="grid-2">
    <div>
      <div class="card"><div class="card__head"><h3>Aperçu de la carte</h3></div>
        <div class="card__body" style="display:flex;flex-direction:column;align-items:center;gap:22px;background:var(--surface-2)">
          ${memberCardHTML(m)}
          <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
            <button class="btn btn--primary" onclick="toast('Carte téléchargée en PDF (démo)','success')">${IC.download} Télécharger PDF</button>
            <button class="btn btn--secondary" onclick="toast('Carte téléchargée en PNG (démo)','success')">${IC.download} Télécharger PNG</button>
            <button class="btn btn--secondary" onclick="showQR('${m.matricule}')">${IC.qr} Afficher le QR Code</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card"><div class="card__head"><h3>Choisir un adhérent</h3></div>
      <div class="card__body" style="padding:0">
        <div style="padding:12px 16px;border-bottom:1px solid var(--border)">
          <div class="toolbar__search">${IC.search}<input id="cardSearch" placeholder="Rechercher un adhérent…"></div>
        </div>
        <div id="cardList" style="max-height:480px;overflow-y:auto">
          ${cardListRows(actifs, m.id)}
        </div>
      </div>
    </div>
  </div>`;
}
function cardListRows(list, activeId){
  return list.slice(0,40).map(m=>`
    <div onclick="selectCard(${m.id})" style="display:flex;align-items:center;gap:11px;padding:11px 16px;cursor:pointer;border-bottom:1px solid var(--border);${m.id===activeId?'background:var(--primary-soft)':''}">
      <img class="avatar-sm" src="${m.photo}">
      <div style="flex:1;min-width:0"><div class="nm" style="font-weight:600">${m.name}</div><div class="sub faint" style="font-size:12px">${m.matricule} · ${m.region}</div></div>
      ${badge(STATUS_META[m.status])}
    </div>`).join("");
}
function bindCartes(){
  const q=$("#cardSearch"); if(q) q.oninput=()=>{
    const v=q.value.toLowerCase();
    const list=MEMBERS.filter(m=>m.status!=='attente' && (m.name+m.matricule).toLowerCase().includes(v));
    $("#cardList").innerHTML = list.length?cardListRows(list,cardMemberId):emptyState('Aucun adhérent','Essayez un autre nom.');
  };
}
function memberCardHTML(m){
  return `<div class="membercard">
    <div class="membercard__top">
      <div class="membercard__brand"><div class="membercard__logo">T</div>
        <div class="membercard__brand-txt"><b>Tabax Construire</b><span>Carte de membre</span></div></div>
      ${badge(STATUS_META[m.status])}
    </div>
    <div class="membercard__body">
      <img class="membercard__photo" src="${m.photo}">
      <div>
        <div class="membercard__name">${m.name}</div>
        <div class="membercard__title">Membre — ${m.region}</div>
        <div class="membercard__mat">${m.matricule}</div>
      </div>
      <img class="membercard__qr" style="margin-left:auto" src="${qrDataURI(m.matricule)}">
    </div>
    <div class="membercard__foot">
      <div><div class="lbl">Téléphone</div><b>${m.phone}</b></div>
      <div><div class="lbl">Adhésion</div><b>${frDate(m.date)}</b></div>
    </div>
  </div>`;
}
window.showQR = (mat)=>{
  modal(`<div class="modal__head"><h3>QR Code — ${mat}</h3><button class="modal__close" onclick="closeModal()">${IC.x}</button></div>
  <div class="modal__body" style="text-align:center"><img src="${qrDataURI(mat)}" style="width:220px;height:220px;border:1px solid var(--border);border-radius:10px;padding:10px">
  <p class="muted" style="margin-top:12px">Ce QR encode le matricule de l'adhérent pour vérification à l'entrée des événements.</p></div>`);
};
// Faux QR déterministe (motif) — pas de dépendance externe
function qrDataURI(seed){
  let s=0; for(const c of seed) s=(s*31+c.charCodeAt(0))&0xffffffff;
  const n=13, cell=8, pad=6, size=n*cell+pad*2;
  let rects=`<rect width="${size}" height="${size}" fill="#fff"/>`;
  const rnd=()=> (s=(s*1103515245+12345)&0x7fffffff)/0x7fffffff;
  for(let y=0;y<n;y++) for(let x=0;x<n;x++){ if(rnd()>0.5) rects+=`<rect x="${pad+x*cell}" y="${pad+y*cell}" width="${cell}" height="${cell}" fill="#0d1b2e"/>`; }
  const finder=(fx,fy)=>`<rect x="${fx}" y="${fy}" width="${cell*3}" height="${cell*3}" fill="#0d1b2e"/><rect x="${fx+cell*0.6}" y="${fy+cell*0.6}" width="${cell*1.8}" height="${cell*1.8}" fill="#fff"/><rect x="${fx+cell*1.1}" y="${fy+cell*1.1}" width="${cell*0.8}" height="${cell*0.8}" fill="#d0021b"/>`;
  rects+=finder(pad,pad)+finder(pad+(n-3)*cell,pad)+finder(pad,pad+(n-3)*cell);
  return "data:image/svg+xml,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>${rects}</svg>`);
}

/* ============================ NOTIFICATIONS ============================ */
function renderNotifications(){
  const ch = state.notif.channel;
  const list = NOTIFS.filter(n=> ch==='all' || n.channel===ch);
  return h`
  <div class="page-intro"><h2>Notifications</h2><p>Suivi des emails et SMS envoyés aux adhérents (bienvenue, reçus, rappels…).</p></div>
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap">
    <div class="seg">
      <button class="${ch==='all'?'active':''}" onclick="setNotifTab('all')">Toutes (${NOTIFS.length})</button>
      <button class="${ch==='email'?'active':''}" onclick="setNotifTab('email')">Emails (${NOTIFS.filter(n=>n.channel==='email').length})</button>
      <button class="${ch==='sms'?'active':''}" onclick="setNotifTab('sms')">SMS (${NOTIFS.filter(n=>n.channel==='sms').length})</button>
    </div>
    <div class="toolbar__spacer"></div>
    <button class="btn btn--primary" onclick="toast('Composer une notification (démo)','info')">${IC.plus} Nouvelle notification</button>
  </div>
  <div class="card"><div class="table-wrap">
    <table class="data">
      <thead><tr><th>Canal</th><th>Destinataire</th><th>Type</th><th>Objet</th><th>Date</th><th>Statut</th></tr></thead>
      <tbody>
        ${list.map(n=>`<tr>
          <td><span class="pay"><span class="pay__logo" style="background:${n.channel==='email'?'var(--info)':'var(--primary)'}">${n.channel==='email'?IC.mail:IC.sms}</span>${n.channel==='email'?'Email':'SMS'}</span></td>
          <td><div><div class="nm" style="font-weight:600">${n.recipient}</div><div class="sub faint" style="font-size:12px">${n.dest}</div></div></td>
          <td><span class="badge badge--neutral badge--plain">${n.type}</span></td>
          <td style="max-width:280px">${n.subject}</td>
          <td>${frDate(n.date)} <span class="faint">${n.time}</span></td>
          <td>${badge(NOTIF_STATUS_META[n.status])}</td>
        </tr>`).join("")}
      </tbody>
    </table>
  </div></div>`;
}
window.setNotifTab = (c)=>{ state.notif.channel=c; renderCurrent(); };

/* ============================ RAPPORTS ============================ */
function renderRapports(){
  const cards = [
    { title:"Adhérents", desc:"Exporter la base complète des membres avec leurs informations et statuts.", icon:IC.users },
    { title:"Cotisations & transactions", desc:"Exporter l'historique des paiements PayDunya (Wave, OM, Wizall…).", icon:IC.wallet },
    { title:"Cartes de membre", desc:"Générer un lot de cartes PDF prêtes à imprimer ou à envoyer.", icon:IC.card },
    { title:"Notifications", desc:"Journal des emails et SMS envoyés avec statut de distribution.", icon:IC.bell },
  ];
  return h`
  <div class="page-intro"><h2>Rapports & Exports</h2><p>Générez des exports filtrés au format CSV, Excel ou PDF.</p></div>
  <div class="card" style="margin-bottom:18px"><div class="card__head"><h3>Filtres d'export</h3></div><div class="card__body">
    <div class="form-row" style="grid-template-columns:repeat(4,1fr)">
      <div class="field"><label>Région</label><select><option>Toutes les régions</option>${REGIONS.map(r=>`<option>${r}</option>`).join("")}</select></div>
      <div class="field"><label>Statut</label><select><option>Tous</option><option>Actif</option><option>En attente</option><option>Suspendu</option></select></div>
      <div class="field"><label>Du</label><input type="date"></div>
      <div class="field"><label>Au</label><input type="date"></div>
    </div>
  </div></div>
  <div class="export-grid">
    ${cards.map(c=>`
      <div class="export-card">
        <div class="export-card__icon">${c.icon}</div>
        <h3>${c.title}</h3><p>${c.desc}</p>
        <div class="export-btns">
          <button class="btn btn--secondary btn--sm" onclick="toast('Export CSV généré (démo)','success')">${IC.file} CSV</button>
          <button class="btn btn--secondary btn--sm" onclick="toast('Export Excel généré (démo)','success')">${IC.file} Excel</button>
          <button class="btn btn--secondary btn--sm" onclick="toast('Export PDF généré (démo)','success')">${IC.file} PDF</button>
        </div>
      </div>`).join("")}
  </div>`;
}

/* ============================ PARAMÈTRES ============================ */
let settingsTab = "general";
function renderParametres(){
  const tabs = [["general","Général"],["notifications","Notifications"],["paiement","Paiement"],["admins","Administrateurs"]];
  return h`
  <div class="page-intro"><h2>Paramètres</h2><p>Configuration de la plateforme Tabax Construire.</p></div>
  <div class="settings-layout">
    <div class="settings-nav">
      ${tabs.map(t=>`<button class="${settingsTab===t[0]?'active':''}" onclick="setSettingsTab('${t[0]}')">${t[1]}</button>`).join("")}
    </div>
    <div>${settingsPanel()}</div>
  </div>`;
}
window.setSettingsTab = (t)=>{ settingsTab=t; renderCurrent(); };
function settingsPanel(){
  if(settingsTab==="general") return `<div class="card"><div class="card__head"><h3>Paramètres généraux</h3></div><div class="card__body">
    <div class="form-row">
      <div class="field"><label>Nom de l'organisation</label><input value="Tabax Construire"></div>
      <div class="field"><label>Email de contact</label><input value="contact@tabaxconstruire.sn"></div>
    </div>
    <div class="form-row">
      <div class="field"><label>Téléphone</label><input value="+221 33 800 00 00"></div>
      <div class="field"><label>Devise</label><select><option>FCFA (XOF)</option><option>EUR</option></select></div>
    </div>
    <div class="field"><label>Adresse</label><input value="Dakar, Sénégal"></div>
    <div style="text-align:right"><button class="btn btn--primary" onclick="toast('Paramètres enregistrés','success')">${IC.check} Enregistrer</button></div>
  </div></div>`;
  if(settingsTab==="notifications") return `<div class="card"><div class="card__head"><h3>Notifications automatiques</h3></div><div class="card__body">
    ${settingLine("Email de bienvenue","Envoyer un email avec la carte de membre à chaque nouvelle adhésion.",true)}
    ${settingLine("SMS de confirmation","Envoyer un SMS de confirmation après validation de l'adhésion.",true)}
    ${settingLine("Reçu de cotisation","Envoyer automatiquement un reçu après chaque paiement réussi.",true)}
    ${settingLine("Rappel de cotisation","Notifier les adhérents avant l'échéance de leur cotisation.",false)}
    <div style="text-align:right;margin-top:16px"><button class="btn btn--primary" onclick="toast('Préférences enregistrées','success')">${IC.check} Enregistrer</button></div>
  </div></div>`;
  if(settingsTab==="paiement") return `<div class="card"><div class="card__head"><h3>Moyens de paiement</h3></div><div class="card__body">
    ${Object.entries(PAY_METHODS).map(([k,p],i)=>`<div class="setting-line"><span class="pay__logo" style="background:${p.color}">${p.short}</span>
      <div class="sl-txt"><b>${p.name}</b><p>Passerelle PayDunya</p></div>
      <label class="switch"><input type="checkbox" ${i<5?'checked':''}><span></span></label></div>`).join("")}
    <div class="field" style="margin-top:16px"><label>Clé API PayDunya (masquée)</label><input value="••••••••••••••••••••" type="password"></div>
    <div style="text-align:right"><button class="btn btn--primary" onclick="toast('Configuration paiement enregistrée','success')">${IC.check} Enregistrer</button></div>
  </div></div>`;
  // admins
  const admins = [
    { n:"Souleymane K.", e:"souleymanekodjo@gmail.com", r:"Super administrateur", img:12 },
    { n:"Awa Ndiaye", e:"awa.ndiaye@tabax.sn", r:"Gestionnaire adhérents", img:45 },
    { n:"Modou Fall", e:"modou.fall@tabax.sn", r:"Finance", img:33 },
  ];
  return `<div class="card"><div class="card__head"><h3>Administrateurs</h3><button class="btn btn--primary btn--sm card__action" onclick="toast('Inviter un administrateur (démo)','info')">${IC.plus} Inviter</button></div>
  <div class="table-wrap"><table class="data"><thead><tr><th>Administrateur</th><th>Rôle</th><th>Statut</th><th></th></tr></thead><tbody>
    ${admins.map(a=>`<tr><td><div class="cell-member"><img src="https://i.pravatar.cc/80?img=${a.img}"><div><div class="nm">${a.n}</div><div class="sub">${a.e}</div></div></div></td>
      <td><span class="badge badge--neutral badge--plain">${a.r}</span></td><td>${badge(STATUS_META.actif)}</td>
      <td style="text-align:right"><button class="icon-btn" onclick="toast('Gérer (démo)','info')">${IC.edit}</button></td></tr>`).join("")}
  </tbody></table></div></div>`;
}
function settingLine(t,d,on){ return `<div class="setting-line"><div class="sl-txt"><b>${t}</b><p>${d}</p></div>
  <label class="switch"><input type="checkbox" ${on?'checked':''} onchange="toast('${t} : '+(this.checked?'activé':'désactivé'),this.checked?'success':'info')"><span></span></label></div>`; }

/* ============================ COMPOSANTS PARTAGÉS ============================ */
function paginationBar(s, total, pages, scope){
  const from = (s.page-1)*s.per+1, to = Math.min(s.page*s.per, total);
  let btns='';
  for(let i=1;i<=pages;i++){ if(i===1||i===pages||Math.abs(i-s.page)<=1){ btns+=`<button class="${i===s.page?'active':''}" onclick="setPage('${scope}',${i})">${i}</button>`; }
    else if(Math.abs(i-s.page)===2){ btns+=`<span style="padding:0 4px;color:var(--text-faint)">…</span>`; } }
  return `<div class="table-foot">
    <span class="muted">Affichage <b>${from}–${to}</b> sur <b>${total}</b></span>
    <div class="pagination">
      <button onclick="setPage('${scope}',${s.page-1})" ${s.page===1?'disabled':''}>‹</button>
      ${btns}
      <button onclick="setPage('${scope}',${s.page+1})" ${s.page===pages?'disabled':''}>›</button>
    </div>
  </div>`;
}
window.setPage = (scope,p)=>{ state[scope].page=p; renderCurrent(); scrollTo({top:0,behavior:'smooth'}); };

function emptyState(title, desc, resetFn){
  return `<div class="empty"><div class="empty__icon">${IC.search}</div><h4>${title}</h4><p>${desc}</p>
  ${resetFn?`<button class="btn btn--secondary btn--sm" onclick="${resetFn}">Réinitialiser les filtres</button>`:''}</div>`;
}

/* ---- Modal ---- */
function modal(inner, wide){ const o=$("#overlay"); o.innerHTML=`<div class="modal ${wide?'modal--wide':''}">${inner}</div>`; o.classList.add("open"); }
window.closeModal = ()=> $("#overlay").classList.remove("open");
$("#overlay") && ($("#overlay").onclick = e=>{ if(e.target.id==='overlay') closeModal(); });

/* ---- Export modal ---- */
window.exportModal = (what)=>{
  modal(`<div class="modal__head"><div class="modal__icon" style="background:var(--primary-soft);color:var(--primary)">${IC.download}</div><h3>Exporter les ${what}</h3><button class="modal__close" onclick="closeModal()">${IC.x}</button></div>
  <div class="modal__body"><p class="muted" style="margin-top:0">Choisissez le format d'export. Les filtres actifs seront appliqués.</p>
    <div class="export-btns" style="margin-top:8px">
      <button class="btn btn--secondary" onclick="closeModal();toast('Export CSV généré (démo)','success')">${IC.file} CSV</button>
      <button class="btn btn--secondary" onclick="closeModal();toast('Export Excel généré (démo)','success')">${IC.file} Excel</button>
      <button class="btn btn--secondary" onclick="closeModal();toast('Export PDF généré (démo)','success')">${IC.file} PDF</button>
    </div></div>`);
};

/* ---- Toast ---- */
window.toast = (msg, type='info')=>{
  const ic = type==='success'?IC.check : type==='danger'?IC.x : IC.bell;
  const el = document.createElement('div');
  el.className = `toast toast--${type}`;
  el.innerHTML = `<div class="toast__ic">${ic}</div><span>${msg}</span>`;
  $("#toasts").appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .3s,transform .3s'; el.style.opacity='0'; el.style.transform='translateX(30px)'; setTimeout(()=>el.remove(),300); }, 3200);
};

/* ---- Nav mobile ---- */
window.toggleNav = ()=>{ $("#sidebar").classList.toggle("open"); $("#navOverlay").classList.toggle("open"); };
window.closeNav = ()=>{ $("#sidebar").classList.remove("open"); $("#navOverlay").classList.remove("open"); };

/* ---- Bind après chaque rendu ---- */
const _renderCurrent = renderCurrent;
renderCurrent = function(){ _renderCurrent();
  if(!subview){
    if(current==='adherents') bindAdherents();
    if(current==='cotisations') bindCotisations();
    if(current==='cartes') bindCartes();
  }
};

/* ---- Init ---- */
renderAll();
