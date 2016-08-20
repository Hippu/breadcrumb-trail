var sock = new WebSocket("ws://localhost:8080")
sock.onopen = function (event) {
  sock.send("hello from client")
}
export default sock
