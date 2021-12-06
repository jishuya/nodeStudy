function add(a, b){
  return a + b;
}

const PI = 3.14;
let author = 'Codeit';

let test = {
  date : '2021-10-07',
  type: ['safetyTest', 'performanceTest'],
  printType() {
    for (const i in this.type){
      console.log(this.type[i]);
    }
  }
}

exports.add = add;
exports.PI = PI;
exports.test = test;
exports.author = author;
