import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import { connect } from './../services/api'

const ChatContext = createContext(false)

export default class ChatProvider extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  state = {
    history: []
  }

  componentDidMount () {
    connect(msg => {
      this.setState(state => ({
        history: [...state.history, msg]
      }))
    })
  }

  render () {
    const { history } = this.state
    const { children } = this.props

    return (
      <ChatContext.Provider value={{ history }}>
        { children }
      </ChatContext.Provider>
    )
  }
}

export const ChatConsumer = ChatContext.Consumer