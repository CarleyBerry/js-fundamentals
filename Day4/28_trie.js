const Trie = () => ({ r: {} });
const ins = (t, w) => { let n = t.r; for (let c of w) n = n[c] = n[c] || {}; n.is = 1; };
const search = (t, w, p = 0) => { let n = t.r; for (let c of w) if (!(n = n[c])) return 0; return p || !!n.is; };
const trie = Trie(); ins(trie, 'app');
console.log(search(trie, 'app'));
