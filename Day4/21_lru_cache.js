class LRU {
  constructor(c) { this.c = c; this.m = new Map(); }
  get(k) { if (!this.m.has(k)) return -1; const v = this.m.get(k); this.m.delete(k); this.m.set(k, v); return v; }
  put(k, v) { this.m.has(k) && this.m.delete(k); this.m.set(k, v); this.m.size > this.c && this.m.delete(this.m.keys().next().value); }
}
const l = new LRU(2); l.put(1,1); console.log(l.get(1));
