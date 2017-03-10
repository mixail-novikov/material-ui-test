import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WebsiteSearch from '../website-search';

const sitesList = [{
  name: 'Website1',
  url: 'https://www.google.com/webhp?hl=en#q={/keyword}&*',
}, {
  name: 'Website2',
  url: 'https://www.bing.com/search?q={/keyword}&qs=n',
}, {
  name: 'Website3',
  url: 'https://search.yahoo.com/search?p={/keyword}&fr=yfp-t',
}];

export default () => (
  <MuiThemeProvider>
    <WebsiteSearch sitesList={sitesList} />
  </MuiThemeProvider>
);
