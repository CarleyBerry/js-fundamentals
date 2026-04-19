class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.current = 0;
  }
  visit(url) {
    this.history = this.history.slice(0, this.current + 1);
    this.history.push(url);
    this.current++;
  }
  back(steps) {
    this.current = Math.max(0, this.current - steps);
    return this.history[this.current];
  }
  forward(steps) {
    this.current = Math.min(this.history.length - 1, this.current + steps);
    return this.history[this.current];
  }
}

const bh = new BrowserHistory('homepage.com');
bh.visit('a.com');
bh.visit('b.com');
console.log(bh.back(1));
console.log(bh.forward(1));
