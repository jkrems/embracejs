export default function getValue(x = 42) {
  if (typeof x !== 'number') {
    return 0;
  }
  return 42;
}
