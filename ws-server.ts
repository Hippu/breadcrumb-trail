import * as ws from "ws"
import Ping from "./ts/ping";

let server = new ws.Server({ port: 8080 })
console.log("listening:")

let clients = []

server.on('connection', ws => {
    ws.on('message', msg => {
        let data = JSON.parse(msg) as Ping.pingMessage;
        if (data.message === "ping") {
            console.log("ping!")
            for (let sock of clients) {
                if (ws !== sock) {
                    sock.send(JSON.stringify(data));
                }
            }
        } else {
            console.log(msg);
        }

    });
    clients.push(ws);
})
