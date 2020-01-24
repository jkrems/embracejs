import { spawn } from 'child_process';
import path from 'path';

import chai from 'chai';
import fetch from 'node-fetch';

const { assert } = chai;

function checkHeartbeat(port) {
  const url = `http://127.0.0.1:${port}/heartbeat.txt`;
  const giveUpAt = Date.now() + 30e3;
  const retryAfter = 50;

  return new Promise((resolve, reject) => {
    function attempt() {
      fetch(url)
        .then(res => {
          assert.strictEqual(res.status, 200, 'Unexpected status code');
          return res.text();
        })
        .then(body => {
          assert.strictEqual(body, 'OK\n', 'Unexpected response body');
          resolve();
        })
        .catch(e => {
          if (Date.now() >= giveUpAt) {
            reject(e);
            return;
          }
          setTimeout(attempt, retryAfter);
        });
    }

    attempt();
  });
}

async function checkContentType(port, path, mimeTypes) {
  console.log('Checking %s', path);
  const url = `http://127.0.0.1:${port}${path}`;
  const res = await fetch(url);
  assert.strictEqual(res.status, 200, 'Unexpected status code');
  assert.include(mimeTypes, res.headers.get('content-type'));
}

const JS_MIME_TYPES = [
  'application/javascript',
  'application/javascript; charset=UTF-8',
];

/**
 * @param {number} port
 * @param {string} cmd
 * @param {string[]} args
 */
export async function testServing(port, cmd, args = []) {
  console.log('Running %s', cmd, args);
  const child = spawn(cmd, args, {
    cwd: path.resolve('examples', 'static-serving'),
    stdio: 'inherit',
  });

  await checkHeartbeat(port);

  try {
    await checkContentType(port, '/esm.mjs', JS_MIME_TYPES);
    console.log('OK');
  } catch (e) {
    console.log('Failed', e);
  }

  child.kill();
}

async function main() {
  let port = 3000;

  await testServing(port, 'npx', ['http-server', '-p', `${port}`]);
  ++port;
  console.log('\n\n\n');

  await testServing(port, 'python3', ['-m', 'http.server', `${port}`]);
  ++port;
  console.log('\n\n\n');
}
main().then(console.log, console.error);
