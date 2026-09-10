/* =====================================================================
   TABAX CONSTRUIRE — Back-Office — Données fictives réalistes
   ===================================================================== */

const REGIONS = ["Dakar","Thiès","Diourbel","Saint-Louis","Kaolack","Ziguinchor","Louga","Fatick","Kolda","Matam","Tambacounda","Kaffrine","Sédhiou","Kédougou"];

const PAY_METHODS = {
  wave:      { name: "Wave",             color: "#1DC1F5", short: "W" },
  om:        { name: "Orange Money",     color: "#FF7900", short: "OM" },
  wizall:    { name: "Wizall",           color: "#00A94F", short: "Wz" },
  emoney:    { name: "E-Money",          color: "#1A3E8B", short: "EM" },
  free:      { name: "Free Money",       color: "#CD1719", short: "FM" },
  card:      { name: "Visa / Mastercard",color: "#1A1F71", short: "CB" },
};

const PRENOMS_H = ["Amadou","Moussa","Ibrahima","Cheikh","Ousmane","Modou","Babacar","Mamadou","Abdoulaye","Serigne","Pape","Alioune","Mor","Boubacar","Assane","Lamine"];
const PRENOMS_F = ["Fatou","Aïssatou","Awa","Mariama","Ndeye","Sokhna","Bineta","Khady","Adja","Maimouna","Rokhaya","Coumba","Astou","Dieynaba","Seynabou"];
const NOMS = ["Diop","Ndiaye","Fall","Sarr","Gueye","Sow","Ba","Diallo","Faye","Sy","Cissé","Mbaye","Sène","Diagne","Thiam","Kane","Camara","Touré","Niang","Gaye"];

function pick(arr, i){ return arr[i % arr.length]; }
function pad(n, len){ return String(n).padStart(len, "0"); }

const STATUSES = ["actif","actif","actif","actif","actif","actif","attente","attente","suspendu"];

// --- Génération de 148 adhérents déterministes ---
const MEMBERS = [];
(function(){
  let seed = 7;
  const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  for (let i = 0; i < 148; i++) {
    const isF = rnd() > 0.55;
    const prenom = isF ? pick(PRENOMS_F, Math.floor(rnd()*PRENOMS_F.length)) : pick(PRENOMS_H, Math.floor(rnd()*PRENOMS_H.length));
    const nom = pick(NOMS, Math.floor(rnd()*NOMS.length));
    const region = pick(REGIONS, Math.floor(rnd()*(rnd()>0.5?5:REGIONS.length)));
    const status = pick(STATUSES, Math.floor(rnd()*STATUSES.length));
    const day = 1 + Math.floor(rnd()*28), month = 1 + Math.floor(rnd()*9);
    MEMBERS.push({
      id: i + 1,
      matricule: "TAB-" + pad(1000 + i, 6),
      prenom, nom,
      name: prenom + " " + nom,
      sexe: isF ? "F" : "H",
      phone: "+221 7" + pick(["7","6","0","5"], Math.floor(rnd()*4)) + " " + pad(Math.floor(rnd()*1000),3) + " " + pad(Math.floor(rnd()*100),2) + " " + pad(Math.floor(rnd()*100),2),
      email: (prenom + "." + nom).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"") + "@email.sn",
      region,
      adresse: region,
      date: `2026-${pad(month,2)}-${pad(day,2)}`,
      status,
      photo: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
      cotisation: [5000,10000,15000,25000][Math.floor(rnd()*4)],
    });
  }
})();

function frDate(iso){
  const [y,m,d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
}
function frDateLong(iso){
  const mois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
  const [y,m,d] = iso.split("-");
  return `${parseInt(d)} ${mois[parseInt(m)-1]} ${y}`;
}
function fcfa(n){ return n.toLocaleString("fr-FR") + " FCFA"; }

// --- Transactions ---
const TX = [];
(function(){
  let seed = 91;
  const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const methods = Object.keys(PAY_METHODS);
  const txStatus = ["reussi","reussi","reussi","reussi","reussi","attente","echoue"];
  for (let i = 0; i < 86; i++) {
    const m = MEMBERS[Math.floor(rnd()*MEMBERS.length)];
    const method = pick(methods, Math.floor(rnd()*methods.length));
    const st = pick(txStatus, Math.floor(rnd()*txStatus.length));
    const day = 1 + Math.floor(rnd()*9), h = 8 + Math.floor(rnd()*11), mn = Math.floor(rnd()*60);
    TX.push({
      ref: "PAY-" + pad(980000 + i*137 % 20000, 6),
      member: m.name, memberId: m.id, photo: m.photo,
      amount: [5000,10000,15000,25000][Math.floor(rnd()*4)],
      method,
      date: `2026-09-${pad(day,2)}`,
      time: `${pad(h,2)}:${pad(mn,2)}`,
      status: st,
    });
  }
  TX.sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time));
})();

// --- Notifications ---
const NOTIFS = [];
(function(){
  let seed = 33;
  const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const types = [
    { channel: "email", type: "Bienvenue", subject: "Bienvenue à Tabax Construire — votre carte de membre" },
    { channel: "sms",   type: "Confirmation", subject: "Votre adhésion est confirmée. Matricule {mat}" },
    { channel: "email", type: "Reçu cotisation", subject: "Reçu de paiement de votre cotisation" },
    { channel: "sms",   type: "Rappel", subject: "Rappel : votre cotisation arrive à échéance" },
    { channel: "email", type: "Carte de membre", subject: "Votre carte de membre est disponible" },
    { channel: "sms",   type: "Bienvenue", subject: "Bienvenue {prenom} ! Votre compte Tabax est actif." },
  ];
  const st = ["envoye","envoye","envoye","envoye","attente","echec"];
  for (let i = 0; i < 64; i++) {
    const m = MEMBERS[Math.floor(rnd()*MEMBERS.length)];
    const t = pick(types, Math.floor(rnd()*types.length));
    const day = 1 + Math.floor(rnd()*9), h = 8 + Math.floor(rnd()*12), mn = Math.floor(rnd()*60);
    NOTIFS.push({
      id: i+1,
      channel: t.channel,
      type: t.type,
      subject: t.subject.replace("{mat}", m.matricule).replace("{prenom}", m.prenom),
      dest: t.channel === "email" ? m.email : m.phone,
      recipient: m.name,
      date: `2026-09-${pad(day,2)}`,
      time: `${pad(h,2)}:${pad(mn,2)}`,
      status: pick(st, Math.floor(rnd()*st.length)),
    });
  }
  NOTIFS.sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time));
})();

// --- Agrégats dashboard ---
const STATS = {
  get total(){ return MEMBERS.length; },
  get actifs(){ return MEMBERS.filter(m=>m.status==="actif").length; },
  get attente(){ return MEMBERS.filter(m=>m.status==="attente").length; },
  get suspendus(){ return MEMBERS.filter(m=>m.status==="suspendu").length; },
  get cotisations(){ return TX.filter(t=>t.status==="reussi").reduce((s,t)=>s+t.amount,0); },
};

const ADHESIONS_MENSUELLES = [
  { m:"Jan", v:820 }, { m:"Fév", v:1120 }, { m:"Mar", v:980 }, { m:"Avr", v:1340 },
  { m:"Mai", v:1210 }, { m:"Juin", v:1580 }, { m:"Juil", v:1720 }, { m:"Août", v:1490 },
];

function regionCounts(){
  const map = {};
  MEMBERS.forEach(m => map[m.region] = (map[m.region]||0)+1);
  return Object.entries(map).map(([region,count])=>({region,count})).sort((a,b)=>b.count-a.count);
}

const STATUS_META = {
  actif:     { label: "Actif",      cls: "success" },
  attente:   { label: "En attente", cls: "warning" },
  suspendu:  { label: "Suspendu",   cls: "danger" },
};
const TX_STATUS_META = {
  reussi:  { label: "Réussi",   cls: "success" },
  attente: { label: "En attente", cls: "warning" },
  echoue:  { label: "Échoué",   cls: "danger" },
};
const NOTIF_STATUS_META = {
  envoye:  { label: "Envoyé",     cls: "success" },
  attente: { label: "En attente", cls: "warning" },
  echec:   { label: "Échec",      cls: "danger" },
};
