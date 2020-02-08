import React from 'react';
import { Card, CardTitle, CardText, Grid, Cell } from 'react-md';
import PropTypes from 'prop-types';

import Layout from '../components/layout.mjs';

import './index.scss';
import { CATEGORIES } from './_status-list.mjs';
import StatusGoals from './_status-goals.mdx';

function renderBug(bug) {
  const issueMatch = bug.match(/\/(?:issues|pull)\/(\d+)/);
  const label = issueMatch ? `#${issueMatch[1]}` : 'Bug';
  return (
    <a href={bug} rel="noopener">
      {label}
    </a>
  );
}

function Feature({ bug, fix, summary, footnote }) {
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
      {!fix && bug && <> {renderBug(bug)}</>}
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
  bug: PropTypes.string,
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
        <Grid>
          <Cell size={12}>
            <StatusGoals />
          </Cell>
          {CATEGORIES.map(cat => (
            <>
              <Cell size={12}>
                <h2>{cat.name}</h2>
              </Cell>
              {cat.items.map(renderProject)}
            </>
          ))}
        </Grid>
      </main>
    </Layout>
  );
}
