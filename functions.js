let receiveMedia = ["ws", "mqtt", "ble", "lora",];   // modify as needed
let sendMedia = ["ws", "mqtt", "ble", "lora",];      // modify as needed
let data = ["type", 1, "label", "value", "sender", "receiver", "medium", "topic", "time",];

url = "ws://127.0.0.1";




let onDataSubscribers = [];
// let sendDataSubscribers = [];


function onData() {
    console.info("data received from Websocket/BLE/MQTT/LORA");
    // do onDataSubscriber(onDataSubscribers)
}

function sendData(msg) {
    console.info("send message out via WS/BLE/mqtt/lora");
    for (sendMethod in sendMethods) { sendMethod.send(msg); }
}

function subscribeOnData(func) {
    onDataSubscribers.append(func);
}

