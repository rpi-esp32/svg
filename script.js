// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function() {
//       navigator.serviceWorker
//         .register("/sw.js")
//         .then(res => console.log("service worker registered"))
//         .catch(err => console.log("service worker not registered", err))
//     })
//   }




h1 = document.getElementById('H1')
hh1 = document.getElementById('HH1')

h1.innerHTML = 'inside of h1 tag'
hh1.innerHTML = 'inside of h2 tag'

const doMain = () => {

}



document.addEventListener("DOMContentLoaded", doMain)

