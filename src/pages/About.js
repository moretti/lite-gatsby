import React from 'react';

import withHelmet from '../hocs/withHelmet';

function About() {
  return <div>About</div>;
}

export default withHelmet({ title: 'About' })(About);
