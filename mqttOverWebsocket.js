// http://www.steves-internet-guide.com/mqtt-websockets/
// Using an External MQTT Broker with Websockets

// If you can’t get websockets on your own broker then you can use as external one like :

// test.mosquitto.org– uses port 8080 un-encrypted and 8081 for websockets over SSL.
// iot.eclipse.org support only encrypted and uses port 443 for websockets over SSL..
// broker.hivemq.com -uses port 8000 for websockets. Websockets over SSL not supported.
// Here is a list of other test brokers with Port numbers: http://www.steves-internet-guide.com/mqtt-hosting-brokers-and-servers/#list




// http://www.steves-internet-guide.com/using-javascript-mqtt-client-websockets/



// <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script> 

let mqtt ;
let reconnectTimeout = 2000;
let host = "192.168.1.206";
let port = 9001;
let options = {timeout:3, onSuccess: onConnect, onFailure: onFailure,};

function onConnect () {
    messge = new Paho.MQTT.Message("hello world");
    mqtt.subscribe("sensor1");
    message.destinationName = "sensor1";
    mqtt.send(message);
}

function onMessageArrived (message) {

}

function onFailure (message) {

}

functon MQTTconnect () {
    console.log("connecting ...");
    mqtt = new Paho.MQTT.Client(host, port, "clientjs");
    mqtt.onMessageArrived = onMessageArrived;
    mqtt.connect(options);

}

MQTTconnect();