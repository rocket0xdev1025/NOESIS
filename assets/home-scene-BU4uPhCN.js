import {
  j as $e,
  k as ce,
  l as Pe,
  m as ea,
  n as V,
  F as Oe,
  o as O,
  p as ye,
  q as C,
  r as q,
  a as X,
  s as aa,
  P as qe,
  D as be,
  t as $,
  I as Ke,
  V as y,
  Q as Ne,
  u as Re,
  B as _e,
  h as pe,
  v as na,
  w as sa,
  b as se,
  x as ta,
  y as He,
  N as ia,
  z as ra,
  E as oa,
  J as de,
  K as Ce,
  R as le,
  U as ca,
  X as ba,
  Y as da,
  Z as te,
  L as la,
  M as ee,
  _ as fa,
  $ as B,
  a0 as ha,
  a1 as pa,
  f as _,
  d as ua,
  a2 as ga,
  a3 as ma,
  a4 as xa,
  G as Z,
  a5 as Ie,
  a6 as J,
  O as ka,
  a7 as Ta,
  a8 as Ra,
  a9 as Fa,
  aa as wa,
  ab as ze,
  ac as Aa,
  ad as Fe,
  ae as we,
  af as Ae,
  ag as Ee,
  ah as ve,
  ai as Ea,
  aj as va,
  ak as Je,
  al as ja,
  S as Ue,
  am as Da,
  an as La,
  ao as Sa,
  W as Ma,
  ap as Ga,
  aq as Pa,
  H as Oa,
} from "./three.module-C89BeTKb.js";
import { b as ya, l as qa } from "./index-CGNtSXmU.js";
function je(l, e) {
  if (e === $e)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
      ),
      l
    );
  if (e === ce || e === Pe) {
    let a = l.getIndex();
    if (a === null) {
      const t = [],
        o = l.getAttribute("position");
      if (o !== void 0) {
        for (let i = 0; i < o.count; i++) t.push(i);
        l.setIndex(t), (a = l.getIndex());
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          l
        );
    }
    const n = a.count - 2,
      s = [];
    if (e === ce)
      for (let t = 1; t <= n; t++)
        s.push(a.getX(0)), s.push(a.getX(t)), s.push(a.getX(t + 1));
    else
      for (let t = 0; t < n; t++)
        t % 2 === 0
          ? (s.push(a.getX(t)), s.push(a.getX(t + 1)), s.push(a.getX(t + 2)))
          : (s.push(a.getX(t + 2)), s.push(a.getX(t + 1)), s.push(a.getX(t)));
    return (
      s.length / 3 !== n &&
        console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
        ),
      l.setIndex(s),
      l.clearGroups(),
      l
    );
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e
      ),
      l
    );
}
function Ka(l) {
  const e = new Map(),
    a = new Map(),
    n = l.clone();
  return (
    We(l, n, function (s, t) {
      e.set(t, s), a.set(s, t);
    }),
    n.traverse(function (s) {
      if (!s.isSkinnedMesh) return;
      const t = s,
        o = e.get(s),
        i = o.skeleton.bones;
      (t.skeleton = o.skeleton.clone()),
        t.bindMatrix.copy(o.bindMatrix),
        (t.skeleton.bones = i.map(function (r) {
          return a.get(r);
        })),
        t.bind(t.skeleton, t.bindMatrix);
    }),
    n
  );
}
function We(l, e, a) {
  a(l, e);
  for (let n = 0; n < l.children.length; n++)
    We(l.children[n], e.children[n], a);
}
class Na extends ea {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (a) {
        return new za(a);
      }),
      this.register(function (a) {
        return new Ja(a);
      }),
      this.register(function (a) {
        return new $a(a);
      }),
      this.register(function (a) {
        return new en(a);
      }),
      this.register(function (a) {
        return new an(a);
      }),
      this.register(function (a) {
        return new Wa(a);
      }),
      this.register(function (a) {
        return new Ba(a);
      }),
      this.register(function (a) {
        return new Va(a);
      }),
      this.register(function (a) {
        return new Xa(a);
      }),
      this.register(function (a) {
        return new Ia(a);
      }),
      this.register(function (a) {
        return new Qa(a);
      }),
      this.register(function (a) {
        return new Ua(a);
      }),
      this.register(function (a) {
        return new Za(a);
      }),
      this.register(function (a) {
        return new Ya(a);
      }),
      this.register(function (a) {
        return new Ha(a);
      }),
      this.register(function (a) {
        return new De(a, w.EXT_MESHOPT_COMPRESSION);
      }),
      this.register(function (a) {
        return new De(a, w.KHR_MESHOPT_COMPRESSION);
      }),
      this.register(function (a) {
        return new nn(a);
      });
  }
  load(e, a, n, s) {
    const t = this;
    let o;
    if (this.resourcePath !== "") o = this.resourcePath;
    else if (this.path !== "") {
      const c = V.extractUrlBase(e);
      o = V.resolveURL(c, this.path);
    } else o = V.extractUrlBase(e);
    this.manager.itemStart(e);
    const i = function (c) {
        s ? s(c) : console.error(c),
          t.manager.itemError(e),
          t.manager.itemEnd(e);
      },
      r = new Oe(this.manager);
    r.setPath(this.path),
      r.setResponseType("arraybuffer"),
      r.setRequestHeader(this.requestHeader),
      r.setWithCredentials(this.withCredentials),
      r.load(
        e,
        function (c) {
          try {
            t.parse(
              c,
              o,
              function (d) {
                a(d), t.manager.itemEnd(e);
              },
              i
            );
          } catch (d) {
            i(d);
          }
        },
        n,
        i
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, a, n, s) {
    let t;
    const o = {},
      i = {},
      r = new TextDecoder();
    if (typeof e == "string") t = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (r.decode(new Uint8Array(e, 0, 4)) === Be) {
        try {
          o[w.KHR_BINARY_GLTF] = new sn(e);
        } catch (b) {
          s && s(b);
          return;
        }
        t = JSON.parse(o[w.KHR_BINARY_GLTF].content);
      } else t = JSON.parse(r.decode(e));
    else t = e;
    if (t.asset === void 0 || t.asset.version[0] < 2) {
      s &&
        s(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const c = new mn(t, {
      path: a || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let d = 0; d < this.pluginCallbacks.length; d++) {
      const b = this.pluginCallbacks[d](c);
      b.name ||
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (i[b.name] = b),
        (o[b.name] = !0);
    }
    if (t.extensionsUsed)
      for (let d = 0; d < t.extensionsUsed.length; ++d) {
        const b = t.extensionsUsed[d],
          f = t.extensionsRequired || [];
        switch (b) {
          case w.KHR_MATERIALS_UNLIT:
            o[b] = new Ca();
            break;
          case w.KHR_DRACO_MESH_COMPRESSION:
            o[b] = new tn(t, this.dracoLoader);
            break;
          case w.KHR_TEXTURE_TRANSFORM:
            o[b] = new rn();
            break;
          case w.KHR_MESH_QUANTIZATION:
            o[b] = new on();
            break;
          default:
            f.indexOf(b) >= 0 &&
              i[b] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + b + '".');
        }
      }
    c.setExtensions(o), c.setPlugins(i), c.parse(n, s);
  }
  parseAsync(e, a) {
    const n = this;
    return new Promise(function (s, t) {
      n.parse(e, a, s, t);
    });
  }
}
function _a() {
  let l = {};
  return {
    get: function (e) {
      return l[e];
    },
    add: function (e, a) {
      l[e] = a;
    },
    remove: function (e) {
      delete l[e];
    },
    removeAll: function () {
      l = {};
    },
  };
}
function D(l, e, a) {
  const n = l.json.materials[e];
  return n.extensions && n.extensions[a] ? n.extensions[a] : null;
}
const w = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  KHR_MESHOPT_COMPRESSION: "KHR_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class Ha {
  constructor(e) {
    (this.parser = e),
      (this.name = w.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      a = this.parser.json.nodes || [];
    for (let n = 0, s = a.length; n < s; n++) {
      const t = a[n];
      t.extensions &&
        t.extensions[this.name] &&
        t.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, t.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const a = this.parser,
      n = "light:" + e;
    let s = a.cache.get(n);
    if (s) return s;
    const t = a.json,
      r = (((t.extensions && t.extensions[this.name]) || {}).lights || [])[e];
    let c;
    const d = new C(16777215);
    r.color !== void 0 && d.setRGB(r.color[0], r.color[1], r.color[2], q);
    const b = r.range !== void 0 ? r.range : 0;
    switch (r.type) {
      case "directional":
        (c = new be(d)), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        (c = new qe(d)), (c.distance = b);
        break;
      case "spot":
        (c = new aa(d)),
          (c.distance = b),
          (r.spot = r.spot || {}),
          (r.spot.innerConeAngle =
            r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0),
          (r.spot.outerConeAngle =
            r.spot.outerConeAngle !== void 0
              ? r.spot.outerConeAngle
              : Math.PI / 4),
          (c.angle = r.spot.outerConeAngle),
          (c.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle),
          c.target.position.set(0, 0, -1),
          c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
    }
    return (
      c.position.set(0, 0, 0),
      P(c, r),
      r.intensity !== void 0 && (c.intensity = r.intensity),
      (c.name = a.createUniqueName(r.name || "light_" + e)),
      (s = Promise.resolve(c)),
      a.cache.add(n, s),
      s
    );
  }
  getDependency(e, a) {
    if (e === "light") return this._loadLight(a);
  }
  createNodeAttachment(e) {
    const a = this,
      n = this.parser,
      t = n.json.nodes[e],
      i = ((t.extensions && t.extensions[this.name]) || {}).light;
    return i === void 0
      ? null
      : this._loadLight(i).then(function (r) {
          return n._getNodeRef(a.cache, i, r);
        });
  }
}
class Ca {
  constructor() {
    this.name = w.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return B;
  }
  extendParams(e, a, n) {
    const s = [];
    (e.color = new C(1, 1, 1)), (e.opacity = 1);
    const t = a.pbrMetallicRoughness;
    if (t) {
      if (Array.isArray(t.baseColorFactor)) {
        const o = t.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], q), (e.opacity = o[3]);
      }
      t.baseColorTexture !== void 0 &&
        s.push(n.assignTexture(e, "map", t.baseColorTexture, X));
    }
    return Promise.all(s);
  }
}
class Ia {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    return (
      n === null ||
        (n.emissiveStrength !== void 0 &&
          (a.emissiveIntensity = n.emissiveStrength)),
      Promise.resolve()
    );
  }
}
class za {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const s = [];
    if (
      (n.clearcoatFactor !== void 0 && (a.clearcoat = n.clearcoatFactor),
      n.clearcoatTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(a, "clearcoatMap", n.clearcoatTexture)
        ),
      n.clearcoatRoughnessFactor !== void 0 &&
        (a.clearcoatRoughness = n.clearcoatRoughnessFactor),
      n.clearcoatRoughnessTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(
            a,
            "clearcoatRoughnessMap",
            n.clearcoatRoughnessTexture
          )
        ),
      n.clearcoatNormalTexture !== void 0 &&
        (s.push(
          this.parser.assignTexture(
            a,
            "clearcoatNormalMap",
            n.clearcoatNormalTexture
          )
        ),
        n.clearcoatNormalTexture.scale !== void 0))
    ) {
      const t = n.clearcoatNormalTexture.scale;
      a.clearcoatNormalScale = new ye(t, t);
    }
    return Promise.all(s);
  }
}
class Ja {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_DISPERSION);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    return (
      n === null || (a.dispersion = n.dispersion !== void 0 ? n.dispersion : 0),
      Promise.resolve()
    );
  }
}
class Ua {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const s = [];
    return (
      n.iridescenceFactor !== void 0 && (a.iridescence = n.iridescenceFactor),
      n.iridescenceTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(a, "iridescenceMap", n.iridescenceTexture)
        ),
      n.iridescenceIor !== void 0 && (a.iridescenceIOR = n.iridescenceIor),
      a.iridescenceThicknessRange === void 0 &&
        (a.iridescenceThicknessRange = [100, 400]),
      n.iridescenceThicknessMinimum !== void 0 &&
        (a.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum),
      n.iridescenceThicknessMaximum !== void 0 &&
        (a.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum),
      n.iridescenceThicknessTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(
            a,
            "iridescenceThicknessMap",
            n.iridescenceThicknessTexture
          )
        ),
      Promise.all(s)
    );
  }
}
class Wa {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const s = [];
    if (
      ((a.sheenColor = new C(0, 0, 0)),
      (a.sheenRoughness = 0),
      (a.sheen = 1),
      n.sheenColorFactor !== void 0)
    ) {
      const t = n.sheenColorFactor;
      a.sheenColor.setRGB(t[0], t[1], t[2], q);
    }
    return (
      n.sheenRoughnessFactor !== void 0 &&
        (a.sheenRoughness = n.sheenRoughnessFactor),
      n.sheenColorTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(a, "sheenColorMap", n.sheenColorTexture, X)
        ),
      n.sheenRoughnessTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(
            a,
            "sheenRoughnessMap",
            n.sheenRoughnessTexture
          )
        ),
      Promise.all(s)
    );
  }
}
class Ba {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const s = [];
    return (
      n.transmissionFactor !== void 0 &&
        (a.transmission = n.transmissionFactor),
      n.transmissionTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(a, "transmissionMap", n.transmissionTexture)
        ),
      Promise.all(s)
    );
  }
}
class Va {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const s = [];
    (a.thickness = n.thicknessFactor !== void 0 ? n.thicknessFactor : 0),
      n.thicknessTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(a, "thicknessMap", n.thicknessTexture)
        ),
      (a.attenuationDistance = n.attenuationDistance || 1 / 0);
    const t = n.attenuationColor || [1, 1, 1];
    return (
      (a.attenuationColor = new C().setRGB(t[0], t[1], t[2], q)), Promise.all(s)
    );
  }
}
class Xa {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    return (
      n === null ||
        ((a.ior = n.ior !== void 0 ? n.ior : 1.5),
        a.ior === 0 && (a.ior = 1e3)),
      Promise.resolve()
    );
  }
}
class Qa {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const s = [];
    (a.specularIntensity = n.specularFactor !== void 0 ? n.specularFactor : 1),
      n.specularTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(
            a,
            "specularIntensityMap",
            n.specularTexture
          )
        );
    const t = n.specularColorFactor || [1, 1, 1];
    return (
      (a.specularColor = new C().setRGB(t[0], t[1], t[2], q)),
      n.specularColorTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(
            a,
            "specularColorMap",
            n.specularColorTexture,
            X
          )
        ),
      Promise.all(s)
    );
  }
}
class Ya {
  constructor(e) {
    (this.parser = e), (this.name = w.EXT_MATERIALS_BUMP);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const s = [];
    return (
      (a.bumpScale = n.bumpFactor !== void 0 ? n.bumpFactor : 1),
      n.bumpTexture !== void 0 &&
        s.push(this.parser.assignTexture(a, "bumpMap", n.bumpTexture)),
      Promise.all(s)
    );
  }
}
class Za {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    return D(this.parser, e, this.name) !== null ? O : null;
  }
  extendMaterialParams(e, a) {
    const n = D(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const s = [];
    return (
      n.anisotropyStrength !== void 0 && (a.anisotropy = n.anisotropyStrength),
      n.anisotropyRotation !== void 0 &&
        (a.anisotropyRotation = n.anisotropyRotation),
      n.anisotropyTexture !== void 0 &&
        s.push(
          this.parser.assignTexture(a, "anisotropyMap", n.anisotropyTexture)
        ),
      Promise.all(s)
    );
  }
}
class $a {
  constructor(e) {
    (this.parser = e), (this.name = w.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const a = this.parser,
      n = a.json,
      s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name]) return null;
    const t = s.extensions[this.name],
      o = a.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return a.loadTextureImage(e, t.source, o);
  }
}
class en {
  constructor(e) {
    (this.parser = e), (this.name = w.EXT_TEXTURE_WEBP);
  }
  loadTexture(e) {
    const a = this.name,
      n = this.parser,
      s = n.json,
      t = s.textures[e];
    if (!t.extensions || !t.extensions[a]) return null;
    const o = t.extensions[a],
      i = s.images[o.source];
    let r = n.textureLoader;
    if (i.uri) {
      const c = n.options.manager.getHandler(i.uri);
      c !== null && (r = c);
    }
    return n.loadTextureImage(e, o.source, r);
  }
}
class an {
  constructor(e) {
    (this.parser = e), (this.name = w.EXT_TEXTURE_AVIF);
  }
  loadTexture(e) {
    const a = this.name,
      n = this.parser,
      s = n.json,
      t = s.textures[e];
    if (!t.extensions || !t.extensions[a]) return null;
    const o = t.extensions[a],
      i = s.images[o.source];
    let r = n.textureLoader;
    if (i.uri) {
      const c = n.options.manager.getHandler(i.uri);
      c !== null && (r = c);
    }
    return n.loadTextureImage(e, o.source, r);
  }
}
class De {
  constructor(e, a) {
    (this.name = a), (this.parser = e);
  }
  loadBufferView(e) {
    const a = this.parser.json,
      n = a.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name],
        t = this.parser.getDependency("buffer", s.buffer),
        o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (
          a.extensionsRequired &&
          a.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return t.then(function (i) {
        const r = s.byteOffset || 0,
          c = s.byteLength || 0,
          d = s.count,
          b = s.byteStride,
          f = new Uint8Array(i, r, c);
        return o.decodeGltfBufferAsync
          ? o
              .decodeGltfBufferAsync(d, b, f, s.mode, s.filter)
              .then(function (h) {
                return h.buffer;
              })
          : o.ready.then(function () {
              const h = new ArrayBuffer(d * b);
              return (
                o.decodeGltfBuffer(
                  new Uint8Array(h),
                  d,
                  b,
                  f,
                  s.mode,
                  s.filter
                ),
                h
              );
            });
      });
    } else return null;
  }
}
class nn {
  constructor(e) {
    (this.name = w.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const a = this.parser.json,
      n = a.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = a.meshes[n.mesh];
    for (const c of s.primitives)
      if (
        c.mode !== M.TRIANGLES &&
        c.mode !== M.TRIANGLE_STRIP &&
        c.mode !== M.TRIANGLE_FAN &&
        c.mode !== void 0
      )
        return null;
    const o = n.extensions[this.name].attributes,
      i = [],
      r = {};
    for (const c in o)
      i.push(
        this.parser
          .getDependency("accessor", o[c])
          .then((d) => ((r[c] = d), r[c]))
      );
    return i.length < 1
      ? null
      : (i.push(this.parser.createNodeMesh(e)),
        Promise.all(i).then((c) => {
          const d = c.pop(),
            b = d.isGroup ? d.children : [d],
            f = c[0].count,
            h = [];
          for (const k of b) {
            const R = new $(),
              T = new y(),
              g = new Ne(),
              u = new y(1, 1, 1),
              m = new Ke(k.geometry, k.material, f);
            for (let x = 0; x < f; x++)
              r.TRANSLATION && T.fromBufferAttribute(r.TRANSLATION, x),
                r.ROTATION && g.fromBufferAttribute(r.ROTATION, x),
                r.SCALE && u.fromBufferAttribute(r.SCALE, x),
                m.setMatrixAt(x, R.compose(T, g, u));
            let p = null;
            for (const x in r)
              if (x === "_COLOR_0") {
                const A = r[x];
                m.instanceColor = new Re(A.array, A.itemSize, A.normalized);
              } else if (
                x !== "TRANSLATION" &&
                x !== "ROTATION" &&
                x !== "SCALE"
              ) {
                if (p === null) {
                  const F = m.geometry;
                  (p = new _e()), (p.name = F.name);
                  for (const E in F.attributes)
                    p.setAttribute(E, F.attributes[E]);
                  for (const E in F.morphAttributes)
                    p.morphAttributes[E] = F.morphAttributes[E];
                  F.index !== null && p.setIndex(F.index),
                    (p.morphTargetsRelative = F.morphTargetsRelative);
                  for (const E of F.groups)
                    p.addGroup(E.start, E.count, E.materialIndex);
                  F.boundingBox !== null &&
                    (p.boundingBox = F.boundingBox.clone()),
                    F.boundingSphere !== null &&
                      (p.boundingSphere = F.boundingSphere.clone()),
                    (p.drawRange.start = F.drawRange.start),
                    (p.drawRange.count = F.drawRange.count),
                    (p.userData = Object.assign({}, F.userData)),
                    (m.geometry = p);
                }
                const A = r[x];
                p.setAttribute(x, new Re(A.array, A.itemSize, A.normalized));
              }
            pe.prototype.copy.call(m, k),
              this.parser.assignFinalMaterial(m),
              h.push(m);
          }
          return d.isGroup ? (d.clear(), d.add(...h), d) : h[0];
        }));
  }
}
const Be = "glTF",
  W = 12,
  Le = { JSON: 1313821514, BIN: 5130562 };
class sn {
  constructor(e) {
    (this.name = w.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const a = new DataView(e, 0, W),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: a.getUint32(4, !0),
        length: a.getUint32(8, !0),
      }),
      this.header.magic !== Be)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - W,
      t = new DataView(e, W);
    let o = 0;
    for (; o < s; ) {
      const i = t.getUint32(o, !0);
      o += 4;
      const r = t.getUint32(o, !0);
      if (((o += 4), r === Le.JSON)) {
        const c = new Uint8Array(e, W + o, i);
        this.content = n.decode(c);
      } else if (r === Le.BIN) {
        const c = W + o;
        this.body = e.slice(c, c + i);
      }
      o += i;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class tn {
  constructor(e, a) {
    if (!a)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = w.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = a),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, a) {
    const n = this.json,
      s = this.dracoLoader,
      t = e.extensions[this.name].bufferView,
      o = e.extensions[this.name].attributes,
      i = {},
      r = {},
      c = {};
    for (const d in o) {
      const b = fe[d] || d.toLowerCase();
      i[b] = o[d];
    }
    for (const d in e.attributes) {
      const b = fe[d] || d.toLowerCase();
      if (o[d] !== void 0) {
        const f = n.accessors[e.attributes[d]],
          h = U[f.componentType];
        (c[b] = h.name), (r[b] = f.normalized === !0);
      }
    }
    return a.getDependency("bufferView", t).then(function (d) {
      return new Promise(function (b, f) {
        s.decodeDracoFile(
          d,
          function (h) {
            for (const k in h.attributes) {
              const R = h.attributes[k],
                T = r[k];
              T !== void 0 && (R.normalized = T);
            }
            b(h);
          },
          i,
          c,
          q,
          f
        );
      });
    });
  }
}
class rn {
  constructor() {
    this.name = w.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, a) {
    if (
      (a.texCoord === void 0 || a.texCoord === e.channel) &&
      a.offset === void 0 &&
      a.rotation === void 0 &&
      a.scale === void 0
    )
      return e;
    if (
      ((e = e.clone()),
      a.texCoord !== void 0 && (e.channel = a.texCoord),
      a.offset !== void 0 && e.offset.fromArray(a.offset),
      a.rotation !== void 0 && (e.rotation = a.rotation),
      a.scale !== void 0 && e.repeat.fromArray(a.scale),
      a.rotation !== void 0)
    ) {
      const n = Math.cos(e.rotation),
        s = Math.sin(e.rotation);
      e.matrix.set(
        e.repeat.x * n,
        e.repeat.y * s,
        e.offset.x,
        -e.repeat.x * s,
        e.repeat.y * n,
        e.offset.y,
        0,
        0,
        1
      ),
        (e.matrixAutoUpdate = !1);
    }
    return (e.needsUpdate = !0), e;
  }
}
class on {
  constructor() {
    this.name = w.KHR_MESH_QUANTIZATION;
  }
}
class Ve extends va {
  constructor(e, a, n, s) {
    super(e, a, n, s);
  }
  copySampleValue_(e) {
    const a = this.resultBuffer,
      n = this.sampleValues,
      s = this.valueSize,
      t = e * s * 3 + s;
    for (let o = 0; o !== s; o++) a[o] = n[t + o];
    return a;
  }
  interpolate_(e, a, n, s) {
    const t = this.resultBuffer,
      o = this.sampleValues,
      i = this.valueSize,
      r = i * 2,
      c = i * 3,
      d = s - a,
      b = (n - a) / d,
      f = b * b,
      h = f * b,
      k = e * c,
      R = k - c,
      T = -2 * h + 3 * f,
      g = h - f,
      u = 1 - T,
      m = g - f + b;
    for (let p = 0; p !== i; p++) {
      const x = o[R + p + i],
        A = o[R + p + r] * d,
        F = o[k + p + i],
        E = o[k + p] * d;
      t[p] = u * x + m * A + T * F + g * E;
    }
    return t;
  }
}
const cn = new Ne();
class bn extends Ve {
  interpolate_(e, a, n, s) {
    const t = super.interpolate_(e, a, n, s);
    return cn.fromArray(t).normalize().toArray(t), t;
  }
}
const M = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
  },
  U = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Se = { 9728: Ce, 9729: de, 9984: oa, 9985: ra, 9986: ia, 9987: He },
  Me = { 33071: ba, 33648: ca, 10497: le },
  ie = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  fe = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  N = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  dn = { CUBICSPLINE: void 0, LINEAR: ze, STEP: wa },
  re = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function ln(l) {
  return (
    l.DefaultMaterial === void 0 &&
      (l.DefaultMaterial = new ee({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Ea,
      })),
    l.DefaultMaterial
  );
}
function H(l, e, a) {
  for (const n in a.extensions)
    l[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = a.extensions[n]));
}
function P(l, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(l.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
        ));
}
function fn(l, e, a) {
  let n = !1,
    s = !1,
    t = !1;
  for (let c = 0, d = e.length; c < d; c++) {
    const b = e[c];
    if (
      (b.POSITION !== void 0 && (n = !0),
      b.NORMAL !== void 0 && (s = !0),
      b.COLOR_0 !== void 0 && (t = !0),
      n && s && t)
    )
      break;
  }
  if (!n && !s && !t) return Promise.resolve(l);
  const o = [],
    i = [],
    r = [];
  for (let c = 0, d = e.length; c < d; c++) {
    const b = e[c];
    if (n) {
      const f =
        b.POSITION !== void 0
          ? a.getDependency("accessor", b.POSITION)
          : l.attributes.position;
      o.push(f);
    }
    if (s) {
      const f =
        b.NORMAL !== void 0
          ? a.getDependency("accessor", b.NORMAL)
          : l.attributes.normal;
      i.push(f);
    }
    if (t) {
      const f =
        b.COLOR_0 !== void 0
          ? a.getDependency("accessor", b.COLOR_0)
          : l.attributes.color;
      r.push(f);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(i), Promise.all(r)]).then(
    function (c) {
      const d = c[0],
        b = c[1],
        f = c[2];
      return (
        n && (l.morphAttributes.position = d),
        s && (l.morphAttributes.normal = b),
        t && (l.morphAttributes.color = f),
        (l.morphTargetsRelative = !0),
        l
      );
    }
  );
}
function hn(l, e) {
  if ((l.updateMorphTargets(), e.weights !== void 0))
    for (let a = 0, n = e.weights.length; a < n; a++)
      l.morphTargetInfluences[a] = e.weights[a];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const a = e.extras.targetNames;
    if (l.morphTargetInfluences.length === a.length) {
      l.morphTargetDictionary = {};
      for (let n = 0, s = a.length; n < s; n++)
        l.morphTargetDictionary[a[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}
function pn(l) {
  let e;
  const a = l.extensions && l.extensions[w.KHR_DRACO_MESH_COMPRESSION];
  if (
    (a
      ? (e = "draco:" + a.bufferView + ":" + a.indices + ":" + oe(a.attributes))
      : (e = l.indices + ":" + oe(l.attributes) + ":" + l.mode),
    l.targets !== void 0)
  )
    for (let n = 0, s = l.targets.length; n < s; n++)
      e += ":" + oe(l.targets[n]);
  return e;
}
function oe(l) {
  let e = "";
  const a = Object.keys(l).sort();
  for (let n = 0, s = a.length; n < s; n++) e += a[n] + ":" + l[a[n]] + ";";
  return e;
}
function he(l) {
  switch (l) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
function un(l) {
  return l.search(/\.jpe?g($|\?)/i) > 0 || l.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : l.search(/\.webp($|\?)/i) > 0 || l.search(/^data\:image\/webp/) === 0
    ? "image/webp"
    : l.search(/\.ktx2($|\?)/i) > 0 || l.search(/^data\:image\/ktx2/) === 0
    ? "image/ktx2"
    : "image/png";
}
const gn = new $();
class mn {
  constructor(e = {}, a = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = a),
      (this.cache = new _a()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      s = -1,
      t = !1,
      o = -1;
    if (typeof navigator < "u" && typeof navigator.userAgent < "u") {
      const i = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(i) === !0;
      const r = i.match(/Version\/(\d+)/);
      (s = n && r ? parseInt(r[1], 10) : -1),
        (t = i.indexOf("Firefox") > -1),
        (o = t ? i.match(/Firefox\/([0-9]+)\./)[1] : -1);
    }
    typeof createImageBitmap > "u" || (n && s < 17) || (t && o < 98)
      ? (this.textureLoader = new na(this.options.manager))
      : (this.textureLoader = new sa(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new Oe(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, a) {
    const n = this,
      s = this.json,
      t = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (o) {
        return o._markDefs && o._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (o) {
          return o.beforeRoot && o.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (o) {
          const i = {
            scene: o[0][s.scene || 0],
            scenes: o[0],
            animations: o[1],
            cameras: o[2],
            asset: s.asset,
            parser: n,
            userData: {},
          };
          return (
            H(t, i, s),
            P(i, s),
            Promise.all(
              n._invokeAll(function (r) {
                return r.afterRoot && r.afterRoot(i);
              })
            ).then(function () {
              for (const r of i.scenes) r.updateMatrixWorld();
              e(i);
            })
          );
        })
        .catch(a);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      a = this.json.skins || [],
      n = this.json.meshes || [];
    for (let s = 0, t = a.length; s < t; s++) {
      const o = a[s].joints;
      for (let i = 0, r = o.length; i < r; i++) e[o[i]].isBone = !0;
    }
    for (let s = 0, t = e.length; s < t; s++) {
      const o = e[s];
      o.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, o.mesh),
        o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)),
        o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(e, a) {
    a !== void 0 &&
      (e.refs[a] === void 0 && (e.refs[a] = e.uses[a] = 0), e.refs[a]++);
  }
  _getNodeRef(e, a, n) {
    if (e.refs[a] <= 1) return n;
    const s = n.clone(),
      t = (o, i) => {
        const r = this.associations.get(o);
        r != null && this.associations.set(i, r);
        for (const [c, d] of o.children.entries()) t(d, i.children[c]);
      };
    return t(n, s), (s.name += "_instance_" + e.uses[a]++), s;
  }
  _invokeOne(e) {
    const a = Object.values(this.plugins);
    a.push(this);
    for (let n = 0; n < a.length; n++) {
      const s = e(a[n]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const a = Object.values(this.plugins);
    a.unshift(this);
    const n = [];
    for (let s = 0; s < a.length; s++) {
      const t = e(a[s]);
      t && n.push(t);
    }
    return n;
  }
  getDependency(e, a) {
    const n = e + ":" + a;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(a);
          break;
        case "node":
          s = this._invokeOne(function (t) {
            return t.loadNode && t.loadNode(a);
          });
          break;
        case "mesh":
          s = this._invokeOne(function (t) {
            return t.loadMesh && t.loadMesh(a);
          });
          break;
        case "accessor":
          s = this.loadAccessor(a);
          break;
        case "bufferView":
          s = this._invokeOne(function (t) {
            return t.loadBufferView && t.loadBufferView(a);
          });
          break;
        case "buffer":
          s = this.loadBuffer(a);
          break;
        case "material":
          s = this._invokeOne(function (t) {
            return t.loadMaterial && t.loadMaterial(a);
          });
          break;
        case "texture":
          s = this._invokeOne(function (t) {
            return t.loadTexture && t.loadTexture(a);
          });
          break;
        case "skin":
          s = this.loadSkin(a);
          break;
        case "animation":
          s = this._invokeOne(function (t) {
            return t.loadAnimation && t.loadAnimation(a);
          });
          break;
        case "camera":
          s = this.loadCamera(a);
          break;
        default:
          if (
            ((s = this._invokeOne(function (t) {
              return t != this && t.getDependency && t.getDependency(e, a);
            })),
            !s)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  getDependencies(e) {
    let a = this.cache.get(e);
    if (!a) {
      const n = this,
        s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (a = Promise.all(
        s.map(function (t, o) {
          return n.getDependency(e, o);
        })
      )),
        this.cache.add(e, a);
    }
    return a;
  }
  loadBuffer(e) {
    const a = this.json.buffers[e],
      n = this.fileLoader;
    if (a.type && a.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + a.type + " buffer type is not supported."
      );
    if (a.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[w.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function (t, o) {
      n.load(V.resolveURL(a.uri, s.path), t, void 0, function () {
        o(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + a.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const a = this.json.bufferViews[e];
    return this.getDependency("buffer", a.buffer).then(function (n) {
      const s = a.byteLength || 0,
        t = a.byteOffset || 0;
      return n.slice(t, t + s);
    });
  }
  loadAccessor(e) {
    const a = this,
      n = this.json,
      s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const o = ie[s.type],
        i = U[s.componentType],
        r = s.normalized === !0,
        c = new i(s.count * o);
      return Promise.resolve(new se(c, o, r));
    }
    const t = [];
    return (
      s.bufferView !== void 0
        ? t.push(this.getDependency("bufferView", s.bufferView))
        : t.push(null),
      s.sparse !== void 0 &&
        (t.push(this.getDependency("bufferView", s.sparse.indices.bufferView)),
        t.push(this.getDependency("bufferView", s.sparse.values.bufferView))),
      Promise.all(t).then(function (o) {
        const i = o[0],
          r = ie[s.type],
          c = U[s.componentType],
          d = c.BYTES_PER_ELEMENT,
          b = d * r,
          f = s.byteOffset || 0,
          h =
            s.bufferView !== void 0
              ? n.bufferViews[s.bufferView].byteStride
              : void 0,
          k = s.normalized === !0;
        let R, T;
        if (h && h !== b) {
          const g = Math.floor(f / h),
            u =
              "InterleavedBuffer:" +
              s.bufferView +
              ":" +
              s.componentType +
              ":" +
              g +
              ":" +
              s.count;
          let m = a.cache.get(u);
          m ||
            ((R = new c(i, g * h, (s.count * h) / d)),
            (m = new ta(R, h / d)),
            a.cache.add(u, m)),
            (T = new Aa(m, r, (f % h) / d, k));
        } else i === null ? (R = new c(s.count * r)) : (R = new c(i, f, s.count * r)), (T = new se(R, r, k));
        if (s.sparse !== void 0) {
          const g = ie.SCALAR,
            u = U[s.sparse.indices.componentType],
            m = s.sparse.indices.byteOffset || 0,
            p = s.sparse.values.byteOffset || 0,
            x = new u(o[1], m, s.sparse.count * g),
            A = new c(o[2], p, s.sparse.count * r);
          i !== null && (T = new se(T.array.slice(), T.itemSize, T.normalized)),
            (T.normalized = !1);
          for (let F = 0, E = x.length; F < E; F++) {
            const L = x[F];
            if (
              (T.setX(L, A[F * r]),
              r >= 2 && T.setY(L, A[F * r + 1]),
              r >= 3 && T.setZ(L, A[F * r + 2]),
              r >= 4 && T.setW(L, A[F * r + 3]),
              r >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
          T.normalized = k;
        }
        return T;
      })
    );
  }
  loadTexture(e) {
    const a = this.json,
      n = this.options,
      t = a.textures[e].source,
      o = a.images[t];
    let i = this.textureLoader;
    if (o.uri) {
      const r = n.manager.getHandler(o.uri);
      r !== null && (i = r);
    }
    return this.loadTextureImage(e, t, i);
  }
  loadTextureImage(e, a, n) {
    const s = this,
      t = this.json,
      o = t.textures[e],
      i = t.images[a],
      r = (i.uri || i.bufferView) + ":" + o.sampler;
    if (this.textureCache[r]) return this.textureCache[r];
    const c = this.loadImageSource(a, n)
      .then(function (d) {
        (d.flipY = !1),
          (d.name = o.name || i.name || ""),
          d.name === "" &&
            typeof i.uri == "string" &&
            i.uri.startsWith("data:image/") === !1 &&
            (d.name = i.uri);
        const f = (t.samplers || {})[o.sampler] || {};
        return (
          (d.magFilter = Se[f.magFilter] || de),
          (d.minFilter = Se[f.minFilter] || He),
          (d.wrapS = Me[f.wrapS] || le),
          (d.wrapT = Me[f.wrapT] || le),
          (d.generateMipmaps =
            !d.isCompressedTexture && d.minFilter !== Ce && d.minFilter !== de),
          s.associations.set(d, { textures: e }),
          d
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[r] = c), c;
  }
  loadImageSource(e, a) {
    const n = this,
      s = this.json,
      t = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((b) => b.clone());
    const o = s.images[e],
      i = self.URL || self.webkitURL;
    let r = o.uri || "",
      c = !1;
    if (o.bufferView !== void 0)
      r = n.getDependency("bufferView", o.bufferView).then(function (b) {
        c = !0;
        const f = new Blob([b], { type: o.mimeType });
        return (r = i.createObjectURL(f)), r;
      });
    else if (o.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const d = Promise.resolve(r)
      .then(function (b) {
        return new Promise(function (f, h) {
          let k = f;
          a.isImageBitmapLoader === !0 &&
            (k = function (R) {
              const T = new Fe(R);
              (T.needsUpdate = !0), f(T);
            }),
            a.load(V.resolveURL(b, t.path), k, void 0, h);
        });
      })
      .then(function (b) {
        return (
          c === !0 && i.revokeObjectURL(r),
          P(b, o),
          (b.userData.mimeType = o.mimeType || un(o.uri)),
          b
        );
      })
      .catch(function (b) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", r), b);
      });
    return (this.sourceCache[e] = d), d;
  }
  assignTexture(e, a, n, s) {
    const t = this;
    return this.getDependency("texture", n.index).then(function (o) {
      if (!o) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((o = o.clone()), (o.channel = n.texCoord)),
        t.extensions[w.KHR_TEXTURE_TRANSFORM])
      ) {
        const i =
          n.extensions !== void 0
            ? n.extensions[w.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (i) {
          const r = t.associations.get(o);
          (o = t.extensions[w.KHR_TEXTURE_TRANSFORM].extendTexture(o, i)),
            t.associations.set(o, r);
        }
      }
      return s !== void 0 && (o.colorSpace = s), (e[a] = o), o;
    });
  }
  assignFinalMaterial(e) {
    const a = e.geometry;
    let n = e.material;
    const s = a.attributes.tangent === void 0,
      t = a.attributes.color !== void 0,
      o = a.attributes.normal === void 0;
    if (e.isPoints) {
      const i = "PointsMaterial:" + n.uuid;
      let r = this.cache.get(i);
      r ||
        ((r = new da()),
        te.prototype.copy.call(r, n),
        r.color.copy(n.color),
        (r.map = n.map),
        (r.sizeAttenuation = !1),
        this.cache.add(i, r)),
        (n = r);
    } else if (e.isLine) {
      const i = "LineBasicMaterial:" + n.uuid;
      let r = this.cache.get(i);
      r ||
        ((r = new la()),
        te.prototype.copy.call(r, n),
        r.color.copy(n.color),
        (r.map = n.map),
        this.cache.add(i, r)),
        (n = r);
    }
    if (s || t || o) {
      let i = "ClonedMaterial:" + n.uuid + ":";
      s && (i += "derivative-tangents:"),
        t && (i += "vertex-colors:"),
        o && (i += "flat-shading:");
      let r = this.cache.get(i);
      r ||
        ((r = n.clone()),
        t && (r.vertexColors = !0),
        o && (r.flatShading = !0),
        s &&
          (r.normalScale && (r.normalScale.y *= -1),
          r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)),
        this.cache.add(i, r),
        this.associations.set(r, this.associations.get(n))),
        (n = r);
    }
    e.material = n;
  }
  getMaterialType() {
    return ee;
  }
  loadMaterial(e) {
    const a = this,
      n = this.json,
      s = this.extensions,
      t = n.materials[e];
    let o;
    const i = {},
      r = t.extensions || {},
      c = [];
    if (r[w.KHR_MATERIALS_UNLIT]) {
      const b = s[w.KHR_MATERIALS_UNLIT];
      (o = b.getMaterialType()), c.push(b.extendParams(i, t, a));
    } else {
      const b = t.pbrMetallicRoughness || {};
      if (
        ((i.color = new C(1, 1, 1)),
        (i.opacity = 1),
        Array.isArray(b.baseColorFactor))
      ) {
        const f = b.baseColorFactor;
        i.color.setRGB(f[0], f[1], f[2], q), (i.opacity = f[3]);
      }
      b.baseColorTexture !== void 0 &&
        c.push(a.assignTexture(i, "map", b.baseColorTexture, X)),
        (i.metalness = b.metallicFactor !== void 0 ? b.metallicFactor : 1),
        (i.roughness = b.roughnessFactor !== void 0 ? b.roughnessFactor : 1),
        b.metallicRoughnessTexture !== void 0 &&
          (c.push(
            a.assignTexture(i, "metalnessMap", b.metallicRoughnessTexture)
          ),
          c.push(
            a.assignTexture(i, "roughnessMap", b.metallicRoughnessTexture)
          )),
        (o = this._invokeOne(function (f) {
          return f.getMaterialType && f.getMaterialType(e);
        })),
        c.push(
          Promise.all(
            this._invokeAll(function (f) {
              return f.extendMaterialParams && f.extendMaterialParams(e, i);
            })
          )
        );
    }
    t.doubleSided === !0 && (i.side = fa);
    const d = t.alphaMode || re.OPAQUE;
    if (
      (d === re.BLEND
        ? ((i.transparent = !0), (i.depthWrite = !1))
        : ((i.transparent = !1),
          d === re.MASK &&
            (i.alphaTest = t.alphaCutoff !== void 0 ? t.alphaCutoff : 0.5)),
      t.normalTexture !== void 0 &&
        o !== B &&
        (c.push(a.assignTexture(i, "normalMap", t.normalTexture)),
        (i.normalScale = new ye(1, 1)),
        t.normalTexture.scale !== void 0))
    ) {
      const b = t.normalTexture.scale;
      i.normalScale.set(b, b);
    }
    if (
      (t.occlusionTexture !== void 0 &&
        o !== B &&
        (c.push(a.assignTexture(i, "aoMap", t.occlusionTexture)),
        t.occlusionTexture.strength !== void 0 &&
          (i.aoMapIntensity = t.occlusionTexture.strength)),
      t.emissiveFactor !== void 0 && o !== B)
    ) {
      const b = t.emissiveFactor;
      i.emissive = new C().setRGB(b[0], b[1], b[2], q);
    }
    return (
      t.emissiveTexture !== void 0 &&
        o !== B &&
        c.push(a.assignTexture(i, "emissiveMap", t.emissiveTexture, X)),
      Promise.all(c).then(function () {
        const b = new o(i);
        return (
          t.name && (b.name = t.name),
          P(b, t),
          a.associations.set(b, { materials: e }),
          t.extensions && H(s, b, t),
          b
        );
      })
    );
  }
  createUniqueName(e) {
    const a = ha.sanitizeNodeName(e || "");
    return a in this.nodeNamesUsed
      ? a + "_" + ++this.nodeNamesUsed[a]
      : ((this.nodeNamesUsed[a] = 0), a);
  }
  loadGeometries(e) {
    const a = this,
      n = this.extensions,
      s = this.primitiveCache;
    function t(i) {
      return n[w.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(i, a)
        .then(function (r) {
          return Ge(r, i, a);
        });
    }
    const o = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const c = e[i],
        d = pn(c),
        b = s[d];
      if (b) o.push(b.promise);
      else {
        let f;
        c.extensions && c.extensions[w.KHR_DRACO_MESH_COMPRESSION]
          ? (f = t(c))
          : (f = Ge(new _e(), c, a)),
          c.mode === M.TRIANGLE_STRIP
            ? (f = f.then((h) => je(h, Pe)))
            : c.mode === M.TRIANGLE_FAN && (f = f.then((h) => je(h, ce))),
          (s[d] = { primitive: c, promise: f }),
          o.push(f);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const a = this,
      n = this.json,
      s = this.extensions,
      t = n.meshes[e],
      o = t.primitives,
      i = [];
    for (let r = 0, c = o.length; r < c; r++) {
      const d =
        o[r].material === void 0
          ? ln(this.cache)
          : this.getDependency("material", o[r].material);
      i.push(d);
    }
    return (
      i.push(a.loadGeometries(o)),
      Promise.all(i).then(async function (r) {
        const c = r.slice(0, r.length - 1),
          d = r[r.length - 1],
          b = [];
        for (let h = 0, k = d.length; h < k; h++) {
          const R = d[h],
            T = o[h];
          let g;
          const u = c[h];
          if (
            T.mode === M.TRIANGLES ||
            T.mode === M.TRIANGLE_STRIP ||
            T.mode === M.TRIANGLE_FAN ||
            T.mode === void 0
          ) {
            const m = t.isSkinnedMesh === !0,
              p = R.hasAttribute("skinIndex") && R.hasAttribute("skinWeight");
            m &&
              p === !1 &&
              console.warn(
                "THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."
              ),
              (g = m && p ? new pa(R, u) : new _(R, u)),
              g.isSkinnedMesh === !0 && g.normalizeSkinWeights();
          } else if (T.mode === M.LINES) g = new ua(R, u);
          else if (T.mode === M.LINE_STRIP) g = new ga(R, u);
          else if (T.mode === M.LINE_LOOP) g = new ma(R, u);
          else if (T.mode === M.POINTS) g = new xa(R, u);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + T.mode
            );
          Object.keys(g.geometry.morphAttributes).length > 0 && hn(g, t),
            (g.name = a.createUniqueName(t.name || "mesh_" + e)),
            P(g, t),
            T.extensions && H(s, g, T),
            a.assignFinalMaterial(g),
            b.push(g);
        }
        for (let h = 0, k = b.length; h < k; h++)
          a.associations.set(b[h], { meshes: e, primitives: h });
        if (b.length === 1) return t.extensions && H(s, b[0], t), b[0];
        const f = new Z();
        t.extensions && H(s, f, t), a.associations.set(f, { meshes: e });
        for (let h = 0, k = b.length; h < k; h++) f.add(b[h]);
        return f;
      })
    );
  }
  loadCamera(e) {
    let a;
    const n = this.json.cameras[e],
      s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (a = new Ie(
            J.radToDeg(s.yfov),
            s.aspectRatio || 1,
            s.znear || 1,
            s.zfar || 2e6
          ))
        : n.type === "orthographic" &&
          (a = new ka(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)),
      n.name && (a.name = this.createUniqueName(n.name)),
      P(a, n),
      Promise.resolve(a)
    );
  }
  loadSkin(e) {
    const a = this.json.skins[e],
      n = [];
    for (let s = 0, t = a.joints.length; s < t; s++)
      n.push(this._loadNodeShallow(a.joints[s]));
    return (
      a.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", a.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (s) {
        const t = s.pop(),
          o = s,
          i = [],
          r = [];
        for (let c = 0, d = o.length; c < d; c++) {
          const b = o[c];
          if (b) {
            i.push(b);
            const f = new $();
            t !== null && f.fromArray(t.array, c * 16), r.push(f);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              a.joints[c]
            );
        }
        return new Ta(i, r);
      })
    );
  }
  loadAnimation(e) {
    const a = this.json,
      n = this,
      s = a.animations[e],
      t = s.name ? s.name : "animation_" + e,
      o = [],
      i = [],
      r = [],
      c = [],
      d = [];
    for (let b = 0, f = s.channels.length; b < f; b++) {
      const h = s.channels[b],
        k = s.samplers[h.sampler],
        R = h.target,
        T = R.node,
        g = s.parameters !== void 0 ? s.parameters[k.input] : k.input,
        u = s.parameters !== void 0 ? s.parameters[k.output] : k.output;
      R.node !== void 0 &&
        (o.push(this.getDependency("node", T)),
        i.push(this.getDependency("accessor", g)),
        r.push(this.getDependency("accessor", u)),
        c.push(k),
        d.push(R));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(i),
      Promise.all(r),
      Promise.all(c),
      Promise.all(d),
    ]).then(function (b) {
      const f = b[0],
        h = b[1],
        k = b[2],
        R = b[3],
        T = b[4],
        g = [];
      for (let m = 0, p = f.length; m < p; m++) {
        const x = f[m],
          A = h[m],
          F = k[m],
          E = R[m],
          L = T[m];
        if (x === void 0) continue;
        x.updateMatrix && x.updateMatrix();
        const j = n._createAnimationTracks(x, A, F, E, L);
        if (j) for (let G = 0; G < j.length; G++) g.push(j[G]);
      }
      const u = new Ra(t, void 0, g);
      return P(u, s), u;
    });
  }
  createNodeMesh(e) {
    const a = this.json,
      n = this,
      s = a.nodes[e];
    return s.mesh === void 0
      ? null
      : n.getDependency("mesh", s.mesh).then(function (t) {
          const o = n._getNodeRef(n.meshCache, s.mesh, t);
          return (
            s.weights !== void 0 &&
              o.traverse(function (i) {
                if (i.isMesh)
                  for (let r = 0, c = s.weights.length; r < c; r++)
                    i.morphTargetInfluences[r] = s.weights[r];
              }),
            o
          );
        });
  }
  loadNode(e) {
    const a = this.json,
      n = this,
      s = a.nodes[e],
      t = n._loadNodeShallow(e),
      o = [],
      i = s.children || [];
    for (let c = 0, d = i.length; c < d; c++)
      o.push(n.getDependency("node", i[c]));
    const r =
      s.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency("skin", s.skin);
    return Promise.all([t, Promise.all(o), r]).then(function (c) {
      const d = c[0],
        b = c[1],
        f = c[2];
      f !== null &&
        d.traverse(function (h) {
          h.isSkinnedMesh && h.bind(f, gn);
        });
      for (let h = 0, k = b.length; h < k; h++) d.add(b[h]);
      if (d.userData.pivot !== void 0 && b.length > 0) {
        const h = d.userData.pivot,
          k = b[0];
        (d.pivot = new y().fromArray(h)),
          (d.position.x -= h[0]),
          (d.position.y -= h[1]),
          (d.position.z -= h[2]),
          k.position.set(0, 0, 0),
          delete d.userData.pivot;
      }
      return d;
    });
  }
  _loadNodeShallow(e) {
    const a = this.json,
      n = this.extensions,
      s = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const t = a.nodes[e],
      o = t.name ? s.createUniqueName(t.name) : "",
      i = [],
      r = s._invokeOne(function (c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
    return (
      r && i.push(r),
      t.camera !== void 0 &&
        i.push(
          s.getDependency("camera", t.camera).then(function (c) {
            return s._getNodeRef(s.cameraCache, t.camera, c);
          })
        ),
      s
        ._invokeAll(function (c) {
          return c.createNodeAttachment && c.createNodeAttachment(e);
        })
        .forEach(function (c) {
          i.push(c);
        }),
      (this.nodeCache[e] = Promise.all(i).then(function (c) {
        let d;
        if (
          (t.isBone === !0
            ? (d = new Fa())
            : c.length > 1
            ? (d = new Z())
            : c.length === 1
            ? (d = c[0])
            : (d = new pe()),
          d !== c[0])
        )
          for (let b = 0, f = c.length; b < f; b++) d.add(c[b]);
        if (
          (t.name && ((d.userData.name = t.name), (d.name = o)),
          P(d, t),
          t.extensions && H(n, d, t),
          t.matrix !== void 0)
        ) {
          const b = new $();
          b.fromArray(t.matrix), d.applyMatrix4(b);
        } else t.translation !== void 0 && d.position.fromArray(t.translation), t.rotation !== void 0 && d.quaternion.fromArray(t.rotation), t.scale !== void 0 && d.scale.fromArray(t.scale);
        if (!s.associations.has(d)) s.associations.set(d, {});
        else if (t.mesh !== void 0 && s.meshCache.refs[t.mesh] > 1) {
          const b = s.associations.get(d);
          s.associations.set(d, { ...b });
        }
        return (s.associations.get(d).nodes = e), d;
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const a = this.extensions,
      n = this.json.scenes[e],
      s = this,
      t = new Z();
    n.name && (t.name = s.createUniqueName(n.name)),
      P(t, n),
      n.extensions && H(a, t, n);
    const o = n.nodes || [],
      i = [];
    for (let r = 0, c = o.length; r < c; r++)
      i.push(s.getDependency("node", o[r]));
    return Promise.all(i).then(function (r) {
      for (let d = 0, b = r.length; d < b; d++) {
        const f = r[d];
        f.parent !== null ? t.add(Ka(f)) : t.add(f);
      }
      const c = (d) => {
        const b = new Map();
        for (const [f, h] of s.associations)
          (f instanceof te || f instanceof Fe) && b.set(f, h);
        return (
          d.traverse((f) => {
            const h = s.associations.get(f);
            h != null && b.set(f, h);
          }),
          b
        );
      };
      return (s.associations = c(t)), t;
    });
  }
  _createAnimationTracks(e, a, n, s, t) {
    const o = [],
      i = e.name ? e.name : e.uuid,
      r = [];
    function c(h) {
      h.morphTargetInfluences && r.push(h.name ? h.name : h.uuid);
    }
    N[t.path] === N.weights
      ? (c(e), e.isGroup && e.children.forEach(c))
      : r.push(i);
    let d;
    switch (N[t.path]) {
      case N.weights:
        d = Ae;
        break;
      case N.rotation:
        d = Ee;
        break;
      case N.translation:
      case N.scale:
        d = we;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            d = Ae;
            break;
          case 2:
          case 3:
          default:
            d = we;
            break;
        }
        break;
    }
    const b = s.interpolation !== void 0 ? dn[s.interpolation] : ze,
      f = this._getArrayFromAccessor(n);
    for (let h = 0, k = r.length; h < k; h++) {
      const R = new d(r[h] + "." + N[t.path], a.array, f, b);
      s.interpolation === "CUBICSPLINE" &&
        this._createCubicSplineTrackInterpolant(R),
        o.push(R);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let a = e.array;
    if (e.normalized) {
      const n = he(a.constructor),
        s = new Float32Array(a.length);
      for (let t = 0, o = a.length; t < o; t++) s[t] = a[t] * n;
      a = s;
    }
    return a;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (n) {
      const s = this instanceof Ee ? bn : Ve;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function xn(l, e, a) {
  const n = e.attributes,
    s = new Je();
  if (n.POSITION !== void 0) {
    const i = a.json.accessors[n.POSITION],
      r = i.min,
      c = i.max;
    if (r !== void 0 && c !== void 0) {
      if (
        (s.set(new y(r[0], r[1], r[2]), new y(c[0], c[1], c[2])), i.normalized)
      ) {
        const d = he(U[i.componentType]);
        s.min.multiplyScalar(d), s.max.multiplyScalar(d);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else return;
  const t = e.targets;
  if (t !== void 0) {
    const i = new y(),
      r = new y();
    for (let c = 0, d = t.length; c < d; c++) {
      const b = t[c];
      if (b.POSITION !== void 0) {
        const f = a.json.accessors[b.POSITION],
          h = f.min,
          k = f.max;
        if (h !== void 0 && k !== void 0) {
          if (
            (r.setX(Math.max(Math.abs(h[0]), Math.abs(k[0]))),
            r.setY(Math.max(Math.abs(h[1]), Math.abs(k[1]))),
            r.setZ(Math.max(Math.abs(h[2]), Math.abs(k[2]))),
            f.normalized)
          ) {
            const R = he(U[f.componentType]);
            r.multiplyScalar(R);
          }
          i.max(r);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
      }
    }
    s.expandByVector(i);
  }
  l.boundingBox = s;
  const o = new ja();
  s.getCenter(o.center),
    (o.radius = s.min.distanceTo(s.max) / 2),
    (l.boundingSphere = o);
}
function Ge(l, e, a) {
  const n = e.attributes,
    s = [];
  function t(o, i) {
    return a.getDependency("accessor", o).then(function (r) {
      l.setAttribute(i, r);
    });
  }
  for (const o in n) {
    const i = fe[o] || o.toLowerCase();
    i in l.attributes || s.push(t(n[o], i));
  }
  if (e.indices !== void 0 && !l.index) {
    const o = a.getDependency("accessor", e.indices).then(function (i) {
      l.setIndex(i);
    });
    s.push(o);
  }
  return (
    ve.workingColorSpace !== q &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ve.workingColorSpace}" not supported.`
      ),
    P(l, e),
    xn(l, e, a),
    Promise.all(s).then(function () {
      return e.targets !== void 0 ? fn(l, e.targets, a) : l;
    })
  );
}
class kn extends Ue {
  constructor() {
    super(), (this.name = "RoomEnvironment"), (this.position.y = -3.5);
    const e = new Da();
    e.deleteAttribute("uv");
    const a = new ee({ side: La }),
      n = new ee(),
      s = new qe(16777215, 900, 28, 2);
    s.position.set(0.418, 16.199, 0.3), this.add(s);
    const t = new _(e, a);
    t.position.set(-0.757, 13.219, 0.717),
      t.scale.set(31.713, 28.305, 28.591),
      this.add(t);
    const o = new Ke(e, n, 6),
      i = new pe();
    i.position.set(-10.906, 2.009, 1.846),
      i.rotation.set(0, -0.195, 0),
      i.scale.set(2.328, 7.905, 4.651),
      i.updateMatrix(),
      o.setMatrixAt(0, i.matrix),
      i.position.set(-5.607, -0.754, -0.758),
      i.rotation.set(0, 0.994, 0),
      i.scale.set(1.97, 1.534, 3.955),
      i.updateMatrix(),
      o.setMatrixAt(1, i.matrix),
      i.position.set(6.167, 0.857, 7.803),
      i.rotation.set(0, 0.561, 0),
      i.scale.set(3.927, 6.285, 3.687),
      i.updateMatrix(),
      o.setMatrixAt(2, i.matrix),
      i.position.set(-2.017, 0.018, 6.124),
      i.rotation.set(0, 0.333, 0),
      i.scale.set(2.002, 4.566, 2.064),
      i.updateMatrix(),
      o.setMatrixAt(3, i.matrix),
      i.position.set(2.291, -0.756, -2.621),
      i.rotation.set(0, -0.286, 0),
      i.scale.set(1.546, 1.552, 1.496),
      i.updateMatrix(),
      o.setMatrixAt(4, i.matrix),
      i.position.set(-2.193, -0.369, -5.547),
      i.rotation.set(0, 0.516, 0),
      i.scale.set(3.875, 3.487, 2.986),
      i.updateMatrix(),
      o.setMatrixAt(5, i.matrix),
      this.add(o);
    const r = new _(e, z(50));
    r.position.set(-16.116, 14.37, 8.208),
      r.scale.set(0.1, 2.428, 2.739),
      this.add(r);
    const c = new _(e, z(50));
    c.position.set(-16.109, 18.021, -8.207),
      c.scale.set(0.1, 2.425, 2.751),
      this.add(c);
    const d = new _(e, z(17));
    d.position.set(14.904, 12.198, -1.832),
      d.scale.set(0.15, 4.265, 6.331),
      this.add(d);
    const b = new _(e, z(43));
    b.position.set(-0.462, 8.89, 14.52),
      b.scale.set(4.38, 5.441, 0.088),
      this.add(b);
    const f = new _(e, z(20));
    f.position.set(3.235, 11.486, -12.541),
      f.scale.set(2.5, 2, 0.1),
      this.add(f);
    const h = new _(e, z(100));
    h.position.set(0, 20, 0), h.scale.set(1, 0.1, 1), this.add(h);
  }
  dispose() {
    const e = new Set();
    this.traverse((a) => {
      a.isMesh && (e.add(a.geometry), e.add(a.material));
    });
    for (const a of e) a.dispose();
  }
}
function z(l) {
  return new Sa({ color: 0, emissive: 16777215, emissiveIntensity: l });
}
var Tn = (function () {
  var l =
      "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",
    e =
      "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",
    a = new Uint8Array([
      0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0,
      1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7,
      0, 65, 0, 253, 15, 26, 11,
    ]),
    n = new Uint8Array([
      32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15,
      116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24,
      23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136,
      108, 28, 118, 29, 73, 115,
    ]);
  if (typeof WebAssembly != "object") return { supported: !1 };
  var s = WebAssembly.validate(a) ? i(e) : i(l),
    t,
    o = WebAssembly.instantiate(s, {}).then(function (g) {
      (t = g.instance), t.exports.__wasm_call_ctors();
    });
  function i(g) {
    for (var u = new Uint8Array(g.length), m = 0; m < g.length; ++m) {
      var p = g.charCodeAt(m);
      u[m] = p > 96 ? p - 97 : p > 64 ? p - 39 : p + 4;
    }
    for (var x = 0, m = 0; m < g.length; ++m)
      u[x++] = u[m] < 60 ? n[u[m]] : (u[m] - 60) * 64 + u[++m];
    return u.buffer.slice(0, x);
  }
  function r(g, u, m, p, x, A, F) {
    var E = g.exports.sbrk,
      L = (p + 3) & -4,
      j = E(L * x),
      G = E(A.length),
      K = new Uint8Array(g.exports.memory.buffer);
    K.set(A, G);
    var I = u(j, p, x, G, A.length);
    if (
      (I == 0 && F && F(j, L, x),
      m.set(K.subarray(j, j + p * x)),
      E(j - E(0)),
      I != 0)
    )
      throw new Error("Malformed buffer data: " + I);
  }
  var c = {
      NONE: "",
      OCTAHEDRAL: "meshopt_decodeFilterOct",
      QUATERNION: "meshopt_decodeFilterQuat",
      EXPONENTIAL: "meshopt_decodeFilterExp",
      COLOR: "meshopt_decodeFilterColor",
    },
    d = {
      ATTRIBUTES: "meshopt_decodeVertexBuffer",
      TRIANGLES: "meshopt_decodeIndexBuffer",
      INDICES: "meshopt_decodeIndexSequence",
    },
    b = [],
    f = 0;
  function h(g) {
    var u = { object: new Worker(g), pending: 0, requests: {} };
    return (
      (u.object.onmessage = function (m) {
        var p = m.data;
        (u.pending -= p.count),
          u.requests[p.id][p.action](p.value),
          delete u.requests[p.id];
      }),
      u
    );
  }
  function k(g) {
    for (
      var u =
          "self.ready = WebAssembly.instantiate(new Uint8Array([" +
          new Uint8Array(s) +
          "]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = " +
          T.name +
          ";" +
          r.toString() +
          T.toString(),
        m = new Blob([u], { type: "text/javascript" }),
        p = URL.createObjectURL(m),
        x = b.length;
      x < g;
      ++x
    )
      b[x] = h(p);
    for (var x = g; x < b.length; ++x) b[x].object.postMessage({});
    (b.length = g), URL.revokeObjectURL(p);
  }
  function R(g, u, m, p, x) {
    for (var A = b[0], F = 1; F < b.length; ++F)
      b[F].pending < A.pending && (A = b[F]);
    return new Promise(function (E, L) {
      var j = new Uint8Array(m),
        G = ++f;
      (A.pending += g),
        (A.requests[G] = { resolve: E, reject: L }),
        A.object.postMessage(
          { id: G, count: g, size: u, source: j, mode: p, filter: x },
          [j.buffer]
        );
    });
  }
  function T(g) {
    var u = g.data;
    self.ready.then(function (m) {
      if (!u.id) return self.close();
      try {
        var p = new Uint8Array(u.count * u.size);
        r(
          m,
          m.exports[u.mode],
          p,
          u.count,
          u.size,
          u.source,
          m.exports[u.filter]
        ),
          self.postMessage(
            { id: u.id, count: u.count, action: "resolve", value: p },
            [p.buffer]
          );
      } catch (x) {
        self.postMessage({
          id: u.id,
          count: u.count,
          action: "reject",
          value: x,
        });
      }
    });
  }
  return {
    ready: o,
    supported: !0,
    useWorkers: function (g) {
      k(g);
    },
    decodeVertexBuffer: function (g, u, m, p, x) {
      r(t, t.exports.meshopt_decodeVertexBuffer, g, u, m, p, t.exports[c[x]]);
    },
    decodeIndexBuffer: function (g, u, m, p) {
      r(t, t.exports.meshopt_decodeIndexBuffer, g, u, m, p);
    },
    decodeIndexSequence: function (g, u, m, p) {
      r(t, t.exports.meshopt_decodeIndexSequence, g, u, m, p);
    },
    decodeGltfBuffer: function (g, u, m, p, x, A) {
      r(t, t.exports[d[x]], g, u, m, p, t.exports[c[A]]);
    },
    decodeGltfBufferAsync: function (g, u, m, p, x) {
      return b.length > 0
        ? R(g, u, m, d[p], c[x])
        : o.then(function () {
            var A = new Uint8Array(g * u);
            return r(t, t.exports[d[p]], A, g, u, m, t.exports[c[x]]), A;
          });
    },
  };
})();
const Y = new Map();
async function Rn(l) {
  return (
    Y.has(l) ||
      Y.set(
        l,
        (async () => {
          const e = new Na();
          e.setMeshoptDecoder(Tn);
          const a = await qa(l),
            n = await e.parseAsync(await a.arrayBuffer(), "");
          let s = 0;
          if (
            (n.scene.traverse((i) => {
              for (const r of Array.isArray(i.material)
                ? i.material
                : i.material
                ? [i.material]
                : [])
                r.map?.image && s++;
            }),
            n.parser.json.images?.length && !s)
          )
            throw new Error("Model textures could not be loaded");
          const t = new Je().setFromObject(n.scene),
            o = t.getSize(new y());
          return (
            n.scene.position.sub(t.getCenter(new y())),
            { root: n.scene, size: o, texturedMaterials: s }
          );
        })().catch((e) => {
          throw (Y.delete(l), e);
        })
      ),
    Y.get(l)
  );
}
async function An({
  host: l,
  area: e,
  background: a,
  kind: n,
  url: s,
  onReady: t,
  onError: o,
}) {
  let i;
  try {
    i = new Ma({ alpha: !0, antialias: !0, powerPreference: "low-power" });
  } catch (v) {
    return o(v), { enable() {}, destroy() {} };
  }
  i.setClearColor(0, 0),
    i.setPixelRatio(Math.min(devicePixelRatio, 1.5)),
    (i.toneMapping = Ga),
    (i.toneMappingExposure = 0.72),
    i.domElement.setAttribute("aria-hidden", "true"),
    l.appendChild(i.domElement);
  const r = new Ue(),
    c = new Ie(35, 1, 0.01, 20),
    d = new Pa(i),
    b = new kn(),
    f = d.fromScene(b, 0.04);
  (r.environment = f.texture),
    b.dispose(),
    d.dispose(),
    r.add(new Oa(16774630, 3224388, 0.9));
  const h = new be(16772822, 1.6);
  h.position.set(2, 3, 4), r.add(h);
  const k = new be(13228543, 1);
  k.position.set(-3, 1, 1), r.add(k);
  const R = matchMedia("(prefers-reduced-motion: reduce)"),
    T = matchMedia("(hover:hover) and (pointer:fine)");
  let g = !1,
    u = !0,
    m = !1,
    p = 0,
    x,
    A = 0,
    F = 0,
    E = 0,
    L = 0;
  const j = () => {
    !p && u && m && !document.hidden && !g && (p = requestAnimationFrame(G));
  };
  function G() {
    if (((p = 0), g || !u || !m || document.hidden)) return;
    (A += (E - A) * 0.09), (F += (L - F) * 0.09);
    const v = R.matches ? 0 : A,
      S = R.matches ? 0 : F;
    x &&
      ((x.rotation.y = J.degToRad(v * (n === "hero" ? 6 : 9))),
      (x.rotation.x = J.degToRad(S * (n === "hero" ? 3 : 5)))),
      a &&
        (a.style.transform = `translate(${-v * 8}px,${-S * 5}px) scale(1.025)`),
      i.render(r, c),
      (l.dataset.renderedTriangles = String(i.info.render.triangles)),
      (l.dataset.renderedFrames = String(
        Number(l.dataset.renderedFrames || 0) + 1
      )),
      Math.abs(E - A) + Math.abs(L - F) > 0.001 && j();
  }
  function K() {
    const v = l.clientWidth,
      S = l.clientHeight;
    if (!(!v || !S)) {
      if (
        (i.setSize(v, S, !1),
        (c.aspect = v / S),
        c.position.set(0, 0.08, 1.65),
        c.lookAt(0, 0, 0),
        c.updateProjectionMatrix(),
        x)
      ) {
        const ae = v < 700,
          ne = 2 * 1.65 * Math.tan(J.degToRad(c.fov / 2)),
          Qe = ne * c.aspect,
          Te = x.userData.size,
          Ye = Qe * (n === "hero" ? (ae ? 1.75 : 1.12) : 0.62),
          Ze = ne * (n === "hero" ? 0.92 : 0.56);
        x.scale.setScalar(Math.min(Ye / Te.x, Ze / Te.y)),
          x.position.set(0, n === "hero" ? ne * 0.2 : 0, 0);
      }
      j();
    }
  }
  function I(v) {
    if (!T.matches || R.matches || !u) return;
    const S = e.getBoundingClientRect();
    (E = J.clamp(((v.clientX - S.left) / S.width) * 2 - 1, -1, 1)),
      (L = J.clamp(((v.clientY - S.top) / S.height) * 2 - 1, -1, 1)),
      j();
  }
  function Q() {
    (E = L = 0), j();
  }
  function ue() {
    document.hidden ? (cancelAnimationFrame(p), (p = 0)) : j();
  }
  const ge = new ResizeObserver(K);
  ge.observe(l);
  const me = new IntersectionObserver(
    ([v]) => {
      (m = v.isIntersecting), m ? j() : (cancelAnimationFrame(p), (p = 0));
    },
    { threshold: 0 }
  );
  me.observe(l),
    e.addEventListener("pointermove", I, { passive: !0 }),
    e.addEventListener("pointerleave", Q);
  const Xe = ya(({ x: v, y: S }) => {
    !u || R.matches || ((E = v), (L = S), j());
  });
  R.addEventListener("change", Q),
    document.addEventListener("visibilitychange", ue);
  const xe = (v) => {
      v.preventDefault(),
        cancelAnimationFrame(p),
        (p = 0),
        o(new Error("Graphics paused"));
    },
    ke = () => {
      x && (t(), K());
    };
  return (
    i.domElement.addEventListener("webglcontextlost", xe),
    i.domElement.addEventListener("webglcontextrestored", ke),
    Rn(s)
      .then(({ root: v, size: S, texturedMaterials: ae }) => {
        g ||
          ((x = new Z()),
          x.add(v.clone(!0)),
          (x.userData.size = S),
          (l.dataset.texturedMaterials = String(ae)),
          (l.dataset.modelSize = [S.x, S.y, S.z].join(",")),
          r.add(x),
          K(),
          t());
      })
      .catch((v) => {
        g || o(v);
      }),
    K(),
    {
      enable(v) {
        (u = v),
          v
            ? (K(), j())
            : (cancelAnimationFrame(p), (p = 0), (E = L = A = F = 0));
      },
      destroy() {
        (g = !0),
          cancelAnimationFrame(p),
          ge.disconnect(),
          me.disconnect(),
          Xe(),
          e.removeEventListener("pointermove", I),
          e.removeEventListener("pointerleave", Q),
          R.removeEventListener("change", Q),
          document.removeEventListener("visibilitychange", ue),
          i.domElement.removeEventListener("webglcontextlost", xe),
          i.domElement.removeEventListener("webglcontextrestored", ke),
          i.dispose(),
          f.dispose(),
          i.domElement.remove();
      },
    }
  );
}
export { An as createHomeScene };
