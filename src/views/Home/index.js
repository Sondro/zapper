import React from 'react'
import { ChatConsumer } from './../../context/Chat'

const Home = () => (
  <div>
    <div>Home</div>
    <ChatConsumer>
      {({ history }) => (
        <ul>
          {
            history.map((msg, index) => (
              <li key={index}>{msg.data}</li>
            ))
          }
        </ul>
      )}
    </ChatConsumer>
  </div>
)

export default Home