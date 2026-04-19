// Challenge 2: Word Ladder (BFS)
// Run: node 2_word_ladder.js
// Given beginWord, endWord, and a wordList, return the shortest transformation length.

function wordLadder(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];

  while (queue.length) {
    const [word, steps] = queue.shift();
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (next === endWord) return steps + 1;
        if (wordSet.has(next)) {
          wordSet.delete(next);
          queue.push([next, steps + 1]);
        }
      }
    }
  }
  return 0;
}

// Example
console.log(wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // 5
console.log(wordLadder("hit", "cog", ["hot","dot","dog","lot","log"]));       // 0
