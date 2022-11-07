import React from 'react';
import Layout from './src/components/Layout/Layout';
import Theme from './src/components/Theme/Theme';


// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: "en" })
// } 

// export const onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: "en" })
// }
export const replaceRenderer = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
}

export const wrapPageElement = ({ element, props }) => {
      return <Layout {...props}>{element}</Layout>;
    };

export const wrapRootElement = ({ element, props }) => {
      return <Theme {...props}>{element}</Theme>;
    };