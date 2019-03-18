const socket = new WebSocket("ws://localhost:8080/ws")

const connect = callback => {
  console.log("Connecting to Zapper API...")

  socket.onopen = () => {
    console.log("Connection established")
  }

  socket.onmessage = msg => {
    console.log(msg)
    callback(msg)
  }

  socket.onclose = event => {
    console.log("Connection closed: ", event)
  }

  socket.onerror = error => {
    console.log("Error: ", error)
  }
}

const sendMessage = msg => {
  console.log("Sending message: ", msg)
  socket.send(msg)
}

export { connect, sendMessage }