class ValueGetter {
  constructor(x) {
    this.x = x;
  }

  getResult() {
    if (typeof this.x !== 'number') {
      return 0;
    }
    return 42;
  }
}

export default function getValue(x = 42) {
  const getter = new ValueGetter(x);
  return getter.getResult();
}
