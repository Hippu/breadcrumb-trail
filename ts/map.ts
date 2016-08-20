/// <reference path="../typings/globals/google.maps/index.d.ts"/>
import * as loc from "./get_location";

export var map: google.maps.Map;

function initMap() {
    loc.getLocation().then(location => {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: location.latitude, lng: location.longitude },
            zoom: 19,
            disableDefaultUI: true,
            draggable: false,
            scrollwheel: false
        })
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.latitude, location.longitude),
            map: map,
        })
        console.log("map created");
    })
}

export function addMarker(location: loc.locationObject){
    if (map === undefined) {
        console.log("map not initialized")
    } else {
        let position = new google.maps.LatLng(location.latitude, location.longitude)
        let marker = new google.maps.Marker({
            position: position,
            map: map,
        })
        map.setCenter(position)
    }
}


export default initMap
