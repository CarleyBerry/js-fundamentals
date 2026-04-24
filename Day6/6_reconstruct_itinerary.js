function findItinerary(tickets) {
  const graph = {};
  for (const [u, v] of tickets) {
    if (!graph[u]) graph[u] = [];
    graph[u].push(v);
  }
  for (const key in graph) graph[key].sort();

  const res = [];
  function dfs(node) {
    const dests = graph[node] || [];
    while (dests.length > 0) {
      dfs(dests.shift());
    }
    res.push(node);
  }

  dfs('JFK');
  return res.reverse();
}

console.log(findItinerary([['MUC','LHR'],['JFK','MUC'],['SFO','SJC'],['LHR','SFO']]));
