export interface locationObject {
    latitude: number,
    longitude: number
}

export function getLocation(): Promise<locationObject> {
    let location = new Promise<locationObject>(function(resolve, reject) {
        if (!("geolocation" in navigator)) {
            reject(new Error("No geolocation available"))
        }

        navigator.geolocation.getCurrentPosition(position => {
            resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        })
    })
    return location
}

getLocation().then(position => {
    document.getElementById("result").innerHTML = JSON.stringify(position);
}).catch(error => {
    console.log(error)
})
