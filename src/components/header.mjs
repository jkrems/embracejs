import React from 'react';
import {Helmet} from "react-helmet";
import {Toolbar} from 'react-md';

const LOGO_STYLE = {
  fontFamily: 'Source Code Pro',
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: '58px',
};

const BRACE_STYLE = {
  color: '#ccc',
};

const Header = (props) => {
  const logo = <span>
    <span style={LOGO_STYLE}>
      <span style={BRACE_STYLE}>{'{'}</span>
      {'m'}
      <span style={BRACE_STYLE}>{'}'}</span>
      {'js'}
    </span>
  </span>;
  return <>
    <Helmet>
      <title>{props.siteTitle}</title>
    </Helmet>
    <Toolbar title={logo} colored={true} fixed={true} />
  </>;
};

export default Header;
