import React from 'react';
import CacheBuster from 'react-cache-buster';
import Home from './Home';
import Loading from './Loading';

const appVersion = require('../package.json').version;

const App = () => {
  // const isProduction = process.env.NODE_ENV === 'production';
  return (
    <CacheBuster
      currentVersion={appVersion}
      isEnabled={true} //If false, the library is disabled.
      isVerboseMode={true} //If true, the library writes verbose logs to console.
      loadingComponent={<Loading />} //If not pass, nothing appears at the time of new version check.
      metaFileDirectory={'.'} //If public assets are hosted somewhere other than root on your server.
      reloadOnDowngrade={true}
    >

      <Home  />

    </CacheBuster>
  );
};

export default App;