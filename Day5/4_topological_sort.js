function topologicalSort(graph) {
  const inDegree = {};
  for (const node in graph) {
    if (!(node in inDegree)) inDegree[node] = 0;
    for (const neighbor of graph[node]) {
      inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
    }
  }

  const queue = [];
  for (const node in inDegree) {
    if (inDegree[node] === 0) queue.push(node);
  }

  const result = [];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of (graph[node] || [])) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  return result;
}

console.log(topologicalSort({A: ['C'], B: ['C', 'D'], C: ['E'], D: ['F'], E: ['H', 'F'], F: ['G'], G: [], H: []}));
