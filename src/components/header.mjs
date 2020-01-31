import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Toolbar } from 'react-md';

const Header = props => {
  const toolbarTitle = (
    <span>
      <img
        src="/android-chrome-192x192.png"
        align="top"
        width="64"
        height="64"
      />
    </span>
  );
  const actions = [
    <Button flat key="guide" href="/guide">
      Guide
    </Button>,
    <Button flat key="status" href="/status">
      Status
    </Button>,
    <Button flat key="glossary" href="/glossary">
      Glossary
    </Button>,
  ];
  return (
    <>
      <Helmet>
        <title>{props.siteTitle}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <Toolbar
        title={toolbarTitle}
        fixed
        style={{ backgroundColor: '#f7df1e' }}
        actions={actions}
      />
    </>
  );
};

export default Header;
