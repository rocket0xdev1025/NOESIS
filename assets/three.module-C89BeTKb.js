/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const fp = 0,
  pp = 1,
  mp = 2;
const gp = 2;
const _p = 4;
const Ts = "attached",
  Mo = "detached";
const vp = 1e3,
  xp = 1001,
  Sp = 1002,
  Mp = 1003,
  yp = 1004,
  Ep = 1005,
  Tp = 1006,
  bp = 1007,
  Ap = 1008;
const Rp = 2300,
  wp = 2301;
const Cp = 0,
  Pp = 1,
  Lp = 2;
const Ft = "srgb",
  tr = "srgb-linear",
  nr = "linear",
  $e = "srgb";
const Dp = 35048,
  bs = "300 es";
function yo(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function Eo(i) {
  return ArrayBuffer.isView(i) && !(i instanceof DataView);
}
function vi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function To() {
  const i = vi("canvas");
  return (i.style.display = "block"), i;
}
const As = {};
function ir(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Ba(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace
      ? (i[0] += " " + t.getLocation())
      : (i[1] =
          'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.');
  }
  return i;
}
function ye(...i) {
  i = Ba(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function Pe(...i) {
  i = Ba(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function Zn(...i) {
  const e = i.join(" ");
  e in As || ((As[e] = !0), ye(...i));
}
function bo(i, e, t) {
  return new Promise(function (n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const Ao = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
class Pn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const Et = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Rs = 1234567;
const pi = Math.PI / 180,
  Qn = 180 / Math.PI;
function Wt() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Et[i & 255] +
    Et[(i >> 8) & 255] +
    Et[(i >> 16) & 255] +
    Et[(i >> 24) & 255] +
    "-" +
    Et[e & 255] +
    Et[(e >> 8) & 255] +
    "-" +
    Et[((e >> 16) & 15) | 64] +
    Et[(e >> 24) & 255] +
    "-" +
    Et[(t & 63) | 128] +
    Et[(t >> 8) & 255] +
    "-" +
    Et[(t >> 16) & 255] +
    Et[(t >> 24) & 255] +
    Et[n & 255] +
    Et[(n >> 8) & 255] +
    Et[(n >> 16) & 255] +
    Et[(n >> 24) & 255]
  ).toLowerCase();
}
function Be(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Qr(i, e) {
  return ((i % e) + e) % e;
}
function Ro(i, e, t, n, r) {
  return n + ((i - e) * (r - n)) / (t - e);
}
function wo(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function mi(i, e, t) {
  return (1 - t) * i + t * e;
}
function Co(i, e, t, n) {
  return mi(i, e, 1 - Math.exp(-t * n));
}
function Po(i, e = 1) {
  return e - Math.abs(Qr(i, e * 2) - e);
}
function Lo(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * (3 - 2 * i));
}
function Do(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * i * (i * (i * 6 - 15) + 10));
}
function Io(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function No(i, e) {
  return i + Math.random() * (e - i);
}
function Uo(i) {
  return i * (0.5 - Math.random());
}
function Fo(i) {
  i !== void 0 && (Rs = i);
  let e = (Rs += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function Bo(i) {
  return i * pi;
}
function Oo(i) {
  return i * Qn;
}
function Go(i) {
  return i > 0 && Number.isInteger(i) && 2 ** Math.round(Math.log2(i)) === i;
}
function zo(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Vo(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Ho(i, e, t, n, r) {
  const s = Math.cos,
    a = Math.sin,
    o = s(t / 2),
    c = a(t / 2),
    l = s((e + n) / 2),
    u = a((e + n) / 2),
    f = s((e - n) / 2),
    h = a((e - n) / 2),
    d = s((n - e) / 2),
    _ = a((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(o * u, c * f, c * h, o * l);
      break;
    case "YZY":
      i.set(c * h, o * u, c * f, o * l);
      break;
    case "ZXZ":
      i.set(c * f, c * h, o * u, o * l);
      break;
    case "XZX":
      i.set(o * u, c * _, c * d, o * l);
      break;
    case "YXY":
      i.set(c * d, o * u, c * _, o * l);
      break;
    case "ZYZ":
      i.set(c * _, c * d, o * u, o * l);
      break;
    default:
      ye(
        "MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          r
      );
  }
}
function Ht(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
function Qe(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
    case Uint8ClampedArray:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
const Ip = {
    DEG2RAD: pi,
    RAD2DEG: Qn,
    generateUUID: Wt,
    clamp: Be,
    euclideanModulo: Qr,
    mapLinear: Ro,
    inverseLerp: wo,
    lerp: mi,
    damp: Co,
    pingpong: Po,
    smoothstep: Lo,
    smootherstep: Do,
    randInt: Io,
    randFloat: No,
    randFloatSpread: Uo,
    seededRandom: Fo,
    degToRad: Bo,
    radToDeg: Oo,
    isPowerOfTwo: Go,
    ceilPowerOfTwo: zo,
    floorPowerOfTwo: Vo,
    setQuaternionFromProperEuler: Ho,
    normalize: Qe,
    denormalize: Ht,
  },
  cs = class cs {
    constructor(e = 0, t = 0) {
      (this.x = e), (this.y = t);
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return (this.x = e), (this.y = t), this;
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return (this.x = e.x), (this.y = e.y), this;
    }
    add(e) {
      return (this.x += e.x), (this.y += e.y), this;
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), this;
    }
    addVectors(e, t) {
      return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
    }
    addScaledVector(e, t) {
      return (this.x += e.x * t), (this.y += e.y * t), this;
    }
    sub(e) {
      return (this.x -= e.x), (this.y -= e.y), this;
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), this;
    }
    subVectors(e, t) {
      return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
    }
    multiply(e) {
      return (this.x *= e.x), (this.y *= e.y), this;
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), this;
    }
    divide(e) {
      return (this.x /= e.x), (this.y /= e.y), this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[3] * n + r[6]),
        (this.y = r[1] * t + r[4] * n + r[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Be(this.x, e.x, t.x)), (this.y = Be(this.y, e.y, t.y)), this
      );
    }
    clampScalar(e, t) {
      return (this.x = Be(this.x, e, t)), (this.y = Be(this.y, e, t)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(Be(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return (this.x = e[t]), (this.y = e[t + 1]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.x), (e[t + 1] = this.y), e;
    }
    fromBufferAttribute(e, t) {
      return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
    }
    rotateAround(e, t) {
      const n = Math.cos(t),
        r = Math.sin(t),
        s = this.x - e.x,
        a = this.y - e.y;
      return (
        (this.x = s * n - a * r + e.x), (this.y = s * r + a * n + e.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
cs.prototype.isVector2 = !0;
let Re = cs;
class Ln {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let c = n[r + 0],
      l = n[r + 1],
      u = n[r + 2],
      f = n[r + 3],
      h = s[a + 0],
      d = s[a + 1],
      _ = s[a + 2],
      S = s[a + 3];
    if (f !== S || c !== h || l !== d || u !== _) {
      let m = c * h + l * d + u * _ + f * S;
      m < 0 && ((h = -h), (d = -d), (_ = -_), (S = -S), (m = -m));
      let p = 1 - o;
      if (m < 0.9995) {
        const A = Math.acos(m),
          w = Math.sin(A);
        (p = Math.sin(p * A) / w),
          (o = Math.sin(o * A) / w),
          (c = c * p + h * o),
          (l = l * p + d * o),
          (u = u * p + _ * o),
          (f = f * p + S * o);
      } else {
        (c = c * p + h * o),
          (l = l * p + d * o),
          (u = u * p + _ * o),
          (f = f * p + S * o);
        const A = 1 / Math.sqrt(c * c + l * l + u * u + f * f);
        (c *= A), (l *= A), (u *= A), (f *= A);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = f);
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r],
      c = n[r + 1],
      l = n[r + 2],
      u = n[r + 3],
      f = s[a],
      h = s[a + 1],
      d = s[a + 2],
      _ = s[a + 3];
    return (
      (e[t] = o * _ + u * f + c * d - l * h),
      (e[t + 1] = c * _ + u * h + l * f - o * d),
      (e[t + 2] = l * _ + u * d + o * h - c * f),
      (e[t + 3] = u * _ - o * f - c * h - l * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      u = o(r / 2),
      f = o(s / 2),
      h = c(n / 2),
      d = c(r / 2),
      _ = c(s / 2);
    switch (a) {
      case "XYZ":
        (this._x = h * u * f + l * d * _),
          (this._y = l * d * f - h * u * _),
          (this._z = l * u * _ + h * d * f),
          (this._w = l * u * f - h * d * _);
        break;
      case "YXZ":
        (this._x = h * u * f + l * d * _),
          (this._y = l * d * f - h * u * _),
          (this._z = l * u * _ - h * d * f),
          (this._w = l * u * f + h * d * _);
        break;
      case "ZXY":
        (this._x = h * u * f - l * d * _),
          (this._y = l * d * f + h * u * _),
          (this._z = l * u * _ + h * d * f),
          (this._w = l * u * f - h * d * _);
        break;
      case "ZYX":
        (this._x = h * u * f - l * d * _),
          (this._y = l * d * f + h * u * _),
          (this._z = l * u * _ - h * d * f),
          (this._w = l * u * f + h * d * _);
        break;
      case "YZX":
        (this._x = h * u * f + l * d * _),
          (this._y = l * d * f + h * u * _),
          (this._z = l * u * _ - h * d * f),
          (this._w = l * u * f - h * d * _);
        break;
      case "XZY":
        (this._x = h * u * f - l * d * _),
          (this._y = l * d * f - h * u * _),
          (this._z = l * u * _ + h * d * f),
          (this._w = l * u * f + h * d * _);
        break;
      default:
        ye("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      u = t[6],
      f = t[10],
      h = n + o + f;
    if (h > 0) {
      const d = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / d),
        (this._x = (u - c) * d),
        (this._y = (s - l) * d),
        (this._z = (a - r) * d);
    } else if (n > o && n > f) {
      const d = 2 * Math.sqrt(1 + n - o - f);
      (this._w = (u - c) / d),
        (this._x = 0.25 * d),
        (this._y = (r + a) / d),
        (this._z = (s + l) / d);
    } else if (o > f) {
      const d = 2 * Math.sqrt(1 + o - n - f);
      (this._w = (s - l) / d),
        (this._x = (r + a) / d),
        (this._y = 0.25 * d),
        (this._z = (c + u) / d);
    } else {
      const d = 2 * Math.sqrt(1 + f - n - o);
      (this._w = (a - r) / d),
        (this._x = (s + l) / d),
        (this._y = (c + u) / d),
        (this._z = 0.25 * d);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Be(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + r * l - s * c),
      (this._y = r * u + a * c + s * o - n * l),
      (this._z = s * u + a * l + n * c - r * o),
      (this._w = a * u - n * o - r * c - s * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    let n = e._x,
      r = e._y,
      s = e._z,
      a = e._w,
      o = this.dot(e);
    o < 0 && ((n = -n), (r = -r), (s = -s), (a = -a), (o = -o));
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o),
        u = Math.sin(l);
      (c = Math.sin(c * l) / u),
        (t = Math.sin(t * l) / u),
        (this._x = this._x * c + n * t),
        (this._y = this._y * c + r * t),
        (this._z = this._z * c + s * t),
        (this._w = this._w * c + a * t),
        this._onChangeCallback();
    } else
      (this._x = this._x * c + n * t),
        (this._y = this._y * c + r * t),
        (this._z = this._z * c + s * t),
        (this._w = this._w * c + a * t),
        this.normalize();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
const hs = class hs {
  constructor(e = 0, t = 0, n = 0) {
    (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(ws.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ws.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      c = e.w,
      l = 2 * (a * r - o * n),
      u = 2 * (o * t - s * r),
      f = 2 * (s * n - a * t);
    return (
      (this.x = t + c * l + a * f - o * u),
      (this.y = n + c * u + o * l - s * f),
      (this.z = r + c * f + s * u - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Be(this.x, e.x, t.x)),
      (this.y = Be(this.y, e.y, t.y)),
      (this.z = Be(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Be(this.x, e, t)),
      (this.y = Be(this.y, e, t)),
      (this.z = Be(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = r * c - s * o),
      (this.y = s * a - n * c),
      (this.z = n * o - r * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return pr.copy(this).projectOnVector(e), this.sub(pr);
  }
  reflect(e) {
    return this.sub(pr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
hs.prototype.isVector3 = !0;
let L = hs;
const pr = new L(),
  ws = new Ln(),
  us = class us {
    constructor(e, t, n, r, s, a, o, c, l) {
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        e !== void 0 && this.set(e, t, n, r, s, a, o, c, l);
    }
    set(e, t, n, r, s, a, o, c, l) {
      const u = this.elements;
      return (
        (u[0] = e),
        (u[1] = r),
        (u[2] = o),
        (u[3] = t),
        (u[4] = s),
        (u[5] = c),
        (u[6] = n),
        (u[7] = a),
        (u[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return (
        this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        r = t.elements,
        s = this.elements,
        a = n[0],
        o = n[3],
        c = n[6],
        l = n[1],
        u = n[4],
        f = n[7],
        h = n[2],
        d = n[5],
        _ = n[8],
        S = r[0],
        m = r[3],
        p = r[6],
        A = r[1],
        w = r[4],
        M = r[7],
        E = r[2],
        y = r[5],
        R = r[8];
      return (
        (s[0] = a * S + o * A + c * E),
        (s[3] = a * m + o * w + c * y),
        (s[6] = a * p + o * M + c * R),
        (s[1] = l * S + u * A + f * E),
        (s[4] = l * m + u * w + f * y),
        (s[7] = l * p + u * M + f * R),
        (s[2] = h * S + d * A + _ * E),
        (s[5] = h * m + d * w + _ * y),
        (s[8] = h * p + d * M + _ * R),
        this
      );
    }
    multiplyScalar(e) {
      const t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        a = e[4],
        o = e[5],
        c = e[6],
        l = e[7],
        u = e[8];
      return (
        t * a * u - t * o * l - n * s * u + n * o * c + r * s * l - r * a * c
      );
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        a = e[4],
        o = e[5],
        c = e[6],
        l = e[7],
        u = e[8],
        f = u * a - o * l,
        h = o * c - u * s,
        d = l * s - a * c,
        _ = t * f + n * h + r * d;
      if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S = 1 / _;
      return (
        (e[0] = f * S),
        (e[1] = (r * l - u * n) * S),
        (e[2] = (o * n - r * a) * S),
        (e[3] = h * S),
        (e[4] = (u * t - r * c) * S),
        (e[5] = (r * s - o * t) * S),
        (e[6] = d * S),
        (e[7] = (n * c - l * t) * S),
        (e[8] = (a * t - n * s) * S),
        this
      );
    }
    transpose() {
      let e;
      const t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    }
    setUvTransform(e, t, n, r, s, a, o) {
      const c = Math.cos(s),
        l = Math.sin(s);
      return (
        this.set(
          n * c,
          n * l,
          -n * (c * a + l * o) + a + e,
          -r * l,
          r * c,
          -r * (-l * a + c * o) + o + t,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(e, t) {
      return (
        Zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),
        this.premultiply(mr.makeScale(e, t)),
        this
      );
    }
    rotate(e) {
      return (
        Zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),
        this.premultiply(mr.makeRotation(-e)),
        this
      );
    }
    translate(e, t) {
      return (
        Zn(
          "Matrix3: .translate() is deprecated. Use .makeTranslation() instead."
        ),
        this.premultiply(mr.makeTranslation(e, t)),
        this
      );
    }
    makeTranslation(e, t) {
      return (
        e.isVector2
          ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
          : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
      );
    }
    makeRotation(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
    }
    makeScale(e, t) {
      return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        e
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
us.prototype.isMatrix3 = !0;
let De = us;
const mr = new De(),
  Cs = new De().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  Ps = new De().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
function ko() {
  const i = {
      enabled: !0,
      workingColorSpace: tr,
      spaces: {},
      convert: function (r, s, a) {
        return (
          this.enabled === !1 ||
            s === a ||
            !s ||
            !a ||
            (this.spaces[s].transfer === $e &&
              ((r.r = cn(r.r)), (r.g = cn(r.g)), (r.b = cn(r.b))),
            this.spaces[s].primaries !== this.spaces[a].primaries &&
              (r.applyMatrix3(this.spaces[s].toXYZ),
              r.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === $e &&
              ((r.r = $n(r.r)), (r.g = $n(r.g)), (r.b = $n(r.b)))),
          r
        );
      },
      workingToColorSpace: function (r, s) {
        return this.convert(r, this.workingColorSpace, s);
      },
      colorSpaceToWorking: function (r, s) {
        return this.convert(r, s, this.workingColorSpace);
      },
      getPrimaries: function (r) {
        return this.spaces[r].primaries;
      },
      getTransfer: function (r) {
        return r === "" ? nr : this.spaces[r].transfer;
      },
      getToneMappingMode: function (r) {
        return (
          this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (r, s = this.workingColorSpace) {
        return r.fromArray(this.spaces[s].luminanceCoefficients);
      },
      define: function (r) {
        Object.assign(this.spaces, r);
      },
      _getMatrix: function (r, s, a) {
        return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (r) {
        return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (r = this.workingColorSpace) {
        return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (r, s) {
        return (
          Zn(
            "ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."
          ),
          i.workingToColorSpace(r, s)
        );
      },
      toWorkingColorSpace: function (r, s) {
        return (
          Zn(
            "ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."
          ),
          i.colorSpaceToWorking(r, s)
        );
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [tr]: {
        primaries: e,
        whitePoint: n,
        transfer: nr,
        toXYZ: Cs,
        fromXYZ: Ps,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: Ft },
        outputColorSpaceConfig: { drawingBufferColorSpace: Ft },
      },
      [Ft]: {
        primaries: e,
        whitePoint: n,
        transfer: $e,
        toXYZ: Cs,
        fromXYZ: Ps,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: Ft },
      },
    }),
    i
  );
}
const ke = ko();
function cn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function $n(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Nn;
class Wo {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      Nn === void 0 && (Nn = vi("canvas")),
        (Nn.width = e.width),
        (Nn.height = e.height);
      const r = Nn.getContext("2d");
      e instanceof ImageData
        ? r.putImageData(e, 0, 0)
        : r.drawImage(e, 0, 0, e.width, e.height),
        (n = Nn);
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = vi("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = cn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(cn(t[n] / 255) * 255))
          : (t[n] = cn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        ye(
          "ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let Xo = 0;
class jr {
  constructor(e = null) {
    (this.isTextureSource = !0),
      Object.defineProperty(this, "id", { value: Xo++ }),
      (this.uuid = Wt()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  getSize(e) {
    const t = this.data;
    return (
      typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : typeof VideoFrame < "u" && t instanceof VideoFrame
        ? e.set(t.displayWidth, t.displayHeight, 0)
        : t !== null
        ? e.set(t.width, t.height, t.depth || 0)
        : e.set(0, 0, 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(gr(r[a].image)) : s.push(gr(r[a]));
      } else s = gr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function gr(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? Wo.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (ye("Texture: Unable to serialize Texture."), {});
}
let qo = 0;
const _r = new L();
class bt extends Pn {
  constructor(
    e = bt.DEFAULT_IMAGE,
    t = bt.DEFAULT_MAPPING,
    n = 1001,
    r = 1001,
    s = 1006,
    a = 1008,
    o = 1023,
    c = 1009,
    l = bt.DEFAULT_ANISOTROPY,
    u = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: qo++ }),
      (this.uuid = Wt()),
      (this.name = ""),
      (this.source = new jr(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Re(0, 0)),
      (this.repeat = new Re(1, 1)),
      (this.center = new Re(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new De()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0),
      (this.normalized = !1);
  }
  get width() {
    return this.source.getSize(_r).x;
  }
  get height() {
    return this.source.getSize(_r).y;
  }
  get depth() {
    return this.source.getSize(_r).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      (this.normalized = e.normalized),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        ye(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      (r && n && r.isVector2 && n.isVector2) ||
      (r && n && r.isVector3 && n.isVector3) ||
      (r && n && r.isMatrix3 && n.isMatrix3)
        ? r.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = 300;
bt.DEFAULT_ANISOTROPY = 1;
const ds = class ds {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.x = e), (this.y = t), (this.z = n), (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements,
      l = c[0],
      u = c[4],
      f = c[8],
      h = c[1],
      d = c[5],
      _ = c[9],
      S = c[2],
      m = c[6],
      p = c[10];
    if (
      Math.abs(u - h) < 0.01 &&
      Math.abs(f - S) < 0.01 &&
      Math.abs(_ - m) < 0.01
    ) {
      if (
        Math.abs(u + h) < 0.1 &&
        Math.abs(f + S) < 0.1 &&
        Math.abs(_ + m) < 0.1 &&
        Math.abs(l + d + p - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const w = (l + 1) / 2,
        M = (d + 1) / 2,
        E = (p + 1) / 2,
        y = (u + h) / 4,
        R = (f + S) / 4,
        v = (_ + m) / 4;
      return (
        w > M && w > E
          ? w < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(w)), (r = y / n), (s = R / n))
          : M > E
          ? M < 0.01
            ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(M)), (n = y / r), (s = v / r))
          : E < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(E)), (n = R / s), (r = v / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let A = Math.sqrt(
      (m - _) * (m - _) + (f - S) * (f - S) + (h - u) * (h - u)
    );
    return (
      Math.abs(A) < 0.001 && (A = 1),
      (this.x = (m - _) / A),
      (this.y = (f - S) / A),
      (this.z = (h - u) / A),
      (this.w = Math.acos((l + d + p - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Be(this.x, e.x, t.x)),
      (this.y = Be(this.y, e.y, t.y)),
      (this.z = Be(this.z, e.z, t.z)),
      (this.w = Be(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Be(this.x, e, t)),
      (this.y = Be(this.y, e, t)),
      (this.z = Be(this.z, e, t)),
      (this.w = Be(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
ds.prototype.isVector4 = !0;
let tt = ds;
class Yo extends Pn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: 1006,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveColorBuffer: !0,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          storeMultisampledColorBuffer: !0,
          storeMultisampledDepthBuffer: !0,
          storeMultisampledStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
          useArrayDepthTexture: !1,
        },
        n
      )),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = n.depth),
      (this.scissor = new tt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new tt(0, 0, e, t)),
      (this.textures = []);
    const r = { width: e, height: t, depth: n.depth },
      s = new bt(r),
      a = n.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = s.clone()),
        (this.textures[o].isRenderTargetTexture = !0),
        (this.textures[o].renderTarget = this);
    this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveColorBuffer = n.resolveColorBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer),
      (this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer),
      (this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview),
      (this.useArrayDepthTexture = n.useArrayDepthTexture);
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    e.mapping !== void 0 && (t.mapping = e.mapping),
      e.wrapS !== void 0 && (t.wrapS = e.wrapS),
      e.wrapT !== void 0 && (t.wrapT = e.wrapT),
      e.wrapR !== void 0 && (t.wrapR = e.wrapR),
      e.magFilter !== void 0 && (t.magFilter = e.magFilter),
      e.minFilter !== void 0 && (t.minFilter = e.minFilter),
      e.format !== void 0 && (t.format = e.format),
      e.type !== void 0 && (t.type = e.type),
      e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
      e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
      e.flipY !== void 0 && (t.flipY = e.flipY),
      e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
      e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null &&
      this._depthTexture.renderTarget === this &&
      (this._depthTexture.renderTarget = null),
      e !== null && e.renderTarget === null && (e.renderTarget = this),
      (this._depthTexture = e);
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let r = 0, s = this.textures.length; r < s; r++)
        (this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = n),
          this.textures[r].isData3DTexture !== !0 &&
            (this.textures[r].isArrayTexture =
              this.textures[r].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let t = 0, n = e.textures.length; t < n; t++) {
      (this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0),
        (this.textures[t].renderTarget = this);
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new jr(r);
    }
    if (
      ((this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveColorBuffer = e.resolveColorBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      (this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer),
      (this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer),
      (this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer),
      e.depthTexture !== null)
    )
      if (e.depthTexture.renderTarget === e) {
        const t = e.depthTexture.clone();
        (t.renderTarget = null), (this.depthTexture = t);
      } else this.depthTexture = e.depthTexture;
    return (
      (this.samples = e.samples),
      (this.multiview = e.multiview),
      (this.useArrayDepthTexture = e.useArrayDepthTexture),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Xt extends Yo {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class Oa extends bt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  copy(e) {
    return super.copy(e), (this.wrapR = e.wrapR), this;
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ko extends bt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
  copy(e) {
    return super.copy(e), (this.wrapR = e.wrapR), this;
  }
}
const ar = class ar {
  constructor(e, t, n, r, s, a, o, c, l, u, f, h, d, _, S, m) {
    (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, u, f, h, d, _, S, m);
  }
  set(e, t, n, r, s, a, o, c, l, u, f, h, d, _, S, m) {
    const p = this.elements;
    return (
      (p[0] = e),
      (p[4] = t),
      (p[8] = n),
      (p[12] = r),
      (p[1] = s),
      (p[5] = a),
      (p[9] = o),
      (p[13] = c),
      (p[2] = l),
      (p[6] = u),
      (p[10] = f),
      (p[14] = h),
      (p[3] = d),
      (p[7] = _),
      (p[11] = S),
      (p[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ar().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return this.determinantAffine() === 0
      ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this)
      : (e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this);
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    if (e.determinantAffine() === 0) return this.identity();
    const t = this.elements,
      n = e.elements,
      r = 1 / Un.setFromMatrixColumn(e, 0).length(),
      s = 1 / Un.setFromMatrixColumn(e, 1).length(),
      a = 1 / Un.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(r),
      l = Math.sin(r),
      u = Math.cos(s),
      f = Math.sin(s);
    if (e.order === "XYZ") {
      const h = a * u,
        d = a * f,
        _ = o * u,
        S = o * f;
      (t[0] = c * u),
        (t[4] = -c * f),
        (t[8] = l),
        (t[1] = d + _ * l),
        (t[5] = h - S * l),
        (t[9] = -o * c),
        (t[2] = S - h * l),
        (t[6] = _ + d * l),
        (t[10] = a * c);
    } else if (e.order === "YXZ") {
      const h = c * u,
        d = c * f,
        _ = l * u,
        S = l * f;
      (t[0] = h + S * o),
        (t[4] = _ * o - d),
        (t[8] = a * l),
        (t[1] = a * f),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = d * o - _),
        (t[6] = S + h * o),
        (t[10] = a * c);
    } else if (e.order === "ZXY") {
      const h = c * u,
        d = c * f,
        _ = l * u,
        S = l * f;
      (t[0] = h - S * o),
        (t[4] = -a * f),
        (t[8] = _ + d * o),
        (t[1] = d + _ * o),
        (t[5] = a * u),
        (t[9] = S - h * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * c);
    } else if (e.order === "ZYX") {
      const h = a * u,
        d = a * f,
        _ = o * u,
        S = o * f;
      (t[0] = c * u),
        (t[4] = _ * l - d),
        (t[8] = h * l + S),
        (t[1] = c * f),
        (t[5] = S * l + h),
        (t[9] = d * l - _),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = a * c);
    } else if (e.order === "YZX") {
      const h = a * c,
        d = a * l,
        _ = o * c,
        S = o * l;
      (t[0] = c * u),
        (t[4] = S - h * f),
        (t[8] = _ * f + d),
        (t[1] = f),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -l * u),
        (t[6] = d * f + _),
        (t[10] = h - S * f);
    } else if (e.order === "XZY") {
      const h = a * c,
        d = a * l,
        _ = o * c,
        S = o * l;
      (t[0] = c * u),
        (t[4] = -f),
        (t[8] = l * u),
        (t[1] = h * f + S),
        (t[5] = a * u),
        (t[9] = d * f - _),
        (t[2] = _ * f - d),
        (t[6] = o * u),
        (t[10] = S * f + h);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Jo, e, Zo);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      Lt.subVectors(e, t),
      Lt.lengthSq() === 0 && (Lt.z = 1),
      Lt.normalize(),
      mn.crossVectors(n, Lt),
      mn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Lt.x += 1e-4) : (Lt.z += 1e-4),
        Lt.normalize(),
        mn.crossVectors(n, Lt)),
      mn.normalize(),
      bi.crossVectors(Lt, mn),
      (r[0] = mn.x),
      (r[4] = bi.x),
      (r[8] = Lt.x),
      (r[1] = mn.y),
      (r[5] = bi.y),
      (r[9] = Lt.y),
      (r[2] = mn.z),
      (r[6] = bi.z),
      (r[10] = Lt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      u = n[1],
      f = n[5],
      h = n[9],
      d = n[13],
      _ = n[2],
      S = n[6],
      m = n[10],
      p = n[14],
      A = n[3],
      w = n[7],
      M = n[11],
      E = n[15],
      y = r[0],
      R = r[4],
      v = r[8],
      b = r[12],
      P = r[1],
      U = r[5],
      B = r[9],
      V = r[13],
      I = r[2],
      H = r[6],
      K = r[10],
      J = r[14],
      ne = r[3],
      X = r[7],
      j = r[11],
      te = r[15];
    return (
      (s[0] = a * y + o * P + c * I + l * ne),
      (s[4] = a * R + o * U + c * H + l * X),
      (s[8] = a * v + o * B + c * K + l * j),
      (s[12] = a * b + o * V + c * J + l * te),
      (s[1] = u * y + f * P + h * I + d * ne),
      (s[5] = u * R + f * U + h * H + d * X),
      (s[9] = u * v + f * B + h * K + d * j),
      (s[13] = u * b + f * V + h * J + d * te),
      (s[2] = _ * y + S * P + m * I + p * ne),
      (s[6] = _ * R + S * U + m * H + p * X),
      (s[10] = _ * v + S * B + m * K + p * j),
      (s[14] = _ * b + S * V + m * J + p * te),
      (s[3] = A * y + w * P + M * I + E * ne),
      (s[7] = A * R + w * U + M * H + E * X),
      (s[11] = A * v + w * B + M * K + E * j),
      (s[15] = A * b + w * V + M * J + E * te),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      u = e[2],
      f = e[6],
      h = e[10],
      d = e[14],
      _ = e[3],
      S = e[7],
      m = e[11],
      p = e[15],
      A = c * d - l * h,
      w = o * d - l * f,
      M = o * h - c * f,
      E = a * d - l * u,
      y = a * h - c * u,
      R = a * f - o * u;
    return (
      t * (S * A - m * w + p * M) -
      n * (_ * A - m * E + p * y) +
      r * (_ * w - S * E + p * R) -
      s * (_ * M - S * y + m * R)
    );
  }
  determinantAffine() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[1],
      a = e[5],
      o = e[9],
      c = e[2],
      l = e[6],
      u = e[10];
    return t * (a * u - o * l) - n * (s * u - o * c) + r * (s * l - a * c);
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      f = e[9],
      h = e[10],
      d = e[11],
      _ = e[12],
      S = e[13],
      m = e[14],
      p = e[15],
      A = t * o - n * a,
      w = t * c - r * a,
      M = t * l - s * a,
      E = n * c - r * o,
      y = n * l - s * o,
      R = r * l - s * c,
      v = u * S - f * _,
      b = u * m - h * _,
      P = u * p - d * _,
      U = f * m - h * S,
      B = f * p - d * S,
      V = h * p - d * m,
      I = A * V - w * B + M * U + E * P - y * b + R * v;
    if (I === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const H = 1 / I;
    return (
      (e[0] = (o * V - c * B + l * U) * H),
      (e[1] = (r * B - n * V - s * U) * H),
      (e[2] = (S * R - m * y + p * E) * H),
      (e[3] = (h * y - f * R - d * E) * H),
      (e[4] = (c * P - a * V - l * b) * H),
      (e[5] = (t * V - r * P + s * b) * H),
      (e[6] = (m * M - _ * R - p * w) * H),
      (e[7] = (u * R - h * M + d * w) * H),
      (e[8] = (a * B - o * P + l * v) * H),
      (e[9] = (n * P - t * B - s * v) * H),
      (e[10] = (_ * y - S * M + p * A) * H),
      (e[11] = (f * M - u * y - d * A) * H),
      (e[12] = (o * b - a * U - c * v) * H),
      (e[13] = (t * U - n * b + r * v) * H),
      (e[14] = (S * w - _ * E - m * A) * H),
      (e[15] = (u * E - f * w + h * A) * H),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      c = e.z,
      l = s * a,
      u = s * o;
    return (
      this.set(
        l * a + n,
        l * o - r * c,
        l * c + r * o,
        0,
        l * o + r * c,
        u * o + n,
        u * c - r * a,
        0,
        l * c - r * o,
        u * c + r * a,
        s * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      c = t._w,
      l = s + s,
      u = a + a,
      f = o + o,
      h = s * l,
      d = s * u,
      _ = s * f,
      S = a * u,
      m = a * f,
      p = o * f,
      A = c * l,
      w = c * u,
      M = c * f,
      E = n.x,
      y = n.y,
      R = n.z;
    return (
      (r[0] = (1 - (S + p)) * E),
      (r[1] = (d + M) * E),
      (r[2] = (_ - w) * E),
      (r[3] = 0),
      (r[4] = (d - M) * y),
      (r[5] = (1 - (h + p)) * y),
      (r[6] = (m + A) * y),
      (r[7] = 0),
      (r[8] = (_ + w) * R),
      (r[9] = (m - A) * R),
      (r[10] = (1 - (h + S)) * R),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    (e.x = r[12]), (e.y = r[13]), (e.z = r[14]);
    const s = this.determinantAffine();
    if (s === 0) return n.set(1, 1, 1), t.identity(), this;
    let a = Un.set(r[0], r[1], r[2]).length();
    const o = Un.set(r[4], r[5], r[6]).length(),
      c = Un.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), Gt.copy(this);
    const l = 1 / a,
      u = 1 / o,
      f = 1 / c;
    return (
      (Gt.elements[0] *= l),
      (Gt.elements[1] *= l),
      (Gt.elements[2] *= l),
      (Gt.elements[4] *= u),
      (Gt.elements[5] *= u),
      (Gt.elements[6] *= u),
      (Gt.elements[8] *= f),
      (Gt.elements[9] *= f),
      (Gt.elements[10] *= f),
      t.setFromRotationMatrix(Gt),
      (n.x = a),
      (n.y = o),
      (n.z = c),
      this
    );
  }
  makePerspective(e, t, n, r, s, a, o = 2e3, c = !1) {
    const l = this.elements,
      u = (2 * s) / (t - e),
      f = (2 * s) / (n - r),
      h = (t + e) / (t - e),
      d = (n + r) / (n - r);
    let _, S;
    if (c) (_ = s / (a - s)), (S = (a * s) / (a - s));
    else if (o === 2e3) (_ = -(a + s) / (a - s)), (S = (-2 * a * s) / (a - s));
    else if (o === 2001) (_ = -a / (a - s)), (S = (-a * s) / (a - s));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = u),
      (l[4] = 0),
      (l[8] = h),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = f),
      (l[9] = d),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = _),
      (l[14] = S),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, a, o = 2e3, c = !1) {
    const l = this.elements,
      u = 2 / (t - e),
      f = 2 / (n - r),
      h = -(t + e) / (t - e),
      d = -(n + r) / (n - r);
    let _, S;
    if (c) (_ = 1 / (a - s)), (S = a / (a - s));
    else if (o === 2e3) (_ = -2 / (a - s)), (S = -(a + s) / (a - s));
    else if (o === 2001) (_ = -1 / (a - s)), (S = -s / (a - s));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = u),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = h),
      (l[1] = 0),
      (l[5] = f),
      (l[9] = 0),
      (l[13] = d),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = _),
      (l[14] = S),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
};
ar.prototype.isMatrix4 = !0;
let Ve = ar;
const Un = new L(),
  Gt = new Ve(),
  Jo = new L(0, 0, 0),
  Zo = new L(1, 1, 1),
  mn = new L(),
  bi = new L(),
  Lt = new L(),
  Ls = new Ve(),
  Ds = new Ln();
class hn {
  constructor(e = 0, t = 0, n = 0, r = hn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      a = r[4],
      o = r[8],
      c = r[1],
      l = r[5],
      u = r[9],
      f = r[2],
      h = r[6],
      d = r[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Be(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, d)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(h, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Be(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, d)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Be(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-f, d)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Be(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(h, d)), (this._z = Math.atan2(c, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(Be(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-Be(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(h, l)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-u, d)), (this._y = 0));
        break;
      default:
        ye(
          "Euler: .setFromRotationMatrix() encountered an unknown order: " + t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ls.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ls, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ds.setFromEuler(this), this.setFromQuaternion(Ds, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
hn.DEFAULT_ORDER = "XYZ";
class Ga {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let $o = 0;
const Is = new L(),
  Fn = new Ln(),
  tn = new Ve(),
  Ai = new L(),
  ii = new L(),
  Qo = new L(),
  jo = new Ln(),
  Ns = new L(1, 0, 0),
  Us = new L(0, 1, 0),
  Fs = new L(0, 0, 1),
  Bs = { type: "added" },
  el = { type: "removed" },
  Bn = { type: "childadded", child: null },
  vr = { type: "childremoved", child: null };
class ht extends Pn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: $o++ }),
      (this.uuid = Wt()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = ht.DEFAULT_UP.clone());
    const e = new L(),
      t = new hn(),
      n = new Ln(),
      r = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new Ve() },
        normalMatrix: { value: new De() },
      }),
      (this.matrix = new Ve()),
      (this.matrixWorld = new Ve()),
      (this.matrixAutoUpdate = ht.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Ga()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.static = !1),
      (this.userData = {}),
      (this.pivot = null);
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Fn.setFromAxisAngle(e, t), this.quaternion.multiply(Fn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Fn.setFromAxisAngle(e, t), this.quaternion.premultiply(Fn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ns, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Us, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Fs, e);
  }
  translateOnAxis(e, t) {
    return (
      Is.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Is.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Ns, e);
  }
  translateY(e) {
    return this.translateOnAxis(Us, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Fs, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(tn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ai.copy(e) : Ai.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      ii.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? tn.lookAt(ii, Ai, this.up)
        : tn.lookAt(Ai, ii, this.up),
      this.quaternion.setFromRotationMatrix(tn),
      r &&
        (tn.extractRotation(r.matrixWorld),
        Fn.setFromRotationMatrix(tn),
        this.quaternion.premultiply(Fn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (Pe("Object3D.add: object can't be added as a child of itself.", e),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Bs),
            (Bn.child = e),
            this.dispatchEvent(Bn),
            (Bn.child = null))
          : Pe("Object3D.add: object not an instance of THREE.Object3D.", e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(el),
        (vr.child = e),
        this.dispatchEvent(vr),
        (vr.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      tn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), tn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(tn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Bs),
      (Bn.child = e),
      this.dispatchEvent(Bn),
      (Bn.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, e, Qo), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, jo, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  intersectsFrustum() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x,
        n = e.y,
        r = e.z,
        s = this.matrix.elements;
      (s[12] += t - s[0] * t - s[4] * n - s[8] * r),
        (s[13] += n - s[1] * t - s[5] * n - s[9] * r),
        (s[14] += r - s[2] * t - s[6] * n - s[10] * r);
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t, n = !1) {
    const r = this.parent;
    if (
      (e === !0 && r !== null && r.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || n) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (n = !0)),
      t === !0)
    ) {
      const s = this.children;
      for (let a = 0, o = s.length; a < o; a++)
        s[a].updateWorldMatrix(!1, !0, n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      (r.name = this.name),
      (r.castShadow = this.castShadow),
      (r.receiveShadow = this.receiveShadow),
      (r.visible = this.visible),
      (r.frustumCulled = this.frustumCulled),
      (r.renderOrder = this.renderOrder),
      (r.static = this.static),
      (r.matrixAutoUpdate = this.matrixAutoUpdate),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.pivot !== null && (r.pivot = this.pivot.toArray()),
      this.morphTargetDictionary !== void 0 &&
        (r.morphTargetDictionary = Object.assign(
          {},
          this.morphTargetDictionary
        )),
      this.morphTargetInfluences !== void 0 &&
        (r.morphTargetInfluences = this.morphTargetInfluences.slice()),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.geometryInfo = this._geometryInfo.map((o) => ({
          ...o,
          boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
          boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0,
        }))),
        (r.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
        (r.availableInstanceIds = this._availableInstanceIds.slice()),
        (r.availableGeometryIds = this._availableGeometryIds.slice()),
        (r.nextIndexStart = this._nextIndexStart),
        (r.nextVertexStart = this._nextVertexStart),
        (r.geometryCount = this._geometryCount),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        (r.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const f = c[l];
            s(e.shapes, f);
          }
        else s(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        r.material = o;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        u = a(e.images),
        f = a(e.shapes),
        h = a(e.skeletons),
        d = a(e.animations),
        _ = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        u.length > 0 && (n.images = u),
        f.length > 0 && (n.shapes = f),
        h.length > 0 && (n.skeletons = h),
        d.length > 0 && (n.animations = d),
        _.length > 0 && (n.nodes = _);
    }
    return (n.object = r), n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      (this.pivot = e.pivot !== null ? e.pivot.clone() : null),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.static = e.static),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
ht.DEFAULT_UP = new L(0, 1, 0);
ht.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class Ri extends ht {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const tl = { type: "move" };
class xr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Ri()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Ri()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new L()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new L())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Ri()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new L()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new L()),
        (this._grip.eventsEnabled = !1)),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      a = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const S of e.hand.values()) {
          const m = t.getJointPose(S, n),
            p = this._getHandJoint(l, S);
          m !== null &&
            (p.matrix.fromArray(m.transform.matrix),
            p.matrix.decompose(p.position, p.rotation, p.scale),
            (p.matrixWorldNeedsUpdate = !0),
            (p.jointRadius = m.radius)),
            (p.visible = m !== null);
        }
        const u = l.joints["index-finger-tip"],
          f = l.joints["thumb-tip"],
          h = u.position.distanceTo(f.position),
          d = 0.02,
          _ = 0.005;
        l.inputState.pinching && h > d + _
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            h <= d - _ &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (c.matrix.fromArray(s.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(s.linearVelocity))
              : (c.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(s.angularVelocity))
              : (c.hasAngularVelocity = !1),
            c.eventsEnabled &&
              c.dispatchEvent({ type: "gripUpdated", data: e, target: this })));
      o !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(tl)));
    }
    return (
      o !== null && (o.visible = r !== null),
      c !== null && (c.visible = s !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Ri();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const za = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  gn = { h: 0, s: 0, l: 0 },
  wi = { h: 0, s: 0, l: 0 };
function Sr(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
class Ne {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
        ? this.setHex(r)
        : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ft) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      ke.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, r = ke.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      ke.colorSpaceToWorking(this, r),
      this
    );
  }
  setHSL(e, t, n, r = ke.workingColorSpace) {
    if (((e = Qr(e, 1)), (t = Be(t, 0, 1)), (n = Be(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      (this.r = Sr(a, s, e + 1 / 3)),
        (this.g = Sr(a, s, e)),
        (this.b = Sr(a, s, e - 1 / 3));
    }
    return ke.colorSpaceToWorking(this, r), this;
  }
  setStyle(e, t = Ft) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        ye("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = r[1],
        o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t
              )
            );
          break;
        default:
          ye("Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      ye("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ft) {
    const n = za[e.toLowerCase()];
    return (
      n !== void 0 ? this.setHex(n, t) : ye("Color: Unknown color " + e), this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = cn(e.r)), (this.g = cn(e.g)), (this.b = cn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = $n(e.r)), (this.g = $n(e.g)), (this.b = $n(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ft) {
    return (
      ke.workingToColorSpace(Tt.copy(this), e),
      Math.round(Be(Tt.r * 255, 0, 255)) * 65536 +
        Math.round(Be(Tt.g * 255, 0, 255)) * 256 +
        Math.round(Be(Tt.b * 255, 0, 255))
    );
  }
  getHexString(e = Ft) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ke.workingColorSpace) {
    ke.workingToColorSpace(Tt.copy(this), t);
    const n = Tt.r,
      r = Tt.g,
      s = Tt.b,
      a = Math.max(n, r, s),
      o = Math.min(n, r, s);
    let c, l;
    const u = (o + a) / 2;
    if (o === a) (c = 0), (l = 0);
    else {
      const f = a - o;
      switch (((l = u <= 0.5 ? f / (a + o) : f / (2 - a - o)), a)) {
        case n:
          c = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / f + 2;
          break;
        case s:
          c = (n - r) / f + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = u), e;
  }
  getRGB(e, t = ke.workingColorSpace) {
    return (
      ke.workingToColorSpace(Tt.copy(this), t),
      (e.r = Tt.r),
      (e.g = Tt.g),
      (e.b = Tt.b),
      e
    );
  }
  getStyle(e = Ft) {
    ke.workingToColorSpace(Tt.copy(this), e);
    const t = Tt.r,
      n = Tt.g,
      r = Tt.b;
    return e !== Ft
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          r * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(gn), this.setHSL(gn.h + e, gn.s + t, gn.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(gn), e.getHSL(wi);
    const n = mi(gn.h, wi.h, t),
      r = mi(gn.s, wi.s, t),
      s = mi(gn.l, wi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * r),
      (this.g = s[1] * t + s[4] * n + s[7] * r),
      (this.b = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Tt = new Ne();
Ne.NAMES = za;
class Np extends ht {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new hn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new hn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      (t.object.backgroundBlurriness = this.backgroundBlurriness),
      (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
const zt = new L(),
  nn = new L(),
  Mr = new L(),
  rn = new L(),
  On = new L(),
  Gn = new L(),
  Os = new L(),
  yr = new L(),
  Er = new L(),
  Tr = new L(),
  br = new tt(),
  Ar = new tt(),
  Rr = new tt();
class kt {
  constructor(e = new L(), t = new L(), n = new L()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), zt.subVectors(e, t), r.cross(zt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    zt.subVectors(r, t), nn.subVectors(n, t), Mr.subVectors(e, t);
    const a = zt.dot(zt),
      o = zt.dot(nn),
      c = zt.dot(Mr),
      l = nn.dot(nn),
      u = nn.dot(Mr),
      f = a * l - o * o;
    if (f === 0) return s.set(0, 0, 0), null;
    const h = 1 / f,
      d = (l * c - o * u) * h,
      _ = (a * u - o * c) * h;
    return s.set(1 - d - _, _, d);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, rn) === null
      ? !1
      : rn.x >= 0 && rn.y >= 0 && rn.x + rn.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, c) {
    return this.getBarycoord(e, t, n, r, rn) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(s, rn.x),
        c.addScaledVector(a, rn.y),
        c.addScaledVector(o, rn.z),
        c);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return (
      br.setScalar(0),
      Ar.setScalar(0),
      Rr.setScalar(0),
      br.fromBufferAttribute(e, t),
      Ar.fromBufferAttribute(e, n),
      Rr.fromBufferAttribute(e, r),
      a.setScalar(0),
      a.addScaledVector(br, s.x),
      a.addScaledVector(Ar, s.y),
      a.addScaledVector(Rr, s.z),
      a
    );
  }
  static isFrontFacing(e, t, n, r) {
    return zt.subVectors(n, t), nn.subVectors(e, t), zt.cross(nn).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      zt.subVectors(this.c, this.b),
      nn.subVectors(this.a, this.b),
      zt.cross(nn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return kt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let a, o;
    On.subVectors(r, n), Gn.subVectors(s, n), yr.subVectors(e, n);
    const c = On.dot(yr),
      l = Gn.dot(yr);
    if (c <= 0 && l <= 0) return t.copy(n);
    Er.subVectors(e, r);
    const u = On.dot(Er),
      f = Gn.dot(Er);
    if (u >= 0 && f <= u) return t.copy(r);
    const h = c * f - u * l;
    if (h <= 0 && c >= 0 && u <= 0)
      return (a = c / (c - u)), t.copy(n).addScaledVector(On, a);
    Tr.subVectors(e, s);
    const d = On.dot(Tr),
      _ = Gn.dot(Tr);
    if (_ >= 0 && d <= _) return t.copy(s);
    const S = d * l - c * _;
    if (S <= 0 && l >= 0 && _ <= 0)
      return (o = l / (l - _)), t.copy(n).addScaledVector(Gn, o);
    const m = u * _ - d * f;
    if (m <= 0 && f - u >= 0 && d - _ >= 0)
      return (
        Os.subVectors(s, r),
        (o = (f - u) / (f - u + (d - _))),
        t.copy(r).addScaledVector(Os, o)
      );
    const p = 1 / (m + S + h);
    return (
      (a = S * p),
      (o = h * p),
      t.copy(n).addScaledVector(On, a).addScaledVector(Gn, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class yn {
  constructor(
    e = new L(1 / 0, 1 / 0, 1 / 0),
    t = new L(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Vt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Vt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Vt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, Vt)
            : Vt.fromBufferAttribute(s, a),
            Vt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Vt);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Ci.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Ci.copy(n.boundingBox)),
          Ci.applyMatrix4(e.matrixWorld),
          this.union(Ci);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Vt),
      Vt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ri),
      Pi.subVectors(this.max, ri),
      zn.subVectors(e.a, ri),
      Vn.subVectors(e.b, ri),
      Hn.subVectors(e.c, ri),
      _n.subVectors(Vn, zn),
      vn.subVectors(Hn, Vn),
      bn.subVectors(zn, Hn);
    let t = [
      0,
      -_n.z,
      _n.y,
      0,
      -vn.z,
      vn.y,
      0,
      -bn.z,
      bn.y,
      _n.z,
      0,
      -_n.x,
      vn.z,
      0,
      -vn.x,
      bn.z,
      0,
      -bn.x,
      -_n.y,
      _n.x,
      0,
      -vn.y,
      vn.x,
      0,
      -bn.y,
      bn.x,
      0,
    ];
    return !wr(t, zn, Vn, Hn, Pi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !wr(t, zn, Vn, Hn, Pi))
      ? !1
      : (Li.crossVectors(_n, vn),
        (t = [Li.x, Li.y, Li.z]),
        wr(t, zn, Vn, Hn, Pi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Vt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Vt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(sn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const sn = [
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
  ],
  Vt = new L(),
  Ci = new yn(),
  zn = new L(),
  Vn = new L(),
  Hn = new L(),
  _n = new L(),
  vn = new L(),
  bn = new L(),
  ri = new L(),
  Pi = new L(),
  Li = new L(),
  An = new L();
function wr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    An.fromArray(i, s);
    const o =
        r.x * Math.abs(An.x) + r.y * Math.abs(An.y) + r.z * Math.abs(An.z),
      c = e.dot(An),
      l = t.dot(An),
      u = n.dot(An);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return !1;
  }
  return !0;
}
const pt = new L(),
  Di = new Re();
let nl = 0;
class qt extends Pn {
  constructor(e, t, n = !1) {
    if ((super(), Array.isArray(e)))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: nl++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Di.fromBufferAttribute(this, t),
          Di.applyMatrix3(e),
          this.setXY(t, Di.x, Di.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        pt.fromBufferAttribute(this, t),
          pt.applyMatrix3(e),
          this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t),
        pt.applyMatrix4(e),
        this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t),
        pt.applyNormalMatrix(e),
        this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t),
        pt.transformDirection(e),
        this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Ht(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Qe(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Qe(t, this.array)), (n = Qe(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Qe(t, this.array)),
        (n = Qe(n, this.array)),
        (r = Qe(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Qe(t, this.array)),
        (n = Qe(n, this.array)),
        (r = Qe(r, this.array)),
        (s = Qe(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      (e.name = this.name),
      (e.usage = this.usage),
      (e.gpuType = this.gpuType),
      e
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Va extends qt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ha extends qt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class mt extends qt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
const il = new yn(),
  si = new L(),
  Cr = new L();
class un {
  constructor(e = new L(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : il.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    si.subVectors(e, this.center);
    const t = si.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(si, r / n), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Cr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(si.copy(e.center).add(Cr)),
            this.expandByPoint(si.copy(e.center).sub(Cr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return (this.radius = e.radius), this.center.fromArray(e.center), this;
  }
}
let rl = 0;
const Ut = new Ve(),
  Pr = new ht(),
  kn = new L(),
  Dt = new yn(),
  ai = new yn(),
  St = new L();
class Pt extends Pn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: rl++ }),
      (this.uuid = Wt()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.indirectOffset = 0),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}),
      (this._transformed = !1);
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (yo(e) ? Ha : Va)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e, t = 0) {
    return (this.indirect = e), (this.indirectOffset = t), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new De().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      (this._transformed = !0),
      this
    );
  }
  applyQuaternion(e) {
    return Ut.makeRotationFromQuaternion(e), this.applyMatrix4(Ut), this;
  }
  rotateX(e) {
    return Ut.makeRotationX(e), this.applyMatrix4(Ut), this;
  }
  rotateY(e) {
    return Ut.makeRotationY(e), this.applyMatrix4(Ut), this;
  }
  rotateZ(e) {
    return Ut.makeRotationZ(e), this.applyMatrix4(Ut), this;
  }
  translate(e, t, n) {
    return Ut.makeTranslation(e, t, n), this.applyMatrix4(Ut), this;
  }
  scale(e, t, n) {
    return Ut.makeScale(e, t, n), this.applyMatrix4(Ut), this;
  }
  lookAt(e) {
    return Pr.lookAt(e), Pr.updateMatrix(), this.applyMatrix4(Pr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(kn).negate(),
      this.translate(kn.x, kn.y, kn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new mt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count &&
        ye(
          "BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new yn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Pe(
        "BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new L(-1 / 0, -1 / 0, -1 / 0),
          new L(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Dt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (St.addVectors(this.boundingBox.min, Dt.min),
                this.boundingBox.expandByPoint(St),
                St.addVectors(this.boundingBox.max, Dt.max),
                this.boundingBox.expandByPoint(St))
              : (this.boundingBox.expandByPoint(Dt.min),
                this.boundingBox.expandByPoint(Dt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      Pe(
        'BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new un());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Pe(
        "BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Dt.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          ai.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (St.addVectors(Dt.min, ai.min),
                Dt.expandByPoint(St),
                St.addVectors(Dt.max, ai.max),
                Dt.expandByPoint(St))
              : (Dt.expandByPoint(ai.min), Dt.expandByPoint(ai.max));
        }
      Dt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        St.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(St)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
            St.fromBufferAttribute(o, l),
              c && (kn.fromBufferAttribute(e, l), St.add(kn)),
              (r = Math.max(r, n.distanceToSquared(St)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          Pe(
            'BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      Pe(
        "BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.position,
      r = t.normal,
      s = t.uv;
    let a = this.getAttribute("tangent");
    (a === void 0 || a.count !== n.count) &&
      ((a = new qt(new Float32Array(4 * n.count), 4)),
      this.setAttribute("tangent", a));
    const o = [],
      c = [];
    for (let v = 0; v < n.count; v++) (o[v] = new L()), (c[v] = new L());
    const l = new L(),
      u = new L(),
      f = new L(),
      h = new Re(),
      d = new Re(),
      _ = new Re(),
      S = new L(),
      m = new L();
    function p(v, b, P) {
      l.fromBufferAttribute(n, v),
        u.fromBufferAttribute(n, b),
        f.fromBufferAttribute(n, P),
        h.fromBufferAttribute(s, v),
        d.fromBufferAttribute(s, b),
        _.fromBufferAttribute(s, P),
        u.sub(l),
        f.sub(l),
        d.sub(h),
        _.sub(h);
      const U = 1 / (d.x * _.y - _.x * d.y);
      isFinite(U) &&
        (S.copy(u)
          .multiplyScalar(_.y)
          .addScaledVector(f, -d.y)
          .multiplyScalar(U),
        m
          .copy(f)
          .multiplyScalar(d.x)
          .addScaledVector(u, -_.x)
          .multiplyScalar(U),
        o[v].add(S),
        o[b].add(S),
        o[P].add(S),
        c[v].add(m),
        c[b].add(m),
        c[P].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: e.count }]);
    for (let v = 0, b = A.length; v < b; ++v) {
      const P = A[v],
        U = P.start,
        B = P.count;
      for (let V = U, I = U + B; V < I; V += 3)
        p(e.getX(V + 0), e.getX(V + 1), e.getX(V + 2));
    }
    const w = new L(),
      M = new L(),
      E = new L(),
      y = new L();
    function R(v) {
      E.fromBufferAttribute(r, v), y.copy(E);
      const b = o[v];
      w.copy(b),
        w.sub(E.multiplyScalar(E.dot(b))).normalize(),
        M.crossVectors(y, b);
      const U = M.dot(c[v]) < 0 ? -1 : 1;
      a.setXYZW(v, w.x, w.y, w.z, U);
    }
    for (let v = 0, b = A.length; v < b; ++v) {
      const P = A[v],
        U = P.start,
        B = P.count;
      for (let V = U, I = U + B; V < I; V += 3)
        R(e.getX(V + 0)), R(e.getX(V + 1)), R(e.getX(V + 2));
    }
    this._transformed = !0;
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0 || n.count !== t.count)
        (n = new qt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let h = 0, d = n.count; h < d; h++) n.setXYZ(h, 0, 0, 0);
      const r = new L(),
        s = new L(),
        a = new L(),
        o = new L(),
        c = new L(),
        l = new L(),
        u = new L(),
        f = new L();
      if (e)
        for (let h = 0, d = e.count; h < d; h += 3) {
          const _ = e.getX(h + 0),
            S = e.getX(h + 1),
            m = e.getX(h + 2);
          r.fromBufferAttribute(t, _),
            s.fromBufferAttribute(t, S),
            a.fromBufferAttribute(t, m),
            u.subVectors(a, s),
            f.subVectors(r, s),
            u.cross(f),
            o.fromBufferAttribute(n, _),
            c.fromBufferAttribute(n, S),
            l.fromBufferAttribute(n, m),
            o.add(u),
            c.add(u),
            l.add(u),
            n.setXYZ(_, o.x, o.y, o.z),
            n.setXYZ(S, c.x, c.y, c.z),
            n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let h = 0, d = t.count; h < d; h += 3)
          r.fromBufferAttribute(t, h + 0),
            s.fromBufferAttribute(t, h + 1),
            a.fromBufferAttribute(t, h + 2),
            u.subVectors(a, s),
            f.subVectors(r, s),
            u.cross(f),
            n.setXYZ(h + 0, u.x, u.y, u.z),
            n.setXYZ(h + 1, u.x, u.y, u.z),
            n.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      St.fromBufferAttribute(e, t),
        St.normalize(),
        e.setXYZ(t, St.x, St.y, St.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        u = o.itemSize,
        f = o.normalized,
        h = new l.constructor(c.length * u);
      let d = 0,
        _ = 0;
      for (let S = 0, m = c.length; S < m; S++) {
        o.isInterleavedBufferAttribute
          ? (d = c[S] * o.data.stride + o.offset)
          : (d = c[S] * u);
        for (let p = 0; p < u; p++) h[_++] = l[d++];
      }
      return new qt(h, u, f);
    }
    if (this.index === null)
      return (
        ye(
          "BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Pt(),
      n = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const c = r[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [],
        l = s[o];
      for (let u = 0, f = l.length; u < f; u++) {
        const h = l[u],
          d = e(h, n);
        c.push(d);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type =
        this.parameters !== void 0 && this._transformed === !0
          ? "BufferGeometry"
          : this.type),
      (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0 && this._transformed !== !0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        u = [];
      for (let f = 0, h = l.length; f < h; f++) {
        const d = l[f];
        u.push(d.toJSON(e.data));
      }
      u.length > 0 && ((r[c] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const u = [],
        f = s[l];
      for (let h = 0, d = f.length; h < d; h++) u.push(f[h].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const f = a[l];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      (this._transformed = e._transformed),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Up {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = Wt());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Wt()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Wt()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        ));
    const t = {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride,
    };
    return (t.usage = this.usage), t;
  }
}
const Rt = new L();
class ka {
  constructor(e, t, n, r = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = r);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Rt.fromBufferAttribute(this, t),
        Rt.applyMatrix4(e),
        this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Rt.fromBufferAttribute(this, t),
        Rt.applyNormalMatrix(e),
        this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Rt.fromBufferAttribute(this, t),
        Rt.transformDirection(e),
        this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Ht(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Qe(n, this.array)),
      (this.data.array[e * this.data.stride + this.offset + t] = n),
      this
    );
  }
  setX(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Ht(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = Qe(t, this.array)), (n = Qe(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Qe(t, this.array)),
        (n = Qe(n, this.array)),
        (r = Qe(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Qe(t, this.array)),
        (n = Qe(n, this.array)),
        (r = Qe(r, this.array)),
        (s = Qe(s, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = r),
      (this.data.array[e + 3] = s),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      ir(
        "InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[r + s]);
      }
      return new qt(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new ka(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      ir(
        "InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
const Lr = new L(),
  sl = new L(),
  al = new De();
class Sn {
  constructor(e = new L(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Lr.subVectors(n, t).cross(sl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t, n = !0) {
    const r = e.delta(Lr),
      s = this.normal.dot(r);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / s;
    return n === !0 && (a < 0 || a > 1)
      ? null
      : t.copy(e.start).addScaledVector(r, a);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || al.getNormalMatrix(e),
      r = this.coplanarPoint(Lr).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { normal: this.normal.toArray(), constant: this.constant };
  }
  fromJSON(e) {
    return this.normal.fromArray(e.normal), (this.constant = e.constant), this;
  }
}
let ol = 0;
class En extends Pn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: ol++ }),
      (this.uuid = Wt()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Ne(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = 7680),
      (this.stencilZFail = 7680),
      (this.stencilZPass = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          ye(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          ye(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : (r && r.isVector2 && n && n.isVector2) ||
            (r && r.isEuler && n && n.isEuler) ||
            (r && r.isVector3 && n && n.isVector3)
          ? r.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      (n.blending = this.blending),
      (n.side = this.side),
      (n.shadowSide = this.shadowSide),
      (n.vertexColors = this.vertexColors),
      (n.opacity = this.opacity),
      (n.transparent = this.transparent),
      (n.blendSrc = this.blendSrc),
      (n.blendDst = this.blendDst),
      (n.blendEquation = this.blendEquation),
      (n.blendSrcAlpha = this.blendSrcAlpha),
      (n.blendDstAlpha = this.blendDstAlpha),
      (n.blendEquationAlpha = this.blendEquationAlpha),
      (n.blendColor = this.blendColor.getHex()),
      (n.blendAlpha = this.blendAlpha),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.clipIntersection = this.clipIntersection),
      (n.clipShadows = this.clipShadows),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      (n.stencilWrite = this.stencilWrite),
      (n.polygonOffset = this.polygonOffset),
      (n.polygonOffsetFactor = this.polygonOffsetFactor),
      (n.polygonOffsetUnits = this.polygonOffsetUnits),
      (n.dithering = this.dithering),
      (n.alphaTest = this.alphaTest),
      (n.alphaHash = this.alphaHash),
      (n.alphaToCoverage = this.alphaToCoverage),
      (n.premultipliedAlpha = this.premultipliedAlpha),
      (n.forceSinglePass = this.forceSinglePass),
      (n.allowOverride = this.allowOverride),
      (n.visible = this.visible),
      (n.toneMapped = this.toneMapped),
      (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.sheenColorMap &&
        this.sheenColorMap.isTexture &&
        (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
      this.sheenRoughnessMap &&
        this.sheenRoughnessMap.isTexture &&
        (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.retroreflectivity !== void 0 &&
        (n.retroreflectivity = this.retroreflectivity),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      Array.isArray(this.clippingPlanes) &&
        this.clippingPlanes.length > 0 &&
        (n.clippingPlanes = this.clippingPlanes.map((s) => s.toJSON())),
      this.rotation !== void 0 && (n.rotation = this.rotation),
      this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking),
      this.linewidth !== void 0 && (n.linewidth = this.linewidth),
      this.linecap !== void 0 && (n.linecap = this.linecap),
      this.linejoin !== void 0 && (n.linejoin = this.linejoin),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.wireframe !== void 0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth !== void 0 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== void 0 &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== void 0 &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading !== void 0 && (n.flatShading = this.flatShading),
      this.fog !== void 0 && (n.fog = this.fog),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures),
        a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  fromJSON(e, t) {
    if (
      (e.uuid !== void 0 && (this.uuid = e.uuid),
      e.name !== void 0 && (this.name = e.name),
      e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color),
      e.roughness !== void 0 && (this.roughness = e.roughness),
      e.metalness !== void 0 && (this.metalness = e.metalness),
      e.sheen !== void 0 && (this.sheen = e.sheen),
      e.sheenColor !== void 0 &&
        (this.sheenColor = new Ne().setHex(e.sheenColor)),
      e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness),
      e.emissive !== void 0 &&
        this.emissive !== void 0 &&
        this.emissive.setHex(e.emissive),
      e.specular !== void 0 &&
        this.specular !== void 0 &&
        this.specular.setHex(e.specular),
      e.specularIntensity !== void 0 &&
        (this.specularIntensity = e.specularIntensity),
      e.specularColor !== void 0 &&
        this.specularColor !== void 0 &&
        this.specularColor.setHex(e.specularColor),
      e.shininess !== void 0 && (this.shininess = e.shininess),
      e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat),
      e.clearcoatRoughness !== void 0 &&
        (this.clearcoatRoughness = e.clearcoatRoughness),
      e.dispersion !== void 0 && (this.dispersion = e.dispersion),
      e.retroreflectivity !== void 0 &&
        (this.retroreflectivity = e.retroreflectivity),
      e.iridescence !== void 0 && (this.iridescence = e.iridescence),
      e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR),
      e.iridescenceThicknessRange !== void 0 &&
        (this.iridescenceThicknessRange = e.iridescenceThicknessRange),
      e.transmission !== void 0 && (this.transmission = e.transmission),
      e.thickness !== void 0 && (this.thickness = e.thickness),
      e.attenuationDistance !== void 0 &&
        (this.attenuationDistance = e.attenuationDistance),
      e.attenuationColor !== void 0 &&
        this.attenuationColor !== void 0 &&
        this.attenuationColor.setHex(e.attenuationColor),
      e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy),
      e.anisotropyRotation !== void 0 &&
        (this.anisotropyRotation = e.anisotropyRotation),
      e.fog !== void 0 && (this.fog = e.fog),
      e.flatShading !== void 0 && (this.flatShading = e.flatShading),
      e.blending !== void 0 && (this.blending = e.blending),
      e.combine !== void 0 && (this.combine = e.combine),
      e.side !== void 0 && (this.side = e.side),
      e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      e.transparent !== void 0 && (this.transparent = e.transparent),
      e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest),
      e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash),
      e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc),
      e.depthTest !== void 0 && (this.depthTest = e.depthTest),
      e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite),
      e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite),
      e.clippingPlanes !== void 0 &&
        (this.clippingPlanes = e.clippingPlanes.map((n) =>
          new Sn().fromJSON(n)
        )),
      e.clipIntersection !== void 0 &&
        (this.clipIntersection = e.clipIntersection),
      e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows),
      e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking),
      e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc),
      e.blendDst !== void 0 && (this.blendDst = e.blendDst),
      e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation),
      e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha),
      e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha),
      e.blendEquationAlpha !== void 0 &&
        (this.blendEquationAlpha = e.blendEquationAlpha),
      e.blendColor !== void 0 &&
        this.blendColor !== void 0 &&
        this.blendColor.setHex(e.blendColor),
      e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha),
      e.stencilWriteMask !== void 0 &&
        (this.stencilWriteMask = e.stencilWriteMask),
      e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc),
      e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef),
      e.stencilFuncMask !== void 0 &&
        (this.stencilFuncMask = e.stencilFuncMask),
      e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail),
      e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail),
      e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass),
      e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite),
      e.wireframe !== void 0 && (this.wireframe = e.wireframe),
      e.wireframeLinewidth !== void 0 &&
        (this.wireframeLinewidth = e.wireframeLinewidth),
      e.wireframeLinecap !== void 0 &&
        (this.wireframeLinecap = e.wireframeLinecap),
      e.wireframeLinejoin !== void 0 &&
        (this.wireframeLinejoin = e.wireframeLinejoin),
      e.rotation !== void 0 && (this.rotation = e.rotation),
      e.linewidth !== void 0 && (this.linewidth = e.linewidth),
      e.linecap !== void 0 && (this.linecap = e.linecap),
      e.linejoin !== void 0 && (this.linejoin = e.linejoin),
      e.dashSize !== void 0 && (this.dashSize = e.dashSize),
      e.gapSize !== void 0 && (this.gapSize = e.gapSize),
      e.scale !== void 0 && (this.scale = e.scale),
      e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset),
      e.polygonOffsetFactor !== void 0 &&
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
      e.polygonOffsetUnits !== void 0 &&
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
      e.dithering !== void 0 && (this.dithering = e.dithering),
      e.alphaToCoverage !== void 0 &&
        (this.alphaToCoverage = e.alphaToCoverage),
      e.premultipliedAlpha !== void 0 &&
        (this.premultipliedAlpha = e.premultipliedAlpha),
      e.forceSinglePass !== void 0 &&
        (this.forceSinglePass = e.forceSinglePass),
      e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride),
      e.visible !== void 0 && (this.visible = e.visible),
      e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped),
      e.userData !== void 0 && (this.userData = e.userData),
      e.vertexColors !== void 0 &&
        (typeof e.vertexColors == "number"
          ? (this.vertexColors = e.vertexColors > 0)
          : (this.vertexColors = e.vertexColors)),
      e.size !== void 0 && (this.size = e.size),
      e.sizeAttenuation !== void 0 &&
        (this.sizeAttenuation = e.sizeAttenuation),
      e.map !== void 0 && (this.map = t[e.map] || null),
      e.matcap !== void 0 && (this.matcap = t[e.matcap] || null),
      e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null),
      e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null),
      e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale),
      e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null),
      e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType),
      e.normalScale !== void 0)
    ) {
      let n = e.normalScale;
      Array.isArray(n) === !1 && (n = [n, n]),
        (this.normalScale = new Re().fromArray(n));
    }
    return (
      e.displacementMap !== void 0 &&
        (this.displacementMap = t[e.displacementMap] || null),
      e.displacementScale !== void 0 &&
        (this.displacementScale = e.displacementScale),
      e.displacementBias !== void 0 &&
        (this.displacementBias = e.displacementBias),
      e.roughnessMap !== void 0 &&
        (this.roughnessMap = t[e.roughnessMap] || null),
      e.metalnessMap !== void 0 &&
        (this.metalnessMap = t[e.metalnessMap] || null),
      e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null),
      e.emissiveIntensity !== void 0 &&
        (this.emissiveIntensity = e.emissiveIntensity),
      e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null),
      e.specularIntensityMap !== void 0 &&
        (this.specularIntensityMap = t[e.specularIntensityMap] || null),
      e.specularColorMap !== void 0 &&
        (this.specularColorMap = t[e.specularColorMap] || null),
      e.envMap !== void 0 && (this.envMap = t[e.envMap] || null),
      e.envMapRotation !== void 0 &&
        this.envMapRotation.fromArray(e.envMapRotation),
      e.envMapIntensity !== void 0 &&
        (this.envMapIntensity = e.envMapIntensity),
      e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity),
      e.refractionRatio !== void 0 &&
        (this.refractionRatio = e.refractionRatio),
      e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null),
      e.lightMapIntensity !== void 0 &&
        (this.lightMapIntensity = e.lightMapIntensity),
      e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null),
      e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity),
      e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null),
      e.clearcoatMap !== void 0 &&
        (this.clearcoatMap = t[e.clearcoatMap] || null),
      e.clearcoatRoughnessMap !== void 0 &&
        (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null),
      e.clearcoatNormalMap !== void 0 &&
        (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null),
      e.clearcoatNormalScale !== void 0 &&
        (this.clearcoatNormalScale = new Re().fromArray(
          e.clearcoatNormalScale
        )),
      e.iridescenceMap !== void 0 &&
        (this.iridescenceMap = t[e.iridescenceMap] || null),
      e.iridescenceThicknessMap !== void 0 &&
        (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null),
      e.transmissionMap !== void 0 &&
        (this.transmissionMap = t[e.transmissionMap] || null),
      e.thicknessMap !== void 0 &&
        (this.thicknessMap = t[e.thicknessMap] || null),
      e.anisotropyMap !== void 0 &&
        (this.anisotropyMap = t[e.anisotropyMap] || null),
      e.sheenColorMap !== void 0 &&
        (this.sheenColorMap = t[e.sheenColorMap] || null),
      e.sheenRoughnessMap !== void 0 &&
        (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.allowOverride = e.allowOverride),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const an = new L(),
  Dr = new L(),
  Ii = new L(),
  Ni = new L();
class or {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, an)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = an.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (an.copy(this.origin).addScaledVector(this.direction, t),
        an.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Dr.copy(e).add(t).multiplyScalar(0.5),
      Ii.copy(t).sub(e).normalize(),
      Ni.copy(this.origin).sub(Dr);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Ii),
      o = Ni.dot(this.direction),
      c = -Ni.dot(Ii),
      l = Ni.lengthSq(),
      u = Math.abs(1 - a * a);
    let f, h, d, _;
    if (u > 0)
      if (((f = a * c - o), (h = a * o - c), (_ = s * u), f >= 0))
        if (h >= -_)
          if (h <= _) {
            const S = 1 / u;
            (f *= S),
              (h *= S),
              (d = f * (f + a * h + 2 * o) + h * (a * f + h + 2 * c) + l);
          } else
            (h = s),
              (f = Math.max(0, -(a * h + o))),
              (d = -f * f + h * (h + 2 * c) + l);
        else
          (h = -s),
            (f = Math.max(0, -(a * h + o))),
            (d = -f * f + h * (h + 2 * c) + l);
      else
        h <= -_
          ? ((f = Math.max(0, -(-a * s + o))),
            (h = f > 0 ? -s : Math.min(Math.max(-s, -c), s)),
            (d = -f * f + h * (h + 2 * c) + l))
          : h <= _
          ? ((f = 0),
            (h = Math.min(Math.max(-s, -c), s)),
            (d = h * (h + 2 * c) + l))
          : ((f = Math.max(0, -(a * s + o))),
            (h = f > 0 ? s : Math.min(Math.max(-s, -c), s)),
            (d = -f * f + h * (h + 2 * c) + l));
    else
      (h = a > 0 ? -s : s),
        (f = Math.max(0, -(a * h + o))),
        (d = -f * f + h * (h + 2 * c) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, f),
      r && r.copy(Dr).addScaledVector(Ii, h),
      d
    );
  }
  intersectSphere(e, t) {
    if (e.radius < 0) return null;
    an.subVectors(e.center, this.origin);
    const n = an.dot(this.direction),
      r = an.dot(an) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r),
      o = n - a,
      c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0
      ? !1
      : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, c;
    const l = 1 / this.direction.x,
      u = 1 / this.direction.y,
      f = 1 / this.direction.z,
      h = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - h.x) * l), (r = (e.max.x - h.x) * l))
        : ((n = (e.max.x - h.x) * l), (r = (e.min.x - h.x) * l)),
      u >= 0
        ? ((s = (e.min.y - h.y) * u), (a = (e.max.y - h.y) * u))
        : ((s = (e.max.y - h.y) * u), (a = (e.min.y - h.y) * u)),
      n > a ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (a < r || isNaN(r)) && (r = a),
      f >= 0
        ? ((o = (e.min.z - h.z) * f), (c = (e.max.z - h.z) * f))
        : ((o = (e.max.z - h.z) * f), (c = (e.min.z - h.z) * f)),
      n > c || o > r) ||
      ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, an) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    const a = this.origin,
      o = this.direction,
      c = o.x,
      l = o.y,
      u = o.z,
      f = e.x - a.x,
      h = e.y - a.y,
      d = e.z - a.z,
      _ = t.x - a.x,
      S = t.y - a.y,
      m = t.z - a.z,
      p = n.x - a.x,
      A = n.y - a.y,
      w = n.z - a.z,
      M = Math.abs(c),
      E = Math.abs(l),
      y = Math.abs(u);
    let R, v, b, P, U, B, V, I, H, K, J, ne;
    if (
      (M >= E && M >= y
        ? ((b = c),
          (B = f),
          (H = _),
          (ne = p),
          c >= 0
            ? ((R = l),
              (v = u),
              (P = h),
              (U = d),
              (V = S),
              (I = m),
              (K = A),
              (J = w))
            : ((R = u),
              (v = l),
              (P = d),
              (U = h),
              (V = m),
              (I = S),
              (K = w),
              (J = A)))
        : E >= y
        ? ((b = l),
          (B = h),
          (H = S),
          (ne = A),
          l >= 0
            ? ((R = u),
              (v = c),
              (P = d),
              (U = f),
              (V = m),
              (I = _),
              (K = w),
              (J = p))
            : ((R = c),
              (v = u),
              (P = f),
              (U = d),
              (V = _),
              (I = m),
              (K = p),
              (J = w)))
        : ((b = u),
          (B = d),
          (H = m),
          (ne = w),
          u >= 0
            ? ((R = c),
              (v = l),
              (P = f),
              (U = h),
              (V = _),
              (I = S),
              (K = p),
              (J = A))
            : ((R = l),
              (v = c),
              (P = h),
              (U = f),
              (V = S),
              (I = _),
              (K = A),
              (J = p))),
      b === 0)
    )
      return null;
    const X = R / b,
      j = v / b,
      te = 1 / b,
      we = P - X * B,
      be = U - j * B,
      it = V - X * H,
      We = I - j * H,
      Ye = K - X * ne,
      q = J - j * ne,
      Q = Ye * We - q * it,
      _e = we * q - be * Ye,
      Le = it * be - We * we;
    if (r) {
      if (Q < 0 || _e < 0 || Le < 0) return null;
    } else if ((Q < 0 || _e < 0 || Le < 0) && (Q > 0 || _e > 0 || Le > 0))
      return null;
    const me = Q + _e + Le;
    if (me === 0) return null;
    const Oe = te * (Q * B + _e * H + Le * ne);
    return (me > 0 ? Oe < 0 : Oe > 0) ? null : this.at(Oe / me, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Wa extends En {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ne(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new hn()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Gs = new Ve(),
  Rn = new or(),
  Ui = new un(),
  zs = new L(),
  Fi = new L(),
  Bi = new L(),
  Oi = new L(),
  Ir = new L(),
  Gi = new L(),
  Vs = new L(),
  zi = new L();
class Bt extends ht {
  constructor(e = new Pt(), t = new Wa()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Gi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const u = o[c],
          f = s[c];
        u !== 0 &&
          (Ir.fromBufferAttribute(f, e),
          a ? Gi.addScaledVector(Ir, u) : Gi.addScaledVector(Ir.sub(t), u));
      }
      t.add(Gi);
    }
    return t;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ui.copy(n.boundingSphere),
      Ui.applyMatrix4(s),
      Rn.copy(e.ray).recast(e.near),
      !(
        Ui.containsPoint(Rn.origin) === !1 &&
        (Rn.intersectSphere(Ui, zs) === null ||
          Rn.origin.distanceToSquared(zs) > (e.far - e.near) ** 2)
      ) &&
        (Gs.copy(s).invert(),
        Rn.copy(e.ray).applyMatrix4(Gs),
        !(n.boundingBox !== null && Rn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Rn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry,
      a = this.material,
      o = s.index,
      c = s.attributes.position,
      l = s.attributes.uv,
      u = s.attributes.uv1,
      f = s.attributes.normal,
      h = s.groups,
      d = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, S = h.length; _ < S; _++) {
          const m = h[_],
            p = a[m.materialIndex],
            A = Math.max(m.start, d.start),
            w = Math.min(
              o.count,
              Math.min(m.start + m.count, d.start + d.count)
            );
          for (let M = A, E = w; M < E; M += 3) {
            const y = o.getX(M),
              R = o.getX(M + 1),
              v = o.getX(M + 2);
            (r = Vi(this, p, e, n, l, u, f, y, R, v)),
              r &&
                ((r.faceIndex = Math.floor(M / 3)),
                (r.face.materialIndex = m.materialIndex),
                t.push(r));
          }
        }
      else {
        const _ = Math.max(0, d.start),
          S = Math.min(o.count, d.start + d.count);
        for (let m = _, p = S; m < p; m += 3) {
          const A = o.getX(m),
            w = o.getX(m + 1),
            M = o.getX(m + 2);
          (r = Vi(this, a, e, n, l, u, f, A, w, M)),
            r && ((r.faceIndex = Math.floor(m / 3)), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, S = h.length; _ < S; _++) {
          const m = h[_],
            p = a[m.materialIndex],
            A = Math.max(m.start, d.start),
            w = Math.min(
              c.count,
              Math.min(m.start + m.count, d.start + d.count)
            );
          for (let M = A, E = w; M < E; M += 3) {
            const y = M,
              R = M + 1,
              v = M + 2;
            (r = Vi(this, p, e, n, l, u, f, y, R, v)),
              r &&
                ((r.faceIndex = Math.floor(M / 3)),
                (r.face.materialIndex = m.materialIndex),
                t.push(r));
          }
        }
      else {
        const _ = Math.max(0, d.start),
          S = Math.min(c.count, d.start + d.count);
        for (let m = _, p = S; m < p; m += 3) {
          const A = m,
            w = m + 1,
            M = m + 2;
          (r = Vi(this, a, e, n, l, u, f, A, w, M)),
            r && ((r.faceIndex = Math.floor(m / 3)), t.push(r));
        }
      }
  }
}
function ll(i, e, t, n, r, s, a, o) {
  let c;
  if (
    (e.side === 1
      ? (c = n.intersectTriangle(a, s, r, !0, o))
      : (c = n.intersectTriangle(r, s, a, e.side === 0, o)),
    c === null)
  )
    return null;
  zi.copy(o), zi.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(zi);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: zi.clone(), object: i };
}
function Vi(i, e, t, n, r, s, a, o, c, l) {
  i.getVertexPosition(o, Fi),
    i.getVertexPosition(c, Bi),
    i.getVertexPosition(l, Oi);
  const u = ll(i, e, t, n, Fi, Bi, Oi, Vs);
  if (u) {
    const f = new L();
    kt.getBarycoord(Vs, Fi, Bi, Oi, f),
      r && (u.uv = kt.getInterpolatedAttribute(r, o, c, l, f, new Re())),
      s && (u.uv1 = kt.getInterpolatedAttribute(s, o, c, l, f, new Re())),
      a &&
        ((u.normal = kt.getInterpolatedAttribute(a, o, c, l, f, new L())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = { a: o, b: c, c: l, normal: new L(), materialIndex: 0 };
    kt.getNormal(Fi, Bi, Oi, h.normal), (u.face = h), (u.barycoord = f);
  }
  return u;
}
const oi = new tt(),
  Hs = new tt(),
  ks = new tt(),
  cl = new tt(),
  Ws = new Ve(),
  Hi = new L(),
  Nr = new un(),
  Xs = new Ve(),
  Ur = new or();
class Fp extends Bt {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = Ts),
      (this.bindMatrix = new Ve()),
      (this.bindMatrixInverse = new Ve()),
      (this.boundingBox = null),
      (this.boundingSphere = null);
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new yn()),
      this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Hi), this.boundingBox.expandByPoint(Hi);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new un()),
      this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Hi), this.boundingSphere.expandByPoint(Hi);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  raycast(e, t) {
    const n = this.material,
      r = this.matrixWorld;
    n !== void 0 &&
      (this.boundingSphere === null && this.computeBoundingSphere(),
      Nr.copy(this.boundingSphere),
      Nr.applyMatrix4(r),
      e.ray.intersectsSphere(Nr) !== !1 &&
        (Xs.copy(r).invert(),
        Ur.copy(e.ray).applyMatrix4(Xs),
        !(
          this.boundingBox !== null && Ur.intersectsBox(this.boundingBox) === !1
        ) && this._computeIntersections(e, t, Ur)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new tt(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, r = t.count; n < r; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === Ts
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === Mo
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : ye("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton,
      r = this.geometry;
    Hs.fromBufferAttribute(r.attributes.skinIndex, e),
      ks.fromBufferAttribute(r.attributes.skinWeight, e),
      t.isVector4
        ? (oi.copy(t), t.set(0, 0, 0, 0))
        : (oi.set(...t, 1), t.set(0, 0, 0)),
      oi.applyMatrix4(this.bindMatrix);
    for (let s = 0; s < 4; s++) {
      const a = ks.getComponent(s);
      if (a !== 0) {
        const o = Hs.getComponent(s);
        Ws.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector(cl.copy(oi).applyMatrix4(Ws), a);
      }
    }
    return t.isVector4 && (t.w = oi.w), t.applyMatrix4(this.bindMatrixInverse);
  }
}
class hl extends ht {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class es extends bt {
  constructor(e = null, t = 1, n = 1, r, s, a, o, c, l = 1003, u = 1003, f, h) {
    super(null, a, o, c, l, u, r, s, f, h),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const qs = new Ve(),
  ul = new Ve();
class Xa {
  constructor(e = [], t = []) {
    (this.uuid = Wt()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      ye(
        "Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let n = 0, r = this.bones.length; n < r; n++)
        this.boneInverses.push(new Ve());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ve();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      r = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : ul;
      qs.multiplyMatrices(o, t[s]), qs.toArray(n, s * 16);
    }
    r !== null && (r.needsUpdate = !0);
  }
  clone() {
    return new Xa(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new es(t, e, e, 1023, 1015);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const r = this.bones[t];
      if (r.name === e) return r;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, r = e.bones.length; n < r; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 &&
        (ye("Skeleton: No bone found with UUID:", s), (a = new hl())),
        this.bones.push(a),
        this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let r = 0, s = t.length; r < s; r++) {
      const a = t[r];
      e.bones.push(a.uuid);
      const o = n[r];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Ys extends qt {
  constructor(e, t, n, r = 1) {
    super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = r);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const Wn = new Ve(),
  Ks = new Ve(),
  ki = [],
  Js = new yn(),
  dl = new Ve(),
  li = new Bt(),
  ci = new un();
class Bp extends Bt {
  constructor(e, t, n) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new Ys(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    for (let r = 0; r < n; r++) this.setMatrixAt(r, dl);
  }
  computeBoundingBox() {
    const e = this.geometry,
      t = this.count;
    this.boundingBox === null && (this.boundingBox = new yn()),
      e.boundingBox === null && e.computeBoundingBox(),
      this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Wn),
        Js.copy(e.boundingBox).applyMatrix4(Wn),
        this.boundingBox.union(Js);
  }
  computeBoundingSphere() {
    const e = this.geometry,
      t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new un()),
      e.boundingSphere === null && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Wn),
        ci.copy(e.boundingSphere).applyMatrix4(Wn),
        this.boundingSphere.union(ci);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    return this.instanceColor === null
      ? t.setRGB(1, 1, 1)
      : t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    return t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      r = this.morphTexture.source.data.data,
      s = n.length + 1,
      a = e * s + 1;
    for (let o = 0; o < n.length; o++) n[o] = r[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      r = this.count;
    if (
      ((li.geometry = this.geometry),
      (li.material = this.material),
      li.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        ci.copy(this.boundingSphere),
        ci.applyMatrix4(n),
        e.ray.intersectsSphere(ci) !== !1))
    )
      for (let s = 0; s < r; s++) {
        this.getMatrixAt(s, Wn),
          Ks.multiplyMatrices(n, Wn),
          (li.matrixWorld = Ks),
          li.raycast(e, ki);
        for (let a = 0, o = ki.length; a < o; a++) {
          const c = ki[a];
          (c.instanceId = s), (c.object = this), t.push(c);
        }
        ki.length = 0;
      }
  }
  setColorAt(e, t) {
    return (
      this.instanceColor === null &&
        (this.instanceColor = new Ys(
          new Float32Array(this.instanceMatrix.count * 3).fill(1),
          3
        )),
      t.toArray(this.instanceColor.array, e * 3),
      this
    );
  }
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      r = n.length + 1;
    this.morphTexture === null &&
      (this.morphTexture = new es(
        new Float32Array(r * this.count),
        r,
        this.count,
        1028,
        1015
      ));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++) a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      c = r * e;
    return (s[c] = o), s.set(n, c + 1), this;
  }
  updateMorphTargets() {}
  dispose() {
    super.dispose(),
      this.morphTexture !== null &&
        (this.morphTexture.dispose(), (this.morphTexture = null));
  }
}
const wn = new un(),
  fl = new Re(0.5, 0.5),
  Wi = new L();
class ts {
  constructor(
    e = new Sn(),
    t = new Sn(),
    n = new Sn(),
    r = new Sn(),
    s = new Sn(),
    a = new Sn()
  ) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(r),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3, n = !1) {
    const r = this.planes,
      s = e.elements,
      a = s[0],
      o = s[1],
      c = s[2],
      l = s[3],
      u = s[4],
      f = s[5],
      h = s[6],
      d = s[7],
      _ = s[8],
      S = s[9],
      m = s[10],
      p = s[11],
      A = s[12],
      w = s[13],
      M = s[14],
      E = s[15];
    if (
      (r[0].setComponents(l - a, d - u, p - _, E - A).normalize(),
      r[1].setComponents(l + a, d + u, p + _, E + A).normalize(),
      r[2].setComponents(l + o, d + f, p + S, E + w).normalize(),
      r[3].setComponents(l - o, d - f, p - S, E - w).normalize(),
      n)
    )
      r[4].setComponents(c, h, m, M).normalize(),
        r[5].setComponents(l - c, d - h, p - m, E - M).normalize();
    else if (
      (r[4].setComponents(l - c, d - h, p - m, E - M).normalize(), t === 2e3)
    )
      r[5].setComponents(l + c, d + h, p + m, E + M).normalize();
    else if (t === 2001) r[5].setComponents(c, h, m, M).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(wn);
  }
  intersectsSprite(e) {
    wn.center.set(0, 0, 0);
    const t = fl.distanceTo(e.center);
    return (
      (wn.radius = 0.7071067811865476 + t),
      wn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(wn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((Wi.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Wi.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Wi.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Wi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class pl extends En {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Ne(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const rr = new L(),
  sr = new L(),
  Zs = new Ve(),
  hi = new or(),
  Xi = new un(),
  Fr = new L(),
  $s = new L();
class qa extends ht {
  constructor(e = new Pt(), t = new pl()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        rr.fromBufferAttribute(t, r - 1),
          sr.fromBufferAttribute(t, r),
          (n[r] = n[r - 1]),
          (n[r] += rr.distanceTo(sr));
      e.setAttribute("lineDistance", new mt(n, 1));
    } else
      ye(
        "Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Xi.copy(n.boundingSphere),
      Xi.applyMatrix4(r),
      (Xi.radius += s),
      e.ray.intersectsSphere(Xi) === !1)
    )
      return;
    Zs.copy(r).invert(), hi.copy(e.ray).applyMatrix4(Zs);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = this.isLineSegments ? 2 : 1,
      u = n.index,
      h = n.attributes.position;
    if (u !== null) {
      const d = Math.max(0, a.start),
        _ = Math.min(u.count, a.start + a.count);
      for (let S = d, m = _ - 1; S < m; S += l) {
        const p = u.getX(S),
          A = u.getX(S + 1),
          w = qi(this, e, hi, c, p, A, S);
        w && t.push(w);
      }
      if (this.isLineLoop) {
        const S = u.getX(_ - 1),
          m = u.getX(d),
          p = qi(this, e, hi, c, S, m, _ - 1);
        p && t.push(p);
      }
    } else {
      const d = Math.max(0, a.start),
        _ = Math.min(h.count, a.start + a.count);
      for (let S = d, m = _ - 1; S < m; S += l) {
        const p = qi(this, e, hi, c, S, S + 1, S);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const S = qi(this, e, hi, c, _ - 1, d, _ - 1);
        S && t.push(S);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
function qi(i, e, t, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (
    (rr.fromBufferAttribute(o, r),
    sr.fromBufferAttribute(o, s),
    t.distanceSqToSegment(rr, sr, Fr, $s) > n)
  )
    return;
  Fr.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(Fr);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      point: $s.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i,
    };
}
const Qs = new L(),
  js = new L();
class Op extends qa {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        Qs.fromBufferAttribute(t, r),
          js.fromBufferAttribute(t, r + 1),
          (n[r] = r === 0 ? 0 : n[r - 1]),
          (n[r + 1] = n[r] + Qs.distanceTo(js));
      e.setAttribute("lineDistance", new mt(n, 1));
    } else
      ye(
        "LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class Gp extends qa {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class ml extends En {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Ne(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const ea = new Ve(),
  Kr = new or(),
  Yi = new un(),
  Ki = new L();
class zp extends ht {
  constructor(e = new Pt(), t = new ml()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Yi.copy(n.boundingSphere),
      Yi.applyMatrix4(r),
      (Yi.radius += s),
      e.ray.intersectsSphere(Yi) === !1)
    )
      return;
    ea.copy(r).invert(), Kr.copy(e.ray).applyMatrix4(ea);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = n.index,
      f = n.attributes.position;
    if (l !== null) {
      const h = Math.max(0, a.start),
        d = Math.min(l.count, a.start + a.count);
      for (let _ = h, S = d; _ < S; _++) {
        const m = l.getX(_);
        Ki.fromBufferAttribute(f, m), ta(Ki, m, c, r, e, t, this);
      }
    } else {
      const h = Math.max(0, a.start),
        d = Math.min(f.count, a.start + a.count);
      for (let _ = h, S = d; _ < S; _++)
        Ki.fromBufferAttribute(f, _), ta(Ki, _, c, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
function ta(i, e, t, n, r, s, a) {
  const o = Kr.distanceSqToPoint(i);
  if (o < t) {
    const c = new L();
    Kr.closestPointToPoint(i, c), c.applyMatrix4(n);
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a,
    });
  }
}
class Ya extends bt {
  constructor(e = [], t = 301, n, r, s, a, o, c, l, u) {
    super(e, t, n, r, s, a, o, c, l, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class xi extends bt {
  constructor(e, t, n = 1014, r, s, a, o = 1003, c = 1003, l, u = 1026, f = 1) {
    if (u !== 1026 && u !== 1027)
      throw new Error(
        "THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    const h = { width: e, height: t, depth: f };
    super(h, r, s, a, o, c, u, n, l),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.source = new jr(Object.assign({}, e.image))),
      (this.compareFunction = e.compareFunction),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.compareFunction = this.compareFunction), t;
  }
}
class gl extends xi {
  constructor(e, t = 1014, n = 301, r, s, a = 1003, o = 1003, c, l = 1026) {
    const u = { width: e, height: e, depth: 1 },
      f = [u, u, u, u, u, u];
    super(e, e, t, n, r, s, a, o, c, l),
      (this.image = f),
      (this.isCubeDepthTexture = !0),
      (this.isCubeTexture = !0);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Ka extends bt {
  constructor(e = null) {
    super(), (this.sourceTexture = e), (this.isExternalTexture = !0);
  }
  copy(e) {
    return super.copy(e), (this.sourceTexture = e.sourceTexture), this;
  }
}
class Si extends Pt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (a = Math.floor(a));
    const c = [],
      l = [],
      u = [],
      f = [];
    let h = 0,
      d = 0;
    _("z", "y", "x", -1, -1, n, t, e, a, s, 0),
      _("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
      _("x", "z", "y", 1, 1, e, n, t, r, a, 2),
      _("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
      _("x", "y", "z", 1, -1, e, t, n, r, s, 4),
      _("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
      this.setIndex(c),
      this.setAttribute("position", new mt(l, 3)),
      this.setAttribute("normal", new mt(u, 3)),
      this.setAttribute("uv", new mt(f, 2));
    function _(S, m, p, A, w, M, E, y, R, v, b) {
      const P = M / R,
        U = E / v,
        B = M / 2,
        V = E / 2,
        I = y / 2,
        H = R + 1,
        K = v + 1;
      let J = 0,
        ne = 0;
      const X = new L();
      for (let j = 0; j < K; j++) {
        const te = j * U - V;
        for (let we = 0; we < H; we++) {
          const be = we * P - B;
          (X[S] = be * A),
            (X[m] = te * w),
            (X[p] = I),
            l.push(X.x, X.y, X.z),
            (X[S] = 0),
            (X[m] = 0),
            (X[p] = y > 0 ? 1 : -1),
            u.push(X.x, X.y, X.z),
            f.push(we / R),
            f.push(1 - j / v),
            (J += 1);
        }
      }
      for (let j = 0; j < v; j++)
        for (let te = 0; te < R; te++) {
          const we = h + te + H * j,
            be = h + te + H * (j + 1),
            it = h + (te + 1) + H * (j + 1),
            We = h + (te + 1) + H * j;
          c.push(we, be, We), c.push(be, it, We), (ne += 6);
        }
      o.addGroup(d, ne, b), (d += ne), (h += J);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Si(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
class Ja extends Pt {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    r = 32,
    s = 1,
    a = !1,
    o = 0,
    c = Math.PI * 2
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: r,
        heightSegments: s,
        openEnded: a,
        thetaStart: o,
        thetaLength: c,
      });
    const l = this;
    (r = Math.floor(r)), (s = Math.floor(s));
    const u = [],
      f = [],
      h = [],
      d = [];
    let _ = 0;
    const S = [],
      m = n / 2;
    let p = 0;
    A(),
      a === !1 && (e > 0 && w(!0), t > 0 && w(!1)),
      this.setIndex(u),
      this.setAttribute("position", new mt(f, 3)),
      this.setAttribute("normal", new mt(h, 3)),
      this.setAttribute("uv", new mt(d, 2));
    function A() {
      const M = new L(),
        E = new L();
      let y = 0;
      const R = (t - e) / n;
      for (let v = 0; v <= s; v++) {
        const b = [],
          P = v / s,
          U = P * (t - e) + e;
        for (let B = 0; B <= r; B++) {
          const V = B / r,
            I = V * c + o,
            H = Math.sin(I),
            K = Math.cos(I);
          (E.x = U * H),
            (E.y = -P * n + m),
            (E.z = U * K),
            f.push(E.x, E.y, E.z),
            M.set(H, R, K).normalize(),
            h.push(M.x, M.y, M.z),
            d.push(V, 1 - P),
            b.push(_++);
        }
        S.push(b);
      }
      for (let v = 0; v < r; v++)
        for (let b = 0; b < s; b++) {
          const P = S[b][v],
            U = S[b + 1][v],
            B = S[b + 1][v + 1],
            V = S[b][v + 1];
          (e > 0 || b !== 0) && (u.push(P, U, V), (y += 3)),
            (t > 0 || b !== s - 1) && (u.push(U, B, V), (y += 3));
        }
      l.addGroup(p, y, 0), (p += y);
    }
    function w(M) {
      const E = _,
        y = new Re(),
        R = new L();
      let v = 0;
      const b = M === !0 ? e : t,
        P = M === !0 ? 1 : -1;
      for (let B = 1; B <= r; B++)
        f.push(0, m * P, 0), h.push(0, P, 0), d.push(0.5, 0.5), _++;
      const U = _;
      for (let B = 0; B <= r; B++) {
        const I = (B / r) * c + o,
          H = Math.cos(I),
          K = Math.sin(I);
        (R.x = b * K),
          (R.y = m * P),
          (R.z = b * H),
          f.push(R.x, R.y, R.z),
          h.push(0, P, 0),
          (y.x = H * 0.5 + 0.5),
          (y.y = K * 0.5 * P + 0.5),
          d.push(y.x, y.y),
          _++;
      }
      for (let B = 0; B < r; B++) {
        const V = E + B,
          I = U + B;
        M === !0 ? u.push(I, I + 1, V) : u.push(I + 1, I, V), (v += 3);
      }
      l.addGroup(p, v, M === !0 ? 1 : 2), (p += v);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Ja(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class en {
  constructor() {
    (this.type = "Curve"),
      (this.arcLengthDivisions = 200),
      (this.needsUpdate = !1),
      (this.cacheArcLengths = null);
  }
  getPoint() {
    ye("Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n,
      r = this.getPoint(0),
      s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      (n = this.getPoint(a / e)), (s += n.distanceTo(r)), t.push(s), (r = n);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let a;
    t ? (a = t) : (a = e * n[s - 1]);
    let o = 0,
      c = s - 1,
      l;
    for (; o <= c; )
      if (((r = Math.floor(o + (c - o) / 2)), (l = n[r] - a), l < 0)) o = r + 1;
      else if (l > 0) c = r - 1;
      else {
        c = r;
        break;
      }
    if (((r = c), n[r] === a)) return r / (s - 1);
    const u = n[r],
      h = n[r + 1] - u,
      d = (a - u) / h;
    return (r + d) / (s - 1);
  }
  getTangent(e, t) {
    let r = e - 1e-4,
      s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const a = this.getPoint(r),
      o = this.getPoint(s),
      c = t || (a.isVector2 ? new Re() : new L());
    return c.copy(o).sub(a).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t = !1) {
    const n = new L(),
      r = [],
      s = [],
      a = [],
      o = new L(),
      c = new Ve();
    for (let d = 0; d <= e; d++) {
      const _ = d / e;
      r[d] = this.getTangentAt(_, new L());
    }
    (s[0] = new L()), (a[0] = new L());
    let l = Number.MAX_VALUE;
    const u = Math.abs(r[0].x),
      f = Math.abs(r[0].y),
      h = Math.abs(r[0].z);
    u <= l && ((l = u), n.set(1, 0, 0)),
      f <= l && ((l = f), n.set(0, 1, 0)),
      h <= l && n.set(0, 0, 1),
      o.crossVectors(r[0], n).normalize(),
      s[0].crossVectors(r[0], o),
      a[0].crossVectors(r[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (
        ((s[d] = s[d - 1].clone()),
        (a[d] = a[d - 1].clone()),
        o.crossVectors(r[d - 1], r[d]),
        o.length() > Number.EPSILON)
      ) {
        o.normalize();
        const _ = Math.acos(Be(r[d - 1].dot(r[d]), -1, 1));
        s[d].applyMatrix4(c.makeRotationAxis(o, _));
      }
      a[d].crossVectors(r[d], s[d]);
    }
    if (t === !0) {
      let d = Math.acos(Be(s[0].dot(s[e]), -1, 1));
      (d /= e), r[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
      for (let _ = 1; _ <= e; _++)
        s[_].applyMatrix4(c.makeRotationAxis(r[_], d * _)),
          a[_].crossVectors(r[_], s[_]);
    }
    return { tangents: r, normals: s, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class Za extends en {
  constructor(
    e = 0,
    t = 0,
    n = 1,
    r = 1,
    s = 0,
    a = Math.PI * 2,
    o = !1,
    c = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = n),
      (this.yRadius = r),
      (this.aStartAngle = s),
      (this.aEndAngle = a),
      (this.aClockwise = o),
      (this.aRotation = c);
  }
  getPoint(e, t = new Re()) {
    const n = t,
      r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += r;
    for (; s > r; ) s -= r;
    s < Number.EPSILON && (a ? (s = 0) : (s = r)),
      this.aClockwise === !0 && !a && (s === r ? (s = -r) : (s = s - r));
    const o = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(o),
      l = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation),
        f = Math.sin(this.aRotation),
        h = c - this.aX,
        d = l - this.aY;
      (c = h * u - d * f + this.aX), (l = h * f + d * u + this.aY);
    }
    return n.set(c, l);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
class _l extends Za {
  constructor(e, t, n, r, s, a) {
    super(e, t, n, n, r, s, a),
      (this.isArcCurve = !0),
      (this.type = "ArcCurve");
  }
}
function ns() {
  let i = 0,
    e = 0,
    t = 0,
    n = 0;
  function r(s, a, o, c) {
    (i = s),
      (e = o),
      (t = -3 * s + 3 * a - 2 * o - c),
      (n = 2 * s - 2 * a + o + c);
  }
  return {
    initCatmullRom: function (s, a, o, c, l) {
      r(a, o, l * (o - s), l * (c - a));
    },
    initNonuniformCatmullRom: function (s, a, o, c, l, u, f) {
      let h = (a - s) / l - (o - s) / (l + u) + (o - a) / u,
        d = (o - a) / u - (c - a) / (u + f) + (c - o) / f;
      (h *= u), (d *= u), r(a, o, h, d);
    },
    calc: function (s) {
      const a = s * s,
        o = a * s;
      return i + e * s + t * a + n * o;
    },
  };
}
const na = new L(),
  ia = new L(),
  Br = new ns(),
  Or = new ns(),
  Gr = new ns();
class vl extends en {
  constructor(e = [], t = !1, n = "centripetal", r = 0.5) {
    super(),
      (this.isCatmullRomCurve3 = !0),
      (this.type = "CatmullRomCurve3"),
      (this.points = e),
      (this.closed = t),
      (this.curveType = n),
      (this.tension = r);
  }
  getPoint(e, t = new L()) {
    const n = t,
      r = this.points,
      s = r.length,
      a = (s - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a),
      c = a - o;
    this.closed
      ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s)
      : c === 0 && o === s - 1 && ((o = s - 2), (c = 1));
    let l, u;
    this.closed || o > 0
      ? (l = r[(o - 1) % s])
      : (ia.subVectors(r[0], r[1]).add(r[0]), (l = ia));
    const f = r[o % s],
      h = r[(o + 1) % s];
    if (
      (this.closed || o + 2 < s
        ? (u = r[(o + 2) % s])
        : (na.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), (u = na)),
      this.curveType === "centripetal" || this.curveType === "chordal")
    ) {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let _ = Math.pow(l.distanceToSquared(f), d),
        S = Math.pow(f.distanceToSquared(h), d),
        m = Math.pow(h.distanceToSquared(u), d);
      S < 1e-4 && (S = 1),
        _ < 1e-4 && (_ = S),
        m < 1e-4 && (m = S),
        Br.initNonuniformCatmullRom(l.x, f.x, h.x, u.x, _, S, m),
        Or.initNonuniformCatmullRom(l.y, f.y, h.y, u.y, _, S, m),
        Gr.initNonuniformCatmullRom(l.z, f.z, h.z, u.z, _, S, m);
    } else
      this.curveType === "catmullrom" &&
        (Br.initCatmullRom(l.x, f.x, h.x, u.x, this.tension),
        Or.initCatmullRom(l.y, f.y, h.y, u.y, this.tension),
        Gr.initCatmullRom(l.z, f.z, h.z, u.z, this.tension));
    return n.set(Br.calc(c), Or.calc(c), Gr.calc(c)), n;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return (
      (e.closed = this.closed),
      (e.curveType = this.curveType),
      (e.tension = this.tension),
      e
    );
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new L().fromArray(r));
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
}
function ra(i, e, t, n, r) {
  const s = (n - e) * 0.5,
    a = (r - t) * 0.5,
    o = i * i,
    c = i * o;
  return (
    (2 * t - 2 * n + s + a) * c + (-3 * t + 3 * n - 2 * s - a) * o + s * i + t
  );
}
function xl(i, e) {
  const t = 1 - i;
  return t * t * e;
}
function Sl(i, e) {
  return 2 * (1 - i) * i * e;
}
function Ml(i, e) {
  return i * i * e;
}
function gi(i, e, t, n) {
  return xl(i, e) + Sl(i, t) + Ml(i, n);
}
function yl(i, e) {
  const t = 1 - i;
  return t * t * t * e;
}
function El(i, e) {
  const t = 1 - i;
  return 3 * t * t * i * e;
}
function Tl(i, e) {
  return 3 * (1 - i) * i * i * e;
}
function bl(i, e) {
  return i * i * i * e;
}
function _i(i, e, t, n, r) {
  return yl(i, e) + El(i, t) + Tl(i, n) + bl(i, r);
}
class Al extends en {
  constructor(e = new Re(), t = new Re(), n = new Re(), r = new Re()) {
    super(),
      (this.isCubicBezierCurve = !0),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = r);
  }
  getPoint(e, t = new Re()) {
    const n = t,
      r = this.v0,
      s = this.v1,
      a = this.v2,
      o = this.v3;
    return n.set(_i(e, r.x, s.x, a.x, o.x), _i(e, r.y, s.y, a.y, o.y)), n;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class Rl extends en {
  constructor(e = new L(), t = new L(), n = new L(), r = new L()) {
    super(),
      (this.isCubicBezierCurve3 = !0),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = r);
  }
  getPoint(e, t = new L()) {
    const n = t,
      r = this.v0,
      s = this.v1,
      a = this.v2,
      o = this.v3;
    return (
      n.set(
        _i(e, r.x, s.x, a.x, o.x),
        _i(e, r.y, s.y, a.y, o.y),
        _i(e, r.z, s.z, a.z, o.z)
      ),
      n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class wl extends en {
  constructor(e = new Re(), t = new Re()) {
    super(),
      (this.isLineCurve = !0),
      (this.type = "LineCurve"),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new Re()) {
    const n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new Re()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class Cl extends en {
  constructor(e = new L(), t = new L()) {
    super(),
      (this.isLineCurve3 = !0),
      (this.type = "LineCurve3"),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new L()) {
    const n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new L()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class Pl extends en {
  constructor(e = new Re(), t = new Re(), n = new Re()) {
    super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new Re()) {
    const n = t,
      r = this.v0,
      s = this.v1,
      a = this.v2;
    return n.set(gi(e, r.x, s.x, a.x), gi(e, r.y, s.y, a.y)), n;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class $a extends en {
  constructor(e = new L(), t = new L(), n = new L()) {
    super(),
      (this.isQuadraticBezierCurve3 = !0),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new L()) {
    const n = t,
      r = this.v0,
      s = this.v1,
      a = this.v2;
    return (
      n.set(gi(e, r.x, s.x, a.x), gi(e, r.y, s.y, a.y), gi(e, r.z, s.z, a.z)), n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class Ll extends en {
  constructor(e = []) {
    super(),
      (this.isSplineCurve = !0),
      (this.type = "SplineCurve"),
      (this.points = e);
  }
  getPoint(e, t = new Re()) {
    const n = t,
      r = this.points,
      s = (r.length - 1) * e,
      a = Math.floor(s),
      o = s - a,
      c = r[a === 0 ? a : a - 1],
      l = r[a],
      u = r[a > r.length - 2 ? r.length - 1 : a + 1],
      f = r[a > r.length - 3 ? r.length - 1 : a + 2];
    return n.set(ra(o, c.x, l.x, u.x, f.x), ra(o, c.y, l.y, u.y, f.y)), n;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new Re().fromArray(r));
    }
    return this;
  }
}
var Jr = Object.freeze({
  __proto__: null,
  ArcCurve: _l,
  CatmullRomCurve3: vl,
  CubicBezierCurve: Al,
  CubicBezierCurve3: Rl,
  EllipseCurve: Za,
  LineCurve: wl,
  LineCurve3: Cl,
  QuadraticBezierCurve: Pl,
  QuadraticBezierCurve3: $a,
  SplineCurve: Ll,
});
class Vp extends en {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new Jr[n](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const n = e * this.getLength(),
      r = this.getCurveLengths();
    let s = 0;
    for (; s < r.length; ) {
      if (r[s] >= n) {
        const a = r[s] - n,
          o = this.curves[s],
          c = o.getLength(),
          l = c === 0 ? 0 : 1 - a / c;
        return o.getPointAt(l, t);
      }
      s++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, r = this.curves.length; n < r; n++)
      (t += this.curves[n].getLength()), e.push(t);
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let r = 0, s = this.curves; r < s.length; r++) {
      const a = s[r],
        o = a.isEllipseCurve
          ? e * 2
          : a.isLineCurve || a.isLineCurve3
          ? 1
          : a.isSplineCurve
          ? e * a.points.length
          : e,
        c = a.getPoints(o);
      for (let l = 0; l < c.length; l++) {
        const u = c[l];
        (n && n.equals(u)) || (t.push(u), (n = u));
      }
    }
    return (
      this.autoClose &&
        t.length > 1 &&
        !t[t.length - 1].equals(t[0]) &&
        t.push(t[0]),
      t
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const r = e.curves[t];
      this.curves.push(r.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const r = this.curves[t];
      e.curves.push(r.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const r = e.curves[t];
      this.curves.push(new Jr[r.type]().fromJSON(r));
    }
    return this;
  }
}
class lr extends Pt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      c = Math.floor(r),
      l = o + 1,
      u = c + 1,
      f = e / o,
      h = t / c,
      d = [],
      _ = [],
      S = [],
      m = [];
    for (let p = 0; p < u; p++) {
      const A = p * h - a;
      for (let w = 0; w < l; w++) {
        const M = w * f - s;
        _.push(M, -A, 0), S.push(0, 0, 1), m.push(w / o), m.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let A = 0; A < o; A++) {
        const w = A + l * p,
          M = A + l * (p + 1),
          E = A + 1 + l * (p + 1),
          y = A + 1 + l * p;
        d.push(w, M, y), d.push(M, E, y);
      }
    this.setIndex(d),
      this.setAttribute("position", new mt(_, 3)),
      this.setAttribute("normal", new mt(S, 3)),
      this.setAttribute("uv", new mt(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new lr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Qa extends Pt {
  constructor(
    e = 1,
    t = 0.4,
    n = 12,
    r = 48,
    s = Math.PI * 2,
    a = 0,
    o = Math.PI * 2
  ) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: r,
        arc: s,
        thetaStart: a,
        thetaLength: o,
      }),
      (n = Math.floor(n)),
      (r = Math.floor(r));
    const c = [],
      l = [],
      u = [],
      f = [],
      h = new L(),
      d = new L(),
      _ = new L();
    for (let S = 0; S <= n; S++) {
      const m = a + (S / n) * o;
      for (let p = 0; p <= r; p++) {
        const A = (p / r) * s;
        (d.x = (e + t * Math.cos(m)) * Math.cos(A)),
          (d.y = (e + t * Math.cos(m)) * Math.sin(A)),
          (d.z = t * Math.sin(m)),
          l.push(d.x, d.y, d.z),
          (h.x = e * Math.cos(A)),
          (h.y = e * Math.sin(A)),
          _.subVectors(d, h).normalize(),
          u.push(_.x, _.y, _.z),
          f.push(p / r),
          f.push(S / n);
      }
    }
    for (let S = 1; S <= n; S++)
      for (let m = 1; m <= r; m++) {
        const p = (r + 1) * S + m - 1,
          A = (r + 1) * (S - 1) + m - 1,
          w = (r + 1) * (S - 1) + m,
          M = (r + 1) * S + m;
        c.push(p, A, M), c.push(A, w, M);
      }
    this.setIndex(c),
      this.setAttribute("position", new mt(l, 3)),
      this.setAttribute("normal", new mt(u, 3)),
      this.setAttribute("uv", new mt(f, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Qa(
      e.radius,
      e.tube,
      e.radialSegments,
      e.tubularSegments,
      e.arc,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class ja extends Pt {
  constructor(
    e = new $a(new L(-1, -1, 0), new L(-1, 1, 0), new L(1, 1, 0)),
    t = 64,
    n = 1,
    r = 8,
    s = !1
  ) {
    super(),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: e,
        tubularSegments: t,
        radius: n,
        radialSegments: r,
        closed: s,
      });
    const a = e.computeFrenetFrames(t, s);
    (this.tangents = a.tangents),
      (this.normals = a.normals),
      (this.binormals = a.binormals);
    const o = new L(),
      c = new L(),
      l = new Re();
    let u = new L();
    const f = [],
      h = [],
      d = [],
      _ = [];
    S(),
      this.setIndex(_),
      this.setAttribute("position", new mt(f, 3)),
      this.setAttribute("normal", new mt(h, 3)),
      this.setAttribute("uv", new mt(d, 2));
    function S() {
      for (let w = 0; w < t; w++) m(w);
      m(s === !1 ? t : 0), A(), p();
    }
    function m(w) {
      u = e.getPointAt(w / t, u);
      const M = a.normals[w],
        E = a.binormals[w];
      for (let y = 0; y <= r; y++) {
        const R = (y / r) * Math.PI * 2,
          v = Math.sin(R),
          b = -Math.cos(R);
        (c.x = b * M.x + v * E.x),
          (c.y = b * M.y + v * E.y),
          (c.z = b * M.z + v * E.z),
          c.normalize(),
          h.push(c.x, c.y, c.z),
          (o.x = u.x + n * c.x),
          (o.y = u.y + n * c.y),
          (o.z = u.z + n * c.z),
          f.push(o.x, o.y, o.z);
      }
    }
    function p() {
      for (let w = 1; w <= t; w++)
        for (let M = 1; M <= r; M++) {
          const E = (r + 1) * (w - 1) + (M - 1),
            y = (r + 1) * w + (M - 1),
            R = (r + 1) * w + M,
            v = (r + 1) * (w - 1) + M;
          _.push(E, y, v), _.push(y, R, v);
        }
    }
    function A() {
      for (let w = 0; w <= t; w++)
        for (let M = 0; M <= r; M++)
          (l.x = w / t), (l.y = M / r), d.push(l.x, l.y);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (e.path = this.parameters.path.toJSON()), e;
  }
  static fromJSON(e) {
    return new ja(
      new Jr[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
function jn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (sa(r))
        r.isRenderTargetTexture
          ? (ye(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone());
      else if (Array.isArray(r))
        if (sa(r[0])) {
          const s = [];
          for (let a = 0, o = r.length; a < o; a++) s[a] = r[a].clone();
          e[t][n] = s;
        } else e[t][n] = r.slice();
      else e[t][n] = r;
    }
  }
  return e;
}
function wt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = jn(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function sa(i) {
  return (
    i &&
    (i.isColor ||
      i.isMatrix3 ||
      i.isMatrix4 ||
      i.isVector2 ||
      i.isVector3 ||
      i.isVector4 ||
      i.isTexture ||
      i.isQuaternion)
  );
}
function Dl(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function eo(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
    ? e.texture.colorSpace
    : ke.workingColorSpace;
}
const Il = { clone: jn, merge: wt };
var Nl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Ul = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class jt extends En {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Nl),
      (this.fragmentShader = Ul),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = jn(e.uniforms)),
      (this.uniformsGroups = Dl(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      (this.defaultAttributeValues = Object.assign(
        {},
        e.defaultAttributeValues
      )),
      (this.index0AttributeName = e.index0AttributeName),
      (this.uniformsNeedUpdate = e.uniformsNeedUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[r] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[r] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[r] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[r] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[r] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[r] = { type: "m4", value: a.toArray() })
        : (t.uniforms[r] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
  fromJSON(e, t) {
    if ((super.fromJSON(e, t), e.uniforms !== void 0))
      for (const n in e.uniforms) {
        const r = e.uniforms[n];
        switch (((this.uniforms[n] = {}), r.type)) {
          case "t":
            this.uniforms[n].value = t[r.value] || null;
            break;
          case "c":
            this.uniforms[n].value = new Ne().setHex(r.value);
            break;
          case "v2":
            this.uniforms[n].value = new Re().fromArray(r.value);
            break;
          case "v3":
            this.uniforms[n].value = new L().fromArray(r.value);
            break;
          case "v4":
            this.uniforms[n].value = new tt().fromArray(r.value);
            break;
          case "m3":
            this.uniforms[n].value = new De().fromArray(r.value);
            break;
          case "m4":
            this.uniforms[n].value = new Ve().fromArray(r.value);
            break;
          default:
            this.uniforms[n].value = r.value;
        }
      }
    if (
      (e.defines !== void 0 && (this.defines = e.defines),
      e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader),
      e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader),
      e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion),
      e.extensions !== void 0)
    )
      for (const n in e.extensions) this.extensions[n] = e.extensions[n];
    return (
      e.lights !== void 0 && (this.lights = e.lights),
      e.clipping !== void 0 && (this.clipping = e.clipping),
      this
    );
  }
}
class Fl extends jt {
  constructor(e) {
    super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial");
  }
}
class Bl extends En {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new Ne(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ne(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new Re(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new hn()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Hp extends Bl {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Re(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return Be((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Ne(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Ne(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Ne(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._retroreflectivity = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e);
  }
  get retroreflectivity() {
    return this._retroreflectivity;
  }
  set retroreflectivity(e) {
    this._retroreflectivity > 0 != e > 0 && this.version++,
      (this._retroreflectivity = e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.dispersion = e.dispersion),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.retroreflectivity = e.retroreflectivity),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
class kp extends En {
  constructor(e) {
    super(),
      (this.isMeshLambertMaterial = !0),
      (this.type = "MeshLambertMaterial"),
      (this.color = new Ne(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ne(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new Re(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new hn()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.envMapIntensity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.envMapIntensity = e.envMapIntensity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Ol extends En {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Gl extends En {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
function Mn(i, e) {
  return !i || i.constructor === e
    ? i
    : typeof e.BYTES_PER_ELEMENT == "number"
    ? new e(i)
    : Array.prototype.slice.call(i);
}
function ji(i) {
  return i !== void 0 && i.inTangents !== void 0 && i.outTangents !== void 0;
}
function zl(i) {
  function e(r, s) {
    return i[r] - i[s];
  }
  const t = i.length,
    n = new Array(t);
  for (let r = 0; r !== t; ++r) n[r] = r;
  return n.sort(e), n;
}
function aa(i, e, t) {
  const n = i.length,
    r = new i.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c) r[a++] = i[o + c];
  }
  return r;
}
function Vl(i, e, t, n) {
  let r = 1,
    s = i[0];
  for (; s !== void 0 && s[n] === void 0; ) s = i[r++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        (a = s[n]),
          a !== void 0 && (e.push(s.time), t.push(...a)),
          (s = i[r++]);
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        (a = s[n]),
          a !== void 0 && (e.push(s.time), a.toArray(t, t.length)),
          (s = i[r++]);
      while (s !== void 0);
    else
      do (a = s[n]), a !== void 0 && (e.push(s.time), t.push(a)), (s = i[r++]);
      while (s !== void 0);
}
class Mi {
  constructor(e, t, n, r) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = r !== void 0 ? r : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      r = t[n],
      s = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < r)) {
            for (let o = n + 2; ; ) {
              if (r === void 0) {
                if (e < s) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === o) break;
              if (((s = r), (r = t[++n]), e < r)) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && ((n = 2), (s = o));
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === c) break;
              if (((r = s), (s = t[--n - 1]), e >= s)) break e;
            }
            (a = n), (n = 0);
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((r = t[n]), (s = t[n - 1]), s === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (r === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, s, r);
    }
    return this.interpolate_(n, s, e, r);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      r = this.valueSize,
      s = e * r;
    for (let a = 0; a !== r; ++a) t[a] = n[s + a];
    return t;
  }
  interpolate_() {
    throw new Error("THREE.Interpolant: Call to abstract method.");
  }
  intervalChanged_() {}
}
class Hl extends Mi {
  constructor(e, t, n, r) {
    super(e, t, n, r),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 });
  }
  intervalChanged_(e, t, n) {
    const r = this.parameterPositions;
    let s = e - 2,
      a = e + 1,
      o = r[s],
      c = r[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case 2401:
          (s = e), (o = 2 * t - n);
          break;
        case 2402:
          (s = r.length - 2), (o = t + r[s] - r[s + 1]);
          break;
        default:
          (s = e), (o = n);
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          (a = e), (c = 2 * n - t);
          break;
        case 2402:
          (a = 1), (c = n + r[1] - r[0]);
          break;
        default:
          (a = e - 1), (c = t);
      }
    const l = (n - t) * 0.5,
      u = this.valueSize;
    (this._weightPrev = l / (t - o)),
      (this._weightNext = l / (c - n)),
      (this._offsetPrev = s * u),
      (this._offsetNext = a * u);
  }
  interpolate_(e, t, n, r) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      u = this._offsetPrev,
      f = this._offsetNext,
      h = this._weightPrev,
      d = this._weightNext,
      _ = (n - t) / (r - t),
      S = _ * _,
      m = S * _,
      p = -h * m + 2 * h * S - h * _,
      A = (1 + h) * m + (-1.5 - 2 * h) * S + (-0.5 + h) * _ + 1,
      w = (-1 - d) * m + (1.5 + d) * S + 0.5 * _,
      M = d * m - d * S;
    for (let E = 0; E !== o; ++E)
      s[E] = p * a[u + E] + A * a[l + E] + w * a[c + E] + M * a[f + E];
    return s;
  }
}
class kl extends Mi {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e, t, n, r) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      u = (n - t) / (r - t),
      f = 1 - u;
    for (let h = 0; h !== o; ++h) s[h] = a[l + h] * f + a[c + h] * u;
    return s;
  }
}
class Wl extends Mi {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Xl extends Mi {
  interpolate_(e, t, n, r) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      u = this.inTangents,
      f = this.outTangents;
    if (!u || !f) {
      const _ = (n - t) / (r - t),
        S = 1 - _;
      for (let m = 0; m !== o; ++m) s[m] = a[l + m] * S + a[c + m] * _;
      return s;
    }
    const h = o * 2,
      d = e - 1;
    for (let _ = 0; _ !== o; ++_) {
      const S = a[l + _],
        m = a[c + _],
        p = d * h + _ * 2,
        A = f[p],
        w = f[p + 1],
        M = e * h + _ * 2,
        E = u[M],
        y = u[M + 1],
        R = Yl(n, t, A, E, r);
      s[_] = to(R, S, w, y, m);
    }
    return s;
  }
}
function to(i, e, t, n, r) {
  const s = 1 - i;
  return s * s * s * e + 3 * s * s * i * t + 3 * s * i * i * n + i * i * i * r;
}
function ql(i, e, t, n, r) {
  const s = 1 - i;
  return 3 * s * s * (t - e) + 6 * s * i * (n - t) + 3 * i * i * (r - n);
}
function Yl(i, e, t, n, r) {
  let s = (i - e) / (r - e);
  for (let a = 0; a < 8; a++) {
    const o = to(s, e, t, n, r) - i;
    if (Math.abs(o) < 1e-10) break;
    const c = ql(s, e, t, n, r);
    if (Math.abs(c) < 1e-10) break;
    s = Math.max(0, Math.min(1, s - o / c));
  }
  return s;
}
class Yt {
  constructor(e, t, n, r) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = Mn(t, this.TimeBufferType)),
      (this.values = Mn(n, this.ValueBufferType)),
      this.setInterpolation(r || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Mn(e.times, Array),
        values: Mn(e.values, Array),
      };
      const r = e.getInterpolation();
      r !== e.DefaultInterpolation && (n.interpolation = r),
        ji(e.settings) &&
          (n.settings = {
            inTangents: Mn(e.settings.inTangents, Array),
            outTangents: Mn(e.settings.outTangents, Array),
          });
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Wl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new kl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Hl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    const t = new Xl(this.times, this.values, this.getValueSize(), e);
    return (
      this.settings &&
        ((t.inTangents = this.settings.inTangents),
        (t.outTangents = this.settings.outTangents)),
      t
    );
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case 2303:
        t = this.InterpolantFactoryMethodBezier;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return ye("KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
      case this.InterpolantFactoryMethodBezier:
        return 2303;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
      ji(this.settings) &&
        (oa(this.settings.inTangents, e), oa(this.settings.outTangents, e));
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      r = n.length;
    let s = 0,
      a = r - 1;
    for (; s !== r && n[s] < e; ) ++s;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, s !== 0 || a !== r)) {
      s >= a && ((a = Math.max(a, 1)), (s = a - 1));
      const o = this.getValueSize();
      (this.times = n.slice(s, a)),
        (this.values = this.values.slice(s * o, a * o));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (Pe("KeyframeTrack: Invalid value size in track.", this), (e = !1));
    const n = this.times,
      r = this.values,
      s = n.length;
    s === 0 && (Pe("KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== s; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        Pe("KeyframeTrack: Time is not a valid number.", this, o, c), (e = !1);
        break;
      }
      if (a !== null && a > c) {
        Pe("KeyframeTrack: Out of order keys.", this, o, c, a), (e = !1);
        break;
      }
      a = c;
    }
    if (r !== void 0 && Eo(r))
      for (let o = 0, c = r.length; o !== c; ++o) {
        const l = r[o];
        if (isNaN(l)) {
          Pe("KeyframeTrack: Value is not a valid number.", this, o, l),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      r = this.getInterpolation() === 2302,
      s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let c = !1;
      const l = e[o],
        u = e[o + 1];
      if (l !== u && (o !== 1 || l !== e[0]))
        if (r) c = !0;
        else {
          const f = o * n,
            h = f - n,
            d = f + n;
          for (let _ = 0; _ !== n; ++_) {
            const S = t[f + _];
            if (S !== t[h + _] || S !== t[d + _]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const f = o * n,
            h = a * n;
          for (let d = 0; d !== n; ++d) t[h + d] = t[f + d];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, c = a * n, l = 0; l !== n; ++l) t[c + l] = t[o + l];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      r = new n(this.name, e, t);
    return (
      (r.createInterpolant = this.createInterpolant),
      ji(this.settings) &&
        (r.settings = {
          inTangents: this.settings.inTangents.slice(),
          outTangents: this.settings.outTangents.slice(),
        }),
      r
    );
  }
}
function oa(i, e) {
  for (let t = 0, n = i.length; t !== n; t += 2) i[t] *= e;
}
Yt.prototype.ValueTypeName = "";
Yt.prototype.TimeBufferType = Float32Array;
Yt.prototype.ValueBufferType = Float32Array;
Yt.prototype.DefaultInterpolation = 2301;
class ei extends Yt {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ei.prototype.ValueTypeName = "bool";
ei.prototype.ValueBufferType = Array;
ei.prototype.DefaultInterpolation = 2300;
ei.prototype.InterpolantFactoryMethodLinear = void 0;
ei.prototype.InterpolantFactoryMethodSmooth = void 0;
class no extends Yt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
}
no.prototype.ValueTypeName = "color";
class is extends Yt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
}
is.prototype.ValueTypeName = "number";
class Kl extends Mi {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e, t, n, r) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = (n - t) / (r - t);
    let l = e * o;
    for (let u = l + o; l !== u; l += 4) Ln.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class rs extends Yt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Kl(this.times, this.values, this.getValueSize(), e);
  }
}
rs.prototype.ValueTypeName = "quaternion";
rs.prototype.InterpolantFactoryMethodSmooth = void 0;
class ti extends Yt {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ti.prototype.ValueTypeName = "string";
ti.prototype.ValueBufferType = Array;
ti.prototype.DefaultInterpolation = 2300;
ti.prototype.InterpolantFactoryMethodLinear = void 0;
ti.prototype.InterpolantFactoryMethodSmooth = void 0;
class io extends Yt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
}
io.prototype.ValueTypeName = "vector";
class Wp {
  constructor(e = "", t = -1, n = [], r = 2500) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = r),
      (this.uuid = Wt()),
      (this.userData = {}),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      r = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(Zl(n[a]).scale(r));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return (s.uuid = e.uuid), (s.userData = JSON.parse(e.userData || "{}")), s;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      r = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
        userData: JSON.stringify(e.userData),
      };
    for (let s = 0, a = n.length; s !== a; ++s) t.push(Yt.toJSON(n[s]));
    return r;
  }
  static CreateFromMorphTargetSequence(e, t, n, r) {
    const s = t.length,
      a = [];
    for (let o = 0; o < s; o++) {
      let c = [],
        l = [];
      c.push((o + s - 1) % s, o, (o + 1) % s), l.push(0, 1, 0);
      const u = zl(c);
      (c = aa(c, 1, u)),
        (l = aa(l, 1, u)),
        !r && c[0] === 0 && (c.push(s), l.push(l[0])),
        a.push(
          new is(".morphTargetInfluences[" + t[o].name + "]", c, l).scale(1 / n)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const r = e;
      n = (r.geometry && r.geometry.animations) || r.animations;
    }
    for (let r = 0; r < n.length; r++) if (n[r].name === t) return n[r];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const r = {},
      s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        u = l.name.match(s);
      if (u && u.length > 1) {
        const f = u[1];
        let h = r[f];
        h || (r[f] = h = []), h.push(l);
      }
    }
    const a = [];
    for (const o in r)
      a.push(this.CreateFromMorphTargetSequence(o, r[o], t, n));
    return a;
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, r = e.length; n !== r; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let n = 0; n < this.tracks.length; n++) e.push(this.tracks[n].clone());
    const t = new this.constructor(this.name, this.duration, e, this.blendMode);
    return (t.userData = JSON.parse(JSON.stringify(this.userData))), t;
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Jl(i) {
  switch (i.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return is;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return io;
    case "color":
      return no;
    case "quaternion":
      return rs;
    case "bool":
    case "boolean":
      return ei;
    case "string":
      return ti;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i);
}
function Zl(i) {
  if (i.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Jl(i.type);
  if (i.times === void 0) {
    const n = [],
      r = [];
    Vl(i.keys, n, r, "value"), (i.times = n), (i.values = r);
  }
  let t;
  return (
    e.parse !== void 0
      ? (t = e.parse(i))
      : (t = new e(i.name, i.times, i.values, i.interpolation)),
    ji(i.settings) &&
      (t.settings = {
        inTangents: Mn(i.settings.inTangents, Float32Array),
        outTangents: Mn(i.settings.outTangents, Float32Array),
      }),
    t
  );
}
const ln = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (la(i) || (this.files[i] = e));
  },
  get: function (i) {
    if (this.enabled !== !1 && !la(i)) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
function la(i) {
  try {
    const e = i.slice(i.indexOf(":") + 1);
    return new URL(e).protocol === "blob:";
  } catch {
    return !1;
  }
}
class $l {
  constructor(e, t, n) {
    const r = this;
    let s = !1,
      a = 0,
      o = 0,
      c;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this._abortController = null),
      (this.itemStart = function (u) {
        o++, s === !1 && r.onStart !== void 0 && r.onStart(u, a, o), (s = !0);
      }),
      (this.itemEnd = function (u) {
        a++,
          r.onProgress !== void 0 && r.onProgress(u, a, o),
          a === o && ((s = !1), r.onLoad !== void 0 && r.onLoad());
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return (u = u.normalize("NFC")), c ? c(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (c = u), this;
      }),
      (this.addHandler = function (u, f) {
        return l.push(u, f), this;
      }),
      (this.removeHandler = function (u) {
        const f = l.indexOf(u);
        return f !== -1 && l.splice(f, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let f = 0, h = l.length; f < h; f += 2) {
          const d = l[f],
            _ = l[f + 1];
          if ((d.global && (d.lastIndex = 0), d.test(u))) return _;
        }
        return null;
      }),
      (this.abort = function () {
        return (
          this.abortController.abort(), (this._abortController = null), this
        );
      });
  }
  get abortController() {
    return (
      this._abortController || (this._abortController = new AbortController()),
      this._abortController
    );
  }
}
const Ql = new $l();
class yi {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Ql),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {}),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
  abort() {
    return this;
  }
}
yi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const on = {};
class jl extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class Xp extends yi {
  constructor(e) {
    super(e),
      (this.mimeType = ""),
      (this.responseType = ""),
      (this._abortController = new AbortController());
  }
  load(e, t, n, r) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = ln.get(`file:${e}`);
    if (s !== void 0) {
      this.manager.itemStart(e),
        setTimeout(() => {
          t && t(s), this.manager.itemEnd(e);
        }, 0);
      return;
    }
    if (on[e] !== void 0) {
      on[e].push({ onLoad: t, onProgress: n, onError: r });
      return;
    }
    (on[e] = []), on[e].push({ onLoad: t, onProgress: n, onError: r });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
        signal:
          typeof AbortSignal.any == "function"
            ? AbortSignal.any([
                this._abortController.signal,
                this.manager.abortController.signal,
              ])
            : this._abortController.signal,
      }),
      o = this.mimeType,
      c = this.responseType;
    fetch(a)
      .then((l) => {
        if (l.status === 200 || l.status === 0) {
          if (
            (l.status === 0 && ye("FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              l.body === void 0 ||
              l.body.getReader === void 0)
          )
            return l;
          const u = on[e],
            f = l.body.getReader(),
            h = l.headers.get("X-File-Size") || l.headers.get("Content-Length"),
            d = h ? parseInt(h) : 0,
            _ = d !== 0;
          let S = 0;
          const m = new ReadableStream({
            start(p) {
              A();
              function A() {
                f.read().then(
                  ({ done: w, value: M }) => {
                    if (w) p.close();
                    else {
                      S += M.byteLength;
                      const E = new ProgressEvent("progress", {
                        lengthComputable: _,
                        loaded: S,
                        total: d,
                      });
                      for (let y = 0, R = u.length; y < R; y++) {
                        const v = u[y];
                        v.onProgress && v.onProgress(E);
                      }
                      p.enqueue(M), A();
                    }
                  },
                  (w) => {
                    p.error(w);
                  }
                );
              }
            },
          });
          return new Response(m);
        } else
          throw new jl(
            `fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,
            l
          );
      })
      .then((l) => {
        switch (c) {
          case "arraybuffer":
            return l.arrayBuffer();
          case "blob":
            return l.blob();
          case "document":
            return l.text().then((u) => new DOMParser().parseFromString(u, o));
          case "json":
            return l.json();
          default:
            if (o === "") return l.text();
            {
              const f = /charset="?([^;"\s]*)"?/i.exec(o),
                h = f && f[1] ? f[1].toLowerCase() : void 0,
                d = new TextDecoder(h);
              return l.arrayBuffer().then((_) => d.decode(_));
            }
        }
      })
      .then((l) => {
        ln.add(`file:${e}`, l);
        const u = on[e];
        delete on[e];
        for (let f = 0, h = u.length; f < h; f++) {
          const d = u[f];
          d.onLoad && d.onLoad(l);
        }
      })
      .catch((l) => {
        const u = on[e];
        if (u === void 0) throw (this.manager.itemError(e), l);
        delete on[e];
        for (let f = 0, h = u.length; f < h; f++) {
          const d = u[f];
          d.onError && d.onError(l);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
  abort() {
    return (
      this._abortController.abort(),
      (this._abortController = new AbortController()),
      this
    );
  }
}
const Xn = new WeakMap();
class ec extends yi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = ln.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === !0)
        s.manager.itemStart(e),
          setTimeout(function () {
            t && t(a), s.manager.itemEnd(e);
          }, 0);
      else {
        let f = Xn.get(a);
        f === void 0 && ((f = []), Xn.set(a, f)),
          f.push({ onLoad: t, onError: r });
      }
      return a;
    }
    const o = vi("img");
    function c() {
      u(), t && t(this);
      const f = Xn.get(this) || [];
      for (let h = 0; h < f.length; h++) {
        const d = f[h];
        d.onLoad && d.onLoad(this);
      }
      Xn.delete(this), s.manager.itemEnd(e);
    }
    function l(f) {
      u(), r && r(f), ln.remove(`image:${e}`);
      const h = Xn.get(this) || [];
      for (let d = 0; d < h.length; d++) {
        const _ = h[d];
        _.onError && _.onError(f);
      }
      Xn.delete(this), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", c, !1),
        o.removeEventListener("error", l, !1);
    }
    return (
      o.addEventListener("load", c, !1),
      o.addEventListener("error", l, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      ln.add(`image:${e}`, o),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class qp extends yi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new bt(),
      a = new ec(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        r
      ),
      s
    );
  }
}
class cr extends ht {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ne(e)),
      (this.intensity = t);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      t
    );
  }
}
class Yp extends cr {
  constructor(e, t, n) {
    super(e, n),
      (this.isHemisphereLight = !0),
      (this.type = "HemisphereLight"),
      this.position.copy(ht.DEFAULT_UP),
      this.updateMatrix(),
      (this.groundColor = new Ne(t));
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.groundColor = this.groundColor.getHex()), t;
  }
}
const zr = new Ve(),
  ca = new L(),
  ha = new L();
class ss {
  constructor(e) {
    (this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.biasNode = null),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Re(512, 512)),
      (this.mapType = 1009),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Ve()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new ts()),
      (this._frameExtents = new Re(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new tt(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getCamera() {
    return this.camera;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera;
    ca.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(ca),
      ha.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(ha),
      t.updateMatrixWorld(),
      this._updateMatrix(t, this.matrix, this._frustum);
  }
  _updateMatrix(e, t, n, r) {
    zr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      n.setFromProjectionMatrix(zr, e.coordinateSystem, e.reversedDepth);
    const s = this._frameExtents,
      a = r ? r.z / s.x : 1,
      o = r ? r.w / s.y : 1,
      c = r ? r.x / s.x : 0,
      l = r ? r.y / s.y : 0;
    e.coordinateSystem === 2001 || e.reversedDepth
      ? t.set(
          0.5 * a,
          0,
          0,
          0.5 * a + c,
          0,
          0.5 * o,
          0,
          0.5 * o + l,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        )
      : t.set(
          0.5 * a,
          0,
          0,
          0.5 * a + c,
          0,
          0.5 * o,
          0,
          0.5 * o + l,
          0,
          0,
          0.5,
          0.5,
          0,
          0,
          0,
          1
        ),
      t.multiply(zr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      (this.autoUpdate = e.autoUpdate),
      (this.needsUpdate = e.needsUpdate),
      (this.normalBias = e.normalBias),
      (this.blurSamples = e.blurSamples),
      this.mapSize.copy(e.mapSize),
      (this.biasNode = e.biasNode),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      (e.intensity = this.intensity),
      (e.bias = this.bias),
      (e.normalBias = this.normalBias),
      (e.radius = this.radius),
      (e.blurSamples = this.blurSamples),
      (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
const Ji = new L(),
  Zi = new Ln(),
  Zt = new L();
class ro extends ht {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Ve()),
      (this.projectionMatrix = new Ve()),
      (this.projectionMatrixInverse = new Ve()),
      (this.coordinateSystem = 2e3),
      (this._reversedDepth = !1);
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorld.decompose(Ji, Zi, Zt),
      Zt.x === 1 && Zt.y === 1 && Zt.z === 1
        ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
        : this.matrixWorldInverse.compose(Ji, Zi, Zt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, n = !1) {
    super.updateWorldMatrix(e, t, n),
      this.matrixWorld.decompose(Ji, Zi, Zt),
      Zt.x === 1 && Zt.y === 1 && Zt.z === 1
        ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
        : this.matrixWorldInverse.compose(Ji, Zi, Zt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const xn = new L(),
  ua = new Re(),
  da = new Re();
class It extends ro {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Qn * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(pi * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Qn * 2 * Math.atan(Math.tan(pi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    xn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(xn.x, xn.y).multiplyScalar(-e / xn.z),
      xn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(xn.x, xn.y).multiplyScalar(-e / xn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, ua, da), t.subVectors(da, ua);
  }
  setViewOffset(e, t, n, r, s, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(pi * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      (s += (a.offsetX * r) / c),
        (t -= (a.offsetY * n) / l),
        (r *= a.width / c),
        (n *= a.height / l);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
        this.reversedDepth
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
class tc extends ss {
  constructor() {
    super(new It(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1),
      (this.aspect = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = Qn * 2 * e.angle * this.focus,
      r = (this.mapSize.width / this.mapSize.height) * this.aspect,
      s = e.distance || t.far;
    (n !== t.fov || r !== t.aspect || s !== t.far) &&
      ((t.fov = n), (t.aspect = r), (t.far = s), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return (
      super.copy(e), (this.focus = e.focus), (this.aspect = e.aspect), this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (e.focus = this.focus), (e.aspect = this.aspect), e;
  }
}
class Kp extends cr {
  constructor(e, t, n = 0, r = Math.PI / 3, s = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(ht.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new ht()),
      (this.distance = n),
      (this.angle = r),
      (this.penumbra = s),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new tc());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.map = e.map),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.distance = this.distance),
      (t.object.angle = this.angle),
      (t.object.decay = this.decay),
      (t.object.penumbra = this.penumbra),
      (t.object.target = this.target.uuid),
      this.map &&
        this.map.isTexture &&
        (t.object.map = this.map.toJSON(e).uuid),
      (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
class nc extends ss {
  constructor() {
    super(new It(90, 1, 0.5, 500)), (this.isPointLightShadow = !0);
  }
}
class Jp extends cr {
  constructor(e, t, n = 0, r = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = r),
      (this.shadow = new nc());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.distance = this.distance),
      (t.object.decay = this.decay),
      (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
class as extends ro {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = r + t,
      c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += l * this.view.offsetX),
        (a = s + l * this.view.width),
        (o -= u * this.view.offsetY),
        (c = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      a,
      o,
      c,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class ic extends ss {
  constructor() {
    super(new as(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class Zp extends cr {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(ht.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new ht()),
      (this.shadow = new ic());
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.shadow = this.shadow.toJSON()),
      (t.object.target = this.target.uuid),
      t
    );
  }
}
class $p {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
const Vr = new WeakMap();
class Qp extends yi {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > "u" &&
        ye("ImageBitmapLoader: createImageBitmap() not supported."),
      typeof fetch > "u" && ye("ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" }),
      (this._abortController = new AbortController());
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, r) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = ln.get(`image-bitmap:${e}`);
    if (a !== void 0) {
      if ((s.manager.itemStart(e), a.then)) {
        a.then((l) => {
          Vr.has(a) === !0
            ? (r && r(Vr.get(a)), s.manager.itemError(e), s.manager.itemEnd(e))
            : (t && t(l), s.manager.itemEnd(e));
        });
        return;
      }
      setTimeout(function () {
        t && t(a), s.manager.itemEnd(e);
      }, 0);
      return;
    }
    const o = {};
    (o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      (o.signal =
        typeof AbortSignal.any == "function"
          ? AbortSignal.any([
              this._abortController.signal,
              this.manager.abortController.signal,
            ])
          : this._abortController.signal);
    const c = fetch(e, o)
      .then(function (l) {
        return l.blob();
      })
      .then(function (l) {
        return createImageBitmap(
          l,
          Object.assign({}, s.options, { colorSpaceConversion: "none" })
        );
      })
      .then(function (l) {
        return (
          ln.add(`image-bitmap:${e}`, l), t && t(l), s.manager.itemEnd(e), l
        );
      })
      .catch(function (l) {
        r && r(l),
          Vr.set(c, l),
          ln.remove(`image-bitmap:${e}`),
          s.manager.itemError(e),
          s.manager.itemEnd(e);
      });
    ln.add(`image-bitmap:${e}`, c), s.manager.itemStart(e);
  }
  abort() {
    return (
      this._abortController.abort(),
      (this._abortController = new AbortController()),
      this
    );
  }
}
const qn = -90,
  Yn = 1;
class rc extends ht {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new It(qn, Yn, e, t);
    (r.layers = this.layers), this.add(r);
    const s = new It(qn, Yn, e, t);
    (s.layers = this.layers), this.add(s);
    const a = new It(qn, Yn, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new It(qn, Yn, e, t);
    (o.layers = this.layers), this.add(o);
    const c = new It(qn, Yn, e, t);
    (c.layers = this.layers), this.add(c);
    const l = new It(qn, Yn, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, a, o, c, l, u] = this.children,
      f = e.getRenderTarget(),
      h = e.getActiveCubeFace(),
      d = e.getActiveMipmapLevel(),
      _ = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let m = !1;
    e.isWebGLRenderer === !0
      ? (m = e.state.buffers.depth.getReversed())
      : (m = e.reversedDepthBuffer),
      e.setRenderTarget(n, 0, r),
      m && e.autoClear === !1 && e.clearDepth(),
      e.render(t, s),
      e.setRenderTarget(n, 1, r),
      m && e.autoClear === !1 && e.clearDepth(),
      e.render(t, a),
      e.setRenderTarget(n, 2, r),
      m && e.autoClear === !1 && e.clearDepth(),
      e.render(t, o),
      e.setRenderTarget(n, 3, r),
      m && e.autoClear === !1 && e.clearDepth(),
      e.render(t, c),
      e.setRenderTarget(n, 4, r),
      m && e.autoClear === !1 && e.clearDepth(),
      e.render(t, l),
      (n.texture.generateMipmaps = S),
      e.setRenderTarget(n, 5, r),
      m && e.autoClear === !1 && e.clearDepth(),
      e.render(t, u),
      e.setRenderTarget(f, h, d),
      (e.xr.enabled = _),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class sc extends It {
  constructor(e = []) {
    super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = e);
  }
}
const os = "\\[\\]\\.:\\/",
  ac = new RegExp("[" + os + "]", "g"),
  ls = "[^" + os + "]",
  oc = "[^" + os.replace("\\.", "") + "]",
  lc = /((?:WC+[\/:])*)/.source.replace("WC", ls),
  cc = /(WCOD+)?/.source.replace("WCOD", oc),
  hc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ls),
  uc = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ls),
  dc = new RegExp("^" + lc + cc + hc + uc + "$"),
  fc = ["material", "materials", "bones", "map"];
class pc {
  constructor(e, t, n) {
    const r = n || et.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, r));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      r = this._bindings[n];
    r !== void 0 && r.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let r = this._targetGroup.nCachedObjects_, s = n.length; r !== s; ++r)
      n[r].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class et {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || et.parseTrackName(t)),
      (this.node = et.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new et.Composite(e, t, n)
      : new et(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(ac, "");
  }
  static parseTrackName(e) {
    const t = dc.exec(e);
    if (t === null)
      throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      const s = n.nodeName.substring(r + 1);
      fc.indexOf(s) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = s));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "THREE.PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (s) {
          for (let a = 0; a < s.length; a++) {
            const o = s[a];
            if (o.name === t || o.uuid === t) return o;
            const c = n(o.children);
            if (c) return c;
          }
          return null;
        },
        r = n(e.children);
      if (r) return r;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r) e[t++] = n[r];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r) n[r] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r) n[r] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r) n[r] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      r = t.propertyName;
    let s = t.propertyIndex;
    if (
      (e || ((e = et.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      ye("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            Pe(
              "PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            Pe(
              "PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            Pe(
              "PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === l) {
              l = u;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            Pe(
              "PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            Pe(
              "PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            Pe(
              "PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          Pe(
            "PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[l];
      }
    }
    const a = e[r];
    if (a === void 0) {
      const l = t.nodeName;
      Pe(
        "PropertyBinding: Trying to update property for track: " +
          l +
          "." +
          r +
          " but it wasn't found.",
        e
      );
      return;
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      e.isMaterial === !0
        ? (o = this.Versioning.NeedsUpdate)
        : e.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!e.geometry) {
          Pe(
            "PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          Pe(
            "PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        e.morphTargetDictionary[s] !== void 0 &&
          (s = e.morphTargetDictionary[s]);
      }
      (c = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = s);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = r);
    (this.getValue = this.GetterByBindingType[c]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[c][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
et.Composite = pc;
et.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
et.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
et.prototype.GetterByBindingType = [
  et.prototype._getValue_direct,
  et.prototype._getValue_array,
  et.prototype._getValue_arrayElement,
  et.prototype._getValue_toArray,
];
et.prototype.SetterByBindingTypeAndVersioning = [
  [
    et.prototype._setValue_direct,
    et.prototype._setValue_direct_setNeedsUpdate,
    et.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    et.prototype._setValue_array,
    et.prototype._setValue_array_setNeedsUpdate,
    et.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    et.prototype._setValue_arrayElement,
    et.prototype._setValue_arrayElement_setNeedsUpdate,
    et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    et.prototype._setValue_fromArray,
    et.prototype._setValue_fromArray_setNeedsUpdate,
    et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
const fs = class fs {
  constructor(e, t, n, r) {
    (this.elements = [1, 0, 0, 1]), e !== void 0 && this.set(e, t, n, r);
  }
  identity() {
    return this.set(1, 0, 0, 1), this;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
    return this;
  }
  set(e, t, n, r) {
    const s = this.elements;
    return (s[0] = e), (s[2] = t), (s[1] = n), (s[3] = r), this;
  }
};
fs.prototype.isMatrix2 = !0;
let fa = fs;
function pa(i, e, t, n) {
  const r = mc(n);
  switch (t) {
    case 1021:
      return i * e;
    case 1028:
      return ((i * e) / r.components) * r.byteLength;
    case 1029:
      return ((i * e) / r.components) * r.byteLength;
    case 1030:
      return ((i * e * 2) / r.components) * r.byteLength;
    case 1031:
      return ((i * e * 2) / r.components) * r.byteLength;
    case 1022:
      return ((i * e * 3) / r.components) * r.byteLength;
    case 1023:
      return ((i * e * 4) / r.components) * r.byteLength;
    case 1033:
      return ((i * e * 4) / r.components) * r.byteLength;
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return (Math.max(i, 16) * Math.max(e, 8)) / 4;
    case 35840:
    case 35842:
      return (Math.max(i, 8) * Math.max(e, 8)) / 2;
    case 36196:
    case 37492:
    case 37488:
    case 37489:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
    case 37490:
    case 37491:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function mc(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "186" } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? ye("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = "186"));
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function so() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, a) {
    (n = i.requestAnimationFrame(r)), t(s, a);
  }
  return {
    start: function () {
      e !== !0 &&
        t !== null &&
        i !== null &&
        ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      i !== null && i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function gc(i) {
  const e = new WeakMap();
  function t(o, c) {
    const l = o.array,
      u = o.usage,
      f = l.byteLength,
      h = i.createBuffer();
    i.bindBuffer(c, h), i.bufferData(c, l, u), o.onUploadCallback();
    let d;
    if (l instanceof Float32Array) d = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      d = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (d = i.HALF_FLOAT) : (d = i.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) d = i.SHORT;
    else if (l instanceof Uint32Array) d = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) d = i.INT;
    else if (l instanceof Int8Array) d = i.BYTE;
    else if (l instanceof Uint8Array) d = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) d = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l
      );
    return {
      buffer: h,
      type: d,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: f,
    };
  }
  function n(o, c, l) {
    const u = c.array,
      f = c.updateRanges;
    if ((i.bindBuffer(l, o), f.length === 0)) i.bufferSubData(l, 0, u);
    else {
      f.sort((d, _) => d.start - _.start);
      let h = 0;
      for (let d = 1; d < f.length; d++) {
        const _ = f[h],
          S = f[d];
        S.start <= _.start + _.count + 1
          ? (_.count = Math.max(_.count, S.start + S.count - _.start))
          : (++h, (f[h] = S));
      }
      f.length = h + 1;
      for (let d = 0, _ = f.length; d < _; d++) {
        const S = f[d];
        i.bufferSubData(l, S.start * u.BYTES_PER_ELEMENT, u, S.start, S.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const u = e.get(o);
      (!u || u.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      n(l.buffer, o, c), (l.version = o.version);
    }
  }
  return { get: r, remove: s, update: a };
}
var _c = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  vc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  xc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Sc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Mc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  yc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Ec = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Tc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  bc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,
  Ac = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Rc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  wc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Cc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Pc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Lc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Dc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Ic = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Nc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Uc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Fc = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
  Bc = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
  Oc = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
  Gc = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,
  zc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  Vc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Hc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,
  kc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Wc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Xc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  qc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Yc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Kc = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Jc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,
  Zc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
  $c = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Qc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  jc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  eh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  th = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  nh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  ih = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  rh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  sh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  ah = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  oh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  lh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,
  ch = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,
  hh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  uh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  dh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  fh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  ph = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  mh = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  gh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  _h = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  vh = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  xh = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,
  Sh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Mh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  yh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Eh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Th = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  bh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Ah = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Rh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  wh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Ch = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Ph = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Lh = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Dh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Ih = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Nh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Uh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Fh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Bh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Oh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Gh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
  zh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Vh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Hh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  kh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Wh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Xh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  qh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,
  Yh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Kh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Jh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Zh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  $h = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Qh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  jh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
  eu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  tu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  nu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  iu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  ru = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  su = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  au = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  ou = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  lu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  cu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  hu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  uu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  du = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  fu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  pu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  mu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  gu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const _u = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  vu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  xu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Su = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Mu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  yu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Eu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Tu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  bu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Au = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
  Ru = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  wu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Cu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Pu = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Lu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Du = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Iu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Nu = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Uu = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Fu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Bu = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Ou = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Gu = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  zu = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Vu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Hu = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ku = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Wu = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Xu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  qu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Yu = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Ku = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Ju = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Zu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Fe = {
    alphahash_fragment: _c,
    alphahash_pars_fragment: vc,
    alphamap_fragment: xc,
    alphamap_pars_fragment: Sc,
    alphatest_fragment: Mc,
    alphatest_pars_fragment: yc,
    aomap_fragment: Ec,
    aomap_pars_fragment: Tc,
    batching_pars_vertex: bc,
    batching_vertex: Ac,
    begin_vertex: Rc,
    beginnormal_vertex: wc,
    bsdfs: Cc,
    iridescence_fragment: Pc,
    bumpmap_pars_fragment: Lc,
    clipping_planes_fragment: Dc,
    clipping_planes_pars_fragment: Ic,
    clipping_planes_pars_vertex: Nc,
    clipping_planes_vertex: Uc,
    color_fragment: Fc,
    color_pars_fragment: Bc,
    color_pars_vertex: Oc,
    color_vertex: Gc,
    common: zc,
    cube_uv_reflection_fragment: Vc,
    defaultnormal_vertex: Hc,
    displacementmap_pars_vertex: kc,
    displacementmap_vertex: Wc,
    emissivemap_fragment: Xc,
    emissivemap_pars_fragment: qc,
    colorspace_fragment: Yc,
    colorspace_pars_fragment: Kc,
    envmap_fragment: Jc,
    envmap_common_pars_fragment: Zc,
    envmap_pars_fragment: $c,
    envmap_pars_vertex: Qc,
    envmap_physical_pars_fragment: ch,
    envmap_vertex: jc,
    fog_vertex: eh,
    fog_pars_vertex: th,
    fog_fragment: nh,
    fog_pars_fragment: ih,
    gradientmap_pars_fragment: rh,
    lightmap_pars_fragment: sh,
    lights_lambert_fragment: ah,
    lights_lambert_pars_fragment: oh,
    lights_pars_begin: lh,
    lights_toon_fragment: hh,
    lights_toon_pars_fragment: uh,
    lights_phong_fragment: dh,
    lights_phong_pars_fragment: fh,
    lights_physical_fragment: ph,
    lights_physical_pars_fragment: mh,
    lights_fragment_begin: gh,
    lights_fragment_maps: _h,
    lights_fragment_end: vh,
    lightprobes_pars_fragment: xh,
    logdepthbuf_fragment: Sh,
    logdepthbuf_pars_fragment: Mh,
    logdepthbuf_pars_vertex: yh,
    logdepthbuf_vertex: Eh,
    map_fragment: Th,
    map_pars_fragment: bh,
    map_particle_fragment: Ah,
    map_particle_pars_fragment: Rh,
    metalnessmap_fragment: wh,
    metalnessmap_pars_fragment: Ch,
    morphinstance_vertex: Ph,
    morphcolor_vertex: Lh,
    morphnormal_vertex: Dh,
    morphtarget_pars_vertex: Ih,
    morphtarget_vertex: Nh,
    normal_fragment_begin: Uh,
    normal_fragment_maps: Fh,
    normal_pars_fragment: Bh,
    normal_pars_vertex: Oh,
    normal_vertex: Gh,
    normalmap_pars_fragment: zh,
    clearcoat_normal_fragment_begin: Vh,
    clearcoat_normal_fragment_maps: Hh,
    clearcoat_pars_fragment: kh,
    iridescence_pars_fragment: Wh,
    opaque_fragment: Xh,
    packing: qh,
    premultiplied_alpha_fragment: Yh,
    project_vertex: Kh,
    dithering_fragment: Jh,
    dithering_pars_fragment: Zh,
    roughnessmap_fragment: $h,
    roughnessmap_pars_fragment: Qh,
    shadowmap_pars_fragment: jh,
    shadowmap_pars_vertex: eu,
    shadowmap_vertex: tu,
    shadowmask_pars_fragment: nu,
    skinbase_vertex: iu,
    skinning_pars_vertex: ru,
    skinning_vertex: su,
    skinnormal_vertex: au,
    specularmap_fragment: ou,
    specularmap_pars_fragment: lu,
    tonemapping_fragment: cu,
    tonemapping_pars_fragment: hu,
    transmission_fragment: uu,
    transmission_pars_fragment: du,
    uv_pars_fragment: fu,
    uv_pars_vertex: pu,
    uv_vertex: mu,
    worldpos_vertex: gu,
    background_vert: _u,
    background_frag: vu,
    backgroundCube_vert: xu,
    backgroundCube_frag: Su,
    cube_vert: Mu,
    cube_frag: yu,
    depth_vert: Eu,
    depth_frag: Tu,
    distance_vert: bu,
    distance_frag: Au,
    equirect_vert: Ru,
    equirect_frag: wu,
    linedashed_vert: Cu,
    linedashed_frag: Pu,
    meshbasic_vert: Lu,
    meshbasic_frag: Du,
    meshlambert_vert: Iu,
    meshlambert_frag: Nu,
    meshmatcap_vert: Uu,
    meshmatcap_frag: Fu,
    meshnormal_vert: Bu,
    meshnormal_frag: Ou,
    meshphong_vert: Gu,
    meshphong_frag: zu,
    meshphysical_vert: Vu,
    meshphysical_frag: Hu,
    meshtoon_vert: ku,
    meshtoon_frag: Wu,
    points_vert: Xu,
    points_frag: qu,
    shadow_vert: Yu,
    shadow_frag: Ku,
    sprite_vert: Ju,
    sprite_frag: Zu,
  },
  he = {
    common: {
      diffuse: { value: new Ne(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new De() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new De() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new De() },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      dfgLUT: { value: null },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new De() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new De() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new De() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new De() },
      normalScale: { value: new Re(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new De() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new De() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new De() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new De() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ne(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      sunLights: { value: [], properties: { direction: {}, color: {} } },
      sunLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      sunShadowMatrix: { value: [] },
      sunShadowCascade: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
      probesSH: { value: null },
      probesMin: { value: new L() },
      probesMax: { value: new L() },
      probesResolution: { value: new L() },
    },
    points: {
      diffuse: { value: new Ne(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
      uvTransform: { value: new De() },
    },
    sprite: {
      diffuse: { value: new Ne(16777215) },
      opacity: { value: 1 },
      center: { value: new Re(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new De() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
    },
  },
  Qt = {
    basic: {
      uniforms: wt([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.fog,
      ]),
      vertexShader: Fe.meshbasic_vert,
      fragmentShader: Fe.meshbasic_frag,
    },
    lambert: {
      uniforms: wt([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        he.lights,
        { emissive: { value: new Ne(0) }, envMapIntensity: { value: 1 } },
      ]),
      vertexShader: Fe.meshlambert_vert,
      fragmentShader: Fe.meshlambert_frag,
    },
    phong: {
      uniforms: wt([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        he.lights,
        {
          emissive: { value: new Ne(0) },
          specular: { value: new Ne(1118481) },
          shininess: { value: 30 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Fe.meshphong_vert,
      fragmentShader: Fe.meshphong_frag,
    },
    standard: {
      uniforms: wt([
        he.common,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.roughnessmap,
        he.metalnessmap,
        he.fog,
        he.lights,
        {
          emissive: { value: new Ne(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Fe.meshphysical_vert,
      fragmentShader: Fe.meshphysical_frag,
    },
    toon: {
      uniforms: wt([
        he.common,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.gradientmap,
        he.fog,
        he.lights,
        { emissive: { value: new Ne(0) } },
      ]),
      vertexShader: Fe.meshtoon_vert,
      fragmentShader: Fe.meshtoon_frag,
    },
    matcap: {
      uniforms: wt([
        he.common,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Fe.meshmatcap_vert,
      fragmentShader: Fe.meshmatcap_frag,
    },
    points: {
      uniforms: wt([he.points, he.fog]),
      vertexShader: Fe.points_vert,
      fragmentShader: Fe.points_frag,
    },
    dashed: {
      uniforms: wt([
        he.common,
        he.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Fe.linedashed_vert,
      fragmentShader: Fe.linedashed_frag,
    },
    depth: {
      uniforms: wt([he.common, he.displacementmap]),
      vertexShader: Fe.depth_vert,
      fragmentShader: Fe.depth_frag,
    },
    normal: {
      uniforms: wt([
        he.common,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Fe.meshnormal_vert,
      fragmentShader: Fe.meshnormal_frag,
    },
    sprite: {
      uniforms: wt([he.sprite, he.fog]),
      vertexShader: Fe.sprite_vert,
      fragmentShader: Fe.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new De() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Fe.background_vert,
      fragmentShader: Fe.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new De() },
      },
      vertexShader: Fe.backgroundCube_vert,
      fragmentShader: Fe.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Fe.cube_vert,
      fragmentShader: Fe.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Fe.equirect_vert,
      fragmentShader: Fe.equirect_frag,
    },
    distance: {
      uniforms: wt([
        he.common,
        he.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Fe.distance_vert,
      fragmentShader: Fe.distance_frag,
    },
    shadow: {
      uniforms: wt([
        he.lights,
        he.fog,
        { color: { value: new Ne(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Fe.shadow_vert,
      fragmentShader: Fe.shadow_frag,
    },
  };
Qt.physical = {
  uniforms: wt([
    Qt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new De() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new De() },
      clearcoatNormalScale: { value: new Re(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new De() },
      dispersion: { value: 0 },
      retroreflectivity: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new De() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new De() },
      sheen: { value: 0 },
      sheenColor: { value: new Ne(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new De() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new De() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new De() },
      transmissionSamplerSize: { value: new Re() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new De() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ne(0) },
      specularColor: { value: new Ne(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new De() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new De() },
      anisotropyVector: { value: new Re() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new De() },
    },
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag,
};
const $i = { r: 0, b: 0, g: 0 },
  $u = new Ve(),
  ao = new De();
ao.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Qu(i, e, t, n, r, s) {
  const a = new Ne(0);
  let o = r === !0 ? 0 : 1,
    c,
    l,
    u = null,
    f = 0,
    h = null;
  function d(A) {
    let w = A.isScene === !0 ? A.background : null;
    if (w && w.isTexture) {
      const M = A.backgroundBlurriness > 0;
      w = e.get(w, M);
    }
    return w;
  }
  function _(A) {
    let w = !1;
    const M = d(A);
    M === null ? m(a, o) : M && M.isColor && (m(M, 1), (w = !0));
    const E = i.xr.getEnvironmentBlendMode();
    E === "additive"
      ? t.buffers.color.setClear(0, 0, 0, 1, s)
      : E === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s),
      (i.autoClear || w) &&
        (t.buffers.depth.setTest(!0),
        t.buffers.depth.setMask(!0),
        t.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function S(A, w) {
    const M = d(w);
    M && (M.isCubeTexture || M.mapping === 306)
      ? (l === void 0 &&
          ((l = new Bt(
            new Si(1, 1, 1),
            new jt({
              name: "BackgroundCubeMaterial",
              uniforms: jn(Qt.backgroundCube.uniforms),
              vertexShader: Qt.backgroundCube.vertexShader,
              fragmentShader: Qt.backgroundCube.fragmentShader,
              side: 1,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            })
          )),
          l.geometry.deleteAttribute("normal"),
          l.geometry.deleteAttribute("uv"),
          (l.onBeforeRender = function (E, y, R) {
            this.matrixWorld.copyPosition(R.matrixWorld);
          }),
          Object.defineProperty(l.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          n.update(l)),
        (l.material.uniforms.envMap.value = M),
        (l.material.uniforms.backgroundBlurriness.value =
          w.backgroundBlurriness),
        (l.material.uniforms.backgroundIntensity.value = w.backgroundIntensity),
        l.material.uniforms.backgroundRotation.value
          .setFromMatrix4($u.makeRotationFromEuler(w.backgroundRotation))
          .transpose(),
        M.isCubeTexture &&
          M.isRenderTargetTexture === !1 &&
          l.material.uniforms.backgroundRotation.value.premultiply(ao),
        (l.material.toneMapped = ke.getTransfer(M.colorSpace) !== $e),
        (u !== M || f !== M.version || h !== i.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (u = M),
          (f = M.version),
          (h = i.toneMapping)),
        l.layers.enableAll(),
        A.unshift(l, l.geometry, l.material, 0, 0, null))
      : M &&
        M.isTexture &&
        (c === void 0 &&
          ((c = new Bt(
            new lr(2, 2),
            new jt({
              name: "BackgroundMaterial",
              uniforms: jn(Qt.background.uniforms),
              vertexShader: Qt.background.vertexShader,
              fragmentShader: Qt.background.fragmentShader,
              side: 0,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            })
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          n.update(c)),
        (c.material.uniforms.t2D.value = M),
        (c.material.uniforms.backgroundIntensity.value = w.backgroundIntensity),
        (c.material.toneMapped = ke.getTransfer(M.colorSpace) !== $e),
        M.matrixAutoUpdate === !0 && M.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(M.matrix),
        (u !== M || f !== M.version || h !== i.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (u = M),
          (f = M.version),
          (h = i.toneMapping)),
        c.layers.enableAll(),
        A.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(A, w) {
    A.getRGB($i, eo(i)), t.buffers.color.setClear($i.r, $i.g, $i.b, w, s);
  }
  function p() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), (l = void 0)),
      c !== void 0 &&
        (c.geometry.dispose(), c.material.dispose(), (c = void 0));
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (A, w = 1) {
      a.set(A), (o = w), m(a, o);
    },
    getClearAlpha: function () {
      return o;
    },
    setClearAlpha: function (A) {
      (o = A), m(a, o);
    },
    render: _,
    addToRenderList: S,
    dispose: p,
  };
}
function ju(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    r = h(null);
  let s = r,
    a = !1;
  function o(U, B, V, I, H) {
    let K = !1;
    const J = f(U, I, V, B);
    s !== J && ((s = J), l(s.object)),
      (K = d(U, I, V, H)),
      K && _(U, I, V, H),
      H !== null && e.update(H, i.ELEMENT_ARRAY_BUFFER),
      (K || a) &&
        ((a = !1),
        M(U, B, V, I),
        H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(H).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(U) {
    return i.bindVertexArray(U);
  }
  function u(U) {
    return i.deleteVertexArray(U);
  }
  function f(U, B, V, I) {
    const H = I.wireframe === !0;
    let K = n[B.id];
    K === void 0 && ((K = {}), (n[B.id] = K));
    const J = U.isInstancedMesh === !0 ? U.id : 0;
    let ne = K[J];
    ne === void 0 && ((ne = {}), (K[J] = ne));
    let X = ne[V.id];
    X === void 0 && ((X = {}), (ne[V.id] = X));
    let j = X[H];
    return j === void 0 && ((j = h(c())), (X[H] = j)), j;
  }
  function h(U) {
    const B = [],
      V = [],
      I = [];
    for (let H = 0; H < t; H++) (B[H] = 0), (V[H] = 0), (I[H] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: V,
      attributeDivisors: I,
      object: U,
      attributes: {},
      index: null,
    };
  }
  function d(U, B, V, I) {
    const H = s.attributes,
      K = B.attributes;
    let J = 0;
    const ne = V.getAttributes();
    for (const X in ne)
      if (ne[X].location >= 0) {
        const te = H[X];
        let we = K[X];
        if (
          (we === void 0 &&
            (X === "instanceMatrix" &&
              U.instanceMatrix &&
              (we = U.instanceMatrix),
            X === "instanceColor" && U.instanceColor && (we = U.instanceColor)),
          te === void 0 || te.attribute !== we || (we && te.data !== we.data))
        )
          return !0;
        J++;
      }
    return s.attributesNum !== J || s.index !== I;
  }
  function _(U, B, V, I) {
    const H = {},
      K = B.attributes;
    let J = 0;
    const ne = V.getAttributes();
    for (const X in ne)
      if (ne[X].location >= 0) {
        let te = K[X];
        te === void 0 &&
          (X === "instanceMatrix" &&
            U.instanceMatrix &&
            (te = U.instanceMatrix),
          X === "instanceColor" && U.instanceColor && (te = U.instanceColor));
        const we = {};
        (we.attribute = te),
          te && te.data && (we.data = te.data),
          (H[X] = we),
          J++;
      }
    (s.attributes = H), (s.attributesNum = J), (s.index = I);
  }
  function S() {
    const U = s.newAttributes;
    for (let B = 0, V = U.length; B < V; B++) U[B] = 0;
  }
  function m(U) {
    p(U, 0);
  }
  function p(U, B) {
    const V = s.newAttributes,
      I = s.enabledAttributes,
      H = s.attributeDivisors;
    (V[U] = 1),
      I[U] === 0 && (i.enableVertexAttribArray(U), (I[U] = 1)),
      H[U] !== B && (i.vertexAttribDivisor(U, B), (H[U] = B));
  }
  function A() {
    const U = s.newAttributes,
      B = s.enabledAttributes;
    for (let V = 0, I = B.length; V < I; V++)
      B[V] !== U[V] && (i.disableVertexAttribArray(V), (B[V] = 0));
  }
  function w(U, B, V, I, H, K, J) {
    J === !0
      ? i.vertexAttribIPointer(U, B, V, H, K)
      : i.vertexAttribPointer(U, B, V, I, H, K);
  }
  function M(U, B, V, I) {
    S();
    const H = I.attributes,
      K = V.getAttributes(),
      J = B.defaultAttributeValues;
    for (const ne in K) {
      const X = K[ne];
      if (X.location >= 0) {
        let j = H[ne];
        if (
          (j === void 0 &&
            (ne === "instanceMatrix" &&
              U.instanceMatrix &&
              (j = U.instanceMatrix),
            ne === "instanceColor" && U.instanceColor && (j = U.instanceColor)),
          j !== void 0)
        ) {
          const te = j.normalized,
            we = j.itemSize,
            be = e.get(j);
          if (be === void 0) continue;
          const it = be.buffer,
            We = be.type,
            Ye = be.bytesPerElement,
            q = We === i.INT || We === i.UNSIGNED_INT || j.gpuType === 1013;
          if (j.isInterleavedBufferAttribute) {
            const Q = j.data,
              _e = Q.stride,
              Le = j.offset;
            if (Q.isInstancedInterleavedBuffer) {
              for (let me = 0; me < X.locationSize; me++)
                p(X.location + me, Q.meshPerAttribute);
              U.isInstancedMesh !== !0 &&
                I._maxInstanceCount === void 0 &&
                (I._maxInstanceCount = Q.meshPerAttribute * Q.count);
            } else
              for (let me = 0; me < X.locationSize; me++) m(X.location + me);
            i.bindBuffer(i.ARRAY_BUFFER, it);
            for (let me = 0; me < X.locationSize; me++)
              w(
                X.location + me,
                we / X.locationSize,
                We,
                te,
                _e * Ye,
                (Le + (we / X.locationSize) * me) * Ye,
                q
              );
          } else {
            if (j.isInstancedBufferAttribute) {
              for (let Q = 0; Q < X.locationSize; Q++)
                p(X.location + Q, j.meshPerAttribute);
              U.isInstancedMesh !== !0 &&
                I._maxInstanceCount === void 0 &&
                (I._maxInstanceCount = j.meshPerAttribute * j.count);
            } else for (let Q = 0; Q < X.locationSize; Q++) m(X.location + Q);
            i.bindBuffer(i.ARRAY_BUFFER, it);
            for (let Q = 0; Q < X.locationSize; Q++)
              w(
                X.location + Q,
                we / X.locationSize,
                We,
                te,
                we * Ye,
                (we / X.locationSize) * Q * Ye,
                q
              );
          }
        } else if (J !== void 0) {
          const te = J[ne];
          if (te !== void 0)
            switch (te.length) {
              case 2:
                i.vertexAttrib2fv(X.location, te);
                break;
              case 3:
                i.vertexAttrib3fv(X.location, te);
                break;
              case 4:
                i.vertexAttrib4fv(X.location, te);
                break;
              default:
                i.vertexAttrib1fv(X.location, te);
            }
        }
      }
    }
    A();
  }
  function E() {
    b();
    for (const U in n) {
      const B = n[U];
      for (const V in B) {
        const I = B[V];
        for (const H in I) {
          const K = I[H];
          for (const J in K) u(K[J].object), delete K[J];
          delete I[H];
        }
      }
      delete n[U];
    }
  }
  function y(U) {
    if (n[U.id] === void 0) return;
    const B = n[U.id];
    for (const V in B) {
      const I = B[V];
      for (const H in I) {
        const K = I[H];
        for (const J in K) u(K[J].object), delete K[J];
        delete I[H];
      }
    }
    delete n[U.id];
  }
  function R(U) {
    for (const B in n) {
      const V = n[B];
      for (const I in V) {
        const H = V[I];
        if (H[U.id] === void 0) continue;
        const K = H[U.id];
        for (const J in K) u(K[J].object), delete K[J];
        delete H[U.id];
      }
    }
  }
  function v(U) {
    for (const B in n) {
      const V = n[B],
        I = U.isInstancedMesh === !0 ? U.id : 0,
        H = V[I];
      if (H !== void 0) {
        for (const K in H) {
          const J = H[K];
          for (const ne in J) u(J[ne].object), delete J[ne];
          delete H[K];
        }
        delete V[I], Object.keys(V).length === 0 && delete n[B];
      }
    }
  }
  function b() {
    P(), (a = !0), s !== r && ((s = r), l(s.object));
  }
  function P() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: o,
    reset: b,
    resetDefaultState: P,
    dispose: E,
    releaseStatesOfGeometry: y,
    releaseStatesOfObject: v,
    releaseStatesOfProgram: R,
    initAttributes: S,
    enableAttribute: m,
    disableUnusedAttributes: A,
  };
}
function ed(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, l) {
    i.drawArrays(n, c, l), t.update(l, n, 1);
  }
  function a(c, l, u) {
    u !== 0 && (i.drawArraysInstanced(n, c, l, u), t.update(l, n, u));
  }
  function o(c, l, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, l, 0, u);
    let h = 0;
    for (let d = 0; d < u; d++) h += l[d];
    t.update(h, n, 1);
  }
  (this.setMode = r),
    (this.render = s),
    (this.renderInstances = a),
    (this.renderMultiDraw = o);
}
function td(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(R) {
    return !(
      R !== 1023 &&
      n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(R) {
    const v =
      R === 1016 &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      R !== 1009 &&
      R !== 1015 &&
      !v &&
      n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)
    );
  }
  function c(R) {
    if (R === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      R = "mediump";
    }
    return R === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const u = c(l);
  u !== l &&
    (ye("WebGLRenderer:", l, "not supported, using", u, "instead."), (l = u));
  const f = t.logarithmicDepthBuffer === !0,
    h = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 &&
    h === !1 &&
    ye(
      "WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."
    );
  const d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    S = i.getParameter(i.MAX_TEXTURE_SIZE),
    m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    p = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    w = i.getParameter(i.MAX_VARYING_VECTORS),
    M = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    E = i.getParameter(i.MAX_SAMPLES),
    y = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: f,
    reversedDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: _,
    maxTextureSize: S,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: A,
    maxVaryings: w,
    maxFragmentUniforms: M,
    maxSamples: E,
    samples: y,
  };
}
function nd(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const a = new Sn(),
    o = new De(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, h) {
      const d = f.length !== 0 || h || n !== 0 || r;
      return (r = h), (n = f.length), d;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (f, h) {
      t = u(f, h, 0);
    }),
    (this.setState = function (f, h, d) {
      const _ = f.clippingPlanes,
        S = f.clipIntersection,
        m = f.clipShadows,
        p = i.get(f);
      if (!r || _ === null || _.length === 0 || (s && !m)) s ? u(null) : l();
      else {
        const A = s ? 0 : n,
          w = A * 4;
        let M = p.clippingState || null;
        (c.value = M), (M = u(_, h, w, d));
        for (let E = 0; E !== w; ++E) M[E] = t[E];
        (p.clippingState = M),
          (this.numIntersection = S ? this.numPlanes : 0),
          (this.numPlanes += A);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(f, h, d, _) {
    const S = f !== null ? f.length : 0;
    let m = null;
    if (S !== 0) {
      if (((m = c.value), _ !== !0 || m === null)) {
        const p = d + S * 4,
          A = h.matrixWorldInverse;
        o.getNormalMatrix(A),
          (m === null || m.length < p) && (m = new Float32Array(p));
        for (let w = 0, M = d; w !== S; ++w, M += 4)
          a.copy(f[w]).applyMatrix4(A, o),
            a.normal.toArray(m, M),
            (m[M + 3] = a.constant);
      }
      (c.value = m), (c.needsUpdate = !0);
    }
    return (e.numPlanes = S), (e.numIntersection = 0), m;
  }
}
const Jn = 4,
  id = 6,
  rd = 20,
  sd = 256,
  ui = new as(),
  ma = new Ne();
let Hr = null,
  kr = 0,
  Wr = 0,
  Xr = !1;
const ad = new L(),
  Cn = new L();
class ga {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._sizeLods = []),
      (this._lodMeshes = []),
      (this._backgroundBox = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      (this._blurMaterial = null),
      (this._ggxMaterial = null);
  }
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const { size: a = 256, position: o = ad } = s;
    (Hr = this._renderer.getRenderTarget()),
      (kr = this._renderer.getActiveCubeFace()),
      (Wr = this._renderer.getActiveMipmapLevel()),
      (Xr = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(a);
    const c = this._allocateTargets();
    return (
      (c.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, c, o),
      t > 0 && this._blur(c, 0, 0, t),
      this._applyPMREM(c),
      this._cleanup(c),
      c
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = xa()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = va()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose(),
      this._backgroundBox !== null &&
        (this._backgroundBox.geometry.dispose(),
        this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._ggxMaterial !== null && this._ggxMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Hr, kr, Wr),
      (this._renderer.xr.enabled = Xr),
      (e.scissorTest = !1),
      Kn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Hr = this._renderer.getRenderTarget()),
      (kr = this._renderer.getActiveCubeFace()),
      (Wr = this._renderer.getActiveMipmapLevel()),
      (Xr = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: 1006,
        minFilter: 1006,
        generateMipmaps: !1,
        type: 1016,
        format: 1023,
        colorSpace: tr,
        depthBuffer: !1,
      },
      r = _a(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = _a(e, t, n));
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = od(s)),
        (this._blurMaterial = cd(s, e, t)),
        (this._ggxMaterial = ld(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Bt(new Pt(), e);
    this._renderer.compile(t, ui);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new It(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      u = [1, 1, 1, -1, -1, -1],
      f = this._renderer,
      h = f.autoClear,
      d = f.toneMapping;
    f.getClearColor(ma),
      (f.toneMapping = 0),
      (f.autoClear = !1),
      f.state.buffers.depth.getReversed() &&
        (f.setRenderTarget(r), f.clearDepth(), f.setRenderTarget(null)),
      this._backgroundBox === null &&
        (this._backgroundBox = new Bt(
          new Si(),
          new Wa({
            name: "PMREM.Background",
            side: 1,
            depthWrite: !1,
            depthTest: !1,
          })
        ));
    const S = this._backgroundBox,
      m = S.material;
    let p = !1;
    const A = e.background;
    A
      ? A.isColor && (m.color.copy(A), (e.background = null), (p = !0))
      : (m.color.copy(ma), (p = !0));
    for (let w = 0; w < 6; w++) {
      const M = w % 3;
      M === 0
        ? (c.up.set(0, l[w], 0),
          c.position.set(s.x, s.y, s.z),
          c.lookAt(s.x + u[w], s.y, s.z))
        : M === 1
        ? (c.up.set(0, 0, l[w]),
          c.position.set(s.x, s.y, s.z),
          c.lookAt(s.x, s.y + u[w], s.z))
        : (c.up.set(0, l[w], 0),
          c.position.set(s.x, s.y, s.z),
          c.lookAt(s.x, s.y, s.z + u[w]));
      const E = this._cubeSize;
      Kn(r, M * E, w > 2 ? E : 0, E, E),
        f.setRenderTarget(r),
        p && f.render(S, c),
        f.render(e, c);
    }
    (f.toneMapping = d), (f.autoClear = h), (e.background = A);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === 301 || e.mapping === 302;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = xa()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = va());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Kn(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ui);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodMeshes.length;
    for (let s = 1; s < r; s++) this._applyGGXFilter(e, s - 1, s);
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const r = this._renderer,
      s = this._pingPongRenderTarget,
      a = this._ggxMaterial,
      o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms,
      l = n / (this._lodMeshes.length - 1),
      u = t / (this._lodMeshes.length - 1),
      f = Math.sqrt(l * l - u * u),
      h = l * 1.25,
      d = f * h,
      { _lodMax: _ } = this,
      S = this._sizeLods[n],
      m = 3 * S * (n > _ - Jn ? n - _ + Jn : 0),
      p = 4 * (this._cubeSize - S);
    (c.envMap.value = e.texture),
      (c.roughness.value = d),
      (c.mipInt.value = _ - t),
      Kn(s, m, p, 3 * S, 2 * S),
      r.setRenderTarget(s),
      r.render(o, ui),
      (c.envMap.value = s.texture),
      (c.roughness.value = 0),
      (c.mipInt.value = _ - n),
      Kn(e, m, p, 3 * S, 2 * S),
      r.setRenderTarget(e),
      r.render(o, ui);
  }
  _blur(e, t, n, r) {
    const s = this._pingPongRenderTarget,
      a = Math.min(r, Math.PI) / Math.SQRT2;
    this._blurPass(e, s, t, n, a), this._blurPass(s, e, n, n, a);
  }
  _blurPass(e, t, n, r, s) {
    const a = this._renderer,
      o = this._blurMaterial,
      c = this._lodMeshes[r];
    c.material = o;
    const l = o.uniforms;
    (l.envMap.value = e.texture),
      (l.sigma.value = s),
      (l.mipInt.value = this._lodMax - n);
    const u = this._sizeLods[r],
      f = 3 * u * (r > this._lodMax - Jn ? r - this._lodMax + Jn : 0),
      h = 4 * (this._cubeSize - u);
    Kn(t, f, h, 3 * u, 2 * u), a.setRenderTarget(t), a.render(c, ui);
  }
}
function od(i) {
  const e = [],
    t = [];
  let n = i;
  const r = i - Jn + 1 + id;
  for (let s = 0; s < r; s++) {
    const a = Math.pow(2, n);
    e.push(a);
    const o = 1 / (a - 2),
      c = -o,
      l = 1 + o,
      u = [c, c, l, c, l, l, c, c, l, l, c, l],
      f = 6,
      h = 6,
      d = 3,
      _ = new Float32Array(d * h * f),
      S = new Float32Array(d * h * f);
    for (let p = 0; p < f; p++) {
      const A = ((p % 3) * 2) / 3 - 1,
        w = p > 2 ? 0 : -1,
        M = [
          A,
          w,
          0,
          A + 2 / 3,
          w,
          0,
          A + 2 / 3,
          w + 1,
          0,
          A,
          w,
          0,
          A + 2 / 3,
          w + 1,
          0,
          A,
          w + 1,
          0,
        ];
      _.set(M, d * h * p);
      for (let E = 0; E < h; E++) {
        const y = u[E * 2] * 2 - 1,
          R = u[E * 2 + 1] * 2 - 1;
        p === 0
          ? Cn.set(1, R, y)
          : p === 1
          ? Cn.set(-y, 1, -R)
          : p === 2
          ? Cn.set(-y, R, 1)
          : p === 3
          ? Cn.set(-1, R, -y)
          : p === 4
          ? Cn.set(-y, -1, R)
          : Cn.set(y, R, -1),
          Cn.toArray(S, (p * h + E) * d);
      }
    }
    const m = new Pt();
    m.setAttribute("position", new qt(_, d)),
      m.setAttribute("outputDirection", new qt(S, d)),
      t.push(new Bt(m, null)),
      n > Jn && n--;
  }
  return { lodMeshes: t, sizeLods: e };
}
function _a(i, e, t) {
  const n = new Xt(i, e, t);
  return (
    (n.texture.mapping = 306),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Kn(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function ld(i, e, t) {
  return new jt({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: sd,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: hr(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function cd(i, e, t) {
  return new jt({
    name: "SphericalGaussianBlur",
    defines: {
      SAMPLES: rd,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      sigma: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: hr(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function va() {
  return new jt({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: hr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function xa() {
  return new jt({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: hr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function hr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
class oo extends Xt {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    (this.texture = new Ya(r)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Si(5, 5, 5),
      s = new jt({
        name: "CubemapFromEquirect",
        uniforms: jn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: 1,
        blending: 0,
      });
    s.uniforms.tEquirect.value = t;
    const a = new Bt(r, s),
      o = t.minFilter;
    return (
      t.minFilter === 1008 && (t.minFilter = 1006),
      new rc(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, r = !0) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
function hd(i) {
  let e = new WeakMap(),
    t = new WeakMap(),
    n = null;
  function r(h, d = !1) {
    return h == null ? null : d ? a(h) : s(h);
  }
  function s(h) {
    if (h && h.isTexture) {
      const d = h.mapping;
      if (d === 303 || d === 304)
        if (e.has(h)) {
          const _ = e.get(h).texture;
          return o(_, h.mapping);
        } else {
          const _ = h.image;
          if (_ && _.height > 0) {
            const S = new oo(_.height);
            return (
              S.fromEquirectangularTexture(i, h),
              e.set(h, S),
              h.addEventListener("dispose", l),
              o(S.texture, h.mapping)
            );
          } else return null;
        }
    }
    return h;
  }
  function a(h) {
    if (h && h.isTexture) {
      const d = h.mapping,
        _ = d === 303 || d === 304,
        S = d === 301 || d === 302;
      if (_ || S) {
        let m = t.get(h);
        const p = m !== void 0 ? m.texture.pmremVersion : 0;
        if (h.isRenderTargetTexture && h.pmremVersion !== p)
          return (
            n === null && (n = new ga(i)),
            (m = _ ? n.fromEquirectangular(h, m) : n.fromCubemap(h, m)),
            (m.texture.pmremVersion = h.pmremVersion),
            t.set(h, m),
            m.texture
          );
        if (m !== void 0) return m.texture;
        {
          const A = h.image;
          return (_ && A && A.height > 0) || (S && A && c(A))
            ? (n === null && (n = new ga(i)),
              (m = _ ? n.fromEquirectangular(h) : n.fromCubemap(h)),
              (m.texture.pmremVersion = h.pmremVersion),
              t.set(h, m),
              h.addEventListener("dispose", u),
              m.texture)
            : null;
        }
      }
    }
    return h;
  }
  function o(h, d) {
    return d === 303 ? (h.mapping = 301) : d === 304 && (h.mapping = 302), h;
  }
  function c(h) {
    let d = 0;
    const _ = 6;
    for (let S = 0; S < _; S++) h[S] !== void 0 && d++;
    return d === _;
  }
  function l(h) {
    const d = h.target;
    d.removeEventListener("dispose", l);
    const _ = e.get(d);
    _ !== void 0 && (e.delete(d), _.dispose());
  }
  function u(h) {
    const d = h.target;
    d.removeEventListener("dispose", u);
    const _ = t.get(d);
    _ !== void 0 && (t.delete(d), _.dispose());
  }
  function f() {
    (e = new WeakMap()),
      (t = new WeakMap()),
      n !== null && (n.dispose(), (n = null));
  }
  return { get: r, dispose: f };
}
function ud(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    const r = i.getExtension(n);
    return (e[n] = r), r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null && Zn("WebGLRenderer: " + n + " extension not supported."), r
      );
    },
  };
}
function dd(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function a(f) {
    const h = f.target;
    h.index !== null && e.remove(h.index);
    for (const _ in h.attributes) e.remove(h.attributes[_]);
    h.removeEventListener("dispose", a), delete r[h.id];
    const d = s.get(h);
    d && (e.remove(d), s.delete(h)),
      n.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(f, h) {
    return (
      r[h.id] === !0 ||
        (h.addEventListener("dispose", a),
        (r[h.id] = !0),
        t.memory.geometries++),
      h
    );
  }
  function c(f) {
    const h = f.attributes;
    for (const d in h) e.update(h[d], i.ARRAY_BUFFER);
  }
  function l(f) {
    const h = [],
      d = f.index,
      _ = f.attributes.position;
    let S = 0;
    if (_ === void 0) return;
    if (d !== null) {
      const A = d.array;
      S = d.version;
      for (let w = 0, M = A.length; w < M; w += 3) {
        const E = A[w + 0],
          y = A[w + 1],
          R = A[w + 2];
        h.push(E, y, y, R, R, E);
      }
    } else {
      const A = _.array;
      S = _.version;
      for (let w = 0, M = A.length / 3 - 1; w < M; w += 3) {
        const E = w + 0,
          y = w + 1,
          R = w + 2;
        h.push(E, y, y, R, R, E);
      }
    }
    const m = new (_.count >= 65535 ? Ha : Va)(h, 1);
    m.version = S;
    const p = s.get(f);
    p && e.remove(p), s.set(f, m);
  }
  function u(f) {
    const h = s.get(f);
    if (h) {
      const d = f.index;
      d !== null && h.version < d.version && l(f);
    } else l(f);
    return s.get(f);
  }
  return { get: o, update: c, getWireframeAttribute: u };
}
function fd(i, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    (s = f.type), (a = f.bytesPerElement);
  }
  function c(f, h) {
    i.drawElements(n, h, s, f * a), t.update(h, n, 1);
  }
  function l(f, h, d) {
    d !== 0 && (i.drawElementsInstanced(n, h, s, f * a, d), t.update(h, n, d));
  }
  function u(f, h, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, h, 0, s, f, 0, d);
    let S = 0;
    for (let m = 0; m < d; m++) S += h[m];
    t.update(S, n, 1);
  }
  (this.setMode = r),
    (this.setIndex = o),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = u);
}
function pd(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        Pe("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function md(i, e, t) {
  const n = new WeakMap(),
    r = new tt();
  function s(a, o, c) {
    const l = a.morphTargetInfluences,
      u =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      f = u !== void 0 ? u.length : 0;
    let h = n.get(o);
    if (h === void 0 || h.count !== f) {
      let b = function () {
        R.dispose(), n.delete(o), o.removeEventListener("dispose", b);
      };
      h !== void 0 && h.texture.dispose();
      const d = o.morphAttributes.position !== void 0,
        _ = o.morphAttributes.normal !== void 0,
        S = o.morphAttributes.color !== void 0,
        m = o.morphAttributes.position || [],
        p = o.morphAttributes.normal || [],
        A = o.morphAttributes.color || [];
      let w = 0;
      d === !0 && (w = 1), _ === !0 && (w = 2), S === !0 && (w = 3);
      let M = o.attributes.position.count * w,
        E = 1;
      M > e.maxTextureSize &&
        ((E = Math.ceil(M / e.maxTextureSize)), (M = e.maxTextureSize));
      const y = new Float32Array(M * E * 4 * f),
        R = new Oa(y, M, E, f);
      (R.type = 1015), (R.needsUpdate = !0);
      const v = w * 4;
      for (let P = 0; P < f; P++) {
        const U = m[P],
          B = p[P],
          V = A[P],
          I = M * E * 4 * P;
        for (let H = 0; H < U.count; H++) {
          const K = H * v;
          d === !0 &&
            (r.fromBufferAttribute(U, H),
            (y[I + K + 0] = r.x),
            (y[I + K + 1] = r.y),
            (y[I + K + 2] = r.z),
            (y[I + K + 3] = 0)),
            _ === !0 &&
              (r.fromBufferAttribute(B, H),
              (y[I + K + 4] = r.x),
              (y[I + K + 5] = r.y),
              (y[I + K + 6] = r.z),
              (y[I + K + 7] = 0)),
            S === !0 &&
              (r.fromBufferAttribute(V, H),
              (y[I + K + 8] = r.x),
              (y[I + K + 9] = r.y),
              (y[I + K + 10] = r.z),
              (y[I + K + 11] = V.itemSize === 4 ? r.w : 1));
        }
      }
      (h = { count: f, texture: R, size: new Re(M, E) }),
        n.set(o, h),
        o.addEventListener("dispose", b);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let d = 0;
      for (let S = 0; S < l.length; S++) d += l[S];
      const _ = o.morphTargetsRelative ? 1 : 1 - d;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", _),
        c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", h.texture, t),
      c.getUniforms().setValue(i, "morphTargetsTextureSize", h.size);
  }
  return { update: s };
}
function gd(i, e, t, n, r) {
  let s = new WeakMap();
  function a(l) {
    const u = r.render.frame,
      f = l.geometry,
      h = e.get(l, f);
    if (
      (s.get(h) !== u && (e.update(h), s.set(h, u)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", c) === !1 &&
          l.addEventListener("dispose", c),
        s.get(l) !== u &&
          (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
          s.set(l, u))),
      l.isSkinnedMesh)
    ) {
      const d = l.skeleton;
      s.get(d) !== u && (d.update(), s.set(d, u));
    }
    return h;
  }
  function o() {
    s = new WeakMap();
  }
  function c(l) {
    const u = l.target;
    u.removeEventListener("dispose", c),
      n.releaseStatesOfObject(u),
      t.remove(u.instanceMatrix),
      u.instanceColor !== null && t.remove(u.instanceColor);
  }
  return { update: a, dispose: o };
}
const _d = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING",
};
function vd(i, e, t, n, r, s) {
  const a = new Xt(e, t, {
    type: i,
    depthBuffer: r,
    stencilBuffer: s,
    samples: n ? 4 : 0,
    storeMultisampledDepthBuffer: !1,
    storeMultisampledStencilBuffer: !1,
    resolveDepthBuffer: !1,
    resolveStencilBuffer: !1,
  });
  let o = null,
    c = null;
  const l = new Pt();
  l.setAttribute("position", new mt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
    l.setAttribute("uv", new mt([0, 2, 0, 0, 2, 0], 2));
  const u = new Fl({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
      fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
      depthTest: !1,
      depthWrite: !1,
    }),
    f = new Bt(l, u),
    h = new as(-1, 1, 1, -1, 0, 1);
  let d = null,
    _ = null,
    S = !1,
    m,
    p = null,
    A = [],
    w = !1;
  (this.setSize = function (M, E) {
    a.setSize(M, E),
      o !== null && o.setSize(M, E),
      c !== null && c.setSize(M, E);
    for (let y = 0; y < A.length; y++) {
      const R = A[y];
      R.setSize && R.setSize(M, E);
    }
  }),
    (this.setEffects = function (M) {
      (A = M), (w = A.length > 0 && A[0].isRenderPass === !0);
      const E = a.width,
        y = a.height;
      A.length > 0 &&
        o === null &&
        ((o = new Xt(E, y, { type: 1016, depthBuffer: !1, stencilBuffer: !1 })),
        (c = new Xt(E, y, { type: 1016, depthBuffer: !1, stencilBuffer: !1 })));
      for (let R = 0; R < A.length; R++) {
        const v = A[R];
        v.setSize && v.setSize(E, y);
      }
    }),
    (this.begin = function (M, E) {
      if (S || (M.toneMapping === 0 && A.length === 0)) return !1;
      if (((p = E), E !== null)) {
        const y = E.width,
          R = E.height;
        (a.width !== y || a.height !== R) && this.setSize(y, R);
      }
      return (
        w === !1 && M.setRenderTarget(a),
        (m = M.toneMapping),
        (M.toneMapping = 0),
        !0
      );
    }),
    (this.hasRenderPass = function () {
      return w;
    }),
    (this.end = function (M, E) {
      (M.toneMapping = m), (S = !0);
      let y = a,
        R = o;
      for (let v = 0; v < A.length; v++) {
        const b = A[v];
        b.enabled !== !1 &&
          (b.render(M, R, y, E),
          b.needsSwap !== !1 && ((y = R), (R = R === o ? c : o)));
      }
      if (d !== M.outputColorSpace || _ !== M.toneMapping) {
        (d = M.outputColorSpace),
          (_ = M.toneMapping),
          (u.defines = {}),
          ke.getTransfer(d) === $e && (u.defines.SRGB_TRANSFER = "");
        const v = _d[_];
        v && (u.defines[v] = ""), (u.needsUpdate = !0);
      }
      (u.uniforms.tDiffuse.value = y.texture),
        M.setRenderTarget(p),
        M.render(f, h),
        (p = null),
        (S = !1);
    }),
    (this.isCompositing = function () {
      return S;
    }),
    (this.dispose = function () {
      a.dispose(),
        o !== null && o.dispose(),
        c !== null && c.dispose(),
        l.dispose(),
        u.dispose();
    });
}
const lo = new bt(),
  Zr = new xi(1, 1),
  co = new Oa(),
  ho = new Ko(),
  uo = new Ya(),
  Sa = [],
  Ma = [],
  ya = new Float32Array(16),
  Ea = new Float32Array(9),
  Ta = new Float32Array(4);
function ni(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Sa[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (Sa[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), i[a].toArray(s, o);
  }
  return s;
}
function _t(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function vt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function ur(i, e) {
  let t = Ma[e];
  t === void 0 && ((t = new Int32Array(e)), (Ma[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function xd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Sd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    i.uniform2fv(this.addr, e), vt(t, e);
  }
}
function Md(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (_t(t, e)) return;
    i.uniform3fv(this.addr, e), vt(t, e);
  }
}
function yd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    i.uniform4fv(this.addr, e), vt(t, e);
  }
}
function Ed(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), vt(t, e);
  } else {
    if (_t(t, n)) return;
    Ta.set(n), i.uniformMatrix2fv(this.addr, !1, Ta), vt(t, n);
  }
}
function Td(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), vt(t, e);
  } else {
    if (_t(t, n)) return;
    Ea.set(n), i.uniformMatrix3fv(this.addr, !1, Ea), vt(t, n);
  }
}
function bd(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), vt(t, e);
  } else {
    if (_t(t, n)) return;
    ya.set(n), i.uniformMatrix4fv(this.addr, !1, ya), vt(t, n);
  }
}
function Ad(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Rd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    i.uniform2iv(this.addr, e), vt(t, e);
  }
}
function wd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (_t(t, e)) return;
    i.uniform3iv(this.addr, e), vt(t, e);
  }
}
function Cd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    i.uniform4iv(this.addr, e), vt(t, e);
  }
}
function Pd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function Ld(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    i.uniform2uiv(this.addr, e), vt(t, e);
  }
}
function Dd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (_t(t, e)) return;
    i.uniform3uiv(this.addr, e), vt(t, e);
  }
}
function Id(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    i.uniform4uiv(this.addr, e), vt(t, e);
  }
}
function Nd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  let s;
  this.type === i.SAMPLER_2D_SHADOW
    ? ((Zr.compareFunction = t.isReversedDepthBuffer() ? 518 : 515), (s = Zr))
    : (s = lo),
    t.setTexture2D(e || s, r);
}
function Ud(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || ho, r);
}
function Fd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || uo, r);
}
function Bd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || co, r);
}
function Od(i) {
  switch (i) {
    case 5126:
      return xd;
    case 35664:
      return Sd;
    case 35665:
      return Md;
    case 35666:
      return yd;
    case 35674:
      return Ed;
    case 35675:
      return Td;
    case 35676:
      return bd;
    case 5124:
    case 35670:
      return Ad;
    case 35667:
    case 35671:
      return Rd;
    case 35668:
    case 35672:
      return wd;
    case 35669:
    case 35673:
      return Cd;
    case 5125:
      return Pd;
    case 36294:
      return Ld;
    case 36295:
      return Dd;
    case 36296:
      return Id;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Nd;
    case 35679:
    case 36299:
    case 36307:
      return Ud;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Fd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Bd;
  }
}
function Gd(i, e) {
  i.uniform1fv(this.addr, e);
}
function zd(i, e) {
  const t = ni(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Vd(i, e) {
  const t = ni(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Hd(i, e) {
  const t = ni(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function kd(i, e) {
  const t = ni(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Wd(i, e) {
  const t = ni(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Xd(i, e) {
  const t = ni(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function qd(i, e) {
  i.uniform1iv(this.addr, e);
}
function Yd(i, e) {
  i.uniform2iv(this.addr, e);
}
function Kd(i, e) {
  i.uniform3iv(this.addr, e);
}
function Jd(i, e) {
  i.uniform4iv(this.addr, e);
}
function Zd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function $d(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Qd(i, e) {
  i.uniform3uiv(this.addr, e);
}
function jd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function ef(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = ur(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? (a = Zr) : (a = lo);
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || a, s[o]);
}
function tf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = ur(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || ho, s[a]);
}
function nf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = ur(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || uo, s[a]);
}
function rf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = ur(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || co, s[a]);
}
function sf(i) {
  switch (i) {
    case 5126:
      return Gd;
    case 35664:
      return zd;
    case 35665:
      return Vd;
    case 35666:
      return Hd;
    case 35674:
      return kd;
    case 35675:
      return Wd;
    case 35676:
      return Xd;
    case 5124:
    case 35670:
      return qd;
    case 35667:
    case 35671:
      return Yd;
    case 35668:
    case 35672:
      return Kd;
    case 35669:
    case 35673:
      return Jd;
    case 5125:
      return Zd;
    case 36294:
      return $d;
    case 36295:
      return Qd;
    case 36296:
      return jd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ef;
    case 35679:
    case 36299:
    case 36307:
      return tf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return nf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return rf;
  }
}
class af {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Od(t.type));
  }
}
class of {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = sf(t.type));
  }
}
class lf {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const qr = /(\w+)(\])?(\[|\.)?/g;
function ba(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function cf(i, e, t) {
  const n = i.name,
    r = n.length;
  for (qr.lastIndex = 0; ; ) {
    const s = qr.exec(n),
      a = qr.lastIndex;
    let o = s[1];
    const c = s[2] === "]",
      l = s[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === r))) {
      ba(t, l === void 0 ? new af(o, i, e) : new of(o, i, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && ((f = new lf(o)), ba(t, f)), (t = f);
    }
  }
}
class er {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a),
        c = e.getUniformLocation(t, o.name);
      cf(o, c, this);
    }
    const r = [],
      s = [];
    for (const a of this.seq)
      a.type === e.SAMPLER_2D_SHADOW ||
      a.type === e.SAMPLER_CUBE_SHADOW ||
      a.type === e.SAMPLER_2D_ARRAY_SHADOW
        ? r.push(a)
        : s.push(a);
    r.length > 0 && (this.seq = r.concat(s));
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Aa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const hf = 37297;
let uf = 0;
function df(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Ra = new De();
function ff(i) {
  ke._getMatrix(Ra, ke.workingColorSpace, i);
  const e = `mat3( ${Ra.elements.map((t) => t.toFixed(4))} )`;
  switch (ke.getTransfer(i)) {
    case nr:
      return [e, "LinearTransferOETF"];
    case $e:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        ye("WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
      );
  }
}
function wa(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return (
      t.toUpperCase() +
      `

` +
      s +
      `

` +
      df(i.getShaderSource(e), o)
    );
  } else return s;
}
function pf(i, e) {
  const t = ff(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
const mf = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom",
};
function gf(i, e) {
  const t = mf[e];
  return t === void 0
    ? (ye("WebGLProgram: Unsupported toneMapping:", e),
      "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }")
    : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Qi = new L();
function _f() {
  ke.getLuminanceCoefficients(Qi);
  const i = Qi.x.toFixed(4),
    e = Qi.y.toFixed(4),
    t = Qi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function vf(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(fi).join(`
`);
}
function xf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Sf(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2),
      s.type === i.FLOAT_MAT3 && (o = 3),
      s.type === i.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: s.type,
        location: i.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function fi(i) {
  return i !== "";
}
function Ca(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_SUN_LIGHTS/g, e.numSunLights)
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_SUN_LIGHT_SHADOWS/g, e.numSunLightShadows)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Pa(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Mf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function $r(i) {
  return i.replace(Mf, Ef);
}
const yf = new Map();
function Ef(i, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = yf.get(e);
    if (n !== void 0)
      (t = Fe[n]),
        ye(
          'WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else
      throw new Error(
        "THREE.WebGLProgram: Can not resolve #include <" + e + ">"
      );
  }
  return $r(t);
}
const Tf =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function La(i) {
  return i.replace(Tf, bf);
}
function bf(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Da(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
const Af = { 1: "SHADOWMAP_TYPE_PCF", 3: "SHADOWMAP_TYPE_VSM" };
function Rf(i) {
  return Af[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const wf = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV",
};
function Cf(i) {
  return i.envMap === !1
    ? "ENVMAP_TYPE_CUBE"
    : wf[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const Pf = { 302: "ENVMAP_MODE_REFRACTION" };
function Lf(i) {
  return i.envMap === !1
    ? "ENVMAP_MODE_REFLECTION"
    : Pf[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const Df = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD",
};
function If(i) {
  return i.envMap === !1
    ? "ENVMAP_BLENDING_NONE"
    : Df[i.combine] || "ENVMAP_BLENDING_NONE";
}
function Nf(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
    texelHeight: n,
    maxMip: t,
  };
}
function Uf(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const c = Rf(t),
    l = Cf(t),
    u = Lf(t),
    f = If(t),
    h = Nf(t),
    d = vf(t),
    _ = xf(s),
    S = r.createProgram();
  let m,
    p,
    A = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
      ].filter(fi).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
      ].filter(fi).join(`
`)),
      p.length > 0 &&
        (p += `
`))
    : ((m = [
        Da(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexNormals ? "#define HAS_NORMAL" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(fi).join(`
`)),
      (p = [
        Da(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + f : "",
        h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
        h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
        h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.retroreflection ? "#define USE_RETROREFLECTION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
        t.toneMapping !== 0 ? Fe.tonemapping_pars_fragment : "",
        t.toneMapping !== 0 ? gf("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Fe.colorspace_pars_fragment,
        pf("linearToOutputTexel", t.outputColorSpace),
        _f(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(fi).join(`
`))),
    (a = $r(a)),
    (a = Ca(a, t)),
    (a = Pa(a, t)),
    (o = $r(o)),
    (o = Ca(o, t)),
    (o = Pa(o, t)),
    (a = La(a)),
    (o = La(o)),
    t.isRawShaderMaterial !== !0 &&
      ((A = `#version 300 es
`),
      (m =
        [
          d,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (p =
        [
          "#define varying in",
          t.glslVersion === bs
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === bs ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        p));
  const w = A + m + a,
    M = A + p + o,
    E = Aa(r, r.VERTEX_SHADER, w),
    y = Aa(r, r.FRAGMENT_SHADER, M);
  r.attachShader(S, E),
    r.attachShader(S, y),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(S, 0, t.index0AttributeName)
      : t.hasPositionAttribute === !0 && r.bindAttribLocation(S, 0, "position"),
    r.linkProgram(S);
  function R(U) {
    if (i.debug.checkShaderErrors) {
      const B = r.getProgramInfoLog(S) || "",
        V = r.getShaderInfoLog(E) || "",
        I = r.getShaderInfoLog(y) || "",
        H = B.trim(),
        K = V.trim(),
        J = I.trim();
      let ne = !0,
        X = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (((ne = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(r, S, E, y);
        else {
          const j = wa(r, E, "vertex"),
            te = wa(r, y, "fragment");
          Pe(
            "WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(S, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              U.name +
              `
Material Type: ` +
              U.type +
              `

Program Info Log: ` +
              H +
              `
` +
              j +
              `
` +
              te
          );
        }
      else
        H !== ""
          ? ye("WebGLProgram: Program Info Log:", H)
          : (K === "" || J === "") && (X = !1);
      X &&
        (U.diagnostics = {
          runnable: ne,
          programLog: H,
          vertexShader: { log: K, prefix: m },
          fragmentShader: { log: J, prefix: p },
        });
    }
    r.deleteShader(E), r.deleteShader(y), (v = new er(r, S)), (b = Sf(r, S));
  }
  let v;
  this.getUniforms = function () {
    return v === void 0 && R(this), v;
  };
  let b;
  this.getAttributes = function () {
    return b === void 0 && R(this), b;
  };
  let P = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return P === !1 && (P = r.getProgramParameter(S, hf)), P;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(S),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = uf++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = S),
    (this.vertexShader = E),
    (this.fragmentShader = y),
    this
  );
}
let Ff = 0;
class Bf {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e, t, n) {
    const r = this._getShaderCacheForMaterial(e);
    return (
      r.has(t) === !1 && (r.add(t), t.usedTimes++),
      r.has(n) === !1 && (r.add(n), n.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderStage(e) {
    return this._getShaderStage(e.vertexShader);
  }
  getFragmentShaderStage(e) {
    return this._getShaderStage(e.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Of(e)), t.set(e, n)), n;
  }
}
class Of {
  constructor(e) {
    (this.id = Ff++), (this.code = e), (this.usedTimes = 0);
  }
}
function Gf(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function zf(i, e, t, n, r, s) {
  const a = new Ga(),
    o = new Bf(),
    c = new Set(),
    l = [],
    u = new Map(),
    f = n.logarithmicDepthBuffer;
  let h = n.precision;
  const d = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function _(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function S(v, b, P, U, B, V) {
    const I = U.fog,
      H = B.geometry,
      K =
        v.isMeshStandardMaterial ||
        v.isMeshLambertMaterial ||
        v.isMeshPhongMaterial
          ? U.environment
          : null,
      J =
        v.isMeshStandardMaterial ||
        (v.isMeshLambertMaterial && !v.envMap) ||
        (v.isMeshPhongMaterial && !v.envMap),
      ne = e.get(v.envMap || K, J),
      X = ne && ne.mapping === 306 ? ne.image.height : null,
      j = d[v.type];
    v.precision !== null &&
      ((h = n.getMaxPrecision(v.precision)),
      h !== v.precision &&
        ye(
          "WebGLProgram.getParameters:",
          v.precision,
          "not supported, using",
          h,
          "instead."
        ));
    const te =
        H.morphAttributes.position ||
        H.morphAttributes.normal ||
        H.morphAttributes.color,
      we = te !== void 0 ? te.length : 0;
    let be = 0;
    H.morphAttributes.position !== void 0 && (be = 1),
      H.morphAttributes.normal !== void 0 && (be = 2),
      H.morphAttributes.color !== void 0 && (be = 3);
    let it, We, Ye, q;
    if (j) {
      const st = Qt[j];
      (it = st.vertexShader), (We = st.fragmentShader);
    } else {
      (it = v.vertexShader), (We = v.fragmentShader);
      const st = o.getVertexShaderStage(v),
        Ke = o.getFragmentShaderStage(v);
      o.update(v, st, Ke), (Ye = st.id), (q = Ke.id);
    }
    const Q = i.getRenderTarget(),
      _e = i.state.buffers.depth.getReversed(),
      Le = B.isInstancedMesh === !0,
      me = B.isBatchedMesh === !0,
      Oe = !!v.map,
      gt = !!v.matcap,
      Ge = !!ne,
      qe = !!v.aoMap,
      rt = !!v.lightMap,
      He = !!v.bumpMap && v.wireframe === !1,
      lt = !!v.normalMap,
      xt = !!v.displacementMap,
      Ct = !!v.emissiveMap,
      ct = !!v.metalnessMap,
      dt = !!v.roughnessMap,
      N = v.anisotropy > 0,
      Mt = v.clearcoat > 0,
      Ze = v.dispersion > 0,
      T = v.retroreflectivity > 0,
      g = v.iridescence > 0,
      F = v.sheen > 0,
      z = v.transmission > 0,
      W = N && !!v.anisotropyMap,
      ie = Mt && !!v.clearcoatMap,
      re = Mt && !!v.clearcoatNormalMap,
      Y = Mt && !!v.clearcoatRoughnessMap,
      $ = g && !!v.iridescenceMap,
      se = g && !!v.iridescenceThicknessMap,
      Ee = F && !!v.sheenColorMap,
      ce = F && !!v.sheenRoughnessMap,
      ae = !!v.specularMap,
      Te = !!v.specularColorMap,
      Ce = !!v.specularIntensityMap,
      Ie = z && !!v.transmissionMap,
      D = z && !!v.thicknessMap,
      oe = !!v.gradientMap,
      Z = !!v.alphaMap,
      le = v.alphaTest > 0,
      fe = !!v.alphaHash,
      ee = !!v.extensions;
    let Ae = 0;
    v.toneMapped &&
      (Q === null || Q.isXRRenderTarget === !0) &&
      (Ae = i.toneMapping);
    const Se = {
      shaderID: j,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: it,
      fragmentShader: We,
      defines: v.defines,
      customVertexShaderID: Ye,
      customFragmentShaderID: q,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: h,
      batching: me,
      batchingColor: me && B._colorsTexture !== null,
      instancing: Le,
      instancingColor: Le && B.instanceColor !== null,
      instancingMorph: Le && B.morphTexture !== null,
      outputColorSpace:
        Q === null
          ? i.outputColorSpace
          : Q.isXRRenderTarget === !0
          ? Q.texture.colorSpace
          : ke.workingColorSpace,
      alphaToCoverage: !!v.alphaToCoverage,
      map: Oe,
      matcap: gt,
      envMap: Ge,
      envMapMode: Ge && ne.mapping,
      envMapCubeUVHeight: X,
      aoMap: qe,
      lightMap: rt,
      bumpMap: He,
      normalMap: lt,
      displacementMap: xt,
      emissiveMap: Ct,
      normalMapObjectSpace: lt && v.normalMapType === 1,
      normalMapTangentSpace: lt && v.normalMapType === 0,
      packedNormalMap: lt && v.normalMapType === 0 && Gf(v.normalMap.format),
      metalnessMap: ct,
      roughnessMap: dt,
      anisotropy: N,
      anisotropyMap: W,
      clearcoat: Mt,
      clearcoatMap: ie,
      clearcoatNormalMap: re,
      clearcoatRoughnessMap: Y,
      dispersion: Ze,
      retroreflection: T,
      iridescence: g,
      iridescenceMap: $,
      iridescenceThicknessMap: se,
      sheen: F,
      sheenColorMap: Ee,
      sheenRoughnessMap: ce,
      specularMap: ae,
      specularColorMap: Te,
      specularIntensityMap: Ce,
      transmission: z,
      transmissionMap: Ie,
      thicknessMap: D,
      gradientMap: oe,
      opaque:
        v.transparent === !1 && v.blending === 1 && v.alphaToCoverage === !1,
      alphaMap: Z,
      alphaTest: le,
      alphaHash: fe,
      combine: v.combine,
      mapUv: Oe && _(v.map.channel),
      aoMapUv: qe && _(v.aoMap.channel),
      lightMapUv: rt && _(v.lightMap.channel),
      bumpMapUv: He && _(v.bumpMap.channel),
      normalMapUv: lt && _(v.normalMap.channel),
      displacementMapUv: xt && _(v.displacementMap.channel),
      emissiveMapUv: Ct && _(v.emissiveMap.channel),
      metalnessMapUv: ct && _(v.metalnessMap.channel),
      roughnessMapUv: dt && _(v.roughnessMap.channel),
      anisotropyMapUv: W && _(v.anisotropyMap.channel),
      clearcoatMapUv: ie && _(v.clearcoatMap.channel),
      clearcoatNormalMapUv: re && _(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Y && _(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: $ && _(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: se && _(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ee && _(v.sheenColorMap.channel),
      sheenRoughnessMapUv: ce && _(v.sheenRoughnessMap.channel),
      specularMapUv: ae && _(v.specularMap.channel),
      specularColorMapUv: Te && _(v.specularColorMap.channel),
      specularIntensityMapUv: Ce && _(v.specularIntensityMap.channel),
      transmissionMapUv: Ie && _(v.transmissionMap.channel),
      thicknessMapUv: D && _(v.thicknessMap.channel),
      alphaMapUv: Z && _(v.alphaMap.channel),
      vertexTangents: !!H.attributes.tangent && (lt || N),
      vertexNormals: !!H.attributes.normal,
      vertexColors: v.vertexColors,
      vertexAlphas:
        v.vertexColors === !0 &&
        !!H.attributes.color &&
        H.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!H.attributes.uv && (Oe || Z),
      fog: !!I,
      useFog: v.fog === !0,
      fogExp2: !!I && I.isFogExp2,
      flatShading:
        v.wireframe === !1 &&
        (v.flatShading === !0 ||
          (H.attributes.normal === void 0 &&
            lt === !1 &&
            (v.isMeshLambertMaterial ||
              v.isMeshPhongMaterial ||
              v.isMeshStandardMaterial ||
              v.isMeshPhysicalMaterial))),
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reversedDepthBuffer: _e,
      skinning: B.isSkinnedMesh === !0,
      hasPositionAttribute: H.attributes.position !== void 0,
      morphTargets: H.morphAttributes.position !== void 0,
      morphNormals: H.morphAttributes.normal !== void 0,
      morphColors: H.morphAttributes.color !== void 0,
      morphTargetsCount: we,
      morphTextureStride: be,
      numSunLights: b.sun.length,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numSunLightShadows: b.sunShadowMap.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numLightProbes: b.numLightProbes,
      numLightProbeGrids: V.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Ae,
      decodeVideoTexture:
        Oe &&
        v.map.isVideoTexture === !0 &&
        ke.getTransfer(v.map.colorSpace) === $e,
      decodeVideoTextureEmissive:
        Ct &&
        v.emissiveMap.isVideoTexture === !0 &&
        ke.getTransfer(v.emissiveMap.colorSpace) === $e,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === 2,
      flipSided: v.side === 1,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance:
        ee &&
        v.extensions.clipCullDistance === !0 &&
        t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((ee && v.extensions.multiDraw === !0) || me) &&
        t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has(
        "KHR_parallel_shader_compile"
      ),
      customProgramCacheKey: v.customProgramCacheKey(),
    };
    return (
      (Se.vertexUv1s = c.has(1)),
      (Se.vertexUv2s = c.has(2)),
      (Se.vertexUv3s = c.has(3)),
      c.clear(),
      Se
    );
  }
  function m(v) {
    const b = [];
    if (
      (v.shaderID
        ? b.push(v.shaderID)
        : (b.push(v.customVertexShaderID), b.push(v.customFragmentShaderID)),
      v.defines !== void 0)
    )
      for (const P in v.defines) b.push(P), b.push(v.defines[P]);
    return (
      v.isRawShaderMaterial === !1 &&
        (p(b, v), A(b, v), b.push(i.outputColorSpace)),
      b.push(v.customProgramCacheKey),
      b.join()
    );
  }
  function p(v, b) {
    v.push(b.precision),
      v.push(b.outputColorSpace),
      v.push(b.envMapMode),
      v.push(b.envMapCubeUVHeight),
      v.push(b.mapUv),
      v.push(b.alphaMapUv),
      v.push(b.lightMapUv),
      v.push(b.aoMapUv),
      v.push(b.bumpMapUv),
      v.push(b.normalMapUv),
      v.push(b.displacementMapUv),
      v.push(b.emissiveMapUv),
      v.push(b.metalnessMapUv),
      v.push(b.roughnessMapUv),
      v.push(b.anisotropyMapUv),
      v.push(b.clearcoatMapUv),
      v.push(b.clearcoatNormalMapUv),
      v.push(b.clearcoatRoughnessMapUv),
      v.push(b.iridescenceMapUv),
      v.push(b.iridescenceThicknessMapUv),
      v.push(b.sheenColorMapUv),
      v.push(b.sheenRoughnessMapUv),
      v.push(b.specularMapUv),
      v.push(b.specularColorMapUv),
      v.push(b.specularIntensityMapUv),
      v.push(b.transmissionMapUv),
      v.push(b.thicknessMapUv),
      v.push(b.combine),
      v.push(b.fogExp2),
      v.push(b.sizeAttenuation),
      v.push(b.morphTargetsCount),
      v.push(b.morphAttributeCount),
      v.push(b.numSunLights),
      v.push(b.numDirLights),
      v.push(b.numPointLights),
      v.push(b.numSpotLights),
      v.push(b.numSpotLightMaps),
      v.push(b.numHemiLights),
      v.push(b.numRectAreaLights),
      v.push(b.numSunLightShadows),
      v.push(b.numDirLightShadows),
      v.push(b.numPointLightShadows),
      v.push(b.numSpotLightShadows),
      v.push(b.numSpotLightShadowsWithMaps),
      v.push(b.numLightProbes),
      v.push(b.shadowMapType),
      v.push(b.toneMapping),
      v.push(b.numClippingPlanes),
      v.push(b.numClipIntersection),
      v.push(b.depthPacking);
  }
  function A(v, b) {
    a.disableAll(),
      b.instancing && a.enable(0),
      b.instancingColor && a.enable(1),
      b.instancingMorph && a.enable(2),
      b.matcap && a.enable(3),
      b.envMap && a.enable(4),
      b.normalMapObjectSpace && a.enable(5),
      b.normalMapTangentSpace && a.enable(6),
      b.clearcoat && a.enable(7),
      b.iridescence && a.enable(8),
      b.alphaTest && a.enable(9),
      b.vertexColors && a.enable(10),
      b.vertexAlphas && a.enable(11),
      b.vertexUv1s && a.enable(12),
      b.vertexUv2s && a.enable(13),
      b.vertexUv3s && a.enable(14),
      b.vertexTangents && a.enable(15),
      b.anisotropy && a.enable(16),
      b.alphaHash && a.enable(17),
      b.batching && a.enable(18),
      b.dispersion && a.enable(19),
      b.retroreflection && a.enable(24),
      b.batchingColor && a.enable(20),
      b.gradientMap && a.enable(21),
      b.packedNormalMap && a.enable(22),
      b.vertexNormals && a.enable(23),
      v.push(a.mask),
      a.disableAll(),
      b.fog && a.enable(0),
      b.useFog && a.enable(1),
      b.flatShading && a.enable(2),
      b.logarithmicDepthBuffer && a.enable(3),
      b.reversedDepthBuffer && a.enable(4),
      b.skinning && a.enable(5),
      b.morphTargets && a.enable(6),
      b.morphNormals && a.enable(7),
      b.morphColors && a.enable(8),
      b.premultipliedAlpha && a.enable(9),
      b.shadowMapEnabled && a.enable(10),
      b.doubleSided && a.enable(11),
      b.flipSided && a.enable(12),
      b.useDepthPacking && a.enable(13),
      b.dithering && a.enable(14),
      b.transmission && a.enable(15),
      b.sheen && a.enable(16),
      b.opaque && a.enable(17),
      b.pointsUvs && a.enable(18),
      b.decodeVideoTexture && a.enable(19),
      b.decodeVideoTextureEmissive && a.enable(20),
      b.alphaToCoverage && a.enable(21),
      b.numLightProbeGrids > 0 && a.enable(22),
      b.hasPositionAttribute && a.enable(23),
      v.push(a.mask);
  }
  function w(v) {
    const b = d[v.type];
    let P;
    if (b) {
      const U = Qt[b];
      P = Il.clone(U.uniforms);
    } else P = v.uniforms;
    return P;
  }
  function M(v, b) {
    let P = u.get(b);
    return (
      P !== void 0
        ? ++P.usedTimes
        : ((P = new Uf(i, b, v, r)), l.push(P), u.set(b, P)),
      P
    );
  }
  function E(v) {
    if (--v.usedTimes === 0) {
      const b = l.indexOf(v);
      (l[b] = l[l.length - 1]), l.pop(), u.delete(v.cacheKey), v.destroy();
    }
  }
  function y(v) {
    o.remove(v);
  }
  function R() {
    o.dispose();
  }
  return {
    getParameters: S,
    getProgramCacheKey: m,
    getUniforms: w,
    acquireProgram: M,
    releaseProgram: E,
    releaseShaderCache: y,
    programs: l,
    dispose: R,
  };
}
function Vf() {
  let i = new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && ((o = {}), i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, c) {
    i.get(a)[o] = c;
  }
  function s() {
    i = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: s };
}
function Hf(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.materialVariant !== e.materialVariant
    ? i.materialVariant - e.materialVariant
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function Ia(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function Na() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function a(h) {
    let d = 0;
    return h.isInstancedMesh && (d += 2), h.isSkinnedMesh && (d += 1), d;
  }
  function o(h, d, _, S, m, p) {
    let A = i[e];
    return (
      A === void 0
        ? ((A = {
            id: h.id,
            object: h,
            geometry: d,
            material: _,
            materialVariant: a(h),
            groupOrder: S,
            renderOrder: h.renderOrder,
            z: m,
            group: p,
          }),
          (i[e] = A))
        : ((A.id = h.id),
          (A.object = h),
          (A.geometry = d),
          (A.material = _),
          (A.materialVariant = a(h)),
          (A.groupOrder = S),
          (A.renderOrder = h.renderOrder),
          (A.z = m),
          (A.group = p)),
      e++,
      A
    );
  }
  function c(h, d, _, S, m, p, A) {
    A.reversedDepth === !0 && (m = -m);
    const w = o(h, d, _, S, m, p);
    _.transmission > 0
      ? n.push(w)
      : _.transparent === !0
      ? r.push(w)
      : t.push(w);
  }
  function l(h, d, _, S, m, p) {
    const A = o(h, d, _, S, m, p);
    _.transmission > 0
      ? n.unshift(A)
      : _.transparent === !0
      ? r.unshift(A)
      : t.unshift(A);
  }
  function u(h, d) {
    t.length > 1 && t.sort(h || Hf),
      n.length > 1 && n.sort(d || Ia),
      r.length > 1 && r.sort(d || Ia);
  }
  function f() {
    for (let h = e, d = i.length; h < d; h++) {
      const _ = i[h];
      if (_.id === null) break;
      (_.id = null),
        (_.object = null),
        (_.geometry = null),
        (_.material = null),
        (_.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: c,
    unshift: l,
    finish: f,
    sort: u,
  };
}
function kf() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new Na()), i.set(n, [a]))
        : r >= s.length
        ? ((a = new Na()), s.push(a))
        : (a = s[r]),
      a
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Wf() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "SunLight":
        case "DirectionalLight":
          t = { direction: new L(), color: new Ne() };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new Ne(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new L(), color: new Ne(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new L(), skyColor: new Ne(), groundColor: new Ne() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ne(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function Xf() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "SunLight":
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let qf = 0;
function Yf(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function Kf(i) {
  const e = new Wf(),
    t = Xf(),
    n = {
      version: 0,
      hash: {
        sunLength: -1,
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numSunShadows: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      sun: [],
      sunShadow: [],
      sunShadowMap: [],
      sunShadowMatrix: [],
      sunShadowCascade: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new L());
  const r = new L(),
    s = new Ve(),
    a = new Ve();
  function o(l) {
    let u = 0,
      f = 0,
      h = 0;
    for (let B = 0; B < 9; B++) n.probe[B].set(0, 0, 0);
    let d = 0,
      _ = 0,
      S = 0,
      m = 0,
      p = 0,
      A = 0,
      w = 0,
      M = 0,
      E = 0,
      y = 0,
      R = 0,
      v = 0,
      b = 0,
      P = 0;
    l.sort(Yf);
    for (let B = 0, V = l.length; B < V; B++) {
      const I = l[B],
        H = I.color,
        K = I.intensity,
        J = I.distance;
      let ne = null;
      if (
        (I.shadow &&
          I.shadow.map &&
          (I.shadow.map.texture.format === 1030
            ? (ne = I.shadow.map.texture)
            : (ne = I.shadow.map.depthTexture || I.shadow.map.texture)),
        I.isAmbientLight)
      )
        (u += H.r * K), (f += H.g * K), (h += H.b * K);
      else if (I.isLightProbe) {
        for (let X = 0; X < 9; X++)
          n.probe[X].addScaledVector(I.sh.coefficients[X], K);
        P++;
      } else if (I.isSunLight) {
        const X = e.get(I);
        if ((X.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow)) {
          const j = I.shadow,
            te = t.get(I);
          (te.shadowIntensity = j.intensity),
            (te.shadowBias = j.bias),
            (te.shadowNormalBias = j.normalBias),
            (te.shadowRadius = j.radius),
            te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),
            (n.sunShadow[_] = te),
            (n.sunShadowMap[_] = ne);
          const we = j.getViewportCount();
          for (let be = 0; be < we; be++)
            (n.sunShadowMatrix[S + be] = j.getMatrix(be)),
              (n.sunShadowCascade[S + be] = j._cascadeData[be]);
          (S += we), _++;
        }
        (n.sun[d] = X), d++;
      } else if (I.isDirectionalLight) {
        const X = e.get(I);
        if ((X.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow)) {
          const j = I.shadow,
            te = t.get(I);
          (te.shadowIntensity = j.intensity),
            (te.shadowBias = j.bias),
            (te.shadowNormalBias = j.normalBias),
            (te.shadowRadius = j.radius),
            (te.shadowMapSize = j.mapSize),
            (n.directionalShadow[m] = te),
            (n.directionalShadowMap[m] = ne),
            (n.directionalShadowMatrix[m] = I.shadow.matrix),
            E++;
        }
        (n.directional[m] = X), m++;
      } else if (I.isSpotLight) {
        const X = e.get(I);
        X.position.setFromMatrixPosition(I.matrixWorld),
          X.color.copy(H).multiplyScalar(K),
          (X.distance = J),
          (X.coneCos = Math.cos(I.angle)),
          (X.penumbraCos = Math.cos(I.angle * (1 - I.penumbra))),
          (X.decay = I.decay),
          (n.spot[A] = X);
        const j = I.shadow;
        if (
          (I.map &&
            ((n.spotLightMap[v] = I.map),
            v++,
            j.updateMatrices(I),
            I.castShadow && b++),
          (n.spotLightMatrix[A] = j.matrix),
          I.castShadow)
        ) {
          const te = t.get(I);
          (te.shadowIntensity = j.intensity),
            (te.shadowBias = j.bias),
            (te.shadowNormalBias = j.normalBias),
            (te.shadowRadius = j.radius),
            (te.shadowMapSize = j.mapSize),
            (n.spotShadow[A] = te),
            (n.spotShadowMap[A] = ne),
            R++;
        }
        A++;
      } else if (I.isRectAreaLight) {
        const X = e.get(I);
        X.color.copy(H).multiplyScalar(K),
          X.halfWidth.set(I.width * 0.5, 0, 0),
          X.halfHeight.set(0, I.height * 0.5, 0),
          (n.rectArea[w] = X),
          w++;
      } else if (I.isPointLight) {
        const X = e.get(I);
        if (
          (X.color.copy(I.color).multiplyScalar(I.intensity),
          (X.distance = I.distance),
          (X.decay = I.decay),
          I.castShadow)
        ) {
          const j = I.shadow,
            te = t.get(I);
          (te.shadowIntensity = j.intensity),
            (te.shadowBias = j.bias),
            (te.shadowNormalBias = j.normalBias),
            (te.shadowRadius = j.radius),
            (te.shadowMapSize = j.mapSize),
            (te.shadowCameraNear = j.camera.near),
            (te.shadowCameraFar = j.camera.far),
            (n.pointShadow[p] = te),
            (n.pointShadowMap[p] = ne),
            (n.pointShadowMatrix[p] = I.shadow.matrix),
            y++;
        }
        (n.point[p] = X), p++;
      } else if (I.isHemisphereLight) {
        const X = e.get(I);
        X.skyColor.copy(I.color).multiplyScalar(K),
          X.groundColor.copy(I.groundColor).multiplyScalar(K),
          (n.hemi[M] = X),
          M++;
      }
    }
    w > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = he.LTC_FLOAT_1), (n.rectAreaLTC2 = he.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = he.LTC_HALF_1), (n.rectAreaLTC2 = he.LTC_HALF_2))),
      (n.ambient[0] = u),
      (n.ambient[1] = f),
      (n.ambient[2] = h);
    const U = n.hash;
    (U.sunLength !== d ||
      U.directionalLength !== m ||
      U.pointLength !== p ||
      U.spotLength !== A ||
      U.rectAreaLength !== w ||
      U.hemiLength !== M ||
      U.numSunShadows !== _ ||
      U.numDirectionalShadows !== E ||
      U.numPointShadows !== y ||
      U.numSpotShadows !== R ||
      U.numSpotMaps !== v ||
      U.numLightProbes !== P) &&
      ((n.sun.length = d),
      (n.directional.length = m),
      (n.spot.length = A),
      (n.rectArea.length = w),
      (n.point.length = p),
      (n.hemi.length = M),
      (n.sunShadow.length = _),
      (n.sunShadowMap.length = _),
      (n.sunShadowMatrix.length = S),
      (n.sunShadowCascade.length = S),
      (n.directionalShadow.length = E),
      (n.directionalShadowMap.length = E),
      (n.directionalShadowMatrix.length = E),
      (n.pointShadow.length = y),
      (n.pointShadowMap.length = y),
      (n.pointShadowMatrix.length = y),
      (n.spotShadow.length = R),
      (n.spotShadowMap.length = R),
      (n.spotLightMatrix.length = R + v - b),
      (n.spotLightMap.length = v),
      (n.numSpotLightShadowsWithMaps = b),
      (n.numLightProbes = P),
      (U.sunLength = d),
      (U.directionalLength = m),
      (U.pointLength = p),
      (U.spotLength = A),
      (U.rectAreaLength = w),
      (U.hemiLength = M),
      (U.numSunShadows = _),
      (U.numDirectionalShadows = E),
      (U.numPointShadows = y),
      (U.numSpotShadows = R),
      (U.numSpotMaps = v),
      (U.numLightProbes = P),
      (n.version = qf++));
  }
  function c(l, u) {
    let f = 0,
      h = 0,
      d = 0,
      _ = 0,
      S = 0,
      m = 0;
    const p = u.matrixWorldInverse;
    for (let A = 0, w = l.length; A < w; A++) {
      const M = l[A];
      if (M.isSunLight) {
        const E = n.sun[f];
        E.direction.setFromMatrixPosition(M.matrixWorld),
          E.direction.transformDirection(p),
          f++;
      } else if (M.isDirectionalLight) {
        const E = n.directional[h];
        E.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          E.direction.sub(r),
          E.direction.transformDirection(p),
          h++;
      } else if (M.isSpotLight) {
        const E = n.spot[_];
        E.position.setFromMatrixPosition(M.matrixWorld),
          E.position.applyMatrix4(p),
          E.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          E.direction.sub(r),
          E.direction.transformDirection(p),
          _++;
      } else if (M.isRectAreaLight) {
        const E = n.rectArea[S];
        E.position.setFromMatrixPosition(M.matrixWorld),
          E.position.applyMatrix4(p),
          a.identity(),
          s.copy(M.matrixWorld),
          s.premultiply(p),
          a.extractRotation(s),
          E.halfWidth.set(M.width * 0.5, 0, 0),
          E.halfHeight.set(0, M.height * 0.5, 0),
          E.halfWidth.applyMatrix4(a),
          E.halfHeight.applyMatrix4(a),
          S++;
      } else if (M.isPointLight) {
        const E = n.point[d];
        E.position.setFromMatrixPosition(M.matrixWorld),
          E.position.applyMatrix4(p),
          d++;
      } else if (M.isHemisphereLight) {
        const E = n.hemi[m];
        E.direction.setFromMatrixPosition(M.matrixWorld),
          E.direction.transformDirection(p),
          m++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function Ua(i) {
  const e = new Kf(i),
    t = [],
    n = [],
    r = [];
  function s(h) {
    (f.camera = h), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function a(h) {
    t.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function c(h) {
    r.push(h);
  }
  function l() {
    e.setup(t);
  }
  function u(h) {
    e.setupView(t, h);
  }
  const f = {
    lightsArray: t,
    shadowsArray: n,
    lightProbeGridArray: r,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
    textureUnits: 0,
  };
  return {
    init: s,
    state: f,
    setupLights: l,
    setupLightsView: u,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: c,
  };
}
function Jf(i) {
  let e = new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return (
      a === void 0
        ? ((o = new Ua(i)), e.set(r, [o]))
        : s >= a.length
        ? ((o = new Ua(i)), a.push(o))
        : (o = a[s]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const Zf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  $f = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,
  Qf = [
    new L(1, 0, 0),
    new L(-1, 0, 0),
    new L(0, 1, 0),
    new L(0, -1, 0),
    new L(0, 0, 1),
    new L(0, 0, -1),
  ],
  jf = [
    new L(0, -1, 0),
    new L(0, -1, 0),
    new L(0, 0, 1),
    new L(0, 0, -1),
    new L(0, -1, 0),
    new L(0, -1, 0),
  ],
  Fa = new Ve(),
  di = new L(),
  Yr = new L();
function ep(i, e, t) {
  let n = new ts();
  const r = new Re(),
    s = new Re(),
    a = new tt(),
    o = new Ol(),
    c = new Gl(),
    l = {},
    u = t.maxTextureSize,
    f = { 0: 1, 1: 0, 2: 2 },
    h = new jt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Re() },
        radius: { value: 4 },
      },
      vertexShader: Zf,
      fragmentShader: $f,
    }),
    d = h.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const _ = new Pt();
  _.setAttribute(
    "position",
    new qt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const S = new Bt(_, h),
    m = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1);
  let p = this.type;
  this.render = function (y, R, v) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      y.length === 0
    )
      return;
    this.type === 2 &&
      (ye(
        "WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."
      ),
      (this.type = 1));
    const b = i.getRenderTarget(),
      P = i.getActiveCubeFace(),
      U = i.getActiveMipmapLevel(),
      B = i.state;
    B.setBlending(0),
      B.buffers.depth.getReversed() === !0
        ? B.buffers.color.setClear(0, 0, 0, 0)
        : B.buffers.color.setClear(1, 1, 1, 1),
      B.buffers.depth.setTest(!0),
      B.setScissorTest(!1);
    const V = p !== this.type;
    V &&
      R.traverse(function (I) {
        I.material &&
          (Array.isArray(I.material)
            ? I.material.forEach((H) => (H.needsUpdate = !0))
            : (I.material.needsUpdate = !0));
      });
    for (let I = 0, H = y.length; I < H; I++) {
      const K = y[I],
        J = K.shadow;
      if (J === void 0) {
        ye("WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (J.autoUpdate === !1 && J.needsUpdate === !1) continue;
      r.copy(J.mapSize);
      const ne = J.getFrameExtents();
      r.multiply(ne),
        s.copy(J.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / ne.x)),
            (r.x = s.x * ne.x),
            (J.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / ne.y)),
            (r.y = s.y * ne.y),
            (J.mapSize.y = s.y)));
      const X = i.state.buffers.depth.getReversed();
      if (((J.camera._reversedDepth = X), J.map === null || V === !0)) {
        if (
          (J.map !== null &&
            (J.map.depthTexture !== null &&
              (J.map.depthTexture.dispose(), (J.map.depthTexture = null)),
            J.map.dispose()),
          this.type === 3)
        ) {
          if (K.isPointLight) {
            ye(
              "WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead."
            );
            continue;
          }
          (J.map = new Xt(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1,
          })),
            (J.map.texture.name = K.name + ".shadowMap"),
            (J.map.depthTexture = new xi(r.x, r.y, 1015)),
            (J.map.depthTexture.name = K.name + ".shadowMapDepth"),
            (J.map.depthTexture.format = 1026),
            (J.map.depthTexture.compareFunction = null),
            (J.map.depthTexture.minFilter = 1003),
            (J.map.depthTexture.magFilter = 1003);
        } else
          K.isPointLight
            ? ((J.map = new oo(r.x)), (J.map.depthTexture = new gl(r.x, 1014)))
            : ((J.map = new Xt(r.x, r.y)),
              (J.map.depthTexture = new xi(r.x, r.y, 1014))),
            (J.map.depthTexture.name = K.name + ".shadowMap"),
            (J.map.depthTexture.format = 1026),
            this.type === 1
              ? ((J.map.depthTexture.compareFunction = X ? 518 : 515),
                (J.map.depthTexture.minFilter = 1006),
                (J.map.depthTexture.magFilter = 1006))
              : ((J.map.depthTexture.compareFunction = null),
                (J.map.depthTexture.minFilter = 1003),
                (J.map.depthTexture.magFilter = 1003));
        J.camera.updateProjectionMatrix();
      }
      J.map.isWebGLCubeRenderTarget !== !0 &&
        (J.map.width !== r.x || J.map.height !== r.y) &&
        J.map.setSize(r.x, r.y);
      const j = J.map.isWebGLCubeRenderTarget ? 6 : J.getViewportCount();
      K.isPointLight !== !0 && J.updateMatrices(K, v);
      for (let te = 0; te < j; te++) {
        const we = J.getCamera(te);
        if (K.isPointLight) {
          const be = J.camera,
            it = J.matrix,
            We = K.distance || be.far;
          We !== be.far && ((be.far = We), be.updateProjectionMatrix()),
            di.setFromMatrixPosition(K.matrixWorld),
            be.position.copy(di),
            Yr.copy(be.position),
            Yr.add(Qf[te]),
            be.up.copy(jf[te]),
            be.lookAt(Yr),
            be.updateMatrixWorld(),
            it.makeTranslation(-di.x, -di.y, -di.z),
            Fa.multiplyMatrices(be.projectionMatrix, be.matrixWorldInverse),
            J._frustum.setFromProjectionMatrix(
              Fa,
              be.coordinateSystem,
              be.reversedDepth
            );
        }
        if (J.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(J.map, te), i.clear();
        else {
          te === 0 && (i.setRenderTarget(J.map), i.clear());
          const be = J.getViewport(te);
          a.set(s.x * be.x, s.y * be.y, s.x * be.z, s.y * be.w), B.viewport(a);
        }
        (n = J.getFrustum(te)), M(R, v, we, K, this.type);
      }
      J.isPointLightShadow !== !0 && this.type === 3 && A(J, v),
        (J.needsUpdate = !1);
    }
    (p = this.type), (m.needsUpdate = !1), i.setRenderTarget(b, P, U);
  };
  function A(y, R) {
    const v = e.update(S);
    h.defines.VSM_SAMPLES !== y.blurSamples &&
      ((h.defines.VSM_SAMPLES = y.blurSamples),
      (d.defines.VSM_SAMPLES = y.blurSamples),
      (h.needsUpdate = !0),
      (d.needsUpdate = !0)),
      y.mapPass === null
        ? (y.mapPass = new Xt(r.x, r.y, { format: 1030, type: 1016 }))
        : (y.mapPass.width !== y.map.width ||
            y.mapPass.height !== y.map.height) &&
          y.mapPass.setSize(y.map.width, y.map.height),
      (h.uniforms.shadow_pass.value = y.map.depthTexture),
      h.uniforms.resolution.value.set(y.map.width, y.map.height),
      (h.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.mapPass),
      i.clear(),
      i.renderBufferDirect(R, null, v, h, S, null),
      (d.uniforms.shadow_pass.value = y.mapPass.texture),
      d.uniforms.resolution.value.set(y.map.width, y.map.height),
      (d.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.map),
      i.clear(),
      i.renderBufferDirect(R, null, v, d, S, null);
  }
  function w(y, R, v, b) {
    let P = null;
    const U =
      v.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (U !== void 0) P = U;
    else if (
      ((P = v.isPointLight === !0 ? c : o),
      (i.localClippingEnabled &&
        R.clipShadows === !0 &&
        Array.isArray(R.clippingPlanes) &&
        R.clippingPlanes.length !== 0) ||
        (R.displacementMap && R.displacementScale !== 0) ||
        (R.alphaMap && R.alphaTest > 0) ||
        (R.map && R.alphaTest > 0) ||
        R.alphaToCoverage === !0)
    ) {
      const B = P.uuid,
        V = R.uuid;
      let I = l[B];
      I === void 0 && ((I = {}), (l[B] = I));
      let H = I[V];
      H === void 0 &&
        ((H = P.clone()), (I[V] = H), R.addEventListener("dispose", E)),
        (P = H);
    }
    if (
      ((P.visible = R.visible),
      (P.wireframe = R.wireframe),
      b === 3
        ? (P.side = R.shadowSide !== null ? R.shadowSide : R.side)
        : (P.side = R.shadowSide !== null ? R.shadowSide : f[R.side]),
      (P.alphaMap = R.alphaMap),
      (P.alphaTest = R.alphaToCoverage === !0 ? 0.5 : R.alphaTest),
      (P.map = R.map),
      (P.clipShadows = R.clipShadows),
      (P.clippingPlanes = R.clippingPlanes),
      (P.clipIntersection = R.clipIntersection),
      (P.displacementMap = R.displacementMap),
      (P.displacementScale = R.displacementScale),
      (P.displacementBias = R.displacementBias),
      (P.wireframeLinewidth = R.wireframeLinewidth),
      (P.linewidth = R.linewidth),
      v.isPointLight === !0 && P.isMeshDistanceMaterial === !0)
    ) {
      const B = i.properties.get(P);
      B.light = v;
    }
    return P;
  }
  function M(y, R, v, b, P) {
    if (y.visible === !1) return;
    if (
      y.layers.test(R.layers) &&
      (y.isMesh || y.isLine || y.isPoints) &&
      (y.castShadow || (y.receiveShadow && P === 3)) &&
      (!y.frustumCulled || y.intersectsFrustum(n))
    ) {
      y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, y.matrixWorld);
      const V = e.update(y),
        I = y.material;
      if (Array.isArray(I)) {
        const H = V.groups;
        for (let K = 0, J = H.length; K < J; K++) {
          const ne = H[K],
            X = I[ne.materialIndex];
          if (X && X.visible) {
            const j = w(y, X, b, P);
            y.onBeforeShadow(i, y, R, v, V, j, ne),
              i.renderBufferDirect(v, null, V, j, y, ne),
              y.onAfterShadow(i, y, R, v, V, j, ne);
          }
        }
      } else if (I.visible) {
        const H = w(y, I, b, P);
        y.onBeforeShadow(i, y, R, v, V, H, null),
          i.renderBufferDirect(v, null, V, H, y, null),
          y.onAfterShadow(i, y, R, v, V, H, null);
      }
    }
    const B = y.children;
    for (let V = 0, I = B.length; V < I; V++) M(B[V], R, v, b, P);
  }
  function E(y) {
    y.target.removeEventListener("dispose", E);
    for (const v in l) {
      const b = l[v],
        P = y.target.uuid;
      P in b && (b[P].dispose(), delete b[P]);
    }
  }
}
function tp(i, e) {
  function t() {
    let D = !1;
    const oe = new tt();
    let Z = null;
    const le = new tt(0, 0, 0, 0);
    return {
      setMask: function (fe) {
        Z !== fe && !D && (i.colorMask(fe, fe, fe, fe), (Z = fe));
      },
      setLocked: function (fe) {
        D = fe;
      },
      setClear: function (fe, ee, Ae, Se, st) {
        st === !0 && ((fe *= Se), (ee *= Se), (Ae *= Se)),
          oe.set(fe, ee, Ae, Se),
          le.equals(oe) === !1 && (i.clearColor(fe, ee, Ae, Se), le.copy(oe));
      },
      reset: function () {
        (D = !1), (Z = null), le.set(-1, 0, 0, 0);
      },
    };
  }
  function n() {
    let D = !1,
      oe = !1,
      Z = null,
      le = null,
      fe = null;
    return {
      setReversed: function (ee) {
        if (oe !== ee) {
          const Ae = e.get("EXT_clip_control");
          ee
            ? Ae.clipControlEXT(Ae.LOWER_LEFT_EXT, Ae.ZERO_TO_ONE_EXT)
            : Ae.clipControlEXT(Ae.LOWER_LEFT_EXT, Ae.NEGATIVE_ONE_TO_ONE_EXT),
            (oe = ee);
          const Se = fe;
          (fe = null), this.setClear(Se);
        }
      },
      getReversed: function () {
        return oe;
      },
      setTest: function (ee) {
        ee ? Q(i.DEPTH_TEST) : _e(i.DEPTH_TEST);
      },
      setMask: function (ee) {
        Z !== ee && !D && (i.depthMask(ee), (Z = ee));
      },
      setFunc: function (ee) {
        if ((oe && (ee = Ao[ee]), le !== ee)) {
          switch (ee) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          le = ee;
        }
      },
      setLocked: function (ee) {
        D = ee;
      },
      setClear: function (ee) {
        fe !== ee && ((fe = ee), oe && (ee = 1 - ee), i.clearDepth(ee));
      },
      reset: function () {
        (D = !1), (Z = null), (le = null), (fe = null), (oe = !1);
      },
    };
  }
  function r() {
    let D = !1,
      oe = null,
      Z = null,
      le = null,
      fe = null,
      ee = null,
      Ae = null,
      Se = null,
      st = null;
    return {
      setTest: function (Ke) {
        D || (Ke ? Q(i.STENCIL_TEST) : _e(i.STENCIL_TEST));
      },
      setMask: function (Ke) {
        oe !== Ke && !D && (i.stencilMask(Ke), (oe = Ke));
      },
      setFunc: function (Ke, Ot, Kt) {
        (Z !== Ke || le !== Ot || fe !== Kt) &&
          (i.stencilFunc(Ke, Ot, Kt), (Z = Ke), (le = Ot), (fe = Kt));
      },
      setOp: function (Ke, Ot, Kt) {
        (ee !== Ke || Ae !== Ot || Se !== Kt) &&
          (i.stencilOp(Ke, Ot, Kt), (ee = Ke), (Ae = Ot), (Se = Kt));
      },
      setLocked: function (Ke) {
        D = Ke;
      },
      setClear: function (Ke) {
        st !== Ke && (i.clearStencil(Ke), (st = Ke));
      },
      reset: function () {
        (D = !1),
          (oe = null),
          (Z = null),
          (le = null),
          (fe = null),
          (ee = null),
          (Ae = null),
          (Se = null),
          (st = null);
      },
    };
  }
  const s = new t(),
    a = new n(),
    o = new r(),
    c = new WeakMap(),
    l = new WeakMap();
  let u = {},
    f = {},
    h = {},
    d = new WeakMap(),
    _ = [],
    S = null,
    m = !1,
    p = null,
    A = null,
    w = null,
    M = null,
    E = null,
    y = null,
    R = null,
    v = new Ne(0, 0, 0),
    b = 0,
    P = !1,
    U = null,
    B = null,
    V = null,
    I = null,
    H = null;
  const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let J = !1,
    ne = 0;
  const X = i.getParameter(i.VERSION);
  X.indexOf("WebGL") !== -1
    ? ((ne = parseFloat(/^WebGL (\d)/.exec(X)[1])), (J = ne >= 1))
    : X.indexOf("OpenGL ES") !== -1 &&
      ((ne = parseFloat(/^OpenGL ES (\d)/.exec(X)[1])), (J = ne >= 2));
  let j = null,
    te = {};
  const we = i.getParameter(i.SCISSOR_BOX),
    be = i.getParameter(i.VIEWPORT),
    it = new tt().fromArray(we),
    We = new tt().fromArray(be);
  function Ye(D, oe, Z, le) {
    const fe = new Uint8Array(4),
      ee = i.createTexture();
    i.bindTexture(D, ee),
      i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ae = 0; Ae < Z; Ae++)
      D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(oe, 0, i.RGBA, 1, 1, le, 0, i.RGBA, i.UNSIGNED_BYTE, fe)
        : i.texImage2D(
            oe + Ae,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            fe
          );
    return ee;
  }
  const q = {};
  (q[i.TEXTURE_2D] = Ye(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (q[i.TEXTURE_CUBE_MAP] = Ye(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (q[i.TEXTURE_2D_ARRAY] = Ye(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (q[i.TEXTURE_3D] = Ye(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    s.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    Q(i.DEPTH_TEST),
    a.setFunc(3),
    He(!1),
    lt(1),
    Q(i.CULL_FACE),
    qe(0);
  function Q(D) {
    u[D] !== !0 && (i.enable(D), (u[D] = !0));
  }
  function _e(D) {
    u[D] !== !1 && (i.disable(D), (u[D] = !1));
  }
  function Le(D, oe) {
    return h[D] !== oe
      ? (i.bindFramebuffer(D, oe),
        (h[D] = oe),
        D === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = oe),
        D === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = oe),
        !0)
      : !1;
  }
  function me(D, oe) {
    let Z = _,
      le = !1;
    if (D) {
      (Z = d.get(oe)), Z === void 0 && ((Z = []), d.set(oe, Z));
      const fe = D.textures;
      if (Z.length !== fe.length || Z[0] !== i.COLOR_ATTACHMENT0) {
        for (let ee = 0, Ae = fe.length; ee < Ae; ee++)
          Z[ee] = i.COLOR_ATTACHMENT0 + ee;
        (Z.length = fe.length), (le = !0);
      }
    } else Z[0] !== i.BACK && ((Z[0] = i.BACK), (le = !0));
    le && i.drawBuffers(Z);
  }
  function Oe(D) {
    return S !== D ? (i.useProgram(D), (S = D), !0) : !1;
  }
  const gt = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT,
  };
  (gt[103] = i.MIN), (gt[104] = i.MAX);
  const Ge = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function qe(D, oe, Z, le, fe, ee, Ae, Se, st, Ke) {
    if (D === 0) {
      m === !0 && (_e(i.BLEND), (m = !1));
      return;
    }
    if ((m === !1 && (Q(i.BLEND), (m = !0)), D !== 5)) {
      if (D !== p || Ke !== P) {
        if (
          ((A !== 100 || E !== 100) &&
            (i.blendEquation(i.FUNC_ADD), (A = 100), (E = 100)),
          Ke)
        )
          switch (D) {
            case 1:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(
                i.DST_COLOR,
                i.ONE_MINUS_SRC_ALPHA,
                i.ZERO,
                i.ONE
              );
              break;
            default:
              Pe("WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case 1:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              Pe(
                "WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true"
              );
              break;
            case 4:
              Pe(
                "WebGLState: MultiplyBlending requires material.premultipliedAlpha = true"
              );
              break;
            default:
              Pe("WebGLState: Invalid blending: ", D);
              break;
          }
        (w = null),
          (M = null),
          (y = null),
          (R = null),
          v.set(0, 0, 0),
          (b = 0),
          (p = D),
          (P = Ke);
      }
      return;
    }
    (fe = fe || oe),
      (ee = ee || Z),
      (Ae = Ae || le),
      (oe !== A || fe !== E) &&
        (i.blendEquationSeparate(gt[oe], gt[fe]), (A = oe), (E = fe)),
      (Z !== w || le !== M || ee !== y || Ae !== R) &&
        (i.blendFuncSeparate(Ge[Z], Ge[le], Ge[ee], Ge[Ae]),
        (w = Z),
        (M = le),
        (y = ee),
        (R = Ae)),
      (Se.equals(v) === !1 || st !== b) &&
        (i.blendColor(Se.r, Se.g, Se.b, st), v.copy(Se), (b = st)),
      (p = D),
      (P = !1);
  }
  function rt(D, oe) {
    D.side === 2 ? _e(i.CULL_FACE) : Q(i.CULL_FACE);
    let Z = D.side === 1;
    oe && (Z = !Z),
      He(Z),
      D.blending === 1 && D.transparent === !1
        ? qe(0)
        : qe(
            D.blending,
            D.blendEquation,
            D.blendSrc,
            D.blendDst,
            D.blendEquationAlpha,
            D.blendSrcAlpha,
            D.blendDstAlpha,
            D.blendColor,
            D.blendAlpha,
            D.premultipliedAlpha
          ),
      a.setFunc(D.depthFunc),
      a.setTest(D.depthTest),
      a.setMask(D.depthWrite),
      s.setMask(D.colorWrite);
    const le = D.stencilWrite;
    o.setTest(le),
      le &&
        (o.setMask(D.stencilWriteMask),
        o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask),
        o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)),
      Ct(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits),
      D.alphaToCoverage === !0
        ? Q(i.SAMPLE_ALPHA_TO_COVERAGE)
        : _e(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function He(D) {
    U !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), (U = D));
  }
  function lt(D) {
    D !== 0
      ? (Q(i.CULL_FACE),
        D !== B &&
          (D === 1
            ? i.cullFace(i.BACK)
            : D === 2
            ? i.cullFace(i.FRONT)
            : i.cullFace(i.FRONT_AND_BACK)))
      : _e(i.CULL_FACE),
      (B = D);
  }
  function xt(D) {
    D !== V && (J && i.lineWidth(D), (V = D));
  }
  function Ct(D, oe, Z) {
    D
      ? (Q(i.POLYGON_OFFSET_FILL),
        (I !== oe || H !== Z) &&
          ((I = oe),
          (H = Z),
          a.getReversed() && (oe = -oe),
          i.polygonOffset(oe, Z)))
      : _e(i.POLYGON_OFFSET_FILL);
  }
  function ct(D) {
    D ? Q(i.SCISSOR_TEST) : _e(i.SCISSOR_TEST);
  }
  function dt(D) {
    D === void 0 && (D = i.TEXTURE0 + K - 1),
      j !== D && (i.activeTexture(D), (j = D));
  }
  function N(D, oe, Z) {
    Z === void 0 && (j === null ? (Z = i.TEXTURE0 + K - 1) : (Z = j));
    let le = te[Z];
    le === void 0 && ((le = { type: void 0, texture: void 0 }), (te[Z] = le)),
      (le.type !== D || le.texture !== oe) &&
        (j !== Z && (i.activeTexture(Z), (j = Z)),
        i.bindTexture(D, oe || q[D]),
        (le.type = D),
        (le.texture = oe));
  }
  function Mt() {
    const D = te[j];
    D !== void 0 &&
      D.type !== void 0 &&
      (i.bindTexture(D.type, null), (D.type = void 0), (D.texture = void 0));
  }
  function Ze() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function T() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function g() {
    try {
      i.texSubImage2D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function F() {
    try {
      i.texSubImage3D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function z() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function W() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function ie() {
    try {
      i.texStorage2D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function re() {
    try {
      i.texStorage3D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function Y() {
    try {
      i.texImage2D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function $() {
    try {
      i.texImage3D(...arguments);
    } catch (D) {
      Pe("WebGLState:", D);
    }
  }
  function se(D) {
    return f[D] !== void 0 ? f[D] : i.getParameter(D);
  }
  function Ee(D, oe) {
    f[D] !== oe && (i.pixelStorei(D, oe), (f[D] = oe));
  }
  function ce(D) {
    it.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), it.copy(D));
  }
  function ae(D) {
    We.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), We.copy(D));
  }
  function Te(D, oe) {
    let Z = l.get(oe);
    Z === void 0 && ((Z = new WeakMap()), l.set(oe, Z));
    let le = Z.get(D);
    le === void 0 && ((le = i.getUniformBlockIndex(oe, D.name)), Z.set(D, le));
  }
  function Ce(D, oe) {
    const le = l.get(oe).get(D);
    c.get(oe) !== le &&
      (i.uniformBlockBinding(oe, le, D.__bindingPointIndex), c.set(oe, le));
  }
  function Ie() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      a.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      i.pixelStorei(i.PACK_ALIGNMENT, 4),
      i.pixelStorei(i.UNPACK_ALIGNMENT, 4),
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1),
      i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
      i.pixelStorei(
        i.UNPACK_COLORSPACE_CONVERSION_WEBGL,
        i.BROWSER_DEFAULT_WEBGL
      ),
      i.pixelStorei(i.PACK_ROW_LENGTH, 0),
      i.pixelStorei(i.PACK_SKIP_PIXELS, 0),
      i.pixelStorei(i.PACK_SKIP_ROWS, 0),
      i.pixelStorei(i.UNPACK_ROW_LENGTH, 0),
      i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0),
      i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0),
      i.pixelStorei(i.UNPACK_SKIP_ROWS, 0),
      i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0),
      (u = {}),
      (f = {}),
      (j = null),
      (te = {}),
      (h = {}),
      (d = new WeakMap()),
      (_ = []),
      (S = null),
      (m = !1),
      (p = null),
      (A = null),
      (w = null),
      (M = null),
      (E = null),
      (y = null),
      (R = null),
      (v = new Ne(0, 0, 0)),
      (b = 0),
      (P = !1),
      (U = null),
      (B = null),
      (V = null),
      (I = null),
      (H = null),
      it.set(0, 0, i.canvas.width, i.canvas.height),
      We.set(0, 0, i.canvas.width, i.canvas.height),
      s.reset(),
      a.reset(),
      o.reset();
  }
  return {
    buffers: { color: s, depth: a, stencil: o },
    enable: Q,
    disable: _e,
    bindFramebuffer: Le,
    drawBuffers: me,
    useProgram: Oe,
    setBlending: qe,
    setMaterial: rt,
    setFlipSided: He,
    setCullFace: lt,
    setLineWidth: xt,
    setPolygonOffset: Ct,
    setScissorTest: ct,
    activeTexture: dt,
    bindTexture: N,
    unbindTexture: Mt,
    compressedTexImage2D: Ze,
    compressedTexImage3D: T,
    texImage2D: Y,
    texImage3D: $,
    pixelStorei: Ee,
    getParameter: se,
    updateUBOMapping: Te,
    uniformBlockBinding: Ce,
    texStorage2D: ie,
    texStorage3D: re,
    texSubImage2D: g,
    texSubImage3D: F,
    compressedTexSubImage2D: z,
    compressedTexSubImage3D: W,
    scissor: ce,
    viewport: ae,
    reset: Ie,
  };
}
function np(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new Re(),
    u = new WeakMap(),
    f = new Set();
  let h;
  const d = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function S(T, g) {
    return _ ? new OffscreenCanvas(T, g) : vi("canvas");
  }
  function m(T, g, F) {
    let z = 1;
    const W = Ze(T);
    if (
      ((W.width > F || W.height > F) && (z = F / Math.max(W.width, W.height)),
      z < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && T instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && T instanceof VideoFrame)
      ) {
        const ie = Math.floor(z * W.width),
          re = Math.floor(z * W.height);
        h === void 0 && (h = S(ie, re));
        const Y = g ? S(ie, re) : h;
        return (
          (Y.width = ie),
          (Y.height = re),
          Y.getContext("2d").drawImage(T, 0, 0, ie, re),
          ye(
            "WebGLRenderer: Texture has been resized from (" +
              W.width +
              "x" +
              W.height +
              ") to (" +
              ie +
              "x" +
              re +
              ")."
          ),
          Y
        );
      } else
        return (
          "data" in T &&
            ye(
              "WebGLRenderer: Image in DataTexture is too big (" +
                W.width +
                "x" +
                W.height +
                ")."
            ),
          T
        );
    return T;
  }
  function p(T) {
    return T.generateMipmaps;
  }
  function A(T) {
    i.generateMipmap(T);
  }
  function w(T) {
    return T.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : T.isWebGL3DRenderTarget
      ? i.TEXTURE_3D
      : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture
      ? i.TEXTURE_2D_ARRAY
      : i.TEXTURE_2D;
  }
  function M(T, g, F, z, W, ie = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      ye(
        "WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          T +
          "'"
      );
    }
    let re;
    z &&
      ((re = e.get("EXT_texture_norm16")),
      re ||
        ye(
          "WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"
        ));
    let Y = g;
    if (
      (g === i.RED &&
        (F === i.FLOAT && (Y = i.R32F),
        F === i.HALF_FLOAT && (Y = i.R16F),
        F === i.UNSIGNED_BYTE && (Y = i.R8),
        F === i.UNSIGNED_SHORT && re && (Y = re.R16_EXT),
        F === i.SHORT && re && (Y = re.R16_SNORM_EXT)),
      g === i.RED_INTEGER &&
        (F === i.UNSIGNED_BYTE && (Y = i.R8UI),
        F === i.UNSIGNED_SHORT && (Y = i.R16UI),
        F === i.UNSIGNED_INT && (Y = i.R32UI),
        F === i.BYTE && (Y = i.R8I),
        F === i.SHORT && (Y = i.R16I),
        F === i.INT && (Y = i.R32I)),
      g === i.RG &&
        (F === i.FLOAT && (Y = i.RG32F),
        F === i.HALF_FLOAT && (Y = i.RG16F),
        F === i.UNSIGNED_BYTE && (Y = i.RG8),
        F === i.UNSIGNED_SHORT && re && (Y = re.RG16_EXT),
        F === i.SHORT && re && (Y = re.RG16_SNORM_EXT)),
      g === i.RG_INTEGER &&
        (F === i.UNSIGNED_BYTE && (Y = i.RG8UI),
        F === i.UNSIGNED_SHORT && (Y = i.RG16UI),
        F === i.UNSIGNED_INT && (Y = i.RG32UI),
        F === i.BYTE && (Y = i.RG8I),
        F === i.SHORT && (Y = i.RG16I),
        F === i.INT && (Y = i.RG32I)),
      g === i.RGB_INTEGER &&
        (F === i.UNSIGNED_BYTE && (Y = i.RGB8UI),
        F === i.UNSIGNED_SHORT && (Y = i.RGB16UI),
        F === i.UNSIGNED_INT && (Y = i.RGB32UI),
        F === i.BYTE && (Y = i.RGB8I),
        F === i.SHORT && (Y = i.RGB16I),
        F === i.INT && (Y = i.RGB32I)),
      g === i.RGBA_INTEGER &&
        (F === i.UNSIGNED_BYTE && (Y = i.RGBA8UI),
        F === i.UNSIGNED_SHORT && (Y = i.RGBA16UI),
        F === i.UNSIGNED_INT && (Y = i.RGBA32UI),
        F === i.BYTE && (Y = i.RGBA8I),
        F === i.SHORT && (Y = i.RGBA16I),
        F === i.INT && (Y = i.RGBA32I)),
      g === i.RGB &&
        (F === i.UNSIGNED_SHORT && re && (Y = re.RGB16_EXT),
        F === i.SHORT && re && (Y = re.RGB16_SNORM_EXT),
        F === i.UNSIGNED_INT_5_9_9_9_REV && (Y = i.RGB9_E5),
        F === i.UNSIGNED_INT_10F_11F_11F_REV && (Y = i.R11F_G11F_B10F)),
      g === i.RGBA)
    ) {
      const $ = ie ? nr : ke.getTransfer(W);
      F === i.FLOAT && (Y = i.RGBA32F),
        F === i.HALF_FLOAT && (Y = i.RGBA16F),
        F === i.UNSIGNED_BYTE && (Y = $ === $e ? i.SRGB8_ALPHA8 : i.RGBA8),
        F === i.UNSIGNED_SHORT && re && (Y = re.RGBA16_EXT),
        F === i.SHORT && re && (Y = re.RGBA16_SNORM_EXT),
        F === i.UNSIGNED_SHORT_4_4_4_4 && (Y = i.RGBA4),
        F === i.UNSIGNED_SHORT_5_5_5_1 && (Y = i.RGB5_A1);
    }
    return (
      (Y === i.R16F ||
        Y === i.R32F ||
        Y === i.RG16F ||
        Y === i.RG32F ||
        Y === i.RGBA16F ||
        Y === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      Y
    );
  }
  function E(T, g) {
    let F;
    return (
      T
        ? g === null || g === 1014 || g === 1020
          ? (F = i.DEPTH24_STENCIL8)
          : g === 1015
          ? (F = i.DEPTH32F_STENCIL8)
          : g === 1012 &&
            ((F = i.DEPTH24_STENCIL8),
            ye(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : g === null || g === 1014 || g === 1020
        ? (F = i.DEPTH_COMPONENT24)
        : g === 1015
        ? (F = i.DEPTH_COMPONENT32F)
        : g === 1012 && (F = i.DEPTH_COMPONENT16),
      F
    );
  }
  function y(T, g) {
    return p(T) === !0 ||
      (T.isFramebufferTexture && T.minFilter !== 1003 && T.minFilter !== 1006)
      ? Math.log2(Math.max(g.width, g.height)) + 1
      : T.mipmaps !== void 0 && T.mipmaps.length > 0
      ? T.mipmaps.length
      : T.isCompressedTexture && Array.isArray(T.image)
      ? g.mipmaps.length
      : 1;
  }
  function R(T) {
    const g = T.target;
    g.removeEventListener("dispose", R),
      b(g),
      g.isVideoTexture && u.delete(g),
      g.isHTMLTexture && f.delete(g);
  }
  function v(T) {
    const g = T.target;
    g.removeEventListener("dispose", v), U(g);
  }
  function b(T) {
    const g = n.get(T);
    if (g.__webglInit === void 0) return;
    const F = T.source,
      z = d.get(F);
    if (z) {
      const W = z[g.__cacheKey];
      W.usedTimes--,
        W.usedTimes === 0 && P(T),
        Object.keys(z).length === 0 && d.delete(F);
    }
    n.remove(T);
  }
  function P(T) {
    const g = n.get(T);
    i.deleteTexture(g.__webglTexture);
    const F = T.source,
      z = d.get(F);
    delete z[g.__cacheKey], a.memory.textures--;
  }
  function U(T) {
    const g = n.get(T);
    if (
      (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)),
      T.isWebGLCubeRenderTarget)
    )
      for (let z = 0; z < 6; z++) {
        if (Array.isArray(g.__webglFramebuffer[z]))
          for (let W = 0; W < g.__webglFramebuffer[z].length; W++)
            i.deleteFramebuffer(g.__webglFramebuffer[z][W]);
        else i.deleteFramebuffer(g.__webglFramebuffer[z]);
        g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer[z]);
      }
    else {
      if (Array.isArray(g.__webglFramebuffer))
        for (let z = 0; z < g.__webglFramebuffer.length; z++)
          i.deleteFramebuffer(g.__webglFramebuffer[z]);
      else i.deleteFramebuffer(g.__webglFramebuffer);
      if (
        (g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer),
        g.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(g.__webglMultisampledFramebuffer),
        g.__webglColorRenderbuffer)
      )
        for (let z = 0; z < g.__webglColorRenderbuffer.length; z++)
          g.__webglColorRenderbuffer[z] &&
            i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);
      g.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const F = T.textures;
    for (let z = 0, W = F.length; z < W; z++) {
      const ie = n.get(F[z]);
      ie.__webglTexture &&
        (i.deleteTexture(ie.__webglTexture), a.memory.textures--),
        n.remove(F[z]);
    }
    n.remove(T);
  }
  let B = 0;
  function V() {
    B = 0;
  }
  function I() {
    return B;
  }
  function H(T) {
    B = T;
  }
  function K() {
    const T = B;
    return (
      T >= r.maxTextures &&
        ye(
          "WebGLTextures: Trying to use " +
            (T + 1) +
            " texture units while this GPU supports only " +
            r.maxTextures
        ),
      (B += 1),
      T
    );
  }
  function J(T) {
    const g = [];
    return (
      g.push(T.wrapS),
      g.push(T.wrapT),
      g.push(T.wrapR || 0),
      g.push(T.magFilter),
      g.push(T.minFilter),
      g.push(T.anisotropy),
      g.push(T.internalFormat),
      g.push(T.format),
      g.push(T.type),
      g.push(T.generateMipmaps),
      g.push(T.premultiplyAlpha),
      g.push(T.flipY),
      g.push(T.unpackAlignment),
      g.push(T.colorSpace),
      g.join()
    );
  }
  function ne(T, g) {
    const F = n.get(T);
    if (
      (T.isVideoTexture && N(T),
      T.isRenderTargetTexture === !1 &&
        T.isExternalTexture !== !0 &&
        T.version > 0 &&
        F.__version !== T.version)
    ) {
      const z = T.image;
      if (z === null)
        ye("WebGLRenderer: Texture marked for update but no image data found.");
      else if (z.complete === !1)
        ye("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        _e(F, T, g);
        return;
      }
    } else
      T.isExternalTexture &&
        (F.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + g);
  }
  function X(T, g) {
    const F = n.get(T);
    if (
      T.isRenderTargetTexture === !1 &&
      T.version > 0 &&
      F.__version !== T.version
    ) {
      _e(F, T, g);
      return;
    } else
      T.isExternalTexture &&
        (F.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + g);
  }
  function j(T, g) {
    const F = n.get(T);
    if (
      T.isRenderTargetTexture === !1 &&
      T.version > 0 &&
      F.__version !== T.version
    ) {
      _e(F, T, g);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + g);
  }
  function te(T, g) {
    const F = n.get(T);
    if (
      T.isCubeDepthTexture !== !0 &&
      T.version > 0 &&
      F.__version !== T.version
    ) {
      Le(F, T, g);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + g);
  }
  const we = { 1e3: i.REPEAT, 1001: i.CLAMP_TO_EDGE, 1002: i.MIRRORED_REPEAT },
    be = {
      1003: i.NEAREST,
      1004: i.NEAREST_MIPMAP_NEAREST,
      1005: i.NEAREST_MIPMAP_LINEAR,
      1006: i.LINEAR,
      1007: i.LINEAR_MIPMAP_NEAREST,
      1008: i.LINEAR_MIPMAP_LINEAR,
    },
    it = {
      512: i.NEVER,
      519: i.ALWAYS,
      513: i.LESS,
      515: i.LEQUAL,
      514: i.EQUAL,
      518: i.GEQUAL,
      516: i.GREATER,
      517: i.NOTEQUAL,
    };
  function We(T, g) {
    if (
      (g.type === 1015 &&
        e.has("OES_texture_float_linear") === !1 &&
        (g.magFilter === 1006 ||
          g.magFilter === 1007 ||
          g.magFilter === 1005 ||
          g.magFilter === 1008 ||
          g.minFilter === 1006 ||
          g.minFilter === 1007 ||
          g.minFilter === 1005 ||
          g.minFilter === 1008) &&
        ye(
          "WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      i.texParameteri(T, i.TEXTURE_WRAP_S, we[g.wrapS]),
      i.texParameteri(T, i.TEXTURE_WRAP_T, we[g.wrapT]),
      (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(T, i.TEXTURE_WRAP_R, we[g.wrapR]),
      i.texParameteri(T, i.TEXTURE_MAG_FILTER, be[g.magFilter]),
      i.texParameteri(T, i.TEXTURE_MIN_FILTER, be[g.minFilter]),
      g.compareFunction &&
        (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, it[g.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        g.magFilter === 1003 ||
        (g.minFilter !== 1005 && g.minFilter !== 1008) ||
        (g.type === 1015 && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (g.anisotropy > 1 || n.get(g).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(
          T,
          F.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(g.anisotropy, r.getMaxAnisotropy())
        ),
          (n.get(g).__currentAnisotropy = g.anisotropy);
      }
    }
  }
  function Ye(T, g) {
    let F = !1;
    T.__webglInit === void 0 &&
      ((T.__webglInit = !0), g.addEventListener("dispose", R));
    const z = g.source;
    let W = d.get(z);
    W === void 0 && ((W = {}), d.set(z, W));
    const ie = J(g);
    if (ie !== T.__cacheKey) {
      W[ie] === void 0 &&
        ((W[ie] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (F = !0)),
        W[ie].usedTimes++;
      const re = W[T.__cacheKey];
      re !== void 0 &&
        (W[T.__cacheKey].usedTimes--, re.usedTimes === 0 && P(g)),
        (T.__cacheKey = ie),
        (T.__webglTexture = W[ie].texture);
    }
    return F;
  }
  function q(T, g, F) {
    return Math.floor(Math.floor(T / F) / g);
  }
  function Q(T, g, F, z) {
    const ie = T.updateRanges;
    if (ie.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, g.width, g.height, F, z, g.data);
    else {
      ie.sort((Ee, ce) => Ee.start - ce.start);
      let re = 0;
      for (let Ee = 1; Ee < ie.length; Ee++) {
        const ce = ie[re],
          ae = ie[Ee],
          Te = ce.start + ce.count,
          Ce = q(ae.start, g.width, 4),
          Ie = q(ce.start, g.width, 4);
        ae.start <= Te + 1 &&
        Ce === Ie &&
        q(ae.start + ae.count - 1, g.width, 4) === Ce
          ? (ce.count = Math.max(ce.count, ae.start + ae.count - ce.start))
          : (++re, (ie[re] = ae));
      }
      ie.length = re + 1;
      const Y = t.getParameter(i.UNPACK_ROW_LENGTH),
        $ = t.getParameter(i.UNPACK_SKIP_PIXELS),
        se = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, g.width);
      for (let Ee = 0, ce = ie.length; Ee < ce; Ee++) {
        const ae = ie[Ee],
          Te = Math.floor(ae.start / 4),
          Ce = Math.ceil(ae.count / 4),
          Ie = Te % g.width,
          D = Math.floor(Te / g.width),
          oe = Ce,
          Z = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, Ie),
          t.pixelStorei(i.UNPACK_SKIP_ROWS, D),
          t.texSubImage2D(i.TEXTURE_2D, 0, Ie, D, oe, Z, F, z, g.data);
      }
      T.clearUpdateRanges(),
        t.pixelStorei(i.UNPACK_ROW_LENGTH, Y),
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, $),
        t.pixelStorei(i.UNPACK_SKIP_ROWS, se);
    }
  }
  function _e(T, g, F) {
    let z = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) &&
      (z = i.TEXTURE_2D_ARRAY),
      g.isData3DTexture && (z = i.TEXTURE_3D);
    const W = Ye(T, g),
      ie = g.source;
    t.bindTexture(z, T.__webglTexture, i.TEXTURE0 + F);
    const re = n.get(ie);
    if (ie.version !== re.__version || W === !0) {
      if (
        (t.activeTexture(i.TEXTURE0 + F),
        (typeof ImageBitmap < "u" && g.image instanceof ImageBitmap) === !1)
      ) {
        const Z = ke.getPrimaries(ke.workingColorSpace),
          le = g.colorSpace === "" ? null : ke.getPrimaries(g.colorSpace),
          fe =
            g.colorSpace === "" || Z === le ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY),
          t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
          t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment);
      let $ = m(g.image, !1, r.maxTextureSize);
      $ = Mt(g, $);
      const se = s.convert(g.format, g.colorSpace),
        Ee = s.convert(g.type);
      let ce = M(
        g.internalFormat,
        se,
        Ee,
        g.normalized,
        g.colorSpace,
        g.isVideoTexture
      );
      We(z, g);
      let ae;
      const Te = g.mipmaps,
        Ce = g.isVideoTexture !== !0,
        Ie = re.__version === void 0 || W === !0,
        D = ie.dataReady,
        oe = y(g, $);
      if (g.isDepthTexture)
        (ce = E(g.format === 1027, g.type)),
          Ie &&
            (Ce
              ? t.texStorage2D(i.TEXTURE_2D, 1, ce, $.width, $.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  ce,
                  $.width,
                  $.height,
                  0,
                  se,
                  Ee,
                  null
                ));
      else if (g.isDataTexture)
        if (Te.length > 0) {
          Ce &&
            Ie &&
            t.texStorage2D(i.TEXTURE_2D, oe, ce, Te[0].width, Te[0].height);
          for (let Z = 0, le = Te.length; Z < le; Z++)
            (ae = Te[Z]),
              Ce
                ? D &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    Z,
                    0,
                    0,
                    ae.width,
                    ae.height,
                    se,
                    Ee,
                    ae.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    Z,
                    ce,
                    ae.width,
                    ae.height,
                    0,
                    se,
                    Ee,
                    ae.data
                  );
          g.generateMipmaps = !1;
        } else
          Ce
            ? (Ie && t.texStorage2D(i.TEXTURE_2D, oe, ce, $.width, $.height),
              D && Q(g, $, se, Ee))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                ce,
                $.width,
                $.height,
                0,
                se,
                Ee,
                $.data
              );
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          Ce &&
            Ie &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              oe,
              ce,
              Te[0].width,
              Te[0].height,
              $.depth
            );
          for (let Z = 0, le = Te.length; Z < le; Z++)
            if (((ae = Te[Z]), g.format !== 1023))
              if (se !== null)
                if (Ce) {
                  if (D)
                    if (g.layerUpdates.size > 0) {
                      const fe = pa(ae.width, ae.height, g.format, g.type);
                      for (const ee of g.layerUpdates) {
                        const Ae = ae.data.subarray(
                          (ee * fe) / ae.data.BYTES_PER_ELEMENT,
                          ((ee + 1) * fe) / ae.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          Z,
                          0,
                          0,
                          ee,
                          ae.width,
                          ae.height,
                          1,
                          se,
                          Ae
                        );
                      }
                    } else
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        Z,
                        0,
                        0,
                        0,
                        ae.width,
                        ae.height,
                        $.depth,
                        se,
                        ae.data
                      );
                } else
                  t.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    Z,
                    ce,
                    ae.width,
                    ae.height,
                    $.depth,
                    0,
                    ae.data,
                    0,
                    0
                  );
              else
                ye(
                  "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            else
              Ce
                ? D &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    Z,
                    0,
                    0,
                    0,
                    ae.width,
                    ae.height,
                    $.depth,
                    se,
                    Ee,
                    ae.data
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    Z,
                    ce,
                    ae.width,
                    ae.height,
                    $.depth,
                    0,
                    se,
                    Ee,
                    ae.data
                  );
          g.layerUpdates.size > 0 && g.clearLayerUpdates();
        } else {
          Ce &&
            Ie &&
            t.texStorage2D(i.TEXTURE_2D, oe, ce, Te[0].width, Te[0].height);
          for (let Z = 0, le = Te.length; Z < le; Z++)
            (ae = Te[Z]),
              g.format !== 1023
                ? se !== null
                  ? Ce
                    ? D &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        Z,
                        0,
                        0,
                        ae.width,
                        ae.height,
                        se,
                        ae.data
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        Z,
                        ce,
                        ae.width,
                        ae.height,
                        0,
                        ae.data
                      )
                  : ye(
                      "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Ce
                ? D &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    Z,
                    0,
                    0,
                    ae.width,
                    ae.height,
                    se,
                    Ee,
                    ae.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    Z,
                    ce,
                    ae.width,
                    ae.height,
                    0,
                    se,
                    Ee,
                    ae.data
                  );
        }
      else if (g.isDataArrayTexture)
        if (Ce) {
          if (
            (Ie &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                oe,
                ce,
                $.width,
                $.height,
                $.depth
              ),
            D)
          )
            if (g.layerUpdates.size > 0) {
              const Z = pa($.width, $.height, g.format, g.type);
              for (const le of g.layerUpdates) {
                const fe = $.data.subarray(
                  (le * Z) / $.data.BYTES_PER_ELEMENT,
                  ((le + 1) * Z) / $.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  le,
                  $.width,
                  $.height,
                  1,
                  se,
                  Ee,
                  fe
                );
              }
              g.clearLayerUpdates();
            } else
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                $.width,
                $.height,
                $.depth,
                se,
                Ee,
                $.data
              );
        } else
          t.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            ce,
            $.width,
            $.height,
            $.depth,
            0,
            se,
            Ee,
            $.data
          );
      else if (g.isData3DTexture)
        Ce
          ? (Ie &&
              t.texStorage3D(i.TEXTURE_3D, oe, ce, $.width, $.height, $.depth),
            D &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                $.width,
                $.height,
                $.depth,
                se,
                Ee,
                $.data
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              ce,
              $.width,
              $.height,
              $.depth,
              0,
              se,
              Ee,
              $.data
            );
      else if (g.isFramebufferTexture) {
        if (Ie)
          if (Ce) t.texStorage2D(i.TEXTURE_2D, oe, ce, $.width, $.height);
          else {
            let Z = $.width,
              le = $.height;
            for (let fe = 0; fe < oe; fe++)
              t.texImage2D(i.TEXTURE_2D, fe, ce, Z, le, 0, se, Ee, null),
                (Z >>= 1),
                (le >>= 1);
          }
      } else if (g.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const Z = i.canvas;
          if (
            (Z.hasAttribute("layoutsubtree") ||
              Z.setAttribute("layoutsubtree", "true"),
            $.parentNode !== Z)
          ) {
            Z.appendChild($),
              f.add(g),
              (Z.onpaint = (le) => {
                const fe = le.changedElements;
                for (const ee of f)
                  fe.includes(ee.image) && (ee.needsUpdate = !0);
              }),
              Z.requestPaint();
            return;
          }
          if (i.texElementImage2D.length === 3)
            i.texElementImage2D(i.TEXTURE_2D, i.RGBA8, $);
          else {
            const fe = i.RGBA,
              ee = i.RGBA,
              Ae = i.UNSIGNED_BYTE;
            i.texElementImage2D(i.TEXTURE_2D, 0, fe, ee, Ae, $);
          }
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR),
            i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
            i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (Te.length > 0) {
        if (Ce && Ie) {
          const Z = Ze(Te[0]);
          t.texStorage2D(i.TEXTURE_2D, oe, ce, Z.width, Z.height);
        }
        for (let Z = 0, le = Te.length; Z < le; Z++)
          (ae = Te[Z]),
            Ce
              ? D && t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, se, Ee, ae)
              : t.texImage2D(i.TEXTURE_2D, Z, ce, se, Ee, ae);
        g.generateMipmaps = !1;
      } else if (Ce) {
        if (Ie) {
          const Z = Ze($);
          t.texStorage2D(i.TEXTURE_2D, oe, ce, Z.width, Z.height);
        }
        D && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, se, Ee, $);
      } else t.texImage2D(i.TEXTURE_2D, 0, ce, se, Ee, $);
      p(g) && A(z), (re.__version = ie.version), g.onUpdate && g.onUpdate(g);
    }
    T.__version = g.version;
  }
  function Le(T, g, F) {
    if (g.image.length !== 6) return;
    const z = Ye(T, g),
      W = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + F);
    const ie = n.get(W);
    if (W.version !== ie.__version || z === !0) {
      t.activeTexture(i.TEXTURE0 + F);
      const re = ke.getPrimaries(ke.workingColorSpace),
        Y = g.colorSpace === "" ? null : ke.getPrimaries(g.colorSpace),
        $ = g.colorSpace === "" || re === Y ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY),
        t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
        t.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment),
        t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, $);
      const se = g.isCompressedTexture || g.image[0].isCompressedTexture,
        Ee = g.image[0] && g.image[0].isDataTexture,
        ce = [];
      for (let ee = 0; ee < 6; ee++)
        !se && !Ee
          ? (ce[ee] = m(g.image[ee], !0, r.maxCubemapSize))
          : (ce[ee] = Ee ? g.image[ee].image : g.image[ee]),
          (ce[ee] = Mt(g, ce[ee]));
      const ae = ce[0],
        Te = s.convert(g.format, g.colorSpace),
        Ce = s.convert(g.type),
        Ie = M(g.internalFormat, Te, Ce, g.normalized, g.colorSpace),
        D = g.isVideoTexture !== !0,
        oe = ie.__version === void 0 || z === !0,
        Z = W.dataReady;
      let le = y(g, ae);
      We(i.TEXTURE_CUBE_MAP, g);
      let fe;
      if (se) {
        D &&
          oe &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, le, Ie, ae.width, ae.height);
        for (let ee = 0; ee < 6; ee++) {
          fe = ce[ee].mipmaps;
          for (let Ae = 0; Ae < fe.length; Ae++) {
            const Se = fe[Ae];
            g.format !== 1023
              ? Te !== null
                ? D
                  ? Z &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                      Ae,
                      0,
                      0,
                      Se.width,
                      Se.height,
                      Te,
                      Se.data
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                      Ae,
                      Ie,
                      Se.width,
                      Se.height,
                      0,
                      Se.data
                    )
                : ye(
                    "WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : D
              ? Z &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                  Ae,
                  0,
                  0,
                  Se.width,
                  Se.height,
                  Te,
                  Ce,
                  Se.data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                  Ae,
                  Ie,
                  Se.width,
                  Se.height,
                  0,
                  Te,
                  Ce,
                  Se.data
                );
          }
        }
      } else {
        if (((fe = g.mipmaps), D && oe)) {
          fe.length > 0 && le++;
          const ee = Ze(ce[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, le, Ie, ee.width, ee.height);
        }
        for (let ee = 0; ee < 6; ee++)
          if (Ee) {
            D
              ? Z &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                  0,
                  0,
                  0,
                  ce[ee].width,
                  ce[ee].height,
                  Te,
                  Ce,
                  ce[ee].data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                  0,
                  Ie,
                  ce[ee].width,
                  ce[ee].height,
                  0,
                  Te,
                  Ce,
                  ce[ee].data
                );
            for (let Ae = 0; Ae < fe.length; Ae++) {
              const st = fe[Ae].image[ee].image;
              D
                ? Z &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                    Ae + 1,
                    0,
                    0,
                    st.width,
                    st.height,
                    Te,
                    Ce,
                    st.data
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                    Ae + 1,
                    Ie,
                    st.width,
                    st.height,
                    0,
                    Te,
                    Ce,
                    st.data
                  );
            }
          } else {
            D
              ? Z &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                  0,
                  0,
                  0,
                  Te,
                  Ce,
                  ce[ee]
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                  0,
                  Ie,
                  Te,
                  Ce,
                  ce[ee]
                );
            for (let Ae = 0; Ae < fe.length; Ae++) {
              const Se = fe[Ae];
              D
                ? Z &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                    Ae + 1,
                    0,
                    0,
                    Te,
                    Ce,
                    Se.image[ee]
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + ee,
                    Ae + 1,
                    Ie,
                    Te,
                    Ce,
                    Se.image[ee]
                  );
            }
          }
      }
      p(g) && A(i.TEXTURE_CUBE_MAP),
        (ie.__version = W.version),
        g.onUpdate && g.onUpdate(g);
    }
    T.__version = g.version;
  }
  function me(T, g, F, z, W, ie) {
    const re = s.convert(F.format, F.colorSpace),
      Y = s.convert(F.type),
      $ = M(F.internalFormat, re, Y, F.normalized, F.colorSpace),
      se = n.get(g),
      Ee = n.get(F);
    if (((Ee.__renderTarget = g), !se.__hasExternalTextures)) {
      const ce = Math.max(1, g.width >> ie),
        ae = Math.max(1, g.height >> ie);
      W === i.TEXTURE_3D || W === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(W, ie, $, ce, ae, g.depth, 0, re, Y, null)
        : t.texImage2D(W, ie, $, ce, ae, 0, re, Y, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, T),
      dt(g)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            z,
            W,
            Ee.__webglTexture,
            0,
            ct(g)
          )
        : (W === i.TEXTURE_2D ||
            (W >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              W <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, z, W, Ee.__webglTexture, ie),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Oe(T, g, F) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, T), g.depthBuffer)) {
      const z = g.depthTexture,
        W = z && z.isDepthTexture ? z.type : null,
        ie = E(g.stencilBuffer, W),
        re = g.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      dt(g)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            ct(g),
            ie,
            g.width,
            g.height
          )
        : F
        ? i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            ct(g),
            ie,
            g.width,
            g.height
          )
        : i.renderbufferStorage(i.RENDERBUFFER, ie, g.width, g.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, re, i.RENDERBUFFER, T);
    } else {
      const z = g.textures;
      for (let W = 0; W < z.length; W++) {
        const ie = z[W],
          re = s.convert(ie.format, ie.colorSpace),
          Y = s.convert(ie.type),
          $ = M(ie.internalFormat, re, Y, ie.normalized, ie.colorSpace);
        dt(g)
          ? o.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              ct(g),
              $,
              g.width,
              g.height
            )
          : F
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              ct(g),
              $,
              g.width,
              g.height
            )
          : i.renderbufferStorage(i.RENDERBUFFER, $, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function gt(T, g, F) {
    const z = g.isWebGLCubeRenderTarget === !0;
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, T),
      !(g.depthTexture && g.depthTexture.isDepthTexture))
    )
      throw new Error(
        "THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture."
      );
    const W = n.get(g.depthTexture);
    if (
      ((W.__renderTarget = g),
      (!W.__webglTexture ||
        g.depthTexture.image.width !== g.width ||
        g.depthTexture.image.height !== g.height) &&
        ((g.depthTexture.image.width = g.width),
        (g.depthTexture.image.height = g.height),
        (g.depthTexture.needsUpdate = !0)),
      z)
    ) {
      if (
        (W.__webglInit === void 0 &&
          ((W.__webglInit = !0), g.depthTexture.addEventListener("dispose", R)),
        W.__webglTexture === void 0)
      ) {
        (W.__webglTexture = i.createTexture()),
          t.bindTexture(i.TEXTURE_CUBE_MAP, W.__webglTexture),
          We(i.TEXTURE_CUBE_MAP, g.depthTexture);
        const se = s.convert(g.depthTexture.format),
          Ee = s.convert(g.depthTexture.type);
        let ce;
        g.depthTexture.format === 1026
          ? (ce = i.DEPTH_COMPONENT24)
          : g.depthTexture.format === 1027 && (ce = i.DEPTH24_STENCIL8);
        for (let ae = 0; ae < 6; ae++)
          i.texImage2D(
            i.TEXTURE_CUBE_MAP_POSITIVE_X + ae,
            0,
            ce,
            g.width,
            g.height,
            0,
            se,
            Ee,
            null
          );
      }
    } else ne(g.depthTexture, 0);
    const ie = W.__webglTexture,
      re = ct(g),
      Y = z ? i.TEXTURE_CUBE_MAP_POSITIVE_X + F : i.TEXTURE_2D,
      $ =
        g.depthTexture.format === 1027
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
    if (g.depthTexture.format === 1026)
      dt(g)
        ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, $, Y, ie, 0, re)
        : i.framebufferTexture2D(i.FRAMEBUFFER, $, Y, ie, 0);
    else if (g.depthTexture.format === 1027)
      dt(g)
        ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, $, Y, ie, 0, re)
        : i.framebufferTexture2D(i.FRAMEBUFFER, $, Y, ie, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function Ge(T) {
    const g = n.get(T),
      F = T.isWebGLCubeRenderTarget === !0;
    if (g.__boundDepthTexture !== T.depthTexture) {
      const z = T.depthTexture;
      if ((g.__depthDisposeCallback && g.__depthDisposeCallback(), z)) {
        const W = () => {
          delete g.__boundDepthTexture,
            delete g.__depthDisposeCallback,
            z.removeEventListener("dispose", W);
        };
        z.addEventListener("dispose", W), (g.__depthDisposeCallback = W);
      }
      g.__boundDepthTexture = z;
    }
    if (T.depthTexture && !g.__autoAllocateDepthBuffer)
      if (F) for (let z = 0; z < 6; z++) gt(g.__webglFramebuffer[z], T, z);
      else {
        const z = T.texture.mipmaps;
        z && z.length > 0
          ? gt(g.__webglFramebuffer[0], T, 0)
          : gt(g.__webglFramebuffer, T, 0);
      }
    else if (F) {
      g.__webglDepthbuffer = [];
      for (let z = 0; z < 6; z++)
        if (
          (t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[z]),
          g.__webglDepthbuffer[z] === void 0)
        )
          (g.__webglDepthbuffer[z] = i.createRenderbuffer()),
            Oe(g.__webglDepthbuffer[z], T, !1);
        else {
          const W = T.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            ie = g.__webglDepthbuffer[z];
          i.bindRenderbuffer(i.RENDERBUFFER, ie),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, W, i.RENDERBUFFER, ie);
        }
    } else {
      const z = T.texture.mipmaps;
      if (
        (z && z.length > 0
          ? t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[0])
          : t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer),
        g.__webglDepthbuffer === void 0)
      )
        (g.__webglDepthbuffer = i.createRenderbuffer()),
          Oe(g.__webglDepthbuffer, T, !1);
      else {
        const W = T.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          ie = g.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, ie),
          i.framebufferRenderbuffer(i.FRAMEBUFFER, W, i.RENDERBUFFER, ie);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function qe(T, g, F) {
    const z = n.get(T);
    g !== void 0 &&
      me(
        z.__webglFramebuffer,
        T,
        T.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0
      ),
      F !== void 0 && Ge(T);
  }
  function rt(T) {
    const g = T.texture,
      F = n.get(T),
      z = n.get(g);
    T.addEventListener("dispose", v);
    const W = T.textures,
      ie = T.isWebGLCubeRenderTarget === !0,
      re = W.length > 1;
    if (
      (re ||
        (z.__webglTexture === void 0 && (z.__webglTexture = i.createTexture()),
        (z.__version = g.version),
        a.memory.textures++),
      ie)
    ) {
      F.__webglFramebuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (g.mipmaps && g.mipmaps.length > 0) {
          F.__webglFramebuffer[Y] = [];
          for (let $ = 0; $ < g.mipmaps.length; $++)
            F.__webglFramebuffer[Y][$] = i.createFramebuffer();
        } else F.__webglFramebuffer[Y] = i.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let Y = 0; Y < g.mipmaps.length; Y++)
          F.__webglFramebuffer[Y] = i.createFramebuffer();
      } else F.__webglFramebuffer = i.createFramebuffer();
      if (re)
        for (let Y = 0, $ = W.length; Y < $; Y++) {
          const se = n.get(W[Y]);
          se.__webglTexture === void 0 &&
            ((se.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (T.samples > 0 && dt(T) === !1) {
        (F.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (F.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let Y = 0; Y < W.length; Y++) {
          const $ = W[Y];
          (F.__webglColorRenderbuffer[Y] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[Y]);
          const se = s.convert($.format, $.colorSpace),
            Ee = s.convert($.type),
            ce = M(
              $.internalFormat,
              se,
              Ee,
              $.normalized,
              $.colorSpace,
              T.isXRRenderTarget === !0
            ),
            ae = ct(T);
          i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            ae,
            ce,
            T.width,
            T.height
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + Y,
              i.RENDERBUFFER,
              F.__webglColorRenderbuffer[Y]
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          T.depthBuffer &&
            ((F.__webglDepthRenderbuffer = i.createRenderbuffer()),
            Oe(F.__webglDepthRenderbuffer, T, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ie) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture),
        We(i.TEXTURE_CUBE_MAP, g);
      for (let Y = 0; Y < 6; Y++)
        if (g.mipmaps && g.mipmaps.length > 0)
          for (let $ = 0; $ < g.mipmaps.length; $++)
            me(
              F.__webglFramebuffer[Y][$],
              T,
              g,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
              $
            );
        else
          me(
            F.__webglFramebuffer[Y],
            T,
            g,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
            0
          );
      p(g) && A(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (re) {
      for (let Y = 0, $ = W.length; Y < $; Y++) {
        const se = W[Y],
          Ee = n.get(se);
        let ce = i.TEXTURE_2D;
        (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) &&
          (ce = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
          t.bindTexture(ce, Ee.__webglTexture),
          We(ce, se),
          me(F.__webglFramebuffer, T, se, i.COLOR_ATTACHMENT0 + Y, ce, 0),
          p(se) && A(ce);
      }
      t.unbindTexture();
    } else {
      let Y = i.TEXTURE_2D;
      if (
        ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) &&
          (Y = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture(Y, z.__webglTexture),
        We(Y, g),
        g.mipmaps && g.mipmaps.length > 0)
      )
        for (let $ = 0; $ < g.mipmaps.length; $++)
          me(F.__webglFramebuffer[$], T, g, i.COLOR_ATTACHMENT0, Y, $);
      else me(F.__webglFramebuffer, T, g, i.COLOR_ATTACHMENT0, Y, 0);
      p(g) && A(Y), t.unbindTexture();
    }
    T.depthBuffer && Ge(T);
  }
  function He(T) {
    const g = T.textures;
    for (let F = 0, z = g.length; F < z; F++) {
      const W = g[F];
      if (p(W)) {
        const ie = w(T),
          re = n.get(W).__webglTexture;
        t.bindTexture(ie, re), A(ie), t.unbindTexture();
      }
    }
  }
  const lt = [],
    xt = [];
  function Ct(T) {
    if (T.samples > 0) {
      if (dt(T) === !1) {
        const g = T.textures,
          F = T.width,
          z = T.height;
        let W = i.COLOR_BUFFER_BIT;
        const ie = T.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          re = n.get(T),
          Y = g.length > 1;
        if (Y)
          for (let se = 0; se < g.length; se++)
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + se,
                i.RENDERBUFFER,
                null
              ),
              t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + se,
                i.TEXTURE_2D,
                null,
                0
              );
        t.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          re.__webglMultisampledFramebuffer
        );
        const $ = T.texture.mipmaps;
        $ && $.length > 0
          ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer[0])
          : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
        for (let se = 0; se < g.length; se++) {
          if (
            (T.resolveDepthBuffer &&
              (T.depthBuffer && (W |= i.DEPTH_BUFFER_BIT),
              T.stencilBuffer &&
                T.resolveStencilBuffer &&
                (W |= i.STENCIL_BUFFER_BIT)),
            Y)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              re.__webglColorRenderbuffer[se]
            );
            const Ee = n.get(g[se]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              Ee,
              0
            );
          }
          i.blitFramebuffer(0, 0, F, z, 0, 0, F, z, W, i.NEAREST),
            c === !0 &&
              ((lt.length = 0),
              (xt.length = 0),
              lt.push(i.COLOR_ATTACHMENT0 + se),
              T.depthBuffer &&
                T.storeMultisampledDepthBuffer === !1 &&
                (lt.push(ie),
                xt.push(ie),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, xt)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, lt));
        }
        if (
          (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          Y)
        )
          for (let se = 0; se < g.length; se++) {
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + se,
                i.RENDERBUFFER,
                re.__webglColorRenderbuffer[se]
              );
            const Ee = n.get(g[se]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + se,
                i.TEXTURE_2D,
                Ee,
                0
              );
          }
        t.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          re.__webglMultisampledFramebuffer
        );
      } else if (T.depthBuffer && T.storeMultisampledDepthBuffer === !1 && c) {
        const g = T.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function ct(T) {
    return Math.min(r.maxSamples, T.samples);
  }
  function dt(T) {
    const g = n.get(T);
    return (
      T.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      g.__useRenderToTexture !== !1
    );
  }
  function N(T) {
    const g = a.render.frame;
    u.get(T) !== g && (u.set(T, g), T.update());
  }
  function Mt(T, g) {
    const F = T.colorSpace,
      z = T.format,
      W = T.type;
    return (
      T.isCompressedTexture === !0 ||
        T.isVideoTexture === !0 ||
        (F !== tr &&
          F !== "" &&
          (ke.getTransfer(F) === $e
            ? (z !== 1023 || W !== 1009) &&
              ye(
                "WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : Pe("WebGLTextures: Unsupported texture color space:", F))),
      g
    );
  }
  function Ze(T) {
    return (
      typeof HTMLImageElement < "u" && T instanceof HTMLImageElement
        ? ((l.width = T.naturalWidth || T.width),
          (l.height = T.naturalHeight || T.height))
        : typeof VideoFrame < "u" && T instanceof VideoFrame
        ? ((l.width = T.displayWidth), (l.height = T.displayHeight))
        : ((l.width = T.width), (l.height = T.height)),
      l
    );
  }
  (this.allocateTextureUnit = K),
    (this.resetTextureUnits = V),
    (this.getTextureUnits = I),
    (this.setTextureUnits = H),
    (this.setTexture2D = ne),
    (this.setTexture2DArray = X),
    (this.setTexture3D = j),
    (this.setTextureCube = te),
    (this.rebindTextures = qe),
    (this.setupRenderTarget = rt),
    (this.updateRenderTargetMipmap = He),
    (this.updateMultisampleRenderTarget = Ct),
    (this.setupDepthRenderbuffer = Ge),
    (this.setupFrameBufferTexture = me),
    (this.useMultisampledRTT = dt),
    (this.isReversedDepthBuffer = function () {
      return t.buffers.depth.getReversed();
    });
}
function ip(i, e) {
  function t(n, r = "") {
    let s;
    const a = ke.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === $e)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (
      n === 36196 ||
      n === 37492 ||
      n === 37496 ||
      n === 37488 ||
      n === 37489 ||
      n === 37490 ||
      n === 37491
    )
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (n === 36196 || n === 37492)
          return a === $e ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return s.COMPRESSED_R11_EAC;
        if (n === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return s.COMPRESSED_RG11_EAC;
        if (n === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    if (
      n === 37808 ||
      n === 37809 ||
      n === 37810 ||
      n === 37811 ||
      n === 37812 ||
      n === 37813 ||
      n === 37814 ||
      n === 37815 ||
      n === 37816 ||
      n === 37817 ||
      n === 37818 ||
      n === 37819 ||
      n === 37820 ||
      n === 37821
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (n === 37808)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821)
          return a === $e
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (n === 36492)
          return a === $e
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (((s = e.get("EXT_texture_compression_rgtc")), s !== null)) {
        if (n === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const rp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  sp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class ap {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Ka(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
        ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = n);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new jt({
          vertexShader: rp,
          fragmentShader: sp,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Bt(new lr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class op extends Pn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      a = null,
      o = "local-floor",
      c = 1,
      l = null,
      u = null,
      f = null,
      h = null,
      d = null,
      _ = null;
    const S = typeof XRWebGLBinding < "u",
      m = new ap(),
      p = {},
      A = t.getContextAttributes();
    let w = null,
      M = null;
    const E = [],
      y = [],
      R = new Re();
    let v = null,
      b = null;
    const P = new It();
    P.viewport = new tt();
    const U = new It();
    U.viewport = new tt();
    const B = [P, U],
      V = new sc();
    let I = null,
      H = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (q) {
        let Q = E[q];
        return (
          Q === void 0 && ((Q = new xr()), (E[q] = Q)), Q.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (q) {
        let Q = E[q];
        return Q === void 0 && ((Q = new xr()), (E[q] = Q)), Q.getGripSpace();
      }),
      (this.getHand = function (q) {
        let Q = E[q];
        return Q === void 0 && ((Q = new xr()), (E[q] = Q)), Q.getHandSpace();
      });
    function K(q) {
      const Q = y.indexOf(q.inputSource);
      if (Q === -1) return;
      const _e = E[Q];
      _e !== void 0 &&
        (_e.update(q.inputSource, q.frame, l || a),
        _e.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function J() {
      r.removeEventListener("select", K),
        r.removeEventListener("selectstart", K),
        r.removeEventListener("selectend", K),
        r.removeEventListener("squeeze", K),
        r.removeEventListener("squeezestart", K),
        r.removeEventListener("squeezeend", K),
        r.removeEventListener("end", J),
        r.removeEventListener("inputsourceschange", ne);
      for (let q = 0; q < E.length; q++) {
        const Q = y[q];
        Q !== null && ((y[q] = null), E[q].disconnect(Q));
      }
      (I = null), (H = null), m.reset();
      for (const q in p) delete p[q];
      if (
        (e.setRenderTarget(w),
        (d = null),
        (h = null),
        (f = null),
        (r = null),
        (M = null),
        Ye.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(v),
        e.setSize(R.width, R.height, !1),
        b !== null)
      ) {
        const q = b.camera;
        (q.fov = b.fov),
          (q.zoom = b.zoom),
          q.updateProjectionMatrix(),
          (b = null);
      }
      n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (q) {
      (s = q),
        n.isPresenting === !0 &&
          ye("WebXRManager: Cannot change framebuffer scale while presenting.");
    }),
      (this.setReferenceSpaceType = function (q) {
        (o = q),
          n.isPresenting === !0 &&
            ye(
              "WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (q) {
        l = q;
      }),
      (this.getBaseLayer = function () {
        return h !== null ? h : d;
      }),
      (this.getBinding = function () {
        return f === null && S && (f = new XRWebGLBinding(r, t)), f;
      }),
      (this.getFrame = function () {
        return _;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (q) {
        if (((r = q), r !== null)) {
          if (
            ((w = e.getRenderTarget()),
            r.addEventListener("select", K),
            r.addEventListener("selectstart", K),
            r.addEventListener("selectend", K),
            r.addEventListener("squeeze", K),
            r.addEventListener("squeezestart", K),
            r.addEventListener("squeezeend", K),
            r.addEventListener("end", J),
            r.addEventListener("inputsourceschange", ne),
            A.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (v = e.getPixelRatio()),
            e.getSize(R),
            S && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let _e = null,
              Le = null,
              me = null;
            A.depth &&
              ((me = A.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (_e = A.stencil ? 1027 : 1026),
              (Le = A.stencil ? 1020 : 1014));
            const Oe = {
              colorFormat: t.RGBA8,
              depthFormat: me,
              scaleFactor: s,
            };
            (f = this.getBinding()),
              (h = f.createProjectionLayer(Oe)),
              r.updateRenderState({ layers: [h] }),
              e.setPixelRatio(1),
              e.setSize(h.textureWidth, h.textureHeight, !1),
              (M = new Xt(h.textureWidth, h.textureHeight, {
                format: 1023,
                type: 1009,
                depthTexture: new xi(
                  h.textureWidth,
                  h.textureHeight,
                  Le,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  _e
                ),
                stencilBuffer: A.stencil,
                colorSpace: e.outputColorSpace,
                samples: A.antialias ? 4 : 0,
                resolveDepthBuffer: h.ignoreDepthValues === !1,
                resolveStencilBuffer: h.ignoreDepthValues === !1,
                storeMultisampledDepthBuffer: h.ignoreDepthValues === !1,
                storeMultisampledStencilBuffer: h.ignoreDepthValues === !1,
              }));
          } else {
            const _e = {
              antialias: A.antialias,
              alpha: !0,
              depth: A.depth,
              stencil: A.stencil,
              framebufferScaleFactor: s,
            };
            (d = new XRWebGLLayer(r, t, _e)),
              r.updateRenderState({ baseLayer: d }),
              e.setPixelRatio(1),
              e.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (M = new Xt(d.framebufferWidth, d.framebufferHeight, {
                format: 1023,
                type: 1009,
                colorSpace: e.outputColorSpace,
                stencilBuffer: A.stencil,
                resolveDepthBuffer: d.ignoreDepthValues === !1,
                resolveStencilBuffer: d.ignoreDepthValues === !1,
                storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
                storeMultisampledStencilBuffer: d.ignoreDepthValues === !1,
              }));
          }
          (M.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await r.requestReferenceSpace(o)),
            Ye.setContext(r),
            Ye.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return m.getDepthTexture();
      });
    function ne(q) {
      for (let Q = 0; Q < q.removed.length; Q++) {
        const _e = q.removed[Q],
          Le = y.indexOf(_e);
        Le >= 0 && ((y[Le] = null), E[Le].disconnect(_e));
      }
      for (let Q = 0; Q < q.added.length; Q++) {
        const _e = q.added[Q];
        let Le = y.indexOf(_e);
        if (Le === -1) {
          for (let Oe = 0; Oe < E.length; Oe++)
            if (Oe >= y.length) {
              y.push(_e), (Le = Oe);
              break;
            } else if (y[Oe] === null) {
              (y[Oe] = _e), (Le = Oe);
              break;
            }
          if (Le === -1) break;
        }
        const me = E[Le];
        me && me.connect(_e);
      }
    }
    const X = new L(),
      j = new L();
    function te(q, Q, _e) {
      X.setFromMatrixPosition(Q.matrixWorld),
        j.setFromMatrixPosition(_e.matrixWorld);
      const Le = X.distanceTo(j),
        me = Q.projectionMatrix.elements,
        Oe = _e.projectionMatrix.elements,
        gt = me[14] / (me[10] - 1),
        Ge = me[14] / (me[10] + 1),
        qe = (me[9] + 1) / me[5],
        rt = (me[9] - 1) / me[5],
        He = (me[8] - 1) / me[0],
        lt = (Oe[8] + 1) / Oe[0],
        xt = gt * He,
        Ct = gt * lt,
        ct = Le / (-He + lt),
        dt = ct * -He;
      if (
        (Q.matrixWorld.decompose(q.position, q.quaternion, q.scale),
        q.translateX(dt),
        q.translateZ(ct),
        q.matrixWorld.compose(q.position, q.quaternion, q.scale),
        q.matrixWorldInverse.copy(q.matrixWorld).invert(),
        me[10] === -1)
      )
        q.projectionMatrix.copy(Q.projectionMatrix),
          q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);
      else {
        const N = gt + ct,
          Mt = Ge + ct,
          Ze = xt - dt,
          T = Ct + (Le - dt),
          g = ((qe * Ge) / Mt) * N,
          F = ((rt * Ge) / Mt) * N;
        q.projectionMatrix.makePerspective(Ze, T, g, F, N, Mt),
          q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function we(q, Q) {
      Q === null
        ? q.matrixWorld.copy(q.matrix)
        : q.matrixWorld.multiplyMatrices(Q.matrixWorld, q.matrix),
        q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function (q) {
      if (r === null) return;
      let Q = q.near,
        _e = q.far;
      m.texture !== null &&
        (m.depthNear > 0 && (Q = m.depthNear),
        m.depthFar > 0 && (_e = m.depthFar)),
        (V.near = U.near = P.near = Q),
        (V.far = U.far = P.far = _e),
        (I !== V.near || H !== V.far) &&
          (r.updateRenderState({ depthNear: V.near, depthFar: V.far }),
          (I = V.near),
          (H = V.far)),
        (V.layers.mask = q.layers.mask | 6),
        (P.layers.mask = V.layers.mask & -5),
        (U.layers.mask = V.layers.mask & -3);
      const Le = q.parent,
        me = V.cameras;
      we(V, Le);
      for (let Oe = 0; Oe < me.length; Oe++) we(me[Oe], Le);
      me.length === 2
        ? te(V, P, U)
        : V.projectionMatrix.copy(P.projectionMatrix),
        b === null &&
          q.isPerspectiveCamera &&
          (b = { camera: q, fov: q.fov, zoom: q.zoom }),
        be(q, V, Le);
    };
    function be(q, Q, _e) {
      _e === null
        ? q.matrix.copy(Q.matrixWorld)
        : (q.matrix.copy(_e.matrixWorld),
          q.matrix.invert(),
          q.matrix.multiply(Q.matrixWorld)),
        q.matrix.decompose(q.position, q.quaternion, q.scale),
        q.updateMatrixWorld(!0),
        q.projectionMatrix.copy(Q.projectionMatrix),
        q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),
        q.isPerspectiveCamera &&
          ((q.fov = Qn * 2 * Math.atan(1 / q.projectionMatrix.elements[5])),
          (q.zoom = 1));
    }
    (this.getCamera = function () {
      return V;
    }),
      (this.getFoveation = function () {
        if (!(h === null && d === null)) return c;
      }),
      (this.setFoveation = function (q) {
        (c = q),
          h !== null && (h.fixedFoveation = q),
          d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = q);
      }),
      (this.hasDepthSensing = function () {
        return m.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return m.getMesh(V);
      }),
      (this.getCameraTexture = function (q) {
        return p[q];
      });
    let it = null;
    function We(q, Q) {
      if (((u = Q.getViewerPose(l || a)), (_ = Q), u !== null)) {
        const _e = u.views;
        d !== null &&
          (e.setRenderTargetFramebuffer(M, d.framebuffer),
          e.setRenderTarget(M));
        let Le = !1;
        _e.length !== V.cameras.length && ((V.cameras.length = 0), (Le = !0));
        for (let Ge = 0; Ge < _e.length; Ge++) {
          const qe = _e[Ge];
          let rt = null;
          if (d !== null) rt = d.getViewport(qe);
          else {
            const lt = f.getViewSubImage(h, qe);
            (rt = lt.viewport),
              Ge === 0 &&
                (e.setRenderTargetTextures(
                  M,
                  lt.colorTexture,
                  lt.depthStencilTexture
                ),
                e.setRenderTarget(M));
          }
          let He = B[Ge];
          He === void 0 &&
            ((He = new It()),
            He.layers.enable(Ge),
            (He.viewport = new tt()),
            (B[Ge] = He)),
            He.matrix.fromArray(qe.transform.matrix),
            He.matrix.decompose(He.position, He.quaternion, He.scale),
            He.projectionMatrix.fromArray(qe.projectionMatrix),
            He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),
            He.viewport.set(rt.x, rt.y, rt.width, rt.height),
            Ge === 0 &&
              (V.matrix.copy(He.matrix),
              V.matrix.decompose(V.position, V.quaternion, V.scale)),
            Le === !0 && V.cameras.push(He);
        }
        const me = r.enabledFeatures;
        if (
          me &&
          me.includes("depth-sensing") &&
          r.depthUsage == "gpu-optimized" &&
          S
        ) {
          f = n.getBinding();
          const Ge = f.getDepthInformation(_e[0]);
          Ge && Ge.isValid && Ge.texture && m.init(Ge, r.renderState);
        }
        if (me && me.includes("camera-access") && S) {
          e.state.unbindTexture(), (f = n.getBinding());
          for (let Ge = 0; Ge < _e.length; Ge++) {
            const qe = _e[Ge].camera;
            if (qe) {
              let rt = p[qe];
              rt || ((rt = new Ka()), (p[qe] = rt));
              const He = f.getCameraImage(qe);
              rt.sourceTexture = He;
            }
          }
        }
      }
      for (let _e = 0; _e < E.length; _e++) {
        const Le = y[_e],
          me = E[_e];
        Le !== null && me !== void 0 && me.update(Le, Q, l || a);
      }
      it && it(q, Q),
        Q.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: Q }),
        (_ = null);
    }
    const Ye = new so();
    Ye.setAnimationLoop(We),
      (this.setAnimationLoop = function (q) {
        it = q;
      }),
      (this.dispose = function () {});
  }
}
const lp = new Ve(),
  fo = new De();
fo.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function cp(i, e) {
  function t(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, eo(i)),
      p.isFog
        ? ((m.fogNear.value = p.near), (m.fogFar.value = p.far))
        : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function r(m, p, A, w, M) {
    p.isNodeMaterial
      ? (p.uniformsNeedUpdate = !1)
      : p.isMeshBasicMaterial
      ? s(m, p)
      : p.isMeshLambertMaterial
      ? (s(m, p), p.envMap && (m.envMapIntensity.value = p.envMapIntensity))
      : p.isMeshToonMaterial
      ? (s(m, p), f(m, p))
      : p.isMeshPhongMaterial
      ? (s(m, p),
        u(m, p),
        p.envMap && (m.envMapIntensity.value = p.envMapIntensity))
      : p.isMeshStandardMaterial
      ? (s(m, p), h(m, p), p.isMeshPhysicalMaterial && d(m, p, M))
      : p.isMeshMatcapMaterial
      ? (s(m, p), _(m, p))
      : p.isMeshDepthMaterial
      ? s(m, p)
      : p.isMeshDistanceMaterial
      ? (s(m, p), S(m, p))
      : p.isMeshNormalMaterial
      ? s(m, p)
      : p.isLineBasicMaterial
      ? (a(m, p), p.isLineDashedMaterial && o(m, p))
      : p.isPointsMaterial
      ? c(m, p, A, w)
      : p.isSpriteMaterial
      ? l(m, p)
      : p.isShadowMaterial
      ? (m.color.value.copy(p.color), (m.opacity.value = p.opacity))
      : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(m, p) {
    (m.opacity.value = p.opacity),
      p.color && m.diffuse.value.copy(p.color),
      p.emissive &&
        m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        t(p.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = p.bumpScale),
        p.side === 1 && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        t(p.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(p.normalScale),
        p.side === 1 && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        t(p.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)),
      p.emissiveMap &&
        ((m.emissiveMap.value = p.emissiveMap),
        t(p.emissiveMap, m.emissiveMapTransform)),
      p.specularMap &&
        ((m.specularMap.value = p.specularMap),
        t(p.specularMap, m.specularMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const A = e.get(p),
      w = A.envMap,
      M = A.envMapRotation;
    w &&
      ((m.envMap.value = w),
      m.envMapRotation.value
        .setFromMatrix4(lp.makeRotationFromEuler(M))
        .transpose(),
      w.isCubeTexture &&
        w.isRenderTargetTexture === !1 &&
        m.envMapRotation.value.premultiply(fo),
      (m.reflectivity.value = p.reflectivity),
      (m.ior.value = p.ior),
      (m.refractionRatio.value = p.refractionRatio)),
      p.lightMap &&
        ((m.lightMap.value = p.lightMap),
        (m.lightMapIntensity.value = p.lightMapIntensity),
        t(p.lightMap, m.lightMapTransform)),
      p.aoMap &&
        ((m.aoMap.value = p.aoMap),
        (m.aoMapIntensity.value = p.aoMapIntensity),
        t(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform));
  }
  function o(m, p) {
    (m.dashSize.value = p.dashSize),
      (m.totalSize.value = p.dashSize + p.gapSize),
      (m.scale.value = p.scale);
  }
  function c(m, p, A, w) {
    m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.size.value = p.size * A),
      (m.scale.value = w * 0.5),
      p.map && ((m.map.value = p.map), t(p.map, m.uvTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function l(m, p) {
    m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.rotation.value = p.rotation),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function u(m, p) {
    m.specular.value.copy(p.specular),
      (m.shininess.value = Math.max(p.shininess, 1e-4));
  }
  function f(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function h(m, p) {
    (m.metalness.value = p.metalness),
      p.metalnessMap &&
        ((m.metalnessMap.value = p.metalnessMap),
        t(p.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = p.roughness),
      p.roughnessMap &&
        ((m.roughnessMap.value = p.roughnessMap),
        t(p.roughnessMap, m.roughnessMapTransform)),
      p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function d(m, p, A) {
    (m.ior.value = p.ior),
      p.sheen > 0 &&
        (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (m.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap &&
          ((m.sheenColorMap.value = p.sheenColorMap),
          t(p.sheenColorMap, m.sheenColorMapTransform)),
        p.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = p.sheenRoughnessMap),
          t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      p.clearcoat > 0 &&
        ((m.clearcoat.value = p.clearcoat),
        (m.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap &&
          ((m.clearcoatMap.value = p.clearcoatMap),
          t(p.clearcoatMap, m.clearcoatMapTransform)),
        p.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
          t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        p.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = p.clearcoatNormalMap),
          t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          p.side === 1 && m.clearcoatNormalScale.value.negate())),
      p.dispersion > 0 && (m.dispersion.value = p.dispersion),
      p.retroreflectivity > 0 &&
        (m.retroreflectivity.value = p.retroreflectivity),
      p.iridescence > 0 &&
        ((m.iridescence.value = p.iridescence),
        (m.iridescenceIOR.value = p.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap &&
          ((m.iridescenceMap.value = p.iridescenceMap),
          t(p.iridescenceMap, m.iridescenceMapTransform)),
        p.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = p.iridescenceThicknessMap),
          t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      p.transmission > 0 &&
        ((m.transmission.value = p.transmission),
        (m.transmissionSamplerMap.value = A.texture),
        m.transmissionSamplerSize.value.set(A.width, A.height),
        p.transmissionMap &&
          ((m.transmissionMap.value = p.transmissionMap),
          t(p.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = p.thickness),
        p.thicknessMap &&
          ((m.thicknessMap.value = p.thicknessMap),
          t(p.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = p.attenuationDistance),
        m.attenuationColor.value.copy(p.attenuationColor)),
      p.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          p.anisotropy * Math.cos(p.anisotropyRotation),
          p.anisotropy * Math.sin(p.anisotropyRotation)
        ),
        p.anisotropyMap &&
          ((m.anisotropyMap.value = p.anisotropyMap),
          t(p.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = p.specularIntensity),
      m.specularColor.value.copy(p.specularColor),
      p.specularColorMap &&
        ((m.specularColorMap.value = p.specularColorMap),
        t(p.specularColorMap, m.specularColorMapTransform)),
      p.specularIntensityMap &&
        ((m.specularIntensityMap.value = p.specularIntensityMap),
        t(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function S(m, p) {
    const A = e.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),
      (m.nearDistance.value = A.shadow.camera.near),
      (m.farDistance.value = A.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function hp(i, e, t, n) {
  let r = {},
    s = {},
    a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(M, E) {
    const y = E.program;
    n.uniformBlockBinding(M, y);
  }
  function l(M, E) {
    let y = r[M.id];
    y === void 0 &&
      (m(M), (y = u(M)), (r[M.id] = y), M.addEventListener("dispose", A));
    const R = E.program;
    n.updateUBOMapping(M, R);
    const v = e.render.frame;
    s[M.id] !== v && (h(M), (s[M.id] = v));
  }
  function u(M) {
    const E = f();
    M.__bindingPointIndex = E;
    const y = i.createBuffer(),
      R = M.__size,
      v = M.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, y),
      i.bufferData(i.UNIFORM_BUFFER, R, v),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, E, y),
      y
    );
  }
  function f() {
    for (let M = 0; M < o; M++) if (a.indexOf(M) === -1) return a.push(M), M;
    return (
      Pe(
        "WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function h(M) {
    const E = r[M.id],
      y = M.uniforms,
      R = M.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E);
    for (let v = 0, b = y.length; v < b; v++) {
      const P = y[v];
      if (Array.isArray(P))
        for (let U = 0, B = P.length; U < B; U++) d(P[U], v, U, R);
      else d(P, v, 0, R);
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function d(M, E, y, R) {
    if (S(M, E, y, R) === !0) {
      const v = M.__offset,
        b = M.value;
      if (Array.isArray(b)) {
        let P = 0;
        for (let U = 0; U < b.length; U++) {
          const B = b[U],
            V = p(B);
          _(B, M.__data, P),
            typeof B != "number" &&
              typeof B != "boolean" &&
              !B.isMatrix3 &&
              !ArrayBuffer.isView(B) &&
              (P += V.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else _(b, M.__data, 0);
      i.bufferSubData(i.UNIFORM_BUFFER, v, M.__data);
    }
  }
  function _(M, E, y) {
    typeof M == "number" || typeof M == "boolean"
      ? (E[0] = M)
      : M.isMatrix3
      ? ((E[0] = M.elements[0]),
        (E[1] = M.elements[1]),
        (E[2] = M.elements[2]),
        (E[3] = 0),
        (E[4] = M.elements[3]),
        (E[5] = M.elements[4]),
        (E[6] = M.elements[5]),
        (E[7] = 0),
        (E[8] = M.elements[6]),
        (E[9] = M.elements[7]),
        (E[10] = M.elements[8]),
        (E[11] = 0))
      : ArrayBuffer.isView(M)
      ? E.set(new M.constructor(M.buffer, M.byteOffset, E.length))
      : M.toArray(E, y);
  }
  function S(M, E, y, R) {
    const v = M.value,
      b = E + "_" + y;
    if (R[b] === void 0)
      return (
        typeof v == "number" || typeof v == "boolean"
          ? (R[b] = v)
          : ArrayBuffer.isView(v)
          ? (R[b] = v.slice())
          : (R[b] = v.clone()),
        !0
      );
    {
      const P = R[b];
      if (typeof v == "number" || typeof v == "boolean") {
        if (P !== v) return (R[b] = v), !0;
      } else {
        if (ArrayBuffer.isView(v)) return !0;
        if (P.equals(v) === !1) return P.copy(v), !0;
      }
    }
    return !1;
  }
  function m(M) {
    const E = M.uniforms;
    let y = 0;
    const R = 16;
    for (let b = 0, P = E.length; b < P; b++) {
      const U = Array.isArray(E[b]) ? E[b] : [E[b]];
      for (let B = 0, V = U.length; B < V; B++) {
        const I = U[B],
          H = Array.isArray(I.value) ? I.value : [I.value];
        for (let K = 0, J = H.length; K < J; K++) {
          const ne = H[K],
            X = p(ne),
            j = y % R,
            te = j % X.boundary,
            we = j + te;
          (y += te),
            we !== 0 && R - we < X.storage && (y += R - we),
            (I.__data = new Float32Array(
              X.storage / Float32Array.BYTES_PER_ELEMENT
            )),
            (I.__offset = y),
            (y += X.storage);
        }
      }
    }
    const v = y % R;
    return v > 0 && (y += R - v), (M.__size = y), (M.__cache = {}), this;
  }
  function p(M) {
    const E = { boundary: 0, storage: 0 };
    return (
      typeof M == "number" || typeof M == "boolean"
        ? ((E.boundary = 4), (E.storage = 4))
        : M.isVector2
        ? ((E.boundary = 8), (E.storage = 8))
        : M.isVector3 || M.isColor
        ? ((E.boundary = 16), (E.storage = 12))
        : M.isVector4
        ? ((E.boundary = 16), (E.storage = 16))
        : M.isMatrix3
        ? ((E.boundary = 48), (E.storage = 48))
        : M.isMatrix4
        ? ((E.boundary = 64), (E.storage = 64))
        : M.isTexture
        ? ye(
            "WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : ArrayBuffer.isView(M)
        ? ((E.boundary = 16), (E.storage = M.byteLength))
        : ye("WebGLRenderer: Unsupported uniform value type.", M),
      E
    );
  }
  function A(M) {
    const E = M.target;
    E.removeEventListener("dispose", A);
    const y = a.indexOf(E.__bindingPointIndex);
    a.splice(y, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
  }
  function w() {
    for (const M in r) i.deleteBuffer(r[M]);
    (a = []), (r = {}), (s = {});
  }
  return { bind: c, update: l, dispose: w };
}
const up = new Uint16Array([
  12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545,
  13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829,
  15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880,
  14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410,
  14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958,
  11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039,
  14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743,
  12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751,
  14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764,
  13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387,
  14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782,
  10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831,
  14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886,
  11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600,
  14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104,
  12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205,
  14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603,
  8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451,
  15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932,
  10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461,
  8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631,
  15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883,
  9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279,
  7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229,
  9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697,
  8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337,
  8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119,
  8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448,
  6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340,
  7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933,
  7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007,
  5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302,
  6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679,
  6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359,
  4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188,
  6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377,
  4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354,
  2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981,
  4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808,
  3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322,
  2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681,
  3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1,
  15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133,
  1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996,
  1398, 13702, 1183,
]);
let $t = null;
function dp() {
  return (
    $t === null &&
      (($t = new es(up, 16, 16, 1030, 1016)),
      ($t.name = "DFG_LUT"),
      ($t.minFilter = 1006),
      ($t.magFilter = 1006),
      ($t.wrapS = 1001),
      ($t.wrapT = 1001),
      ($t.generateMipmaps = !1),
      ($t.needsUpdate = !0)),
    $t
  );
}
class jp {
  constructor(e = {}) {
    const {
      canvas: t = To(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = !1,
      reversedDepthBuffer: h = !1,
      outputBufferType: d = 1009,
    } = e;
    this.isWebGLRenderer = !0;
    let _;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      _ = n.getContextAttributes().alpha;
    } else _ = a;
    const S = d,
      m = new Set([1033, 1031, 1029]),
      p = new Set([1009, 1014, 1012, 1020, 1017, 1018]),
      A = new Uint32Array(4),
      w = new Int32Array(4),
      M = new L();
    let E = null,
      y = null;
    const R = [],
      v = [];
    let b = null;
    (this.domElement = t),
      (this.debug = {
        checkShaderErrors: !0,
        diagnostics: { keywords: !1 },
        onShaderError: null,
      }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1);
    const P = this;
    let U = !1,
      B = null,
      V = null,
      I = null,
      H = null;
    this._outputColorSpace = Ft;
    let K = 0,
      J = 0,
      ne = null,
      X = -1,
      j = null;
    const te = new tt(),
      we = new tt();
    let be = null;
    const it = new Ne(0);
    let We = 0,
      Ye = t.width,
      q = t.height,
      Q = 1,
      _e = null,
      Le = null;
    const me = new tt(0, 0, Ye, q),
      Oe = new tt(0, 0, Ye, q);
    let gt = !1;
    const Ge = new ts();
    let qe = !1,
      rt = !1;
    const He = new Ve(),
      lt = new L(),
      xt = new tt(),
      Ct = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let ct = !1;
    function dt() {
      return ne === null ? Q : 1;
    }
    let N = n;
    function Mt(x, C) {
      return t.getContext(x, C);
    }
    let Ze,
      T,
      g,
      F,
      z,
      W,
      ie,
      re,
      Y,
      $,
      se,
      Ee,
      ce,
      ae,
      Te,
      Ce,
      Ie,
      D,
      oe,
      Z,
      le,
      fe,
      ee;
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f,
      };
      if (
        ("setAttribute" in t && t.setAttribute("data-engine", "three.js r186"),
        t.addEventListener("webglcontextlost", st, !1),
        t.addEventListener("webglcontextrestored", Ke, !1),
        t.addEventListener("webglcontextcreationerror", Ot, !1),
        N === null)
      ) {
        const C = "webgl2";
        if (((N = Mt(C, x)), N === null))
          throw Mt(C)
            ? new Error(
                "THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."
              )
            : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      Ae();
    } catch (x) {
      throw (
        (t.removeEventListener("webglcontextlost", st, !1),
        t.removeEventListener("webglcontextrestored", Ke, !1),
        t.removeEventListener("webglcontextcreationerror", Ot, !1),
        Pe("WebGLRenderer: " + x.message),
        x)
      );
    }
    function Ae() {
      (Ze = new ud(N)),
        Ze.init(),
        (le = new ip(N, Ze)),
        (T = new td(N, Ze, e, le)),
        (g = new tp(N, Ze)),
        T.reversedDepthBuffer && h && g.buffers.depth.setReversed(!0),
        (V = N.createFramebuffer()),
        (I = N.createFramebuffer()),
        (H = N.createFramebuffer()),
        (F = new pd(N)),
        (z = new Vf()),
        (W = new np(N, Ze, g, z, T, le, F)),
        (ie = new hd(P)),
        (re = new gc(N)),
        (fe = new ju(N, re)),
        (Y = new dd(N, re, F, fe)),
        ($ = new gd(N, Y, re, fe, F)),
        (D = new md(N, T, W)),
        (Te = new nd(z)),
        (se = new zf(P, ie, Ze, T, fe, Te)),
        (Ee = new cp(P, z)),
        (ce = new kf()),
        (ae = new Jf(Ze)),
        (Ie = new Qu(P, ie, g, $, _, c)),
        (Ce = new ep(P, $, T)),
        (ee = new hp(N, F, T, g)),
        (oe = new ed(N, Ze, F)),
        (Z = new fd(N, Ze, F)),
        (F.programs = se.programs),
        (P.capabilities = T),
        (P.extensions = Ze),
        (P.properties = z),
        (P.renderLists = ce),
        (P.shadowMap = Ce),
        (P.state = g),
        (P.info = F);
    }
    S !== 1009 && (b = new vd(S, t.width, t.height, o, r, s));
    const Se = new op(P, N);
    (this.xr = Se),
      (this.getContext = function () {
        return N;
      }),
      (this.getContextAttributes = function () {
        return N.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const x = Ze.get("WEBGL_lose_context");
        x && x.loseContext();
      }),
      (this.forceContextRestore = function () {
        const x = Ze.get("WEBGL_lose_context");
        x && x.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return Q;
      }),
      (this.setPixelRatio = function (x) {
        x !== void 0 && ((Q = x), this.setSize(Ye, q, !1));
      }),
      (this.getSize = function (x) {
        return x.set(Ye, q);
      }),
      (this.setSize = function (x, C, k = !0) {
        if (Se.isPresenting) {
          ye("WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        (Ye = x),
          (q = C),
          (t.width = Math.floor(x * Q)),
          (t.height = Math.floor(C * Q)),
          k === !0 && ((t.style.width = x + "px"), (t.style.height = C + "px")),
          b !== null && b.setSize(t.width, t.height),
          this.setViewport(0, 0, x, C);
      }),
      (this.getDrawingBufferSize = function (x) {
        return x.set(Ye * Q, q * Q).floor();
      }),
      (this.setDrawingBufferSize = function (x, C, k) {
        (Ye = x),
          (q = C),
          (Q = k),
          (t.width = Math.floor(x * k)),
          (t.height = Math.floor(C * k)),
          this.setViewport(0, 0, x, C);
      }),
      (this.setEffects = function (x) {
        if (S === 1009) {
          Pe(
            "WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType."
          );
          return;
        }
        if (x) {
          for (let C = 0; C < x.length; C++)
            if (x[C].isOutputPass === !0) {
              ye(
                "WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically."
              );
              break;
            }
        }
        b.setEffects(x || []);
      }),
      (this.getCurrentViewport = function (x) {
        return x.copy(te);
      }),
      (this.getViewport = function (x) {
        return x.copy(me);
      }),
      (this.setViewport = function (x, C, k, O) {
        x.isVector4 ? me.set(x.x, x.y, x.z, x.w) : me.set(x, C, k, O),
          g.viewport(te.copy(me).multiplyScalar(Q).round());
      }),
      (this.getScissor = function (x) {
        return x.copy(Oe);
      }),
      (this.setScissor = function (x, C, k, O) {
        x.isVector4 ? Oe.set(x.x, x.y, x.z, x.w) : Oe.set(x, C, k, O),
          g.scissor(we.copy(Oe).multiplyScalar(Q).round());
      }),
      (this.getScissorTest = function () {
        return gt;
      }),
      (this.setScissorTest = function (x) {
        g.setScissorTest((gt = x));
      }),
      (this.setOpaqueSort = function (x) {
        _e = x;
      }),
      (this.setTransparentSort = function (x) {
        Le = x;
      }),
      (this.getClearColor = function (x) {
        return x.copy(Ie.getClearColor());
      }),
      (this.setClearColor = function () {
        Ie.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return Ie.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        Ie.setClearAlpha(...arguments);
      }),
      (this.clear = function (x = !0, C = !0, k = !0) {
        let O = 0;
        if (x) {
          let G = !1;
          if (ne !== null) {
            const de = ne.texture.format;
            G = m.has(de);
          }
          if (G) {
            const de = ne.texture.type,
              ge = p.has(de),
              ue = Ie.getClearColor(),
              ve = Ie.getClearAlpha(),
              Me = ue.r,
              Ue = ue.g,
              ze = ue.b;
            ge
              ? ((A[0] = Me),
                (A[1] = Ue),
                (A[2] = ze),
                (A[3] = ve),
                N.clearBufferuiv(N.COLOR, 0, A))
              : ((w[0] = Me),
                (w[1] = Ue),
                (w[2] = ze),
                (w[3] = ve),
                N.clearBufferiv(N.COLOR, 0, w));
          } else O |= N.COLOR_BUFFER_BIT;
        }
        C && ((O |= N.DEPTH_BUFFER_BIT), this.state.buffers.depth.setMask(!0)),
          k &&
            ((O |= N.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          O !== 0 && N.clear(O);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.setNodesHandler = function (x) {
        x.setRenderer(this), (B = x);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", st, !1),
          t.removeEventListener("webglcontextrestored", Ke, !1),
          t.removeEventListener("webglcontextcreationerror", Ot, !1),
          Ie.dispose(),
          ce.dispose(),
          ae.dispose(),
          z.dispose(),
          ie.dispose(),
          $.dispose(),
          fe.dispose(),
          ee.dispose(),
          se.dispose(),
          Se.dispose(),
          Se.removeEventListener("sessionstart", ms),
          Se.removeEventListener("sessionend", gs),
          Tn.stop();
      });
    function st(x) {
      x.preventDefault(), ir("WebGLRenderer: Context Lost."), (U = !0);
    }
    function Ke() {
      ir("WebGLRenderer: Context Restored."), (U = !1);
      const x = F.autoReset,
        C = Ce.enabled,
        k = Ce.autoUpdate,
        O = Ce.needsUpdate,
        G = Ce.type;
      Ae(),
        (F.autoReset = x),
        (Ce.enabled = C),
        (Ce.autoUpdate = k),
        (Ce.needsUpdate = O),
        (Ce.type = G);
    }
    function Ot(x) {
      Pe(
        "WebGLRenderer: A WebGL context could not be created. Reason: ",
        x.statusMessage
      );
    }
    function Kt(x) {
      const C = x.target;
      C.removeEventListener("dispose", Kt), po(C);
    }
    function po(x) {
      mo(x), z.remove(x);
    }
    function mo(x) {
      const C = z.get(x).programs;
      C !== void 0 &&
        (C.forEach(function (k) {
          se.releaseProgram(k);
        }),
        x.isShaderMaterial && se.releaseShaderCache(x));
    }
    this.renderBufferDirect = function (x, C, k, O, G, de) {
      C === null && (C = Ct);
      const ge = G.isMesh && G.matrixWorld.determinantAffine() < 0,
        ue = vo(x, C, k, O, G);
      g.setMaterial(O, ge);
      let ve = k.index,
        Me = 1;
      if (O.wireframe === !0) {
        if (((ve = Y.getWireframeAttribute(k)), ve === void 0)) return;
        Me = 2;
      }
      const Ue = k.drawRange,
        ze = k.attributes.position;
      let xe = Ue.start * Me,
        Je = (Ue.start + Ue.count) * Me;
      de !== null &&
        ((xe = Math.max(xe, de.start * Me)),
        (Je = Math.min(Je, (de.start + de.count) * Me))),
        ve !== null
          ? ((xe = Math.max(xe, 0)), (Je = Math.min(Je, ve.count)))
          : ze != null &&
            ((xe = Math.max(xe, 0)), (Je = Math.min(Je, ze.count)));
      const ft = Je - xe;
      if (ft < 0 || ft === 1 / 0) return;
      fe.setup(G, O, ue, k, ve);
      let ot,
        nt = oe;
      if (
        (ve !== null && ((ot = re.get(ve)), (nt = Z), nt.setIndex(ot)),
        G.isMesh)
      )
        O.wireframe === !0
          ? (g.setLineWidth(O.wireframeLinewidth * dt()), nt.setMode(N.LINES))
          : nt.setMode(N.TRIANGLES);
      else if (G.isLine) {
        let yt = O.linewidth;
        yt === void 0 && (yt = 1),
          g.setLineWidth(yt * dt()),
          G.isLineSegments
            ? nt.setMode(N.LINES)
            : G.isLineLoop
            ? nt.setMode(N.LINE_LOOP)
            : nt.setMode(N.LINE_STRIP);
      } else
        G.isPoints
          ? nt.setMode(N.POINTS)
          : G.isSprite && nt.setMode(N.TRIANGLES);
      if (G.isBatchedMesh)
        if (Ze.get("WEBGL_multi_draw"))
          nt.renderMultiDraw(
            G._multiDrawStarts,
            G._multiDrawCounts,
            G._multiDrawCount
          );
        else {
          const yt = G._multiDrawStarts,
            pe = G._multiDrawCounts,
            At = G._multiDrawCount,
            Xe = ve ? re.get(ve).bytesPerElement : 1,
            Nt = z.get(O).currentProgram.getUniforms();
          for (let Jt = 0; Jt < At; Jt++)
            Nt.setValue(N, "_gl_DrawID", Jt), nt.render(yt[Jt] / Xe, pe[Jt]);
        }
      else if (G.isInstancedMesh) nt.renderInstances(xe, ft, G.count);
      else if (k.isInstancedBufferGeometry) {
        const yt = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0,
          pe = Math.min(k.instanceCount, yt);
        nt.renderInstances(xe, ft, pe);
      } else nt.render(xe, ft);
    };
    function ps(x, C, k, O) {
      B !== null && x.isNodeMaterial && B.setObject(O, x),
        qe === !0 && Te.setState(x, k, !1),
        x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1
          ? ((x.side = 1),
            (x.needsUpdate = !0),
            Ti(x, C, O),
            (x.side = 0),
            (x.needsUpdate = !0),
            Ti(x, C, O),
            (x.side = 2))
          : Ti(x, C, O);
    }
    (this.compile = function (x, C, k = null) {
      k === null && (k = x),
        B !== null && B.renderStart(x, C, k),
        (y = ae.get(k)),
        y.init(C),
        v.push(y),
        k.traverseVisible(function (G) {
          G.isLight &&
            G.layers.test(C.layers) &&
            (y.pushLight(G), G.castShadow && y.pushShadow(G));
        }),
        x !== k &&
          x.traverseVisible(function (G) {
            G.isLight &&
              G.layers.test(C.layers) &&
              (y.pushLight(G), G.castShadow && y.pushShadow(G));
          }),
        y.setupLights(),
        B !== null && B.updateLights(y.state.lightsArray),
        (rt = this.localClippingEnabled),
        (qe = Te.init(this.clippingPlanes, rt)),
        qe === !0 && Te.setGlobalState(this.clippingPlanes, C),
        B !== null && Ce.render(y.state.shadowsArray, k, C);
      const O = new Set();
      return (
        x.traverse(function (G) {
          if (!(G.isMesh || G.isPoints || G.isLine || G.isSprite)) return;
          const de = G.material;
          if (de)
            if (Array.isArray(de))
              for (let ge = 0; ge < de.length; ge++) {
                const ue = de[ge];
                ps(ue, k, C, G), O.add(ue);
              }
            else ps(de, k, C, G), O.add(de);
        }),
        (y = v.pop()),
        B !== null && B.renderEnd(),
        O
      );
    }),
      (this.compileAsync = function (x, C, k = null) {
        const O = this.compile(x, C, k);
        return new Promise((G) => {
          function de() {
            if (
              (O.forEach(function (ge) {
                const ve = z.get(ge).currentProgram;
                (ve === void 0 || ve.isReady()) && O.delete(ge);
              }),
              O.size === 0)
            ) {
              G(x);
              return;
            }
            setTimeout(de, 10);
          }
          Ze.get("KHR_parallel_shader_compile") !== null
            ? de()
            : setTimeout(de, 10);
        });
      });
    let dr = null;
    function go(x) {
      dr && dr(x);
    }
    function ms() {
      Tn.stop();
    }
    function gs() {
      Tn.start();
    }
    const Tn = new so();
    Tn.setAnimationLoop(go),
      typeof self < "u" && Tn.setContext(self),
      (this.setAnimationLoop = function (x) {
        (dr = x), Se.setAnimationLoop(x), x === null ? Tn.stop() : Tn.start();
      }),
      Se.addEventListener("sessionstart", ms),
      Se.addEventListener("sessionend", gs),
      (this.render = function (x, C) {
        if (C !== void 0 && C.isCamera !== !0) {
          Pe(
            "WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (U === !0) return;
        B !== null && B.renderStart(x, C);
        const k = Se.enabled === !0 && Se.isPresenting === !0,
          O = b !== null && (ne === null || k) && b.begin(P, ne);
        if (
          (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(),
          C.parent === null &&
            C.matrixWorldAutoUpdate === !0 &&
            C.updateMatrixWorld(),
          Se.enabled === !0 &&
            Se.isPresenting === !0 &&
            (b === null || b.isCompositing() === !1) &&
            (Se.cameraAutoUpdate === !0 && Se.updateCamera(C),
            (C = Se.getCamera())),
          x.isScene === !0 && x.onBeforeRender(P, x, C, ne),
          (y = ae.get(x, v.length)),
          y.init(C),
          (y.state.textureUnits = W.getTextureUnits()),
          v.push(y),
          He.multiplyMatrices(C.projectionMatrix, C.matrixWorldInverse),
          Ge.setFromProjectionMatrix(He, 2e3, C.reversedDepth),
          (rt = this.localClippingEnabled),
          (qe = Te.init(this.clippingPlanes, rt)),
          (E = ce.get(x, R.length)),
          E.init(),
          R.push(E),
          Se.enabled === !0 && Se.isPresenting === !0)
        ) {
          const ge = P.xr.getDepthSensingMesh();
          ge !== null && fr(ge, C, -1 / 0, P.sortObjects);
        }
        fr(x, C, 0, P.sortObjects),
          E.finish(),
          B !== null && B.updateLights(y.state.lightsArray),
          P.sortObjects === !0 && E.sort(_e, Le),
          (ct =
            Se.enabled === !1 ||
            Se.isPresenting === !1 ||
            Se.hasDepthSensing() === !1),
          ct && Ie.addToRenderList(E, x),
          this.info.render.frame++,
          this.info.autoReset === !0 && this.info.reset(),
          qe === !0 && Te.beginShadows();
        const G = y.state.shadowsArray;
        if (
          (Ce.render(G, x, C),
          qe === !0 && Te.endShadows(),
          (O && b.hasRenderPass()) === !1)
        ) {
          const ge = E.opaque,
            ue = E.transmissive;
          if ((y.setupLights(), C.isArrayCamera)) {
            const ve = C.cameras;
            if (ue.length > 0)
              for (let Me = 0, Ue = ve.length; Me < Ue; Me++) {
                const ze = ve[Me];
                vs(ge, ue, x, ze);
              }
            ct && Ie.render(x);
            for (let Me = 0, Ue = ve.length; Me < Ue; Me++) {
              const ze = ve[Me];
              _s(E, x, ze, ze.viewport);
            }
          } else
            ue.length > 0 && vs(ge, ue, x, C), ct && Ie.render(x), _s(E, x, C);
        }
        ne !== null &&
          J === 0 &&
          (W.updateMultisampleRenderTarget(ne), W.updateRenderTargetMipmap(ne)),
          O && b.end(P),
          x.isScene === !0 && x.onAfterRender(P, x, C),
          fe.resetDefaultState(),
          (X = -1),
          (j = null),
          v.pop(),
          v.length > 0
            ? ((y = v[v.length - 1]),
              W.setTextureUnits(y.state.textureUnits),
              qe === !0 && Te.setGlobalState(P.clippingPlanes, y.state.camera))
            : (y = null),
          R.pop(),
          R.length > 0 ? (E = R[R.length - 1]) : (E = null),
          B !== null && B.renderEnd();
      });
    function fr(x, C, k, O) {
      if (x.visible === !1) return;
      if (x.layers.test(C.layers)) {
        if (x.isGroup) k = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === !0 && x.update(C);
        else if (x.isLightProbeGrid) y.pushLightProbeGrid(x);
        else if (x.isLight) y.pushLight(x), x.castShadow && y.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || x.intersectsFrustum(Ge)) {
            O && xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(He);
            const ge = $.update(x),
              ue = x.material;
            ue.visible && E.push(x, ge, ue, k, xt.z, null, C);
          }
        } else if (
          (x.isMesh || x.isLine || x.isPoints) &&
          (!x.frustumCulled || x.intersectsFrustum(Ge))
        ) {
          const ge = $.update(x),
            ue = x.material;
          if (
            (O &&
              (x.boundingSphere !== void 0
                ? (x.boundingSphere === null && x.computeBoundingSphere(),
                  xt.copy(x.boundingSphere.center))
                : (ge.boundingSphere === null && ge.computeBoundingSphere(),
                  xt.copy(ge.boundingSphere.center)),
              xt.applyMatrix4(x.matrixWorld).applyMatrix4(He)),
            Array.isArray(ue))
          ) {
            const ve = ge.groups;
            for (let Me = 0, Ue = ve.length; Me < Ue; Me++) {
              const ze = ve[Me],
                xe = ue[ze.materialIndex];
              xe && xe.visible && E.push(x, ge, xe, k, xt.z, ze, C);
            }
          } else ue.visible && E.push(x, ge, ue, k, xt.z, null, C);
        }
      }
      const de = x.children;
      for (let ge = 0, ue = de.length; ge < ue; ge++) fr(de[ge], C, k, O);
    }
    function _s(x, C, k, O) {
      const { opaque: G, transmissive: de, transparent: ge } = x;
      y.setupLightsView(k),
        qe === !0 && Te.setGlobalState(P.clippingPlanes, k),
        O && g.viewport(te.copy(O)),
        G.length > 0 && Ei(G, C, k),
        de.length > 0 && Ei(de, C, k),
        ge.length > 0 && Ei(ge, C, k),
        g.buffers.depth.setTest(!0),
        g.buffers.depth.setMask(!0),
        g.buffers.color.setMask(!0),
        g.setPolygonOffset(!1);
    }
    function vs(x, C, k, O) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null) return;
      if (y.state.transmissionRenderTarget[O.id] === void 0) {
        const xe =
          Ze.has("EXT_color_buffer_half_float") ||
          Ze.has("EXT_color_buffer_float");
        y.state.transmissionRenderTarget[O.id] = new Xt(1, 1, {
          generateMipmaps: !0,
          type: xe ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, T.samples),
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          storeMultisampledDepthBuffer: !1,
          storeMultisampledStencilBuffer: !1,
          colorSpace: ke.workingColorSpace,
        });
      }
      const de = y.state.transmissionRenderTarget[O.id],
        ge = O.viewport || te;
      de.setSize(
        ge.z * P.transmissionResolutionScale,
        ge.w * P.transmissionResolutionScale
      );
      const ue = P.getRenderTarget(),
        ve = P.getActiveCubeFace(),
        Me = P.getActiveMipmapLevel();
      P.setRenderTarget(de),
        P.getClearColor(it),
        (We = P.getClearAlpha()),
        We < 1 && P.setClearColor(16777215, 0.5),
        P.clear(),
        ct && Ie.render(k);
      const Ue = P.toneMapping;
      P.toneMapping = 0;
      const ze = O.viewport;
      if (
        (O.viewport !== void 0 && (O.viewport = void 0),
        y.setupLightsView(O),
        qe === !0 && Te.setGlobalState(P.clippingPlanes, O),
        Ei(x, k, O),
        W.updateMultisampleRenderTarget(de),
        W.updateRenderTargetMipmap(de),
        Ze.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let xe = !1;
        for (let Je = 0, ft = C.length; Je < ft; Je++) {
          const ot = C[Je],
            { object: nt, geometry: yt, material: pe, group: At } = ot;
          if (pe.side === 2 && nt.layers.test(O.layers)) {
            const Xe = pe.side;
            (pe.side = 1),
              (pe.needsUpdate = !0),
              xs(nt, k, O, yt, pe, At),
              (pe.side = Xe),
              (pe.needsUpdate = !0),
              (xe = !0);
          }
        }
        xe === !0 &&
          (W.updateMultisampleRenderTarget(de), W.updateRenderTargetMipmap(de));
      }
      P.setRenderTarget(ue, ve, Me),
        P.setClearColor(it, We),
        ze !== void 0 && (O.viewport = ze),
        (P.toneMapping = Ue);
    }
    function Ei(x, C, k) {
      const O = C.isScene === !0 ? C.overrideMaterial : null;
      for (let G = 0, de = x.length; G < de; G++) {
        const ge = x[G],
          { object: ue, geometry: ve, group: Me } = ge;
        let Ue = ge.material;
        Ue.allowOverride === !0 && O !== null && (Ue = O),
          ue.layers.test(k.layers) && xs(ue, C, k, ve, Ue, Me);
      }
    }
    function xs(x, C, k, O, G, de) {
      B !== null && G.isNodeMaterial && B.setObject(x, G),
        x.onBeforeRender(P, C, k, O, G, de),
        x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, x.matrixWorld),
        x.normalMatrix.getNormalMatrix(x.modelViewMatrix),
        G.onBeforeRender(P, C, k, O, x, de),
        G.transparent === !0 && G.side === 2 && G.forceSinglePass === !1
          ? ((G.side = 1),
            (G.needsUpdate = !0),
            P.renderBufferDirect(k, C, O, G, x, de),
            (G.side = 0),
            (G.needsUpdate = !0),
            P.renderBufferDirect(k, C, O, G, x, de),
            (G.side = 2))
          : P.renderBufferDirect(k, C, O, G, x, de),
        x.onAfterRender(P, C, k, O, G, de);
    }
    function Ti(x, C, k) {
      C.isScene !== !0 && (C = Ct);
      const O = z.get(x),
        G = y.state.lights,
        de = y.state.shadowsArray,
        ge = G.state.version,
        ue = se.getParameters(
          x,
          G.state,
          de,
          C,
          k,
          y.state.lightProbeGridArray
        ),
        ve = se.getProgramCacheKey(ue);
      let Me = O.programs;
      (O.environment =
        x.isMeshStandardMaterial ||
        x.isMeshLambertMaterial ||
        x.isMeshPhongMaterial
          ? C.environment
          : null),
        (O.fog = C.fog);
      const Ue =
        x.isMeshStandardMaterial ||
        (x.isMeshLambertMaterial && !x.envMap) ||
        (x.isMeshPhongMaterial && !x.envMap);
      (O.envMap = ie.get(x.envMap || O.environment, Ue)),
        (O.envMapRotation =
          O.environment !== null && x.envMap === null
            ? C.environmentRotation
            : x.envMapRotation),
        Me === void 0 &&
          (x.addEventListener("dispose", Kt),
          (Me = new Map()),
          (O.programs = Me));
      let ze = Me.get(ve);
      if (ze !== void 0) {
        if (O.currentProgram === ze && O.lightsStateVersion === ge)
          return Ms(x, ue), ze;
      } else
        (ue.uniforms = se.getUniforms(x)),
          B !== null && x.isNodeMaterial && B.build(x, k, ue),
          x.onBeforeCompile(ue, P),
          (ze = se.acquireProgram(ue, ve)),
          Me.set(ve, ze),
          (O.uniforms = ue.uniforms);
      const xe = O.uniforms;
      return (
        ((!x.isShaderMaterial && !x.isRawShaderMaterial) ||
          x.clipping === !0) &&
          (xe.clippingPlanes = Te.uniform),
        Ms(x, ue),
        (O.needsLights = So(x)),
        (O.lightsStateVersion = ge),
        O.needsLights &&
          ((xe.ambientLightColor.value = G.state.ambient),
          (xe.lightProbe.value = G.state.probe),
          (xe.sunLights.value = G.state.sun),
          (xe.sunLightShadows.value = G.state.sunShadow),
          (xe.directionalLights.value = G.state.directional),
          (xe.directionalLightShadows.value = G.state.directionalShadow),
          (xe.spotLights.value = G.state.spot),
          (xe.spotLightShadows.value = G.state.spotShadow),
          (xe.rectAreaLights.value = G.state.rectArea),
          (xe.ltc_1.value = G.state.rectAreaLTC1),
          (xe.ltc_2.value = G.state.rectAreaLTC2),
          (xe.pointLights.value = G.state.point),
          (xe.pointLightShadows.value = G.state.pointShadow),
          (xe.hemisphereLights.value = G.state.hemi),
          (xe.sunShadowMatrix.value = G.state.sunShadowMatrix),
          (xe.sunShadowCascade.value = G.state.sunShadowCascade),
          (xe.directionalShadowMatrix.value = G.state.directionalShadowMatrix),
          (xe.spotLightMatrix.value = G.state.spotLightMatrix),
          (xe.spotLightMap.value = G.state.spotLightMap),
          (xe.pointShadowMatrix.value = G.state.pointShadowMatrix)),
        (O.lightProbeGrid = y.state.lightProbeGridArray.length > 0),
        (O.currentProgram = ze),
        (O.uniformsList = null),
        ze
      );
    }
    function Ss(x) {
      if (x.uniformsList === null) {
        const C = x.currentProgram.getUniforms();
        x.uniformsList = er.seqWithValue(C.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Ms(x, C) {
      const k = z.get(x);
      (k.outputColorSpace = C.outputColorSpace),
        (k.batching = C.batching),
        (k.batchingColor = C.batchingColor),
        (k.instancing = C.instancing),
        (k.instancingColor = C.instancingColor),
        (k.instancingMorph = C.instancingMorph),
        (k.skinning = C.skinning),
        (k.morphTargets = C.morphTargets),
        (k.morphNormals = C.morphNormals),
        (k.morphColors = C.morphColors),
        (k.morphTargetsCount = C.morphTargetsCount),
        (k.numClippingPlanes = C.numClippingPlanes),
        (k.numIntersection = C.numClipIntersection),
        (k.vertexAlphas = C.vertexAlphas),
        (k.vertexTangents = C.vertexTangents),
        (k.toneMapping = C.toneMapping);
    }
    function _o(x, C) {
      if (x.length === 0) return null;
      if (x.length === 1) return x[0].texture !== null ? x[0] : null;
      M.setFromMatrixPosition(C.matrixWorld);
      for (let k = 0, O = x.length; k < O; k++) {
        const G = x[k];
        if (G.texture !== null && G.boundingBox.containsPoint(M)) return G;
      }
      return null;
    }
    function vo(x, C, k, O, G) {
      C.isScene !== !0 && (C = Ct), W.resetTextureUnits();
      const de = C.fog,
        ge =
          O.isMeshStandardMaterial ||
          O.isMeshLambertMaterial ||
          O.isMeshPhongMaterial
            ? C.environment
            : null,
        ue =
          ne === null
            ? P.outputColorSpace
            : ne.isXRRenderTarget === !0
            ? ne.texture.colorSpace
            : ke.workingColorSpace,
        ve =
          O.isMeshStandardMaterial ||
          (O.isMeshLambertMaterial && !O.envMap) ||
          (O.isMeshPhongMaterial && !O.envMap),
        Me = ie.get(O.envMap || ge, ve),
        Ue =
          O.vertexColors === !0 &&
          !!k.attributes.color &&
          k.attributes.color.itemSize === 4,
        ze = !!k.attributes.tangent && (!!O.normalMap || O.anisotropy > 0),
        xe = !!k.morphAttributes.position,
        Je = !!k.morphAttributes.normal,
        ft = !!k.morphAttributes.color;
      let ot = 0;
      O.toneMapped &&
        (ne === null || ne.isXRRenderTarget === !0) &&
        (ot = P.toneMapping);
      const nt =
          k.morphAttributes.position ||
          k.morphAttributes.normal ||
          k.morphAttributes.color,
        yt = nt !== void 0 ? nt.length : 0,
        pe = z.get(O),
        At = y.state.lights;
      if (qe === !0 && (rt === !0 || x !== j)) {
        const at = x === j && O.id === X;
        Te.setState(O, x, at);
      }
      let Xe = !1;
      O.version === pe.__version
        ? ((pe.needsLights && pe.lightsStateVersion !== At.state.version) ||
            pe.outputColorSpace !== ue ||
            (G.isBatchedMesh && pe.batching === !1) ||
            (!G.isBatchedMesh && pe.batching === !0) ||
            (G.isBatchedMesh &&
              pe.batchingColor === !0 &&
              G._colorsTexture === null) ||
            (G.isBatchedMesh &&
              pe.batchingColor === !1 &&
              G._colorsTexture !== null) ||
            (G.isInstancedMesh && pe.instancing === !1) ||
            (!G.isInstancedMesh && pe.instancing === !0) ||
            (G.isSkinnedMesh && pe.skinning === !1) ||
            (!G.isSkinnedMesh && pe.skinning === !0) ||
            (G.isInstancedMesh &&
              pe.instancingColor === !0 &&
              G.instanceColor === null) ||
            (G.isInstancedMesh &&
              pe.instancingColor === !1 &&
              G.instanceColor !== null) ||
            (G.isInstancedMesh &&
              pe.instancingMorph === !0 &&
              G.morphTexture === null) ||
            (G.isInstancedMesh &&
              pe.instancingMorph === !1 &&
              G.morphTexture !== null) ||
            pe.envMap !== Me ||
            (O.fog === !0 && pe.fog !== de) ||
            (pe.numClippingPlanes !== void 0 &&
              (pe.numClippingPlanes !== Te.numPlanes ||
                pe.numIntersection !== Te.numIntersection)) ||
            pe.vertexAlphas !== Ue ||
            pe.vertexTangents !== ze ||
            pe.morphTargets !== xe ||
            pe.morphNormals !== Je ||
            pe.morphColors !== ft ||
            pe.toneMapping !== ot ||
            pe.morphTargetsCount !== yt ||
            !!pe.lightProbeGrid != y.state.lightProbeGridArray.length > 0) &&
          (Xe = !0)
        : ((Xe = !0), (pe.__version = O.version));
      let Nt = pe.currentProgram;
      Xe === !0 &&
        ((Nt = Ti(O, C, G)),
        B && O.isNodeMaterial && B.onUpdateProgram(O, Nt, pe));
      let Jt = !1,
        dn = !1,
        Dn = !1;
      const je = Nt.getUniforms(),
        ut = pe.uniforms;
      if (
        (g.useProgram(Nt.program) && ((Jt = !0), (dn = !0), (Dn = !0)),
        O.id !== X && ((X = O.id), (dn = !0)),
        pe.needsLights)
      ) {
        const at = _o(y.state.lightProbeGridArray, G);
        pe.lightProbeGrid !== at && ((pe.lightProbeGrid = at), (dn = !0));
      }
      if (Jt || j !== x) {
        g.buffers.depth.getReversed() &&
          x.reversedDepth !== !0 &&
          ((x._reversedDepth = !0), x.updateProjectionMatrix()),
          je.setValue(N, "projectionMatrix", x.projectionMatrix),
          je.setValue(N, "viewMatrix", x.matrixWorldInverse);
        const pn = je.map.cameraPosition;
        pn !== void 0 &&
          pn.setValue(N, lt.setFromMatrixPosition(x.matrixWorld)),
          T.logarithmicDepthBuffer &&
            je.setValue(
              N,
              "logDepthBufFC",
              2 / (Math.log(x.far + 1) / Math.LN2)
            ),
          (O.isMeshPhongMaterial ||
            O.isMeshToonMaterial ||
            O.isMeshLambertMaterial ||
            O.isMeshBasicMaterial ||
            O.isMeshStandardMaterial ||
            O.isShaderMaterial) &&
            je.setValue(N, "isOrthographic", x.isOrthographicCamera === !0),
          j !== x && ((j = x), (dn = !0), (Dn = !0));
      }
      if (
        (pe.needsLights &&
          (At.state.sunShadowMap.length > 0 &&
            je.setValue(N, "sunShadowMap", At.state.sunShadowMap, W),
          At.state.directionalShadowMap.length > 0 &&
            je.setValue(
              N,
              "directionalShadowMap",
              At.state.directionalShadowMap,
              W
            ),
          At.state.spotShadowMap.length > 0 &&
            je.setValue(N, "spotShadowMap", At.state.spotShadowMap, W),
          At.state.pointShadowMap.length > 0 &&
            je.setValue(N, "pointShadowMap", At.state.pointShadowMap, W)),
        G.isSkinnedMesh)
      ) {
        je.setOptional(N, G, "bindMatrix"),
          je.setOptional(N, G, "bindMatrixInverse");
        const at = G.skeleton;
        at &&
          (at.boneTexture === null && at.computeBoneTexture(),
          je.setValue(N, "boneTexture", at.boneTexture, W));
      }
      G.isBatchedMesh &&
        (je.setOptional(N, G, "batchingTexture"),
        je.setValue(N, "batchingTexture", G._matricesTexture, W),
        je.setOptional(N, G, "batchingIdTexture"),
        je.setValue(N, "batchingIdTexture", G._indirectTexture, W),
        je.setOptional(N, G, "batchingColorTexture"),
        G._colorsTexture !== null &&
          je.setValue(N, "batchingColorTexture", G._colorsTexture, W));
      const fn = k.morphAttributes;
      if (
        ((fn.position !== void 0 ||
          fn.normal !== void 0 ||
          fn.color !== void 0) &&
          D.update(G, k, Nt),
        (dn || pe.receiveShadow !== G.receiveShadow) &&
          ((pe.receiveShadow = G.receiveShadow),
          je.setValue(N, "receiveShadow", G.receiveShadow)),
        (O.isMeshStandardMaterial ||
          O.isMeshLambertMaterial ||
          O.isMeshPhongMaterial) &&
          O.envMap === null &&
          C.environment !== null &&
          (ut.envMapIntensity.value = C.environmentIntensity),
        ut.dfgLUT !== void 0 && (ut.dfgLUT.value = dp()),
        dn)
      ) {
        if (
          (je.setValue(N, "toneMappingExposure", P.toneMappingExposure),
          pe.needsLights && xo(ut, Dn),
          de && O.fog === !0 && Ee.refreshFogUniforms(ut, de),
          Ee.refreshMaterialUniforms(
            ut,
            O,
            Q,
            q,
            y.state.transmissionRenderTarget[x.id]
          ),
          pe.needsLights && pe.lightProbeGrid)
        ) {
          const at = pe.lightProbeGrid;
          (ut.probesSH.value = at.texture),
            ut.probesMin.value.copy(at.boundingBox.min),
            ut.probesMax.value.copy(at.boundingBox.max),
            ut.probesResolution.value.copy(at.resolution);
        }
        er.upload(N, Ss(pe), ut, W);
      }
      if (
        (O.isShaderMaterial &&
          O.uniformsNeedUpdate === !0 &&
          (er.upload(N, Ss(pe), ut, W), (O.uniformsNeedUpdate = !1)),
        O.isSpriteMaterial && je.setValue(N, "center", G.center),
        je.setValue(N, "modelViewMatrix", G.modelViewMatrix),
        je.setValue(N, "normalMatrix", G.normalMatrix),
        je.setValue(N, "modelMatrix", G.matrixWorld),
        O.uniformsGroups !== void 0)
      ) {
        const at = O.uniformsGroups;
        for (let pn = 0, In = at.length; pn < In; pn++) {
          const Es = at[pn];
          ee.update(Es, Nt), ee.bind(Es, Nt);
        }
      }
      return Nt;
    }
    function xo(x, C) {
      (x.ambientLightColor.needsUpdate = C),
        (x.lightProbe.needsUpdate = C),
        (x.sunLights.needsUpdate = C),
        (x.sunLightShadows.needsUpdate = C),
        (x.directionalLights.needsUpdate = C),
        (x.directionalLightShadows.needsUpdate = C),
        (x.pointLights.needsUpdate = C),
        (x.pointLightShadows.needsUpdate = C),
        (x.spotLights.needsUpdate = C),
        (x.spotLightShadows.needsUpdate = C),
        (x.rectAreaLights.needsUpdate = C),
        (x.hemisphereLights.needsUpdate = C);
    }
    function So(x) {
      return (
        x.isMeshLambertMaterial ||
        x.isMeshToonMaterial ||
        x.isMeshPhongMaterial ||
        x.isMeshStandardMaterial ||
        x.isShadowMaterial ||
        (x.isShaderMaterial && x.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return K;
    }),
      (this.getActiveMipmapLevel = function () {
        return J;
      }),
      (this.getRenderTarget = function () {
        return ne;
      }),
      (this.setRenderTargetTextures = function (x, C, k) {
        const O = z.get(x);
        (O.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1),
          O.__autoAllocateDepthBuffer === !1 && (O.__useRenderToTexture = !1),
          (z.get(x.texture).__webglTexture = C),
          (z.get(x.depthTexture).__webglTexture = O.__autoAllocateDepthBuffer
            ? void 0
            : k),
          (O.__hasExternalTextures = !0);
      }),
      (this.setRenderTargetFramebuffer = function (x, C) {
        const k = z.get(x);
        (k.__webglFramebuffer = C), (k.__useDefaultFramebuffer = C === void 0);
      }),
      (this.setRenderTarget = function (x, C = 0, k = 0) {
        (ne = x), (K = C), (J = k);
        let O = null,
          G = !1,
          de = !1;
        if (x) {
          const ue = z.get(x);
          if (ue.__useDefaultFramebuffer !== void 0) {
            g.bindFramebuffer(N.FRAMEBUFFER, ue.__webglFramebuffer),
              te.copy(x.viewport),
              we.copy(x.scissor),
              (be = x.scissorTest),
              g.viewport(te),
              g.scissor(we),
              g.setScissorTest(be),
              (X = -1);
            return;
          } else if (ue.__webglFramebuffer === void 0) W.setupRenderTarget(x);
          else if (ue.__hasExternalTextures)
            W.rebindTextures(
              x,
              z.get(x.texture).__webglTexture,
              z.get(x.depthTexture).__webglTexture
            );
          else if (x.depthBuffer) {
            const Ue = x.depthTexture;
            if (ue.__boundDepthTexture !== Ue) {
              if (
                Ue !== null &&
                z.has(Ue) &&
                (x.width !== Ue.image.width || x.height !== Ue.image.height)
              )
                throw new Error(
                  "THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size."
                );
              W.setupDepthRenderbuffer(x);
            }
          }
          const ve = x.texture;
          (ve.isData3DTexture ||
            ve.isDataArrayTexture ||
            ve.isCompressedArrayTexture) &&
            (de = !0);
          const Me = z.get(x).__webglFramebuffer;
          x.isWebGLCubeRenderTarget
            ? (Array.isArray(Me[C]) ? (O = Me[C][k]) : (O = Me[C]), (G = !0))
            : x.samples > 0 && W.useMultisampledRTT(x) === !1
            ? (O = z.get(x).__webglMultisampledFramebuffer)
            : Array.isArray(Me)
            ? (O = Me[k])
            : (O = Me),
            te.copy(x.viewport),
            we.copy(x.scissor),
            (be = x.scissorTest);
        } else
          te.copy(me).multiplyScalar(Q).floor(),
            we.copy(Oe).multiplyScalar(Q).floor(),
            (be = gt);
        if (
          (k !== 0 && (O = V),
          g.bindFramebuffer(N.FRAMEBUFFER, O) && g.drawBuffers(x, O),
          g.viewport(te),
          g.scissor(we),
          g.setScissorTest(be),
          G)
        ) {
          const ue = z.get(x.texture);
          N.framebufferTexture2D(
            N.FRAMEBUFFER,
            N.COLOR_ATTACHMENT0,
            N.TEXTURE_CUBE_MAP_POSITIVE_X + C,
            ue.__webglTexture,
            k
          );
        } else if (de) {
          const ue = C;
          for (let ve = 0; ve < x.textures.length; ve++) {
            const Me = z.get(x.textures[ve]);
            N.framebufferTextureLayer(
              N.FRAMEBUFFER,
              N.COLOR_ATTACHMENT0 + ve,
              Me.__webglTexture,
              k,
              ue
            );
          }
        } else if (x !== null && k !== 0) {
          const ue = z.get(x.texture);
          N.framebufferTexture2D(
            N.FRAMEBUFFER,
            N.COLOR_ATTACHMENT0,
            N.TEXTURE_2D,
            ue.__webglTexture,
            k
          );
        }
        X = -1;
      });
    function ys(x) {
      const C = z.get(x);
      return (
        (C.__readFormat !== x.format || C.__readType !== x.type) &&
          ((C.__readFormat = x.format),
          (C.__readType = x.type),
          (C.__formatReadable = T.textureFormatReadable(x.format)),
          (C.__typeReadable = T.textureTypeReadable(x.type))),
        C
      );
    }
    (this.readRenderTargetPixels = function (x, C, k, O, G, de, ge, ue = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        Pe(
          "WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let ve = z.get(x).__webglFramebuffer;
      if ((x.isWebGLCubeRenderTarget && ge !== void 0 && (ve = ve[ge]), ve)) {
        g.bindFramebuffer(N.FRAMEBUFFER, ve);
        try {
          const Me = x.textures[ue],
            Ue = Me.format,
            ze = Me.type;
          x.textures.length > 1 && N.readBuffer(N.COLOR_ATTACHMENT0 + ue);
          const xe = ys(Me);
          if (xe.__formatReadable === !1) {
            Pe(
              "WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          if (xe.__typeReadable === !1) {
            Pe(
              "WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          C >= 0 &&
            C <= x.width - O &&
            k >= 0 &&
            k <= x.height - G &&
            N.readPixels(C, k, O, G, le.convert(Ue), le.convert(ze), de);
        } finally {
          const Me = ne !== null ? z.get(ne).__webglFramebuffer : null;
          g.bindFramebuffer(N.FRAMEBUFFER, Me);
        }
      }
    }),
      (this.readRenderTargetPixelsAsync = async function (
        x,
        C,
        k,
        O,
        G,
        de,
        ge,
        ue = 0
      ) {
        if (!(x && x.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let ve = z.get(x).__webglFramebuffer;
        if ((x.isWebGLCubeRenderTarget && ge !== void 0 && (ve = ve[ge]), ve))
          if (C >= 0 && C <= x.width - O && k >= 0 && k <= x.height - G) {
            g.bindFramebuffer(N.FRAMEBUFFER, ve);
            const Me = x.textures[ue],
              Ue = Me.format,
              ze = Me.type;
            x.textures.length > 1 && N.readBuffer(N.COLOR_ATTACHMENT0 + ue);
            const xe = ys(Me);
            if (xe.__formatReadable === !1)
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (xe.__typeReadable === !1)
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            const Je = N.createBuffer();
            N.bindBuffer(N.PIXEL_PACK_BUFFER, Je),
              N.bufferData(N.PIXEL_PACK_BUFFER, de.byteLength, N.STREAM_READ),
              N.readPixels(C, k, O, G, le.convert(Ue), le.convert(ze), 0),
              N.bindBuffer(N.PIXEL_PACK_BUFFER, null);
            const ft = ne !== null ? z.get(ne).__webglFramebuffer : null;
            g.bindFramebuffer(N.FRAMEBUFFER, ft);
            const ot = N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              N.flush(),
              await bo(N, ot, 4),
              N.bindBuffer(N.PIXEL_PACK_BUFFER, Je),
              N.getBufferSubData(N.PIXEL_PACK_BUFFER, 0, de),
              N.bindBuffer(N.PIXEL_PACK_BUFFER, null),
              N.deleteBuffer(Je),
              N.deleteSync(ot),
              de
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
            );
      }),
      (this.copyFramebufferToTexture = function (x, C = null, k = 0) {
        const O = Math.pow(2, -k),
          G = Math.floor(x.image.width * O),
          de = Math.floor(x.image.height * O),
          ge = C !== null ? C.x : 0,
          ue = C !== null ? C.y : 0;
        W.setTexture2D(x, 0),
          N.copyTexSubImage2D(N.TEXTURE_2D, k, 0, 0, ge, ue, G, de),
          g.unbindTexture();
      }),
      (this.copyTextureToTexture = function (
        x,
        C,
        k = null,
        O = null,
        G = 0,
        de = 0
      ) {
        let ge, ue, ve, Me, Ue, ze, xe, Je, ft;
        const ot = x.isCompressedTexture ? x.mipmaps[de] : x.image;
        if (k !== null)
          (ge = k.max.x - k.min.x),
            (ue = k.max.y - k.min.y),
            (ve = k.isBox3 ? k.max.z - k.min.z : 1),
            (Me = k.min.x),
            (Ue = k.min.y),
            (ze = k.isBox3 ? k.min.z : 0);
        else {
          const ut = Math.pow(2, -G);
          (ge = Math.floor(ot.width * ut)),
            (ue = Math.floor(ot.height * ut)),
            x.isDataArrayTexture
              ? (ve = ot.depth)
              : x.isData3DTexture
              ? (ve = Math.floor(ot.depth * ut))
              : (ve = 1),
            (Me = 0),
            (Ue = 0),
            (ze = 0);
        }
        O !== null
          ? ((xe = O.x), (Je = O.y), (ft = O.z))
          : ((xe = 0), (Je = 0), (ft = 0));
        const nt = le.convert(C.format),
          yt = le.convert(C.type);
        let pe;
        C.isData3DTexture
          ? (W.setTexture3D(C, 0), (pe = N.TEXTURE_3D))
          : C.isDataArrayTexture || C.isCompressedArrayTexture
          ? (W.setTexture2DArray(C, 0), (pe = N.TEXTURE_2D_ARRAY))
          : (W.setTexture2D(C, 0), (pe = N.TEXTURE_2D)),
          g.activeTexture(N.TEXTURE0),
          g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, C.flipY),
          g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, C.premultiplyAlpha),
          g.pixelStorei(N.UNPACK_ALIGNMENT, C.unpackAlignment);
        const At = g.getParameter(N.UNPACK_ROW_LENGTH),
          Xe = g.getParameter(N.UNPACK_IMAGE_HEIGHT),
          Nt = g.getParameter(N.UNPACK_SKIP_PIXELS),
          Jt = g.getParameter(N.UNPACK_SKIP_ROWS),
          dn = g.getParameter(N.UNPACK_SKIP_IMAGES);
        g.pixelStorei(N.UNPACK_ROW_LENGTH, ot.width),
          g.pixelStorei(N.UNPACK_IMAGE_HEIGHT, ot.height),
          g.pixelStorei(N.UNPACK_SKIP_PIXELS, Me),
          g.pixelStorei(N.UNPACK_SKIP_ROWS, Ue),
          g.pixelStorei(N.UNPACK_SKIP_IMAGES, ze);
        const Dn = x.isDataArrayTexture || x.isData3DTexture,
          je = C.isDataArrayTexture || C.isData3DTexture;
        if (x.isDepthTexture) {
          const ut = z.get(x),
            fn = z.get(C),
            at = z.get(ut.__renderTarget),
            pn = z.get(fn.__renderTarget);
          g.bindFramebuffer(N.READ_FRAMEBUFFER, at.__webglFramebuffer),
            g.bindFramebuffer(N.DRAW_FRAMEBUFFER, pn.__webglFramebuffer);
          for (let In = 0; In < ve; In++)
            Dn &&
              (N.framebufferTextureLayer(
                N.READ_FRAMEBUFFER,
                N.COLOR_ATTACHMENT0,
                z.get(x).__webglTexture,
                G,
                ze + In
              ),
              N.framebufferTextureLayer(
                N.DRAW_FRAMEBUFFER,
                N.COLOR_ATTACHMENT0,
                z.get(C).__webglTexture,
                de,
                ft + In
              )),
              N.blitFramebuffer(
                Me,
                Ue,
                ge,
                ue,
                xe,
                Je,
                ge,
                ue,
                N.DEPTH_BUFFER_BIT,
                N.NEAREST
              );
          g.bindFramebuffer(N.READ_FRAMEBUFFER, null),
            g.bindFramebuffer(N.DRAW_FRAMEBUFFER, null);
        } else if (G !== 0 || x.isRenderTargetTexture || z.has(x)) {
          const ut = z.get(x),
            fn = z.get(C);
          g.bindFramebuffer(N.READ_FRAMEBUFFER, I),
            g.bindFramebuffer(N.DRAW_FRAMEBUFFER, H);
          for (let at = 0; at < ve; at++)
            Dn
              ? N.framebufferTextureLayer(
                  N.READ_FRAMEBUFFER,
                  N.COLOR_ATTACHMENT0,
                  ut.__webglTexture,
                  G,
                  ze + at
                )
              : N.framebufferTexture2D(
                  N.READ_FRAMEBUFFER,
                  N.COLOR_ATTACHMENT0,
                  N.TEXTURE_2D,
                  ut.__webglTexture,
                  G
                ),
              je
                ? N.framebufferTextureLayer(
                    N.DRAW_FRAMEBUFFER,
                    N.COLOR_ATTACHMENT0,
                    fn.__webglTexture,
                    de,
                    ft + at
                  )
                : N.framebufferTexture2D(
                    N.DRAW_FRAMEBUFFER,
                    N.COLOR_ATTACHMENT0,
                    N.TEXTURE_2D,
                    fn.__webglTexture,
                    de
                  ),
              G !== 0
                ? N.blitFramebuffer(
                    Me,
                    Ue,
                    ge,
                    ue,
                    xe,
                    Je,
                    ge,
                    ue,
                    N.COLOR_BUFFER_BIT,
                    N.NEAREST
                  )
                : je
                ? N.copyTexSubImage3D(pe, de, xe, Je, ft + at, Me, Ue, ge, ue)
                : N.copyTexSubImage2D(pe, de, xe, Je, Me, Ue, ge, ue);
          g.bindFramebuffer(N.READ_FRAMEBUFFER, null),
            g.bindFramebuffer(N.DRAW_FRAMEBUFFER, null);
        } else
          je
            ? x.isDataTexture || x.isData3DTexture
              ? N.texSubImage3D(pe, de, xe, Je, ft, ge, ue, ve, nt, yt, ot.data)
              : C.isCompressedArrayTexture
              ? N.compressedTexSubImage3D(
                  pe,
                  de,
                  xe,
                  Je,
                  ft,
                  ge,
                  ue,
                  ve,
                  nt,
                  ot.data
                )
              : N.texSubImage3D(pe, de, xe, Je, ft, ge, ue, ve, nt, yt, ot)
            : x.isDataTexture
            ? N.texSubImage2D(N.TEXTURE_2D, de, xe, Je, ge, ue, nt, yt, ot.data)
            : x.isCompressedTexture
            ? N.compressedTexSubImage2D(
                N.TEXTURE_2D,
                de,
                xe,
                Je,
                ot.width,
                ot.height,
                nt,
                ot.data
              )
            : N.texSubImage2D(N.TEXTURE_2D, de, xe, Je, ge, ue, nt, yt, ot);
        g.pixelStorei(N.UNPACK_ROW_LENGTH, At),
          g.pixelStorei(N.UNPACK_IMAGE_HEIGHT, Xe),
          g.pixelStorei(N.UNPACK_SKIP_PIXELS, Nt),
          g.pixelStorei(N.UNPACK_SKIP_ROWS, Jt),
          g.pixelStorei(N.UNPACK_SKIP_IMAGES, dn),
          de === 0 && C.generateMipmaps && N.generateMipmap(pe),
          g.unbindTexture();
      }),
      (this.initRenderTarget = function (x) {
        z.get(x).__webglFramebuffer === void 0 && W.setupRenderTarget(x);
      }),
      (this.initTexture = function (x) {
        x.isCubeTexture
          ? W.setTextureCube(x, 0)
          : x.isData3DTexture
          ? W.setTexture3D(x, 0)
          : x.isDataArrayTexture || x.isCompressedArrayTexture
          ? W.setTexture2DArray(x, 0)
          : W.setTexture2D(x, 0),
          g.unbindTexture();
      }),
      (this.resetState = function () {
        (K = 0), (J = 0), (ne = null), g.reset(), fe.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = ke._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = ke._getUnpackColorSpace());
  }
}
export {
  Wa as $,
  gp as A,
  Pt as B,
  Vp as C,
  Zp as D,
  yp as E,
  Xp as F,
  Ri as G,
  Yp as H,
  Bp as I,
  Tp as J,
  Mp as K,
  pl as L,
  Bl as M,
  Ep as N,
  as as O,
  Jp as P,
  Ln as Q,
  vp as R,
  Np as S,
  ja as T,
  Sp as U,
  L as V,
  jp as W,
  xp as X,
  ml as Y,
  En as Z,
  mp as _,
  Ft as a,
  et as a0,
  Fp as a1,
  qa as a2,
  Gp as a3,
  zp as a4,
  It as a5,
  Ip as a6,
  Xa as a7,
  Wp as a8,
  hl as a9,
  Rp as aa,
  wp as ab,
  ka as ac,
  bt as ad,
  io as ae,
  is as af,
  rs as ag,
  ke as ah,
  fp as ai,
  Mi as aj,
  yn as ak,
  un as al,
  Si as am,
  pp as an,
  kp as ao,
  _p as ap,
  ga as aq,
  qt as b,
  Dp as c,
  Op as d,
  vl as e,
  Bt as f,
  Qa as g,
  ht as h,
  Ja as i,
  Cp as j,
  Lp as k,
  Pp as l,
  yi as m,
  $p as n,
  Hp as o,
  Re as p,
  Ne as q,
  tr as r,
  Kp as s,
  Ve as t,
  Ys as u,
  qp as v,
  Qp as w,
  Up as x,
  Ap as y,
  bp as z,
};
