function fa(q) {
  var u = 0;
  return function() {
      return u < q.length ? {
          done: !1,
          value: q[u++]
      } : {
          done: !0
      }
  }
}

function ia(q) {
  var u = "undefined" != typeof Symbol && Symbol.iterator && q[Symbol.iterator];
  return u ? u.call(q) : {
      next: fa(q)
  }
}
var ma = "function" == typeof Object.create ? Object.create : function(q) {
      function u() {}
      u.prototype = q;
      return new u
  },
  ra = "function" == typeof Object.defineProperties ? Object.defineProperty : function(q, u, r) {
      if (q == Array.prototype || q == Object.prototype) return q;
      q[u] = r.value;
      return q
  };

function ya(q) {
  q = ["object" == typeof globalThis && globalThis, q, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var u = 0; u < q.length; ++u) {
      var r = q[u];
      if (r && r.Math == Math) return r
  }
  throw Error("Cannot find global object");
}
var za = ya(this);

function Aa(q, u) {
  if (u) a: {
      var r = za;q = q.split(".");
      for (var z = 0; z < q.length - 1; z++) {
          var C = q[z];
          if (!(C in r)) break a;
          r = r[C]
      }
      q = q[q.length - 1];z = r[q];u = u(z);u != z && null != u && ra(r, q, {
          configurable: !0,
          writable: !0,
          value: u
      })
  }
}
var Fa;
if ("function" == typeof Object.setPrototypeOf) Fa = Object.setPrototypeOf;
else {
  var Ga;
  a: {
      var Ha = {
              a: !0
          },
          Ia = {};
      try {
          Ia.__proto__ = Ha;
          Ga = Ia.a;
          break a
      } catch (q) {}
      Ga = !1
  }
  Fa = Ga ? function(q, u) {
      q.__proto__ = u;
      if (q.__proto__ !== u) throw new TypeError(q + " is not extensible");
      return q
  } : null
}
var Ja = Fa;

function Ka(q, u) {
  q.prototype = ma(u.prototype);
  q.prototype.constructor = q;
  if (Ja) Ja(q, u);
  else
      for (var r in u)
          if ("prototype" != r)
              if (Object.defineProperties) {
                  var z = Object.getOwnPropertyDescriptor(u, r);
                  z && Object.defineProperty(q, r, z)
              } else q[r] = u[r];
  q.wc = u.prototype
}
Aa("Object.is", function(q) {
  return q ? q : function(u, r) {
      return u === r ? 0 !== u || 1 / u === 1 / r : u !== u && r !== r
  }
});
Aa("Array.prototype.includes", function(q) {
  return q ? q : function(u, r) {
      var z = this;
      z instanceof String && (z = String(z));
      var C = z.length;
      r = r || 0;
      for (0 > r && (r = Math.max(r + C, 0)); r < C; r++) {
          var D = z[r];
          if (D === u || Object.is(D, u)) return !0
      }
      return !1
  }
});
Aa("String.prototype.includes", function(q) {
  return q ? q : function(u, r) {
      if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (u instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return -1 !== this.indexOf(u, r || 0)
  }
});
Aa("Symbol", function(q) {
  function u(D) {
      if (this instanceof u) throw new TypeError("Symbol is not a constructor");
      return new r(z + (D || "") + "_" + C++, D)
  }

  function r(D, P) {
      this.i = D;
      ra(this, "description", {
          configurable: !0,
          writable: !0,
          value: P
      })
  }
  if (q) return q;
  r.prototype.toString = function() {
      return this.i
  };
  var z = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
      C = 0;
  return u
});
Aa("Symbol.iterator", function(q) {
  if (q) return q;
  q = Symbol("Symbol.iterator");
  for (var u = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), r = 0; r < u.length; r++) {
      var z = za[u[r]];
      "function" === typeof z && "function" != typeof z.prototype[q] && ra(z.prototype, q, {
          configurable: !0,
          writable: !0,
          value: function() {
              return Ma(fa(this))
          }
      })
  }
  return q
});

function Ma(q) {
  q = {
      next: q
  };
  q[Symbol.iterator] = function() {
      return this
  };
  return q
}

function Na(q, u) {
  q instanceof String && (q += "");
  var r = 0,
      z = !1,
      C = {
          next: function() {
              if (!z && r < q.length) {
                  var D = r++;
                  return {
                      value: u(D, q[D]),
                      done: !1
                  }
              }
              z = !0;
              return {
                  done: !0,
                  value: void 0
              }
          }
      };
  C[Symbol.iterator] = function() {
      return C
  };
  return C
}
Aa("Array.prototype.keys", function(q) {
  return q ? q : function() {
      return Na(this, function(u) {
          return u
      })
  }
});
Aa("Array.prototype.values", function(q) {
  return q ? q : function() {
      return Na(this, function(u, r) {
          return r
      })
  }
});

function Oa(q, u) {
  return Object.prototype.hasOwnProperty.call(q, u)
}
Aa("WeakMap", function(q) {
  function u(v) {
      this.i = (y += Math.random() + 1).toString();
      if (v) {
          v = ia(v);
          for (var x; !(x = v.next()).done;) x = x.value, this.set(x[0], x[1])
      }
  }

  function r() {}

  function z(v) {
      var x = typeof v;
      return "object" === x && null !== v || "function" === x
  }

  function C(v) {
      if (!Oa(v, P)) {
          var x = new r;
          ra(v, P, {
              value: x
          })
      }
  }

  function D(v) {
      var x = Object[v];
      x && (Object[v] = function(B) {
          if (B instanceof r) return B;
          Object.isExtensible(B) && C(B);
          return x(B)
      })
  }
  if (function() {
          if (!q || !Object.seal) return !1;
          try {
              var v = Object.seal({}),
                  x = Object.seal({}),
                  B = new q([
                      [v, 2],
                      [x, 3]
                  ]);
              if (2 != B.get(v) || 3 != B.get(x)) return !1;
              B.delete(v);
              B.set(x, 4);
              return !B.has(v) && 4 == B.get(x)
          } catch (V) {
              return !1
          }
      }()) return q;
  var P = "$jscomp_hidden_" + Math.random();
  D("freeze");
  D("preventExtensions");
  D("seal");
  var y = 0;
  u.prototype.set = function(v, x) {
      if (!z(v)) throw Error("Invalid WeakMap key");
      C(v);
      if (!Oa(v, P)) throw Error("WeakMap key fail: " + v);
      v[P][this.i] = x;
      return this
  };
  u.prototype.get = function(v) {
      return z(v) && Oa(v, P) ? v[P][this.i] : void 0
  };
  u.prototype.has = function(v) {
      return z(v) && Oa(v,
          P) && Oa(v[P], this.i)
  };
  u.prototype.delete = function(v) {
      return z(v) && Oa(v, P) && Oa(v[P], this.i) ? delete v[P][this.i] : !1
  };
  return u
});
Aa("Map", function(q) {
  function u() {
      var y = {};
      return y.Aa = y.next = y.head = y
  }

  function r(y, v) {
      var x = y.i;
      return Ma(function() {
          if (x) {
              for (; x.head != y.i;) x = x.Aa;
              for (; x.next != x.head;) return x = x.next, {
                  done: !1,
                  value: v(x)
              };
              x = null
          }
          return {
              done: !0,
              value: void 0
          }
      })
  }

  function z(y, v) {
      var x = v && typeof v;
      "object" == x || "function" == x ? D.has(v) ? x = D.get(v) : (x = "" + ++P, D.set(v, x)) : x = "p_" + v;
      var B = y.m[x];
      if (B && Oa(y.m, x))
          for (y = 0; y < B.length; y++) {
              var V = B[y];
              if (v !== v && V.key !== V.key || v === V.key) return {
                  id: x,
                  list: B,
                  index: y,
                  Z: V
              }
          }
      return {
          id: x,
          list: B,
          index: -1,
          Z: void 0
      }
  }

  function C(y) {
      this.m = {};
      this.i = u();
      this.size = 0;
      if (y) {
          y = ia(y);
          for (var v; !(v = y.next()).done;) v = v.value, this.set(v[0], v[1])
      }
  }
  if (function() {
          if (!q || "function" != typeof q || !q.prototype.entries || "function" != typeof Object.seal) return !1;
          try {
              var y = Object.seal({
                      x: 4
                  }),
                  v = new q(ia([
                      [y, "s"]
                  ]));
              if ("s" != v.get(y) || 1 != v.size || v.get({
                      x: 4
                  }) || v.set({
                      x: 4
                  }, "t") != v || 2 != v.size) return !1;
              var x = v.entries(),
                  B = x.next();
              if (B.done || B.value[0] != y || "s" != B.value[1]) return !1;
              B = x.next();
              return B.done || 4 != B.value[0].x ||
                  "t" != B.value[1] || !x.next().done ? !1 : !0
          } catch (V) {
              return !1
          }
      }()) return q;
  var D = new WeakMap;
  C.prototype.set = function(y, v) {
      y = 0 === y ? 0 : y;
      var x = z(this, y);
      x.list || (x.list = this.m[x.id] = []);
      x.Z ? x.Z.value = v : (x.Z = {
          next: this.i,
          Aa: this.i.Aa,
          head: this.i,
          key: y,
          value: v
      }, x.list.push(x.Z), this.i.Aa.next = x.Z, this.i.Aa = x.Z, this.size++);
      return this
  };
  C.prototype.delete = function(y) {
      y = z(this, y);
      return y.Z && y.list ? (y.list.splice(y.index, 1), y.list.length || delete this.m[y.id], y.Z.Aa.next = y.Z.next, y.Z.next.Aa = y.Z.Aa, y.Z.head = null,
          this.size--, !0) : !1
  };
  C.prototype.clear = function() {
      this.m = {};
      this.i = this.i.Aa = u();
      this.size = 0
  };
  C.prototype.has = function(y) {
      return !!z(this, y).Z
  };
  C.prototype.get = function(y) {
      return (y = z(this, y).Z) && y.value
  };
  C.prototype.entries = function() {
      return r(this, function(y) {
          return [y.key, y.value]
      })
  };
  C.prototype.keys = function() {
      return r(this, function(y) {
          return y.key
      })
  };
  C.prototype.values = function() {
      return r(this, function(y) {
          return y.value
      })
  };
  C.prototype.forEach = function(y, v) {
      for (var x = this.entries(), B; !(B = x.next()).done;) B =
          B.value, y.call(v, B[1], B[0], this)
  };
  C.prototype[Symbol.iterator] = C.prototype.entries;
  var P = 0;
  return C
});
Aa("Set", function(q) {
  function u(r) {
      this.i = new Map;
      if (r) {
          r = ia(r);
          for (var z; !(z = r.next()).done;) this.add(z.value)
      }
      this.size = this.i.size
  }
  if (function() {
          if (!q || "function" != typeof q || !q.prototype.entries || "function" != typeof Object.seal) return !1;
          try {
              var r = Object.seal({
                      x: 4
                  }),
                  z = new q(ia([r]));
              if (!z.has(r) || 1 != z.size || z.add(r) != z || 1 != z.size || z.add({
                      x: 4
                  }) != z || 2 != z.size) return !1;
              var C = z.entries(),
                  D = C.next();
              if (D.done || D.value[0] != r || D.value[1] != r) return !1;
              D = C.next();
              return D.done || D.value[0] == r || 4 != D.value[0].x ||
                  D.value[1] != D.value[0] ? !1 : C.next().done
          } catch (P) {
              return !1
          }
      }()) return q;
  u.prototype.add = function(r) {
      r = 0 === r ? 0 : r;
      this.i.set(r, r);
      this.size = this.i.size;
      return this
  };
  u.prototype.delete = function(r) {
      r = this.i.delete(r);
      this.size = this.i.size;
      return r
  };
  u.prototype.clear = function() {
      this.i.clear();
      this.size = 0
  };
  u.prototype.has = function(r) {
      return this.i.has(r)
  };
  u.prototype.entries = function() {
      return this.i.entries()
  };
  u.prototype.values = function() {
      return this.i.values()
  };
  u.prototype.keys = u.prototype.values;
  u.prototype[Symbol.iterator] =
      u.prototype.values;
  u.prototype.forEach = function(r, z) {
      var C = this;
      this.i.forEach(function(D) {
          return r.call(z, D, D, C)
      })
  };
  return u
});
(function(q) {
  function u(a) {
      null == a && (a = 0);
      this.x = 0;
      this.x = 0 == a ? R.random(2147483647) + 1 : a
  }

  function r(a, b) {
      this.A = !1;
      this.update = a;
      this.La = b;
      this.i = 16.666666666666668
  }

  function z() {
      this.touches = []
  }

  function C() {
      this.R = this.P = this.y = this.x = 0;
      this.Ib = this.nb = this.Kb = this.fc = !1;
      this.hc = 0
  }

  function D() {
      this.H = this.C = this.R = this.P = this.y = this.x = 0;
      this.i = this.m = this.X = this.M = this.A = this.left = !1
  }

  function P() {
      this.keys = new ja;
      this.A = new Set;
      this.m = new Set;
      this.i = new Set;
      this.C = new Set
  }

  function y() {}

  function v(a,
      b, c, d, e) {
      this.m = new D;
      this.touches = new z;
      this.i = d ? new P : null;
      this.ab = 1;
      this.A(a, c, b, e)
  }

  function x() {}

  function B(a, b, c) {
      this.h = a;
      this.name = b;
      this.size = c;
      this.g = new Float32Array(64);
      this.length = 0;
      this.buffer = a.createBuffer()
  }

  function V(a) {
      this.h = a;
      this.aa = null;
      this.C = this.A = 33071;
      this.i = 9729;
      this.aa = a.createTexture();
      this.Za = a.createFramebuffer();
      this.m = a.createRenderbuffer()
  }

  function na(a) {
      this.Pa = null;
      this.s = 1;
      this.V = new B(a, "position", 3);
      this.N = new B(a, "color", 4);
      this.U = new B(a, "normal", 3);
      this.$ =
          new B(a, "texCoord", 2);
      this.ea = new Ba(a);
      this.mode = 4;
      this.Na = 0;
      this.V.length = 0;
      this.N.length = 0;
      this.U.length = 0;
      this.$.length = 0;
      this.b = this.v = this.r = this.ea.length = 0;
      this.a = 1;
      this.ob = this.ub = this.ra = this.R = this.P = 0
  }

  function oa() {}

  function da(a) {
      this.h = a;
      this.B = a.createProgram();
      this.m = a.createShader(35633);
      this.i = a.createShader(35632);
      this.A = this.C = this.map = null;
      this.ba = !1;
      this.ia = new ja
  }

  function Ba(a) {
      this.h = a;
      this.g = new Int32Array(512);
      this.length = 0;
      this.buffer = a.createBuffer()
  }

  function T() {
      var a = [];
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      this.g = a;
      a = [];
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      a.push(0);
      this.ja = a
  }

  function ha() {}

  function H(a) {
      this.canvas = a;
      this.h = Ca.i(a);
      this.zb();
      this.vb();
      this.yb();
      this.oc();
      this.kb = .1;
      this.jb = 1E4;
      this.Sa = Math.PI / 3;
      this.lb = !1;
      this.Vb = this.Ub = 0;
      this.Wb = 1;
      this.Xb = this.Tb = this.Sb = this.Rb = 0;
      this.Yb = 1;
      this.Zb =
          0;
      this.Ca = a.width;
      this.sa = a.height;
      if (null == this.K) {
          if (null == this.K) {
              a = this.canvas.width;
              var b = this.canvas.height
          } else a = this.K.width, b = this.K.height;
          this.h.viewport(0, 0, a, b)
      }
      this.Sa = a = Math.PI / 3;
      this.kb = .1;
      this.jb = 1E4;
      this.Ba.perspective(a, this.Ca / this.sa, .1, 1E4);
      this.Na = 0;
      this.Ta = this.Ua = this.Va = this.Wa = 1;
      this.m = this.i = this.H = this.C = this.A = 0;
      this.K = this.j = null;
      this.s = 1;
      this.L = !1;
      this.S = Array(8);
      this.S[0] = new ha;
      this.S[1] = new ha;
      this.S[2] = new ha;
      this.S[3] = new ha;
      this.S[4] = new ha;
      this.S[5] = new ha;
      this.S[6] = new ha;
      this.S[7] = new ha;
      this.O = 0
  }

  function ka(a, b) {
      this.i = a;
      this.canvas = b;
      this.A();
      this.m = new r(sa(this, this.update), sa(this, this.La))
  }

  function Ca() {}

  function la() {}

  function ta(a) {
      this.i = 0;
      this.g = a
  }

  function ja() {
      this.o = Object.create(null)
  }

  function ua(a, b, c) {
      b = W.call(this, String(a), b, c) || this;
      b.value = a;
      return b
  }

  function W(a, b, c) {
      b = Error.call(this, a);
      this.message = b.message;
      "stack" in b && (this.stack = b.stack);
      this.message = a;
      this.i = null != c ? c : this
  }

  function R() {}

  function Da() {}

  function Z(a, b, c, d) {
      Y.i = !0;
      var e = Y.call(this) || this;
      Y.i = !1;
      e.Y(a, b, c, d);
      return e
  }

  function Y(a, b, c, d) {
      Y.i || this.Y(a, b, c, d)
  }

  function aa() {
      this.qa = [];
      this.Da = [];
      this.Ea = [];
      this.Ja = [];
      this.Ia = [];
      this.Y = [];
      this.M = [];
      this.ca = [];
      this.C = [];
      this.shift = 6;
      this.n = 1 << this.shift;
      this.J = this.m = 0;
      this.H = new u
  }

  function Ea(a) {
      this.shift = a;
      this.n = 1 << a;
      a = [];
      for (var b = 0, c = this.n; b < c;) {
          ++b;
          for (var d = 0, e = this.n; d < e;) {
              ++d;
              for (var f = 0, g = this.n; f < g;) ++f, a.push(21)
          }
      }
      this.l = a
  }

  function ea(a, b, c, d, e, f, g, h, k, l, n, m) {
      this.bb = a;
      this.eb = b;
      this.gb = c;
      this.cb =
          d;
      this.fb = e;
      this.hb = f;
      this.ta = g;
      this.va = h;
      this.xa = k;
      this.ua = l;
      this.wa = n;
      this.ya = m;
      this.n = 0;
      this.tb = !1;
      this.parent = null;
      this.ac = !1
  }

  function pa() {
      return la.i(this, "")
  }

  function La(a) {
      return a instanceof Array ? new ta(a) : a.iterator()
  }

  function sa(a, b) {
      if (null == b) return null;
      null == b.Ab && (b.Ab = q.Lb++);
      var c;
      null == a.Db ? a.Db = {} : c = a.Db[b.Ab];
      null == c && (c = b.bind(a), a.Db[b.Ab] = c);
      return c
  }
  var va = va || {},
      wa;
  ea.prototype.A = function(a, b) {
      var c = this.bb + this.ta * a,
          d = this.eb + this.va * a,
          e = this.gb + this.xa * a,
          f = this.cb + this.ua *
          a,
          g = this.fb + this.wa * a,
          h = this.hb + this.ya * a;
      a = f - c;
      a = 0 > a ? -1 : 0 < a ? 1 : 0;
      var k = g - d;
      k = 0 > k ? -1 : 0 < k ? 1 : 0;
      var l = h - e;
      l = 0 > l ? -1 : 0 < l ? 1 : 0;
      f -= c;
      g -= d;
      h -= e;
      g = (0 > f ? -f : f) + (0 > g ? -g : g) + (0 > h ? -h : h);
      c += b.n >> 1;
      d += b.n >> 1;
      e += b.n >> 1;
      h = 0;
      for (f = g + 1; h < f;) {
          var n = h++;
          if (0 == n) {
              n = this.ta;
              var m = this.va;
              var p = this.xa
          } else n == g ? (n = this.ua, m = this.wa, p = this.ya) : (n = this.ta + this.ua >> 1, m = this.va + this.wa >> 1, p = this.xa + this.ya >> 1);
          b.l[c | (d | e << b.shift) << b.shift] = n + 1 | m + 1 << 2 | p + 1 << 4;
          c += a;
          d += k;
          e += l
      }
  };
  ea.prototype.m = function(a, b) {
      var c = this.bb + this.ta * a,
          d = this.eb + this.va * a,
          e = this.gb + this.xa * a,
          f = this.cb + this.ua * a,
          g = this.fb + this.wa * a,
          h = this.hb + this.ya * a;
      a = f - c;
      a = 0 > a ? -1 : 0 < a ? 1 : 0;
      var k = g - d;
      k = 0 > k ? -1 : 0 < k ? 1 : 0;
      var l = h - e;
      l = 0 > l ? -1 : 0 < l ? 1 : 0;
      f -= c;
      g -= d;
      h -= e;
      c += b.n >> 1;
      d += b.n >> 1;
      e += b.n >> 1;
      var n = 0;
      for (f = (0 > f ? -f : f) + (0 > g ? -g : g) + (0 > h ? -h : h) + 1; n < f;) {
          ++n;
          g = 21 != b.l[c + -2 | (d + -2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -2 |
              e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + -1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d | e + 2 << b.shift) << b.shift] ?
              1 : 0;
          g += 21 != b.l[c + -2 | (d + 1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -2 | (d + 2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 !=
              b.l[c + -1 | (d + -2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + -1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c +
              -1 | (d | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 2 | e + -2 << b.shift) <<
              b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + -1 | (d + 2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c |
              (d + -1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + -1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c |
              (d + 1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c | (d + 2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -2 | e << b.shift) << b.shift] ? 1 : 0;
          g +=
              21 != b.l[c + 1 | (d + -2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + -1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d | e + 1 <<
              b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 1 | (d + 2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + -1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c +
              2 | (d + -1 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d | e + 2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 1 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 1 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 1 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 1 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 1 | e + 2 << b.shift) << b.shift] ?
              1 : 0;
          g += 21 != b.l[c + 2 | (d + 2 | e + -2 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 2 | e + -1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 2 | e << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 2 | e + 1 << b.shift) << b.shift] ? 1 : 0;
          g += 21 != b.l[c + 2 | (d + 2 | e + 2 << b.shift) << b.shift] ? 1 : 0;
          if (18 < g) return !1;
          c += a;
          d += k;
          e += l
      }
      return !0
  };
  ea.prototype.i = function(a, b, c, d, e) {
      var f = this.bb + this.ta * a,
          g = this.eb + this.va * a,
          h = this.gb + this.xa * a,
          k = this.cb + this.ua * a,
          l = this.fb + this.wa * a,
          n = this.hb + this.ya * a;
      a = k - f;
      a = 0 > a ? -1 : 0 < a ? 1 : 0;
      var m = l - g;
      m = 0 > m ? -1 : 0 < m ? 1 : 0;
      var p =
          n - h;
      p = 0 > p ? -1 : 0 < p ? 1 : 0;
      k -= f;
      l -= g;
      n -= h;
      l = (0 > k ? -k : k) + (0 > l ? -l : l) + (0 > n ? -n : n);
      c = f + (b.n >> 1) + c;
      d = g + (b.n >> 1) + d;
      e = h + (b.n >> 1) + e;
      h = 0;
      for (g = l + 1; h < g;) {
          f = h++;
          0 == f ? (f = this.ta, n = this.va, k = this.xa) : f == l ? (f = this.ua, n = this.wa, k = this.ya) : (f = this.ta + this.ua >> 1, n = this.va + this.wa >> 1, k = this.xa + this.ya >> 1);
          var t = b.l[c | (d | e << b.shift) << b.shift];
          if (!(21 == t || 0 <= ((t & 3) - 1) * f && 0 <= ((t >> 2 & 3) - 1) * n && 0 <= ((t >> 4) - 1) * k)) return !1;
          c += a;
          d += m;
          e += p
      }
      return !0
  };
  ea.prototype.rc = function(a) {
      var b = this.i(this.n + 1, a, 0, 0, 0) && this.i(this.n + 2, a, 0, 0, 0);
      b = (b = (b = (b = (b = (b = b && this.i(this.n + 1, a, -1, 0, 0)) && this.i(this.n + 1, a, 1, 0, 0)) && this.i(this.n + 1, a, 0, -1, 0)) && this.i(this.n + 1, a, 0, 1, 0)) && this.i(this.n + 1, a, 0, 0, -1)) && this.i(this.n + 1, a, 0, 0, 1);
      if (!b) return !1;
      if (0 != this.bb || 0 != this.eb || 0 != this.gb || 0 != this.cb || 0 != this.fb || 0 != this.hb) b = b && this.m(this.n + 1, a);
      return b
  };
  ea.prototype.grow = function(a) {
      this.n++;
      this.A(this.n, a)
  };
  ea.prototype.r = function() {
      return .05 * (2 * Math.random() - 1)
  };
  ea.I = !0;
  Ea.prototype.written = function(a, b, c) {
      return 21 != this.l[a | (b | c << this.shift) <<
          this.shift]
  };
  Ea.I = !0;
  aa.prototype.$a = function() {
      this.m = 0;
      this.A = new Ea(this.shift);
      this.C.length = 0;
      this.ca.length = 0;
      for (var a = this.M.length = 0, b = [], c = 0, d = [
              [1, 1],
              [1, -1],
              [-1, 1],
              [-1, -1]
          ]; c < d.length;) {
          var e = d[c++],
              f = 0,
              g = [],
              h = 0;
          for (e = [e, e, e]; h < e.length;) {
              var k = e[h++].slice();
              k.splice(f++, 0, 0);
              g.push(k)
          }
          b.push(g)
      }
      c = [];
      for (b = La(b); b.dc();)
          for (d = La(b.next()); d.dc();) c.push(d.next());
      b = Array(c.length);
      d = 0;
      for (f = c.length; d < f;) {
          g = d++;
          k = c[g];
          h = k[0];
          e = k[1];
          k = k[2];
          var l = 1 - (0 > h ? -h : h),
              n = 1 - (0 > e ? -e : e),
              m = 1 - (0 > k ? -k : k);
          b[g] = new ea(0, 0, 0, 0, 0, 0, h + l, e + n, k + m, h - l, e - n, k - m)
      }
      for (; a < b.length;) c = b[a], ++a, c.tb = !0, this.C.push(c);
      a = [];
      c = 0;
      for (b = this.n; c < b;) a.push(c++ - .5 - (this.n >> 1) + .15 * (2 * Math.random() - 1));
      this.wb = a;
      a = [];
      c = 0;
      for (b = this.n; c < b;) a.push(c++ - .5 - (this.n >> 1) + .15 * (2 * Math.random() - 1));
      this.xb = a;
      a = [];
      c = 0;
      for (b = this.n; c < b;) a.push(c++ - .5 - (this.n >> 1) + .15 * (2 * Math.random() - 1));
      this.yb = a;
      this.J = 2 * Math.random() * Math.PI
  };
  aa.prototype.da = function(a, b, c) {
      for (var d = 0, e = this.Y.length; d < e;) {
          var f = d++;
          var g = a - this.Y[f];
          (0 > g ? -g : g) <=
          this.Ea[f] ? (g = b - this.Ia[f], g = (0 > g ? -g : g) <= this.Da[f]) : g = !1;
          g ? (g = c - this.Ja[f], f = (0 > g ? -g : g) <= this.qa[f]) : f = !1;
          if (f) return !1
      }
      return !0
  };
  aa.prototype.zb = function(a) {
      var b = a.bb + a.ta * a.n,
          c = a.eb + a.va * a.n,
          d = a.gb + a.xa * a.n,
          e = a.cb + a.ua * a.n,
          f = a.fb + a.wa * a.n,
          g = a.hb + a.ya * a.n,
          h = a.ta,
          k = a.va,
          l = a.xa,
          n = a.ua,
          m = a.wa,
          p = a.ya,
          t = e - b;
      t = 0 > t ? -1 : 0 < t ? 1 : 0;
      var w = f - c;
      w = 0 > w ? -1 : 0 < w ? 1 : 0;
      var A = g - d;
      A = 0 > A ? -1 : 0 < A ? 1 : 0;
      var G = e - b,
          E = f - c,
          F = g - d;
      G = (0 > G ? -G : G) + (0 > E ? -E : E) + (0 > F ? -F : F) + 1;
      E = b;
      F = c;
      for (var J = d, K = 0, L = !1, M = [], Q = 0; Q < G;) {
          var I = Q++;
          !L && this.da(E,
              F, J) && (b = E, c = F, d = J, K = I, L = !0);
          E += t;
          F += w;
          J += A;
          if (L && (!this.da(E, F, J) || I == G - 1)) {
              var N = E - t,
                  O = F - w,
                  S = J - A;
              L = !1;
              if (b != N || c != O || d != S) {
                  if (I == G - 1 && 0 == K) return 1 > Math.random() && a.bb == a.cb && a.eb == a.fb && a.gb == a.hb && 1 == a.n && !a.tb ? (a.tb = !0, [a].concat(this.X(e, f, g, n, m, p, t, w, A))) : null;
                  var U = new ea(b, c, d, N, O, S, h, k, l, n, m, p);
                  U.tb = !0;
                  M.push(U);
                  if (0 < K)
                      for (var X = 0, ba = this.X(b, c, d, h, k, l, -t, -w, -A); X < ba.length;) {
                          var ca = ba[X];
                          ++X;
                          ca.parent = U;
                          M.push(ca)
                      }
                  if (I < G - 1)
                      for (I = 0, N = this.X(N, O, S, n, m, p, t, w, A); I < N.length;) O = N[I], ++I, O.parent =
                          U, M.push(O)
              }
          }
      }
      return M
  };
  aa.prototype.X = function(a, b, c, d, e, f, g, h, k) {
      var l = h,
          n = k,
          m = g,
          p = k,
          t = g,
          w = h;
      0 < d * h + e * k + f * g && (l = -h, n = -k, m = -g);
      0 < d * k + e * g + f * h && (p = -k, t = -g, w = -h);
      return [new ea(a, b, c, a, b, c, d, e, f, d + 2 * l, e + 2 * n, f + 2 * m), new ea(a, b, c, a, b, c, d, e, f, d + 2 * p, e + 2 * t, f + 2 * w)]
  };
  aa.prototype.update = function() {
      this.m++;
      for (var a = 2 > this.m ? 0 : 6 > this.m ? 3 : 12 > this.m ? 2 : 20 > this.m ? 16 : 40, b = 2 > this.m ? 0 : 10 > this.m ? 10 : 20 > this.m ? 20 : 30, c = 2 > this.m ? 0 : 6 > this.m ? 2 : 10 > this.m ? 5 : 20 > this.m ? 6 : 8, d = [], e = 0; e < a;) {
          ++e;
          var f = this.H;
          f.x = (f.x ^= f.x << 13) ^ f.x >>>
              17;
          d.push(((f.x ^= f.x << 15) & 2147483647) % (2 * b) - b)
      }
      this.Y = d;
      d = [];
      for (e = 0; e < a;) ++e, f = this.H, f.x = (f.x ^= f.x << 13) ^ f.x >>> 17, d.push(((f.x ^= f.x << 15) & 2147483647) % (2 * b) - b);
      this.Ia = d;
      d = [];
      for (e = 0; e < a;) ++e, f = this.H, f.x = (f.x ^= f.x << 13) ^ f.x >>> 17, d.push(((f.x ^= f.x << 15) & 2147483647) % (2 * b) - b);
      this.Ja = d;
      b = [];
      for (d = 0; d < a;) ++d, e = this.H, e.x = (e.x ^= e.x << 13) ^ e.x >>> 17, b.push(((e.x ^= e.x << 15) & 2147483647) % (2 * c) + c);
      this.Ea = b;
      b = [];
      for (d = 0; d < a;) ++d, e = this.H, e.x = (e.x ^= e.x << 13) ^ e.x >>> 17, b.push(((e.x ^= e.x << 15) & 2147483647) % (2 * c) + c);
      this.Da =
          b;
      b = [];
      for (d = 0; d < a;) ++d, e = this.H, e.x = (e.x ^= e.x << 13) ^ e.x >>> 17, b.push(((e.x ^= e.x << 15) & 2147483647) % (2 * c) + c);
      this.qa = b;
      a = 0 < this.C.length;
      c = [];
      b = this.M.length = 0;
      for (d = this.C; b < d.length;)
          if (f = d[b], ++b, null != f.parent && f.parent.ac || !f.rc(this.A)) f.ac = !0, c.push(f);
          else if (f.grow(this.A), f.parent = null, e = this.zb(f), null != e)
          for (c.push(f), f = 0; f < e.length;) this.M.push(e[f++]);
      b = this.C;
      d = [];
      for (e = 0; e < b.length;) f = b[e], ++e, c.includes(f) || d.push(f);
      this.C = d.concat(this.M);
      for (b = 0; b < c.length;) this.ca.push(c[b++]);
      return a
  };
  aa.prototype.ob = function(a, b, c, d) {
      var e = 0 > b ? -b : b,
          f = 0 > c ? -c : c;
      e = e > f ? e : f;
      f = 0 > d ? -d : d;
      var g = .01 * (5 * d + 3 * b + 2 * c) + .2 * (e > f ? e : f);
      e = .5 * Math.sin(g) + .6;
      f = .5 * Math.sin(g + 2 * Math.PI / 3) + .6;
      g = .5 * Math.sin(g - 2 * Math.PI / 3) + .5;
      1 > e || (e = 1);
      1 > f || (f = 1);
      1 > g || (g = 1);
      a.Wa = e;
      a.Va = f;
      a.Ua = g;
      a.Ta = 1;
      a.u(b, c, d)
  };
  aa.prototype.Qa = function(a, b, c, d, e, f) {
      for (var g = 0, h = 0, k = -2; 2 > k;)
          for (var l = k++, n = -2; 2 > n;) {
              var m = n++,
                  p = a + l + d,
                  t = b + m + e,
                  w = c + -2 + f;
              if (0 <= p && p < this.n && 0 <= t && t < this.n && 0 <= w && w < this.n) {
                  var A = this.A;
                  p = 21 != A.l[p | (t | w << A.shift) << A.shift]
              } else p = !1;
              p ? ++g : ++h;
              p = a + l + d;
              t = b + m + e;
              w = c + -1 + f;
              0 <= p && p < this.n && 0 <= t && t < this.n && 0 <= w && w < this.n ? (A = this.A, p = 21 != A.l[p | (t | w << A.shift) << A.shift]) : p = !1;
              p ? ++g : ++h;
              p = a + l + d;
              t = b + m + e;
              w = c + f;
              0 <= p && p < this.n && 0 <= t && t < this.n && 0 <= w && w < this.n ? (A = this.A, p = 21 != A.l[p | (t | w << A.shift) << A.shift]) : p = !1;
              p ? ++g : ++h;
              p = a + l + d;
              m = b + m + e;
              t = c + 1 + f;
              0 <= p && p < this.n && 0 <= m && m < this.n && 0 <= t && t < this.n ? (w = this.A, m = 21 != w.l[p | (m | t << w.shift) << w.shift]) : m = !1;
              m ? ++g : ++h
          }
      a = (h / (g + h) - .65) / .19999999999999996;
      return .8 * (0 > a ? 0 : 1 < a ? 1 : a) + .2
  };
  aa.prototype.vb = function(a,
      b, c) {
      var d = 0 > a ? -a : a,
          e = 0 > b ? -b : b;
      d = d > e ? d : e;
      e = 0 > c ? -c : c;
      a = Math.sin(2 + Math.sin(4 + .05 * a * 3 + 7 * this.J) / .15000000000000002 * .2) / .2;
      b = Math.sin(5 + Math.sin(6 + .25 * b + 8 * this.J) / .25 * .1) / .1;
      c = Math.sin(7 + Math.sin(3 + .05 * c * 6 + 9 * this.J) / .30000000000000004 * .05 * 3) / .15000000000000002;
      return .1 * (5 * c + 3 * a + 2 * b) + .2 * (d > e ? d : e) + this.J
  };
  aa.prototype.i = function(a, b, c, d, e, f, g) {
      var h = this.wb[b],
          k = this.xb[c],
          l = this.yb[d],
          n = this.vb(h, k, l),
          m = .5 * Math.sin(n) + .6,
          p = .5 * Math.sin(n + 2 * Math.PI / 3) + .6;
      n = .5 * Math.sin(n - 2 * Math.PI / 3) + .5;
      1 > m || (m = 1);
      1 > p ||
          (p = 1);
      1 > n || (n = 1);
      b = this.Qa(b, c, d, e, f, g);
      a.r = m * b;
      a.v = p * b;
      a.b = n * b;
      a.a = 1;
      m = a.ea;
      p = a.Na++;
      if (m.length == m.g.length) {
          b = m.g.length;
          c = new Int32Array(b << 1);
          for (d = 0; d < b;) e = d++, c[e] = m.g[e];
          m.g = c
      }
      m.g[m.length++] = p;
      m = a.V;
      if (m.length == m.g.length) {
          p = m.g.length;
          b = new Float32Array(p << 1);
          for (c = 0; c < p;) d = c++, b[d] = m.g[d];
          m.g = b
      }
      m.g[m.length++] = h;
      h = a.V;
      if (h.length == h.g.length) {
          m = h.g.length;
          p = new Float32Array(m << 1);
          for (b = 0; b < m;) c = b++, p[c] = h.g[c];
          h.g = p
      }
      h.g[h.length++] = k;
      k = a.V;
      if (k.length == k.g.length) {
          h = k.g.length;
          m = new Float32Array(h <<
              1);
          for (p = 0; p < h;) b = p++, m[b] = k.g[b];
          k.g = m
      }
      k.g[k.length++] = l;
      l = a.N;
      k = a.r;
      if (l.length == l.g.length) {
          h = l.g.length;
          m = new Float32Array(h << 1);
          for (p = 0; p < h;) b = p++, m[b] = l.g[b];
          l.g = m
      }
      l.g[l.length++] = k;
      l = a.N;
      k = a.v;
      if (l.length == l.g.length) {
          h = l.g.length;
          m = new Float32Array(h << 1);
          for (p = 0; p < h;) b = p++, m[b] = l.g[b];
          l.g = m
      }
      l.g[l.length++] = k;
      l = a.N;
      k = a.b;
      if (l.length == l.g.length) {
          h = l.g.length;
          m = new Float32Array(h << 1);
          for (p = 0; p < h;) b = p++, m[b] = l.g[b];
          l.g = m
      }
      l.g[l.length++] = k;
      l = a.N;
      k = a.a;
      if (l.length == l.g.length) {
          h = l.g.length;
          m = new Float32Array(h <<
              1);
          for (p = 0; p < h;) b = p++, m[b] = l.g[b];
          l.g = m
      }
      l.g[l.length++] = k;
      l = a.U;
      k = a.P;
      if (l.length == l.g.length) {
          h = l.g.length;
          m = new Float32Array(h << 1);
          for (p = 0; p < h;) b = p++, m[b] = l.g[b];
          l.g = m
      }
      l.g[l.length++] = k;
      l = a.U;
      k = a.R;
      if (l.length == l.g.length) {
          h = l.g.length;
          m = new Float32Array(h << 1);
          for (p = 0; p < h;) b = p++, m[b] = l.g[b];
          l.g = m
      }
      l.g[l.length++] = k;
      l = a.U;
      k = a.ra;
      if (l.length == l.g.length) {
          h = l.g.length;
          m = new Float32Array(h << 1);
          for (p = 0; p < h;) b = p++, m[b] = l.g[b];
          l.g = m
      }
      l.g[l.length++] = k;
      l = a.$;
      k = a.ub;
      if (l.length == l.g.length) {
          h = l.g.length;
          m =
              new Float32Array(h << 1);
          for (p = 0; p < h;) b = p++, m[b] = l.g[b];
          l.g = m
      }
      l.g[l.length++] = k;
      l = a.$;
      a = a.ob;
      if (l.length == l.g.length) {
          k = l.g.length;
          h = new Float32Array(k << 1);
          for (m = 0; m < k;) p = m++, h[p] = l.g[p];
          l.g = h
      }
      l.g[l.length++] = a
  };
  aa.prototype.Qb = function(a) {
      a.mode = 4;
      a.Na = 0;
      a.V.length = 0;
      a.N.length = 0;
      a.U.length = 0;
      a.$.length = 0;
      a.ea.length = 0;
      a.r = 0;
      a.v = 0;
      a.b = 0;
      a.a = 1;
      a.P = 0;
      a.R = 0;
      a.ra = 0;
      a.ub = 0;
      for (var b = a.ob = 0, c = 0, d = this.n; c < d;)
          for (var e = c++, f = 0, g = this.n; f < g;)
              for (var h = f++, k = 0, l = this.n; k < l;) {
                  var n = k++,
                      m = this.A;
                  if (21 != m.l[e |
                          (h | n << m.shift) << m.shift]) {
                      m = this.A;
                      var p = e + 1,
                          t = h + 1,
                          w = n + 1;
                      21 != m.l[e | (h | n << m.shift) << m.shift] != (21 != m.l[e - 1 | (h | n << m.shift) << m.shift]) && (a.P = -1, a.R = 0, a.ra = 0, this.i(a, e, h, n, -1, 0, 0), this.i(a, e, h, w, -1, 0, 0), this.i(a, e, t, w, -1, 0, 0), this.i(a, e, h, n, -1, 0, 0), this.i(a, e, t, w, -1, 0, 0), this.i(a, e, t, n, -1, 0, 0));
                      21 != m.l[e | (h | n << m.shift) << m.shift] != (21 != m.l[e + 1 | (h | n << m.shift) << m.shift]) && (a.P = 1, a.R = 0, a.ra = 0, this.i(a, p, h, n, 1, 0, 0), this.i(a, p, t, n, 1, 0, 0), this.i(a, p, t, w, 1, 0, 0), this.i(a, p, h, n, 1, 0, 0), this.i(a, p, t, w, 1, 0, 0), this.i(a,
                          p, h, w, 1, 0, 0));
                      21 != m.l[e | (h | n << m.shift) << m.shift] != (21 != m.l[e | (h - 1 | n << m.shift) << m.shift]) && (a.P = 0, a.R = -1, a.ra = 0, this.i(a, e, h, n, 0, -1, 0), this.i(a, p, h, n, 0, -1, 0), this.i(a, p, h, w, 0, -1, 0), this.i(a, e, h, n, 0, -1, 0), this.i(a, p, h, w, 0, -1, 0), this.i(a, e, h, w, 0, -1, 0));
                      21 != m.l[e | (h | n << m.shift) << m.shift] != (21 != m.l[e | (h + 1 | n << m.shift) << m.shift]) && (a.P = 0, a.R = 1, a.ra = 0, this.i(a, e, t, n, 0, 1, 0), this.i(a, e, t, w, 0, 1, 0), this.i(a, p, t, w, 0, 1, 0), this.i(a, e, t, n, 0, 1, 0), this.i(a, p, t, w, 0, 1, 0), this.i(a, p, t, n, 0, 1, 0));
                      21 != m.l[e | (h | n << m.shift) <<
                          m.shift] != (21 != m.l[e | (h | n - 1 << m.shift) << m.shift]) && (a.P = 0, a.R = 0, a.ra = -1, this.i(a, e, h, n, 0, 0, -1), this.i(a, e, t, n, 0, 0, -1), this.i(a, p, t, n, 0, 0, -1), this.i(a, e, h, n, 0, 0, -1), this.i(a, p, t, n, 0, 0, -1), this.i(a, p, h, n, 0, 0, -1));
                      21 != m.l[e | (h | n << m.shift) << m.shift] != (21 != m.l[e | (h | n + 1 << m.shift) << m.shift]) && (a.P = 0, a.R = 0, a.ra = 1, this.i(a, e, h, w, 0, 0, 1), this.i(a, p, h, w, 0, 0, 1), this.i(a, p, t, w, 0, 0, 1), this.i(a, e, h, w, 0, 0, 1), this.i(a, p, t, w, 0, 0, 1), this.i(a, e, t, w, 0, 0, 1));
                      ++b
                  }
              }
      console.log("src/Bismuth.hx:751:", "verts=" + 36 * b + " faces=" +
          12 * b)
  };
  aa.I = !0;
  Y.prototype.Y = function(a, b, c, d) {
      null == d && (d = !0);
      null == c && (c = !0);
      null == b && (b = qa.Mb);
      this.canvas = a;
      this.J = new ka(this, a);
      switch (b.Ka) {
          case 0:
              this.input = new v(a, this.J, a, c, d);
              break;
          case 1:
              this.input = new v(a, this.J, window.document.documentElement, c, d);
              break;
          case 2:
              this.input = null
      }
      this.Ga = -1;
      this.Ea();
      this.J.H()
  };
  Y.prototype.Jb = function() {};
  Y.prototype.Ea = function() {};
  Y.prototype.update = function() {};
  Y.prototype.La = function() {};
  Y.I = !0;
  Ka(Z, Y);
  Z.prototype.Y = function(a, b, c, d) {
      this.delay = 30;
      Y.prototype.Y.call(this, a, b, c, d)
  };
  Z.prototype.Ea = function() {
      this.J.frameRate(xa.Nb(60));
      this.scale = 1;
      this.v = new H(this.canvas);
      this.v.xb();
      this.X = [this.v.$b()];
      this.M = 0;
      var a = this.canvas.width,
          b = this.canvas.height,
          c = new V(this.v.h);
      c.$a(a, b, 5121);
      this.m = c;
      a = [256, 128, 64];
      b = Array(a.length);
      c = 0;
      for (var d = a.length; c < d;) {
          var e = c++,
              f = a[e],
              g = new V(this.v.h);
          g.$a(f, f, 5121);
          g.i = 9729;
          g.h.bindTexture(3553, g.aa);
          g.h.texParameteri(3553, 10240, 9729);
          g.h.texParameteri(3553, 10241, 9729);
          g.h.bindTexture(3553, null);
          b[e] = g
      }
      this.i = b;
      this.f = new aa;
      this.Ia();
      this.Da();
      this.J.start();
      this.ca = 0;
      this.da = Math.PI / 4;
      this.qa = Math.PI / 4;
      this.H = this.C = this.A = 0
  };
  Z.prototype.Jb = function() {
      null != this.m && this.m.bc();
      var a = this.canvas.width,
          b = this.canvas.height,
          c = new V(this.v.h);
      c.$a(a, b, 5121);
      this.m = c
  };
  Z.prototype.Ia = function() {
      var a = new da(this.v.h);
      a.C = "\n\t\t\tattribute vec4 position;\n\t\t\tattribute vec4 color;\n\t\t\tattribute vec3 normal;\n\t\t\tattribute vec2 texCoord;\n\n\t\t\tuniform mat4 transform;\n\t\t\tuniform mat4 modelview;\n\t\t\tuniform mat3 normalMatrix;\n\n\t\t\tvarying vec4 vColor;\n\t\t\tvarying vec3 vPosition;\n\t\t\tvarying vec3 vNormal;\n\t\t\tvarying vec2 vTexCoord;\n\n\t\t\tvoid main() {\n\t\t\t\tgl_Position = transform * position;\n\n\t\t\t\tvColor = color;\n\t\t\t\tvPosition = (modelview * position).xyz;\n\t\t\t\tvNormal = normalMatrix * normal;\n\t\t\t\tvTexCoord = texCoord;\n\t\t\t}\n\t\t";
      a.A = "\n\t\t\tprecision mediump float;\n\t\t\tvarying vec4 vColor;\n\t\t\tvarying vec3 vPosition;\n\t\t\tvarying vec3 vNormal;\n\t\t\tvarying vec2 vTexCoord;\n\t\t\tuniform float ambient;\n\t\t\tuniform float diffuse;\n\t\t\tuniform float specular;\n\t\t\tuniform float shininess;\n\t\t\tuniform float emission;\n\t\t\tuniform int numLights;\n\t\t\tuniform vec4 lightPositions[8];\n\t\t\tuniform vec3 lightColors[8];\n\t\t\tuniform vec3 lightNormals[8];\n\n\t\t\tvoid main() {\n\t\t\t\tif (numLights == 0) {\n\t\t\t\t\tgl_FragColor = vColor;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tvec3 eye = normalize(vPosition);\n\t\t\t\tvec3 n = normalize(vNormal);\n\t\t\t\tvec3 color = vColor.xyz;\n\t\t\t\tvec3 ambientTotal = vec3(0);\n\t\t\t\tvec3 diffuseTotal = vec3(0);\n\t\t\t\tvec3 specularTotal = vec3(0);\n\t\t\t\tvec3 emissionTotal = color * emission;\n\n\t\t\t\tif (!gl_FrontFacing) n = -n;\n\n\t\t\t\tfor (int i = 0; i < 8; i++) {\n\t\t\t\t\tif (i == numLights) break;\n\t\t\t\t\tvec4 lp = lightPositions[i];\n\t\t\t\t\tvec3 lc = lightColors[i];\n\t\t\t\t\tvec3 ln = lightNormals[i];\n\t\t\t\t\tbool amb = lp.w == 0.0 && dot(ln, ln) == 0.0;\n\t\t\t\t\tbool dir = lp.w == 0.0;\n\t\t\t\t\tif (amb) {\n\t\t\t\t\t\tambientTotal += lc * color * ambient;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tif (!dir) {\n\t\t\t\t\t\t\tln = normalize(vPosition - lp.xyz);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfloat ldot = -dot(ln, n);\n\t\t\t\t\t\tif (ldot < 0.0) ldot = 0.0;\n\t\t\t\t\t\tdiffuseTotal += lc * color * pow(ldot, 1.0) * diffuse;\n\t\t\t\t\t\tvec3 reflEye = eye - 2.0 * n * dot(eye, n);\n\t\t\t\t\t\tfloat rdot = -dot(reflEye, ln);\n\t\t\t\t\t\tif (rdot < 0.0) rdot = 0.0;\n\t\t\t\t\t\tspecularTotal += lc * (color + vec3(0.3)) * pow(rdot, shininess) * specular;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tgl_FragColor = vec4(ambientTotal + diffuseTotal + specularTotal + emissionTotal, vColor.w);\n\t\t\t}\n\t\t";
      a.ba = !1;
      a.map = new ja;
      a.h.shaderSource(a.m, a.C);
      a.h.compileShader(a.m);
      a.h.getShaderParameter(a.m, 35713) || window.alert(R.i(a.h.getShaderInfoLog(a.m) + "\nsource:\n" + a.C));
      a.h.shaderSource(a.i, a.A);
      a.h.compileShader(a.i);
      a.h.getShaderParameter(a.i, 35713) || window.alert(R.i(a.h.getShaderInfoLog(a.i) + "\nsource:\n" + a.A));
      a.h.attachShader(a.B, a.m);
      a.h.attachShader(a.B, a.i);
      a.h.linkProgram(a.B);
      a.h.getProgramParameter(a.B, 35714) ? a.ba = !0 : q.console.log("link failed: " + a.h.getProgramInfoLog(a.B));
      this.Qa = a;
      a =
          new da(this.v.h);
      a.C = "\n\t\t\tattribute vec4 position;\n\t\t\tattribute vec4 color;\n\t\t\tattribute vec3 normal;\n\t\t\tattribute vec2 texCoord;\n\n\t\t\tuniform mat4 transform;\n\t\t\tuniform mat4 modelview;\n\t\t\tuniform mat3 normalMatrix;\n\n\t\t\tvarying vec4 vColor;\n\t\t\tvarying vec3 vPosition;\n\t\t\tvarying vec3 vNormal;\n\t\t\tvarying vec2 vTexCoord;\n\n\t\t\tvoid main() {\n\t\t\t\tgl_Position = transform * position;\n\n\t\t\t\tvColor = color;\n\t\t\t\tvPosition = (modelview * position).xyz;\n\t\t\t\tvNormal = normalMatrix * normal;\n\t\t\t\tvTexCoord = texCoord;\n\t\t\t}\n\t\t";
      a.A = "\n\t\t\tprecision mediump float;\n\t\t\tuniform sampler2D texture;\n\t\t\tvarying vec4 vColor;\n\t\t\tvarying vec3 vPosition;\n\t\t\tvarying vec3 vNormal;\n\t\t\tvarying vec2 vTexCoord;\n\n\t\t\tvoid main() {\n\t\t\t\tvec3 color = texture2D(texture, vTexCoord).xyz;\n\t\t\t\tcolor = max(color - 0.5, vec3(0)) / 0.5;\n\t\t\t\tgl_FragColor = vec4(color, 1);\n\t\t\t}\n\t\t";
      a.ba = !1;
      a.map = new ja;
      a.h.shaderSource(a.m, a.C);
      a.h.compileShader(a.m);
      a.h.getShaderParameter(a.m, 35713) || window.alert(R.i(a.h.getShaderInfoLog(a.m) +
          "\nsource:\n" + a.C));
      a.h.shaderSource(a.i, a.A);
      a.h.compileShader(a.i);
      a.h.getShaderParameter(a.i, 35713) || window.alert(R.i(a.h.getShaderInfoLog(a.i) + "\nsource:\n" + a.A));
      a.h.attachShader(a.B, a.m);
      a.h.attachShader(a.B, a.i);
      a.h.linkProgram(a.B);
      a.h.getProgramParameter(a.B, 35714) ? a.ba = !0 : q.console.log("link failed: " + a.h.getProgramInfoLog(a.B));
      this.Ja = a
  };
  Z.prototype.Da = function() {
      this.M = 0;
      this.f.$a();
      this.f.Qb(this.X[0])
  };
  Z.prototype.update = function() {
      if (0 < this.delay) this.delay--, this.Ga--;
      else {
          if (0 ==
              this.Ga % 4 && this.f.update()) {
              for (this.M++; this.X.length <= this.M;) this.X.push(this.v.$b());
              this.f.Qb(this.X[this.M])
          }
          0 == this.Ga % 600 && this.Da();
          this.ca += .1 * this.A;
          this.da += .1 * this.C;
          this.qa += .1 * this.H;
          this.A *= .9;
          this.C *= .9;
          this.H *= .9;
          this.A += .01 * Math.sin(.002 * this.Ga);
          this.C += .01 * Math.sin(.003 * this.Ga);
          this.H += .01 * Math.sin(.005 * this.Ga)
      }
  };
  Z.prototype.La = function() {
      var a = this.v,
          b = this.m;
      a.K = b;
      null == b ? (a.h.bindFramebuffer(36160, null), a.h.viewport(0, 0, a.canvas.width, a.canvas.height)) : (a.h.bindFramebuffer(36160,
          b.Za), a.h.viewport(0, 0, b.width, b.height));
      a = this.v;
      a.lb = !0;
      a.Ub = 0;
      a.Vb = 0;
      a.Wb = 2;
      a.Rb = 0;
      a.Sb = 0;
      a.Tb = 0;
      a.Xb = 0;
      a.Yb = 1;
      a.Zb = 0;
      a.D.ec(a.Ub, a.Vb, a.Wb, a.Rb, a.Sb, a.Tb, a.Xb, a.Yb, a.Zb);
      a = this.v;
      a.Ca = this.canvas.width;
      a.sa = this.canvas.height;
      if (null == a.K) {
          if (null == a.K) {
              b = a.canvas.width;
              var c = a.canvas.height
          } else b = a.K.width, c = a.K.height;
          a.h.viewport(0, 0, b, c)
      }
      b = Math.PI / 3;
      a.Sa = b;
      a.kb = .1;
      a.jb = 1E4;
      a.Ba.perspective(b, a.Ca / a.sa, .1, 1E4);
      a = this.v;
      a.qb();
      b = this.v;
      if (1 != b.L) throw Error("begin scene before clear scene");
      b.h.clearColor(.1, .11, .14, 1);
      b.h.clearDepth(1);
      b.h.clear(16640);
      var d = 0 * Math.PI;
      b = .3333333333333333 * Math.PI;
      var e = this.v;
      c = 3 * Math.cos(d);
      d = 3 * Math.sin(d);
      if (1 != e.L) throw Error("begin scene before setting lights");
      if (8 == e.O) throw Error("too many lights");
      e = e.S[e.O++];
      e.r = .4;
      e.v = .4;
      e.b = .4;
      e.na = c;
      e.oa = 2.0999999999999996;
      e.pa = d;
      e.Oa = 1;
      e.ka = 0;
      e.la = 0;
      e.ma = 0;
      e = this.v;
      c = 3 * Math.cos(b);
      b = 3 * Math.sin(b);
      if (1 != e.L) throw Error("begin scene before setting lights");
      if (8 == e.O) throw Error("too many lights");
      e = e.S[e.O++];
      e.r = .4;
      e.v = .4;
      e.b = .4;
      e.na = c;
      e.oa = -2.0999999999999996;
      e.pa = b;
      e.Oa = 1;
      e.ka = 0;
      e.la = 0;
      e.ma = 0;
      d = .6666666666666666 * Math.PI;
      b = Math.PI;
      e = this.v;
      c = 3 * Math.cos(d);
      d = 3 * Math.sin(d);
      if (1 != e.L) throw Error("begin scene before setting lights");
      if (8 == e.O) throw Error("too many lights");
      e = e.S[e.O++];
      e.r = .4;
      e.v = .4;
      e.b = .4;
      e.na = c;
      e.oa = 2.0999999999999996;
      e.pa = d;
      e.Oa = 1;
      e.ka = 0;
      e.la = 0;
      e.ma = 0;
      e = this.v;
      c = 3 * Math.cos(b);
      b = 3 * Math.sin(b);
      if (1 != e.L) throw Error("begin scene before setting lights");
      if (8 == e.O) throw Error("too many lights");
      e = e.S[e.O++];
      e.r = .4;
      e.v = .4;
      e.b = .4;
      e.na = c;
      e.oa = -2.0999999999999996;
      e.pa = b;
      e.Oa = 1;
      e.ka = 0;
      e.la = 0;
      e.ma = 0;
      d = 1.3333333333333333 * Math.PI;
      b = 1.6666666666666667 * Math.PI;
      e = this.v;
      c = 3 * Math.cos(d);
      d = 3 * Math.sin(d);
      if (1 != e.L) throw Error("begin scene before setting lights");
      if (8 == e.O) throw Error("too many lights");
      e = e.S[e.O++];
      e.r = .4;
      e.v = .4;
      e.b = .4;
      e.na = c;
      e.oa = 2.0999999999999996;
      e.pa = d;
      e.Oa = 1;
      e.ka = 0;
      e.la = 0;
      e.ma = 0;
      e = this.v;
      c = 3 * Math.cos(b);
      b = 3 * Math.sin(b);
      if (1 != e.L) throw Error("begin scene before setting lights");
      if (8 ==
          e.O) throw Error("too many lights");
      e = e.S[e.O++];
      e.r = .4;
      e.v = .4;
      e.b = .4;
      e.na = c;
      e.oa = -2.0999999999999996;
      e.pa = b;
      e.Oa = 1;
      e.ka = 0;
      e.la = 0;
      e.ma = 0;
      b = this.v;
      if (1 != b.L) throw Error("begin scene before setting materials");
      b.Hb = 1.5;
      b = this.v;
      if (1 != b.L) throw Error("begin scene before setting materials");
      b.Gb = 8;
      b = this.v;
      if (1 != b.L) throw Error("begin scene before setting materials");
      b.Fb = 1;
      this.v.Xa = this.Qa;
      this.v.ga.Bb(this.ca, 1, 0, 0);
      this.v.ga.Bb(this.da, 0, 1, 0);
      this.v.ga.Bb(this.qa, 0, 0, 1);
      b = this.scale;
      null == b && (b = 1);
      this.v.ga.Cb(this.scale, this.scale, b);
      this.v.ga.Cb(.05, .05, .05);
      b = (600 - this.Ga % 600) / 5 | 0;
      c = this.M;
      this.v.sc(this.X[c < b ? c : b]);
      if (1 != a.L) throw Error("scene already ended");
      a.L = !1;
      a.h.flush();
      this.v.lb = !1;
      a = this.v;
      a.Ca = 1;
      a.sa = 1;
      null == a.K && (null == a.K ? (b = a.canvas.width, c = a.canvas.height) : (b = a.K.width, c = a.K.height), a.h.viewport(0, 0, b, c));
      b = Math.PI / 3;
      a.Sa = b;
      a.kb = .1;
      a.jb = 1E4;
      a.Ba.perspective(b, a.Ca / a.sa, .1, 1E4);
      a = this.v;
      b = this.i[0];
      a.K = b;
      null == b ? (a.h.bindFramebuffer(36160, null), a.h.viewport(0, 0, a.canvas.width,
          a.canvas.height)) : (a.h.bindFramebuffer(36160, b.Za), a.h.viewport(0, 0, b.width, b.height));
      this.v.Xa = this.Ja;
      a = this.v;
      a.qb();
      b = this.v;
      if (1 != b.L) throw Error("begin scene before clear scene");
      b.h.clearColor(0, 0, 0, 1);
      b.h.clearDepth(1);
      b.h.clear(16640);
      this.v.j = this.m;
      this.v.rect(0, 0, 1, 1);
      if (1 != a.L) throw Error("scene already ended");
      a.L = !1;
      a.h.flush();
      this.v.Xa = null;
      a = 1;
      for (b = this.i.length; a < b;) {
          c = a++;
          e = this.v;
          d = this.i[c];
          e.K = d;
          null == d ? (e.h.bindFramebuffer(36160, null), e.h.viewport(0, 0, e.canvas.width, e.canvas.height)) :
              (e.h.bindFramebuffer(36160, d.Za), e.h.viewport(0, 0, d.width, d.height));
          e = this.v;
          e.qb();
          d = this.v;
          if (1 != d.L) throw Error("begin scene before clear scene");
          d.h.clearColor(0, 0, 0, 1);
          d.h.clearDepth(1);
          d.h.clear(16640);
          this.v.j = this.i[c - 1];
          this.v.rect(0, 0, 1, 1);
          if (1 != e.L) throw Error("scene already ended");
          e.L = !1;
          e.h.flush()
      }
      a = this.v;
      a.K = null;
      a.h.bindFramebuffer(36160, null);
      a.h.viewport(0, 0, a.canvas.width, a.canvas.height);
      this.v.Xa = null;
      this.v.lb = !1;
      a = this.v;
      a.Ca = 1;
      a.sa = 1;
      null == a.K && (null == a.K ? (b = a.canvas.width,
          c = a.canvas.height) : (b = a.K.width, c = a.K.height), a.h.viewport(0, 0, b, c));
      b = Math.PI / 3;
      a.Sa = b;
      a.kb = .1;
      a.jb = 1E4;
      a.Ba.perspective(b, a.Ca / a.sa, .1, 1E4);
      this.v.h.disable(2929);
      a = this.v;
      a.qb();
      b = this.v;
      if (1 != b.L) throw Error("begin scene before clear scene");
      b.h.clearColor(0, 0, 0, 1);
      b.h.clearDepth(1);
      b.h.clear(16640);
      this.v.j = this.m;
      this.v.rect(0, 0, 1, 1);
      this.v.h.blendFuncSeparate(770, 1, 1, 1);
      b = this.v;
      b.Wa = 1;
      b.Va = 1;
      b.Ua = 1;
      b.Ta = .15;
      this.v.j = this.i[2];
      this.v.rect(-.05, -.05, 1.1, 1.1);
      b = this.v;
      b.Wa = 1;
      b.Va = 1;
      b.Ua = 1;
      b.Ta =
          .08;
      this.v.j = this.i[1];
      this.v.rect(0, 0, 1, 1);
      b = this.v;
      b.Wa = 1;
      b.Va = 1;
      b.Ua = 1;
      b.Ta = .05;
      this.v.j = this.i[0];
      this.v.rect(0, 0, 1, 1);
      this.v.h.blendFuncSeparate(770, 771, 1, 1);
      if (1 != a.L) throw Error("scene already ended");
      a.L = !1;
      a.h.flush();
      this.v.h.enable(2929)
  };
  Z.m = function() {
      new Z(window.document.getElementById("canvas"))
  };
  Z.I = !0;
  Da.i = function(a, b) {
      b = a.indexOf(b); - 1 != b && a.splice(b, 1)
  };
  Da.I = !0;
  Math.I = !0;
  R.i = function(a) {
      return la.i(a, "")
  };
  R.random = function(a) {
      return 0 >= a ? 0 : Math.floor(Math.random() * a)
  };
  R.I = !0;
  Ka(W, Error);
  W.i = function(a) {
      return a instanceof W ? a : a instanceof Error ? new W(a.message, null, a) : new ua(a, null, a)
  };
  W.m = function(a) {
      return a instanceof W ? a.i : a instanceof Error ? a : new ua(a)
  };
  W.I = !0;
  Ka(ua, W);
  ua.I = !0;
  ja.I = !0;
  ta.prototype.dc = function() {
      return this.i < this.g.length
  };
  ta.prototype.next = function() {
      return this.g[this.i++]
  };
  ta.I = !0;
  la.i = function(a, b) {
      if (null == a) return "null";
      if (5 <= b.length) return "<...>";
      var c = typeof a;
      "function" == c && (a.I || a.Ob) && (c = "object");
      switch (c) {
          case "function":
              return "<function>";
          case "object":
              if (a.Ra) {
                  var d = va[a.Ra].pb[a.Ka];
                  c = d.ib;
                  if (d.Pb) {
                      b += "\t";
                      var e = [],
                          f = 0;
                      for (d = d.Pb; f < d.length;) {
                          var g = d[f];
                          f += 1;
                          e.push(la.i(a[g], b))
                      }
                      return c + "(" + e.join(",") + ")"
                  }
                  return c
              }
              if (a instanceof Array) {
                  c = "[";
                  b += "\t";
                  e = 0;
                  for (f = a.length; e < f;) d = e++, c += (0 < d ? "," : "") + la.i(a[d], b);
                  return c + "]"
              }
              try {
                  e = a.toString
              } catch (h) {
                  return "???"
              }
              if (null != e && e != Object.toString && "function" == typeof e && (c = a.toString(), "[object Object]" != c)) return c;
              c = "{\n";
              b += "\t";
              e = null != a.hasOwnProperty;
              f = null;
              for (f in a) e && !a.hasOwnProperty(f) ||
                  "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c += ", \n"), c += b + f + " : " + la.i(a[f], b));
              b = b.substring(1);
              return c + ("\n" + b + "}");
          case "string":
              return a;
          default:
              return String(a)
      }
  };
  la.I = !0;
  Ca.i = function(a) {
      var b = {
              premultipliedAlpha: !1
          },
          c = a.getContext("webgl", b);
      if (null != c) return c;
      a = a.getContext("experimental-webgl", b);
      return null != a ? a : null
  };
  Ca.I = !0;
  var xa = va["pot.core.FrameRate"] = {
      Ob: !0,
      pb: null,
      mc: {
          ib: "Auto",
          Ka: 0,
          Ra: "pot.core.FrameRate",
          toString: pa
      },
      Nb: (wa = function(a) {
          return {
              Ka: 1,
              tc: a,
              Ra: "pot.core.FrameRate",
              toString: pa
          }
      }, wa.ib = "Fixed", wa.Pb = ["fps"], wa)
  };
  xa.pb = [xa.mc, xa.Nb];
  ka.prototype.frameRate = function(a) {
      switch (a.Ka) {
          case 0:
              this.m.J(60);
              this.m.A = !0;
              break;
          case 1:
              this.m.J(a.tc), this.m.A = !1
      }
  };
  ka.prototype.H = function() {
      var a = this;
      this.C = new ResizeObserver(function() {
          a.A() && a.i.Jb()
      });
      this.C.observe(this.canvas);
      this.C.observe(window.document.documentElement);
      this.i.Jb()
  };
  ka.prototype.A = function() {
      var a = this.canvas.getBoundingClientRect(),
          b = a.width;
      a = a.height;
      var c = window.devicePixelRatio;
      return this.width != b || this.height != a || this.za != c ? (this.width = b, this.height = a, this.za = c, this.canvas.width = this.width * this.za + .5 | 0, this.canvas.height = this.height * this.za + .5 | 0, !0) : !1
  };
  ka.prototype.start = function() {
      this.m.start()
  };
  ka.prototype.update = function() {
      this.i.Ga++;
      null != this.i.input && this.i.input.update();
      this.i.update()
  };
  ka.prototype.La = function() {
      this.i.La()
  };
  ka.I = !0;
  H.prototype.zb = function() {
      this.h.getExtension("OES_texture_float");
      this.h.getExtension("OES_texture_float_linear");
      this.h.getExtension("OES_texture_half_float");
      this.h.getExtension("OES_texture_half_float_linear");
      this.h.getExtension("WEBGL_color_buffer_float");
      this.h.getExtension("OES_element_index_uint");
      this.h.disable(2929);
      this.h.enable(3042);
      this.h.frontFace(2305);
      this.h.cullFace(1029);
      this.h.disable(2884);
      this.h.blendFuncSeparate(770, 771, 1, 1);
      this.h.pixelStorei(37440, !0)
  };
  H.prototype.xb = function() {
      this.h.enable(2929);
      this.h.frontFace(2305);
      this.h.cullFace(1029);
      this.h.enable(2884);
      this.lb = !1;
      if (null == this.K) {
          var a =
              this.canvas.width;
          var b = this.canvas.height
      } else a = this.K.width, b = this.K.height;
      this.h.viewport(0, 0, a, b);
      this.j = null
  };
  H.prototype.$b = function() {
      return new na(this.h)
  };
  H.prototype.oc = function() {
      this.ga = new T;
      this.D = new T;
      this.M = new T;
      this.J = new T;
      this.Ba = new T;
      this.ca = new T
  };
  H.prototype.vb = function() {
      var a = this.X = new da(this.h);
      a.C = "\n\t\tattribute vec4 position;\n\t\tattribute vec4 color;\n\t\tattribute vec3 normal;\n\t\tattribute vec2 texCoord;\n\n\t\tuniform mat4 transform;\n\t\tuniform mat4 modelview;\n\t\tuniform mat3 normalMatrix;\n\n\t\tvarying vec4 vColor;\n\t\tvarying vec3 vPosition;\n\t\tvarying vec3 vNormal;\n\t\tvarying vec2 vTexCoord;\n\n\t\tvoid main() {\n\t\t\tgl_Position = transform * position;\n\n\t\t\tvColor = color;\n\t\t\tvPosition = (modelview * position).xyz;\n\t\t\tvNormal = normalMatrix * normal;\n\t\t\tvTexCoord = texCoord;\n\t\t}\n\t";
      a.ba = !1;
      a = this.X;
      a.A = "\n\t\tprecision highp float;\n\t\tvarying vec4 vColor;\n\t\tvarying vec3 vPosition;\n\t\tvarying vec3 vNormal;\n\t\tvarying vec2 vTexCoord;\n\t\tuniform float ambient;\n\t\tuniform float diffuse;\n\t\tuniform float specular;\n\t\tuniform float shininess;\n\t\tuniform float emission;\n\t\tuniform int numLights;\n\t\tuniform vec4 lightPositions[8];\n\t\tuniform vec3 lightColors[8];\n\t\tuniform vec3 lightNormals[8];\n\n\t\tvec3 safeNormalize(vec3 v) {\n\t\t\treturn dot(v, v) > 0.0 ? normalize(v) : vec3(0);\n\t\t}\n\n\t\tvoid main() {\n\t\t\tif (numLights == 0) {\n\t\t\t\tgl_FragColor = vColor;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvec3 eye = safeNormalize(vPosition);\n\t\t\tvec3 n = safeNormalize(vNormal);\n\t\t\t\n\t\t\tvec3 color = vColor.xyz;\n\t\t\tvec3 ambientTotal = vec3(0);\n\t\t\tvec3 diffuseTotal = vec3(0);\n\t\t\tvec3 specularTotal = vec3(0);\n\t\t\tvec3 emissionTotal = color * emission;\n\n\t\t\tif (!gl_FrontFacing) n = -n;\n\n\t\t\tfor (int i = 0; i < 8; i++) {\n\t\t\t\tif (i == numLights) break;\n\t\t\t\tvec4 lp = lightPositions[i];\n\t\t\t\tvec3 lc = lightColors[i];\n\t\t\t\tvec3 ln = lightNormals[i];\n\t\t\t\tbool amb = lp.w == 0.0 && dot(ln, ln) == 0.0;\n\t\t\t\tbool dir = lp.w == 0.0;\n\t\t\t\tif (amb) {\n\t\t\t\t\tambientTotal += lc * color * ambient;\n\t\t\t\t} else {\n\t\t\t\t\tif (!dir) {\n\t\t\t\t\t\tln = safeNormalize(vPosition - lp.xyz);\n\t\t\t\t\t\t// TODO: spot light\n\t\t\t\t\t}\n\t\t\t\t\tfloat ldot = -dot(ln, n);\n\t\t\t\t\tif (ldot < 0.0) ldot = 0.0;\n\t\t\t\t\tdiffuseTotal += lc * color * ldot * diffuse;\n\t\t\t\t\tif (ldot > 0.0) {\n\t\t\t\t\t\tvec3 reflEye = eye - 2.0 * n * dot(eye, n);\n\t\t\t\t\t\tfloat rdot = -dot(reflEye, ln);\n\t\t\t\t\t\tif (rdot < 0.0) rdot = 0.0;\n\t\t\t\t\t\tspecularTotal += lc * pow(rdot, shininess) * specular;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tgl_FragColor = vec4(ambientTotal + diffuseTotal + specularTotal + emissionTotal, vColor.w);\n\t\t}\n\t";
      a.ba = !1;
      a = this.X;
      a.map = new ja;
      a.h.shaderSource(a.m, a.C);
      a.h.compileShader(a.m);
      a.h.getShaderParameter(a.m, 35713) || window.alert(R.i(a.h.getShaderInfoLog(a.m) + "\nsource:\n" + a.C));
      a.h.shaderSource(a.i, a.A);
      a.h.compileShader(a.i);
      a.h.getShaderParameter(a.i, 35713) || window.alert(R.i(a.h.getShaderInfoLog(a.i) + "\nsource:\n" + a.A));
      a.h.attachShader(a.B, a.m);
      a.h.attachShader(a.B, a.i);
      a.h.linkProgram(a.B);
      a.h.getProgramParameter(a.B, 35714) ? a.ba = !0 : q.console.log("link failed: " + a.h.getProgramInfoLog(a.B));
      a = this.Y =
          new da(this.h);
      a.C = "\n\t\tattribute vec4 position;\n\t\tattribute vec4 color;\n\t\tattribute vec3 normal;\n\t\tattribute vec2 texCoord;\n\n\t\tuniform mat4 transform;\n\t\tuniform mat4 modelview;\n\t\tuniform mat3 normalMatrix;\n\n\t\tvarying vec4 vColor;\n\t\tvarying vec3 vPosition;\n\t\tvarying vec3 vNormal;\n\t\tvarying vec2 vTexCoord;\n\n\t\tvoid main() {\n\t\t\tgl_Position = transform * position;\n\n\t\t\tvColor = color;\n\t\t\tvPosition = (modelview * position).xyz;\n\t\t\tvNormal = normalMatrix * normal;\n\t\t\tvTexCoord = texCoord;\n\t\t}\n\t";
      a.ba = !1;
      a = this.Y;
      a.A = "\n\t\tprecision highp float;\n\t\tuniform sampler2D texture;\n\t\tvarying vec4 vColor;\n\t\tvarying vec3 vPosition;\n\t\tvarying vec3 vNormal;\n\t\tvarying vec2 vTexCoord;\n\t\tuniform float ambient;\n\t\tuniform float diffuse;\n\t\tuniform float specular;\n\t\tuniform float shininess;\n\t\tuniform float emission;\n\t\tuniform int numLights;\n\t\tuniform vec4 lightPositions[8];\n\t\tuniform vec3 lightColors[8];\n\t\tuniform vec3 lightNormals[8];\n\n\t\tvec3 safeNormalize(vec3 v) {\n\t\t\treturn dot(v, v) > 0.0 ? normalize(v) : vec3(0);\n\t\t}\n\n\t\tvoid main() {\n\t\t\tvec4 texMulColor = texture2D(texture, vTexCoord) * vColor;\n\t\t\tif (numLights == 0) {\n\t\t\t\tgl_FragColor = texMulColor;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvec3 eye = safeNormalize(vPosition);\n\t\t\tvec3 n = safeNormalize(vNormal);\n\t\t\tvec3 color = texMulColor.xyz;\n\t\t\tvec3 ambientTotal = vec3(0);\n\t\t\tvec3 diffuseTotal = vec3(0);\n\t\t\tvec3 specularTotal = vec3(0);\n\t\t\tvec3 emissionTotal = color * emission;\n\n\t\t\tif (!gl_FrontFacing) n = -n;\n\n\t\t\tfor (int i = 0; i < 8; i++) {\n\t\t\t\tif (i == numLights) break;\n\t\t\t\tvec4 lp = lightPositions[i];\n\t\t\t\tvec3 lc = lightColors[i];\n\t\t\t\tvec3 ln = lightNormals[i];\n\t\t\t\tbool amb = lp.w == 0.0 && dot(ln, ln) == 0.0;\n\t\t\t\tbool dir = lp.w == 0.0;\n\t\t\t\tif (amb) {\n\t\t\t\t\tambientTotal += lc * color * ambient;\n\t\t\t\t} else {\n\t\t\t\t\tif (!dir) {\n\t\t\t\t\t\tln = safeNormalize(vPosition - lp.xyz);\n\t\t\t\t\t\t// TODO: spot light\n\t\t\t\t\t}\n\t\t\t\t\tfloat ldot = -dot(ln, n);\n\t\t\t\t\tif (ldot < 0.0) ldot = 0.0;\n\t\t\t\t\tdiffuseTotal += lc * color * ldot * diffuse;\n\t\t\t\t\tif (ldot > 0.0) {\n\t\t\t\t\t\tvec3 reflEye = eye - 2.0 * n * dot(eye, n);\n\t\t\t\t\t\tfloat rdot = -dot(reflEye, ln);\n\t\t\t\t\t\tif (rdot < 0.0) rdot = 0.0;\n\t\t\t\t\t\tspecularTotal += lc * pow(rdot, shininess) * specular;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tgl_FragColor = vec4(ambientTotal + diffuseTotal + specularTotal + emissionTotal, texMulColor.w);\n\t\t}\n\t";
      a.ba = !1;
      a = this.Y;
      a.map = new ja;
      a.h.shaderSource(a.m, a.C);
      a.h.compileShader(a.m);
      a.h.getShaderParameter(a.m, 35713) || window.alert(R.i(a.h.getShaderInfoLog(a.m) + "\nsource:\n" + a.C));
      a.h.shaderSource(a.i, a.A);
      a.h.compileShader(a.i);
      a.h.getShaderParameter(a.i, 35713) || window.alert(R.i(a.h.getShaderInfoLog(a.i) + "\nsource:\n" + a.A));
      a.h.attachShader(a.B, a.m);
      a.h.attachShader(a.B, a.i);
      a.h.linkProgram(a.B);
      a.h.getProgramParameter(a.B, 35714) ? a.ba = !0 : q.console.log("link failed: " + a.h.getProgramInfoLog(a.B));
      this.Xa =
          null
  };
  H.prototype.yb = function() {
      this.V = new B(this.h, "position", 3);
      this.N = new B(this.h, "color", 4);
      this.U = new B(this.h, "normal", 3);
      this.$ = new B(this.h, "texCoord", 2);
      this.ea = new Ba(this.h)
  };
  H.prototype.Da = function() {
      return null != this.Xa ? this.Xa : null != this.j ? this.Y : this.X
  };
  H.prototype.viewport = function(a, b, c, d) {
      this.h.viewport(a, (null == this.K ? this.canvas.height : this.K.height) - d - b, c, d)
  };
  H.prototype.qb = function() {
      if (0 != this.L) throw Error("scene already begun");
      this.L = !0;
      this.ga.vc();
      this.O = 0;
      this.j = null;
      this.Ta = this.Ua = this.Va = this.Wa = 1;
      this.m = this.i = this.H = this.C = this.A = 0;
      this.Fb = this.Ja = 1;
      this.Hb = 0;
      this.Gb = 10;
      this.Qa = 0;
      this.lb || (this.Ea = .5 * this.Ca, this.Ia = .5 * this.sa, this.wb = -this.sa / (2 * Math.tan(.5 * this.Sa)), this.D.ec(this.Ea, this.Ia, this.wb, this.Ea, this.Ia, 0, 0, -1, 0))
  };
  H.prototype.clear = function(a, b, c, d) {
      null == d && (d = 1);
      if (1 != this.L) throw Error("begin scene before clear scene");
      this.h.clearColor(a, b, c, d);
      this.h.clearDepth(1);
      this.h.clear(16640)
  };
  H.prototype.createShader = function(a, b) {
      var c = new da(this.h);
      c.C = a;
      c.A = b;
      c.ba = !1;
      c.map = new ja;
      c.h.shaderSource(c.m, c.C);
      c.h.compileShader(c.m);
      c.h.getShaderParameter(c.m, 35713) || window.alert(R.i(c.h.getShaderInfoLog(c.m) + "\nsource:\n" + c.C));
      c.h.shaderSource(c.i, c.A);
      c.h.compileShader(c.i);
      c.h.getShaderParameter(c.i, 35713) || window.alert(R.i(c.h.getShaderInfoLog(c.i) + "\nsource:\n" + c.A));
      c.h.attachShader(c.B, c.m);
      c.h.attachShader(c.B, c.i);
      c.h.linkProgram(c.B);
      c.h.getProgramParameter(c.B, 35714) ? c.ba = !0 : q.console.log("link failed: " + c.h.getProgramInfoLog(c.B));
      return c
  };
  H.prototype.createTexture = function(a, b, c) {
      null == c && (c = 5121);
      var d = new V(this.h);
      d.$a(a, b, c);
      return d
  };
  H.prototype.scale = function(a, b, c) {
      null == c && (c = 1);
      this.ga.Cb(a, b, c)
  };
  H.prototype.transform = function(a, b, c, d, e, f, g, h, k, l, n, m, p, t, w, A) {
      this.ga.qc(a, b, c, d, e, f, g, h, k, l, n, m, p, t, w, A)
  };
  H.prototype.perspective = function(a, b, c) {
      null == a && (a = Math.PI / 3);
      null == b && (b = .1);
      null == c && (c = 1E4);
      this.Sa = a;
      this.kb = b;
      this.jb = c;
      this.Ba.perspective(a, this.Ca / this.sa, b, c)
  };
  H.prototype.da = function(a) {
      if (1 != this.L) throw Error("begin scene before begin shape");
      this.pc = a;
      this.Na = 0;
      this.V.length = 0;
      this.N.length = 0;
      this.U.length = 0;
      this.$.length = 0;
      this.ea.length = 0
  };
  H.prototype.image = function(a, b, c, d, e, f, g, h, k) {
      var l = this.j,
          n = this.s;
      this.j = a;
      this.s = 0;
      this.da(5);
      this.C = this.A = 0;
      this.H = -1;
      a = b;
      var m = c;
      if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
      switch (this.s) {
          case 0:
              a = b * this.j.F, m = c * this.j.G
      }
      this.i = a;
      this.m = 1 - m;
      this.u(f, g, 0);
      a = b;
      m = c + e;
      if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
      switch (this.s) {
          case 0:
              a = b * this.j.F, m *= this.j.G
      }
      this.i = a;
      this.m = 1 - m;
      this.u(f, g + k, 0);
      a = b + d;
      m = c;
      if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
      switch (this.s) {
          case 0:
              a *= this.j.F, m = c * this.j.G
      }
      this.i = a;
      this.m = 1 - m;
      this.u(f + h, g, 0);
      b += d;
      c += e;
      if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
      switch (this.s) {
          case 0:
              b *= this.j.F, c *= this.j.G
      }
      this.i = b;
      this.m = 1 - c;
      this.u(f + h, g + k, 0);
      this.qa();
      this.j =
          l;
      this.s = n
  };
  H.prototype.rect = function(a, b, c, d) {
      var e = this.s;
      this.s = 1;
      this.da(5);
      this.C = this.A = 0;
      this.H = -1;
      var f = 0,
          g = 0;
      if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
      switch (this.s) {
          case 0:
              f *= this.j.F, g *= this.j.G
      }
      this.i = f;
      this.m = 1 - g;
      this.u(a, b, 0);
      f = 0;
      g = 1;
      if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
      switch (this.s) {
          case 0:
              f *= this.j.F, g *= this.j.G
      }
      this.i = f;
      this.m = 1 - g;
      this.u(a,
          b + d, 0);
      f = 1;
      g = 0;
      if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
      switch (this.s) {
          case 0:
              f *= this.j.F, g *= this.j.G
      }
      this.i = f;
      this.m = 1 - g;
      this.u(a + c, b, 0);
      g = f = 1;
      if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
      switch (this.s) {
          case 0:
              f *= this.j.F, g *= this.j.G
      }
      this.i = f;
      this.m = 1 - g;
      this.u(a + c, b + d, 0);
      this.qa();
      this.s = e
  };
  H.prototype.box = function(a, b, c) {
      var d = this.s;
      this.s = 1;
      this.da(4);
      a *= .5;
      b *=
          .5;
      c *= .5;
      var e = -a,
          f = -b,
          g = -c;
      if (null != this.j) {
          this.A = -1;
          var h = this.H = this.C = 0,
              k = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, f, g);
          h = 0;
          k = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, f, c);
          k = h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, b, c);
          k = h = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, f, g);
          k = h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, b, c);
          h = 1;
          k = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, b, g);
          this.A = 1;
          k = h = this.H = this.C = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, f, g);
          h = 0;
          k = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, b, g);
          k = h =
              1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, b, c);
          k = h = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, f, g);
          k = h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, b, c);
          h = 1;
          k = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, f, c);
          this.A = 0;
          this.C = -1;
          k = h = this.H = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, f, g);
          h =
              0;
          k = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, f, g);
          k = h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, f, c);
          k = h = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, f, g);
          k = h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, f, c);
          h = 1;
          k = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, f, c);
          this.A = 0;
          this.C = 1;
          k = h = this.H =
              0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, b, g);
          h = 0;
          k = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, b, c);
          k = h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, b, c);
          k = h = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, b, g);
          k = h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, b, c);
          h = 1;
          k = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, b, g);
          this.C = this.A = 0;
          this.H = -1;
          k = h = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, f, g);
          h = 0;
          k = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, b, g);
          k =
              h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, b, g);
          k = h = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(e, f, g);
          k = h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, b, g);
          h = 1;
          k = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  h *= this.j.F, k *= this.j.G
          }
          this.i = h;
          this.m = 1 - k;
          this.u(a, f, g);
          this.C = this.A = 0;
          this.H = 1;
          h = g = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  g *= this.j.F, h *= this.j.G
          }
          this.i = g;
          this.m = 1 - h;
          this.u(e, f, c);
          g =
              0;
          h = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  g *= this.j.F, h *= this.j.G
          }
          this.i = g;
          this.m = 1 - h;
          this.u(a, f, c);
          h = g = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  g *= this.j.F, h *= this.j.G
          }
          this.i = g;
          this.m = 1 - h;
          this.u(a, b, c);
          h = g = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  g *= this.j.F, h *= this.j.G
          }
          this.i = g;
          this.m = 1 - h;
          this.u(e, f, c);
          g = f = 1;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  f *= this.j.F, g *= this.j.G
          }
          this.i = f;
          this.m = 1 - g;
          this.u(a, b, c);
          a = 1;
          f = 0;
          if (1 != this.s && null == this.j) throw Error("set texture before calling texCoord when texture mode is not Normal");
          switch (this.s) {
              case 0:
                  a *= this.j.F, f *= this.j.G
          }
          this.i = a;
          this.m = 1 - f
      } else this.A = -1, this.H = this.C = 0, this.u(e, f,
              g), this.u(e, f, c), this.u(e, b, c), this.u(e, f, g), this.u(e, b, c), this.u(e, b, g), this.A = 1, this.H = this.C = 0, this.u(a, f, g), this.u(a, b, g), this.u(a, b, c), this.u(a, f, g), this.u(a, b, c), this.u(a, f, c), this.A = 0, this.C = -1, this.H = 0, this.u(e, f, g), this.u(a, f, g), this.u(a, f, c), this.u(e, f, g), this.u(a, f, c), this.u(e, f, c), this.A = 0, this.C = 1, this.H = 0, this.u(e, b, g), this.u(e, b, c), this.u(a, b, c), this.u(e, b, g), this.u(a, b, c), this.u(a, b, g), this.C = this.A = 0, this.H = -1, this.u(e, f, g), this.u(e, b, g), this.u(a, b, g), this.u(e, f, g), this.u(a, b, g),
          this.u(a, f, g), this.C = this.A = 0, this.H = 1, this.u(e, f, c), this.u(a, f, c), this.u(a, b, c), this.u(e, f, c), this.u(a, b, c);
      this.u(e, b, c);
      this.qa();
      this.s = d
  };
  H.prototype.aa = function(a) {
      this.j = a
  };
  H.prototype.u = function(a, b, c) {
      null == c && (c = 0);
      var d = this.ea,
          e = this.Na++;
      if (d.length == d.g.length) {
          for (var f = d.g.length, g = new Int32Array(f << 1), h = 0; h < f;) {
              var k = h++;
              g[k] = d.g[k]
          }
          d.g = g
      }
      d.g[d.length++] = e;
      d = this.V;
      if (d.length == d.g.length) {
          e = d.g.length;
          f = new Float32Array(e << 1);
          for (g = 0; g < e;) h = g++, f[h] = d.g[h];
          d.g = f
      }
      d.g[d.length++] =
          a;
      a = this.V;
      if (a.length == a.g.length) {
          d = a.g.length;
          e = new Float32Array(d << 1);
          for (f = 0; f < d;) g = f++, e[g] = a.g[g];
          a.g = e
      }
      a.g[a.length++] = b;
      b = this.V;
      if (b.length == b.g.length) {
          a = b.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = b.g[f];
          b.g = d
      }
      b.g[b.length++] = c;
      c = this.N;
      b = this.Wa;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.N;
      b = this.Va;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.N;
      b = this.Ua;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.N;
      b = this.Ta;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.U;
      b = this.A;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.U;
      b = this.C;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a <<
              1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.U;
      b = this.H;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.$;
      b = this.i;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.$;
      b = this.m;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b
  };
  H.prototype.qa = function() {
      var a = this.Da(),
          b = a.B;
      this.M.sb(this.D, this.ga);
      this.J.inverse(this.M);
      this.J.lc(this.J);
      if (Object.prototype.hasOwnProperty.call(a.map.o, "model")) var c = a.map.o.model;
      else c = a.h.getUniformLocation(a.B, "model"), a.map.o.model = c;
      null != c && a.ha("model", this.ga.g);
      Object.prototype.hasOwnProperty.call(a.map.o, "view") ? c = a.map.o.view : (c = a.h.getUniformLocation(a.B, "view"), a.map.o.view = c);
      null != c && a.ha("view", this.D.g);
      Object.prototype.hasOwnProperty.call(a.map.o, "projection") ? c = a.map.o.projection : (c = a.h.getUniformLocation(a.B,
          "projection"), a.map.o.projection = c);
      null != c && a.ha("projection", this.Ba.g);
      Object.prototype.hasOwnProperty.call(a.map.o, "transform") ? c = a.map.o.transform : (c = a.h.getUniformLocation(a.B, "transform"), a.map.o.transform = c);
      null != c && (this.ca.sb(this.Ba, this.M), a.ha("transform", this.ca.g));
      Object.prototype.hasOwnProperty.call(a.map.o, "modelview") ? c = a.map.o.modelview : (c = a.h.getUniformLocation(a.B, "modelview"), a.map.o.modelview = c);
      null != c && a.ha("modelview", this.M.g);
      Object.prototype.hasOwnProperty.call(a.map.o,
          "normalMatrix") ? c = a.map.o.normalMatrix : (c = a.h.getUniformLocation(a.B, "normalMatrix"), a.map.o.normalMatrix = c);
      null != c && (this.J.kc(), a.ha("normalMatrix", this.J.ja));
      null != this.j && (a.jc(this.j), Object.prototype.hasOwnProperty.call(a.map.o, "texResolution") ? c = a.map.o.texResolution : (c = a.h.getUniformLocation(a.B, "texResolution"), a.map.o.texResolution = c), null != c && a.W("texResolution", this.j.width, this.j.height));
      Object.prototype.hasOwnProperty.call(a.map.o, "ambient") ? c = a.map.o.ambient : (c = a.h.getUniformLocation(a.B,
          "ambient"), a.map.o.ambient = c);
      null != c && a.W("ambient", this.Ja);
      Object.prototype.hasOwnProperty.call(a.map.o, "diffuse") ? c = a.map.o.diffuse : (c = a.h.getUniformLocation(a.B, "diffuse"), a.map.o.diffuse = c);
      null != c && a.W("diffuse", this.Fb);
      Object.prototype.hasOwnProperty.call(a.map.o, "specular") ? c = a.map.o.specular : (c = a.h.getUniformLocation(a.B, "specular"), a.map.o.specular = c);
      null != c && a.W("specular", this.Hb);
      Object.prototype.hasOwnProperty.call(a.map.o, "shininess") ? c = a.map.o.shininess : (c = a.h.getUniformLocation(a.B,
          "shininess"), a.map.o.shininess = c);
      null != c && a.W("shininess", this.Gb);
      Object.prototype.hasOwnProperty.call(a.map.o, "emission") ? c = a.map.o.emission : (c = a.h.getUniformLocation(a.B, "emission"), a.map.o.emission = c);
      null != c && a.W("emission", this.Qa);
      Object.prototype.hasOwnProperty.call(a.map.o, "numLights") ? c = a.map.o.numLights : (c = a.h.getUniformLocation(a.B, "numLights"), a.map.o.numLights = c);
      null != c && a.ic(this.O);
      Object.prototype.hasOwnProperty.call(a.map.o, "lightPositions") ? c = a.map.o.lightPositions : (c = a.h.getUniformLocation(a.B,
          "lightPositions"), a.map.o.lightPositions = c);
      if (null != c) {
          c = 0;
          for (var d = this.O; c < d;) {
              var e = c++,
                  f = this.S[e];
              a.W("lightPositions[" + e + "]", f.na * this.D.g[0] + f.oa * this.D.g[4] + f.pa * this.D.g[8] + this.D.g[12], f.na * this.D.g[1] + f.oa * this.D.g[5] + f.pa * this.D.g[9] + this.D.g[13], f.na * this.D.g[2] + f.oa * this.D.g[6] + f.pa * this.D.g[10] + this.D.g[14], f.Oa)
          }
      }
      Object.prototype.hasOwnProperty.call(a.map.o, "lightNormals") ? c = a.map.o.lightNormals : (c = a.h.getUniformLocation(a.B, "lightNormals"), a.map.o.lightNormals = c);
      if (null != c)
          for (c =
              0, d = this.O; c < d;) e = c++, f = this.S[e], a.W("lightNormals[" + e + "]", f.ka * this.D.g[0] + f.la * this.D.g[4] + f.ma * this.D.g[8], f.ka * this.D.g[1] + f.la * this.D.g[5] + f.ma * this.D.g[9], f.ka * this.D.g[2] + f.la * this.D.g[6] + f.ma * this.D.g[10]);
      Object.prototype.hasOwnProperty.call(a.map.o, "lightColors") ? c = a.map.o.lightColors : (c = a.h.getUniformLocation(a.B, "lightColors"), a.map.o.lightColors = c);
      if (null != c)
          for (c = 0, d = this.O; c < d;) e = c++, f = this.S[e], a.W("lightColors[" + e + "]", f.r, f.v, f.b);
      c = this.ea;
      c.h.bindBuffer(34963, c.buffer);
      c.h.bufferData(34963,
          new Int32Array(c.g.buffer, 0, c.length), 35048);
      c.h.bindBuffer(34963, null);
      c = this.V;
      c.h.bindBuffer(34962, c.buffer);
      c.h.bufferData(34962, new Float32Array(c.g.buffer, 0, c.length), 35048);
      c.h.bindBuffer(34962, null);
      c = this.N;
      c.h.bindBuffer(34962, c.buffer);
      c.h.bufferData(34962, new Float32Array(c.g.buffer, 0, c.length), 35048);
      c.h.bindBuffer(34962, null);
      c = this.U;
      c.h.bindBuffer(34962, c.buffer);
      c.h.bufferData(34962, new Float32Array(c.g.buffer, 0, c.length), 35048);
      c.h.bindBuffer(34962, null);
      c = this.$;
      c.h.bindBuffer(34962,
          c.buffer);
      c.h.bufferData(34962, new Float32Array(c.g.buffer, 0, c.length), 35048);
      c.h.bindBuffer(34962, null);
      c = this.V;
      d = c.h.getAttribLocation(b, c.name); - 1 != d && (c.h.bindBuffer(34962, c.buffer), c.h.enableVertexAttribArray(d), c.h.vertexAttribPointer(d, c.size, 5126, !1, 0, 0), c.h.bindBuffer(34962, null));
      c = this.N;
      d = c.h.getAttribLocation(b, c.name); - 1 != d && (c.h.bindBuffer(34962, c.buffer), c.h.enableVertexAttribArray(d), c.h.vertexAttribPointer(d, c.size, 5126, !1, 0, 0), c.h.bindBuffer(34962, null));
      c = this.U;
      d = c.h.getAttribLocation(b,
          c.name); - 1 != d && (c.h.bindBuffer(34962, c.buffer), c.h.enableVertexAttribArray(d), c.h.vertexAttribPointer(d, c.size, 5126, !1, 0, 0), c.h.bindBuffer(34962, null));
      c = this.$;
      b = c.h.getAttribLocation(b, c.name); - 1 != b && (c.h.bindBuffer(34962, c.buffer), c.h.enableVertexAttribArray(b), c.h.vertexAttribPointer(b, c.size, 5126, !1, 0, 0), c.h.bindBuffer(34962, null));
      if (!a.ba) throw Error("shader is not compiled");
      a.h.useProgram(a.B);
      b = 0;
      c = Object.keys(a.ia.o);
      d = c.length;
      for (e = 0; e < d;) {
          f = c[e++];
          if (Object.prototype.hasOwnProperty.call(a.map.o,
                  f)) var g = a.map.o[f];
          else g = a.h.getUniformLocation(a.B, f), a.map.o[f] = g;
          if (null != g) {
              g = a.ia.o[f];
              if (Object.prototype.hasOwnProperty.call(a.map.o, f)) f = a.map.o[f];
              else {
                  var h = a.h.getUniformLocation(a.B, f);
                  f = a.map.o[f] = h
              }
              switch (g.type) {
                  case 0:
                      a.h.uniform1i(f, g.Ha);
                      break;
                  case 1:
                      a.h.uniform2i(f, g.Ha, g.mb);
                      break;
                  case 2:
                      a.h.uniform3i(f, g.Ha, g.mb, g.Eb);
                      break;
                  case 3:
                      a.h.uniform4i(f, g.Ha, g.mb, g.Eb, g.uc);
                      break;
                  case 4:
                      a.h.uniform1f(f, g.Fa);
                      break;
                  case 5:
                      a.h.uniform2f(f, g.Fa, g.Ya);
                      break;
                  case 6:
                      a.h.uniform3f(f, g.Fa,
                          g.Ya, g.rb);
                      break;
                  case 7:
                      a.h.uniform4f(f, g.Fa, g.Ya, g.rb, g.cc);
                      break;
                  case 8:
                      a.h.uniformMatrix2fv(f, !1, g.Ma);
                      break;
                  case 9:
                      a.h.uniformMatrix3fv(f, !1, g.fa);
                      break;
                  case 10:
                      a.h.uniformMatrix4fv(f, !1, g.T);
                      break;
                  case 11:
                      a.h.activeTexture(33984 + b), a.h.bindTexture(3553, null == g.Pa ? null : g.Pa.aa), a.h.uniform1i(f, b), ++b
              }
          }
      }
      a.h.activeTexture(33984);
      a = this.ea;
      b = this.pc;
      a.h.bindBuffer(34963, a.buffer);
      a.h.drawElements(b, a.length, 5125, 0);
      a.h.bindBuffer(34963, null)
  };
  H.prototype.sc = function(a) {
      var b = this.j,
          c = this.s;
      this.j =
          a.Pa;
      this.s = a.s;
      var d = this.Da(),
          e = d.B;
      this.M.sb(this.D, this.ga);
      this.J.inverse(this.M);
      this.J.lc(this.J);
      if (Object.prototype.hasOwnProperty.call(d.map.o, "model")) var f = d.map.o.model;
      else f = d.h.getUniformLocation(d.B, "model"), d.map.o.model = f;
      null != f && d.ha("model", this.ga.g);
      Object.prototype.hasOwnProperty.call(d.map.o, "view") ? f = d.map.o.view : (f = d.h.getUniformLocation(d.B, "view"), d.map.o.view = f);
      null != f && d.ha("view", this.D.g);
      Object.prototype.hasOwnProperty.call(d.map.o, "projection") ? f = d.map.o.projection :
          (f = d.h.getUniformLocation(d.B, "projection"), d.map.o.projection = f);
      null != f && d.ha("projection", this.Ba.g);
      Object.prototype.hasOwnProperty.call(d.map.o, "transform") ? f = d.map.o.transform : (f = d.h.getUniformLocation(d.B, "transform"), d.map.o.transform = f);
      null != f && (this.ca.sb(this.Ba, this.M), d.ha("transform", this.ca.g));
      Object.prototype.hasOwnProperty.call(d.map.o, "modelview") ? f = d.map.o.modelview : (f = d.h.getUniformLocation(d.B, "modelview"), d.map.o.modelview = f);
      null != f && d.ha("modelview", this.M.g);
      Object.prototype.hasOwnProperty.call(d.map.o,
          "normalMatrix") ? f = d.map.o.normalMatrix : (f = d.h.getUniformLocation(d.B, "normalMatrix"), d.map.o.normalMatrix = f);
      null != f && (this.J.kc(), d.ha("normalMatrix", this.J.ja));
      null != this.j && (d.jc(this.j), Object.prototype.hasOwnProperty.call(d.map.o, "texResolution") ? f = d.map.o.texResolution : (f = d.h.getUniformLocation(d.B, "texResolution"), d.map.o.texResolution = f), null != f && d.W("texResolution", this.j.width, this.j.height));
      Object.prototype.hasOwnProperty.call(d.map.o, "ambient") ? f = d.map.o.ambient : (f = d.h.getUniformLocation(d.B,
          "ambient"), d.map.o.ambient = f);
      null != f && d.W("ambient", this.Ja);
      Object.prototype.hasOwnProperty.call(d.map.o, "diffuse") ? f = d.map.o.diffuse : (f = d.h.getUniformLocation(d.B, "diffuse"), d.map.o.diffuse = f);
      null != f && d.W("diffuse", this.Fb);
      Object.prototype.hasOwnProperty.call(d.map.o, "specular") ? f = d.map.o.specular : (f = d.h.getUniformLocation(d.B, "specular"), d.map.o.specular = f);
      null != f && d.W("specular", this.Hb);
      Object.prototype.hasOwnProperty.call(d.map.o, "shininess") ? f = d.map.o.shininess : (f = d.h.getUniformLocation(d.B,
          "shininess"), d.map.o.shininess = f);
      null != f && d.W("shininess", this.Gb);
      Object.prototype.hasOwnProperty.call(d.map.o, "emission") ? f = d.map.o.emission : (f = d.h.getUniformLocation(d.B, "emission"), d.map.o.emission = f);
      null != f && d.W("emission", this.Qa);
      Object.prototype.hasOwnProperty.call(d.map.o, "numLights") ? f = d.map.o.numLights : (f = d.h.getUniformLocation(d.B, "numLights"), d.map.o.numLights = f);
      null != f && d.ic(this.O);
      Object.prototype.hasOwnProperty.call(d.map.o, "lightPositions") ? f = d.map.o.lightPositions : (f = d.h.getUniformLocation(d.B,
          "lightPositions"), d.map.o.lightPositions = f);
      if (null != f) {
          f = 0;
          for (var g = this.O; f < g;) {
              var h = f++,
                  k = this.S[h];
              d.W("lightPositions[" + h + "]", k.na * this.D.g[0] + k.oa * this.D.g[4] + k.pa * this.D.g[8] + this.D.g[12], k.na * this.D.g[1] + k.oa * this.D.g[5] + k.pa * this.D.g[9] + this.D.g[13], k.na * this.D.g[2] + k.oa * this.D.g[6] + k.pa * this.D.g[10] + this.D.g[14], k.Oa)
          }
      }
      Object.prototype.hasOwnProperty.call(d.map.o, "lightNormals") ? f = d.map.o.lightNormals : (f = d.h.getUniformLocation(d.B, "lightNormals"), d.map.o.lightNormals = f);
      if (null != f)
          for (f =
              0, g = this.O; f < g;) h = f++, k = this.S[h], d.W("lightNormals[" + h + "]", k.ka * this.D.g[0] + k.la * this.D.g[4] + k.ma * this.D.g[8], k.ka * this.D.g[1] + k.la * this.D.g[5] + k.ma * this.D.g[9], k.ka * this.D.g[2] + k.la * this.D.g[6] + k.ma * this.D.g[10]);
      Object.prototype.hasOwnProperty.call(d.map.o, "lightColors") ? f = d.map.o.lightColors : (f = d.h.getUniformLocation(d.B, "lightColors"), d.map.o.lightColors = f);
      if (null != f)
          for (f = 0, g = this.O; f < g;) h = f++, k = this.S[h], d.W("lightColors[" + h + "]", k.r, k.v, k.b);
      f = a.ea;
      f.h.bindBuffer(34963, f.buffer);
      f.h.bufferData(34963,
          new Int32Array(f.g.buffer, 0, f.length), 35048);
      f.h.bindBuffer(34963, null);
      f = a.V;
      f.h.bindBuffer(34962, f.buffer);
      f.h.bufferData(34962, new Float32Array(f.g.buffer, 0, f.length), 35048);
      f.h.bindBuffer(34962, null);
      f = a.N;
      f.h.bindBuffer(34962, f.buffer);
      f.h.bufferData(34962, new Float32Array(f.g.buffer, 0, f.length), 35048);
      f.h.bindBuffer(34962, null);
      f = a.U;
      f.h.bindBuffer(34962, f.buffer);
      f.h.bufferData(34962, new Float32Array(f.g.buffer, 0, f.length), 35048);
      f.h.bindBuffer(34962, null);
      f = a.$;
      f.h.bindBuffer(34962, f.buffer);
      f.h.bufferData(34962, new Float32Array(f.g.buffer, 0, f.length), 35048);
      f.h.bindBuffer(34962, null);
      f = a.V;
      g = f.h.getAttribLocation(e, f.name); - 1 != g && (f.h.bindBuffer(34962, f.buffer), f.h.enableVertexAttribArray(g), f.h.vertexAttribPointer(g, f.size, 5126, !1, 0, 0), f.h.bindBuffer(34962, null));
      f = a.N;
      g = f.h.getAttribLocation(e, f.name); - 1 != g && (f.h.bindBuffer(34962, f.buffer), f.h.enableVertexAttribArray(g), f.h.vertexAttribPointer(g, f.size, 5126, !1, 0, 0), f.h.bindBuffer(34962, null));
      f = a.U;
      g = f.h.getAttribLocation(e, f.name); -
      1 != g && (f.h.bindBuffer(34962, f.buffer), f.h.enableVertexAttribArray(g), f.h.vertexAttribPointer(g, f.size, 5126, !1, 0, 0), f.h.bindBuffer(34962, null));
      f = a.$;
      e = f.h.getAttribLocation(e, f.name); - 1 != e && (f.h.bindBuffer(34962, f.buffer), f.h.enableVertexAttribArray(e), f.h.vertexAttribPointer(e, f.size, 5126, !1, 0, 0), f.h.bindBuffer(34962, null));
      if (!d.ba) throw Error("shader is not compiled");
      d.h.useProgram(d.B);
      e = 0;
      f = Object.keys(d.ia.o);
      g = f.length;
      for (h = 0; h < g;) {
          k = f[h++];
          if (Object.prototype.hasOwnProperty.call(d.map.o,
                  k)) var l = d.map.o[k];
          else l = d.h.getUniformLocation(d.B, k), d.map.o[k] = l;
          if (null != l) {
              l = d.ia.o[k];
              if (Object.prototype.hasOwnProperty.call(d.map.o, k)) k = d.map.o[k];
              else {
                  var n = d.h.getUniformLocation(d.B, k);
                  k = d.map.o[k] = n
              }
              switch (l.type) {
                  case 0:
                      d.h.uniform1i(k, l.Ha);
                      break;
                  case 1:
                      d.h.uniform2i(k, l.Ha, l.mb);
                      break;
                  case 2:
                      d.h.uniform3i(k, l.Ha, l.mb, l.Eb);
                      break;
                  case 3:
                      d.h.uniform4i(k, l.Ha, l.mb, l.Eb, l.uc);
                      break;
                  case 4:
                      d.h.uniform1f(k, l.Fa);
                      break;
                  case 5:
                      d.h.uniform2f(k, l.Fa, l.Ya);
                      break;
                  case 6:
                      d.h.uniform3f(k, l.Fa,
                          l.Ya, l.rb);
                      break;
                  case 7:
                      d.h.uniform4f(k, l.Fa, l.Ya, l.rb, l.cc);
                      break;
                  case 8:
                      d.h.uniformMatrix2fv(k, !1, l.Ma);
                      break;
                  case 9:
                      d.h.uniformMatrix3fv(k, !1, l.fa);
                      break;
                  case 10:
                      d.h.uniformMatrix4fv(k, !1, l.T);
                      break;
                  case 11:
                      d.h.activeTexture(33984 + e), d.h.bindTexture(3553, null == l.Pa ? null : l.Pa.aa), d.h.uniform1i(k, e), ++e
              }
          }
      }
      d.h.activeTexture(33984);
      d = a.ea;
      a = a.mode;
      d.h.bindBuffer(34963, d.buffer);
      d.h.drawElements(a, d.length, 5125, 0);
      d.h.bindBuffer(34963, null);
      this.j = b;
      this.s = c
  };
  H.I = !0;
  ha.I = !0;
  T.prototype.vc = function() {
      this.g[0] =
          1;
      this.g[1] = 0;
      this.g[2] = 0;
      this.g[3] = 0;
      this.g[4] = 0;
      this.g[5] = 1;
      this.g[6] = 0;
      this.g[7] = 0;
      this.g[8] = 0;
      this.g[9] = 0;
      this.g[10] = 1;
      this.g[11] = 0;
      this.g[12] = 0;
      this.g[13] = 0;
      this.g[14] = 0;
      this.g[15] = 1
  };
  T.prototype.ec = function(a, b, c, d, e, f, g, h, k) {
      d = a - d;
      e = b - e;
      f = c - f;
      var l = 1 / Math.sqrt(d * d + e * e + f * f);
      d *= l;
      e *= l;
      f *= l;
      var n = h * f - k * e;
      k = k * d - g * f;
      g = g * e - h * d;
      l = 1 / Math.sqrt(n * n + k * k + g * g);
      n *= l;
      k *= l;
      g *= l;
      h = e * g - f * k;
      l = f * n - d * g;
      var m = d * k - e * n;
      this.g[0] = n;
      this.g[1] = h;
      this.g[2] = d;
      this.g[3] = 0;
      this.g[4] = k;
      this.g[5] = l;
      this.g[6] = e;
      this.g[7] = 0;
      this.g[8] = g;
      this.g[9] = m;
      this.g[10] = f;
      this.g[11] = 0;
      this.g[12] = -(n * a + k * b + g * c);
      this.g[13] = -(h * a + l * b + m * c);
      this.g[14] = -(d * a + e * b + f * c);
      this.g[15] = 1
  };
  T.prototype.perspective = function(a, b, c, d) {
      a = 1 / Math.tan(.5 * a);
      d /= c - d;
      this.g[0] = a / b;
      this.g[1] = 0;
      this.g[2] = 0;
      this.g[3] = 0;
      this.g[4] = 0;
      this.g[5] = a;
      this.g[6] = 0;
      this.g[7] = 0;
      this.g[8] = 0;
      this.g[9] = 0;
      this.g[10] = d;
      this.g[11] = -1;
      this.g[12] = 0;
      this.g[13] = 0;
      this.g[14] = c * d;
      this.g[15] = 0
  };
  T.prototype.Cb = function(a, b, c) {
      this.g[0] *= a;
      this.g[1] *= a;
      this.g[2] *= a;
      this.g[3] *= a;
      this.g[4] *=
          b;
      this.g[5] *= b;
      this.g[6] *= b;
      this.g[7] *= b;
      this.g[8] *= c;
      this.g[9] *= c;
      this.g[10] *= c;
      this.g[11] *= c
  };
  T.prototype.Bb = function(a, b, c, d) {
      var e = Math.sin(a),
          f = Math.cos(a),
          g = 1 - f;
      a = b * b * g + f;
      var h = b * c * g - d * e,
          k = b * d * g + c * e,
          l = c * b * g + d * e,
          n = c * c * g + f,
          m = c * d * g - b * e,
          p = d * b * g - c * e;
      b = d * c * g + b * e;
      d = d * d * g + f;
      c = this.g[0];
      e = this.g[1];
      f = this.g[2];
      g = this.g[3];
      var t = this.g[4],
          w = this.g[5],
          A = this.g[6],
          G = this.g[7],
          E = this.g[8],
          F = this.g[9],
          J = this.g[10],
          K = this.g[11],
          L = this.g[12],
          M = this.g[13],
          Q = this.g[14],
          I = this.g[15];
      this.g[0] = c * a + t * l + E * p;
      this.g[1] =
          e * a + w * l + F * p;
      this.g[2] = f * a + A * l + J * p;
      this.g[3] = g * a + G * l + K * p;
      this.g[4] = c * h + t * n + E * b;
      this.g[5] = e * h + w * n + F * b;
      this.g[6] = f * h + A * n + J * b;
      this.g[7] = g * h + G * n + K * b;
      this.g[8] = c * k + t * m + E * d;
      this.g[9] = e * k + w * m + F * d;
      this.g[10] = f * k + A * m + J * d;
      this.g[11] = g * k + G * m + K * d;
      this.g[12] = L;
      this.g[13] = M;
      this.g[14] = Q;
      this.g[15] = I
  };
  T.prototype.qc = function(a, b, c, d, e, f, g, h, k, l, n, m, p, t, w, A) {
      var G = this.g[0],
          E = this.g[1],
          F = this.g[2],
          J = this.g[3],
          K = this.g[4],
          L = this.g[5],
          M = this.g[6],
          Q = this.g[7],
          I = this.g[8],
          N = this.g[9],
          O = this.g[10],
          S = this.g[11],
          U = this.g[12],
          X = this.g[13],
          ba = this.g[14],
          ca = this.g[15];
      this.g[0] = G * a + K * e + I * k + U * p;
      this.g[1] = E * a + L * e + N * k + X * p;
      this.g[2] = F * a + M * e + O * k + ba * p;
      this.g[3] = J * a + Q * e + S * k + ca * p;
      this.g[4] = G * b + K * f + I * l + U * t;
      this.g[5] = E * b + L * f + N * l + X * t;
      this.g[6] = F * b + M * f + O * l + ba * t;
      this.g[7] = J * b + Q * f + S * l + ca * t;
      this.g[8] = G * c + K * g + I * n + U * w;
      this.g[9] = E * c + L * g + N * n + X * w;
      this.g[10] = F * c + M * g + O * n + ba * w;
      this.g[11] = J * c + Q * g + S * n + ca * w;
      this.g[12] = G * d + K * h + I * m + U * A;
      this.g[13] = E * d + L * h + N * m + X * A;
      this.g[14] = F * d + M * h + O * m + ba * A;
      this.g[15] = J * d + Q * h + S * m + ca * A
  };
  T.prototype.sb = function(a, b) {
      var c =
          a.g[0],
          d = a.g[1],
          e = a.g[2],
          f = a.g[3],
          g = a.g[4],
          h = a.g[5],
          k = a.g[6],
          l = a.g[7],
          n = a.g[8],
          m = a.g[9],
          p = a.g[10],
          t = a.g[11],
          w = a.g[12],
          A = a.g[13],
          G = a.g[14];
      a = a.g[15];
      var E = b.g[0],
          F = b.g[1],
          J = b.g[2],
          K = b.g[3],
          L = b.g[4],
          M = b.g[5],
          Q = b.g[6],
          I = b.g[7],
          N = b.g[8],
          O = b.g[9],
          S = b.g[10],
          U = b.g[11],
          X = b.g[12],
          ba = b.g[13],
          ca = b.g[14];
      b = b.g[15];
      this.g[0] = c * E + g * F + n * J + w * K;
      this.g[1] = d * E + h * F + m * J + A * K;
      this.g[2] = e * E + k * F + p * J + G * K;
      this.g[3] = f * E + l * F + t * J + a * K;
      this.g[4] = c * L + g * M + n * Q + w * I;
      this.g[5] = d * L + h * M + m * Q + A * I;
      this.g[6] = e * L + k * M + p * Q + G * I;
      this.g[7] = f * L + l *
          M + t * Q + a * I;
      this.g[8] = c * N + g * O + n * S + w * U;
      this.g[9] = d * N + h * O + m * S + A * U;
      this.g[10] = e * N + k * O + p * S + G * U;
      this.g[11] = f * N + l * O + t * S + a * U;
      this.g[12] = c * X + g * ba + n * ca + w * b;
      this.g[13] = d * X + h * ba + m * ca + A * b;
      this.g[14] = e * X + k * ba + p * ca + G * b;
      this.g[15] = f * X + l * ba + t * ca + a * b
  };
  T.prototype.lc = function(a) {
      var b = a.g[1],
          c = a.g[2],
          d = a.g[3],
          e = a.g[4],
          f = a.g[5],
          g = a.g[6],
          h = a.g[7],
          k = a.g[8],
          l = a.g[9],
          n = a.g[10],
          m = a.g[11],
          p = a.g[12],
          t = a.g[13],
          w = a.g[14],
          A = a.g[15];
      this.g[0] = a.g[0];
      this.g[1] = e;
      this.g[2] = k;
      this.g[3] = p;
      this.g[4] = b;
      this.g[5] = f;
      this.g[6] = l;
      this.g[7] =
          t;
      this.g[8] = c;
      this.g[9] = g;
      this.g[10] = n;
      this.g[11] = w;
      this.g[12] = d;
      this.g[13] = h;
      this.g[14] = m;
      this.g[15] = A
  };
  T.prototype.inverse = function(a) {
      var b = a.g[0],
          c = a.g[1],
          d = a.g[2],
          e = a.g[3],
          f = a.g[4],
          g = a.g[5],
          h = a.g[6],
          k = a.g[7],
          l = a.g[8],
          n = a.g[9],
          m = a.g[10],
          p = a.g[11],
          t = a.g[12],
          w = a.g[13],
          A = a.g[14];
      a = a.g[15];
      var G = b * g - f * c,
          E = b * n - l * c,
          F = b * w - t * c,
          J = f * n - l * g,
          K = f * w - t * g,
          L = l * w - t * n,
          M = d * k - h * e,
          Q = d * p - m * e,
          I = d * a - A * e,
          N = h * p - m * k,
          O = h * a - A * k,
          S = m * a - A * p,
          U = g * S - n * O + w * N,
          X = c * S - n * I + w * Q;
      w = c * O - g * I + w * M;
      c = c * N - g * Q + n * M;
      g = b * U - f * X + l * w - t * c;
      0 != g && (g = 1 / g);
      this.g[0] = U * g;
      this.g[1] = -X * g;
      this.g[2] = w * g;
      this.g[3] = -c * g;
      this.g[4] = -(f * S - l * O + t * N) * g;
      this.g[5] = (b * S - l * I + t * Q) * g;
      this.g[6] = -(b * O - f * I + t * M) * g;
      this.g[7] = (b * N - f * Q + l * M) * g;
      this.g[8] = (k * L - p * K + a * J) * g;
      this.g[9] = -(e * L - p * F + a * E) * g;
      this.g[10] = (e * K - k * F + a * G) * g;
      this.g[11] = -(e * J - k * E + p * G) * g;
      this.g[12] = -(h * L - m * K + A * J) * g;
      this.g[13] = (d * L - m * F + A * E) * g;
      this.g[14] = -(d * K - h * F + A * G) * g;
      this.g[15] = (d * J - h * E + m * G) * g
  };
  T.prototype.kc = function() {
      this.ja[0] = this.g[0];
      this.ja[1] = this.g[1];
      this.ja[2] = this.g[2];
      this.ja[3] = this.g[4];
      this.ja[4] =
          this.g[5];
      this.ja[5] = this.g[6];
      this.ja[6] = this.g[8];
      this.ja[7] = this.g[9];
      this.ja[8] = this.g[10]
  };
  T.I = !0;
  Ba.I = !0;
  da.prototype.ic = function(a) {
      var b = this.ia.o.numLights;
      null == b && (b = new oa);
      b.type = 0;
      b.Ha = a;
      this.ia.o.numLights = b
  };
  da.prototype.W = function(a, b, c, d, e) {
      var f = this.ia.o[a];
      null == f && (f = new oa);
      f.type = 4;
      f.Fa = b;
      null != c && (f.type = 5, f.Ya = c);
      null != d && (f.type = 6, f.rb = d);
      null != e && (f.type = 7, f.cc = e);
      this.ia.o[a] = f
  };
  da.prototype.ha = function(a, b) {
      var c = this.ia.o[a];
      null == c && (c = new oa);
      switch (b.length) {
          case 4:
              c.type =
                  8;
              null == c.Ma && (c.Ma = new Float32Array(4));
              c.Ma[0] = b[0];
              c.Ma[1] = b[1];
              c.Ma[2] = b[2];
              c.Ma[3] = b[3];
              break;
          case 9:
              c.type = 9;
              null == c.fa && (c.fa = new Float32Array(9));
              c.fa[0] = b[0];
              c.fa[1] = b[1];
              c.fa[2] = b[2];
              c.fa[3] = b[3];
              c.fa[4] = b[4];
              c.fa[5] = b[5];
              c.fa[6] = b[6];
              c.fa[7] = b[7];
              c.fa[8] = b[8];
              break;
          case 16:
              c.type = 10;
              null == c.T && (c.T = new Float32Array(16));
              c.T[0] = b[0];
              c.T[1] = b[1];
              c.T[2] = b[2];
              c.T[3] = b[3];
              c.T[4] = b[4];
              c.T[5] = b[5];
              c.T[6] = b[6];
              c.T[7] = b[7];
              c.T[8] = b[8];
              c.T[9] = b[9];
              c.T[10] = b[10];
              c.T[11] = b[11];
              c.T[12] = b[12];
              c.T[13] =
                  b[13];
              c.T[14] = b[14];
              c.T[15] = b[15];
              break;
          default:
              throw Error("invalid matrix array length: " + b.length);
      }
      this.ia.o[a] = c
  };
  da.prototype.jc = function(a) {
      var b = this.ia.o.texture;
      null == b && (b = new oa);
      b.type = 11;
      b.Pa = a;
      this.ia.o.texture = b
  };
  da.prototype.bc = function() {
      this.h.deleteProgram(this.B);
      this.h.deleteShader(this.m);
      this.h.deleteShader(this.i);
      this.i = this.m = this.B = null
  };
  da.I = !0;
  oa.I = !0;
  na.prototype.clear = function(a) {
      this.mode = a;
      this.Na = 0;
      this.V.length = 0;
      this.N.length = 0;
      this.U.length = 0;
      this.$.length = 0;
      this.b = this.v = this.r = this.ea.length = 0;
      this.a = 1;
      this.ob = this.ub = this.ra = this.R = this.P = 0
  };
  na.prototype.aa = function(a) {
      this.Pa = a
  };
  na.prototype.u = function(a, b, c) {
      var d = this.ea,
          e = this.Na++;
      if (d.length == d.g.length) {
          for (var f = d.g.length, g = new Int32Array(f << 1), h = 0; h < f;) {
              var k = h++;
              g[k] = d.g[k]
          }
          d.g = g
      }
      d.g[d.length++] = e;
      d = this.V;
      if (d.length == d.g.length) {
          e = d.g.length;
          f = new Float32Array(e << 1);
          for (g = 0; g < e;) h = g++, f[h] = d.g[h];
          d.g = f
      }
      d.g[d.length++] = a;
      a = this.V;
      if (a.length == a.g.length) {
          d = a.g.length;
          e = new Float32Array(d <<
              1);
          for (f = 0; f < d;) g = f++, e[g] = a.g[g];
          a.g = e
      }
      a.g[a.length++] = b;
      b = this.V;
      if (b.length == b.g.length) {
          a = b.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = b.g[f];
          b.g = d
      }
      b.g[b.length++] = c;
      c = this.N;
      b = this.r;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.N;
      b = this.v;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.N;
      b = this.b;
      if (c.length == c.g.length) {
          a =
              c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.N;
      b = this.a;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.U;
      b = this.P;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.U;
      b = this.R;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c =
          this.U;
      b = this.ra;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.$;
      b = this.ub;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b;
      c = this.$;
      b = this.ob;
      if (c.length == c.g.length) {
          a = c.g.length;
          d = new Float32Array(a << 1);
          for (e = 0; e < a;) f = e++, d[f] = c.g[f];
          c.g = d
      }
      c.g[c.length++] = b
  };
  na.I = !0;
  V.prototype.$a = function(a, b, c) {
      this.width = a;
      this.height = b;
      this.type = c;
      var d = a - 1;
      d |=
          d >> 1;
      d |= d >> 2;
      d |= d >> 4;
      d |= d >> 8;
      a == (d | d >> 16) + 1 ? (d = b - 1, d |= d >> 1, d |= d >> 2, d |= d >> 4, d |= d >> 8, d = b != (d | d >> 16) + 1) : d = !0;
      this.H = d;
      this.F = 1 / a;
      this.G = 1 / b;
      this.h.bindTexture(3553, this.aa);
      this.h.texImage2D(3553, 0, 6408, a, b, 0, 6408, c, null);
      this.h.bindTexture(3553, null);
      this.i = a = this.i;
      this.h.bindTexture(3553, this.aa);
      switch (a) {
          case 9728:
              this.h.texParameteri(3553, 10240, 9728);
              this.h.texParameteri(3553, 10241, 9728);
              break;
          case 9729:
              this.h.texParameteri(3553, 10240, 9729), this.h.texParameteri(3553, 10241, 9729)
      }
      this.h.bindTexture(3553,
          null);
      a = this.A;
      b = this.C;
      if (this.H && (33071 != a || 33071 != b)) throw W.m("cannot use texture wrapping in NPOT textures");
      this.A = a;
      this.C = b;
      this.h.bindTexture(3553, this.aa);
      this.h.texParameteri(3553, 10242, a);
      this.h.texParameteri(3553, 10243, b);
      this.h.bindTexture(3553, null);
      this.J()
  };
  V.prototype.load = function(a, b) {
      this.width = a.width;
      this.height = a.height;
      this.type = b;
      var c = this.width;
      --c;
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      this.width == (c | c >> 16) + 1 ? (c = this.height, --c, c |= c >> 1, c |= c >> 2, c |= c >> 4, c |= c >> 8, c = this.height !=
          (c | c >> 16) + 1) : c = !0;
      this.H = c;
      this.F = 1 / this.width;
      this.G = 1 / this.height;
      this.h.bindTexture(3553, this.aa);
      this.h.texImage2D(3553, 0, 6408, 6408, b, a.source);
      this.h.bindTexture(3553, null);
      this.i = a = this.i;
      this.h.bindTexture(3553, this.aa);
      switch (a) {
          case 9728:
              this.h.texParameteri(3553, 10240, 9728);
              this.h.texParameteri(3553, 10241, 9728);
              break;
          case 9729:
              this.h.texParameteri(3553, 10240, 9729), this.h.texParameteri(3553, 10241, 9729)
      }
      this.h.bindTexture(3553, null);
      a = this.A;
      b = this.C;
      if (this.H && (33071 != a || 33071 != b)) throw W.m("cannot use texture wrapping in NPOT textures");
      this.A = a;
      this.C = b;
      this.h.bindTexture(3553, this.aa);
      this.h.texParameteri(3553, 10242, a);
      this.h.texParameteri(3553, 10243, b);
      this.h.bindTexture(3553, null);
      this.J()
  };
  V.prototype.J = function() {
      this.h.bindRenderbuffer(36161, this.m);
      this.h.renderbufferStorage(36161, 33189, this.width, this.height);
      this.h.bindRenderbuffer(36161, null);
      this.h.bindFramebuffer(36160, this.Za);
      this.h.framebufferRenderbuffer(36160, 36096, 36161, this.m);
      this.h.framebufferTexture2D(36160, 36064, 3553, this.aa, 0);
      this.h.bindFramebuffer(36160,
          null)
  };
  V.prototype.bc = function() {
      this.h.deleteTexture(this.aa);
      this.h.deleteFramebuffer(this.Za);
      this.h.deleteRenderbuffer(this.m);
      this.m = this.Za = this.aa = null
  };
  V.I = !0;
  B.I = !0;
  x.m = function(a) {
      return -1 == x.A.indexOf(a) ? null : a
  };
  v.prototype.A = function(a, b, c, d) {
      function e(h) {
          h.cancelable && h.preventDefault();
          h = h.changedTouches;
          for (var k = 0, l = h.length; k < l;) {
              var n = h[k++],
                  m = f.i(n.identifier);
              if (null != m) {
                  var p = (n.clientX - b.getBoundingClientRect().left) * (a.width / a.clientWidth);
                  n = n.clientY - b.getBoundingClientRect().top;
                  var t = a.height / a.clientHeight;
                  m.P = p;
                  m.R = n * t;
                  m.nb = !1
              }
          }
      }
      this.m.Y(a, b, this, c, d);
      var f = this.touches;
      b.addEventListener("touchstart", function(h) {
          h.cancelable && h.preventDefault();
          h = h.changedTouches;
          for (var k = 0, l = h.length; k < l;) {
              var n = h[k++],
                  m = f.i(n.identifier, !0),
                  p = (n.clientX - b.getBoundingClientRect().left) * (a.width / a.clientWidth);
              n = n.clientY - b.getBoundingClientRect().top;
              var t = a.height / a.clientHeight;
              m.P = p;
              m.R = n * t;
              m.nb = !0;
              m.Ib = !0
          }
      }, {
          passive: !1
      });
      b.addEventListener("touchmove", function(h) {
          h.cancelable &&
              h.preventDefault();
          h = h.changedTouches;
          for (var k = 0, l = h.length; k < l;) {
              var n = h[k++],
                  m = f.i(n.identifier);
              if (null != m) {
                  var p = (n.clientX - b.getBoundingClientRect().left) * (a.width / a.clientWidth);
                  n = n.clientY - b.getBoundingClientRect().top;
                  var t = a.height / a.clientHeight;
                  m.P = p;
                  m.R = n * t
              }
          }
      }, {
          passive: !1
      });
      b.addEventListener("touchend", e);
      b.addEventListener("touchcancel", e);
      if (null != this.i) {
          var g = this.i;
          c = window.document.documentElement;
          c.addEventListener("keydown", function(h) {
              var k = x.m(h.code);
              null != k && (!x.i.includes(k) &&
                  h.cancelable && h.preventDefault(), Object.prototype.hasOwnProperty.call(g.keys.o, k) || (g.keys.o[k] = new y), g.i.add(h.key))
          });
          c.addEventListener("keyup", function(h) {
              var k = x.m(h.code);
              null != k && (!x.i.includes(k) && h.cancelable && h.preventDefault(), Object.prototype.hasOwnProperty.call(g.keys.o, k) || (g.keys.o[k] = new y), g.keys.o[k].release(), g.C.add(h.key))
          });
          window.addEventListener("blur", function() {
              for (var h = g.keys.o, k = Object.keys(h), l = k.length, n = 0; n < l;) h[k[n++]].release()
          })
      }
  };
  v.prototype.update = function() {
      this.m.update();
      for (var a = this.touches, b = 0; b < a.touches.length;) {
          var c = a.touches[b];
          c.fc || c.Kb || c.nb ? (c.update(), ++b) : Da.i(a.touches, c)
      }
      if (null != this.i) {
          a = this.i;
          b = a.keys.o;
          c = Object.keys(b);
          for (var d = c.length, e = 0; e < d;) b[c[e++]].update();
          a.A.clear();
          a.m.clear();
          b = a.i.values();
          for (c = b.next(); !c.done;) d = c.value, c = b.next(), a.A.add(d);
          b = a.m.values();
          for (c = b.next(); !c.done;) d = c.value, c = b.next(), a.m.add(d);
          a.i.clear();
          a.C.clear()
      }
  };
  v.I = !0;
  var qa = va["pot.input.InputTarget"] = {
      Ob: !0,
      pb: null,
      Mb: {
          ib: "Canvas",
          Ka: 0,
          Ra: "pot.input.InputTarget",
          toString: pa
      },
      Document: {
          ib: "Document",
          Ka: 1,
          Ra: "pot.input.InputTarget",
          toString: pa
      },
      nc: {
          ib: "None",
          Ka: 2,
          Ra: "pot.input.InputTarget",
          toString: pa
      }
  };
  qa.pb = [qa.Mb, qa.Document, qa.nc];
  y.prototype.release = function() {};
  y.prototype.update = function() {};
  y.I = !0;
  P.I = !0;
  D.prototype.Y = function(a, b, c, d, e) {
      var f = this;
      b.addEventListener("mouseenter", function() {
          return f.i = !0
      });
      b.addEventListener("mouseleave", function() {
          return f.i = !1
      });
      b.addEventListener("mousedown", function(g) {
          f.m = !0;
          f.i = !0;
          g.cancelable && g.preventDefault();
          switch (g.button) {
              case 0:
                  f.A = !0;
                  f.J = !0;
                  break;
              case 1:
                  f.M = !0;
                  f.ca = !0;
                  break;
              case 2:
                  f.X = !0, f.da = !0
          }
          var h = g.clientX - a.getBoundingClientRect().left;
          switch (c.ab) {
              case 0:
                  var k = a.width / d.za / a.clientWidth;
                  break;
              case 1:
                  k = a.width / a.clientWidth
          }
          f.P = h * k;
          g = g.clientY - a.getBoundingClientRect().top;
          switch (c.ab) {
              case 0:
                  var l = a.height / d.za / a.clientHeight;
                  break;
              case 1:
                  l = a.height / a.clientHeight
          }
          return f.R = g * l
      });
      b.addEventListener("mouseup", function(g) {
          f.m = !0;
          f.i = !0;
          g.cancelable && g.preventDefault();
          switch (g.button) {
              case 0:
                  f.A = !1;
                  break;
              case 1:
                  f.M = !1;
                  break;
              case 2:
                  f.X = !1
          }
          var h = g.clientX - a.getBoundingClientRect().left;
          switch (c.ab) {
              case 0:
                  var k = a.width / d.za / a.clientWidth;
                  break;
              case 1:
                  k = a.width / a.clientWidth
          }
          f.P = h * k;
          g = g.clientY - a.getBoundingClientRect().top;
          switch (c.ab) {
              case 0:
                  var l = a.height / d.za / a.clientHeight;
                  break;
              case 1:
                  l = a.height / a.clientHeight
          }
          return f.R = g * l
      });
      b.addEventListener("mousemove", function(g) {
          f.m = !0;
          f.i = !0;
          var h = g.clientX - a.getBoundingClientRect().left;
          switch (c.ab) {
              case 0:
                  var k = a.width / d.za / a.clientWidth;
                  break;
              case 1:
                  k = a.width / a.clientWidth
          }
          f.P = h * k;
          g = g.clientY - a.getBoundingClientRect().top;
          switch (c.ab) {
              case 0:
                  var l = a.height / d.za / a.clientHeight;
                  break;
              case 1:
                  l = a.height / a.clientHeight
          }
          return f.R = g * l
      });
      e && b.addEventListener("wheel", function(g) {
          switch (g.deltaMode) {
              case 0:
                  var h = 1;
                  break;
              case 1:
                  h = 24;
                  break;
              case 2:
                  h = 720;
                  break;
              default:
                  throw W.m("invalid wheel delta mode");
          }
          f.C += g.deltaX * h;
          f.H += g.deltaY * h;
          g.preventDefault()
      }, {
          passive: !1
      });
      b.addEventListener("contextmenu", function(g) {
          f.m = !0;
          f.i = !0;
          g.preventDefault()
      });
      b.addEventListener("pointerdown", function(g) {
          b.setPointerCapture(g.pointerId)
      });
      b.addEventListener("pointerup", function(g) {
          b.releasePointerCapture(g.pointerId)
      })
  };
  D.prototype.update = function() {
      this.x = this.P;
      this.y = this.R;
      this.left = this.A || this.J;
      this.da = this.ca = this.J = !1;
      this.H = this.C = 0
  };
  D.I = !0;
  C.prototype.end = function(a, b) {
      this.P = a;
      this.R = b;
      this.nb = !1
  };
  C.prototype.update = function() {
      this.x = this.P;
      this.y = this.R;
      this.fc = this.Kb;
      this.Kb = this.nb || this.Ib;
      this.Ib = !1
  };
  C.I = !0;
  z.prototype.i = function(a, b) {
      null ==
          b && (b = !1);
      for (var c = 0, d = this.touches; c < d.length;) {
          var e = d[c];
          ++c;
          if (e.hc == a) return e
      }
      return b ? this.m(a) : null
  };
  z.prototype.m = function(a) {
      for (var b = 0;;) {
          for (var c = b, d = 0, e = this.touches; d < e.length;) e[d++].id == b && ++b;
          if (c == b) break
      }
      c = new C;
      c.hc = a;
      c.id = b;
      this.touches.push(c);
      return c
  };
  z.I = !0;
  r.prototype.start = function() {
      this.H || (this.m = Date.now() - this.i, this.H = !0, window.setTimeout(sa(this, this.C), 0))
  };
  r.prototype.J = function(a) {
      this.i = 1E3 / a
  };
  r.prototype.C = function() {
      if (this.H) {
          if (this.A) {
              var a = this.update;
              if (r.i) try {
                  a()
              } catch (d) {
                  a = W.i(d), window.alert(R.i(a))
              } else a();
              a = this.La;
              if (r.i) try {
                  a()
              } catch (d) {
                  a = W.i(d), window.alert(R.i(a))
              } else a()
          } else {
              a = Date.now();
              for (var b = !1; a - this.m > .5 * this.i;) {
                  b = this.update;
                  if (r.i) try {
                      b()
                  } catch (d) {
                      b = W.i(d), window.alert(R.i(b))
                  } else b();
                  b = !0;
                  this.m += this.i;
                  var c = Date.now();
                  if (c - a > .5 * this.i) {
                      this.m < c - this.i && (this.m = c - this.i);
                      break
                  }
              }
              if (b)
                  if (a = this.La, r.i) try {
                      a()
                  } catch (d) {
                      a = W.i(d), window.alert(R.i(a))
                  } else a()
          }
          window.requestAnimationFrame(sa(this, this.C))
      }
  };
  r.I = !0;
  u.prototype.next =
      function() {
          this.x = (this.x ^= this.x << 13) ^ this.x >>> 17;
          return ((this.x ^= this.x << 15) & 2147483647) / 2147483648
      };
  u.I = !0;
  q.Lb |= 0;
  String.I = !0;
  Array.I = !0;
  Y.i = !1;
  x.i = "F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12".split(" ");
  x.A = "Escape Digit0 Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Minus Equal Backspace Tab KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Enter ControlLeft KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Backquote ShiftLeft Backslash KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash ShiftRight NumpadMultiply AltLeft Space CapsLock F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 Numpad7 Numpad8 Numpad9 NumpadSubtract Numpad4 Numpad5 Numpad6 NumpadAdd Numpad1 Numpad2 Numpad3 Numpad0 NumpadDecimal IntlBackslash F11 F12 IntlYen NumpadEnter ControlRight NumpadDivide PrintScreen AltRight NumLock Home ArrowUp PageUp ArrowLeft ArrowRight End ArrowDown PageDown Insert Delete ContextMenu".split(" ");
  r.i = !1;
  Z.m()
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);