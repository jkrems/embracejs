import { model } from './model.mjs';

function render() {
  document.getElementById('model-value').textContent = `${model}`;
  setTimeout(render, 1000);
}
render();
