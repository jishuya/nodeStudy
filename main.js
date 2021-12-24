const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// const myEmitter2 = new EventEmitter();
const obj = { '이름': '지금', '나이': 20, '수강여부': true  }

myEmitter.on('test', (info)=>{
 console.log(info)
})

myEmitter.emit('test', obj)



myEmitter.once('test', ()=>{
  console.log('hahaha')
})


console.log(myEmitter.listeners('test'))


const arr =[]

arr[0] = () => {
  console.log("callback0")
}

arr[1] = () => {
  console.log("callback1")
}

myEmitter.on('test', arr[0])
myEmitter.on('test', arr[1])

myEmitter.off('test', arr[0])

myEmitter.emit('test')


myEmitter.on('test', offTest)
myEmitter.off('test', offTest)

myEmitter.on('test', ()=>{
  console.log("test2")
})

myEmitter.on('test', ()=>{
  console.log("test3")
})

myEmitter2.on('test', ()=>{
  console.log("test4")
})
