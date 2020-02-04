import hot from './hot.mjs';

export let model = 42;

hot(import.meta, ns => {
  model = ns.model;
});
