class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(0).map((_, i) => i);
    this.count = size;
  }
  find(i) {
    if (this.parent[i] === i) return i;
    return this.parent[i] = this.find(this.parent[i]);
  }
  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI !== rootJ) {
      this.parent[rootI] = rootJ;
      this.count--;
    }
  }
}

const uf = new UnionFind(5);
const edges = [[0,1],[1,2],[3,4]];
for (const [u, v] of edges) uf.union(u, v);
console.log(uf.count);
