import React from 'react';
import Layout from './src/components/Layout/Layout';
import Theme from './src/components/Theme/Theme';
import { GlobalStyles } from './src/components/Theme/Theme.styles';

export const wrapPageElement = ({ element, props }) => (
  <>
  <GlobalStyles />
  <Layout {...props}>{element}</Layout>
  </>
);
export const wrapRootElement = ({ element, props }) => {
      return <Theme {...props}>{element}</Theme>;
    };