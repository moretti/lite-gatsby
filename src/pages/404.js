import React from 'react';

import withHelmet from '../hocs/withHelmet';

function NotFound() {
  return <div>404</div>;
}

export default withHelmet({ title: '404' })(NotFound);
