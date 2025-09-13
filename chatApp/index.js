const ChatRomm = require('./chatRoom.js');

const chat = new ChatRomm();

chat.on('join', (user)=>{
    console.log(`Hi, ${user} has just joined the chat.`);
})

chat.on('left', user=>{
    console.log(`${user} has just left the chat.`);
})

chat.on('message', (user, message)=>{
    console.log(`${user}: ${message}`)
})

chat.join('Alice');

chat.join('bob');

chat.sendMessage('Alice', 'Hey ! there I am using the chat app.')
chat.sendMessage('bob', 'Hey ! there I am also using the chat app.')

chat.leave('Alice');

chat.sendMessage('Alice', 'This message is sent to Alice after he left the chat.');

chat.leave('bob');