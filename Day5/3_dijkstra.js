// Challenge 3: Dijkstra's Algorithm
// Run: node 3_dijkstra.js
// Graph represented as adjacency list: { node: [[neighbor, weight], ...] }

function dijkstra(graph, start) {
  const dist = {};
  for (const node in graph) dist[node] = Infinity;
  dist[start] = 0;

  // Simple priority queue using a sorted array
  const pq = [[0, start]];

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift();
    if (d > dist[u]) continue;

    for (const [v, w] of (graph[u] || [])) {
      const newDist = dist[u] + w;
      if (newDist < dist[v]) {
        dist[v] = newDist;
        pq.push([newDist, v]);
      }
    }
  }
  return dist;
}

// Example
const graph = {
  A: [["B", 1], ["C", 4]],
  B: [["C", 2], ["D", 6]],
  C: [["D", 3]],
  D: []
};
console.log(dijkstra(graph, "A"));
// { A: 0, B: 1, C: 3, D: 6 }
