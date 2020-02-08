import React from 'react';

export const CATEGORIES = [
  {
    name: 'Testing',
    items: [
      {
        name: 'Ava',
        items: [
          {
            summary: 'Runs test files from native modules.',
            bug: 'https://github.com/avajs/ava/issues/2293',
          },
          {
            summary: 'Module extension included by default.',
            bug: 'https://github.com/avajs/ava/issues/2293',
          },
        ],
      },
      {
        name: 'Jest',
        items: [
          {
            summary: 'Runs test files from native modules.',
            bug: 'https://github.com/facebook/jest/issues/9430',
          },
          {
            summary: 'Module extension included by default.',
            bug: 'https://github.com/facebook/jest/issues/9430',
          },
          {
            summary: 'Supports watch mode for modules.',
            bug: 'https://github.com/facebook/jest/issues/9430',
          },
          {
            summary: (
              <>
                CommonJS configuration can be provided in a <code>.cjs</code>{' '}
                file.
              </>
            ),
            fix: {
              title: 'v25.1.0',
              href:
                'https://github.com/facebook/jest/blob/master/CHANGELOG.md#2510',
            },
            docs:
              'https://jestjs.io/blog/2020/01/21/jest-25.html#ecmascript-modules-support',
          },
          {
            summary: (
              <>
                ESM configuration can be provided in a <code>.mjs</code> file.
              </>
            ),
            fix: {
              title: 'v25.1.0',
              href:
                'https://github.com/facebook/jest/blob/master/CHANGELOG.md#2510',
            },
            docs:
              'https://jestjs.io/blog/2020/01/21/jest-25.html#ecmascript-modules-support',
          },
        ],
      },
      {
        name: 'Mocha',
        items: [
          {
            summary: 'Runs test files from native modules.',
            bug: 'https://github.com/mochajs/mocha/pull/4038',
          },
          {
            summary: 'Module extension included by default.',
            bug: 'https://github.com/mochajs/mocha/pull/4038',
          },
          { summary: 'Supports watch mode for modules.' },
        ],
      },
      {
        name: 'Tap',
        items: [
          {
            summary: 'Runs test files from native modules.',
            fix: {
              title: 'v12.3.0',
              href: 'https://node-tap.org/changelog/#123-2019-01-22',
              note: (
                <>
                  Requires <code>--no-esm</code> unless all modules use{' '}
                  <code>.mjs</code>.
                </>
              ),
            },
            docs: 'https://node-tap.org/docs/using-with/',
          },
          {
            summary: 'Module extension included by default.',
            fix: {
              title: 'v12.3.0',
              href: 'https://node-tap.org/changelog/#123-2019-01-22',
            },
          },
          {
            summary: 'Supports watch mode for modules.',
            fix: {
              title: 'v12.3.0',
              href: 'https://node-tap.org/changelog/#123-2019-01-22',
            },
          },
          {
            summary: 'Coverage is reported for modules.',
            fix: {
              title: 'v12.3.0',
              href: 'https://node-tap.org/changelog/#123-2019-01-22',
              note: (
                <>
                  Requires the use of <code>c8 tap --no-coverage [...]</code>.
                </>
              ),
            },
          },
        ],
      },
      {
        // https://github.com/testdouble/teenytest
        // ```
        // teenytest 'examples/teenytest/**/*.test.*'
        // ```
        name: 'Teenytest',
        items: [
          {
            summary: 'Runs test files from native modules.',
            bug: 'https://github.com/testdouble/teenytest/issues/52',
          },
          { summary: 'Module extension included by default.' },
        ],
      },
    ],
  },
  {
    name: 'Compilers',
    items: [
      {
        name: 'Babel',
        items: [
          {
            summary: 'CLI can generate module output files.',
            fix: {
              title: 'v7.8.0',
              href: 'https://babeljs.io/blog/2020/01/11/7.8.0',
              note: (
                <>
                  Requires <code>--out-file-extension</code>.
                </>
              ),
            },
          },
          {
            summary: 'Supports config files written as modules.',
            fix: {
              title: 'v7.8.0',
              href: 'https://babeljs.io/blog/2020/01/11/7.8.0',
              note: <>Only when using babel&apos;s async APIs.</>,
            },
          },
          {
            summary: (
              <>
                <code>require</code> hook gives helpful error for modules.
              </>
            ),
          },
          {
            summary: (
              <>
                <code>babel file.mjs</code> works with native modules.
              </>
            ),
          },
        ],
      },
      {
        name: 'CoffeeScript',
        items: [
          {
            summary: 'CLI can generate module output files.',
          },
          {
            summary: (
              <>
                <code>require</code> hook gives helpful error for modules.
              </>
            ),
          },
          {
            summary: (
              <>
                <code>coffee file.mjs</code> works with native modules.
              </>
            ),
          },
        ],
      },
      {
        name: 'TypeScript',
        items: [
          {
            summary: 'CLI can generate module output files.',
          },
          {
            summary: (
              <>
                Doesn&apos;t include CommonJS arguments as globals in{' '}
                <code>@types/node</code>.
              </>
            ),
            bug:
              'https://github.com/DefinitelyTyped/DefinitelyTyped/issues/42201',
          },
          {
            summary: (
              <>
                <code>ts-node file.mjs</code> works with native modules.
              </>
            ),
            bug: 'https://github.com/TypeStrong/ts-node/issues/935',
          },
        ],
      },
    ],
  },
  {
    name: 'Code Style',
    items: [
      {
        name: 'ESLint',
        items: [
          { summary: 'Module extension included by default.' },
          {
            summary: (
              <>
                Defaults <code>sourceType</code> to module.
              </>
            ),
          },
          {
            summary: (
              <>
                Doesn&apos;t include CommonJS arguments as globals in{' '}
                <code>env: node</code>.
              </>
            ),
          },
          {
            summary: (
              <>
                CommonJS configuration can be provided in a <code>.cjs</code>{' '}
                file.
              </>
            ),
            fix: {
              title: 'v6.8.0',
              href: 'https://github.com/eslint/eslint/releases/tag/v6.8.0',
            },
            docs:
              'https://eslint.org/docs/user-guide/configuring#configuration-file-formats',
          },
          {
            summary: (
              <>
                ESM configuration can be provided in a <code>.mjs</code> file.
              </>
            ),
          },
        ],
      },
      {
        name: 'Prettier',
        items: [
          {
            summary: 'Module extension included by default.',
            fix: {
              title: 'v7.8.0',
              href: 'https://babeljs.io/blog/2020/01/11/7.8.0',
              // Gotcha: Only when using babel's async APIs.
            },
          },
          {
            summary: (
              <>
                CommonJS configuration can be provided in a <code>.cjs</code>{' '}
                file.
              </>
            ),
            bug: 'https://github.com/prettier/prettier/issues/7049',
          },
          {
            summary: (
              <>
                ESM configuration can be provided in a <code>.mjs</code> file.
              </>
            ),
            bug: 'https://github.com/prettier/prettier/issues/7049',
          },
        ],
      },
    ],
  },
  {
    name: 'Serving',
    items: [
      {
        name: 'Python 3',
        items: [
          {
            summary: 'Sets proper MIME type for modules.',
            fix: {
              title: 'v3.7.2',
              href: 'https://docs.python.org/3.7/whatsnew/changelog.html#id48',
            },
          },
        ],
      },
      {
        name: 'npx http-server',
        items: [
          {
            summary: 'Sets proper MIME type for modules.',
            fix: true,
          },
        ],
      },
    ],
  },
];
