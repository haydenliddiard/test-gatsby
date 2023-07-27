import React from 'react';
import Layout from './src/components/Layout/Layout';
import Theme from './src/components/Theme/Theme';
import { GlobalStyles } from './src/components/Theme/Theme.styles';
import {AnimatePresence} from 'framer-motion';

export const wrapPageElement = ({ element, props }) => (
  <>
  <GlobalStyles />
  <AnimatePresence mode="wait">
  <Layout {...props}>{element}</Layout>
  </AnimatePresence>
  </>
);
export const wrapRootElement = ({ element, props }) => {
      return <Theme {...props}>{element}</Theme>;
    };