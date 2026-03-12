import React, { useState, useRef, useEffect } from "react";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700&display=swap');`;

const C = {
  green:"#22C55E", greenDark:"#16A34A", greenLight:"rgba(34,197,94,.12)", greenGlow:"rgba(34,197,94,.25)",
  orange:"#F97316", orangeDark:"#EA580C", orangeLight:"rgba(249,115,22,.12)",
  red:"#F43F5E", redDark:"#E11D48", redLight:"rgba(244,63,94,.12)",
  blue:"#38BDF8", blueDark:"#0284C7", blueLight:"rgba(56,189,248,.10)",
  purple:"#C084FC", purpleDark:"#9333EA", purpleLight:"rgba(192,132,252,.12)",
  yellow:"#FBBF24", yellowDark:"#D97706", yellowLight:"rgba(251,191,36,.12)",
  bg:"#080808", card:"#111111", card2:"#171717", card3:"#1C1C1C",
  text:"#F5F5F5", textMid:"rgba(245,245,245,.6)", textSoft:"rgba(245,245,245,.3)",
  border:"rgba(255,255,255,.07)", borderMid:"rgba(255,255,255,.12)",
  surface:"rgba(255,255,255,.04)", surfaceHover:"rgba(255,255,255,.07)",
};

// ── DATA ──────────────────────────────────────────────────────────────────────
const SHELF_LIFE = {
  // ── CARNES ──
  pollo:2, pechuga:2, muslo:2, ala:2, carne:2, res:2, bistec:2, molida:2,
  cerdo:3, costilla:3, chuleta:3, tocino:10, salchicha:5, chorizo:7,
  jamón:7, pavo:2, pato:2, cordero:3, conejo:3, ternera:2,
  mortadela:5, salami:7, pepperoni:7,
  // ── PESCADOS Y MARISCOS ──
  pescado:1, "salmón":1, atún:2, tilapia:1, robalo:1, mojarra:1,
  "camarón":1, pulpo:2, calamar:1, almeja:1, ostión:1, langosta:2,
  "cangrejo":2, sardina:2, anchoa:3, bacalao:2,
  // ── LÁCTEOS ──
  leche:6, "yogur":7, queso:10, "queso fresco":5, "queso crema":14,
  mantequilla:21, crema:5, "crema ácida":14, huevo:21,
  "leche vegetal":7, kéfir:14, jocoque:7, requesón:5,
  "queso oaxaca":7, "queso manchego":14, "queso gouda":21,
  // ── VERDURAS ──
  lechuga:4, espinaca:4, "brócoli":5, zanahoria:10, jitomate:5,
  pepino:7, cebolla:14, ajo:30, aguacate:3, chile:7, pimiento:7,
  apio:10, coliflor:7, col:14, repollo:14, betabel:14, nabo:10,
  elote:3, chayote:7, calabaza:7, calabacita:5, nopal:5,
  espárrago:4, alcachofa:5, champiñón:5, seta:4, hongo:4,
  ejote:5, habas:5, chícharo:5, edamame:5, poro:7, puerro:7,
  rábano:7, cilantro:5, perejil:5, albahaca:4, hierbabuena:5,
  epazote:5, romero:14, tomillo:14, laurel:30,
  // ── FRUTAS ──
  "limón":14, naranja:14, manzana:21, "plátano":4, fresa:3, uva:7,
  kiwi:5, mango:5, papaya:4, piña:5, melón:5, sandía:5,
  pera:7, durazno:5, chabacano:4, cereza:5, ciruela:5,
  granada:14, maracuyá:5, guayaba:5, tamarindo:30, coco:7,
  mandarina:14, toronja:14, higo:3, frambuesa:3, zarzamora:3,
  arándano:7, lichee:5, pitahaya:5,
  // ── BEBIDAS ──
  jugo:7, cerveza:180, vino:3, refresco:3, agua:365,
  "agua mineral":365, leche:6, "jugo de naranja":7,
  "vino blanco":3, "vino tinto":3, "agua de coco":3,
  kombucha:14, tepache:5, "leche de avena":7,
  // ── CONDIMENTOS Y SALSAS ──
  salsa:30, ketchup:90, mayonesa:60, mostaza:90, mermelada:30,
  "salsa verde":14, "salsa roja":14, "salsa inglesa":365,
  "salsa de soya":180, "aceite de oliva":365, vinagre:365,
  "crema de cacahuate":90, miel:365, cajeta:60, nutella:90,
  "chile en vinagre":60, "chiles en lata":365, pepinillos:60,
  // ── PREPARADOS Y SOBRAS ──
  sopa:3, caldo:3, guisado:3, arroz:3, frijoles:5, lentejas:4,
  pasta:3, pizza:3, tacos:2, enchiladas:2, tamales:4,
  torta:1, sandwich:1, ensalada:2, "arroz con leche":3,
  "caldo de pollo":3, pozole:3, menudo:3, birria:3,
  // ── EMBUTIDOS Y PROCESADOS ──
  "hot dog":7, nuggets:3, "carne molida":2, "milanesa":2,
  "pollo empanizado":3, "camarones empanizados":2,
  // ── PANADERÍA ──
  pan:3, tortilla:5, "tortilla de harina":5, baguette:2,
  bolillo:2, croissant:2, "pan dulce":3, "pan de caja":7,
  // ── DEFAULT ──
  default:7,
};
const EMOJI_MAP = {
  // ── CARNES ──
  pollo:"🍗", pechuga:"🍗", muslo:"🍗", ala:"🍗", carne:"🥩", res:"🥩",
  bistec:"🥩", molida:"🥩", cerdo:"🍖", costilla:"🍖", chuleta:"🍖",
  tocino:"🥓", salchicha:"🌭", chorizo:"🌭", jamón:"🍖", pavo:"🦃",
  pato:"🦆", cordero:"🐑", mortadela:"🍖", salami:"🍖", pepperoni:"🍕",
  // ── PESCADOS ──
  pescado:"🐟", "salmón":"🐠", atún:"🐟", tilapia:"🐟", robalo:"🐟",
  mojarra:"🐟", "camarón":"🦐", pulpo:"🐙", calamar:"🦑", almeja:"🦪",
  ostión:"🦪", langosta:"🦞", "cangrejo":"🦀", sardina:"🐟", anchoa:"🐟",
  // ── LÁCTEOS ──
  leche:"🥛", "yogur":"🫙", queso:"🧀", "queso fresco":"🧀",
  "queso crema":"🧀", mantequilla:"🧈", crema:"🥛", "crema ácida":"🥛",
  huevo:"🥚", kéfir:"🥛", jocoque:"🥛", requesón:"🧀",
  // ── VERDURAS ──
  lechuga:"🥬", espinaca:"🥬", "brócoli":"🥦", zanahoria:"🥕",
  jitomate:"🍅", tomate:"🍅", pepino:"🥒", cebolla:"🧅", ajo:"🧄",
  aguacate:"🥑", chile:"🌶️", pimiento:"🫑", apio:"🥬", coliflor:"🥦",
  col:"🥬", repollo:"🥬", betabel:"🟣", elote:"🌽", calabaza:"🎃",
  calabacita:"🥒", nopal:"🌵", espárrago:"🌿", champiñón:"🍄", seta:"🍄",
  hongo:"🍄", ejote:"🫘", chícharo:"🫘", edamame:"🫘", poro:"🌿",
  rábano:"🔴", cilantro:"🌿", perejil:"🌿", albahaca:"🌿", cebollín:"🌿",
  // ── FRUTAS ──
  "limón":"🍋", naranja:"🍊", manzana:"🍎", "plátano":"🍌", fresa:"🍓",
  uva:"🍇", kiwi:"🥝", mango:"🥭", papaya:"🍈", piña:"🍍", melón:"🍈",
  sandía:"🍉", pera:"🍐", durazno:"🍑", cereza:"🍒", ciruela:"🟣",
  granada:"🍎", guayaba:"🟢", coco:"🥥", mandarina:"🍊", toronja:"🍊",
  higo:"🟣", frambuesa:"🍓", zarzamora:"🫐", arándano:"🫐", pitahaya:"🐉",
  // ── BEBIDAS ──
  jugo:"🧃", cerveza:"🍺", vino:"🍷", refresco:"🥤", agua:"💧",
  "jugo de naranja":"🧃", "vino blanco":"🍾", kombucha:"🫙", tepache:"🫙",
  // ── CONDIMENTOS ──
  salsa:"🫙", ketchup:"🍅", mayonesa:"🫙", mostaza:"🟡", mermelada:"🍓",
  "salsa verde":"🫙", "salsa roja":"🫙", miel:"🍯", cajeta:"🍯",
  "aceite de oliva":"🫒", vinagre:"🫙",
  // ── PREPARADOS ──
  sopa:"🍲", caldo:"🍲", guisado:"🫕", arroz:"🍚", frijoles:"🫘",
  pasta:"🍝", pizza:"🍕", tacos:"🌮", enchiladas:"🫔", tamales:"🫔",
  torta:"🥪", sandwich:"🥪", ensalada:"🥗", pozole:"🍲", birria:"🫕",
  // ── PANADERÍA ──
  pan:"🍞", tortilla:"🫓", baguette:"🥖", bolillo:"🥖", croissant:"🥐",
  "pan dulce":"🍞", "pan de caja":"🍞",
  default:"📦",
};

const SHELVES = [
  { id:"shelf1", label:"Estante 1", color:C.blue,   bg:"rgba(87,200,242,.06)" },
  { id:"shelf2", label:"Estante 2", color:C.green,  bg:"rgba(29,185,84,.06)" },
  { id:"shelf3", label:"Estante 3", color:C.purple, bg:"rgba(167,139,250,.06)" },
  { id:"drawer", label:"Cajón",     color:C.orange, bg:"rgba(245,158,11,.06)" },
];

const SAMPLE = [
  { id:1, name:"Pollo",    emoji:"🍗", category:"shelf1", qty:"500g",  shelfDays:2,  addedDate:"2026-03-10", isOpen:true  },
  { id:2, name:"Salmón",   emoji:"🐠", category:"shelf1", qty:"1 pza", shelfDays:1,  addedDate:"2026-03-10", isOpen:false },
  { id:3, name:"Leche",    emoji:"🥛", category:"shelf2", qty:"1L",    shelfDays:6,  addedDate:"2026-03-08", isOpen:true  },
  { id:4, name:"Aguacate", emoji:"🥑", category:"shelf2", qty:"2 pza", shelfDays:3,  addedDate:"2026-03-09", isOpen:false },
  { id:5, name:"Brócoli",  emoji:"🥦", category:"drawer", qty:"1 pza", shelfDays:5,  addedDate:"2026-03-07", isOpen:false },
  { id:6, name:"Zanahoria",emoji:"🥕", category:"drawer", qty:"3 pza", shelfDays:10, addedDate:"2026-03-05", isOpen:false },
  { id:7, name:"Queso",    emoji:"🧀", category:"shelf3", qty:"200g",  shelfDays:10, addedDate:"2026-03-03", isOpen:true  },
];

function getShelfDays(n) {
  const l = n.toLowerCase();
  for(const [k,v] of Object.entries(SHELF_LIFE)) if(l.includes(k)) return v;
  return SHELF_LIFE.default;
}
function getEmoji(n) {
  const l = n.toLowerCase();
  for(const [k,v] of Object.entries(EMOJI_MAP)) if(l.includes(k)) return v;
  return EMOJI_MAP.default;
}
function daysLeft(item) {
  const exp = new Date(item.addedDate);
  exp.setDate(exp.getDate() + item.shelfDays);
  return Math.ceil((exp - new Date()) / 86400000);
}
function getStatus(days) {
  if(days<=0)  return { color:"#AFAFAF", bg:C.surface, shadow:"#CFCFCF", label:"Vencido", icon:"💀" };
  if(days===1) return { color:C.red,    bg:C.redLight,    shadow:C.redDark,    label:"¡Hoy!",  icon:"🔥" };
  if(days<=3)  return { color:C.orange, bg:C.orangeLight, shadow:C.orangeDark, label:`${days}d`, icon:"⚠️" };
  return             { color:C.green,  bg:C.greenLight,  shadow:C.greenDark,  label:`${days}d`, icon:"✅" };
}

// ── PRODUCT PILL (long press fill to mark used) ───────────────────────────────
function ProductPill({ item, onClick, onDelete, isNew }) {
  const days    = daysLeft(item);
  const st      = getStatus(days);
  const maxDays = item.shelfDays || 14;
  const pct     = Math.max(0, Math.min(100, (days / maxDays) * 100));
  const isUrgent = days >= 0 && days <= 1;

  const [fillPct, setFillPct] = useState(0);
  const [done,    setDone]    = useState(false);
  const rafRef   = useRef(null);
  const startRef = useRef(null);
  const DURATION = 900;

  function startPress(e) {
    e.stopPropagation();
    startRef.current = performance.now();
    function tick(now) {
      const p = Math.min(100, ((now - startRef.current) / DURATION) * 100);
      setFillPct(p);
      if(p < 100) rafRef.current = requestAnimationFrame(tick);
      else { setDone(true); setTimeout(() => onDelete(item.id), 350); }
    }
    rafRef.current = requestAnimationFrame(tick);
  }
  function cancelPress() { cancelAnimationFrame(rafRef.current); setFillPct(0); }

  const filling = fillPct > 0 && !done;

  // Ring geometry
  const SIZE = 72;
  const R    = 30;
  const CIRC = 2 * Math.PI * R;
  const dash = (pct / 100) * CIRC;

  // Ring color matches status
  const ringColor = done ? C.green : st.color;
  // Track color
  const trackColor = "rgba(0,0,0,.08)";

  // Long-press arc overlay (green filling arc)
  const pressDash = (fillPct / 100) * CIRC;

  return (
    <div
      onMouseDown={startPress} onMouseUp={cancelPress} onMouseLeave={cancelPress}
      onTouchStart={startPress} onTouchEnd={cancelPress} onTouchMove={cancelPress}
      onClick={e => { e.stopPropagation(); if(fillPct === 0) onClick(item); }}
      style={{
        position:"relative", flexShrink:0,
        width:80, cursor:"pointer", userSelect:"none", touchAction:"pan-x pan-y",
        display:"flex", flexDirection:"column", alignItems:"center", gap:4,
        transform: filling ? "scale(.93)" : "scale(1)",
        transition:"transform .1s",
        animation: isNew ? "slideIn .35s cubic-bezier(.34,1.56,.64,1)" : "none",
        opacity: done ? 0 : 1,
      }}
    >
      {/* Done overlay */}
      {done && (
        <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,fontSize:32,animation:"popIn .2s cubic-bezier(.34,1.56,.64,1)" }}>✅</div>
      )}

      {/* Ring + emoji */}
      <div style={{ position:"relative", width:SIZE, height:SIZE }}>
        <svg width={SIZE} height={SIZE} style={{ position:"absolute",top:0,left:0,transform:"rotate(-90deg)" }}>
          {/* Track */}
          <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none" stroke={trackColor} strokeWidth={4}/>
          {/* Freshness arc */}
          <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none" stroke={ringColor} strokeWidth={4}
            strokeDasharray={`${dash} ${CIRC}`} strokeLinecap="round"
            opacity={filling ? 0.3 : 1}
          />
          {/* Long-press fill arc (green) */}
          {filling && (
            <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none" stroke={C.green} strokeWidth={4}
              strokeDasharray={`${pressDash} ${CIRC}`} strokeLinecap="round"/>
          )}
        </svg>

        {/* Emoji centered */}
        <div style={{
          position:"absolute", inset:0,
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:30, lineHeight:1,
          filter: isUrgent ? `drop-shadow(0 0 6px ${st.color}88)` : "none",
          animation: isUrgent && !filling ? "popPulse 2s ease-in-out infinite" : "none",
        }}>{item.emoji}</div>

        {/* isOpen badge */}
        {item.isOpen && (
          <div style={{ position:"absolute",top:0,right:0,fontSize:10,background:"rgba(255,255,255,.95)",borderRadius:"50%",width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",border:`1.5px solid ${C.orange}`,boxShadow:`0 1px 4px rgba(0,0,0,.12)`,zIndex:2 }}>🔓</div>
        )}
      </div>

      {/* Name */}
      <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:11,color:"rgba(245,245,245,.75)",textAlign:"center",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:1.2 }}>{item.name}</div>

      {/* Days label */}
      <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:10,color:ringColor,lineHeight:1 }}>
        {days <= 0 ? "¡Hoy!" : `${days}d`}
      </div>
    </div>
  );
}

// ── SHELF ROW ─────────────────────────────────────────────────────────────────
function ShelfRow({ shelf, items, onClick, onDelete, onAdd, addedId }) {
  const shelfItems = items.filter(i=>i.category===shelf.id);
  return (
    <div style={{ marginBottom:6 }}>
      <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 16px 2px" }}>
        <div style={{ display:"flex",alignItems:"center",gap:6 }}>
          <div style={{ width:6,height:6,borderRadius:"50%",background:shelf.color,opacity:.85 }}/>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:9,color:"rgba(245,245,245,.35)",letterSpacing:1.5,textTransform:"uppercase" }}>{shelf.label}</div>
          {shelfItems.length>0&&<div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:9,color:"rgba(245,245,245,.2)",fontWeight:700 }}>{shelfItems.length}</div>}
        </div>
        <div onClick={()=>onAdd(shelf.id)} style={{ width:24,height:24,borderRadius:"50%",background:shelf.color,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:`0 2px 6px ${shelf.color}66` }}>
          <div style={{ color:"#fff",fontSize:16,lineHeight:1,marginTop:-1 }}>+</div>
        </div>
      </div>
      <div style={{ height:120,padding:"6px 14px 8px",display:"flex",gap:14,alignItems:"flex-end",overflowX:"auto",overflowY:"visible",WebkitOverflowScrolling:"touch",scrollbarWidth:"none" }}>
        {shelfItems.length===0
          ? <div style={{ fontSize:11,color:"rgba(245,245,245,.15)",fontFamily:"'Plus Jakarta Sans',sans-serif",fontStyle:"italic",paddingLeft:4 }}>vacío</div>
          : shelfItems.map(item=><ProductPill key={item.id} item={item} onClick={onClick} onDelete={onDelete} isNew={item.id===addedId}/>)
        }
      </div>
    </div>
  );
}

// ── USAR HOY SHELF ────────────────────────────────────────────────────────────
function UsarHoyShelf({ items, onClick, onDelete, addedId, style }) {
  const urgent = items.filter(i=>{ const d=daysLeft(i); return d>=0&&d<=1; });
  if(urgent.length===0) return null;
  return (
    <div style={{ marginBottom:4, ...style }}>
      <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 14px 4px" }}>
        <div style={{ display:"flex",alignItems:"center",gap:6 }}>
          <div style={{ fontSize:14,animation:"popPulse 1.4s ease-in-out infinite" }}>🔥</div>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:9,color:C.red,letterSpacing:1.5,textTransform:"uppercase" }}>Usar hoy</div>
        </div>
        <div style={{ background:"rgba(239,68,68,.12)",color:C.red,borderRadius:20,padding:"2px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:10,border:"1px solid rgba(239,68,68,.25)" }}>{urgent.length} urgente{urgent.length!==1?"s":""}</div>
      </div>
      <div style={{ height:120,padding:"6px 14px 8px",display:"flex",gap:14,alignItems:"flex-end",overflowX:"auto",overflowY:"visible",WebkitOverflowScrolling:"touch",scrollbarWidth:"none" }}>
        {urgent.map(item=><ProductPill key={item.id} item={item} onClick={onClick} onDelete={onDelete} isNew={item.id===addedId}/>)}
      </div>
    </div>
  );
}

// ── FRIDGE INTERIOR SVG ───────────────────────────────────────────────────────
// Shelf row height: label(26) + products(132) + padding(12) + margin(6) = 176px
const SHELF_H = 176;
const SHELF_LABEL_H = 26;
const SHELF_PROD_H  = 120;

function FridgeSVGBackground({ shelfCount, urgentCount, W, H }) {
  const backInset = 44, backRise = 38;
  const backL = backInset, backR = W - backInset;
  const backW = backR - backL;
  const backB = H - backRise * 0.5;

  function lerpY(fy) {
    const by = backRise + (fy / H) * (backB - backRise);
    return by;
  }

  // Wire rail sits right below the product area of each row
  const topPad = 8;
  const shelfYs = Array.from({length: shelfCount}, (_, i) =>
    topPad + i * SHELF_H + SHELF_LABEL_H + SHELF_PROD_H + 4
  );

  function WireShelf({ frontY }) {
    const backY = lerpY(frontY);
    const fL = 0, fR = W, bL = backL, bR = backR;
    const longN = 18, crossN = 9;
    const fronts = Array.from({length:longN},(_,i)=>({ x: fL+(i/(longN-1))*(fR-fL) }));
    const backs  = Array.from({length:longN},(_,i)=>({ x: bL+(i/(longN-1))*(bR-bL) }));
    const crossTs = Array.from({length:crossN},(_,i)=>i/(crossN-1));
    return (
      <g>
        <ellipse cx={W/2} cy={frontY+5} rx={(fR-fL)*0.42} ry={4} fill="rgba(0,0,0,.09)"/>
        {crossTs.map((t,i)=>{
          const lx=fL+(bL-fL)*t, rx=fR+(bR-fR)*t, cy=frontY+(backY-frontY)*t;
          return <line key={i} x1={lx} y1={cy} x2={rx} y2={cy}
            stroke={`rgba(155,182,198,${0.2+t*0.55})`} strokeWidth={0.5+t*0.65}/>;
        })}
        {fronts.map((f,i)=>{
          const b=backs[i], isEdge=i===0||i===longN-1;
          return <line key={i} x1={f.x} y1={frontY} x2={b.x} y2={backY}
            stroke={isEdge?"rgba(172,202,216,.6)":"rgba(150,178,196,.25)"} strokeWidth={isEdge?1.1:0.55}/>;
        })}
        <line x1={bL} y1={backY} x2={bR} y2={backY} stroke="rgba(162,188,202,.78)" strokeWidth={1.8}/>
        <line x1={fL} y1={frontY} x2={bL} y2={backY} stroke="rgba(185,208,220,.82)" strokeWidth={2.2}/>
        <line x1={fR} y1={frontY} x2={bR} y2={backY} stroke="rgba(185,208,220,.82)" strokeWidth={2.2}/>
        <line x1={fL} y1={frontY} x2={fR} y2={frontY} stroke="rgba(215,230,240,1)" strokeWidth={3.5}/>
        <line x1={fL+4} y1={frontY-1.5} x2={fR-4} y2={frontY-1.5} stroke="rgba(255,255,255,.86)" strokeWidth={1.2}/>
        <line x1={fL+4} y1={frontY+2} x2={fR-4} y2={frontY+2} stroke="rgba(115,148,168,.28)" strokeWidth={1}/>
        {[{x:4},{x:W-20}].map((b,i)=>(
          <g key={i}>
            <rect x={b.x} y={frontY-9} width={16} height={9} rx={2}
              fill="rgba(222,234,242,.95)" stroke="rgba(175,202,218,.5)" strokeWidth={0.8}/>
            <rect x={b.x+2} y={frontY-7} width={12} height={3} rx={1} fill="rgba(255,255,255,.5)"/>
          </g>
        ))}
      </g>
    );
  }

  function LeftWall() {
    const pts = [[0,0],[backL,backRise],[backL,backB],[0,H]].map(p=>p.join(",")).join(" ");
    const ribN = Math.ceil(H / 32);
    return (
      <g>
        <defs>
          <linearGradient id="lwg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"  stopColor="#527E8E"/>
            <stop offset="50%" stopColor="#8EB4C2"/>
            <stop offset="100%" stopColor="#BED4DE"/>
          </linearGradient>
        </defs>
        <polygon points={pts} fill="url(#lwg2)"/>
        {Array.from({length:ribN},(_,i)=>{
          const t=(i+0.5)/ribN;
          const fy=t*H, by=backRise+t*(backB-backRise);
          return (
            <g key={i}>
              <line x1={0} y1={fy} x2={backL} y2={by} stroke="rgba(255,255,255,.11)" strokeWidth={6}/>
              <line x1={0} y1={fy-2} x2={backL} y2={by-2} stroke="rgba(255,255,255,.2)" strokeWidth={1.2}/>
              <line x1={0} y1={fy+3} x2={backL} y2={by+3} stroke="rgba(0,0,0,.06)" strokeWidth={1}/>
            </g>
          );
        })}
        <line x1={backL} y1={backRise} x2={backL} y2={backB} stroke="rgba(208,226,236,.72)" strokeWidth={1.5}/>
      </g>
    );
  }

  function RightWall() {
    const pts = [[W,0],[backR,backRise],[backR,backB],[W,H]].map(p=>p.join(",")).join(" ");
    const ribN = Math.ceil(H / 32);
    return (
      <g>
        <defs>
          <linearGradient id="rwg2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%"  stopColor="#527E8E"/>
            <stop offset="50%" stopColor="#8EB4C2"/>
            <stop offset="100%" stopColor="#BED4DE"/>
          </linearGradient>
        </defs>
        <polygon points={pts} fill="url(#rwg2)"/>
        {Array.from({length:ribN},(_,i)=>{
          const t=(i+0.5)/ribN;
          const fy=t*H, by=backRise+t*(backB-backRise);
          return (
            <g key={i}>
              <line x1={W} y1={fy} x2={backR} y2={by} stroke="rgba(255,255,255,.11)" strokeWidth={6}/>
              <line x1={W} y1={fy-2} x2={backR} y2={by-2} stroke="rgba(255,255,255,.2)" strokeWidth={1.2}/>
              <line x1={W} y1={fy+3} x2={backR} y2={by+3} stroke="rgba(0,0,0,.06)" strokeWidth={1}/>
            </g>
          );
        })}
        <line x1={backR} y1={backRise} x2={backR} y2={backB} stroke="rgba(208,226,236,.72)" strokeWidth={1.5}/>
      </g>
    );
  }

  return (
    <svg width={W} height={H} style={{ display:"block", position:"absolute", top:0, left:0, pointerEvents:"none", zIndex:0 }}>
      <defs>
        <radialGradient id="fridgeBg" cx="50%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#F5F9FC"/>
          <stop offset="50%"  stopColor="#E1ECF3"/>
          <stop offset="100%" stopColor="#C4D6E0"/>
        </radialGradient>
        <linearGradient id="topWallG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#5E8EA0"/>
          <stop offset="100%" stopColor="#B8CCD6"/>
        </linearGradient>
        <linearGradient id="botWallG" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor="#4E7A8A"/>
          <stop offset="100%" stopColor="#B0C8D4"/>
        </linearGradient>
        <linearGradient id="lightFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="rgba(255,255,255,.42)"/>
          <stop offset="55%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <polygon points={`${backL},${backRise} ${backR},${backRise} ${backR},${backB} ${backL},${backB}`} fill="url(#fridgeBg)"/>
      <polygon points={`0,0 ${W},0 ${backR},${backRise} ${backL},${backRise}`} fill="url(#topWallG)" opacity={0.9}/>
      <polygon points={`0,${H} ${W},${H} ${backR},${backB} ${backL},${backB}`} fill="url(#botWallG)" opacity={0.85}/>
      <LeftWall/>
      <RightWall/>
      <rect x={backL+14} y={backRise+1} width={backW-28} height={8} fill="rgba(248,253,255,.98)" rx={3}/>
      <rect x={backL+14} y={backRise+1} width={backW-28} height={3} fill="white" rx={2}/>
      <rect x={0} y={0} width={W} height={H} fill="url(#lightFade)"/>
      {shelfYs.map((y,i)=> <WireShelf key={i} frontY={y}/>)}
    </svg>
  );
}

function FridgeInteriorSVG({ items, onProductClick, onDelete, onAddToShelf, addedId }) {
  const containerRef = useRef(null);
  const [svgH, setSvgH] = useState(600);
  const W = 390;

  const urgentItems = items.filter(i=>{ const d=daysLeft(i); return d>=0&&d<=1; });
  const hasUrgent = urgentItems.length > 0;
  const totalRows = (hasUrgent ? 1 : 0) + SHELVES.length;

  useEffect(()=>{
    if(containerRef.current) {
      setSvgH(containerRef.current.offsetHeight);
    }
  });

  return (
    <div ref={containerRef} style={{ position:"relative", overflow:"hidden", paddingTop:8, paddingBottom:8 }}>
      <FridgeSVGBackground shelfCount={totalRows} urgentCount={urgentItems.length} W={W} H={svgH}/>
      <div style={{ position:"relative", zIndex:5 }}>
        <UsarHoyShelf items={items} onClick={onProductClick} onDelete={onDelete} addedId={addedId}/>
        {SHELVES.map(shelf=>(
          <ShelfRow key={shelf.id} shelf={shelf} items={items}
            onClick={onProductClick} onDelete={onDelete} onAdd={onAddToShelf} addedId={addedId}/>
        ))}
      </div>
    </div>
  );
}

// ── FRIDGE ────────────────────────────────────────────────────────────────────
function FridgeOpen({ items, onProductClick, onDelete, onAddToShelf, addedId }) {

  const urgent = items.filter(i=>daysLeft(i)<=1&&daysLeft(i)>=0);

  return (
    <div style={{ margin:"0 16px", position:"relative" }}>
      <div style={{ background:"#C8D8E4",borderRadius:"28px 28px 36px 36px",border:"1.5px solid #A8C0D0",boxShadow:"0 12px 40px rgba(0,0,0,.35)",overflow:"hidden",position:"relative" }}>

        {/* Freezer */}
        <div style={{ background:"linear-gradient(180deg,#B8D0E0,#A8C4D8)",borderBottom:"2px solid #90B0C8",padding:"10px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"relative",overflow:"hidden" }}>
          {/* Frost edge */}
          <div style={{ position:"absolute",bottom:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(87,200,242,.4),transparent)" }}/>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:11,color:"#4A7A96",letterSpacing:1.5,textTransform:"uppercase" }}>❄️ Freezer</div>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,fontSize:11,color:"#4A7A96",background:"rgba(255,255,255,.4)",borderRadius:20,padding:"3px 12px",border:"1px solid rgba(74,122,150,.2)" }}>−18°C</div>
          <div style={{ fontSize:11,color:"rgba(74,122,150,.5)",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>vacío</div>
        </div>

        {/* Interior — SVG perspective background + product rows */}
        <FridgeInteriorSVG
          items={items}
          onProductClick={onProductClick}
          onDelete={onDelete}
          onAddToShelf={onAddToShelf}
          addedId={addedId}
        />

        {/* Bottom bar */}
        <div style={{ height:26,background:"linear-gradient(180deg,#B8CCD8,#A8BCC8)",borderTop:"2px solid #90A8B8",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px" }}>
          <div style={{ fontFamily:"'Fraunces',serif",fontSize:8,color:"rgba(60,90,110,.5)",letterSpacing:2 }}>NO FROST</div>
          <div style={{ width:32,height:4,background:"rgba(0,0,0,.1)",borderRadius:2 }}/>
          <div style={{ fontFamily:"'Fraunces',serif",fontSize:8,color:"rgba(60,90,110,.5)",letterSpacing:2 }}>A+++</div>
        </div>

      </div>


    </div>
  );
}

function Fridge({ items, onProductClick, onDelete, onAddToShelf, addedId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [scale, setScale] = useState(1);

  const handleOpen = () => {
    if (animating) return;
    setAnimating(true);
    // zoom in animation sequence
    let start = null;
    const duration = 420;
    const animate = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setScale(0.92 + eased * 0.08); // 0.92 → 1.0
      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsOpen(true);
        setAnimating(false);
        setScale(1);
      }
    };
    requestAnimationFrame(animate);
  };

  const handleClose = () => setIsOpen(false);

  if (isOpen) {
    return (
      <div style={{ animation:"fridgeOpen .35s cubic-bezier(.2,.8,.3,1) both" }}>
        <style>{`@keyframes fridgeOpen { from { opacity:.6; transform:scale(.88); } to { opacity:1; transform:scale(1); } }`}</style>
        <div style={{ display:"flex", justifyContent:"flex-end", padding:"0 16px 8px" }}>
          <div onClick={handleClose} style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, fontWeight:600, color:"rgba(255,255,255,.35)", cursor:"pointer", letterSpacing:.3 }}>
            cerrar ↙
          </div>
        </div>
        <FridgeOpen items={items} onProductClick={onProductClick} onDelete={onDelete} onAddToShelf={onAddToShelf} addedId={addedId}/>
      </div>
    );
  }

  return (
    <div style={{ transform:`scale(${scale})`, transformOrigin:"center top", transition: animating ? "none" : "transform .1s" }}>
      <FridgeClosed items={items} onOpen={handleOpen}/>
    </div>
  );
}

// ── ADD MODAL ─────────────────────────────────────────────────────────────────
function AddModal({ onAdd, onClose, preselectedCategory }) {
  const [mode,setMode]           = useState("single");
  const [name,setName]           = useState("");
  const [category,setCategory]   = useState(preselectedCategory||"shelf1");
  const [qty,setQty]             = useState("1");
  const [unit,setUnit]           = useState("pza");
  const [isOpen,setIsOpen]       = useState(false);
  const [customDays,setCustomDays] = useState("");
  const [aiResult,setAiResult]   = useState(null);
  const [aiLoading,setAiLoading] = useState(false);
  // batch
  const [batchName,setBatchName] = useState("");
  const [batchItems,setBatchItems] = useState([]);
  const [batchAI,setBatchAI]     = useState({});
  const debounceRef = useRef(null);
  const batchInputRef = useRef(null);
  const fileInputRef  = useRef(null);
  const [scanning,   setScanning]   = useState(false); // ticket scan in progress
  const [scanPreview,setScanPreview] = useState(null);  // base64 image preview
  const [scanError,  setScanError]   = useState(null);

  useEffect(()=>{
    if(name.trim().length<3){ setAiResult(null); return; }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(()=>fetchAI(name.trim(),isOpen),700);
    return ()=>clearTimeout(debounceRef.current);
  },[name,isOpen]);

  async function fetchAI(n,opened) {
    setAiLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages",{ method:"POST",headers:{"Content-Type":"application/json","anthropic-dangerous-direct-browser-access":"true"},
        body:JSON.stringify({ model:"claude-sonnet-4-20250514",max_tokens:80,
          messages:[{role:"user",content:`Producto de refri: "${n}" (${opened?"ya abierto":"sin abrir"}).\nResponde SOLO JSON sin markdown: {"emoji":"🥛","days":7,"note":"leche fresca"}`}]
        })
      });
      const d = await res.json();
      const m = (d.content?.[0]?.text||"").match(/\{[\s\S]*?\}/);
      if(m) setAiResult(JSON.parse(m[0]));
    } catch(e){}
    setAiLoading(false);
  }

  async function fetchBatchAI(n) {
    if(batchAI[n]) return;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages",{ method:"POST",headers:{"Content-Type":"application/json","anthropic-dangerous-direct-browser-access":"true"},
        body:JSON.stringify({ model:"claude-sonnet-4-20250514",max_tokens:60,
          messages:[{role:"user",content:`Producto de refri: "${n}". Solo JSON: {"emoji":"🥕","days":10}`}]
        })
      });
      const d = await res.json();
      const m = (d.content?.[0]?.text||"").match(/\{[\s\S]*?\}/);
      if(m) setBatchAI(prev=>({...prev,[n]:JSON.parse(m[0])}));
    } catch(e){}
  }

  async function scanTicket(file) {
    setScanError(null);
    setScanning(true);
    // Preview
    const reader = new FileReader();
    reader.onload = e => setScanPreview(e.target.result);
    reader.readAsDataURL(file);
    // Base64 for API
    const b64 = await new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(r.result.split(",")[1]); r.onerror=rej; r.readAsDataURL(file); });
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST", headers:{"Content-Type":"application/json","anthropic-dangerous-direct-browser-access":"true"},
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:800,
          messages:[{ role:"user", content:[
            { type:"image", source:{ type:"base64", media_type:file.type||"image/jpeg", data:b64 }},
            { type:"text",  text:`Este es un ticket de supermercado. Extrae SOLO los productos alimenticios (ignora detergentes, papel, artículos del hogar, etc).
Para cada producto devuelve JSON array sin markdown:
[{"name":"Pollo","emoji":"🍗","days":2},{"name":"Leche","emoji":"🥛","days":6}]
- name: nombre limpio en español
- emoji: el más representativo
- days: días de vida útil en refri
Si no ves productos alimenticios claros, devuelve [].` }
          ]}]
        })
      });
      const data = await resp.json();
      const text = data.content?.[0]?.text || "";
      const match = text.match(/\[[\s\S]*?\]/);
      if(match) {
        const products = JSON.parse(match[0]);
        const newItems = products.map(p=>({
          id: Date.now()+Math.random(),
          name: p.name, emoji: p.emoji||getEmoji(p.name),
          shelfDays: p.days||getShelfDays(p.name),
          category: "shelf1", isOpen:false,
          qty:"1 pza", addedDate: new Date().toISOString().split("T")[0],
        }));
        if(newItems.length===0) setScanError("No encontré productos alimenticios en el ticket.");
        else setBatchItems(prev=>[...prev,...newItems]);
      } else {
        setScanError("No pude leer el ticket. Intenta con mejor iluminación.");
      }
    } catch(e) {
      setScanError("Error al procesar. Verifica tu conexión.");
    }
    setScanning(false);
    setScanPreview(null);
  }

  function addBatchItem() {
    const n = batchName.trim(); if(!n) return;
    const ai = batchAI[n];
    setBatchItems(prev=>[...prev,{ id:Date.now()+Math.random(),name:n,emoji:ai?.emoji||getEmoji(n),shelfDays:ai?.days||getShelfDays(n),category:category,isOpen:false,qty:"1 pza",addedDate:new Date().toISOString().split("T")[0] }]);
    setBatchName(""); fetchBatchAI(n);
    setTimeout(()=>batchInputRef.current?.focus(),50);
  }

  const finalEmoji = aiResult?.emoji||getEmoji(name);
  const finalDays  = customDays ? parseInt(customDays) : (aiResult?.days||getShelfDays(name));

  const inp = { width:"100%",background:C.card3,border:`1.5px solid ${C.border}`,borderRadius:12,padding:"13px 16px",color:C.text,fontSize:15,fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,outline:"none",transition:"border-color .15s",WebkitAppearance:"none" };

  return (
    <div style={{ position:"fixed",inset:0,background:"rgba(0,0,0,.7)",display:"flex",alignItems:"flex-end",justifyContent:"center",zIndex:200,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)" }}>
      <div style={{ background:"#111",borderRadius:"24px 24px 0 0",padding:"0 20px 48px",width:"100%",maxWidth:480,boxShadow:"0 -24px 80px rgba(0,0,0,.6)",animation:"slideUp .32s cubic-bezier(.32,0,.67,0)",maxHeight:"94vh",overflowY:"auto",borderTop:`1px solid ${C.borderMid}`,borderLeft:`1px solid ${C.border}`,borderRight:`1px solid ${C.border}` }}>
        {/* Drag handle */}
        <div style={{ display:"flex",justifyContent:"center",padding:"14px 0 18px" }}>
          <div style={{ width:36,height:4,background:C.surface,borderRadius:4,border:`1px solid ${C.borderMid}` }}/>
        </div>

        {/* Mode toggle */}
        <div style={{ display:"flex",gap:6,marginBottom:22,background:C.surface,borderRadius:12,padding:4,border:`1px solid ${C.border}` }}>
          {[{id:"single",icon:"✦",label:"Un producto"},{id:"batch",icon:"🛒",label:"Del súper"}].map(m=>(
            <div key={m.id} onClick={()=>setMode(m.id)} style={{ flex:1,padding:"9px 8px",borderRadius:9,cursor:"pointer",textAlign:"center",background:mode===m.id?C.card2:"transparent",border:mode===m.id?`1px solid ${C.borderMid}`:"1px solid transparent",transition:"all .15s" }}>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:mode===m.id?700:500,color:mode===m.id?C.text:"rgba(245,245,245,.35)" }}>{m.label}</div>
            </div>
          ))}
        </div>

        {mode==="single" && (
          <div>
            {/* Header */}
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20 }}>
              <div style={{ display:"flex",alignItems:"center",gap:12 }}>
                <div style={{ width:54,height:54,borderRadius:16,background:name?C.greenLight:C.surface,border:`1.5px solid ${name?C.green:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,transition:"all .2s" }}>
                  {aiLoading?"⏳":(name?finalEmoji:"🧺")}
                </div>
                <div>
                  <div style={{ fontFamily:"'Fraunces',serif",fontSize:18,color:C.text }}>{name||"¿Qué compraste?"}</div>
                  {aiResult?.note&&!aiLoading&&<div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.green,fontWeight:800,marginTop:2 }}>✨ {aiResult.note}</div>}
                </div>
              </div>
              <div onClick={onClose} style={{ width:34,height:34,borderRadius:10,background:C.surface,border:`1px solid ${C.borderMid}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,color:C.textMid }}>✕</div>
            </div>

            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:10,color:C.textSoft,letterSpacing:1.5,marginBottom:8 }}>PRODUCTO</div>
            <input autoFocus value={name} onChange={e=>setName(e.target.value)} placeholder="ej. leche de almendras, pollo…" style={inp} onFocus={e=>e.target.style.borderColor=C.blue} onBlur={e=>e.target.style.borderColor=C.border}/>

            <div style={{ display:"flex",gap:10,margin:"14px 0" }}>
              {[{val:false,icon:"🔒",label:"Sin abrir",color:C.green,shadow:C.greenDark,bg:C.greenLight},{val:true,icon:"🔓",label:"Ya abierto",color:C.orange,shadow:C.orangeDark,bg:C.orangeLight}].map(opt=>(
                <div key={String(opt.val)} onClick={()=>setIsOpen(opt.val)} style={{ flex:1,padding:"12px",borderRadius:14,cursor:"pointer",textAlign:"center",background:isOpen===opt.val?opt.bg:C.surface,border:`1.5px solid ${isOpen===opt.val?opt.color:C.border}`,transition:"all .15s" }}>
                  <div style={{ fontSize:20,marginBottom:3 }}>{opt.icon}</div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,fontSize:12,color:isOpen===opt.val?opt.color:C.textSoft }}>{opt.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display:"flex",gap:10,marginBottom:14 }}>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:10,color:C.textSoft,letterSpacing:1.5,marginBottom:8 }}>CANTIDAD</div>
                <input type="number" value={qty} onChange={e=>setQty(e.target.value)} style={inp} onFocus={e=>e.target.style.borderColor=C.blue} onBlur={e=>e.target.style.borderColor=C.border}/>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:10,color:C.textSoft,letterSpacing:1.5,marginBottom:8 }}>UNIDAD</div>
                <select value={unit} onChange={e=>setUnit(e.target.value)} style={{ ...inp,cursor:"pointer" }}>
                  {["pza","kg","g","L","ml","paq","lata","bote"].map(u=><option key={u}>{u}</option>)}
                </select>
              </div>
            </div>

            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:10,color:C.textSoft,letterSpacing:1.5,marginBottom:8 }}>¿DÓNDE VA?</div>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14 }}>
              {SHELVES.map(z=>(
                <div key={z.id} onClick={()=>setCategory(z.id)} style={{ padding:"10px 12px",borderRadius:14,cursor:"pointer",background:category===z.id?z.bg:C.surface,border:`1.5px solid ${category===z.id?z.color:C.border}`,transition:"all .15s" }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,fontSize:12,color:category===z.id?z.color:C.textSoft }}>{z.label}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:10,color:C.textSoft,letterSpacing:1.5,marginBottom:8 }}>DÍAS HASTA VENCER</div>
            <div style={{ display:"flex",gap:10,marginBottom:20 }}>
              <div style={{ flex:1,borderRadius:14,padding:"12px 14px",background:aiResult?C.greenLight:C.surface,border:`1.5px solid ${aiResult?C.green:C.border}`,display:"flex",alignItems:"center",gap:8,borderRadius:12 }}>
                {aiLoading ? <><span style={{ fontSize:16,animation:"spin 1s linear infinite" }}>⏳</span><span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.textSoft,fontWeight:700 }}>Calculando…</span></>
                  : aiResult ? <><span style={{ fontSize:16 }}>✨</span><span style={{ fontFamily:"'Fraunces',serif",fontSize:15,color:C.green }}>IA: {aiResult.days}d</span></>
                  : <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.textSoft,fontStyle:"italic" }}>esperando…</span>}
              </div>
              <input type="number" value={customDays} onChange={e=>setCustomDays(e.target.value)} placeholder="Manual" style={{ ...inp,width:90,flex:"none",textAlign:"center" }} onFocus={e=>e.target.style.borderColor=C.blue} onBlur={e=>e.target.style.borderColor=C.border}/>
            </div>

            <div onClick={()=>{ if(!name.trim()) return; onAdd({id:Date.now(),name:name.trim(),emoji:finalEmoji,category,qty:`${qty} ${unit}`,shelfDays:finalDays,addedDate:new Date().toISOString().split("T")[0],isOpen,aiNote:aiResult?.note||null}); onClose(); }} style={{ background:name.trim()?C.green:"rgba(255,255,255,.06)",borderRadius:14,padding:"15px 0",textAlign:"center",cursor:name.trim()?"pointer":"default",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:15,color:name.trim()?"#fff":C.textSoft,transition:"all .2s",boxShadow:name.trim()?`0 8px 24px ${C.greenGlow}`:"none",border:`1px solid ${name.trim()?C.green:C.border}` }}>
              + Agregar {name?finalEmoji:""} al refri
            </div>
          </div>
        )}

        {mode==="batch" && (
          <div>
            {/* Scan ticket button */}
            <input ref={fileInputRef} type="file" accept="image/*" capture="environment" style={{ display:"none" }} onChange={e=>{ if(e.target.files[0]) scanTicket(e.target.files[0]); e.target.value=""; }}/>

            {/* Scanning state */}
            {scanning ? (
              <div style={{ marginBottom:16,borderRadius:20,overflow:"hidden",border:`1px solid ${C.borderMid}`,background:C.card2 }}>
                {scanPreview && <img src={scanPreview} alt="ticket" style={{ width:"100%",maxHeight:180,objectFit:"cover",display:"block",opacity:.5 }}/>}
                <div style={{ padding:"18px 0",textAlign:"center" }}>
                  <div style={{ fontSize:32,animation:"spin 1s linear infinite",display:"inline-block",marginBottom:8 }}>⏳</div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:14,color:C.blue }}>Leyendo ticket…</div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:600,marginTop:4 }}>La IA está extrayendo tus productos</div>
                </div>
              </div>
            ) : (
              <div onClick={()=>fileInputRef.current?.click()} style={{ marginBottom:14,padding:"22px 0",borderRadius:16,border:`1.5px dashed ${C.blue}`,background:C.blueLight,textAlign:"center",cursor:"pointer",transition:"all .15s" }}>
                <div style={{ fontSize:32,marginBottom:6 }}>📷</div>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:14,color:C.blue }}>Escanear ticket</div>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:"rgba(56,189,248,.55)",fontWeight:500,marginTop:3 }}>La IA detecta los productos automáticamente</div>
              </div>
            )}

            {scanError && (
              <div style={{ marginBottom:12,padding:"10px 14px",borderRadius:12,background:C.redLight,border:`2px solid ${C.red}`,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.red,fontWeight:700 }}>
                ⚠️ {scanError}
              </div>
            )}

            {/* Divider */}
            <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:14 }}>
              <div style={{ flex:1,height:1,background:C.border }}/>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:600 }}>o escribe</div>
              <div style={{ flex:1,height:1,background:C.border }}/>
            </div>

            <div style={{ display:"flex",gap:8,marginBottom:14 }}>
              <input ref={batchInputRef} value={batchName} onChange={e=>{ setBatchName(e.target.value); if(e.target.value.length>2) fetchBatchAI(e.target.value.trim()); }} onKeyDown={e=>e.key==="Enter"&&addBatchItem()} placeholder="Escribe un producto y Enter…" style={{ flex:1,background:C.card3,border:`1.5px solid ${C.border}`,borderRadius:12,padding:"13px 16px",color:C.text,fontSize:14,fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,outline:"none",transition:"border-color .15s" }} onFocus={e=>e.target.style.borderColor=C.blue} onBlur={e=>e.target.style.borderColor=C.border}/>
              <div onClick={addBatchItem} style={{ background:C.blue,borderRadius:12,padding:"13px 16px",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:16,color:"#fff",boxShadow:`0 4px 16px rgba(56,189,248,.25)` }}>+</div>
            </div>

            {batchItems.length>0 ? (
              <div style={{ marginBottom:16 }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:10,fontWeight:700,color:C.textSoft,letterSpacing:1.5,marginBottom:10 }}>{batchItems.length} PRODUCTO{batchItems.length>1?"S":""} · toca ✕ para quitar</div>
                <div style={{ display:"flex",flexWrap:"wrap",gap:8 }}>
                  {batchItems.map(item=>(
                    <div key={item.id} style={{ display:"flex",alignItems:"center",gap:6,background:C.greenLight,borderRadius:40,border:`1px solid ${C.green}44`,padding:"6px 10px 6px 8px" }}>
                      <span style={{ fontSize:18 }}>{item.emoji}</span>
                      <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:600,color:C.text }}>{item.name}</span>
                      <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:10,color:C.green,fontWeight:700 }}>{item.shelfDays}d</span>
                      <span onClick={()=>setBatchItems(prev=>prev.filter(i=>i.id!==item.id))} style={{ fontSize:12,color:C.textSoft,cursor:"pointer",marginLeft:2 }}>✕</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ padding:"16px",textAlign:"center",color:C.textSoft,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,fontWeight:500,marginBottom:14 }}>Escanea un ticket o escribe uno por uno 👆</div>
            )}
            <div onClick={batchItems.length>0?()=>{ batchItems.forEach(item=>onAdd({...item,id:Date.now()+Math.random()})); onClose(); }:null} style={{ background:batchItems.length>0?C.green:"rgba(255,255,255,.06)",borderRadius:14,padding:"15px 0",textAlign:"center",cursor:batchItems.length>0?"pointer":"default",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:15,color:batchItems.length>0?"#fff":C.textSoft,border:`1px solid ${batchItems.length>0?C.green:C.border}`,boxShadow:batchItems.length>0?`0 8px 24px ${C.greenGlow}`:"none",transition:"all .2s" }}>
              🛒 Guardar {batchItems.length>0?`${batchItems.length} productos`:"productos"} al refri
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── PRODUCT BOTTOM SHEET ──────────────────────────────────────────────────────
function ProductSheet({ item, onDelete, onToggleOpen, onClose }) {
  const days    = daysLeft(item);
  const st      = getStatus(days);
  const shelf   = SHELVES.find(s=>s.id===item.category);
  const maxDays = item.shelfDays||14;
  const pct     = Math.max(0,Math.min(100,(days/maxDays)*100));

  return (
    <div onClick={onClose} style={{ position:"fixed",inset:0,background:"rgba(0,0,0,.38)",zIndex:200,backdropFilter:"blur(4px)",display:"flex",alignItems:"flex-end" }}>
      <div onClick={e=>e.stopPropagation()} style={{ width:"100%",background:"#111",borderRadius:"24px 24px 0 0",borderTop:`1px solid ${C.borderMid}`,borderLeft:`1px solid ${C.border}`,borderRight:`1px solid ${C.border}`,boxShadow:"0 -24px 80px rgba(0,0,0,.6)",paddingBottom:32,animation:"slideUp .28s cubic-bezier(.32,0,.67,0)" }}>
        <div style={{ display:"flex",justifyContent:"center",padding:"12px 0 6px" }}>
          <div style={{ width:40,height:4,borderRadius:2,background:C.border }}/>
        </div>

        {/* Header */}
        <div style={{ display:"flex",alignItems:"center",gap:14,padding:"8px 20px 16px" }}>
          <div style={{ width:64,height:64,borderRadius:18,flexShrink:0,background:shelf?.bg||C.greenLight,border:`1.5px solid ${shelf?.color||C.green}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:34,position:"relative" }}>
            {item.emoji}
            {item.isOpen&&<div style={{ position:"absolute",top:-7,right:-7,fontSize:13,background:C.card,borderRadius:"50%",width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center",border:`2px solid ${C.orange}`,boxShadow:`0 2px 0 ${C.orangeDark}` }}>🔓</div>}
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:22,fontWeight:600,color:C.text }}>{item.name}</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.textSoft,fontWeight:600,marginTop:2 }}>{item.qty} · {shelf?.label}</div>
            {item.aiNote&&<div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.green,fontWeight:800,marginTop:2 }}>✨ {item.aiNote}</div>}
          </div>
          <div style={{ background:st.bg,border:`1px solid ${st.color}44`,borderRadius:12,padding:"6px 12px",flexShrink:0,textAlign:"center" }}>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:16,color:st.color }}>{st.icon}</div>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:12,color:st.color }}>{days<=0?"Vencido":days===1?"¡Hoy!":`${days}d`}</div>
          </div>
        </div>

        {/* Freshness bar */}
        <div style={{ padding:"0 20px 16px" }}>
          <div style={{ display:"flex",justifyContent:"space-between",marginBottom:6 }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:700 }}>Agregado {new Date(item.addedDate).toLocaleDateString("es-MX",{day:"numeric",month:"long"})}</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:700 }}>{days>0?`${days} de ${maxDays} días`:"Vencido"}</div>
          </div>
          <div style={{ height:5,background:"rgba(255,255,255,.07)",borderRadius:5,overflow:"hidden" }}>
            <div style={{ width:`${pct}%`,height:"100%",background:st.color,borderRadius:5 }}/>
          </div>
        </div>

        {/* Open toggle */}
        <div onClick={()=>onToggleOpen(item.id)} style={{ margin:"0 20px 16px",padding:"13px 16px",borderRadius:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",background:item.isOpen?C.orangeLight:C.greenLight,border:`1.5px solid ${item.isOpen?C.orange:C.green}` }}>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,fontSize:14,color:item.isOpen?C.orange:C.green }}>{item.isOpen?"🔓 Abierto — vida útil reducida":"🔒 Sin abrir — vida útil completa"}</div>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:10,color:C.textSoft,fontWeight:700 }}>cambiar</div>
        </div>

        {/* Actions */}
        <div style={{ display:"flex",gap:10,padding:"0 20px" }}>
          <div onClick={()=>{onDelete(item.id);onClose();}} style={{ flex:1,background:C.redLight,border:`1.5px solid ${C.red}44`,borderRadius:14,padding:"14px 0",textAlign:"center",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:14,color:C.red }}>🗑️ Tirar</div>
          <div onClick={()=>{onDelete(item.id);onClose();}} style={{ flex:2,background:C.green,borderRadius:14,padding:"14px 0",textAlign:"center",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:14,color:"#fff",boxShadow:`0 8px 20px ${C.greenGlow}` }}>✅ Ya lo usé</div>
          <div onClick={onClose} style={{ flex:1,background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"14px 0",textAlign:"center",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,fontSize:14,color:C.textSoft }}>✕</div>
        </div>
      </div>
    </div>
  );
}

// ── LIST ITEM (Inventory view, long press fill to mark used) ─────────────────
function SwipeListItem({ item, onDelete, onTap }) {
  const [fillPct, setFillPct] = useState(0);
  const [done,    setDone]    = useState(false);
  const rafRef   = useRef(null);
  const startRef = useRef(null);
  const DURATION = 900;

  function startPress() {
    startRef.current = performance.now();
    function tick(now) {
      const p = Math.min(100, ((now - startRef.current) / DURATION) * 100);
      setFillPct(p);
      if(p < 100) { rafRef.current = requestAnimationFrame(tick); }
      else { setDone(true); setTimeout(()=>onDelete(item.id), 320); }
    }
    rafRef.current = requestAnimationFrame(tick);
  }
  function cancelPress() { cancelAnimationFrame(rafRef.current); setFillPct(0); }

  const days    = daysLeft(item);
  const st      = getStatus(days);
  const maxDays = item.shelfDays||14;
  const pct     = Math.max(0,Math.min(100,(days/maxDays)*100));
  const filling = fillPct > 0 && !done;

  return (
    <div style={{ position:"relative",marginBottom:8 }}>
      <div
        onMouseDown={startPress} onMouseUp={cancelPress} onMouseLeave={cancelPress}
        onTouchStart={startPress} onTouchEnd={cancelPress} onTouchMove={cancelPress}
        onClick={()=>{ if(fillPct===0) onTap(item); }}
        style={{ display:"flex",alignItems:"center",gap:12,background:C.card,borderRadius:16,padding:"11px 14px",border:`2px solid ${done?C.green:days<=1?st.color:C.border}`,boxShadow:`0 3px 0 ${done?C.greenDark:days<=1?st.color:C.border}`,cursor:"pointer",userSelect:"none",position:"relative",overflow:"hidden",transition:"border-color .2s, box-shadow .2s" }}
      >
        {/* Fill overlay from left */}
        {(filling||done) && (
          <div style={{ position:"absolute",top:0,left:0,bottom:0,width:done?"100%":`${fillPct}%`,background:done?C.green:`rgba(88,204,2,${0.1+fillPct*0.005})`,transition:done?"width .25s ease":"none",pointerEvents:"none",zIndex:1,borderRadius:done?14:"14px 0 0 14px" }}/>
        )}
        <div style={{ fontSize:26,flexShrink:0,position:"relative",zIndex:2 }}>{item.emoji}</div>
        <div style={{ flex:1,minWidth:0,position:"relative",zIndex:2 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5 }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,fontSize:14,color:done?"#fff":C.text,transition:"color .2s" }}>{item.name}{item.isOpen?" 🔓":""}</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:12,color:done?"#fff":st.color,flexShrink:0,marginLeft:8,transition:"color .2s" }}>{done?"✅":st.label}</div>
          </div>
          <div style={{ height:4,background:"rgba(0,0,0,.08)",borderRadius:2,overflow:"hidden" }}>
            <div style={{ width:`${pct}%`,height:"100%",background:done?"rgba(255,255,255,.6)":st.color,borderRadius:2 }}/>
          </div>
        </div>
        <div style={{ fontSize:11,color:done?"#fff":C.textSoft,flexShrink:0,fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,position:"relative",zIndex:2,transition:"color .2s" }}>{done?"🎉":"mantén"}</div>
      </div>
    </div>
  );
}

// ── INVENTORY VIEW ────────────────────────────────────────────────────────────
function InventoryView({ items, onDelete, onTap }) {
  const [activeTab,setActiveTab] = useState("todos");
  const CAT_DEFS = [
    {id:"todos",label:"Todos",emoji:"🍱"},
    {id:"carnes",label:"Carnes",emoji:"🥩"},
    {id:"lácteos",label:"Lácteos",emoji:"🧀"},
    {id:"verduras",label:"Verduras",emoji:"🥦"},
    {id:"frutas",label:"Frutas",emoji:"🍎"},
    {id:"bebidas",label:"Bebidas",emoji:"🍺"},
    {id:"otros",label:"Otros",emoji:"📦"},
  ];
  function getCat(item) {
    const n=item.name.toLowerCase();
    if(["pollo","carne","res","cerdo","pescado","salmón","camarón","atún"].some(k=>n.includes(k))) return "carnes";
    if(["leche","yogur","queso","mantequilla","crema"].some(k=>n.includes(k))) return "lácteos";
    if(["lechuga","espinaca","brócoli","zanahoria","jitomate","pepino","cebolla","ajo"].some(k=>n.includes(k))) return "verduras";
    if(["aguacate","limón","naranja","manzana","plátano","fresa","uva","kiwi"].some(k=>n.includes(k))) return "frutas";
    if(["jugo","cerveza","vino","agua","refresco"].some(k=>n.includes(k))) return "bebidas";
    return "otros";
  }
  const withCat = items.map(i=>({...i,_cat:getCat(i)}));
  const counts  = {};
  withCat.forEach(i=>{ counts[i._cat]=(counts[i._cat]||0)+1; });
  const filtered = activeTab==="todos" ? withCat : withCat.filter(i=>i._cat===activeTab);
  const sorted   = [...filtered].sort((a,b)=>daysLeft(a)-daysLeft(b));

  return (
    <div style={{ padding:"0 16px" }}>
      {/* Tabs */}
      <div style={{ display:"flex",gap:6,overflowX:"auto",paddingBottom:12,scrollbarWidth:"none",msOverflowStyle:"none" }}>
        {CAT_DEFS.filter(c=>c.id==="todos"||counts[c.id]).map(c=>(
          <div key={c.id} onClick={()=>setActiveTab(c.id)} style={{ flexShrink:0,display:"flex",alignItems:"center",gap:5,padding:"7px 14px",borderRadius:20,cursor:"pointer",background:activeTab===c.id?C.green:C.surface,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:activeTab===c.id?700:500,color:activeTab===c.id?"#fff":C.textSoft,border:`1px solid ${activeTab===c.id?C.green:C.border}`,transition:"all .15s" }}>
            <span>{c.emoji}</span><span>{c.label}</span>
            {c.id!=="todos"&&counts[c.id]&&<span style={{ background:activeTab===c.id?"rgba(255,255,255,.3)":C.surface,borderRadius:20,padding:"1px 7px",fontSize:10 }}>{counts[c.id]}</span>}
          </div>
        ))}
      </div>
      <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:500,marginBottom:10,textAlign:"center" }}>← desliza para marcar como usado</div>
      {sorted.length===0
        ? <div style={{ textAlign:"center",padding:"32px 0",color:C.textSoft,fontFamily:"'Fraunces',serif",fontSize:14 }}>Vacío 🎉</div>
        : sorted.map(item=><SwipeListItem key={item.id} item={item} onDelete={onDelete} onTap={onTap}/>)
      }
    </div>
  );
}

// ── RECIPES VIEW ─────────────────────────────────────────────────────────────
function RecipesView({ items, onConsumed }) {
  const [recipes,    setRecipes]    = useState([]);
  const [loading,    setLoading]    = useState(false);
  const [selected,   setSelected]   = useState(null); // recipe detail
  const [detailLoad, setDetailLoad] = useState(false);
  const [detailText, setDetailText] = useState("");
  const [filter,     setFilter]     = useState("urgente"); // urgente | todo | rapido
  const [surprise,   setSurprise]   = useState(false);
  const [saved,      setSaved]      = useState(()=>{ try{ return JSON.parse(localStorage.getItem("mangia_saved")||"[]"); }catch(e){return[];} });
  const [apiError,   setApiError]   = useState("");

  async function generateRecipes(surprise=false) {
    if(items.length===0) return;
    setLoading(true); setRecipes([]); setApiError("");

    const all        = items;
    const urgent     = all.filter(i=>daysLeft(i)<=2);
    const forList    = filter==="urgente" ? (urgent.length>0 ? urgent : all) : all;
    const names      = forList.map(i=>i.name).join(", ");
    const ingredientList = forList.map(i=>`${i.emoji} ${i.name}`).join(", ");

    const prompt = surprise
      ? `Tengo: ${all.map(i=>`${i.emoji} ${i.name}`).join(", ")}. Sorpréndeme con 1 receta creativa. SOLO JSON array:
[{"title":"Nombre","time":20,"difficulty":"Fácil","have":["🍗 Pollo"],"missing":["🧄 Ajo"],"teaser":"descripción 1 línea","urgent":false}]`
      : `Tengo en el refri: ${ingredientList}. ${filter==="rapido"?"Max 20 minutos.":""} Genera 4 recetas. SOLO JSON array sin markdown:
[{"title":"Nombre","time":15,"difficulty":"Fácil","have":["🍗 Pollo"],"missing":["🧄 Ajo"],"teaser":"descripción apetitosa","urgent":false}]`;

    let success = false;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json","anthropic-dangerous-direct-browser-access":"true"},
        body:JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:900,
          messages:[{role:"user",content:prompt}]
        })
      });
      const text = await res.text();
      let data;
      try { data = JSON.parse(text); } catch(e) { setApiError(`Respuesta no JSON: ${text.slice(0,80)}`); data=null; }
      if(data?.content?.[0]?.text) {
        const raw = data.content[0].text;
        const match = raw.match(/\[[\s\S]*\]/);
        if(match) {
          try { setRecipes(JSON.parse(match[0])); success=true; }
          catch(pe) { setApiError(`Parse: ${raw.slice(0,80)}`); }
        } else { setApiError(`Sin JSON array: ${raw.slice(0,80)}`); }
      } else if(data?.error) {
        setApiError(`API: ${data.error.message}`);
      }
    } catch(e){ setApiError(`Fetch: ${e.message}`); }

    // Fallback — biblioteca local de 50+ recetas con matching inteligente
    if(!success) {
      const names = forList.map(i=>i.name.toLowerCase());
      const has = (re) => names.some(n=>re.test(n));

      const hasPollo   = has(/pollo|pechuga|muslo|ala/);
      const hasCarne   = has(/carne|res|bistec|molida|costilla|chuleta|ternera/);
      const hasCerdo   = has(/cerdo|tocino|chorizo|salchicha|jamón|costilla/);
      const hasPescado = has(/pescado|salmón|tilapia|robalo|mojarra|atún|filete/);
      const hasMarisco = has(/camarón|pulpo|calamar|langosta|cangrejo/);
      const hasHuevo   = has(/huevo/);
      const hasQueso   = has(/queso/);
      const hasCrema   = has(/crema/);
      const hasLeche   = has(/leche/);
      const hasVerd    = has(/brócoli|espinaca|lechuga|zanahoria|jitomate|tomate|pepino|calabaz|nopal|chayote|elote|pimiento|chile/);
      const hasPasta   = has(/pasta|espagueti|fettuccine|macarrón/);
      const hasArroz   = has(/arroz/);
      const hasFrijol  = has(/frijol|lenteja|garbanzo/);
      const hasAguacate= has(/aguacate/);
      const hasChile   = has(/chile|jalapeño|serrano|habanero/);
      const hasTomate  = has(/jitomate|tomate/);
      const hasCebolla = has(/cebolla/);
      const hasAjo     = has(/ajo/);
      const hasLimón   = has(/limón/);
      const hasFruta   = has(/mango|fresa|plátano|manzana|piña|durazno|naranja/);

      const ingHave = forList.slice(0,5).map(i=>`${i.emoji} ${i.name}`);
      const urgentNames = urgent.map(u=>u.name);
      const isUrgent = (re) => urgentNames.some(n=>re.test(n.toLowerCase()));

      const ALL_RECIPES = [
        // ── POLLO ──────────────────────────────────────────────────────────────
        { tags:["pollo"], title:"Pollo al limón con ajo",              time:25, difficulty:"Fácil",  teaser:"Jugoso y dorado, el clásico de siempre",                    ing:["pollo","limón","ajo","aceite"] },
        { tags:["pollo"], title:"Pollo en salsa verde",                 time:35, difficulty:"Media",  teaser:"Con tomatillo y chile, sabor mexicano auténtico",           ing:["pollo","tomatillo","chile","cebolla","cilantro"] },
        { tags:["pollo"], title:"Pollo a la crema con champiñones",     time:30, difficulty:"Media",  teaser:"Suave y reconfortante, listo en media hora",               ing:["pollo","crema","champiñón","ajo"] },
        { tags:["pollo"], title:"Milanesa de pollo empanizada",         time:20, difficulty:"Fácil",  teaser:"Crujiente por fuera, tierna por dentro",                   ing:["pollo","huevo","pan"] },
        { tags:["pollo"], title:"Caldo tlalpeño",                       time:45, difficulty:"Media",  teaser:"Caldo aromático con chipotle y garbanzos",                 ing:["pollo","chile","garbanzo","epazote"] },
        { tags:["pollo"], title:"Tacos de pollo al pastor",             time:30, difficulty:"Media",  teaser:"Marinado con achiote y piña",                              ing:["pollo","piña","tortilla","chile"] },
        { tags:["pollo"], title:"Arroz con pollo",                      time:40, difficulty:"Media",  teaser:"Un clásico completo en una sola olla",                     ing:["pollo","arroz","jitomate","cebolla"] },
        { tags:["pollo"], title:"Pollo en adobo con papas",             time:40, difficulty:"Media",  teaser:"El adobo le da una explosión de sabor único",              ing:["pollo","chile guajillo","papa","ajo","vinagre"] },
        { tags:["pollo"], title:"Tinga de pollo",                       time:30, difficulty:"Fácil",  teaser:"Deshebrado en chipotle, perfecto para tostadas o tacos",   ing:["pollo","chile chipotle","jitomate","cebolla"] },
        { tags:["pollo"], title:"Flautas de pollo doradas",             time:25, difficulty:"Fácil",  teaser:"Crujientes y adictivas, con crema y queso",                ing:["pollo","tortilla","crema","queso"] },
        { tags:["pollo"], title:"Enchiladas verdes de pollo",           time:30, difficulty:"Media",  teaser:"Bañadas en salsa verde cremosa",                           ing:["pollo","tomatillo","crema","queso","tortilla"] },
        { tags:["pollo"], title:"Pozole de pollo",                      time:60, difficulty:"Media",  teaser:"Caldito reconfortante con maíz cacahuazintle",             ing:["pollo","maíz","chile","orégano","cebolla"] },
        { tags:["pollo"], title:"Pollo en mole rojo express",           time:35, difficulty:"Media",  teaser:"Versión rápida del mole clásico",                          ing:["pollo","chile mulato","chocolate","ajo","cebolla"] },
        { tags:["pollo"], title:"Sopa de lima yucateca",                time:35, difficulty:"Media",  teaser:"Cítrica y aromática, un clásico del sureste",              ing:["pollo","limón","naranja","tortilla","chile"] },
        { tags:["pollo"], title:"Pollo con rajas y crema",              time:25, difficulty:"Fácil",  teaser:"Chile poblano, crema y queso — irresistible",              ing:["pollo","chile poblano","crema","queso","elote"] },

        // ── CARNE DE RES ───────────────────────────────────────────────────────
        { tags:["carne","res"], title:"Bistec a la mexicana",           time:20, difficulty:"Fácil",  teaser:"Con jitomate, cebolla y chile — listo rápido",             ing:["bistec","jitomate","cebolla","chile"] },
        { tags:["carne","res"], title:"Carne asada al carbón",          time:25, difficulty:"Fácil",  teaser:"Marinada con limón y especias",                            ing:["carne","limón","ajo","comino"] },
        { tags:["carne","molida"], title:"Picadillo con verduras",      time:25, difficulty:"Fácil",  teaser:"Económico, nutritivo y muy versátil",                      ing:["molida","zanahoria","papa","jitomate"] },
        { tags:["carne","molida"], title:"Sopa de albóndigas",          time:40, difficulty:"Media",  teaser:"Caldito sabroso con albóndigas caseras",                   ing:["molida","arroz","zanahoria","jitomate","menta"] },
        { tags:["carne","res"], title:"Estofado de res",                time:90, difficulty:"Media",  teaser:"Carne suave que se deshace, con papas y zanahorias",       ing:["res","papa","zanahoria","cebolla","jitomate"] },
        { tags:["carne","res"], title:"Caldillo de res norteño",        time:50, difficulty:"Media",  teaser:"Caldo espeso con carne y chile colorado",                  ing:["res","chile","papa","jitomate","cebolla"] },
        { tags:["carne","res"], title:"Milanesa de res empanizada",     time:20, difficulty:"Fácil",  teaser:"Clásica con ensalada y limón",                             ing:["bistec","huevo","pan","limón"] },
        { tags:["carne","res"], title:"Birria de res",                  time:120,difficulty:"Difícil",teaser:"El guiso rojo más sabroso de la cocina mexicana",          ing:["res","chile guajillo","chile ancho","ajo","vinagre","comino"] },
        { tags:["carne","molida"], title:"Tacos de carne molida",       time:20, difficulty:"Fácil",  teaser:"Guisada con especias, rápida y rica",                      ing:["molida","cebolla","ajo","jitomate","tortilla"] },
        { tags:["carne","res"], title:"Quesadillas de carne asada",     time:20, difficulty:"Fácil",  teaser:"Con queso fundido y salsa casera",                         ing:["carne","queso","tortilla"] },

        // ── CERDO ──────────────────────────────────────────────────────────────
        { tags:["cerdo"], title:"Carnitas estilo Michoacán",            time:90, difficulty:"Media",  teaser:"Doradas y jugosas, el secreto está en la manteca",        ing:["cerdo","naranja","leche","ajo","sal"] },
        { tags:["cerdo","chorizo"], title:"Huevos con chorizo",         time:10, difficulty:"Fácil",  teaser:"El desayuno mexicano más clásico",                         ing:["chorizo","huevo","tortilla"] },
        { tags:["cerdo","tocino"], title:"Pasta carbonara mexicana",    time:20, difficulty:"Media",  teaser:"Cremosa con tocino crujiente y queso",                     ing:["tocino","huevo","queso","pasta","ajo"] },
        { tags:["cerdo"], title:"Chuletas en salsa de manzana",         time:30, difficulty:"Media",  teaser:"Dulce y salado en perfecta armonía",                       ing:["chuleta","manzana","cebolla","vino"] },
        { tags:["cerdo","jamón"], title:"Sincronizadas de jamón y queso",time:10,difficulty:"Fácil",  teaser:"Rápidas, crujientes y siempre ricas",                      ing:["jamón","queso","tortilla"] },
        { tags:["cerdo"], title:"Costillas en salsa BBQ de chipotle",   time:60, difficulty:"Media",  teaser:"Dulce, ahumado y con ese toque picante",                   ing:["costilla","chile chipotle","jitomate","miel"] },
        { tags:["cerdo","chorizo"], title:"Frijoles charros",           time:40, difficulty:"Fácil",  teaser:"El frijol más festivo y sabroso",                          ing:["frijol","chorizo","tocino","cebolla","chile"] },
        { tags:["cerdo","jamón"], title:"Torta de jamón con aguacate",  time:10, difficulty:"Fácil",  teaser:"Rápida, completa y deliciosa",                             ing:["jamón","aguacate","pan","jitomate"] },
        { tags:["cerdo"], title:"Pozole rojo de cerdo",                 time:90, difficulty:"Media",  teaser:"El platillo de fiesta más querido de México",              ing:["cerdo","maíz","chile guajillo","orégano","cebolla"] },

        // ── PESCADO ────────────────────────────────────────────────────────────
        { tags:["pescado","salmón"], title:"Salmón al horno con limón y eneldo", time:20,difficulty:"Fácil",teaser:"Saludable y listo en 20 minutos",              ing:["salmón","limón","eneldo","aceite","ajo"] },
        { tags:["pescado"], title:"Ceviche de pescado blanco",          time:20, difficulty:"Fácil",  teaser:"Fresco, ácido y lleno de sabor veraniego",                ing:["pescado","limón","jitomate","cebolla","chile","cilantro"] },
        { tags:["pescado","atún"], title:"Tostadas de atún con aguacate",time:10,difficulty:"Fácil",  teaser:"Snack o comida en 10 minutos",                            ing:["atún","aguacate","mayonesa","tostada"] },
        { tags:["pescado"], title:"Tacos de pescado estilo Baja",       time:20, difficulty:"Media",  teaser:"Con col, crema y pico de gallo — los mejores del mundo",  ing:["pescado","col","crema","tortilla","limón"] },
        { tags:["pescado","tilapia"], title:"Tilapia en salsa de jitomate",time:25,difficulty:"Fácil",teaser:"Suave y jugosa en salsa casera",                          ing:["tilapia","jitomate","ajo","cebolla"] },
        { tags:["pescado"], title:"Pescado a la veracruzana",           time:30, difficulty:"Media",  teaser:"Con aceitunas, alcaparras y jitomate — elegante y fácil", ing:["pescado","jitomate","aceituna","alcaparra","cebolla","chile"] },
        { tags:["pescado"], title:"Sopa de mariscos y pescado",         time:40, difficulty:"Media",  teaser:"Caldosa y llena de sabor del mar",                        ing:["pescado","jitomate","ajo","chile","cilantro"] },
        { tags:["pescado","atún"], title:"Ensalada de atún con aguacate",time:10,difficulty:"Fácil",  teaser:"Ligera, nutritiva y sin necesidad de estufa",             ing:["atún","aguacate","limón","cebolla"] },
        { tags:["pescado"], title:"Aguachile verde",                    time:15, difficulty:"Fácil",  teaser:"Picante y refrescante, del Pacífico mexicano",             ing:["camarón","pepino","limón","chile","cilantro"] },

        // ── MARISCOS ───────────────────────────────────────────────────────────
        { tags:["camarón"], title:"Camarones al ajillo",                time:15, difficulty:"Fácil",  teaser:"Con mantequilla, ajo y chile de árbol",                   ing:["camarón","ajo","chile","mantequilla","limón"] },
        { tags:["camarón"], title:"Ceviche de camarón",                 time:15, difficulty:"Fácil",  teaser:"Refrescante y perfecto para el calor",                    ing:["camarón","limón","jitomate","aguacate","cebolla"] },
        { tags:["camarón"], title:"Tacos de camarón con aguacate",      time:20, difficulty:"Fácil",  teaser:"Mar y aguacate en cada mordida",                          ing:["camarón","aguacate","tortilla","col","limón"] },
        { tags:["camarón"], title:"Camarones en salsa de chipotle",     time:20, difficulty:"Fácil",  teaser:"Dulce, ahumado y picante a la vez",                       ing:["camarón","chile chipotle","jitomate","crema"] },
        { tags:["camarón"], title:"Arroz con camarones",                time:30, difficulty:"Media",  teaser:"Un plato completo con mucho sabor",                       ing:["camarón","arroz","jitomate","ajo","cebolla"] },

        // ── HUEVO ──────────────────────────────────────────────────────────────
        { tags:["huevo"], title:"Huevos rancheros",                     time:15, difficulty:"Fácil",  teaser:"Con salsa roja y tortilla crujiente",                     ing:["huevo","jitomate","chile","tortilla"] },
        { tags:["huevo"], title:"Omelette de queso y verduras",         time:10, difficulty:"Fácil",  teaser:"Proteína rápida con lo que tengas",                       ing:["huevo","queso"] },
        { tags:["huevo"], title:"Chilaquiles rojos con huevo",          time:20, difficulty:"Fácil",  teaser:"El desayuno mexicano por excelencia",                     ing:["huevo","tortilla","jitomate","crema","queso"] },
        { tags:["huevo"], title:"Huevos revueltos con nopal",           time:12, difficulty:"Fácil",  teaser:"Saludable y muy mexicano",                                ing:["huevo","nopal","chile","jitomate"] },
        { tags:["huevo"], title:"Frittata de verduras al horno",        time:25, difficulty:"Media",  teaser:"Italiana de corazón, deliciosa siempre",                  ing:["huevo","queso","espinaca","jitomate"] },
        { tags:["huevo"], title:"Huevos a la mexicana",                 time:10, difficulty:"Fácil",  teaser:"Revueltos con jitomate, cebolla y chile",                 ing:["huevo","jitomate","cebolla","chile"] },
        { tags:["huevo"], title:"Huevos motuleños",                     time:20, difficulty:"Media",  teaser:"Yucatecos, con frijol, jamón y plátano",                  ing:["huevo","frijol","jamón","jitomate","tortilla"] },
        { tags:["huevo"], title:"Sopa de pan con huevo pochado",        time:20, difficulty:"Media",  teaser:"Reconfortante y elegante a la vez",                       ing:["huevo","pan","espinaca","ajo"] },
        { tags:["huevo"], title:"Tacos de huevo con chorizo",           time:12, difficulty:"Fácil",  teaser:"Desayuno completo en 12 minutos",                         ing:["huevo","chorizo","tortilla"] },
        { tags:["huevo"], title:"Tortilla española",                    time:25, difficulty:"Media",  teaser:"Con papa y cebolla, jugosa por dentro",                   ing:["huevo","papa","cebolla","aceite"] },

        // ── QUESO / LÁCTEOS ────────────────────────────────────────────────────
        { tags:["queso"], title:"Quesadillas de queso con rajas",       time:12, difficulty:"Fácil",  teaser:"Clásico infalible para cualquier hora",                   ing:["queso","chile poblano","tortilla"] },
        { tags:["queso","crema"], title:"Pasta alfredo casera",         time:20, difficulty:"Media",  teaser:"Cremosa y reconfortante",                                 ing:["pasta","crema","queso","mantequilla","ajo"] },
        { tags:["queso"], title:"Enfrijoladas con queso",               time:20, difficulty:"Fácil",  teaser:"Sencillas pero llenas de sabor",                          ing:["frijol","queso","crema","tortilla"] },
        { tags:["queso"], title:"Dip de queso fundido con chorizo",     time:15, difficulty:"Fácil",  teaser:"Para botanear en buena compañía",                         ing:["queso","chorizo","chile"] },
        { tags:["queso"], title:"Nopales rellenos de queso en salsa roja",time:25,difficulty:"Media", teaser:"Saludables y llenos de sabor",                            ing:["nopal","queso","jitomate","chile"] },
        { tags:["queso","crema"], title:"Rajas con crema y elote",      time:20, difficulty:"Fácil",  teaser:"El guisado favorito de todos — suave y sabroso",          ing:["chile poblano","crema","elote","queso","cebolla"] },
        { tags:["queso"], title:"Sopes de queso y frijol",              time:20, difficulty:"Fácil",  teaser:"Antojito clásico con textura crujiente",                  ing:["queso","frijol","crema","tortilla"] },

        // ── VERDURAS ───────────────────────────────────────────────────────────
        { tags:["brócoli"], title:"Crema de brócoli",                   time:30, difficulty:"Fácil",  teaser:"Suave, nutritiva y muy verde",                            ing:["brócoli","cebolla","ajo","crema"] },
        { tags:["zanahoria"], title:"Ensalada de zanahoria rallada",    time:10, difficulty:"Fácil",  teaser:"Fresca y con mucho carácter",                             ing:["zanahoria","limón","cilantro","aceite"] },
        { tags:["espinaca"], title:"Espinacas salteadas con ajo",       time:10, difficulty:"Fácil",  teaser:"Simple, sano y listo en minutos",                         ing:["espinaca","ajo","aceite"] },
        { tags:["jitomate"], title:"Pico de gallo fresco",             time:10, difficulty:"Fácil",  teaser:"El acompañante perfecto para todo",                       ing:["jitomate","cebolla","chile","cilantro","limón"] },
        { tags:["calabaza"], title:"Calabacitas con elote y crema",    time:20, difficulty:"Fácil",  teaser:"Guisado ligero de temporada",                             ing:["calabacita","elote","crema","cebolla"] },
        { tags:["nopal"], title:"Ensalada de nopales",                 time:15, difficulty:"Fácil",  teaser:"Refrescante y muy mexicana",                              ing:["nopal","jitomate","cebolla","orégano","limón"] },
        { tags:["chayote"], title:"Chayotes en salsa verde",           time:25, difficulty:"Fácil",  teaser:"Tiernos y sabrosos en caldo verde",                       ing:["chayote","tomatillo","chile","ajo"] },
        { tags:["elote"], title:"Esquites al estilo callejero",        time:15, difficulty:"Fácil",  teaser:"En vaso, con mayonesa, queso y chile",                    ing:["elote","mayonesa","queso","chile","limón"] },
        { tags:["elote"], title:"Elote asado con mantequilla",         time:15, difficulty:"Fácil",  teaser:"Simple pero irresistible",                                ing:["elote","mantequilla","queso","chile"] },
        { tags:["chile"], title:"Chile relleno de queso",              time:35, difficulty:"Media",  teaser:"Empanado y en caldillo de jitomate",                      ing:["chile poblano","queso","huevo","jitomate"] },
        { tags:["pimiento"], title:"Pimientos rellenos de arroz",      time:45, difficulty:"Media",  teaser:"Coloridos y completos, un plato muy vistoso",             ing:["pimiento","arroz","jitomate","queso","cebolla"] },
        { tags:["espárrago"], title:"Espárragos a la plancha con limón",time:12,difficulty:"Fácil",  teaser:"Guarnición elegante en 12 minutos",                       ing:["espárrago","limón","aceite","ajo"] },
        { tags:["champiñón"], title:"Champiñones al ajillo",           time:12, difficulty:"Fácil",  teaser:"Salteados con ajo y chile de árbol",                      ing:["champiñón","ajo","chile","aceite","perejil"] },
        { tags:["champiñón"], title:"Crema de champiñones",            time:25, difficulty:"Fácil",  teaser:"Suave, aromática y reconfortante",                        ing:["champiñón","crema","cebolla","ajo"] },
        { tags:["betabel"], title:"Ensalada de betabel con queso de cabra",time:15,difficulty:"Fácil",teaser:"Terrenal, dulce y elegante",                             ing:["betabel","queso","arúgula","nuez","vinagre"] },
        { tags:["zanahoria"], title:"Crema de zanahoria con jengibre", time:30, difficulty:"Fácil",  teaser:"Aromática y llena de vitaminas",                          ing:["zanahoria","jengibre","cebolla","crema"] },

        // ── AGUACATE ───────────────────────────────────────────────────────────
        { tags:["aguacate"], title:"Guacamole clásico",                 time:10, difficulty:"Fácil",  teaser:"Cremoso con el toque de limón perfecto",                  ing:["aguacate","limón","jitomate","cilantro","cebolla","chile"] },
        { tags:["aguacate"], title:"Tostadas de aguacate con huevo",    time:12, difficulty:"Fácil",  teaser:"Desayuno trendy y muy nutritivo",                         ing:["aguacate","huevo","pan","limón"] },
        { tags:["aguacate"], title:"Sopa fría de aguacate",             time:15, difficulty:"Fácil",  teaser:"Fresca y elegante para días de calor",                    ing:["aguacate","crema","ajo","limón"] },
        { tags:["aguacate"], title:"Tacos de aguacate con frijol",      time:15, difficulty:"Fácil",  teaser:"Vegetarianos, cremosos y muy satisfactorios",             ing:["aguacate","frijol","tortilla","limón","chile"] },

        // ── ARROZ ──────────────────────────────────────────────────────────────
        { tags:["arroz"], title:"Arroz rojo mexicano",                  time:25, difficulty:"Fácil",  teaser:"El arroz de abuela, siempre perfecto",                    ing:["arroz","jitomate","cebolla","ajo"] },
        { tags:["arroz"], title:"Arroz frito estilo asiático",          time:20, difficulty:"Media",  teaser:"Con verduras salteadas y soya",                           ing:["arroz","huevo","zanahoria","aceite"] },
        { tags:["arroz"], title:"Arroz con leche",                      time:30, difficulty:"Fácil",  teaser:"Postre cremoso y reconfortante",                          ing:["arroz","leche","canela","azúcar"] },
        { tags:["arroz"], title:"Arroz verde con rajas",                time:25, difficulty:"Fácil",  teaser:"Aromático con espinaca y chile poblano",                  ing:["arroz","espinaca","chile poblano","ajo"] },

        // ── PASTA ──────────────────────────────────────────────────────────────
        { tags:["pasta"], title:"Pasta al jitomate casero",             time:25, difficulty:"Fácil",  teaser:"Salsa desde cero, sabor auténtico",                       ing:["pasta","jitomate","ajo","albahaca"] },
        { tags:["pasta"], title:"Fideos secos mexicanos",               time:20, difficulty:"Fácil",  teaser:"Tostados y guisados en salsa de jitomate",               ing:["pasta","jitomate","cebolla","ajo"] },
        { tags:["pasta","crema"], title:"Espagueti a la crema con champiñones",time:25,difficulty:"Fácil",teaser:"Cremoso y listo en 25 minutos",                      ing:["pasta","champiñón","crema","queso","ajo"] },
        { tags:["pasta"], title:"Mac and cheese mexicano",              time:20, difficulty:"Fácil",  teaser:"Con queso chihuahua y un toque de chile",                 ing:["pasta","queso","leche","chile","mantequilla"] },
        { tags:["pasta"], title:"Pasta con atún y alcaparras",          time:15, difficulty:"Fácil",  teaser:"Rápida, sin estufa casi, muy sabrosa",                    ing:["pasta","atún","aceituna","alcaparra","limón"] },

        // ── FRIJOLES / LEGUMINOSAS ─────────────────────────────────────────────
        { tags:["frijol"], title:"Frijoles de olla",                    time:90, difficulty:"Fácil",  teaser:"El básico más rico de todos",                             ing:["frijol","cebolla","epazote","ajo"] },
        { tags:["frijol"], title:"Enfrijoladas de queso",               time:20, difficulty:"Fácil",  teaser:"Tortillas bañadas en frijol cremoso",                     ing:["frijol","queso","crema","tortilla"] },
        { tags:["frijol"], title:"Molletes con pico de gallo",          time:15, difficulty:"Fácil",  teaser:"Para desayuno o cena express",                            ing:["frijol","queso","pan","jitomate","cebolla"] },
        { tags:["frijol"], title:"Sopa de frijol con chipotle",         time:30, difficulty:"Fácil",  teaser:"Cremosa y con un toque ahumado delicioso",                ing:["frijol","chile chipotle","cebolla","crema"] },
        { tags:["frijol"], title:"Frijoles charros con longaniza",      time:40, difficulty:"Fácil",  teaser:"El frijol festivo y sabroso",                             ing:["frijol","chorizo","tocino","cebolla","chile"] },
        { tags:["lenteja"], title:"Lentejas con verduras y chorizo",    time:40, difficulty:"Fácil",  teaser:"Caldo nutritivo y muy reconfortante",                     ing:["lenteja","chorizo","zanahoria","papa","jitomate"] },
        { tags:["garbanzo"], title:"Garbanzo guisado con jitomate",     time:30, difficulty:"Fácil",  teaser:"Proteína vegetal en guiso sabroso",                       ing:["garbanzo","jitomate","ajo","comino","cebolla"] },

        // ── SOPAS Y CALDOS ─────────────────────────────────────────────────────
        { tags:["sopa"], title:"Sopa de verduras casera",               time:35, difficulty:"Fácil",  teaser:"Nutritiva y reconfortante",                               ing:["zanahoria","papa","cebolla","chícharo"] },
        { tags:["sopa"], title:"Sopa de tortilla",                      time:25, difficulty:"Fácil",  teaser:"El clásico con tortillas fritas, aguacate y crema",       ing:["jitomate","tortilla","chile","ajo","crema","aguacate"] },
        { tags:["sopa"], title:"Sopa de lima yucateca",                 time:35, difficulty:"Media",  teaser:"Cítrica y aromática del sureste",                         ing:["pollo","limón","tortilla","chile","cebolla"] },
        { tags:["sopa"], title:"Sopa de flor de calabaza",              time:25, difficulty:"Fácil",  teaser:"Delicada y muy mexicana",                                 ing:["calabacita","elote","crema","champiñón"] },
        { tags:["sopa"], title:"Caldo de res con verduras",             time:90, difficulty:"Fácil",  teaser:"Caldito reconfortante con todo adentro",                  ing:["res","papa","zanahoria","ejote","elote","calabacita"] },
        { tags:["sopa"], title:"Crema de elote",                        time:25, difficulty:"Fácil",  teaser:"Dulce y suave, perfecta en días fríos",                   ing:["elote","crema","cebolla","ajo","queso"] },

        // ── DESAYUNOS ──────────────────────────────────────────────────────────
        { tags:["desayuno","huevo"], title:"Chilaquiles verdes con pollo",time:20,difficulty:"Fácil", teaser:"Crujientes y bañados en salsa verde",                     ing:["tortilla","tomatillo","pollo","crema","queso"] },
        { tags:["desayuno","huevo"], title:"Machaca con huevo norteña",  time:15, difficulty:"Fácil",  teaser:"Carne seca y huevo, sabor del norte",                    ing:["carne seca","huevo","jitomate","chile","cebolla"] },
        { tags:["desayuno"], title:"Molletes con frijoles y queso",      time:12, difficulty:"Fácil",  teaser:"Rápido, barato y delicioso",                             ing:["pan","frijol","queso","jitomate"] },
        { tags:["desayuno","fruta"], title:"Avena con plátano y canela", time:10, difficulty:"Fácil",  teaser:"Energética y fácil para empezar el día",                 ing:["avena","plátano","leche","canela","miel"] },

        // ── ANTOJITOS ──────────────────────────────────────────────────────────
        { tags:["antojito","tortilla"], title:"Sopes de frijol y queso",time:20, difficulty:"Media",  teaser:"Antojito clásico con borde crujiente",                    ing:["tortilla","frijol","queso","crema","salsa"] },
        { tags:["antojito","tortilla"], title:"Tlacoyos de frijol",      time:30, difficulty:"Media",  teaser:"Masa rellena y cocida a comal — los mejores antojitos",  ing:["masa","frijol","queso","nopal","salsa"] },
        { tags:["antojito","tortilla"], title:"Gorditas de chicharrón",  time:25, difficulty:"Media",  teaser:"Rellenas y doradas, irresistibles",                       ing:["masa","chicharrón","salsa"] },
        { tags:["antojito"], title:"Tostadas de tinga de pollo",         time:30, difficulty:"Fácil",  teaser:"Crujientes con tinga y crema",                            ing:["tortilla","pollo","chile chipotle","crema","queso"] },

        // ── ENSALADAS ──────────────────────────────────────────────────────────
        { tags:["ensalada","lechuga"], title:"Ensalada César mexicana", time:15, difficulty:"Fácil",  teaser:"Con aderezo cremoso y crotones",                          ing:["lechuga","queso","limón","ajo","aceite"] },
        { tags:["ensalada","jitomate"], title:"Ensalada caprese tropical",time:10,difficulty:"Fácil", teaser:"Jitomate, mozzarella y albahaca fresca",                  ing:["jitomate","queso","albahaca","aceite","vinagre"] },
        { tags:["ensalada","aguacate"], title:"Ensalada de aguacate y mango",time:10,difficulty:"Fácil",teaser:"Tropical, cremosa y refrescante",                       ing:["aguacate","mango","limón","chile","cilantro"] },
        { tags:["ensalada"], title:"Ensalada de pepino con limón",       time:8,  difficulty:"Fácil",  teaser:"Refrescante y ligera, lista en minutos",                  ing:["pepino","limón","chile","sal"] },

        // ── POSTRES / BEBIDAS ──────────────────────────────────────────────────
        { tags:["postre","leche"], title:"Arroz con leche",              time:30, difficulty:"Fácil",  teaser:"Clásico, cremoso y reconfortante",                        ing:["arroz","leche","canela","azúcar"] },
        { tags:["postre","fruta"], title:"Fresas con crema",             time:5,  difficulty:"Fácil",  teaser:"Simple pero elegante — siempre funciona",                 ing:["fresa","crema","leche condensada"] },
        { tags:["bebida","fruta"], title:"Agua fresca de jamaica",       time:15, difficulty:"Fácil",  teaser:"Refrescante y llena de antioxidantes",                    ing:["jamaica","azúcar","limón"] },
        { tags:["bebida","fruta"], title:"Smoothie verde energético",    time:5,  difficulty:"Fácil",  teaser:"Vitaminas en vaso, listo en 5 min",                       ing:["espinaca","manzana","pepino","limón","jengibre"] },
        { tags:["bebida","fruta"], title:"Agua de tamarindo con chile",  time:10, difficulty:"Fácil",  teaser:"Agridulce, picante y muy refrescante",                    ing:["tamarindo","chile","azúcar","limón"] },
        { tags:["postre","plátano"], title:"Plátanos fritos con miel",   time:10, difficulty:"Fácil",  teaser:"Dulce, caramelizado y delicioso",                         ing:["plátano","miel","mantequilla","canela"] },

        // ── COMODÍN ────────────────────────────────────────────────────────────
        { tags:["*"], title:"Sopa del día con lo que hay",               time:30, difficulty:"Fácil",  teaser:"Nutritiva con lo que tengas en el refri",                 ing:[] },
        { tags:["*"], title:"Salteado express",                          time:12, difficulty:"Fácil",  teaser:"Sartén caliente, ajo y lo que tengas",                    ing:[] },
        { tags:["*"], title:"Tacos de lo que hay",                       time:15, difficulty:"Fácil",  teaser:"Con tortilla y lo que tengas, siempre funciona",          ing:[] },
      ];

      // ── MATCHING INTELIGENTE ─────────────────────────────────────────────────
      // Build index of what user has in fridge (normalized)
      const fridgeNames = forList.map(i => i.name.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g,""));

      function fridgeHas(keyword) {
        const k = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
        return fridgeNames.some(n => n.includes(k) || k.includes(n));
      }

      // Tag → ingredient group mapping
      const TAG_GROUPS = {
        "pollo":     ["pollo","pechuga","muslo","ala"],
        "carne":     ["carne","bistec","res"],
        "res":       ["res","carne","bistec"],
        "molida":    ["molida"],
        "cerdo":     ["cerdo","costilla","chuleta"],
        "chorizo":   ["chorizo"],
        "tocino":    ["tocino"],
        "jamón":     ["jamon","jamón"],
        "pescado":   ["pescado","tilapia","robalo","mojarra","filete"],
        "salmón":    ["salmon","salmón"],
        "atún":      ["atun","atún"],
        "camarón":   ["camaron","camarón"],
        "huevo":     ["huevo"],
        "queso":     ["queso"],
        "crema":     ["crema"],
        "leche":     ["leche"],
        "brócoli":   ["brocoli","brócoli"],
        "zanahoria": ["zanahoria"],
        "espinaca":  ["espinaca"],
        "jitomate":  ["jitomate","tomate"],
        "calabaza":  ["calabaza","calabacita"],
        "nopal":     ["nopal"],
        "chayote":   ["chayote"],
        "elote":     ["elote"],
        "chile":     ["chile","jalapeño","serrano","habanero"],
        "pimiento":  ["pimiento"],
        "espárrago": ["esparrago","espárrago"],
        "champiñón": ["champiñon","champiñón","hongo","seta"],
        "betabel":   ["betabel"],
        "aguacate":  ["aguacate"],
        "arroz":     ["arroz"],
        "pasta":     ["pasta","espagueti","fettuccine"],
        "frijol":    ["frijol","frijoles"],
        "lenteja":   ["lenteja"],
        "garbanzo":  ["garbanzo"],
        "sopa":      ["*"],
        "desayuno":  ["*"],
        "antojito":  ["*"],
        "ensalada":  ["lechuga","espinaca","jitomate","aguacate"],
        "fruta":     ["fresa","platano","manzana","mango","piña","durazno","naranja","pera"],
        "plátano":   ["platano","plátano"],
        "postre":    ["*"],
        "bebida":    ["*"],
        "*":         ["*"],
      };

      function tagMatches(tag) {
        if(tag === "*") return true;
        const keywords = TAG_GROUPS[tag] || [tag];
        if(keywords.includes("*")) return true;
        return keywords.some(k => fridgeHas(k));
      }

      // Score each recipe: +1 per ingredient user has, flag if urgent ingredient
      function scoreRecipe(r) {
        const matchedTags = r.tags.filter(t => tagMatches(t));
        if(matchedTags.length === 0 && !r.tags.includes("*")) return null;

        // Only show fridge items that actually appear in this recipe's ingredient list
        const recipeIng = (r.ing || []).map(i =>
          i.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
        );
        const matchedFridgeItems = forList.filter(item => {
          const norm = item.name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
          return recipeIng.some(ri => ri.includes(norm) || norm.includes(ri));
        });

        // If recipe has specific ingredients listed, at least one must match fridge
        const ingScore = matchedFridgeItems.length;
        if(r.ing?.length > 0 && ingScore === 0 && !r.tags.includes("*")) return null;

        const haveLabels = matchedFridgeItems.map(i => `${i.emoji} ${i.name}`);

        const isUrgentR = matchedFridgeItems.some(i =>
          urgentNames.some(u => u.toLowerCase() === i.name.toLowerCase())
        );

        return { ...r, ingScore, urgent: isUrgentR, have: haveLabels };
      }

      const scored = ALL_RECIPES
        .map(scoreRecipe)
        .filter(Boolean)
        .sort((a,b) => {
          if(a.urgent && !b.urgent) return -1;
          if(!a.urgent && b.urgent) return 1;
          return b.ingScore - a.ingScore;
        });

      const finalList = surprise
        ? [scored[Math.floor(Math.random()*Math.min(scored.length,20))]].filter(Boolean)
        : scored.slice(0, 8);

      setRecipes(finalList.filter(Boolean));
      setApiError("");
    }


    setLoading(false); setSurprise(false);
  }

    async function getDetail(recipe) {
    setSelected(recipe); setDetailLoad(true); setDetailText("");

    // Build a local fallback recipe from what we know
    function localFallback() {
      const have = (recipe.have||[]).map(i=>i.replace(/^\S+\s/,"")).join(", ");
      const missing = (recipe.missing||[]).map(i=>i.replace(/^\S+\s/,"")).join(", ");
      return `⏱ Tiempo: ${recipe.time||20} min  |  👤 Porciones: 2-3

Ingredientes que tienes:
${(recipe.have||[]).map(i=>`• ${i}`).join("\n") || "• Lo que tengas disponible"}
${missing ? `\nIngredientes adicionales:\n${(recipe.missing||[]).map(i=>`• ${i}`).join("\n")}` : ""}

Pasos:
1. Prepara y lava todos los ingredientes antes de empezar.
2. Calienta un poco de aceite en una sartén o cazuela a fuego medio.
3. Cocina los ingredientes principales siguiendo el orden habitual: primero los que tardan más, luego los demás.
4. Sazona al gusto con sal, pimienta y especias de tu preferencia.
5. Cocina hasta que todo esté en su punto — prueba y ajusta sazón.
6. Sirve caliente y disfruta.

💡 Tip: Para "${recipe.title}", la clave está en no apresurar la cocción — deja que los sabores se integren.`;
    }

    const prompt = `Eres un chef mexicano experto. Dame la receta completa de "${recipe.title}".
Ingredientes disponibles: ${recipe.have?.join(", ") || "básicos de cocina"}.
${recipe.missing?.length ? "También necesita: "+recipe.missing.join(", ")+"." : ""}

Responde SOLO con este formato exacto, sin texto adicional:

⏱ Tiempo: ${recipe.time||20} min  |  👤 Porciones: 2-3

Ingredientes:
• [ingrediente con cantidad]
• [ingrediente con cantidad]

Pasos:
1. [paso claro y concreto]
2. [paso claro y concreto]
3. [paso claro y concreto]

💡 Tip: [consejo útil de una línea]`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{"Content-Type":"application/json","anthropic-dangerous-direct-browser-access":"true"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:700,
          messages:[{role:"user", content:prompt}]
        })
      });
      if(!res.ok) { setDetailText(localFallback()); setDetailLoad(false); return; }
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      setDetailText(text.trim() || localFallback());
    } catch(e) {
      setDetailText(localFallback());
    }
    setDetailLoad(false);
  }

  function saveRecipe(recipe) {
    const already = saved.find(s=>s.title===recipe.title);
    let next;
    if(already) next = saved.filter(s=>s.title!==recipe.title);
    else next = [...saved, recipe];
    setSaved(next);
    try{ localStorage.setItem("mangia_saved", JSON.stringify(next)); }catch(e){}
  }

  function markConsumed(recipe) {
    const usedNames = (recipe.have||[]).map(h=>h.replace(/^\S+\s/,"").toLowerCase());
    const ids = items.filter(i=>usedNames.some(n=>i.name.toLowerCase().includes(n)||n.includes(i.name.toLowerCase()))).map(i=>i.id);
    onConsumed(ids);
    setSelected(null);
  }

  useEffect(()=>{ if(items.length>0) generateRecipes(); }, [filter, items.length]);

  const FILTERS = [
    {id:"urgente", label:"🔥 Urgente", desc:"Usa lo que vence pronto"},
    {id:"todo",    label:"🧊 Todo",    desc:"Todo el refri"},
    {id:"rapido",  label:"⚡ Rápido",  desc:"Menos de 20 min"},
  ];

  return (
    <div style={{ paddingBottom:20, animation:"fadeUp .28s ease" }}>
      {/* Detail sheet */}
      {selected && (
        <div onClick={()=>setSelected(null)} style={{ position:"fixed",inset:0,background:"rgba(0,0,0,.45)",zIndex:200,backdropFilter:"blur(4px)",display:"flex",alignItems:"flex-end" }}>
          <div onClick={e=>e.stopPropagation()} style={{ width:"100%",background:"#111",borderRadius:"24px 24px 0 0",borderTop:`1px solid ${C.borderMid}`,borderLeft:`1px solid ${C.border}`,borderRight:`1px solid ${C.border}`,boxShadow:"0 -24px 80px rgba(0,0,0,.6)",paddingBottom:32,maxHeight:"90vh",overflowY:"auto",animation:"slideUp .28s cubic-bezier(.32,0,.67,0)" }}>
            <div style={{ display:"flex",justifyContent:"center",padding:"12px 0 6px" }}>
              <div style={{ width:40,height:4,borderRadius:2,background:C.border }}/>
            </div>
            <div style={{ padding:"0 20px" }}>
              {/* Header */}
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16 }}>
                <div style={{ flex:1,paddingRight:12 }}>
                  <div style={{ fontFamily:"'Fraunces',serif",fontSize:22,fontWeight:600,color:C.text,lineHeight:1.2,marginBottom:6 }}>{selected.title}</div>
                  <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
                    <div style={{ background:C.blueLight,border:`1px solid ${C.blue}33`,borderRadius:20,padding:"4px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:11,color:C.blue }}>⏱ {selected.time}min</div>
                    <div style={{ background:C.greenLight,border:`1px solid ${C.green}33`,borderRadius:20,padding:"4px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:11,color:C.green }}>{selected.difficulty}</div>
                    {selected.urgent&&<div style={{ background:C.redLight,border:`1px solid ${C.red}33`,borderRadius:20,padding:"4px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:11,color:C.red }}>🔥 Urgente</div>}
                  </div>
                </div>
                <div onClick={()=>saveRecipe(selected)} style={{ fontSize:24,cursor:"pointer",padding:8 }}>{saved.find(s=>s.title===selected.title)?"❤️":"🤍"}</div>
              </div>

              {/* Ingredients */}
              <div style={{ marginBottom:16 }}>
                {selected.have?.length>0&&(
                  <div style={{ marginBottom:8 }}>
                    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:10,color:C.green,letterSpacing:1.5,marginBottom:6 }}>✅ TIENES</div>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                      {selected.have.map((h,i)=><div key={i} style={{ background:C.greenLight,border:`1px solid ${C.green}33`,borderRadius:20,padding:"4px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:600,color:C.text }}>{h}</div>)}
                    </div>
                  </div>
                )}
                {selected.missing?.length>0&&(
                  <div>
                    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:10,color:C.orange,letterSpacing:1.5,marginBottom:6 }}>🛒 TE FALTA</div>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                      {selected.missing.map((m,i)=><div key={i} style={{ background:C.orangeLight,border:`1px solid ${C.orange}33`,borderRadius:20,padding:"4px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:600,color:C.text }}>{m}</div>)}
                    </div>
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div style={{ background:C.card2,borderRadius:14,padding:"18px 16px",marginBottom:16,border:`1px solid ${C.border}`,minHeight:120 }}>
                {detailLoad
                  ? <div style={{ textAlign:"center",padding:"20px 0" }}><div style={{ fontSize:28,animation:"spin 1s linear infinite",display:"inline-block" }}>⏳</div><div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,color:C.textSoft,marginTop:8 }}>Generando instrucciones…</div></div>
                  : <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,color:"rgba(255,255,255,.85)",lineHeight:1.8,fontWeight:500,whiteSpace:"pre-wrap" }}>{detailText}</div>
                }
              </div>

              {/* Actions */}
              <div style={{ display:"flex",gap:10 }}>
                <div onClick={()=>setSelected(null)} style={{ flex:1,background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"14px 0",textAlign:"center",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,fontSize:14,color:C.textSoft }}>✕ Cerrar</div>
                <div onClick={()=>markConsumed(selected)} style={{ flex:2,background:C.green,borderRadius:14,padding:"14px 0",textAlign:"center",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:14,color:"#fff",boxShadow:`0 8px 20px ${C.greenGlow}` }}>🍳 ¡Lo hice! Marcar ingredientes usados</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ padding:"16px 20px 0" }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14 }}>
          <div>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:22,fontWeight:600,color:C.text }}>🍳 Recetas</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.textSoft,fontWeight:600,marginTop:2 }}>con lo que tienes en el refri</div>
          </div>
          <div onClick={()=>{ setSurprise(true); generateRecipes(true); }} style={{ background:C.purple,border:`2px solid ${C.purpleDark}`,boxShadow:`0 4px 0 ${C.purpleDark}`,borderRadius:16,padding:"10px 14px",cursor:"pointer",fontFamily:"'Fraunces',serif",fontSize:13,color:"#fff",textAlign:"center" }}>
            🎲 Sorpréndeme
          </div>
        </div>

        {/* Filters */}
        <div style={{ display:"flex",gap:8,marginBottom:16 }}>
          {FILTERS.map(f=>(
            <div key={f.id} onClick={()=>setFilter(f.id)} style={{ flex:1,padding:"10px 6px",borderRadius:14,cursor:"pointer",textAlign:"center",background:filter===f.id?C.greenLight:C.surface,border:`2px solid ${filter===f.id?C.green:C.border}`,boxShadow:`0 3px 0 ${filter===f.id?C.greenDark:C.border}`,transition:"all .12s" }}>
              <div style={{ fontFamily:"'Fraunces',serif",fontSize:12,color:filter===f.id?C.green:"#888" }}>{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved recipes */}
      {saved.length>0&&(
        <div style={{ padding:"0 20px 16px" }}>
          <div style={{ fontFamily:"'Fraunces',serif",fontSize:11,color:C.textSoft,letterSpacing:1,marginBottom:10 }}>❤️ GUARDADAS</div>
          <div style={{ display:"flex",gap:8,overflowX:"auto",scrollbarWidth:"none",paddingBottom:4 }}>
            {saved.map((r,i)=>(
              <div key={i} onClick={()=>getDetail(r)} style={{ flexShrink:0,background:C.card2,border:`1px solid ${C.border}`,borderRadius:14,padding:"10px 14px",cursor:"pointer",minWidth:140 }}>
                <div style={{ fontFamily:"'Fraunces',serif",fontSize:13,color:C.text,marginBottom:4 }}>{r.title}</div>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:600 }}>⏱ {r.time}min</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recipe cards */}
      <div style={{ padding:"0 20px" }}>
        {loading ? (
          <div style={{ textAlign:"center",padding:"48px 0" }}>
            <div style={{ fontSize:48,animation:"spin 1s linear infinite",display:"inline-block",marginBottom:12 }}>⏳</div>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:16,color:C.text,marginBottom:6 }}>{surprise?"¡Preparando sorpresa…":"Generando recetas…"}</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.textSoft,fontWeight:600 }}>La IA revisa tu refri</div>
          </div>
        ) : apiError ? (
          <div style={{ background:C.redLight,border:`2px solid ${C.red}`,borderRadius:16,padding:"16px",marginBottom:16 }}>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:13,color:C.red,marginBottom:6 }}>⚠️ Error</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.red,fontWeight:700,wordBreak:"break-all",marginBottom:12 }}>{apiError}</div>
            <div onClick={()=>generateRecipes()} style={{ background:C.red,border:`2px solid ${C.redDark}`,boxShadow:`0 3px 0 ${C.redDark}`,borderRadius:12,padding:"10px",textAlign:"center",cursor:"pointer",fontFamily:"'Fraunces',serif",fontSize:13,color:"#fff" }}>🔄 Reintentar</div>
          </div>
        ) : recipes.length===0 ? (
          <div style={{ textAlign:"center",padding:"48px 0" }}>
            <div style={{ fontSize:48,marginBottom:12 }}>🧊</div>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:16,color:C.text,marginBottom:6 }}>No se generaron recetas</div>
            <div onClick={()=>generateRecipes()} style={{ background:C.green,border:`2px solid ${C.greenDark}`,boxShadow:`0 4px 0 ${C.greenDark}`,borderRadius:14,padding:"12px 24px",cursor:"pointer",fontFamily:"'Fraunces',serif",fontSize:14,color:"#fff",marginTop:12,display:"inline-block" }}>🔄 Intentar de nuevo</div>
          </div>
        ) : (
          <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
            {recipes.map((r,i)=>(
              <div key={i} onClick={()=>getDetail(r)} style={{ background:C.card2,borderRadius:16,border:`1px solid ${r.urgent?C.red+"33":C.border}`,padding:"16px",cursor:"pointer",animation:`fadeUp .3s ease ${i*0.07}s both`,position:"relative",overflow:"hidden",transition:"transform .15s,border-color .15s" }}>
                {r.urgent&&<div style={{ position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${C.red},${C.orange})` }}/>}
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8 }}>
                  <div style={{ flex:1,paddingRight:12 }}>
                    <div style={{ fontFamily:"'Fraunces',serif",fontSize:17,color:C.text,lineHeight:1.2,marginBottom:4 }}>{r.title}</div>
                    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.textSoft,fontWeight:600,lineHeight:1.4 }}>{r.teaser}</div>
                  </div>
                  <div onClick={e=>{ e.stopPropagation(); saveRecipe(r); }} style={{ fontSize:20,cursor:"pointer",flexShrink:0 }}>{saved.find(s=>s.title===r.title)?"❤️":"🤍"}</div>
                </div>
                <div style={{ display:"flex",gap:6,flexWrap:"wrap",marginBottom:10 }}>
                  <div style={{ background:C.blueLight,border:`1.5px solid ${C.blue}`,borderRadius:20,padding:"3px 10px",fontFamily:"'Fraunces',serif",fontSize:11,color:C.blue }}>⏱ {r.time}min</div>
                  <div style={{ background:r.difficulty==="Fácil"?C.greenLight:r.difficulty==="Media"?C.orangeLight:C.redLight,border:`1.5px solid ${r.difficulty==="Fácil"?C.green:r.difficulty==="Media"?C.orange:C.red}`,borderRadius:20,padding:"3px 10px",fontFamily:"'Fraunces',serif",fontSize:11,color:r.difficulty==="Fácil"?C.green:r.difficulty==="Media"?C.orange:C.red }}>{r.difficulty}</div>
                  {r.urgent&&<div style={{ background:C.redLight,border:`1.5px solid ${C.red}`,borderRadius:20,padding:"3px 10px",fontFamily:"'Fraunces',serif",fontSize:11,color:C.red }}>🔥 Usa urgentes</div>}
                </div>
                <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                  <div style={{ display:"flex",gap:4,flexWrap:"wrap",flex:1 }}>
                    {(r.have||[]).slice(0,4).map((h,j)=><span key={j} style={{ fontSize:16 }}>{h.split(" ")[0]}</span>)}
                    {(r.have||[]).length>4&&<span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:700,alignSelf:"center" }}>+{r.have.length-4}</span>}
                  </div>
                  {(r.missing||[]).length>0&&(
                    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.orange,fontWeight:800,flexShrink:0 }}>falta {r.missing.length} ingrediente{r.missing.length>1?"s":""}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── SHARE VIEW ────────────────────────────────────────────────────────────────
function ShareView({ items, onReset }) {
  const [copied, setCopied] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const urgent  = items.filter(i=>daysLeft(i)<=1&&daysLeft(i)>=0);
  const warning = items.filter(i=>{ const d=daysLeft(i); return d>1&&d<=3; });
  const fresh   = items.filter(i=>daysLeft(i)>3);

  function buildSummary() {
    let txt = "🧊 *Estado del refri* — " + new Date().toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"}) + "\n\n";
    if(urgent.length>0)  txt += "🔥 *Usar HOY:* " + urgent.map(i=>`${i.emoji} ${i.name}`).join(", ") + "\n";
    if(warning.length>0) txt += "⚠️ *Usar pronto:* " + warning.map(i=>`${i.emoji} ${i.name} (${daysLeft(i)}d)`).join(", ") + "\n";
    if(fresh.length>0)   txt += "✅ *Frescos:* " + fresh.map(i=>`${i.emoji} ${i.name}`).join(", ") + "\n";
    txt += `\n_Total: ${items.length} productos · enviado desde mangIA 🧊_`;
    return txt;
  }

  function copyToClipboard() {
    navigator.clipboard?.writeText(buildSummary()).then(()=>{ setCopied(true); setTimeout(()=>setCopied(false),2500); });
  }

  function shareWhatsApp() {
    const text = encodeURIComponent(buildSummary());
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  return (
    <div style={{ padding:"20px", animation:"fadeUp .28s ease" }}>
      <div style={{ fontFamily:"'Fraunces',serif",fontSize:22,fontWeight:600,color:C.text,marginBottom:4 }}>👨‍👩‍👧 Compartir refri</div>
      <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.textSoft,fontWeight:600,marginBottom:20 }}>Comparte el estado del refri con tu familia o roommates</div>

      {/* Preview */}
      <div style={{ background:C.greenLight,border:`1px solid ${C.green}33`,borderRadius:16,padding:"18px",marginBottom:16 }}>
        <div style={{ fontFamily:"'Fraunces',serif",fontSize:13,color:C.green,letterSpacing:1,marginBottom:12 }}>VISTA PREVIA</div>
        {urgent.length>0&&(
          <div style={{ marginBottom:8 }}>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:13,color:C.red,marginBottom:4 }}>🔥 Usar HOY</div>
            <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>{urgent.map(i=><div key={i.id} style={{ background:C.redLight,border:`1.5px solid ${C.red}`,borderRadius:20,padding:"4px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:700 }}>{i.emoji} {i.name}</div>)}</div>
          </div>
        )}
        {warning.length>0&&(
          <div style={{ marginBottom:8 }}>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:13,color:C.orange,marginBottom:4 }}>⚠️ Usar pronto</div>
            <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>{warning.map(i=><div key={i.id} style={{ background:C.orangeLight,border:`1.5px solid ${C.orange}`,borderRadius:20,padding:"4px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:700 }}>{i.emoji} {i.name} · {daysLeft(i)}d</div>)}</div>
          </div>
        )}
        {fresh.length>0&&(
          <div>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:13,color:C.green,marginBottom:4 }}>✅ Frescos</div>
            <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>{fresh.map(i=><div key={i.id} style={{ background:C.greenLight,border:`1.5px solid ${C.green}`,borderRadius:20,padding:"4px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:700 }}>{i.emoji} {i.name}</div>)}</div>
          </div>
        )}
        {items.length===0&&<div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,color:C.textSoft,fontWeight:600 }}>El refri está vacío 🧊</div>}
      </div>

      {/* Share buttons */}
      <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
        <div onClick={shareWhatsApp} style={{ background:"#25D366",border:"2px solid #1DA851",boxShadow:"0 4px 0 #1DA851",borderRadius:16,padding:"16px",textAlign:"center",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10 }}>
          <span style={{ fontSize:24 }}>💬</span>
          <span style={{ fontFamily:"'Fraunces',serif",fontSize:16,color:"#fff" }}>Compartir por WhatsApp</span>
        </div>
        <div onClick={copyToClipboard} style={{ background:copied?C.greenLight:C.card,border:`2px solid ${copied?C.green:C.border}`,boxShadow:`0 4px 0 ${copied?C.greenDark:C.border}`,borderRadius:16,padding:"16px",textAlign:"center",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all .2s" }}>
          <span style={{ fontSize:24 }}>{copied?"✅":"📋"}</span>
          <span style={{ fontFamily:"'Fraunces',serif",fontSize:16,color:copied?C.green:C.text }}>{copied?"¡Copiado!":"Copiar texto"}</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{ marginTop:20,background:"#141414",border:`1px solid rgba(255,255,255,.07)`,boxShadow:`0 4px 0 ${C.border}`,borderRadius:20,padding:"16px" }}>
        <div style={{ fontFamily:"'Fraunces',serif",fontSize:13,color:C.textSoft,letterSpacing:1,marginBottom:12 }}>📊 RESUMEN</div>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
          {[
            {label:"Total",     v:items.length,        color:C.blue,   bg:C.blueLight},
            {label:"Urgentes",  v:urgent.length,       color:C.red,    bg:C.redLight},
            {label:"Pronto",    v:warning.length,      color:C.orange, bg:C.orangeLight},
            {label:"Frescos",   v:fresh.length,        color:C.green,  bg:C.greenLight},
          ].map(s=>(
            <div key={s.label} style={{ background:s.bg,border:`1px solid ${s.color}40`,borderRadius:14,padding:"12px",textAlign:"center" }}>
              <div style={{ fontFamily:"'Fraunces',serif",fontSize:28,color:s.color }}>{s.v}</div>
              <div style={{ fontFamily:"'Fraunces',serif",fontSize:10,color:s.color,letterSpacing:1,textTransform:"uppercase",marginTop:2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Reset */}
      <div style={{ marginTop:16,textAlign:"center" }}>
        {!confirmReset ? (
          <div onClick={()=>setConfirmReset(true)} style={{ display:"inline-block",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:600,color:"#D1D5DB",cursor:"pointer",padding:"8px 16px",borderRadius:20,border:"1.5px solid #E5E7EB" }}>
            Cambiar nombre / reiniciar app
          </div>
        ) : (
          <div style={{ background:C.redLight,border:`1px solid ${C.red}33`,borderRadius:14,padding:"16px",animation:"fadeUp .2s ease" }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,fontWeight:700,color:C.text,marginBottom:4 }}>¿Reiniciar la app?</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:C.textSoft,marginBottom:14 }}>Se borrará tu nombre y volverás al inicio. Los productos del refri se mantienen.</div>
            <div style={{ display:"flex",gap:10 }}>
              <div onClick={()=>setConfirmReset(false)} style={{ flex:1,padding:"10px 0",borderRadius:12,border:`1.5px solid ${C.border}`,textAlign:"center",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,fontWeight:700,color:C.textSoft,cursor:"pointer" }}>Cancelar</div>
              <div onClick={onReset} style={{ flex:1,padding:"10px 0",borderRadius:12,background:C.red,border:`1.5px solid ${C.redDark}`,textAlign:"center",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,fontWeight:700,color:"#fff",cursor:"pointer" }}>Reiniciar</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function Onboarding({ onDone }) {
  const [step, setStep]     = useState(0);
  const [name, setName]     = useState("");
  const [leaving, setLeaving] = useState(false);

  function finish() {
    if(!name.trim()) return;
    setLeaving(true);
    setTimeout(()=>onDone(name.trim()), 400);
  }

  return (
    <div style={{ position:"fixed",inset:0,zIndex:999,background:"#080808",fontFamily:"'Plus Jakarta Sans',sans-serif",overflow:"hidden" }}>
      <style>{`
        @keyframes ob-rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes ob-glow{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:.8;transform:scale(1.06)}}
        @keyframes ob-in{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
        @keyframes pulse-ring{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.18);opacity:.15}}
        @keyframes pulse-ring2{0%,100%{transform:scale(1);opacity:.3}50%{transform:scale(1.32);opacity:.08}}
        @keyframes bubble-0{0%{transform:translateY(0) scale(.8);opacity:0}8%{opacity:1}80%{opacity:.85}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.05);opacity:0}}
        @keyframes bubble-1{0%{transform:translateY(0) scale(.85);opacity:0}8%{opacity:1}80%{opacity:.8}95%{opacity:0}100%{transform:translateY(-115vh) scale(.95);opacity:0}}
        @keyframes bubble-2{0%{transform:translateY(0) scale(.75);opacity:0}8%{opacity:1}80%{opacity:.85}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.1);opacity:0}}
        @keyframes bubble-3{0%{transform:translateY(0) scale(.9);opacity:0}8%{opacity:1}80%{opacity:.8}95%{opacity:0}100%{transform:translateY(-115vh) scale(.9);opacity:0}}
        @keyframes bubble-4{0%{transform:translateY(0) scale(.7);opacity:0}8%{opacity:.9}80%{opacity:.75}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.05);opacity:0}}
        @keyframes bubble-5{0%{transform:translateY(0) scale(.85);opacity:0}8%{opacity:1}80%{opacity:.8}95%{opacity:0}100%{transform:translateY(-115vh) scale(.95);opacity:0}}
        @keyframes bubble-6{0%{transform:translateY(0) scale(.82);opacity:0}8%{opacity:1}80%{opacity:.85}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.02);opacity:0}}
        @keyframes bubble-7{0%{transform:translateY(0) scale(.78);opacity:0}8%{opacity:.9}80%{opacity:.75}95%{opacity:0}100%{transform:translateY(-115vh) scale(.92);opacity:0}}
        @keyframes bubble-8{0%{transform:translateY(0) scale(.88);opacity:0}8%{opacity:1}80%{opacity:.88}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.08);opacity:0}}
        @keyframes bubble-9{0%{transform:translateY(0) scale(.8);opacity:0}8%{opacity:.95}80%{opacity:.8}95%{opacity:0}100%{transform:translateY(-115vh) scale(.98);opacity:0}}
        @keyframes bubble-10{0%{transform:translateY(0) scale(.85);opacity:0}8%{opacity:1}80%{opacity:.82}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.03);opacity:0}}
        @keyframes bubble-11{0%{transform:translateY(0) scale(.72);opacity:0}8%{opacity:.85}80%{opacity:.7}95%{opacity:0}100%{transform:translateY(-115vh) scale(.9);opacity:0}}
        @keyframes bubble-12{0%{transform:translateY(0) scale(.86);opacity:0}8%{opacity:1}80%{opacity:.86}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.06);opacity:0}}
        @keyframes bubble-13{0%{transform:translateY(0) scale(.83);opacity:0}8%{opacity:.95}80%{opacity:.78}95%{opacity:0}100%{transform:translateY(-115vh) scale(.96);opacity:0}}
        @keyframes bubble-14{0%{transform:translateY(0) scale(.76);opacity:0}8%{opacity:.9}80%{opacity:.72}95%{opacity:0}100%{transform:translateY(-115vh) scale(.94);opacity:0}}
        @keyframes bubble-15{0%{transform:translateY(0) scale(.84);opacity:0}8%{opacity:1}80%{opacity:.84}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.01);opacity:0}}
      `}</style>

      {/* ── STEP 0 — SPLASH ── */}
      {step===0&&(
        <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",animation:"ob-in .45s ease" }}>

          {/* Burbujas — capa absoluta fondo completo */}
          <div style={{ position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0 }}>
            {[
              { emoji:"🍗", size:56, left:"4%",  dur:"10.5s", delay:"-1.2s", bg:"rgba(239,68,68,.15)",   border:"rgba(239,68,68,.3)"   },
              { emoji:"🥛", size:44, left:"18%", dur:"12.5s", delay:"-4.1s", bg:"rgba(255,255,255,.08)", border:"rgba(255,255,255,.15)"  },
              { emoji:"🥑", size:52, left:"36%", dur:"11.2s", delay:"-2.7s", bg:"rgba(29,185,84,.15)",   border:"rgba(29,185,84,.25)"    },
              { emoji:"🧀", size:42, left:"56%", dur:"13.5s", delay:"-0.4s", bg:"rgba(245,158,11,.15)",  border:"rgba(245,158,11,.28)"  },
              { emoji:"🥦", size:50, left:"74%", dur:"11.8s", delay:"-3.8s", bg:"rgba(34,197,94,.12)",   border:"rgba(34,197,94,.22)"   },
              { emoji:"🥚", size:38, left:"88%", dur:"13.0s", delay:"-1.6s", bg:"rgba(255,255,255,.07)", border:"rgba(255,255,255,.12)"  },
              { emoji:"🍓", size:46, left:"10%", dur:"14.5s", delay:"-3.0s", bg:"rgba(239,68,68,.12)",   border:"rgba(239,68,68,.22)"    },
              { emoji:"🧅", size:36, left:"30%", dur:"12.2s", delay:"-5.2s", bg:"rgba(245,158,11,.1)",   border:"rgba(245,158,11,.18)"  },
              { emoji:"🍋", size:48, left:"50%", dur:"10.8s", delay:"-2.5s", bg:"rgba(251,191,36,.12)",  border:"rgba(251,191,36,.22)"   },
              { emoji:"🥕", size:40, left:"68%", dur:"14.0s", delay:"-0.9s", bg:"rgba(245,158,11,.12)",  border:"rgba(245,158,11,.2)"   },
              { emoji:"🍖", size:44, left:"84%", dur:"12.0s", delay:"-4.4s", bg:"rgba(239,68,68,.12)",   border:"rgba(239,68,68,.22)"   },
              { emoji:"🫙", size:34, left:"22%", dur:"15.0s", delay:"-1.8s", bg:"rgba(255,255,255,.06)", border:"rgba(255,255,255,.1)"   },
              { emoji:"🍊", size:50, left:"44%", dur:"11.5s", delay:"-5.5s", bg:"rgba(245,158,11,.14)",  border:"rgba(245,158,11,.24)"   },
              { emoji:"🥩", size:46, left:"62%", dur:"10.2s", delay:"-2.1s", bg:"rgba(239,68,68,.14)",   border:"rgba(239,68,68,.26)"   },
              { emoji:"🍺", size:38, left:"8%",  dur:"13.2s", delay:"-3.3s", bg:"rgba(251,191,36,.1)",   border:"rgba(251,191,36,.18)"  },
              { emoji:"🥬", size:42, left:"78%", dur:"11.0s", delay:"-0.6s", bg:"rgba(34,197,94,.12)",   border:"rgba(34,197,94,.2)"    },
            ].map((b,i)=>(
              <div key={i} style={{
                position:"absolute",
                left:b.left,
                bottom:"-60px",
                width:b.size,
                height:b.size,
                borderRadius:"50%",
                background:b.bg,
                border:`1.5px solid ${b.border}`,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:Math.round(b.size*0.46),
                lineHeight:1,
                animationName:`bubble-${i}`,
                animationDuration:b.dur,
                animationDelay:b.delay,
                animationIterationCount:"infinite",
                animationTimingFunction:"ease-in-out",
                animationFillMode:"both",
              }}>
                {b.emoji}
              </div>
            ))}
          </div>

          {/* Top — logo area */}
          <div style={{ flex:1.2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative" }}>
            {/* Background glow */}
            <div style={{ position:"absolute",width:280,height:280,borderRadius:"50%",background:"radial-gradient(circle,rgba(29,185,84,.18) 0%,transparent 70%)",animation:"ob-glow 4s ease-in-out infinite",pointerEvents:"none" }}/>

            {/* Logo mark — just text, no icon box */}
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:56,color:"#fff",letterSpacing:-1.5,lineHeight:1,marginBottom:10,position:"relative" }}>
              mang<span style={{ color:C.green }}>IA</span>
            </div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:14,color:"rgba(255,255,255,.28)",fontWeight:500,letterSpacing:2,textTransform:"uppercase" }}>
              Tu refri inteligente
            </div>
          </div>

          {/* Bottom — features + CTA */}
          <div style={{ flex:1,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"0 28px 52px",position:"relative",zIndex:1 }}>


            {/* CTA — círculo pulsando */}
            <div onClick={()=>setStep(1)} style={{ animation:"ob-rise .5s .2s both ease", display:"flex", flexDirection:"column", alignItems:"center", gap:12, cursor:"pointer" }}>
              <div style={{ position:"relative", width:90, height:90, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ position:"absolute",inset:0,borderRadius:"50%",border:`2px solid ${C.green}`,animation:"pulse-ring 2s ease-in-out infinite" }}/>
                <div style={{ position:"absolute",inset:-14,borderRadius:"50%",border:`1.5px solid ${C.green}`,animation:"pulse-ring2 2s ease-in-out infinite" }}/>
                <div style={{ width:72,height:72,borderRadius:"50%",background:C.green,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 0 32px rgba(29,185,84,.55)`,fontSize:26,color:"#fff" }}>
                  →
                </div>
              </div>
              <span style={{ fontSize:13,color:"rgba(255,255,255,.3)",fontWeight:500,letterSpacing:.3 }}>toca para comenzar</span>
            </div>
          </div>
        </div>
      )}

      {/* ── STEP 1 — NOMBRE ── */}
      {step===1&&(
        <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",animation:"ob-in .3s ease",opacity:leaving?0:1,transition:"opacity .35s" }}>

          {/* Top spacer with subtle logo */}
          <div style={{ flex:1,display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:48 }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Fraunces',serif",fontSize:32,color:"#fff",marginBottom:6 }}>mang<span style={{ color:C.green }}>IA</span></div>
              <div style={{ width:32,height:2,background:C.green,borderRadius:2,margin:"0 auto" }}/>
            </div>
          </div>

          {/* Form area */}
          <div style={{ flex:1.4,padding:"0 28px",display:"flex",flexDirection:"column",justifyContent:"flex-start" }}>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:30,color:"#fff",lineHeight:1.2,marginBottom:6 }}>
              ¿Cómo te llamas?
            </div>
            <div style={{ fontSize:14,color:"rgba(255,255,255,.3)",fontWeight:500,marginBottom:32 }}>
              Para personalizar tu experiencia
            </div>

            <input
              autoFocus
              value={name}
              onChange={e=>setName(e.target.value)}
              onKeyDown={e=>e.key==="Enter"&&name.trim()&&finish()}
              placeholder="Tu nombre"
              style={{
                width:"100%", boxSizing:"border-box",
                background:"rgba(255,255,255,.06)",
                border:`1.5px solid ${name?"rgba(29,185,84,.5)":"rgba(255,255,255,.1)"}`,
                borderRadius:16, padding:"18px 20px",
                fontSize:18, fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600,
                color:"#fff", outline:"none", textAlign:"center",
                transition:"border .2s, background .2s",
                caretColor:C.green,
                background: name ? "rgba(29,185,84,.06)" : "rgba(255,255,255,.05)",
              }}
            />

            <div onClick={finish} style={{
              marginTop:14,
              background: name.trim() ? C.green : "rgba(255,255,255,.07)",
              borderRadius:16, padding:"18px 0", textAlign:"center",
              cursor: name.trim() ? "pointer" : "default",
              fontSize:16, fontWeight:700,
              color: name.trim() ? "#fff" : "rgba(255,255,255,.18)",
              transition:"all .25s",
              boxShadow: name.trim() ? "0 10px 36px rgba(29,185,84,.35)" : "none",
            }}>
              Entrar →
            </div>

            <div onClick={()=>setStep(0)} style={{ marginTop:24,textAlign:"center",fontSize:13,color:"rgba(255,255,255,.2)",cursor:"pointer",fontWeight:500 }}>
              ← Volver
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── BOTTOM NAV ────────────────────────────────────────────────────────────────
function BottomNav({ tab, setTab }) {
  const tabs = [
    {id:"fridge", label:"Refri", icon:(active)=>(
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="18" rx="3" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8"/>
        <line x1="5" y1="10" x2="19" y2="10" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8"/>
        <line x1="9" y1="14" x2="9" y2="17" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="15" y1="5.5" x2="15" y2="8" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )},
    {id:"recipes", label:"Recetas", icon:(active)=>(
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8 3 5 7 5 11c0 3.5 2 6.5 5 8v2h4v-2c3-1.5 5-4.5 5-8 0-4-3-8-7-8z" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8" strokeLinejoin="round"/>
        <line x1="9" y1="17" x2="15" y2="17" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="10" y1="20" x2="14" y2="20" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )},
    {id:"share", label:"Compartir", icon:(active)=>(
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="18" cy="5" r="2.5" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8"/>
        <circle cx="6" cy="12" r="2.5" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8"/>
        <circle cx="18" cy="19" r="2.5" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8"/>
        <line x1="8.4" y1="10.8" x2="15.6" y2="6.2" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8"/>
        <line x1="8.4" y1="13.2" x2="15.6" y2="17.8" stroke={active?C.green:"rgba(245,245,245,.35)"} strokeWidth="1.8"/>
      </svg>
    )},
  ];
  const [prevTab, setPrevTab] = useState(tab);
  const [animId, setAnimId] = useState(null);

  function handleTab(id) {
    if(id === tab) return;
    setPrevTab(tab);
    setAnimId(id);
    setTab(id);
    setTimeout(()=>setAnimId(null), 400);
  }

  return (
    <div style={{ position:"fixed",bottom:0,left:0,right:0,background:"rgba(8,8,8,.96)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderTop:`1px solid ${C.border}`,display:"flex",zIndex:100,paddingBottom:"env(safe-area-inset-bottom,0)" }}>
      {tabs.map(t=>{
        const active = tab===t.id;
        const animating = animId===t.id;
        return (
          <div key={t.id} onClick={()=>handleTab(t.id)}
            style={{ flex:1,paddingTop:10,paddingBottom:10,display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",position:"relative",
              transform: animating?"translateY(-2px)":"translateY(0)",
              transition:"transform .2s cubic-bezier(.34,1.56,.64,1)"
            }}>
            {/* Active indicator dot */}
            {active && <div style={{ position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:20,height:2,borderRadius:"0 0 2px 2px",background:C.green,boxShadow:`0 0 8px ${C.green}` }}/>}
            <div style={{ transition:"transform .2s cubic-bezier(.34,1.56,.64,1)", transform:active?"scale(1.05)":"scale(1)" }}>
              {t.icon(active)}
            </div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:10,fontWeight:active?700:500,color:active?C.green:"rgba(245,245,245,.3)",letterSpacing:.3,transition:"color .15s" }}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}



// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function MangIA() {
  const [userName, setUserName] = useState(()=>{ try{ return localStorage.getItem("mangia_name")||""; }catch(e){return "";} });
  const [onboarded,setOnboarded] = useState(()=>{ try{ return !!localStorage.getItem("mangia_name"); }catch(e){return false;} });
  const [items,setItems] = useState(()=>{
    try {
      const saved = localStorage.getItem("mangia_items");
      return saved ? JSON.parse(saved) : [];
    } catch(e) { return []; }
  });
  const [tab,setTab] = useState("fridge");
  const [subTab,setSubTab]         = useState("visual");
  const [showAdd,setShowAdd]       = useState(false);
  const [addCategory,setAddCategory] = useState(null);
  const [selected,setSelected]     = useState(null);
  const [addedId,setAddedId]       = useState(null); // for entry animation

  useEffect(()=>{
    try { localStorage.setItem("mangia_items", JSON.stringify(items)); }
    catch(e) {}
  }, [items]);

  function finishOnboarding(name) {
    setUserName(name);
    setOnboarded(true);
    try { localStorage.setItem("mangia_name", name); } catch(e){}
  }

  function handleReset() {
    try { localStorage.removeItem("mangia_name"); } catch(e){}
    setUserName("");
    setOnboarded(false);
    setTab("fridge");
  }

  const urgent  = items.filter(i=>daysLeft(i)<=1&&daysLeft(i)>=0);
  const warning = items.filter(i=>{ const d=daysLeft(i); return d>1&&d<=3; });
  const toggleOpen = id=>setItems(prev=>prev.map(i=>i.id===id?{...i,isOpen:!i.isOpen}:i));

  if(!onboarded) return <Onboarding onDone={finishOnboarding}/>;

  return (
    <div style={{ minHeight:"100vh",background:C.bg,fontFamily:"'Plus Jakarta Sans',sans-serif",paddingBottom:90 }}>
      <style>{`
        ${FONTS}
        *{box-sizing:border-box;margin:0;padding:0;}
        input,select,button{font-family:'Plus Jakarta Sans',sans-serif;}
        input::placeholder{color:rgba(245,245,245,.2);font-weight:400;}
        input:focus{outline:none;}
        select:focus{outline:none;}
        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes slideDown{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes popIn{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}
        @keyframes popPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideIn{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes glow{0%,100%{box-shadow:0 0 12px rgba(34,197,94,.2)}50%{box-shadow:0 0 28px rgba(34,197,94,.5)}}
        @keyframes navPop{0%{transform:translateY(0) scale(1)}40%{transform:translateY(-5px) scale(1.15)}100%{transform:translateY(0) scale(1)}}
        ::-webkit-scrollbar{display:none}
        *{scrollbar-width:none;-ms-overflow-style:none}
        ::selection{background:rgba(34,197,94,.3)}
        input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}
      `}</style>

      {/* HEADER */}
      <div style={{ padding:"20px 20px 0", position:"relative" }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          {/* Logo */}
          <div>
            <div style={{ fontFamily:"'Fraunces',serif",fontSize:32,color:C.text,letterSpacing:-1,lineHeight:1,fontWeight:700 }}>
              mang<span style={{ color:C.green }}>IA</span>
            </div>
            <div style={{ display:"flex",alignItems:"center",gap:5,marginTop:3 }}>
              {items.length===0
                ? <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:500 }}>Agrega tu primer producto</span>
                : urgent.length>0
                  ? <><span style={{ fontSize:10 }}>🔥</span><span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.red,fontWeight:600 }}>{urgent.map(i=>i.name).slice(0,2).join(", ")}{urgent.length>2?` +${urgent.length-2}`:""} vence{urgent.length>1?"n":""} hoy</span></>
                  : <><div style={{ width:5,height:5,borderRadius:"50%",background:C.green,boxShadow:`0 0 6px ${C.green}` }}/><span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:C.textSoft,fontWeight:500 }}>{items.length} productos · todo fresco</span></>
              }
            </div>
          </div>

          {/* Right actions */}
          <div style={{ display:"flex",gap:8,alignItems:"center" }}>
            {urgent.length>0&&(
              <div style={{ background:C.redLight,border:`1px solid ${C.red}33`,borderRadius:20,padding:"5px 11px",display:"flex",alignItems:"center",gap:4 }}>
                <span style={{ fontSize:10 }}>🔥</span>
                <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,fontWeight:700,color:C.red }}>{urgent.length}</span>
              </div>
            )}
            <div onClick={()=>setShowAdd(true)} style={{ width:36,height:36,borderRadius:12,background:C.green,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:`0 4px 16px ${C.greenGlow}`,transition:"transform .1s,box-shadow .1s" }}
              onMouseDown={e=>e.currentTarget.style.transform="scale(.93)"}
              onMouseUp={e=>e.currentTarget.style.transform="scale(1)"}
              onTouchStart={e=>e.currentTarget.style.transform="scale(.93)"}
              onTouchEnd={e=>e.currentTarget.style.transform="scale(1)"}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div style={{ height:"1px",background:C.border,marginTop:16,marginLeft:-20,marginRight:-20 }}/>
      </div>

      {/* FRIDGE TAB */}
      {tab==="fridge"&&(
        <div style={{ animation:"fadeUp .28s ease" }}>


          {/* Sub-tab toggle */}
          <div style={{ display:"flex",margin:"14px 16px 0",background:C.surface,borderRadius:12,padding:4,border:`1px solid ${C.border}` }}>
            {[{id:"visual",label:"Refri"},{id:"list",label:"Inventario"}].map(st=>(
              <div key={st.id} onClick={()=>setSubTab(st.id)} style={{ flex:1,textAlign:"center",padding:"9px 0",borderRadius:11,cursor:"pointer",background:subTab===st.id?C.surface:"transparent",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:13,color:subTab===st.id?C.text:"rgba(245,245,245,.3)",transition:"all .15s" }}>{st.label}</div>
            ))}
          </div>

          {subTab==="visual" ? (
            <div style={{ paddingTop:12 }}>
              {items.length===0 ? (
                <div style={{ display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 28px 32px",animation:"fadeUp .35s ease" }}>

                  {/* Fridge outline — SVG illustration */}
                  <div style={{ position:"relative",marginBottom:32 }}>
                    <svg width={140} height={180} viewBox="0 0 140 180" style={{ display:"block" }}>
                      {/* Body */}
                      <rect x={10} y={8} width={120} height={164} rx={16} fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth={1.5}/>
                      {/* Freezer divider */}
                      <rect x={10} y={52} width={120} height={2} fill="rgba(255,255,255,.07)"/>
                      {/* Door handle */}
                      <rect x={120} y={80} width={6} height={40} rx={3} fill="rgba(255,255,255,.12)"/>
                      {/* Shelves */}
                      <rect x={22} y={90} width={88} height={1.5} rx={1} fill="rgba(255,255,255,.08)"/>
                      <rect x={22} y={126} width={88} height={1.5} rx={1} fill="rgba(255,255,255,.08)"/>
                      {/* Plus sign in center */}
                      <line x1={70} y1={148} x2={70} y2={164} stroke={C.green} strokeWidth={2.5} strokeLinecap="round"/>
                      <line x1={62} y1={156} x2={78} y2={156} stroke={C.green} strokeWidth={2.5} strokeLinecap="round"/>
                      {/* Glow behind + */}
                      <circle cx={70} cy={156} r={12} fill="rgba(29,185,84,.08)"/>
                    </svg>
                  </div>

                  {/* Text */}
                  <div style={{ fontFamily:"'Fraunces',serif",fontSize:22,color:"#fff",marginBottom:6,textAlign:"center",letterSpacing:-.3 }}>
                    Refri vacío
                  </div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,color:"rgba(255,255,255,.3)",fontWeight:500,lineHeight:1.6,marginBottom:32,textAlign:"center",maxWidth:240 }}>
                    Agrega lo que tienes y la IA se encarga del resto
                  </div>

                  {/* Actions */}
                  <div style={{ display:"flex",flexDirection:"column",gap:10,width:"100%",maxWidth:300 }}>
                    <div onClick={()=>setShowAdd(true)} style={{ background:C.green,borderRadius:16,padding:"16px 0",textAlign:"center",cursor:"pointer",fontSize:15,fontWeight:700,color:"#fff",boxShadow:"0 8px 28px rgba(29,185,84,.35)",letterSpacing:.2 }}>
                      + Agregar producto
                    </div>
                    <div onClick={()=>setShowAdd(true)} style={{ background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.09)",borderRadius:16,padding:"16px 0",textAlign:"center",cursor:"pointer",fontSize:15,fontWeight:600,color:"rgba(255,255,255,.45)" }}>
                      📷 Escanear ticket del súper
                    </div>
                  </div>

                  {/* Quick add chips */}
                  <div style={{ marginTop:28,width:"100%",maxWidth:300 }}>
                    <div style={{ fontSize:11,fontWeight:600,color:"rgba(255,255,255,.2)",letterSpacing:1.5,textTransform:"uppercase",marginBottom:12,textAlign:"center" }}>O empieza con</div>
                    <div style={{ display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center" }}>
                      {["🍗 Pollo","🥛 Leche","🥦 Brócoli","🧀 Queso","🥚 Huevo"].map(s=>(
                        <div key={s} onClick={()=>{ const n=s.split(" ")[1]; setItems(p=>[...p,{id:Date.now()+Math.random(),name:n,emoji:s.split(" ")[0],category:"shelf1",qty:"1 pza",shelfDays:getShelfDays(n),addedDate:new Date().toISOString().split("T")[0],isOpen:false,aiNote:null}]); }}
                          style={{ background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",borderRadius:20,padding:"7px 14px",cursor:"pointer",fontSize:13,fontWeight:600,color:"rgba(255,255,255,.45)",transition:"all .15s" }}>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>              ) : (
                <Fridge
                  items={items}
                  onProductClick={setSelected}
                  onDelete={id=>setItems(p=>p.filter(i=>i.id!==id))}
                  onAddToShelf={cat=>{ setAddCategory(cat); setShowAdd(true); }}
                  addedId={addedId}
                />
              )}
            </div>
          ) : (
            <div style={{ paddingTop:12 }}>
              <InventoryView items={items} onDelete={id=>setItems(p=>p.filter(i=>i.id!==id))} onTap={setSelected}/>
            </div>
          )}
        </div>
      )}

      {tab==="recipes"&&<RecipesView items={items} onConsumed={ids=>setItems(p=>p.filter(i=>!ids.includes(i.id)))}/>}
      {tab==="share"  &&<ShareView items={items} onReset={handleReset}/>}

      <BottomNav tab={tab} setTab={setTab}/>

      {showAdd&&<AddModal onAdd={i=>setItems(p=>[...p,i])} onClose={()=>{ setShowAdd(false); setAddCategory(null); }} preselectedCategory={addCategory}/>}
      {selected&&<ProductSheet item={selected} onDelete={id=>setItems(p=>p.filter(i=>i.id!==id))} onToggleOpen={toggleOpen} onClose={()=>setSelected(null)}/>}
    </div>
  );
}
