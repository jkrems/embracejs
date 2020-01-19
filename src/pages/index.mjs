import React from 'react';
import {Card, CardTitle, CardText} from  'react-md';

import Layout from  '../components/layout.mjs';

const CATEGORIES = [
  {
    name: 'Compilers',
    items: [
      {
        name: 'Babel',
        items: [
          {
            summary: 'CLI can generate module output files.',
            // --out-file-extension
            // https://babeljs.io/blog/2020/01/11/7.8.0
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
            summary: <><code>require</code> hook gives helpful error when trying to process a module</>,
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
        <section key={cat.name}>
          <h2>{cat.name}</h2>
          {cat.items.map(project =>
            <Card key={project.name}>
              <CardTitle title={project.name} />
              <CardText>
                <ul>
                  {project.items.map(feature =>
                    <li>
                      {feature.summary}
                    </li>
                  )}
                </ul>
              </CardText>
            </Card>
          )}
        </section>
      )}
    </main>
  </Layout>;
};
