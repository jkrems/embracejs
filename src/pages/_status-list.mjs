import React from 'react';

export const CATEGORIES = [
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
          },
          {
            summary: (
              <>
                <code>ts-node file.mjs</code> works with native modules.
              </>
            ),
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
