class HitCounter {
  constructor() {
    this.hits = [];
  }

  hit(timestamp) {
    this.hits.push(timestamp);
  }

  getHits(timestamp) {
    while (this.hits.length > 0 && timestamp - this.hits[0] >= 300) {
      this.hits.shift();
    }
    return this.hits.length;
  }
}

const hc = new HitCounter();
hc.hit(1);
hc.hit(2);
console.log(hc.getHits(300));
