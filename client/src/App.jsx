import React from 'react'

import {io} from "socket.io-client"

const App = () => {

  const socket = io("http://localhost:3000")  // backend url is passed here

  return (
    <div>App</div>
  )
}
export default App;
