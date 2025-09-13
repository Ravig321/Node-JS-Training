const EventEmitter = require('events')


class MyError extends EventEmitter{

    reportError(error){
        console.error(`Error occured: ${error.message}`)
        this.emit('error', error)
    }
}

const error = new MyError();

error.on('error', (err) => {
console.error(`Error is reported: - ${err.message}`)
})

error.reportError(new Error('Code failed during execution...'))




