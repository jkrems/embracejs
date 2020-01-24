import React from 'react';
import { Card, CardTitle, CardText, Grid, Cell } from 'react-md';
import PropTypes from 'prop-types';

import Layout from '../components/layout.mjs';

import './index.scss';

const CATEGORIES = [
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

function Feature({ fix, summary, footnote }) {
  return (
    <li className={fix && 'done'}>
      {summary}
      {fix && fix !== true && (
        <>
          {' '}
          <a href={fix.href} rel="noopener">
            {fix.title}
          </a>
        </>
      )}
      {footnote && <sup>{footnote}</sup>}
    </li>
  );
}
Feature.propTypes = {
  fix: PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  summary: PropTypes.string.isRequired,
  footnote: PropTypes.number,
};

function renderProject(project) {
  let notes = [];
  return (
    <Cell size={6} key={project.name}>
      <Card>
        <CardTitle title={project.name} />
        <CardText>
          <ul className="features">
            {project.items.map(feature => {
              let noteIdx = null;
              if (feature.fix && feature.fix.note) {
                notes.push(feature.fix.note);
                noteIdx = notes.length;
              }
              return (
                <Feature
                  key={feature.summary}
                  footnote={noteIdx}
                  {...feature}
                />
              );
            })}
          </ul>
          {notes.length > 0 && (
            <ol className="footnotes">
              {notes.map((note, idx) => {
                return <li key={idx}>{note}</li>;
              })}
            </ol>
          )}
        </CardText>
      </Card>
    </Cell>
  );
}

export default function FeatureOverview() {
  return (
    <Layout>
      <main className="md-toolbar-relative">
        {CATEGORIES.map(cat => (
          <Grid key={cat.name}>
            <Cell size={12}>
              <h2>{cat.name}</h2>
            </Cell>
            {cat.items.map(renderProject)}
          </Grid>
        ))}
      </main>
    </Layout>
  );
}
