const privateData = new WeakMap();

class Counter {
  constructor() {
    privateData.set(this, { counter: 0 });
  }

  increment() {
    const data = privateData.get(this);
    data.counter++;
    console.log(`Counter is now ${data.counter}`);
  }
}

let counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
let counter2   = new Counter();
counter2.increment();