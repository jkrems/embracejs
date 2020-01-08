import React from 'react';
import {Card, CardTitle, CardText} from  'react-md';

import Layout from  './layout';

export default ({ children, pageContext }) => {
  return <Layout>
    <Card className="md-toolbar-relative">
      <CardTitle title={pageContext.frontmatter.title} />
      <CardText>
        {children}
      </CardText>
    </Card>
  </Layout>;
};
