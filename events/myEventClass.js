const EventEmiiter = require('events')


class Chat extends EventEmiiter{
    
sendMessage(msg){
    console.log(`Message Sent: ${msg}`);
        this.emit('sendMessage', msg);
}
}

const chat = new Chat();

chat.on('sendMessage', (msg)=>{
    console.log(`Message Received: ${msg}`);
})

chat.sendMessage('Love you 3000 !!!!')