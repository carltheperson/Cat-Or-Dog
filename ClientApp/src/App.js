import React, { useState } from 'react';
import { MainPage } from './components/MainPage';

export default () => {
  const [map, setMap] = useState("");
  const [ready, setReady] = useState(false);

      return ( 
        <div>
          <h1>🐈 Cat or Dog 🐕</h1>
        {ready
          ? <MainPage map={map} />
          : <div>
              <p>Type a map</p>
              <input onChange={(e) => setMap(e.target.value)} value={map} />
              <button onClick={() => setReady(true)}>Ready</button>
            </div>
        }
        </div>
      )
}
