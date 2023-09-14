
import React from 'react';
import CacheBuster from 'react-cache-buster';
import Home from './Home';
import Loading from './Loading';
// import packageJson from '../package.json';
// declare global {
//   var appVersion: string;
// }

// global.appVersion = packageJson.version;
// console.log(appVersion);

const appVersion: any = "1.2.3"

const App = () => {
  // const appVersion = global.appVersion;

  return (
    <CacheBuster
      currentVersion={appVersion}
      isEnabled={true}
      isVerboseMode={true}
      // loadingComponent={<Loading />}
      // metaFileDirectory={'.'}
      // reloadOnDowngrade={true}
    >
      <Home />
    </CacheBuster>
  );
};

export default App;
