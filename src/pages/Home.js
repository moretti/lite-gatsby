import React from 'react';

import withHelmet from '../hocs/withHelmet';

function Home() {
  return <div>Home</div>;
}

export default withHelmet({ title: 'Home' })(Home);
