const listenerByPath = new Map();

export default function hot(meta, listener) {
  const { pathname } = new URL(meta.url);
  listenerByPath.set(pathname, listener);
}

const source = new EventSource('/livereload');
source.addEventListener('message', message => {
  const { pathname, event } = JSON.parse(message.data);
  if (event !== 'change') return;
  const listener = listenerByPath.get(pathname);

  import(`${pathname}?_t=${Date.now()}`)
    .then(listener)
    .catch(e => {
      console.error('Hot update failed', e);
    });
});
