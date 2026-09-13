/* Mandate of Dynasties
   Original browser grand-strategy prototype for static hosting (GitHub Pages).
   No third-party libraries required. */

const REALMS = {
  yunzhou: { name: 'Yunzhou', ruler: 'Raja Liang Ren', house: 'Liang', color: '#b69143', relation: 'player', capital: 'crownplain' },
  beiyan: { name: 'Beiyan', ruler: 'Adipati Yan Shuo', house: 'Yan', color: '#667b9a', relation: 'hostile', capital: 'frostgate' },
  qinghe: { name: 'Qinghe', ruler: 'Raja Shen Yu', house: 'Shen', color: '#55806f', relation: 'ally', capital: 'heavenstep' },
  donghai: { name: 'Donghai', ruler: 'Ratu Hai Meilin', house: 'Hai', color: '#6f88a0', relation: 'neutral', capital: 'goldcoast' },
  nanyue: { name: 'Nanyue', ruler: 'Raja Yue Han', house: 'Yue', color: '#7f6651', relation: 'neutral', capital: 'southgrove' },
  chiyang: { name: 'Chiyang', ruler: 'Putera Chi Zhen', house: 'Chi', color: '#9a5547', relation: 'hostile', capital: 'embermarch' },
  canglan: { name: 'Canglan', ruler: 'Raja Lan Wei', house: 'Lan', color: '#687b63', relation: 'neutral', capital: 'mistlake' },
  yuehai: { name: 'Yuehai', ruler: 'Ratu Yue Qiao', house: 'Yue', color: '#75618a', relation: 'neutral', capital: 'mooncape' }
};

const PROVINCES = {
  frostgate: { name:'Frostgate', realm:'beiyan', dev:5, tax:18, levy:620, terrain:'Gunung', x:168, y:169, neighbors:['silverpass','longriver'] },
  silverpass: { name:'Silver Pass', realm:'beiyan', dev:6, tax:21, levy:710, terrain:'Bukit', x:325, y:165, neighbors:['frostgate','jadefrontier','redcliff'] },
  jadefrontier: { name:'Jade Frontier', realm:'qinghe', dev:7, tax:24, levy:680, terrain:'Dataran tinggi', x:475, y:180, neighbors:['silverpass','redcliff','heavenstep'] },
  longriver: { name:'Long River', realm:'beiyan', dev:8, tax:30, levy:720, terrain:'Sungai', x:190, y:300, neighbors:['frostgate','redcliff','stoneford','northvale'] },
  redcliff: { name:'Red Cliff', realm:'beiyan', dev:7, tax:25, levy:780, terrain:'Tebing', x:330, y:270, neighbors:['silverpass','jadefrontier','longriver','heavenstep','northvale'] },
  heavenstep: { name:'Heavenstep', realm:'qinghe', dev:9, tax:37, levy:850, terrain:'Bukit', x:485, y:285, neighbors:['jadefrontier','redcliff','sunreach','crownplain','northvale'] },
  sunreach: { name:'Sunreach', realm:'qinghe', dev:8, tax:32, levy:710, terrain:'Dataran', x:635, y:285, neighbors:['heavenstep','goldcoast','eastmere'] },
  stoneford: { name:'Stoneford', realm:'chiyang', dev:6, tax:20, levy:660, terrain:'Dataran', x:175, y:425, neighbors:['longriver','northvale','embermarch'] },
  northvale: { name:'Northvale', realm:'yunzhou', dev:10, tax:42, levy:900, terrain:'Lembah', x:325, y:380, neighbors:['longriver','redcliff','heavenstep','stoneford','crownplain','southgrove'] },
  crownplain: { name:'Crown Plain', realm:'yunzhou', dev:13, tax:58, levy:1120, terrain:'Dataran', x:500, y:390, neighbors:['heavenstep','northvale','eastmere','cloudgarden'] },
  eastmere: { name:'Eastmere', realm:'yunzhou', dev:9, tax:39, levy:820, terrain:'Tanah tasik', x:635, y:410, neighbors:['sunreach','crownplain','mistlake','verdantseat'] },
  mistlake: { name:'Mist Lake', realm:'canglan', dev:8, tax:34, levy:740, terrain:'Tasik', x:800, y:390, neighbors:['eastmere','goldcoast','pearlbay','verdantseat'] },
  goldcoast: { name:'Gold Coast', realm:'donghai', dev:11, tax:55, levy:810, terrain:'Pantai', x:880, y:278, neighbors:['sunreach','mistlake','seawatch'] },
  seawatch: { name:'Seawatch', realm:'donghai', dev:9, tax:46, levy:700, terrain:'Pantai', x:1035, y:330, neighbors:['goldcoast','pearlbay'] },
  pearlbay: { name:'Pearl Bay', realm:'donghai', dev:10, tax:51, levy:760, terrain:'Pantai', x:955, y:470, neighbors:['seawatch','mistlake','mooncape'] },
  embermarch: { name:'Ember March', realm:'chiyang', dev:7, tax:24, levy:820, terrain:'Bukit', x:250, y:535, neighbors:['stoneford','southgrove'] },
  southgrove: { name:'South Grove', realm:'nanyue', dev:9, tax:38, levy:770, terrain:'Hutan', x:365, y:515, neighbors:['embermarch','northvale','cloudgarden'] },
  cloudgarden: { name:'Cloud Garden', realm:'nanyue', dev:10, tax:44, levy:820, terrain:'Hutan', x:500, y:500, neighbors:['southgrove','crownplain','verdantseat'] },
  verdantseat: { name:'Verdant Seat', realm:'nanyue', dev:12, tax:52, levy:980, terrain:'Dataran subur', x:665, y:535, neighbors:['cloudgarden','eastmere','mistlake','mooncape'] },
  mooncape: { name:'Moon Cape', realm:'yuehai', dev:8, tax:40, levy:710, terrain:'Pantai', x:855, y:575, neighbors:['verdantseat','pearlbay'] }
};

const MARRIAGE_CANDIDATES = [
  { name:'Lin Xue', age:21, house:'Lin', stat:8, trait:'Diplomat', dowry:160 },
  { name:'Su Meiying', age:24, house:'Su', stat:11, trait:'Cendekiawan', dowry:90 },
  { name:'Zhao Lian', age:19, house:'Zhao', stat:7, trait:'Pengurus', dowry:230 },
  { name:'Qiao Wen', age:22, house:'Qiao', stat:9, trait:'Pakar Strategi', dowry:120 }
];

const COUNCIL_CANDIDATES = [
  { name:'Gao Rui', skill:13, job:'Canselor' },
  { name:'Wei Jun', skill:11, job:'Marsyal' },
  { name:'Qin Shun', skill:15, job:'Pengurus' },
  { name:'Han Lu', skill:12, job:'Sarjana' },
  { name:'Ming Tao', skill:10, job:'Perisik' }
];

const defaultState = () => ({
  date: { day:1, season:0, year:867 },
  paused: true,
  speed: 1,
  resources: { gold:850, prestige:420, legitimacy:72, army:5600 },
  playerRealm:'yunzhou',
  selectedProvince:'crownplain',
  activePanel:'realm',
  mapMode:'political',
  spouse:null,
  concubines:[],
  dynastyMembers:[
    {name:'Liang Ren', age:28, role:'Pemerintah'},
    {name:'Liang An', age:6, role:'Anak lelaki'},
    {name:'Liang Yue', age:4, role:'Anak perempuan'}
  ],
  council:{},
  provinceRealm:Object.fromEntries(Object.entries(PROVINCES).map(([id,p])=>[id,p.realm])),
  relations:{ qinghe:55, beiyan:-48, donghai:12, nanyue:5, chiyang:-35, canglan:8, yuehai:18 },
  claims:[],
  log:[]
});

let state = defaultState();
let tickHandle = null;

const $ = (id) => document.getElementById(id);
const panelContent = $('panelContent');
const eventLog = $('eventLog');
const modal = $('modal');
const modalTitle = $('modalTitle');
const modalBody = $('modalBody');

function clamp(v,min,max){ return Math.max(min,Math.min(max,v)); }
function formatNum(v){ return Math.round(v).toLocaleString('en-US'); }
function realmOfProvince(id){ return state.provinceRealm[id] || PROVINCES[id].realm; }
function ownedProvinceIds(realm=state.playerRealm){ return Object.keys(PROVINCES).filter(id=>realmOfProvince(id)===realm); }
function realmArmyEstimate(realm){
  return Object.keys(PROVINCES).filter(id=>realmOfProvince(id)===realm).reduce((a,id)=>a+PROVINCES[id].levy,0) + (realm===state.playerRealm ? state.resources.army*0.35 : 1200);
}

function addLog(text){
  const stamp = `${state.date.day} ${['Spring','Summer','Autumn','Winter'][state.date.season]} ${state.date.year}`;
  state.log.unshift({stamp,text});
  state.log = state.log.slice(0,70);
  renderLog();
}

function renderLog(){
  eventLog.innerHTML = state.log.length
    ? state.log.map(e=>`<div class="event"><b>${e.stamp}</b> — ${e.text}</div>`).join('')
    : '<div class="event">Belum ada peristiwa besar.</div>';
}

function updateResources(){
  $('goldValue').textContent = formatNum(state.resources.gold);
  $('prestigeValue').textContent = formatNum(state.resources.prestige);
  $('legitimacyValue').textContent = Math.round(state.resources.legitimacy);
  $('armyValue').textContent = formatNum(state.resources.army);
  $('dateValue').textContent = `${state.date.day} ${['Spring','Summer','Autumn','Winter'][state.date.season]}, ${state.date.year}`;
}

function paintMap(){
  document.querySelectorAll('#provinceLayer polygon').forEach(el=>{
    const id = el.dataset.province;
    const realm = REALMS[realmOfProvince(id)];
    el.style.fill = realm.color;
    el.style.opacity = state.mapMode === 'relations' ? relationOpacity(realmOfProvince(id)) : 1;
    el.classList.toggle('selected', id === state.selectedProvince);
  });

  const labels = $('realmLabels');
  labels.innerHTML='';
  const positions = {};
  Object.keys(REALMS).forEach(r=>positions[r]=[]);
  Object.entries(PROVINCES).forEach(([id,p])=>positions[realmOfProvince(id)].push([p.x,p.y]));
  Object.entries(positions).forEach(([rid,pts])=>{
    if(!pts.length) return;
    const x=pts.reduce((a,p)=>a+p[0],0)/pts.length;
    const y=pts.reduce((a,p)=>a+p[1],0)/pts.length;
    const text=document.createElementNS('http://www.w3.org/2000/svg','text');
    text.setAttribute('x',x); text.setAttribute('y',y); text.setAttribute('font-size',Math.max(15,Math.min(26,12+pts.length*2)));
    text.textContent=REALMS[rid].name.toUpperCase();
    labels.appendChild(text);
  });

  $('terrainOverlay').classList.toggle('hidden', state.mapMode !== 'terrain');
}

function relationOpacity(realm){
  if(realm===state.playerRealm) return 1;
  const r=state.relations[realm] || 0;
  return r >= 30 ? .95 : r <= -25 ? .55 : .75;
}

function renderPanel(){
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.panel===state.activePanel));
  if(state.activePanel==='realm') return renderRealmPanel();
  if(state.activePanel==='dynasty') return renderDynastyPanel();
  if(state.activePanel==='court') return renderCourtPanel();
  if(state.activePanel==='marriage') return renderMarriagePanel();
  if(state.activePanel==='diplomacy') return renderDiplomacyPanel();
  if(state.activePanel==='military') return renderMilitaryPanel();
}

function renderRealmPanel(){
  const id=state.selectedProvince;
  const p=PROVINCES[id];
  const rid=realmOfProvince(id);
  const realm=REALMS[rid];
  const ours=rid===state.playerRealm;
  panelContent.innerHTML=`
    <h3 class="section-title">Wilayah Dipilih</h3>
    <div class="card">
      <span class="badge">${p.terrain}</span>
      <h3>${p.name}</h3>
      <p>${realm.name} • ${realm.ruler}</p>
      <div class="stat-grid">
        <div class="stat"><small>Pembangunan</small><strong>${p.dev}</strong></div>
        <div class="stat"><small>Cukai</small><strong>${p.tax} 🪙</strong></div>
        <div class="stat"><small>Levi</small><strong>${p.levy}</strong></div>
        <div class="stat"><small>Status</small><strong>${ours?'Milik Anda':'Asing'}</strong></div>
      </div>
      ${ours ? `
        <div class="action-row">
          <button class="action-btn" onclick="developProvince('${id}')">Bangunkan</button>
          <button class="action-btn" onclick="raiseLocalLevy('${id}')">Ambil Levi</button>
        </div>` : `
        <div class="action-row">
          <button class="action-btn" onclick="fabricateClaim('${id}')">Tuntutan</button>
          <button class="action-btn danger" onclick="prepareWar('${id}')">Perang</button>
        </div>`}
    </div>
    <h3 class="section-title">Kerajaan Anda</h3>
    <div class="stat-grid">
      <div class="stat"><small>Wilayah</small><strong>${ownedProvinceIds().length}</strong></div>
      <div class="stat"><small>Anggaran Kuasa</small><strong>${formatNum(realmArmyEstimate(state.playerRealm))}</strong></div>
      <div class="stat"><small>Legitimasi</small><strong>${Math.round(state.resources.legitimacy)}%</strong></div>
      <div class="stat"><small>Dinasti</small><strong>Liang</strong></div>
    </div>
  `;
}

function renderDynastyPanel(){
  panelContent.innerHTML=`
    <h3 class="section-title">Dinasti Liang</h3>
    <div class="card"><h3>Warisan Keluarga</h3><p>Prestij dinasti bertambah melalui gelaran, perkahwinan, kemenangan perang dan keturunan.</p><div class="progress"><i style="width:${clamp(state.resources.prestige/8,8,100)}%"></i></div></div>
    ${state.dynastyMembers.map(m=>`<div class="list-row"><div><strong>${m.name}</strong><br><small>${m.role}</small></div><span>${m.age} thn</span></div>`).join('')}
    <button class="wide-btn" onclick="holdFamilyCouncil()">Adakan Majlis Keluarga</button>
  `;
}

function renderCourtPanel(){
  const jobs=['Canselor','Marsyal','Pengurus','Sarjana','Perisik'];
  panelContent.innerHTML=`
    <h3 class="section-title">Majlis & Menteri</h3>
    ${jobs.map(job=>{
      const person=state.council[job];
      return `<div class="list-row"><div><strong>${job}</strong><br><small>${person ? `${person.name} • Kemahiran ${person.skill}`:'Kosong'}</small></div><button class="action-btn" onclick="appointCouncil('${job}')">${person?'Tukar':'Lantik'}</button></div>`
    }).join('')}
    <div class="card"><h3>Pentadbiran Vasal</h3><p>Hierarki semasa: <b>Duke → Marquess → Baron</b>. Kesetiaan vasal memberi kesan kepada cukai dan tentera.</p></div>
  `;
}

function renderMarriagePanel(){
  panelContent.innerHTML=`
    <h3 class="section-title">Perkahwinan Dinasti</h3>
    <div class="card">
      <h3>${state.spouse ? `Pasangan: ${state.spouse.name}` : 'Belum Berkahwin'}</h3>
      <p>${state.spouse ? `Wangsa ${state.spouse.house} • ${state.spouse.trait}`:'Cari pasangan untuk pakatan, sifat dan pewaris.'}</p>
      <button class="wide-btn" onclick="openMarriageSearch()">${state.spouse?'Lihat Calon Lain':'Cari Perkahwinan'}</button>
    </div>
    <h3 class="section-title">Gundik</h3>
    ${state.concubines.length ? state.concubines.map(c=>`<div class="list-row"><div><strong>${c.name}</strong><br><small>Wangsa ${c.house}</small></div><span>${c.trait}</span></div>`).join('') : '<div class="card"><p>Tiada gundik di istana.</p></div>'}
    <button class="wide-btn" onclick="openConcubineSearch()">Cari Gundik</button>
  `;
}

function renderDiplomacyPanel(){
  panelContent.innerHTML=`<h3 class="section-title">Hubungan Kerajaan</h3>` + Object.entries(REALMS).filter(([id])=>id!==state.playerRealm).map(([id,r])=>{
    const rel=state.relations[id] || 0;
    return `<div class="card"><h3>${r.name}</h3><p>${r.ruler} • Hubungan <b>${rel}</b></p><div class="progress"><i style="width:${clamp((rel+100)/2,0,100)}%"></i></div><div class="action-row"><button class="action-btn" onclick="sendGift('${id}')">Hantar Hadiah</button><button class="action-btn" onclick="negotiate('${id}')">Runding</button></div></div>`
  }).join('');
}

function renderMilitaryPanel(){
  const borders=new Set();
  ownedProvinceIds().forEach(id=>PROVINCES[id].neighbors.forEach(n=>{ if(realmOfProvince(n)!==state.playerRealm) borders.add(realmOfProvince(n)); }));
  panelContent.innerHTML=`
    <h3 class="section-title">Tentera</h3>
    <div class="stat-grid">
      <div class="stat"><small>Tentera Tetap</small><strong>${formatNum(state.resources.army)}</strong></div>
      <div class="stat"><small>Levi Wilayah</small><strong>${formatNum(ownedProvinceIds().reduce((a,id)=>a+PROVINCES[id].levy,0))}</strong></div>
    </div>
    <div class="card"><h3>Jiran Sempadan</h3><p>${[...borders].map(r=>REALMS[r].name).join(', ') || 'Tiada'}</p></div>
    <button class="wide-btn" onclick="musterArmy()">Kerahkan Tentera (+650)</button>
    <button class="wide-btn" onclick="drillArmy()">Latihan Tentera</button>
    <p style="color:#91866f;font-size:12px">Perang direka lebih berisiko: tuntutan, prestij, kekuatan tentera, medan dan rawak semuanya mempengaruhi keputusan.</p>
  `;
}

function selectProvince(id){ state.selectedProvince=id; state.activePanel='realm'; paintMap(); renderPanel(); }

document.querySelectorAll('#provinceLayer polygon').forEach(el=>el.addEventListener('click',()=>selectProvince(el.dataset.province)));
document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>{state.activePanel=btn.dataset.panel; renderPanel();}));

function setMapMode(mode){
  state.mapMode=mode;
  document.querySelectorAll('.map-toolbar .mini-btn').forEach(b=>b.classList.remove('active'));
  $(`${mode}Mode`)?.classList.add('active');
  $('mapModeLabel').textContent = mode==='political'?'Peta Politik':mode==='terrain'?'Peta Terrain':'Peta Hubungan';
  paintMap();
}
$('politicalMode').onclick=()=>setMapMode('political');
$('terrainMode').onclick=()=>setMapMode('terrain');
$('relationsMode').onclick=()=>setMapMode('relations');

function developProvince(id){
  const p=PROVINCES[id];
  const cost=80+p.dev*12;
  if(state.resources.gold<cost) return addLog(`Pembangunan ${p.name} gagal: emas tidak mencukupi.`);
  state.resources.gold-=cost; p.dev+=1; p.tax+=3; p.levy+=35; state.resources.legitimacy=clamp(state.resources.legitimacy+1,0,100);
  addLog(`${p.name} dibangunkan ke tahap ${p.dev}.`); updateResources(); renderPanel();
}

function raiseLocalLevy(id){
  const gain=Math.round(PROVINCES[id].levy*.18);
  state.resources.army+=gain; state.resources.gold=Math.max(0,state.resources.gold-25); addLog(`${gain} levi dari ${PROVINCES[id].name} menyertai tentera.`); updateResources(); renderPanel();
}

function fabricateClaim(id){
  if(state.claims.includes(id)) return addLog(`Anda sudah mempunyai tuntutan ke atas ${PROVINCES[id].name}.`);
  if(state.resources.prestige<65) return addLog('Prestij tidak cukup untuk membina tuntutan.');
  state.resources.prestige-=65; state.claims.push(id); addLog(`Tuntutan politik ke atas ${PROVINCES[id].name} berjaya dibina.`); updateResources(); renderPanel();
}

function prepareWar(id){
  const targetRealm=realmOfProvince(id);
  const p=PROVINCES[id];
  if(targetRealm===state.playerRealm) return;
  const adjacent=PROVINCES[id].neighbors.some(n=>realmOfProvince(n)===state.playerRealm);
  if(!adjacent) return addLog(`${p.name} tidak bersambung terus dengan sempadan anda.`);
  if(!state.claims.includes(id)) return addLog(`Anda memerlukan tuntutan ke atas ${p.name} sebelum mengisytiharkan perang.`);
  const enemyPower=Math.round(realmArmyEstimate(targetRealm));
  openModal('Isytihar Perang', `
    <div class="card"><h3>${p.name} • ${REALMS[targetRealm].name}</h3><p>Kekuatan anda: <b>${formatNum(realmArmyEstimate(state.playerRealm))}</b><br>Kekuatan musuh: <b>${formatNum(enemyPower)}</b></p><p>Kos: 120 prestij + risiko kehilangan tentera dan legitimasi.</p></div>
    <button class="option danger" onclick="declareWar('${id}')"><strong>Mulakan Kempen</strong><small>Keputusan dipengaruhi kekuatan, medan dan nasib.</small></button>`);
}

function terrainDefense(t){ return ['Gunung','Tebing','Dataran tinggi'].includes(t)?1.18:['Hutan','Bukit'].includes(t)?1.08:1; }
function declareWar(id){
  modal.close();
  if(state.resources.prestige<120) return addLog('Perang dibatalkan: prestij tidak mencukupi.');
  const targetRealm=realmOfProvince(id); const p=PROVINCES[id];
  state.resources.prestige-=120;
  const our=realmArmyEstimate(state.playerRealm)*(0.82+Math.random()*.36);
  const enemy=realmArmyEstimate(targetRealm)*terrainDefense(p.terrain)*(0.82+Math.random()*.4);
  const casualties=Math.round(650+Math.random()*1200);
  state.resources.army=Math.max(650,state.resources.army-casualties);
  if(our>enemy){
    state.provinceRealm[id]=state.playerRealm; state.resources.prestige+=180; state.resources.legitimacy=clamp(state.resources.legitimacy+4,0,100); state.claims=state.claims.filter(x=>x!==id);
    state.relations[targetRealm]=clamp((state.relations[targetRealm]||0)-35,-100,100);
    addLog(`Kemenangan! ${p.name} ditakluk. Anggaran korban: ${formatNum(casualties)}.`);
  } else {
    state.resources.legitimacy=clamp(state.resources.legitimacy-6,0,100); state.resources.gold=Math.max(0,state.resources.gold-140);
    addLog(`Kempen ${p.name} gagal. Anggaran korban: ${formatNum(casualties)}.`);
  }
  updateResources(); paintMap(); renderPanel();
}

function openMarriageSearch(){
  openModal('Cari Perkahwinan', MARRIAGE_CANDIDATES.map((c,i)=>`<button class="option" onclick="marry(${i})"><strong>${c.name}, ${c.age}</strong><small>Wangsa ${c.house} • ${c.trait} • Mahar ${c.dowry} 🪙</small></button>`).join(''));
}
function marry(i){
  const c=MARRIAGE_CANDIDATES[i];
  if(state.resources.gold<c.dowry) return addLog(`Perkahwinan dengan ${c.name} gagal: emas tidak mencukupi.`);
  state.resources.gold-=c.dowry; state.spouse={...c}; state.resources.legitimacy=clamp(state.resources.legitimacy+4,0,100); state.resources.prestige+=45;
  addLog(`Raja Liang Ren berkahwin dengan ${c.name} dari Wangsa ${c.house}.`); modal.close(); updateResources(); renderPanel();
}
function openConcubineSearch(){
  const candidates=MARRIAGE_CANDIDATES.filter(c=>!state.spouse||c.name!==state.spouse.name).slice(0,3);
  openModal('Cari Gundik', candidates.map(c=>`<button class="option" onclick='addConcubine(${JSON.stringify(c)})'><strong>${c.name}</strong><small>Wangsa ${c.house} • ${c.trait}</small></button>`).join(''));
}
function addConcubine(c){ if(state.concubines.some(x=>x.name===c.name)) return; state.concubines.push(c); state.resources.prestige+=12; addLog(`${c.name} memasuki istana sebagai gundik.`); modal.close(); updateResources(); renderPanel(); }

function appointCouncil(job){
  const options=COUNCIL_CANDIDATES.filter(c=>c.job===job || !Object.values(state.council).some(v=>v.name===c.name));
  openModal(`Lantik ${job}`, options.map(c=>`<button class="option" onclick='setCouncil("${job}",${JSON.stringify(c)})'><strong>${c.name}</strong><small>Kemahiran ${c.skill} • Kepakaran ${c.job}</small></button>`).join(''));
}
function setCouncil(job,c){ state.council[job]=c; addLog(`${c.name} dilantik sebagai ${job}.`); modal.close(); renderPanel(); }

function sendGift(rid){
  if(state.resources.gold<100) return addLog('Emas tidak mencukupi untuk hadiah diplomatik.');
  state.resources.gold-=100; state.relations[rid]=clamp((state.relations[rid]||0)+15,-100,100); addLog(`Hadiah dihantar kepada ${REALMS[rid].name}. Hubungan meningkat.`); updateResources(); renderPanel(); paintMap();
}
function negotiate(rid){
  const chance=.48+((state.council.Canselor?.skill||8)-8)*.025;
  if(Math.random()<chance){ state.relations[rid]=clamp((state.relations[rid]||0)+10,-100,100); addLog(`Rundingan dengan ${REALMS[rid].name} berjaya.`);} else {state.relations[rid]=clamp((state.relations[rid]||0)-6,-100,100); addLog(`Rundingan dengan ${REALMS[rid].name} tidak berjalan baik.`);}
  renderPanel(); paintMap();
}

function musterArmy(){
  if(state.resources.gold<160) return addLog('Anda perlukan sekurang-kurangnya 160 emas untuk pengerahan.');
  state.resources.gold-=160; state.resources.army+=650; addLog('650 tentera tambahan dikerahkan.'); updateResources(); renderPanel();
}
function drillArmy(){
  if(state.resources.gold<90) return addLog('Emas tidak mencukupi untuk latihan.');
  state.resources.gold-=90; state.resources.prestige+=18; addLog('Latihan ketenteraan selesai; prestij meningkat.'); updateResources(); renderPanel();
}
function holdFamilyCouncil(){ state.resources.prestige+=15; state.resources.legitimacy=clamp(state.resources.legitimacy+2,0,100); addLog('Majlis Keluarga Liang memperkukuh sokongan dinasti.'); updateResources(); renderPanel(); }

function openModal(title,html){ modalTitle.textContent=title; modalBody.innerHTML=html; modal.showModal(); }

function advanceDate(){
  state.date.day += 1;
  if(state.date.day>30){ state.date.day=1; state.date.season +=1; monthlyEconomy(); }
  if(state.date.season>3){ state.date.season=0; state.date.year +=1; yearlyEvent(); }
  updateResources();
}
function monthlyEconomy(){
  const income=ownedProvinceIds().reduce((a,id)=>a+PROVINCES[id].tax,0);
  const upkeep=Math.round(state.resources.army/130);
  state.resources.gold += Math.max(0,Math.round(income*.32)-upkeep);
  state.resources.prestige += 3;
  if(Math.random()<.22) randomEvent();
}
function yearlyEvent(){
  state.dynastyMembers.forEach(m=>m.age++);
  state.resources.legitimacy=clamp(state.resources.legitimacy+(Math.random()>.45?1:-1),0,100);
  addLog(`Tahun ${state.date.year} bermula. Istana menilai cukai, vasal dan sempadan.`);
}
function randomEvent(){
  const events=[
    ()=>{state.resources.gold+=75; addLog('Pedagang sungai membayar cukai tambahan sebanyak 75 emas.');},
    ()=>{state.resources.prestige+=22; addLog('Sebuah festival diraja meningkatkan prestij anda.');},
    ()=>{state.resources.army=Math.max(500,state.resources.army-110); addLog('Wabak kecil di kem tentera mengurangkan 110 askar.');},
    ()=>{state.resources.legitimacy=clamp(state.resources.legitimacy+2,0,100); addLog('Seorang vasal berpengaruh memperbaharui sumpah setia.');}
  ];
  events[Math.floor(Math.random()*events.length)]();
}

function restartTimer(){
  if(tickHandle) clearInterval(tickHandle);
  if(!state.paused) tickHandle=setInterval(advanceDate, Math.max(220,1200/state.speed));
}
$('pauseBtn').onclick=()=>{ state.paused=!state.paused; $('pauseBtn').classList.toggle('active',state.paused); $('pauseBtn').textContent=state.paused?'⏸':'▶'; restartTimer(); };
document.querySelectorAll('.speed-btn').forEach(btn=>btn.onclick=()=>{
  state.speed=Number(btn.dataset.speed); state.paused=false; $('pauseBtn').classList.remove('active'); $('pauseBtn').textContent='▶'; document.querySelectorAll('.speed-btn').forEach(b=>b.classList.toggle('active',b===btn)); restartTimer();
});

$('saveBtn').onclick=()=>{ localStorage.setItem('mandateDynastiesSave',JSON.stringify(state)); addLog('Permainan disimpan dalam pelayar.'); };
$('loadBtn').onclick=()=>{
  const raw=localStorage.getItem('mandateDynastiesSave'); if(!raw) return addLog('Tiada fail simpanan ditemui.');
  try{ state=JSON.parse(raw); addLog('Permainan berjaya dimuatkan.'); refreshAll(); restartTimer(); }catch(e){ addLog('Fail simpanan tidak dapat dibaca.'); }
};
$('newGameBtn').onclick=()=>openModal('Permainan Baru',`<p>Mulakan semula semua kemajuan?</p><button class="option danger" onclick="newGame()"><strong>Ya, mula semula</strong><small>Simpanan semasa tidak dipadam sehingga anda menekan Simpan.</small></button>`);
$('clearLog').onclick=()=>{state.log=[];renderLog();};
function newGame(){ state=defaultState(); modal.close(); refreshAll(); restartTimer(); addLog('Dinasti Liang memulakan pemerintahannya di Yunzhou.'); }

function refreshAll(){ updateResources(); paintMap(); renderPanel(); renderLog(); }

window.developProvince=developProvince; window.raiseLocalLevy=raiseLocalLevy; window.fabricateClaim=fabricateClaim; window.prepareWar=prepareWar; window.declareWar=declareWar;
window.openMarriageSearch=openMarriageSearch; window.marry=marry; window.openConcubineSearch=openConcubineSearch; window.addConcubine=addConcubine;
window.appointCouncil=appointCouncil; window.setCouncil=setCouncil; window.sendGift=sendGift; window.negotiate=negotiate; window.musterArmy=musterArmy; window.drillArmy=drillArmy; window.holdFamilyCouncil=holdFamilyCouncil; window.newGame=newGame;

addLog('Dinasti Liang memerintah Yunzhou. Pilih wilayah pada peta untuk memulakan.');
refreshAll();
