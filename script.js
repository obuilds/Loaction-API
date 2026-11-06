// function curSuccess(pos) {
//     const coords = pos.coords
//     console.log(`latituide: ${pos.coords.latitude}`)
//     console.log(`longitude: ${pos.coords.longitude}`)
//     console.log(`accuracy: ${pos.coords.accuracy}`)
//     console.log(pos)
// }
// function curError(err) {
//     console.log(`Error ${err.code} - ${err.message}`)
// }
// const Curoptions = {
//     enableHighAccuracy : true,
//     timeout: 5000,
//     maximumAge: 0,
// }

// navigator.geolocation.getCurrentPosition(curSuccess, curError, Curoptions)
// console.log('working')
// // console.log(Date())
// const target = {
//     longitude : 7.584592,
//     latitude :  6.46188
// }

// function WatchSuccess(pos) {
//     // console.log(pos)
//     const coords = pos.coords

//     if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
//         console.log('Target Reached')
//         navigator.geolocation.clearWatch(id)
//     }
// }
// function WatchError(err) {
//     console.log(`Error ${err.code} - ${err.message}`)
// }
// const Watchoptions = {
//     enableHighAccuracy : true,
//     timeout: 5000,
//     maximumAge: 0,
// }

// const id = navigator.geolocation.watchPosition(WatchSuccess, WatchError, Watchoptions)
// console.log('working')
// // console.log(Date())


const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map)

navigator.geolocation.getCurrentPosition( function (pos) {
    const lat = pos.coords.latitude
    const lng = pos.coords.longitude

    marker.setLatLng([lat, lng]).update()
    map.setView([lat, lng], 14)

    marker.bindPopup('<strong>You\'re here!</strong>').openPopup()
})
