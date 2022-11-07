import React from 'react';
import Layout from './src/components/Layout/Layout';
import Theme from './src/components/Theme/Theme';

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" })
  setHeadComponents([
    <link 
    key="staatliches"
    rel="preload"
    href="/fonts/Staatliches-Regular.woff"
    as="font"
    type="font/woff"
    crossOrigin='anonymous'
    />
  ])
}

// export const replaceRenderer = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: "en" })
// }

export const wrapPageElement = ({ element, props }) => (
      <>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>;
      </>
    );

export const wrapRootElement = ({ element, props }) => {
      return <Theme {...props}>{element}</Theme>;
    };