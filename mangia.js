var _SHELF_LIFE;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FONTS = "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700&display=swap');";
var C = {
  green: "#22C55E",
  greenDark: "#16A34A",
  greenLight: "rgba(34,197,94,.12)",
  greenGlow: "rgba(34,197,94,.25)",
  orange: "#F97316",
  orangeDark: "#EA580C",
  orangeLight: "rgba(249,115,22,.12)",
  red: "#F43F5E",
  redDark: "#E11D48",
  redLight: "rgba(244,63,94,.12)",
  blue: "#38BDF8",
  blueDark: "#0284C7",
  blueLight: "rgba(56,189,248,.10)",
  purple: "#C084FC",
  purpleDark: "#9333EA",
  purpleLight: "rgba(192,132,252,.12)",
  yellow: "#FBBF24",
  yellowDark: "#D97706",
  yellowLight: "rgba(251,191,36,.12)",
  bg: "#080808",
  card: "#111111",
  card2: "#171717",
  card3: "#1C1C1C",
  text: "#F5F5F5",
  textMid: "rgba(245,245,245,.6)",
  textSoft: "rgba(245,245,245,.3)",
  border: "rgba(255,255,255,.07)",
  borderMid: "rgba(255,255,255,.12)",
  surface: "rgba(255,255,255,.04)",
  surfaceHover: "rgba(255,255,255,.07)"
};

// ── DATA ──────────────────────────────────────────────────────────────────────
var SHELF_LIFE = (_SHELF_LIFE = {
  // ── CARNES ──
  pollo: 2,
  pechuga: 2,
  muslo: 2,
  ala: 2,
  carne: 2,
  res: 2,
  bistec: 2,
  molida: 2,
  cerdo: 3,
  costilla: 3,
  chuleta: 3,
  tocino: 10,
  salchicha: 5,
  chorizo: 7,
  jamón: 7,
  pavo: 2,
  pato: 2,
  cordero: 3,
  conejo: 3,
  ternera: 2,
  mortadela: 5,
  salami: 7,
  pepperoni: 7,
  // ── PESCADOS Y MARISCOS ──
  pescado: 1,
  "salmón": 1,
  atún: 2,
  tilapia: 1,
  robalo: 1,
  mojarra: 1,
  "camarón": 1,
  pulpo: 2,
  calamar: 1,
  almeja: 1,
  ostión: 1,
  langosta: 2,
  "cangrejo": 2,
  sardina: 2,
  anchoa: 3,
  bacalao: 2,
  // ── LÁCTEOS ──
  leche: 6,
  "yogur": 7,
  queso: 10,
  "queso fresco": 5,
  "queso crema": 14,
  mantequilla: 21,
  crema: 5,
  "crema ácida": 14,
  huevo: 21,
  "leche vegetal": 7,
  kéfir: 14,
  jocoque: 7,
  requesón: 5,
  "queso oaxaca": 7,
  "queso manchego": 14,
  "queso gouda": 21,
  // ── VERDURAS ──
  lechuga: 4,
  espinaca: 4,
  "brócoli": 5,
  zanahoria: 10,
  jitomate: 5,
  pepino: 7,
  cebolla: 14,
  ajo: 30,
  aguacate: 3,
  chile: 7,
  pimiento: 7,
  apio: 10,
  coliflor: 7,
  col: 14,
  repollo: 14,
  betabel: 14,
  nabo: 10,
  elote: 3,
  chayote: 7,
  calabaza: 7,
  calabacita: 5,
  nopal: 5,
  espárrago: 4,
  alcachofa: 5,
  champiñón: 5,
  seta: 4,
  hongo: 4,
  ejote: 5,
  habas: 5,
  chícharo: 5,
  edamame: 5,
  poro: 7,
  puerro: 7,
  rábano: 7,
  cilantro: 5,
  perejil: 5,
  albahaca: 4,
  hierbabuena: 5,
  epazote: 5,
  romero: 14,
  tomillo: 14,
  laurel: 30,
  // ── FRUTAS ──
  "limón": 14,
  naranja: 14,
  manzana: 21,
  "plátano": 4,
  fresa: 3,
  uva: 7,
  kiwi: 5,
  mango: 5,
  papaya: 4,
  piña: 5,
  melón: 5,
  sandía: 5,
  pera: 7,
  durazno: 5,
  chabacano: 4,
  cereza: 5,
  ciruela: 5,
  granada: 14,
  maracuyá: 5,
  guayaba: 5,
  tamarindo: 30,
  coco: 7,
  mandarina: 14,
  toronja: 14,
  higo: 3,
  frambuesa: 3,
  zarzamora: 3,
  arándano: 7,
  lichee: 5,
  pitahaya: 5,
  // ── BEBIDAS ──
  jugo: 7,
  cerveza: 180,
  vino: 3,
  refresco: 3,
  agua: 365,
  "agua mineral": 365
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_SHELF_LIFE, "leche", 6), "jugo de naranja", 7), "vino blanco", 3), "vino tinto", 3), "agua de coco", 3), "kombucha", 14), "tepache", 5), "leche de avena", 7), "salsa", 30), "ketchup", 90), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_SHELF_LIFE, "mayonesa", 60), "mostaza", 90), "mermelada", 30), "salsa verde", 14), "salsa roja", 14), "salsa inglesa", 365), "salsa de soya", 180), "aceite de oliva", 365), "vinagre", 365), "crema de cacahuate", 90), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_SHELF_LIFE, "miel", 365), "cajeta", 60), "nutella", 90), "chile en vinagre", 60), "chiles en lata", 365), "pepinillos", 60), "sopa", 3), "caldo", 3), "guisado", 3), "arroz", 3), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_SHELF_LIFE, "frijoles", 5), "lentejas", 4), "pasta", 3), "pizza", 3), "tacos", 2), "enchiladas", 2), "tamales", 4), "torta", 1), "sandwich", 1), "ensalada", 2), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_SHELF_LIFE, "arroz con leche", 3), "caldo de pollo", 3), "pozole", 3), "menudo", 3), "birria", 3), "hot dog", 7), "nuggets", 3), "carne molida", 2), "milanesa", 2), "pollo empanizado", 3), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_SHELF_LIFE, "camarones empanizados", 2), "pan", 3), "tortilla", 5), "tortilla de harina", 5), "baguette", 2), "bolillo", 2), "croissant", 2), "pan dulce", 3), "pan de caja", 7), "default", 7));
var EMOJI_MAP = {
  // ── CARNES ──
  pollo: "🍗",
  pechuga: "🍗",
  muslo: "🍗",
  ala: "🍗",
  carne: "🥩",
  res: "🥩",
  bistec: "🥩",
  molida: "🥩",
  cerdo: "🍖",
  costilla: "🍖",
  chuleta: "🍖",
  tocino: "🥓",
  salchicha: "🌭",
  chorizo: "🌭",
  jamón: "🍖",
  pavo: "🦃",
  pato: "🦆",
  cordero: "🐑",
  mortadela: "🍖",
  salami: "🍖",
  pepperoni: "🍕",
  // ── PESCADOS ──
  pescado: "🐟",
  "salmón": "🐠",
  atún: "🐟",
  tilapia: "🐟",
  robalo: "🐟",
  mojarra: "🐟",
  "camarón": "🦐",
  pulpo: "🐙",
  calamar: "🦑",
  almeja: "🦪",
  ostión: "🦪",
  langosta: "🦞",
  "cangrejo": "🦀",
  sardina: "🐟",
  anchoa: "🐟",
  // ── LÁCTEOS ──
  leche: "🥛",
  "yogur": "🫙",
  queso: "🧀",
  "queso fresco": "🧀",
  "queso crema": "🧀",
  mantequilla: "🧈",
  crema: "🥛",
  "crema ácida": "🥛",
  huevo: "🥚",
  kéfir: "🥛",
  jocoque: "🥛",
  requesón: "🧀",
  // ── VERDURAS ──
  lechuga: "🥬",
  espinaca: "🥬",
  "brócoli": "🥦",
  zanahoria: "🥕",
  jitomate: "🍅",
  tomate: "🍅",
  pepino: "🥒",
  cebolla: "🧅",
  ajo: "🧄",
  aguacate: "🥑",
  chile: "🌶️",
  pimiento: "🫑",
  apio: "🥬",
  coliflor: "🥦",
  col: "🥬",
  repollo: "🥬",
  betabel: "🟣",
  elote: "🌽",
  calabaza: "🎃",
  calabacita: "🥒",
  nopal: "🌵",
  espárrago: "🌿",
  champiñón: "🍄",
  seta: "🍄",
  hongo: "🍄",
  ejote: "🫘",
  chícharo: "🫘",
  edamame: "🫘",
  poro: "🌿",
  rábano: "🔴",
  cilantro: "🌿",
  perejil: "🌿",
  albahaca: "🌿",
  cebollín: "🌿",
  // ── FRUTAS ──
  "limón": "🍋",
  naranja: "🍊",
  manzana: "🍎",
  "plátano": "🍌",
  fresa: "🍓",
  uva: "🍇",
  kiwi: "🥝",
  mango: "🥭",
  papaya: "🍈",
  piña: "🍍",
  melón: "🍈",
  sandía: "🍉",
  pera: "🍐",
  durazno: "🍑",
  cereza: "🍒",
  ciruela: "🟣",
  granada: "🍎",
  guayaba: "🟢",
  coco: "🥥",
  mandarina: "🍊",
  toronja: "🍊",
  higo: "🟣",
  frambuesa: "🍓",
  zarzamora: "🫐",
  arándano: "🫐",
  pitahaya: "🐉",
  // ── BEBIDAS ──
  jugo: "🧃",
  cerveza: "🍺",
  vino: "🍷",
  refresco: "🥤",
  agua: "💧",
  "jugo de naranja": "🧃",
  "vino blanco": "🍾",
  kombucha: "🫙",
  tepache: "🫙",
  // ── CONDIMENTOS ──
  salsa: "🫙",
  ketchup: "🍅",
  mayonesa: "🫙",
  mostaza: "🟡",
  mermelada: "🍓",
  "salsa verde": "🫙",
  "salsa roja": "🫙",
  miel: "🍯",
  cajeta: "🍯",
  "aceite de oliva": "🫒",
  vinagre: "🫙",
  // ── PREPARADOS ──
  sopa: "🍲",
  caldo: "🍲",
  guisado: "🫕",
  arroz: "🍚",
  frijoles: "🫘",
  pasta: "🍝",
  pizza: "🍕",
  tacos: "🌮",
  enchiladas: "🫔",
  tamales: "🫔",
  torta: "🥪",
  sandwich: "🥪",
  ensalada: "🥗",
  pozole: "🍲",
  birria: "🫕",
  // ── PANADERÍA ──
  pan: "🍞",
  tortilla: "🫓",
  baguette: "🥖",
  bolillo: "🥖",
  croissant: "🥐",
  "pan dulce": "🍞",
  "pan de caja": "🍞",
  default: "📦"
};
var SHELVES = [{
  id: "shelf1",
  label: "Estante 1",
  color: C.blue,
  bg: "rgba(87,200,242,.06)"
}, {
  id: "shelf2",
  label: "Estante 2",
  color: C.green,
  bg: "rgba(29,185,84,.06)"
}, {
  id: "shelf3",
  label: "Estante 3",
  color: C.purple,
  bg: "rgba(167,139,250,.06)"
}, {
  id: "drawer",
  label: "Cajón",
  color: C.orange,
  bg: "rgba(245,158,11,.06)"
}];
var SAMPLE = [{
  id: 1,
  name: "Pollo",
  emoji: "🍗",
  category: "shelf1",
  qty: "500g",
  shelfDays: 2,
  addedDate: "2026-03-10",
  isOpen: true
}, {
  id: 2,
  name: "Salmón",
  emoji: "🐠",
  category: "shelf1",
  qty: "1 pza",
  shelfDays: 1,
  addedDate: "2026-03-10",
  isOpen: false
}, {
  id: 3,
  name: "Leche",
  emoji: "🥛",
  category: "shelf2",
  qty: "1L",
  shelfDays: 6,
  addedDate: "2026-03-08",
  isOpen: true
}, {
  id: 4,
  name: "Aguacate",
  emoji: "🥑",
  category: "shelf2",
  qty: "2 pza",
  shelfDays: 3,
  addedDate: "2026-03-09",
  isOpen: false
}, {
  id: 5,
  name: "Brócoli",
  emoji: "🥦",
  category: "drawer",
  qty: "1 pza",
  shelfDays: 5,
  addedDate: "2026-03-07",
  isOpen: false
}, {
  id: 6,
  name: "Zanahoria",
  emoji: "🥕",
  category: "drawer",
  qty: "3 pza",
  shelfDays: 10,
  addedDate: "2026-03-05",
  isOpen: false
}, {
  id: 7,
  name: "Queso",
  emoji: "🧀",
  category: "shelf3",
  qty: "200g",
  shelfDays: 10,
  addedDate: "2026-03-03",
  isOpen: true
}];
function getShelfDays(n) {
  var l = n.toLowerCase();
  for (var _i = 0, _Object$entries = Object.entries(SHELF_LIFE); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      k = _Object$entries$_i[0],
      v = _Object$entries$_i[1];
    if (l.includes(k)) return v;
  }
  return SHELF_LIFE.default;
}
function getEmoji(n) {
  var l = n.toLowerCase();
  for (var _i2 = 0, _Object$entries2 = Object.entries(EMOJI_MAP); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      k = _Object$entries2$_i[0],
      v = _Object$entries2$_i[1];
    if (l.includes(k)) return v;
  }
  return EMOJI_MAP.default;
}
function daysLeft(item) {
  var exp = new Date(item.addedDate);
  exp.setDate(exp.getDate() + item.shelfDays);
  return Math.ceil((exp - new Date()) / 86400000);
}
function getStatus(days) {
  if (days <= 0) return {
    color: "#AFAFAF",
    bg: C.surface,
    shadow: "#CFCFCF",
    label: "Vencido",
    icon: "💀"
  };
  if (days === 1) return {
    color: C.red,
    bg: C.redLight,
    shadow: C.redDark,
    label: "¡Hoy!",
    icon: "🔥"
  };
  if (days <= 3) return {
    color: C.orange,
    bg: C.orangeLight,
    shadow: C.orangeDark,
    label: "".concat(days, "d"),
    icon: "⚠️"
  };
  return {
    color: C.green,
    bg: C.greenLight,
    shadow: C.greenDark,
    label: "".concat(days, "d"),
    icon: "✅"
  };
}

// ── PRODUCT PILL (long press fill to mark used) ───────────────────────────────
function ProductPill(_ref) {
  var item = _ref.item,
    _onClick = _ref.onClick,
    onDelete = _ref.onDelete,
    isNew = _ref.isNew;
  var days = daysLeft(item);
  var st = getStatus(days);
  var maxDays = item.shelfDays || 14;
  var pct = Math.max(0, Math.min(100, days / maxDays * 100));
  var isUrgent = days >= 0 && days <= 1;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    fillPct = _useState2[0],
    setFillPct = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    done = _useState4[0],
    setDone = _useState4[1];
  var rafRef = useRef(null);
  var startRef = useRef(null);
  var DURATION = 900;
  function startPress(e) {
    e.stopPropagation();
    startRef.current = performance.now();
    function tick(now) {
      var p = Math.min(100, (now - startRef.current) / DURATION * 100);
      setFillPct(p);
      if (p < 100) rafRef.current = requestAnimationFrame(tick);else {
        setDone(true);
        setTimeout(function () {
          return onDelete(item.id);
        }, 350);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }
  function cancelPress() {
    cancelAnimationFrame(rafRef.current);
    setFillPct(0);
  }
  var filling = fillPct > 0 && !done;

  // Ring geometry
  var SIZE = 72;
  var R = 30;
  var CIRC = 2 * Math.PI * R;
  var dash = pct / 100 * CIRC;

  // Ring color matches status
  var ringColor = done ? C.green : st.color;
  // Track color
  var trackColor = "rgba(0,0,0,.08)";

  // Long-press arc overlay (green filling arc)
  var pressDash = fillPct / 100 * CIRC;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: startPress,
    onMouseUp: cancelPress,
    onMouseLeave: cancelPress,
    onTouchStart: startPress,
    onTouchEnd: cancelPress,
    onTouchMove: cancelPress,
    onClick: function onClick(e) {
      e.stopPropagation();
      if (fillPct === 0) _onClick(item);
    },
    style: {
      position: "relative",
      flexShrink: 0,
      width: 80,
      cursor: "pointer",
      userSelect: "none",
      touchAction: "pan-x pan-y",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      transform: filling ? "scale(.93)" : "scale(1)",
      transition: "transform .1s",
      animation: isNew ? "slideIn .35s cubic-bezier(.34,1.56,.64,1)" : "none",
      opacity: done ? 0 : 1
    }
  }, done && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
      fontSize: 32,
      animation: "popIn .2s cubic-bezier(.34,1.56,.64,1)"
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: SIZE,
      height: SIZE
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: SIZE,
    height: SIZE,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: SIZE / 2,
    cy: SIZE / 2,
    r: R,
    fill: "none",
    stroke: trackColor,
    strokeWidth: 4
  }), /*#__PURE__*/React.createElement("circle", {
    cx: SIZE / 2,
    cy: SIZE / 2,
    r: R,
    fill: "none",
    stroke: ringColor,
    strokeWidth: 4,
    strokeDasharray: "".concat(dash, " ").concat(CIRC),
    strokeLinecap: "round",
    opacity: filling ? 0.3 : 1
  }), filling && /*#__PURE__*/React.createElement("circle", {
    cx: SIZE / 2,
    cy: SIZE / 2,
    r: R,
    fill: "none",
    stroke: C.green,
    strokeWidth: 4,
    strokeDasharray: "".concat(pressDash, " ").concat(CIRC),
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 30,
      lineHeight: 1,
      filter: isUrgent ? "drop-shadow(0 0 6px ".concat(st.color, "88)") : "none",
      animation: isUrgent && !filling ? "popPulse 2s ease-in-out infinite" : "none"
    }
  }, item.emoji), item.isOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      fontSize: 10,
      background: "rgba(255,255,255,.95)",
      borderRadius: "50%",
      width: 18,
      height: 18,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1.5px solid ".concat(C.orange),
      boxShadow: "0 1px 4px rgba(0,0,0,.12)",
      zIndex: 2
    }
  }, "\uD83D\uDD13")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 11,
      color: "rgba(245,245,245,.75)",
      textAlign: "center",
      width: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      lineHeight: 1.2
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 800,
      fontSize: 10,
      color: ringColor,
      lineHeight: 1
    }
  }, days <= 0 ? "¡Hoy!" : "".concat(days, "d")));
}

// ── SHELF ROW ─────────────────────────────────────────────────────────────────
function ShelfRow(_ref2) {
  var shelf = _ref2.shelf,
    items = _ref2.items,
    onClick = _ref2.onClick,
    onDelete = _ref2.onDelete,
    onAdd = _ref2.onAdd,
    addedId = _ref2.addedId;
  var shelfItems = items.filter(function (i) {
    return i.category === shelf.id;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "6px 16px 2px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: shelf.color,
      opacity: .85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 9,
      color: "rgba(245,245,245,.35)",
      letterSpacing: 1.5,
      textTransform: "uppercase"
    }
  }, shelf.label), shelfItems.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 9,
      color: "rgba(245,245,245,.2)",
      fontWeight: 700
    }
  }, shelfItems.length)), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return onAdd(shelf.id);
    },
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: shelf.color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 6px ".concat(shelf.color, "66")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 16,
      lineHeight: 1,
      marginTop: -1
    }
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      padding: "6px 14px 8px",
      display: "flex",
      gap: 14,
      alignItems: "flex-end",
      overflowX: "auto",
      overflowY: "visible",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none"
    }
  }, shelfItems.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(245,245,245,.15)",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontStyle: "italic",
      paddingLeft: 4
    }
  }, "vac\xEDo") : shelfItems.map(function (item) {
    return /*#__PURE__*/React.createElement(ProductPill, {
      key: item.id,
      item: item,
      onClick: onClick,
      onDelete: onDelete,
      isNew: item.id === addedId
    });
  })));
}

// ── USAR HOY SHELF ────────────────────────────────────────────────────────────
function UsarHoyShelf(_ref3) {
  var items = _ref3.items,
    onClick = _ref3.onClick,
    onDelete = _ref3.onDelete,
    addedId = _ref3.addedId,
    style = _ref3.style;
  var urgent = items.filter(function (i) {
    var d = daysLeft(i);
    return d >= 0 && d <= 1;
  });
  if (urgent.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      marginBottom: 4
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "6px 14px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      animation: "popPulse 1.4s ease-in-out infinite"
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 800,
      fontSize: 9,
      color: C.red,
      letterSpacing: 1.5,
      textTransform: "uppercase"
    }
  }, "Usar hoy")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(239,68,68,.12)",
      color: C.red,
      borderRadius: 20,
      padding: "2px 10px",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 10,
      border: "1px solid rgba(239,68,68,.25)"
    }
  }, urgent.length, " urgente", urgent.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      padding: "6px 14px 8px",
      display: "flex",
      gap: 14,
      alignItems: "flex-end",
      overflowX: "auto",
      overflowY: "visible",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none"
    }
  }, urgent.map(function (item) {
    return /*#__PURE__*/React.createElement(ProductPill, {
      key: item.id,
      item: item,
      onClick: onClick,
      onDelete: onDelete,
      isNew: item.id === addedId
    });
  })));
}

// ── FRIDGE INTERIOR SVG ───────────────────────────────────────────────────────
// Shelf row height: label(26) + products(132) + padding(12) + margin(6) = 176px
var SHELF_H = 176;
var SHELF_LABEL_H = 26;
var SHELF_PROD_H = 120;
function FridgeSVGBackground(_ref4) {
  var shelfCount = _ref4.shelfCount,
    urgentCount = _ref4.urgentCount,
    W = _ref4.W,
    H = _ref4.H;
  var backInset = 44,
    backRise = 38;
  var backL = backInset,
    backR = W - backInset;
  var backW = backR - backL;
  var backB = H - backRise * 0.5;
  function lerpY(fy) {
    var by = backRise + fy / H * (backB - backRise);
    return by;
  }

  // Wire rail sits right below the product area of each row
  var topPad = 8;
  var shelfYs = Array.from({
    length: shelfCount
  }, function (_, i) {
    return topPad + i * SHELF_H + SHELF_LABEL_H + SHELF_PROD_H + 4;
  });
  function WireShelf(_ref5) {
    var frontY = _ref5.frontY;
    var backY = lerpY(frontY);
    var fL = 0,
      fR = W,
      bL = backL,
      bR = backR;
    var longN = 18,
      crossN = 9;
    var fronts = Array.from({
      length: longN
    }, function (_, i) {
      return {
        x: fL + i / (longN - 1) * (fR - fL)
      };
    });
    var backs = Array.from({
      length: longN
    }, function (_, i) {
      return {
        x: bL + i / (longN - 1) * (bR - bL)
      };
    });
    var crossTs = Array.from({
      length: crossN
    }, function (_, i) {
      return i / (crossN - 1);
    });
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("ellipse", {
      cx: W / 2,
      cy: frontY + 5,
      rx: (fR - fL) * 0.42,
      ry: 4,
      fill: "rgba(0,0,0,.09)"
    }), crossTs.map(function (t, i) {
      var lx = fL + (bL - fL) * t,
        rx = fR + (bR - fR) * t,
        cy = frontY + (backY - frontY) * t;
      return /*#__PURE__*/React.createElement("line", {
        key: i,
        x1: lx,
        y1: cy,
        x2: rx,
        y2: cy,
        stroke: "rgba(155,182,198,".concat(0.2 + t * 0.55, ")"),
        strokeWidth: 0.5 + t * 0.65
      });
    }), fronts.map(function (f, i) {
      var b = backs[i],
        isEdge = i === 0 || i === longN - 1;
      return /*#__PURE__*/React.createElement("line", {
        key: i,
        x1: f.x,
        y1: frontY,
        x2: b.x,
        y2: backY,
        stroke: isEdge ? "rgba(172,202,216,.6)" : "rgba(150,178,196,.25)",
        strokeWidth: isEdge ? 1.1 : 0.55
      });
    }), /*#__PURE__*/React.createElement("line", {
      x1: bL,
      y1: backY,
      x2: bR,
      y2: backY,
      stroke: "rgba(162,188,202,.78)",
      strokeWidth: 1.8
    }), /*#__PURE__*/React.createElement("line", {
      x1: fL,
      y1: frontY,
      x2: bL,
      y2: backY,
      stroke: "rgba(185,208,220,.82)",
      strokeWidth: 2.2
    }), /*#__PURE__*/React.createElement("line", {
      x1: fR,
      y1: frontY,
      x2: bR,
      y2: backY,
      stroke: "rgba(185,208,220,.82)",
      strokeWidth: 2.2
    }), /*#__PURE__*/React.createElement("line", {
      x1: fL,
      y1: frontY,
      x2: fR,
      y2: frontY,
      stroke: "rgba(215,230,240,1)",
      strokeWidth: 3.5
    }), /*#__PURE__*/React.createElement("line", {
      x1: fL + 4,
      y1: frontY - 1.5,
      x2: fR - 4,
      y2: frontY - 1.5,
      stroke: "rgba(255,255,255,.86)",
      strokeWidth: 1.2
    }), /*#__PURE__*/React.createElement("line", {
      x1: fL + 4,
      y1: frontY + 2,
      x2: fR - 4,
      y2: frontY + 2,
      stroke: "rgba(115,148,168,.28)",
      strokeWidth: 1
    }), [{
      x: 4
    }, {
      x: W - 20
    }].map(function (b, i) {
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("rect", {
        x: b.x,
        y: frontY - 9,
        width: 16,
        height: 9,
        rx: 2,
        fill: "rgba(222,234,242,.95)",
        stroke: "rgba(175,202,218,.5)",
        strokeWidth: 0.8
      }), /*#__PURE__*/React.createElement("rect", {
        x: b.x + 2,
        y: frontY - 7,
        width: 12,
        height: 3,
        rx: 1,
        fill: "rgba(255,255,255,.5)"
      }));
    }));
  }
  function LeftWall() {
    var pts = [[0, 0], [backL, backRise], [backL, backB], [0, H]].map(function (p) {
      return p.join(",");
    }).join(" ");
    var ribN = Math.ceil(H / 32);
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "lwg2",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "0%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#527E8E"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "#8EB4C2"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#BED4DE"
    }))), /*#__PURE__*/React.createElement("polygon", {
      points: pts,
      fill: "url(#lwg2)"
    }), Array.from({
      length: ribN
    }, function (_, i) {
      var t = (i + 0.5) / ribN;
      var fy = t * H,
        by = backRise + t * (backB - backRise);
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("line", {
        x1: 0,
        y1: fy,
        x2: backL,
        y2: by,
        stroke: "rgba(255,255,255,.11)",
        strokeWidth: 6
      }), /*#__PURE__*/React.createElement("line", {
        x1: 0,
        y1: fy - 2,
        x2: backL,
        y2: by - 2,
        stroke: "rgba(255,255,255,.2)",
        strokeWidth: 1.2
      }), /*#__PURE__*/React.createElement("line", {
        x1: 0,
        y1: fy + 3,
        x2: backL,
        y2: by + 3,
        stroke: "rgba(0,0,0,.06)",
        strokeWidth: 1
      }));
    }), /*#__PURE__*/React.createElement("line", {
      x1: backL,
      y1: backRise,
      x2: backL,
      y2: backB,
      stroke: "rgba(208,226,236,.72)",
      strokeWidth: 1.5
    }));
  }
  function RightWall() {
    var pts = [[W, 0], [backR, backRise], [backR, backB], [W, H]].map(function (p) {
      return p.join(",");
    }).join(" ");
    var ribN = Math.ceil(H / 32);
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "rwg2",
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "0%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#527E8E"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "#8EB4C2"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#BED4DE"
    }))), /*#__PURE__*/React.createElement("polygon", {
      points: pts,
      fill: "url(#rwg2)"
    }), Array.from({
      length: ribN
    }, function (_, i) {
      var t = (i + 0.5) / ribN;
      var fy = t * H,
        by = backRise + t * (backB - backRise);
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("line", {
        x1: W,
        y1: fy,
        x2: backR,
        y2: by,
        stroke: "rgba(255,255,255,.11)",
        strokeWidth: 6
      }), /*#__PURE__*/React.createElement("line", {
        x1: W,
        y1: fy - 2,
        x2: backR,
        y2: by - 2,
        stroke: "rgba(255,255,255,.2)",
        strokeWidth: 1.2
      }), /*#__PURE__*/React.createElement("line", {
        x1: W,
        y1: fy + 3,
        x2: backR,
        y2: by + 3,
        stroke: "rgba(0,0,0,.06)",
        strokeWidth: 1
      }));
    }), /*#__PURE__*/React.createElement("line", {
      x1: backR,
      y1: backRise,
      x2: backR,
      y2: backB,
      stroke: "rgba(208,226,236,.72)",
      strokeWidth: 1.5
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    style: {
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "fridgeBg",
    cx: "50%",
    cy: "35%",
    r: "65%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#F5F9FC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#E1ECF3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#C4D6E0"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "topWallG",
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#5E8EA0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#B8CCD6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "botWallG",
    x1: "0%",
    y1: "100%",
    x2: "0%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#4E7A8A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#B0C8D4"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "lightFade",
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(255,255,255,.42)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "rgba(255,255,255,0)"
  }))), /*#__PURE__*/React.createElement("polygon", {
    points: "".concat(backL, ",").concat(backRise, " ").concat(backR, ",").concat(backRise, " ").concat(backR, ",").concat(backB, " ").concat(backL, ",").concat(backB),
    fill: "url(#fridgeBg)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,0 ".concat(W, ",0 ").concat(backR, ",").concat(backRise, " ").concat(backL, ",").concat(backRise),
    fill: "url(#topWallG)",
    opacity: 0.9
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,".concat(H, " ").concat(W, ",").concat(H, " ").concat(backR, ",").concat(backB, " ").concat(backL, ",").concat(backB),
    fill: "url(#botWallG)",
    opacity: 0.85
  }), /*#__PURE__*/React.createElement(LeftWall, null), /*#__PURE__*/React.createElement(RightWall, null), /*#__PURE__*/React.createElement("rect", {
    x: backL + 14,
    y: backRise + 1,
    width: backW - 28,
    height: 8,
    fill: "rgba(248,253,255,.98)",
    rx: 3
  }), /*#__PURE__*/React.createElement("rect", {
    x: backL + 14,
    y: backRise + 1,
    width: backW - 28,
    height: 3,
    fill: "white",
    rx: 2
  }), /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: 0,
    width: W,
    height: H,
    fill: "url(#lightFade)"
  }), shelfYs.map(function (y, i) {
    return /*#__PURE__*/React.createElement(WireShelf, {
      key: i,
      frontY: y
    });
  }));
}
function FridgeInteriorSVG(_ref6) {
  var items = _ref6.items,
    onProductClick = _ref6.onProductClick,
    onDelete = _ref6.onDelete,
    onAddToShelf = _ref6.onAddToShelf,
    addedId = _ref6.addedId;
  var containerRef = useRef(null);
  var _useState5 = useState(600),
    _useState6 = _slicedToArray(_useState5, 2),
    svgH = _useState6[0],
    setSvgH = _useState6[1];
  var W = 390;
  var urgentItems = items.filter(function (i) {
    var d = daysLeft(i);
    return d >= 0 && d <= 1;
  });
  var hasUrgent = urgentItems.length > 0;
  var totalRows = (hasUrgent ? 1 : 0) + SHELVES.length;
  useEffect(function () {
    if (containerRef.current) {
      setSvgH(containerRef.current.offsetHeight);
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: 8,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(FridgeSVGBackground, {
    shelfCount: totalRows,
    urgentCount: urgentItems.length,
    W: W,
    H: svgH
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(UsarHoyShelf, {
    items: items,
    onClick: onProductClick,
    onDelete: onDelete,
    addedId: addedId
  }), SHELVES.map(function (shelf) {
    return /*#__PURE__*/React.createElement(ShelfRow, {
      key: shelf.id,
      shelf: shelf,
      items: items,
      onClick: onProductClick,
      onDelete: onDelete,
      onAdd: onAddToShelf,
      addedId: addedId
    });
  })));
}

// ── FRIDGE ────────────────────────────────────────────────────────────────────
function Fridge(_ref7) {
  var items = _ref7.items,
    onProductClick = _ref7.onProductClick,
    onDelete = _ref7.onDelete,
    onAddToShelf = _ref7.onAddToShelf,
    addedId = _ref7.addedId;
  var urgent = items.filter(function (i) {
    return daysLeft(i) <= 1 && daysLeft(i) >= 0;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#C8D8E4",
      borderRadius: "28px 28px 36px 36px",
      border: "1.5px solid #A8C0D0",
      boxShadow: "0 12px 40px rgba(0,0,0,.35)",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#B8D0E0,#A8C4D8)",
      borderBottom: "2px solid #90B0C8",
      padding: "10px 18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 1,
      background: "linear-gradient(90deg,transparent,rgba(87,200,242,.4),transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 11,
      color: "#4A7A96",
      letterSpacing: 1.5,
      textTransform: "uppercase"
    }
  }, "\u2744\uFE0F Freezer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 600,
      fontSize: 11,
      color: "#4A7A96",
      background: "rgba(255,255,255,.4)",
      borderRadius: 20,
      padding: "3px 12px",
      border: "1px solid rgba(74,122,150,.2)"
    }
  }, "\u221218\xB0C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(74,122,150,.5)",
      fontFamily: "'Plus Jakarta Sans',sans-serif"
    }
  }, "vac\xEDo")), /*#__PURE__*/React.createElement(FridgeInteriorSVG, {
    items: items,
    onProductClick: onProductClick,
    onDelete: onDelete,
    onAddToShelf: onAddToShelf,
    addedId: addedId
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      background: "linear-gradient(180deg,#B8CCD8,#A8BCC8)",
      borderTop: "2px solid #90A8B8",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 8,
      color: "rgba(60,90,110,.5)",
      letterSpacing: 2
    }
  }, "NO FROST"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 4,
      background: "rgba(0,0,0,.1)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 8,
      color: "rgba(60,90,110,.5)",
      letterSpacing: 2
    }
  }, "A+++"))));
}

// ── ADD MODAL ─────────────────────────────────────────────────────────────────
function AddModal(_ref8) {
  var onAdd = _ref8.onAdd,
    onClose = _ref8.onClose,
    preselectedCategory = _ref8.preselectedCategory;
  var _useState7 = useState("single"),
    _useState8 = _slicedToArray(_useState7, 2),
    mode = _useState8[0],
    setMode = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    name = _useState0[0],
    setName = _useState0[1];
  var _useState1 = useState(preselectedCategory || "shelf1"),
    _useState10 = _slicedToArray(_useState1, 2),
    category = _useState10[0],
    setCategory = _useState10[1];
  var _useState11 = useState("1"),
    _useState12 = _slicedToArray(_useState11, 2),
    qty = _useState12[0],
    setQty = _useState12[1];
  var _useState13 = useState("pza"),
    _useState14 = _slicedToArray(_useState13, 2),
    unit = _useState14[0],
    setUnit = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isOpen = _useState16[0],
    setIsOpen = _useState16[1];
  var _useState17 = useState(""),
    _useState18 = _slicedToArray(_useState17, 2),
    customDays = _useState18[0],
    setCustomDays = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    aiResult = _useState20[0],
    setAiResult = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    aiLoading = _useState22[0],
    setAiLoading = _useState22[1];
  // batch
  var _useState23 = useState(""),
    _useState24 = _slicedToArray(_useState23, 2),
    batchName = _useState24[0],
    setBatchName = _useState24[1];
  var _useState25 = useState([]),
    _useState26 = _slicedToArray(_useState25, 2),
    batchItems = _useState26[0],
    setBatchItems = _useState26[1];
  var _useState27 = useState({}),
    _useState28 = _slicedToArray(_useState27, 2),
    batchAI = _useState28[0],
    setBatchAI = _useState28[1];
  var debounceRef = useRef(null);
  var batchInputRef = useRef(null);
  var fileInputRef = useRef(null);
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    scanning = _useState30[0],
    setScanning = _useState30[1]; // ticket scan in progress
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    scanPreview = _useState32[0],
    setScanPreview = _useState32[1]; // base64 image preview
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    scanError = _useState34[0],
    setScanError = _useState34[1];
  useEffect(function () {
    if (name.trim().length < 3) {
      setAiResult(null);
      return;
    }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(function () {
      return fetchAI(name.trim(), isOpen);
    }, 700);
    return function () {
      return clearTimeout(debounceRef.current);
    };
  }, [name, isOpen]);
  function fetchAI(_x, _x2) {
    return _fetchAI.apply(this, arguments);
  }
  function _fetchAI() {
    _fetchAI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(n, opened) {
      var _d$content, res, d, m, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setAiLoading(true);
            _context.p = 1;
            _context.n = 2;
            return fetch("https://api.anthropic.com/v1/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "anthropic-dangerous-direct-browser-access": "true"
              },
              body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 80,
                messages: [{
                  role: "user",
                  content: "Producto de refri: \"".concat(n, "\" (").concat(opened ? "ya abierto" : "sin abrir", ").\nResponde SOLO JSON sin markdown: {\"emoji\":\"\uD83E\uDD5B\",\"days\":7,\"note\":\"leche fresca\"}")
                }]
              })
            });
          case 2:
            res = _context.v;
            _context.n = 3;
            return res.json();
          case 3:
            d = _context.v;
            m = (((_d$content = d.content) === null || _d$content === void 0 || (_d$content = _d$content[0]) === null || _d$content === void 0 ? void 0 : _d$content.text) || "").match(/\{[\s\S]*?\}/);
            if (m) setAiResult(JSON.parse(m[0]));
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
          case 5:
            setAiLoading(false);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4]]);
    }));
    return _fetchAI.apply(this, arguments);
  }
  function fetchBatchAI(_x3) {
    return _fetchBatchAI.apply(this, arguments);
  }
  function _fetchBatchAI() {
    _fetchBatchAI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(n) {
      var _d$content2, res, d, m, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!batchAI[n]) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return fetch("https://api.anthropic.com/v1/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "anthropic-dangerous-direct-browser-access": "true"
              },
              body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 60,
                messages: [{
                  role: "user",
                  content: "Producto de refri: \"".concat(n, "\". Solo JSON: {\"emoji\":\"\uD83E\uDD55\",\"days\":10}")
                }]
              })
            });
          case 2:
            res = _context2.v;
            _context2.n = 3;
            return res.json();
          case 3:
            d = _context2.v;
            m = (((_d$content2 = d.content) === null || _d$content2 === void 0 || (_d$content2 = _d$content2[0]) === null || _d$content2 === void 0 ? void 0 : _d$content2.text) || "").match(/\{[\s\S]*?\}/);
            if (m) setBatchAI(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, n, JSON.parse(m[0])));
            });
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }));
    return _fetchBatchAI.apply(this, arguments);
  }
  function scanTicket(_x4) {
    return _scanTicket.apply(this, arguments);
  }
  function _scanTicket() {
    _scanTicket = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(file) {
      var reader, b64, _data$content, resp, data, text, match, products, newItems, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            setScanError(null);
            setScanning(true);
            // Preview
            reader = new FileReader();
            reader.onload = function (e) {
              return setScanPreview(e.target.result);
            };
            reader.readAsDataURL(file);
            // Base64 for API
            _context3.n = 1;
            return new Promise(function (res, rej) {
              var r = new FileReader();
              r.onload = function () {
                return res(r.result.split(",")[1]);
              };
              r.onerror = rej;
              r.readAsDataURL(file);
            });
          case 1:
            b64 = _context3.v;
            _context3.p = 2;
            _context3.n = 3;
            return fetch("https://api.anthropic.com/v1/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "anthropic-dangerous-direct-browser-access": "true"
              },
              body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 800,
                messages: [{
                  role: "user",
                  content: [{
                    type: "image",
                    source: {
                      type: "base64",
                      media_type: file.type || "image/jpeg",
                      data: b64
                    }
                  }, {
                    type: "text",
                    text: "Este es un ticket de supermercado. Extrae SOLO los productos alimenticios (ignora detergentes, papel, art\xEDculos del hogar, etc).\nPara cada producto devuelve JSON array sin markdown:\n[{\"name\":\"Pollo\",\"emoji\":\"\uD83C\uDF57\",\"days\":2},{\"name\":\"Leche\",\"emoji\":\"\uD83E\uDD5B\",\"days\":6}]\n- name: nombre limpio en espa\xF1ol\n- emoji: el m\xE1s representativo\n- days: d\xEDas de vida \xFAtil en refri\nSi no ves productos alimenticios claros, devuelve []."
                  }]
                }]
              })
            });
          case 3:
            resp = _context3.v;
            _context3.n = 4;
            return resp.json();
          case 4:
            data = _context3.v;
            text = ((_data$content = data.content) === null || _data$content === void 0 || (_data$content = _data$content[0]) === null || _data$content === void 0 ? void 0 : _data$content.text) || "";
            match = text.match(/\[[\s\S]*?\]/);
            if (match) {
              products = JSON.parse(match[0]);
              newItems = products.map(function (p) {
                return {
                  id: Date.now() + Math.random(),
                  name: p.name,
                  emoji: p.emoji || getEmoji(p.name),
                  shelfDays: p.days || getShelfDays(p.name),
                  category: "shelf1",
                  isOpen: false,
                  qty: "1 pza",
                  addedDate: new Date().toISOString().split("T")[0]
                };
              });
              if (newItems.length === 0) setScanError("No encontré productos alimenticios en el ticket.");else setBatchItems(function (prev) {
                return [].concat(_toConsumableArray(prev), _toConsumableArray(newItems));
              });
            } else {
              setScanError("No pude leer el ticket. Intenta con mejor iluminación.");
            }
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            setScanError("Error al procesar. Verifica tu conexión.");
          case 6:
            setScanning(false);
            setScanPreview(null);
          case 7:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 5]]);
    }));
    return _scanTicket.apply(this, arguments);
  }
  function addBatchItem() {
    var n = batchName.trim();
    if (!n) return;
    var ai = batchAI[n];
    setBatchItems(function (prev) {
      return [].concat(_toConsumableArray(prev), [{
        id: Date.now() + Math.random(),
        name: n,
        emoji: (ai === null || ai === void 0 ? void 0 : ai.emoji) || getEmoji(n),
        shelfDays: (ai === null || ai === void 0 ? void 0 : ai.days) || getShelfDays(n),
        category: category,
        isOpen: false,
        qty: "1 pza",
        addedDate: new Date().toISOString().split("T")[0]
      }]);
    });
    setBatchName("");
    fetchBatchAI(n);
    setTimeout(function () {
      var _batchInputRef$curren;
      return (_batchInputRef$curren = batchInputRef.current) === null || _batchInputRef$curren === void 0 ? void 0 : _batchInputRef$curren.focus();
    }, 50);
  }
  var finalEmoji = (aiResult === null || aiResult === void 0 ? void 0 : aiResult.emoji) || getEmoji(name);
  var finalDays = customDays ? parseInt(customDays) : (aiResult === null || aiResult === void 0 ? void 0 : aiResult.days) || getShelfDays(name);
  var inp = {
    width: "100%",
    background: C.card3,
    border: "1.5px solid ".concat(C.border),
    borderRadius: 12,
    padding: "13px 16px",
    color: C.text,
    fontSize: 15,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 600,
    outline: "none",
    transition: "border-color .15s",
    WebkitAppearance: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.7)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      zIndex: 200,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#111",
      borderRadius: "24px 24px 0 0",
      padding: "0 20px 48px",
      width: "100%",
      maxWidth: 480,
      boxShadow: "0 -24px 80px rgba(0,0,0,.6)",
      animation: "slideUp .32s cubic-bezier(.32,0,.67,0)",
      maxHeight: "94vh",
      overflowY: "auto",
      borderTop: "1px solid ".concat(C.borderMid),
      borderLeft: "1px solid ".concat(C.border),
      borderRight: "1px solid ".concat(C.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "14px 0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      background: C.surface,
      borderRadius: 4,
      border: "1px solid ".concat(C.borderMid)
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 22,
      background: C.surface,
      borderRadius: 12,
      padding: 4,
      border: "1px solid ".concat(C.border)
    }
  }, [{
    id: "single",
    icon: "✦",
    label: "Un producto"
  }, {
    id: "batch",
    icon: "🛒",
    label: "Del súper"
  }].map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      onClick: function onClick() {
        return setMode(m.id);
      },
      style: {
        flex: 1,
        padding: "9px 8px",
        borderRadius: 9,
        cursor: "pointer",
        textAlign: "center",
        background: mode === m.id ? C.card2 : "transparent",
        border: mode === m.id ? "1px solid ".concat(C.borderMid) : "1px solid transparent",
        transition: "all .15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        fontWeight: mode === m.id ? 700 : 500,
        color: mode === m.id ? C.text : "rgba(245,245,245,.35)"
      }
    }, m.label));
  })), mode === "single" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 16,
      background: name ? C.greenLight : C.surface,
      border: "1.5px solid ".concat(name ? C.green : C.border),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      transition: "all .2s"
    }
  }, aiLoading ? "⏳" : name ? finalEmoji : "🧺"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 18,
      color: C.text
    }
  }, name || "¿Qué compraste?"), (aiResult === null || aiResult === void 0 ? void 0 : aiResult.note) && !aiLoading && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.green,
      fontWeight: 800,
      marginTop: 2
    }
  }, "\u2728 ", aiResult.note))), /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: C.surface,
      border: "1px solid ".concat(C.borderMid),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: 15,
      color: C.textMid
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 10,
      color: C.textSoft,
      letterSpacing: 1.5,
      marginBottom: 8
    }
  }, "PRODUCTO"), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "ej. leche de almendras, pollo\u2026",
    style: inp,
    onFocus: function onFocus(e) {
      return e.target.style.borderColor = C.blue;
    },
    onBlur: function onBlur(e) {
      return e.target.style.borderColor = C.border;
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      margin: "14px 0"
    }
  }, [{
    val: false,
    icon: "🔒",
    label: "Sin abrir",
    color: C.green,
    shadow: C.greenDark,
    bg: C.greenLight
  }, {
    val: true,
    icon: "🔓",
    label: "Ya abierto",
    color: C.orange,
    shadow: C.orangeDark,
    bg: C.orangeLight
  }].map(function (opt) {
    return /*#__PURE__*/React.createElement("div", {
      key: String(opt.val),
      onClick: function onClick() {
        return setIsOpen(opt.val);
      },
      style: {
        flex: 1,
        padding: "12px",
        borderRadius: 14,
        cursor: "pointer",
        textAlign: "center",
        background: isOpen === opt.val ? opt.bg : C.surface,
        border: "1.5px solid ".concat(isOpen === opt.val ? opt.color : C.border),
        transition: "all .15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        marginBottom: 3
      }
    }, opt.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontWeight: 600,
        fontSize: 12,
        color: isOpen === opt.val ? opt.color : C.textSoft
      }
    }, opt.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 10,
      color: C.textSoft,
      letterSpacing: 1.5,
      marginBottom: 8
    }
  }, "CANTIDAD"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: qty,
    onChange: function onChange(e) {
      return setQty(e.target.value);
    },
    style: inp,
    onFocus: function onFocus(e) {
      return e.target.style.borderColor = C.blue;
    },
    onBlur: function onBlur(e) {
      return e.target.style.borderColor = C.border;
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 10,
      color: C.textSoft,
      letterSpacing: 1.5,
      marginBottom: 8
    }
  }, "UNIDAD"), /*#__PURE__*/React.createElement("select", {
    value: unit,
    onChange: function onChange(e) {
      return setUnit(e.target.value);
    },
    style: _objectSpread(_objectSpread({}, inp), {}, {
      cursor: "pointer"
    })
  }, ["pza", "kg", "g", "L", "ml", "paq", "lata", "bote"].map(function (u) {
    return /*#__PURE__*/React.createElement("option", {
      key: u
    }, u);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 10,
      color: C.textSoft,
      letterSpacing: 1.5,
      marginBottom: 8
    }
  }, "\xBFD\xD3NDE VA?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginBottom: 14
    }
  }, SHELVES.map(function (z) {
    return /*#__PURE__*/React.createElement("div", {
      key: z.id,
      onClick: function onClick() {
        return setCategory(z.id);
      },
      style: {
        padding: "10px 12px",
        borderRadius: 14,
        cursor: "pointer",
        background: category === z.id ? z.bg : C.surface,
        border: "1.5px solid ".concat(category === z.id ? z.color : C.border),
        transition: "all .15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontWeight: 600,
        fontSize: 12,
        color: category === z.id ? z.color : C.textSoft
      }
    }, z.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 10,
      color: C.textSoft,
      letterSpacing: 1.5,
      marginBottom: 8
    }
  }, "D\xCDAS HASTA VENCER"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: _defineProperty({
      flex: 1,
      borderRadius: 14,
      padding: "12px 14px",
      background: aiResult ? C.greenLight : C.surface,
      border: "1.5px solid ".concat(aiResult ? C.green : C.border),
      display: "flex",
      alignItems: "center",
      gap: 8
    }, "borderRadius", 12)
  }, aiLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      animation: "spin 1s linear infinite"
    }
  }, "\u23F3"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.textSoft,
      fontWeight: 700
    }
  }, "Calculando\u2026")) : aiResult ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 15,
      color: C.green
    }
  }, "IA: ", aiResult.days, "d")) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.textSoft,
      fontStyle: "italic"
    }
  }, "esperando\u2026")), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: customDays,
    onChange: function onChange(e) {
      return setCustomDays(e.target.value);
    },
    placeholder: "Manual",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: 90,
      flex: "none",
      textAlign: "center"
    }),
    onFocus: function onFocus(e) {
      return e.target.style.borderColor = C.blue;
    },
    onBlur: function onBlur(e) {
      return e.target.style.borderColor = C.border;
    }
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      if (!name.trim()) return;
      onAdd({
        id: Date.now(),
        name: name.trim(),
        emoji: finalEmoji,
        category: category,
        qty: "".concat(qty, " ").concat(unit),
        shelfDays: finalDays,
        addedDate: new Date().toISOString().split("T")[0],
        isOpen: isOpen,
        aiNote: (aiResult === null || aiResult === void 0 ? void 0 : aiResult.note) || null
      });
      onClose();
    },
    style: {
      background: name.trim() ? C.green : "rgba(255,255,255,.06)",
      borderRadius: 14,
      padding: "15px 0",
      textAlign: "center",
      cursor: name.trim() ? "pointer" : "default",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 15,
      color: name.trim() ? "#fff" : C.textSoft,
      transition: "all .2s",
      boxShadow: name.trim() ? "0 8px 24px ".concat(C.greenGlow) : "none",
      border: "1px solid ".concat(name.trim() ? C.green : C.border)
    }
  }, "+ Agregar ", name ? finalEmoji : "", " al refri")), mode === "batch" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    style: {
      display: "none"
    },
    onChange: function onChange(e) {
      if (e.target.files[0]) scanTicket(e.target.files[0]);
      e.target.value = "";
    }
  }), scanning ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      borderRadius: 20,
      overflow: "hidden",
      border: "1px solid ".concat(C.borderMid),
      background: C.card2
    }
  }, scanPreview && /*#__PURE__*/React.createElement("img", {
    src: scanPreview,
    alt: "ticket",
    style: {
      width: "100%",
      maxHeight: 180,
      objectFit: "cover",
      display: "block",
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      animation: "spin 1s linear infinite",
      display: "inline-block",
      marginBottom: 8
    }
  }, "\u23F3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: C.blue
    }
  }, "Leyendo ticket\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.textSoft,
      fontWeight: 600,
      marginTop: 4
    }
  }, "La IA est\xE1 extrayendo tus productos"))) : /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    style: {
      marginBottom: 14,
      padding: "22px 0",
      borderRadius: 16,
      border: "1.5px dashed ".concat(C.blue),
      background: C.blueLight,
      textAlign: "center",
      cursor: "pointer",
      transition: "all .15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 6
    }
  }, "\uD83D\uDCF7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: C.blue
    }
  }, "Escanear ticket"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: "rgba(56,189,248,.55)",
      fontWeight: 500,
      marginTop: 3
    }
  }, "La IA detecta los productos autom\xE1ticamente")), scanError && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      padding: "10px 14px",
      borderRadius: 12,
      background: C.redLight,
      border: "2px solid ".concat(C.red),
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.red,
      fontWeight: 700
    }
  }, "\u26A0\uFE0F ", scanError), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: C.border
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.textSoft,
      fontWeight: 600
    }
  }, "o escribe"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: C.border
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: batchInputRef,
    value: batchName,
    onChange: function onChange(e) {
      setBatchName(e.target.value);
      if (e.target.value.length > 2) fetchBatchAI(e.target.value.trim());
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && addBatchItem();
    },
    placeholder: "Escribe un producto y Enter\u2026",
    style: {
      flex: 1,
      background: C.card3,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 12,
      padding: "13px 16px",
      color: C.text,
      fontSize: 14,
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 600,
      outline: "none",
      transition: "border-color .15s"
    },
    onFocus: function onFocus(e) {
      return e.target.style.borderColor = C.blue;
    },
    onBlur: function onBlur(e) {
      return e.target.style.borderColor = C.border;
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: addBatchItem,
    style: {
      background: C.blue,
      borderRadius: 12,
      padding: "13px 16px",
      cursor: "pointer",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 16,
      color: "#fff",
      boxShadow: "0 4px 16px rgba(56,189,248,.25)"
    }
  }, "+")), batchItems.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 10,
      fontWeight: 700,
      color: C.textSoft,
      letterSpacing: 1.5,
      marginBottom: 10
    }
  }, batchItems.length, " PRODUCTO", batchItems.length > 1 ? "S" : "", " \xB7 toca \u2715 para quitar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, batchItems.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: C.greenLight,
        borderRadius: 40,
        border: "1px solid ".concat(C.green, "44"),
        padding: "6px 10px 6px 8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, item.emoji), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: C.text
      }
    }, item.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 10,
        color: C.green,
        fontWeight: 700
      }
    }, item.shelfDays, "d"), /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        return setBatchItems(function (prev) {
          return prev.filter(function (i) {
            return i.id !== item.id;
          });
        });
      },
      style: {
        fontSize: 12,
        color: C.textSoft,
        cursor: "pointer",
        marginLeft: 2
      }
    }, "\u2715"));
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      textAlign: "center",
      color: C.textSoft,
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 14
    }
  }, "Escanea un ticket o escribe uno por uno \uD83D\uDC46"), /*#__PURE__*/React.createElement("div", {
    onClick: batchItems.length > 0 ? function () {
      batchItems.forEach(function (item) {
        return onAdd(_objectSpread(_objectSpread({}, item), {}, {
          id: Date.now() + Math.random()
        }));
      });
      onClose();
    } : null,
    style: {
      background: batchItems.length > 0 ? C.green : "rgba(255,255,255,.06)",
      borderRadius: 14,
      padding: "15px 0",
      textAlign: "center",
      cursor: batchItems.length > 0 ? "pointer" : "default",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 15,
      color: batchItems.length > 0 ? "#fff" : C.textSoft,
      border: "1px solid ".concat(batchItems.length > 0 ? C.green : C.border),
      boxShadow: batchItems.length > 0 ? "0 8px 24px ".concat(C.greenGlow) : "none",
      transition: "all .2s"
    }
  }, "\uD83D\uDED2 Guardar ", batchItems.length > 0 ? "".concat(batchItems.length, " productos") : "productos", " al refri"))));
}

// ── PRODUCT BOTTOM SHEET ──────────────────────────────────────────────────────
function ProductSheet(_ref0) {
  var item = _ref0.item,
    onDelete = _ref0.onDelete,
    onToggleOpen = _ref0.onToggleOpen,
    onClose = _ref0.onClose;
  var days = daysLeft(item);
  var st = getStatus(days);
  var shelf = SHELVES.find(function (s) {
    return s.id === item.category;
  });
  var maxDays = item.shelfDays || 14;
  var pct = Math.max(0, Math.min(100, days / maxDays * 100));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.38)",
      zIndex: 200,
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      width: "100%",
      background: "#111",
      borderRadius: "24px 24px 0 0",
      borderTop: "1px solid ".concat(C.borderMid),
      borderLeft: "1px solid ".concat(C.border),
      borderRight: "1px solid ".concat(C.border),
      boxShadow: "0 -24px 80px rgba(0,0,0,.6)",
      paddingBottom: 32,
      animation: "slideUp .28s cubic-bezier(.32,0,.67,0)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "12px 0 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: C.border
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "8px 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 18,
      flexShrink: 0,
      background: (shelf === null || shelf === void 0 ? void 0 : shelf.bg) || C.greenLight,
      border: "1.5px solid ".concat((shelf === null || shelf === void 0 ? void 0 : shelf.color) || C.green, "22"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 34,
      position: "relative"
    }
  }, item.emoji, item.isOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -7,
      right: -7,
      fontSize: 13,
      background: C.card,
      borderRadius: "50%",
      width: 22,
      height: 22,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid ".concat(C.orange),
      boxShadow: "0 2px 0 ".concat(C.orangeDark)
    }
  }, "\uD83D\uDD13")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 22,
      fontWeight: 600,
      color: C.text
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.textSoft,
      fontWeight: 600,
      marginTop: 2
    }
  }, item.qty, " \xB7 ", shelf === null || shelf === void 0 ? void 0 : shelf.label), item.aiNote && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.green,
      fontWeight: 800,
      marginTop: 2
    }
  }, "\u2728 ", item.aiNote)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: st.bg,
      border: "1px solid ".concat(st.color, "44"),
      borderRadius: 12,
      padding: "6px 12px",
      flexShrink: 0,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 16,
      color: st.color
    }
  }, st.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 12,
      color: st.color
    }
  }, days <= 0 ? "Vencido" : days === 1 ? "¡Hoy!" : "".concat(days, "d")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.textSoft,
      fontWeight: 700
    }
  }, "Agregado ", new Date(item.addedDate).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.textSoft,
      fontWeight: 700
    }
  }, days > 0 ? "".concat(days, " de ").concat(maxDays, " d\xEDas") : "Vencido")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: "rgba(255,255,255,.07)",
      borderRadius: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(pct, "%"),
      height: "100%",
      background: st.color,
      borderRadius: 5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return onToggleOpen(item.id);
    },
    style: {
      margin: "0 20px 16px",
      padding: "13px 16px",
      borderRadius: 16,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: item.isOpen ? C.orangeLight : C.greenLight,
      border: "1.5px solid ".concat(item.isOpen ? C.orange : C.green)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 600,
      fontSize: 14,
      color: item.isOpen ? C.orange : C.green
    }
  }, item.isOpen ? "🔓 Abierto — vida útil reducida" : "🔒 Sin abrir — vida útil completa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 10,
      color: C.textSoft,
      fontWeight: 700
    }
  }, "cambiar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      onDelete(item.id);
      onClose();
    },
    style: {
      flex: 1,
      background: C.redLight,
      border: "1.5px solid ".concat(C.red, "44"),
      borderRadius: 14,
      padding: "14px 0",
      textAlign: "center",
      cursor: "pointer",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: C.red
    }
  }, "\uD83D\uDDD1\uFE0F Tirar"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      onDelete(item.id);
      onClose();
    },
    style: {
      flex: 2,
      background: C.green,
      borderRadius: 14,
      padding: "14px 0",
      textAlign: "center",
      cursor: "pointer",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: "#fff",
      boxShadow: "0 8px 20px ".concat(C.greenGlow)
    }
  }, "\u2705 Ya lo us\xE9"), /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      flex: 1,
      background: C.surface,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "14px 0",
      textAlign: "center",
      cursor: "pointer",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 600,
      fontSize: 14,
      color: C.textSoft
    }
  }, "\u2715"))));
}

// ── LIST ITEM (Inventory view, long press fill to mark used) ─────────────────
function SwipeListItem(_ref1) {
  var item = _ref1.item,
    onDelete = _ref1.onDelete,
    onTap = _ref1.onTap;
  var _useState35 = useState(0),
    _useState36 = _slicedToArray(_useState35, 2),
    fillPct = _useState36[0],
    setFillPct = _useState36[1];
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    done = _useState38[0],
    setDone = _useState38[1];
  var rafRef = useRef(null);
  var startRef = useRef(null);
  var DURATION = 900;
  function startPress() {
    startRef.current = performance.now();
    function tick(now) {
      var p = Math.min(100, (now - startRef.current) / DURATION * 100);
      setFillPct(p);
      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDone(true);
        setTimeout(function () {
          return onDelete(item.id);
        }, 320);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }
  function cancelPress() {
    cancelAnimationFrame(rafRef.current);
    setFillPct(0);
  }
  var days = daysLeft(item);
  var st = getStatus(days);
  var maxDays = item.shelfDays || 14;
  var pct = Math.max(0, Math.min(100, days / maxDays * 100));
  var filling = fillPct > 0 && !done;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseDown: startPress,
    onMouseUp: cancelPress,
    onMouseLeave: cancelPress,
    onTouchStart: startPress,
    onTouchEnd: cancelPress,
    onTouchMove: cancelPress,
    onClick: function onClick() {
      if (fillPct === 0) onTap(item);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: C.card,
      borderRadius: 16,
      padding: "11px 14px",
      border: "2px solid ".concat(done ? C.green : days <= 1 ? st.color : C.border),
      boxShadow: "0 3px 0 ".concat(done ? C.greenDark : days <= 1 ? st.color : C.border),
      cursor: "pointer",
      userSelect: "none",
      position: "relative",
      overflow: "hidden",
      transition: "border-color .2s, box-shadow .2s"
    }
  }, (filling || done) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: done ? "100%" : "".concat(fillPct, "%"),
      background: done ? C.green : "rgba(88,204,2,".concat(0.1 + fillPct * 0.005, ")"),
      transition: done ? "width .25s ease" : "none",
      pointerEvents: "none",
      zIndex: 1,
      borderRadius: done ? 14 : "14px 0 0 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      flexShrink: 0,
      position: "relative",
      zIndex: 2
    }
  }, item.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 600,
      fontSize: 14,
      color: done ? "#fff" : C.text,
      transition: "color .2s"
    }
  }, item.name, item.isOpen ? " 🔓" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 12,
      color: done ? "#fff" : st.color,
      flexShrink: 0,
      marginLeft: 8,
      transition: "color .2s"
    }
  }, done ? "✅" : st.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: "rgba(0,0,0,.08)",
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(pct, "%"),
      height: "100%",
      background: done ? "rgba(255,255,255,.6)" : st.color,
      borderRadius: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: done ? "#fff" : C.textSoft,
      flexShrink: 0,
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      position: "relative",
      zIndex: 2,
      transition: "color .2s"
    }
  }, done ? "🎉" : "mantén")));
}

// ── INVENTORY VIEW ────────────────────────────────────────────────────────────
function InventoryView(_ref10) {
  var items = _ref10.items,
    onDelete = _ref10.onDelete,
    onTap = _ref10.onTap;
  var _useState39 = useState("todos"),
    _useState40 = _slicedToArray(_useState39, 2),
    activeTab = _useState40[0],
    setActiveTab = _useState40[1];
  var CAT_DEFS = [{
    id: "todos",
    label: "Todos",
    emoji: "🍱"
  }, {
    id: "carnes",
    label: "Carnes",
    emoji: "🥩"
  }, {
    id: "lácteos",
    label: "Lácteos",
    emoji: "🧀"
  }, {
    id: "verduras",
    label: "Verduras",
    emoji: "🥦"
  }, {
    id: "frutas",
    label: "Frutas",
    emoji: "🍎"
  }, {
    id: "bebidas",
    label: "Bebidas",
    emoji: "🍺"
  }, {
    id: "otros",
    label: "Otros",
    emoji: "📦"
  }];
  function getCat(item) {
    var n = item.name.toLowerCase();
    if (["pollo", "carne", "res", "cerdo", "pescado", "salmón", "camarón", "atún"].some(function (k) {
      return n.includes(k);
    })) return "carnes";
    if (["leche", "yogur", "queso", "mantequilla", "crema"].some(function (k) {
      return n.includes(k);
    })) return "lácteos";
    if (["lechuga", "espinaca", "brócoli", "zanahoria", "jitomate", "pepino", "cebolla", "ajo"].some(function (k) {
      return n.includes(k);
    })) return "verduras";
    if (["aguacate", "limón", "naranja", "manzana", "plátano", "fresa", "uva", "kiwi"].some(function (k) {
      return n.includes(k);
    })) return "frutas";
    if (["jugo", "cerveza", "vino", "agua", "refresco"].some(function (k) {
      return n.includes(k);
    })) return "bebidas";
    return "otros";
  }
  var withCat = items.map(function (i) {
    return _objectSpread(_objectSpread({}, i), {}, {
      _cat: getCat(i)
    });
  });
  var counts = {};
  withCat.forEach(function (i) {
    counts[i._cat] = (counts[i._cat] || 0) + 1;
  });
  var filtered = activeTab === "todos" ? withCat : withCat.filter(function (i) {
    return i._cat === activeTab;
  });
  var sorted = _toConsumableArray(filtered).sort(function (a, b) {
    return daysLeft(a) - daysLeft(b);
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 12,
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    }
  }, CAT_DEFS.filter(function (c) {
    return c.id === "todos" || counts[c.id];
  }).map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      onClick: function onClick() {
        return setActiveTab(c.id);
      },
      style: {
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "7px 14px",
        borderRadius: 20,
        cursor: "pointer",
        background: activeTab === c.id ? C.green : C.surface,
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        fontWeight: activeTab === c.id ? 700 : 500,
        color: activeTab === c.id ? "#fff" : C.textSoft,
        border: "1px solid ".concat(activeTab === c.id ? C.green : C.border),
        transition: "all .15s"
      }
    }, /*#__PURE__*/React.createElement("span", null, c.emoji), /*#__PURE__*/React.createElement("span", null, c.label), c.id !== "todos" && counts[c.id] && /*#__PURE__*/React.createElement("span", {
      style: {
        background: activeTab === c.id ? "rgba(255,255,255,.3)" : C.surface,
        borderRadius: 20,
        padding: "1px 7px",
        fontSize: 10
      }
    }, counts[c.id]));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.textSoft,
      fontWeight: 500,
      marginBottom: 10,
      textAlign: "center"
    }
  }, "\u2190 desliza para marcar como usado"), sorted.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 0",
      color: C.textSoft,
      fontFamily: "'Fraunces',serif",
      fontSize: 14
    }
  }, "Vac\xEDo \uD83C\uDF89") : sorted.map(function (item) {
    return /*#__PURE__*/React.createElement(SwipeListItem, {
      key: item.id,
      item: item,
      onDelete: onDelete,
      onTap: onTap
    });
  }));
}

// ── RECIPES VIEW ─────────────────────────────────────────────────────────────
function RecipesView(_ref11) {
  var _selected$have, _selected$missing;
  var items = _ref11.items,
    onConsumed = _ref11.onConsumed;
  var _useState41 = useState([]),
    _useState42 = _slicedToArray(_useState41, 2),
    recipes = _useState42[0],
    setRecipes = _useState42[1];
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    loading = _useState44[0],
    setLoading = _useState44[1];
  var _useState45 = useState(null),
    _useState46 = _slicedToArray(_useState45, 2),
    selected = _useState46[0],
    setSelected = _useState46[1]; // recipe detail
  var _useState47 = useState(false),
    _useState48 = _slicedToArray(_useState47, 2),
    detailLoad = _useState48[0],
    setDetailLoad = _useState48[1];
  var _useState49 = useState(""),
    _useState50 = _slicedToArray(_useState49, 2),
    detailText = _useState50[0],
    setDetailText = _useState50[1];
  var _useState51 = useState("urgente"),
    _useState52 = _slicedToArray(_useState51, 2),
    filter = _useState52[0],
    setFilter = _useState52[1]; // urgente | todo | rapido
  var _useState53 = useState(false),
    _useState54 = _slicedToArray(_useState53, 2),
    surprise = _useState54[0],
    setSurprise = _useState54[1];
  var _useState55 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem("mangia_saved") || "[]");
      } catch (e) {
        return [];
      }
    }),
    _useState56 = _slicedToArray(_useState55, 2),
    saved = _useState56[0],
    setSaved = _useState56[1];
  var _useState57 = useState(""),
    _useState58 = _slicedToArray(_useState57, 2),
    apiError = _useState58[0],
    setApiError = _useState58[1];
  function generateRecipes() {
    return _generateRecipes.apply(this, arguments);
  }
  function _generateRecipes() {
    _generateRecipes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var surprise,
        all,
        urgent,
        forList,
        names,
        ingredientList,
        prompt,
        success,
        _data,
        _data2,
        res,
        text,
        data,
        raw,
        match,
        fridgeHas,
        tagMatches,
        scoreRecipe,
        _names,
        has,
        hasPollo,
        hasCarne,
        hasCerdo,
        hasPescado,
        hasMarisco,
        hasHuevo,
        hasQueso,
        hasCrema,
        hasLeche,
        hasVerd,
        hasPasta,
        hasArroz,
        hasFrijol,
        hasAguacate,
        hasChile,
        hasTomate,
        hasCebolla,
        hasAjo,
        hasLimón,
        hasFruta,
        ingHave,
        urgentNames,
        isUrgent,
        ALL_RECIPES,
        fridgeNames,
        TAG_GROUPS,
        scored,
        finalList,
        _args4 = arguments,
        _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            surprise = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : false;
            if (!(items.length === 0)) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            setLoading(true);
            setRecipes([]);
            setApiError("");
            all = items;
            urgent = all.filter(function (i) {
              return daysLeft(i) <= 2;
            });
            forList = filter === "urgente" ? urgent.length > 0 ? urgent : all : all;
            names = forList.map(function (i) {
              return i.name;
            }).join(", ");
            ingredientList = forList.map(function (i) {
              return "".concat(i.emoji, " ").concat(i.name);
            }).join(", ");
            prompt = surprise ? "Tengo: ".concat(all.map(function (i) {
              return "".concat(i.emoji, " ").concat(i.name);
            }).join(", "), ". Sorpr\xE9ndeme con 1 receta creativa. SOLO JSON array:\n[{\"title\":\"Nombre\",\"time\":20,\"difficulty\":\"F\xE1cil\",\"have\":[\"\uD83C\uDF57 Pollo\"],\"missing\":[\"\uD83E\uDDC4 Ajo\"],\"teaser\":\"descripci\xF3n 1 l\xEDnea\",\"urgent\":false}]") : "Tengo en el refri: ".concat(ingredientList, ". ").concat(filter === "rapido" ? "Max 20 minutos." : "", " Genera 4 recetas. SOLO JSON array sin markdown:\n[{\"title\":\"Nombre\",\"time\":15,\"difficulty\":\"F\xE1cil\",\"have\":[\"\uD83C\uDF57 Pollo\"],\"missing\":[\"\uD83E\uDDC4 Ajo\"],\"teaser\":\"descripci\xF3n apetitosa\",\"urgent\":false}]");
            success = false;
            _context4.p = 2;
            _context4.n = 3;
            return fetch("https://api.anthropic.com/v1/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "anthropic-dangerous-direct-browser-access": "true"
              },
              body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 900,
                messages: [{
                  role: "user",
                  content: prompt
                }]
              })
            });
          case 3:
            res = _context4.v;
            _context4.n = 4;
            return res.text();
          case 4:
            text = _context4.v;
            try {
              data = JSON.parse(text);
            } catch (e) {
              setApiError("Respuesta no JSON: ".concat(text.slice(0, 80)));
              data = null;
            }
            if ((_data = data) !== null && _data !== void 0 && (_data = _data.content) !== null && _data !== void 0 && (_data = _data[0]) !== null && _data !== void 0 && _data.text) {
              raw = data.content[0].text;
              match = raw.match(/\[[\s\S]*\]/);
              if (match) {
                try {
                  setRecipes(JSON.parse(match[0]));
                  success = true;
                } catch (pe) {
                  setApiError("Parse: ".concat(raw.slice(0, 80)));
                }
              } else {
                setApiError("Sin JSON array: ".concat(raw.slice(0, 80)));
              }
            } else if ((_data2 = data) !== null && _data2 !== void 0 && _data2.error) {
              setApiError("API: ".concat(data.error.message));
            }
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t4 = _context4.v;
            setApiError("Fetch: ".concat(_t4.message));
          case 6:
            // Fallback — biblioteca local de 50+ recetas con matching inteligente
            if (!success) {
              fridgeHas = function fridgeHas(keyword) {
                var k = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return fridgeNames.some(function (n) {
                  return n.includes(k) || k.includes(n);
                });
              }; // Tag → ingredient group mapping
              tagMatches = function tagMatches(tag) {
                if (tag === "*") return true;
                var keywords = TAG_GROUPS[tag] || [tag];
                if (keywords.includes("*")) return true;
                return keywords.some(function (k) {
                  return fridgeHas(k);
                });
              }; // Score each recipe: +1 per ingredient user has, flag if urgent ingredient
              scoreRecipe = function scoreRecipe(r) {
                var _r$ing;
                var matchedTags = r.tags.filter(function (t) {
                  return tagMatches(t);
                });
                if (matchedTags.length === 0 && !r.tags.includes("*")) return null;

                // Only show fridge items that actually appear in this recipe's ingredient list
                var recipeIng = (r.ing || []).map(function (i) {
                  return i.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
                });
                var matchedFridgeItems = forList.filter(function (item) {
                  var norm = item.name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
                  return recipeIng.some(function (ri) {
                    return ri.includes(norm) || norm.includes(ri);
                  });
                });

                // If recipe has specific ingredients listed, at least one must match fridge
                var ingScore = matchedFridgeItems.length;
                if (((_r$ing = r.ing) === null || _r$ing === void 0 ? void 0 : _r$ing.length) > 0 && ingScore === 0 && !r.tags.includes("*")) return null;
                var haveLabels = matchedFridgeItems.map(function (i) {
                  return "".concat(i.emoji, " ").concat(i.name);
                });
                var isUrgentR = matchedFridgeItems.some(function (i) {
                  return urgentNames.some(function (u) {
                    return u.toLowerCase() === i.name.toLowerCase();
                  });
                });
                return _objectSpread(_objectSpread({}, r), {}, {
                  ingScore: ingScore,
                  urgent: isUrgentR,
                  have: haveLabels
                });
              };
              _names = forList.map(function (i) {
                return i.name.toLowerCase();
              });
              has = function has(re) {
                return _names.some(function (n) {
                  return re.test(n);
                });
              };
              hasPollo = has(/pollo|pechuga|muslo|ala/);
              hasCarne = has(/carne|res|bistec|molida|costilla|chuleta|ternera/);
              hasCerdo = has(/cerdo|tocino|chorizo|salchicha|jamón|costilla/);
              hasPescado = has(/pescado|salmón|tilapia|robalo|mojarra|atún|filete/);
              hasMarisco = has(/camarón|pulpo|calamar|langosta|cangrejo/);
              hasHuevo = has(/huevo/);
              hasQueso = has(/queso/);
              hasCrema = has(/crema/);
              hasLeche = has(/leche/);
              hasVerd = has(/brócoli|espinaca|lechuga|zanahoria|jitomate|tomate|pepino|calabaz|nopal|chayote|elote|pimiento|chile/);
              hasPasta = has(/pasta|espagueti|fettuccine|macarrón/);
              hasArroz = has(/arroz/);
              hasFrijol = has(/frijol|lenteja|garbanzo/);
              hasAguacate = has(/aguacate/);
              hasChile = has(/chile|jalapeño|serrano|habanero/);
              hasTomate = has(/jitomate|tomate/);
              hasCebolla = has(/cebolla/);
              hasAjo = has(/ajo/);
              hasLimón = has(/limón/);
              hasFruta = has(/mango|fresa|plátano|manzana|piña|durazno|naranja/);
              ingHave = forList.slice(0, 5).map(function (i) {
                return "".concat(i.emoji, " ").concat(i.name);
              });
              urgentNames = urgent.map(function (u) {
                return u.name;
              });
              isUrgent = function isUrgent(re) {
                return urgentNames.some(function (n) {
                  return re.test(n.toLowerCase());
                });
              };
              ALL_RECIPES = [
              // ── POLLO ──────────────────────────────────────────────────────────────
              {
                tags: ["pollo"],
                title: "Pollo al limón con ajo",
                time: 25,
                difficulty: "Fácil",
                teaser: "Jugoso y dorado, el clásico de siempre",
                ing: ["pollo", "limón", "ajo", "aceite"]
              }, {
                tags: ["pollo"],
                title: "Pollo en salsa verde",
                time: 35,
                difficulty: "Media",
                teaser: "Con tomatillo y chile, sabor mexicano auténtico",
                ing: ["pollo", "tomatillo", "chile", "cebolla", "cilantro"]
              }, {
                tags: ["pollo"],
                title: "Pollo a la crema con champiñones",
                time: 30,
                difficulty: "Media",
                teaser: "Suave y reconfortante, listo en media hora",
                ing: ["pollo", "crema", "champiñón", "ajo"]
              }, {
                tags: ["pollo"],
                title: "Milanesa de pollo empanizada",
                time: 20,
                difficulty: "Fácil",
                teaser: "Crujiente por fuera, tierna por dentro",
                ing: ["pollo", "huevo", "pan"]
              }, {
                tags: ["pollo"],
                title: "Caldo tlalpeño",
                time: 45,
                difficulty: "Media",
                teaser: "Caldo aromático con chipotle y garbanzos",
                ing: ["pollo", "chile", "garbanzo", "epazote"]
              }, {
                tags: ["pollo"],
                title: "Tacos de pollo al pastor",
                time: 30,
                difficulty: "Media",
                teaser: "Marinado con achiote y piña",
                ing: ["pollo", "piña", "tortilla", "chile"]
              }, {
                tags: ["pollo"],
                title: "Arroz con pollo",
                time: 40,
                difficulty: "Media",
                teaser: "Un clásico completo en una sola olla",
                ing: ["pollo", "arroz", "jitomate", "cebolla"]
              }, {
                tags: ["pollo"],
                title: "Pollo en adobo con papas",
                time: 40,
                difficulty: "Media",
                teaser: "El adobo le da una explosión de sabor único",
                ing: ["pollo", "chile guajillo", "papa", "ajo", "vinagre"]
              }, {
                tags: ["pollo"],
                title: "Tinga de pollo",
                time: 30,
                difficulty: "Fácil",
                teaser: "Deshebrado en chipotle, perfecto para tostadas o tacos",
                ing: ["pollo", "chile chipotle", "jitomate", "cebolla"]
              }, {
                tags: ["pollo"],
                title: "Flautas de pollo doradas",
                time: 25,
                difficulty: "Fácil",
                teaser: "Crujientes y adictivas, con crema y queso",
                ing: ["pollo", "tortilla", "crema", "queso"]
              }, {
                tags: ["pollo"],
                title: "Enchiladas verdes de pollo",
                time: 30,
                difficulty: "Media",
                teaser: "Bañadas en salsa verde cremosa",
                ing: ["pollo", "tomatillo", "crema", "queso", "tortilla"]
              }, {
                tags: ["pollo"],
                title: "Pozole de pollo",
                time: 60,
                difficulty: "Media",
                teaser: "Caldito reconfortante con maíz cacahuazintle",
                ing: ["pollo", "maíz", "chile", "orégano", "cebolla"]
              }, {
                tags: ["pollo"],
                title: "Pollo en mole rojo express",
                time: 35,
                difficulty: "Media",
                teaser: "Versión rápida del mole clásico",
                ing: ["pollo", "chile mulato", "chocolate", "ajo", "cebolla"]
              }, {
                tags: ["pollo"],
                title: "Sopa de lima yucateca",
                time: 35,
                difficulty: "Media",
                teaser: "Cítrica y aromática, un clásico del sureste",
                ing: ["pollo", "limón", "naranja", "tortilla", "chile"]
              }, {
                tags: ["pollo"],
                title: "Pollo con rajas y crema",
                time: 25,
                difficulty: "Fácil",
                teaser: "Chile poblano, crema y queso — irresistible",
                ing: ["pollo", "chile poblano", "crema", "queso", "elote"]
              },
              // ── CARNE DE RES ───────────────────────────────────────────────────────
              {
                tags: ["carne", "res"],
                title: "Bistec a la mexicana",
                time: 20,
                difficulty: "Fácil",
                teaser: "Con jitomate, cebolla y chile — listo rápido",
                ing: ["bistec", "jitomate", "cebolla", "chile"]
              }, {
                tags: ["carne", "res"],
                title: "Carne asada al carbón",
                time: 25,
                difficulty: "Fácil",
                teaser: "Marinada con limón y especias",
                ing: ["carne", "limón", "ajo", "comino"]
              }, {
                tags: ["carne", "molida"],
                title: "Picadillo con verduras",
                time: 25,
                difficulty: "Fácil",
                teaser: "Económico, nutritivo y muy versátil",
                ing: ["molida", "zanahoria", "papa", "jitomate"]
              }, {
                tags: ["carne", "molida"],
                title: "Sopa de albóndigas",
                time: 40,
                difficulty: "Media",
                teaser: "Caldito sabroso con albóndigas caseras",
                ing: ["molida", "arroz", "zanahoria", "jitomate", "menta"]
              }, {
                tags: ["carne", "res"],
                title: "Estofado de res",
                time: 90,
                difficulty: "Media",
                teaser: "Carne suave que se deshace, con papas y zanahorias",
                ing: ["res", "papa", "zanahoria", "cebolla", "jitomate"]
              }, {
                tags: ["carne", "res"],
                title: "Caldillo de res norteño",
                time: 50,
                difficulty: "Media",
                teaser: "Caldo espeso con carne y chile colorado",
                ing: ["res", "chile", "papa", "jitomate", "cebolla"]
              }, {
                tags: ["carne", "res"],
                title: "Milanesa de res empanizada",
                time: 20,
                difficulty: "Fácil",
                teaser: "Clásica con ensalada y limón",
                ing: ["bistec", "huevo", "pan", "limón"]
              }, {
                tags: ["carne", "res"],
                title: "Birria de res",
                time: 120,
                difficulty: "Difícil",
                teaser: "El guiso rojo más sabroso de la cocina mexicana",
                ing: ["res", "chile guajillo", "chile ancho", "ajo", "vinagre", "comino"]
              }, {
                tags: ["carne", "molida"],
                title: "Tacos de carne molida",
                time: 20,
                difficulty: "Fácil",
                teaser: "Guisada con especias, rápida y rica",
                ing: ["molida", "cebolla", "ajo", "jitomate", "tortilla"]
              }, {
                tags: ["carne", "res"],
                title: "Quesadillas de carne asada",
                time: 20,
                difficulty: "Fácil",
                teaser: "Con queso fundido y salsa casera",
                ing: ["carne", "queso", "tortilla"]
              },
              // ── CERDO ──────────────────────────────────────────────────────────────
              {
                tags: ["cerdo"],
                title: "Carnitas estilo Michoacán",
                time: 90,
                difficulty: "Media",
                teaser: "Doradas y jugosas, el secreto está en la manteca",
                ing: ["cerdo", "naranja", "leche", "ajo", "sal"]
              }, {
                tags: ["cerdo", "chorizo"],
                title: "Huevos con chorizo",
                time: 10,
                difficulty: "Fácil",
                teaser: "El desayuno mexicano más clásico",
                ing: ["chorizo", "huevo", "tortilla"]
              }, {
                tags: ["cerdo", "tocino"],
                title: "Pasta carbonara mexicana",
                time: 20,
                difficulty: "Media",
                teaser: "Cremosa con tocino crujiente y queso",
                ing: ["tocino", "huevo", "queso", "pasta", "ajo"]
              }, {
                tags: ["cerdo"],
                title: "Chuletas en salsa de manzana",
                time: 30,
                difficulty: "Media",
                teaser: "Dulce y salado en perfecta armonía",
                ing: ["chuleta", "manzana", "cebolla", "vino"]
              }, {
                tags: ["cerdo", "jamón"],
                title: "Sincronizadas de jamón y queso",
                time: 10,
                difficulty: "Fácil",
                teaser: "Rápidas, crujientes y siempre ricas",
                ing: ["jamón", "queso", "tortilla"]
              }, {
                tags: ["cerdo"],
                title: "Costillas en salsa BBQ de chipotle",
                time: 60,
                difficulty: "Media",
                teaser: "Dulce, ahumado y con ese toque picante",
                ing: ["costilla", "chile chipotle", "jitomate", "miel"]
              }, {
                tags: ["cerdo", "chorizo"],
                title: "Frijoles charros",
                time: 40,
                difficulty: "Fácil",
                teaser: "El frijol más festivo y sabroso",
                ing: ["frijol", "chorizo", "tocino", "cebolla", "chile"]
              }, {
                tags: ["cerdo", "jamón"],
                title: "Torta de jamón con aguacate",
                time: 10,
                difficulty: "Fácil",
                teaser: "Rápida, completa y deliciosa",
                ing: ["jamón", "aguacate", "pan", "jitomate"]
              }, {
                tags: ["cerdo"],
                title: "Pozole rojo de cerdo",
                time: 90,
                difficulty: "Media",
                teaser: "El platillo de fiesta más querido de México",
                ing: ["cerdo", "maíz", "chile guajillo", "orégano", "cebolla"]
              },
              // ── PESCADO ────────────────────────────────────────────────────────────
              {
                tags: ["pescado", "salmón"],
                title: "Salmón al horno con limón y eneldo",
                time: 20,
                difficulty: "Fácil",
                teaser: "Saludable y listo en 20 minutos",
                ing: ["salmón", "limón", "eneldo", "aceite", "ajo"]
              }, {
                tags: ["pescado"],
                title: "Ceviche de pescado blanco",
                time: 20,
                difficulty: "Fácil",
                teaser: "Fresco, ácido y lleno de sabor veraniego",
                ing: ["pescado", "limón", "jitomate", "cebolla", "chile", "cilantro"]
              }, {
                tags: ["pescado", "atún"],
                title: "Tostadas de atún con aguacate",
                time: 10,
                difficulty: "Fácil",
                teaser: "Snack o comida en 10 minutos",
                ing: ["atún", "aguacate", "mayonesa", "tostada"]
              }, {
                tags: ["pescado"],
                title: "Tacos de pescado estilo Baja",
                time: 20,
                difficulty: "Media",
                teaser: "Con col, crema y pico de gallo — los mejores del mundo",
                ing: ["pescado", "col", "crema", "tortilla", "limón"]
              }, {
                tags: ["pescado", "tilapia"],
                title: "Tilapia en salsa de jitomate",
                time: 25,
                difficulty: "Fácil",
                teaser: "Suave y jugosa en salsa casera",
                ing: ["tilapia", "jitomate", "ajo", "cebolla"]
              }, {
                tags: ["pescado"],
                title: "Pescado a la veracruzana",
                time: 30,
                difficulty: "Media",
                teaser: "Con aceitunas, alcaparras y jitomate — elegante y fácil",
                ing: ["pescado", "jitomate", "aceituna", "alcaparra", "cebolla", "chile"]
              }, {
                tags: ["pescado"],
                title: "Sopa de mariscos y pescado",
                time: 40,
                difficulty: "Media",
                teaser: "Caldosa y llena de sabor del mar",
                ing: ["pescado", "jitomate", "ajo", "chile", "cilantro"]
              }, {
                tags: ["pescado", "atún"],
                title: "Ensalada de atún con aguacate",
                time: 10,
                difficulty: "Fácil",
                teaser: "Ligera, nutritiva y sin necesidad de estufa",
                ing: ["atún", "aguacate", "limón", "cebolla"]
              }, {
                tags: ["pescado"],
                title: "Aguachile verde",
                time: 15,
                difficulty: "Fácil",
                teaser: "Picante y refrescante, del Pacífico mexicano",
                ing: ["camarón", "pepino", "limón", "chile", "cilantro"]
              },
              // ── MARISCOS ───────────────────────────────────────────────────────────
              {
                tags: ["camarón"],
                title: "Camarones al ajillo",
                time: 15,
                difficulty: "Fácil",
                teaser: "Con mantequilla, ajo y chile de árbol",
                ing: ["camarón", "ajo", "chile", "mantequilla", "limón"]
              }, {
                tags: ["camarón"],
                title: "Ceviche de camarón",
                time: 15,
                difficulty: "Fácil",
                teaser: "Refrescante y perfecto para el calor",
                ing: ["camarón", "limón", "jitomate", "aguacate", "cebolla"]
              }, {
                tags: ["camarón"],
                title: "Tacos de camarón con aguacate",
                time: 20,
                difficulty: "Fácil",
                teaser: "Mar y aguacate en cada mordida",
                ing: ["camarón", "aguacate", "tortilla", "col", "limón"]
              }, {
                tags: ["camarón"],
                title: "Camarones en salsa de chipotle",
                time: 20,
                difficulty: "Fácil",
                teaser: "Dulce, ahumado y picante a la vez",
                ing: ["camarón", "chile chipotle", "jitomate", "crema"]
              }, {
                tags: ["camarón"],
                title: "Arroz con camarones",
                time: 30,
                difficulty: "Media",
                teaser: "Un plato completo con mucho sabor",
                ing: ["camarón", "arroz", "jitomate", "ajo", "cebolla"]
              },
              // ── HUEVO ──────────────────────────────────────────────────────────────
              {
                tags: ["huevo"],
                title: "Huevos rancheros",
                time: 15,
                difficulty: "Fácil",
                teaser: "Con salsa roja y tortilla crujiente",
                ing: ["huevo", "jitomate", "chile", "tortilla"]
              }, {
                tags: ["huevo"],
                title: "Omelette de queso y verduras",
                time: 10,
                difficulty: "Fácil",
                teaser: "Proteína rápida con lo que tengas",
                ing: ["huevo", "queso"]
              }, {
                tags: ["huevo"],
                title: "Chilaquiles rojos con huevo",
                time: 20,
                difficulty: "Fácil",
                teaser: "El desayuno mexicano por excelencia",
                ing: ["huevo", "tortilla", "jitomate", "crema", "queso"]
              }, {
                tags: ["huevo"],
                title: "Huevos revueltos con nopal",
                time: 12,
                difficulty: "Fácil",
                teaser: "Saludable y muy mexicano",
                ing: ["huevo", "nopal", "chile", "jitomate"]
              }, {
                tags: ["huevo"],
                title: "Frittata de verduras al horno",
                time: 25,
                difficulty: "Media",
                teaser: "Italiana de corazón, deliciosa siempre",
                ing: ["huevo", "queso", "espinaca", "jitomate"]
              }, {
                tags: ["huevo"],
                title: "Huevos a la mexicana",
                time: 10,
                difficulty: "Fácil",
                teaser: "Revueltos con jitomate, cebolla y chile",
                ing: ["huevo", "jitomate", "cebolla", "chile"]
              }, {
                tags: ["huevo"],
                title: "Huevos motuleños",
                time: 20,
                difficulty: "Media",
                teaser: "Yucatecos, con frijol, jamón y plátano",
                ing: ["huevo", "frijol", "jamón", "jitomate", "tortilla"]
              }, {
                tags: ["huevo"],
                title: "Sopa de pan con huevo pochado",
                time: 20,
                difficulty: "Media",
                teaser: "Reconfortante y elegante a la vez",
                ing: ["huevo", "pan", "espinaca", "ajo"]
              }, {
                tags: ["huevo"],
                title: "Tacos de huevo con chorizo",
                time: 12,
                difficulty: "Fácil",
                teaser: "Desayuno completo en 12 minutos",
                ing: ["huevo", "chorizo", "tortilla"]
              }, {
                tags: ["huevo"],
                title: "Tortilla española",
                time: 25,
                difficulty: "Media",
                teaser: "Con papa y cebolla, jugosa por dentro",
                ing: ["huevo", "papa", "cebolla", "aceite"]
              },
              // ── QUESO / LÁCTEOS ────────────────────────────────────────────────────
              {
                tags: ["queso"],
                title: "Quesadillas de queso con rajas",
                time: 12,
                difficulty: "Fácil",
                teaser: "Clásico infalible para cualquier hora",
                ing: ["queso", "chile poblano", "tortilla"]
              }, {
                tags: ["queso", "crema"],
                title: "Pasta alfredo casera",
                time: 20,
                difficulty: "Media",
                teaser: "Cremosa y reconfortante",
                ing: ["pasta", "crema", "queso", "mantequilla", "ajo"]
              }, {
                tags: ["queso"],
                title: "Enfrijoladas con queso",
                time: 20,
                difficulty: "Fácil",
                teaser: "Sencillas pero llenas de sabor",
                ing: ["frijol", "queso", "crema", "tortilla"]
              }, {
                tags: ["queso"],
                title: "Dip de queso fundido con chorizo",
                time: 15,
                difficulty: "Fácil",
                teaser: "Para botanear en buena compañía",
                ing: ["queso", "chorizo", "chile"]
              }, {
                tags: ["queso"],
                title: "Nopales rellenos de queso en salsa roja",
                time: 25,
                difficulty: "Media",
                teaser: "Saludables y llenos de sabor",
                ing: ["nopal", "queso", "jitomate", "chile"]
              }, {
                tags: ["queso", "crema"],
                title: "Rajas con crema y elote",
                time: 20,
                difficulty: "Fácil",
                teaser: "El guisado favorito de todos — suave y sabroso",
                ing: ["chile poblano", "crema", "elote", "queso", "cebolla"]
              }, {
                tags: ["queso"],
                title: "Sopes de queso y frijol",
                time: 20,
                difficulty: "Fácil",
                teaser: "Antojito clásico con textura crujiente",
                ing: ["queso", "frijol", "crema", "tortilla"]
              },
              // ── VERDURAS ───────────────────────────────────────────────────────────
              {
                tags: ["brócoli"],
                title: "Crema de brócoli",
                time: 30,
                difficulty: "Fácil",
                teaser: "Suave, nutritiva y muy verde",
                ing: ["brócoli", "cebolla", "ajo", "crema"]
              }, {
                tags: ["zanahoria"],
                title: "Ensalada de zanahoria rallada",
                time: 10,
                difficulty: "Fácil",
                teaser: "Fresca y con mucho carácter",
                ing: ["zanahoria", "limón", "cilantro", "aceite"]
              }, {
                tags: ["espinaca"],
                title: "Espinacas salteadas con ajo",
                time: 10,
                difficulty: "Fácil",
                teaser: "Simple, sano y listo en minutos",
                ing: ["espinaca", "ajo", "aceite"]
              }, {
                tags: ["jitomate"],
                title: "Pico de gallo fresco",
                time: 10,
                difficulty: "Fácil",
                teaser: "El acompañante perfecto para todo",
                ing: ["jitomate", "cebolla", "chile", "cilantro", "limón"]
              }, {
                tags: ["calabaza"],
                title: "Calabacitas con elote y crema",
                time: 20,
                difficulty: "Fácil",
                teaser: "Guisado ligero de temporada",
                ing: ["calabacita", "elote", "crema", "cebolla"]
              }, {
                tags: ["nopal"],
                title: "Ensalada de nopales",
                time: 15,
                difficulty: "Fácil",
                teaser: "Refrescante y muy mexicana",
                ing: ["nopal", "jitomate", "cebolla", "orégano", "limón"]
              }, {
                tags: ["chayote"],
                title: "Chayotes en salsa verde",
                time: 25,
                difficulty: "Fácil",
                teaser: "Tiernos y sabrosos en caldo verde",
                ing: ["chayote", "tomatillo", "chile", "ajo"]
              }, {
                tags: ["elote"],
                title: "Esquites al estilo callejero",
                time: 15,
                difficulty: "Fácil",
                teaser: "En vaso, con mayonesa, queso y chile",
                ing: ["elote", "mayonesa", "queso", "chile", "limón"]
              }, {
                tags: ["elote"],
                title: "Elote asado con mantequilla",
                time: 15,
                difficulty: "Fácil",
                teaser: "Simple pero irresistible",
                ing: ["elote", "mantequilla", "queso", "chile"]
              }, {
                tags: ["chile"],
                title: "Chile relleno de queso",
                time: 35,
                difficulty: "Media",
                teaser: "Empanado y en caldillo de jitomate",
                ing: ["chile poblano", "queso", "huevo", "jitomate"]
              }, {
                tags: ["pimiento"],
                title: "Pimientos rellenos de arroz",
                time: 45,
                difficulty: "Media",
                teaser: "Coloridos y completos, un plato muy vistoso",
                ing: ["pimiento", "arroz", "jitomate", "queso", "cebolla"]
              }, {
                tags: ["espárrago"],
                title: "Espárragos a la plancha con limón",
                time: 12,
                difficulty: "Fácil",
                teaser: "Guarnición elegante en 12 minutos",
                ing: ["espárrago", "limón", "aceite", "ajo"]
              }, {
                tags: ["champiñón"],
                title: "Champiñones al ajillo",
                time: 12,
                difficulty: "Fácil",
                teaser: "Salteados con ajo y chile de árbol",
                ing: ["champiñón", "ajo", "chile", "aceite", "perejil"]
              }, {
                tags: ["champiñón"],
                title: "Crema de champiñones",
                time: 25,
                difficulty: "Fácil",
                teaser: "Suave, aromática y reconfortante",
                ing: ["champiñón", "crema", "cebolla", "ajo"]
              }, {
                tags: ["betabel"],
                title: "Ensalada de betabel con queso de cabra",
                time: 15,
                difficulty: "Fácil",
                teaser: "Terrenal, dulce y elegante",
                ing: ["betabel", "queso", "arúgula", "nuez", "vinagre"]
              }, {
                tags: ["zanahoria"],
                title: "Crema de zanahoria con jengibre",
                time: 30,
                difficulty: "Fácil",
                teaser: "Aromática y llena de vitaminas",
                ing: ["zanahoria", "jengibre", "cebolla", "crema"]
              },
              // ── AGUACATE ───────────────────────────────────────────────────────────
              {
                tags: ["aguacate"],
                title: "Guacamole clásico",
                time: 10,
                difficulty: "Fácil",
                teaser: "Cremoso con el toque de limón perfecto",
                ing: ["aguacate", "limón", "jitomate", "cilantro", "cebolla", "chile"]
              }, {
                tags: ["aguacate"],
                title: "Tostadas de aguacate con huevo",
                time: 12,
                difficulty: "Fácil",
                teaser: "Desayuno trendy y muy nutritivo",
                ing: ["aguacate", "huevo", "pan", "limón"]
              }, {
                tags: ["aguacate"],
                title: "Sopa fría de aguacate",
                time: 15,
                difficulty: "Fácil",
                teaser: "Fresca y elegante para días de calor",
                ing: ["aguacate", "crema", "ajo", "limón"]
              }, {
                tags: ["aguacate"],
                title: "Tacos de aguacate con frijol",
                time: 15,
                difficulty: "Fácil",
                teaser: "Vegetarianos, cremosos y muy satisfactorios",
                ing: ["aguacate", "frijol", "tortilla", "limón", "chile"]
              },
              // ── ARROZ ──────────────────────────────────────────────────────────────
              {
                tags: ["arroz"],
                title: "Arroz rojo mexicano",
                time: 25,
                difficulty: "Fácil",
                teaser: "El arroz de abuela, siempre perfecto",
                ing: ["arroz", "jitomate", "cebolla", "ajo"]
              }, {
                tags: ["arroz"],
                title: "Arroz frito estilo asiático",
                time: 20,
                difficulty: "Media",
                teaser: "Con verduras salteadas y soya",
                ing: ["arroz", "huevo", "zanahoria", "aceite"]
              }, {
                tags: ["arroz"],
                title: "Arroz con leche",
                time: 30,
                difficulty: "Fácil",
                teaser: "Postre cremoso y reconfortante",
                ing: ["arroz", "leche", "canela", "azúcar"]
              }, {
                tags: ["arroz"],
                title: "Arroz verde con rajas",
                time: 25,
                difficulty: "Fácil",
                teaser: "Aromático con espinaca y chile poblano",
                ing: ["arroz", "espinaca", "chile poblano", "ajo"]
              },
              // ── PASTA ──────────────────────────────────────────────────────────────
              {
                tags: ["pasta"],
                title: "Pasta al jitomate casero",
                time: 25,
                difficulty: "Fácil",
                teaser: "Salsa desde cero, sabor auténtico",
                ing: ["pasta", "jitomate", "ajo", "albahaca"]
              }, {
                tags: ["pasta"],
                title: "Fideos secos mexicanos",
                time: 20,
                difficulty: "Fácil",
                teaser: "Tostados y guisados en salsa de jitomate",
                ing: ["pasta", "jitomate", "cebolla", "ajo"]
              }, {
                tags: ["pasta", "crema"],
                title: "Espagueti a la crema con champiñones",
                time: 25,
                difficulty: "Fácil",
                teaser: "Cremoso y listo en 25 minutos",
                ing: ["pasta", "champiñón", "crema", "queso", "ajo"]
              }, {
                tags: ["pasta"],
                title: "Mac and cheese mexicano",
                time: 20,
                difficulty: "Fácil",
                teaser: "Con queso chihuahua y un toque de chile",
                ing: ["pasta", "queso", "leche", "chile", "mantequilla"]
              }, {
                tags: ["pasta"],
                title: "Pasta con atún y alcaparras",
                time: 15,
                difficulty: "Fácil",
                teaser: "Rápida, sin estufa casi, muy sabrosa",
                ing: ["pasta", "atún", "aceituna", "alcaparra", "limón"]
              },
              // ── FRIJOLES / LEGUMINOSAS ─────────────────────────────────────────────
              {
                tags: ["frijol"],
                title: "Frijoles de olla",
                time: 90,
                difficulty: "Fácil",
                teaser: "El básico más rico de todos",
                ing: ["frijol", "cebolla", "epazote", "ajo"]
              }, {
                tags: ["frijol"],
                title: "Enfrijoladas de queso",
                time: 20,
                difficulty: "Fácil",
                teaser: "Tortillas bañadas en frijol cremoso",
                ing: ["frijol", "queso", "crema", "tortilla"]
              }, {
                tags: ["frijol"],
                title: "Molletes con pico de gallo",
                time: 15,
                difficulty: "Fácil",
                teaser: "Para desayuno o cena express",
                ing: ["frijol", "queso", "pan", "jitomate", "cebolla"]
              }, {
                tags: ["frijol"],
                title: "Sopa de frijol con chipotle",
                time: 30,
                difficulty: "Fácil",
                teaser: "Cremosa y con un toque ahumado delicioso",
                ing: ["frijol", "chile chipotle", "cebolla", "crema"]
              }, {
                tags: ["frijol"],
                title: "Frijoles charros con longaniza",
                time: 40,
                difficulty: "Fácil",
                teaser: "El frijol festivo y sabroso",
                ing: ["frijol", "chorizo", "tocino", "cebolla", "chile"]
              }, {
                tags: ["lenteja"],
                title: "Lentejas con verduras y chorizo",
                time: 40,
                difficulty: "Fácil",
                teaser: "Caldo nutritivo y muy reconfortante",
                ing: ["lenteja", "chorizo", "zanahoria", "papa", "jitomate"]
              }, {
                tags: ["garbanzo"],
                title: "Garbanzo guisado con jitomate",
                time: 30,
                difficulty: "Fácil",
                teaser: "Proteína vegetal en guiso sabroso",
                ing: ["garbanzo", "jitomate", "ajo", "comino", "cebolla"]
              },
              // ── SOPAS Y CALDOS ─────────────────────────────────────────────────────
              {
                tags: ["sopa"],
                title: "Sopa de verduras casera",
                time: 35,
                difficulty: "Fácil",
                teaser: "Nutritiva y reconfortante",
                ing: ["zanahoria", "papa", "cebolla", "chícharo"]
              }, {
                tags: ["sopa"],
                title: "Sopa de tortilla",
                time: 25,
                difficulty: "Fácil",
                teaser: "El clásico con tortillas fritas, aguacate y crema",
                ing: ["jitomate", "tortilla", "chile", "ajo", "crema", "aguacate"]
              }, {
                tags: ["sopa"],
                title: "Sopa de lima yucateca",
                time: 35,
                difficulty: "Media",
                teaser: "Cítrica y aromática del sureste",
                ing: ["pollo", "limón", "tortilla", "chile", "cebolla"]
              }, {
                tags: ["sopa"],
                title: "Sopa de flor de calabaza",
                time: 25,
                difficulty: "Fácil",
                teaser: "Delicada y muy mexicana",
                ing: ["calabacita", "elote", "crema", "champiñón"]
              }, {
                tags: ["sopa"],
                title: "Caldo de res con verduras",
                time: 90,
                difficulty: "Fácil",
                teaser: "Caldito reconfortante con todo adentro",
                ing: ["res", "papa", "zanahoria", "ejote", "elote", "calabacita"]
              }, {
                tags: ["sopa"],
                title: "Crema de elote",
                time: 25,
                difficulty: "Fácil",
                teaser: "Dulce y suave, perfecta en días fríos",
                ing: ["elote", "crema", "cebolla", "ajo", "queso"]
              },
              // ── DESAYUNOS ──────────────────────────────────────────────────────────
              {
                tags: ["desayuno", "huevo"],
                title: "Chilaquiles verdes con pollo",
                time: 20,
                difficulty: "Fácil",
                teaser: "Crujientes y bañados en salsa verde",
                ing: ["tortilla", "tomatillo", "pollo", "crema", "queso"]
              }, {
                tags: ["desayuno", "huevo"],
                title: "Machaca con huevo norteña",
                time: 15,
                difficulty: "Fácil",
                teaser: "Carne seca y huevo, sabor del norte",
                ing: ["carne seca", "huevo", "jitomate", "chile", "cebolla"]
              }, {
                tags: ["desayuno"],
                title: "Molletes con frijoles y queso",
                time: 12,
                difficulty: "Fácil",
                teaser: "Rápido, barato y delicioso",
                ing: ["pan", "frijol", "queso", "jitomate"]
              }, {
                tags: ["desayuno", "fruta"],
                title: "Avena con plátano y canela",
                time: 10,
                difficulty: "Fácil",
                teaser: "Energética y fácil para empezar el día",
                ing: ["avena", "plátano", "leche", "canela", "miel"]
              },
              // ── ANTOJITOS ──────────────────────────────────────────────────────────
              {
                tags: ["antojito", "tortilla"],
                title: "Sopes de frijol y queso",
                time: 20,
                difficulty: "Media",
                teaser: "Antojito clásico con borde crujiente",
                ing: ["tortilla", "frijol", "queso", "crema", "salsa"]
              }, {
                tags: ["antojito", "tortilla"],
                title: "Tlacoyos de frijol",
                time: 30,
                difficulty: "Media",
                teaser: "Masa rellena y cocida a comal — los mejores antojitos",
                ing: ["masa", "frijol", "queso", "nopal", "salsa"]
              }, {
                tags: ["antojito", "tortilla"],
                title: "Gorditas de chicharrón",
                time: 25,
                difficulty: "Media",
                teaser: "Rellenas y doradas, irresistibles",
                ing: ["masa", "chicharrón", "salsa"]
              }, {
                tags: ["antojito"],
                title: "Tostadas de tinga de pollo",
                time: 30,
                difficulty: "Fácil",
                teaser: "Crujientes con tinga y crema",
                ing: ["tortilla", "pollo", "chile chipotle", "crema", "queso"]
              },
              // ── ENSALADAS ──────────────────────────────────────────────────────────
              {
                tags: ["ensalada", "lechuga"],
                title: "Ensalada César mexicana",
                time: 15,
                difficulty: "Fácil",
                teaser: "Con aderezo cremoso y crotones",
                ing: ["lechuga", "queso", "limón", "ajo", "aceite"]
              }, {
                tags: ["ensalada", "jitomate"],
                title: "Ensalada caprese tropical",
                time: 10,
                difficulty: "Fácil",
                teaser: "Jitomate, mozzarella y albahaca fresca",
                ing: ["jitomate", "queso", "albahaca", "aceite", "vinagre"]
              }, {
                tags: ["ensalada", "aguacate"],
                title: "Ensalada de aguacate y mango",
                time: 10,
                difficulty: "Fácil",
                teaser: "Tropical, cremosa y refrescante",
                ing: ["aguacate", "mango", "limón", "chile", "cilantro"]
              }, {
                tags: ["ensalada"],
                title: "Ensalada de pepino con limón",
                time: 8,
                difficulty: "Fácil",
                teaser: "Refrescante y ligera, lista en minutos",
                ing: ["pepino", "limón", "chile", "sal"]
              },
              // ── POSTRES / BEBIDAS ──────────────────────────────────────────────────
              {
                tags: ["postre", "leche"],
                title: "Arroz con leche",
                time: 30,
                difficulty: "Fácil",
                teaser: "Clásico, cremoso y reconfortante",
                ing: ["arroz", "leche", "canela", "azúcar"]
              }, {
                tags: ["postre", "fruta"],
                title: "Fresas con crema",
                time: 5,
                difficulty: "Fácil",
                teaser: "Simple pero elegante — siempre funciona",
                ing: ["fresa", "crema", "leche condensada"]
              }, {
                tags: ["bebida", "fruta"],
                title: "Agua fresca de jamaica",
                time: 15,
                difficulty: "Fácil",
                teaser: "Refrescante y llena de antioxidantes",
                ing: ["jamaica", "azúcar", "limón"]
              }, {
                tags: ["bebida", "fruta"],
                title: "Smoothie verde energético",
                time: 5,
                difficulty: "Fácil",
                teaser: "Vitaminas en vaso, listo en 5 min",
                ing: ["espinaca", "manzana", "pepino", "limón", "jengibre"]
              }, {
                tags: ["bebida", "fruta"],
                title: "Agua de tamarindo con chile",
                time: 10,
                difficulty: "Fácil",
                teaser: "Agridulce, picante y muy refrescante",
                ing: ["tamarindo", "chile", "azúcar", "limón"]
              }, {
                tags: ["postre", "plátano"],
                title: "Plátanos fritos con miel",
                time: 10,
                difficulty: "Fácil",
                teaser: "Dulce, caramelizado y delicioso",
                ing: ["plátano", "miel", "mantequilla", "canela"]
              },
              // ── COMODÍN ────────────────────────────────────────────────────────────
              {
                tags: ["*"],
                title: "Sopa del día con lo que hay",
                time: 30,
                difficulty: "Fácil",
                teaser: "Nutritiva con lo que tengas en el refri",
                ing: []
              }, {
                tags: ["*"],
                title: "Salteado express",
                time: 12,
                difficulty: "Fácil",
                teaser: "Sartén caliente, ajo y lo que tengas",
                ing: []
              }, {
                tags: ["*"],
                title: "Tacos de lo que hay",
                time: 15,
                difficulty: "Fácil",
                teaser: "Con tortilla y lo que tengas, siempre funciona",
                ing: []
              }]; // ── MATCHING INTELIGENTE ─────────────────────────────────────────────────
              // Build index of what user has in fridge (normalized)
              fridgeNames = forList.map(function (i) {
                return i.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              });
              TAG_GROUPS = {
                "pollo": ["pollo", "pechuga", "muslo", "ala"],
                "carne": ["carne", "bistec", "res"],
                "res": ["res", "carne", "bistec"],
                "molida": ["molida"],
                "cerdo": ["cerdo", "costilla", "chuleta"],
                "chorizo": ["chorizo"],
                "tocino": ["tocino"],
                "jamón": ["jamon", "jamón"],
                "pescado": ["pescado", "tilapia", "robalo", "mojarra", "filete"],
                "salmón": ["salmon", "salmón"],
                "atún": ["atun", "atún"],
                "camarón": ["camaron", "camarón"],
                "huevo": ["huevo"],
                "queso": ["queso"],
                "crema": ["crema"],
                "leche": ["leche"],
                "brócoli": ["brocoli", "brócoli"],
                "zanahoria": ["zanahoria"],
                "espinaca": ["espinaca"],
                "jitomate": ["jitomate", "tomate"],
                "calabaza": ["calabaza", "calabacita"],
                "nopal": ["nopal"],
                "chayote": ["chayote"],
                "elote": ["elote"],
                "chile": ["chile", "jalapeño", "serrano", "habanero"],
                "pimiento": ["pimiento"],
                "espárrago": ["esparrago", "espárrago"],
                "champiñón": ["champiñon", "champiñón", "hongo", "seta"],
                "betabel": ["betabel"],
                "aguacate": ["aguacate"],
                "arroz": ["arroz"],
                "pasta": ["pasta", "espagueti", "fettuccine"],
                "frijol": ["frijol", "frijoles"],
                "lenteja": ["lenteja"],
                "garbanzo": ["garbanzo"],
                "sopa": ["*"],
                "desayuno": ["*"],
                "antojito": ["*"],
                "ensalada": ["lechuga", "espinaca", "jitomate", "aguacate"],
                "fruta": ["fresa", "platano", "manzana", "mango", "piña", "durazno", "naranja", "pera"],
                "plátano": ["platano", "plátano"],
                "postre": ["*"],
                "bebida": ["*"],
                "*": ["*"]
              };
              scored = ALL_RECIPES.map(scoreRecipe).filter(Boolean).sort(function (a, b) {
                if (a.urgent && !b.urgent) return -1;
                if (!a.urgent && b.urgent) return 1;
                return b.ingScore - a.ingScore;
              });
              finalList = surprise ? [scored[Math.floor(Math.random() * Math.min(scored.length, 20))]].filter(Boolean) : scored.slice(0, 8);
              setRecipes(finalList.filter(Boolean));
              setApiError("");
            }
            setLoading(false);
            setSurprise(false);
          case 7:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 5]]);
    }));
    return _generateRecipes.apply(this, arguments);
  }
  function getDetail(_x5) {
    return _getDetail.apply(this, arguments);
  }
  function _getDetail() {
    _getDetail = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(recipe) {
      var _recipe$have, _recipe$missing;
      var localFallback, prompt, _data$content2, res, data, text, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            localFallback = function _localFallback() {
              var have = (recipe.have || []).map(function (i) {
                return i.replace(/^\S+\s/, "");
              }).join(", ");
              var missing = (recipe.missing || []).map(function (i) {
                return i.replace(/^\S+\s/, "");
              }).join(", ");
              return "\u23F1 Tiempo: ".concat(recipe.time || 20, " min  |  \uD83D\uDC64 Porciones: 2-3\n\nIngredientes que tienes:\n").concat((recipe.have || []).map(function (i) {
                return "\u2022 ".concat(i);
              }).join("\n") || "• Lo que tengas disponible", "\n").concat(missing ? "\nIngredientes adicionales:\n".concat((recipe.missing || []).map(function (i) {
                return "\u2022 ".concat(i);
              }).join("\n")) : "", "\n\nPasos:\n1. Prepara y lava todos los ingredientes antes de empezar.\n2. Calienta un poco de aceite en una sart\xE9n o cazuela a fuego medio.\n3. Cocina los ingredientes principales siguiendo el orden habitual: primero los que tardan m\xE1s, luego los dem\xE1s.\n4. Sazona al gusto con sal, pimienta y especias de tu preferencia.\n5. Cocina hasta que todo est\xE9 en su punto \u2014 prueba y ajusta saz\xF3n.\n6. Sirve caliente y disfruta.\n\n\uD83D\uDCA1 Tip: Para \"").concat(recipe.title, "\", la clave est\xE1 en no apresurar la cocci\xF3n \u2014 deja que los sabores se integren.");
            };
            setSelected(recipe);
            setDetailLoad(true);
            setDetailText("");

            // Build a local fallback recipe from what we know
            prompt = "Eres un chef mexicano experto. Dame la receta completa de \"".concat(recipe.title, "\".\nIngredientes disponibles: ").concat(((_recipe$have = recipe.have) === null || _recipe$have === void 0 ? void 0 : _recipe$have.join(", ")) || "básicos de cocina", ".\n").concat((_recipe$missing = recipe.missing) !== null && _recipe$missing !== void 0 && _recipe$missing.length ? "También necesita: " + recipe.missing.join(", ") + "." : "", "\n\nResponde SOLO con este formato exacto, sin texto adicional:\n\n\u23F1 Tiempo: ").concat(recipe.time || 20, " min  |  \uD83D\uDC64 Porciones: 2-3\n\nIngredientes:\n\u2022 [ingrediente con cantidad]\n\u2022 [ingrediente con cantidad]\n\nPasos:\n1. [paso claro y concreto]\n2. [paso claro y concreto]\n3. [paso claro y concreto]\n\n\uD83D\uDCA1 Tip: [consejo \xFAtil de una l\xEDnea]");
            _context5.p = 1;
            _context5.n = 2;
            return fetch("https://api.anthropic.com/v1/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "anthropic-dangerous-direct-browser-access": "true"
              },
              body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 700,
                messages: [{
                  role: "user",
                  content: prompt
                }]
              })
            });
          case 2:
            res = _context5.v;
            if (res.ok) {
              _context5.n = 3;
              break;
            }
            setDetailText(localFallback());
            setDetailLoad(false);
            return _context5.a(2);
          case 3:
            _context5.n = 4;
            return res.json();
          case 4:
            data = _context5.v;
            text = ((_data$content2 = data.content) === null || _data$content2 === void 0 || (_data$content2 = _data$content2[0]) === null || _data$content2 === void 0 ? void 0 : _data$content2.text) || "";
            setDetailText(text.trim() || localFallback());
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t5 = _context5.v;
            setDetailText(localFallback());
          case 6:
            setDetailLoad(false);
          case 7:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 5]]);
    }));
    return _getDetail.apply(this, arguments);
  }
  function saveRecipe(recipe) {
    var already = saved.find(function (s) {
      return s.title === recipe.title;
    });
    var next;
    if (already) next = saved.filter(function (s) {
      return s.title !== recipe.title;
    });else next = [].concat(_toConsumableArray(saved), [recipe]);
    setSaved(next);
    try {
      localStorage.setItem("mangia_saved", JSON.stringify(next));
    } catch (e) {}
  }
  function markConsumed(recipe) {
    var usedNames = (recipe.have || []).map(function (h) {
      return h.replace(/^\S+\s/, "").toLowerCase();
    });
    var ids = items.filter(function (i) {
      return usedNames.some(function (n) {
        return i.name.toLowerCase().includes(n) || n.includes(i.name.toLowerCase());
      });
    }).map(function (i) {
      return i.id;
    });
    onConsumed(ids);
    setSelected(null);
  }
  useEffect(function () {
    if (items.length > 0) generateRecipes();
  }, [filter, items.length]);
  var FILTERS = [{
    id: "urgente",
    label: "🔥 Urgente",
    desc: "Usa lo que vence pronto"
  }, {
    id: "todo",
    label: "🧊 Todo",
    desc: "Todo el refri"
  }, {
    id: "rapido",
    label: "⚡ Rápido",
    desc: "Menos de 20 min"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20,
      animation: "fadeUp .28s ease"
    }
  }, selected && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setSelected(null);
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.45)",
      zIndex: 200,
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      width: "100%",
      background: "#111",
      borderRadius: "24px 24px 0 0",
      borderTop: "1px solid ".concat(C.borderMid),
      borderLeft: "1px solid ".concat(C.border),
      borderRight: "1px solid ".concat(C.border),
      boxShadow: "0 -24px 80px rgba(0,0,0,.6)",
      paddingBottom: 32,
      maxHeight: "90vh",
      overflowY: "auto",
      animation: "slideUp .28s cubic-bezier(.32,0,.67,0)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "12px 0 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: C.border
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingRight: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 22,
      fontWeight: 600,
      color: C.text,
      lineHeight: 1.2,
      marginBottom: 6
    }
  }, selected.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.blueLight,
      border: "1px solid ".concat(C.blue, "33"),
      borderRadius: 20,
      padding: "4px 12px",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 11,
      color: C.blue
    }
  }, "\u23F1 ", selected.time, "min"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.greenLight,
      border: "1px solid ".concat(C.green, "33"),
      borderRadius: 20,
      padding: "4px 12px",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 11,
      color: C.green
    }
  }, selected.difficulty), selected.urgent && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.redLight,
      border: "1px solid ".concat(C.red, "33"),
      borderRadius: 20,
      padding: "4px 12px",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 11,
      color: C.red
    }
  }, "\uD83D\uDD25 Urgente"))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return saveRecipe(selected);
    },
    style: {
      fontSize: 24,
      cursor: "pointer",
      padding: 8
    }
  }, saved.find(function (s) {
    return s.title === selected.title;
  }) ? "❤️" : "🤍")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, ((_selected$have = selected.have) === null || _selected$have === void 0 ? void 0 : _selected$have.length) > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 800,
      fontSize: 10,
      color: C.green,
      letterSpacing: 1.5,
      marginBottom: 6
    }
  }, "\u2705 TIENES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, selected.have.map(function (h, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: C.greenLight,
        border: "1px solid ".concat(C.green, "33"),
        borderRadius: 20,
        padding: "4px 10px",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: C.text
      }
    }, h);
  }))), ((_selected$missing = selected.missing) === null || _selected$missing === void 0 ? void 0 : _selected$missing.length) > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 800,
      fontSize: 10,
      color: C.orange,
      letterSpacing: 1.5,
      marginBottom: 6
    }
  }, "\uD83D\uDED2 TE FALTA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, selected.missing.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: C.orangeLight,
        border: "1px solid ".concat(C.orange, "33"),
        borderRadius: 20,
        padding: "4px 10px",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: C.text
      }
    }, m);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card2,
      borderRadius: 14,
      padding: "18px 16px",
      marginBottom: 16,
      border: "1px solid ".concat(C.border),
      minHeight: 120
    }
  }, detailLoad ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      animation: "spin 1s linear infinite",
      display: "inline-block"
    }
  }, "\u23F3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 13,
      color: C.textSoft,
      marginTop: 8
    }
  }, "Generando instrucciones\u2026")) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 13,
      color: "rgba(255,255,255,.85)",
      lineHeight: 1.8,
      fontWeight: 500,
      whiteSpace: "pre-wrap"
    }
  }, detailText)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setSelected(null);
    },
    style: {
      flex: 1,
      background: C.surface,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "14px 0",
      textAlign: "center",
      cursor: "pointer",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 600,
      fontSize: 14,
      color: C.textSoft
    }
  }, "\u2715 Cerrar"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return markConsumed(selected);
    },
    style: {
      flex: 2,
      background: C.green,
      borderRadius: 14,
      padding: "14px 0",
      textAlign: "center",
      cursor: "pointer",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: "#fff",
      boxShadow: "0 8px 20px ".concat(C.greenGlow)
    }
  }, "\uD83C\uDF73 \xA1Lo hice! Marcar ingredientes usados"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 22,
      fontWeight: 600,
      color: C.text
    }
  }, "\uD83C\uDF73 Recetas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.textSoft,
      fontWeight: 600,
      marginTop: 2
    }
  }, "con lo que tienes en el refri")), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      setSurprise(true);
      generateRecipes(true);
    },
    style: {
      background: C.purple,
      border: "2px solid ".concat(C.purpleDark),
      boxShadow: "0 4px 0 ".concat(C.purpleDark),
      borderRadius: 16,
      padding: "10px 14px",
      cursor: "pointer",
      fontFamily: "'Fraunces',serif",
      fontSize: 13,
      color: "#fff",
      textAlign: "center"
    }
  }, "\uD83C\uDFB2 Sorpr\xE9ndeme")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, FILTERS.map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      onClick: function onClick() {
        return setFilter(f.id);
      },
      style: {
        flex: 1,
        padding: "10px 6px",
        borderRadius: 14,
        cursor: "pointer",
        textAlign: "center",
        background: filter === f.id ? C.greenLight : C.surface,
        border: "2px solid ".concat(filter === f.id ? C.green : C.border),
        boxShadow: "0 3px 0 ".concat(filter === f.id ? C.greenDark : C.border),
        transition: "all .12s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Fraunces',serif",
        fontSize: 12,
        color: filter === f.id ? C.green : "#888"
      }
    }, f.label));
  }))), saved.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 11,
      color: C.textSoft,
      letterSpacing: 1,
      marginBottom: 10
    }
  }, "\u2764\uFE0F GUARDADAS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      scrollbarWidth: "none",
      paddingBottom: 4
    }
  }, saved.map(function (r, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return getDetail(r);
      },
      style: {
        flexShrink: 0,
        background: C.card2,
        border: "1px solid ".concat(C.border),
        borderRadius: 14,
        padding: "10px 14px",
        cursor: "pointer",
        minWidth: 140
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Fraunces',serif",
        fontSize: 13,
        color: C.text,
        marginBottom: 4
      }
    }, r.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 11,
        color: C.textSoft,
        fontWeight: 600
      }
    }, "\u23F1 ", r.time, "min"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      animation: "spin 1s linear infinite",
      display: "inline-block",
      marginBottom: 12
    }
  }, "\u23F3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 16,
      color: C.text,
      marginBottom: 6
    }
  }, surprise ? "¡Preparando sorpresa…" : "Generando recetas…"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.textSoft,
      fontWeight: 600
    }
  }, "La IA revisa tu refri")) : apiError ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.redLight,
      border: "2px solid ".concat(C.red),
      borderRadius: 16,
      padding: "16px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 13,
      color: C.red,
      marginBottom: 6
    }
  }, "\u26A0\uFE0F Error"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.red,
      fontWeight: 700,
      wordBreak: "break-all",
      marginBottom: 12
    }
  }, apiError), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return generateRecipes();
    },
    style: {
      background: C.red,
      border: "2px solid ".concat(C.redDark),
      boxShadow: "0 3px 0 ".concat(C.redDark),
      borderRadius: 12,
      padding: "10px",
      textAlign: "center",
      cursor: "pointer",
      fontFamily: "'Fraunces',serif",
      fontSize: 13,
      color: "#fff"
    }
  }, "\uD83D\uDD04 Reintentar")) : recipes.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 12
    }
  }, "\uD83E\uDDCA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 16,
      color: C.text,
      marginBottom: 6
    }
  }, "No se generaron recetas"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return generateRecipes();
    },
    style: {
      background: C.green,
      border: "2px solid ".concat(C.greenDark),
      boxShadow: "0 4px 0 ".concat(C.greenDark),
      borderRadius: 14,
      padding: "12px 24px",
      cursor: "pointer",
      fontFamily: "'Fraunces',serif",
      fontSize: 14,
      color: "#fff",
      marginTop: 12,
      display: "inline-block"
    }
  }, "\uD83D\uDD04 Intentar de nuevo")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, recipes.map(function (r, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return getDetail(r);
      },
      style: {
        background: C.card2,
        borderRadius: 16,
        border: "1px solid ".concat(r.urgent ? C.red + "33" : C.border),
        padding: "16px",
        cursor: "pointer",
        animation: "fadeUp .3s ease ".concat(i * 0.07, "s both"),
        position: "relative",
        overflow: "hidden",
        transition: "transform .15s,border-color .15s"
      }
    }, r.urgent && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(90deg,".concat(C.red, ",").concat(C.orange, ")")
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        paddingRight: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Fraunces',serif",
        fontSize: 17,
        color: C.text,
        lineHeight: 1.2,
        marginBottom: 4
      }
    }, r.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        color: C.textSoft,
        fontWeight: 600,
        lineHeight: 1.4
      }
    }, r.teaser)), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        e.stopPropagation();
        saveRecipe(r);
      },
      style: {
        fontSize: 20,
        cursor: "pointer",
        flexShrink: 0
      }
    }, saved.find(function (s) {
      return s.title === r.title;
    }) ? "❤️" : "🤍")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.blueLight,
        border: "1.5px solid ".concat(C.blue),
        borderRadius: 20,
        padding: "3px 10px",
        fontFamily: "'Fraunces',serif",
        fontSize: 11,
        color: C.blue
      }
    }, "\u23F1 ", r.time, "min"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: r.difficulty === "Fácil" ? C.greenLight : r.difficulty === "Media" ? C.orangeLight : C.redLight,
        border: "1.5px solid ".concat(r.difficulty === "Fácil" ? C.green : r.difficulty === "Media" ? C.orange : C.red),
        borderRadius: 20,
        padding: "3px 10px",
        fontFamily: "'Fraunces',serif",
        fontSize: 11,
        color: r.difficulty === "Fácil" ? C.green : r.difficulty === "Media" ? C.orange : C.red
      }
    }, r.difficulty), r.urgent && /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.redLight,
        border: "1.5px solid ".concat(C.red),
        borderRadius: 20,
        padding: "3px 10px",
        fontFamily: "'Fraunces',serif",
        fontSize: 11,
        color: C.red
      }
    }, "\uD83D\uDD25 Usa urgentes")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
        flex: 1
      }
    }, (r.have || []).slice(0, 4).map(function (h, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j,
        style: {
          fontSize: 16
        }
      }, h.split(" ")[0]);
    }), (r.have || []).length > 4 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 11,
        color: C.textSoft,
        fontWeight: 700,
        alignSelf: "center"
      }
    }, "+", r.have.length - 4)), (r.missing || []).length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 11,
        color: C.orange,
        fontWeight: 800,
        flexShrink: 0
      }
    }, "falta ", r.missing.length, " ingrediente", r.missing.length > 1 ? "s" : "")));
  }))));
}

// ── SHARE VIEW ────────────────────────────────────────────────────────────────
function ShareView(_ref12) {
  var items = _ref12.items,
    onReset = _ref12.onReset;
  var _useState59 = useState(false),
    _useState60 = _slicedToArray(_useState59, 2),
    copied = _useState60[0],
    setCopied = _useState60[1];
  var _useState61 = useState(false),
    _useState62 = _slicedToArray(_useState61, 2),
    confirmReset = _useState62[0],
    setConfirmReset = _useState62[1];
  var urgent = items.filter(function (i) {
    return daysLeft(i) <= 1 && daysLeft(i) >= 0;
  });
  var warning = items.filter(function (i) {
    var d = daysLeft(i);
    return d > 1 && d <= 3;
  });
  var fresh = items.filter(function (i) {
    return daysLeft(i) > 3;
  });
  function buildSummary() {
    var txt = "🧊 *Estado del refri* — " + new Date().toLocaleDateString("es-MX", {
      weekday: "long",
      day: "numeric",
      month: "long"
    }) + "\n\n";
    if (urgent.length > 0) txt += "🔥 *Usar HOY:* " + urgent.map(function (i) {
      return "".concat(i.emoji, " ").concat(i.name);
    }).join(", ") + "\n";
    if (warning.length > 0) txt += "⚠️ *Usar pronto:* " + warning.map(function (i) {
      return "".concat(i.emoji, " ").concat(i.name, " (").concat(daysLeft(i), "d)");
    }).join(", ") + "\n";
    if (fresh.length > 0) txt += "✅ *Frescos:* " + fresh.map(function (i) {
      return "".concat(i.emoji, " ").concat(i.name);
    }).join(", ") + "\n";
    txt += "\n_Total: ".concat(items.length, " productos \xB7 enviado desde mangIA \uD83E\uDDCA_");
    return txt;
  }
  function copyToClipboard() {
    var _navigator$clipboard;
    (_navigator$clipboard = navigator.clipboard) === null || _navigator$clipboard === void 0 || _navigator$clipboard.writeText(buildSummary()).then(function () {
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 2500);
    });
  }
  function shareWhatsApp() {
    var text = encodeURIComponent(buildSummary());
    window.open("https://wa.me/?text=".concat(text), "_blank");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      animation: "fadeUp .28s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 22,
      fontWeight: 600,
      color: C.text,
      marginBottom: 4
    }
  }, "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67 Compartir refri"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.textSoft,
      fontWeight: 600,
      marginBottom: 20
    }
  }, "Comparte el estado del refri con tu familia o roommates"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.greenLight,
      border: "1px solid ".concat(C.green, "33"),
      borderRadius: 16,
      padding: "18px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 13,
      color: C.green,
      letterSpacing: 1,
      marginBottom: 12
    }
  }, "VISTA PREVIA"), urgent.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 13,
      color: C.red,
      marginBottom: 4
    }
  }, "\uD83D\uDD25 Usar HOY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, urgent.map(function (i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i.id,
      style: {
        background: C.redLight,
        border: "1.5px solid ".concat(C.red),
        borderRadius: 20,
        padding: "4px 10px",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        fontWeight: 700
      }
    }, i.emoji, " ", i.name);
  }))), warning.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 13,
      color: C.orange,
      marginBottom: 4
    }
  }, "\u26A0\uFE0F Usar pronto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, warning.map(function (i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i.id,
      style: {
        background: C.orangeLight,
        border: "1.5px solid ".concat(C.orange),
        borderRadius: 20,
        padding: "4px 10px",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        fontWeight: 700
      }
    }, i.emoji, " ", i.name, " \xB7 ", daysLeft(i), "d");
  }))), fresh.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 13,
      color: C.green,
      marginBottom: 4
    }
  }, "\u2705 Frescos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, fresh.map(function (i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i.id,
      style: {
        background: C.greenLight,
        border: "1.5px solid ".concat(C.green),
        borderRadius: 20,
        padding: "4px 10px",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 12,
        fontWeight: 700
      }
    }, i.emoji, " ", i.name);
  }))), items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 13,
      color: C.textSoft,
      fontWeight: 600
    }
  }, "El refri est\xE1 vac\xEDo \uD83E\uDDCA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: shareWhatsApp,
    style: {
      background: "#25D366",
      border: "2px solid #1DA851",
      boxShadow: "0 4px 0 #1DA851",
      borderRadius: 16,
      padding: "16px",
      textAlign: "center",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 16,
      color: "#fff"
    }
  }, "Compartir por WhatsApp")), /*#__PURE__*/React.createElement("div", {
    onClick: copyToClipboard,
    style: {
      background: copied ? C.greenLight : C.card,
      border: "2px solid ".concat(copied ? C.green : C.border),
      boxShadow: "0 4px 0 ".concat(copied ? C.greenDark : C.border),
      borderRadius: 16,
      padding: "16px",
      textAlign: "center",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      transition: "all .2s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, copied ? "✅" : "📋"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 16,
      color: copied ? C.green : C.text
    }
  }, copied ? "¡Copiado!" : "Copiar texto"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      background: "#141414",
      border: "1px solid rgba(255,255,255,.07)",
      boxShadow: "0 4px 0 ".concat(C.border),
      borderRadius: 20,
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 13,
      color: C.textSoft,
      letterSpacing: 1,
      marginBottom: 12
    }
  }, "\uD83D\uDCCA RESUMEN"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [{
    label: "Total",
    v: items.length,
    color: C.blue,
    bg: C.blueLight
  }, {
    label: "Urgentes",
    v: urgent.length,
    color: C.red,
    bg: C.redLight
  }, {
    label: "Pronto",
    v: warning.length,
    color: C.orange,
    bg: C.orangeLight
  }, {
    label: "Frescos",
    v: fresh.length,
    color: C.green,
    bg: C.greenLight
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        background: s.bg,
        border: "1px solid ".concat(s.color, "40"),
        borderRadius: 14,
        padding: "12px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Fraunces',serif",
        fontSize: 28,
        color: s.color
      }
    }, s.v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Fraunces',serif",
        fontSize: 10,
        color: s.color,
        letterSpacing: 1,
        textTransform: "uppercase",
        marginTop: 2
      }
    }, s.label));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      textAlign: "center"
    }
  }, !confirmReset ? /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setConfirmReset(true);
    },
    style: {
      display: "inline-block",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      fontWeight: 600,
      color: "#D1D5DB",
      cursor: "pointer",
      padding: "8px 16px",
      borderRadius: 20,
      border: "1.5px solid #E5E7EB"
    }
  }, "Cambiar nombre / reiniciar app") : /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.redLight,
      border: "1px solid ".concat(C.red, "33"),
      borderRadius: 14,
      padding: "16px",
      animation: "fadeUp .2s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: C.text,
      marginBottom: 4
    }
  }, "\xBFReiniciar la app?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 12,
      color: C.textSoft,
      marginBottom: 14
    }
  }, "Se borrar\xE1 tu nombre y volver\xE1s al inicio. Los productos del refri se mantienen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setConfirmReset(false);
    },
    style: {
      flex: 1,
      padding: "10px 0",
      borderRadius: 12,
      border: "1.5px solid ".concat(C.border),
      textAlign: "center",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: C.textSoft,
      cursor: "pointer"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("div", {
    onClick: onReset,
    style: {
      flex: 1,
      padding: "10px 0",
      borderRadius: 12,
      background: C.red,
      border: "1.5px solid ".concat(C.redDark),
      textAlign: "center",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: "#fff",
      cursor: "pointer"
    }
  }, "Reiniciar")))));
}
function Onboarding(_ref13) {
  var onDone = _ref13.onDone;
  var _useState63 = useState(0),
    _useState64 = _slicedToArray(_useState63, 2),
    step = _useState64[0],
    setStep = _useState64[1];
  var _useState65 = useState(""),
    _useState66 = _slicedToArray(_useState65, 2),
    name = _useState66[0],
    setName = _useState66[1];
  var _useState67 = useState(false),
    _useState68 = _slicedToArray(_useState67, 2),
    leaving = _useState68[0],
    setLeaving = _useState68[1];
  function finish() {
    if (!name.trim()) return;
    setLeaving(true);
    setTimeout(function () {
      return onDone(name.trim());
    }, 400);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 999,
      background: "#080808",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, "\n        @keyframes ob-rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}\n        @keyframes ob-glow{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:.8;transform:scale(1.06)}}\n        @keyframes ob-in{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}\n        @keyframes pulse-ring{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.18);opacity:.15}}\n        @keyframes pulse-ring2{0%,100%{transform:scale(1);opacity:.3}50%{transform:scale(1.32);opacity:.08}}\n        @keyframes bubble-0{0%{transform:translateY(0) scale(.8);opacity:0}8%{opacity:1}80%{opacity:.85}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.05);opacity:0}}\n        @keyframes bubble-1{0%{transform:translateY(0) scale(.85);opacity:0}8%{opacity:1}80%{opacity:.8}95%{opacity:0}100%{transform:translateY(-115vh) scale(.95);opacity:0}}\n        @keyframes bubble-2{0%{transform:translateY(0) scale(.75);opacity:0}8%{opacity:1}80%{opacity:.85}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.1);opacity:0}}\n        @keyframes bubble-3{0%{transform:translateY(0) scale(.9);opacity:0}8%{opacity:1}80%{opacity:.8}95%{opacity:0}100%{transform:translateY(-115vh) scale(.9);opacity:0}}\n        @keyframes bubble-4{0%{transform:translateY(0) scale(.7);opacity:0}8%{opacity:.9}80%{opacity:.75}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.05);opacity:0}}\n        @keyframes bubble-5{0%{transform:translateY(0) scale(.85);opacity:0}8%{opacity:1}80%{opacity:.8}95%{opacity:0}100%{transform:translateY(-115vh) scale(.95);opacity:0}}\n        @keyframes bubble-6{0%{transform:translateY(0) scale(.82);opacity:0}8%{opacity:1}80%{opacity:.85}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.02);opacity:0}}\n        @keyframes bubble-7{0%{transform:translateY(0) scale(.78);opacity:0}8%{opacity:.9}80%{opacity:.75}95%{opacity:0}100%{transform:translateY(-115vh) scale(.92);opacity:0}}\n        @keyframes bubble-8{0%{transform:translateY(0) scale(.88);opacity:0}8%{opacity:1}80%{opacity:.88}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.08);opacity:0}}\n        @keyframes bubble-9{0%{transform:translateY(0) scale(.8);opacity:0}8%{opacity:.95}80%{opacity:.8}95%{opacity:0}100%{transform:translateY(-115vh) scale(.98);opacity:0}}\n        @keyframes bubble-10{0%{transform:translateY(0) scale(.85);opacity:0}8%{opacity:1}80%{opacity:.82}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.03);opacity:0}}\n        @keyframes bubble-11{0%{transform:translateY(0) scale(.72);opacity:0}8%{opacity:.85}80%{opacity:.7}95%{opacity:0}100%{transform:translateY(-115vh) scale(.9);opacity:0}}\n        @keyframes bubble-12{0%{transform:translateY(0) scale(.86);opacity:0}8%{opacity:1}80%{opacity:.86}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.06);opacity:0}}\n        @keyframes bubble-13{0%{transform:translateY(0) scale(.83);opacity:0}8%{opacity:.95}80%{opacity:.78}95%{opacity:0}100%{transform:translateY(-115vh) scale(.96);opacity:0}}\n        @keyframes bubble-14{0%{transform:translateY(0) scale(.76);opacity:0}8%{opacity:.9}80%{opacity:.72}95%{opacity:0}100%{transform:translateY(-115vh) scale(.94);opacity:0}}\n        @keyframes bubble-15{0%{transform:translateY(0) scale(.84);opacity:0}8%{opacity:1}80%{opacity:.84}95%{opacity:0}100%{transform:translateY(-115vh) scale(1.01);opacity:0}}\n      "), step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      animation: "ob-in .45s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0
    }
  }, [{
    emoji: "🍗",
    size: 56,
    left: "4%",
    dur: "10.5s",
    delay: "-1.2s",
    bg: "rgba(239,68,68,.15)",
    border: "rgba(239,68,68,.3)"
  }, {
    emoji: "🥛",
    size: 44,
    left: "18%",
    dur: "12.5s",
    delay: "-4.1s",
    bg: "rgba(255,255,255,.08)",
    border: "rgba(255,255,255,.15)"
  }, {
    emoji: "🥑",
    size: 52,
    left: "36%",
    dur: "11.2s",
    delay: "-2.7s",
    bg: "rgba(29,185,84,.15)",
    border: "rgba(29,185,84,.25)"
  }, {
    emoji: "🧀",
    size: 42,
    left: "56%",
    dur: "13.5s",
    delay: "-0.4s",
    bg: "rgba(245,158,11,.15)",
    border: "rgba(245,158,11,.28)"
  }, {
    emoji: "🥦",
    size: 50,
    left: "74%",
    dur: "11.8s",
    delay: "-3.8s",
    bg: "rgba(34,197,94,.12)",
    border: "rgba(34,197,94,.22)"
  }, {
    emoji: "🥚",
    size: 38,
    left: "88%",
    dur: "13.0s",
    delay: "-1.6s",
    bg: "rgba(255,255,255,.07)",
    border: "rgba(255,255,255,.12)"
  }, {
    emoji: "🍓",
    size: 46,
    left: "10%",
    dur: "14.5s",
    delay: "-3.0s",
    bg: "rgba(239,68,68,.12)",
    border: "rgba(239,68,68,.22)"
  }, {
    emoji: "🧅",
    size: 36,
    left: "30%",
    dur: "12.2s",
    delay: "-5.2s",
    bg: "rgba(245,158,11,.1)",
    border: "rgba(245,158,11,.18)"
  }, {
    emoji: "🍋",
    size: 48,
    left: "50%",
    dur: "10.8s",
    delay: "-2.5s",
    bg: "rgba(251,191,36,.12)",
    border: "rgba(251,191,36,.22)"
  }, {
    emoji: "🥕",
    size: 40,
    left: "68%",
    dur: "14.0s",
    delay: "-0.9s",
    bg: "rgba(245,158,11,.12)",
    border: "rgba(245,158,11,.2)"
  }, {
    emoji: "🍖",
    size: 44,
    left: "84%",
    dur: "12.0s",
    delay: "-4.4s",
    bg: "rgba(239,68,68,.12)",
    border: "rgba(239,68,68,.22)"
  }, {
    emoji: "🫙",
    size: 34,
    left: "22%",
    dur: "15.0s",
    delay: "-1.8s",
    bg: "rgba(255,255,255,.06)",
    border: "rgba(255,255,255,.1)"
  }, {
    emoji: "🍊",
    size: 50,
    left: "44%",
    dur: "11.5s",
    delay: "-5.5s",
    bg: "rgba(245,158,11,.14)",
    border: "rgba(245,158,11,.24)"
  }, {
    emoji: "🥩",
    size: 46,
    left: "62%",
    dur: "10.2s",
    delay: "-2.1s",
    bg: "rgba(239,68,68,.14)",
    border: "rgba(239,68,68,.26)"
  }, {
    emoji: "🍺",
    size: 38,
    left: "8%",
    dur: "13.2s",
    delay: "-3.3s",
    bg: "rgba(251,191,36,.1)",
    border: "rgba(251,191,36,.18)"
  }, {
    emoji: "🥬",
    size: 42,
    left: "78%",
    dur: "11.0s",
    delay: "-0.6s",
    bg: "rgba(34,197,94,.12)",
    border: "rgba(34,197,94,.2)"
  }].map(function (b, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "absolute",
        left: b.left,
        bottom: "-60px",
        width: b.size,
        height: b.size,
        borderRadius: "50%",
        background: b.bg,
        border: "1.5px solid ".concat(b.border),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: Math.round(b.size * 0.46),
        lineHeight: 1,
        animationName: "bubble-".concat(i),
        animationDuration: b.dur,
        animationDelay: b.delay,
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "both"
      }
    }, b.emoji);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 280,
      height: 280,
      borderRadius: "50%",
      background: "radial-gradient(circle,rgba(29,185,84,.18) 0%,transparent 70%)",
      animation: "ob-glow 4s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 56,
      color: "#fff",
      letterSpacing: -1.5,
      lineHeight: 1,
      marginBottom: 10,
      position: "relative"
    }
  }, "mang", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.green
    }
  }, "IA")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 14,
      color: "rgba(255,255,255,.28)",
      fontWeight: 500,
      letterSpacing: 2,
      textTransform: "uppercase"
    }
  }, "Tu refri inteligente")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 28px 52px",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setStep(1);
    },
    style: {
      animation: "ob-rise .5s .2s both ease",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 90,
      height: 90,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: "2px solid ".concat(C.green),
      animation: "pulse-ring 2s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: -14,
      borderRadius: "50%",
      border: "1.5px solid ".concat(C.green),
      animation: "pulse-ring2 2s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      background: C.green,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 32px rgba(29,185,84,.55)",
      fontSize: 26,
      color: "#fff"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.3)",
      fontWeight: 500,
      letterSpacing: .3
    }
  }, "toca para comenzar")))), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      animation: "ob-in .3s ease",
      opacity: leaving ? 0 : 1,
      transition: "opacity .35s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 32,
      color: "#fff",
      marginBottom: 6
    }
  }, "mang", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.green
    }
  }, "IA")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 2,
      background: C.green,
      borderRadius: 2,
      margin: "0 auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.4,
      padding: "0 28px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 30,
      color: "#fff",
      lineHeight: 1.2,
      marginBottom: 6
    }
  }, "\xBFC\xF3mo te llamas?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.3)",
      fontWeight: 500,
      marginBottom: 32
    }
  }, "Para personalizar tu experiencia"), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && name.trim() && finish();
    },
    placeholder: "Tu nombre",
    style: _defineProperty({
      width: "100%",
      boxSizing: "border-box",
      background: "rgba(255,255,255,.06)",
      border: "1.5px solid ".concat(name ? "rgba(29,185,84,.5)" : "rgba(255,255,255,.1)"),
      borderRadius: 16,
      padding: "18px 20px",
      fontSize: 18,
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontWeight: 600,
      color: "#fff",
      outline: "none",
      textAlign: "center",
      transition: "border .2s, background .2s",
      caretColor: C.green
    }, "background", name ? "rgba(29,185,84,.06)" : "rgba(255,255,255,.05)")
  }), /*#__PURE__*/React.createElement("div", {
    onClick: finish,
    style: {
      marginTop: 14,
      background: name.trim() ? C.green : "rgba(255,255,255,.07)",
      borderRadius: 16,
      padding: "18px 0",
      textAlign: "center",
      cursor: name.trim() ? "pointer" : "default",
      fontSize: 16,
      fontWeight: 700,
      color: name.trim() ? "#fff" : "rgba(255,255,255,.18)",
      transition: "all .25s",
      boxShadow: name.trim() ? "0 10px 36px rgba(29,185,84,.35)" : "none"
    }
  }, "Entrar \u2192"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setStep(0);
    },
    style: {
      marginTop: 24,
      textAlign: "center",
      fontSize: 13,
      color: "rgba(255,255,255,.2)",
      cursor: "pointer",
      fontWeight: 500
    }
  }, "\u2190 Volver"))));
}

// ── BOTTOM NAV ────────────────────────────────────────────────────────────────
function BottomNav(_ref15) {
  var tab = _ref15.tab,
    setTab = _ref15.setTab;
  var tabs = [{
    id: "fridge",
    label: "Refri",
    icon: function icon(active) {
      return /*#__PURE__*/React.createElement("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "5",
        y: "3",
        width: "14",
        height: "18",
        rx: "3",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "10",
        x2: "19",
        y2: "10",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "14",
        x2: "9",
        y2: "17",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "15",
        y1: "5.5",
        x2: "15",
        y2: "8",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }));
    }
  }, {
    id: "recipes",
    label: "Recetas",
    icon: function icon(active) {
      return /*#__PURE__*/React.createElement("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M12 3C8 3 5 7 5 11c0 3.5 2 6.5 5 8v2h4v-2c3-1.5 5-4.5 5-8 0-4-3-8-7-8z",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8",
        strokeLinejoin: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "17",
        x2: "15",
        y2: "17",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "20",
        x2: "14",
        y2: "20",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }));
    }
  }, {
    id: "share",
    label: "Compartir",
    icon: function icon(active) {
      return /*#__PURE__*/React.createElement("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "18",
        cy: "5",
        r: "2.5",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "12",
        r: "2.5",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "18",
        cy: "19",
        r: "2.5",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "8.4",
        y1: "10.8",
        x2: "15.6",
        y2: "6.2",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "8.4",
        y1: "13.2",
        x2: "15.6",
        y2: "17.8",
        stroke: active ? C.green : "rgba(245,245,245,.35)",
        strokeWidth: "1.8"
      }));
    }
  }];
  var _useState69 = useState(tab),
    _useState70 = _slicedToArray(_useState69, 2),
    prevTab = _useState70[0],
    setPrevTab = _useState70[1];
  var _useState71 = useState(null),
    _useState72 = _slicedToArray(_useState71, 2),
    animId = _useState72[0],
    setAnimId = _useState72[1];
  function handleTab(id) {
    if (id === tab) return;
    setPrevTab(tab);
    setAnimId(id);
    setTab(id);
    setTimeout(function () {
      return setAnimId(null);
    }, 400);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(8,8,8,.96)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderTop: "1px solid ".concat(C.border),
      display: "flex",
      zIndex: 100,
      paddingBottom: "env(safe-area-inset-bottom,0)"
    }
  }, tabs.map(function (t) {
    var active = tab === t.id;
    var animating = animId === t.id;
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        return handleTab(t.id);
      },
      style: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
        position: "relative",
        transform: animating ? "translateY(-2px)" : "translateY(0)",
        transition: "transform .2s cubic-bezier(.34,1.56,.64,1)"
      }
    }, active && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 20,
        height: 2,
        borderRadius: "0 0 2px 2px",
        background: C.green,
        boxShadow: "0 0 8px ".concat(C.green)
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        transition: "transform .2s cubic-bezier(.34,1.56,.64,1)",
        transform: active ? "scale(1.05)" : "scale(1)"
      }
    }, t.icon(active)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: 10,
        fontWeight: active ? 700 : 500,
        color: active ? C.green : "rgba(245,245,245,.3)",
        letterSpacing: .3,
        transition: "color .15s"
      }
    }, t.label));
  }));
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
function MangIA() {
  var _useState73 = useState(function () {
      try {
        return localStorage.getItem("mangia_name") || "";
      } catch (e) {
        return "";
      }
    }),
    _useState74 = _slicedToArray(_useState73, 2),
    userName = _useState74[0],
    setUserName = _useState74[1];
  var _useState75 = useState(function () {
      try {
        return !!localStorage.getItem("mangia_name");
      } catch (e) {
        return false;
      }
    }),
    _useState76 = _slicedToArray(_useState75, 2),
    onboarded = _useState76[0],
    setOnboarded = _useState76[1];
  var _useState77 = useState(function () {
      try {
        var saved = localStorage.getItem("mangia_items");
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }),
    _useState78 = _slicedToArray(_useState77, 2),
    items = _useState78[0],
    setItems = _useState78[1];
  var _useState79 = useState("fridge"),
    _useState80 = _slicedToArray(_useState79, 2),
    tab = _useState80[0],
    setTab = _useState80[1];
  var _useState81 = useState("visual"),
    _useState82 = _slicedToArray(_useState81, 2),
    subTab = _useState82[0],
    setSubTab = _useState82[1];
  var _useState83 = useState(false),
    _useState84 = _slicedToArray(_useState83, 2),
    showAdd = _useState84[0],
    setShowAdd = _useState84[1];
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    addCategory = _useState86[0],
    setAddCategory = _useState86[1];
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    selected = _useState88[0],
    setSelected = _useState88[1];
  var _useState89 = useState(null),
    _useState90 = _slicedToArray(_useState89, 2),
    addedId = _useState90[0],
    setAddedId = _useState90[1]; // for entry animation

  useEffect(function () {
    try {
      localStorage.setItem("mangia_items", JSON.stringify(items));
    } catch (e) {}
  }, [items]);
  function finishOnboarding(name) {
    setUserName(name);
    setOnboarded(true);
    try {
      localStorage.setItem("mangia_name", name);
    } catch (e) {}
  }
  function handleReset() {
    try {
      localStorage.removeItem("mangia_name");
    } catch (e) {}
    setUserName("");
    setOnboarded(false);
    setTab("fridge");
  }
  var urgent = items.filter(function (i) {
    return daysLeft(i) <= 1 && daysLeft(i) >= 0;
  });
  var warning = items.filter(function (i) {
    var d = daysLeft(i);
    return d > 1 && d <= 3;
  });
  var toggleOpen = function toggleOpen(id) {
    return setItems(function (prev) {
      return prev.map(function (i) {
        return i.id === id ? _objectSpread(_objectSpread({}, i), {}, {
          isOpen: !i.isOpen
        }) : i;
      });
    });
  };
  if (!onboarded) return /*#__PURE__*/React.createElement(Onboarding, {
    onDone: finishOnboarding
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: C.bg,
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("style", null, "\n        ".concat(FONTS, "\n        *{box-sizing:border-box;margin:0;padding:0;}\n        input,select,button{font-family:'Plus Jakarta Sans',sans-serif;}\n        input::placeholder{color:rgba(245,245,245,.2);font-weight:400;}\n        input:focus{outline:none;}\n        select:focus{outline:none;}\n        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}\n        @keyframes slideDown{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}\n        @keyframes popIn{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}\n        @keyframes popPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}\n        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}\n        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}\n        @keyframes fadeIn{from{opacity:0}to{opacity:1}}\n        @keyframes slideIn{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}\n        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}\n        @keyframes glow{0%,100%{box-shadow:0 0 12px rgba(34,197,94,.2)}50%{box-shadow:0 0 28px rgba(34,197,94,.5)}}\n        @keyframes navPop{0%{transform:translateY(0) scale(1)}40%{transform:translateY(-5px) scale(1.15)}100%{transform:translateY(0) scale(1)}}\n        ::-webkit-scrollbar{display:none}\n        *{scrollbar-width:none;-ms-overflow-style:none}\n        ::selection{background:rgba(34,197,94,.3)}\n        input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}\n      ")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 32,
      color: C.text,
      letterSpacing: -1,
      lineHeight: 1,
      fontWeight: 700
    }
  }, "mang", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.green
    }
  }, "IA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      marginTop: 3
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.textSoft,
      fontWeight: 500
    }
  }, "Agrega tu primer producto") : urgent.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.red,
      fontWeight: 600
    }
  }, urgent.map(function (i) {
    return i.name;
  }).slice(0, 2).join(", "), urgent.length > 2 ? " +".concat(urgent.length - 2) : "", " vence", urgent.length > 1 ? "n" : "", " hoy")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: C.green,
      boxShadow: "0 0 6px ".concat(C.green)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      color: C.textSoft,
      fontWeight: 500
    }
  }, items.length, " productos \xB7 todo fresco")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, urgent.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.redLight,
      border: "1px solid ".concat(C.red, "33"),
      borderRadius: 20,
      padding: "5px 11px",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 11,
      fontWeight: 700,
      color: C.red
    }
  }, urgent.length)), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setShowAdd(true);
    },
    style: {
      width: 36,
      height: 36,
      borderRadius: 12,
      background: C.green,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 16px ".concat(C.greenGlow),
      transition: "transform .1s,box-shadow .1s"
    },
    onMouseDown: function onMouseDown(e) {
      return e.currentTarget.style.transform = "scale(.93)";
    },
    onMouseUp: function onMouseUp(e) {
      return e.currentTarget.style.transform = "scale(1)";
    },
    onTouchStart: function onTouchStart(e) {
      return e.currentTarget.style.transform = "scale(.93)";
    },
    onTouchEnd: function onTouchEnd(e) {
      return e.currentTarget.style.transform = "scale(1)";
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v12M2 8h12",
    stroke: "white",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "1px",
      background: C.border,
      marginTop: 16,
      marginLeft: -20,
      marginRight: -20
    }
  })), tab === "fridge" && /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeUp .28s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      margin: "14px 16px 0",
      background: C.surface,
      borderRadius: 12,
      padding: 4,
      border: "1px solid ".concat(C.border)
    }
  }, [{
    id: "visual",
    label: "Refri"
  }, {
    id: "list",
    label: "Inventario"
  }].map(function (st) {
    return /*#__PURE__*/React.createElement("div", {
      key: st.id,
      onClick: function onClick() {
        return setSubTab(st.id);
      },
      style: {
        flex: 1,
        textAlign: "center",
        padding: "9px 0",
        borderRadius: 11,
        cursor: "pointer",
        background: subTab === st.id ? C.surface : "transparent",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontWeight: 700,
        fontSize: 13,
        color: subTab === st.id ? C.text : "rgba(245,245,245,.3)",
        transition: "all .15s"
      }
    }, st.label);
  })), subTab === "visual" ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 28px 32px",
      animation: "fadeUp .35s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 140,
    height: 180,
    viewBox: "0 0 140 180",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: 10,
    y: 8,
    width: 120,
    height: 164,
    rx: 16,
    fill: "rgba(255,255,255,.04)",
    stroke: "rgba(255,255,255,.1)",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("rect", {
    x: 10,
    y: 52,
    width: 120,
    height: 2,
    fill: "rgba(255,255,255,.07)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 120,
    y: 80,
    width: 6,
    height: 40,
    rx: 3,
    fill: "rgba(255,255,255,.12)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 22,
    y: 90,
    width: 88,
    height: 1.5,
    rx: 1,
    fill: "rgba(255,255,255,.08)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 22,
    y: 126,
    width: 88,
    height: 1.5,
    rx: 1,
    fill: "rgba(255,255,255,.08)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: 70,
    y1: 148,
    x2: 70,
    y2: 164,
    stroke: C.green,
    strokeWidth: 2.5,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: 62,
    y1: 156,
    x2: 78,
    y2: 156,
    stroke: C.green,
    strokeWidth: 2.5,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 70,
    cy: 156,
    r: 12,
    fill: "rgba(29,185,84,.08)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 22,
      color: "#fff",
      marginBottom: 6,
      textAlign: "center",
      letterSpacing: -.3
    }
  }, "Refri vac\xEDo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 13,
      color: "rgba(255,255,255,.3)",
      fontWeight: 500,
      lineHeight: 1.6,
      marginBottom: 32,
      textAlign: "center",
      maxWidth: 240
    }
  }, "Agrega lo que tienes y la IA se encarga del resto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      width: "100%",
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setShowAdd(true);
    },
    style: {
      background: C.green,
      borderRadius: 16,
      padding: "16px 0",
      textAlign: "center",
      cursor: "pointer",
      fontSize: 15,
      fontWeight: 700,
      color: "#fff",
      boxShadow: "0 8px 28px rgba(29,185,84,.35)",
      letterSpacing: .2
    }
  }, "+ Agregar producto"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setShowAdd(true);
    },
    style: {
      background: "rgba(255,255,255,.05)",
      border: "1px solid rgba(255,255,255,.09)",
      borderRadius: 16,
      padding: "16px 0",
      textAlign: "center",
      cursor: "pointer",
      fontSize: 15,
      fontWeight: 600,
      color: "rgba(255,255,255,.45)"
    }
  }, "\uD83D\uDCF7 Escanear ticket del s\xFAper")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      width: "100%",
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "rgba(255,255,255,.2)",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 12,
      textAlign: "center"
    }
  }, "O empieza con"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, ["🍗 Pollo", "🥛 Leche", "🥦 Brócoli", "🧀 Queso", "🥚 Huevo"].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      onClick: function onClick() {
        var n = s.split(" ")[1];
        setItems(function (p) {
          return [].concat(_toConsumableArray(p), [{
            id: Date.now() + Math.random(),
            name: n,
            emoji: s.split(" ")[0],
            category: "shelf1",
            qty: "1 pza",
            shelfDays: getShelfDays(n),
            addedDate: new Date().toISOString().split("T")[0],
            isOpen: false,
            aiNote: null
          }]);
        });
      },
      style: {
        background: "rgba(255,255,255,.05)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 20,
        padding: "7px 14px",
        cursor: "pointer",
        fontSize: 13,
        fontWeight: 600,
        color: "rgba(255,255,255,.45)",
        transition: "all .15s"
      }
    }, s);
  })))) : /*#__PURE__*/React.createElement(Fridge, {
    items: items,
    onProductClick: setSelected,
    onDelete: function onDelete(id) {
      return setItems(function (p) {
        return p.filter(function (i) {
          return i.id !== id;
        });
      });
    },
    onAddToShelf: function onAddToShelf(cat) {
      setAddCategory(cat);
      setShowAdd(true);
    },
    addedId: addedId
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(InventoryView, {
    items: items,
    onDelete: function onDelete(id) {
      return setItems(function (p) {
        return p.filter(function (i) {
          return i.id !== id;
        });
      });
    },
    onTap: setSelected
  }))), tab === "recipes" && /*#__PURE__*/React.createElement(RecipesView, {
    items: items,
    onConsumed: function onConsumed(ids) {
      return setItems(function (p) {
        return p.filter(function (i) {
          return !ids.includes(i.id);
        });
      });
    }
  }), tab === "share" && /*#__PURE__*/React.createElement(ShareView, {
    items: items,
    onReset: handleReset
  }), /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    setTab: setTab
  }), showAdd && /*#__PURE__*/React.createElement(AddModal, {
    onAdd: function onAdd(i) {
      return setItems(function (p) {
        return [].concat(_toConsumableArray(p), [i]);
      });
    },
    onClose: function onClose() {
      setShowAdd(false);
      setAddCategory(null);
    },
    preselectedCategory: addCategory
  }), selected && /*#__PURE__*/React.createElement(ProductSheet, {
    item: selected,
    onDelete: function onDelete(id) {
      return setItems(function (p) {
        return p.filter(function (i) {
          return i.id !== id;
        });
      });
    },
    onToggleOpen: toggleOpen,
    onClose: function onClose() {
      return setSelected(null);
    }
  }));
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(MangIA));
