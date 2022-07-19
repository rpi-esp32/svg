let ws;     // use only ws.send()
let mqtt;   // use only mqtt.send()


// websocket
function setupWS() {
    let ws = new WebSocket(url);

    ws.onopen = function (e) {
        console.info("websocket opened.");
        ws.send("hello websocket server, we are connected!");
    }

    ws.onmessage = function (msg) {
        console.info("ws message received.");
        if ("ws" in receiveMedia) { onData(msg); }
    }

    ws.onclose = function (e) {
        if (e.wasClean) {
            console.info("ws connection closed.");
        } else {
            console.info("ws connection died (not clean).");
        }
    }
    
    ws.onerror = function (e) {
            console.error("ws error occured.");
    }

    return ws;
    }
 
if ("ws" in sendMedia || "ws" in receiveMedia) { ws = setupWS(); if ("ws" in sendMedia) { sendMethods.append(ws); }; }



// mqtt

function onMessageArrived(msg) {
    console.info("mqtt message received.");
    onData(msg);
}