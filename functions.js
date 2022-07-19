let onDataSubscribers = [];
let sendDataSubscribers = [];


function onData() {
    console.info("data received from Websocket/BLE/MQTT/LORA");
    // do onDataSubscriber(onDataSubscribers)
}

function sendData() {
    console.info("send message out via WS/BLE/mqtt/lora");
    // do sendDataSubscriber(sendDataSubscribers)
}

function subscribeOnData(func) {
    onDataSubscribers.append(func);
}

function subscribeSendData(func) {
    sendDataSubscribers.append(func);
}