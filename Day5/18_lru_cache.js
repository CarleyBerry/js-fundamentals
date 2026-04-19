// Challenge 18: LRU Cache
// Run: node 18_lru_cache.js

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // insertion-order Map acts as LRU
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    // Refresh position
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.capacity) {
      // Evict LRU (first inserted = least recently used)
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}

// Tests
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // 1
lru.put(3, 3);           // evicts key 2
console.log(lru.get(2)); // -1
lru.put(4, 4);           // evicts key 1
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 3
console.log(lru.get(4)); // 4
