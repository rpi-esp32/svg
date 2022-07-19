let receive = ["ws", "mqtt", "ble", "lora",];   // modify as needed
let send = ["ws", "mqtt", "ble", "lora",];      // modify as needed
let data = ["type", 1, "label", "value", "sender", "receiver", "medium", "topic", "time"]

url = "ws://   "



function onData() {
    console.info("data received from Websocket/BLE/MQTT/LORA");
}

function sendData() {
    console.info("send message out via WS/BLE/mqtt/lora");
}

function setupWS() {
    WS = new WebSocket(url);
} 