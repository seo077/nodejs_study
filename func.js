// const value = require('./var');
// const odd = value.odd;
// const even = value.even;

const {odd, even} = require('./var');

// import {odd, even} from './var'; // ES2015 js 자체 모듈 시스템

function checkOddOrEven(num){
    if(num % 2){ // 홀수
        return odd;
    }

    return even;   
}

module.exports = checkOddOrEven;

//export default {checkOddOrEven}; // ES2015 js 자체 모듈 시스템