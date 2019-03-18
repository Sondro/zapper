import React from 'react'
import Routes from './../Routes'

import ChatProvider from './../../context/Chat'

const App = () => (
  <main>
    <ChatProvider>
      <Routes />
    </ChatProvider>
  </main>
)

export default App