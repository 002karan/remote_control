const centerBtn = document.querySelector('.circle');
const socket = io("http://192.168.0.220:3000");

socket.on('connect', () => {
    console.log('Connected to the server!');


});
socket.on("responseData", (data) => {
    console.log("Received response from server:", data);
});

socket.on('serverBroadcast', (data) => {
    console.log('Received broadcast message from server1:', data);
    // ... handle the received message
  });
centerBtn.addEventListener("click", () => {
    console.log("Sending 'hello' to server...");
    socket.emit("chat message", "play"); // Sending 'hello' to the server
});
