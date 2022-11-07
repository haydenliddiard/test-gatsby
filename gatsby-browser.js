import React from 'react';
import Layout from './src/components/Layout/Layout';
import Theme from './src/components/Theme/Theme';

export const wrapPageElement = ({ element, props }) => {
      return <Layout {...props}>{element}</Layout>;
    };
export const wrapRootElement = ({ element, props }) => {
      return <Theme {...props}>{element}</Theme>;
    };