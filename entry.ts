import initMap from "./ts/map";
import Ping from "./ts/ping";
require("./scss/style.scss");
initMap();
Ping.init();
document.getElementById("ping").onclick = Ping.send;
