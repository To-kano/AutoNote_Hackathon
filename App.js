import * as React from 'react';
import Navigation from "./Navigation/Navigation";

import {CacheProvider} from "./Context/Cache"

function App(props) {
  return (
    <CacheProvider>
      <Navigation/>
    </CacheProvider>
  );
};

export default App;