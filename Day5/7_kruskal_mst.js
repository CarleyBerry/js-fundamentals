class UF {
  constructor() { this.parent = {}; }
  find(i) {
    if (this.parent[i] === undefined) this.parent[i] = i;
    if (this.parent[i] === i) return i;
    return this.parent[i] = this.find(this.parent[i]);
  }
  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI !== rootJ) {
      this.parent[rootI] = rootJ;
      return true;
    }
    return false;
  }
}

function kruskalMST(vertices, edges) {
  edges.sort((a, b) => a[2] - b[2]);
  const uf = new UF();
  const mst = [];
  for (const edge of edges) {
    if (uf.union(edge[0], edge[1])) {
      mst.push(edge);
    }
  }
  return mst;
}

const edges = [['A','B',3],['A','C',1],['B','C',7],['B','D',5],['C','D',2]];
console.log(kruskalMST([], edges));
