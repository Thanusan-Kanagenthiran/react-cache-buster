import React from 'react'
import { useCacheBuster } from 'react-cache-buster';
const Home = (version : any) => {
    const { checkCacheStatus } = useCacheBuster();
  return (
    <div>Home
        <br />
         <button onClick={checkCacheStatus}>Check for new version</button>
         <p>{version}</p>
    </div>
  )
}

export default Home