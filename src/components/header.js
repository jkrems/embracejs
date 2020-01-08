import React from 'react';
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

const Header = () => {
  const logo = <span>
    <span style={LOGO_STYLE}>
      <span style={BRACE_STYLE}>{'{'}</span>
      {'m'}
      <span style={BRACE_STYLE}>{'}'}</span>
      {'js'}
    </span>
  </span>;
  return <>
    <Toolbar title={logo} colored={true} fixed={true} />
  </>;
};

export default Header;
