import React from 'react'
import { useCacheBuster } from 'react-cache-buster';
const Home = () => {
    const { checkCacheStatus } = useCacheBuster();
  return (
    <div>Home
        <br />
         <button onClick={checkCacheStatus}>
          check version
         </button>

    </div>
  )
}

export default Home