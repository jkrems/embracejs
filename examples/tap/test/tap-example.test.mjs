import tap from 'tap';

import actual from '../esm.mjs';
import cjs from '../cjs.js';

tap.test('tap support', t => {
  t.equal(actual(), cjs(21));
  t.end();
});
