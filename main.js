

const fs = require('fs');

let fileList = fs.readdirSync('.');
console.log(fileList)

let newFile = fs.writeFileSync('newFile', 'Hello! nodejs!')

const os = require('os');
console.log(os.cpus())



// const Event = require('events');
// const emitter = new Event();

// // on 메소드: 특정 이벤트가 발생했을 때, 실행 할 콜백 등록하기 
// // 코어모듈에서 가져다 쓸 다양한 함수들이 이벤트 기반으로 동작하도록 설계 되었다.
// // 코어모듈의 많은 객체들이 EventEmitter 객체이다

// emitter.on('test', () =>{ 
//   console.log('Success!');
// });

// emitter.emit('test');


// const m = require('./math-tools')
// console.log(m.add(1,2))