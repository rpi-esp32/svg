
let data = ["type", 1, "label", "value", "sender", "receiver", "medium", "topic", "time",];
let sendMethods = [];
let sendDataSubscribers = [];

url = "ws://127.0.0.1";




let onDataSubscribers = [];
// 


function onData(msg) {
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

