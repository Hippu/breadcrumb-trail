import * as loc from "./get_location";
import * as map from "./map";

export namespace Ping {

    var socket: WebSocket

    export interface pingMessage {
        message: string
        latitude: number
        longitude: number
    }

    export function init() {
        socket = new WebSocket("ws://localhost:8080")
        socket.onopen = event => {
            console.log("connection started")
        }
        socket.onmessage = event => {
            let ping = JSON.parse(event.data) as pingMessage;
            if (ping.message === "ping") {
                receive(ping);
            } else {
                console.log(event.data);
            }
        }
    }

    function receive(msg: pingMessage) {
        alert("Ping received!")
        console.log(msg);
        map.addMarker({
          latitude: msg.latitude,
          longitude: msg.longitude
        })
    }

    export function send() {
        console.log("ping sent!");
        loc.getLocation().then(loc => {
          socket.send(JSON.stringify({
            message: "ping",
            latitude: loc.latitude,
            longitude: loc.longitude
          }))
        })
    }
}

export default Ping;
