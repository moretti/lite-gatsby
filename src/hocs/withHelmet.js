import React from 'react';
import { Helmet } from 'react-helmet';

export default function withHelmet(helmetProps) {
  return function(BaseComponent) {
    return function(props) {
      return (
        <div>
          <Helmet {...helmetProps} />
          <BaseComponent {...props} />
        </div>
      );
    };
  };
}
