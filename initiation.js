let receive = ["ws", "mqtt", "ble", "lora",];   // modify as needed
let send = ["ws", "mqtt", "ble", "lora",];      // modify as needed
let data = ["type", 1, "label", "value", "sender", "receiver", "medium", "topic", "time",];

url = "ws://127.0.0.1";



function setupWS() {
    WS = new WebSocket(url);
} 