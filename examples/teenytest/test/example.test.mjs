import assert from 'assert';

class Dog {
  bark(length) {
    return Array.from({ length }, (_, idx) => `Woof #${idx}`);
  }
}

export function beforeEach() {
  this.subject = new Dog('Sam');
}

export const bark = {
  once() {
    assert.deepEqual(this.subject.bark(1), ['Woof #0']);
  },
  twice() {
    assert.deepEqual(this.subject.bark(2), ['Woof #0', 'Woof #1']);
  },
};

export const tag = {
  frontSaysName() {
    assert.equal(this.subject.tag('front'), 'Hi, I am Sam');
  },
  backSaysAddress() {
    assert.equal(this.subject.tag('back'), 'And here is my address');
  },
};
