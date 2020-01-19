import React from 'react';
import {Card, CardTitle, CardText, Grid, Cell} from  'react-md';

import Layout from  '../components/layout.mjs';

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
              // Gotcha: Requires <code>--out-file-extension</code>.
            },
          },
          {
            summary: 'Supports config files written as modules.',
            fix: {
              title: 'v7.8.0',
              href: 'https://babeljs.io/blog/2020/01/11/7.8.0',
              // Gotcha: Only when using babel's async APIs.
            },
          },
          {
            summary: <><code>require</code> hook gives helpful error for modules</>,
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
            summary: <><code>require</code> hook gives helpful error for modules</>,
          },
        ],
      },
      {
        name: 'TypeScript',
        items: [
          {
            summary: 'CLI can generate module output files.',
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
          { summary: 'Defaults `sourceType` to module.' },
          { summary: <>Doesn't set <code>require</code> etc. as globals within <code>env: node</code>.</> },
        ],
      },
    ],
  },
  {
    name: 'Serving',
    items: [
      {
        name: 'Python',
        items: [
          {
            summary: 'Sets proper MIME type.',
            fix: {
              title: 'v3.7.2',
              href: 'https://docs.python.org/3.7/whatsnew/changelog.html#id48',
            },
          },
        ],
      },
    ],
  },
];

export default () => {
  return <Layout>
    <main className="md-toolbar-relative">
      {CATEGORIES.map(cat =>
        <Grid key={cat.name}>
          <Cell size={12}><h2>{cat.name}</h2></Cell>
          {cat.items.map(project =>
            <Cell size={12}>
            <Card key={project.name}>
              <CardTitle title={project.name} />
              <CardText>
                <ul className="features">
                  {project.items.map(feature =>
                    <li className={feature.fix && 'done'}>
                      {feature.summary}
                    </li>
                  )}
                </ul>
              </CardText>
            </Card>
            </Cell>
          )}
        </Grid>
      )}
    </main>
  </Layout>;
};
