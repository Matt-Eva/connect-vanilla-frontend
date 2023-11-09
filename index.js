const socket = io("http://localhost:4000", {
    withCredentials: true
})

socket.on("connect", () =>{
    console.log("connected")
})