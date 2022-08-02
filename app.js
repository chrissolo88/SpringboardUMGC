function greet() {
    console.log('HI, I LOVE YOU');
}

function diss() {
    console.log('you are the worst');
}

function doubleDiss() {
    diss();
    diss();
}
let funcs = [greet, diss];
const myFunc = function add(x, y) {
    return x + y;
}
function repeatThreeTimes(func) {
    func();
    func();
    func();
}

function repeat(num, func) {
    for(let i=0; i<num; i++) {
        func();
    }
}

function giveBirth() {
    console.log('Giving Birth');
    return function cry() {
        return 'WAAAAAAHHHHH';
    }
}

function makeMultiplyFunc(num) {
    return function mult(x) {
        return num * x;
    }
}

const double = makeMultiplyFunc(2);

const quad = makeMultiplyFunc(4);

greet();
setTimeout(function(){
    diss();
    diss();
    diss();
}, 1000);
greet();

setTimeout(function() {
    console.log('meow');
    console.log('woof');
    console.log('oink');
},3000);

function doTwice(func) {
    func();
    func();
}

doTwice(function() {
    console.log('stop bothering me');
    console.log('please go away')
});


const id = setInterval(diss, 2000);
setTimeout(clearInterval(id),6000);