import React from 'react';
import Layout from './src/components/Layout/Layout';
import Theme from './src/components/Theme/Theme';
import { GlobalStyles } from './src/components/Theme/Theme.styles';

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" })
  setHeadComponents([
    <link 
    key="BarlowCondensed"
    rel="preload"
    href="/fonts/BarlowCondensed-Light.woff2"
    as="font"
    type="font/woff2"
    crossOrigin='anonymous'
    />,
    <link 
    key="Montserrat"
    rel="preload"
    href="/fonts/Montserrat-MediumItallic.woff2"
    as="font"
    type="font/woff2"
    crossOrigin='anonymous'
    />

  ])
}

export const wrapPageElement = ({ element, props }) => (
      <>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>;
      </>
    );

export const wrapRootElement = ({ element, props }) => {
      return <Theme {...props}>{element}</Theme>;
    };