import { watch } from 'fs';
import { createServer } from 'http';
import { fileURLToPath } from 'url';

import send from 'send';

const staticPath = fileURLToPath(new URL('./static', import.meta.url));

function sendLiveUpdates(req, res) {
  res.writeHead(200, {
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
  });
  res.write('\n');
  res.flushHeaders();

  watch(staticPath, (event, filename) => {
    res.write(`\
event: message
data: ${JSON.stringify({ event, pathname: `/${filename}` })}

`);
  });
}

createServer((req, res) => {
  const url = new URL(`http://localhost${req.url}`);

  if (url.pathname === '/livereload') {
    sendLiveUpdates(req, res);
    return;
  }

  send(req, url.pathname, {
    root: staticPath,
  }).pipe(res);
}).listen(3000);
